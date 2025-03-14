# ============================
# Stage 1: Build Astro (Dùng Node Debian để tránh lỗi Rollup)
# ============================
FROM node:20-bullseye AS builder
WORKDIR /app

# Chỉ copy những file quan trọng trước để tận dụng cache
COPY package.json package-lock.json ./

# Xóa cache cũ & cài dependencies cho production
RUN npm cache clean --force && rm -rf node_modules && npm ci --omit=dev --no-optional

# Copy source code còn lại
COPY . .

# Build Astro
RUN npm run build

# ============================
# Stage 2: Run Astro SSR (Sử dụng Alpine nhẹ hơn)
# ============================
FROM node:20-alpine AS runner
WORKDIR /app

# Chỉ copy các file cần thiết từ builder
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Chạy với user không phải root để bảo mật
USER node

# Chạy ứng dụng
EXPOSE 5000
CMD ["node", "dist/server/entry.mjs"]
