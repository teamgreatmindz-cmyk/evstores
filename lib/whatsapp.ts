export const WHATSAPP_PHONE = "2348135410111" // Replace with your WhatsApp Business number

export interface CartItem {
  name: string
  price: number
  quantity: number
  unit: string
}

export function generateWhatsAppMessage(items: CartItem[], total: number): string {
  const itemsList = items
    .map((item) => `• ${item.name} (${item.quantity}x ${item.unit}) - ₦${item.price.toLocaleString()}`)
    .join("\n")

  const message = `Hi! I'd like to place an order:\n\n${itemsList}\n\nTotal: ₦${total.toLocaleString()}\n\nPlease confirm availability and delivery details.`

  return encodeURIComponent(message)
}

export function generateProductWhatsAppMessage(
  productName: string,
  quantity: number,
  unit: string,
  price: number,
  totalPrice: number
): string {
  const message = `Hi! I'm interested in:\n\n${productName}\nQuantity: ${quantity} ${unit}\nPrice per unit: ₦${price.toLocaleString()}\nTotal: ₦${totalPrice.toLocaleString()}\n\nPlease confirm availability and delivery details.`

  return encodeURIComponent(message)
}

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${message}`
}
