import Head from 'next/head'

export default function Home() {
  const title = "Rishi Kathal — DevOps | SRE";
  const description = "DevOps / SRE portfolio — Kubernetes, GitOps, CI/CD, Observability. Rishi Kathal (kathal.rishi@gmail.com)";
  const og = "/og-image.svg";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={og} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 antialiased">
        <header className="max-w-6xl mx-auto px-6 pt-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-cyan-400 text-white font-bold">RK</div>
              <div>
                <p className="text-sm font-medium">Rishi Kathal</p>
                <p className="text-xs text-slate-500">DevOps · SRE · Cloud · Observability</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#skills" className="hover:underline">Skills</a>
              <a href="#contact" className="hover:underline">Contact</a>
              <a href="https://www.linkedin.com/in/rishi-kathal-40412814b" target="_blank" rel="noreferrer" className="bg-slate-100 px-3 py-1 rounded-md text-xs">LinkedIn</a>
            </div>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-12">
          <section className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I’m <span className="text-indigo-600">Rishi</span>. I build reliable cloud infrastructure & developer workflows.</h1>
              <p className="mt-4 text-lg text-slate-600">I’m a DevOps / SRE engineer focusing on Kubernetes, GitOps, CI/CD automation, observability, and cost optimization. Below are production-like projects and infrastructure examples you can clone and inspect.</p>

              <div className="mt-6 flex gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:shadow-md">See Projects</a>
                <a href="mailto:kathal.rishi@gmail.com" className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg text-sm">Email me</a>
              </div>

              <div className="mt-6 text-sm text-slate-500">
                <p><strong>Location:</strong> India • <strong>Open to:</strong> SRE / Senior DevOps roles & freelance infra projects</p>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-white to-slate-50 shadow-lg border border-slate-100">
              <h3 className="text-lg font-semibold mb-3">Highlighted projects</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li>
                  <strong>Kubernetes NGINX with Basic Auth (KinD)</strong>
                  <div className="text-xs text-slate-500">Manifests, Kustomize overlays, sealed secrets, and GitHub Actions KinD tests.</div>
                </li>
                <li>
                  <strong>Observability with SigNoz & OpenTelemetry</strong>
                  <div className="text-xs text-slate-500">Instrumented Java service, SLO/SLI examples, dashboards and alerting rules.</div>
                </li>
                <li>
                  <strong>AWS EKS + Karpenter</strong>
                  <div className="text-xs text-slate-500">Modular Terraform, Karpenter provisioning and cost-aware autoscaling strategies.</div>
                </li>
                <li>
                  <strong>CI/CD & GitOps</strong>
                  <div className="text-xs text-slate-500">Flux/ArgoCD examples, GitHub Actions for build/test/publish and progressive delivery patterns.</div>
                </li>
              </ul>

              <div className="mt-6">
                <a href="#projects" className="text-sm text-indigo-600 hover:underline">Explore all projects →</a>
              </div>
            </div>
          </section>

          <section id="projects" className="mt-12">
            <h2 className="text-2xl font-bold">Projects</h2>
            <p className="mt-2 text-slate-600 text-sm">Each project contains source code, infra-as-code, CI examples, and deployment instructions.</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <article className="p-6 bg-white rounded-2xl shadow hover:shadow-md border">
                <h3 className="font-semibold">Kubernetes NGINX with Basic Auth (KinD)</h3>
                <p className="mt-2 text-sm text-slate-600">Complete manifests (ConfigMap, Secret, Deployment, Service, Ingress) runnable on KinD. Includes GitHub Actions to run e2e KinD tests on PRs.</p>
                <div className="mt-4 flex gap-2">
                  <a className="text-sm text-indigo-600 hover:underline" href="#">View repo</a>
                  <a className="text-sm border px-3 py-1 rounded" href="#">Demo</a>
                </div>
              </article>

              <article className="p-6 bg-white rounded-2xl shadow hover:shadow-md border">
                <h3 className="font-semibold">Observability with SigNoz</h3>
                <p className="mt-2 text-sm text-slate-600">Instrumented sample service + dashboards and alerting — shows traces, metrics and logs together.</p>
                <div className="mt-4 flex gap-2">
                  <a className="text-sm text-indigo-600 hover:underline" href="#">View repo</a>
                  <a className="text-sm border px-3 py-1 rounded" href="#">Dashboard</a>
                </div>
              </article>

              <article className="p-6 bg-white rounded-2xl shadow hover:shadow-md border">
                <h3 className="font-semibold">AWS EKS + Karpenter</h3>
                <p className="mt-2 text-sm text-slate-600">Terraform module + Karpenter config for scale-to-zero and burst autoscaling. Cost analysis included.</p>
                <div className="mt-4 flex gap-2">
                  <a className="text-sm text-indigo-600 hover:underline" href="#">View repo</a>
                </div>
              </article>

              <article className="p-6 bg-white rounded-2xl shadow hover:shadow-md border">
                <h3 className="font-semibold">CI/CD & GitOps</h3>
                <p className="mt-2 text-sm text-slate-600">GitHub Actions + Flux example repo that shows image build, tests, and GitOps sync for deployment.</p>
                <div className="mt-4 flex gap-2">
                  <a className="text-sm text-indigo-600 hover:underline" href="#">View repo</a>
                </div>
              </article>
            </div>
          </section>

          <section id="skills" className="mt-12">
            <h2 className="text-2xl font-bold">Skills & Tools</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {['Kubernetes', 'AWS (EKS)', 'Terraform', 'GitOps', 'CI/CD (GitHub Actions)', 'OpenTelemetry', 'SigNoz', 'Docker', 'Helm', 'Karpenter'].map(skill => (
                <span key={skill} className="text-xs bg-slate-100 px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">SLOs / Observability</h3>
              <p className="mt-2 text-sm text-slate-600">I design SLIs and SLOs, implement tracing and metrics using OpenTelemetry, and build dashboards + alerts in SigNoz.</p>
            </div>
          </section>

          <section id="contact" className="mt-12 bg-white p-6 rounded-2xl shadow border">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-2 text-sm text-slate-600">Want to hire me, collaborate, or see the code? Reach out.</p>

            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium">Email</p>
                <a href="mailto:kathal.rishi@gmail.com" className="text-indigo-600 hover:underline">kathal.rishi@gmail.com</a>
              </div>
              <div>
                <p className="text-sm font-medium">LinkedIn</p>
                <a href="https://www.linkedin.com/in/rishi-kathal-40412814b" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">/in/rishi-kathal-40412814b</a>
              </div>
              <div>
                <p className="text-sm font-medium">Resume</p>
                <a className="text-indigo-600 hover:underline" href="/resume.pdf" download>Download</a>
              </div>
            </div>

            <form className="mt-6 grid gap-3 md:grid-cols-2">
              <input className="border rounded px-3 py-2" placeholder="Your name" />
              <input className="border rounded px-3 py-2" placeholder="Email" />
              <textarea className="border rounded px-3 py-2 md:col-span-2" placeholder="Message" rows={4}></textarea>
              <div className="md:col-span-2 flex items-center gap-3">
                <button type="button" onClick={() => window.location = 'mailto:kathal.rishi@gmail.com'} className="bg-indigo-600 text-white px-4 py-2 rounded">Send email</button>
                <p className="text-xs text-slate-500">(This button opens your email client — no backend required.)</p>
              </div>
            </form>
          </section>

          <footer className="mt-12 text-center text-xs text-slate-400">© {new Date().getFullYear()} Rishi Kathal — Built with ❤️ • Hosted on Vercel</footer>
        </main>
      </div>
    </>
  )
}
