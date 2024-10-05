# Pasos que realizara mi archivo dockerfile
# Usar una imagen base de Node.js (mi version es la 20)
FROM node:20-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /Users/CruzN/PServidor

# Copiar el package.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el código del proyecto dentro del contenedor
COPY . .

# Exponer el puerto 3000 para poder acceder al servidor
EXPOSE 3000

# Comando para correr la aplicación
CMD ["node", "index.js"]
