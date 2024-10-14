import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span className="text-xl font-bold">TRUELENS</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-foreground/60 hover:text-foreground">
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground/60 hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/fact-checks"
            className="text-foreground/60 hover:text-foreground"
          >
            Fact-Checks
          </Link>
          <Link
            href="/resources"
            className="text-foreground/60 hover:text-foreground"
          >
            Resources
          </Link>
          <Link
            href="/blog"
            className="text-foreground/60 hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-foreground/60 hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full md:w-[200px]"
          />
          <Button size="icon" variant="ghost">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
