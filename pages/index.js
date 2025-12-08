export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <header className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold">RK</div>
          <div>
            <h1 className="text-2xl font-semibold">Rishi Kathal — DevOps / SRE</h1>
            <p className="text-sm text-slate-600">Kubernetes · Cloud (AWS) · CI/CD · Observability · GitOps</p>
            <div className="mt-2 flex gap-2 text-xs">
              <a href="#projects" className="px-3 py-1 bg-slate-100 rounded">Projects</a>
              <a href="#about" className="px-3 py-1 bg-slate-100 rounded">About</a>
              <a href="#contact" className="px-3 py-1 bg-slate-100 rounded">Contact</a>
            </div>
          </div>
        </header>

        <section id="about" className="mb-6">
          <h2 className="text-lg font-medium mb-2">About me</h2>
          <p className="text-sm text-slate-700">I’m a DevOps / SRE engineer experienced in designing, building and maintaining cloud-native infrastructure. I work with Kubernetes (KinD, Karpenter), observability tools (SigNoz), GitOps, IaC and CI/CD automation. This portfolio demonstrates production-like deployments, monitoring and infra-as-code examples you can inspect and clone.</p>
        </section>

        <section id="projects" className="mb-6">
          <h2 className="text-lg font-medium mb-3">Featured projects</h2>
          <article className="mb-4 p-4 border rounded-lg">
            <h3 className="font-semibold">Kubernetes NGINX with Basic Auth (KinD)</h3>
            <p className="text-sm text-slate-600">A complete manifest set (ConfigMap, Secret, Deployment, Service, Ingress) runnable on KinD — demonstrates local cluster workflows, secret management, and basic ingress. Includes GitHub Actions to run tests on each PR.</p>
          </article>

          <article className="mb-4 p-4 border rounded-lg">
            <h3 className="font-semibold">Observability with SigNoz</h3>
            <p className="text-sm text-slate-600">End-to-end instrumented Java service with OpenTelemetry, pushing traces/metrics/logs to SigNoz. Shows SLO/SLI definitions and alert rules.</p>
          </article>

          <article className="mb-4 p-4 border rounded-lg">
            <h3 className="font-semibold">AWS infra + Karpenter for cluster autoscaling</h3>
            <p className="text-sm text-slate-600">Terraform modules to provision VPC, EKS cluster and Karpenter configuration that autos-scales based on real load patterns. Cost-optimization notes included.</p>
          </article>

          <article className="mb-4 p-4 border rounded-lg">
            <h3 className="font-semibold">CI/CD & GitOps</h3>
            <p className="text-sm text-slate-600">Example GitOps flow using Flux/ArgoCD, plus GitHub Actions for building images and creating releases. Demo of progressive delivery (canary) with flagging.</p>
          </article>
        </section>

        <section id="contact" className="mb-6">
          <h2 className="text-lg font-medium mb-2">Contact & links</h2>
          <p className="text-sm text-slate-700">Email: <a href="mailto:rishi@example.com" className="underline">rishi@example.com</a> — LinkedIn: <a href="https://www.linkedin.com/in/rishi-kathal" target="_blank" rel="noreferrer" className="underline">/in/rishi-kathal</a></p>
        </section>

      </div>
    </main>
  )
}
