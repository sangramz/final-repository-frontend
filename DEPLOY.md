# Deployment Instructions for Google Cloud Run

## Prerequisites
- Google Cloud SDK (`gcloud`) installed and authenticated.
- Docker installed (optional, if building locally).

## 1. Build and Push to Google Container Registry (GCR) or Artifact Registry

Replace `PROJECT_ID` with your Google Cloud Project ID.

```bash
# Set your project ID
export PROJECT_ID=your-project-id

# Build the image using Cloud Build (recommended)
gcloud builds submit --tag gcr.io/$PROJECT_ID/emireq-frontend

# OR Build locally and push
docker build -t gcr.io/$PROJECT_ID/emireq-frontend .
docker push gcr.io/$PROJECT_ID/emireq-frontend
```

## 2. Deploy to Cloud Run

```bash
gcloud run deploy emireq-frontend \
  --image gcr.io/$PROJECT_ID/emireq-frontend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

## Configuration Details

- **Port**: The container listens on port `8080` (configured in `nginx.conf` and `Dockerfile`).
- **Proxy**: API requests to `/api/*` are proxied to `https://app.emireq.com/api/*` by Nginx.
- **Routing**: Nginx is configured to handle client-side routing (SPA) by redirecting all 404s to `index.html`.
