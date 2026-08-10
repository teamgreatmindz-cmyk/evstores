import { Truck } from "lucide-react"

export function PromoBanner() {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-primary p-5 text-primary-foreground">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide opacity-80">
            Fresh today
          </p>
          <h2 className="mt-1 text-xl font-bold leading-tight text-balance">
            Free delivery on your first order
          </h2>
          <p className="mt-1 text-sm opacity-90">
            On groceries & essentials over $25
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold">
            <Truck className="size-3.5" />
            Use code EVFRESH
          </span>
        </div>
      </div>
    </div>
  )
}
