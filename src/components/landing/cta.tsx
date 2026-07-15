"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function CTA() {
  return (
    <section id="contato" className="overflow-hidden py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="min-w-0">
          <div className="relative w-full min-w-0 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 px-4 py-10 text-white sm:rounded-[2rem] sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-lime-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" />

            <div className="relative grid min-w-0 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-10">
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-emerald-200 sm:text-sm sm:tracking-wider">
                  Pronto para refinar com quem entende do processo?
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
                  Vamos encontrar a solução ideal para sua produção
                </h2>
                <p className="mt-4 text-base leading-relaxed text-emerald-100/80 sm:text-lg">
                  Conte sua demanda em volume e especificação. Nossa equipe
                  retorna com uma proposta técnica e comercial em até 24 horas
                  úteis.
                </p>

                <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
                  <Button
                    size="lg"
                    nativeButton={false}
                    className="h-11 w-full bg-white px-6 text-emerald-900 hover:bg-emerald-50 sm:w-auto"
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
                    className="h-11 w-full border-white/20 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white sm:w-auto"
                    render={<a href="tel:+556796270911">Ligar agora</a>}
                  />
                </div>
              </div>

              <div className="min-w-0 w-full space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-6">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-emerald-200/70">E-mail</p>
                    <p className="break-all text-sm font-medium sm:break-normal sm:text-base">
                      contato@plagrologistica.com.br
                    </p>
                  </div>
                </div>
                <div className="flex min-w-0 items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-emerald-200/70">Telefone</p>
                    <p className="text-sm font-medium sm:text-base">
                      +55 67 9627-0911
                    </p>
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
