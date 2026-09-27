import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <Compass className="mx-auto size-10 text-brand-400" aria-hidden />
      <h1 className="mt-4 font-display text-3xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-500">That chapter or topic isn’t in the curriculum map.</p>
      <Link href="/explore" className="mt-6 inline-block rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
        Explore the curriculum
      </Link>
    </div>
  );
}
