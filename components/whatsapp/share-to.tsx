"use client";

import { SetStateAction, useState } from "react";
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
import type { Product } from "../types/index";

// Replace with your WhatsApp number (include country code without +)
const WHATSAPP_NUMBER = "23430324506";

interface WhatsAppShareProps {
  product: Product;
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

export default function WhatsAppShare({
  product,
  size = "default",
}: WhatsAppShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleShare = () => {
    const productInfo = `
I'm interested in this product:
*${product.name}*
Price: $${product.price.toFixed(2)}
ID: ${product.id}
`;
    const customMessage = message.trim()
      ? `\n\nCustom message: ${message}`
      : "";
    const fullMessage = productInfo + customMessage;

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
        <Button
          variant="outline"
          size={size}
          className="bg-green-500 text-white"
        >
          <WhatsappIcon className="mr-2 h-4 w-4 " color="green" />
          Buy Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share to WhatsApp</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h3 className="font-medium">Product</h3>
            <div className="flex items-center gap-3 rounded-md border p-3">
              <div className="flex-1">
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-muted-foreground">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Add a message (optional)</h3>
            <Textarea
              placeholder="I'd like to know more about this product..."
              value={message}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setMessage(e.target.value)
              }
              rows={3}
            />
          </div>

          <Button onClick={handleShare} className="w-full">
            <WhatsappIcon className="mr-2 h-4 w-4" />
            Send via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
