# How to use me

Launch me for dev :

```javascript
npm run start:dev
```

Run for production :

```javascript
npm run start
```

Build me :

```javascript
npm run build
```

# Test me

```javascript
npm run start:dev
```

then

```javascript
curl localhost:3000/one
```

```javascript
curl localhost:3000/two
```

# Dockerize me

```javascript
docker build . --tag template-node
```

```javascript
docker images
```

```javascript
docker run -d -p 8000:3000 --name template-node template-node
```

then

```javascript
curl localhost:3000/one
```

```javascript
curl localhost:3000/two
```

then

```javascript
docker ps
```

```javascript
docker stop template-node
```

```javascript
docker rm template-node
```

then

```javascript
docker ps
```

```javascript
docker stop template-node
```

then

```javascript
docker images
```

```javascript
docker rmi template-node
```
