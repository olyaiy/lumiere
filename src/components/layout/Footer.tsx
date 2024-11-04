import Link from "next/link";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Instagram className="h-5 w-5" />,
    href: "www.hightidedigital.ca",
    label: "Instagram",
  },
  {
    icon: <Facebook className="h-5 w-5" />,
    href: "www.hightidedigital.ca",
    label: "Facebook",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    href: "www.hightidedigital.ca",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-card px-4 py-16 mt-0">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 text-center">
          {/* Location Section */}
          <div className="space-y-4">
            <h3 className="font-cormorant text-2xl font-semibold text-foreground">Location</h3>
            <address className="not-italic text-muted-foreground">
              <p>1234 Hamilton Street</p>
              <p>Yaletown, Vancouver BC</p>
              <p>V6B 2S8</p>
            </address>
          </div>

          {/* Hours Section */}
          <div className="space-y-4">
            <h3 className="font-cormorant text-2xl font-semibold text-foreground">Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex justify-center gap-4">
                <span>Tuesday - Friday:</span>
                <span>10am - 7pm</span>
              </p>
              <p className="flex justify-center gap-4">
                <span>Saturday:</span>
                <span>9am - 6pm</span>
              </p>
              <p className="flex justify-center gap-4">
                <span>Sunday:</span>
                <span>11am - 5pm</span>
              </p>
              <p className="flex justify-center gap-4">
                <span>Monday:</span>
                <span>Closed</span>
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="font-cormorant text-2xl font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+16045550123">(604) 555-0123</a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@lumierestudio.ca">hello@lumierestudio.ca</a>
              </p>
            </div>
            <div className="flex justify-center gap-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="font-cormorant text-2xl font-semibold text-foreground">Legal</h3>
            <div className="flex flex-col items-center space-y-2 text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cancellation" className="hover:text-primary transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} LUMIÈRE Studio. All rights reserved.</p>
          <p className="mt-2 text-xs">
            All prices in CAD. 24-hour cancellation policy applies.
          </p>
        </div>
      </div>
    </footer>
  );
} 