import Link from "next/link";
import { portfolioOwner } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Designed and developed by {portfolioOwner.name}.</p>
      <Link href="/contact">Let&apos;s connect</Link>
    </footer>
  );
}
