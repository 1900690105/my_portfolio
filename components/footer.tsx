"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Heart,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/1900690105", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/nikhilkandhare",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://x.com/kandhare_n77808", icon: Twitter },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nikhi_l_33k/",
    icon: Instagram,
  },
  { name: "Email", href: "mailto:nikhilkandhare22@gmail.com", icon: Mail },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-secondary/50 border-t border-border">
      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute -top-6 left-1/2 -translate-x-1/2"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Scroll to top</span>
        </Button>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">
                Nikhil Kandhare
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Full Stack Developer passionate about creating elegant, efficient,
              and user-friendly web applications.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background hover:bg-accent transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4">Let&apos;s Work Together</h3>
            <p className="text-muted-foreground mb-4">
              Interested in collaborating or have a project in mind? I&apos;m
              always open to discussing new opportunities.
            </p>
            <Button asChild className="w-full sm:w-auto">
              <Link href="#contact">
                <Mail className="h-4 w-4 mr-2" />
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              &copy; {new Date().getFullYear()} Nikhil Kandhare. All rights
              reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" />{" "}
              using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
