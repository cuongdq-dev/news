# Stage 1: Build Astro
FROM node:20-alpine AS builder
WORKDIR /app

# Cài đặt git nếu cần
RUN apk add --no-cache git

# Copy package.json và package-lock.json
COPY package.json package-lock.json ./

# Cài đặt tất cả dependencies (bao gồm cả devDependencies)
RUN npm install

# Copy source code
COPY . .

# Build Astro
RUN npm run build

# Stage 2: Chạy Astro SSR
FROM node:20-alpine
WORKDIR /app

# Copy các file cần thiết từ builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Xóa git và package không cần thiết để giảm dung lượng
RUN apk del git || true
RUN npm prune --omit=dev  # Giữ lại dependencies chính, loại bỏ devDependencies

EXPOSE 5000
CMD ["node", "dist/server/entry.mjs"]
