export type Category =
  | "Produce"
  | "Dairy & Eggs"
  | "Bakery"
  | "Beverages"
  | "Household"
  | "Personal Care"

export interface Product {
  id: string
  name: string
  category: Category
  price: number
  /** Original price when the item is on sale */
  compareAtPrice?: number
  unit: string
  image: string
  rating: number
  tags?: string[]
}

export const categories: Category[] = [
  "Produce",
  "Dairy & Eggs",
  "Bakery",
  "Beverages",
  "Household",
  "Personal Care",
]

export const products: Product[] = [
  {
    id: "bananas",
    name: "Organic Bananas",
    category: "Produce",
    price: 1.49,
    unit: "per bunch",
    image: "/products/bananas.png",
    rating: 4.8,
    tags: ["Organic"],
  },
  {
    id: "avocados",
    name: "Ripe Avocados",
    category: "Produce",
    price: 2.99,
    compareAtPrice: 3.99,
    unit: "2 pack",
    image: "/products/avocados.png",
    rating: 4.7,
    tags: ["Deal"],
  },
  {
    id: "tomatoes",
    name: "Vine Tomatoes",
    category: "Produce",
    price: 2.29,
    unit: "per lb",
    image: "/products/tomatoes.png",
    rating: 4.6,
  },
  {
    id: "milk",
    name: "Whole Milk",
    category: "Dairy & Eggs",
    price: 3.19,
    unit: "1 gallon",
    image: "/products/milk.png",
    rating: 4.9,
  },
  {
    id: "eggs",
    name: "Free-Range Eggs",
    category: "Dairy & Eggs",
    price: 4.49,
    compareAtPrice: 5.29,
    unit: "dozen",
    image: "/products/eggs.png",
    rating: 4.8,
    tags: ["Deal"],
  },
  {
    id: "bread",
    name: "Artisan Sourdough",
    category: "Bakery",
    price: 3.99,
    unit: "1 loaf",
    image: "/products/bread.png",
    rating: 4.9,
    tags: ["Fresh"],
  },
  {
    id: "orange-juice",
    name: "Fresh Orange Juice",
    category: "Beverages",
    price: 4.79,
    unit: "52 fl oz",
    image: "/products/orange-juice.png",
    rating: 4.7,
  },
  {
    id: "coffee",
    name: "Ground Coffee",
    category: "Beverages",
    price: 8.99,
    compareAtPrice: 10.99,
    unit: "12 oz bag",
    image: "/products/coffee.png",
    rating: 4.8,
    tags: ["Deal"],
  },
  {
    id: "detergent",
    name: "Laundry Detergent",
    category: "Household",
    price: 11.49,
    unit: "64 loads",
    image: "/products/detergent.png",
    rating: 4.6,
  },
  {
    id: "dish-soap",
    name: "Dish Soap",
    category: "Household",
    price: 3.29,
    unit: "24 fl oz",
    image: "/products/dish-soap.png",
    rating: 4.5,
  },
  {
    id: "paper-towels",
    name: "Paper Towels",
    category: "Household",
    price: 6.99,
    unit: "6 rolls",
    image: "/products/paper-towels.png",
    rating: 4.7,
  },
  {
    id: "shampoo",
    name: "Nourishing Shampoo",
    category: "Personal Care",
    price: 5.99,
    unit: "16 fl oz",
    image: "/products/shampoo.png",
    rating: 4.6,
  },
]

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value)
}
