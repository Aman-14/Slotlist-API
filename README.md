# Slotlist Generator

Just a simple and small API that generates slotlist.

Base URL : `https://slotlistapi.herokuapp.com/`

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

Response : The api will resond with an Array containing teamnames. And it will add `NOT FOUND` if message doesn't contain teamname

**NOTE:**  
`content_array` should be a array of Strings containing teamnames. Otherwise the endpoint will return a message `Empty-Body`
