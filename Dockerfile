# ============================
# Stage 1: Build Astro
# ============================
FROM node:20-alpine AS builder
WORKDIR /app

# Chỉ copy những file quan trọng trước để tận dụng cache
COPY package.json yarn.lock ./

# Xóa cache cũ & cài dependencies cho production (bỏ qua postinstall)
RUN yarn install --frozen-lockfile --ignore-scripts --network-timeout 1000000

# Copy source code còn lại
COPY . .

# Build Astro
RUN yarn install --immutable
RUN yarn build

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
