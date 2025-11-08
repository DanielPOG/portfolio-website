# Docker + Azure — Guía rápida

Este archivo explica cómo construir la imagen Docker de tu app Next.js, probarla localmente y desplegarla en Azure (manual y usando GitHub Actions).

1) Requisitos
- Docker instalado
- Azure CLI instalado y logueado (`az login`)
- (Opcional) Azure Subscription con permisos para crear recursos

2) Construir y probar localmente

Desde la raíz del proyecto:

```powershell
# Construir la imagen (reemplaza myapp por el nombre que quieras)
docker build -t myapp:latest .

# Ejecutar la imagen localmente
docker run -p 3000:3000 --env PORT=3000 myapp:latest

# Abre http://localhost:3000
```

3) Subir la imagen a Azure Container Registry (ACR) - manual

```powershell
# 1) Crear resource group
az group create --name myResourceGroup --location eastus

# 2) Crear ACR
az acr create --resource-group myResourceGroup --name MyUniqueAcrName --sku Basic

# 3) Loguear Docker en ACR
az acr login --name MyUniqueAcrName

# 4) Taggear y push
docker tag myapp:latest MyUniqueAcrName.azurecr.io/myapp:v1
docker push MyUniqueAcrName.azurecr.io/myapp:v1
```

4) Desplegar en Azure App Service (Web App for Containers)

```powershell
# 1) Crear App Service plan
az appservice plan create --name myPlan --resource-group myResourceGroup --sku B1 --is-linux

# 2) Crear Web App apuntando a la imagen del ACR
az webapp create --resource-group myResourceGroup --plan myPlan --name my-webapp-name --deployment-container-image-name MyUniqueAcrName.azurecr.io/myapp:v1

# 3) Configurar credenciales de ACR si es necesario (uso de credenciales de administrador)
az webapp config container set --name my-webapp-name --resource-group myResourceGroup --docker-custom-image-name MyUniqueAcrName.azurecr.io/myapp:v1 --docker-registry-server-url https://MyUniqueAcrName.azurecr.io

# Si usas identidad administrada o service principal, configura las credenciales apropiadas.
```

5) Despliegue automático con GitHub Actions (esquema)

Explicación: crea un secret `AZURE_CREDENTIALS` con las credenciales de un service principal y `ACR_NAME`, `RESOURCE_GROUP`, `APP_NAME`.

Ejemplo de job (añádelo en `.github/workflows/azure-container.yml`):

```yaml
name: Build and deploy to Azure

on:
  push:
    branches: [ main ]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build and push Docker image
        uses: docker/build-push-action@v4
        with:
          push: true
          tags: ${{ env.ACR_LOGIN_SERVER }}/myapp:${{ github.sha }}
      - name: Azure Login
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}
      - name: Deploy to Web App for Containers
        uses: azure/webapps-deploy@v2
        with:
          app-name: ${{ secrets.APP_NAME }}
          images: ${{ env.ACR_LOGIN_SERVER }}/myapp:${{ github.sha }}

```

6) Notas y recomendaciones
- Asegúrate que `package.json` tenga el script `start` que ejecute `next start -p $PORT`, por ejemplo:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start -p $PORT"
}
```

- Si usas `pnpm` modifica el Dockerfile para ejecutar `pnpm install` en vez de `npm install`.
- Para entornos con SSL, custom domains o escalado, considera usar Azure App Service o Azure Kubernetes Service según la complejidad.
