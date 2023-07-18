# Express Node js API organized

index.js -> /routes -> /controller -> dataService
## API Reference

#### Get all items JSON

```http
  GET /api/colores
```


#### Get item JSON

```http
  GET /api/colores/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



#### View in HTML
```http
  GET /colores/${id}
```

