# ============================
# Stage 1: Build Astro
# ============================
FROM node:20-alpine AS builder
WORKDIR /app

# Cài đặt Git (nếu cần) và các công cụ tối thiểu
RUN apk add --no-cache git bash

# Chỉ copy các file cần thiết trước để tận dụng cache
COPY package.json package-lock.json ./

# Cài đặt dependencies chỉ cần cho production
RUN npm ci --omit=dev --no-optional

# Copy toàn bộ source code
COPY . .

# Build Astro
RUN npm run build

# ============================
# Stage 2: Run Astro SSR
# ============================
FROM node:20-alpine AS runner
WORKDIR /app

# Chỉ copy các file cần thiết từ builder để giảm dung lượng
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Chạy với user không phải root để bảo mật hơn
USER node

# Chạy ứng dụng
EXPOSE 5000
CMD ["node", "dist/server/entry.mjs"]
