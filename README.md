
[![Version npm](https://img.shields.io/npm/v/url-parse-modify.svg?style=flat-square)](https://www.npmjs.com/package/url-parse-modify)

## Npm install

```
npm i url-parse-modify
```

### Parse url

```js
const url = new Url('http://localhost:8080/3rd-Eden/path/to/resource?name=John&id=123#section2')
console.log(url.urlParse)
```

**return:**

```json
{
  path: '/3rd-Eden/path/to/resource',
  hash: 'section2',
  protocol: 'http',
  origin: 'http://localhost',
  username: null,
  password: null,
  hostname: 'localhost',
  port: '8080',
  query: { name: 'John', id: '123' }
}
```

| Property  | Description                                        |
|-----------|----------------------------------------------------|
| hash      | The URL hash fragment, can be a string or null.   |
| protocol  | The URL protocol (e.g., "http" or "https"), or null. |
| origin    | The URL origin (e.g., "<https://example.com>"), or null. |
| username  | A username in the URL, can be a string or null.   |
| password  | A password in the URL, can be a string or null.   |
| hostname  | The URL hostname (e.g., "example.com"), or null. |
| port      | The URL port (e.g., "8080"), can be a string or null. |
| query     | An object representing URL query parameters.     |
| path      | The URL path, can be a string or null.            |

## toString()

```js
const url = new Url('http://localhost:8080/3rd-Eden/path/to/resource?name=John&id=123#section2')
console.log(url.toString())

//http://localhost:8080/3rd-Eden/path/to/resource?name=John&id=123#section2
```

## get(key)

```js
const url = new Url('http://localhost:8080/3rd-Eden/path/to/resource?name=John&id=123#section2')
const host = url.get('hostname')
console.log(host)
//localhost
```

| Key        | Description                                        |
|------------|----------------------------------------------------|
| 'hash'     | Represents the URL hash fragment.                 |
| 'protocol' | Represents the URL protocol (e.g., "http" or "https"). |
| 'origin'   | Represents the URL origin (e.g., "<https://example.com>"). |
| 'username' | Represents a username in the URL.                |
| 'password' | Represents a password in the URL.                |
| 'hostname' | Represents the URL hostname (e.g., "example.com"). |
| 'port'     | Represents the URL port (e.g., "8080").           |
| 'query'    | Represents URL query parameters as an object.    |
| 'path'     | Represents the URL path.                         |

## set(key,value)

```js
const url = new Url('http://localhost:8080/3rd-Eden/path/to/resource?name=John&id=123#section2')
url.set('hostname', 'google.com')
console.log(url.toString())
//http://google.com:8080/3rd-Eden/path/to/resource?name=John&id=123#section2
```

| Parameter  | Description                                        |
|------------|----------------------------------------------------|
| key        | A string literal representing the property to be set. Valid options include: 'hash', 'protocol', 'origin', 'username', 'password', 'hostname', 'port', 'query', or 'path'. |
| value      | The value to set for the specified property. It can be either a string or an object(query) with string keys and any values. |

```js
const url = new Url('http://localhost:8080/3rd-Eden/path/to/resource?name=John&id=123#section2')
url.set('query', { name: 'rakib', id: '5345345435' })
console.log(url.toString())
//http://localhost:8080/3rd-Eden/path/to/resource?name=rakib&id=5345345435#section2

```
