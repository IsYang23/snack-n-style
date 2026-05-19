const PRODUCTS = [

  // ─── SHOES (32) ────────────────────────────────────────────────
  {
    id: 1,
    name: "Adidas Low-Top Sneaker — Gray",
    category: "shoes",
    price: 74.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-lowtop-gray.jpeg",
    badge: null
  },
  {
    id: 2,
    name: "Adidas Samba — White/Green",
    category: "shoes",
    price: 89.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-samba-white-green.jpeg",
    badge: "Hot"
  },
  {
    id: 3,
    name: "Adidas Grandcourt — White/Black",
    category: "shoes",
    price: 69.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-grandcourt-white-black.jpeg",
    badge: null
  },
  {
    id: 4,
    name: "Clarks Desert Boot — Burgundy",
    category: "shoes",
    price: 109.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-clarks-desert-burgundy.jpeg",
    badge: null
  },
  {
    id: 5,
    name: "Adidas Slide — Leopard Print",
    category: "shoes",
    price: 34.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-slide-leopard.jpeg",
    badge: "New"
  },
  {
    id: 6,
    name: "Adidas Adilette Slide — White",
    category: "shoes",
    price: 29.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-adilette-white.jpeg",
    badge: null
  },
  {
    id: 7,
    name: "Adidas Runner — Beige",
    category: "shoes",
    price: 79.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-runner-beige.jpeg",
    badge: null
  },
  {
    id: 8,
    name: "Adidas Runner — White/Orange",
    category: "shoes",
    price: 79.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-runner-white-orange.jpeg",
    badge: null
  },
  {
    id: 9,
    name: "Adidas Court — Pink",
    category: "shoes",
    price: 69.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-court-pink.jpeg",
    badge: "New"
  },
  {
    id: 10,
    name: "Adidas Hoops — Black",
    category: "shoes",
    price: 64.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-hoops-black.jpeg",
    badge: null
  },
  {
    id: 11,
    name: "Adidas Grandcourt — Gray",
    category: "shoes",
    price: 69.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-grandcourt-gray.jpeg",
    badge: null
  },
  {
    id: 12,
    name: "Adidas Grandcourt — Black",
    category: "shoes",
    price: 69.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-grandcourt-black.jpeg",
    badge: null
  },
  {
    id: 13,
    name: "Adidas Runner — Black/Red",
    category: "shoes",
    price: 79.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-runner-black-red.jpeg",
    badge: null
  },
  {
    id: 14,
    name: "Adidas Grandcourt — Navy",
    category: "shoes",
    price: 69.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-grandcourt-navy.jpeg",
    badge: null
  },
  {
    id: 15,
    name: "Adidas Runner — Lavender",
    category: "shoes",
    price: 79.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-runner-lavender.jpeg",
    badge: "New"
  },
  {
    id: 16,
    name: "Clarks Chukka Boot — Navy",
    category: "shoes",
    price: 104.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-clarks-chukka-navy.jpeg",
    badge: null
  },
  {
    id: 17,
    name: "Adidas Hoops — White",
    category: "shoes",
    price: 64.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-hoops-white.jpeg",
    badge: null
  },
  {
    id: 18,
    name: "Adidas Retro — White/Gray",
    category: "shoes",
    price: 84.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-retro-white-gray.jpeg",
    badge: null
  },
  {
    id: 19,
    name: "Adidas Grandcourt — Taupe",
    category: "shoes",
    price: 69.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-grandcourt-taupe.jpeg",
    badge: null
  },
  {
    id: 20,
    name: "Adidas Runner — Black/Blue",
    category: "shoes",
    price: 79.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-runner-black-blue.jpeg",
    badge: null
  },
  {
    id: 21,
    name: "Adidas Cloudfoam — Red",
    category: "shoes",
    price: 74.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-cloudfoam-red.jpeg",
    badge: null
  },
  {
    id: 22,
    name: "Adidas Run 60s — White",
    category: "shoes",
    price: 69.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-run60s-white.jpeg",
    badge: null
  },
  {
    id: 23,
    name: "Adidas Cloudfoam — Blue",
    category: "shoes",
    price: 74.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-cloudfoam-blue.jpeg",
    badge: null
  },
  {
    id: 24,
    name: "Adidas Hoops — All Black",
    category: "shoes",
    price: 64.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-hoops-all-black.jpeg",
    badge: null
  },
  {
    id: 25,
    name: "Adidas Retro — Green",
    category: "shoes",
    price: 84.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-retro-green.jpeg",
    badge: null
  },
  {
    id: 26,
    name: "Adidas Runner — Steel Blue",
    category: "shoes",
    price: 79.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-runner-steel-blue.jpeg",
    badge: null
  },
  {
    id: 27,
    name: "Leather Sandal — Tan",
    category: "shoes",
    price: 44.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-sandal-leather-tan.jpeg",
    badge: null
  },
  {
    id: 28,
    name: "Adidas Slide — Navy/Gold",
    category: "shoes",
    price: 34.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-slide-navy-gold.jpeg",
    badge: null
  },
  {
    id: 29,
    name: "Adidas Slide — All Black",
    category: "shoes",
    price: 29.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-slide-all-black.jpeg",
    badge: null
  },
  {
    id: 30,
    name: "Adidas Adilette — White/Black",
    category: "shoes",
    price: 29.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-adilette-white-black.jpeg",
    badge: null
  },
  {
    id: 31,
    name: "Adidas Adilette — Navy",
    category: "shoes",
    price: 29.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-adidas-adilette-navy.jpeg",
    badge: null
  },
  {
    id: 32,
    name: "Rope Sandal — Black",
    category: "shoes",
    price: 39.99,
    sizes: ["6","7","8","9","10","11","12"],
    image: "assets/images/products/shoe-sandal-rope-black.jpeg",
    badge: null
  },

  // ─── CLOTHES — TEES / TOPS (40) ────────────────────────────────
  {
    id: 33,
    name: "Psycho Bunny Tee — Black",
    category: "clothes",
    price: 34.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-psycho-bunny-black.jpeg",
    badge: null
  },
  {
    id: 34,
    name: "Aero ATHL 87 Tee — Gray",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-athl87-gray.jpeg",
    badge: null
  },
  {
    id: 35,
    name: "Aero California Tee — Blue",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-california-blue.jpeg",
    badge: null
  },
  {
    id: 36,
    name: "Aero Star Graphic Tee — Burgundy",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-star-burgundy.jpeg",
    badge: null
  },
  {
    id: 37,
    name: "Aero A87 Tee — Burgundy",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-a87-burgundy.jpeg",
    badge: null
  },
  {
    id: 38,
    name: "Aero Track & Field Tee — Gray",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-track-field-gray.jpeg",
    badge: null
  },
  {
    id: 39,
    name: "Hello Kitty Graphic Tee — Red",
    category: "clothes",
    price: 27.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-hello-kitty-red.jpeg",
    badge: "New"
  },
  {
    id: 40,
    name: "NYC Brooklyn Tee — Red",
    category: "clothes",
    price: 26.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-nyc-brooklyn-red.jpeg",
    badge: null
  },
  {
    id: 41,
    name: "Blessed Graphic Tee — White",
    category: "clothes",
    price: 22.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-blessed-white.jpeg",
    badge: null
  },
  {
    id: 42,
    name: "Blessed Graphic Tee — Black",
    category: "clothes",
    price: 22.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-blessed-black.jpeg",
    badge: null
  },
  {
    id: 43,
    name: "Aero New York Athletics Tee — White",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-newyork-athletics-white.jpeg",
    badge: null
  },
  {
    id: 44,
    name: "KAWS Bear Graphic Tee — Black",
    category: "clothes",
    price: 32.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-kaws-bear-black.jpeg",
    badge: "Hot"
  },
  {
    id: 45,
    name: "Bugs Bunny Graphic Tee — Black",
    category: "clothes",
    price: 27.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-bugs-bunny-black.jpeg",
    badge: null
  },
  {
    id: 46,
    name: "Aero Script 87 Tee — Yellow",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-script87-yellow.jpeg",
    badge: null
  },
  {
    id: 47,
    name: "Wonder Bread Graphic Tee — Black",
    category: "clothes",
    price: 27.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-wonder-bread-black.jpeg",
    badge: null
  },
  {
    id: 48,
    name: "Champion Script Tee — Black",
    category: "clothes",
    price: 29.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-champion-script-black.jpeg",
    badge: null
  },
  {
    id: 49,
    name: "NYC Brooklyn Tee — Cream",
    category: "clothes",
    price: 26.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-nyc-brooklyn-cream.jpeg",
    badge: null
  },
  {
    id: 50,
    name: "NYC Brooklyn Tee — Black",
    category: "clothes",
    price: 26.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-nyc-brooklyn-black.jpeg",
    badge: null
  },
  {
    id: 51,
    name: "Scarface Graphic Tee — Red",
    category: "clothes",
    price: 29.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-scarface-red.jpeg",
    badge: null
  },
  {
    id: 52,
    name: "Champion Big C Tee — White",
    category: "clothes",
    price: 29.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-champion-big-c-white.jpeg",
    badge: null
  },
  {
    id: 53,
    name: "Wonder Bread Graphic Tee — White",
    category: "clothes",
    price: 27.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-wonder-bread-white.jpeg",
    badge: null
  },
  {
    id: 54,
    name: "Scarface Graphic Tee — White",
    category: "clothes",
    price: 29.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-scarface-white.jpeg",
    badge: null
  },
  {
    id: 55,
    name: "Scarface Graphic Tee — Black",
    category: "clothes",
    price: 29.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-scarface-black.jpeg",
    badge: null
  },
  {
    id: 56,
    name: "Hip Hop Legends Tee — Black",
    category: "clothes",
    price: 29.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-hip-hop-legends-black.jpeg",
    badge: "Hot"
  },
  {
    id: 57,
    name: "Champion Script Tee — Red",
    category: "clothes",
    price: 29.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-champion-script-red.jpeg",
    badge: null
  },
  {
    id: 58,
    name: "Aero West Coast Tee — Mint",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-westcoast-mint.jpeg",
    badge: null
  },
  {
    id: 59,
    name: "Aero Script Tee — Blue",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-script-blue.jpeg",
    badge: null
  },
  {
    id: 60,
    name: "Aero 1987 Tee — Red",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-1987-red.jpeg",
    badge: null
  },
  {
    id: 61,
    name: "Aero Logo Tee — Olive",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-logo-olive.jpeg",
    badge: null
  },
  {
    id: 62,
    name: "Aero East Coast Tee — Red",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-eastcoast-red.jpeg",
    badge: null
  },
  {
    id: 63,
    name: "Aero Butterfly Tee — Pink",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-butterfly-pink.jpeg",
    badge: "New"
  },
  {
    id: 64,
    name: "Aero Original Tee — Brown",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-original-brown.jpeg",
    badge: null
  },
  {
    id: 65,
    name: "Aero Cherry Tee — Mauve",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-cherry-mauve.jpeg",
    badge: null
  },
  {
    id: 66,
    name: "Aero West Coast Tee — Black",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-westcoast-black.jpeg",
    badge: null
  },
  {
    id: 67,
    name: "Aero Est. 1987 Tee — Blue",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-est1987-blue.jpeg",
    badge: null
  },
  {
    id: 68,
    name: "Aero New York Tee — Green",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-aero-newyork-green.jpeg",
    badge: null
  },
  {
    id: 69,
    name: "SpongeBob Graphic Tee — Pink",
    category: "clothes",
    price: 27.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-spongebob-pink.jpeg",
    badge: "New"
  },
  {
    id: 70,
    name: "Built Different Tee — Black",
    category: "clothes",
    price: 26.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-built-different-black.jpeg",
    badge: null
  },
  {
    id: 71,
    name: "Gamer Heart Tee — Black",
    category: "clothes",
    price: 26.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-gamer-heart-black.jpeg",
    badge: null
  },
  {
    id: 72,
    name: "Psycho Bunny Tee — White/Pink",
    category: "clothes",
    price: 34.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/tee-psycho-bunny-white-pink.jpeg",
    badge: null
  },

  // ─── CLOTHES — SHORTS (11) ─────────────────────────────────────
  {
    id: 73,
    name: "Athletic Shorts — Black",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/shorts-athletic-black.jpeg",
    badge: null
  },
  {
    id: 74,
    name: "Basketball Shorts — Red",
    category: "clothes",
    price: 27.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/shorts-basketball-red.jpeg",
    badge: null
  },
  {
    id: 75,
    name: "Floral Shorts — Pink",
    category: "clothes",
    price: 27.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/shorts-floral-pink.jpeg",
    badge: "New"
  },
  {
    id: 76,
    name: "Basketball Shorts — Black",
    category: "clothes",
    price: 27.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/shorts-basketball-black.jpeg",
    badge: null
  },
  {
    id: 77,
    name: "Sweat Shorts — Charcoal",
    category: "clothes",
    price: 29.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/shorts-sweat-charcoal.jpeg",
    badge: null
  },
  {
    id: 78,
    name: "Mesh Shorts — Navy",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/shorts-mesh-navy.jpeg",
    badge: null
  },
  {
    id: 79,
    name: "Sport PWR Shorts — Navy",
    category: "clothes",
    price: 29.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/shorts-sport-pwr-navy.jpeg",
    badge: null
  },
  {
    id: 80,
    name: "Basketball Shorts — Navy/Red",
    category: "clothes",
    price: 27.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/shorts-basketball-navy-red.jpeg",
    badge: null
  },
  {
    id: 81,
    name: "Athletic Shorts — Navy",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/shorts-athletic-navy.jpeg",
    badge: null
  },
  {
    id: 82,
    name: "Tropical Print Shorts",
    category: "clothes",
    price: 27.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/shorts-tropical.jpeg",
    badge: "New"
  },
  {
    id: 83,
    name: "Athletic Shorts — Gray",
    category: "clothes",
    price: 24.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/shorts-athletic-gray.jpeg",
    badge: null
  },

  // ─── CLOTHES — OUTERWEAR / OTHER (4) ───────────────────────────
  {
    id: 84,
    name: "Country Girl Hoodie — Pink Camo",
    category: "clothes",
    price: 52.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/hoodie-country-girl-pink-camo.jpeg",
    badge: "Hot"
  },
  {
    id: 85,
    name: "Blank Sweatshirt — Cream",
    category: "clothes",
    price: 39.99,
    sizes: ["XS","S","M","L","XL","2XL"],
    image: "assets/images/products/sweatshirt-blank-cream.jpeg",
    badge: null
  },
  {
    id: 86,
    name: "Gildan Boxer Briefs",
    category: "clothes",
    price: 14.99,
    sizes: ["S","M","L","XL","2XL"],
    image: "assets/images/products/underwear-boxer-briefs-gildan.jpeg",
    badge: null
  },
  {
    id: 87,
    name: "Gildan Briefs",
    category: "clothes",
    price: 12.99,
    sizes: ["S","M","L","XL","2XL"],
    image: "assets/images/products/underwear-briefs-gildan.jpeg",
    badge: null
  },

  // ─── SNACKS (5) ────────────────────────────────────────────────
  {
    id: 88,
    name: "SNS Mystery Snack Pack",
    category: "snacks",
    price: 12.99,
    sizes: [],
    image: "https://picsum.photos/seed/sns-snack1/500/500",
    badge: "Popular"
  },
  {
    id: 89,
    name: "Takis Fuego — Family Pack",
    category: "snacks",
    price: 8.99,
    sizes: [],
    image: "https://picsum.photos/seed/sns-snack2/500/500",
    badge: null
  },
  {
    id: 90,
    name: "Flamin' Hot Cheetos Bag",
    category: "snacks",
    price: 6.99,
    sizes: [],
    image: "https://picsum.photos/seed/sns-snack3/500/500",
    badge: null
  },
  {
    id: 91,
    name: "Oreo Cookies — King Size",
    category: "snacks",
    price: 5.99,
    sizes: [],
    image: "https://picsum.photos/seed/sns-snack4/500/500",
    badge: null
  },
  {
    id: 92,
    name: "Sour Patch Kids — Big Bag",
    category: "snacks",
    price: 7.49,
    sizes: [],
    image: "https://picsum.photos/seed/sns-snack5/500/500",
    badge: null
  }

];
