const projects = [
  {
    title: 'E-commerce Platform for XYZ Retail',
    summary:
      "XYZ Retail needed a scalable platform to sell online and manage inventory in real time. I built the responsive front end in React and the REST API in Node.js and MongoDB, then set up a CI/CD pipeline on AWS for fast, reliable deploys. The result: a 35% increase in online sales within the first three months and far less manual inventory work for the team.",
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    title: 'Booking Dashboard for a Local Studio',
    summary:
      'A yoga studio was managing class sign-ups through spreadsheets and phone calls. I designed a booking dashboard where clients reserve spots and staff track attendance from one screen, cutting scheduling errors and freeing up hours of admin time each week.',
    tech: ['React', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Internal Reporting Tool',
    summary:
      "A small team needed a faster way to turn raw sales data into shareable charts. I built an internal tool that pulls from their existing database and renders live dashboards, replacing a manual weekly export process.",
    tech: ['Python', 'Django', 'Docker'],
  },
]

function Portfolio() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="section-heading text-3xl font-extrabold">Portfolio</h1>
      <p className="mt-6 max-w-md text-text-muted">
        A selection of projects I've built, from client-facing platforms to
        internal tools.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-border bg-panel-soft p-8"
          >
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="mt-4 leading-relaxed text-text-muted">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gold/40 px-3 py-1 text-xs font-medium text-gold"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio