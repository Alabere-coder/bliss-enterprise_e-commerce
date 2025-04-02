import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-display font-medium mb-4">Minimal</h3>
            <p className="text-sm text-gray-600 mb-6 max-w-xs">
              Premium quality products designed with simplicity, functionality
              and elegance in mind.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com" aria-label="Instagram">
                <Instagram size={18} />
              </SocialLink>
              <SocialLink href="https://twitter.com" aria-label="Twitter">
                <Twitter size={18} />
              </SocialLink>
              <SocialLink href="https://facebook.com" aria-label="Facebook">
                <Facebook size={18} />
              </SocialLink>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Shop
            </h4>
            <nav className="flex flex-col space-y-3">
              <FooterLink to="/products/new-arrivals">New Arrivals</FooterLink>
              <FooterLink to="/products/bestsellers">Bestsellers</FooterLink>
              <FooterLink to="/products/on-sale">On Sale</FooterLink>
              <FooterLink to="/products/all">All Products</FooterLink>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Company
            </h4>
            <nav className="flex flex-col space-y-3">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/sustainability">Sustainability</FooterLink>
              <FooterLink to="/stores">Store Locator</FooterLink>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Customer Care
            </h4>
            <nav className="flex flex-col space-y-3">
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/shipping">Shipping & Returns</FooterLink>
              <FooterLink to="/care">Product Care</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Integrity-Media. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={to}
      className="text-sm text-gray-600 hover:text-black transition-colors"
    >
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-black hover:border-gray-300 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
