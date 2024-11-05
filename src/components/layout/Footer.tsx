import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Instagram className="h-5 w-5" />,
    href: "https://www.hightidedigital.ca",
    label: "Instagram",
  },
  {
    icon: <Facebook className="h-5 w-5" />,
    href: "https://www.hightidedigital.ca",
    label: "Facebook",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    href: "https://www.hightidedigital.ca",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-card text-center">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-4 py-20">
        {/* Social Links - Top Section */}
        <div className="mb-16 flex flex-col items-center justify-center space-y-6">
          <h2 className="font-cormorant text-3xl font-medium">Follow Our Journey</h2>
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-primary"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <Separator className="mb-16 bg-border/30" />

        {/* Info Grid - Updated for better mobile responsiveness */}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Location Section */}
          <div className="flex flex-col items-center space-y-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="font-cormorant text-2xl font-medium">Visit Us</h3>
            <address className="not-italic leading-relaxed text-muted-foreground">
              <p>1234 Hamilton Street</p>
              <p>Yaletown, Vancouver BC</p>
              <p>V6B 2S8</p>
            </address>
          </div>

          {/* Hours Section - Updated flex alignment */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-cormorant text-2xl font-medium">Studio Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex flex-col sm:flex-row sm:justify-center sm:gap-4">
                <span className="font-medium">Tuesday - Friday</span>
                <span>10am - 7pm</span>
              </p>
              <p className="flex flex-col sm:flex-row sm:justify-center sm:gap-4">
                <span className="font-medium">Saturday</span>
                <span>9am - 6pm</span>
              </p>
              <p className="flex flex-col sm:flex-row sm:justify-center sm:gap-4">
                <span className="font-medium">Sunday</span>
                <span>11am - 5pm</span>
              </p>
              <p className="flex flex-col sm:flex-row sm:justify-center sm:gap-4">
                <span className="font-medium">Monday</span>
                <span>Closed</span>
              </p>
            </div>
          </div>

          {/* Contact Section - Updated links */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-cormorant text-2xl font-medium">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <a 
                href="https://www.hightidedigital.ca"
                className="flex items-center justify-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                (604) 555-0123
              </a>
              <a 
                href="https://www.hightidedigital.ca"
                className="flex items-center justify-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                hello@lumierestudio.ca
              </a>
            </div>
          </div>

          {/* Legal Section - Updated links */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-cormorant text-2xl font-medium">Legal</h3>
            <div className="flex flex-col space-y-3 text-sm text-muted-foreground">
              <Link 
                href="https://www.hightidedigital.ca" 
                className="transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link 
                href="https://www.hightidedigital.ca" 
                className="transition-colors hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link 
                href="https://www.hightidedigital.ca" 
                className="transition-colors hover:text-primary"
              >
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Already centered */}
      <div className="border-t border-border/30 bg-background/50">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LUMIÈRE Studio. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              All prices in CAD. 24-hour cancellation policy applies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}