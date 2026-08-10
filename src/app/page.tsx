"use client"

import { useMemo, useState } from "react"
import { SearchX } from "lucide-react"
import { CartProvider } from "@/components/cart-provider"
import { CartSheet } from "@/components/cart-sheet"
import { StoreHeader } from "@/components/store-header"
import { PromoBanner } from "@/components/promo-banner"
import { CategoryTabs, type CategoryFilter } from "@/components/category-tabs"
import { ProductCard } from "@/components/product-card"
import { BottomNav } from "@/components/bottom-nav"
import { products } from "@/lib/products"

export default function Page() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<CategoryFilter>("All")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category
      const matchesQuery =
        q === "" ||
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <CartProvider>
      <div className="mx-auto flex min-h-dvh max-w-md flex-col bg-background">
        <StoreHeader query={query} onQueryChange={setQuery} />

        <main className="flex-1 pb-4">
          <div className="pt-4">
            <PromoBanner />
          </div>

          <CategoryTabs active={category} onChange={setCategory} />

          <section className="px-4" aria-label="Products">
            <div className="mb-3 flex items-baseline justify-between">
              <h1 className="text-base font-bold">
                {category === "All" ? "Popular items" : category}
              </h1>
              <span className="text-xs text-muted-foreground">
                {filtered.length} items
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-muted">
                  <SearchX className="size-6 text-muted-foreground" />
                </div>
                <p className="text-sm font-semibold">No products found</p>
                <p className="text-sm text-muted-foreground">
                  Try a different search or category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </main>

        <BottomNav />
        <CartSheet />
      </div>
    </CartProvider>
  )
}
