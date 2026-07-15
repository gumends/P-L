"use client";

import { ClipboardList, Radar, Truck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Diagnóstico da operação",
    description:
      "Mapeamos volumes, safras, rotas críticas e SLAs para desenhar a solução ideal — spot ou contrato recorrente.",
  },
  {
    step: "02",
    icon: Radar,
    title: "Planejamento e rastreio",
    description:
      "Definimos janelas, frota e pontos de controle. Você acompanha status, temperatura e ocorrências em tempo real.",
  },
  {
    step: "03",
    icon: Truck,
    title: "Execução com governança",
    description:
      "Entrega com indicadores de performance, relatórios auditáveis e time dedicado para ajustes sazonais.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Como funciona
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Uma operação clara, do planejamento à entrega
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Processo enxuto, transparente e preparado para picos de safra sem
            perder controle ou qualidade.
          </p>
        </FadeIn>

        <StaggerContainer className="relative mt-14 grid gap-8 lg:grid-cols-3">
          <div className="pointer-events-none absolute top-16 hidden h-px w-full bg-gradient-to-r from-transparent via-emerald-300 to-transparent lg:block" />

          {steps.map((item) => (
            <StaggerItem key={item.step}>
              <div className="relative rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-600">
                    {item.step}
                  </span>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <item.icon className="size-5" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
