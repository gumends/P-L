"use client";

import Image from "next/image";

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";

const gallery = [
  {
    title: "Grãos e vagens",
    description: "Matéria-prima selecionada para o processo industrial",
    src: "/images/agro/graos-soja.webp",
  },
  {
    title: "Óleo de soja",
    description: "Refino com padrão de pureza e segurança alimentar",
    src: "/images/agro/oleo-soja.webp",
  },
  {
    title: "Colheita de soja",
    description: "Soja premium da região produtora paranaense",
    src: "/images/agro/colheita-soja.webp",
  },
];

export function Stats() {
  return (
    <section
      id="numeros"
      className="border-y border-emerald-900/10 bg-emerald-900 py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-300">
            Especialistas em refino de soja e óleo
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Tecnologia, qualidade e escala em cada etapa do processo
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-sm ring-1 ring-white/10 transition-all hover:-translate-y-1 hover:shadow-md">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-lg font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-base leading-relaxed text-emerald-100/75">
                    {item.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
