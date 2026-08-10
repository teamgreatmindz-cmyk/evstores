"use client"

import { useEffect } from "react"
import {
  Bell,
  ChevronRight,
  CreditCard,
  Heart,
  HelpCircle,
  LogOut,
  MapPin,
  Package,
  Settings,
  User,
  X,
} from "lucide-react"

const menuItems = [
  { key: "orders", label: "My Orders", caption: "Track & reorder", icon: Package },
  { key: "addresses", label: "Delivery Addresses", caption: "Home, Work & more", icon: MapPin },
  { key: "payment", label: "Payment Methods", caption: "Cards & wallets", icon: CreditCard },
  { key: "favorites", label: "Saved Items", caption: "Your wishlist", icon: Heart },
  { key: "notifications", label: "Notifications", caption: "Deals & updates", icon: Bell },
  { key: "settings", label: "Settings", caption: "Preferences & privacy", icon: Settings },
  { key: "help", label: "Help & Support", caption: "FAQs & contact us", icon: HelpCircle },
] as const

export function AccountSheet({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-foreground/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Account"
        className={`absolute inset-x-0 bottom-0 mx-auto flex max-h-[92vh] max-w-md flex-col rounded-t-3xl bg-background transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <h2 className="flex items-center gap-2 text-base font-bold">
            <User className="size-5 text-primary" />
            Account
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close account"
            className="flex size-8 items-center justify-center rounded-full border border-border"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              AO
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Adaeze Okafor</p>
              <p className="truncate text-xs text-muted-foreground">
                adaeze.okafor@email.com
              </p>
            </div>
            <button
              type="button"
              className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold"
            >
              Edit
            </button>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { label: "Orders", value: "12" },
              { label: "Points", value: "340" },
              { label: "Vouchers", value: "3" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-2xl border border-border bg-card py-3"
              >
                <span className="text-base font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <ul className="mt-4 flex flex-col gap-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.key}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-2xl border border-border bg-card p-3 text-left transition-transform active:scale-[0.99]"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Icon className="size-4 text-foreground" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold">
                        {item.label}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {item.caption}
                      </span>
                    </span>
                    <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                  </button>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-border py-3.5 text-sm font-semibold text-sale transition-transform active:scale-[0.99]"
          >
            <LogOut className="size-4" />
            Sign out
          </button>

          <p className="mt-4 text-center text-[11px] text-muted-foreground">
            EvFresh · v1.0.0
          </p>
        </div>
      </aside>
    </div>
  )
}
