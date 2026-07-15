"use client";

import {
  Container,
  Package,
  Route,
  ThermometerSun,
  Warehouse,
  Wheat,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";

const services = [
  {
    icon: Wheat,
    title: "Transporte de grãos",
    description:
      "Operação dedicada para soja, milho, algodão e demais commodities com controle de umidade e perdas.",
  },
  {
    icon: Route,
    title: "Roteirização inteligente",
    description:
      "Planejamento de rotas com base em safras, janelas de descarga e condições de estrada em tempo real.",
  },
  {
    icon: Warehouse,
    title: "Armazenagem e transbordo",
    description:
      "Rede de parceiros para estocagem segura, secagem e transferência entre modais com rastreio contínuo.",
  },
  {
    icon: ThermometerSun,
    title: "Carga refrigerada",
    description:
      "Soluções para frutas, hortifruti e insumos sensíveis, com monitoramento de temperatura 24/7.",
  },
  {
    icon: Container,
    title: "Exportação e portos",
    description:
      "Coordenação até o embarque marítimo, documentação aduaneira e alinhamento com terminais.",
  },
  {
    icon: Package,
    title: "Insumos e defensivos",
    description:
      "Distribuição controlada de fertilizantes e defensivos com conformidade regulatória e SLA rigoroso.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Soluções completas
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Logística pensada para cada etapa da cadeia agro
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Da colheita à indústria ou porto, estruturamos operações sob medida
            para escala, compliance e previsibilidade.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Card className="h-full border-stone-200/80 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <CardHeader>
                  <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <service.icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
