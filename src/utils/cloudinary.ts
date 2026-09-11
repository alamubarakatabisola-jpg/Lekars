/**
 * Cloudinary Direct Unsigned Image Upload Helper
 * Cloud Name: dbbsvb9b5
 * Upload Preset: lekars
 */

export interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
}

export const uploadToCloudinary = async (file: File): Promise<string> => {
  const cloudName = "dbbsvb9b5";
  const uploadPreset = "lekars";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || "Failed to upload image to Cloudinary");
  }

  const data: CloudinaryUploadResult = await response.json();
  return data.secure_url;
};
