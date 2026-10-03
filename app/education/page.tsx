import { PageIntro } from "@/components/page-intro";

export const metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <main>
      <PageIntro eyebrow="Education" title="A foundation built through study and practice." description="Add every educational or professional qualification here, including dates, institution, and credential earned." />
      <section className="timeline">
        <article>
          <span>Start year — Present</span>
          <div><h2>Software Engineering Technology</h2><p>Centennial College · Add your credential details and academic highlights.</p></div>
        </article>
        <article>
          <span>Year</span>
          <div><h2>Additional qualification</h2><p>Add a relevant degree, diploma, certificate, or professional course.</p></div>
        </article>
      </section>
    </main>
  );
}
