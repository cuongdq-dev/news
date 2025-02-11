# Stage 1: Build Astro SSR
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package.json và cài đặt dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code & build
COPY . .
RUN npm run build

# Stage 2: Chạy ứng dụng trong production
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app /app

ENV NODE_ENV=production
EXPOSE 5000
CMD ["node", "dist/server/entry.mjs"]
