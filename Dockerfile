FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Exponha a porta em que a API irá rodar
EXPOSE 3000
# Comando para iniciar a aplicação
CMD ["npm", "start"]