import Link from "next/link";

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  points
}) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="section-badge">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="hero-copy">{description}</p>
          <div className="button-row">
            <Link className="button" href={primaryCta.href}>
              {primaryCta.label}
            </Link>
            <Link className="button button-secondary" href={secondaryCta.href}>
              {secondaryCta.label}
            </Link>
          </div>
          <div className="hero-points">
            {points.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div className="dashboard-card">
            <div className="dashboard-top">
              <span>Admissions Overview</span>
              <strong>Live CRM</strong>
            </div>
            <div className="metric-row">
              <div>
                <small>New leads</small>
                <strong>148</strong>
              </div>
              <div>
                <small>Applications</small>
                <strong>63</strong>
              </div>
              <div>
                <small>Pending docs</small>
                <strong>19</strong>
              </div>
            </div>
            <div className="mini-grid">
              <div className="mini-card warm">
                <span>Student Portal</span>
                <strong>Self upload enabled</strong>
              </div>
              <div className="mini-card cool">
                <span>Automation</span>
                <strong>Follow-up reminders active</strong>
              </div>
              <div className="mini-card neutral">
                <span>Destination Mix</span>
                <strong>UK, USA, Canada, Australia</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroCompact({ eyebrow, title, description }) {
  return (
    <section className="hero hero-compact">
      <div className="container compact-hero-content">
        <span className="section-badge">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="hero-copy">{description}</p>
      </div>
    </section>
  );
}

export function Section({ children, surface = "default" }) {
  return <section className={`section section-${surface}`}>{children}</section>;
}

export function PageIntro({ badge, title, description, center = false, light = false }) {
  return (
    <div className={`page-intro ${center ? "center" : ""} ${light ? "light" : ""}`}>
      <span className="section-badge">{badge}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function FeatureGrid({ items, columns = 3 }) {
  return (
    <div className={`feature-grid columns-${columns}`}>
      {items.map((item) => (
        <article key={item.title} className="feature-card">
          <div className="feature-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function StatsBand({ items }) {
  return (
    <section className="stats-band">
      <div className="container stats-grid">
        {items.map((item) => (
          <div key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SplitShowcase({ badge, title, description, bullets, cards }) {
  return (
    <div className="container split-showcase">
      <div>
        <span className="section-badge">{badge}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="bullet-list">
          {bullets.map((item) => (
            <div key={item} className="bullet-item">
              <span className="bullet-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="stacked-cards">
        {cards.map((card) => (
          <article key={card.title} className="info-card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function UseCaseGrid({ items }) {
  return (
    <div className="container use-case-grid">
      {items.map((item) => (
        <article key={item.title} className="use-case-card">
          <span className="section-badge">{item.tag}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <Link href={item.href}>Read more</Link>
        </article>
      ))}
    </div>
  );
}

export function LogoStrip({ items }) {
  return (
    <div className="container logo-strip">
      {items.map((item) => (
        <div key={item} className="logo-pill">
          {item}
        </div>
      ))}
    </div>
  );
}

export function PricingGrid({ items, compact = false }) {
  return (
    <div className={`pricing-grid ${compact ? "pricing-grid-compact" : ""}`}>
      {items.map((item) => (
        <article key={item.title} className={`pricing-card ${item.featured ? "featured" : ""}`}>
          <span className="section-badge">{item.title}</span>
          <h3>{item.price}</h3>
          <p>{item.caption}</p>
          <div className="price-features">
            {item.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
          <Link className="button button-secondary" href="/contact">
            Contact
          </Link>
        </article>
      ))}
    </div>
  );
}

export function ResourceGrid({ items }) {
  return (
    <div className="resource-grid">
      {items.map((item) => (
        <article key={item.title} className="resource-card">
          <span className="section-badge">{item.type}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <Link href="/contact">Explore</Link>
        </article>
      ))}
    </div>
  );
}

export function ProcessTimeline({ items }) {
  return (
    <div className="process-timeline">
      {items.map((item, index) => (
        <article key={item.title} className="timeline-card">
          <span>0{index + 1}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function CTASection({ title, description, primary, secondary }) {
  return (
    <section className="section">
      <div className="container cta-banner">
        <div>
          <span className="section-badge">Get Started</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="button-row">
          <Link className="button" href={primary.href}>
            {primary.label}
          </Link>
          {secondary ? (
            <Link className="button button-secondary" href={secondary.href}>
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
