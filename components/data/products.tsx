import type { Product } from "../types/index";

// Mock product data
const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    description:
      "Premium wireless headphones with active noise cancellation for an immersive audio experience.",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "Active noise cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Built-in microphone for calls",
    ],
    dateAdded: "2023-12-15",
    collectionIds: ["tech-gadgets", "work-from-home"],
  },
  {
    id: "2",
    name: "Slim Fit Cotton T-Shirt",
    description:
      "Comfortable and breathable cotton t-shirt with a modern slim fit design.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "clothing",
    features: [
      "100% organic cotton",
      "Slim fit design",
      "Machine washable",
      "Available in multiple colors",
    ],
    dateAdded: "2023-11-20",
    collectionIds: ["summer-essentials", "eco-friendly"],
  },
  {
    id: "3",
    name: "Smart Home Security Camera",
    description:
      "HD security camera with motion detection, night vision, and smartphone alerts.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "1080p HD video",
      "Motion detection alerts",
      "Night vision",
      "Two-way audio",
    ],
    dateAdded: "2023-10-05",
    collectionIds: ["tech-gadgets", "work-from-home"],
  },
  {
    id: "4",
    name: "Stainless Steel Water Bottle",
    description:
      "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "home",
    features: [
      "Double-wall insulation",
      "BPA-free",
      "Leak-proof lid",
      "24oz capacity",
    ],
    dateAdded: "2023-09-12",
    collectionIds: ["summer-essentials", "eco-friendly", "fitness-gear"],
  },
  {
    id: "5",
    name: "Leather Wallet",
    description:
      "Genuine leather wallet with multiple card slots and RFID blocking technology.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "clothing",
    features: [
      "Genuine leather",
      "RFID blocking",
      "8 card slots",
      "Slim profile design",
    ],
    dateAdded: "2023-08-30",
    collectionIds: ["gift-ideas"],
  },
  {
    id: "6",
    name: "Ceramic Coffee Mug Set",
    description:
      "Set of 4 ceramic coffee mugs with modern design and comfortable handle.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "home",
    features: [
      "Microwave safe",
      "Dishwasher safe",
      "12oz capacity",
      "Set of 4 mugs",
    ],
    dateAdded: "2023-07-15",
    collectionIds: ["work-from-home", "gift-ideas"],
  },

  {
    id: "8",
    name: "Fitness Tracker Watch",
    description:
      "Water-resistant fitness tracker with heart rate monitor and sleep tracking.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "Heart rate monitoring",
      "Sleep tracking",
      "Water resistant",
      "7-day battery life",
    ],
    dateAdded: "2023-05-10",
    collectionIds: ["tech-gadgets", "fitness-gear"],
  },
  // New arrival products
  {
    id: "9",
    name: "Ultra-Slim Laptop Backpack",
    description:
      "Sleek, water-resistant backpack with padded compartments for laptops up to 15.6 inches.",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "accessories",
    features: [
      "Water-resistant material",
      "Padded laptop sleeve",
      "Multiple compartments",
      "Adjustable straps",
    ],
    isNew: true,
    dateAdded: "2024-03-28",
    collectionIds: ["work-from-home"],
  },
  {
    id: "10",
    name: "Smart LED Desk Lamp",
    description:
      "Adjustable desk lamp with multiple brightness levels, color temperatures, and smartphone control.",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "home",
    features: [
      "Touch controls",
      "USB charging port",
      "5 color temperatures",
      "Wireless app control",
    ],
    isNew: true,
    dateAdded: "2024-03-25",
    collectionIds: ["work-from-home", "tech-gadgets"],
  },
  {
    id: "11",
    name: "Bluetooth Portable Speaker",
    description:
      "Compact waterproof speaker with 360° sound and 12-hour battery life.",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "IPX7 waterproof",
      "12-hour battery",
      "Bluetooth 5.2",
      "Built-in microphone",
    ],
    isNew: true,
    dateAdded: "2024-03-20",
    collectionIds: ["summer-essentials", "tech-gadgets"],
  },
  {
    id: "12",
    name: "Organic Cotton Hoodie",
    description:
      "Soft, sustainable hoodie made from 100% organic cotton with a modern fit.",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "clothing",
    features: [
      "100% organic cotton",
      "Kangaroo pocket",
      "Adjustable hood",
      "Ribbed cuffs and hem",
    ],
    isNew: true,
    dateAdded: "2024-03-15",
    collectionIds: ["eco-friendly"],
  },
  {
    id: "13",
    name: "Yoga Mat",
    description:
      "Non-slip, eco-friendly yoga mat with alignment markings for proper positioning.",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "fitness",
    features: [
      "6mm thickness",
      "Non-slip surface",
      "Alignment markings",
      "Carrying strap included",
    ],
    dateAdded: "2023-12-10",
    collectionIds: ["fitness-gear", "eco-friendly"],
  },
  {
    id: "14",
    name: "Bamboo Cutlery Set",
    description:
      "Portable, reusable bamboo cutlery set with carrying case for eco-conscious dining on the go.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "home",
    features: [
      "100% bamboo",
      "Includes fork, knife, spoon, chopsticks",
      "Cotton carrying pouch",
      "Dishwasher safe",
    ],
    dateAdded: "2023-11-05",
    collectionIds: ["eco-friendly", "gift-ideas"],
  },
  {
    id: "15",
    name: "Beach Towel",
    description:
      "Oversized, quick-drying beach towel with vibrant summer patterns.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "home",
    features: [
      "100% cotton",
      "Quick-drying",
      "Sand-resistant",
      '70" x 40" size',
    ],
    dateAdded: "2023-10-15",
    collectionIds: ["summer-essentials"],
  },
  {
    id: "16",
    name: "Adjustable Dumbbell Set",
    description:
      "Space-saving adjustable dumbbells that replace multiple weights with a simple dial system.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "fitness",
    features: [
      "5-50 lbs per dumbbell",
      "Quick adjustment dial",
      "Compact storage",
      "Durable construction",
    ],
    dateAdded: "2023-09-20",
    collectionIds: ["fitness-gear"],
  },
  {
    id: "17",
    name: "Air Fryer",
    description:
      "Digital air fryer with multiple cooking functions and rapid air technology for healthier fried food.",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "home",
    features: [
      "6-quart capacity",
      "8 cooking presets",
      "Digital touchscreen",
      "Dishwasher-safe parts",
    ],
    dateAdded: "2023-08-15",
    collectionIds: ["kitchen-essentials"],
  },
  {
    id: "18",
    name: "Wireless Earbuds",
    description:
      "True wireless earbuds with premium sound quality and comfortable fit.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "Active noise cancellation",
      "24-hour battery life",
      "Sweat-resistant",
      "Touch controls",
    ],
    isNew: true,
    dateAdded: "2024-03-10",
    collectionIds: ["tech-gadgets", "fitness-gear"],
  },
  {
    id: "19",
    name: "Electric Toothbrush",
    description:
      "Advanced electric toothbrush with 3D cleaning action and smart timer.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "health",
    features: [
      "4 cleaning modes",
      "Pressure sensor",
      "2-minute timer",
      "USB charging",
    ],
    dateAdded: "2023-07-22",
    collectionIds: ["gift-ideas"],
  },
  {
    id: "20",
    name: "4K Action Camera",
    description:
      "Compact 4K action camera with waterproof housing and image stabilization.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "4K/30fps video",
      "Waterproof to 40m",
      "Electronic image stabilization",
      "Wi-Fi connectivity",
    ],
    isNew: true,
    dateAdded: "2024-02-28",
    collectionIds: ["tech-gadgets", "summer-essentials"],
  },
  {
    id: "21",
    name: "Memory Foam Pillow",
    description:
      "Ergonomic memory foam pillow that adapts to your head and neck for better sleep.",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "home",
    features: [
      "Certified memory foam",
      "Hypoallergenic",
      "Removable washable cover",
      "Medium firmness",
    ],
    dateAdded: "2023-06-10",
    collectionIds: ["work-from-home"],
  },
  {
    id: "22",
    name: "Smart Scale",
    description:
      "Bluetooth connected scale that tracks weight and body composition metrics.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "health",
    features: [
      "Measures 13 body metrics",
      "Syncs with fitness apps",
      "4-user profiles",
      "Auto recognition",
    ],
    dateAdded: "2023-05-05",
    collectionIds: ["fitness-gear"],
  },
  {
    id: "23",
    name: "Cast Iron Skillet",
    description:
      "Pre-seasoned cast iron skillet for even heat distribution and versatile cooking.",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "home",
    features: [
      "10.25-inch diameter",
      "Pre-seasoned",
      "Oven-safe to 500°F",
      "Dishwasher safe (not recommended)",
    ],
    dateAdded: "2023-04-18",
    collectionIds: ["kitchen-essentials"],
  },
  {
    id: "24",
    name: "Resistance Band Set",
    description:
      "Set of 5 resistance bands with different tension levels for full-body workouts.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "fitness",
    features: [
      "5 resistance levels",
      "Includes door anchor",
      "Portable",
      "Latex-free",
    ],
    isNew: true,
    dateAdded: "2024-02-15",
    collectionIds: ["fitness-gear"],
  },

  {
    id: "26",
    name: "Gaming Mouse",
    description:
      "High-precision gaming mouse with customizable RGB lighting and programmable buttons.",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "16,000 DPI sensor",
      "8 programmable buttons",
      "RGB lighting",
      "Ergonomic design",
    ],
    dateAdded: "2023-02-28",
    collectionIds: ["tech-gadgets"],
  },

  {
    id: "29",
    name: "Reusable Silicone Food Bags",
    description:
      "Set of 5 reusable silicone food storage bags as an eco-friendly alternative to plastic.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "home",
    features: [
      "100% food-grade silicone",
      "Dishwasher safe",
      "Leak-proof seal",
      "Freezer-safe",
    ],
    isNew: true,
    dateAdded: "2024-01-30",
    collectionIds: ["eco-friendly", "kitchen-essentials"],
  },
  {
    id: "30",
    name: "Adjustable Standing Desk",
    description:
      "Electric height-adjustable standing desk with memory presets and sturdy construction.",
    price: 349.99,
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "furniture",
    features: [
      "Electric height adjustment",
      "48 x 30 inch desktop",
      "4 memory presets",
      "Cable management",
    ],
    dateAdded: "2022-11-10",
    collectionIds: ["work-from-home"],
  },

  {
    id: "32",
    name: "The Silent Patient",
    description:
      "A psychological thriller about a woman who shoots her husband and then stops speaking.",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "books",
    features: [
      "Bestselling thriller",
      "Paperback edition",
      "448 pages",
      "Award-winning novel",
    ],
    dateAdded: "2023-10-05",
    collectionIds: ["bestsellers"],
  },
  {
    id: "33",
    name: "Atomic Habits",
    description:
      "A guide to building good habits and breaking bad ones with proven strategies.",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "books",
    features: [
      "Self-help bestseller",
      "320 pages",
      "Practical habit-building tips",
      "Includes workbook exercises",
    ],
    dateAdded: "2023-09-18",
    collectionIds: ["self-improvement", "bestsellers"],
  },
  {
    id: "34",
    name: "Dune",
    description:
      "A sci-fi epic set in a distant future amidst a feudal interstellar society.",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "books",
    features: [
      "Classic sci-fi novel",
      "688 pages",
      "First in a series",
      "Includes glossary",
    ],
    dateAdded: "2023-08-22",
    collectionIds: ["sci-fi", "classics"],
  },
  {
    id: "35",
    name: "The Midnight Library",
    description:
      "A novel about a library between life and death where each book represents a different life path.",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "books",
    features: [
      "Philosophical fiction",
      "304 pages",
      "International bestseller",
      "Thought-provoking",
    ],
    isNew: true,
    dateAdded: "2024-02-10",
    collectionIds: ["bestsellers"],
  },
  {
    id: "36",
    name: "Educated",
    description:
      "A memoir about a woman who grew up in a survivalist family and went on to earn a PhD.",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "books",
    features: [
      "New York Times bestseller",
      "352 pages",
      "Inspirational memoir",
      "Award-winning",
    ],
    dateAdded: "2023-07-15",
    collectionIds: ["memoirs", "bestsellers"],
  },
  {
    id: "37",
    name: "Hydrating Facial Serum",
    description:
      "Lightweight serum with hyaluronic acid for deep hydration and plumping effect.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "beauty",
    features: [
      "Vegan & cruelty-free",
      "Hyaluronic acid formula",
      "Fast-absorbing",
      "For all skin types",
    ],
    isNew: true,
    dateAdded: "2024-03-05",
    collectionIds: ["skincare-essentials"],
  },
  {
    id: "38",
    name: "Matte Liquid Lipstick",
    description:
      "Long-lasting liquid lipstick with a velvety matte finish and rich pigment.",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "beauty",
    features: [
      "12-hour wear",
      "Transfer-proof",
      "10 shades available",
      "Moisturizing formula",
    ],
    dateAdded: "2023-11-12",
    collectionIds: ["makeup-must-haves"],
  },
  {
    id: "39",
    name: "Charcoal Face Mask",
    description:
      "Detoxifying face mask with activated charcoal to purify and clarify skin.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "beauty",
    features: [
      "Deep cleansing",
      "Reduces blackheads",
      "Suitable for oily skin",
      "Paraben-free",
    ],
    dateAdded: "2023-09-30",
    collectionIds: ["skincare-essentials"],
  },
  {
    id: "40",
    name: "Rose Quartz Facial Roller",
    description:
      "Natural rose quartz roller to reduce puffiness and enhance product absorption.",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "beauty",
    features: [
      "Double-ended roller",
      "Cooling effect",
      "Promotes circulation",
      "Includes storage pouch",
    ],
    isNew: true,
    dateAdded: "2024-01-20",
    collectionIds: ["skincare-tools"],
  },
  {
    id: "41",
    name: "Vitamin C Brightening Cream",
    description:
      "Daily moisturizer with vitamin C to brighten skin and reduce dark spots.",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "beauty",
    features: [
      "Antioxidant-rich",
      "Non-greasy formula",
      "SPF 30 protection",
      "Dermatologist-tested",
    ],
    dateAdded: "2023-08-05",
    collectionIds: ["skincare-essentials"],
  },
  {
    id: "42",
    name: "Oversized Hoodie",
    description:
      "Cozy oversized hoodie made from premium cotton fleece for ultimate comfort.",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "clothing",
    features: [
      "80% cotton, 20% polyester",
      "Kangaroo pocket",
      "Relaxed fit",
      "Unisex sizing",
    ],
    isNew: true,
    dateAdded: "2024-03-12",
    collectionIds: ["loungewear", "winter-essentials"],
  },
  {
    id: "43",
    name: "High-Waisted Skinny Jeans",
    description:
      "Stretchy skinny jeans with high-rise waist for a flattering fit.",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "clothing",
    features: [
      "98% cotton, 2% elastane",
      "Machine washable",
      "5-pocket design",
      "Available in 3 washes",
    ],
    dateAdded: "2023-11-05",
    collectionIds: ["denim", "casual-wear"],
  },
  {
    id: "44",
    name: "Yoga Leggings",
    description:
      "High-waisted leggings with moisture-wicking fabric for workouts or casual wear.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "clothing",
    features: [
      "Squat-proof fabric",
      "4-way stretch",
      "Hidden waistband pocket",
      "UPF 50+ sun protection",
    ],
    isNew: true,
    dateAdded: "2024-02-18",
    collectionIds: ["fitness-gear", "activewear"],
  },

  {
    id: "46",
    name: "Quilted Bomber Jacket",
    description:
      "Stylish bomber jacket with quilted lining and water-resistant finish.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "clothing",
    features: [
      "Nylon shell",
      "Zip-front closure",
      "Ribbed cuffs and hem",
      "Faux fur-lined hood (detachable)",
    ],
    dateAdded: "2023-10-15",
    collectionIds: ["outerwear", "fall-collection"],
  },

  {
    id: "48",
    name: "Linen Button-Up Shirt",
    description:
      "Breathable linen shirt with relaxed fit, perfect for warm weather.",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "clothing",
    features: [
      "100% linen",
      "Roll-up sleeve buttons",
      "Chest pocket",
      "Machine washable",
    ],
    isNew: true,
    dateAdded: "2024-04-01",
    collectionIds: ["summer-essentials", "menswear"],
  },
  {
    id: "49",
    name: "Floral Wrap Dress",
    description:
      "Flowy wrap dress with vibrant floral print and adjustable waist tie.",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "clothing",
    features: [
      "Viscose blend",
      "Knee-length",
      "V-neckline",
      "Machine wash cold",
    ],
    dateAdded: "2023-06-10",
    collectionIds: ["summer-essentials", "womenswear"],
  },
  {
    id: "50",
    name: "Slim-Fit Blazer",
    description:
      "Tailored blazer with notch lapel and functional buttons for a polished look.",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "clothing",
    features: [
      "Wool-polyester blend",
      "Two-button closure",
      "Internal pocket",
      "Dry clean only",
    ],
    dateAdded: "2023-08-20",
    collectionIds: ["workwear", "formal"],
  },
  {
    id: "51",
    name: "Silk Blouse",
    description:
      "Elegant silk blouse with French cuffs and delicate mother-of-pearl buttons.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "clothing",
    features: [
      "100% mulberry silk",
      "Classic collar",
      "Hand wash recommended",
      "Timeless neutral colors",
    ],
    isNew: true,
    dateAdded: "2024-01-05",
    collectionIds: ["workwear", "womenswear"],
  },
  {
    id: "52",
    name: "Flagship Smartphone (128GB)",
    description:
      "Latest flagship smartphone with 6.7-inch AMOLED display and triple-camera system.",
    price: 999.99,
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "128GB storage",
      "5G connectivity",
      "IP68 water resistance",
      "Wireless charging",
    ],
    isNew: true,
    dateAdded: "2024-04-10",
    collectionIds: ["mobile-devices", "new-releases"],
  },
  {
    id: "53",
    name: "Fast Wireless Car Charger",
    description:
      "15W Qi-enabled car charger with anti-slip grip and cooling fan.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "Adjustable clamp",
      "Overheat protection",
      "Works with most phones",
      "Vent mount included",
    ],
    dateAdded: "2023-12-15",
    collectionIds: ["mobile-accessories"],
  },
  {
    id: "54",
    name: "Ultrabook Laptop (14-inch)",
    description:
      "Sleek ultrabook with 11th-gen Intel Core i7 processor and 16GB RAM.",
    price: 1199.99,
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "512GB SSD",
      "14-hour battery",
      "Thunderbolt 4 ports",
      "Backlit keyboard",
    ],
    dateAdded: "2023-11-20",
    collectionIds: ["computers", "work-from-home"],
  },
  {
    id: "55",
    name: "10-inch Android Tablet",
    description:
      "Affordable tablet with Full HD display and octa-core processor.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "64GB storage (expandable)",
      "8MP rear camera",
      "Kid-friendly mode",
      "10-hour battery",
    ],
    isNew: true,
    dateAdded: "2024-02-05",
    collectionIds: ["tablets", "budget-tech"],
  },
  {
    id: "56",
    name: "Over-Ear Studio Headphones",
    description:
      "Professional-grade headphones with crystal-clear sound isolation.",
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "40mm drivers",
      "Foldable design",
      "Detachable cable",
      "Comfortable memory foam",
    ],
    dateAdded: "2023-10-30",
    collectionIds: ["audio-gear", "studio-equipment"],
  },
  {
    id: "57",
    name: "Waterproof Bluetooth Shower Speaker",
    description: "Compact speaker with suction cup for shower or poolside use.",
    price: 35.99,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "IPX7 waterproof",
      "10-hour playtime",
      "Built-in mic",
      "Suction cup mount",
    ],
    dateAdded: "2023-09-12",
    collectionIds: ["audio-gear", "summer-essentials"],
  },
  {
    id: "58",
    name: "Smart Plug with Energy Monitoring",
    description:
      "Wi-Fi-enabled plug to control devices remotely and track energy usage.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "Works with Alexa/Google",
      "Energy reports",
      "Schedule timers",
      "2-pack available",
    ],
    isNew: true,
    dateAdded: "2024-03-18",
    collectionIds: ["smart-home", "energy-saving"],
  },
  {
    id: "60",
    name: "Gaming Keyboard (RGB Mechanical)",
    description:
      "Mechanical keyboard with customizable RGB lighting and anti-ghosting.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "Cherry MX switches",
      "N-key rollover",
      "Detachable wrist rest",
      "Braided cable",
    ],
    dateAdded: "2023-07-10",
    collectionIds: ["gaming-gear"],
  },
  {
    id: "61",
    name: "VR Headset (Standalone)",
    description: "All-in-one VR headset with 6DOF tracking and 128GB storage.",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "4K resolution",
      "Wireless freedom",
      "50+ preloaded games",
      "Adjustable IPD",
    ],
    isNew: true,
    dateAdded: "2024-01-15",
    collectionIds: ["gaming-gear", "new-releases"],
  },
  {
    id: "62",
    name: "Mirrorless Camera (24MP)",
    description:
      "Compact mirrorless camera with 4K video and interchangeable lenses.",
    price: 799.99,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "Kit lens included",
      "5-axis stabilization",
      "Wi-Fi/Bluetooth",
      "10fps burst shooting",
    ],
    dateAdded: "2023-06-05",
    collectionIds: ["photography", "content-creation"],
  },
  {
    id: "63",
    name: "Foldable Drone with 4K Camera",
    description: "Portable drone with 3-axis gimbal and 30-minute flight time.",
    price: 499.99,
    image:
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "1/2.3-inch CMOS sensor",
      "GPS follow mode",
      "Fits in backpack",
      "Beginner-friendly",
    ],
    isNew: true,
    dateAdded: "2024-03-01",
    collectionIds: ["drones", "travel-tech"],
  },
  {
    id: "64",
    name: "Ultra-Wide Curved Monitor",
    description:
      "34-inch curved monitor with 1440p resolution and USB-C connectivity.",
    price: 449.99,
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "100Hz refresh rate",
      "Split-screen software",
      "Height-adjustable stand",
      "AMD FreeSync",
    ],
    dateAdded: "2023-05-20",
    collectionIds: ["work-from-home", "monitors"],
  },
  {
    id: "65",
    name: "Document Scanner (Portable)",
    description:
      "Wireless scanner for receipts, photos, and documents with OCR software.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "Scans to PDF/JPG",
      "Battery-powered",
      "Fits in laptop bag",
      "Cloud integration",
    ],
    dateAdded: "2023-04-12",
    collectionIds: ["work-from-home", "small-business"],
  },

  {
    id: "67",
    name: "Blood Pressure Monitor (Arm Cuff)",
    description: "Clinically validated Bluetooth monitor with app tracking.",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    category: "electronics",
    features: [
      "Irregular heartbeat detection",
      "2-user memory",
      "FDA-approved",
      "No setup required",
    ],
    dateAdded: "2023-03-15",
    collectionIds: ["health-tech", "senior-living"],
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProducts(
  category?: string,
  sort?: string
): Promise<Product[]> {
  await delay(500); // Simulate network delay

  let filteredProducts = [...products];

  // Apply category filter
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  // Apply sorting
  if (sort) {
    switch (sort) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // Sort by dateAdded (newest first)
        filteredProducts.sort((a, b) => {
          const dateA = a.dateAdded ? new Date(a.dateAdded).getTime() : 0;
          const dateB = b.dateAdded ? new Date(b.dateAdded).getTime() : 0;
          return dateB - dateA;
        });
        break;
      default:
        // Default sorting (featured)
        break;
    }
  }

  return filteredProducts;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await delay(300); // Simulate network delay
  return products.find((product) => product.id === id);
}

export async function getRelatedProducts(
  category: string,
  currentProductId: string
): Promise<Product[]> {
  await delay(500); // Simulate network delay
  return products
    .filter(
      (product) =>
        product.category === category && product.id !== currentProductId
    )
    .slice(0, 8);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await delay(500); // Simulate network delay
  return products.slice(0, 8);
}

export async function getNewArrivals(): Promise<Product[]> {
  await delay(500); // Simulate network delay

  // Get products marked as new or sort by date and get the most recent ones
  const newProducts = products
    .filter((product) => product.isNew)
    .sort((a, b) => {
      const dateA = a.dateAdded ? new Date(a.dateAdded).getTime() : 0;
      const dateB = b.dateAdded ? new Date(b.dateAdded).getTime() : 0;
      return dateB - dateA;
    });

  return newProducts.length > 0
    ? newProducts
    : products
        .sort((a, b) => {
          const dateA = a.dateAdded ? new Date(a.dateAdded).getTime() : 0;
          const dateB = b.dateAdded ? new Date(b.dateAdded).getTime() : 0;
          return dateB - dateA;
        })
        .slice(0, 8);
}

export async function searchProducts(query: string): Promise<Product[]> {
  await delay(500); // Simulate network delay

  const searchTerms = query
    .toLowerCase()
    .split(" ")
    .filter((term) => term.length > 0);

  if (searchTerms.length === 0) {
    return [];
  }

  return products.filter((product) => {
    const searchableText =
      `${product.name} ${product.description} ${product.category}`.toLowerCase();

    // Check if any search term is included in the searchable text
    return searchTerms.some((term) => searchableText.includes(term));
  });
}
