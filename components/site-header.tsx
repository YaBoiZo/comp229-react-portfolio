import { navigationItems, portfolioOwner } from "@/lib/portfolio-data";

export function SiteHeader() {
  const initials = portfolioOwner.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="/" aria-label="Portfolio home">
          <span className="brand__mark" aria-hidden="true">{initials}</span>
          <span className="brand__text">
            {portfolioOwner.name}
            <small>Portfolio</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
