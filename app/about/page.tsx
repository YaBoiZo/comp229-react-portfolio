import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { portfolioOwner } from "@/lib/portfolio-data";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About me"
        title="Building a new career through curiosity and code."
        description={`${portfolioOwner.role} based in ${portfolioOwner.location}.`}
      />
      <section className="split-panel">
        <div className="portrait-placeholder" aria-label="Professional portrait placeholder">
          <span>{portfolioOwner.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
          <small>Professional photo coming soon</small>
        </div>
        <div className="prose-card">
          {portfolioOwner.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <Link className="button button--secondary" href="/contact">Contact me</Link>
        </div>
      </section>
    </main>
  );
}
