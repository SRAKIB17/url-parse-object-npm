var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Url_url, _Url_urlString;
class Url {
    constructor(url) {
        var _a, _b;
        _Url_url.set(this, void 0);
        _Url_urlString.set(this, void 0);
        __classPrivateFieldSet(this, _Url_url, url, "f");
        const { protocol, hash, hostname, origin, password, path, port, query, username } = this.urlParse;
        const queryCheck = (_b = (_a = Object === null || Object === void 0 ? void 0 : Object.entries(query)) === null || _a === void 0 ? void 0 : _a.map(r => {
            return `${r === null || r === void 0 ? void 0 : r[0]}=${r === null || r === void 0 ? void 0 : r[1]}`;
        })) === null || _b === void 0 ? void 0 : _b.join('&');
        __classPrivateFieldSet(this, _Url_urlString, `${protocol ?
            `${protocol}://` : ""}${username ? username : ""}${password ? `:${password}@` : username ? "@" : ""}${hostname || ""}:${port || ''}${path || ''}${queryCheck ? `?${queryCheck}` : ""}${hash ? `#${hash}` : ""}`, "f");
    }
    get urlParse() {
        var _a;
        const url = __classPrivateFieldGet(this, _Url_url, "f");
        const queryRegex = /\?([^#]*)/, authRegex = /\/\/(?:([^:]+)(?::([^@]+)))?/, pathnameRegex = /(?:^[^:]+:\/\/[^/]+)?(\/[^?#\/]*)/, portRegex = /:(\d+)/, hashRegex = /#([^]*)/, protocolRegex = /^(?:([^:]+):\/\/)?(?:([^:]+))/, urlRegex = /^(?:(\w+):\/\/)?(?:([^:]+)(?::([^@]+))?@)?([a-zA-Z0-9.-]+|(?:\d{1,3}\.){3}\d{1,3}|\[[a-fA-F0-9:]+\])(?::(\d+))?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/;
        function query() {
            // Extract the query part of the URL
            const queryMatch = url.match(queryRegex);
            if (queryMatch && queryMatch[1]) {
                const queryPart = decodeURIComponent(queryMatch[1]);
                // Split the query into individual key-value pairs
                const keyValuePairs = queryPart.split('&');
                const paramsObj = keyValuePairs === null || keyValuePairs === void 0 ? void 0 : keyValuePairs.map(keyValue => {
                    const [key, value] = keyValue.split('=');
                    return {
                        [key]: value
                    };
                });
                const queryParameters = Object.assign({}, ...paramsObj);
                return queryParameters;
            }
            else {
                return {};
            }
        }
        const matches = url.match(urlRegex);
        const hashMatch = url.match(hashRegex);
        const hash = hashMatch && hashMatch[1] || null;
        const protocol = matches && matches[1] || null;
        const username = matches && matches[2] || null;
        const password = matches && matches[3] || null;
        const hostname = matches && matches[4] || null;
        const port = matches && matches[5] || null;
        const path = ((_a = url === null || url === void 0 ? void 0 : url.match(pathnameRegex)) === null || _a === void 0 ? void 0 : _a[1]) || null;
        const origin = matches && (hostname ?
            (protocol ?
                `${protocol}://${hostname}${port ? `:${port}` : ""}`
                : `${hostname}${port ? `:${port}` : ""}`)
            : null) || null;
        return {
            path,
            hash,
            protocol,
            origin,
            username,
            password,
            hostname,
            href: url,
            port,
            query: query(),
        };
    }
    get(key) {
        return this.urlParse[key];
    }
    toString() {
        return __classPrivateFieldGet(this, _Url_urlString, "f");
    }
    set(key, value) {
        var _a, _b;
        const new_url = Object.assign(Object.assign({}, this.urlParse), { [key]: value });
        const { protocol, hash, hostname, origin, password, path, port, query, username } = new_url;
        const queryCheck = (_b = (_a = Object === null || Object === void 0 ? void 0 : Object.entries(query)) === null || _a === void 0 ? void 0 : _a.map(r => {
            return `${r === null || r === void 0 ? void 0 : r[0]}=${r === null || r === void 0 ? void 0 : r[1]}`;
        })) === null || _b === void 0 ? void 0 : _b.join('&');
        __classPrivateFieldSet(this, _Url_urlString, `${protocol ?
            `${protocol}://` : ""}${username ? username : ""}${password ? `:${password}@` : username ? "@" : ""}${hostname || ""}:${port || ''}${path || ''}${queryCheck ? `?${queryCheck}` : ""}${hash ? `#${hash}` : ""}`, "f");
    }
}
_Url_url = new WeakMap(), _Url_urlString = new WeakMap();
export default Url;
