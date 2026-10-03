import { PageIntro } from "@/components/page-intro";

export const metadata = { title: "Projects" };

const projects = [
  { number: "01", title: "Project title", type: "Web application", description: "Add the problem you solved, your role, the technologies used, and the final outcome." },
  { number: "02", title: "Project title", type: "Course project", description: "Show what you contributed and include a concrete result that a visitor can understand quickly." },
  { number: "03", title: "Project title", type: "Personal build", description: "Describe what you learned and link to the live project or source code when available." },
];

export default function ProjectsPage() {
  return (
    <main>
      <PageIntro eyebrow="Selected work" title="Projects built to learn, solve, and improve." description="Three focused case studies will live here, each with a project image, your role, and its outcome." />
      <section className="card-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card__visual"><span>{project.number}</span></div>
            <p className="eyebrow">{project.type}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
