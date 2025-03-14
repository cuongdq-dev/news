# ============================
# Stage 1: Build Astro (Debian tránh lỗi Rollup)
# ============================
FROM node:20-bullseye AS builder
WORKDIR /app

# Copy file package trước để tối ưu cache
COPY package.json package-lock.json ./

# Xóa cache, đảm bảo môi trường sạch
RUN npm cache clean --force && rm -rf node_modules package-lock.json && npm install --omit=dev --force

# Copy toàn bộ source code
COPY . .

# Build dự án
RUN npm run build

# ============================
# Stage 2: Run Astro SSR (Debian để tránh lỗi runtime)
# ============================
FROM node:20-bullseye AS runner
WORKDIR /app

# Copy code đã build
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Tạo user không root (tăng bảo mật)
RUN useradd -m appuser
USER appuser

# Mở cổng chạy ứng dụng
EXPOSE 5000
CMD ["node", "dist/server/entry.mjs"]
