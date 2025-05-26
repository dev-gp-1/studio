import Link from "next/link";
import { BarChart3, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card shadow-inner mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="text-xl font-bold flex items-center mb-4">
              <BarChart3 className="h-7 w-7 mr-2 text-brand-primary" />
              <span className="text-brand-primary">Synergy</span><span className="text-foreground">Insights</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              UX & Human Factors Consulting<br />
              Houston, TX
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-muted-foreground hover:text-brand-primary text-sm">Services</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-brand-primary text-sm">FAQ</Link></li>
              <li><Link href="/insights" className="text-muted-foreground hover:text-brand-primary text-sm">Insights</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-brand-primary text-sm">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-brand-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-brand-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-brand-primary">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              info@synergyinsights.com <br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          &copy; {currentYear} Synergy Insights. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
