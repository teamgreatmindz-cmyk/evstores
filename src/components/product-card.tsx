"use client"

import Image from "next/image"
import { Plus, Star } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { formatPrice, type Product } from "@/lib/products"
import { cn } from "@/lib/utils"

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const onSale = typeof product.compareAtPrice === "number"

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 448px) 50vw, 224px"
          className="object-cover transition-transform duration-300 group-active:scale-95"
        />
        {product.tags?.map((tag) => (
          <span
            key={tag}
            className={cn(
              "absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
              tag === "Deal"
                ? "bg-sale text-sale-foreground"
                : "bg-primary text-primary-foreground",
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="size-3 fill-primary text-primary" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span aria-hidden>·</span>
          <span>{product.unit}</span>
        </div>

        <h3 className="text-pretty text-sm font-semibold leading-snug">
          {product.name}
        </h3>

        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div className="flex flex-col leading-none">
            <span className="text-base font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {onSale ? (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.compareAtPrice!)}
              </span>
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => addItem(product)}
            aria-label={`Add ${product.name} to cart`}
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform active:scale-90"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
