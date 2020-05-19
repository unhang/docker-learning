# Docker tips

## Build container với Volume

Có một Project React:

Có 2 file Docker,  `Dockerfile.dev` dùng cho môi trường develop, `Dockerfile.prod` dùng trong môi trường  product

`Dockerfile.dev` :
```
// ...
// Code trước
CMD ["npm", "run", "start"]
```
chạy cmd
```
docker build -f Dockerfile.dev .
```

## build container

```
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>
```
`-v /app/node_module`