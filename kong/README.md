## To test if your postgres is running:

```bash
$ psql -h localhost -p 5432 -U kong
```

## Add your API using the Admin API
```bash
$ curl -i -X POST \
  --url http://localhost:8001/apis/ \
  --data 'name=example-api' \
  --data 'hosts=example.com' \
  --data 'upstream_url=http://httpbin.org'
```

## Forward your requests through Kong

```bash
$ curl -i -X GET \
  --url http://localhost:8000/ \
  --header 'Host: example.com'
```
