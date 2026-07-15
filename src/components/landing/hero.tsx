"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, FlaskConical, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ParanaMap } from "@/components/landing/parana-map";

const highlights = [
  { icon: Droplets, label: "Refino de óleo de soja" },
  { icon: FlaskConical, label: "Controle de qualidade rigoroso" },
  { icon: MapPin, label: "Atuação no Paraná" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-emerald-950 pt-28 pb-20 text-white sm:pt-32 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <Badge className="mb-6 border-emerald-400/30 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/10">
              Refino de óleo de soja e processamento de soja
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Da soja ao óleo refinado, com{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
              qualidade e controle
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-emerald-100/75"
          >
            Refinamos e processamos soja e óleo de soja com tecnologia,
            rigor técnico e padrões que garantem pureza, rendimento e
            confiabilidade em cada lote produzido.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              nativeButton={false}
              className="h-11 bg-emerald-500 px-6 text-emerald-950 hover:bg-emerald-400"
              render={
                <a href="#contato">
                  Entrar em contato
                  <ArrowRight data-icon="inline-end" />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-11 border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
              render={<a href="#servicos">Conhecer soluções</a>}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-emerald-100/90"
              >
                <Icon className="size-4 text-emerald-300" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="relative"
        >
          <ParanaMap />
        </motion.div>
      </div>
    </section>
  );
}
