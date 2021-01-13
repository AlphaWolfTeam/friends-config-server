FROM node:13.12-alpine as build
WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]
RUN npm install --silent
COPY . .
RUN npm run build

FROM node:13.12-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
COPY --from=build /usr/src/app/dist /app/dist
RUN npm install --silent
CMD npm run serve

EXPOSE 8000