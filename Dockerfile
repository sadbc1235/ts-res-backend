FROM node:18
RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .
RUN npm install --force
RUN npm run build
EXPOSE 1113
CMD ["node", "dist/main.js"]