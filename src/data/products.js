export const categories = [
  {
    slug: "dream-cakes",
    name: "Dream Cakes",
    tagline: "Our signature jar cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
  },
  {
    slug: "custom-cakes",
    name: "Custom Cakes",
    tagline: "Built around your story",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80",
  },
  {
    slug: "cupcakes",
    name: "Cupcakes",
    tagline: "One perfect bite",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&q=80",
  },
  {
    slug: "coffee-shakes",
    name: "Coffee / Shakes",
    tagline: "Something to sip",
    image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80",
  },
];

export const products = [
  {
    id: "standard-dream-cake-1lb",
    name: "Standard Dream Cake — 1 Pound",
    category: "dream-cakes",
    price: 1300,
    oldPrice: 1500,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=900&q=80",
    ],
    description:
      "Our founding recipe in a jar: soft vanilla sponge, silky cream, and a dusting of premium imported cocoa. Crack the lid to unwrap the pure joy inside.",
    badge: "Sale",
  },
  {
    id: "double-chocolate-dream-cake-2lb",
    name: "Double Chocolate Dream Cake — 2 Pounds",
    category: "dream-cakes",
    price: 2900,
    oldPrice: 3200,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=900&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80",
    ],
    description:
      "An ultra-decadent twist on our signature Dream Cake — layers of moist chocolate sponge, rich chocolate mousse, and a generous pour of chocolate sauce, all crowned with a crisp cocoa-dusted disk. Crack it open to unleash the flowing chocolate lava inside.",
    badge: "Sale",
  },
  {
    id: "cheesecake-blueberry",
    name: "Cheesecake Slice with Blueberry Topping",
    category: "dream-cakes",
    price: 450,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900&q=80"],
    description:
      "A dense, tangy New York-style cheesecake on a buttery biscuit base, finished with a glossy blueberry compote drizzle.",
  },
  {
    id: "pistachio-fudge-brownie",
    name: "Pistachio Delight Fudge Brownie",
    category: "dream-cakes",
    price: 350,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=80"],
    description:
      "Fudgy, dark and unapologetically rich — topped with warm chocolate ganache and crushed pistachios for a salty-sweet crunch.",
  },
  {
    id: "unicorn-custom-cake",
    name: "Unicorn Butterfly Custom Cake",
    category: "custom-cakes",
    price: 6500,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=900&q=80"],
    description:
      "A two-tier hand-piped celebration cake with sugar butterflies, pastel orbs and a custom topper — designed around your child's favourite story.",
  },
  {
    id: "birthday-number-cake",
    name: "Gold Number Birthday Cake",
    category: "custom-cakes",
    price: 5800,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=900&q=80"],
    description:
      "Clean buttercream finish, hand-painted gold accents and a bold number centrepiece — made to be photographed before it's cut.",
  },
  {
    id: "lilac-swirl-cupcake",
    name: "Lilac Swirl Cupcake",
    category: "cupcakes",
    price: 280,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1587668178277-295251f900ce?w=900&q=80"],
    description: "Vanilla bean cupcake, tall lilac buttercream swirl, and a scatter of sugar pearls.",
  },
  {
    id: "cookies-cream-cupcake",
    name: "Cookies & Cream Cupcake",
    category: "cupcakes",
    price: 300,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=900&q=80"],
    description: "Chocolate cupcake loaded with cookie crumbs, piped high with cookies & cream frosting.",
  },
  {
    id: "salted-caramel-shake",
    name: "Salted Caramel Cookie Shake",
    category: "coffee-shakes",
    price: 650,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1541167760496-1628856ab772?w=900&q=80"],
    description: "Cold-blended vanilla ice cream, salted caramel, whipped cream, and a crushed cookie crown.",
  },
  {
    id: "signature-cocoa-latte",
    name: "Signature Cocoa Latte",
    category: "coffee-shakes",
    price: 480,
    image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=900&q=80",
    gallery: ["https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=900&q=80"],
    description: "Espresso, steamed milk and our house cocoa blend, finished with a dust of imported cocoa powder.",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
export const getProductsByCategory = (slug) => products.filter((p) => p.category === slug);
