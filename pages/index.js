// pages/index.js
import Head from "next/head";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/* --------------------------
   Safe dynamic import
-------------------------- */
const LiveDemo = dynamic(
  () =>
    import("../components/LiveDemo").then((mod) => mod.default || mod.LiveDemo),
  { ssr: false }
);

function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? children : null;
}

/* --------------------------
   Data
-------------------------- */

const projects = [
  {
    title: "Kubernetes NGINX",
    desc: "K8s manifests with Kustomize overlays, sealed-secrets, and CI pipelines.",
    repo: "https://github.com/REY1405/Devops_Projects",
  },
  {
    title: "Observability (SigNoz + OTel)",
    desc: "Java service instrumented with traces, metrics & dashboards.",
    repo: "#",
  },
  {
    title: "EKS + Karpenter (Terraform)",
    desc: "Autoscaling EKS cluster with Terraform modules.",
    repo: "#",
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    badge: "/badges/aws-saa.png", // place in /public/badges
    link: "https://www.credly.com/",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    year: "2023",
    badge: "/badges/cka.png",
    link: "#",
  },
  {
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    year: "2023",
    badge: "/badges/terraform.png",
    link: "#",
  },
];

/* --------------------------
   Page
-------------------------- */

export default function Home() {
  return (
    <>
      <Head>
        <title>Rishi Kathal — DevOps & SRE</title>
        <meta
          name="description"
          content="Senior DevOps / SRE — Kubernetes, AWS, GitOps, Observability"
        />
      </Head>

      <div className="min-h-screen">
        <Header />

        <main className="max-w-6xl mx-auto px-6">
          {/* HERO */}
          <section className="grid md:grid-cols-2 gap-8 py-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl font-extrabold">
                Hi, I’m <span className="text-indigo-600">Rishi</span>.
              </h1>

              <p className="mt-4 text-lg text-slate-600">
                Senior DevOps / SRE focused on Kubernetes, AWS, GitOps, CI/CD,
                Observability & cost optimization.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge">AWS</span>
                <span className="badge">Kubernetes</span>
                <span className="badge">Terraform</span>
                <span className="badge">GitOps</span>
              </div>

              <div className="mt-6 flex gap-3">
                <a href="#projects" className="btn-primary">
                  Projects
                </a>
                <a href="#certifications" className="btn-secondary">
                  Certifications
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-white rounded-2xl shadow"
            >
              <ProfileCard />
            </motion.div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="py-12">
            <h2 className="section-title">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {projects.map((p) => (
                <motion.div
                  key={p.title}
                  whileHover={{ scale: 1.03 }}
                  className="card"
                >
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                  <a
                    href={p.repo}
                    className="text-sm text-indigo-600 mt-3 inline-block"
                  >
                    GitHub →
                  </a>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section id="certifications" className="py-12">
            <h2 className="section-title">Certifications</h2>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  whileHover={{ scale: 1.05 }}
                  className="card text-center"
                >
                  <img
                    src={cert.badge}
                    alt={cert.name}
                    className="w-24 mx-auto mb-4"
                  />

                  <h3 className="font-semibold">{cert.name}</h3>

                  <p className="text-sm text-slate-600 mt-1">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Issued {cert.year}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-sm text-indigo-600 hover:underline"
                  >
                    Verify →
                  </a>
                </motion.div>
              ))}
            </div>
          </section>

          {/* LIVE DEMO */}
          <ClientOnly>
            <LiveDemo />
          </ClientOnly>

          {/* EXPERIENCE */}
          <section id="experience" className="py-12">
            <h2 className="section-title">Experience</h2>

            <div className="card mt-6">
              <h3 className="text-xl font-semibold">
                Sr. DevOps Specialist — OpsTree
              </h3>
              <ul className="list-disc ml-6 mt-3 space-y-2 text-slate-700">
                <li>GitHub Actions CI/CD for Kubernetes microservices</li>
                <li>SigNoz + OpenTelemetry observability stack</li>
                <li>EKS autoscaling with Karpenter</li>
                <li>AWS cost optimization & IAM hardening</li>
              </ul>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-12">
            <h2 className="section-title">Contact</h2>
            <p className="text-slate-600 mt-2">
              Email me at{" "}
              <a
                href="mailto:kathal.rishi@gmail.com"
                className="text-indigo-600"
              >
                kathal.rishi@gmail.com
              </a>
            </p>
          </section>

          <footer className="py-10 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Rishi Kathal • Hosted on Vercel
          </footer>
        </main>
      </div>
    </>
  );
}

/* --------------------------
   Components
-------------------------- */

function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between">
      <div className="font-semibold">Rishi Kathal</div>
      <nav className="flex gap-4 text-sm">
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function ProfileCard() {
  return (
    <>
      <h3 className="text-xl font-semibold">
        Kubernetes • AWS • Observability
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Real-world infra demos with GitOps, Terraform & production-grade monitoring.
      </p>
    </>
  );
}
