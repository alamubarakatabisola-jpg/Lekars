import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  collection, onSnapshot, doc, setDoc, updateDoc, deleteDoc, writeBatch, getDocs 
} from 'firebase/firestore';
import type { Product } from '../types';
import { productsData as defaultProducts } from '../data/products';
import { db } from '../config/firebase';

interface ProductContextType {
  products: Product[];
  isLoading: boolean;
  addProduct: (productData: Omit<Product, 'id'>) => Promise<Product>;
  updateProduct: (id: string, productData: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  resetToDefaultProducts: () => Promise<void>;
  clearAllProducts: () => Promise<void>;
}

const PRODUCTS_STORAGE_KEY = 'lekarsemir_musical_products_v1';

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load initial cached products:', e);
    }
    return defaultProducts;
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Real-time Firestore Cloud Database listener
  useEffect(() => {
    const productsRef = collection(db, 'products');

    const unsubscribe = onSnapshot(
      productsRef,
      (snapshot) => {
        if (snapshot.empty) {
          // Empty catalog — stay empty, let the admin add products manually
          setProducts([]);
          localStorage.removeItem(PRODUCTS_STORAGE_KEY);
        } else {
          const cloudProducts: Product[] = [];
          snapshot.forEach((docSnapshot) => {
            const data = docSnapshot.data() as Product;
            cloudProducts.push({
              ...data,
              id: docSnapshot.id,
              // Derive available from stockQty automatically
              available: (data.stockQty ?? 1) > 0,
            });
          });

          setProducts(cloudProducts);
          try {
            localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(cloudProducts));
          } catch (e) {
            console.error('Failed to update localStorage cache:', e);
          }
        }
        setIsLoading(false);
      },
      (error) => {
        console.error('Firestore realtime subscription error:', error);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);


  const addProduct = async (productData: Omit<Product, 'id'>): Promise<Product> => {
    const newId = `prod-${Date.now()}`;
    const newProduct: Product = {
      ...productData,
      id: newId,
    };

    // Optimistic local update
    setProducts((prev) => [newProduct, ...prev]);

    // Firestore Cloud write
    try {
      const docRef = doc(db, 'products', newId);
      await setDoc(docRef, newProduct);
    } catch (err) {
      console.error('Error adding product to Firestore:', err);
      throw err;
    }

    return newProduct;
  };

  const updateProduct = async (id: string, updatedFields: Partial<Product>): Promise<void> => {
    // Optimistic local update
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );

    // Firestore Cloud update
    try {
      const docRef = doc(db, 'products', id);
      await updateDoc(docRef, updatedFields);
    } catch (err) {
      console.error('Error updating product in Firestore:', err);
      throw err;
    }
  };

  const deleteProduct = async (id: string): Promise<void> => {
    // Optimistic local delete
    setProducts((prev) => prev.filter((item) => item.id !== id));

    // Firestore Cloud delete
    try {
      const docRef = doc(db, 'products', id);
      await deleteDoc(docRef);
    } catch (err) {
      console.error('Error deleting product from Firestore:', err);
      throw err;
    }
  };

  const resetToDefaultProducts = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const snapshot = await getDocs(collection(db, 'products'));
      const batch = writeBatch(db);
      snapshot.forEach((docSnap) => {
        batch.delete(docSnap.ref);
      });
      defaultProducts.forEach((prod) => {
        const docRef = doc(db, 'products', prod.id);
        batch.set(docRef, prod);
      });
      await batch.commit();
      setProducts(defaultProducts);
      localStorage.removeItem(PRODUCTS_STORAGE_KEY);
    } catch (err) {
      console.error('Error resetting products catalog in Firestore:', err);
      setProducts(defaultProducts);
    } finally {
      setIsLoading(false);
    }
  };

  const clearAllProducts = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const snapshot = await getDocs(collection(db, 'products'));
      const batch = writeBatch(db);
      snapshot.forEach((docSnap) => {
        batch.delete(docSnap.ref);
      });
      await batch.commit();
      setProducts([]);
      localStorage.removeItem(PRODUCTS_STORAGE_KEY);
    } catch (err) {
      console.error('Error clearing all products from Firestore:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        addProduct,
        updateProduct,
        deleteProduct,
        resetToDefaultProducts,
        clearAllProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
