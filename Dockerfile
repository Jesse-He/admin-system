FROM node:18-alpine

WORKDIR /app

# 复制依赖文件
COPY package.json ./

# 安装依赖
# 注意：由于缺少 package-lock.json，这里直接使用 npm install 生成
RUN npm install

# 复制源代码
COPY . .

# 暴露端口
EXPOSE 5173

# 启动开发服务器
# --host 0.0.0.0 确保容器外可以访问
CMD ["npm", "run", "dev", "--", "--host"]
