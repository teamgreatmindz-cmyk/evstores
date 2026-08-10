"use client"

import { MapPin, Search, ShoppingBag, X } from "lucide-react"
import { useCart } from "@/components/cart-provider"

export function StoreHeader({
  query,
  onQueryChange,
}: {
  query: string
  onQueryChange: (value: string) => void
}) {
  const { itemCount, openCart } = useCart()

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <div className="flex items-center justify-between gap-3 px-4 pt-4">
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ShoppingBag className="size-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight">EVStores</p>
            <p className="flex items-center gap-0.5 text-[11px] text-muted-foreground">
              <MapPin className="size-3" />
              Deliver to Downtown
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={openCart}
          aria-label={`Open cart, ${itemCount} items`}
          className="relative flex size-10 items-center justify-center rounded-full border border-border bg-card"
        >
          <ShoppingBag className="size-5" />
          {itemCount > 0 ? (
            <span className="absolute -right-1 -top-1 flex min-w-5 items-center justify-center rounded-full bg-sale px-1 text-[11px] font-bold text-sale-foreground">
              {itemCount}
            </span>
          ) : null}
        </button>
      </div>

      <div className="px-4 pb-3 pt-3">
        <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            type="search"
            inputMode="search"
            placeholder="Search groceries & essentials"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          {query ? (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              aria-label="Clear search"
              className="text-muted-foreground"
            >
              <X className="size-4" />
            </button>
          ) : null}
        </div>
      </div>
    </header>
  )
}
