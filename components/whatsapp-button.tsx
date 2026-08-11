"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  whatsappLink: string
  variant?: "default" | "outline" | "compact"
  className?: string
}

export function WhatsAppButton({
  whatsappLink,
  variant = "default",
  className = "",
}: WhatsAppButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-2 rounded-xl font-semibold transition-transform active:scale-[0.99]"

  const variants = {
    default:
      "w-full bg-[#25D366] text-white py-3.5 text-sm hover:bg-[#20BA5A]",
    outline:
      "w-full border-2 border-[#25D366] text-[#25D366] py-3 text-sm hover:bg-[#25D366]/10",
    compact:
      "px-4 py-2 bg-[#25D366] text-white text-xs hover:bg-[#20BA5A]",
  }

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="size-4" />
      <span>Order via WhatsApp</span>
    </Link>
  )
}
