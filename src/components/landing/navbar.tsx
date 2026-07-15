"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Sprout, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { BrandName } from "@/components/brand-name";

const WHATSAPP_URL =
  "https://wa.me/556796270911?text=Ol%C3%A1!%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20P%26L%20AGROLOG%C3%8DSTICA.";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Números", href: "#numeros" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-emerald-950/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5 text-white">
          <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/20 ring-1 ring-emerald-400/30">
            <Sprout className="size-5 text-emerald-300" />
          </span>
          <BrandName className="text-base font-semibold tracking-tight sm:text-lg" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-emerald-100/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex size-10 items-center justify-center rounded-full bg-[#25D366]/15 ring-1 ring-[#25D366]/30 transition-transform hover:scale-105 hover:bg-[#25D366]/25"
          >
            <Image
              src="/whatsapp.svg"
              alt="WhatsApp"
              width={22}
              height={22}
            />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex size-10 items-center justify-center rounded-full bg-[#25D366]/15 ring-1 ring-[#25D366]/30"
          >
            <Image
              src="/whatsapp.svg"
              alt="WhatsApp"
              width={22}
              height={22}
            />
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-white/10 bg-emerald-950/95 px-4 pb-4 md:hidden"
        >
          <nav className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-emerald-100/90 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
