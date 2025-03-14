# Stage 1: Build Astro
FROM node:20-alpine AS builder
WORKDIR /app

# Cài đặt git nếu cần
RUN apk add --no-cache git

# Copy package.json và lockfile
COPY package.json package-lock.json ./

# Cài đặt dependencies (dùng npm install nếu thiếu lockfile)
RUN npm install --omit=dev

# Copy source code & build
COPY . .
RUN npm run build

# Stage 2: Chạy Astro SSR
FROM node:20-alpine
WORKDIR /app

# Copy chỉ các file cần thiết từ builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Xóa git để giảm dung lượng
RUN apk del git || true

EXPOSE 5000
CMD ["node", "dist/server/entry.mjs"]
