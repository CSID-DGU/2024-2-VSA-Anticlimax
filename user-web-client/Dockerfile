# Stage 1: Build
FROM node:18.19.1-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./

# 캐시 레이어 최적화를 위해 dependencies와 devDependencies를 분리 설치
RUN npm ci --only=production && \
    npm ci

# 소스 코드 복사 및 빌드
COPY . .
RUN npm run build && \
    npm prune --production

# Stage 2: Production
FROM node:18.19.1-alpine AS production

WORKDIR /app

# 필요한 파일만 복사
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npx", "next", "start"]