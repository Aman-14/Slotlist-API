# Slotlist Generator

Just a simple and small API that generates slotlist

## Routes

There are only two routes:\
`GET /ping` that respond with `Pong!` and used to see if server is alive.\
`POST /slotlist` that generates slotlist.

## API

To generate slotlist you have to make a `POST` request on `/slotlist` endpoint.
It accepts data in the following format:

```json
{
  "content_array": []
}
```

**NOTE:**  
`content_array` should be a array of Strings containing teamnames. Otherwise the endpoint will return a message `Empty-Body`
