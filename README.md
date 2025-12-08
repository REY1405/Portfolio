# Rishi Kathal — DevOps Portfolio

This repository is a starter DevOps portfolio showcasing:

- Next.js frontend (deployed on Vercel Hobby)
- Kubernetes manifests (Deployment, Service, Ingress, Secret) for demo
- CI: GitHub Actions to build and run simple checks
- Skeleton infra/observability notes

## Quick start (local)

1. Clone repo
2. `npm install`
3. `npm run dev` (http://localhost:3000)

## Deploy to Vercel

1. Push this repo to GitHub.
2. Create a Vercel account and connect your GitHub repo.
3. Use the defaults: Vercel detects Next.js and will build automatically.
4. Add any environment variables in Vercel dashboard (see `observability/otel-example.md` if using OTEL).

## Kubernetes demo

Apply the manifests in `k8s/` to any cluster (minikube, kind, or real cluster):

```bash
kubectl apply -k k8s/
```

## CI

GitHub Actions workflow is provided in `.github/workflows/ci.yml`.

## Notes

- The frontend is intentionally simple — focus is on infra and workflows.
- If you want, I can scaffold Terraform EKS + Karpenter or push this to a GitHub repo for you.
