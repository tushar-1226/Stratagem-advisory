import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-lg">
        {/* Large 404 */}
        <div className="relative mb-6 inline-block">
          <span className="text-[8rem] lg:text-[10rem] font-extrabold text-gray-100 leading-none select-none">
            404
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-2xl lg:text-3xl font-bold text-secondary">
            Page Not Found
          </span>
        </div>

        <p className="text-foreground/65 text-base lg:text-lg mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-foreground font-semibold rounded-xl hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-foreground/50 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: "/about-us", label: "About Us" },
              { href: "/service/market-research", label: "Market Research" },
              { href: "/service/competitive-intelligence", label: "Competitive Intelligence" },
              { href: "/insights", label: "Insights" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary font-medium hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
