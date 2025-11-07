export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
  category: string;
  description: string;
  images: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  inStock: boolean;
}

export interface Review {
  id: number;
  productId: number;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Gaming Laptop Pro X15",
    price: 1299.99,
    originalPrice: 1699.99,
    rating: 4.5,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    discount: 24,
    category: "Laptops",
    description:
      "Experience ultimate gaming performance with the Pro X15. Featuring the latest Intel Core i9 processor, NVIDIA RTX 4070 graphics, and a stunning 165Hz display for smooth, immersive gameplay.",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800",
    ],
    specifications: [
      { label: "Processor", value: "Intel Core i9-13900HX" },
      { label: "Graphics", value: "NVIDIA RTX 4070 8GB" },
      { label: "RAM", value: "32GB DDR5" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "Display", value: '15.6" QHD 165Hz' },
      { label: "Battery", value: "90Wh, up to 6 hours" },
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    price: 249.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    discount: 29,
    category: "Audio",
    description:
      "Immerse yourself in premium sound with industry-leading noise cancellation. 30-hour battery life and crystal-clear call quality make these perfect for work and travel.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800",
    ],
    specifications: [
      { label: "Driver Size", value: "40mm Dynamic" },
      { label: "Frequency Response", value: "4Hz - 40kHz" },
      { label: "Battery Life", value: "30 hours (ANC on)" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Weight", value: "254g" },
      { label: "Charging", value: "USB-C Fast Charge" },
    ],
    inStock: true,
  },
  {
    id: 3,
    name: '4K Ultra HD Smart TV 55"',
    price: 599.99,
    originalPrice: 899.99,
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    discount: 33,
    category: "TVs",
    description:
      "Transform your living room with stunning 4K HDR visuals and smart features. Built-in streaming apps and voice control for the ultimate entertainment experience.",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
    ],
    specifications: [
      { label: "Screen Size", value: '55"' },
      { label: "Resolution", value: "3840 x 2160 (4K)" },
      { label: "HDR", value: "Dolby Vision, HDR10+" },
      { label: "Refresh Rate", value: "120Hz" },
      { label: "Smart Platform", value: "Android TV" },
      { label: "Ports", value: "4x HDMI 2.1, 3x USB" },
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "Smartphone X Pro 256GB",
    price: 899.99,
    originalPrice: 1099.99,
    rating: 4.7,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    discount: 18,
    category: "Smartphones",
    description:
      "Premium flagship smartphone with pro-grade cameras, lightning-fast performance, and all-day battery life. Capture stunning photos and enjoy seamless multitasking.",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
      "https://images.unsplash.com/photo-1592286927505-c5b07a867f78?w=800",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
    ],
    specifications: [
      { label: "Display", value: '6.7" AMOLED 120Hz' },
      { label: "Processor", value: "Snapdragon 8 Gen 3" },
      { label: "RAM", value: "12GB" },
      { label: "Storage", value: "256GB" },
      { label: "Camera", value: "50MP + 12MP + 10MP" },
      { label: "Battery", value: "5000mAh with 65W charging" },
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "Mechanical Gaming Keyboard RGB",
    price: 129.99,
    rating: 4.4,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    category: "Accessories",
    description:
      "Professional gaming keyboard with mechanical switches, customizable RGB lighting, and programmable keys for the ultimate gaming experience.",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800",
    ],
    specifications: [
      { label: "Switch Type", value: "Cherry MX Red" },
      { label: "Layout", value: "Full-size (104 keys)" },
      { label: "Backlighting", value: "Per-key RGB" },
      { label: "Connection", value: "USB-C Wired" },
      { label: "Polling Rate", value: "1000Hz" },
      { label: "Build", value: "Aluminum frame" },
    ],
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Gaming Mouse",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    discount: 20,
    category: "Accessories",
    description:
      "High-precision wireless gaming mouse with customizable DPI, programmable buttons, and ergonomic design for extended gaming sessions.",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800",
    ],
    specifications: [
      { label: "Sensor", value: "25,600 DPI" },
      { label: "Buttons", value: "8 Programmable" },
      { label: "Battery", value: "Up to 70 hours" },
      { label: "Connection", value: "2.4GHz Wireless" },
      { label: "Weight", value: "88g" },
      { label: "Polling Rate", value: "1000Hz" },
    ],
    inStock: true,
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    rating: 4.6,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    category: "Audio",
    description:
      "Waterproof portable speaker with 360° sound, deep bass, and 20-hour battery life. Perfect for outdoor adventures and pool parties.",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800",
    ],
    specifications: [
      { label: "Power Output", value: "30W" },
      { label: "Battery Life", value: "20 hours" },
      { label: "Waterproof", value: "IP67 rated" },
      { label: "Bluetooth", value: "5.0" },
      { label: "Range", value: "Up to 30m" },
      { label: "Weight", value: "540g" },
    ],
    inStock: true,
  },
  {
    id: 8,
    name: "Smart Watch Series 7",
    price: 399.99,
    originalPrice: 499.99,
    rating: 4.8,
    reviews: 521,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
    discount: 20,
    category: "Wearables",
    description:
      "Advanced fitness tracking, heart rate monitoring, GPS, and smartphone notifications. Stay connected and healthy with our flagship smartwatch.",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800",
    ],
    specifications: [
      { label: "Display", value: '1.9" AMOLED Always-On' },
      { label: "Battery", value: "Up to 7 days" },
      { label: "Water Resistance", value: "5ATM" },
      { label: "Sensors", value: "HR, GPS, SpO2, ECG" },
      { label: "Connectivity", value: "Bluetooth 5.2, Wi-Fi" },
      { label: "Compatibility", value: "iOS & Android" },
    ],
    inStock: true,
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    productId: 1,
    author: "Alex Johnson",
    rating: 5,
    date: "2024-01-15",
    title: "Best gaming laptop I've owned!",
    content:
      "The performance is incredible. Games run smoothly at max settings and the display is gorgeous. The cooling system works great even during long gaming sessions.",
    verified: true,
  },
  {
    id: 2,
    productId: 1,
    author: "Sarah Miller",
    rating: 4,
    date: "2024-01-10",
    title: "Great laptop, minor issues",
    content:
      "Excellent performance for gaming and content creation. Battery life could be better, but that's expected for a gaming laptop. Overall very satisfied.",
    verified: true,
  },
  {
    id: 3,
    productId: 1,
    author: "Mike Chen",
    rating: 5,
    date: "2024-01-05",
    title: "Worth every penny",
    content:
      "After weeks of research, I'm glad I chose this. The build quality is premium and it handles everything I throw at it. Highly recommend!",
    verified: true,
  },
  {
    id: 4,
    productId: 2,
    author: "Emma Wilson",
    rating: 5,
    date: "2024-01-18",
    title: "Amazing noise cancellation",
    content:
      "These headphones are perfect for my daily commute. The noise cancellation is top-notch and the sound quality is exceptional. Battery lasts forever!",
    verified: true,
  },
  {
    id: 5,
    productId: 2,
    author: "David Brown",
    rating: 5,
    date: "2024-01-12",
    title: "Best headphones for travel",
    content:
      "Comfortable for long flights, excellent ANC, and the audio quality is superb. The companion app has great customization options too.",
    verified: true,
  },
];
