# Producción multi-stage Dockerfile para una app Next.js (app dir)
# Usa Node 18 Alpine para imágenes pequeñas

FROM node:18-alpine AS builder
WORKDIR /app

# Copiar archivos de package para instalar dependencias
COPY package*.json ./
COPY pnpm-lock.yaml* ./

# Instalar dependencias (npm se usa como fallback si no hay pnpm instalado)
RUN npm install --legacy-peer-deps

# Copiar el resto del proyecto y construir
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

# Solo copiar lo necesario desde el builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Comando de inicio: usa el script "start" definido en package.json (next start)
CMD ["npm", "run", "start"]
