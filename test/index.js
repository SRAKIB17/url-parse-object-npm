"use strict";
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
var _Url_url, _Url_urlString;
Object.defineProperty(exports, "__esModule", { value: true });
var Url = /** @class */ (function () {
    function Url(url) {
        var _a, _b;
        _Url_url.set(this, void 0);
        _Url_urlString.set(this, void 0);
        __classPrivateFieldSet(this, _Url_url, url, "f");
        var _c = this.urlParse, protocol = _c.protocol, hash = _c.hash, hostname = _c.hostname, origin = _c.origin, password = _c.password, path = _c.path, port = _c.port, query = _c.query, username = _c.username;
        var queryCheck = (_b = (_a = Object === null || Object === void 0 ? void 0 : Object.entries(query)) === null || _a === void 0 ? void 0 : _a.map(function (r) {
            return "".concat(r === null || r === void 0 ? void 0 : r[0], "=").concat(r === null || r === void 0 ? void 0 : r[1]);
        })) === null || _b === void 0 ? void 0 : _b.join('&');
        __classPrivateFieldSet(this, _Url_urlString, "".concat(protocol ?
            "".concat(protocol, "://") : "").concat(username ? username : "").concat(password ? ":".concat(password, "@") : username ? "@" : "").concat(hostname || "", ":").concat(port || '').concat(path || '').concat(queryCheck ? "?".concat(queryCheck) : "").concat(hash ? "#".concat(hash) : ""), "f");
    }
    Object.defineProperty(Url.prototype, "urlParse", {
        get: function () {
            var _a;
            var url = __classPrivateFieldGet(this, _Url_url, "f");
            var queryRegex = /\?([^#]*)/, authRegex = /\/\/(?:([^:]+)(?::([^@]+)))?/, pathnameRegex = /(?:^[^:]+:\/\/[^/]+)?(\/[^?#]*)/, portRegex = /:(\d+)/, hashRegex = /#([^]*)/, protocolRegex = /^(?:([^:]+):\/\/)?(?:([^:]+))/, urlRegex = /^(?:(\w+):\/\/)?(?:([^:]+)(?::([^@]+))?@)?([a-zA-Z0-9.-]+|(?:\d{1,3}\.){3}\d{1,3}|\[[a-fA-F0-9:]+\])(?::(\d+))?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/;
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
            var hashMatch = url.match(hashRegex);
            var hash = hashMatch && hashMatch[1] || null;
            var protocol = matches && matches[1] || null;
            var username = matches && matches[2] || null;
            var password = matches && matches[3] || null;
            var hostname = matches && matches[4] || null;
            var port = matches && matches[5] || null;
            var path = ((_a = url === null || url === void 0 ? void 0 : url.match(pathnameRegex)) === null || _a === void 0 ? void 0 : _a[1]) || null;
            var origin = matches && (hostname ?
                (protocol ?
                    "".concat(protocol, "://").concat(hostname).concat(port ? ":".concat(port) : "")
                    : "".concat(hostname).concat(port ? ":".concat(port) : ""))
                : null) || null;
            return {
                path: path,
                hash: hash,
                protocol: protocol,
                origin: origin,
                username: username,
                password: password,
                hostname: hostname,
                href: url,
                port: port,
                query: query(),
            };
        },
        enumerable: false,
        configurable: true
    });
    Url.prototype.get = function (key) {
        return this.urlParse[key];
    };
    Url.prototype.toString = function () {
        return __classPrivateFieldGet(this, _Url_urlString, "f");
    };
    Url.prototype.set = function (key, value) {
        var _a;
        var _b, _c;
        var new_url = __assign(__assign({}, this.urlParse), (_a = {}, _a[key] = value, _a));
        var protocol = new_url.protocol, hash = new_url.hash, hostname = new_url.hostname, origin = new_url.origin, password = new_url.password, path = new_url.path, port = new_url.port, query = new_url.query, username = new_url.username;
        var queryCheck = (_c = (_b = Object === null || Object === void 0 ? void 0 : Object.entries(query)) === null || _b === void 0 ? void 0 : _b.map(function (r) {
            return "".concat(r === null || r === void 0 ? void 0 : r[0], "=").concat(r === null || r === void 0 ? void 0 : r[1]);
        })) === null || _c === void 0 ? void 0 : _c.join('&');
        __classPrivateFieldSet(this, _Url_urlString, "".concat(protocol ?
            "".concat(protocol, "://") : "").concat(username ? username : "").concat(password ? ":".concat(password, "@") : username ? "@" : "").concat(hostname || "", ":").concat(port || '').concat(path || '').concat(queryCheck ? "?".concat(queryCheck) : "").concat(hash ? "#".concat(hash) : ""), "f");
    };
    return Url;
}());
_Url_url = new WeakMap(), _Url_urlString = new WeakMap();
exports.default = Url;
