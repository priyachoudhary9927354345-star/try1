import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/collection/ProductCard";
import { products } from "@/lib/products";

export function FeaturedCollection() {
  return (
    <section id="collection" className="bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Collection"
          title="Four fragrances, singularly composed."
          description="Each scent is developed in small batches and finished by hand. No reformulations, no seasonal drops — only what earns its place."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.08}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
