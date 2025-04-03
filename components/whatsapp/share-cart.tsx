"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PhoneIcon as WhatsappIcon } from "lucide-react";
import type { CartItem } from "@/components/cart-provider";

// Replace with your WhatsApp number (include country code without +)
const WHATSAPP_NUMBER = "2348130324506";

interface WhatsAppCartShareProps {
  cart: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export default function WhatsAppCartShare({
  cart,
  subtotal,
  shipping,
  total,
  variant = "default",
  size = "default",
  className = "",
}: WhatsAppCartShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleShare = () => {
    // Format cart items
    const itemsList = cart
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} - $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    // Format cart summary
    const cartSummary = `
*My Shopping Cart*

${itemsList}

Subtotal: $${subtotal.toFixed(2)}
Shipping: ${shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
*Total: $${total.toFixed(2)}*
`;
    const customMessage = message.trim() ? `\n\nMessage: ${message}` : "";
    const fullMessage = cartSummary + customMessage;

    // Create WhatsApp URL with encoded message
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      fullMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Close the dialog
    setIsOpen(false);
    setMessage("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <WhatsappIcon className="mr-2 h-4 w-4" />
          Share Cart to WhatsApp
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Cart to WhatsApp</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h3 className="font-medium">Cart Summary</h3>
            <div className="rounded-md border p-3">
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t mt-2 pt-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold mt-1">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Add a message (optional)</h3>
            <Textarea
              placeholder="I'm interested in these items. Can you provide more information?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
          </div>

          <Button onClick={handleShare} className="w-full">
            <WhatsappIcon className="mr-2 h-4 w-4" />
            Buy items in Cart Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
