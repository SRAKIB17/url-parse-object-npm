type setKeyType = {
  hash: string | null;
  protocol: string | null;
  origin: string | null;
  username: string | null;
  password: string | null;
  hostname: string | null;
  port: string | null;
  query: { [key: string]: string };
  path: string | null;
};

declare class Url {
  #url: string;
  #urlString: string;

  constructor(url: string);

  get urlParse(): setKeyType;

  get(
    key:
      | 'hostname'
      | 'path'
      | 'protocol'
      | 'username'
      | 'origin'
      | 'password'
      | 'query'
      | 'port'
      | 'hostname'
      | 'origin'
      | 'hash'
  ): string | null;

  toString(): string;

  set(
    key:
      | 'hostname'
      | 'path'
      | 'protocol'
      | 'username'
      | 'origin'
      | 'password'
      | 'query'
      | 'port'
      | 'hostname'
      | 'origin'
      | 'hash',
    value: string | { [key: string]: any }
  ): void;
}

export = Url;