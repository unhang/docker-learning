# Kiến trúc container - container

## Example project

#### một app đếm số lượt visit trang web

1. tạo file `package.json` với nội dung:

```
{
  "description": "A simple project how to use docker",
  "author": {
    "name": "unhang"
  },
  "dependencies": {
    "express": "*",
    "redis": "2.8.0"
  },
  "scripts": {
    "start": "node index.js"
  },
  "license": "MIT",
  "repository": {
    "url": "https://somewhereovertherainbow.com"
  }
}
```

2. Tạo file `index.js`
```const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err,visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => console.log('app is listenning on port 80801'));
```

## Docker compose

> Mệt lắm àh nha

[Github](https://github.com)

```
```