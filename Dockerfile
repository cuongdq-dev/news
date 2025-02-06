# Sử dụng Node.js phiên bản 16 làm môi trường xây dựng
FROM node:20-alpine as builder

# Cài đặt pnpm toàn cầu
RUN npm install -g pnpm

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép file pnpm-lock.yaml và package.json vào container
COPY pnpm-lock.yaml ./
COPY package.json ./

# Cài đặt các phụ thuộc bằng pnpm
RUN pnpm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Xây dựng ứng dụng
RUN pnpm run build

# Sử dụng Nginx để phục vụ ứng dụng
FROM nginx:alpine

# Sao chép các file build từ bước trước vào thư mục phục vụ của Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Mở cổng 80
EXPOSE 80

# Khởi động Nginx
CMD ["nginx", "-g", "daemon off;"]
