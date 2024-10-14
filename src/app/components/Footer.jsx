import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground/60 hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/fact-checks"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Fact-Checks
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="text-foreground/60">Email: info@truelens.com</p>
            <p className="text-foreground/60">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Stay Connected</h3>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit" className="w-full">
                Subscribe to Newsletter
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-foreground/60">
          <p>&copy; 2023 TRUELENS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
