import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SocialIcon } from "@/components/icons/SocialIcon";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    display: siteConfig.email,
    type: "email" as const,
    external: false,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    display: siteConfig.linkedinHandle,
    type: "linkedin" as const,
    external: true,
  },
  {
    label: "Instagram",
    href: siteConfig.instagram,
    display: siteConfig.instagramHandle,
    type: "instagram" as const,
    external: true,
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    display: siteConfig.githubHandle,
    type: "github" as const,
    external: true,
  },
  {
    label: "Lokasi",
    href: siteConfig.locationUrl,
    display: siteConfig.location,
    type: "location" as const,
    external: true,
  },
] as const;

function ContactCard({
  label,
  href,
  display,
  type,
  external,
}: (typeof contactLinks)[number]) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex h-full flex-col justify-between rounded-2xl border-2 border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
    >
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 p-2.5 ring-1 ring-sky-100 transition-colors duration-300 group-hover:bg-white group-hover:ring-sky-200">
          <SocialIcon type={type} className="h-full w-full" />
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-600">
          {label}
        </p>
        <p className="mt-2 break-words text-sm font-medium leading-snug text-slate-900 transition-colors duration-300 group-hover:text-sky-800">
          {display}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-1 text-xs font-medium text-zinc-400 transition-colors duration-300 group-hover:text-sky-600">
        <span>Buka</span>
        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-padding section-gray relative">
      <div className="content-width relative z-10">
        <Reveal variant="blur-in">
          <SectionHeader
            title="Kontak"
            subtitle="Tertarik berkolaborasi atau punya peluang kerja? Hubungi saya melalui saluran berikut."
          />
        </Reveal>

        <div className="grid min-w-0 gap-5 lg:grid-cols-12 lg:items-stretch">
          <Reveal variant="slide-left" delay={100} className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-sky-600 via-sky-600 to-blue-700 p-6 shadow-lg md:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-100/90">
                  Mari Terhubung
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                  {siteConfig.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-100/90">
                  {siteConfig.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/85">
                  Saya terbuka untuk peluang kerja, kolaborasi proyek, dan diskusi seputar
                  teknologi informasi.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2 lg:content-start">
            {contactLinks.map((item, index) => (
              <Reveal key={item.label} variant="fade-up" delay={140 + index * 70}>
                <ContactCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
