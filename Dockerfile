# --- Stage 1: Build Application ---
FROM node:20-alpine AS builder

# Đặt thư mục làm việc
WORKDIR /app

# Copy package.json và yarn.lock
COPY package.json yarn.lock ./

# Cài dependencies, giữ lại devDependencies để build
RUN yarn install --frozen-lockfile

# Copy toàn bộ mã nguồn vào container
COPY . ./

# Build Astro SSR
RUN yarn build

# --- Stage 2: Run Server ---
FROM node:20-alpine

WORKDIR /app

# Copy production build từ stage 1
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/yarn.lock ./

# Thiết lập môi trường production
ENV NODE_ENV=production

# Chạy server ở chế độ production
CMD ["node", "dist/server/entry.mjs"]

# Expose cổng mặc định của Astro SSR
EXPOSE 5000
