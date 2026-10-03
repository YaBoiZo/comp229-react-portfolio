import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { portfolioOwner } from "@/lib/portfolio-data";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About me"
        title="Developer in progress. Problem solver by nature."
        description="This page is ready for your legal name, professional photo, personal biography, and résumé PDF."
      />
      <section className="split-panel">
        <div className="portrait-placeholder" aria-label="Professional portrait placeholder">
          <span>{portfolioOwner.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
          <small>Add your headshot</small>
        </div>
        <div className="prose-card">
          <p>
            I&apos;m {portfolioOwner.name}, a {portfolioOwner.role.toLowerCase()} based in {portfolioOwner.location}.
            I enjoy learning how strong design and clean code work together to create useful experiences.
          </p>
          <p>
            Replace this starter biography with a short, employer-friendly introduction that explains your interests,
            strengths, and the kind of opportunities you&apos;re pursuing.
          </p>
          <Link className="button button--secondary" href="/contact">Contact me</Link>
        </div>
      </section>
    </main>
  );
}
