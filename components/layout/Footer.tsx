export function Footer() {
  return (
    <footer id="contact" className="border-t border-charcoal-700 bg-charcoal-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-display text-2xl text-ivory-100">AURA</span>
          <span className="ml-2 text-[10px] tracking-[0.4em] uppercase text-gold-400">
            Estates
          </span>
          <p className="mt-4 max-w-sm text-sm text-charcoal-300 leading-relaxed">
            A boutique agency representing the world&apos;s most extraordinary
            residences, for those who consider a home the ultimate work of art.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-4">
            Concierge
          </h4>
          <ul className="space-y-2 text-sm text-charcoal-300">
            <li>hello@auraestates.com</li>
            <li>+1 (310) 555-0199</li>
            <li>By private appointment only</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-4">
            Offices
          </h4>
          <ul className="space-y-2 text-sm text-charcoal-300">
            <li>Los Angeles</li>
            <li>New York</li>
            <li>London</li>
            <li>Milan</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <p>© {new Date().getFullYear()} Aura Estates. All rights reserved.</p>
          <p className="tracking-wide">Redefining Luxury Living</p>
        </div>
      </div>
    </footer>
  );
}
