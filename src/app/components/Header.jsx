import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/image/truelens.jpg";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} width={60} height={60} />
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
