"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Github, Info, Linkedin, Mail, Menu, Twitter, Zap } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Zap className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-foreground">
                FeatureTest
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Button size="sm">Get Started</Button>
          </nav>
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 py-2 space-y-4">
                  <MobileNavLink
                    href="/about"
                    icon={<Info className="h-5 w-5 mr-2" />}
                  >
                    About
                  </MobileNavLink>
                  <MobileNavLink
                    href="/contact"
                    icon={<Mail className="h-5 w-5 mr-2" />}
                  >
                    Contact
                  </MobileNavLink>
                  <div className="flex justify-center space-x-4 py-4">
                    <SocialIcon
                      href="https://github.com"
                      icon={<Github className="h-6 w-6" />}
                      label="GitHub"
                    />
                    <SocialIcon
                      href="https://twitter.com"
                      icon={<Twitter className="h-6 w-6" />}
                      label="Twitter"
                    />
                    <SocialIcon
                      href="https://linkedin.com"
                      icon={<Linkedin className="h-6 w-6" />}
                      label="LinkedIn"
                    />
                  </div>
                  <Button className="w-full" size="sm">
                    Get Started
                  </Button>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center"
    >
      {icon}
      {children}
    </Link>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      <span className="sr-only">{label}</span>
      {icon}
    </Link>
  );
}
