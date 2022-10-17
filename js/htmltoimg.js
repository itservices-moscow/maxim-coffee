!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).htmlToImage = {})
}(this, (function (t) {
    "use strict";

    function e(t, e, n, r) {
        return new (n || (n = Promise))((function (i, o) {
            function c(t) {
                try {
                    a(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                try {
                    a(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
                    t(e)
                }))).then(c, u)
            }

            a((r = r.apply(t, e || [])).next())
        }))
    }

    function n(t, e) {
        var n, r, i, o, c = {
            label: 0, sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1]
            }, trys: [], ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function u(o) {
            return function (u) {
                return function (o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return c.label++, {value: o[1], done: !1};
                            case 5:
                                c.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(i = c.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    c.label = o[1];
                                    break
                                }
                                if (6 === o[0] && c.label < i[1]) {
                                    c.label = i[1], i = o;
                                    break
                                }
                                if (i && c.label < i[2]) {
                                    c.label = i[2], c.ops.push(o);
                                    break
                                }
                                i[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        o = e.call(t, c)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, u])
            }
        }
    }

    var r = "application/font-woff", i = "image/jpeg", o = {
        woff: r,
        woff2: r,
        ttf: "application/font-truetype",
        eot: "application/vnd.ms-fontobject",
        png: "image/png",
        jpg: i,
        jpeg: i,
        gif: "image/gif",
        tiff: "image/tiff",
        svg: "image/svg+xml"
    };

    function c(t) {
        var e = function (t) {
            var e = /\.([^./]*?)$/g.exec(t);
            return e ? e[1] : ""
        }(t).toLowerCase();
        return o[e] || ""
    }

    function u(t) {
        return -1 !== t.search(/^(data:)/)
    }

    function a(t, e) {
        return "data:".concat(e, ";base64,").concat(t)
    }

    function s(t, r, i) {
        return e(this, void 0, void 0, (function () {
            var e, o;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return [4, fetch(t, r)];
                    case 1:
                        if (404 === (e = n.sent()).status) throw new Error('Resource "'.concat(e.url, '" not found'));
                        return [4, e.blob()];
                    case 2:
                        return o = n.sent(), [2, new Promise((function (t, n) {
                            var r = new FileReader;
                            r.onerror = n, r.onloadend = function () {
                                try {
                                    t(i({res: e, result: r.result}))
                                } catch (t) {
                                    n(t)
                                }
                            }, r.readAsDataURL(o)
                        }))]
                }
            }))
        }))
    }

    var l = {};

    function f(t, r, i) {
        return e(this, void 0, void 0, (function () {
            var e, o, c, u, f;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        if (e = function (t, e, n) {
                            var r = t.replace(/\?.*/, "");
                            return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? "[".concat(e, "]").concat(r) : r
                        }(t, r, i.includeQueryParams), null != l[e]) return [2, l[e]];
                        i.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (new Date).getTime()), n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, s(t, i.fetchRequestInit, (function (t) {
                            var e = t.res, n = t.result;
                            return r || (r = e.headers.get("Content-Type") || ""), function (t) {
                                return t.split(/,/)[1]
                            }(n)
                        }))];
                    case 2:
                        return c = n.sent(), o = a(c, r), [3, 4];
                    case 3:
                        return u = n.sent(), o = i.imagePlaceholder || "", f = "Failed to fetch resource: ".concat(t), u && (f = "string" == typeof u ? u : u.message), f && console.warn(f), [3, 4];
                    case 4:
                        return l[e] = o, [2, o]
                }
            }))
        }))
    }

    var h, d = (h = 0, function () {
        return h += 1, "u".concat("0000".concat((Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)).concat(h)
    });

    function v(t) {
        for (var e = [], n = 0, r = t.length; n < r; n++) e.push(t[n]);
        return e
    }

    function p(t, e) {
        var n = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
        return n ? parseFloat(n.replace("px", "")) : 0
    }

    function g(t, e) {
        void 0 === e && (e = {});
        var n, r, i,
            o = e.width || (r = p(n = t, "border-left-width"), i = p(n, "border-right-width"), n.clientWidth + r + i),
            c = e.height || function (t) {
                var e = p(t, "border-top-width"), n = p(t, "border-bottom-width");
                return t.clientHeight + e + n
            }(t);
        return {width: o, height: c}
    }

    var m = 16384;

    function w(t, e) {
        return void 0 === e && (e = {}), t.toBlob ? new Promise((function (n) {
            t.toBlob(n, e.type ? e.type : "image/png", e.quality ? e.quality : 1)
        })) : new Promise((function (n) {
            for (var r = window.atob(t.toDataURL(e.type ? e.type : void 0, e.quality ? e.quality : void 0).split(",")[1]), i = r.length, o = new Uint8Array(i), c = 0; c < i; c += 1) o[c] = r.charCodeAt(c);
            n(new Blob([o], {type: e.type ? e.type : "image/png"}))
        }))
    }

    function b(t) {
        return new Promise((function (e, n) {
            var r = new Image;
            r.onload = function () {
                return e(r)
            }, r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "sync", r.src = t
        }))
    }

    function y(t) {
        return e(this, void 0, void 0, (function () {
            return n(this, (function (e) {
                return [2, Promise.resolve().then((function () {
                    return (new XMLSerializer).serializeToString(t)
                })).then(encodeURIComponent).then((function (t) {
                    return "data:image/svg+xml;charset=utf-8,".concat(t)
                }))]
            }))
        }))
    }

    function x(t, r, i) {
        return e(this, void 0, void 0, (function () {
            var e, o, c;
            return n(this, (function (n) {
                return e = "http://www.w3.org/2000/svg", o = document.createElementNS(e, "svg"), c = document.createElementNS(e, "foreignObject"), o.setAttribute("width", "".concat(r)), o.setAttribute("height", "".concat(i)), o.setAttribute("viewBox", "0 0 ".concat(r, " ").concat(i)), c.setAttribute("width", "100%"), c.setAttribute("height", "100%"), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("externalResourcesRequired", "true"), o.appendChild(c), c.appendChild(t), [2, y(o)]
            }))
        }))
    }

    function S(t, e, n) {
        var r = ".".concat(t, ":").concat(e), i = n.cssText ? function (t) {
            var e = t.getPropertyValue("content");
            return "".concat(t.cssText, " content: '").concat(e.replace(/'|"/g, ""), "';")
        }(n) : function (t) {
            return v(t).map((function (e) {
                var n = t.getPropertyValue(e), r = t.getPropertyPriority(e);
                return "".concat(e, ": ").concat(n).concat(r ? " !important" : "", ";")
            })).join(" ")
        }(n);
        return document.createTextNode("".concat(r, "{").concat(i, "}"))
    }

    function E(t, e, n) {
        var r = window.getComputedStyle(t, n), i = r.getPropertyValue("content");
        if ("" !== i && "none" !== i) {
            var o = d();
            try {
                e.className = "".concat(e.className, " ").concat(o)
            } catch (t) {
                return
            }
            var c = document.createElement("style");
            c.appendChild(S(o, n, r)), e.appendChild(c)
        }
    }

    function P(t) {
        return e(this, void 0, void 0, (function () {
            var e;
            return n(this, (function (n) {
                return "data:," === (e = t.toDataURL()) ? [2, t.cloneNode(!1)] : [2, b(e)]
            }))
        }))
    }

    function C(t, r) {
        return e(this, void 0, void 0, (function () {
            var e, i;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return e = t.poster, i = c(e), [4, f(e, i, r)];
                    case 1:
                        return [2, b(n.sent())]
                }
            }))
        }))
    }

    function R(t, e) {
        return e instanceof Element && (function (t, e) {
            var n = e.style;
            if (n) {
                var r = window.getComputedStyle(t);
                r.cssText ? (n.cssText = r.cssText, n.transformOrigin = r.transformOrigin) : v(r).forEach((function (t) {
                    var e = r.getPropertyValue(t);
                    if ("font-size" === t && e.endsWith("px")) {
                        var i = Math.floor(parseFloat(e.substring(0, e.length - 2))) - .1;
                        e = "".concat(i, "px")
                    }
                    n.setProperty(t, e, r.getPropertyPriority(t))
                }))
            }
        }(t, e), function (t, e) {
            E(t, e, ":before"), E(t, e, ":after")
        }(t, e), function (t, e) {
            t instanceof HTMLTextAreaElement && (e.innerHTML = t.value), t instanceof HTMLInputElement && e.setAttribute("value", t.value)
        }(t, e), function (t, e) {
            if (t instanceof HTMLSelectElement) {
                var n = e, r = Array.from(n.children).find((function (e) {
                    return t.value === e.getAttribute("value")
                }));
                r && r.setAttribute("selected", "")
            }
        }(t, e)), e
    }

    function T(t, r, i) {
        return e(this, void 0, void 0, (function () {
            return n(this, (function (o) {
                return i || !r.filter || r.filter(t) ? [2, Promise.resolve(t).then((function (t) {
                    return function (t, r) {
                        return e(this, void 0, void 0, (function () {
                            return n(this, (function (e) {
                                return t instanceof HTMLCanvasElement ? [2, P(t)] : t instanceof HTMLVideoElement && t.poster ? [2, C(t, r)] : [2, t.cloneNode(!1)]
                            }))
                        }))
                    }(t, r)
                })).then((function (i) {
                    return function (t, r, i) {
                        var o;
                        return e(this, void 0, void 0, (function () {
                            var e;
                            return n(this, (function (n) {
                                switch (n.label) {
                                    case 0:
                                        return 0 === (e = null != (c = t).tagName && "SLOT" === c.tagName.toUpperCase() && t.assignedNodes ? v(t.assignedNodes()) : v((null !== (o = t.shadowRoot) && void 0 !== o ? o : t).childNodes)).length || t instanceof HTMLVideoElement ? [2, r] : [4, e.reduce((function (t, e) {
                                            return t.then((function () {
                                                return T(e, i)
                                            })).then((function (t) {
                                                t && r.appendChild(t)
                                            }))
                                        }), Promise.resolve())];
                                    case 1:
                                        return n.sent(), [2, r]
                                }
                                var c
                            }))
                        }))
                    }(t, i, r)
                })).then((function (e) {
                    return R(t, e)
                }))] : [2, null]
            }))
        }))
    }

    var L = /url\((['"]?)([^'"]+?)\1\)/g, k = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
        A = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

    function I(t, r, i, o, u) {
        return e(this, void 0, void 0, (function () {
            var e, s, l, h;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 5, , 6]), e = i ? function (t, e) {
                            if (t.match(/^[a-z]+:\/\//i)) return t;
                            if (t.match(/^\/\//)) return window.location.protocol + t;
                            if (t.match(/^[a-z]+:/i)) return t;
                            var n = document.implementation.createHTMLDocument(), r = n.createElement("base"),
                                i = n.createElement("a");
                            return n.head.appendChild(r), n.body.appendChild(i), e && (r.href = e), i.href = t, i.href
                        }(r, i) : r, s = c(r), l = void 0, u ? [4, u(e)] : [3, 2];
                    case 1:
                        return h = n.sent(), l = a(h, s), [3, 4];
                    case 2:
                        return [4, f(e, s, o)];
                    case 3:
                        l = n.sent(), n.label = 4;
                    case 4:
                        return [2, t.replace((d = r, v = d.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1"), new RegExp("(url\\(['\"]?)(".concat(v, ")(['\"]?\\))"), "g")), "$1".concat(l, "$3"))];
                    case 5:
                        return n.sent(), [3, 6];
                    case 6:
                        return [2, t]
                }
                var d, v
            }))
        }))
    }

    function N(t) {
        return -1 !== t.search(L)
    }

    function M(t, r, i) {
        return e(this, void 0, void 0, (function () {
            var e, o;
            return n(this, (function (n) {
                return N(t) ? (e = function (t, e) {
                    var n = e.preferredFontFormat;
                    return n ? t.replace(A, (function (t) {
                        for (; ;) {
                            var e = k.exec(t) || [], r = e[0], i = e[2];
                            if (!i) return "";
                            if (i === n) return "src: ".concat(r, ";")
                        }
                    })) : t
                }(t, i), o = function (t) {
                    var e = [];
                    return t.replace(L, (function (t, n, r) {
                        return e.push(r), t
                    })), e.filter((function (t) {
                        return !u(t)
                    }))
                }(e), [2, o.reduce((function (t, e) {
                    return t.then((function (t) {
                        return I(t, e, r, i)
                    }))
                }), Promise.resolve(e))]) : [2, t]
            }))
        }))
    }

    function V(t, r) {
        var i;
        return e(this, void 0, void 0, (function () {
            var e, o;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return (e = null === (i = t.style) || void 0 === i ? void 0 : i.getPropertyValue("background")) ? [4, M(e, null, r)] : [3, 2];
                    case 1:
                        o = n.sent(), t.style.setProperty("background", o, t.style.getPropertyPriority("background")), n.label = 2;
                    case 2:
                        return [2]
                }
            }))
        }))
    }

    function D(t, r) {
        return e(this, void 0, void 0, (function () {
            var e, i;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return t instanceof HTMLImageElement && !u(t.src) || t instanceof SVGImageElement && !u(t.href.baseVal) ? [4, f(e = t instanceof HTMLImageElement ? t.src : t.href.baseVal, c(e), r)] : [2];
                    case 1:
                        return i = n.sent(), [4, new Promise((function (e, n) {
                            t.onload = e, t.onerror = n, t instanceof HTMLImageElement ? (t.srcset = "", t.src = i) : t.href.baseVal = i
                        }))];
                    case 2:
                        return n.sent(), [2]
                }
            }))
        }))
    }

    function H(t, r) {
        return e(this, void 0, void 0, (function () {
            var e, i;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return e = v(t.childNodes), i = e.map((function (t) {
                            return j(t, r)
                        })), [4, Promise.all(i).then((function () {
                            return t
                        }))];
                    case 1:
                        return n.sent(), [2]
                }
            }))
        }))
    }

    function j(t, r) {
        return e(this, void 0, void 0, (function () {
            return n(this, (function (e) {
                switch (e.label) {
                    case 0:
                        return t instanceof Element ? [4, V(t, r)] : [3, 4];
                    case 1:
                        return e.sent(), [4, D(t, r)];
                    case 2:
                        return e.sent(), [4, H(t, r)];
                    case 3:
                        e.sent(), e.label = 4;
                    case 4:
                        return [2]
                }
            }))
        }))
    }

    var U = {};

    function F(t) {
        return e(this, void 0, void 0, (function () {
            var e, r;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return null != (e = U[t]) ? [2, e] : [4, fetch(t)];
                    case 1:
                        return [4, n.sent().text()];
                    case 2:
                        return r = n.sent(), e = {url: t, cssText: r}, U[t] = e, [2, e]
                }
            }))
        }))
    }

    function O(t, r) {
        return e(this, void 0, void 0, (function () {
            var i, o, c, u, a = this;
            return n(this, (function (l) {
                return i = t.cssText, o = /url\(["']?([^"')]+)["']?\)/g, c = i.match(/url\([^)]+\)/g) || [], u = c.map((function (c) {
                    return e(a, void 0, void 0, (function () {
                        var e;
                        return n(this, (function (n) {
                            return (e = c.replace(o, "$1")).startsWith("https://") || (e = new URL(e, t.url).href), [2, s(e, r.fetchRequestInit, (function (t) {
                                var e = t.result;
                                return i = i.replace(c, "url(".concat(e, ")")), [c, e]
                            }))]
                        }))
                    }))
                })), [2, Promise.all(u).then((function () {
                    return i
                }))]
            }))
        }))
    }

    function q(t) {
        if (null == t) return [];
        for (var e = [], n = t.replace(/(\/\*[\s\S]*?\*\/)/gi, ""), r = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi"); ;) {
            if (null === (c = r.exec(n))) break;
            e.push(c[0])
        }
        n = n.replace(r, "");
        for (var i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, o = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi"); ;) {
            var c;
            if (null === (c = i.exec(n))) {
                if (null === (c = o.exec(n))) break;
                i.lastIndex = o.lastIndex
            } else o.lastIndex = i.lastIndex;
            e.push(c[0])
        }
        return e
    }

    function B(t, r) {
        return e(this, void 0, void 0, (function () {
            var e, i;
            return n(this, (function (n) {
                return e = [], i = [], t.forEach((function (e) {
                    if ("cssRules" in e) try {
                        v(e.cssRules || []).forEach((function (t, n) {
                            if (t.type === CSSRule.IMPORT_RULE) {
                                var o = n + 1, c = F(t.href).then((function (t) {
                                    return O(t, r)
                                })).then((function (t) {
                                    return q(t).forEach((function (t) {
                                        try {
                                            e.insertRule(t, t.startsWith("@import") ? o += 1 : e.cssRules.length)
                                        } catch (e) {
                                            console.error("Error inserting rule from remote css", {rule: t, error: e})
                                        }
                                    }))
                                })).catch((function (t) {
                                    console.error("Error loading remote css", t.toString())
                                }));
                                i.push(c)
                            }
                        }))
                    } catch (o) {
                        var n = t.find((function (t) {
                            return null == t.href
                        })) || document.styleSheets[0];
                        null != e.href && i.push(F(e.href).then((function (t) {
                            return O(t, r)
                        })).then((function (t) {
                            return q(t).forEach((function (t) {
                                n.insertRule(t, e.cssRules.length)
                            }))
                        })).catch((function (t) {
                            console.error("Error loading remote stylesheet", t.toString())
                        }))), console.error("Error inlining remote css file", o.toString())
                    }
                })), [2, Promise.all(i).then((function () {
                    return t.forEach((function (t) {
                        if ("cssRules" in t) try {
                            v(t.cssRules || []).forEach((function (t) {
                                e.push(t)
                            }))
                        } catch (e) {
                            console.error("Error while reading CSS rules from ".concat(t.href), e.toString())
                        }
                    })), e
                }))]
            }))
        }))
    }

    function $(t) {
        return t.filter((function (t) {
            return t.type === CSSRule.FONT_FACE_RULE
        })).filter((function (t) {
            return N(t.style.getPropertyValue("src"))
        }))
    }

    function z(t, r) {
        return e(this, void 0, void 0, (function () {
            return n(this, (function (e) {
                switch (e.label) {
                    case 0:
                        if (null == t.ownerDocument) throw new Error("Provided element is not within a Document");
                        return [4, B(v(t.ownerDocument.styleSheets), r)];
                    case 1:
                        return [2, $(e.sent())]
                }
            }))
        }))
    }

    function W(t, r) {
        return e(this, void 0, void 0, (function () {
            var e;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return [4, z(t, r)];
                    case 1:
                        return e = n.sent(), [4, Promise.all(e.map((function (t) {
                            var e = t.parentStyleSheet ? t.parentStyleSheet.href : null;
                            return M(t.cssText, e, r)
                        })))];
                    case 2:
                        return [2, n.sent().join("\n")]
                }
            }))
        }))
    }

    function _(t, r) {
        return e(this, void 0, void 0, (function () {
            var e, i, o, c, u;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return null == r.fontEmbedCSS ? [3, 1] : (i = r.fontEmbedCSS, [3, 5]);
                    case 1:
                        return r.skipFonts ? (o = null, [3, 4]) : [3, 2];
                    case 2:
                        return [4, W(t, r)];
                    case 3:
                        o = n.sent(), n.label = 4;
                    case 4:
                        i = o, n.label = 5;
                    case 5:
                        return (e = i) && (c = document.createElement("style"), u = document.createTextNode(e), c.appendChild(u), t.firstChild ? t.insertBefore(c, t.firstChild) : t.appendChild(c)), [2]
                }
            }))
        }))
    }

    function G(t, r) {
        return void 0 === r && (r = {}), e(this, void 0, void 0, (function () {
            var e, i, o, c;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return e = g(t, r), i = e.width, o = e.height, [4, T(t, r, !0)];
                    case 1:
                        return [4, _(c = n.sent(), r)];
                    case 2:
                        return n.sent(), [4, j(c, r)];
                    case 3:
                        return n.sent(), function (t, e) {
                            var n = t.style;
                            e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = "".concat(e.width, "px")), e.height && (n.height = "".concat(e.height, "px"));
                            var r = e.style;
                            null != r && Object.keys(r).forEach((function (t) {
                                n[t] = r[t]
                            }))
                        }(c, r), [4, x(c, i, o)];
                    case 4:
                        return [2, n.sent()]
                }
            }))
        }))
    }

    function J(t, r) {
        return void 0 === r && (r = {}), e(this, void 0, void 0, (function () {
            var e, i, o, c, u, a, s, l, f;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return e = g(t, r), i = e.width, o = e.height, [4, G(t, r)];
                    case 1:
                        return [4, b(n.sent())];
                    case 2:
                        return c = n.sent(), u = document.createElement("canvas"), a = u.getContext("2d"), s = r.pixelRatio || function () {
                            var t, e;
                            try {
                                e = process
                            } catch (t) {
                            }
                            var n = e && e.env ? e.env.devicePixelRatio : null;
                            return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1
                        }(), l = r.canvasWidth || i, f = r.canvasHeight || o, u.width = l * s, u.height = f * s, r.skipAutoScale || function (t) {
                            (t.width > m || t.height > m) && (t.width > m && t.height > m ? t.width > t.height ? (t.height *= m / t.width, t.width = m) : (t.width *= m / t.height, t.height = m) : t.width > m ? (t.height *= m / t.width, t.width = m) : (t.width *= m / t.height, t.height = m))
                        }(u), u.style.width = "".concat(l), u.style.height = "".concat(f), r.backgroundColor && (a.fillStyle = r.backgroundColor, a.fillRect(0, 0, u.width, u.height)), a.drawImage(c, 0, 0, u.width, u.height), [2, u]
                }
            }))
        }))
    }

    t.getFontEmbedCSS = function (t, r) {
        return void 0 === r && (r = {}), e(this, void 0, void 0, (function () {
            return n(this, (function (e) {
                return [2, W(t, r)]
            }))
        }))
    }, t.toBlob = function (t, r) {
        return void 0 === r && (r = {}), e(this, void 0, void 0, (function () {
            return n(this, (function (e) {
                switch (e.label) {
                    case 0:
                        return [4, J(t, r)];
                    case 1:
                        return [4, w(e.sent())];
                    case 2:
                        return [2, e.sent()]
                }
            }))
        }))
    }, t.toCanvas = J, t.toJpeg = function (t, r) {
        return void 0 === r && (r = {}), e(this, void 0, void 0, (function () {
            return n(this, (function (e) {
                switch (e.label) {
                    case 0:
                        return [4, J(t, r)];
                    case 1:
                        return [2, e.sent().toDataURL("image/jpeg", r.quality || 1)]
                }
            }))
        }))
    }, t.toPixelData = function (t, r) {
        return void 0 === r && (r = {}), e(this, void 0, void 0, (function () {
            var e, i, o, c;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return e = g(t, r), i = e.width, o = e.height, [4, J(t, r)];
                    case 1:
                        return c = n.sent(), [2, c.getContext("2d").getImageData(0, 0, i, o).data]
                }
            }))
        }))
    }, t.toPng = function (t, r) {
        return void 0 === r && (r = {}), e(this, void 0, void 0, (function () {
            return n(this, (function (e) {
                switch (e.label) {
                    case 0:
                        return [4, J(t, r)];
                    case 1:
                        return [2, e.sent().toDataURL()]
                }
            }))
        }))
    }, t.toSvg = G, Object.defineProperty(t, "__esModule", {value: !0})
}));
//# sourceMappingURL=html-to-image.js.map