# Stage 1: Build Astro
FROM node:20-alpine AS builder
WORKDIR /app

# Cài đặt git nếu cần clone repo (không cần nếu code đã có sẵn)
RUN apk add --no-cache git

# Copy package.json & lockfile để cache tốt hơn
COPY package.json package-lock.json ./

# Cài đặt dependencies, chỉ production (bỏ qua devDependencies)
RUN npm ci --production

# Copy source code & build
COPY . .
RUN npm run build

# Stage 2: Run Astro SSR
FROM node:20-alpine
WORKDIR /app

# Copy output từ stage build (chỉ cần dist, node_modules, package.json)
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Không cần git trong production => giúp giảm dung lượng
RUN apk del git || true

EXPOSE 5000
CMD ["node", "dist/server/entry.mjs"]
