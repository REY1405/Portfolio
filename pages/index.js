// pages/index.js
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * Safe dynamic import:
 * - attempts to load default export
 * - then tries a named export LiveDemo
 * - otherwise falls back to a harmless placeholder component
 *
 * This prevents React from receiving an object instead of a component.
 */
const LiveDemo = dynamic(
  () =>
    import("../components/LiveDemo").then((mod) => {
      // Try default -> named -> null-component
      if (mod && (mod.default || mod.LiveDemo)) {
        return mod.default || mod.LiveDemo;
      }
      // fallback harmless component
      return function PlaceholderLiveDemo() {
        return (
          <div className="py-12">
            <div className="p-6 bg-white rounded-2xl shadow border text-center text-slate-600">
              Live demo unavailable.
            </div>
          </div>
        );
      };
    }),
  { ssr: false }
);

/* ClientOnly: renders children only after client mount to avoid hydration mismatches */
function ClientOnly({ children, fallback = null }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? children : fallback;
}

/* --------------------------
   Page content starts here
   -------------------------- */

const projects = [
  {
    title: "Kubernetes NGINX",
    desc: "K8s manifests with Kustomize overlays, sealed-secrets, and GitHub Actions tests.",
    repo: "#",
  },
  {
    title: "Observability (SigNoz + OTel)",
    desc: "Instrumented Java service with traces, metrics and dashboards.",
    repo: "#",
  },
  {
    title: "EKS + Karpenter (Terraform)",
    desc: "Terraform modules to provision EKS and Karpenter autoscaling.",
    repo: "#",
  },
];

export default function Home() {
  // add your Medium profile if you want
  const mediumUrl = "https://medium.com/";

  return (
    <>
      <Head>
        <title>Rishi Kathal — DevOps & SRE</title>
        <meta
          name="description"
          content="DevOps / SRE engineer — Kubernetes, GitOps, CI/CD, Observability. Contact kathal.rishi@gmail.com"
        />
        <meta property="og:image" content="/og-image.svg" />
      </Head>

      <div className="min-h-screen">
        <Header mediumUrl={mediumUrl} />

        <main className="max-w-6xl mx-auto px-6">
          {/* HERO */}
          <section className="grid md:grid-cols-2 gap-8 items-center py-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Hi, I’m <span className="text-indigo-600">Rishi</span>. I make cloud systems
                reliable and observable.
              </h1>

              <p className="mt-4 text-lg text-slate-600">
                I focus on Kubernetes, GitOps, CI/CD automation, observability and cost
                optimisation. Below are projects with code and infra you can clone.
              </p>

              <div className="mt-6 flex gap-3 items-center">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow"
                >
                  See Projects
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg"
                >
                  Contact
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg"
                >
                  📄 Resume
                </a>
              </div>

              <div className="mt-3 text-sm text-slate-500">
                Based in India • Open to SRE & Senior DevOps roles
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 bg-white rounded-2xl shadow"
            >
              <ProfileCard />
            </motion.div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="py-8">
            <h2 className="text-2xl font-bold">Projects</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {projects.map((p) => (
                <motion.article
                  key={p.title}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 bg-white rounded-2xl shadow border"
                >
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                  <div className="mt-4">
                    <a className="text-sm text-indigo-600 hover:underline" href={p.repo}>
                      GitHub
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* LIVE DEMO (client-only) */}
          <ClientOnly fallback={<div className="py-12">Loading demo…</div>}>
            <LiveDemo />
          </ClientOnly>

          {/* EXPERIENCE */}
          <section id="experience" className="py-12">
            <h2 className="text-2xl font-bold">Work Experience</h2>

            <div className="mt-6 space-y-8">
              <div className="p-6 bg-white rounded-2xl shadow border">
                <h3 className="text-xl font-semibold">Sr.DevOps Specialist — OpsTree Solutions</h3>
                <p className="text-sm text-slate-500 mt-1">2023 — 2025</p>

                <ul className="list-disc ml-6 mt-3 space-y-2 text-slate-700">
                  <li>
                    Automated microservice deployments on Kubernetes using GitHub Actions & GitHub Runners, reducing deployment failures by 40% and accelerating release cycles by 50%.
                  </li>
                  <li>Built and managed Kubernetes workloads with Kustomize, Karpenter, and Ingress controllers.</li>
                  <li>Implemented observability stack using SigNoz & OpenTelemetry for metrics, logs, and tracing.</li>
                  <li>Optimized AWS infrastructure with cost-efficient networking, autoscaling, and caching strategies.</li>
                  <li>Automated deployment lifecycles following GitOps practices for multi-environment releases.</li>
                  <li>Implemented AWS IAM & SSO integration with Azure AD, improving security and reducing access-related incidents by 60%.</li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow border">
                <h3 className="text-xl font-semibold">Sr.Analyst — Capgemini</h3>
                <p className="text-sm text-slate-500 mt-1">2021 — 2023</p>

                <ul className="list-disc ml-6 mt-3 space-y-2 text-slate-700">
                  <li>
                    Provisioned AWS Services like EC2, EBS (encryption), AMI creation, S3, Route53, ECS, EFS, CloudWatch, IAM, VPC, Auto-Scaling, NAT & Security Groups.
                  </li>
                  <li>Automated infrastructure as code (IaC) using Terraform & Ansible, ensuring repeatable deployments.</li>
                  <li>Collaborated with cross-functional teams to troubleshoot and resolve production issues; performed RCA via ServiceNow ticketing.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-12">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="text-slate-600 mt-2">
              Want to hire or collaborate? Use the Google Form below or email me at{" "}
              <a className="text-indigo-600" href="mailto:kathal.rishi@gmail.com">
                kathal.rishi@gmail.com
              </a>
              .
            </p>

            <div className="mt-6 max-w-3xl">
              <EmbeddedGoogleForm />

              <div className="mt-4">
                <a
                  href="/resume.pdf"
                  download
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow"
                >
                  📄 Download My Resume
                </a>
              </div>
            </div>
          </section>

          <footer className="py-12 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Rishi Kathal — Built with ❤️ • Hosted on Vercel •{" "}
            <a href={mediumUrl} target="_blank" rel="noreferrer" className="text-indigo-600">
              Medium Blog
            </a>
          </footer>
        </main>
      </div>
    </>
  );
}

/* --------------------------
   Header and Avatar
   -------------------------- */

function Header({ mediumUrl }) {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar />
        <div>
          <div className="text-sm font-semibold">Rishi Kathal</div>
          <div className="text-xs text-slate-500">DevOps · SRE · Cloud</div>
        </div>
      </div>

      <nav className="flex items-center gap-4">
        <a href="#projects" className="text-sm hover:underline">
          Projects
        </a>
        <a href="#experience" className="text-sm hover:underline">
          Experience
        </a>
        <a href="#contact" className="text-sm hover:underline">
          Contact
        </a>
        <a href={mediumUrl} className="text-sm hover:underline" target="_blank" rel="noreferrer">
          Medium
        </a>
        <a
          href="https://www.linkedin.com/in/rishi-kathal-40412814b"
          target="_blank"
          rel="noreferrer"
          className="text-sm px-3 py-1 bg-slate-100 rounded"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}

function Avatar() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative">
      {!imgError ? (
        <img
          src="/rishi.jpg"
          alt="Rishi Kathal"
          className="w-20 h-20 rounded-full object-cover object-top shadow"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-cyan-400 text-white font-bold text-xl">
          RK
        </div>
      )}
    </div>
  );
}

/* --------------------------
   Small profile card
   -------------------------- */
function ProfileCard() {
  return (
    <>
      <div className="text-sm text-slate-500">Highlighted</div>
      <h3 className="mt-2 font-semibold text-xl">Kubernetes NGINX + SigNoz + EKS + CI</h3>
      <p className="mt-2 text-sm text-slate-600">A full-stack demo showcasing infra-as-code, observability and cost-aware autoscaling.</p>
      <div className="mt-4 flex gap-2">
        <a className="text-sm text-indigo-600 hover:underline" href="#">
          View code
        </a>
        <a className="text-sm border px-3 py-1 rounded" href="#">
          Live demo
        </a>
      </div>
    </>
  );
}

/* --------------------------
   Google Form embed
   -------------------------- */
function EmbeddedGoogleForm() {
  const formEmbeddedUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScK6_u2NRVkJeVnYWEAOJetln_5HPfcwQWGt_tLe0YtfJLeVw/viewform?embedded=true";
  const fallbackUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScK6_u2NRVkJeVnYWEAOJetln_5HPfcwQWGt_tLe0YtfJLeVw/viewform";

  return (
    <div>
      <div
        style={{
          position: "relative",
          paddingBottom: "120%", // controls aspect ratio of iframe
          height: 0,
          overflow: "hidden",
          borderRadius: 12,
        }}
        className="shadow"
      >
        <iframe
          src={formEmbeddedUrl}
          width="100%"
          height="1200"
          style={{ position: "absolute", top: 0, left: 0, border: 0 }}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact form — Google Form"
          className="rounded-xl"
        />
      </div>

      <div className="mt-3 text-sm text-slate-500">
        If the form doesn't load here,{" "}
        <a href={fallbackUrl} target="_blank" rel="noreferrer" className="text-indigo-600">
          open it in a new tab
        </a>
        .
      </div>
    </div>
  );
}
