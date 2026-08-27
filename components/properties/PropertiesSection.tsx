"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { PropertyModal } from "@/components/properties/PropertyModal";
import { properties, Property } from "@/lib/properties";

export function PropertiesSection() {
  const [selected, setSelected] = useState<Property | null>(null);

  return (
    <section id="properties" className="relative bg-charcoal-950 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="The Collection"
            title="Featured Properties"
            description="A hand-selected portfolio of architectural landmarks and private estates, each vetted personally by our acquisitions team."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
