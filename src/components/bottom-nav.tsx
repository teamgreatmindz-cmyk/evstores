"use client"

import { Home, LayoutGrid, ShoppingBag, User } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { cn } from "@/lib/utils"

const items = [
  { key: "home", label: "Home", icon: Home },
  { key: "categories", label: "Categories", icon: LayoutGrid },
  { key: "cart", label: "Cart", icon: ShoppingBag },
  { key: "account", label: "Account", icon: User },
] as const

export function BottomNav() {
  const { itemCount, openCart } = useCart()

  return (
    <nav className="sticky bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur">
      <ul className="mx-auto flex max-w-md items-stretch justify-around px-2 py-2">
        {items.map((item) => {
          const isCart = item.key === "cart"
          const Icon = item.icon
          return (
            <li key={item.key} className="flex-1">
              <button
                type="button"
                onClick={isCart ? openCart : undefined}
                aria-label={item.label}
                className={cn(
                  "relative flex w-full flex-col items-center gap-1 rounded-lg py-1.5 text-[11px] font-medium transition-colors",
                  item.key === "home"
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                <Icon className="size-5" />
                {isCart && itemCount > 0 ? (
                  <span className="absolute right-3 top-0 flex min-w-4 items-center justify-center rounded-full bg-sale px-1 text-[10px] font-bold text-sale-foreground">
                    {itemCount}
                  </span>
                ) : null}
                {item.label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
