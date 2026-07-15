import { Sprout } from "lucide-react";

import { BrandName } from "@/components/brand-name";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Empresa: [
    { label: "Sobre nós", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Sustentabilidade", href: "#" },
  ],
  Soluções: [
    { label: "Transporte de grãos", href: "#servicos" },
    { label: "Exportação", href: "#servicos" },
    { label: "Armazenagem", href: "#servicos" },
  ],
  Contato: [
    { label: "Entrar em contato", href: "#contato" },
    { label: "Suporte 24/7", href: "#contato" },
    { label: "Ouvidoria", href: "#contato" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Sprout className="size-5" />
              </span>
              <BrandName className="text-lg font-semibold text-stone-900" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-600">
              Inteligência logística para o agronegócio brasileiro. Conectamos
              produtividade no campo com eficiência na entrega.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="text-sm font-semibold text-stone-900">{title}</p>
                <ul className="mt-4 space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-stone-600 transition-colors hover:text-emerald-700"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            <BrandName className="font-medium text-stone-500" />. Todos os
            direitos reservados.
          </p>
          <p>CNPJ 00.000.000/0001-00 · São Paulo, SP</p>
        </div>
      </div>
    </footer>
  );
}
