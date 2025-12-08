import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'Kubernetes NGINX (KinD)',
    desc: 'K8s manifests with Kustomize overlays, sealed-secrets, and GitHub Actions KinD tests.',
    repo: '#'
  },
  {
    title: 'Observability (SigNoz + OTel)',
    desc: 'Instrumented Java service with traces, metrics and dashboards.',
    repo: '#'
  },
  {
    title: 'EKS + Karpenter (Terraform)',
    desc: 'Terraform modules to provision EKS and Karpenter autoscaling.',
    repo: '#'
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Rishi Kathal — DevOps & SRE</title>
        <meta name="description" content="DevOps / SRE engineer — Kubernetes, GitOps, CI/CD, Observability. Contact kathal.rishi@gmail.com" />
        <meta property="og:image" content="/og-image.svg" />
      </Head>

      <div className="min-h-screen">
        <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-cyan-400 text-white font-bold">RK</div>
            <div>
              <div className="text-sm font-semibold">Rishi Kathal</div>
              <div className="text-xs text-slate-500">DevOps · SRE · Cloud</div>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <a href="#projects" className="text-sm hover:underline">Projects</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
            <a href="/resume.pdf" download className="text-sm px-3 py-1 bg-slate-100 rounded">Resume</a>
            <a href="https://medium.com/@kathal.rishi" target="_blank" rel="noreferrer" className="text-sm hover:underline">Medium</a>
            <a href="https://www.linkedin.com/in/rishi-kathal-40412814b" target="_blank" rel="noreferrer" className="text-sm px-3 py-1 bg-slate-100 rounded">LinkedIn</a>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-6">
          <section className="grid md:grid-cols-2 gap-8 items-center py-12">
            <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}} className="fade-up">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I’m <span style={{color:'#6366F1'}}>Rishi</span>. I make cloud systems reliable and observable.</h1>
              <p className="mt-4 text-lg text-slate-600">I focus on Kubernetes, GitOps, CI/CD automation, observability and cost optimisation. Below are projects with code and infra you can clone.</p>

              <div className="mt-6 flex gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow">See Projects</a>
                <a href="#contact" className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg">Contact</a>
              </div>
            </motion.div>

            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="hero-card p-6 rounded-2xl bg-white shadow floating">
              <div className="text-sm text-slate-500">Highlighted</div>
              <h3 className="mt-2 font-semibold text-xl">Kubernetes NGINX + SigNoz + EKS + CI</h3>
              <p className="mt-2 text-sm text-slate-600">A full-stack demo showcasing infra-as-code, observability and cost-aware autoscaling.</p>
              <div className="mt-4 flex gap-2">
                <a className="text-sm text-indigo-600 hover:underline" href="#">View code</a>
                <a className="text-sm border px-3 py-1 rounded" href="#">Live demo</a>
              </div>
            </motion.div>
          </section>

          <section id="projects" className="py-8">
            <h2 className="text-2xl font-bold">Projects</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <motion.article key={p.title} whileHover={{scale:1.02}} className="p-5 bg-white rounded-2xl shadow border">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                  <div className="mt-4">
                    <a className="text-sm text-indigo-600 hover:underline" href={p.repo}>GitHub</a>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="contact" className="py-8">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="text-slate-600 mt-2">Want to hire or collaborate? Use the embedded Google Form below or email me at <a className="text-indigo-600" href="mailto:kathal.rishi@gmail.com">kathal.rishi@gmail.com</a>.</p>

            <div className="mt-6 max-w-3xl">
              <ContactForm />
            </div>
          </section>

          <footer className="py-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Rishi Kathal — Built with ❤️ • Hosted on Vercel</footer>
        </main>
      </div>
    </>
  )
}

/**
 * ContactForm
 * Option C: embedded Google Form (responsive iframe) + fallback link.
 * Replaces the previous fetch-based contact form.
 */
function ContactForm() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScK6_u2NRVkJeVnYWEAOJetln_5HPfcwQWGt_tLe0YtfJLeVw/viewform?embedded=true"
  const fallbackUrl = "https://docs.google.com/forms/d/e/1FAIpQLScK6_u2NRVkJeVnYWEAOJetln_5HPfcwQWGt_tLe0YtfJLeVw/viewform"

  return (
    <div className="w-full">
      {/* Responsive iframe wrapper */}
      <div style={{ position: 'relative', paddingBottom: '120%', height: 0, overflow: 'hidden', borderRadius: 12 }} className="shadow">
        <iframe
          src={formUrl}
          width="100%"
          height="1000"
          style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact form"
          className="rounded-xl"
        >
          Loading…
        </iframe>
      </div>

      <div className="mt-3 text-sm text-slate-500">
        If the form doesn't load here, <a href={fallbackUrl} target="_blank" rel="noreferrer" className="text-indigo-600">open it in a new tab</a>.
      </div>
    </div>
  )
}
