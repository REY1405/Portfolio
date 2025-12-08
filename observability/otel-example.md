OpenTelemetry quick notes:
- Frontend: can instrument via browser OTEL SDK and export traces to an OTLP collector.
- Backend services: use OpenTelemetry Java/.NET/Node SDKs.
- SigNoz can be used as an open-source observability backend.

Add env vars in Vercel: OTEL_EXPORTER_OTLP_ENDPOINT, OTEL_SERVICE_NAME, etc.
