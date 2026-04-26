export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reservation", href: "#reservation" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const FEATURED_MENU = [
  {
    id: 1,
    name: "Signature Cold Brew",
    description: "12-hour slow-steeped coffee with a hint of chocolate and caramel.",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: 2,
    name: "Green Revitalizer",
    description: "Cold-pressed kale, green apple, cucumber, and lemon splash.",
    price: "$6.50",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=800&auto=format&fit=crop",
    category: "Juice"
  },
  {
    id: 3,
    name: "Avocado Sourdough",
    description: "Toasted artisanal sourdough topped with smashed avocado and chili flakes.",
    price: "$12.00",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    category: "Food"
  },
  {
    id: 4,
    name: "Lavender Latte",
    description: "Espresso with steamed milk and organic lavender-infused syrup.",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: 5,
    name: "Sunset Berry Mix",
    description: "A refreshing blend of strawberry, raspberry, and orange juice.",
    price: "$6.00",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop",
    category: "Juice"
  },
  {
    id: 6,
    name: "Truffle Mushroom Pasta",
    description: "Creamy pasta with wild mushrooms and premium black truffle oil.",
    price: "$18.50",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=800&auto=format&fit=crop",
    category: "Food"
  },
];

export const FULL_MENU = {
  Coffee: [
    { name: "Espresso", price: "$3.00", desc: "Pure and intense" },
    { name: "Cappuccino", price: "$4.50", desc: "Classic with velvet foam" },
    { name: "Flat White", price: "$4.50", desc: "Double shot with micro-foam" },
    { name: "V60 Pour Over", price: "$6.00", desc: "Hand-crafted specialty coffee" },
    { name: "Mocha", price: "$5.00", desc: "Espresso with dark chocolate" },
  ],
  Juice: [
    { name: "Pure Orange", price: "$5.00", desc: "100% freshly squeezed" },
    { name: "Tropical Blast", price: "$6.50", desc: "Mango, pineapple, and passionfruit" },
    { name: "Beetroot Glow", price: "$6.50", desc: "Beetroot, carrot, and ginger" },
    { name: "Apple Zest", price: "$5.50", desc: "Green apple with mint" },
  ],
  Food: [
    { name: "Classic Croissant", price: "$4.00", desc: "Buttery and flaky" },
    { name: "Benedict Eggs", price: "$14.00", desc: "With smoked salmon and hollandaise" },
    { name: "Acaí Bowl", price: "$11.00", desc: "Fresh berries and organic granola" },
    { name: "Grilled Halloumi Salad", price: "$13.50", desc: "Quinoa, greens, and lemon dressing" },
  ]
};

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800&auto=format&fit=crop",
];

export const FAQS = [
  {
    question: "What are your opening hours?",
    answer: "We are open Monday to Friday from 7 AM to 9 PM, and weekends from 8 AM to 10 PM."
  },
  {
    question: "Do you offer reservation services?",
    answer: "Yes, you can make a reservation through our website or by calling us directly. We recommend booking 24 hours in advance."
  },
  {
    question: "Is your menu halal-friendly?",
    answer: "Yes, all our ingredients are sourced from halal-certified suppliers, and we have many vegetarian options."
  },
  {
    question: "Is remote work (WFC) allowed?",
    answer: "Absolutely! We provide high-speed Wi-Fi and power outlets at most of our tables for your convenience."
  },
];
