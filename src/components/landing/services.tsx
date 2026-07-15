"use client";

import {
  Beaker,
  Cog,
  Droplets,
  Package,
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
    icon: Droplets,
    title: "Refino de óleo de soja",
    description:
      "Processo industrial de refino com controle de pureza, cor, acidez e estabilidade para uso alimentar e industrial.",
  },
  {
    icon: Wheat,
    title: "Processamento de soja",
    description:
      "Beneficiamento de grãos com eficiência operacional, rastreabilidade por lote e conformidade com normas do setor.",
  },
  {
    icon: Beaker,
    title: "Controle de qualidade",
    description:
      "Análises em todas as etapas — da matéria-prima ao produto final — garantindo padrão e segurança alimentar.",
  },
  {
    icon: Cog,
    title: "Extração e prensagem",
    description:
      "Tecnologia de extração otimizada para máximo rendimento de óleo com qualidade consistente e baixa perda.",
  },
  {
    icon: Package,
    title: "Farelo e subprodutos",
    description:
      "Aproveitamento integral da soja com produção de farelo e coprodutos para nutrição animal e indústria.",
  },
  {
    icon: Warehouse,
    title: "Armazenagem industrial",
    description:
      "Estrutura para recebimento, estocagem e gestão de matéria-prima e produto acabado com controle de umidade.",
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
            Refino e processamento para toda a cadeia da soja
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Da matéria-prima ao óleo refinado, operamos com tecnologia,
            qualidade e escala para atender indústria, cooperativas e
            distribuidores.
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
