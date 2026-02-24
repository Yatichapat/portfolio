export default function Home() {
  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
  ];

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "Analytics dashboard for sales, inventory, and customer trends with role-based access.",
      stack: "Next.js · TypeScript · PostgreSQL",
    },
    {
      title: "Team Task Manager",
      description:
        "Collaborative task management app with Kanban boards, reminders, and team activity feed.",
      stack: "React · Node.js · Prisma",
    },
    {
      title: "Booking Platform",
      description:
        "Service booking platform with calendar availability, payments, and automated confirmations.",
      stack: "Next.js · Stripe · Supabase",
    },
  ];

  const experience = [
    {
      role: "Frontend Developer",
      company: "Your Company",
      period: "2024 — Present",
      details:
        "Built and maintained product interfaces, improved performance, and collaborated with design and backend teams.",
    },
    {
      role: "Web Developer",
      company: "Previous Company",
      period: "2022 — 2024",
      details:
        "Delivered responsive web apps, integrated APIs, and implemented reusable UI components.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-10 md:px-10 md:py-14">
        <header className="flex flex-col gap-8 border-b border-black/10 pb-10 dark:border-white/15">
          <nav className="flex items-center justify-between">
            <p className="text-sm font-semibold tracking-wide">YOUR NAME</p>
            <ul className="hidden items-center gap-6 text-sm md:flex">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-widest text-black/60 dark:text-white/60">
              Frontend Developer · UI Engineer
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              I build clean, high-performance web experiences.
            </h1>
            <p className="max-w-2xl text-base text-black/70 dark:text-white/70 md:text-lg">
              Portfolio template for showcasing your work, skills, and background.
              Replace this text with your own story and value proposition.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="portfolio-button">View Projects</a>
              <a href="#contact" className="portfolio-button-secondary">Get in Touch</a>
            </div>
          </div>
        </header>

        <section id="about" className="portfolio-section">
          <h2 className="portfolio-heading">About</h2>
          <p className="portfolio-text">
            I am a developer focused on creating modern, accessible, and scalable
            web applications. I enjoy turning complex problems into simple user
            experiences and collaborating across teams to ship impactful products.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="portfolio-chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="portfolio-section">
          <h2 className="portfolio-heading">Featured Projects</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="portfolio-card">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                  {project.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-black/60 dark:text-white/60">
                  {project.stack}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="portfolio-section">
          <h2 className="portfolio-heading">Experience</h2>
          <div className="space-y-4">
            {experience.map((item) => (
              <article key={item.role + item.company} className="portfolio-card">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-semibold">
                    {item.role} · {item.company}
                  </h3>
                  <p className="text-sm text-black/60 dark:text-white/60">{item.period}</p>
                </div>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="portfolio-section">
          <h2 className="portfolio-heading">Contact</h2>
          <p className="portfolio-text max-w-2xl">
            Interested in working together? Share your email, LinkedIn, GitHub,
            and a short message here. You can also replace this with a contact form.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a className="underline" href="mailto:you@example.com">you@example.com</a>
            <a className="underline" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="underline" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>

        <footer className="border-t border-black/10 py-6 text-sm text-black/60 dark:border-white/15 dark:text-white/60">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
