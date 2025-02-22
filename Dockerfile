# Stage 1: Build Astro
FROM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache git && git pull || true


# Copy package.json & lockfile
COPY package.json ./
RUN npm install

# Copy source code & build
COPY . .
RUN npm run build

# Stage 2: Run Astro SSR
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app /app

EXPOSE 5000
CMD ["node", "dist/server/entry.mjs"]