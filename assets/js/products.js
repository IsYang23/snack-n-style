const PRODUCTS = [
  // CLOTHES (7)
  {
    id: 1,
    name: "SNS Signature Hoodie",
    category: "clothes",
    price: 54.99,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "https://picsum.photos/seed/sns-hoodie1/500/500",
    badge: "New"
  },
  {
    id: 2,
    name: "Bold Graphic Tee",
    category: "clothes",
    price: 29.99,
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://picsum.photos/seed/sns-tee-bold/500/500",
    badge: "Hot"
  },
  {
    id: 3,
    name: "Street Jogger Pants",
    category: "clothes",
    price: 44.99,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://picsum.photos/seed/sns-jogger1/500/500",
    badge: null
  },
  {
    id: 4,
    name: "Neon Crop Jacket",
    category: "clothes",
    price: 69.99,
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://picsum.photos/seed/sns-jacket-neon/500/500",
    badge: "Limited"
  },
  {
    id: 5,
    name: "SNS Varsity Tee",
    category: "clothes",
    price: 34.99,
    sizes: ["S", "M", "L", "XL"],
    image: "https://picsum.photos/seed/sns-varsity/500/500",
    badge: null
  },
  {
    id: 6,
    name: "Oversized Sweatshirt",
    category: "clothes",
    price: 49.99,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://picsum.photos/seed/sns-sweatshirt/500/500",
    badge: "New"
  },
  {
    id: 7,
    name: "Drop Shoulder Tee",
    category: "clothes",
    price: 27.99,
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://picsum.photos/seed/sns-drop-tee/500/500",
    badge: null
  },

  // SHOES (7)
  {
    id: 8,
    name: "SNS Street Kick",
    category: "shoes",
    price: 89.99,
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    image: "https://picsum.photos/seed/sns-kick1/500/500",
    badge: "Hot"
  },
  {
    id: 9,
    name: "Neon Runner Pro",
    category: "shoes",
    price: 99.99,
    sizes: ["6", "7", "8", "9", "10", "11"],
    image: "https://picsum.photos/seed/sns-runner1/500/500",
    badge: "New"
  },
  {
    id: 10,
    name: "Classic Hi-Top",
    category: "shoes",
    price: 79.99,
    sizes: ["7", "8", "9", "10", "11", "12"],
    image: "https://picsum.photos/seed/sns-hitop1/500/500",
    badge: null
  },
  {
    id: 11,
    name: "Slide Culture",
    category: "shoes",
    price: 34.99,
    sizes: ["6", "7", "8", "9", "10", "11"],
    image: "https://picsum.photos/seed/sns-slides1/500/500",
    badge: "Sale"
  },
  {
    id: 12,
    name: "Urban Low-Top",
    category: "shoes",
    price: 74.99,
    sizes: ["7", "8", "9", "10", "11", "12"],
    image: "https://picsum.photos/seed/sns-lowtop1/500/500",
    badge: null
  },
  {
    id: 13,
    name: "Bold Chunky Sole",
    category: "shoes",
    price: 109.99,
    sizes: ["6", "7", "8", "9", "10", "11"],
    image: "https://picsum.photos/seed/sns-chunky1/500/500",
    badge: "New"
  },
  {
    id: 14,
    name: "SNS Court Classic",
    category: "shoes",
    price: 84.99,
    sizes: ["7", "8", "9", "10", "11", "12"],
    image: "https://picsum.photos/seed/sns-court1/500/500",
    badge: null
  },

  // SNACKS (6)
  {
    id: 15,
    name: "SNS Signature Chips",
    category: "snacks",
    price: 3.99,
    sizes: [],
    image: "https://picsum.photos/seed/sns-chips1/500/500",
    badge: "Fan Fav"
  },
  {
    id: 16,
    name: "Choco Drip Bar",
    category: "snacks",
    price: 2.99,
    sizes: [],
    image: "https://picsum.photos/seed/sns-choco1/500/500",
    badge: "Sweet"
  },
  {
    id: 17,
    name: "Gummy Bear Pack",
    category: "snacks",
    price: 4.49,
    sizes: [],
    image: "https://picsum.photos/seed/sns-gummy1/500/500",
    badge: "Chewy"
  },
  {
    id: 18,
    name: "Butter Cookies Tin",
    category: "snacks",
    price: 7.99,
    sizes: [],
    image: "https://picsum.photos/seed/sns-cookie1/500/500",
    badge: "New"
  },
  {
    id: 19,
    name: "Spicy Crunch Mix",
    category: "snacks",
    price: 4.99,
    sizes: [],
    image: "https://picsum.photos/seed/sns-spicy1/500/500",
    badge: "Hot"
  },
  {
    id: 20,
    name: "Caramel Popcorn Bag",
    category: "snacks",
    price: 5.49,
    sizes: [],
    image: "https://picsum.photos/seed/sns-popcorn1/500/500",
    badge: null
  }
];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id)) || null;
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

function getRelatedProducts(product, count = 4) {
  return PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, count);
}
