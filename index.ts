type setKeyType = {
  hash: string | null,
  protocol: string | null,
  origin: string | null,
  username: string | null,
  password: string | null,
  hostname: string | null,
  port: string | null,
  query: {
    [key: string]: string
  },
  path: string | null
}

class url_parse {
  #url: string;
  #urlString: string
  constructor(url: string) {
    this.#url = url
    const { protocol, hash, hostname, origin, password, path, port, query, username } = this.url_parse
    const queryCheck = Object?.entries(query)?.map(r => {
      return `${r?.[0]}=${r?.[1]}`
    })?.join('&');

    this.#urlString = `${protocol ?
      `${protocol}://` : ""
      }${username ? username : ""}${password ? `:${password}@` : username ? "@" : ""}${hostname || ""}:${port || ''}${path || ''}${queryCheck ? `?${queryCheck}` : ""}${hash ? `#${hash}` : ""}`;
  }
  get url_parse(): setKeyType {
    const url = this.#url
    const queryRegex = /\?([^#]*)/,
      hashRegex = /#([^]*)/,
      urlRegex = /^(?:([^:]+):\/\/)?(?:([^:]+)(?::([^@]+))?@)?([^/:]+)(?::(\d+))?([^?#]*)(\?[^#]*)?(#.*)?/;

    function query() {
      // Extract the query part of the URL
      const queryMatch = url.match(queryRegex);
      if (queryMatch && queryMatch[1]) {
        const queryPart = decodeURIComponent(queryMatch[1]);
        // Split the query into individual key-value pairs
        const keyValuePairs = queryPart.split('&')
        const paramsObj: Array<{ [key: string]: any }> = keyValuePairs?.map(keyValue => {
          const [key, value] = keyValue.split('=');
          return {
            [key]: value
          }
        })
        const queryParameters = Object.assign({}, ...paramsObj);
        return queryParameters
      } else {
        return {}
      }
    }
    const matches = url.match(urlRegex)
    const origin = matches && matches[0] || null
    const hashMatch = url.match(hashRegex);
    const hash = hashMatch && hashMatch[1];
    const protocol = matches && matches[1];
    const username = matches && matches[2];
    const password = matches && matches[3];
    const hostname = matches && matches[4];
    const port = matches && matches[5];
    const path = matches && matches[6];

    return {
      path,
      hash,
      protocol,
      origin,
      username,
      password,
      hostname,
      port,
      query: query(),
    }
  }
  get(key: 'hostname' | 'path' | 'protocol' | 'username' | 'origin' | 'password' | 'query' | 'port' | 'hostname' | 'origin' | 'hash') {
    return this.url_parse[key]
  }
  toString() {

    return this.#urlString
  }
  set(
    key: 'hostname' | 'path' | 'protocol' | 'username' | 'origin' | 'password' | 'query' | 'port' | 'hostname' | 'origin' | 'hash',
    value: string | { [key: string]: any }
  ) {
    const new_url = {
      ...this.url_parse,
      [key]: value
    }
    const { protocol, hash, hostname, origin, password, path, port, query, username } = new_url
    const queryCheck = Object?.entries(query)?.map(r => {
      return `${r?.[0]}=${r?.[1]}`
    })?.join('&');

    this.#urlString = `${protocol ?
      `${protocol}://` : ""
      }${username ? username : ""}${password ? `:${password}@` : username ? "@" : ""}${hostname || ""}:${port || ''}${path || ''}${queryCheck ? `?${queryCheck}` : ""}${hash ? `#${hash}` : ""}`;
  }

}
const url = 'http://localhost:8080/@3rd-Eden/path/to/resource?name=John&id=123#section2';
const x = new url_parse(url)
console.log(x.toString())
x.set('hash', 'csofsofdfoof.com')
console.log(x.toString())


