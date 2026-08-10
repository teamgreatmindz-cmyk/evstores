"use client"

import { categories, type Category } from "@/lib/products"
import { cn } from "@/lib/utils"

export type CategoryFilter = "All" | Category

export function CategoryTabs({
  active,
  onChange,
}: {
  active: CategoryFilter
  onChange: (value: CategoryFilter) => void
}) {
  const items: CategoryFilter[] = ["All", ...categories]

  return (
    <div className="scrollbar-none flex gap-2 overflow-x-auto px-4 py-3">
      {items.map((item) => {
        const isActive = item === active
        return (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-pressed={isActive}
            className={cn(
              "shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground",
            )}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}
