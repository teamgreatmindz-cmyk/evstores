"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/products"

const DELIVERY_FEE = 2.99
const FREE_DELIVERY_THRESHOLD = 25

export function CartSheet() {
  const { isOpen, closeCart, lines, subtotal, setQuantity, removeItem, clear } =
    useCart()

  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  const qualifiesFree = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0
  const delivery = qualifiesFree ? 0 : DELIVERY_FEE
  const total = subtotal + delivery

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-foreground/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute inset-x-0 bottom-0 mx-auto flex max-h-[88vh] max-w-md flex-col rounded-t-3xl bg-background transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <h2 className="flex items-center gap-2 text-base font-bold">
            <ShoppingBag className="size-5 text-primary" />
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex size-8 items-center justify-center rounded-full border border-border"
          >
            <X className="size-4" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-16 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="size-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-semibold">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">
              Add fresh groceries and essentials to get started.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-3">
              <ul className="flex flex-col gap-3">
                {lines.map(({ product, quantity }) => (
                  <li
                    key={product.id}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-2.5"
                  >
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <p className="truncate text-sm font-semibold">
                        {product.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatPrice(product.price)} · {product.unit}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center gap-1 rounded-full border border-border">
                          <button
                            type="button"
                            onClick={() => setQuantity(product.id, quantity - 1)}
                            aria-label={`Decrease ${product.name} quantity`}
                            className="flex size-7 items-center justify-center rounded-full text-muted-foreground"
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="w-5 text-center text-sm font-semibold">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQuantity(product.id, quantity + 1)}
                            aria-label={`Increase ${product.name} quantity`}
                            className="flex size-7 items-center justify-center rounded-full text-muted-foreground"
                          >
                            <Plus className="size-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(product.id)}
                          aria-label={`Remove ${product.name}`}
                          className="ml-auto flex size-7 items-center justify-center rounded-full text-muted-foreground"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                    <span className="shrink-0 self-start text-sm font-bold">
                      {formatPrice(product.price * quantity)}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={clear}
                className="mt-3 text-xs font-medium text-muted-foreground underline underline-offset-4"
              >
                Clear cart
              </button>
            </div>

            <div className="border-t border-border px-4 pb-6 pt-4">
              <dl className="flex flex-col gap-1.5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
                  <dd className="font-medium">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Delivery</dt>
                  <dd className="font-medium">
                    {delivery === 0 ? "Free" : formatPrice(delivery)}
                  </dd>
                </div>
                <div className="mt-1 flex justify-between border-t border-border pt-2 text-base font-bold">
                  <dt>Total</dt>
                  <dd>{formatPrice(total)}</dd>
                </div>
              </dl>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-transform active:scale-[0.99]"
              >
                Checkout · {formatPrice(total)}
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
