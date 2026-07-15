"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function CTA() {
  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 px-6 py-12 text-white sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-lime-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-emerald-200">
                  Pronto para refinar com quem entende do processo?
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Vamos encontrar a solução ideal para sua produção
                </h2>
                <p className="mt-4 max-w-xl text-emerald-100/80">
                  Conte sua demanda em volume e especificação. Nossa equipe
                  retorna com uma proposta técnica e comercial em até 24 horas
                  úteis.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    nativeButton={false}
                    className="h-11 bg-white px-6 text-emerald-900 hover:bg-emerald-50"
                    render={
                      <a href="mailto:contato@plagrologistica.com.br">
                        Enviar e-mail
                        <ArrowRight data-icon="inline-end" />
                      </a>
                    }
                  />
                  <Button
                    size="lg"
                    variant="outline"
                    nativeButton={false}
                    className="h-11 border-white/20 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
                    render={<a href="tel:+551140028922">Ligar agora</a>}
                  />
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                    <Mail className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs text-emerald-200/70">E-mail</p>
                    <p className="font-medium">contato@plagrologistica.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs text-emerald-200/70">Telefone</p>
                    <p className="font-medium">+55 (11) 4002-8922</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
