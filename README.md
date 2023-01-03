# emiliansch-portfolio

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Development

```sh
# Compile and Hot-Reload for Development
npm run dev

# Type-Check, Compile and Minify for Production
npm run build
```

### Production

```sh
# Build docker container from Vue.JS project
docker build -t emilianscheel/emilianscheel-portfolio:latest .

# Run docker container
docker run -d \
    --restart=always \
    --name emilianscheel-portfolio \
    -p 2173:2173 emilianscheel/emilianscheel-portfolio:latest
```
