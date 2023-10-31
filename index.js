var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _url_parse_url, _url_parse_urlString;
var url_parse = /** @class */ (function () {
    function url_parse(url) {
        var _a, _b;
        _url_parse_url.set(this, void 0);
        _url_parse_urlString.set(this, void 0);
        __classPrivateFieldSet(this, _url_parse_url, url, "f");
        var _c = this.url_parse, protocol = _c.protocol, hash = _c.hash, hostname = _c.hostname, origin = _c.origin, password = _c.password, path = _c.path, port = _c.port, query = _c.query, username = _c.username;
        var queryCheck = (_b = (_a = Object === null || Object === void 0 ? void 0 : Object.entries(query)) === null || _a === void 0 ? void 0 : _a.map(function (r) {
            return "".concat(r === null || r === void 0 ? void 0 : r[0], "=").concat(r === null || r === void 0 ? void 0 : r[1]);
        })) === null || _b === void 0 ? void 0 : _b.join('&');
        __classPrivateFieldSet(this, _url_parse_urlString, "".concat(protocol ?
            "".concat(protocol, "://") : "").concat(username ? username : "").concat(password ? ":".concat(password, "@") : username ? "@" : "").concat(hostname || "", ":").concat(port || '').concat(path || '').concat(queryCheck ? "?".concat(queryCheck) : "").concat(hash ? "#".concat(hash) : ""), "f");
    }
    Object.defineProperty(url_parse.prototype, "url_parse", {
        get: function () {
            var url = __classPrivateFieldGet(this, _url_parse_url, "f");
            var queryRegex = /\?([^#]*)/, hashRegex = /#([^]*)/, urlRegex = /^(?:([^:]+):\/\/)?(?:([^:]+)(?::([^@]+))?@)?([^/:]+)(?::(\d+))?([^?#]*)(\?[^#]*)?(#.*)?/;
            function query() {
                // Extract the query part of the URL
                var queryMatch = url.match(queryRegex);
                if (queryMatch && queryMatch[1]) {
                    var queryPart = decodeURIComponent(queryMatch[1]);
                    // Split the query into individual key-value pairs
                    var keyValuePairs = queryPart.split('&');
                    var paramsObj = keyValuePairs === null || keyValuePairs === void 0 ? void 0 : keyValuePairs.map(function (keyValue) {
                        var _a;
                        var _b = keyValue.split('='), key = _b[0], value = _b[1];
                        return _a = {},
                            _a[key] = value,
                            _a;
                    });
                    var queryParameters = Object.assign.apply(Object, __spreadArray([{}], paramsObj, false));
                    return queryParameters;
                }
                else {
                    return {};
                }
            }
            var matches = url.match(urlRegex);
            var origin = matches && matches[0] || null;
            var hashMatch = url.match(hashRegex);
            var hash = hashMatch && hashMatch[1];
            var protocol = matches && matches[1];
            var username = matches && matches[2];
            var password = matches && matches[3];
            var hostname = matches && matches[4];
            var port = matches && matches[5];
            var path = matches && matches[6];
            return {
                path: path,
                hash: hash,
                protocol: protocol,
                origin: origin,
                username: username,
                password: password,
                hostname: hostname,
                port: port,
                query: query(),
            };
        },
        enumerable: false,
        configurable: true
    });
    url_parse.prototype.get = function (key) {
        return this.url_parse[key];
    };
    url_parse.prototype.toString = function () {
        return __classPrivateFieldGet(this, _url_parse_urlString, "f");
    };
    url_parse.prototype.set = function (key, value) {
        var _a;
        var _b, _c;
        var new_url = __assign(__assign({}, this.url_parse), (_a = {}, _a[key] = value, _a));
        var protocol = new_url.protocol, hash = new_url.hash, hostname = new_url.hostname, origin = new_url.origin, password = new_url.password, path = new_url.path, port = new_url.port, query = new_url.query, username = new_url.username;
        var queryCheck = (_c = (_b = Object === null || Object === void 0 ? void 0 : Object.entries(query)) === null || _b === void 0 ? void 0 : _b.map(function (r) {
            return "".concat(r === null || r === void 0 ? void 0 : r[0], "=").concat(r === null || r === void 0 ? void 0 : r[1]);
        })) === null || _c === void 0 ? void 0 : _c.join('&');
        __classPrivateFieldSet(this, _url_parse_urlString, "".concat(protocol ?
            "".concat(protocol, "://") : "").concat(username ? username : "").concat(password ? ":".concat(password, "@") : username ? "@" : "").concat(hostname || "", ":").concat(port || '').concat(path || '').concat(queryCheck ? "?".concat(queryCheck) : "").concat(hash ? "#".concat(hash) : ""), "f");
    };
    return url_parse;
}());
_url_parse_url = new WeakMap(), _url_parse_urlString = new WeakMap();
var url = 'http://localhost:8080/@3rd-Eden/path/to/resource?name=John&id=123#section2';
var x = new url_parse(url);
console.log(x.toString());
x.set('hash', 'csofsofdfoof.com');
console.log(x.toString());
