import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Kubernetes NGINX (KinD)', desc: 'K8s manifests with Kustomize overlays, sealed-secrets, GitHub Actions.', link: '/projects/nginx', tags:['Kubernetes','Kustomize'] },
  { title: 'Observability (SigNoz + OTel)', desc: 'Instrumented Java service with dashboards and SLOs.', link: '/projects/observability', tags:['OpenTelemetry','SigNoz'] },
  { title: 'EKS + Karpenter (Terraform)', desc: 'Terraform modules, Karpenter provisioner and cost-aware autoscaling.', link: '/projects/eks', tags:['Terraform','Karpenter'] }
]

export default function Home(){
  return (
    <>
      <Head>
        <title>Rishi Kathal — DevOps & SRE</title>
        <meta name="description" content="Rishi Kathal — DevOps / SRE portfolio. Kubernetes, GitOps, CI/CD, Observability." />
        <meta property="og:image" content="/og-image.svg" />
      </Head>
      <Nav />
      <main className="pt-28 max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <motion.div initial={opacity:0,x:-20} animate={opacity:1,x:0} transition={duration:0.6}>
            <h1 className="text-4xl md:text-5xl font-extrabold">Hi, I’m <span className="text-primary-500">Rishi</span>. I build reliable cloud platforms.</h1>
            <p className="mt-4 text-lg text-slate-600">DevOps & SRE engineer — Kubernetes, GitOps, Terraform, Observability. I ship infrastructure-as-code and production-ready CI/CD pipelines.</p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="bg-primary-500 text-white px-4 py-2 rounded-lg">See Projects</a>
              <a href="#contact" className="border px-4 py-2 rounded-lg">Contact</a>
            </div>
          </motion.div>
          <motion.div initial={opacity:0,y:20} animate={opacity:1,y:0} transition={duration:0.8} className="p-6 bg-white rounded-2xl shadow floating">
            <div className="text-sm text-slate-500">Highlighted</div>
            <h3 className="mt-2 font-semibold text-xl">Full-stack DevOps demos</h3>
            <p className="mt-2 text-sm text-slate-600">Infra, CI/CD, observability and cost-control — with runnable demos.</p>
          </motion.div>
        </section>

        <section id="projects" className="py-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {projects.map(p=> <ProjectCard key={p.title} {...p} />)}
          </div>
        </section>

        <section id="blog" className="py-12">
          <h2 className="text-2xl font-bold">Blog</h2>
          <p className="mt-2 text-slate-600">Short writeups and postmortems — sample posts included.</p>
        </section>

        <section id="contact" className="py-12 max-w-2xl">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-600">I prefer messages via Google Form — quick and reliable.</p>

          <div className="mt-6">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScK6_u2NRVkJeVnYWEAOJetln_5HPfcwQWGt_tLe0YtfJLeVw/viewform?usp=publish-editor" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg">
              Open Contact Form
            </a>
            <p className="mt-3 text-sm text-slate-500">This opens a Google Form in a new tab.</p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
