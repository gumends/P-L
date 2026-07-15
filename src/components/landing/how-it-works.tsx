"use client";

import { Beaker, ClipboardList, Droplets } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Recebimento da matéria-prima",
    description:
      "Análise e classificação dos grãos recebidos, com controle de umidade, impurezas e rastreabilidade por lote.",
  },
  {
    step: "02",
    icon: Beaker,
    title: "Processamento e refino",
    description:
      "Extração, degomagem, neutralização e filtragem do óleo de soja com monitoramento contínuo de parâmetros.",
  },
  {
    step: "03",
    icon: Droplets,
    title: "Controle e entrega",
    description:
      "Produto final certificado, envasado ou a granel, pronto para abastecer sua operação com qualidade garantida.",
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
            Do grão ao óleo refinado, com processo transparente
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Etapas integradas, controle rigoroso e capacidade produtiva para
            atender demandas recorrentes e sazonais.
          </p>
        </FadeIn>

        <StaggerContainer className="relative mt-14 grid auto-rows-fr items-stretch gap-8 lg:grid-cols-3">
          <div className="pointer-events-none absolute top-16 z-0 hidden h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent lg:block" />

          {steps.map((item) => (
            <StaggerItem key={item.step} className="h-full">
              <div className="relative z-10 flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-600">
                    {item.step}
                  </span>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 ring-4 ring-white">
                    <item.icon className="size-5" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-stone-600">
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
