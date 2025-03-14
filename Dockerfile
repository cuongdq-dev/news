# ============================
# Stage 1: Build Astro (Dùng Debian thay vì Alpine)
# ============================
FROM node:20-bullseye AS builder
WORKDIR /app

# Copy package.json & lockfile
COPY package.json package-lock.json ./

# Cài đặt dependencies
RUN npm cache clean --force && rm -rf node_modules && npm ci --omit=dev --no-audit --no-fund

# Copy source code còn lại
COPY . .

# Build Astro
RUN npm run build

# ============================
# Stage 2: Run Astro SSR (Vẫn dùng Alpine cho nhẹ)
# ============================
FROM node:20-alpine AS runner
WORKDIR /app

# Chỉ copy file cần thiết
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Chạy với user không phải root để bảo mật
USER node

# Chạy ứng dụng
EXPOSE 5000
CMD ["node", "dist/server/entry.mjs"]
