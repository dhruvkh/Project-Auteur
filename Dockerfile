# Multistage Dockerfile for Project-Auteur (Vite/React)
# - Build stage: uses Node to install deps and build
# - Production stage: uses Node to run a tiny static server (no nginx)

FROM node:18-alpine AS builder
WORKDIR /app

# install dependencies based on package-lock / package.json
COPY package*.json ./
RUN npm ci --silent

# copy source and build
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

# install a small static server globally
RUN npm install -g serve@14.2.0 --silent

# copy production-ready build from builder
COPY --from=builder /app/dist ./dist

EXPOSE 3000
ENV PORT=3000

# run the static server binding to all interfaces
CMD ["serve", "-s", "dist", "-l", "tcp://0.0.0.0:3000"]
