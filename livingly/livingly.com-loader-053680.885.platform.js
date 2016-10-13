/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function(e, t) {
        return new x.fn.init(e,t,r)
    }
    , w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function(e, t) {
        return t.toUpperCase()
    }
    , q = function(e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(),
        x.ready())
    }
    , _ = function() {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1),
        e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q),
        e.detachEvent("onload", q))
    }
    ;
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) {
                return this
            }
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null , e, null ] : N.exec(e),
                !i || !i[1] && n) {
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n,
                    x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)),
                    k.test(i[1]) && x.isPlainObject(n)) {
                        for (i in n) {
                            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
                        }
                    }
                    return this
                }
                if (o = a.getElementById(i[2]),
                o && o.parentNode) {
                    if (o.id !== i[2]) {
                        return r.find(e)
                    }
                    this.length = 1,
                    this[0] = o
                }
                return this.context = a,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    },
    x.fn.init.prototype = x.fn,
    x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[1] || {},
        l = 2),
        "object" == typeof s || x.isFunction(s) || (s = {}),
        u === l && (s = this,
        --l); u > l; l++) {
            if (null != (o = arguments[l])) {
                for (i in o) {
                    e = s[i],
                    r = o[i],
                    s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1,
                    a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {},
                    s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r))
                }
            }
        }
        return s
    }
    ,
    x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u),
            t && e.jQuery === x && (e.jQuery = l),
            x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) {
                    return setTimeout(x.ready)
                }
                x.isReady = !0,
                e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]),
                x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) {
                return !1
            }
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (r) {
                return !1
            }
            if (x.support.ownLast) {
                for (n in e) {
                    return v.call(e, n)
                }
            }
            for (n in e) {}
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return !1
            }
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) {
                return null
            }
            "boolean" == typeof t && (n = t,
            t = !1),
            t = t || a;
            var r = k.exec(e)
              , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i),
            i && x(i).remove(),
            x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n),
            n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n),
            t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) {
                return null
            }
            try {
                e.DOMParser ? (i = new DOMParser,
                r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                r.async = "false",
                r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.apply(e[i], n),
                        r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.apply(e[i], n),
                        r === !1) {
                            break
                        }
                    }
                }
            } else {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.call(e[i], i, e[i]),
                        r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.call(e[i], i, e[i]),
                        r === !1) {
                            break
                        }
                    }
                }
            }
            return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        }
        : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        }
        ,
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) {
                    return m.call(t, e, n)
                }
                for (r = t.length,
                n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
                    if (n in t && t[n] === e) {
                        return n
                    }
                }
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length
              , i = e.length
              , o = 0;
            if ("number" == typeof r) {
                for (; r > o; o++) {
                    e[i++] = n[o]
                }
            } else {
                while (n[o] !== t) {
                    e[i++] = n[o++]
                }
            }
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) {
                r = !!t(e[o], o),
                n !== r && i.push(e[o])
            }
            return i
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a) {
                for (; o > i; i++) {
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r)
                }
            } else {
                for (i in e) {
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r)
                }
            }
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n],
            n = e,
            e = o),
            x.isFunction(e) ? (r = g.call(arguments, 2),
            i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || x.guid++,
            i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0
              , u = e.length
              , c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) {
                    x.access(e, n, l, r[l], !0, a, s)
                }
            } else {
                if (i !== t && (o = !0,
                x.isFunction(i) || (s = !0),
                c && (s ? (n.call(e, i),
                n = null ) : (c = n,
                n = function(e, t, n) {
                    return c.call(x(e), n)
                }
                )),
                n)) {
                    for (; u > l; l++) {
                        n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)))
                    }
                }
            }
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) {
                a[o] = e.style[o],
                e.style[o] = t[o]
            }
            i = n.apply(e, r || []);
            for (o in t) {
                e.style[o] = a[o]
            }
            return i
        }
    }),
    x.ready.promise = function(t) {
        if (!n) {
            if (n = x.Deferred(),
            "complete" === a.readyState) {
                setTimeout(x.ready)
            } else {
                if (a.addEventListener) {
                    a.addEventListener("DOMContentLoaded", q, !1),
                    e.addEventListener("load", q, !1)
                } else {
                    a.attachEvent("onreadystatechange", q),
                    e.attachEvent("onload", q);
                    var r = !1;
                    try {
                        r = null == e.frameElement && a.documentElement
                    } catch (i) {}
                    r && r.doScroll && function o() {
                        if (!x.isReady) {
                            try {
                                r.doScroll("left")
                            } catch (e) {
                                return setTimeout(o, 50)
                            }
                            _(),
                            x.ready()
                        }
                    }()
                }
            }
        }
        return n.promise(t)
    }
    ,
    x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length
          , n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
    function(e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function(e, t) {
            return e === t ? (S = !0,
            0) : 0
        }
        , j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function(e) {
            var t = 0
              , n = this.length;
            for (; n > t; t++) {
                if (this[t] === e) {
                    return t
                }
            }
            return -1
        }
        , B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
            ID: RegExp("^#(" + R + ")"),
            CLASS: RegExp("^\\.(" + R + ")"),
            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: RegExp("^(?:" + B + ")$", "i"),
            needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        }
        ;
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes),
            H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {
                apply: H.length ? function(e, t) {
                    _.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++]) {}
                    e.length = n - 1
                }
            }
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t),
            t = t || f,
            n = n || [],
            !e || "string" != typeof e) {
                return n
            }
            if (1 !== (l = t.nodeType) && 9 !== l) {
                return []
            }
            if (h && !i) {
                if (o = Z.exec(e)) {
                    if (s = o[1]) {
                        if (9 === l) {
                            if (a = t.getElementById(s),
                            !a || !a.parentNode) {
                                return n
                            }
                            if (a.id === s) {
                                return n.push(a),
                                n
                            }
                        } else {
                            if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) {
                                return n.push(a),
                                n
                            }
                        }
                    } else {
                        if (o[2]) {
                            return M.apply(n, t.getElementsByTagName(e)),
                            n
                        }
                        if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) {
                            return M.apply(n, t.getElementsByClassName(s)),
                            n
                        }
                    }
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b,
                    y = t,
                    x = 9 === l && e,
                    1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e),
                        (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m),
                        m = "[id='" + m + "'] ",
                        u = c.length;
                        while (u--) {
                            c[u] = m + yt(c[u])
                        }
                        y = V.test(e) && t.parentNode || t,
                        x = c.join(",")
                    }
                    if (x) {
                        try {
                            return M.apply(n, y.querySelectorAll(x)),
                            n
                        } catch (T) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }
        function st() {
            var e = [];
            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()],
                t[n] = r
            }
            return t
        }
        function lt(e) {
            return e[b] = !0,
            e
        }
        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ct(e, t) {
            var n = e.split("|")
              , r = e.length;
            while (r--) {
                o.attrHandle[n[r]] = t
            }
        }
        function pt(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) {
                return r
            }
            if (n) {
                while (n = n.nextSibling) {
                    if (n === t) {
                        return -1
                    }
                }
            }
            return e ? 1 : -1
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function dt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ht(e) {
            return lt(function(t) {
                return t = +t,
                lt(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) {
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    }
                })
            })
        }
        s = at.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        r = at.support = {},
        p = at.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w
              , i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n,
            d = n.documentElement,
            h = !s(n),
            i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                p()
            }),
            r.attributes = ut(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            r.getElementsByTagName = ut(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            r.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            r.getById = ut(function(e) {
                return d.appendChild(e).id = b,
                !n.getElementsByName || !n.getElementsByName(b).length
            }),
            r.getById ? (o.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete o.find.ID,
            o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            o.find.TAG = r.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) {
                        1 === n.nodeType && r.push(n)
                    }
                    return r
                }
                return o
            }
            ,
            o.find.CLASS = r.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }
            ,
            m = [],
            g = [],
            (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"),
                e.querySelectorAll(":checked").length || g.push(":checked")
            }),
            ut(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                r.disconnectedMatch = y.call(e, "div"),
                y.call(e, "[s!='']:x"),
                m.push("!=", I)
            }),
            g = g.length && RegExp(g.join("|")),
            m = m.length && RegExp(m.join("|")),
            v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t) {
                    while (t = t.parentNode) {
                        if (t === e) {
                            return !0
                        }
                    }
                }
                return !1
            }
            ,
            A = d.compareDocumentPosition ? function(e, t) {
                if (e === t) {
                    return S = !0,
                    0
                }
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }
            : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t) {
                    return S = !0,
                    0
                }
                if (!o || !a) {
                    return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0
                }
                if (o === a) {
                    return pt(e, t)
                }
                r = e;
                while (r = r.parentNode) {
                    s.unshift(r)
                }
                r = t;
                while (r = r.parentNode) {
                    l.unshift(r)
                }
                while (s[i] === l[i]) {
                    i++
                }
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }
            ,
            n) : f
        }
        ,
        at.matches = function(e, t) {
            return at(e, null , null , t)
        }
        ,
        at.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e),
            t = t.replace(Y, "='$1']"),
            !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) {
                try {
                    var n = y.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                        return n
                    }
                } catch (i) {}
            }
            return at(t, f, null , [e]).length > 0
        }
        ,
        at.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e),
            v(e, t)
        }
        ,
        at.attr = function(e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()]
              , a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }
        ,
        at.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        at.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates,
            c = !r.sortStable && e.slice(0),
            e.sort(A),
            S) {
                while (t = e[o++]) {
                    t === e[o] && (i = n.push(o))
                }
                while (i--) {
                    e.splice(n[i], 1)
                }
            }
            return e
        }
        ,
        a = at.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) {
                        return e.textContent
                    }
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += a(e)
                    }
                } else {
                    if (3 === i || 4 === i) {
                        return e.nodeValue
                    }
                }
            } else {
                for (; t = e[r]; r++) {
                    n += a(t)
                }
            }
            return n
        }
        ,
        o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(rt, it),
                    e[3] = (e[4] || e[5] || "").replace(rt, it),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n),
                    e[2] = r.slice(0, n)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) {
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) {
                                            return !1
                                        }
                                    }
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && v) {
                                c = m[b] || (m[b] = {}),
                                u = c[e] || [],
                                d = u[0] === T && u[1],
                                f = u[0] === T && u[2],
                                p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [T, d, f];
                                        break
                                    }
                                }
                            } else {
                                if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) {
                                    f = u[1]
                                } else {
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]),
                                        p === t)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return f -= i,
                            f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                    o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--) {
                            i = F.call(e, o[a]),
                            e[i] = !(n[i] = o[a])
                        }
                    }) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: lt(function(e) {
                    var t = []
                      , n = []
                      , r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function(e, t, n, i) {
                        var o, a = r(e, null , i, []), s = e.length;
                        while (s--) {
                            (o = a[s]) && (e[s] = !(t[s] = o))
                        }
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null , o, n),
                        !n.pop()
                    }
                }),
                has: lt(function(e) {
                    return function(t) {
                        return at(e, t).length > 0
                    }
                }),
                contains: lt(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }),
                lang: lt(function(e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e),
                    e = e.replace(rt, it).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-")
                            }
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(e) {
                    return !o.pseudos.empty(e)
                },
                header: function(e) {
                    return tt.test(e.nodeName)
                },
                input: function(e) {
                    return et.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: ht(function() {
                    return [0]
                }),
                last: ht(function(e, t) {
                    return [t - 1]
                }),
                eq: ht(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ht(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2) {
                        e.push(n)
                    }
                    return e
                }),
                odd: ht(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2) {
                        e.push(n)
                    }
                    return e
                }),
                lt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0; ) {
                        e.push(r)
                    }
                    return e
                }),
                gt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r; ) {
                        e.push(r)
                    }
                    return e
                })
            }
        },
        o.pseudos.nth = o.pseudos.eq;
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) {
            o.pseudos[n] = ft(n)
        }
        for (n in {
            submit: !0,
            reset: !0
        }) {
            o.pseudos[n] = dt(n)
        }
        function gt() {}
        gt.prototype = o.filters = o.pseudos,
        o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c) {
                return t ? 0 : c.slice(0)
            }
            s = e,
            l = [],
            u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                l.push(i = [])),
                n = !1,
                (r = U.exec(s)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }),
                s = s.slice(n.length));
                for (a in o.filter) {
                    !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(n.length))
                }
                if (!n) {
                    break
                }
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }
        function yt(e) {
            var t = 0
              , n = e.length
              , r = "";
            for (; n > t; t++) {
                r += e[t].value
            }
            return r
        }
        function vt(e, t, n) {
            var r = t.dir
              , o = n && "parentNode" === r
              , a = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r]) {
                    if (1 === t.nodeType || o) {
                        return e(t, n, i)
                    }
                }
            }
            : function(t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r]) {
                        if ((1 === t.nodeType || o) && e(t, n, s)) {
                            return !0
                        }
                    }
                } else {
                    while (t = t[r]) {
                        if (1 === t.nodeType || o) {
                            if (c = t[b] || (t[b] = {}),
                            (u = c[r]) && u[0] === p) {
                                if ((l = u[1]) === !0 || l === i) {
                                    return l === !0
                                }
                            } else {
                                if (u = c[r] = [p],
                                u[1] = e(t, n, s) || i,
                                u[1] === !0) {
                                    return !0
                                }
                            }
                        }
                    }
                }
            }
        }
        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--) {
                    if (!e[i](t, n, r)) {
                        return !1
                    }
                }
                return !0
            }
            : e[0]
        }
        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++) {
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                u && t.push(s))
            }
            return a
        }
        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)),
            i && !i[b] && (i = wt(i, o)),
            lt(function(o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l),
                r) {
                    u = xt(y, d),
                    r(u, [], s, l),
                    c = u.length;
                    while (c--) {
                        (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [],
                            c = y.length;
                            while (c--) {
                                (p = y[c]) && u.push(m[c] = p)
                            }
                            i(null , y = [], u, l)
                        }
                        c = y.length;
                        while (c--) {
                            (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                        }
                    }
                } else {
                    y = xt(y === a ? y.splice(h, y.length) : y),
                    i ? i(null , a, y, l) : M.apply(a, y)
                }
            })
        }
        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function(e) {
                return e === t
            }, s, !0), p = vt(function(e) {
                return F.call(t, e) > -1
            }, s, !0), f = [function(e, n, r) {
                return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }
            ];
            for (; i > l; l++) {
                if (n = o.relative[e[l].type]) {
                    f = [vt(bt(f), n)]
                } else {
                    if (n = o.filter[e[l].type].apply(null , e[l].matches),
                    n[b]) {
                        for (r = ++l; i > r; r++) {
                            if (o.relative[e[r].type]) {
                                break
                            }
                        }
                        return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                    }
                    f.push(n)
                }
            }
            return bt(f)
        }
        function Ct(e, t) {
            var n = 0
              , r = t.length > 0
              , a = e.length > 0
              , s = function(s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || 0.1;
                for (w && (u = l !== f && l,
                i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++]) {
                            if (m(h, l, c)) {
                                p.push(h);
                                break
                            }
                        }
                        w && (T = k,
                        i = ++n)
                    }
                    r && ((h = !m && h) && v--,
                    s && x.push(h))
                }
                if (v += b,
                r && b !== v) {
                    g = 0;
                    while (m = t[g++]) {
                        m(x, y, l, c)
                    }
                    if (s) {
                        if (v > 0) {
                            while (b--) {
                                x[b] || y[b] || (y[b] = q.call(p))
                            }
                        }
                        y = xt(y)
                    }
                    M.apply(p, y),
                    w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k,
                u = C),
                x
            }
            ;
            return r ? lt(s) : s
        }
        l = at.compile = function(e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)),
                n = t.length;
                while (n--) {
                    o = Tt(t[n]),
                    o[b] ? r.push(o) : i.push(o)
                }
                o = E(e, Ct(i, r))
            }
            return o
        }
        ;
        function Nt(e, t, n) {
            var r = 0
              , i = t.length;
            for (; i > r; r++) {
                at(e, t[r], n)
            }
            return n
        }
        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0),
                s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0],
                    !t) {
                        return n
                    }
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a],
                    o.relative[c = u.type]) {
                        break
                    }
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1),
                        e = i.length && yt(s),
                        !e) {
                            return M.apply(n, i),
                            n
                        }
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)),
            n
        }
        r.sortStable = b.split("").sort(A).join("") === b,
        r.detectDuplicates = S,
        p(),
        r.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }),
        ut(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function(e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }),
        r.attributes && ut(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ct("value", function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }),
        ut(function(e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function(e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }),
        x.find = at,
        x.expr = at.selectors,
        x.expr[":"] = x.expr.pseudos,
        x.unique = at.uniqueSort,
        x.text = at.getText,
        x.isXMLDoc = at.isXML,
        x.contains = at.contains
    }(e);
    var O = {};
    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function(t) {
            for (r = e.memory && t,
            i = !0,
            a = s || 0,
            s = 0,
            o = l.length,
            n = !0; l && o > a; a++) {
                if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            }
            n = !1,
            l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }
        , p = {
            add: function() {
                if (l) {
                    var t = l.length;
                    (function i(t) {
                        x.each(t, function(t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    })(arguments),
                    n ? o = l.length : r && (s = t,
                    c(r))
                }
                return this
            },
            remove: function() {
                return l && x.each(arguments, function(e, t) {
                    var r;
                    while ((r = x.inArray(t, l, r)) > -1) {
                        l.splice(r, 1),
                        n && (o >= r && o--,
                        a >= r && a--)
                    }
                }),
                this
            },
            has: function(e) {
                return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                o = 0,
                this
            },
            disable: function() {
                return l = u = r = t,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return u = t,
                r || p.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(e, t) {
                return !l || i && !u || (t = t || [],
                t = [e, t.slice ? t.slice() : t],
                n ? u.push(t) : c(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return p
    }
    ,
    x.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return x.Deferred(function(n) {
                        x.each(t, function(t, o) {
                            var a = o[0]
                              , s = x.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? x.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            x.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? g.call(arguments) : r,
                    n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            }
            , s, l, u;
            if (r > 1) {
                for (s = Array(r),
                l = Array(r),
                u = Array(r); r > t; t++) {
                    n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i
                }
            }
            return i || o.resolveWith(u, n),
            o.promise()
        }
    }),
    x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"),
        d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = d.getElementsByTagName("*") || [],
        r = d.getElementsByTagName("a")[0],
        !r || !r.style || !n.length) {
            return t
        }
        s = a.createElement("select"),
        u = s.appendChild(a.createElement("option")),
        o = d.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t.getSetAttribute = "t" !== d.className,
        t.leadingWhitespace = 3 === d.firstChild.nodeType,
        t.tbody = !d.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!d.getElementsByTagName("link").length,
        t.style = /top/.test(r.getAttribute("style")),
        t.hrefNormalized = "/a" === r.getAttribute("href"),
        t.opacity = /^0.5/.test(r.style.opacity),
        t.cssFloat = !!r.style.cssFloat,
        t.checkOn = !!o.value,
        t.optSelected = u.selected,
        t.enctype = !!a.createElement("form").enctype,
        t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML,
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        o.checked = !0,
        t.noCloneChecked = o.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"),
        o.setAttribute("value", ""),
        t.input = "" === o.getAttribute("value"),
        o.value = "t",
        o.setAttribute("type", "radio"),
        t.radioValue = "t" === o.value,
        o.setAttribute("checked", "t"),
        o.setAttribute("name", "t"),
        l = a.createDocumentFragment(),
        l.appendChild(o),
        t.appendChecked = o.checked,
        t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked,
        d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }),
        d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) {
            d.setAttribute(c = "on" + f, "t"),
            t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1
        }
        d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) {
            break
        }
        return t.ownLast = "0" !== f,
        x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"),
            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            l.appendChild(n).appendChild(d),
            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            o = d.getElementsByTagName("td"),
            o[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            p = 0 === o[0].offsetHeight,
            o[0].style.display = "",
            o[1].style.display = "none",
            t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight,
            d.innerHTML = "",
            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }),
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null ) || {}).top,
            t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null ) || {
                width: "4px"
            }).width,
            r = d.appendChild(a.createElement("div")),
            r.style.cssText = d.style.cssText = s,
            r.style.marginRight = r.style.width = "0",
            d.style.width = "1px",
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null ) || {}).marginRight)),
            typeof d.style.zoom !== i && (d.innerHTML = "",
            d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === d.offsetWidth,
            d.style.display = "block",
            d.innerHTML = "<div></div>",
            d.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== d.offsetWidth,
            t.inlineBlockNeedsLayout && (l.style.zoom = 1)),
            l.removeChild(n),
            n = d = o = r = null )
        }),
        n = s = l = u = r = o = null ,
        t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , P = /([A-Z])/g;
    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) {
                return c || (c = l ? e[s] = p.pop() || x.guid++ : s),
                u[c] || (u[c] = l ? {} : {
                    toJSON: x.noop
                }),
                ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)),
                a = u[c],
                i || (a.data || (a.data = {}),
                a = a.data),
                r !== t && (a[x.camelCase(n)] = r),
                "string" == typeof n ? (o = a[n],
                null == o && (o = a[x.camelCase(n)])) : o = a,
                o
            }
        }
    }
    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t),
                    t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    while (i--) {
                        delete r[t[i]]
                    }
                    if (n ? !I(r) : !x.isEmptyObject(r)) {
                        return
                    }
                }
                (n || (delete a[s].data,
                I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null )
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando],
            !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) {
                return !1
            }
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    x.fn.extend({
        data: function(e, n) {
            var r, i, o = null , a = 0, s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s),
                1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) {
                        i = r[a].name,
                        0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)),
                        $(s, i, o[i]))
                    }
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i),
            "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else {
                r = t
            }
        }
        return r
    }
    function I(e) {
        var t;
        for (t in e) {
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) {
                return !1
            }
        }
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue",
            i = x._data(e, n),
            r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)),
            i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = x._queueHooks(e, t)
              , a = function() {
                x.dequeue(e, t)
            }
            ;
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"),
                    x._removeData(e, n)
                })
            })
        }
    }),
    x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            r--),
            r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function() {
                --i || o.resolveWith(a, [a])
            }
            ;
            "string" != typeof e && (n = e,
            e = t),
            e = e || "fx";
            while (s--) {
                r = x._data(a[s], e + "queueHooks"),
                r && r.empty && (i++,
                r.empty.add(l))
            }
            return l(),
            o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).addClass(e.call(this, t, this.className))
                })
            }
            if (l) {
                for (t = (e || "").match(T) || []; s > a; a++) {
                    if (n = this[a],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) {
                            0 > r.indexOf(" " + i + " ") && (r += i + " ")
                        }
                        n.className = x.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).removeClass(e.call(this, t, this.className))
                })
            }
            if (l) {
                for (t = (e || "").match(T) || []; s > a; a++) {
                    if (n = this[a],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++]) {
                            while (r.indexOf(" " + i + " ") >= 0) {
                                r = r.replace(" " + i + " ", " ")
                            }
                        }
                        n.className = e ? x.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0, o = x(this), a = e.match(T) || [];
                    while (t = a[r++]) {
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                    }
                } else {
                    (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
                }
            })
        },
        hasClass: function(e) {
            var t = " " + e + " "
              , n = 0
              , r = this.length;
            for (; r > n; n++) {
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) {
                    return !0
                }
            }
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            if (arguments.length) {
                return i = x.isFunction(e),
                this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e,
                    null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()],
                    r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
                })
            }
            if (o) {
                return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()],
                r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value,
                "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }),
    x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++) {
                        if (n = r[l],
                        !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(),
                            o) {
                                return t
                            }
                            a.push(t)
                        }
                    }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), a = i.length;
                    while (a--) {
                        r = i[a],
                        (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0)
                    }
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(),
                o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)),
                r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n),
                null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""),
                r) : (x.removeAttr(e, n),
                t))
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(T);
            if (o && 1 === e.nodeType) {
                while (n = o[i++]) {
                    r = x.propFix[n] || n,
                    x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""),
                    e.removeAttribute(Q ? n : r)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return a = 1 !== s || !x.isXMLDoc(e),
                a && (n = x.propFix[n] || n,
                o = x.propHooks[n]),
                r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n]
              , a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null ;
            return x.expr.attrHandle[n] = o,
            a
        }
        : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }),
    K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n,
            t) : z && z.set(e, n, r)
        }
    }),
    Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n : t
        }
    },
    x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }
    ,
    x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    },
    x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    },
    x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"),
                r) : t
            }
        }
    })),
    x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }),
    x.support.enctype || (x.propFix.enctype = "encoding"),
    x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        },
        x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Z = /^(?:input|select|textarea)$/i
      , et = /^key/
      , tt = /^(?:mouse|contextmenu)|click/
      , nt = /^(?:focusinfocus|focusoutblur)$/
      , rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0
    }
    function ot() {
        return !1
    }
    function at() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r,
                r = c.handler,
                a = c.selector),
                r.guid || (r.guid = x.guid++),
                (l = v.events) || (l = v.events = {}),
                (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }
                ,
                f.elem = e),
                n = (n || "").match(T) || [""],
                u = n.length;
                while (u--) {
                    s = rt.exec(n[u]) || [],
                    g = y = s[1],
                    m = (s[2] || "").split(".").sort(),
                    g && (p = x.event.special[g] || {},
                    g = (a ? p.delegateType : p.bindType) || g,
                    p = x.event.special[g] || {},
                    d = x.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && x.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    }, c),
                    (h = l[g]) || (h = l[g] = [],
                    h.delegateCount = 0,
                    p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))),
                    p.add && (p.add.call(e, d),
                    d.handler.guid || (d.handler.guid = r.guid)),
                    a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                    x.event.global[g] = !0)
                }
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""],
                u = t.length;
                while (u--) {
                    if (s = rt.exec(t[u]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        p = x.event.special[d] || {},
                        d = (r ? p.delegateType : p.bindType) || d,
                        f = c[d] || [],
                        s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = f.length;
                        while (o--) {
                            a = f[o],
                            !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                            a.selector && f.delegateCount--,
                            p.remove && p.remove.call(e, a))
                        }
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle),
                        delete c[d])
                    } else {
                        for (d in c) {
                            x.event.remove(e, d + t[u], n, r, !0)
                        }
                    }
                }
                x.isEmptyObject(c) && (delete m.handle,
                x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a,
            3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."),
            g = m.shift(),
            m.sort()),
            l = 0 > g.indexOf(":") && "on" + g,
            n = n[x.expando] ? n : new x.Event(g,"object" == typeof n && n),
            n.isTrigger = o ? 2 : 3,
            n.namespace = m.join("."),
            n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            n.result = t,
            n.target || (n.target = i),
            r = null == r ? [n] : x.makeArray(r, [n]),
            p = x.event.special[g] || {},
            o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g,
                    nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
                        h.push(u),
                        f = u
                    }
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) {
                    n.type = d > 1 ? c : p.bindType || g,
                    s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"),
                    s && s.apply(u, r),
                    s = l && u[l],
                    s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault()
                }
                if (n.type = g,
                !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l],
                    f && (i[l] = null ),
                    x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {}
                    x.event.triggered = t,
                    f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
            if (l[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u),
                n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem,
                    a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                        e.data = i.data,
                        r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l),
                        r !== t && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()))
                    }
                }
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) {
                for (; u != this; u = u.parentNode || this) {
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [],
                        a = 0; l > a; a++) {
                            i = n[a],
                            r = i.selector + " ",
                            o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null , [u]).length),
                            o[r] && o.push(i)
                        }
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
                }
            }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }),
            s
        },
        fix: function(e) {
            if (e[x.expando]) {
                return e
            }
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new x.Event(o),
            t = r.length;
            while (t--) {
                n = r[t],
                e[n] = o[n]
            }
            return e.target || (e.target = o.srcElement || a),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a,
                o = i.documentElement,
                r = i.body,
                e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0),
                e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l),
                e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus) {
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(),
                    !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null , t) : x.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null ),
        e.detachEvent(r, n))
    }
    ,
    x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e,
        n && x.extend(this, n),
        this.timeStamp = e && e.timeStamp || x.now(),
        this[x.expando] = !0,
        t) : new x.Event(e,n)
    }
    ,
    x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it,
            this.stopPropagation()
        }
    },
    x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                x._data(r, "submitBubbles", !0))
            }),
            t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"),
            t)
        }
    }),
    x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                x.event.simulate("change", this, e, !0)
            })),
            !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }),
                x._data(t, "changeBubbles", !0))
            }),
            t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"),
            !Z.test(this.nodeName)
        }
    }),
    x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        }
        ;
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }),
    x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n,
                n = t);
                for (a in e) {
                    this.on(a, n, r, e[a], o)
                }
                return this
            }
            if (null == r && null == i ? (i = n,
            r = n = t) : null == i && ("string" == typeof n ? (i = r,
            r = t) : (i = r,
            r = n,
            n = t)),
            i === !1) {
                i = ot
            } else {
                if (!i) {
                    return this
                }
            }
            return 1 === o && (s = i,
            i = function(e) {
                return x().off(e),
                s.apply(this, arguments)
            }
            ,
            i.guid = s.guid || (s.guid = x.guid++)),
            this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) {
                return i = e.handleObj,
                x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this
            }
            if ("object" == typeof e) {
                for (o in e) {
                    this.off(o, n, e[o])
                }
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n,
            n = t),
            r === !1 && (r = ot),
            this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/
      , lt = /^(?:parents|prev(?:Until|All))/
      , ut = x.expr.match.needsContext
      , ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) {
                return this.pushStack(x(e).filter(function() {
                    for (t = 0; i > t; t++) {
                        if (x.contains(r[t], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (t = 0; i > t; t++) {
                x.find(e, r[t], n)
            }
            return n = this.pushStack(i > 1 ? x.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        has: function(e) {
            var t, n = x(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) {
                    if (x.contains(this, n[t])) {
                        return !0
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++) {
                for (n = this[r]; n && n !== t; n = n.parentNode) {
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
                }
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e)
              , r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function pt(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = x.filter(r, i)),
            this.length > 1 && (ct[e] || (i = x.unique(i)),
            lt.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    }),
    x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = []
              , o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) {
                1 === o.nodeType && i.push(o),
                o = o[n]
            }
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                1 === e.nodeType && e !== t && n.push(e)
            }
            return n
        }
    });
    function ft(e, t, n) {
        if (x.isFunction(t)) {
            return x.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            })
        }
        if (t.nodeType) {
            return x.grep(e, function(e) {
                return e === t !== n
            })
        }
        if ("string" == typeof t) {
            if (st.test(t)) {
                return x.filter(t, e, n)
            }
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }
    function dt(e) {
        var t = ht.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement) {
            while (t.length) {
                n.createElement(t.pop())
            }
        }
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , gt = / jQuery\d+="(?:null|\d+)"/g
      , mt = RegExp("<(?:" + ht + ")[\\s/>]", "i")
      , yt = /^\s+/
      , vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , bt = /<([\w:]+)/
      , xt = /<tbody/i
      , wt = /<|&#?\w+;/
      , Tt = /<(?:script|style|link)/i
      , Ct = /^(?:checkbox|radio)$/i
      , Nt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , kt = /^$|\/(?:java|ecma)script/i
      , Et = /^true\/(.*)/
      , St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , At = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , jt = dt(a)
      , Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option,
    At.tbody = At.tfoot = At.colgroup = At.caption = At.thead,
    At.th = At.td,
    x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null , e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (; null != (n = r[i]); i++) {
                t || 1 !== n.nodeType || x.cleanData(Ft(n)),
                n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")),
                n.parentNode.removeChild(n))
            }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) {
                    e.removeChild(e.firstChild)
                }
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {}
                  , r = 0
                  , i = this.length;
                if (e === t) {
                    return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t
                }
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) {
                            n = this[r] || {},
                            1 === n.nodeType && (x.cleanData(Ft(n, !1)),
                            n.innerHTML = e)
                        }
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null , e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                return [e.nextSibling, e.parentNode]
            })
              , t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++]
                  , i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling),
                x(this).remove(),
                i.insertBefore(n, r))
            }, !0),
            t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) {
                return this.each(function(r) {
                    var i = p.eq(r);
                    g && (e[0] = h.call(this, r, i.html())),
                    i.domManip(e, t, n)
                })
            }
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this),
            r = l.firstChild,
            1 === l.childNodes.length && (l = r),
            r)) {
                for (a = x.map(Ft(l, "script"), Ht),
                o = a.length; c > u; u++) {
                    i = l,
                    u !== f && (i = x.clone(i, !0, !0),
                    o && x.merge(a, Ft(i, "script"))),
                    t.call(this[u], i, u)
                }
                if (o) {
                    for (s = a[a.length - 1].ownerDocument,
                    x.map(a, qt),
                    u = 0; o > u; u++) {
                        i = a[u],
                        kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")))
                    }
                }
                l = r = null
            }
            return this
        }
    });
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) {
            x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
        }
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) {
                    for (r = 0,
                    i = s[n].length; i > r; r++) {
                        x.event.add(t, n, s[n][r])
                    }
                }
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }
    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) {
                    x.removeEvent(t, r, i.handle)
                }
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text,
            qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++) {
                n = r === a ? this : this.clone(!0),
                x(o[r])[t](n),
                h.apply(i, n.get())
            }
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) {
            for (s = [],
            r = e.childNodes || e; null != (o = r[a]); a++) {
                !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n))
            }
        }
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }
    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML,
            Dt.removeChild(o = Dt.firstChild)),
            !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) {
                for (r = Ft(o),
                s = Ft(e),
                a = 0; null != (i = s[a]); ++a) {
                    r[a] && Ot(i, r[a])
                }
            }
            if (t) {
                if (n) {
                    for (s = s || Ft(e),
                    r = r || Ft(o),
                    a = 0; null != (i = s[a]); a++) {
                        Mt(i, r[a])
                    }
                } else {
                    Mt(e, o)
                }
            }
            return r = Ft(o, "script"),
            r.length > 0 && _t(r, !l && Ft(e, "script")),
            r = s = i = null ,
            o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++) {
                if (o = e[h],
                o || 0 === o) {
                    if ("object" === x.type(o)) {
                        x.merge(d, o.nodeType ? [o] : o)
                    } else {
                        if (wt.test(o)) {
                            s = s || f.appendChild(t.createElement("div")),
                            l = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                            c = At[l] || At._default,
                            s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2],
                            i = c[0];
                            while (i--) {
                                s = s.lastChild
                            }
                            if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])),
                            !x.support.tbody) {
                                o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild,
                                i = o && o.childNodes.length;
                                while (i--) {
                                    x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                                }
                            }
                            x.merge(d, s.childNodes),
                            s.textContent = "";
                            while (s.firstChild) {
                                s.removeChild(s.firstChild)
                            }
                            s = f.lastChild
                        } else {
                            d.push(t.createTextNode(o))
                        }
                    }
                }
            }
            s && f.removeChild(s),
            x.support.appendChecked || x.grep(Ft(d, "input"), Bt),
            h = 0;
            while (o = d[h++]) {
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o),
                s = Ft(f.appendChild(o), "script"),
                a && _t(s),
                n)) {
                    i = 0;
                    while (o = s[i++]) {
                        kt.test(o.type || "") && n.push(o)
                    }
                }
            }
            return s = null ,
            f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
            for (; null != (n = e[s]); s++) {
                if ((t || x.acceptData(n)) && (o = n[l],
                a = o && u[o])) {
                    if (a.events) {
                        for (r in a.events) {
                            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle)
                        }
                    }
                    u[o] && (delete u[o],
                    c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null ,
                    p.push(o))
                }
            }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).wrapAll(e.call(this, t))
                })
            }
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) {
                        e = e.firstChild
                    }
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {
        BODY: "block"
    }, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e) {
            return t
        }
        var n = t.charAt(0).toUpperCase() + t.slice(1)
          , r = t
          , i = en.length;
        while (i--) {
            if (t = en[i] + n,
            t in e) {
                return t
            }
        }
        return r
    }
    function nn(e, t) {
        return e = t || e,
        "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++) {
            r = e[a],
            r.style && (o[a] = x._data(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r),
            (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))))
        }
        for (a = 0; s > a; a++) {
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"))
        }
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e),
                    i = n.length; i > s; s++) {
                        a[n[s]] = x.css(e, n[s], !1, o)
                    }
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }),
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n), u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)),
                s = x.cssHooks[n] || x.cssHooks[l],
                r === t) {
                    return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n]
                }
                if (a = typeof r,
                "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)),
                a = "number"),
                !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"),
                x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"),
                s && "set"in s && (r = s.set(e, r, i)) === t))) {
                    try {
                        u[n] = r
                    } catch (c) {}
                }
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)),
            s = x.cssHooks[n] || x.cssHooks[l],
            s && "get"in s && (a = s.get(e, !0, r)),
            a === t && (a = Wt(e, n, i)),
            "normal" === a && n in Kt && (a = Kt[n]),
            "" === r || r ? (o = parseFloat(a),
            r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }),
    e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null )
    }
    ,
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)),
        Yt.test(l) && Ut.test(n) && (i = u.width,
        o = u.minWidth,
        a = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = l,
        l = s.width,
        u.width = i,
        u.minWidth = o,
        u.maxWidth = a)),
        l
    }
    ) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }
    ,
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]),
        Yt.test(l) && !zt.test(n) && (i = u.left,
        o = e.runtimeStyle,
        a = o && o.left,
        a && (o.left = e.currentStyle.left),
        u.left = "fontSize" === n ? "1em" : l,
        l = u.pixelLeft + "px",
        u.left = i,
        a && (o.left = a)),
        "" === l ? "auto" : l
    }
    );
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0
          , a = 0;
        for (; 4 > o; o += 2) {
            "margin" === n && (a += x.css(e, n + Zt[o], !0, i)),
            r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)),
            "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i),
            "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)))
        }
        return a
    }
    function sn(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Rt(e)
          , a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o),
            (0 > i || null == i) && (i = e.style[t]),
            Yt.test(i)) {
                return i
            }
            r = a && (x.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function ln(e) {
        var t = a
          , n = Gt[e];
        return n || (n = un(e, t),
        "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
        t = (Pt[0].contentWindow || Pt[0].contentDocument).document,
        t.write("<!doctype html><html><body>"),
        t.close(),
        n = un(e, t),
        Pt.detach()),
        Gt[e] = n),
        n
    }
    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body)
          , r = x.css(n[0], "display");
        return n.remove(),
        r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }),
    x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }),
        !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n),
                    Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }),
    x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }
    ,
    x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }
    ),
    x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0
                  , i = {}
                  , o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) {
                    i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]
                }
                return i
            }
        },
        Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g
      , pn = /\[\]$/
      , fn = /\r?\n/g
      , dn = /^(?:submit|button|image|reset|file)$/i
      , hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }),
    x.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        ;
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional),
        x.isArray(e) || e.jquery && !x.isPlainObject(e)) {
            x.each(e, function() {
                o(this.name, this.value)
            })
        } else {
            for (r in e) {
                gn(r, e[r], n, o)
            }
        }
        return i.join("&").replace(cn, "+")
    }
    ;
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) {
            x.each(t, function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            })
        } else {
            if (n || "object" !== x.type(t)) {
                r(e, t)
            } else {
                for (i in t) {
                    gn(e + "[" + i + "]", t[i], n, r)
                }
            }
        }
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
        }
    }),
    x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null , t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null , t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"),
        yn.href = "",
        yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n)) {
                while (r = o[i++]) {
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
        }
    }
    function qn(e, n, r, i) {
        var o = {}
          , a = e === jn;
        function s(l) {
            var u;
            return o[l] = !0,
            x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c),
                s(c),
                !1)
            }),
            u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }
    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) {
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i])
        }
        return r && x.extend(!0, e, r),
        e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) {
            return Sn.apply(this, arguments)
        }
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length),
        e = e.slice(0, l)),
        x.isFunction(n) ? (r = n,
        n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e,
            e = t),
            n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a)) {
                                c[t[1].toLowerCase()] = t[2]
                            }
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v[n] = v[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (2 > b) {
                            for (t in e) {
                                m[t] = [m[t], e[t]]
                            }
                        } else {
                            C.always(e[C.status])
                        }
                    }
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return u && u.abort(t),
                    k(0, t),
                    this
                }
            };
            if (h.promise(C).complete = g.add,
            C.success = C.done,
            C.error = C.fail,
            p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""],
            null == p.crossDomain && (r = En.exec(p.url.toLowerCase()),
            p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)),
            qn(An, p, n, C),
            2 === b) {
                return C
            }
            l = p.global,
            l && 0 === x.active++ && x.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Nn.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data,
            delete p.data),
            p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)),
            p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]),
            x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) {
                C.setRequestHeader(i, p.headers[i])
            }
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) {
                return C.abort()
            }
            w = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                C[i](p[i])
            }
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1,
                l && d.trigger("ajaxSend", [C, p]),
                p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1,
                    u.send(y, k)
                } catch (N) {
                    if (!(2 > b)) {
                        throw N
                    }
                    k(-1, N)
                }
            } else {
                k(-1, "No Transport")
            }
            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2,
                s && clearTimeout(s),
                u = t,
                a = i || "",
                C.readyState = e > 0 ? 4 : 0,
                c = e >= 200 && 300 > e || 304 === e,
                r && (w = Mn(p, C, r)),
                w = On(p, w, C, c),
                c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"),
                T && (x.lastModified[o] = T),
                T = C.getResponseHeader("etag"),
                T && (x.etag[o] = T)),
                204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state,
                y = w.data,
                v = w.error,
                c = !v)) : (v = N,
                (e || !N) && (N = "error",
                0 > e && (e = 0))),
                C.status = e,
                C.statusText = (n || N) + "",
                c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]),
                C.statusCode(m),
                m = t,
                l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]),
                g.fireWith(f, [C, N]),
                l && (d.trigger("ajaxComplete", [C, p]),
                --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }),
    x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i,
            i = r,
            r = t),
            x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0]) {
            u.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"))
        }
        if (o) {
            for (s in l) {
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
            }
        }
        if (u[0]in r) {
            a = u[0]
        } else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a),
        r[a]) : t
    }
    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) {
            for (a in e.converters) {
                u[a.toLowerCase()] = e.converters[a]
            }
        }
        o = c.shift();
        while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = c.shift()) {
                if ("*" === o) {
                    o = l
                } else {
                    if ("*" !== l && l !== o) {
                        if (a = u[l + " " + o] || u["* " + o],
                        !a) {
                            for (i in u) {
                                if (s = i.split(" "),
                                s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0],
                                    c.unshift(s[1]));
                                    break
                                }
                            }
                        }
                        if (a !== !0) {
                            if (a && e["throws"]) {
                                t = a(t)
                            } else {
                                try {
                                    t = a(t)
                                } catch (p) {
                                    return {
                                        state: "parsererror",
                                        error: a ? p : "No conversion from " + l + " to " + o
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e),
                e
            }
        }
    }),
    x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null ,
                        n.parentNode && n.parentNode.removeChild(n),
                        n = null ,
                        t || i(200, "success"))
                    }
                    ,
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = []
      , Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0,
            e
        }
    }),
    x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
        l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
        n.converters["script json"] = function() {
            return s || x.error(o + " was not called"),
            s[0]
        }
        ,
        n.dataTypes[0] = "json",
        a = e[o],
        e[o] = function() {
            s = arguments
        }
        ,
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback,
            Fn.push(o)),
            s && x.isFunction(a) && a(s[0]),
            s = a = t
        }),
        "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
        var e;
        for (e in Pn) {
            Pn[e](t, !0)
        }
    }
    ;
    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    }
    : In,
    Rn = x.ajaxSettings.xhr(),
    x.support.cors = !!Rn && "withCredentials"in Rn,
    Rn = x.support.ajax = !!Rn,
    Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                    n.xhrFields) {
                        for (s in n.xhrFields) {
                            l[s] = n.xhrFields[s]
                        }
                    }
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) {
                            l.setRequestHeader(s, i[s])
                        }
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null ),
                    r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState)) {
                                if (r = t,
                                a && (l.onreadystatechange = x.noop,
                                $n && delete Pn[a]),
                                i) {
                                    4 !== l.readyState && l.abort()
                                } else {
                                    p = {},
                                    s = l.status,
                                    u = l.getAllResponseHeaders(),
                                    "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }
                    ,
                    n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn,
                    $n && (Pn || (Pn = {},
                    x(e).unload($n)),
                    Pn[a] = r),
                    l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = Yn.exec(t)
              , o = i && i[3] || (x.cssNumber[e] ? "" : "px")
              , a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e))
              , s = 1
              , l = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                i = i || [],
                a = +r || 1;
                do {
                    s = s || ".5",
                    a /= s,
                    x.style(n.elem, e, a + o)
                } while (s !== (s = n.cur() / r) && 1 !== s && --l)
            }
            return i && (a = n.start = +a || +r || 0,
            n.unit = o,
            n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    function Kn() {
        return setTimeout(function() {
            Xn = t
        }),
        Xn = x.now()
    }
    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++) {
            if (r = i[o].call(n, t, e)) {
                return r
            }
        }
    }
    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (i) {
                return !1
            }
            var t = Xn || Kn()
              , n = Math.max(0, u.startTime + u.duration - t)
              , r = n / u.duration || 0
              , o = 1 - r
              , a = 0
              , l = u.tweens.length;
            for (; l > a; a++) {
                u.tweens[a].run(o)
            }
            return s.notifyWith(e, [u, o, n]),
            1 > o && l ? n : (s.resolveWith(e, [u]),
            !1)
        }
        , u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? u.tweens.length : 0;
                if (i) {
                    return this
                }
                for (i = !0; r > n; n++) {
                    u.tweens[n].run(1)
                }
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++) {
            if (r = Gn[o].call(u, e, c, u.opts)) {
                return r
            }
        }
        return x.map(c, Zn, u),
        x.isFunction(u.opts.start) && u.opts.start.call(e, u),
        x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e) {
            if (r = x.camelCase(n),
            i = t[r],
            o = e[n],
            x.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            a = x.cssHooks[r],
            a && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o) {
                    n in e || (e[n] = o[n],
                    t[n] = i)
                }
            } else {
                t[r] = i
            }
        }
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++) {
                n = e[r],
                Qn[n] = Qn[n] || [],
                Qn[n].unshift(t)
            }
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        u.always(function() {
            u.always(function() {
                s.unqueued--,
                x.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            if (i = t[r],
            Vn.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (f ? "hide" : "show")) {
                    continue
                }
                c[r] = d && d[r] || x.style(e, r)
            }
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}),
            o && (d.hidden = !f),
            f ? x(e).show() : u.done(function() {
                x(e).hide()
            }),
            u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) {
                    x.style(e, t, c[t])
                }
            });
            for (r in c) {
                a = Zn(f ? d[r] : 0, r, u),
                r in d || (d[r] = a.start,
                f && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e,t,n,r,i)
    }
    x.Tween = rr,
    rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : rr.propHooks._default.set(this),
            this
        }
    },
    rr.prototype.init.prototype = rr.prototype,
    rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }),
    x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e)
              , o = x.speed(t, n, r)
              , a = function() {
                var t = er(this, x.extend({}, e), o);
                (i || x._data(this, "finish")) && t.stop(!0)
            }
            ;
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            }
            ;
            return "string" != typeof e && (r = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = null != e && e + "queueHooks"
                  , o = x.timers
                  , a = x._data(this);
                if (n) {
                    a[n] && a[n].stop && i(a[n])
                } else {
                    for (n in a) {
                        a[n] && a[n].stop && Jn.test(n) && i(a[n])
                    }
                }
                for (n = o.length; n--; ) {
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r),
                    t = !1,
                    o.splice(n, 1))
                }
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                x.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; ) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1))
                }
                for (t = 0; a > t; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this)
                }
                delete n.finish
            })
        }
    });
    function ir(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
            n = Zt[i],
            r["margin" + n] = r["padding" + n] = e
        }
        return t && (r.opacity = r.width = e),
        r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            x.isFunction(r.old) && r.old.call(this),
            r.queue && x.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    },
    x.timers = [],
    x.fx = rr.prototype.init,
    x.fx.tick = function() {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++) {
            e = n[r],
            e() || n[r] !== e || n.splice(r--, 1)
        }
        n.length || x.fx.stop(),
        Xn = t
    }
    ,
    x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }
    ,
    x.fx.interval = 13,
    x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }
    ,
    x.fx.stop = function() {
        clearInterval(Un),
        Un = null
    }
    ,
    x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    x.fx.step = {},
    x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }
    ),
    x.fn.offset = function(e) {
        if (arguments.length) {
            return e === t ? this : this.each(function(t) {
                x.offset.setOffset(this, e, t)
            })
        }
        var n, r, o = {
            top: 0,
            left: 0
        }, a = this[0], s = a && a.ownerDocument;
        if (s) {
            return n = s.documentElement,
            x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()),
            r = or(s),
            {
                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
        }
    }
    ,
    x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
            l ? (c = i.position(),
            p = c.top,
            f = c.left) : (p = parseFloat(a) || 0,
            f = parseFloat(s) || 0),
            x.isFunction(t) && (t = t.call(e, n, o)),
            null != t.top && (u.top = t.top - o.top + p),
            null != t.left && (u.left = t.left - o.left + f),
            "using"in t ? t.using.call(e, u) : i.css(u)
        }
    },
    x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                x.nodeName(e[0], "html") || (n = e.offset()),
                n.top += x.css(e[0], "borderTopWidth", !0),
                n.left += x.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
                    e = e.offsetParent
                }
                return e || s
            })
        }
    }),
    x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o,
                t)
            }, e, i, arguments.length, null )
        }
    });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i)
                  , s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null )
            }
        })
    }),
    x.fn.size = function() {
        return this.length
    }
    ,
    x.fn.andSelf = x.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
})(window);
var Settings = {
    baseAPIUrl: "http://www.zimbio.com",
    baseCDNUrl: "http://www1.static.zimbio.com",
    version: 0,
    isAdBlocking: null ,
    add: function(b) {
        if (!b) {
            return
        }
        for (var a in b) {
            this[a] = b[a]
        }
    },
    init: function(b) {
        var a = this;
        this.add(b);
        this.supportsTouch = (("ontouchstart"in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        if ($.cookie("iab")) {
            this.isAdBlocking = $.cookie("iab")
        }
        if ((Settings.isMktg && $(window).width() > 1200) || window.location.search.indexOf("debug_wide") !== -1) {
            this.isWide = true;
            $("html").addClass("isWide")
        }
        $(document).ready(function() {
            if (a.supportsTouch) {
                $("body").addClass("touch")
            } else {
                $("body").addClass("click")
            }
        })
    }
};
var User = {
    loginLoaded: false,
    loginURL: "/tools/login_overlay",
    authenticationCallbackArray: [],
    init: function() {
        $("body").on("click", "#accountRegister", function(a) {
            User.domainRegister();
            return a.stopPropagation()
        })
    },
    authenticationCallback: function() {
        for (var a = 0; a < User.authenticationCallbackArray.length; a++) {
            var b = User.authenticationCallbackArray[a];
            if (typeof (b) == "function") {
                b()
            }
        }
    },
    domainRegister: function(a) {
        Loader.getScript("memberservices/jq_look_register.js", function() {
            LookRegister.isFavorite = a ? true : false;
            LookRegister.overlayY = "375";
            LookRegister.overlayX = "560";
            LookRegister.show()
        }, false)
    },
    presentLoginOverlay: function() {
        var a;
        if (User.loginLoaded) {
            Dialog.show({
                id: "loginBox"
            });
            a = $("#loginBox")
        } else {
            el = document.createElement("div");
            el.id = "loginBox";
            el.className = "loginBox hidden borderColor";
            document.body.appendChild(el);
            a = $(el);
            if (Settings.baseJSUrl) {
                var b = Settings.baseJSUrl + User.loginURL;
                b += "?referer=/quiz"
            } else {
                var b = User.loginURL;
                b += "?referer=" + escape(window.location.pathname + window.location.search)
            }
            $.ajax({
                url: b,
                type: "get",
                beforeSend: function() {
                    a.html('<div class="ajax-loader">Loading...</div>')
                },
                success: function(c) {
                    a.html(c);
                    User.loginLoaded = true;
                    Dialog.show({
                        id: "loginBox"
                    })
                },
                error: function() {}
            })
        }
    },
    login: function() {
        Loader.getScript("facebook/jq_fb_register.js", function() {
            if (typeof (LookRegister) !== "undefined") {
                LookRegister.close()
            }
            User.presentLoginOverlay()
        }, false)
    },
    loginEnter: function(b) {
        var a = b ? b : window.event;
        if (a.keyCode == 13) {
            document.forms.FormLogin.submit()
        }
    },
    loginSubmit: function() {
        document.forms.FormLogin.submit()
    }
};
$(User.init);
var AutoSearch = {
    requestCount: 0,
    start: -1,
    query2: "",
    dropDown: false,
    init: function() {
        var a = $("#q");
        a.on("keyup", AutoSearch.handleKey);
        a.on("change", AutoSearch.handleKey);
        a.on("focus", AutoSearch.handleKey);
        a.on("blur", AutoSearch.handleKey);
        a.on("keydown", AutoSearch.handleKey)
    },
    trimQuery: function(a) {
        return a.replace(/^\s+|\s+$/g, "")
    },
    triggerEvent: function() {
        var b = $("#q").val();
        b = AutoSearch.trimQuery(b);
        if (b != AutoSearch.query2) {
            AutoSearch.query2 = b;
            var a = "/tools/search_auto_complete?q=" + encodeURIComponent(b);
            if (!(b == "")) {
                AutoSearch.load(a, "autoDropdown")
            } else {
                if (b == "") {
                    if (AutoSearch.dropDown) {
                        AutoSearch.dropDown.hide()
                    }
                    AutoSearch.requestCount = 0
                }
            }
        }
        if (AutoSearch.dropDown) {
            if (AutoSearch.isVisible()) {
                $(document).on("click", AutoSearch.handleKey)
            }
        }
    },
    keyMovement: function(b, d) {
        var c = AutoSearch.dropDown.find("li");
        var a = c.length;
        if (d >= 0 && d < a) {
            $(c[d]).attr("class", "noHighlight")
        }
        if (b >= 0 && b < a) {
            $(c[b]).attr("class", "highlight")
        }
    },
    isVisible: function() {
        return AutoSearch.dropDown.is(":visible")
    },
    handleKey: function(g) {
        if (g.type == "click") {
            if (AutoSearch.dropDown) {
                if (AutoSearch.isVisible()) {
                    var d = $(g.target || g.srcElement);
                    if (d.attr("id") != "searchResult" && d.attr("id") != "q" && d.attr("id") != "searchSubmitButton") {
                        AutoSearch.dropDown.hide()
                    }
                }
            }
        }
        if (g.type == "focus") {
            $(g.target).attr("placeholder", "Search");
            if ($("q").val() != "") {
                if (AutoSearch.dropDown) {
                    AutoSearch.dropDown.show()
                }
            }
        }
        if (g.type == "blur") {
            $(g.target).attr("placeholder", "");
            if (Settings.supportsTouch && AutoSearch.dropDown) {
                setTimeout("AutoSearch.dropDown.hide()", 200)
            }
        }
        if (g.keyCode == 40) {
            g.preventDefault ? g.preventDefault() : g.returnValue = false;
            var c = AutoSearch.dropDown.find("li");
            var b = c.length;
            if (g.type != "keyup") {
                if (AutoSearch.start < b - 1) {
                    AutoSearch.start++
                } else {
                    AutoSearch.start = b - 1
                }
            }
            AutoSearch.keyMovement(AutoSearch.start, AutoSearch.start - 1)
        } else {
            if (g.keyCode == 38) {
                g.preventDefault ? g.preventDefault() : g.returnValue = false;
                if (g.type != "keyup") {
                    if (AutoSearch.start >= 0) {
                        AutoSearch.start--;
                        if (AutoSearch.start < -1) {
                            AutoSearch.start = -1
                        }
                        AutoSearch.keyMovement(AutoSearch.start, AutoSearch.start + 1)
                    }
                }
            } else {
                if (g.keyCode == 13) {
                    if (g.type != "keyup") {
                        if (AutoSearch.start > -1) {
                            g.cancelBubble = true;
                            g.returnValue = false;
                            if (g.stopPropagation) {
                                g.stopPropagation();
                                g.preventDefault()
                            }
                            elem_list = AutoSearch.dropDown.find("li");
                            var a = $(elem_list[AutoSearch.start]).find("a").first();
                            var f = a.attr("href");
                            var h = a.attr("id");
                            if (h) {
                                Track.Click.syntheticGet(h, true)
                            }
                            document.location = f
                        }
                    }
                    return true
                } else {
                    AutoSearch.triggerEvent()
                }
            }
        }
    },
    load: function(b, h) {
        var d = 0;
        var a;
        AutoSearch.requestCount++;
        a = AutoSearch.requestCount;
        var f;
        var e = $("#" + h);
        if (!(e.length)) {
            f = $(document.createElement("div"));
            f.attr("id", h);
            f.hide();
            var g = $("#nNavSearch");
            g.append(f);
            AutoSearch.dropDown = f
        } else {
            f = e;
            f.show()
        }
        var c = b;
        $.ajax({
            url: c
        }).done(function(j, k, l) {
            if (a == AutoSearch.requestCount) {
                AutoSearch.start = -1;
                AutoSearch.insert(f, j)
            }
        }).fail(function(l, j, k) {
            if (a == AutoSearch.requestCount) {
                AutoSearch.dropDown.hide();
                $(document).off("click", AutoSearch.handleKey)
            }
        })
    },
    insert: function(b, c) {
        b.attr("class", "searchDropdown lnk1");
        b.show();
        b.html(c);
        var a = b.find("a");
        a.on("click", function(d) {
            Track.Click.syntheticGet(d)
        })
    }
};
var Overlay = {
    maskLoaded: false,
    embeds: "",
    objects: "",
    ads: false,
    get: function(d, g, e, a) {
        if (!User.name) {
            User.login();
            return
        }
        if ($("#" + g).length) {
            Overlay.show(g, e, a);
            return
        }
        var f = document.createElement("div");
        f.id = g;
        document.body.appendChild(f);
        f.innerHTML = "Loading...please wait...";
        this.show(g, e, a);
        var b = d;
        var c = $.ajax({
            url: b,
            type: "post",
            success: function(h) {
                Overlay.insert(f.id, h)
            }
        })
    },
    insert: function(f, e) {
        var d = $("#" + f);
        d.html(e);
        var a = d.children("script");
        var c = "";
        for (var b = 0; b < a.length; b++) {
            c += a[b].text
        }
        if (d.id == "spmWrapper") {
            $("#spmscript").text = c
        } else {
            if (d.id == "easyaddplaceholder") {
                $("#easyaddscript").text = c
            }
        }
    },
    show: function(d, b, c) {
        this.cleanEmbeds(1);
        this.mask("show");
        this.place(d, b, c);
        this.cleanEmbedAds("in");
        var a = $("#mask");
        a.on("click", function() {
            Overlay.hide(d)
        })
    },
    place: function(e, b, d) {
        scrollTo(0, 0);
        var c = (Browser.getWidth() / 2) - (b / 2);
        var a = (Browser.getHeight() / 2) - (d / 2);
        $("#" + e).css({
            top: a + "px",
            left: c + "px",
            "z-index": 1000,
            position: "absolute",
            display: "block",
            visibility: "visible"
        })
    },
    hide: function(a) {
        $("#" + a).hide();
        $("#mask").hide();
        this.cleanEmbeds(2);
        this.mask("hide");
        this.cleanEmbedAds("out");
        if (a == "easyAddMain") {
            $("#easyaddplaceholder").hide()
        }
    },
    mask: function(b, c) {
        switch (b) {
        case "display":
            return;
        case "show":
            if (!Overlay.maskLoaded) {
                var a = document.createElement("div");
                a.id = "mask";
                a.style.display = "none";
                document.body.appendChild(a);
                Overlay.maskLoaded = true
            }
            $("#mask").css({
                height: Browser.getScroll() + "px",
                "z-index": 9,
                opacity: 0.8,
                visibility: "visible",
                position: "absolute"
            });
            $("#mask").show();
            this.cleanEmbedAds("in");
            return;
        case "hide":
            this.cleanEmbedAds("out");
            return
        }
    },
    cleanEmbedAds: function(a) {
        switch (a) {
        case "in":
            $(".embeddedAd").css("visibility", "hidden");
            return;
        case "out":
            $(".embeddedAd").css("visibility", "visible")
        }
    },
    toggleAds: function(a) {
        if (!Overlay.ads) {
            Overlay.ads = $(".embeddedAd") || false
        }
        if (Overlay.ads) {
            switch (a) {
            case "show":
                Overlay.ads.invoke("show");
                break;
            case "hide":
                Overlay.ads.invoke("hide");
                break
            }
        }
    },
    cleanEmbeds: function(e) {
        var a = Browser.detect()
          , d = Overlay.embeds
          , c = Overlay.objects;
        if (d == "") {
            d = document.getElementsByTagName("embed");
            c = document.getElementsByTagName("object")
        }
        if ((e == 1) && (d.length > 0)) {
            if ((a == "fLinux") || (a == "IE")) {
                for (i = 0; i < d.length; i++) {
                    d[i].style.display = "none"
                }
            } else {
                if (a == "Safari") {
                    for (i = 0; i < c.length; i++) {
                        c[i].style.visibility = "hidden"
                    }
                } else {
                    if (a == "Other") {
                        return
                    }
                }
            }
        } else {
            if ((e == 2) && (d.length > 0)) {
                if ((a == "fLinux") || (a == "IE")) {
                    for (i = 0; i < d.length; i++) {
                        d[i].style.display = "block"
                    }
                } else {
                    if (a == "Safari") {
                        for (i = 0; i < c.length; i++) {
                            c[i].style.visibility = "visible"
                        }
                    } else {
                        if (a == "Other") {
                            return
                        }
                    }
                }
            } else {
                if ((a) && (e == 3)) {
                    $("#selectedVideo").hide()
                } else {
                    if ((a) && (e == 4)) {
                        $("#selectedVideo").show()
                    }
                }
            }
        }
    }
};
var Browser = {
    init: function() {
        Browser.type = Browser.detect()
    },
    detect: function() {
        if ((navigator.userAgent.indexOf("Firefox") > -1) && (navigator.platform.indexOf("Linux") > -1)) {
            return "fLinux"
        } else {
            if ((navigator.userAgent.indexOf("MSIE") > -1) && (navigator.platform.indexOf("Win") > -1)) {
                return "IE"
            } else {
                if ((navigator.userAgent.indexOf("Safari") > -1) && (navigator.platform.indexOf("Mac") > -1)) {
                    return "Safari"
                } else {
                    return "Other"
                }
            }
        }
    },
    goBack: function() {
        if (document.referrer) {
            window.location = document.referrer
        } else {
            history.go(-1)
        }
    },
    getScroll: function() {
        if (isNaN(window.innerHeight + window.scrollMaxY)) {
            var a = document.body.scrollHeight
        } else {
            var a = window.innerHeight + window.scrollMaxY
        }
        if (a < 1600) {
            a = a + 1000
        }
        return a
    },
    getWidth: function() {
        if (typeof (window.innerWidth) == "number") {
            return window.innerWidth
        } else {
            if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                return document.documentElement.clientWidth
            } else {
                return false
            }
        }
    },
    getHeight: function() {
        if (typeof (window.innerWidth) == "number") {
            return window.innerHeight
        } else {
            if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                return document.documentElement.clientHeight
            } else {
                return false
            }
        }
    },
    getPageScroll: function() {
        var b, a;
        if (self.pageYOffset) {
            a = self.pageYOffset;
            b = self.pageXOffset
        } else {
            if (document.documentElement && document.documentElement.scrollTop) {
                a = document.documentElement.scrollTop;
                b = document.documentElement.scrollLeft
            } else {
                if (document.body) {
                    a = document.body.scrollTop;
                    b = document.body.scrollLeft
                }
            }
        }
        return {
            x: b,
            y: a
        }
    },
    getPageSize: function() {
        var c, a;
        if (window.innerHeight && window.scrollMaxY) {
            c = document.body.scrollWidth;
            a = window.innerHeight + window.scrollMaxY
        } else {
            if (document.body.scrollHeight > document.body.offsetHeight) {
                c = document.body.scrollWidth;
                a = document.body.scrollHeight
            } else {
                c = document.body.offsetWidth;
                a = document.body.offsetHeight
            }
        }
        var b, d;
        if (self.innerHeight) {
            b = self.innerWidth;
            d = self.innerHeight
        } else {
            if (document.documentElement && document.documentElement.clientHeight) {
                b = document.documentElement.clientWidth;
                d = document.documentElement.clientHeight
            } else {
                if (document.body) {
                    b = document.body.clientWidth;
                    d = document.body.clientHeight
                }
            }
        }
        if (a < d) {
            pageHeight = d
        } else {
            pageHeight = a
        }
        if (c < b) {
            pageWidth = b
        } else {
            pageWidth = c
        }
        arrayPageSize = new Array(pageWidth,pageHeight,b,d);
        return arrayPageSize
    }
};
Browser.New = {
    initOverlay: function(d, c, a) {
        this.showMask();
        this.placeOverlay(d, c, a);
        var b = $("#mask");
        b.on("click", function() {
            Browser.New.hideOverlay(d)
        })
    },
    showMask: function() {
        if (!Overlay.maskLoaded) {
            var b = document.createElement("div");
            b.id = "mask";
            b.style.display = "none";
            document.body.appendChild(b);
            Overlay.maskLoaded = true
        }
        var a = $("#mask");
        if (a.length) {
            a.style.height = Browser.getScroll() + "px";
            a.css("opacity", 0.35);
            a.show()
        }
    },
    placeOverlay: function(g, c, b) {
        var f = $("#" + g);
        var a = Browser.getPageScroll();
        var e = (Browser.getHeight() - b) / 2 + a.y;
        var d = (Browser.getWidth() - c) / 2 + a.x;
        f.css("left", Math.max(parseInt(d), 0) + "px");
        f.css("top", Math.max(parseInt(e), 0) + "px");
        f.show()
    },
    hideOverlay: function(a) {
        $("#" + a).hide();
        $("#mask").hide()
    }
};
var Zimbio = Zimbio || {};
Zimbio.library = (function() {
    function c() {
        var f = document.cookie.split(";")
          , j = {};
        for (var g = 0; g <= f.length - 1; g++) {
            var h = f[g].split(/=(.+)?/);
            if (typeof h[0] != "undefined" && typeof h[1] != "undefined") {
                var e = h[0].replace(/^\s+|\s+$/, "");
                var d = h[1].replace(/^\s+|\s+$/, "");
                j[e] = d
            }
        }
        return j
    }
    function b(f, j, h) {
        var g = a(f);
        if (g) {
            document.cookie = f + "=; path=/"
        }
        var e = "";
        if (typeof h != "undefined" && !isNaN(h)) {
            var k = new Date();
            k.setTime(k.getTime() + (h * 24 * 60 * 60 * 1000));
            e = "expires=" + k.toUTCString()
        }
        document.cookie = f + "=" + j + "; path=/; " + e
    }
    function a(d) {
        var e = c();
        if (d in e) {
            return e[d]
        } else {
            return false
        }
    }
    return {
        switchDiv: function(e, d) {
            $(e).hide();
            $(d).show()
        },
        setCookie: b,
        getCookie: a
    }
})();
var LocalTime = {
    MONTHS: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    SHORTMONTHS: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    getShort: function(e) {
        var c = new Date();
        c.setTime(e);
        var a = c.getHours();
        var b = "am";
        if (a >= 12) {
            b = "pm"
        }
        a = (a % 12) || 12;
        var d = c.getMinutes();
        if (d < 10) {
            d = "0" + d
        }
        var f = c.getYear() % 100;
        if (!f) {
            return "N/A"
        }
        if (f < 10) {
            f = "0" + f
        }
        return LocalTime.SHORTMONTHS[c.getMonth()] + "-" + c.getDate() + "-" + f + " " + a + ":" + d + b
    },
    getDMY: function(b) {
        var a = new Date();
        a.setTime(Date.parse(b) + 3600000);
        var c = a.getYear() % 100;
        if (!c) {
            return "N/A"
        }
        if (c < 10) {
            c = "0" + c
        }
        return a.getDate() + "-" + LocalTime.SHORTMONTHS[a.getMonth()] + "-" + c
    },
    getMDY: function(b) {
        var a = new Date();
        a.setTime(Date.parse(b) + 3600000);
        var c = a.getFullYear();
        if (!c) {
            return "N/A"
        }
        return LocalTime.MONTHS[a.getMonth()] + " " + a.getDate() + ", " + c
    }
};
var handleDom = {
    cleanWhitespace: function(c) {
        var d = /\S/;
        for (var a = 0; a < c.childNodes.length; a++) {
            var b = c.childNodes[a];
            if ((b.nodeType == 3) && (!d.test(b.nodeValue))) {
                c.removeChild(c.childNodes[a]);
                a--
            }
            if (b.nodeType == 1) {
                handleDom.cleanWhitespace(b)
            }
        }
        return c
    },
    getNodeData: function(f, d, b, c) {
        if (d == "TID") {
            alert("parent=" + b.nodeName + " index=" + c)
        }
        var a = "";
        try {
            a = b.getElementsByTagName(d)[c]
        } catch (g) {}
        if (a) {
            if (!a.firstChild) {
                return a
            } else {
                if (a.firstChild.childNodes.length == 0) {
                    return a.firstChild.nodeValue
                } else {
                    if (a.firstChild.childNodes.length > 0) {
                        return a
                    }
                }
            }
        }
    },
    getFirstValue: function(c, b) {
        var a = c.getElementsByTagName(b);
        if (a == null || a.length == 0) {
            return ""
        }
        if (a[0].firstChild && a[0].firstChild.nodeValue) {
            return a[0].firstChild.nodeValue
        }
        return ""
    }
};
var Dropdown = {
    Obj: {},
    handle: {},
    classname: "._dropdown",
    callback: function(c) {
        var b = $(c.target);
        var a = b.parent(Dropdown.classname);
        if (!a.length) {
            Dropdown.hide()
        }
    },
    show: function(c, b) {
        var a = $("#" + c);
        if (a === Dropdown.Obj) {
            return
        }
        a.show();
        if (!jQuery.isEmptyObject(Dropdown.Obj) && Dropdown.Obj.attr("id")) {
            b.stopPropagation();
            Dropdown.hide();
            return false
        } else {
            setTimeout("$(document).on('click', Dropdown.callback)", 101)
        }
        Dropdown.Obj = a;
        Dropdown.handle = $(b.target)
    },
    hide: function() {
        Dropdown.Obj.hide();
        Dropdown.Obj = Dropdown.handle = {};
        setTimeout("$(document).off('click', Dropdown.callback)", 100)
    }
};
var Zimbio = Zimbio || {};
Zimbio.util = (function() {
    var a = function(d, c) {
        d.preventDefault();
        var e = c.attr("data-target");
        var f;
        if (e && e.charAt(0) === "#") {
            f = $(e)
        } else {
            f = c.siblings(e)
        }
        f.toggleClass("hidden");
        c.toggleClass("active");
        if (c.attr("data-hide")) {
            c.addClass("hidden")
        }
    }
      , b = function(e, d) {
        e.preventDefault();
        var c = d.attr("data-target");
        var f = $(c);
        f.toggleClass("expanded");
        d.toggleClass("active")
    }
    ;
    return {
        init: function() {
            var c = $("#bodycontainer");
            c.on("click", "*[data-toggle]", function(d) {
                a(d, $(this))
            });
            c.on("click", "*[data-expand]", function(d) {
                b(d, $(this))
            })
        }
    }
})();
Zimbio.Bronco = (function() {
    var c;
    function b(d) {
        if (d) {
            c = d
        }
    }
    function a(e) {
        if (!c) {
            return e
        }
        if (!c.creatives.length) {
            return e
        }
        var h = false;
        for (var g = 0; g <= c.creatives.length - 1; g++) {
            var d = c.creatives[g];
            if (d.buckets.indexOf(Settings.testBucket) > -1) {
                h = d.guid
            }
        }
        if (!h) {
            return e
        }
        if (!e) {
            e = window.location.href
        }
        var f = e.match(/&?bcr=[a-zA-Z0-9_\-]{11}&?/g);
        if (f) {
            e = e.replace(f, "&").replace(/&$/g, "")
        }
        if (e.match(/\?$/)) {
            e = e + "bcr=" + h
        } else {
            if (e.match(/\?/)) {
                e = e + "&bcr=" + h
            } else {
                e = e + "?bcr=" + h
            }
        }
        return e
    }
    return {
        init: b,
        get_creative_url: a
    }
})();
var Zimbio = Zimbio || {};
Zimbio.zoomPhoto = (function() {
    var e = "imageZoom"
      , b = "zoom"
      , a = "imageZoom-inner"
      , c = "modal-close"
      , f = "#Container";
    closeZoom = function() {
        Dialog.hide({
            id: e
        })
    }
    ;
    function d(k) {
        var h, j, g, n, m, l;
        if (!k.attr("data-zoom-url")) {
            j = k.attr("src")
        } else {
            j = k.attr("data-zoom-url")
        }
        l = false;
        if (!$("#" + e).length) {
            n = $("<div />");
            m = $("<div />");
            g = $("<img />");
            n.attr("id", e);
            n.addClass(a);
            n.css("z-index", "-1");
            m.addClass(c);
            n.append(m);
            n.append(g);
            $(f).prepend(n);
            l = function() {
                n.css("z-index", "1000")
            }
        } else {
            g = $("#" + e).find("img")
        }
        h = $(new Image());
        h.on("load", function() {
            g.attr("src", j);
            Dialog.show({
                id: e,
                callback: l
            })
        }).attr("src", j);
        $("#" + e).on("click", "." + c, function(p, o) {
            closeZoom()
        })
    }
    return {
        zoom: d
    }
})();
(function(a) {
    a.fn.socialize = function(f) {
        var m = this;
        var s = a.extend({}, b, f)
          , o = !isNaN(s.minImgHeight) ? parseInt(s.minImgHeight) : 200
          , g = !isNaN(s.minImgWidth) ? parseInt(s.minImgWidth) : 200
          , c = {
            facebook: {
                className: "imageTools_FB",
                title: "Share on Facebook",
                dataId: "fb"
            },
            twitter: {
                className: "imageTools_TW",
                title: "Share on Twitter",
                dataId: "tw"
            },
            pinterest: {
                className: "imageTools_PN",
                title: "Share on Pinterest",
                dataId: "pin"
            },
            zoom: {
                className: "imageTools_Zoom",
                title: "Zoom",
                dataId: "zoom"
            }
        };
        var p = false
          , h = false
          , l = false;
        if (!m.length) {
            throw "You cannot call socialize on an element that does not exist in the DOM.";
            return
        }
        var u = function() {
            var y = a("<div />").attr("id", "socialize-toolbox");
            y.addClass("socialize-toolbox _c").attr("_cmod", "imageTools");
            var w = a("<div />").addClass("imageTools-inner");
            for (var x = 0; x <= s.tiles.length - 1; x++) {
                if (typeof c[s.tiles[x]] == "undefined") {
                    continue
                }
                var A = c[s.tiles[x]];
                var z = a("<a />").addClass("imageToolsIcon _c");
                z.addClass(A.className);
                z.attr("data-id", A.dataId);
                z.attr("title", A.title);
                z.attr("_cid", "imageTools_" + A.dataId);
                w.append(z)
            }
            y.append(w);
            return y
        }
        ;
        var n = function() {
            h.remove();
            h = false
        }
        ;
        var j = function() {
            h.hide()
        }
        ;
        var e = function(y) {
            var w;
            var x = q(y);
            y.attr("data-pin-nopin", "true");
            if (x[0].nodeName == "IMG") {
                w = x
            } else {
                w = x.find("IMG")
            }
            if (w.height() < o || w.width() < g) {
                return false
            }
            if (!w.length) {
                return
            }
            if (l && l.get(0) !== x.get(0) && h.is(":visible")) {
                j()
            } else {
                if (h.is(":visible")) {
                    return
                }
            }
            p = w;
            l = x;
            h.css({
                top: w.offset().top,
                left: w.offset().left
            });
            h.show()
        }
        ;
        var q = function(x) {
            if (x.parents(s.wrapper).length < 1) {
                var w = x
            } else {
                var w = x.parents(s.wrapper)
            }
            return w
        }
        ;
        var k = function(w) {
            var x = w.split("/");
            var y = x[x.length - 1];
            x = y.split(".");
            y = x[0];
            return y.length > 11 ? y.slice(0, -1).substr(y.length - 12) : false
        }
        ;
        var r = function() {
            var w = Social.setShareConfig(p, s);
            w.type = "pin";
            w.pinId = p.attr("data-pin-id") || null ;
            Social.sharePin(w)
        }
        ;
        var d = function() {
            var x = Social.setShareConfig(p, s);
            var y = x.text;
            var w = x.url;
            Social.shareTwit(y, w)
        }
        ;
        var t = function() {
            var x = Social.setShareConfig(p, s);
            var w = k(x.image_url);
            if (w) {
                x.url += (x.url.indexOf("?") != -1) ? "&i=" + w : "?i=" + w
            }
            Social.shareFCBK(x.url)
        }
        ;
        var v = function() {
            Zimbio.zoomPhoto.zoom(a(p))
        }
        ;
        h = u();
        a("BODY").append(h);
        if (m[0].nodeName == "IMG") {
            m.on("mouseover", function(w) {
                e(a(w.target))
            })
        } else {
            m.on("mouseover", s.wrapper, function(w) {
                e(a(w.target))
            })
        }
        a(document).on("mouseover", function(x) {
            var w = a(x.target);
            if (h && p && !w.parents(".socialize-toolbox").length && !w.hasClass("socialize-toolbox") && !w.is(s.wrapper) && !w.parents(s.wrapper).length && p.get(0) !== w.get(0)) {
                j()
            }
        });
        a(document).on("click", ".socialize-toolbox .imageToolsIcon", function(x) {
            var w = a(x.target);
            switch (w.attr("data-id")) {
            case "pin":
                r();
                break;
            case "fb":
                t();
                break;
            case "tw":
                d();
                break;
            case "zoom":
                v();
                break
            }
        });
        m.on("socialize:refresh", function() {
            if (h.is(":visible")) {
                j();
                if (m[0].nodeName == "IMG") {
                    e(m)
                } else {
                    e(a(s.wrapper))
                }
            }
        })
    }
    ;
    var b = a.fn.defaults = {
        wrapper: "IMG",
        tiles: ["facebook", "pinterest", "twitter"],
        minImgHeight: 200,
        minImgWidth: 200
    }
})(jQuery);
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}
;
if (typeof Object.create !== "function") {
    Object.create = function(b) {
        var a = function() {}
        ;
        a.prototype = b;
        return new a()
    }
}
function csrfSafeMethod(a) {
    return ( /^(GET|HEAD|OPTIONS|TRACE)$/.test(a))
}
$.ajaxSetup({
    beforeSend: function(b, a) {
        if (!csrfSafeMethod(a.type) && !this.crossDomain) {
            b.setRequestHeader("X-CSRFToken", $.cookie("csrftoken"))
        }
        if (Settings.baseJSUrl && a.url.charAt(0) == "/") {
            a.url = Settings.baseJSUrl + a.url
        }
    }
});
$(document).ready(function() {
    Zimbio.util.init();
    $("#searchSubmitButton").on("mousedown", function(b) {
        var a = $(".nSearch");
        b.preventDefault();
        b.stopPropagation();
        if (a.is(":focus")) {
            if (a.val()) {
                $(this).parents("form").submit()
            } else {
                a.blur()
            }
        } else {
            a.focus()
        }
    });
    if (Settings.supportsTouch) {
        $(".ht-header").on("touchstart", ".htTab", function(a) {
            if ($(a.target).siblings(".nav-dropdown").css("visibility") == "hidden") {
                a.preventDefault();
                return false
            } else {
                $(a.target).trigger("mouseover");
                return true
            }
        });
        $(".ht-header").on("click", ".htTab", function(a) {})
    }
});
var Debugger = (function() {
    var d = "debug_level"
      , c = "debug_logs_clear";
    var a = {
        success: "color:green",
        error: "color:red;font-weight:bold",
        warn: "color:orange",
        log: "color:#333",
        "default": "color:#333"
    };
    var e = {
        shallow: ["success", "error", "warn"],
        deep: ["success", "error", "warn", "log"]
    };
    function f() {
        var k = {}, j;
        var h = document.URL.match(/(?![?&#])([^?&#]+)/g);
        if (h != undefined) {
            for (var g = 1; g < h.length; g++) {
                j = h[g].split("=");
                k[j[0]] = j[1]
            }
        }
        return k
    }
    function b(g) {
        $.extend(this, {
            config: g || {},
            mode: false,
            level: "deep",
            key: "",
            timer: {}
        }, g);
        this.checkClear();
        this.checkMode();
        this.checkLevel()
    }
    $.extend(b.prototype, {
        getQueryParam: function(g) {
            var h = f();
            return ( h[g] ? h[g] : false)
        },
        msg: function(k, h) {
            if (!k || !this.mode) {
                return
            }
            if (e[this.level].indexOf(k) === -1) {
                return
            }
            var g = []
              , m = a[k] || a["default"]
              , n = [];
            if (this.prefix) {
                n.push(this.prefix + "")
            }
            if (this.trace) {
                try {
                    n.push(h.callee.caller.name + "()")
                } catch (l) {}
            }
            if (this.time) {
                n.push(Date.now())
            }
            for (var j = 0; j < h.length; j++) {
                if (typeof h[j] == "string" && !g.length) {
                    n.push(h[j])
                } else {
                    g.push(h[j])
                }
            }
            if (window.navigator.userAgent.indexOf("MSIE") !== -1) {
                g = n.concat(g)
            } else {
                g = ["%c" + n.join(" "), m].concat(g)
            }
            console.log.apply(console, g)
        },
        log: function() {
            this.msg("log", arguments)
        },
        warn: function() {
            this.msg("warn", arguments)
        },
        error: function() {
            this.msg("error", arguments)
        },
        success: function() {
            this.msg("success", arguments)
        },
        checkClear: function() {
            if (c in f() && typeof $.removeCookie == "function") {
                this.clear = true;
                $.removeCookie(this.key, {
                    path: "/"
                });
                $.removeCookie(d)
            }
            return this.clear
        },
        checkMode: function() {
            try {
                if (this.key in f() && !this.mode) {
                    this.mode = true;
                    $.cookie(this.key, 1, {
                        path: "/"
                    })
                } else {
                    if ($.cookie(this.key)) {
                        this.mode = true
                    }
                }
            } catch (g) {}
            return this.mode
        },
        checkLevel: function() {
            var j = f() || {};
            try {
                var k = j[d]
                  , g = Object.keys(e);
                if (g.indexOf(k) !== -1) {
                    this.level = k;
                    $.cookie(d, k, {
                        path: "/"
                    })
                } else {
                    if (g.indexOf($.cookie(d)) !== -1) {
                        this.level = $.cookie(d)
                    }
                }
            } catch (h) {}
            return this.level
        },
        markTime: function(g) {
            if (g) {
                this.timer[g] = new Date().getTime()
            }
        }
    });
    return b
})();
(function() {
    var a = false
      , b = /xyz/.test(function() {
        xyz
    }) ? /\b_super\b/ : /.*/;
    this.Class = function() {}
    ;
    Class.extend = function(g) {
        var f = this.prototype;
        a = true;
        var e = new this();
        a = false;
        for (var d in g) {
            e[d] = typeof g[d] == "function" && typeof f[d] == "function" && b.test(g[d]) ? (function(h, j) {
                return function() {
                    var l = this._super;
                    this._super = f[h];
                    var k = j.apply(this, arguments);
                    this._super = l;
                    return k
                }
            })(d, g[d]) : g[d]
        }
        function c() {
            if (!a && this.init) {
                this.init.apply(this, arguments)
            }
        }
        c.prototype = e;
        c.prototype.constructor = c;
        c.extend = arguments.callee;
        return c
    }
})();
var Loader = (function() {
    var d = document
      , settings = Settings
      , counter = 0
      , files = []
      , directory = {
        css: "/css/",
        js: "/js/"
    }
      , anchorObj = false
      , create = function(type) {
        var el = d.createElement(type);
        el.id = "loader_" + counter++;
        return el
    }
      , normalizeUrl = function(url) {
        if (settings.baseJSUrl && url.charAt(0) == "/") {
            return settings.baseJSUrl + url
        } else {
            return url
        }
    }
      , setUrl = function(url, external, type) {
        var dirUrl = (type && directory[type]) ? directory[type] : "";
        return (external) ? url : settings.baseCDNUrl + dirUrl + settings.version + "." + url
    }
      , insert = function(el) {
        if (!anchorObj) {
            anchorObj = d.getElementsByTagName("head")[0]
        }
        anchorObj.appendChild(el)
    }
    ;
    return {
        getScript: function(url, callback, external, id) {
            var s = create("script");
            s.src = normalizeUrl(setUrl(url, external, "js"));
            s.type = "text/javascript";
            s.async = true;
            if (id) {
                s.id = id
            }
            if (callback) {
                if (s.readyState) {
                    s.onreadystatechange = function() {
                        if (s.readyState == "loaded" || s.readyState == "complete") {
                            s.onreadystatechange = null ;
                            callback()
                        }
                    }
                } else {
                    s.onload = callback
                }
            }
            insert(s)
        },
        getCSS: function(url, callback, external) {
            var s = create("link");
            s.href = normalizeUrl(setUrl(url, external, "css"));
            s.type = "text/css";
            s.rel = "stylesheet";
            if (callback) {
                s.onload = callback
            }
            insert(s)
        },
        getImage: function(src, callback) {
            var img = new Image();
            if (callback) {
                $(img).on("load", callback)
            }
            $(img).attr("src", normalizeUrl(src))
        },
        getImages: function(srcArr, callback, options) {
            var ready = 0
              , callbackFired = false
              , errorFired = false
              , timeoutId = false;
            if (!options) {
                options = {}
            }
            var fireCallback = function() {
                if (callbackFired || errorFired) {
                    return
                }
                ready++;
                if (ready >= srcArr.length) {
                    if (timeoutId) {
                        clearTimeout(timeoutId)
                    }
                    callback();
                    fired = true
                }
            }
            ;
            var fireError = function() {
                if (errorFired) {
                    return
                }
                if (timeoutId) {
                    clearTimeout(timeoutId)
                }
                options.error();
                errorFired = true
            }
            ;
            if (!srcArr.length) {
                fireCallback()
            } else {
                for (var i = 0; i <= srcArr.length - 1; i++) {
                    var img = new Image();
                    if (callback) {
                        $(img).on("load", fireCallback);
                        if (typeof options.error == "function") {
                            $(img).on("error", fireError)
                        } else {
                            $(img).on("error", fireCallback)
                        }
                    }
                    $(img).attr("src", srcArr[i])
                }
            }
            if (typeof options.timeout != "undefined" && !isNaN(options.timeout)) {
                timeoutId = setTimeout(function() {
                    callback();
                    callbackFired = true;
                    errorFired = true
                }, options.timeout)
            }
        },
        call: function(module, callback) {
            module = module.split("(")[0];
            if (typeof (eval(window[module])) != "undefined") {
                eval(callback);
                return
            }
            for (var i = 0, length = files.length; i < length; i++) {
                if (files[i].module == module) {
                    this.getScript(files[i].src, function() {
                        eval(callback)
                    }, false);
                    return
                }
            }
        },
        register: function(obj) {
            for (var i = 0, length = files.length; i < length; i++) {
                if (files[i].src == obj.src) {
                    return
                }
            }
            files.push(obj)
        }
    }
})();
Loader.Lazy = (function() {
    var r = document
      , v = Browser
      , w = {}
      , p = {}
      , x = {}
      , u = false
      , b = false
      , c = "lazy_load"
      , f = 600
      , n = "auto"
      , l = "auto"
      , h = []
      , q = 0
      , o = 0
      , e = 0
      , j = false
      , k = function() {
        if (!j) {
            if (!u) {
                u = $.proxy(t, this)
            }
            if (!b) {
                b = $.proxy(a, this)
            }
            $(window).on({
                resize: u,
                scroll: b
            });
            j = true
        }
    }
      , m = function() {
        $(window).off({
            resize: u,
            scroll: b
        });
        j = false
    }
      , s = function(z) {
        z.loaded = true;
        if (z.type == "iframe") {
            var y = r.createElement("iframe");
            y.id = z.lid || "";
            y.width = z.width || "100%";
            y.height = z.height || "100%";
            y.hSpace = y.vSpace = y.frameBorder = y.marginHeight = y.marginWidth = 0;
            y.scrolling = "no";
            y.src = z.src;
            z.appendChild(y)
        } else {
            var d = r.createElement("img");
            d.id = z.lid || "";
            d.setAttribute("width", z.width);
            d.setAttribute("height", z.height);
            d.src = z.src;
            if (z.cid) {
                d.setAttribute("_cid", z.cid)
            }
            z.appendChild(d)
        }
        if (++o >= h.length) {
            m()
        }
    }
      , a = function(B) {
        var z = h;
        if (!q) {
            t()
        }
        if (e != v.getScroll()) {
            g()
        }
        var d = v.getPageScroll().y;
        for (var y = 0, A = z.length; y < A; y++) {
            if (!z[y].loaded && (d + q + f - z[y].distance >= 0)) {
                s(z[y])
            }
        }
    }
      , t = function(d) {
        q = v.getHeight()
    }
      , g = function() {
        var y = h;
        e = v.getScroll();
        for (var d = 0, z = y.length; d < z; d++) {
            y[d].distance = Math.round($(y[d]).offset().top)
        }
    }
    ;
    return {
        scroll: a,
        setThreshold: function(d) {
            if (d && typeof (d) == "number") {
                f = d
            }
        },
        parse: function(C) {
            var B = (C && C.nodeType) ? C : r
              , z = $(B).find("." + c);
            for (var y = 0, A = z.length; y < A; y++) {
                var d = z[y];
                if (d.parsed) {
                    continue
                }
                d.parsed = true;
                d.loaded = false;
                d.distance = Math.round($(d).offset().top);
                d.width = d.getAttribute("_width") || n;
                d.height = d.getAttribute("_height") || l;
                d.type = d.getAttribute("_type") || "img";
                d.src = d.getAttribute("_lsrc") || false;
                d.lid = d.getAttribute("_lid") || false;
                d.cid = d.getAttribute("_cid") || false;
                h.push(d)
            }
            if (!j) {
                k()
            }
            a()
        },
        init: function(d) {
            this.config = d;
            if (d && d.threshold) {
                this.setThreshold(d.threshold)
            }
            this.parse()
        }
    }
})();
var Dialog = (function() {
    var g = Browser
      , d = null
      , o = null
      , h = null
      , e = false
      , l = 0.8
      , b = function() {
        if (!$("#mask").length && !o) {
            var p = document.createElement("div");
            p.id = "mask";
            p = $(p);
            p.hide();
            $("body").append(p)
        } else {
            if (o) {
                p = o
            }
        }
        h = p || $("#mask");
        h.css({
            height: document.body.scrollHeight + "px",
            opacity: e.opacity || l
        });
        h.show();
        h.off("click").on("click", j)
    }
      , c = function() {
        if (!h) {
            b()
        }
        h.css("height", document.body.scrollHeight + "px")
    }
      , n = function() {
        $(window).on("resize", c);
        if (!h) {
            b()
        } else {
            c()
        }
        h.show()
    }
      , m = function() {
        if (h) {
            h.hide()
        }
        $(window).off("resize", c)
    }
      , k = function() {
        if (!d) {
            return
        }
        if (typeof e.scrollToTop == "undefined" || e.scrollToTop !== false) {
            window.scrollTo(0, 1);
            d.dim = {
                height: d.outerHeight(),
                width: d.outerWidth()
            };
            d.css({
                top: Math.max((1 - d.dim.height / g.getHeight()) * 50, 0) + "%",
                left: Math.max((1 - d.dim.width / g.getWidth()) * 50, 0) + "%"
            })
        } else {
            d.dim = {
                height: d.outerHeight(),
                width: d.outerWidth()
            };
            var p = $(window).scrollTop() + ((g.getHeight() - d.dim.height) / 2);
            if (d.dim.height > g.getHeight()) {
                p = $(window).scrollTop()
            }
            p += "px";
            d.css({
                top: p,
                left: Math.max((1 - d.dim.width / g.getWidth()) * 50, 0) + "%"
            })
        }
    }
      , a = function(p) {
        if (p && typeof (p) == "function") {
            p()
        }
    }
      , f = function(p) {
        $("#" + p).trigger("preload");
        d = $("#" + p);
        d.addClass("dialog");
        k();
        d.show();
        $(window).on("resize orientationchange", k);
        if (e.callback) {
            a(e.callback)
        }
        d.trigger("dialogload")
    }
      , j = function() {
        if (d) {
            d.trigger("dialogunload").hide()
        }
        d = null ;
        if (e && e.hideCallback) {
            a(e.hideCallback)
        }
        e = null ;
        m();
        $(window).off("resize orientationchange", k)
    }
    ;
    return {
        resize: c,
        updatePosition: k,
        mask: h,
        hide: j,
        show: function(p) {
            if (!p || (!p.id && !p.url)) {
                return
            }
            e = p;
            n();
            f(e.id)
        },
        setMask: function(p) {
            o = p;
            h = false
        }
    }
})();
var Zimbio = Zimbio || {};
Zimbio.SocialBase = (function() {
    function g(h, m) {
        var k, l, j;
        h = h || {};
        m = m || function() {}
        ;
        k = {
            method: "feed",
            display: "ontouchstart"in window ? "touch" : "popup"
        };
        if (!h.link && !h.href) {
            j = $("meta[property='og:url']").attr("content");
            h.link = j ? j : location.href
        }
        l = _.extend({}, k, h);
        FB.ui(l, m);
        if (Settings.supportsTouch) {
            setTimeout(function() {
                $(document).trigger("returnedFromFacebookShare")
            }, 400)
        } else {
            $(window).one("focus", function(n) {
                $(document).trigger("returnedFromFacebookShare")
            })
        }
    }
    function e(h) {
        var j = "http://twitter.com/share?";
        h = h || {};
        if (h.link) {
            j += "url=" + encodeURIComponent(h.link) + "&"
        }
        if (h.text) {
            j += "text=" + encodeURIComponent(h.text)
        }
        c(j)
    }
    function d() {
        var h;
        h = $("#commentBox");
        if (!h.length) {
            return
        }
        window.scrollTo(0, h.offset().top - 120)
    }
    function b(j) {
        var h;
        j = j || {};
        h = j.link || socialConfi.link || location.href;
        c("https://plusone.google.com/share?url=" + encodeURIComponent(location.href))
    }
    function f(j) {
        j = j || {};
        var l = {}, h, k;
        if (j && j.type == "pin") {
            l.url = j.url || $("meta[property='og:url']").attr("content") || location.href;
            l.title = j.text || $("meta[property='og:title']").attr("content") || "";
            l.media = j.image_url || $("meta[property='og:image']").attr("content") || "";
            pinURL = "http://www.pinterest.com/pin/create/button/?";
            pinURL += "url=" + encodeURIComponent(l.url);
            pinURL += "&media=" + encodeURIComponent(l.media);
            pinURL += "&description=" + encodeURIComponent(l.title);
            $(document).trigger("pinterestbuttonclicked");
            if (Settings.supportsTouch) {
                setTimeout(function() {
                    $(document).trigger("pincompleted")
                }, 400)
            } else {
                $(window).on("focus", function(m) {
                    $(document).trigger("pincompleted")
                })
            }
            c(pinURL)
        } else {
            k = document.createElement("script");
            k.setAttribute("type", "text/javascript");
            k.setAttribute("charset", "UTF-8");
            k.setAttribute("src", "http://assets.pinterest.com/js/pinmarklet.js?r=" + Math.random() * 99999999);
            document.body.appendChild(k)
        }
    }
    function c(k, l, h) {
        var j = Math.round(new Date().getTime() / 5000);
        if (!k) {
            return
        }
        if (!h && !l) {
            h = 300;
            l = 600
        }
        return window.open(k, "lvlySharer" + j, "status=0,toolbar=0,width=" + l + ",height=" + h + ",top=" + ((window.screen.height - h) / 2) + ",left=" + ((window.screen.width - l) / 2))
    }
    function a(h, k) {
        var j = {};
        if (h.attr("data-share-url")) {
            j.url = h.attr("data-share-url")
        } else {
            if (k && k.share_url) {
                j.url = k.share_url
            } else {
                j.url = window.location.href
            }
        }
        if (h.attr("data-share-text")) {
            j.text = h.attr("data-share-text")
        } else {
            if (k && k.share_text) {
                j.text = k.share_text
            } else {
                if ($("meta[property='og:title']").attr("content")) {
                    j.text = $("meta[property='og:title']").attr("content")
                } else {
                    j.text = $(document).find("TITLE").text()
                }
            }
        }
        if (h.attr("data-share-image")) {
            j.image_url = h.attr("data-share-image")
        } else {
            if (k && k.share_image) {
                j.image_url = k.share_image
            } else {
                j.image_url = h.attr("src")
            }
        }
        return j
    }
    return {
        shareFacebook: g,
        shareTwitter: e,
        shareGoogle: b,
        sharePinterest: f,
        scrollToComments: d,
        openSharer: c,
        setShareConfig: a
    }
})();
var Social = {
    window: "",
    openSharer: function(b, c, a) {
        Social.window = Zimbio.SocialBase.openSharer(b, c, a)
    },
    shareFCBK: function(a) {
        var b;
        if (!a) {
            b = $("meta[property='og:url']").attr("content");
            a = b ? b : location.href;
            a = Zimbio.Bronco.get_creative_url(a)
        }
        Track.Google.sendEvent("datastream", {
            category: "Facebook",
            action: "Share",
            label: a
        });
        Social.openSharer("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(a));
        FCBK.trackConversion()
    },
    shareFBUI: function(a) {
        a = a || {};
        if (typeof Settings.debug_shareImage !== "undefined") {
            a.picture = Settings.debug_shareImage
        }
        if (!a.app_id) {
            a.app_id = FCBK.appId
        }
        Zimbio.SocialBase.shareFacebook(a, function() {});
        Track.Google.sendEvent("datastream", {
            category: "Facebook",
            action: "Share",
            label: a.link || a.href || window.location.href
        });
        FCBK.trackConversion()
    },
    sharePin: function(a) {
        var b;
        a = a || {};
        if (a.pinId) {
            PinUtils.repin(a.pinId);
            Track.Google.sendEvent("datastream", {
                category: "Pinterest",
                action: "Repin",
                label: a.url || $("meta[property='og:url']").attr("content") || location.href,
            })
        } else {
            Zimbio.SocialBase.sharePinterest(a);
            if (a.type == "pin") {
                b = a.url || $("meta[property='og:url']").attr("content") || location.href
            } else {
                b = location.href
            }
            Track.Google.sendEvent("datastream", {
                category: "Pinterest",
                action: "Share",
                label: b
            })
        }
    },
    shareTwit: function(b, a) {
        Zimbio.SocialBase.shareTwitter({
            link: a,
            text: b
        });
        Track.Google.sendEvent("datastream", {
            category: "Twitter",
            action: "Share",
            label: a || location.href
        })
    },
    shareGoog: function(a) {
        a = a || location.href;
        Zimbio.SocialBase.shareGoogle({
            link: a
        });
        Track.Google.sendEvent("datastream", {
            category: "Google",
            action: "Share",
            label: a
        })
    },
    scrollToComments: function() {
        Zimbio.SocialBase.scrollToComments()
    },
    setShareConfig: function(a, b) {
        return Zimbio.SocialBase.setShareConfig(a, b)
    },
    init: function(a) {
        Social.config = a;
        FCBK.init(a);
        FCBK.cmd.push(FCBK.setLikeButtons)
    }
};
var FCBK = {
    appId: false,
    socialActionsEnabled: false,
    scopeDictionary: {
        scope: "email,public_profile,user_friends"
    },
    cmd: [],
    actionQueue: [],
    isFavorite: false,
    init: function(a) {
        var b = document.createElement("div");
        b.id = "fb-root";
        document.body.appendChild(b);
        if (a && a.trackComments) {
            FCBK.trackComments()
        }
        FCBK.appId = (a && a.fcbkAppId) ? a.fcbkAppId : false;
        FCBK.appNamespace = (a && a.fcbkAppNamespace) ? a.fcbkAppNamespace : false;
        FCBK.socialActionsEnabled = (a && a.socialActionsEnabled) ? a.socialActionsEnabled : false;
        FCBK.socialActionsEnabledSite = (a && a.socialActionsEnabledSite) ? a.socialActionsEnabledSite : false;
        if (!FCBK.appId) {
            return
        }
        (function(g, c, h) {
            var f, e = g.getElementsByTagName(c)[0];
            if (g.getElementById(h)) {
                return
            }
            f = g.createElement(c);
            f.id = h;
            f.src = "//connect.facebook.net/en_US/all.js";
            f.async = true;
            e.parentNode.insertBefore(f, e)
        }(document, "script", "facebook-jssdk"))
    },
    renderCallback: function() {
        var a = FCBK.cmd
          , c = a.length;
        for (var b = 0; b < c; b++) {
            var d = a[b];
            if (typeof (d) == "function") {
                d()
            }
        }
        FCBK.cmd = {
            push: function(e) {
                if (typeof (e) == "function") {
                    e()
                }
            }
        };
        FB.Event.unsubscribe("xfbml.render", FCBK.renderCallback)
    },
    registerActionCallback: function() {
        FCBK.socialActionsEnabled = true;
        var a = FCBK.actionQueue
          , c = a.length;
        for (var b = 0; b < c; b++) {
            var d = a[b];
            FCBK.doActions(d.token, d.actions)
        }
    },
    hasPermission: function(a, d, b) {
        var c = "/me/permissions";
        FCBK.cmd.push(function() {
            FB.api(c, "get", function(e) {
                if (a in e.data[0]) {
                    d()
                } else {
                    b()
                }
            })
        })
    },
    trackComments: function() {
        FCBK.cmd.push(function() {
            FB.Event.subscribe("comment.create", function(a) {
                Track.Beacon.send({
                    type: "comment"
                })
            })
        })
    },
    setLikeButtons: function() {
        if (Social.config && Social.config.includeByline) {
            Zimbio.library.switchDiv("#fbBylineLoading", "#fbBylineLoaded")
        }
        if (Social.config && Social.config.includeSection) {
            Zimbio.library.switchDiv("#fbSubLoading", "#fbSubLoaded")
        }
        FB.Event.subscribe("edge.create", FCBK.trackLike)
    },
    trackLike: function(response) {
        var url = response
          , arr = document.getElementsByClassName("fb-like")
          , defaultId = "fbBylineLoaded"
          , bid = false
          , recommend = false
          , callback = false
          , parent = false;
        if (!arr) {
            return
        }
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i]
              , data = obj.getAttribute("data-href") || null ;
            if (data && data == url) {
                parent = obj.parentElement;
                bid = parent.id;
                callback = parent.getAttribute("_callback") || null ;
                break
            }
        }
        Track.Google.sendEvent("datastream", {
            category: "Facebook",
            action: "Like",
            label: location.href
        });
        Track.Click.syntheticGet(bid || defaultId, true);
        if (callback) {
            var fn = eval(callback);
            if (typeof (fn) == "function") {
                fn({
                    url: url,
                    parent: parent
                })
            }
        }
    },
    recommend: function(a) {
        var b = function() {
            FCBK_Recommend.init(a.url)
        }
        ;
        (typeof (FCBK_Recommend) != "undefined") ? b() : Loader.getScript("facebook/fb_recommend.js", b, false)
    },
    setScrollActions: function(a) {
        FCBK.thisAction = function() {
            Event.stopObserving(window, "scroll", FCBK.thisAction);
            FCBK.setActions(a)
        }
        ;
        Event.observe(window, "scroll", FCBK.thisAction)
    },
    doActions: function(b, d) {
        for (var c = 0; c < d.length; c++) {
            var f = d[c];
            if (typeof f == "object") {
                var e = f.action;
                if (f.appNamespace) {
                    e = f.appNamespace + ":" + e
                }
                var a = "/me/" + e + "?" + f.object + "=" + encodeURIComponent(f.objectUrl) + "&access_token=" + b;
                if (typeof f.custom_properties != "undefined") {
                    $H(f.custom_properties).each(function(h) {
                        var g = "&" + encodeURIComponent(h.key) + "=" + encodeURIComponent(h.value);
                        a = a + g
                    })
                }
                FB.api(a, "post", function(g) {
                    var h = "Error occured";
                    if (!g || g.error) {
                        if (g.error) {
                            h += "\n\nType: " + g.error.type + "\n\nMessage: " + g.error.message
                        }
                    } else {
                        Track.Beacon.send({
                            type: "og_action"
                        })
                    }
                })
            }
        }
    },
    setActions: function(a) {
        if (FCBK.socialActionsEnabledSite) {
            if (FCBK.socialActionsEnabled) {
                FCBK.cmd.push(function() {
                    FB.getLoginStatus(function(b) {
                        if (b.authResponse) {
                            var c = b.authResponse.accessToken;
                            FCBK.doActions(c, a)
                        }
                    })
                })
            } else {
                FCBK.cmd.push(function() {
                    FB.getLoginStatus(function(b) {
                        if (b.authResponse) {
                            var c = b.authResponse.accessToken;
                            FCBK.queueActions(c, a)
                        }
                    })
                })
            }
        }
    },
    queueActions: function(a, b) {
        FCBK.actionQueue.push({
            token: a,
            actions: b
        })
    },
    reParse: function() {
        FCBK.cmd.push(function() {
            FB.XFBML.parse()
        })
    },
    login: function(a, b) {
        if (a) {
            Track.Click.syntheticGet(a)
        }
        FCBK.cmd.push(function() {
            if (typeof b == "undefined") {
                FB.login(function(c) {
                    if (c.status == "connected") {
                        $("#fbLoginBox").html("...Loading...");
                        FacebookRegister.registerOrRedirect(c.authResponse.userID)
                    } else {}
                }, FCBK.scopeDictionary)
            } else {
                FB.login(b, FCBK.scopeDictionary)
            }
        })
    },
    showActivity: function(a) {
        Dropdown.show("fbDropdown", a);
        if (FCBK.activityLoaded) {
            return
        }
        Loader.getCSS("facebook/fb_activity.css", false, false);
        Loader.getScript("facebook/fb_activity.js", function() {
            FCBK_Activity.init()
        }, false)
    },
    trackConversion: function() {
        Zimbio.fbCustomAudience.track("6020798636585", {
            value: "0.00",
            currency: "USD"
        })
    }
};
window.fbAsyncInit = function() {
    var a = "http://" + window.location.host + "/html/channel.html";
    FB.init({
        appId: FCBK.appId,
        status: true,
        cookie: true,
        xfbml: true,
        oauth: true,
        channelUrl: a,
        version: "v2.2"
    });
    FB.Event.subscribe("xfbml.render", FCBK.renderCallback)
}
;
var Zimbio = Zimbio || {};
Zimbio.fbCustomAudience = (function fbCustomAudience() {
    var e = false
      , j = "790078967717692"
      , k = []
      , l = 0
      , d = (/^m\./.test(window.location.hostname)) ? "MB" : "DT"
      , o = function o() {
        if (e) {
            a.log("please do not initialize fbCustomAudience twice");
            return
        } else {
            e = true
        }
        !function(w, p, x, q, y, r, u) {
            if (w.fbq) {
                return
            }
            y = w.fbq = function() {
                y.callMethod ? y.callMethod.apply(y, arguments) : y.queue.push(arguments)
            }
            ;
            if (!w._fbq) {
                w._fbq = y
            }
            y.push = y;
            y.loaded = !0;
            y.version = "2.0";
            y.queue = [];
            r = p.createElement(x);
            r.async = !0;
            r.src = q;
            u = p.getElementsByTagName(x)[0];
            u.parentNode.insertBefore(r, u)
        }(window, document, "script", "//connect.facebook.net/en_US/fbevents.js");
        fbq("init", j);
        fbq("track", "PageView");
        f();
        Track.adBlockStatus.onChange(function(p) {
            g(p)
        });
        a.log("fbPixelID=", j)
    }
      , c = function c(q, r) {
        if (!e) {
            o()
        }
        if (q == "games") {
            r = {
                content_name: Track.pageType,
                content_category: "games"
            };
            fbq("track", "ViewContent", r);
            a.log("ViewContent", r);
            fbq("trackCustom", "games", {})
        } else {
            if (q && typeof q == "string") {
                if (!r || typeof r != "object") {
                    r = {}
                }
                var p = "e=" + q + ",v=" + (r.value || 0) + ",n=" + (r.content_name || "") + ",c=" + (r.content_category || "");
                if (k.indexOf && k.indexOf(p) >= 0) {
                    return
                } else {
                    k.push(p)
                }
                fbq("track", q, r);
                a.log(q, r)
            }
        }
    }
      , n = function() {
        c("AddToWishlist", {
            content_name: d + "-" + Settings.domainAdPrefix,
            content_category: "clk"
        })
    }
      , b = function(q, p) {
        c("AddToWishlist", {
            value: q || 0,
            currency: "USD",
            content_name: p + "-" + d + "-" + Settings.domainAdPrefix,
            content_category: "robin"
        })
    }
      , h = function(p) {
        if (!p) {
            return
        }
        if (!l) {
            l = parseFloat($.cookie("rps")) || 0
        }
        var q = (Math.floor(l + p) == Math.floor(l));
        l += p;
        var r = (new Date()).getTime() + 1800000;
        $.cookie("rps", l.toFixed(10), {
            expires: new Date(r),
            path: "/"
        });
        if (q || l < 5) {
            return
        }
        c("AddToWishlist", {
            value: Math.floor(l || 0),
            currency: "USD",
            content_name: d + "-" + Settings.domainAdPrefix,
            content_category: "rps"
        })
    }
      , m = function() {
        c("AddToWishlist", {
            value: Settings.pv || 0,
            currency: "USD",
            content_name: d + "-" + Settings.domainAdPrefix,
            content_category: "pv"
        })
    }
      , f = function() {
        var p = window.location.href.match(/utm_source=([^&]+)/);
        if (p && p[1]) {
            c("AddToWishlist", {
                content_name: p[1] + "-" + d + "-" + Settings.domainAdPrefix,
                content_category: "mkt"
            })
        }
    }
      , g = function(p) {
        if (typeof p != "boolean") {
            return
        }
        c("AddToWishlist", {
            content_name: d + "-" + Settings.domainAdPrefix,
            content_category: "abk-" + p
        })
    }
      , a = new Debugger({
        key: "debug_fb_pixel",
        prefix: "fbCustomAudience",
        trace: true
    });
    return {
        init: o,
        track: c,
        ifrclk: n,
        robin: b,
        revPerSession: h,
        pv: m
    }
})();
Zimbio.yahooCustomAudience = (function yahooCustomAudience() {
    var f = false
      , b = "1000634244584"
      , d = "434685"
      , e = function e() {
        if (f) {
            c.log("please do not initialize yahooCustomAudience twice");
            return
        } else {
            f = true
        }
        c.log("yahooPixelID=", d);
        if (!/^m\./.test(window.location.hostname) && !Settings.supportsTouch) {
            a()
        }
    }
      , a = function a() {
        (function(g, o, j, m, h) {
            g[h] = g[h] || [];
            g[h].push({
                projectId: b,
                properties: {
                    pixelId: d
                }
            });
            var l = o.createElement(j);
            l.src = m;
            l.async = true;
            l.onload = l.onreadystatechange = function() {
                var s, p = this.readyState, r = g[h];
                if (p && p != "complete" && p != "loaded") {
                    return
                }
                try {
                    s = YAHOO.ywa.I13N.fireBeacon;
                    g[h] = [];
                    g[h].push = function(t) {
                        s([t])
                    }
                    ;
                    s(r)
                } catch (q) {}
            }
            ;
            var n = o.getElementsByTagName(j)[0]
              , k = n.parentNode;
            k.insertBefore(l, n)
        })(window, document, "script", "https://s.yimg.com/wi/ytc.js", "dotq")
    }
      , c = new Debugger({
        key: "debug_yahoo_pixel",
        prefix: "yahooCustomAudience",
        trace: true
    });
    return {
        init: e
    }
})();
Zimbio.taboolaCustomAudience = (function taboolaCustomAudience() {
    var h = false
      , d = []
      , c = window.location.href
      , f = {
        LV: "//trc.taboola.com/livinglymediainc-livingly-sc/log/3/mark",
        LN: "//trc.taboola.com/lonnymag/log/3/mark",
        SB: "//trc.taboola.com/zimbio-stylebistro/log/3/mark",
        ZM: "//trc.taboola.com/zimbio-photos/log/3/mark"
    }
      , e = function(j) {
        $.each(f, function(m, l) {
            a(j, m)
        })
    }
      , a = function a(l, k) {
        if (!k) {
            k = Settings.domainAdPrefix
        }
        var j = new Image();
        d.push(j);
        j.src = f[k] + "?marking-type=" + l + "&item-url=" + encodeURIComponent(c);
        b.log(l, k)
    }
      , g = function g() {
        if (h) {
            b.log("please do not initialize taboolaCustomAudience twice");
            return
        } else {
            h = true
        }
        var j = c.match(/utm_source=([^&]+)/i);
        if (j && j[1] == "fcbk") {
            e("source_fcbk")
        }
    }
      , b = new Debugger({
        key: "debug_taboola_pixel",
        prefix: "taboolaCustomAudience",
        trace: true
    });
    return {
        init: g
    }
})();
Zimbio.outbrainCustomAudience = (function outbrainCustomAudience() {
    var h = false
      , d = []
      , c = window.location.href
      , f = {
        LV: "//amplifypixel.outbrain.com/pixel?mid=006c69f88cba7d0359bb3882f08a3cb0fb",
        LN: "//amplifypixel.outbrain.com/pixel?mid=00018290099ec5ff672a156f9abf236a18",
        SB: "//amplifypixel.outbrain.com/pixel?mid=0056c9dba66a1715373d1e3a6995f684d6",
        ZM: "//amplifypixel.outbrain.com/pixel?mid=00b1a3970d83a1a55b1835ae2b171a054e"
    }
      , e = function() {
        $.each(f, function(l, j) {
            a(l)
        })
    }
      , a = function a(k) {
        if (!k) {
            k = Settings.domainAdPrefix
        }
        var j = new Image();
        d.push(j);
        j.src = f[k];
        b.log(k, f[k])
    }
      , g = function g() {
        if (h) {
            b.log("please do not initialize outbrainCustomAudience twice");
            return
        } else {
            h = true
        }
        var j = c.match(/utm_source=([^&]+)/i);
        if (j && j[1] == "fcbk") {
            e()
        }
    }
      , b = new Debugger({
        key: "debug_outbrain_pixel",
        prefix: "outbrainCustomAudience",
        trace: true
    });
    return {
        init: g
    }
})();
$(document).ready(function() {
    Zimbio.fbCustomAudience.init();
    Zimbio.yahooCustomAudience.init();
    Zimbio.taboolaCustomAudience.init();
    Zimbio.outbrainCustomAudience.init();
    var a = $(".header-social").parents(".htTab");
    a.one("mouseover", function() {
        a.find(".followUsLikeButton > div").addClass("fb-like");
        FB.XFBML.parse(document.getElementById("followUsLikeButton"))
    });
    $(".header-social").parents(".htTab").on("mouseenter", function() {
        $(this).addClass("hover")
    });
    $(".header-social").parents(".htTab").on("mouseleave", function(b) {
        if (!$(b.target).is("iframe")) {
            $(this).removeClass("hover")
        }
    })
});
var Track = (function() {
    var a = [];
    return {
        pageType: "none",
        log: function(b) {
            (typeof (console) != "undefined") ? console.log(b) : alert(b)
        },
        loadTrackers: function() {
            this.Google.init();
            this.Comscore.init();
            this.Quant.init();
            this.Beacon.init();
            if (this.config.lotame) {
                this.Lotame.init()
            }
        },
        refresh: function(b) {
            this.incrementPV();
            if (b && b.url) {
                this.updateAttrUrl(b.url)
            } else {
                this.updateAttrUrl()
            }
            this.Google.sendGMain();
            this.Google.sendGData();
            this.Comscore.refresh();
            this.Quant.refresh();
            this.Beacon.send({
                type: "pageview"
            })
        },
        init: function(b) {
            if (b) {
                this.config = b;
                this.debug = b.debug || false;
                this.is_bot = b.is_bot || false;
                this.customVar = b.customVar || false;
                this.customReferer = b.customReferer || false;
                this.Quant.labels = b.quantcastLabels || false;
                this.Comscore.keyword = b.comscoreKeyword || false;
                this.category = b.category || false;
                a = b.attributes || [];
                this.Beacon.zapAttr = b.zapAttributes || [];
                this.clickTracking = b.clickTracking || false;
                this.pageUrl = b.pageUrl || false;
                this.lotame = b.lotame || false
            }
            if (this.clickTracking) {
                this.Click.init()
            }
            Track.Iframe.ads();
            Track.adBlockStatus.init();
            Timer.add("pre-analytics");
            this.loadTrackers();
            this.triggerPageviewEvents()
        },
        incrementPV: function() {
            var f = ++Settings.pv
              , d = ++Settings.appPv;
            Zimbio.library.setCookie("pv", f);
            var b = this.getAttributes();
            for (var c = 0, e = b.length - 1; c <= e; c++) {
                var g = b[c];
                if (g[0].substr(0, 2) === "pv") {
                    b[c][0] = "pv:" + f
                }
            }
            this.triggerPageviewEvents()
        },
        triggerPageviewEvents: function() {
            $(document).trigger("session-pageview:" + Settings.pv);
            $(document).trigger("app-pageview:" + Settings.appPv);
            if (this.debug) {
                console.log("session-pageview:" + Settings.pv);
                console.log("app-pageview:" + Settings.appPv)
            }
        },
        updateAttrUrl: function(b) {
            this.updateAttr("url", (b) ? b : document.location.href)
        },
        updateAttrPageType: function(b) {
            this.updateAttr("pageType", (b) ? b : "none")
        },
        updateAttr: function(h, b) {
            var f = f || this.getAttributes(), k, j, c, g;
            if (!h || !b) {
                return
            }
            if (f && f.length) {
                g = f.slice();
                for (var d = 0, e = g.length; d < e; d++) {
                    c = g[d][0];
                    k = c.split(":")[0];
                    if (k === h) {
                        f[d] = [k + ":" + b]
                    }
                }
            }
        },
        getAttributes: function() {
            return a
        }
    }
})();
var _gaq = _gaq || [];
Track.Google = (function() {
    var l = {
        Zimbio: "UA-521923-1",
        StyleBistro: "UA-521923-7",
        Livingly: "UA-521923-9",
        Lonny: "UA-521923-12",
        DataStream: "UA-5369370-1"
    }
      , f = {
        main: "GMain",
        datastream: "GData"
    }
      , d = {
        main: false,
        datastream: false
    }
      , p = {}
      , h = {}
      , s = {}
      , b = function() {
        var t = Settings.domain;
        if (t && l[t]) {
            return l[t]
        }
        return l.Zimbio
    }
      , g = function() {
        (function(v, w, z, y, x, u, t) {
            v.GoogleAnalyticsObject = x;
            v[x] = v[x] || function() {
                (v[x].q = v[x].q || []).push(arguments)
            }
            ,
            v[x].l = 1 * new Date();
            u = w.createElement(z),
            t = w.getElementsByTagName(z)[0];
            u.async = 1;
            u.src = y;
            t.parentNode.insertBefore(u, t)
        })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga")
    }
      , k = function() {
        g();
        q();
        j()
    }
      , q = function() {
        if (d.main) {
            return
        }
        m(b(), f.main);
        if (referer) {
            c(f.main)
        }
        d.main = true;
        p.sendGMain()
    }
      , j = function() {
        if (d.datastream) {
            return
        }
        m(l.DataStream, f.datastream);
        if (h) {
            a(f.datastream)
        }
        if (referer) {
            c(f.datastream)
        }
        d.datastream = true;
        p.sendGData()
    }
      , m = function(u, t) {
        ga("create", u, "auto", {
            name: t
        });
        ga(t + ".require", "displayfeatures")
    }
      , c = function(t) {
        if (!t) {
            return
        }
        ga(t + ".set", "referrer", referer)
    }
      , o = function(u, t) {
        var t = t || document.location.href;
        ga(u + ".set", "dimension2", t)
    }
      , r = function(t, u) {
        ga(t + ".set", "dimension3", u)
    }
      , e = function(t) {
        ga(t + ".set", "contentGroup1", Track.pageType)
    }
      , a = function(w) {
        if (w && h) {
            var y = h
              , v = y.length;
            for (var u = 0; u < v; u++) {
                var t = y[u];
                ga(w + ".set", t.name, t.value)
            }
        }
    }
      , n = function() {
        var u = Track.getAttributes();
        if (u.length) {
            var x, y, z;
            u = u.slice();
            for (var w = 0, t = u.length; w < t; w++) {
                z = u[w][0];
                x = z.split(":")[0];
                if (x === "url") {
                    y = z.split("url:")[1];
                    u[w] = [x + ":" + encodeURIComponent(y)]
                }
            }
        }
        var v = "/-" + u + ",";
        return v
    }
    ;
    return {
        init: function() {
            p = this;
            h = Track.customVar;
            referer = Track.customReferer;
            s = Settings.domain;
            k()
        },
        sendGMain: function(t) {
            if (!d.main) {
                q()
            }
            var t = t ? t : Track.pageUrl;
            if (t) {
                ga(f.main + ".send", "pageview", t)
            } else {
                ga(f.main + ".send", "pageview")
            }
            if (Track.debug) {
                Track.log("GMain: " + t)
            }
        },
        sendGData: function(t) {
            if (!d.datastream) {
                j()
            }
            var u = n();
            o(f.datastream);
            e(f.datastream);
            ga(f.datastream + ".send", "pageview", u);
            if (Track.debug) {
                Track.log("Datastream: " + u)
            }
        },
        sendEvent: function(w, v) {
            if (!w || !v) {
                return
            }
            var u = f[w] || f.main
              , t = Track.pageUrl || document.location.href;
            if (u == f.datastream) {
                t = n();
                o(f.datastream)
            }
            ga(u + ".send", "event", {
                eventCategory: v.category,
                eventAction: v.action,
                eventLabel: v.label || false,
                eventValue: v.value || 0,
                page: t,
                nonInteraction: v.nonInteraction || true
            });
            if (Track.debug) {
                Track.log("GA Event: " + u + " - " + v.category + " " + v.action + " " + v.label + " " + v.value + " " + t + " " + v.nonInteraction)
            }
        },
        setSubscriberValue: function(t) {
            r(f.datastream, t);
            if (Track.debug) {
                Track.log("GA Custom Dimension: Subscriber=" + t)
            }
        }
    }
})();
_qoptions = {};
var _qevents = _qevents || [];
Track.Quant = (function() {
    var b = "http://edge.quantserve.com/quant.js"
      , a = "p-124BfeS-bwiSE";
    return {
        labels: false,
        init: function() {
            _qevents.push((this.labels) ? {
                qacct: a,
                labels: this.labels
            } : {
                qacct: a
            });
            Loader.getScript(b, false, true)
        },
        refresh: function() {
            _qevents.push((this.labels) ? {
                qacct: a,
                labels: this.labels,
                event: "refresh"
            } : {
                qacct: a,
                event: "refresh"
            })
        }
    }
})();
var _comscore = _comscore || [];
Track.Comscore = (function() {
    var a = function(b) {
        _comscore.push({
            c1: "2",
            c2: "6167726",
            c3: "",
            options: {
                url_append: b
            }
        });
        (function() {
            var d = document.createElement("script")
              , c = document.getElementsByTagName("script")[0];
            d.async = true;
            d.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
            c.parentNode.insertBefore(d, c)
        })()
    }
    ;
    return {
        keyword: false,
        refresh: function() {
            if (typeof COMSCORE == "undefined") {
                return
            }
            var b = (this.keyword) ? ("comscorekw=" + this.keyword) : "";
            $.ajax({
                url: "/pageview_candidate",
                type: "GET"
            });
            COMSCORE.beacon({
                c1: "2",
                c2: "6167726",
                c3: "",
                options: {
                    url_append: b
                }
            })
        },
        init: function() {
            var b = (this.keyword) ? ("comscorekw=" + this.keyword) : "";
            a(b)
        }
    }
})();
Track.Lotame = (function() {
    var a = {
        srcRoot: "http://tags.crwdcntrl.net/c/",
        srcPath: "/cc.js?ns=_cc",
        scriptId: "LOTCC_",
        method: "_cc",
        accounts: {
            Zimbio: "6278",
            StyleBistro: "6279",
            Lonny: "6280"
        }
    }
      , b = {
        accountId: "",
        scriptId: "",
        src: "",
        method: ""
    }
      , c = function() {
        var f = Settings.domain
          , e = a.accounts;
        b.accountId = (f && e[f]) ? e[f] : e.Zimbio;
        b.scriptId = a.scriptId + b.accountId;
        b.src = (a.srcRoot + b.accountId + a.srcPath + b.accountId)
    }
      , d = function() {
        b.method = window[a.method + b.accountId];
        if (b.method) {
            b.method.bcp()
        }
    }
    ;
    return {
        init: function() {
            c();
            Loader.getScript(b.src, d, true, b.scriptId)
        }
    }
})();
Track.Beacon = (function() {
    var e = "/beacon.gif?"
      , f = "2.0"
      , a = []
      , b = function(n) {
        var m = {};
        if (Settings.trackingUrl) {
            m = document.createElement("a");
            m.href = Settings.trackingUrl
        }
        n.url = m.href || window.location.href;
        n.path = m.pathname || window.location.pathname;
        n.q = window.location.search.slice(1);
        n.id = l();
        n.plat = g();
        n.page = Track.pageType;
        n.camp = Settings.campaign || "";
        n.dev = Settings.device || "";
        n.pv = Settings.pv;
        n.sid = Settings.sessionId || "";
        n.src = Settings.source || "";
        n.buck = Settings.testBucket;
        n.auth = Settings.author || "";
        n.guid = Settings.guid || ""
    }
      , l = function() {
        if (Settings.sessionId) {
            return ( Settings.sessionId + Math.round(Math.random() * Math.pow(10, 17)))
        }
        return ""
    }
      , g = function() {
        return /^m\./.test(window.location.hostname) ? "mobile" : "desktop"
    }
      , k = function(m, p) {
        var q, o = Timer.Stack, n = p.type;
        q = m.timer = {};
        $.extend(q, o);
        if (n == "load") {
            $(window).off({
                unload: timerCallback
            })
        }
    }
      , d = function(m, n) {
        m.click = c(Track.Click.getAttributes())
    }
      , h = function(m, n) {
        m[n.type] = n.attr
    }
      , j = function(m, q) {
        var p = m.data = {}, o, n;
        p.id = m.id;
        p.ms = Timer.s;
        p.event = q.type;
        $.extend(p, c(Track.getAttributes()));
        $.extend(p, c(Track.Beacon.zapAttr));
        if (document.referrer) {
            p.r = document.referrer
        }
        if (q.category && q.action) {
            p.eventCategory = q.category;
            p.eventAction = q.action;
            if (q.label) {
                p.eventLabel = q.label
            }
            if (q.value) {
                p.eventValue = q.value
            }
        }
    }
      , c = function(q) {
        var o = {}, m;
        for (var n = 0, p = q.length; n < p; n++) {
            m = q[n][0].split(":");
            o[m.shift()] = m.join(":")
        }
        return o
    }
    ;
    return {
        zapAttr: a,
        init: function() {
            var m = this;
            this.send({
                type: "pageview"
            });
            if (Settings.testBucket && "A".indexOf(Settings.testBucket) >= 0) {
                timerCallback = $.proxy(m.send, m);
                $(window).on({
                    load: timerCallback,
                    unload: timerCallback
                })
            }
        },
        send: function(p) {
            if (Track.is_bot) {
                return
            }
            var o, n, m = {};
            p = p || {};
            m.event = o = (p && p.type) ? p.type : "none";
            m.v = f;
            b(m);
            if (o == "pageview") {
                j(m, p)
            } else {
                if (o == "click") {
                    d(m, p);
                    j(m, p)
                } else {
                    if (o.match(/ad_/)) {
                        h(m, p)
                    } else {
                        if (o == "load" || o == "unload") {
                            Timer.add(o);
                            k(m, p);
                            j(m, p)
                        } else {
                            if (o == "generic") {
                                $.extend(m, p.data)
                            }
                        }
                    }
                }
            }
            n = e + $.param({
                x: JSON.stringify(m)
            });
            Loader.getImage(n);
            if (Track.debug) {
                Track.log("Beacon: " + decodeURI(n))
            }
        },
        sendEvent: function(n, p, m, o) {
            if (typeof o === "undefined") {
                o = 1
            }
            if (isNaN(o)) {
                throw "Track.Beacon.sendEvent value must be a number"
            }
            Track.Beacon.send({
                type: "generic",
                data: {
                    category: n,
                    action: p,
                    label: m,
                    value: o
                }
            })
        }
    }
})();
Track.Click = (function() {
    var e = false
      , d = "_c"
      , b = {}
      , a = []
      , c = function(k) {
        var g, q, p;
        g = (typeof k == "string") ? $("#" + k) : $(k.target);
        if (!g.length) {
            return
        }
        q = g.prop("tagName").toLowerCase();
        if (q != "a" && q != "img" && !g.hasClass(d)) {
            return
        }
        p = g.parent().closest("." + d);
        if (!p.length) {
            return
        }
        var n = p.find(q)
          , f = n.length
          , j = 0
          , o = (q == "a") ? g.attr("href") : g.attr("src")
          , m = g.attr("_cid") || null
          , h = p.attr("_cmod") || null ;
        n.each(function(l) {
            if ((q == "a" && this.href == g.attr("href")) || (q == "img" && this.src == g.attr("src")) || (this.id && this.id == g.attr("id")) || (this.getAttribute("_cid") == m)) {
                j = (l + 1)
            }
        });
        a = [["parentId:" + (h || p.attr("id"))], ["num:" + j], ["children:" + n.length], ["objTag:" + q], ["objId:" + (m || g.attr("id"))], ];
        Track.Beacon.send({
            type: "click"
        })
    }
    ;
    fireBeaconSend = function(f, g) {
        a = [["parentId:" + f], ["objId:" + g]];
        Track.Beacon.send({
            type: "click"
        })
    }
    ;
    return {
        init: function() {
            var g = Track.clickTracking
              , f = $.cookie("tzs") || false;
            if (f) {
                f = parseInt(f.split("|")[1]) || false
            }
            if (g && (typeof (g) != "number")) {
                g = 1
            }
            if ((!g || !f || (f % g)) && !Track.debug) {
                return
            }
            b = this;
            $(document).click($.proxy(c, b));
            e = true
        },
        syntheticGet: function(g, f) {
            if (!e || f) {
                c(g)
            }
        },
        fireCustomBeacon: function(f) {
            fireBeaconSend(f.cmod, f.cid)
        },
        getAttributes: function() {
            return a
        },
        isTracking: function() {
            return e
        }
    }
})();
Track.Iframe = (function(a, e) {
    var b = false
      , c = function() {
        b = [];
        var j = null
          , g = null
          , l = function(o) {
            g = o;
            for (var n = 0, p = b.length; n < p; n++) {
                b[n](o)
            }
        }
          , h = function(n) {
            if (Track.Iframe.verbose) {
                console.log(n)
            }
        }
          , m = navigator.userAgent.toLowerCase()
          , f = m.match(/(msie|trident)/)
          , d = m.match(/(chrome|safari|webkit)/)
          , k = (m.indexOf("firefox") > -1 && !f && !d);
        if (f) {
            $(e).focusin(function(o) {
                var n = o.target;
                if (n && n.tagName == "IFRAME" && n != g) {
                    l(n)
                }
                h("focusin " + (n ? n.tagName + " " + n.id : ""))
            })
        } else {
            if (d || k) {
                $(e).mouseover(function(o) {
                    var n = o.target;
                    if (n && n.tagName == "IFRAME") {
                        if (n != j) {
                            j = n;
                            g = null
                        }
                    } else {
                        if (j) {
                            j = null
                        }
                    }
                    h("over " + (j ? j.tagName + " " + j.id : ""))
                });
                $(a).blur(function(o) {
                    if (j) {
                        var n = o.target;
                        if (n != j && n != g && g != j) {
                            var p = (j == e.activeElement);
                            if (p || !d) {
                                l(j)
                            }
                        }
                        h("blur " + (n ? n.tagName + " " + n.id : "") + " " + e.activeElement)
                    } else {
                        h("blur " + e.activeElement)
                    }
                })
            }
        }
    }
    ;
    return {
        click: function(d) {
            if (!b) {
                c()
            }
            b.push(d)
        },
        ads: function() {
            if (/^m\./.test(a.location.hostname)) {
                return
            }
            this.click(function(f) {
                if (typeof f.id == "string" && f.id.match(/google_ads_iframe/)) {
                    var d = f.id.match(/\d.*/g);
                    if (Track.Iframe.verbose) {
                        console.log("click on adslot: " + d)
                    }
                    Track.Beacon.send({
                        type: "ad_ifrclk",
                        attr: {
                            slotName: d,
                            geo: Settings.geoCountry || ""
                        }
                    });
                    Zimbio.fbCustomAudience.ifrclk()
                }
            })
        },
        verbose: false
    }
})(window, document);
Track.adBlockStatus = (function adBlockStatus() {
    var c = "unknown", b, e, d, g = function(h) {
        if (c == h) {
            return
        }
        c = (c == "unknown" ? h : "error");
        b.log("blocked=" + c);
        for (var j = 0, k = e.length; j < k; j++) {
            e[j](c)
        }
        Settings.isAdBlocking = String(c);
        $.cookie("iab", Settings.isAdBlocking)
    }
    , f = function f() {
        b = new Debugger({
            key: "debug_adBlockStatus",
            prefix: "adBlockStatus",
            trace: true
        });
        e = [];
        if (Settings.pv > 1) {
            b.log("inactive on pv>1")
        } else {
            d = new Image();
            d.onload = function() {
                g(false)
            }
            ;
            d.onerror = function() {
                g(true)
            }
            ;
            d.src = "/images/spacer.gif?abk&adnet=1";
            b.log("init done")
        }
    }
    , a = function a(h) {
        if (!e) {
            f()
        }
        e.push(h);
        if (c != "unknown") {
            h(c)
        }
    }
    ;
    return {
        init: f,
        onChange: a
    }
})();
var googletag = googletag || [];
googletag.cmd = googletag.cmd || [];
var Ads = {};
Ads.Skin = (function() {
    var b = false
      , c = false
      , a = "skin-static";
    return {
        clickHandler: false,
        clickCallback: function(f) {
            var d = parent.$(f.target) || null ;
            if (d && d.prop("tagName").toLowerCase() == "body") {
                window.open(Ads.Skin.config.clickUrl);
                if (Ads.Skin.clickPixel && parent.Loader) {
                    parent.Loader.getImage(Ads.Skin.clickPixel)
                }
            }
        },
        init: function(f) {
            Ads.Skin.skinCallback({
                type: "static"
            });
            var g = f
              , e = parent.document.body.style
              , d = parent.Loader;
            Ads.Skin.config = g;
            $(parent.document.body).addClass(g.bodyCSS || a);
            if (g.url) {
                e.backgroundImage = "url(" + g.url + ")"
            }
            if (g.color) {
                e.backgroundColor = g.color
            }
            if (g.attachment) {
                e.backgroundAttachment = g.attachment
            }
            if (g.trackingPixel && d) {
                d.getImage(g.trackingPixel)
            }
            if (g.clickUrl) {
                this.clickHandler = parent.$(parent.document.body).on("click", Ads.Skin.clickCallback)
            }
        },
        skinCallback: function(d) {
            if (b) {
                Ads.Skin.unloadSkin()
            }
            Ads.Skin.registerSkin(d.type)
        },
        setRenderCallback: function() {
            try {
                googletag.cmd.push(function() {
                    googletag.pubads().addEventListener("slotRenderEnded", function(e) {
                        if (e.slot === Zimbio.Ads.slots.siteSkin) {
                            if (e.isEmpty && b) {
                                Ads.Skin.unloadSkin()
                            }
                        }
                    })
                })
            } catch (d) {}
        },
        unloadSkin: function() {
            if (b == "static") {
                var d = $(parent.document.body);
                d.removeClass(Ads.Skin.config.bodyCSS || a);
                d.css("background", "");
                Ads.Skin.clickHandler = parent.$(parent.document.body).off("click", Ads.Skin.clickCallback);
                if (Ads.Frame.isSuperHeaderLoaded) {
                    Ads.Frame.unloadSuperHeader()
                }
            } else {
                if (b == "jetpack") {
                    if (typeof jpUnloadUnits != "undefined") {
                        jpUnloadUnits()
                    }
                }
            }
            b = false
        },
        registerSkin: function(d) {
            b = d;
            if (!c) {
                Ads.Skin.setRenderCallback()
            }
            c = true
        }
    }
})();
Ads.Frame = (function() {
    var b = "embeddedAd"
      , d = "shownAd"
      , a = {
        id: "superHeader",
        selector: "#superHeader"
    }
      , c = {
        id: "skin",
        selector: "#skin"
    };
    return {
        isSuperHeaderLoaded: false,
        createSkinDiv: function() {
            if (window.skin) {
                return
            }
            var e = $('<div id="' + c.id + '" class="' + b + " " + d + '"></div>');
            window.top.$(document.body).prepend(e)
        },
        showSkin: function(f) {
            Ads.Frame.createSkinDiv();
            var e = $(f.skinWrapper).detach();
            window.top.$(c.selector).append(e);
            if (e.attr("data-type")) {
                window.top.$(document.body).addClass("skin-" + e.attr("data-type"))
            }
        },
        createSuperHeaderDiv: function() {
            if (window.superHeader) {
                return
            }
            var e = $('<div id="' + a.id + '" class="' + b + " " + d + '"></div>');
            window.top.$(document.body).prepend(e)
        },
        showSuperHeader: function(f) {
            Ads.Frame.createSuperHeaderDiv();
            var e = $(f.superHeaderWrapper).detach();
            window.top.$(a.selector).append(e);
            if (e.attr("data-type")) {
                window.top.$(document.body).addClass("super-" + e.attr("data-type"))
            }
            this.isSuperHeaderLoaded = true
        },
        unloadSuperHeader: function() {
            var e = $(a.selector);
            if (e.remove) {
                e.remove()
            }
            this.isisSuperHeaderLoaded = false
        },
        show: function(e) {
            if (e && e.frameElement) {
                var f = $(e.frameElement.parentElement.parentElement);
                if (f && f.hasClass(b)) {
                    f.addClass(d)
                }
            }
        },
        setStyle: function(e) {
            var g = e;
            if (g.win && g.win.frameElement) {
                Ads.Frame.show(g.win);
                var f = g.win.frameElement;
                if (g.height) {
                    f.height = g.height
                }
                if (g.width) {
                    f.width = g.width
                }
                if (g.parentStyle) {
                    f.parentElement.style.cssText = g.parentStyle
                }
            }
        }
    }
})();
Zimbio.Ads = (function() {
    var k = "/1028834"
      , b = {
        _default: "ZM",
        Zimbio: "ZM",
        StyleBistro: "SB",
        Livingly: "LV",
        Lonny: "LN"
    }
      , e = {}
      , c = function() {
        var m = Settings.domain;
        var l = (m && b[m]) ? b[m] : b[_default];
        return "/" + l + "/" + l + "_"
    }
      , j = function() {
        var l = "https:" == document.location.protocol;
        var m = (l ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
        document.write('<script src="' + m + '"><\/script>')
    }
      , a = function() {
        var l = document.createElement("script");
        l.async = "async";
        l.src = "https://www.googletagservices.com/tag/js/gpt.js";
        var m = document.getElementsByTagName("script")[0];
        m.parentNode.insertBefore(l, m)
    }
      , d = function(m, l, o) {
        if (!e[o]) {
            try {
                googletag.cmd.push(function() {
                    e[o] = googletag.defineSlot(m, l, o).addService(googletag.pubads())
                })
            } catch (n) {}
        }
    }
      , g = function(n) {
        if (!n || (!n.name && !n.domainUnit) || !n.sizes || !n.id) {
            return
        }
        if (!e[n.id]) {
            try {
                var l = googletag;
                n.name = n.name || Zimbio.Ads.getAdUnitName(n.domainUnit);
                l.cmd.push(function() {
                    e[n.id] = l.defineSlot(n.name, n.sizes, n.id).addService(l.pubads());
                    if (n.display) {
                        l.display(n.id)
                    } else {
                        l.disableInitialLoad(n.id)
                    }
                })
            } catch (m) {}
        }
    }
      , h = function() {
        var l = Settings.pv;
        l = Math.min(200, l);
        l = l.toString();
        while (l.length < 3) {
            l = "0" + l
        }
        return l
    }
      , f = function(l) {
        var m, n;
        l || (l = {});
        m = l.slots || null ;
        n = h();
        try {
            googletag.cmd.push(function() {
                googletag.pubads().setTargeting("PV", n);
                googletag.pubads().refresh(m)
            })
        } catch (o) {}
    }
    ;
    return {
        init: function() {
            a()
        },
        fill: function(l) {
            try {
                var m = googletag;
                m.cmd.push(function() {
                    m.display(l)
                })
            } catch (n) {}
        },
        getAdUnitName: function(l) {
            return k + c() + l
        },
        psCallback: function(l) {
            document.cookie = "psServed=" + l
        },
        slots: e,
        defineSlot: d,
        defineSlotAsync: g,
        hide: function(l) {
            l = l || ".embeddedAd";
            $(l).hide()
        },
        refresh: f,
        getPVForTargeting: h,
        trackView: function(m) {
            if (m && m.label) {
                var n = "";
                for (var l in m.label) {
                    n += l.toString() + "=" + m.label[l].toString() + ";"
                }
                Track.Google.sendEvent("datastream", {
                    category: "Ad",
                    action: "View",
                    label: n
                })
            }
        },
        loadYahoo: function(l) {
            if (typeof (Zimbio.Ads.Yahoo) != "undefined") {
                Zimbio.Ads.Yahoo.init(l)
            } else {
                Loader.getScript("platform/ads_yahoo.js", function() {
                    Zimbio.Ads.Yahoo.init(l)
                }, false)
            }
        }
    }
})();
Zimbio.Ads.Skin = (function() {
    var a = false
      , b = false;
    return {
        init: function(c) {
            if (!c) {
                return
            }
            if (!b) {
                this.setRenderEvent()
            }
            if (a) {
                this.unloadSkin()
            }
            this.config = c;
            a = (c.type) ? c.type : "true"
        },
        setRenderEvent: function() {
            try {
                googletag.cmd.push(function() {
                    googletag.pubads().addEventListener("slotRenderEnded", function(d) {
                        if (d.slot === Zimbio.Ads.slots.siteSkin) {
                            if (d.isEmpty && a) {
                                Zimbio.Ads.Skin.unloadSkin()
                            }
                        }
                    })
                })
            } catch (c) {}
            b = true
        },
        unloadSkin: function() {
            if (a == "external") {
                if (this.config.unload && typeof (this.config.unload) === "function") {
                    this.config.unload.apply(window.parent)
                }
            }
            a = false
        }
    }
})();
Zimbio.Ads.Taboola = (function() {
    var a = new Debugger({
        key: "debug_ads_tabo",
        prefix: "TABO",
        trace: true
    })
      , c = {
        EndslateThumbnails: {
            mode: "alternating-thumbnails-a",
            container: "jumpContentWrapper",
            placement: "Endslate Thumbnails",
            target_type: "mix"
        },
        BelowMobileGalleryThumbnails2: {
            mode: "thumbnails-mobile",
            container: "mobileNativeAWrapper",
            placement: "Below Mobile Gallery Thumbnails 2",
            target_type: "mix"
        }
    };
    function b(e) {
        var d = c[e] || null ;
        if (!d) {
            return
        }
        window._taboola = window._taboola || [];
        _taboola.push({
            photo: "auto"
        });
        _taboola.push(d);
        _taboola.push({
            flush: true
        });
        Loader.getScript("http://cdn.taboola.com/libtrc/zimbio-network/loader.js", false, true)
    }
    return {
        renderAd: function(e, d) {
            a.log("renderAd", e, d);
            b(d)
        }
    }
})();
var Sticky = (function() {
    var e = [], f, c, j = false, k = {};
    function g() {
        if (j) {
            return
        }
        k.callback = $.proxy(h, this);
        k.update = $.proxy(d, this);
        if (Settings.supportsTouch) {
            $(window).on({
                touchmove: k.callback
            })
        }
        $(window).on({
            scroll: k.callback,
            resize: k.update
        });
        c = Browser.getScroll();
        j = true
    }
    function b() {
        if (!j) {
            return
        }
        if (Settings.supportsTouch) {
            $(window).off({
                touchmove: k.callback
            })
        }
        $(window).off({
            scroll: k.callback,
            resize: k.update
        });
        j = false
    }
    function d() {
        for (var l = 0, m = e.length; l < m; l++) {
            e[l].getPosition()
        }
    }
    function h() {
        var m = Browser.getScroll();
        if (m != c) {
            c = m;
            d()
        }
        f = Browser.getPageScroll().y;
        for (var l = 0, n = e.length; l < n; l++) {
            var p = e[l]
              , o = (f > p.fixedOffset);
            if (o && (!p.isStuck || p.anchor)) {
                p.stick()
            } else {
                if (!o && p.isStuck) {
                    p.unstick()
                }
            }
        }
    }
    function a(l) {
        if (!l || !l.id || navigator.userAgent.match(/MSIE\ 7\.0/)) {
            return
        }
        $.extend(this, {
            config: l,
            obj: $("#" + l.id) || false,
            pad: l.pad || 0,
            anchor: l.anchorId ? $("#" + l.anchorId) : false,
            anchorPad: l.anchorPad || false,
            anchorType: l.anchorType || "top",
            className: l.className || "sticky",
            markerClass: l.markerClass || "stickymarker",
            markerBaseId: l.markerBaseId || "stickymarker_",
            preserveLayout: (l.preserveLayout == "false") ? false : true,
            customPosition: l.customPosition || false,
            heightOverride: l.heightOverride || false,
            isStuck: false
        });
        if (!this.obj) {
            return
        }
        this.objHeight = this.heightOverride ? this.heightOverride : this.obj.height();
        this.insertMarker();
        if (!j) {
            g()
        }
        this.getPosition();
        e.push(this)
    }
    $.extend(a.prototype, {
        insertMarker: function() {
            var l = $(document.createElement("div")).attr({
                id: this.markerBaseId + this.config.id,
                "class": this.markerClass
            });
            l.insertBefore(this.obj);
            this.marker = l
        },
        getPosition: function() {
            if (this.customPosition && typeof this.customPosition == "function") {
                this.fixedOffset = this.customPosition()
            } else {
                this.offset = this.marker.offset();
                this.fixedOffset = this.offset.top - this.pad
            }
            if (this.anchor) {
                this.anchor.offset = this.anchor.offset()
            }
        },
        stick: function() {
            var l = this.anchorType;
            this.obj.addClass(this.className);
            if (this.preserveLayout) {
                this.marker.css({
                    height: this.objHeight
                })
            }
            if (this.anchorType != "bottom" && this.anchor && (f > (this.anchor.offset.top - this.objHeight - this.anchorPad))) {
                var m = {};
                m[l] = Math.round(this.anchor.offset.top - this.objHeight - f - this.anchorPad);
                this.obj.css(m)
            } else {
                var m = {};
                m[l] = this.pad + "px";
                this.obj.css(m)
            }
            this.isStuck = true
        },
        unstick: function() {
            var l = this.anchorType;
            this.obj.removeClass(this.className);
            var m = {};
            m[l] = "";
            this.obj.css(m);
            if (this.preserveLayout) {
                this.marker.css({
                    height: ""
                })
            }
            this.isStuck = false
        },
        start: function() {
            if (this.isPaused) {
                e.push(this);
                this.isPaused = false
            }
        },
        pause: function() {
            this.unstick();
            this.isPaused = true;
            for (var l = 0, m = e.length; l < m; l++) {
                if (this === e[l]) {
                    e.splice(l, 1)
                }
            }
        }
    });
    $.extend(a, {
        start: g,
        stop: b
    });
    return a
})();
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(f) {
    var a = /\+/g;
    function d(j) {
        return b.raw ? j : encodeURIComponent(j)
    }
    function g(j) {
        return b.raw ? j : decodeURIComponent(j)
    }
    function h(j) {
        return d(b.json ? JSON.stringify(j) : String(j))
    }
    function c(j) {
        if (j.indexOf('"') === 0) {
            j = j.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            j = decodeURIComponent(j.replace(a, " "))
        } catch (k) {
            return
        }
        try {
            return b.json ? JSON.parse(j) : j
        } catch (k) {}
    }
    function e(k, j) {
        var l = b.raw ? k : c(k);
        return f.isFunction(j) ? j(l) : l
    }
    var b = f.cookie = function(q, p, v) {
        if (p !== undefined && !f.isFunction(p)) {
            v = f.extend({}, b.defaults, v);
            if (typeof v.expires === "number") {
                var r = v.expires
                  , u = v.expires = new Date();
                u.setDate(u.getDate() + r)
            }
            return ( document.cookie = [d(q), "=", h(p), v.expires ? "; expires=" + v.expires.toUTCString() : "", v.path ? "; path=" + v.path : "", v.domain ? "; domain=" + v.domain : "", v.secure ? "; secure" : ""].join(""))
        }
        var w = q ? undefined : {};
        var s = document.cookie ? document.cookie.split("; ") : [];
        for (var o = 0, m = s.length; o < m; o++) {
            var n = s[o].split("=");
            var j = g(n.shift());
            var k = n.join("=");
            if (q && q === j) {
                w = e(k, p);
                break
            }
            if (!q && (k = e(k)) !== undefined) {
                w[j] = k
            }
        }
        return w
    }
    ;
    b.defaults = {};
    f.removeCookie = function(k, j) {
        if (f.cookie(k) !== undefined) {
            f.cookie(k, "", f.extend({}, j, {
                expires: -1
            }));
            return true
        }
        return false
    }
}));
var Zimbio = Zimbio || {};
Zimbio.Events = (function() {
    var e = {};
    var b = e.hasOwnProperty, c;
    function d(f, g) {
        var h;
        g = g || {};
        if (!b.call(e, f)) {
            return
        }
        h = e[f];
        for (c = 0; c < h.length; c++) {
            h[c](g)
        }
    }
    function a(g, h) {
        var f;
        if (!b.call(e, g)) {
            e[g] = []
        }
        f = e[g].push(h) - 1;
        return {
            remove: function() {
                e[g].splice(f, 1)
            }
        }
    }
    return {
        publish: d,
        subscribe: a
    }
})();
Zimbio.Robin = (function() {
    var S = false
      , B = false
      , y = false
      , aa = false
      , au = true
      , f = false
      , T = 1700
      , m = null
      , ab = []
      , Q = []
      , l = {}
      , J = {}
      , D = null
      , ay = []
      , ae = {}
      , ac = 0
      , af = 0
      , aq = {}
      , U = {}
      , p = {}
      , z = Zimbio.Events
      , r = 0
      , X = null
      , e = new Debugger({
        key: "debug_ads_robin",
        prefix: "ROBIN",
        trace: true
    })
      , I = {
        listen: false,
        isRenderingCheck: false,
        slots: []
    }
      , aw = {
        amzn: ["Amazon", "AmazonBidder"],
        opnx: ["OpenX", "OpenXBidder"],
        pubm: ["Pubmatic", "PubmaticBidder"],
        crit: ["Criteo", "CriteoBidder"],
        apnx: ["AppNexus", "AppNexusBidder"],
        sono: ["Sonobi", "SonobiBidder"],
        svrn: ["Sovrn", "SovrnBidder"],
        aolm: ["AOL", "AOLBidder"],
        indx: ["Index", "IndexBidder"],
        brtm: ["BRealTime", "BRealTimeBidder"],
        trip: ["TripleLift", "TripleLiftBidder"],
        fban: ["FBAN", "FBANBidder"]
    }
      , s = {
        siteSkin: ["DT_Skin_1x1", [1, 1], "siteSkin"],
        pushdown: ["DT_Subnav_970x90", [[970, 90], [970, 250], [728, 90]], "pushdown"],
        topLeaderboard: ["DT_Top_728x90", [728, 90], "topLeaderboard"],
        topMREC: ["DT_Top_300x250", [[300, 250], [300, 600], [160, 600]], "topMREC"],
        leftRail: ["DT_Side_160x600", [160, 600], "leftRail"],
        centerLeaderboard: ["DT_Inline_728x90", [728, 90], "centerLeaderboard"],
        sideMREC: ["DT_Inline_300x250", [300, 250], "sideMREC"],
        inlineMREC: ["DT_Inline_300x250", [300, 250], "inlineMREC"],
        mobileCenterMREC: ["MB_Top_300x250", [300, 250], "mobileCenterMREC"],
        mobileWMatContainer: ["MB_Wmat_300x360", [[1, 1], [300, 360]], "mobileWMatContainer"],
        mobileBillboard: ["MB_Top_320x50", [[320, 50], [320, 70]], "mobileBillboard"],
        mobileSwipeMREC: ["MB_Swipe_300x250", [[1, 1], [300, 250], [320, 250], [300, 360]], "mobileSwipeMREC"],
        mobileSwipeLeaderboard: ["MB_Swipe_320x50", [[320, 50]], "mobileSwipeLeaderboard"],
        interstitial: ["DT_Interstitial_800x600", [[800, 600], [970, 250], [300, 600], [300, 250]], "interstitial"],
        contentTracker: ["CP_Content_Tracker", [1, 1], "contentTracker"],
        storyAd: ["DT_Top_300x250", [300, 600], "topMREC"],
        storyBillboard: ["DT_Subnav_970x90", [[970, 90], [970, 250], [1, 1]], "storyBillboard"],
        storyHalfPage: ["DT_Top_300x250", [300, 600], "storyHalfPage"],
        storyMobileBillboard: ["MB_Top_320x50", [[320, 50], [320, 70]], "storyMobileBillboard"],
        storyMobileMREC: ["MB_Top_300x250", [300, 250], "storyMobileMREC"],
        scrollAd: ["MB_Scroll_300x250", [[300, 250], [300, 360]], "scrollAd"],
        nativeA: ["DT_Native_A", [1, 1], "nativeA"],
        nativeB: ["DT_Native_B", [1, 1], "nativeB"],
        nativeC: ["DT_Native_C", [1, 1], "nativeC"],
        mobileNativeA: ["MB_Native_A", [[1, 1], [300, 100], [300, 250]], "mobileNativeA"],
        mobileNativeB: ["MB_Native_B", [[300, 100]], "mobileNativeB"],
        mobileNativeC: ["MB_Native_C", [1, 1], "mobileNativeC"]
    }
      , u = {
        "5704": "Google",
        "13712794": "Pubmatic",
        "11619634": "OpenX",
        "410973394": "Sovrn",
        "11690674": "Index Exchange",
        "618351394": "AppNexus",
        "6064": "AOL",
        "767906314": "bRealtime",
        "601114594": "Amazon",
        "845967154": "TripleLift",
        "856353874": "ShareThrough",
        "815532994": "Taboola",
        "765643354": "Facebook",
        "8854": "Zimbio",
        "12349594": "Sonobi"
    }
      , ag = {
        control: 2,
        goog: ["5", "6"],
        floorBoost: 0
    }
      , n = {
        aolm: 0,
        apnx: 0,
        pubm: 10,
        svrn: -25
    }
      , k = {
        apnx: 8,
        svrn: 4,
        pubm: 16,
        opnx: 8,
        aolm: 19,
        brtm: 8,
        amzn: 7,
        indx: 9,
        trip: 6,
        fban: 22
    };
    function N() {
        e.log("activeBidders: ", Q);
        var aD = Q;
        for (var aB = 0; aB < aD.length; aB++) {
            var aA = aD[aB];
            if (aw[aA] && !p[aA]) {
                try {
                    Zimbio.Ads[aw[aA][0]] = new Zimbio.Ads[aw[aA][1]]();
                    p[aA] = true
                } catch (aC) {
                    ah("loadBidders", "msg=module failed to load;bidder=" + aA + ";");
                    e.log("loadbidder", aA, aC);
                    e.log("loadBidders: load module failed, removing from activeBidders:", aA);
                    var az = Q.indexOf(aA);
                    if (az !== -1) {
                        Q.splice(az, 1)
                    }
                    p[aA] = false
                }
            }
        }
        e.log("loaded modules: ", p);
        R()
    }
    function R() {
        var aA = Q
          , aC = Q.length + "_" + Q.sort().join("_");
        e.log("bidders = " + aC);
        try {
            googletag.cmd.push(function() {
                googletag.pubads().setTargeting("bidders", aC)
            })
        } catch (aF) {}
        var aE = ab
          , aD = [];
        aD.push("bidders-" + Q.length);
        for (var aB = 0; aB < aE.length; aB++) {
            var az = aE[aB];
            aD.push(az + "-" + (p[az] ? "1" : "0"))
        }
        e.log("robin = " + aD);
        try {
            googletag.cmd.push(function() {
                googletag.pubads().setTargeting("robin", aD)
            })
        } catch (aF) {}
    }
    function A() {
        if (!B) {
            return
        }
        for (var az in J) {
            try {
                if (J[az].update && (typeof (J[az].update) === "function")) {
                    J[az].update()
                }
            } catch (aA) {
                ah("update", "msg=failed to update listener;bidder=" + az + ";");
                e.error("error on update", aA)
            }
        }
        try {
            Z()
        } catch (aA) {}
    }
    function ao() {
        e.log(ay[0].id);
        aa = false;
        O();
        z.publish("slots:ready", ay[0]);
        if (U.listen) {
            e.log("slots ready.  calling update immediately.");
            A()
        }
    }
    function K() {
        f = true;
        m = window.setTimeout(O, T)
    }
    function O() {
        f = false;
        if (m) {
            window.clearTimeout(m);
            m = null
        }
    }
    function q() {
        if (S) {
            return
        }
        e.log();
        try {
            googletag.cmd.push(function() {
                googletag.pubads().addEventListener("slotRenderEnded", function(aA) {
                    a(aA);
                    h(aA);
                    if (!D) {
                        D = E()
                    }
                    if (D && D.id && aA.slot === Zimbio.Ads.slots[D.id]) {
                        e.log("listenerSlot rendered", D);
                        ao()
                    }
                })
            })
        } catch (az) {}
        S = true
    }
    function h(aA) {
        e.log("setAdxBoost", aA);
        if (aA.isEmpty) {
            e.log("setAdXBoost: slot empty", aA.slot);
            return
        }
        var az = (aA.advertiserId) ? -0.05 : 0.1;
        af = Math.max(Math.min(af + az, 1), 0);
        e.log("setAdXBoost: new boost", az, "total boost: ", af)
    }
    function a(aC) {
        e.log("logSlotRender", aC);
        try {
            var aB = []
              , aG = aC.slot
              , aA = aG.getTargetingMap()
              , aE = av(aC);
            for (var az in aC) {
                if (az == "slot") {
                    continue
                }
                aB.push(az + "=" + aC[az] + ";")
            }
            for (var aF in aA) {
                aB.push(aF + "=" + aA[aF] + ";")
            }
            aB.push("slotId=" + aG.getSlotElementId() + ";");
            aB.push("adUnitPath=" + aG.getAdUnitPath() + ";");
            aB.push("advertiser=" + G(aC, aE) + ";");
            aB.push("ecpm=" + o(aA, aE) + ";");
            aB = aB.join("");
            v("slotRender", aB)
        } catch (aD) {
            ah("slotRender", "msg=logSlotRender failed;")
        }
    }
    function av(az) {
        return (!az.isEmpty && (az.advertiserId === null || az.advertiserId == 5704)) ? true : false
    }
    function G(az, aA) {
        if (aA) {
            return "Google"
        }
        return ( u[az.advertiserId] || "")
    }
    function o(az, aB) {
        var aA = (aB) ? az.FloorAdX : az.MaxBid;
        return ( parseFloat(aA) || 0)
    }
    function Y(aA, az) {
        return Math.floor(Math.random() * (az - aA + 1)) + aA
    }
    function ar(az) {
        return (Y(1, 100) <= az) ? true : false
    }
    function ak() {
        if (!U.bidders) {
            return
        }
        $.each(U.bidders, function(aB, aC) {
            if (aw[aC] && ab.indexOf(aC) == -1) {
                ab.push(aC)
            }
        });
        Q = ab.slice();
        var aA = ab.length;
        if (ar(aA * 2)) {
            var az = Q.splice(parseInt(Math.random() * 100) % aA, 1);
            e.log("sample out", az)
        }
        e.log("possible: ", ab, "active:", Q, "#: ", Q.length);
        N()
    }
    function t() {
        var aE = ag.goog, aA = ag.control || 0, az = e.getQueryParam("debug_floor_goog") || false, aB, aC;
        if (!aE || !aE.length) {
            return
        }
        aB = parseInt(Math.random() * 100) % aE.length;
        ac = (ar(ag.control)) ? 0 : aE[aB];
        if (az) {
            ac = az
        }
        aC = "goog" + ac;
        e.log(ac, aC);
        try {
            googletag.cmd.push(function() {
                googletag.pubads().setTargeting("floors", aC)
            })
        } catch (aD) {}
    }
    function ax(aA) {
        for (var az = 0; az < aA.length; az++) {
            if (!aA[az]["type"]) {
                aA.splice(az, 1);
                continue
            }
            if (!aA[az]["id"]) {
                aA[az]["id"] = aA[az]["type"]
            }
        }
        return aA
    }
    function an(aC) {
        var aD = Zimbio.Ads.slots || {};
        if (!B) {
            return
        }
        ay = ax(aC);
        e.log("active slots:", ay.map(function(aE) {
            return aE.id
        }));
        for (var aB = 0, aA; aB < ay.length; aB++) {
            aA = ay[aB];
            if (!aD[aA.id]) {
                y = true;
                break
            }
        }
        for (var az in J) {
            if (J[az].updateSlots && typeof (J[az].updateSlots) === "function") {
                J[az].updateSlots()
            }
        }
        D = E()
    }
    function E() {
        var aC = Object.keys(Zimbio.Ads.slots)
          , az = aC.length - 1;
        for (var aB = az; aB >= 0; aB--) {
            for (var aA = 0; aA < ay.length; aA++) {
                var aD = ay[aA].id;
                if (aC[aB] === aD) {
                    e.log("Setting a new listener slot", aD);
                    return ay[aA]
                }
            }
        }
        e.log("Setting a new listener slot (last activeSlot)", ay[ay.length - 1]);
        return ay[ay.length - 1]
    }
    function H(az) {
        return az.map(function(aA) {
            return Zimbio.Ads.slots[aA]
        }).filter(function(aA) {
            return ( typeof aA !== "undefined")
        })
    }
    function at(aA) {
        var az = 0
          , aA = aA || 0
          , aB = (Settings.geoCountry == "US") ? 20 : 5;
        switch (ac) {
        case "5":
            az = Math.min(aA * 1.5, 2000);
            break;
        case "6":
            az = Math.max(aB, Math.min(aA * 1.5, 2000));
            break;
        default:
            az = aA;
            break
        }
        e.log("getFloorPrice AdX: cpm", az, "activeFloors: ", ac, "maxBid: ", aA);
        return az
    }
    function x(aA) {
        var az = aA.toString();
        while (az.length < 4) {
            az = "0" + az
        }
        return az
    }
    function j(aD, aA) {
        if (!aD) {
            return
        }
        var aC = 0
          , az = 0
          , aB = "";
        az = at(aA);
        if (az == 0) {
            aC = 0
        } else {
            if (az <= 500) {
                aC = Math.round(az / 5) * 5
            } else {
                aC = Math.round(az / 25) * 25
            }
        }
        aB = x(aC);
        e.log("setFloorAdx", aD.id, "Floor", aC, "TargetingString", aB, "maxBid", aA);
        Zimbio.Robin.setTargeting(aD.id, "FloorAdX", aB)
    }
    function V(aD) {
        var aA = aq[aD.type]
          , aC = 0
          , az = 0
          , aB = "";
        if (aA && aA.length) {
            az = aA[aA.length - 1]
        }
        if (az == 0) {
            aC = 0
        } else {
            if (az <= 500) {
                aC = Math.round(az / 5) * 5
            } else {
                aC = Math.round(az / 25) * 25
            }
        }
        if (az) {
            aB = x(aC);
            e.log("setFloorRobin", aD.id, "Floor", aC, "TargetingString", aB);
            Zimbio.Robin.setTargeting(aD.id, "FloorRobin", aB)
        }
    }
    function W() {
        e.log("max bid check", l);
        if (!ay) {
            return
        }
        var az = {}
          , aB = "";
        ay.forEach(function aA(aF) {
            var aE = l[aF.type]
              , aC = 0;
            e.log("max bid active slot", aF, aE);
            if (aE && ($.isArray(aE))) {
                aE = aE.sort(function(aH, aG) {
                    return aG.netCPM - aH.netCPM
                });
                aC = aE[0]["netCPM"] || 0
            }
            az[aF.type] = aC;
            aB = x(aC);
            Zimbio.Robin.setTargeting(aF.id, "MaxBid", aB);
            e.log("setTargeting", aF.id, "maxBid", aC, "TargetingString", aB);
            try {
                j(aF, aC)
            } catch (aD) {}
            aq[aF.type] = aq[aF.type] || [];
            try {
                V(aF)
            } catch (aD) {}
            aq[aF.type].push(aC)
        }
        .bind(this));
        e.log("max bids", az)
    }
    function Z() {
        e.log();
        var aA = zads.slots;
        aA.forEach(function az(aC) {
            try {
                aC.clearTargeting("MaxBid");
                aC.clearTargeting("FloorAdX");
                aC.clearTargeting("FloorRobin")
            } catch (aB) {}
        }
        .bind(this))
    }
    function b() {
        e.log();
        var az = J;
        for (var aA in az) {
            e.log("has active bid:", aA, az[aA].activeBid);
            az[aA].activeBid = false
        }
        l = {}
    }
    function al() {
        var aC = {}, aE, aB, az = Date.now(), aA = X ? az - X : 0;
        for (var aD in l) {
            aC[aD] = {};
            aC[aD]["activeBids"] = l[aD];
            aE = aq[aD] || [];
            aB = aE.length;
            aC[aD]["maxBid"] = (aB ? aE[aB - 1] : 0);
            aC[aD]["priorMaxBid"] = (aB > 1 ? aE[aB - 2] : 0)
        }
        if (Zimbio.Robin.Learn && Zimbio.Robin.Learn.tests.length) {
            aC.test_data = Zimbio.Robin.Learn.tests
        }
        aC.refreshTime = aA;
        e.log(aC);
        Track.Beacon.send({
            type: "ad_refresh",
            attr: aC
        })
    }
    function L() {
        if (!ay || !l) {
            return
        }
        var aD, aA, az, aB = 0, aC = false;
        ay.forEach(function(aE) {
            az = 0;
            aD = l[aE.id];
            if (aD) {
                aD.forEach(function(aF) {
                    if (az < aF.cpm) {
                        az = aF.cpm
                    }
                    if (r < aF.cpm) {
                        r = aF.cpm;
                        aC = true
                    }
                })
            }
            aB += az / 1000
        });
        aA = Math.round(r) / 100;
        e.log("maxBid=" + aA + (aC ? " (higher)" : " (lower)"));
        if (aC) {
            if (r >= 500) {
                e.log("fbCustomAudience.robin " + aA + "/high");
                Zimbio.fbCustomAudience.robin(aA, "high")
            }
            if (r >= 350) {
                e.log("fbCustomAudience.robin " + aA + "/medium");
                Zimbio.fbCustomAudience.robin(aA, "medium")
            }
        }
        e.log("fbCustomAudience.revPerSession " + aB);
        Zimbio.fbCustomAudience.revPerSession(aB);
        if (Settings.pv && Settings.pv % 10 == 0) {
            e.log("fbCustomAudience.pv " + Settings.pv);
            Zimbio.fbCustomAudience.pv()
        }
    }
    function M(az, aA) {
        if (!Track.debug && ar(95)) {
            return
        }
        e.log(az, aA);
        if (az && aA.bidRequest && aA.bidResponse) {
            Track.Beacon.send({
                type: "ad_bid",
                attr: {
                    bidder: az,
                    bidRequest: aA.bidRequest,
                    bidResponse: aA.bidResponse,
                    responseTime: aA.bidResponse - aA.bidRequest
                }
            })
        } else {
            e.error("missing response data.")
        }
    }
    function C(az) {
        var aE, aD, aB, aA, aC = Zimbio.Ads.slots;
        e.log(az);
        if (!az.type) {
            e.error("type must be passed to defineSlot");
            return
        }
        aA = az.type;
        if (!s[aA]) {
            e.error("Ad slot does not exist in Robin.slots - ", aA, s);
            return
        }
        if (aC[aD]) {
            e.log("slot is already defined", aD);
            return
        }
        aE = s[aA];
        aD = (az.id || aE[2]);
        Zimbio.Ads.defineSlot(Zimbio.Ads.getAdUnitName(aE[0]), aE[1], aD);
        if (!ae[aA]) {
            ae[aA] = []
        }
        if (ae[aA].indexOf(aD) === -1) {
            ae[aA].push(aD)
        }
        aB = (az.fill || false);
        if (aB) {
            e.log("fill", aA);
            Zimbio.Ads.fill(aD)
        }
    }
    function g(az) {
        if (!az) {
            return
        }
        e.log(az, s);
        for (var aA = 0; aA < az.length; aA++) {
            C(az[aA])
        }
        y = false
    }
    function d() {
        for (var az = 0; az < Q.length; az++) {
            try {
                var aB = Q[az];
                Zimbio.Ads[aw[aB][0]].setActiveSlotTargeting()
            } catch (aA) {
                e.error("error on setActiveSlotTargeting", aA)
            }
        }
    }
    function ap(az) {
        var aA = az ? az.map(function(aE) {
            return am(aE)
        }) : ay.map(function(aE) {
            return c(aE)
        });
        for (var aB = 0; aB < Q.length; aB++) {
            try {
                var aD = Q[aB];
                Zimbio.Ads[aw[aD][0]].setSlotTargeting(aA)
            } catch (aC) {
                e.error("error on setSlotTargeting", aC)
            }
        }
    }
    function am(aB) {
        if (!aB) {
            return
        }
        for (var aA in ae) {
            var az = ae[aA];
            if (az.indexOf(aB) !== -1) {
                return {
                    type: aA,
                    id: aB
                }
            }
        }
    }
    function c(az) {
        if (typeof az === "object") {
            az = az.type
        }
        if (!s[az]) {
            e.error("tried to get slot object for non-existent type:", az);
            return
        }
        return {
            type: az,
            id: s[az][2]
        }
    }
    function aj() {
        e.log("getBidEarly");
        for (var aA = 0; aA < Q.length; aA++) {
            var az = Q[aA];
            try {
                var aC = Zimbio.Ads[aw[az][0]];
                if (aC && aC.fetchEarly) {
                    e.log("getBidEarly: for", az);
                    aC.getBid()
                }
            } catch (aB) {
                ah("getBidEarly", "msg=can't get early bids;bidder=" + az + ";")
            }
        }
    }
    function F() {
        e.log("clearTargetingEarly");
        for (var aA = 0; aA < Q.length; aA++) {
            var az = Q[aA];
            try {
                var aC = Zimbio.Ads[aw[az][0]];
                if (aC && aC.fetchEarly) {
                    e.log("clearTargetingEarly: for", az);
                    aC.clearTargeting()
                }
            } catch (aB) {
                ah("clearTargetingEarly", "msg=can't clear targeting early;bidder=" + az + ";")
            }
        }
    }
    function w() {
        if (Settings.pv == 1) {
            aa = true
        }
    }
    function ah(aA, az) {
        Track.Beacon.sendEvent("robinError", "robin." + aA, az);
        e.error("trackError", aA, az)
    }
    function v(aA, az) {
        Track.Beacon.sendEvent("robin", "robin." + aA, az);
        e.success("trackSuccess", aA, az)
    }
    return {
        Events: z,
        skipFlagTime: 2000,
        update: A,
        updateSlots: an,
        defineSlots: g,
        floors: ag,
        floorBoosts: n,
        discounts: k,
        slots: s,
        sendResponseBeacon: M,
        getSlots: function() {
            return s
        },
        getPossibleBidders: function() {
            return ab
        },
        getActiveBidders: function() {
            return Q
        },
        getActiveBids: function() {
            return l
        },
        getLoadedModules: function() {
            return p
        },
        getUpdateListeners: function() {
            return J
        },
        getActiveSlots: function() {
            return ay
        },
        getMaxBids: function(az) {
            return ( (az) ? aq[az] : aq)
        },
        getFirstTouch: function() {
            return aa
        },
        getIsRendering: function() {
            return f
        },
        attach: function P(az) {
            e.log(az.bidder, az);
            az.activeBid = false;
            if (az && az.bidder) {
                J[az.bidder] = az
            }
        },
        detach: function(az) {
            if (az && az.bidder && J[az.bidder]) {
                delete J[az.bidder]
            }
        },
        defineSlots: g,
        setTargeting: function(az, aA, aB) {
            if (az) {
                if (!Zimbio.Ads.slots[az]) {
                    e.error("Tried to set targeting on non-existent slot.", az, aA, aB)
                } else {
                    try {
                        googletag.cmd.push(function() {
                            Zimbio.Ads.slots[az].setTargeting(aA, aB)
                        })
                    } catch (aC) {}
                }
            } else {
                try {
                    googletag.cmd.push(function() {
                        googletag.pubads().setTargeting(aA, aB)
                    })
                } catch (aC) {}
            }
        },
        clear: function(az) {
            az = H(az);
            try {
                googletag.cmd.push(function() {
                    googletag.pubads().clear(az)
                })
            } catch (aA) {}
        },
        refresh: function ad(aB) {
            var aF = null , az, aA = Date.now(), aD = X ? aA - X : null ;
            aB = aB || {};
            e.log("refresh called");
            if (U.isRenderingCheck && f) {
                e.log("tried to refresh, but ads are still rendering.", "isRenderingTimeout", T);
                return
            }
            F();
            if ("FGHIJ".indexOf(Settings.testBucket) !== -1) {
                ap(aB.slots)
            } else {
                d()
            }
            L();
            try {
                W()
            } catch (aE) {}
            al();
            b();
            z.publish("slots:unload");
            if (y) {
                az = [];
                for (var aC = 0; aC < ay.length; aC++) {
                    az.push({
                        type: ay[aC].type,
                        fill: true
                    })
                }
                g(az)
            }
            if (aB.slots) {
                aF = H(aB.slots)
            }
            e.log("refreshing", aF);
            Zimbio.Ads.refresh({
                slots: aF
            });
            if (f) {
                ah("refresh", "msg=refresh called before slots rendered;iab=" + String(Settings.isAdBlocking) + ";refreshTime=" + String(aD) + ";")
            }
            K();
            aj();
            X = aA
        },
        fill: function(az) {
            Zimbio.Ads.fill(az)
        },
        hasActiveBid: function(aA) {
            var az = J;
            if (Object.keys(az).indexOf(aA) === -1) {
                return false
            }
            return Boolean(az[aA].activeBid)
        },
        setActiveBid: function ai(aB, az) {
            var aA = J;
            if (Object.keys(aA).indexOf(aB) === -1) {
                e.error("partner not found.", aB);
                return
            }
            if (!az || !az.slot || !az.cpm) {
                e.error("bidObject data missing", aB, (az ? az : false));
                return
            }
            e.log(aB, az.slot, az);
            aA[aB].activeBid = true;
            az.partner = az.partner || aB;
            l[az.slot] = l[az.slot] || [];
            l[az.slot].push(az)
        },
        setBidTargeting: function(aA) {
            if (!aA) {
                return "none"
            }
            var aC = 0
              , az = 0
              , aB = 0;
            if (this.discounts[aA.bidder]) {
                aB = Math.min(Math.max(this.discounts[aA.bidder], 0), 100) / 100
            }
            e.log("discount", aB, aA.bidder, aA);
            az = Math.min(aA.bid * (1 - aB), 2000);
            if (az == 0) {
                return "none"
            } else {
                if (az <= 500) {
                    aC = Math.round(az / 5) * 5
                } else {
                    aC = Math.round(az / 25) * 25
                }
            }
            e.log("return", "s" + aA.size + "p" + aC);
            return "s" + aA.size + "p" + aC
        },
        init: function(az) {
            B = true;
            U = $.extend(I, az);
            e.log(U);
            ay = ax(U.slots);
            w();
            q();
            t();
            ak()
        },
        _isInitialized: function() {
            return B
        },
        _getSlotObjectMap: function() {
            return ae
        },
        _setIsRendering: K,
        _clearIsRendering: O,
        _clearBids: b,
        _getSlotObjectById: am,
        _getSlotObjectByType: c,
        _setSlotTargeting: ap
    }
})();
Zimbio.RobinBidder = Class.extend((function() {
    var b = Zimbio.Robin
      , k = Zimbio.Ads;
    return {
        init: function() {
            this.defaults = {
                is_loaded: false,
                is_fetching: false,
                maximizeFill: false,
                expirationTimeout: 60,
                customProcess: false,
                delayFirstBid: false,
                loadCreatives: false,
                expireDuplicates: false,
                fetchEarly: false,
                activeBidStack: {},
                fetchingTimeoutId: {},
                activeSlots: []
            };
            $.extend(this, this.defaults, this.params);
            this.setDebugger();
            this.log();
            this.createSlots();
            this.updateSlots();
            if (!this.delayFirstBid) {
                this.getBid()
            }
            if (!this.is_loaded) {
                this.setListeners()
            }
            this.success("initalized")
        },
        getBid: function() {
            this.markTime("bidRequest");
            this.startFetching();
            if (!this.maximizeFill) {
                this.clearActiveBidStack()
            }
        },
        clearActiveBidStack: function() {
            this.log();
            for (var t in this.activeBidStack) {
                var q = this.activeBidStack[t];
                for (var s = 0; s < q.length; s++) {
                    var r = q[s];
                    if (!r.expired) {
                        r.expired = true;
                        r.cleared = true;
                        this.success("cleared bid:", r.toString())
                    }
                }
            }
        },
        storeBid: function(q) {
            this.success("created bid object", q.toString());
            var r = q.slot;
            this.activeBidStack[r] = this.activeBidStack[r] || [];
            this.activeBidStack[r].push(q)
        },
        processBid: function(r, q) {
            this.log(r, q)
        },
        setDebugger: function() {
            $.extend(true, this, new Debugger({
                key: "debug_ads_" + this.bidderId,
                level: "shallow",
                prefix: this.bidderId.toUpperCase(),
                trace: true
            }))
        },
        setListeners: function() {
            this.log();
            b.attach({
                bidder: this.bidderId,
                update: this.update.bind(this),
                updateSlots: this.updateSlots.bind(this)
            });
            this.is_loaded = true
        },
        updateCallback: function d(q) {
            this.markTime("bidResponse");
            b.sendResponseBeacon(this.bidderId, this.timer);
            this.stopFetching();
            this.processBids(q)
        },
        getMaxBid: function m(q) {
            if (!(q in this.activeBidStack)) {
                return
            }
            this.expireBids(q);
            var r = this.activeBidStack[q].filter(function(t) {
                return !t.expired
            });
            var s = this.sortBidsByPrice(r);
            return s.length ? s[0] : false
        },
        getAdId: function(q) {
            var s = Math.floor(Math.random() * Math.pow(10, 10));
            if (q) {
                return q + "-" + s
            }
            return s
        },
        expireBids: function e(s) {
            this.log(s);
            if (!s || !(s in this.activeBidStack)) {
                return
            }
            var r = new Date().getTime()
              , q = this;
            var u = ((parseInt(this.expirationTimeout) || 60) - 5) * 1000;
            this.log("expiring bids. expiration timeout:", u);
            this.activeBidStack[s].forEach(function(t) {
                if ((r - t.timestamp) >= u && !t.expired) {
                    t.expired = true;
                    q.success("expire bid:", t.toString())
                }
            })
        },
        expireBid: function g(u, w) {
            var s = this.getBidById(w);
            s.expired = true;
            s.used = true;
            this.success("expire bid, and mark as used: ", s.toString());
            if (this.expireDuplicates) {
                for (var v in this.activeBidStack) {
                    var r = this.activeBidStack[v];
                    for (var t = 0; t < r.length; t++) {
                        var q = r[t];
                        if (q.creativeId == s.creativeId && !q.expired) {
                            q.expired = true;
                            this.success("expire duplicate bid", q)
                        }
                    }
                }
            }
        },
        sortBidsByPrice: function a(q) {
            this.log(q);
            if ($.isArray(q)) {
                return q.sort(function(s, r) {
                    return r.cpm - s.cpm
                })
            }
        },
        startFetching: function j() {
            this.log();
            this.is_fetching = true;
            this.fetchingTimeoutId = setTimeout(function() {
                this.is_fetching = false
            }, 3000)
        },
        stopFetching: function l() {
            this.log();
            this.is_fetching = false;
            clearTimeout(this.fetchingTimeoutId)
        },
        update: function() {
            this.log();
            if (this.fetchEarly) {
                this.log("skip update since fetchEarly=true");
                return
            }
            if (this.is_fetching || b.hasActiveBid(this.bidderId)) {
                this.log("Refusing to update. is_fetching=" + this.is_fetching + ", has_active_bid=" + b.hasActiveBid(this.bidderId));
                return
            }
            this.clearTargeting();
            this.getBid()
        },
        processBids: function o(q) {
            this.log();
            for (var s = 0; s < this.activeSlots.length; s++) {
                var r = this.activeSlots[s];
                var t = this.processBid(r.type, q);
                if (t) {
                    this.storeBid(t)
                }
            }
        },
        setActiveSlotTargeting: function c() {
            this.log();
            for (var s = 0; s < this.activeSlots.length; s++) {
                var r = this.activeSlots[s]
                  , q = this.getMaxBid(r.type);
                if (q) {
                    this.setTargeting(r, q)
                }
            }
        },
        setSlotTargeting: function p(t) {
            this.log();
            for (var s = 0; s < t.length; s++) {
                var r = t[s]
                  , q = this.getMaxBid(r.type);
                if (q) {
                    this.setTargeting(r, q)
                }
            }
        },
        setTargeting: function h(s, q) {
            var t = k.slots;
            this.log("winning bid for", s.type, q.toString());
            var r = b.setBidTargeting({
                bidder: this.bidderId,
                bid: q.cpm,
                size: q.size
            });
            if (this.targetingParams.bid) {
                this.success("id:", s.id, this.targetingParams.bid + "=" + r);
                b.setTargeting(s.id, this.targetingParams.bid, r)
            }
            if (this.targetingParams.ad) {
                this.success("id:", s.id, this.targetingParams.ad + "=" + q.id);
                b.setTargeting(s.id, this.targetingParams.ad, q.id)
            }
            var u = parseFloat(r.split("p")[1]) || 0;
            b.setActiveBid(this.bidderId, {
                slot: s.type,
                cpm: q.cpm,
                netCPM: u,
                size: q.size,
                adId: q.id
            })
        },
        renderAd: function n(t, u) {
            this.log(t, u);
            if (!u) {
                this.trackError("renderAd", "msg=no adId passed;id=" + u + ";");
                return
            }
            var q = this.getBidById(u);
            if (!q) {
                var r = "msg=no bid found;";
                r += "id=" + u + ";";
                this.trackError("renderAd", r);
                return
            } else {
                this.success(q.slot)
            }
            if (q.expired && (this.maximizeFill || !q.cleared)) {
                var r = "msg=bid was expired;";
                r += "id=" + u + ";";
                r += "expired=" + (q.expired ? "1" : "0") + ";";
                r += "used=" + (q.used ? "1" : "0") + ";";
                r += "cleared=" + (q.cleared ? "1" : "0") + ";";
                this.trackError("renderAd", r)
            }
            if (q.trackingUrl) {
                this.log("load pixel: ", q.slot, q.trackingUrl);
                Loader.getImage(q.trackingUrl)
            }
            if (this.maximizeFill) {
                this.expireBid(q.slot, q.id)
            }
            if (this.loadCreatives) {
                this.loadCreative(t, q.adm)
            }
        },
        loadCreative: function(s, q) {
            this.log("loadCreative: ", decodeURIComponent(q));
            if (!q) {
                this.trackError("loadCreative", "msg=no creative found;");
                return
            }
            var r = '<div id="ad-container">' + decodeURIComponent(q) + "</div>";
            s.open();
            s.write(r);
            s.close()
        },
        clearTargeting: function f() {
            this.log();
            var s = k.slots;
            for (var r in this.bidderSlots) {
                if (s[r]) {
                    for (var q in this.targetingParams) {
                        try {
                            s[r].clearTargeting(this.targetingParams[q]);
                            this.log(r, this.targetingParams[q], s[r].getTargeting(this.targetingParams[q]))
                        } catch (u) {
                            this.trackError("clearTargeting", "msg=failed to clear targeting;slot=" + r + ";")
                        }
                    }
                }
            }
        },
        hashCode: function(t) {
            var s = 0, r;
            if (t.length == 0) {
                return s
            }
            for (var q = 0; q < t.length; q++) {
                r = t.charCodeAt(q);
                s = ((s << 5) - s) + r;
                s = s & s
            }
            return s >>> 0
        },
        getBidById: function(t) {
            for (var r in this.activeBidStack) {
                var s = this.activeBidStack[r];
                for (var q = 0; q < s.length; q++) {
                    if (s[q].id == t) {
                        return s[q]
                    }
                }
            }
            return null
        },
        getFloor: function(u) {
            var w = b
              , x = 0
              , t = 0
              , v = w.getMaxBids(u)
              , q = Math.min(Math.max((w.floorBoosts[this.bidderId]) ? w.floorBoosts[this.bidderId] : w.floors.floorBoost, -100), 100) / 100
              , y = w.discounts[this.bidderId] ? Math.min(Math.max(w.discounts[this.bidderId], 0), 100) / 100 : 0;
            if (v && v.length) {
                t = v[v.length - 1] || 0;
                x = Math.round(t * (1 + q) / (1 - y)) / 100
            }
            this.log(u, "floor", x, "maxBid", t, "floorBoost", q, "discount", y);
            return x
        },
        trackError: function(r, q) {
            var s = "bidder=" + this.bidderId + ";" + q;
            this.error("trackError", r, s);
            Track.Beacon.sendEvent("robinError", "bidder." + r, s)
        },
        createSlots: function() {
            this.log()
        },
        updateSlots: function() {
            this.log()
        },
    }
})());
Zimbio.RobinBid = (function() {
    function a(c) {
        var d = ["cpm", "size", "slot", "id"];
        for (var b = 0; b < d.length; b++) {
            if (typeof c[d[b]] === "undefined") {
                console.error("Zimbio.RobinBidder.Bid requires: " + d[b])
            }
        }
        this.cpm = c.cpm;
        this.size = c.size;
        this.slot = c.slot;
        this.id = String(c.id);
        this.timestamp = c.timestamp || Date.now();
        this.creativeId = c.creativeId || null ;
        this.trackingUrl = c.trackingUrl || null ;
        this.adm = c.adm || null ;
        this.expired = false;
        this.used = false;
        this.cleared = false
    }
    a.prototype.toString = function() {
        return ["\n\tcpm: " + this.cpm, "\n\tsize: " + this.size, "\n\tslot: " + this.slot, "\n\tid: " + this.id, "\n\tcreativeId: " + this.creativeId, "\n\ttimestamp: " + this.timestamp, "\n\texpired: " + this.expired, "\n\tused: " + this.used, "\n\tcleared: " + this.cleared].join(", ")
    }
    ;
    return a
})();
Zimbio.Ads = Zimbio.Ads || {};
Zimbio.Ads.AmazonBidder = Zimbio.RobinBidder.extend((function() {
    var c = Zimbio.Robin
      , a = "http://c.amazon-adsystem.com/aax2/amzn_ads.js"
      , d = "3234"
      , b = [0, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50]
      , h = {
        a3x2: "300x250",
        a3x6: "300x600",
        a9x2: "970x250",
        a1x6: "160x600",
        a7x9: "728x90",
        m3x2: "300x250",
        m3x5: "320x50",
        m3x6: "300x600",
        m7x9: "728x90"
    }
      , k = {
        topMREC: ["a3x2", "a3x6", "a1x6", "m3x2", "m3x6"],
        pushdown: ["a9x2", "a7x9", "m7x9"],
        interstitial: ["a9x2", "a3x2", "a3x6", "a1x6", "m3x2", "m3x6"],
        mobileBillboard: ["m3x5"],
        mobileCenterMREC: ["m3x2"],
        mobileSwipeLeaderboard: ["m3x5"],
        mobileSwipeMREC: ["m3x2"]
    };
    return {
        params: {
            bidderId: "amzn",
            targetingParams: {
                bid: "amznslots"
            },
            delayFirstBid: true
        },
        init: function() {
            this._super();
            Loader.getScript(a, this.getBid.bind(this), true)
        },
        createSlots: function f() {
            this.activeSlots = c.getActiveSlots();
            this.log(this.activeSlots)
        },
        updateSlots: function g() {
            this.activeSlots = c.getActiveSlots();
            this.log("active slots", this.activeSlots)
        },
        getBid: function() {
            this._super();
            try {
                amznads.getAdsCallback(d, this.updateCallback.bind(this))
            } catch (l) {}
        },
        convertBids: function(p) {
            var q = [];
            var m = (c.discounts[this.bidderId]) ? Math.min(Math.max(c.discounts[this.bidderId], 0), 100) / 100 : 0;
            for (var l in p) {
                var r = p[l];
                var n = r.split("p");
                if (!n || n.length != 2) {
                    continue
                }
                var o = b[n[1]];
                q.push({
                    cpm: o,
                    netCPM: Math.min(o * (1 - m), 2000),
                    size: h[n[0]],
                    sizeId: n[0],
                    adId: r
                })
            }
            return q
        },
        processBids: function j() {
            this.log();
            googletag.cmd.push(function() {
                var u = amznads.getTokens() || false;
                this.log("amzn tokens", u);
                if (u && u.length) {
                    this.log("setTargeting", this.targetingParams.bid, u);
                    googletag.pubads().setTargeting(this.targetingParams.bid, u);
                    try {
                        var o = this.convertBids(u);
                        this.log("converted Bids", o);
                        for (var r in this.activeSlots) {
                            var s = this.activeSlots[r].type
                              , m = k[s]
                              , l = {};
                            for (var q in o) {
                                var n = o[q];
                                if ($.inArray(n.sizeId, m) != -1) {
                                    if (!(l.cpm) || (n.cpm > l.cpm)) {
                                        l = n
                                    }
                                }
                            }
                            this.log("matchedBid", s, l);
                            if (!(l.cpm)) {
                                continue
                            }
                            c.setActiveBid(this.bidderId, {
                                slot: s,
                                cpm: l.cpm,
                                netCPM: l.netCPM,
                                size: l.size,
                                adId: l.adId
                            })
                        }
                    } catch (p) {
                        this.error("couldnt convert bids")
                    }
                }
            }
            .bind(this))
        },
        clearTargeting: function e() {
            this.log();
            googletag.cmd.push(function() {
                this.log(this.targetingParams.bid);
                googletag.pubads().clearTargeting(this.targetingParams.bid)
            }
            .bind(this))
        }
    }
})());
Zimbio.Ads = Zimbio.Ads || {};
Zimbio.Ads.AppNexusBidder = Zimbio.RobinBidder.extend((function() {
    var d = Zimbio.Robin
      , c = "http://ib.adnxs.com/jpt";
    return {
        params: {
            bidderId: "apnx",
            targetingParams: {
                bid: "apnx_bid",
                ad: "apnx_adId"
            },
            maximizeFill: true,
            loadCreatives: true,
            expireDuplicates: true,
            fetchEarly: true
        },
        bidderPlacements: {
            Livingly: {
                pushdown: 5410506,
                topMREC: 5410464,
                interstitial: 5431161,
                mobileBillboard: 583530,
                mobileCenterMREC: 5835337,
                mobileSwipeLeaderboard: 583530,
                mobileSwipeMREC: 5835337,
                leftRail: 9495003
            },
            Lonny: {
                pushdown: 5410465,
                topMREC: 5410523,
                interstitial: 5431174,
                mobileBillboard: 5835294,
                mobileCenterMREC: 5835293,
                mobileSwipeLeaderboard: 5835294,
                mobileSwipeMREC: 5835293,
                leftRail: 9495030
            },
            StyleBistro: {
                pushdown: 5440007,
                topMREC: 5435452,
                interstitial: 5440010,
                mobileBillboard: 5835215,
                mobileCenterMREC: 5835200,
                mobileSwipeLeaderboard: 5835215,
                mobileSwipeMREC: 5835200,
                leftRail: 9495031
            },
            Zimbio: {
                pushdown: 5410481,
                topMREC: 5410463,
                interstitial: 5431192,
                mobileBillboard: 5835043,
                mobileCenterMREC: 5835041,
                mobileSwipeLeaderboard: 5835043,
                mobileSwipeMREC: 5835041,
                leftRail: 9495045
            }
        },
        bidderSlots: {
            topMREC: {
                placement: "",
                sizes: ["300x250", "300x600", "160x600"]
            },
            pushdown: {
                placement: "",
                sizes: ["728x90", "970x90"]
            },
            interstitial: {
                placement: "",
                sizes: ["970x250", "300x250", "300x600"]
            },
            mobileBillboard: {
                placement: "",
                sizes: ["320x50"]
            },
            mobileCenterMREC: {
                placement: "",
                sizes: ["300x250"]
            },
            mobileSwipeLeaderboard: {
                placement: "",
                sizes: ["320x50"]
            },
            mobileSwipeMREC: {
                placement: "",
                sizes: ["300x250"]
            },
            leftRail: {
                placement: "",
                sizes: ["160x600"]
            }
        },
        createSlots: function e() {
            for (var g in this.bidderSlots) {
                $.extend(this.bidderSlots[g], {
                    placement: this.bidderPlacements[Settings.domain][g],
                })
            }
            this.log(this.bidderSlots)
        },
        updateSlots: function f() {
            this.activeSlots = d.getActiveSlots();
            this.log("active slots", this.activeSlots)
        },
        getBid: function b() {
            this._super();
            this.activeSlots.forEach(function(g) {
                var h = g.type
                  , m = this.bidderSlots[h];
                if (!m) {
                    return
                }
                var k = m.sizes
                  , j = 0;
                var n = "apnx_" + h;
                this[n] = function(o) {
                    var p = {
                        type: h,
                        bid: o || {}
                    };
                    Zimbio.Ads.AppNexus.updateCallback(p)
                }
                ;
                this.log("temporary callback name:", n);
                var l = {
                    id: m.placement,
                    size: k[0],
                    referrer: encodeURIComponent(window.location.href),
                    firstTouch: d.getFirstTouch() ? 1 : 0,
                    bucket: Settings.testBucket,
                    ext_inv_code: Settings.testBucket
                };
                if (k.length > 1) {
                    l.promo_sizes = k.slice(1).join(",")
                }
                j = this.getFloor(h);
                if (j) {
                    l.reserve = j.toFixed(2)
                }
                $.ajax({
                    type: "GET",
                    url: c,
                    data: l,
                    jsonpCallback: "Zimbio.Ads.AppNexus." + n,
                    dataType: "jsonp"
                })
            }, this)
        },
        processBids: function a(l) {
            this.log(l);
            var h = l.bid.result
              , k = l.type
              , g = null ;
            for (var j = 0; j < this.activeSlots.length; j++) {
                if (this.activeSlots[j].type == k) {
                    g = this.activeSlots[j];
                    break
                }
            }
            if (!g) {
                this.warn("Tried to process bid for inactive slot.");
                return
            }
            var m = this.processBid(g.type, h);
            if (m) {
                this.storeBid(m)
            }
        },
        buildCreative: function(g) {
            return '<iframe src="' + g.ad + '" width="' + g.width + '" height="' + g.height + '" scrolling="no" frameborder="none" marginheight="0" marginwidth="0"></iframe>'
        },
        processBid: function(l, h) {
            this._super(l, h);
            if (!h || !h.cpm) {
                this.log("bid invalid, empty, or zero", l);
                return
            }
            this.log(l, h);
            var k = h.cpm / 100
              , g = this.getAdId(l)
              , n = h.creative_id
              , j = h.width + "x" + h.height;
            var m = new Zimbio.RobinBid({
                cpm: k,
                id: String(g),
                size: j,
                slot: l,
                adm: this.buildCreative(h),
                creativeId: String(n)
            });
            return m
        },
        init: function() {
            this._super()
        }
    }
})());
Zimbio.Ads = Zimbio.Ads || {};
Zimbio.Ads.OpenXBidder = Zimbio.RobinBidder.extend((function() {
    var c = Zimbio.Robin
      , b = false
      , a = "http://livingly-d.openx.net/w/1.0/arj"
      , d = {
        Livingly: {
            pushdown: "538037181",
            topMREC: "538037180",
            leftRail: "538590623",
            interstitial: "538037180",
            mobileBillboard: "538152389",
            mobileCenterMREC: "538152388",
            mobileSwipeLeaderboard: "538152389",
            mobileSwipeMREC: "538152388"
        },
        Lonny: {
            pushdown: "538037183",
            topMREC: "538037184",
            leftRail: "538590620",
            interstitial: "538037184",
            mobileBillboard: "538152387",
            mobileCenterMREC: "538152386",
            mobileSwipeLeaderboard: "538152387",
            mobileSwipeMREC: "538152386"
        },
        StyleBistro: {
            pushdown: "538037182",
            topMREC: "538035360",
            leftRail: "538590626",
            interstitial: "538035360",
            mobileBillboard: "538152385",
            mobileCenterMREC: "538152384",
            mobileSwipeLeaderboard: "538152385",
            mobileSwipeMREC: "538152384"
        },
        Zimbio: {
            pushdown: "538037187",
            topMREC: "538037185",
            leftRail: "538590631",
            interstitial: "538037185",
            mobileBillboard: "538152383",
            mobileCenterMREC: "538152382",
            mobileSwipeLeaderboard: "538152383",
            mobileSwipeMREC: "538152382"
        }
    };
    return {
        params: {
            bidderId: "opnx",
            targetingParams: {
                bid: "opnx_bid",
                ad: "opnx_adId"
            },
            loadCreatives: true,
            maximizeFill: true,
            expireDuplicates: true,
            fetchEarly: true
        },
        bidderSlots: {
            pushdown: {
                placement: "",
                sizes: ["728x90"]
            },
            topMREC: {
                placement: "",
                sizes: ["300x250", "300x600", "160x600"]
            },
            leftRail: {
                placement: "",
                sizes: ["160x600"]
            },
            interstitial: {
                placement: "",
                sizes: ["300x250", "300x600", "160x600"]
            },
            mobileBillboard: {
                placement: "",
                sizes: ["320x50"]
            },
            mobileCenterMREC: {
                placement: "",
                sizes: ["300x250"]
            },
            mobileSwipeLeaderboard: {
                placement: "",
                sizes: ["320x50"]
            },
            mobileSwipeMREC: {
                placement: "",
                sizes: ["300x250"]
            }
        },
        createSlots: function e() {
            for (var g in this.bidderSlots) {
                this.bidderSlots[g].placement = d[Settings.domain][g];
                this.bidderSlots[g].type = g
            }
            this.log("bidderSlots", this.bidderSlots)
        },
        updateSlots: function f() {
            this.activeSlots = c.getActiveSlots();
            this.log("active slots", this.activeSlots)
        },
        getBid: function() {
            this._super();
            var g = []
              , k = [];
            for (var n = 0; n < this.activeSlots.length; n++) {
                var p = this.activeSlots[n].type
                  , j = this.bidderSlots[p].placement
                  , o = this.getFloor(p);
                g.push(j);
                if (o) {
                    k.push(j + ":" + parseFloat(o).toFixed(2))
                }
            }
            if (!g.length) {
                this.error("No placement ids for active slots.");
                return
            }
            var h = [$(window).width(), $(window).height()].join("x")
              , l = [window.screen.width, window.screen.height].join("x");
            var m = {
                o: Math.floor(Math.random() * Math.pow(10, 10)),
                auid: g.join(","),
                dims: h,
                res: l,
                ch: "UTF-8",
                tz: new Date().getTimezoneOffset(),
                ws: h,
                "c.bucket": Settings.testBucket
            };
            if ("J".indexOf(Settings.testBucket) !== -1) {
                m.aumf = k.join(",")
            }
            $.ajax({
                type: "GET",
                url: a,
                dataType: "jsonp",
                data: m
            }).done(this.updateCallback.bind(this))
        },
        getBidderPlacementById: function(h) {
            for (var g in this.bidderSlots) {
                var j = this.bidderSlots[g];
                if (j.placement == h) {
                    return j
                }
            }
        },
        processBids: function(g) {
            g = g || {};
            this.log(g);
            if (!g || !g.ads) {
                this.log("Bid response was empty.");
                return
            }
            if (!b) {
                this.log("Firing cookie sync pixel.");
                Loader.getImage(g.ads.pixels);
                b = true
            }
            if (!g.ads.ad || !g.ads.ad.length) {
                this.log("No bids available.");
                return
            }
            var l = g.ads.ad;
            for (var k = 0; k < l.length; k++) {
                var m = this.getBidderPlacementById(l[k].adunitid)
                  , h = l[k]
                  , j = m.type;
                if (!m) {
                    this.error("Bid received for non-existent placement.");
                    continue
                }
                this.log("Raw bid for", j, h);
                var n = this.processBid(j, h);
                if (n) {
                    this.storeBid(n)
                }
            }
        },
        processBid: function(o, h) {
            var n = Math.round((h.pub_rev / 100) * 10)
              , m = this.getAdId(o)
              , k = h.html || h.ad_url
              , g = h.adid || null ;
            if (!h.creative || !h.creative.length) {
                this.log("No creative associated with bid.");
                return
            }
            var l = h.creative[0];
            size = [l.width, l.height].join("x");
            if (h.auct_win_is_deal) {
                var p = n * 0.85;
                this.log("apply discount for opnx pmp deal", n, p);
                n = p
            }
            var j = new Zimbio.RobinBid({
                cpm: n,
                id: m,
                size: size,
                slot: o,
                adm: k,
                creativeId: g
            });
            return j
        }
    }
})());
Zimbio.Ads = Zimbio.Ads || {};
Zimbio.Ads.PubmaticBidder = Zimbio.RobinBidder.extend((function() {
    var k = Zimbio.Robin
      , q = "http://bid.pubmatic.com/AdServer/AdServerServlet"
      , l = "http://ads.pubmatic.com/AdServer/js/user_sync.html"
      , s = window.location.href.indexOf("http://m.") === 0 ? "mobile" : "desktop"
      , h = 109701
      , n = {
        mobile: {
            Livingly: 120490,
            Lonny: 120491,
            StyleBistro: 120489,
            Zimbio: 120488
        },
        desktop: {
            Livingly: 109706,
            Lonny: 109707,
            StyleBistro: 109705,
            Zimbio: 109704
        }
    }
      , r = {
        Livingly: {
            pushdown: 367458,
            topMREC: 367457,
            topMRECFlexHalf: 664598,
            topMRECFlexSky: 664582,
            leftRail: 857729,
            interstitial: 367572,
            mobileBillboard: 435692,
            mobileCenterMREC: 435691,
            mobileSwipeLeaderboard: 435692,
            mobileSwipeMREC: 435691
        },
        Lonny: {
            pushdown: 367460,
            topMREC: 367461,
            topMRECFlexHalf: 664599,
            topMRECFlexSky: 664581,
            leftRail: 857730,
            interstitial: 367573,
            mobileBillboard: 435694,
            mobileCenterMREC: 435695,
            mobileSwipeLeaderboard: 435694,
            mobileSwipeMREC: 435695
        },
        StyleBistro: {
            pushdown: 367455,
            topMREC: 367450,
            topMRECFlexHalf: 664597,
            topMRECFlexSky: 664583,
            leftRail: 857728,
            interstitial: 367571,
            mobileBillboard: 435697,
            mobileCenterMREC: 435696,
            mobileSwipeLeaderboard: 435697,
            mobileSwipeMREC: 435696
        },
        Zimbio: {
            pushdown: 367444,
            topMREC: 367434,
            topMRECFlexHalf: 664596,
            topMRECFlexSky: 664584,
            leftRail: 857727,
            interstitial: 367560,
            mobileBillboard: 435699,
            mobileCenterMREC: 435698,
            mobileSwipeLeaderboard: 435699,
            mobileSwipeMREC: 435698
        }
    }
      , b = {
        rs: 2,
        operId: 102,
        pubId: h,
        pageURL: window.location.hostname,
        timezone: encodeURIComponent(new Date().getTimezoneOffset() / 60 * -1),
        screenResolution: e(),
        inIframe: 1,
        adVisibility: 1
    }
      , a = {
        topMREC: ["topMRECFlexHalf", "topMRECFlexSky"]
    };
    function e() {
        if (window.screen.availHeight && window.screen.availWidth) {
            return window.screen.availWidth + "x" + window.screen.availHeight
        } else {
            return "-1x-1"
        }
    }
    function c() {
        var v = new Date()
          , t = [v.getFullYear(), (v.getMonth() + 1), v.getDate()]
          , u = [v.getHours(), v.getMinutes(), v.getSeconds()];
        return t.join("-") + " " + u.join(":")
    }
    function m() {
        $(function() {
            var t = document.createElement("iframe");
            t.setAttribute("height", 0);
            t.setAttribute("width", 0);
            t.setAttribute("src", l + "?p=" + h + "&s=" + n[s][Settings.domain]);
            document.body.appendChild(t)
        })
    }
    return {
        defaultBidParams: b,
        params: {
            bidderId: "pubm",
            targetingParams: {
                bid: "pubm_bid",
                ad: "pubm_adId"
            },
            maximizeFill: true,
            loadCreatives: true,
            fetchEarly: true
        },
        getBid: function f() {
            this._super();
            for (var w = 0; w < this.activeSlots.length; w++) {
                var B = this.activeSlots[w].type
                  , t = this.bidderSlots[B]
                  , y = 0;
                if (!t) {
                    this.log("skipping getBid for", B);
                    continue
                }
                var v = $.extend(true, {}, b, {
                    rid: B + "|" + t.sizes[0][0] + "x" + t.sizes[0][1],
                    adId: t.placement,
                    siteId: n[s][Settings.domain],
                    kadwidth: t.sizes[0][0],
                    kadheight: t.sizes[0][1],
                    kltstamp: c(),
                    ranreq: Math.random(),
                    adPosition: "-1x-1"
                });
                y = this.getFloor(B);
                if (y) {
                    v.kadfloor = y.toFixed(2)
                }
                this.log("data", B, v);
                $.ajax({
                    type: "GET",
                    url: q,
                    dataType: "jsonp",
                    data: v
                });
                if (a[B]) {
                    var z = a[B];
                    for (var u = 0; u < z.length; u++) {
                        var A = this.bidderSlots[z[u]];
                        this.log("flex placement", A);
                        if (!A) {
                            continue
                        }
                        var x = $.extend(true, {}, b, {
                            rid: z[u] + "|" + A.sizes[0][0] + "x" + A.sizes[0][1],
                            adId: A.placement,
                            siteId: n[s][Settings.domain],
                            kadwidth: A.sizes[0][0],
                            kadheight: A.sizes[0][1],
                            kltstamp: c(),
                            ranreq: Math.random(),
                            adPosition: "-1x-1"
                        });
                        if (v.kadfloor) {
                            x.kadfloor = v.kadfloor
                        }
                        this.log("data", z[u], x);
                        $.ajax({
                            type: "GET",
                            url: q,
                            dataType: "jsonp",
                            data: x
                        })
                    }
                }
            }
        },
        processBids: function j(t) {
            this.log(t);
            if (!t || !t.PubMatic_Bid || !t.meta_data || !t.meta_data.rid) {
                return
            }
            var v = t.PubMatic_Bid, z = decodeURIComponent(t.meta_data.rid), y, u, x;
            z = z.split("|");
            if (!z || z.length < 2) {
                this.log("no acceptable rid", t.meta_data.rid, z);
                return
            }
            y = z[0] || null ;
            v.size = z[1] || null ;
            x = this.bidderSlots[y];
            if (x && x.flexParent) {
                y = x.flexParent
            }
            for (var w = 0; w < this.activeSlots.length; w++) {
                if (this.activeSlots[w].type == y) {
                    u = this.activeSlots[w]
                }
            }
            if (!u) {
                this.warn("Tried to process bid for inactive slot.");
                return
            }
            var A = this.processBid(u.type, v);
            if (A) {
                this.storeBid(A)
            }
        },
        processBid: function d(x, u) {
            this._super(x, u);
            if (!u || !u.ecpm || !u.size) {
                this.log("bid invalid, empty, no size, or zero", x);
                return
            }
            var w = u.ecpm * 100
              , t = this.getAdId(x)
              , v = u.size;
            var y = new Zimbio.RobinBid({
                cpm: w,
                id: t,
                size: v,
                slot: x,
                adm: u.creative_tag,
                trackingUrl: u.tracking_url
            });
            return y
        },
        bidderSlots: {
            pushdown: {
                placement: "",
                sizes: [[728, 90]]
            },
            topMREC: {
                placement: "",
                sizes: [[300, 250]]
            },
            topMRECFlexHalf: {
                placement: "",
                sizes: [[300, 600]],
                flexParent: "topMREC"
            },
            topMRECFlexSky: {
                placement: "",
                sizes: [[160, 600]],
                flexParent: "topMREC"
            },
            leftRail: {
                placement: "",
                sizes: [[160, 600]]
            },
            interstitial: {
                placement: "",
                sizes: [[300, 250]]
            },
            mobileBillboard: {
                placement: "",
                sizes: [[320, 50]]
            },
            mobileCenterMREC: {
                placement: "",
                sizes: [[300, 250]]
            },
            mobileSwipeLeaderboard: {
                placement: "",
                sizes: [[320, 50]]
            },
            mobileSwipeMREC: {
                placement: "",
                sizes: [[300, 250]]
            }
        },
        updateSlots: function g() {
            this.activeSlots = k.getActiveSlots();
            if (!this.activeSlots) {
                return
            }
            this.log("active slots", this.activeSlots)
        },
        createSlots: function p() {
            this.log();
            for (var t in this.bidderSlots) {
                this.bidderSlots[t].placement = r[Settings.domain][t]
            }
            this.log("bidderSlots", this.bidderSlots)
        },
        init: function o() {
            window.processPubMaticBid = this.updateCallback.bind(this);
            this._super();
            m()
        }
    }
})());
Zimbio.Ads = Zimbio.Ads || {};
Zimbio.Ads.SovrnBidder = Zimbio.RobinBidder.extend((function() {
    var b = Zimbio.Robin
      , c = "http://ap.lijit.com/rtb/bid"
      , l = "http://gslbeacon.lijit.com/beacon?"
      , a = {
        viewId: "livinglymedia1_auction_api",
        rand: 0,
        informer: 12594374,
        type: "fpads",
        loc: "",
        v: 1.2
    }
      , g = 1
      , j = {
        Livingly: {
            pushdown: "309771",
            topMREC: "309772",
            topMRECFlex: ["337626", "337632"],
            interstitial: "309773",
            mobileBillboard: "314552",
            mobileCenterMREC: "314551",
            mobileSwipeLeaderboard: "314552",
            mobileSwipeMREC: "314551",
            leftRail: "391820"
        },
        Lonny: {
            pushdown: "309765",
            topMREC: "309766",
            topMRECFlex: ["337628", "337631"],
            interstitial: "309767",
            mobileBillboard: "314550",
            mobileCenterMREC: "314549",
            mobileSwipeLeaderboard: "314550",
            mobileSwipeMREC: "314549",
            leftRail: "391819"
        },
        StyleBistro: {
            pushdown: "309778",
            topMREC: "309779",
            topMRECFlex: ["337625", "337633"],
            interstitial: "309780",
            mobileBillboard: "314548",
            mobileCenterMREC: "314547",
            mobileSwipeLeaderboard: "314548",
            mobileSwipeMREC: "314547",
            leftRail: "391821"
        },
        Zimbio: {
            pushdown: "309758",
            topMREC: "309759",
            topMRECFlex: ["337629", "337630"],
            interstitial: "309760",
            mobileBillboard: "314546",
            mobileCenterMREC: "314545",
            mobileSwipeLeaderboard: "314546",
            mobileSwipeMREC: "314545",
            leftRail: "391822"
        }
    }
      , f = {
        topMREC: "topMRECFlex"
    };
    return {
        params: {
            bidderId: "svrn",
            targetingParams: {
                bid: "svrn_bid",
                ad: "svrn_adId"
            },
            maximizeFill: true,
            loadCreatives: true,
            fetchEarly: true
        },
        bidderSlots: {
            pushdown: {
                placement: "",
                sizes: [728, 90]
            },
            topMREC: {
                placement: "",
                sizes: [300, 250]
            },
            topMRECFlex: {
                placement: "",
                sizes: [[300, 600], [160, 600]]
            },
            interstitial: {
                placement: "",
                sizes: [300, 250]
            },
            mobileBillboard: {
                placement: "",
                sizes: [320, 50]
            },
            mobileCenterMREC: {
                placement: "",
                sizes: [300, 250]
            },
            mobileSwipeLeaderboard: {
                placement: "",
                sizes: [320, 50]
            },
            mobileSwipeMREC: {
                placement: "",
                sizes: [300, 250]
            },
            leftRail: {
                placement: "",
                sizes: [160, 600]
            }
        },
        init: function m() {
            this._super();
            var n = "";
            $.extend(a, {
                rand: Math.floor(Math.random() * 1000),
                loc: document.location.host
            });
            n = l + $.param(a);
            this.log("send beacon. url: ", n);
            Loader.getImage(n)
        },
        createSlots: function e() {
            this.log();
            for (var n in this.bidderSlots) {
                this.bidderSlots[n].placement = j[Settings.domain][n]
            }
            this.log("bidderSlots", this.bidderSlots)
        },
        updateSlots: function() {
            this.activeSlots = b.getActiveSlots();
            this.log(this.activeSlots)
        },
        updateFlexLayout: function d() {
            if (Settings.isWide) {
                for (var n in j) {
                    j[n]["topMRECFlex"] = j[n]["topMRECFlex"].slice(0, 1)
                }
            }
        },
        getBid: function() {
            this._super();
            var z = {
                id: "lv" + g++,
                site: {
                    domain: document.location.host,
                    page: document.location.pathname
                },
                imp: []
            };
            for (var r = 0, o; r < this.activeSlots.length; r++) {
                o = this.activeSlots[r];
                if (this.bidderSlots[o.type]) {
                    var w = this.bidderSlots[o.type];
                    var q = {
                        id: o.type,
                        banner: {
                            w: w.sizes[0],
                            h: w.sizes[1]
                        },
                        tagid: w.placement
                    };
                    var t = this.getFloor(o.type);
                    if (t) {
                        q.bidfloor = t
                    }
                    z.imp.push(q);
                    if (f[o.type]) {
                        var u = this.bidderSlots[f[o.type]];
                        this.log("has flex sizes", o.type, f[o.type], u);
                        if (!u) {
                            continue
                        }
                        for (var v = 0; v < u.placement.length; v++) {
                            this.log("f", u.placement[v], u.sizes[v]);
                            var n = u.placement[v]
                              , y = u.sizes[v];
                            var x = {
                                id: o.type,
                                banner: {
                                    w: y[0],
                                    h: y[1]
                                },
                                tagid: n
                            };
                            if (t) {
                                x.bidfloor = t
                            }
                            z.imp.push(x)
                        }
                    }
                }
            }
            $.ajax({
                type: "GET",
                url: c,
                data: {
                    br: JSON.stringify(z)
                },
                jsonpCallback: "Zimbio.Ads.Sovrn.updateCallback",
                dataType: "jsonp"
            })
        },
        processBids: function k(n) {
            var q = (n && n.seatbid && n.seatbid.length) ? n.seatbid[0].bid : [];
            this.log("bids", q);
            if (!q.length) {
                return
            }
            for (var p = 0; p < q.length; p++) {
                var o = q[p];
                if (!o.impid) {
                    continue
                }
                var r = this.processBid(o.impid, o);
                if (r) {
                    this.storeBid(r)
                }
            }
        },
        processBid: function h(r, o) {
            this._super(r, o);
            if (!o || !o.price || !o.id) {
                this.log("bid is empty or 0. skipping");
                return
            }
            var q = o.price * 100
              , n = this.getAdId(r)
              , p = o.w + "x" + o.h;
            var s = new Zimbio.RobinBid({
                cpm: q,
                id: n,
                size: p,
                slot: r,
                adm: o.adm,
                trackingUrl: o.nurl
            });
            return s
        }
    }
})());
Zimbio.Ads = Zimbio.Ads || {};
Zimbio.Ads.AOLBidder = Zimbio.RobinBidder.extend((function() {
    var d = Zimbio.Robin
      , f = "9441.1"
      , b = {
        topMREC: [170, 529, 154],
        topMRECFlexHalf: [529],
        topMRECFlexSky: [154],
        leftRail: [154],
        pushdown: [225],
        interstitial: [170],
        mobileBillboard: [3055],
        mobileCenterMREC: [170],
        mobileSwipeLeaderboard: [3055],
        mobileSwipeMREC: [170]
    }
      , g = 0
      , e = {
        Livingly: {
            topMREC: 3689395,
            topMRECFlexHalf: 3943632,
            topMRECFlexSky: 3943586,
            leftRail: 3943586,
            pushdown: 3689394,
            interstitial: 3689395,
            mobileBillboard: 3752649,
            mobileCenterMREC: 3752650,
            mobileSwipeLeaderboard: 3752649,
            mobileSwipeMREC: 3752650
        },
        Lonny: {
            topMREC: 3009666,
            topMRECFlexHalf: 3943633,
            topMRECFlexSky: 3943583,
            leftRail: 3943583,
            pushdown: 3009665,
            interstitial: 3009666,
            mobileBillboard: 3752652,
            mobileCenterMREC: 3752651,
            mobileSwipeLeaderboard: 3752652,
            mobileSwipeMREC: 3752651
        },
        StyleBistro: {
            topMREC: 3009667,
            topMRECFlexHalf: 3943630,
            topMRECFlexSky: 3943585,
            leftRail: 3943585,
            pushdown: 3009668,
            interstitial: 3009667,
            mobileBillboard: 3752653,
            mobileCenterMREC: 3752654,
            mobileSwipeLeaderboard: 3752653,
            mobileSwipeMREC: 3752654
        },
        Zimbio: {
            topMREC: 3009675,
            topMRECFlexHalf: 3943631,
            topMRECFlexSky: 3943587,
            leftRail: 3943587,
            pushdown: 3009676,
            interstitial: 3009675,
            mobileBillboard: 3752655,
            mobileCenterMREC: 3752656,
            mobileSwipeLeaderboard: 3752655,
            mobileSwipeMREC: 3752656
        }
    }
      , c = {
        topMREC: ["topMRECFlexHalf", "topMRECFlexSky"]
    };
    return {
        params: {
            bidderId: "aolm",
            targetingParams: {
                bid: "aolm_bid",
                ad: "aolm_adId"
            },
            maximizeFill: true,
            loadCreatives: true,
            fetchEarly: true
        },
        bidderSlots: {
            topMREC: {},
            topMRECFlexHalf: {
                flexParent: "topMREC"
            },
            topMRECFlexSky: {
                flexParent: "topMREC"
            },
            leftRail: {},
            pushdown: {},
            interstitial: {},
            mobileBillboard: {},
            mobileCenterMREC: {},
            mobileSwipeLeaderboard: {},
            mobileSwipeMREC: {}
        },
        createSlots: function() {
            for (var h in this.bidderSlots) {
                $.extend(this.bidderSlots[h], {
                    placement: e[Settings.domain][h],
                    network: f,
                    pageID: g,
                    sizeID: b[h][0]
                })
            }
            this.log(this.bidderSlots)
        },
        updateSlots: function() {
            this.activeSlots = d.getActiveSlots();
            this.log("active slots", this.activeSlots)
        },
        getBidCallback: function(h) {
            return function(j) {
                var k = {
                    type: h,
                    bid: j
                };
                this.updateCallback(k)
            }
            .bind(this)
        },
        getBid: function() {
            this._super();
            var n = {
                type: "GET",
                xhrFields: {
                    withCredentials: true
                }
            };
            for (var k = 0; k < this.activeSlots.length; k++) {
                var q = this.activeSlots[k].type
                  , r = this.getBidUrl(q);
                if (!r) {
                    continue
                }
                var o = this.getBidCallback(q);
                $.ajax($.extend(true, n, {
                    url: r
                })).done(o);
                if (c[q]) {
                    var m = c[q];
                    for (var h = 0; h < m.length; h++) {
                        var p = m[h];
                        this.log("flex placement", p);
                        var l = this.getBidUrl(p);
                        if (!l) {
                            continue
                        }
                        $.ajax($.extend(true, n, {
                            url: l
                        })).done(o)
                    }
                }
            }
        },
        getBidUrl: function(h) {
            var k = "https://adserver.adtechus.com/pubapi/3.0/", l = "noperf=1;alias=;cmd=bid;cors=yes;", m, j = 0;
            if (!this.bidderSlots[h]) {
                return
            }
            m = this.bidderSlots[h];
            j = this.getFloor((m.flexParent) ? m.flexParent : h);
            if (j) {
                l += "bidfloor=" + j
            }
            return k + m.network + "/" + m.placement + "/" + m.pageID + "/" + m.sizeID + "/;" + l
        },
        processBids: function a(l) {
            this.log(l);
            var k = l.type
              , h = l.bid
              , m = (h && h.seatbid && h.seatbid.length) ? h.seatbid[0].bid : []
              , j = m[0];
            if (!k || !j || !j.ext || !j.ext.sizeid) {
                this.log("No bid.", k, j);
                return
            }
            this.log(k, j);
            var n = this.processBid(k, j);
            if (n) {
                this.storeBid(n)
            }
        },
        processBid: function(p, j) {
            this._super(p, j);
            if (!j || !j.price || !j.impid || !j.h || !j.w) {
                this.log("bid invalid, empty, or zero", p);
                return
            }
            var o = j.price * 100
              , m = this.getAdId(p)
              , q = j.w + "x" + j.h
              , l = j.adm;
            var n = l.match(/(pubadn=9003.1)/);
            if (n && n.length) {
                var h = o;
                o = o * 0.85;
                this.log("applying a discount of 15% to external aolm bid, pubadn =", n[1], h, o)
            }
            var k = new Zimbio.RobinBid({
                cpm: o,
                id: m,
                size: q,
                slot: p,
                adm: l
            });
            return k
        }
    }
})());
Zimbio.Ads = Zimbio.Ads || {};
Zimbio.Ads.IndexBidder = Zimbio.RobinBidder.extend((function() {
    var c = Zimbio.Robin
      , b = "http://as.casalemedia.com/cygnus"
      , e = "183777"
      , d = {
        Livingly: {
            topMREC: 176669,
            topMRECFlexHalf: 176671,
            topMRECFlexSky: 176672,
            pushdown: 176667,
            leftRail: 184683,
            interstitial: 176668,
            mobileBillboard: 176673,
            mobileCenterMREC: 176670,
            mobileSwipeLeaderboard: 176673,
            mobileSwipeMREC: 176670
        },
        Lonny: {
            topMREC: 176662,
            topMRECFlexHalf: 176664,
            topMRECFlexSky: 176665,
            pushdown: 176660,
            leftRail: 184684,
            interstitial: 176661,
            mobileBillboard: 176666,
            mobileCenterMREC: 176663,
            mobileSwipeLeaderboard: 176666,
            mobileSwipeMREC: 176663
        },
        StyleBistro: {
            topMREC: 176676,
            topMRECFlexHalf: 176678,
            topMRECFlexSky: 176679,
            pushdown: 176674,
            leftRail: 184685,
            interstitial: 176675,
            mobileBillboard: 176680,
            mobileCenterMREC: 176677,
            mobileSwipeLeaderboard: 176680,
            mobileSwipeMREC: 176677
        },
        Zimbio: {
            topMREC: 168880,
            topMRECFlexHalf: 176681,
            topMRECFlexSky: 176682,
            pushdown: 168787,
            leftRail: 184686,
            interstitial: 168881,
            mobileBillboard: 176683,
            mobileCenterMREC: 168882,
            mobileSwipeLeaderboard: 176683,
            mobileSwipeMREC: 168882
        }
    }
      , a = {
        topMREC: ["topMRECFlexHalf", "topMRECFlexSky"]
    };
    return {
        params: {
            bidderId: "indx",
            targetingParams: {
                bid: "indx_bid",
                ad: "indx_adId"
            },
            maximizeFill: false,
            loadCreatives: true,
            fetchEarly: true
        },
        createSlots: function() {
            for (var f in this.bidderSlots) {
                $.extend(this.bidderSlots[f], {
                    placement: d[Settings.domain][f],
                })
            }
            this.log(this.bidderSlots)
        },
        bidderSlots: {
            topMREC: {
                sizes: [300, 250]
            },
            topMRECFlexHalf: {
                sizes: [300, 600],
                flexParent: "topMREC"
            },
            topMRECFlexSky: {
                sizes: [160, 600],
                flexParent: "topMREC"
            },
            pushdown: {
                sizes: [728, 90]
            },
            leftRail: {
                sizes: [160, 600]
            },
            interstitial: {
                sizes: [970, 250]
            },
            mobileBillboard: {
                sizes: [320, 50]
            },
            mobileCenterMREC: {
                sizes: [300, 250]
            },
            mobileSwipeLeaderboard: {
                sizes: [320, 50]
            },
            mobileSwipeMREC: {
                sizes: [300, 250]
            }
        },
        getImpObjects: function(g) {
            this.log(g);
            var j = []
              , k = this.bidderSlots[g];
            if (!k) {
                return j
            }
            var f = {
                banner: {
                    w: k.sizes[0],
                    h: k.sizes[1]
                },
                ext: {},
                id: g + "-" + Math.round(Math.random() * Math.pow(10, 10))
            };
            var h = this.getFloor((k.flexParent) ? k.flexParent : g);
            if (h) {
                h = Math.round(h * 1000) / 1000;
                f.bidfloor = h;
                f.bidfloorcur = "USD";
                this.log("setting floor", g, h)
            }
            j.push(f);
            return j
        },
        getBidRequestObject: function(f) {
            this.log(f);
            return {
                id: f + "-" + Date.now(),
                imp: this.getImpObjects(f),
                site: {}
            }
        },
        updateSlots: function() {
            this.activeSlots = c.getActiveSlots();
            this.log("active slots", this.activeSlots)
        },
        getRequestData: function(f) {
            return {
                v: 7,
                cb: Math.round(Math.random() * Math.pow(10, 10)),
                pid: e,
                s: this.bidderSlots[f].placement,
                r: JSON.stringify(this.getBidRequestObject(f))
            }
        },
        sendRequest: function(f) {
            $.ajax({
                url: b,
                jsonp: "fn",
                dataType: "jsonp",
                data: f,
                success: this.updateCallback.bind(this)
            })
        },
        getBid: function() {
            this._super();
            for (var m = 0; m < this.activeSlots.length; m++) {
                var k = this.activeSlots[m]
                  , l = k.type
                  , n = this.getRequestData(l);
                this.sendRequest(n);
                if (a[l]) {
                    var h = a[l];
                    for (var g = 0; g < h.length; g++) {
                        var f = h[g]
                          , n = this.getRequestData(f);
                        this.log("flex placement", f);
                        this.sendRequest(n)
                    }
                }
            }
        },
        processBids: function(h) {
            h = h || {};
            this.log(h);
            var l = (h.seatbid && h.seatbid.length) ? h.seatbid[0].bid : []
              , f = h.id
              , k = l[0] || {}
              , o = f.split("-")[0]
              , g = null ;
            for (var j = 0; j < this.activeSlots.length; j++) {
                var n = this.activeSlots[j];
                if (n.type == o || (a[n.type] && a[n.type].indexOf(o) !== -1)) {
                    g = this.activeSlots[j];
                    break
                }
            }
            if (!g) {
                return
            }
            k.size = this.bidderSlots[o].sizes.join("x");
            var m = this.processBid(g.type, k);
            if (m) {
                this.storeBid(m)
            }
        },
        processBid: function(k, g) {
            this._super(k, g);
            g = g || {};
            if (!g.ext || !g.ext.pricelevel || !g.adm) {
                this.log("bid invalid, empty, or zero", k);
                return
            }
            var j = parseInt(g.ext.pricelevel.replace("_", ""))
              , f = this.getAdId(k)
              , h = g.size;
            var l = new Zimbio.RobinBid({
                cpm: j,
                id: f,
                size: h,
                slot: k,
                adm: g.adm
            });
            return l
        }
    }
})());
Zimbio.Ads = Zimbio.Ads || {};
Zimbio.Ads.BRealTimeBidder = Zimbio.RobinBidder.extend((function() {
    var d = Zimbio.Robin
      , c = "http://optimizedby.brealtime.com/jpt"
      , e = {
        Livingly: {
            pushdown: 6334502,
            topMREC: 6334503,
            interstitial: 6334504,
            mobileBillboard: 6334505,
            mobileCenterMREC: 6334506,
            mobileSwipeLeaderboard: 6334505,
            mobileSwipeMREC: 6334506,
            leftRail: 9494988
        },
        Lonny: {
            pushdown: 6334491,
            topMREC: 6334493,
            interstitial: 6334494,
            mobileBillboard: 6334495,
            mobileCenterMREC: 6334496,
            mobileSwipeLeaderboard: 6334495,
            mobileSwipeMREC: 6334496,
            leftRail: 9494987
        },
        StyleBistro: {
            pushdown: 6334497,
            topMREC: 6334498,
            interstitial: 6334499,
            mobileBillboard: 6334500,
            mobileCenterMREC: 6334501,
            mobileSwipeLeaderboard: 6334500,
            mobileSwipeMREC: 6334501,
            leftRail: 9494989
        },
        Zimbio: {
            pushdown: 6334507,
            topMREC: 6334508,
            interstitial: 6334509,
            mobileBillboard: 6334510,
            mobileCenterMREC: 6334511,
            mobileSwipeLeaderboard: 6334510,
            mobileSwipeMREC: 6334511,
            leftRail: 9494990
        }
    };
    return {
        params: {
            bidderId: "brtm",
            targetingParams: {
                bid: "brtm_bid",
                ad: "brtm_adId"
            },
            maximizeFill: true,
            loadCreatives: true,
            expireDuplicates: true,
            fetchEarly: true
        },
        bidderSlots: {
            topMREC: {
                placement: "",
                sizes: ["300x250", "300x600", "160x600"]
            },
            pushdown: {
                placement: "",
                sizes: ["728x90", "970x90"]
            },
            interstitial: {
                placement: "",
                sizes: ["970x250", "300x250", "300x600"]
            },
            mobileBillboard: {
                placement: "",
                sizes: ["320x50"]
            },
            mobileCenterMREC: {
                placement: "",
                sizes: ["300x250"]
            },
            mobileSwipeLeaderboard: {
                placement: "",
                sizes: ["320x50"]
            },
            mobileSwipeMREC: {
                placement: "",
                sizes: ["300x250"]
            },
            leftRail: {
                placement: "",
                sizes: ["160x600"]
            }
        },
        createSlots: function f() {
            for (var h in this.bidderSlots) {
                $.extend(this.bidderSlots[h], {
                    placement: e[Settings.domain][h],
                })
            }
            this.log(this.bidderSlots)
        },
        updateSlots: function g() {
            this.activeSlots = d.getActiveSlots();
            this.log("active slots", this.activeSlots)
        },
        getBid: function b() {
            this._super();
            this.activeSlots.forEach(function(j) {
                var k = j.type
                  , o = this.bidderSlots[k];
                if (!o) {
                    return
                }
                var m = o.sizes
                  , l = 0;
                var p = "brtm_" + k;
                this[p] = function(q) {
                    var r = {
                        type: k,
                        bid: q || {}
                    };
                    Zimbio.Ads.BRealTime.updateCallback(r)
                }
                ;
                this.log("temporary callback name:", p);
                var n = {
                    id: o.placement,
                    size: m[0],
                    referrer: encodeURIComponent(window.location.href)
                };
                if (m.length > 1) {
                    n.promo_sizes = m.slice(1).join(",")
                }
                n = $.param(n);
                var h = c + "?" + n;
                $.ajax({
                    type: "GET",
                    url: h,
                    jsonpCallback: "Zimbio.Ads.BRealTime." + p,
                    dataType: "jsonp"
                })
            }, this)
        },
        processBids: function a(m) {
            this.log(m);
            var j = m.bid.result
              , l = m.type
              , h = null ;
            for (var k = 0; k < this.activeSlots.length; k++) {
                if (this.activeSlots[k].type == l) {
                    h = this.activeSlots[k];
                    break
                }
            }
            if (!h) {
                this.warn("Tried to process bid for inactive slot.");
                return
            }
            var n = this.processBid(h.type, j);
            if (n) {
                this.storeBid(n)
            }
        },
        buildCreative: function(h) {
            return '<iframe src="' + h.ad + '" width="' + h.width + '" height="' + h.height + '" scrolling="no" frameborder="none" marginheight="0" marginwidth="0"></iframe>'
        },
        processBid: function(m, j) {
            this._super(m, j);
            if (!j || !j.cpm) {
                this.log("bid invalid, empty, or zero", m);
                return
            }
            this.log(m, j);
            var l = j.cpm / 100
              , h = this.getAdId(m)
              , o = j.creative_id
              , k = j.width + "x" + j.height;
            var n = new Zimbio.RobinBid({
                cpm: l,
                id: String(h),
                size: k,
                slot: m,
                adm: this.buildCreative(j),
                creativeId: String(o)
            });
            return n
        }
    }
})());
Zimbio.Ads = Zimbio.Ads || {};
Zimbio.Ads.TripleLiftBidder = Zimbio.RobinBidder.extend((function() {
    var b = Zimbio.Robin
      , g = "http://tlx.3lift.com/header/auction"
      , j = {
        Livingly: {
            topMREC: "livingly_desktop_300x250",
            topMRECFlexHalf: "livingly_rightrail_300x600",
            pushdown: "livingly_desktop_leaderboard",
            mobileCenterMREC: "livingly_mobile_300x250",
            mobileSwipeMREC: "livingly_mobile_300x250",
            mobileSwipeMRECWide: "livingly_320x250_mobile",
            mobileNativeB: "livingly_mobile_300x100"
        },
        Lonny: {
            topMREC: "lonny_desktop_300x250",
            topMRECFlexHalf: "lonny_rightrail_300x600",
            pushdown: "lonny_desktop_leaderboard",
            mobileCenterMREC: "lonny_mobile_300x250",
            mobileSwipeMREC: "lonny_mobile_300x250",
            mobileSwipeMRECWide: "lonny_320x250_mobile",
            mobileNativeB: "lonny_mobile_300x100"
        },
        StyleBistro: {
            topMREC: "stylebistro_desktop_300x250",
            topMRECFlexHalf: "stylebistro_rightrail_300x600",
            pushdown: "stylebistro_desktop_leaderboard",
            mobileCenterMREC: "stylebistro_mobile_300x250",
            mobileSwipeMREC: "stylebistro_mobile_300x250",
            mobileSwipeMRECWide: "stylebistro_320x250_mobile",
            mobileNativeB: "stylebistro_mobile_300x100"
        },
        Zimbio: {
            topMREC: "zimbio_desktop_300x250",
            topMRECFlexHalf: "zimbio_rightrail_300x600",
            pushdown: "zimbio_desktop_leaderboard",
            mobileCenterMREC: "zimbio_mobile_300x250",
            mobileSwipeMREC: "zimbio_mobile_300x250",
            mobileSwipeMRECWide: "zimbio_320x250_mobile",
            mobileNativeB: "zimbio_mobile_300x100"
        }
    }
      , f = {
        topMREC: ["topMRECFlexHalf"],
        mobileSwipeMREC: ["mobileSwipeMRECWide"]
    };
    return {
        init: function() {
            if (window.location.search.indexOf("debug_trip_728x90") !== -1) {
                this.bidderSlots.pushdown = {
                    placement: "",
                    sizes: ["728x90"]
                }
            }
            this._super()
        },
        params: {
            bidderId: "trip",
            targetingParams: {
                bid: "trip_bid",
                ad: "trip_adId"
            },
            maximizeFill: true,
            loadCreatives: true,
            fetchEarly: true
        },
        bidderSlots: {
            topMREC: {
                placement: "",
                sizes: ["300x250"]
            },
            topMRECFlexHalf: {
                placement: "",
                sizes: ["300x600"],
                flexParent: "topMREC"
            },
            mobileCenterMREC: {
                placement: "",
                sizes: ["300x250"]
            },
            mobileSwipeMREC: {
                placement: "",
                sizes: ["300x250"]
            },
            mobileSwipeMRECWide: {
                placement: "",
                sizes: ["320x250"],
                flexParent: "mobileSwipeMREC"
            },
            mobileNativeB: {
                placement: "",
                sizes: ["300x100"]
            },
        },
        createSlots: function d() {
            for (var l in this.bidderSlots) {
                $.extend(this.bidderSlots[l], {
                    placement: j[Settings.domain][l],
                })
            }
            this.log(this.bidderSlots)
        },
        updateSlots: function e() {
            this.activeSlots = b.getActiveSlots();
            this.log("active slots", this.activeSlots)
        },
        sendRequest: function(l) {
            this.log("bid request data", l);
            $.ajax({
                type: "GET",
                url: g,
                data: l,
                jsonpCallback: "Zimbio.Ads.TripleLift.updateCallback",
                dataType: "jsonp"
            })
        },
        getBid: function a() {
            this._super();
            var l = window.location.href;
            this.activeSlots.forEach(function(p) {
                var q = p.type
                  , t = this.bidderSlots[q];
                if (!t) {
                    return
                }
                var s = {
                    inv_code: t.placement,
                    referrer: l,
                    callback_id: q
                };
                var r = this.getFloor((t.flexParent) ? t.flexParent : q);
                if (r) {
                    r = Math.round(r * 100) / 100;
                    this.log("setting floor", q, r);
                    s.floor = r
                }
                if (window.location.search.indexOf("debug_trip_flex") === -1) {
                    this.sendRequest(s)
                } else {
                    this.log("testing flex placements only")
                }
                if (f[q]) {
                    var o = f[q];
                    for (var n = 0; n < o.length; n++) {
                        var m = o[n];
                        t = this.bidderSlots[m];
                        if (!t) {
                            continue
                        }
                        this.log("flex placement", t.placement);
                        var s = {
                            inv_code: t.placement,
                            referrer: l,
                            callback_id: m
                        };
                        this.sendRequest(s)
                    }
                }
            }, this)
        },
        loadCreative: function c(n, l) {
            this.log(l);
            if (!l) {
                return
            }
            var m = '<div id="ad-container">' + l + "</div>";
            n.open();
            n.write(m);
            n.close()
        },
        processBids: function k(p) {
            this.log(p);
            var n = p.callback_id
              , l = null
              , r = null ;
            for (var m = 0; m < this.activeSlots.length; m++) {
                var o = this.activeSlots[m];
                if (o.type == n || (f[o.type] && f[o.type].indexOf(n) !== -1)) {
                    l = this.activeSlots[m];
                    break
                }
            }
            if (!l) {
                this.warn("Tried to process bid for inactive slot.");
                return
            }
            var r = this.bidderSlots[n];
            p.size = r.sizes;
            var q = this.processBid(l.type, p);
            if (q) {
                this.storeBid(q)
            }
        },
        processBid: function h(p, m) {
            this._super(p, m);
            this.activeBidStack[p] = this.activeBidStack[p] || [];
            if (!m || !m.cpm) {
                this.log("bid invalid, empty, or zero", p);
                return
            }
            this.log(p, m);
            var o = m.cpm * 100
              , l = this.getAdId(p)
              , n = m.size;
            var q = new Zimbio.RobinBid({
                cpm: o,
                id: l,
                size: n,
                slot: p,
                adm: m.ad
            });
            return q
        }
    }
})());
Zimbio.Ads = Zimbio.Ads || {};
Zimbio.Ads.FBANBidder = Zimbio.RobinBidder.extend((function() {
    var f = Zimbio.Robin
      , e = "https://an.facebook.com/v1/placementbid.json"
      , d = {
        mobileSwipeMREC: ["mobileSwipeMRECFlexNative"]
    };
    return {
        params: {
            bidderId: "fban",
            targetingParams: {
                bid: "fban_bid",
                ad: "fban_adId"
            },
            maximizeFill: true,
            loadCreatives: true,
            expireDuplicates: true,
            fetchEarly: true
        },
        appIds: {
            Livingly: "448461375354273",
            Lonny: "825683067577936",
            StyleBistro: "1505750839733307",
            Zimbio: "439147022955845"
        },
        bidderPlacements: {
            Livingly: {
                mobileCenterMREC: "448461375354273_514067428793667",
                mobileSwipeMREC: "448461375354273_514067428793667",
                mobileSwipeMRECFlexNative: "448461375354273_534937343373342"
            },
            Lonny: {
                mobileCenterMREC: "825683067577936_937800843032824",
                mobileSwipeMREC: "825683067577936_937800843032824",
                mobileSwipeMRECFlexNative: "825683067577936_972521206227454"
            },
            StyleBistro: {
                mobileCenterMREC: "1505750839733307_1567935650181492",
                mobileSwipeMREC: "1505750839733307_1567935650181492",
                mobileSwipeMRECFlexNative: "1505750839733307_1586482738326783"
            },
            Zimbio: {
                mobileCenterMREC: "439147022955845_500648490139031",
                mobileSwipeMREC: "439147022955845_500648490139031",
                mobileSwipeMRECFlexNative: "439147022955845_519489388254941"
            }
        },
        bidderSlots: {
            mobileCenterMREC: {
                sizes: ["300x250"]
            },
            mobileSwipeMREC: {
                sizes: ["300x250"]
            },
            mobileSwipeMRECFlexNative: {
                flexParent: "mobileSwipeMREC",
                sizes: ["320x250"],
                isNative: true
            }
        },
        getBidderSlotByPlacementId: function(k) {
            for (var j in this.bidderSlots) {
                if (this.bidderSlots[j].placement == k) {
                    return this.bidderSlots[j]
                }
            }
            return null
        },
        createSlots: function g() {
            for (var j in this.bidderSlots) {
                $.extend(this.bidderSlots[j], {
                    placement: this.bidderPlacements[Settings.domain][j],
                    slotType: j
                })
            }
            this.log(this.bidderSlots)
        },
        updateSlots: function h() {
            this.activeSlots = f.getActiveSlots();
            this.log("active slots", this.activeSlots)
        },
        getBid: function c() {
            this._super();
            var l = {}
              , j = this;
            l.placementids = [];
            l.adformats = [];
            l.testmode = (window.location.search.indexOf("fb_testmode") !== -1);
            var k = {};
            this.activeSlots.forEach(function(m) {
                var p = this.bidderSlots[m.type];
                flex = d[m.type] || [];
                if (!p) {
                    return
                }
                var o = flex.map(function(r) {
                    return j.bidderSlots[r]
                }).concat([p]);
                j.log("getting bids for", o);
                for (var n = 0; n < o.length; n++) {
                    var q = j.bidderSlots[o[n].slotType];
                    l.placementids.push(q.placement);
                    l.adformats.push(q.isNative ? "native" : q.sizes[0]);
                    k[q.placement] = q
                }
            }, this);
            if (!l.placementids.length) {
                this.log("skipping get bid, no active placements", l);
                return
            }
            this.log("getting bid", l);
            $.ajax({
                type: "GET",
                url: e,
                data: l,
                dataType: "json",
                xhrFields: {
                    withCredentials: true
                }
            }).done(function(m) {
                m.bidMap = k;
                this.updateCallback(m)
            }
            .bind(this));
            this.log("bid requested")
        },
        processBids: function a(m) {
            this.log(m);
            if (m.bids && m.bidMap) {
                var l = m.bidMap;
                for (var n in m.bids) {
                    var j = m.bids[n];
                    var p = l[n];
                    if (!p) {
                        this.trackError("processBids", "msg=Slot type not found for placement id");
                        continue
                    }
                    var k = p.flexParent ? p.flexParent : p.slotType;
                    j.size = p.sizes[0];
                    j.isNative = p.isNative || false;
                    var o = this.processBid(k, j);
                    if (o) {
                        this.storeBid(o)
                    }
                }
            }
        },
        processBid: function b(l, k) {
            this._super(l, k);
            var j = this.getAdId(l)
              , n = k.isNative ? this.buildNativeCreative : this.buildBannerCreative;
            var m = new Zimbio.RobinBid({
                cpm: k.bid_price_cents,
                id: String(j),
                size: k.size,
                slot: l,
                creativeId: k.bidId,
                adm: n.call(this, k, k.size)
            });
            return m
        },
        getAppId: function() {
            return this.appIds[Settings.domain]
        },
        getFontsForDomain: function(j) {
            switch (j) {
            case "Zimbio":
                return "@font-face { font-family: 'Droid Sans'; src: url('/images/droid_sans/regular.eot'); src: url('/images/droid_sans/regular.eot?#iefix') format('embedded-opentype'), url('/images/droid_sans/regular.woff') format('woff'), url('/images/droid_sans/regular.ttf') format('truetype'), url('/images/droid_sans/regular.svg#DroidSansRegular') format('svg'); font-weight: normal; font-style: normal; } @font-face { font-family: 'Droid Sans'; src: url('/images/droid_sans/bold.eot'); src: url('/images/droid_sans/bold.eot?#iefix') format('embedded-opentype'), url('/images/droid_sans/bold.woff') format('woff'), url('/images/droid_sans/bold.ttf') format('truetype'), url('/images/droid_sans/bold.svg#DroidSansBold') format('svg'); font-weight: bold; font-style: normal; }";
                break;
            case "StyleBistro":
                return "@font-face { font-family: 'MarkOT'; src: url('/images/MarkOT/MarkOT.eot'); src: url('/images/MarkOT/MarkOT.eot?#iefix') format('embedded-opentype'), url('/images/MarkOT/MarkOT.woff') format('woff'), url('/images/MarkOT/MarkOT.otf') format('truetype'), url('/images/MarkOT/MarkOT.svg') format('svg'); font-weight: normal; font-style: normal; } @font-face { font-family: 'MarkOT'; src: url('/images/MarkOT/MarkOT-Bold.eot'); src: url('/images/MarkOT/MarkOT-Bold.eot?#iefix') format('embedded-opentype'), url('/images/MarkOT/MarkOT-Bold.woff') format('woff'), url('/images/MarkOT/MarkOT-Bold.otf') format('truetype'), url('/images/MarkOT/MarkOT-Bold.svg') format('svg'); font-weight: bold; font-style: normal; }";
                break;
            case "Livingly":
            case "Lonny":
            default:
                return "@font-face{ font-family:'Proxima Nova'; src:url('http://m.zimbio.com/images/proxima_nova/ProximaNovaLight.eot'); src:url('http://m.zimbio.com/images/proxima_nova/ProximaNovaLight.eot?#iefix') format('embedded-opentype'),url('http://m.zimbio.com/images/proxima_nova/ProximaNovaLight.woff') format('woff'),url('http://m.zimbio.com/images/proxima_nova/ProximaNovaLight.otf') format('truetype'),url('http://m.zimbio.com/images/proxima_nova/ProximaNovaLight.svg') format('svg'); font-weight:normal; font-style:normal } @font-face{ font-family:'Proxima Nova'; src:url('http://m.zimbio.com/images/proxima_nova/ProximaNovaSbold.eot'); src:url('http://m.zimbio.com/images/proxima_nova/ProximaNovaSbold.eot?#iefix') format('embedded-opentype'),url('http://m.zimbio.com/images/proxima_nova/ProximaNovaSbold.woff') format('woff'),url('http://m.zimbio.com/images/proxima_nova/ProximaNovaSbold.otf') format('truetype'),url('http://m.zimbio.com/images/proxima_nova/ProximaNovaSbold.svg') format('svg'); font-weight:bold; font-style:normal }";
                break
            }
        },
        buildBannerCreative: function(k, l) {
            this.log("building banner creative", k, l);
            var m = this.getAppId();
            var j = "<script>var inDapIF = false;<\/script>         <script>           window.fbAsyncInit = function() {             FB.Event.subscribe(               'ad.loaded',               function(placementId) {                 console.log('Audience Network ad loaded');               }             );             FB.Event.subscribe(               'ad.error',               function(errorCode, errorMessage, placementId) {                 console.log('Audience Network error (' + errorCode + ') ' + errorMessage);               }             );             FB.XFBML.parse();           };           (function(d, s, id) {             var js, fjs = d.getElementsByTagName(s)[0];             if (d.getElementById(id)) return;             js = d.createElement(s); js.id = id;             js.src = \"//connect.facebook.net/en_US/sdk/xfbml.ad.js#xfbml=1&version=v2.5&appId=" + m + "\";             fjs.parentNode.insertBefore(js, fjs);           }(document, 'script', 'facebook-jssdk'));         <\/script>         <div class=\"fb-ad\" data-placementid=\"" + k.placement_id + '" data-format="' + l + '"           data-bidid="' + k.bid_id + '"></div>';
            return j
        },
        buildNativeCreative: function(k, l) {
            this.log("building native creative", k, l);
            var m = this.getAppId();
            var j = "<head> <style>" + this.getFontsForDomain(Settings.domain) + "</style> <style> #ad_root { display: none; font-size: 14px; height: 250px; line-height: 16px; position: relative; width: 300px; background-color: #FFF; } .thirdPartyMediaClass { height: 157px; width: 300px; } .thirdPartyTitleClass { margin: 4px 0 1px 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: 'Proxima Nova',Helvetica,Arial,sans-serif; font-size: 14px; font-weight: bold; text-decoration: none; text-align: center; text-transform: uppercase; } .thirdPartyBodyClass { display: -webkit-box; height: 40px; -webkit-line-clamp: 2; overflow: hidden; color: #111; font-size: 17px; font-weight: normal; text-decoration: none; line-height: 20px; text-align: center; letter-spacing: -1; } .thirdPartyCallToActionClass { color: #FFF; font-weight: bold; margin-top: 4px; padding: 6px; font-size: 18px; text-align: center; text-decoration: none; } .livingly .thirdPartyTitleClass, .livingly .thirdPartyBodyClass, .livingly .thirdPartyCallToActionClass { font-family: 'Proxima Nova', Helvetica, Arial, sans-serif; } .livingly .thirdPartyTitleClass { color: #36b6b6; } .livingly .thirdPartyCallToActionClass { background-color: #36b6b6; } .lonny .thirdPartyTitleClass, .lonny .thirdPartyBodyClass, .lonny .thirdPartyCallToActionClass { font-family: 'Proxima Nova', Helvetica, Arial, sans-serif; } .lonny .thirdPartyTitleClass { color: #c00; } .lonny .thirdPartyCallToActionClass { background-color: #C00; } .stylebistro .thirdPartyTitleClass, .stylebistro .thirdPartyBodyClass, .stylebistro .thirdPartyCallToActionClass { font-family: 'MarkOT', Helvetica, Arial, sans-serif; } .stylebistro .thirdPartyTitleClass { color: #b83599; } .stylebistro .thirdPartyCallToActionClass { background-color: #b83599; } .zimbio .thirdPartyTitleClass, .zimbio .thirdPartyBodyClass, .zimbio .thirdPartyCallToActionClass { font-family: 'Droid Sans', Helvetica, Arial, sans-serif; } .zimbio .thirdPartyTitleClass { color: #047DA5; } .zimbio .thirdPartyCallToActionClass { background-color: #047DA5; } </style>   <script>var inDapIF = false;<\/script>   <script type=\"text/javascript\">     window.onload = function() {         if (parent) {             var oHead = document.getElementsByTagName(\"head\")[0];             var arrStyleSheets = parent.document.getElementsByTagName(\"style\");             for (var i = 0; i < arrStyleSheets.length; i++)                 oHead.appendChild(arrStyleSheets[i].cloneNode(true));         }     }   <\/script> </head> <body>   <script>     window.fbAsyncInit = function() {       FB.Event.subscribe(         'ad.loaded',         function(placementId) {           console.log('Audience Network ad loaded');           document.getElementById('ad_root').style.display = 'block';         }       );       FB.Event.subscribe(         'ad.error',         function(errorCode, errorMessage, placementId) {           console.log('Audience Network error (' + errorCode + ') ' + errorMessage);         }       );       FB.XFBML.parse();     };     (function(d, s, id) {       var js, fjs = d.getElementsByTagName(s)[0];       if (d.getElementById(id)) return;       js = d.createElement(s); js.id = id;       js.src = \"//connect.facebook.net/en_US/sdk/xfbml.ad.js#xfbml=1&version=v2.5&appId=" + m + "\";       fjs.parentNode.insertBefore(js, fjs);     }(document, 'script', 'facebook-jssdk'));   <\/script>   <div class=\"fb-ad\" data-placementid=\"" + k.placement_id + '" data-format="native"     data-nativeadid="ad_root" data-bidid="' + k.bid_id + '"></div>   <div id="ad_root" class="' + Settings.domain.toLowerCase() + '">     <a class="fbAdLink">       <div class="fbAdMedia thirdPartyMediaClass"></div>       <div class="fbAdTitle thirdPartyTitleClass"></div>       <div class="fbAdBody thirdPartyBodyClass"></div>       <div class="fbAdCallToAction thirdPartyCallToActionClass"></div>     </a>   </div> </body>';
            return j
        }
    }
})());
var Zimbio = Zimbio || {};
Zimbio.RegisteredPrompts = {};
Zimbio.Prompt = {};
Zimbio.Prompt.COOKIE_NAME = "livingly_prompt";
Zimbio.Prompt.HIDE_PROMPT_ON_SUCCESS_TIME = 2000;
Zimbio.Prompt.GAEvents = {
    view: "View",
    closed: "Closed",
    signUp: "Signup"
};
InheritPrototype = function(b, c) {
    var a = Object.create(c.prototype);
    a.constructor = b;
    b.prototype = a
}
;
var PromptBase = function(b) {
    this.templateBaseUrl = "/signup_prompts";
    this.template = b.template;
    this.templateString = undefined;
    var a = 1, d, e, c;
    this.getLimit = function() {
        return a
    }
    ;
    this.setLimit = function(f) {
        a = f
    }
    ;
    this.getTarget = function() {
        return d
    }
    ;
    this.setId = function(f) {
        e = f
    }
    ;
    this.getId = function() {
        return e
    }
    ;
    this.setTarget = function(f) {
        d = f
    }
    ;
    this.getPromptIdWithHash = function() {
        return "#" + this.getId()
    }
    ;
    this.getPromptId = function() {
        return this.getId()
    }
    ;
    this.getPromptHolderId = function() {
        return c
    }
    ;
    this.setPromptHolderId = function(f) {
        c = f
    }
    ;
    this.getPromptParams = function() {
        return b
    }
    ;
    this.getZapId = function() {
        return "P_" + this.getId()
    }
    ;
    this.initialSetUp(b)
}
;
PromptBase.prototype.getOrCreateCookie = function() {
    var a = $.cookie(Zimbio.Prompt.COOKIE_NAME);
    if (!a) {
        $.cookie(Zimbio.Prompt.COOKIE_NAME, "{}", {
            path: "/"
        });
        a = $.cookie(Zimbio.Prompt.COOKIE_NAME)
    }
    return JSON.parse(a)
}
;
PromptBase.prototype.updateCookie = function(a) {
    $.cookie(Zimbio.Prompt.COOKIE_NAME, JSON.stringify(a), {
        path: "/"
    })
}
;
PromptBase.prototype.playPromptDisplayAnimation = function() {
    Dialog.show({
        id: this.getPromptId()
    })
}
;
PromptBase.prototype.showPrompt = function() {
    var a = this.getOrCreateCookie();
    if (this.isOverLimit()) {
        return false
    }
    if (!a[this.getTarget()]) {
        a[this.getTarget()] = 0
    }
    function c() {
        if ($(this.getPromptIdWithHash()).length) {
            clearInterval(b);
            this.playPromptDisplayAnimation();
            a[this.getTarget()] += 1;
            this.updateCookie(a)
        }
    }
    if ($(this.getPromptIdWithHash()).length) {
        c.bind(this)()
    } else {
        var b = setInterval(c.bind(this), 1000)
    }
}
;
PromptBase.prototype.isOverLimit = function() {
    var e = this.getOrCreateCookie()
      , c = this.getLimit()
      , a = /debug_prompt=1/i
      , b = location.search
      , d = a.test(b);
    return ( !d && c && e[this.getTarget()] >= this.getLimit())
}
;
PromptBase.prototype.hidePrompt = function() {
    Dialog.hide()
}
;
PromptBase.prototype.fireAnalyticEvents = function(b) {
    var a = this.getTarget() + b.eventAction;
    Track.Google.sendEvent("datastream", {
        category: "Prompt",
        action: a,
        label: this.getId()
    });
    Track.Click.fireCustomBeacon({
        cmod: this.getZapId(),
        cid: a
    })
}
;
PromptBase.prototype.registerEventHandlers = function() {
    var a = this;
    $(this.getPromptIdWithHash() + " .followBoxForm").on("click", 'input[type="submit"]', function(b) {
        Zimbio.ajaxNewsLetter.subscribeUser(b, false, 1, a.emailSignUpSuccessful)
    });
    $(this.getPromptIdWithHash()).on("dialogload", function(b) {
        a.fireAnalyticEvents({
            eventAction: "View"
        })
    });
    $(this.getPromptIdWithHash()).on("dialogunload", function(c) {
        var b = $(this);
        if (b.find(".success").css("display") === "none") {
            a.fireAnalyticEvents({
                eventAction: "Closed"
            })
        }
    })
}
;
PromptBase.prototype.fetchAndSetPromptTemplate = function() {
    var b;
    var a = this;
    if (this.isOverLimit()) {
        return false
    }
    b = this.fetchTemplateString();
    $.when(b).done(function(d) {
        a.templateString = d;
        var c = a.promptHolderId || "body";
        $(c).append(d);
        a.registerEventHandlers()
    })
}
;
PromptBase.prototype.initialSetUp = function(c) {
    var a = this;
    if (!c.fetchTemplateOnEvent) {
        throw new Error("Please pass in an event name which can trigger fetching of the prompt template. PromptBase")
    } else {
        $(document).on(c.fetchTemplateOnEvent, function(e) {
            var d = a;
            if (d) {
                d.fetchAndSetPromptTemplate(c.fetchTemplateOnEvent)
            }
        })
    }
    Zimbio.RegisteredPrompts[c.id] = this;
    if (c.id) {
        if (c.id.length > 33) {
            throw new Error("Prompt id should be less than 33 chars to be compatibile with ZAP")
        }
        this.setId(c.id)
    } else {
        throw new Error("Please provide a prompt id ")
    }
    if (c.triggerOnEvent) {
        this.addPromptTriggerListener(c.triggerOnEvent, c.eventTriggerSelector)
    }
    var b = c.limit || 1;
    this.setLimit(b);
    if (c.target) {
        this.setTarget(c.target)
    } else {
        throw new Error("Please provide the traget this prompt is set up for. Eg: facebook")
    }
    if (c.promptHolderId) {
        this.setPromptHolderId(c.promptHolderId)
    }
}
;
PromptBase.prototype.promptTriggerEventHandler = function(a) {
    this.showPrompt()
}
;
PromptBase.prototype.emailSignUpSuccessful = function() {
    var b = $(".js-current-signup-prompt");
    var a = this;
    $.each(b, function(d, g) {
        var f = $(g);
        if (f.css("display") === "block") {
            var e = f.attr("id");
            var c = Zimbio.RegisteredPrompts[e];
            if (c) {
                c.fireAnalyticEvents({
                    eventAction: "Signup"
                });
                f.find(".followBoxSubmit").hide();
                f.find(".followBoxInput").hide();
                f.find(".underInputError").hide();
                f.find(".success").show();
                setTimeout(c.hidePrompt.bind(c), Zimbio.Prompt.HIDE_PROMPT_ON_SUCCESS_TIME)
            }
        }
    })
}
;
PromptBase.prototype.addPromptTriggerListener = function(b, a) {
    if (b) {
        if (a) {
            $(document).on(b, a, this.promptTriggerEventHandler.bind(this))
        } else {
            $(document).on(b, this.promptTriggerEventHandler.bind(this))
        }
    }
}
;
PromptBase.prototype.fetchTemplateString = function() {
    var a = $.Deferred();
    $.ajax({
        url: this.templateBaseUrl,
        type: "GET",
        data: {
            templateName: this.template,
            promptId: this.getId()
        }
    }).done(function(b) {
        if (b.status.toLowerCase() === "success") {
            a.resolve(b.templateString)
        } else {}
    }).fail(function(b) {
        a.fail()
    });
    return a.promise()
}
;
PromptBase.prototype.fbInitSignup = function(b) {
    var a = this;
    if (typeof FB !== "undefined") {
        if (b) {
            clearInterval(b)
        }
        FB.Event.subscribe("edge.create", function() {
            var d = $(a.getPromptIdWithHash());
            if (d.css("display") === "block") {
                var c = Zimbio.RegisteredPrompts[a.getPromptId()];
                if (c) {
                    c.fireAnalyticEvents({
                        eventAction: "Signup"
                    });
                    d.find(".js-target").data("target-clicked", true);
                    setTimeout(c.hidePrompt.bind(c), Zimbio.Prompt.HIDE_PROMPT_ON_SUCCESS_TIME)
                }
            }
        })
    }
}
;
var ScrollPromptBase = function(a) {
    a.eventTriggerSelector = a.eventTriggerSelector || this.defaultEventTriggerSelector;
    PromptBase.call(this, a);
    this.scrollCounter = 0;
    this.hookReached = false;
    this.hook = a.hook;
    this.$hook = $(a.hook);
    this.pixelsBelowHook = a.pixelsBelowHook || 0;
    this.scrollEventFrequency = a.scrollEventFrequency || 5;
    this.eventTriggerSelector = a.eventTriggerSelector;
    if (!this.eventTriggerSelector) {
        throw "Scroll-based prompts require an eventTriggerSelector"
    }
}
;
InheritPrototype(ScrollPromptBase, PromptBase);
ScrollPromptBase.prototype.computeHookHeight = function() {
    if (!this.$hook.length) {
        this.$hook = $(this.hook)
    }
    return this.$hook.offset().top + this.pixelsBelowHook
}
;
ScrollPromptBase.prototype.registerEventHandlers = function() {
    this.hookHeight = this.computeHookHeight();
    this.windowHeight = $(window).height();
    $(window).on("resize", this.handleWindowResize.bind(this));
    $(document).on("scroll", this.handleDocumentScroll.bind(this))
}
;
ScrollPromptBase.prototype.handleWindowResize = function() {
    this.hookHeight = this.computeHookHeight();
    this.windowHeight = $(window).height()
}
;
ScrollPromptBase.prototype.handleDocumentScroll = function() {
    var a;
    this.scrollCounter += 1;
    if (this.scrollCounter % this.scrollEventFrequency) {
        return
    }
    this.hookHeight = this.computeHookHeight();
    a = this.hookHeight - $(window).scrollTop() - this.windowHeight;
    if (a < 0 && !this.hookReached) {
        this.hookReached = true;
        $(this.eventTriggerSelector).trigger("hookreached")
    }
    this.updateForScrollDistance(a)
}
;
ScrollPromptBase.prototype.updateForScrollDistance = function(a) {}
;
var FlyInPrompt = function(a) {
    this.defaultEventTriggerSelector = ".flyover-prompt";
    this.animationSide = a.animationSide || "right";
    this.animateClose = a.animateClose || false;
    ScrollPromptBase.call(this, a)
}
;
InheritPrototype(FlyInPrompt, ScrollPromptBase);
FlyInPrompt.prototype.playPromptDisplayAnimation = function(a) {
    var b = {};
    b[this.animationSide] = "0px";
    $(this.getPromptIdWithHash()).show();
    $(this.getPromptIdWithHash()).animate(b, 400);
    this.fireAnalyticEvents({
        eventAction: "View"
    });
    if (this.getTarget() == "facebook") {
        this.fbInitSignup()
    }
}
;
FlyInPrompt.prototype.registerEventHandlers = function() {
    var a = this;
    ScrollPromptBase.prototype.registerEventHandlers.call(this);
    $(this.getPromptIdWithHash() + " .flyover-close-button").on("click", function() {
        a.hidePrompt();
        a.fireAnalyticEvents({
            eventAction: "Closed"
        })
    })
}
;
FlyInPrompt.prototype.hidePrompt = function() {
    if (this.animateClose) {
        $(this.getPromptIdWithHash()).addClass("closed")
    } else {
        $(this.getPromptIdWithHash()).hide()
    }
}
;
var DrawerBoxPrompt = function(a) {
    this.defaultEventTriggerSelector = ".drawer-prompt";
    ScrollPromptBase.call(this, a);
    this.hook = a.hook;
    this.boxHeight = a.boxHeight;
    this.pixelsBelowHook = a.pixelsBelowHook;
    this.fixed = false;
    this.promptShown = false
}
;
InheritPrototype(DrawerBoxPrompt, ScrollPromptBase);
DrawerBoxPrompt.prototype.playPromptDisplayAnimation = function(a) {
    var b = $(this.getPromptIdWithHash());
    if (!this.promptShown) {
        if (Settings.supportsTouch) {
            b.css({
                display: "block",
                position: "fixed",
                bottom: -this.boxHeight,
                top: ""
            });
            b.animate({
                bottom: 0
            }, 1000)
        } else {
            b.show();
            this.setAbsolutePosition()
        }
        if (this.getTarget() == "facebook") {
            this.fbInitSignup()
        }
        this.fireAnalyticEvents({
            eventAction: "View"
        });
        this.promptShown = true
    }
}
;
DrawerBoxPrompt.prototype.updateForScrollDistance = function(b) {
    var a = $(this.getPromptIdWithHash());
    if (Settings.supportsTouch) {
        return
    }
    if (b <= -this.boxHeight) {
        if (!this.fixed) {
            this.setFixedPosition()
        }
    } else {
        if (this.fixed) {
            this.setAbsolutePosition()
        }
    }
}
;
DrawerBoxPrompt.prototype.setFixedPosition = function() {
    $(this.getPromptIdWithHash()).css({
        position: "fixed",
        bottom: 0,
        top: ""
    });
    this.fixed = true
}
;
DrawerBoxPrompt.prototype.setAbsolutePosition = function() {
    $(this.getPromptIdWithHash()).css({
        position: "absolute",
        top: "" + this.hookHeight + "px"
    });
    this.fixed = false
}
;
DrawerBoxPrompt.prototype.registerEventHandlers = function() {
    var a = this
      , b = $(this.getPromptIdWithHash());
    ScrollPromptBase.prototype.registerEventHandlers.call(this);
    $(document).on("click touchstart", this.getPromptIdWithHash() + " .drawerbox-close-button", function() {
        a.hidePrompt();
        b.data("promptShownAndClosed", true);
        a.fireAnalyticEvents({
            eventAction: "Closed"
        })
    });
    if (this.getTarget() == "newsletter") {
        $(document).on("click", this.getPromptIdWithHash() + '.followBoxForm input[type="submit"]', function(c) {
            Zimbio.ajaxNewsLetter.subscribeUser(c, false, 1, a.emailSignUpSuccessful)
        })
    }
}
;
DrawerBoxPrompt.prototype.hidePrompt = function() {
    $(this.getPromptIdWithHash()).css("display", "none")
}
;
var LightBoxPrompt = function(a) {
    PromptBase.call(this, a)
}
;
InheritPrototype(LightBoxPrompt, PromptBase);
LightBoxPrompt.prototype.registerEventHandlers = function() {
    var a = this;
    $(this.getPromptIdWithHash()).on("dialogload", function(f) {
        a.fireAnalyticEvents({
            eventAction: Zimbio.Prompt.GAEvents.view
        });
        var d = $(a.getPromptIdWithHash());
        d.css("position", "fixed");
        if (typeof TimelineLite === "function") {
            var c = new TimelineLite();
            c.to(d.find(".lightbox-title .js-one"), 0.5, {
                opacity: 1,
                delay: 0.7,
                ease: Power2.easeIn
            });
            c.to(d.find(".lightbox-title .js-two"), 0.5, {
                opacity: 1,
                ease: Power2.easeIn
            });
            c.to(d.find(".js-target"), 0.5, {
                opacity: 1,
                ease: Power2.easeIn
            });
            c.to(d.find(".js-target"), 0.5, {
                "margin-top": "40px",
                ease: Power4.easeOut
            });
            c.to(d.find(".site-logo"), 0.5, {
                opacity: 1,
                ease: Power2.easeIn
            });
            c.to(d.find(".js-dialog-close"), 0.5, {
                opacity: 1,
                ease: Power2.easeIn
            });
            c.play()
        } else {
            d.find(".lightbox-title .js-one").css("opacity", 1);
            d.find(".lightbox-title .js-two").css("opacity", 1);
            d.find(".js-target").css({
                opacity: 1,
                "margin-top": "40px"
            });
            d.find(".js-dialog-close").css("opacity", 1);
            d.find(".site-logo").css("opacity", 1)
        }
    });
    $(this.getPromptIdWithHash()).on("dialogunload", function(d) {
        var c = $(this);
        if (!c.find(".js-target").data("target-clicked")) {
            a.fireAnalyticEvents({
                eventAction: Zimbio.Prompt.GAEvents.closed
            })
        }
    });
    $(this.getPromptIdWithHash() + " .js-target").on("click", function(f) {
        $(this).data("target-clicked", true);
        Track.Google.setSubscriberValue(a.getTarget());
        a.fireAnalyticEvents({
            eventAction: Zimbio.Prompt.GAEvents.signUp
        });
        if ($("#mask").data("data-bg")) {
            var d = $("#mask").data("data-bg");
            var c = $("#mask").data("data-opacity");
            $("#mask").css({
                background: d,
                opacity: c
            })
        }
        Dialog.hide()
    });
    if (typeof FB !== "undefined") {
        a.fbInitSignup()
    } else {
        var b = setInterval(function() {
            a.fbInitSignup(b)
        }, 1000)
    }
}
;
LightBoxPrompt.prototype.playPromptDisplayAnimation = function(c) {
    var b = this
      , e = this.getPromptParams();
    if (e.delayAnimation) {
        setTimeout(function() {
            if (e.color) {
                var g = "#" + e.color;
                var j = $("#mask").css("background");
                var h = $("#mask").css("opacity");
                $("#mask").data("data-bg", j);
                $("#mask").data("data-opacity", h);
                $("#mask").css({
                    background: g,
                    opacity: "0.97"
                })
            }
            Dialog.show({
                id: b.getPromptId()
            })
        }, e.delayAnimation)
    } else {
        Dialog.show({
            id: this.getPromptId()
        });
        if (e.color) {
            var a = "#" + e.color;
            var f = $("#mask").css("background");
            var d = $("#mask").css("opacity");
            $("#mask").data("data-bg", f);
            $("#mask").data("data-opacity", d);
            $("#mask").css({
                background: a,
                opacity: "0.97"
            })
        }
    }
}
;
