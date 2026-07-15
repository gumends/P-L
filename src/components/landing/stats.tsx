"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

const stats = [
  { value: "2,4M+", label: "toneladas movimentadas/ano" },
  { value: "98,7%", label: "entregas no prazo" },
  { value: "180+", label: "municípios atendidos" },
  { value: "24/7", label: "monitoramento operacional" },
];

export function Stats() {
  return (
    <section id="numeros" className="border-y border-emerald-900/10 bg-emerald-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-10 max-w-xl">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-300">
            Resultados que sustentam parcerias de longo prazo
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Escala, confiabilidade e visibilidade em cada operação
          </h2>
        </FadeIn>

        <StaggerContainer className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="h-full">
              <div className="flex h-full min-h-32 flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-semibold text-emerald-300 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-auto pt-3 text-sm leading-relaxed text-emerald-100/70">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
