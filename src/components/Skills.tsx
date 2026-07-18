import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillIcon } from "@/components/SkillIcon";

function getGroup(title: string) {
  const group = skillGroups.find((g) => g.title === title);
  if (!group) throw new Error(`Skill group not found: ${title}`);
  return group;
}

function SkillCategoryCard({
  title,
  items,
  showAccent,
}: {
  title: string;
  items: string[];
  showAccent?: boolean;
}) {
  return (
    <div className="h-full rounded-2xl border-2 border-zinc-200 bg-white p-5 sm:p-6 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      {showAccent ? (
        <div className="mt-2 mb-5 h-0.5 w-10 rounded-full bg-blue-600" aria-hidden="true" />
      ) : (
        <div className="mb-5" aria-hidden="true" />
      )}
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-4 sm:gap-x-6">
        {items.map((skill) => (
          <li key={skill} className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center">
              <SkillIcon name={skill} className="max-h-8 max-w-8 h-full w-full" />
            </div>
            <span className="text-xs sm:text-sm text-slate-600 leading-tight">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const frontend = getGroup("Frontend");
  const backend = getGroup("Backend");
  const database = getGroup("Database");
  const tools = getGroup("Tools");
  const design = getGroup("Design");

  return (
    <section id="skills" className="section-padding section-gray relative">
      <div className="content-width relative z-10">
        <Reveal variant="blur-in">
          <SectionHeader
            title="Keahlian"
            subtitle="Teknologi, framework, dan tools yang pernah saya gunakan dalam proses belajar, magang, dan pengembangan proyek."
          />
        </Reveal>

        <div className="flex flex-col gap-5">
          <Reveal variant="fade-up">
            <SkillCategoryCard
              title={frontend.title}
              items={frontend.items}
              showAccent
            />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            <Reveal variant="slide-left" delay={80}>
              <SkillCategoryCard title={backend.title} items={backend.items} />
            </Reveal>
            <Reveal variant="slide-right" delay={120}>
              <SkillCategoryCard title={database.title} items={database.items} />
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <Reveal variant="slide-left" delay={160} className="md:col-span-2">
              <SkillCategoryCard title={tools.title} items={tools.items} />
            </Reveal>
            <Reveal variant="slide-right" delay={200}>
              <SkillCategoryCard title={design.title} items={design.items} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
