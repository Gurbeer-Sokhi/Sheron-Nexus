import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
  ];

  const linkClasses =
    "relative text-sm text-gray-300 hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1: Logo + Tagline */}
          <div>
            <div className="text-lg font-extrabold text-white">Sheron Nexus</div>
            <p className="mt-2 text-sm text-gray-400">
              Sheron Nexus — Offshore Hiring & Tech Solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={linkClasses}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-200">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 transition-colors hover:text-white">
                <Linkedin className="h-5 w-5 transition-transform duration-200 hover:scale-110" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 transition-colors hover:text-white">
                <Twitter className="h-5 w-5 transition-transform duration-200 hover:scale-110" />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 transition-colors hover:text-white">
                <Github className="h-5 w-5 transition-transform duration-200 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Sheron Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


