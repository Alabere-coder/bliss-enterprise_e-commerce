import Link from "next/link";
import Image from "next/image";
import type { Collection } from "./types/index";

export default function CollectionsGrid({
  collections,
}: {
  collections: Collection[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {collections.map((collection) => (
        <Link
          key={collection.id}
          href={`/collections/${collection.slug}`}
          className="group relative overflow-hidden rounded-lg"
        >
          <div className="aspect-[4/3] w-full relative">
            <Image
              src={collection.image || "/placeholder.svg"}
              alt={collection.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold">{collection.name}</h3>
                <p className="text-sm text-white/80 mt-1">
                  {collection.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
