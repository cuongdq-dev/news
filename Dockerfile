# ============================
# Stage 1: Build Astro (Dùng Node Alpine)
# ============================
FROM node:20-alpine AS builder
WORKDIR /app

# Copy chỉ các file cần thiết trước để tận dụng cache
COPY package.json package-lock.json ./

# Cài đặt dependencies chỉ cho production
RUN npm ci --omit=dev --no-audit --no-fund

# Copy source code còn lại (sau khi cài xong dependencies)
COPY . .

# Build Astro
RUN npm run build

# ============================
# Stage 2: Run Astro SSR (Sử dụng Alpine nhẹ nhất)
# ============================
FROM node:20-alpine AS runner
WORKDIR /app

# Chỉ copy các file cần thiết từ builder
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Xóa cache để giảm dung lượng
RUN npm cache clean --force

# Chạy với user không phải root để bảo mật
USER node

# Chạy ứng dụng
EXPOSE 5000
CMD ["node", "dist/server/entry.mjs"]
