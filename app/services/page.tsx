import { CodeXml, LayoutTemplate, Smartphone } from "lucide-react";
import { PageIntro } from "@/components/page-intro";

export const metadata = { title: "Services" };

const services = [
  { icon: LayoutTemplate, title: "Web development", copy: "Responsive, accessible websites shaped around clear visitor goals." },
  { icon: CodeXml, title: "General programming", copy: "Well-structured solutions for coursework, prototypes, and practical problems." },
  { icon: Smartphone, title: "Interface design", copy: "Clean layouts and interaction patterns that work across screen sizes." },
];

export default function ServicesPage() {
  return (
    <main>
      <PageIntro eyebrow="Services" title="Practical development support, from idea to interface." description="A concise overview of the skills and services you can offer to clients, teams, or collaborators." />
      <section className="card-grid">
        {services.map(({ icon: Icon, title, copy }) => (
          <article className="service-card" key={title}>
            <Icon aria-hidden="true" />
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
