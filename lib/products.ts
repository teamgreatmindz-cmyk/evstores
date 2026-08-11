export type Category =
  | "Produce"
  | "Dairy & Eggs"
  | "Bakery"
  | "Beverages"
  | "Household"
  | "Personal Care"
  | "Drinks"

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
  "Drinks"
]

export const products: Product[] = [
  {
    id: "bananas",
    name: "Organic Bananas",
    category: "Produce",
    price: 2000,
    unit: "per bunch",
    image:
      "https://images.unsplash.com/photo-1574226516831-e1dff420e9a5?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    tags: ["Organic"],
  },
  {
    id: "avocados",
    name: "Ripe Avocados",
    category: "Produce",
    price: 4500,
    compareAtPrice: 6000,
    unit: "2 pack",
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    tags: ["Deal"],
  },
  {
    id: "tomatoes",
    name: "Vine Tomatoes",
    category: "Produce",
    price: 3500,
    unit: "per lb",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: "milk",
    name: "Whole Milk",
    category: "Dairy & Eggs",
    price: 5000,
    unit: "1 gallon",
    image:
      "https://images.unsplash.com/photo-1585238342021-7f1b5a46b7b9?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
  },
  {
    id: "eggs",
    name: "Free-Range Eggs",
    category: "Dairy & Eggs",
    price: 7000,
    compareAtPrice: 8500,
    unit: "dozen",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    tags: ["Deal"],
  },
  {
    id: "bread",
    name: "Artisan Sourdough",
    category: "Bakery",
    price: 6000,
    unit: "1 loaf",
    image:
      "https://images.unsplash.com/photo-1542826438-8ecb19f7e6f3?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    tags: ["Fresh"],
  },
  {
    id: "orange-juice",
    name: "Fresh Orange Juice",
    category: "Beverages",
    price: 7500,
    unit: "52 fl oz",
    image:
      "https://images.unsplash.com/photo-1579896246292-8a4ddf3b6d34?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
  {
    id: "coffee",
    name: "Ground Coffee",
    category: "Beverages",
    price: 14000,
    compareAtPrice: 17500,
    unit: "12 oz bag",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    tags: ["Deal"],
  },
  {
    id: "detergent",
    name: "Laundry Detergent",
    category: "Household",
    price: 18000,
    unit: "64 loads",
    image:
      "https://images.unsplash.com/photo-1581579181113-5f2f4b9f8b5a?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: "dish-soap",
    name: "Dish Soap",
    category: "Household",
    price: 5000,
    unit: "24 fl oz",
    image:
      "https://images.unsplash.com/photo-1582719478176-0a8a1b7d7f2b?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: "paper-towels",
    name: "Paper Towels",
    category: "Household",
    price: 11000,
    unit: "6 rolls",
    image:
      "https://images.unsplash.com/photo-1580913429584-5b9e33c0b3a3?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
  {
    id: "shampoo",
    name: "Nourishing Shampoo",
    category: "Personal Care",
    price: 9500,
    unit: "16 fl oz",
    image:
      "https://images.unsplash.com/photo-1595433707802-7d7a1d7b9a1d?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
]

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value)
}
