import type { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'prod-1',
    name: 'Pro Solid-Body Electric Guitar',
    description: 'Precision-engineered electric guitar featuring dual humbuckers, mahogany body, maple neck, and smooth rosewood fingerboard. Ideal for studio and stage performance.',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=800&auto=format&fit=crop',
    category: 'Guitar',
    available: true,
    features: [
      'Dual Custom Humbucker Pickups',
      'Solid Mahogany Body with Flame Maple Veneer',
      '22 Medium Jumbo Frets',
      'Precision Die-Cast Locking Tuners'
    ]
  },
  {
    id: 'prod-2',
    name: 'Dreadnought Acoustic Guitar',
    description: 'Rich resonant tone with solid spruce top, mahogany back and sides, built-in piezo pickup and digital preamp tuner.',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=800&auto=format&fit=crop',
    category: 'Guitar',
    available: true,
    features: [
      'Solid Sitka Spruce Top',
      'Integrated Preamp & Tuner',
      'Bone Nut & Compensated Saddle',
      'Natural Satin Finish'
    ]
  },
  {
    id: 'prod-3',
    name: '88-Key Weighted Stage Synthesizer',
    description: 'Professional 88-key graded hammer-action digital stage keyboard with vintage electric piano engines, acoustic grands, and synth controls.',
    price: 950000,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    category: 'Keyboard & Piano',
    available: true,
    features: [
      '88 Graded Hammer Action Keys',
      'Seamless Sound Transition Technology',
      'Dual XLR Balanced Master Outputs',
      'USB Audio & MIDI Interface'
    ]
  },
  {
    id: 'prod-4',
    name: 'Large Diaphragm Studio Condenser Mic',
    description: 'Studio reference condenser microphone with ultra-low self-noise, gold-sputtered 1-inch capsule, and cardioid pickup pattern.',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop',
    category: 'Microphones',
    available: true,
    features: [
      '1-inch Gold-Sputtered Capsule',
      'Cardioid Polar Pattern',
      'Heavy-Duty Shock Mount Included',
      'Ultra-Low Noise Transformerless Circuit'
    ]
  },
  {
    id: 'prod-5',
    name: 'Professional Studio Reference Headphones',
    description: 'Over-ear open-back studio monitoring headphones delivering pristine acoustic accuracy, deep bass extension, and velvet ear cushions.',
    price: 145000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    category: 'Accessories',
    available: true,
    features: [
      '45mm Large-Aperture Drivers',
      'Open-Back Acoustic Design',
      'Detachable Oxygen-Free Copper Cables',
      'Ergonomic Memory Foam Cushions'
    ]
  },
  {
    id: 'prod-6',
    name: '24-Bit / 192kHz USB Audio Interface',
    description: 'High-speed USB-C audio interface with dual low-noise preamps, high-headroom instrument inputs, and zero-latency hardware monitoring.',
    price: 210000,
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=800&auto=format&fit=crop',
    category: 'Audio Equipment',
    available: true,
    features: [
      'Dual Pro-Grade Microphone Preamps',
      '24-bit / 192 kHz AD/DA Converters',
      '+48V Phantom Power for Condensers',
      'Rugged Metal Chassis Construction'
    ]
  },
  {
    id: 'prod-7',
    name: '16-Channel Analog Mixing Console',
    description: 'Professional live & studio mixing console featuring British EQ filters, high-grade preamps, built-in FX processor, and USB audio routing.',
    price: 680000,
    image: 'https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?q=80&w=800&auto=format&fit=crop',
    category: 'Audio Equipment',
    available: true,
    features: [
      '16 Hybrid XLR/TRS Channels',
      '3-Band Parametric Mid EQ',
      'Built-in 24-bit Digital FX Engine',
      'Balanced Main XLR Outputs'
    ]
  },
  {
    id: 'prod-8',
    name: 'Bi-Amplified 8-Inch Studio Monitors (Pair)',
    description: 'Active bi-amped studio reference monitors delivering crystal-clear high frequencies, punchy low-end, and acoustic boundary tuning controls.',
    price: 490000,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop',
    category: 'Audio Equipment',
    available: true,
    features: [
      '140-Watt Class AB Bi-Amplified Design',
      '8-inch Kevlar Low-Frequency Woofer',
      'Waveguide Enclosure for Wide Sweet Spot',
      'Acoustic Room Tuning Switches'
    ]
  },
  {
    id: 'prod-9',
    name: '50W Valve Tube Guitar Combo Amp',
    description: 'Authentic warm tube amplification with dual EL34 power tubes, spring reverb tank, clean/overdrive channels, and 12-inch Celestion speaker.',
    price: 520000,
    image: 'https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=800&auto=format&fit=crop',
    category: 'Guitar',
    available: true,
    features: [
      '12-inch Celestion Vintage Speaker',
      'Dual Channel (Clean & Lead Overdrive)',
      'Real Analog Spring Reverb',
      'Effects Loop & Footswitch Input'
    ]
  },
  {
    id: 'prod-10',
    name: 'Heavy-Duty Pro Microphone Boom Stand',
    description: 'All-metal tripod base boom mic stand with die-cast zinc clutch, integrated cable clips, and vibration isolator rubber feet.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop',
    category: 'Accessories',
    available: true,
    features: [
      'Solid Metal Tripod Base',
      'Telescoping Adjustable Boom Arm',
      'Non-Slip Rubber Footing',
      'Includes Universal Mic Clip'
    ]
  },
  {
    id: 'prod-11',
    name: 'Neutrik XLR Microphone Cable Pack (10m)',
    description: 'Balanced low-capacitance tour-grade microphone cable fitted with genuine Neutrik black gold-plated XLR connectors.',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    category: 'Accessories',
    available: true,
    features: [
      '99.99% Oxygen-Free Copper Conductors',
      'High-Density Braided Shielding',
      'Genuine Neutrik Gold Connectors',
      'Flexible Rubber Outer Jacket'
    ]
  },
  {
    id: 'prod-12',
    name: 'Nickel Wound Electric Guitar Strings (3 Pack)',
    description: 'Precision-wound nickel-plated steel guitar strings providing long-lasting brightness, optimal magnetic response, and balanced tension.',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    category: 'Accessories',
    available: true,
    features: [
      'Light Gauge (.010 - .046)',
      'Corrosion Resistant Hermetic Packaging',
      'Smooth Playability & Stable Tuning',
      'Made with USA High-Carbon Steel'
    ]
  }
];
