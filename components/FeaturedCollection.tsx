import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface FeaturedCollectionProps {
  title: string;
  description: string;
  image: string;
  link: string;
  alignment?: "left" | "right";
}

export function FeaturedCollection({
  title,
  description,
  image,
  link,
  alignment = "left",
}: FeaturedCollectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {alignment === "right" && (
        <div className="aspect-[4/5] overflow-hidden rounded-lg">
          <Image
            width={200}
            height={200}
            src={image}
            alt={title}
            className="w-full h-full object-cover hover-lift"
          />
        </div>
      )}

      <div
        className={`space-y-4 ${
          alignment === "right" ? "md:pr-12" : "md:pl-12"
        }`}
      >
        <span className="inline-block text-xs uppercase tracking-wider text-gray-500">
          Collection
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-medium">
          {title}
        </h2>
        <p className="text-gray-600">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center text-sm font-medium mt-4 group"
        >
          Explore collection
          <ArrowRight
            size={16}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {alignment === "left" && (
        <div className="aspect-[4/5] overflow-hidden rounded-lg">
          <Image
            width={200}
            height={200}
            src={image}
            alt={title}
            className="w-full h-full object-cover hover-lift"
          />
        </div>
      )}
    </div>
  );
}
