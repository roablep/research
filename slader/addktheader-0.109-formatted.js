// START pubfood
/*! pubfood v0.1.14 | (c) pubfood | http://pubfood.org/LICENSE.txt */
!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        e.pubfood = t()
    }
}(function() {
    return function t(e, i, r) {
        function n(s, a) {
            if (!i[s]) {
                if (!e[s]) {
                    var u = "function" == typeof require && require;
                    if (!a && u)
                        return u(s, !0);
                    if (o)
                        return o(s, !0);
                    var p = new Error("Cannot find module '" + s + "'");
                    throw p.code = "MODULE_NOT_FOUND",
                    p
                }
                var d = i[s] = {
                    exports: {}
                };
                e[s][0].call(d.exports, function(t) {
                    var i = e[s][1][t];
                    return n(i ? i : t)
                }, d, d.exports, t, e, i, r)
            }
            return i[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < r.length; s++)
            n(r[s]);
        return n
    }({
        1: [function(t, e, i) {
            "use strict";
            function r(t, e, i) {
                this.fn = t,
                this.context = e,
                this.once = i || !1
            }
            function n() {}
            var o = "function" != typeof Object.create ? "~" : !1;
            n.prototype._events = void 0,
            n.prototype.listeners = function(t, e) {
                var i = o ? o + t : t
                  , r = this._events && this._events[i];
                if (e)
                    return !!r;
                if (!r)
                    return [];
                if (r.fn)
                    return [r.fn];
                for (var n = 0, s = r.length, a = new Array(s); s > n; n++)
                    a[n] = r[n].fn;
                return a
            }
            ,
            n.prototype.emit = function(t, e, i, r, n, s) {
                var a = o ? o + t : t;
                if (!this._events || !this._events[a])
                    return !1;
                var u, p, d = this._events[a], h = arguments.length;
                if ("function" == typeof d.fn) {
                    switch (d.once && this.removeListener(t, d.fn, void 0, !0),
                    h) {
                    case 1:
                        return d.fn.call(d.context),
                        !0;
                    case 2:
                        return d.fn.call(d.context, e),
                        !0;
                    case 3:
                        return d.fn.call(d.context, e, i),
                        !0;
                    case 4:
                        return d.fn.call(d.context, e, i, r),
                        !0;
                    case 5:
                        return d.fn.call(d.context, e, i, r, n),
                        !0;
                    case 6:
                        return d.fn.call(d.context, e, i, r, n, s),
                        !0
                    }
                    for (p = 1,
                    u = new Array(h - 1); h > p; p++)
                        u[p - 1] = arguments[p];
                    d.fn.apply(d.context, u)
                } else {
                    var c, l = d.length;
                    for (p = 0; l > p; p++)
                        switch (d[p].once && this.removeListener(t, d[p].fn, void 0, !0),
                        h) {
                        case 1:
                            d[p].fn.call(d[p].context);
                            break;
                        case 2:
                            d[p].fn.call(d[p].context, e);
                            break;
                        case 3:
                            d[p].fn.call(d[p].context, e, i);
                            break;
                        default:
                            if (!u)
                                for (c = 1,
                                u = new Array(h - 1); h > c; c++)
                                    u[c - 1] = arguments[c];
                            d[p].fn.apply(d[p].context, u)
                        }
                }
                return !0
            }
            ,
            n.prototype.on = function(t, e, i) {
                var n = new r(e,i || this)
                  , s = o ? o + t : t;
                return this._events || (this._events = o ? {} : Object.create(null )),
                this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], n] : this._events[s].push(n) : this._events[s] = n,
                this
            }
            ,
            n.prototype.once = function(t, e, i) {
                var n = new r(e,i || this,!0)
                  , s = o ? o + t : t;
                return this._events || (this._events = o ? {} : Object.create(null )),
                this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], n] : this._events[s].push(n) : this._events[s] = n,
                this
            }
            ,
            n.prototype.removeListener = function(t, e, i, r) {
                var n = o ? o + t : t;
                if (!this._events || !this._events[n])
                    return this;
                var s = this._events[n]
                  , a = [];
                if (e)
                    if (s.fn)
                        (s.fn !== e || r && !s.once || i && s.context !== i) && a.push(s);
                    else
                        for (var u = 0, p = s.length; p > u; u++)
                            (s[u].fn !== e || r && !s[u].once || i && s[u].context !== i) && a.push(s[u]);
                return a.length ? this._events[n] = 1 === a.length ? a[0] : a : delete this._events[n],
                this
            }
            ,
            n.prototype.removeAllListeners = function(t) {
                return this._events ? (t ? delete this._events[o ? o + t : t] : this._events = o ? {} : Object.create(null ),
                this) : this
            }
            ,
            n.prototype.off = n.prototype.removeListener,
            n.prototype.addListener = n.prototype.on,
            n.prototype.setMaxListeners = function() {
                return this
            }
            ,
            n.prefixed = o,
            "undefined" != typeof e && (e.exports = n)
        }
        , {}],
        2: [function(t, e, i) {
            "use strict";
            function r() {
                this.operators = []
            }
            r.prototype.addOperator = function(t) {
                this.operators.push(t)
            }
            ,
            r.prototype.process = function(t, e) {
                for (var i = t, r = 0; r < this.operators.length; r++)
                    i = this.operators[r].process(i, e);
                return i
            }
            ,
            e.exports = r
        }
        , {}],
        3: [function(t, e, i) {
            "use strict";
            function r() {
                this.operators = []
            }
            r.prototype.addOperator = function(t) {
                this.operators.push(t)
            }
            ,
            r.prototype.process = function(t, e) {
                for (var i = t, r = 0; r < this.operators.length; r++)
                    i = this.operators[r].process(i, e);
                return i
            }
            ,
            e.exports = r
        }
        , {}],
        4: [function(t, e, i) {
            "use strict";
            function r(t) {
                this.name = "OP-" + n.newId(),
                this.transform = t
            }
            var n = t("../util")
              , o = t("../event")
              , s = t("../errors");
            r.validate = function(t) {
                return !!t && "function" === n.asType(t)
            }
            ,
            r.withDelegate = function(t) {
                if (!r.validate(t))
                    return null ;
                var e = new r(t);
                return e
            }
            ,
            r.prototype.setName = function(t) {
                return this.name = t,
                this
            }
            ,
            r.prototype.process = function(t, e) {
                if (!t)
                    return null ;
                var i = this.transform(t, e);
                return i || o.publish(o.EVENT_TYPE.ERROR, new s("no transform output")),
                i || null
            }
            ,
            e.exports = r
        }
        , {
            "../errors": 5,
            "../event": 6,
            "../util": 16
        }],
        5: [function(t, e, i) {
            "use strict";
            function r(t) {
                this.name = n,
                this.message = t || "Pubfood integration error.",
                this.stack = (new Error).stack
            }
            var n = "PubfoodError";
            r.prototype = Object.create(Error.prototype),
            r.prototype.constructor = r,
            r.prototype.name = n,
            r.prototype.is = function(t) {
                return t && t.name === n
            }
            ,
            e.exports = r
        }
        , {}],
        6: [function(t, e, i) {
            "use strict";
            function r() {
                this.auctionId = "pubfood:" + Date.now(),
                this.observeImmediate_ = {}
            }
            var n = t("./util")
              , o = t("./logger")
              , s = t("eventemitter3");
            r.prototype.setAuctionId = function(t) {
                var e = n.asType(t);
                return ("string" === e || "number" === e) && (this.auctionId = t),
                this.auctionId
            }
            ,
            r.prototype.EVENT_TYPE = {
                PUBFOOD_API_LOAD: "PUBFOOD_API_LOAD",
                PUBFOOD_API_START: "PUBFOOD_API_START",
                PUBFOOD_API_REFRESH: "PUBFOOD_API_REFRESH",
                BID_LIB_START: "BID_LIB_START",
                BID_LIB_LOAD: "BID_LIB_LOAD",
                BID_LIB_LOADED: "BID_LIB_LOADED",
                BID_START: "BID_START",
                BID_PUSH_NEXT: "BID_PUSH_NEXT",
                BID_PUSH_NEXT_LATE: "BID_PUSH_NEXT_LATE",
                BID_COMPLETE: "BID_COMPLETE",
                BID_ASSEMBLER: "BID_ASSEMBLER",
                AUCTION_LIB_START: "AUCTION_LIB_START",
                AUCTION_LIB_LOAD: "AUCTION_LIB_LOAD",
                AUCTION_LIB_LOADED: "AUCTION_LIB_LOADED",
                AUCTION_GO: "AUCTION_GO",
                AUCTION_START: "AUCTION_START",
                AUCTION_TRIGGER: "AUCTION_TRIGGER",
                AUCTION_REFRESH: "AUCTION_REFRESH",
                AUCTION_COMPLETE: "AUCTION_COMPLETE",
                AUCTION_POST_RUN: "AUCTION_POST_RUN",
                ERROR: "ERROR",
                WARN: "WARN",
                INVALID: "INVALID"
            },
            r.prototype.publish = function(t, e, i) {
                var r = +new Date;
                t === this.EVENT_TYPE.PUBFOOD_API_START && e && (r = e);
                var n = {
                    auctionId: this.auctionId,
                    ts: r,
                    type: t,
                    eventContext: i || "pubfood",
                    data: e || ""
                };
                return o.logEvent(t, this.auctionId, n),
                this.emit(t, n)
            }
            ,
            n["extends"](r, s),
            r.prototype.emit = function(t) {
                var e = s.prototype.emit.apply(this, arguments);
                return e && this.EVENT_TYPE.AUCTION_POST_RUN !== t || (e = !0,
                this.observeImmediate_[t] = this.observeImmediate_[t] || [],
                this.observeImmediate_[t].push(Array.prototype.slice.call(arguments, 1))),
                e
            }
            ,
            r.prototype.on = function(t, e) {
                var i = this.observeImmediate_[t] || null ;
                if (i) {
                    for (var r = 0; r < i.length; r++)
                        e.apply(this, i[r]);
                    return this
                }
                return s.prototype.on.apply(this, arguments)
            }
            ,
            r.prototype.removeAllListeners = function() {
                return s.prototype.removeAllListeners.call(this),
                this.observeImmediate_ = {},
                this
            }
            ,
            e.exports = new r
        }
        , {
            "./logger": 8,
            "./util": 16,
            eventemitter3: 1
        }],
        7: [function(t, e, i) {
            "use strict";
            var r = {
                name: "",
                libUri: "",
                init: function(t, e) {},
                refresh: function(t, e) {}
            };
            r.optional = {
                refresh: !0
            };
            var n = {
                name: "__default__",
                libUri: " ",
                init: function(t, e, i) {
                    i()
                },
                refresh: function(t, e, i) {
                    i()
                }
            };
            n.optional = {
                refresh: !0
            };
            var o = function(t, e) {}
              , s = {
                slot: "",
                value: "",
                sizes: [],
                targeting: {},
                label: ""
            }
              , a = {
                name: "",
                elementId: "",
                sizes: [],
                bidProviders: []
            };
            e.exports = {
                BidDelegate: n,
                AuctionDelegate: r,
                SlotConfig: a,
                BidObject: s,
                TransformDelegate: o
            }
        }
        , {}],
        8: [function(t, e, i) {
            "use strict";
            var r = {
                history: [],
                dumpLog: function(t) {
                    if (console && console.log) {
                        var e;
                        t && (e = new RegExp(t,"g"));
                        for (var i = 0; i < this.history.length; i++) {
                            var r = this.history[i];
                            e ? (e.lastIndex = 0,
                            r.eventName && e.test(r.eventName) && console.log(r),
                            r.functionName && e.test(r.functionName) && console.log(r)) : console.log(r)
                        }
                    }
                },
                logCall: function(t, e, i) {
                    this.history.push({
                        ts: +new Date,
                        auctionId: e,
                        functionName: t,
                        args: Array.prototype.slice.call(i)
                    })
                },
                logEvent: function(t, e, i) {
                    this.history.push({
                        ts: +new Date,
                        auctionId: e,
                        eventName: t,
                        event: i
                    })
                }
            };
            e.exports = r
        }
        , {}],
        9: [function(t, e, i) {
            "use strict";
            function r(t) {
                this.init_ && this.init_(),
                this.prefix = t && t.hasOwnProperty("prefix") ? t.prefix : !0,
                this.slotMap = {},
                this.bidProviders = {},
                this.auctionProvider = null ,
                this.auctionRun = {},
                this.timeout_ = r.NO_TIMEOUT,
                this.trigger_ = null ,
                this.initDoneTimeout_ = 2e3,
                this.bidAssembler = new a,
                this.requestAssembler = new u,
                this.callbackTimeout_ = 2e3,
                this.auctionIdx_ = 0,
                c.setAuctionId(this.getAuctionId())
            }
            var n = t("../util")
              , o = t("../model/slot")
              , s = t("../model/bid")
              , a = t("../assembler/bidassembler")
              , u = t("../assembler/requestassembler")
              , p = t("../assembler/transformoperator")
              , d = t("../provider/auctionprovider")
              , h = t("../provider/bidprovider")
              , c = t("../event")
              , l = t("../pubfoodobject");
            r.PAGE_BIDS = "page",
            r.AUCTION_TYPE = {
                START: "init",
                REFRESH: "refresh"
            },
            r.IN_AUCTION = {
                FALSE: !1,
                PENDING: "pending",
                DONE: "done"
            },
            r.NO_TIMEOUT = -1,
            r.prototype.validate = function(t) {
                var e = !0
                  , i = {
                    hasAuctionProvider: function() {
                        return !!this.auctionProvider
                    },
                    hasBidProviders: function() {
                        var t = !1;
                        for (var e in this.bidProviders) {
                            t = !0;
                            break
                        }
                        return t || c.publish(c.EVENT_TYPE.WARN, {
                            msg: "Warn: no bid providers"
                        }),
                        t
                    },
                    hasSlots: function() {
                        for (var t in this.slotMap)
                            return !0;
                        return !1
                    },
                    hasAllSlotsBidder: function() {
                        var t = [];
                        for (var e in this.slotMap) {
                            var i = this.slotMap[e];
                            i.bidProviders && i.bidProviders[0] || t.push(i.name)
                        }
                        return t.length > 0 && c.publish(c.EVENT_TYPE.WARN, {
                            msg: "Warn: no bidders - " + t.join(", ")
                        }),
                        0 === t.length
                    }
                };
                i.hasBidProviders.warn = !0;
                for (var r in i)
                    if (e = i[r].call(this),
                    e = i[r].warn ? !0 : e,
                    !e) {
                        c.publish(c.EVENT_TYPE.INVALID, {
                            msg: "Failed: " + r
                        });
                        break
                    }
                return e
            }
            ,
            r.prototype.newAuctionRun = function(t) {
                var e = ++this.auctionIdx_
                  , i = [];
                if (n.isArray(t) && t.length > 0)
                    for (var o = 0; o < t.length; o++) {
                        var s = t[o];
                        this.slotMap[s] ? i.push(this.slotMap[s]) : c.publish(c.EVENT_TYPE.WARN, "Can't refresh slot \"" + s + "\", because it wasn't defined")
                    }
                else
                    for (var a in this.slotMap)
                        i.push(this.slotMap[a]);
                var u = {
                    inAuction: r.IN_AUCTION.FALSE,
                    slots: i,
                    bids: [],
                    lateBids: [],
                    bidStatus: {},
                    targeting: []
                };
                for (var a in this.bidProviders) {
                    var p = this.bidProviders[a];
                    !p || p.name in u.bidStatus || !p.enabled() || (u.bidStatus[p.name] = !1)
                }
                return this.auctionRun[e] = u,
                e
            }
            ,
            r.prototype.getBidStatus = function(t, e) {
                var i = [];
                if (e) {
                    var r = this.auctionRun[e]
                      , o = r ? r.bidStatus[t] : "";
                    i = "boolean" === n.asType(o) ? o : -1
                } else
                    for (var s in this.auctionRun) {
                        var o = this.auctionRun[s].bidStatus[t];
                        i.push("boolean" === n.asType(o) ? o : -1)
                    }
                return i
            }
            ,
            r.prototype.timeout = function(t) {
                this.timeout_ = "number" === n.asType(t) ? t : 2e3
            }
            ,
            r.prototype.getTimeout = function() {
                return this.timeout_
            }
            ,
            r.prototype.setAuctionProviderCbTimeout = function(t) {
                this.initDoneTimeout_ = "number" === n.asType(t) ? t : 2e3
            }
            ,
            r.prototype.setAuctionTrigger = function(t) {
                this.trigger_ = t
            }
            ,
            r.prototype.startAuction_ = function(t, e) {
                c.publish(c.EVENT_TYPE.BID_ASSEMBLER, "AuctionMediator"),
                this.bidAssembler.operators.length > 0 && this.bidAssembler.process(this.auctionRun[t].bids),
                this.processTargeting_(t, e)
            }
            ,
            r.prototype.startTimeout_ = function(t, e) {
                if (this.timeout_ !== r.NO_TIMEOUT && this.timeout_ >= 0) {
                    var i = t
                      , o = e
                      , s = n.bind(this.startAuction_, this);
                    setTimeout(function() {
                        s(i, o)
                    }, this.timeout_)
                }
                return this
            }
            ,
            r.prototype.initAuctionTrigger_ = function(t, e) {
                function i() {
                    this.auctionRun[r].inAuction || this.startAuction_(r, o)
                }
                if ("function" !== n.asType(this.trigger_))
                    return void this.startTimeout_(t, e);
                var r = t
                  , o = e;
                return this.trigger_.apply(null , [n.bind(i, this)]),
                this
            }
            ,
            r.prototype.allBiddersDone = function(t) {
                var e = !0
                  , i = this.auctionRun[t].bidStatus;
                for (var r in i)
                    if (!i[r]) {
                        e = !1;
                        break
                    }
                return e
            }
            ,
            r.prototype.checkBids_ = function(t, e) {
                this.allBiddersDone(t) && this.startAuction_(t, e)
            }
            ,
            r.prototype.getBidKey = function(t) {
                return (this.prefix && t.provider ? t.provider + "_" : "") + (t.label || "bid")
            }
            ,
            r.prototype.mergeKeys = function(t, e) {
                t = n.mergeToObject(t, e)
            }
            ,
            r.prototype.getBidMap_ = function(t) {
                var e = {};
                e[r.PAGE_BIDS] = [];
                for (var i = this.getAuctionRunBids(t), n = 0; n < i.length; n++) {
                    var o = i[n];
                    o.slot ? (e[o.slot] = e[o.slot] || [],
                    e[o.slot].push(o)) : e[r.PAGE_BIDS].push(o)
                }
                return e
            }
            ,
            r.prototype.buildTargeting_ = function(t) {
                for (var e, i = [], n = this.getBidMap_(t), o = this.getAuctionRunSlots(t), s = 0; s < o.length; s++) {
                    var a = {
                        bids: [],
                        targeting: {}
                    }
                      , u = o[s];
                    a.name = u.name,
                    a.id = u.id,
                    a.elementId = u.elementId || "",
                    a.sizes = u.sizes,
                    a.type = "slot",
                    e = n[u.name] || [];
                    for (var p = 0; p < e.length; p++) {
                        var d = e[p];
                        a.bids.push({
                            value: d.value || "",
                            provider: d.provider,
                            id: d.id,
                            targeting: d.targeting || {}
                        });
                        var h = this.getBidKey(d);
                        a.targeting[h] = a.targeting[h] || d.value || "",
                        this.mergeKeys(a.targeting, d.targeting)
                    }
                    i.push(a)
                }
                var c = {
                    bids: [],
                    targeting: {}
                };
                e = n[r.PAGE_BIDS] || [];
                for (var l = 0; l < e.length; l++) {
                    var d = e[l];
                    c.bids.push({
                        value: d.value || "",
                        provider: d.provider,
                        id: d.id,
                        targeting: d.targeting
                    });
                    var h = this.getBidKey(d);
                    c.targeting[h] = c.targeting[h] || d.value || "",
                    this.mergeKeys(c.targeting, d.targeting)
                }
                return c.bids.length > 0 && (c.type = "page",
                i.push(c)),
                i
            }
            ,
            r.prototype.processTargeting_ = function(t, e) {
                if (!this.auctionRun[t].inAuction) {
                    this.auctionRun[t].inAuction = r.IN_AUCTION.PENDING;
                    var i = this
                      , n = !1
                      , o = i.auctionProvider.name
                      , s = t
                      , a = i.initDoneTimeout_
                      , u = function() {
                        n || (n = !0,
                        i.auctionDone(s, o))
                    }
                    ;
                    setTimeout(function() {
                        n || (c.publish(c.EVENT_TYPE.WARN, 'Warning: The auction done callback for "' + o + "\" hasn't been called within the allotted time (" + a / 1e3 + "sec)"),
                        u())
                    }, a),
                    e === r.AUCTION_TYPE.START ? (c.publish(c.EVENT_TYPE.AUCTION_GO, o),
                    c.publish(c.EVENT_TYPE.AUCTION_START, o)) : c.publish(c.EVENT_TYPE.AUCTION_REFRESH, o);
                    var p = i.buildTargeting_(s);
                    this.auctionRun[s].targeting = p,
                    e === r.AUCTION_TYPE.START ? i.auctionProvider.init(p, u) : i.auctionProvider.refresh(p, u)
                }
            }
            ,
            r.prototype.auctionDone = function(t, e) {
                this.auctionRun[t].inAuction = r.IN_AUCTION.DONE;
                var i = this.getAuctionRun(t).targeting;
                c.publish(c.EVENT_TYPE.AUCTION_COMPLETE, {
                    name: e,
                    targeting: i
                }),
                setTimeout(function() {
                    c.publish(c.EVENT_TYPE.AUCTION_POST_RUN, e)
                }, 0)
            }
            ,
            r.prototype.addSlot = function(t) {
                var e = o.fromObject(t);
                return e ? this.slotMap[e.name] = e : c.publish(c.EVENT_TYPE.WARN, "Invalid slot object: " + JSON.stringify(t || {})),
                e
            }
            ,
            r.prototype.addBidProvider = function(t) {
                var e = h.withDelegate(t);
                if (e)
                    this.bidProviders[e.name] ? c.publish(c.EVENT_TYPE.WARN, "Warning: bid provider " + e.name + " is already added") : this.bidProviders[e.name] = e;
                else {
                    var i = t && t.name ? t.name : "undefined";
                    c.publish(c.EVENT_TYPE.WARN, "Warning: invalid bid provider: " + i)
                }
                return e
            }
            ,
            r.prototype.bidProviderExists_ = function(t) {
                return !!this.bidProviders[t]
            }
            ,
            r.prototype.setAuctionProvider = function(t) {
                this.auctionProvider && c.publish(c.EVENT_TYPE.WARN, "Warning: auction provider exists: " + this.auctionProvider.name);
                var e = d.withDelegate(t);
                if (e)
                    this.auctionProvider = e;
                else {
                    var i = t && t.name ? t.name : "undefined";
                    c.publish(c.EVENT_TYPE.WARN, "Warning: invalid auction provider: " + i)
                }
                return e
            }
            ,
            r.prototype.addRequestTransform = function(t) {
                return this.requestAssembler.addOperator(new p(t)),
                this
            }
            ,
            r.prototype.addBidTransform = function(t) {
                return this.bidAssembler.addOperator(new p(t)),
                this
            }
            ,
            r.prototype.loadProviders = function(t) {
                var e, i = [];
                for (var r in this.bidProviders)
                    i.push(r);
                t && n.randomize(i);
                for (var o = 0; o < i.length; o++) {
                    var s = i[o];
                    if (this.bidProviders[s].libUri) {
                        c.publish(c.EVENT_TYPE.BID_LIB_LOAD, this.bidProviders[s].name),
                        e = this.bidProviders[s].libUri() || "";
                        var a = this.bidProviders[s].sync();
                        n.loadUri(e, a)
                    }
                }
                this.auctionProvider && this.auctionProvider.libUri() && (c.publish(c.EVENT_TYPE.AUCTION_LIB_LOAD, this.auctionProvider.name),
                e = this.auctionProvider.libUri(),
                n.loadUri(e))
            }
            ,
            r.prototype.getBidderSlots = function(t) {
                var e, i, r = {}, n = [];
                for (e = 0; e < t.length; e++) {
                    var o = t[e];
                    for (i = 0; i < o.bidProviders.length; i++) {
                        var s = o.bidProviders[i];
                        r[s] = r[s] || [],
                        r[s].push(o)
                    }
                }
                for (i in this.bidProviders) {
                    var s = this.bidProviders[i];
                    s && s.enabled() && n.push({
                        provider: s,
                        slots: r[i] || []
                    })
                }
                return n
            }
            ,
            r.prototype.start = function(t, e) {
                if (!this.auctionProvider)
                    return c.publish(c.EVENT_TYPE.WARN, "Warning: auction provider is not defined."),
                    this;
                var i = this.newAuctionRun();
                c.setAuctionId(this.getAuctionId(i)),
                c.publish(c.EVENT_TYPE.PUBFOOD_API_START, e),
                this.initAuctionTrigger_(i, r.AUCTION_TYPE.START),
                this.loadProviders(t);
                var n = this.getAuctionRunSlots(i)
                  , o = this.getBidderSlots(n);
                return this.processBids(i, r.AUCTION_TYPE.START, o),
                this
            }
            ,
            r.prototype.refresh = function(t) {
                if (!this.auctionProvider)
                    return c.publish(c.EVENT_TYPE.WARN, "Warning: auction provider is not defined."),
                    this;
                var e = this.newAuctionRun(t);
                c.setAuctionId(this.getAuctionId(e)),
                c.publish(c.EVENT_TYPE.PUBFOOD_API_REFRESH),
                this.initAuctionTrigger_(e, r.AUCTION_TYPE.REFRESH);
                var i = this.getAuctionRunSlots(e)
                  , n = this.getBidderSlots(i);
                return this.processBids(e, r.AUCTION_TYPE.REFRESH, n),
                this
            }
            ,
            r.prototype.processBids = function(t, e, i) {
                for (var r = 0; r < i.length; r++)
                    this.getBids_(t, e, i[r].provider, i[r].slots)
            }
            ,
            r.prototype.setBidProviderCbTimeout = function(t) {
                this.callbackTimeout_ = "number" === n.asType(t) ? t : 2e3
            }
            ,
            r.prototype.getBids_ = function(t, e, i, n) {
                var o = this
                  , s = i.name
                  , a = !1
                  , u = t
                  , p = o.callbackTimeout_
                  , d = function(t) {
                    t.auctionIdx = u,
                    o.pushBid(u, t, s)
                }
                  , h = function() {
                    a || (a = !0,
                    o.doneBid(u, e, s))
                }
                ;
                setTimeout(function() {
                    a || (c.publish(c.EVENT_TYPE.WARN, 'Warning: The bid done callback for "' + s + "\" hasn't been called within the allotted time (" + p / 1e3 + "sec)"),
                    h())
                }, p),
                c.publish(c.EVENT_TYPE.BID_START, s),
                e === r.AUCTION_TYPE.START ? i.init(n, d, h) : i.refresh(n, d, h)
            }
            ,
            r.prototype.pushBid = function(t, e, i) {
                var r = s.fromObject(e);
                r ? (r.provider = i,
                this.auctionRun[t].inAuction ? (this.auctionRun[t].lateBids.push(r),
                c.publish(c.EVENT_TYPE.BID_PUSH_NEXT_LATE, r)) : (this.auctionRun[t].bids.push(r),
                c.publish(c.EVENT_TYPE.BID_PUSH_NEXT, r))) : c.publish(c.EVENT_TYPE.WARN, "Invalid bid object: " + JSON.stringify(e || {}))
            }
            ,
            r.prototype.doneBid = function(t, e, i) {
                c.publish(c.EVENT_TYPE.BID_COMPLETE, i),
                this.auctionRun[t].bidStatus[i] = !0,
                this.checkBids_(t, e)
            }
            ,
            r.prototype.getAuctionCount = function() {
                return this.auctionIdx_
            }
            ,
            r.prototype.getAuctionId = function(t) {
                var e = t || this.auctionIdx_;
                return this.id + ":" + e
            }
            ,
            r.prototype.getAuctionRun = function(t) {
                var e = this.auctionRun[t];
                return "undefined" === n.asType(e) ? {} : e
            }
            ,
            r.prototype.getAuctionRunSlots = function(t) {
                var e = this.auctionRun[t];
                return "undefined" === n.asType(e) ? {} : e.slots
            }
            ,
            r.prototype.getAuctionRunBids = function(t) {
                var e = this.auctionRun[t];
                return "undefined" === n.asType(e) ? [] : e.bids
            }
            ,
            r.prototype.getAuctionRunLateBids = function(t) {
                var e = this.auctionRun[t];
                return "undefined" === n.asType(e) ? [] : e.lateBids
            }
            ,
            r.prototype.getAuctionRunTargeting = function(t) {
                var e = this.auctionRun[t];
                return "undefined" === n.asType(e) ? [] : e.targeting
            }
            ,
            n["extends"](r, l),
            e.exports = r
        }
        , {
            "../assembler/bidassembler": 2,
            "../assembler/requestassembler": 3,
            "../assembler/transformoperator": 4,
            "../event": 6,
            "../model/bid": 10,
            "../model/slot": 11,
            "../provider/auctionprovider": 12,
            "../provider/bidprovider": 13,
            "../pubfoodobject": 15,
            "../util": 16
        }],
        10: [function(t, e, i) {
            "use strict";
            function r(t) {
                this.init_ && this.init_(),
                this.sizes = [],
                this.slot,
                this.value = t || 0,
                this.type = n.asType(this.value),
                this.label,
                this.provider
            }
            var n = t("../util")
              , o = t("../pubfoodobject");
            r.fromObject = function(t) {
                var e = new r
                  , i = n.clone(t);
                for (var o in i)
                    e[o] = i[o];
                var s = n.asType(e.value);
                return e.type = "undefined" !== s ? s : "",
                e
            }
            ,
            r.prototype.setValue = function(t) {
                return this.value = t || "",
                this.type = n.asType(this.value),
                this
            }
            ,
            r.prototype.addSize = function(t, e) {
                var i = Math.abs(~~t)
                  , r = Math.abs(~~e);
                return this.sizes.push([i, r]),
                this
            }
            ,
            n["extends"](r, o),
            e.exports = r
        }
        , {
            "../pubfoodobject": 15,
            "../util": 16
        }],
        11: [function(t, e, i) {
            "use strict";
            function r(t, e) {
                this.init_ && this.init_(),
                this.name = t,
                this.elementId = e,
                this.bidProviders = [],
                this.sizes = []
            }
            var n = t("../util")
              , o = t("../pubfoodobject")
              , s = t("../interfaces").SlotConfig;
            r.validate = function(t) {
                return t ? n.validate(s, t) : !1
            }
            ,
            r.fromObject = function(t) {
                if (!r.validate(t))
                    return null ;
                var e = new r;
                for (var i in t)
                    e[i] = t[i];
                return e
            }
            ,
            r.prototype.addSizes = function(t) {
                return Array.prototype.push.apply(this.sizes, t),
                this
            }
            ,
            r.prototype.addSize = function(t, e) {
                var i = Math.abs(~~t)
                  , r = Math.abs(~~e);
                return this.sizes.push([i, r]),
                this
            }
            ,
            r.prototype.addBidProvider = function(t) {
                return this.bidProviders.push(t),
                this
            }
            ,
            n["extends"](r, o),
            e.exports = r
        }
        , {
            "../interfaces": 7,
            "../pubfoodobject": 15,
            "../util": 16
        }],
        12: [function(t, e, i) {
            "use strict";
            function r(t) {
                this.init_ && this.init_();
                var e = t || {};
                this.name = e.name || "",
                this.auctionDelegate = e
            }
            var n = t("../util")
              , o = t("../interfaces").AuctionDelegate
              , s = t("../event")
              , a = t("../pubfoodobject");
            r.withDelegate = function(t) {
                if (!r.validate(t))
                    return s.publish(s.EVENT_TYPE.INVALID, {
                        msg: "Warn: invalid auction delegate - " + (t && JSON.stringify(t)) || ""
                    }),
                    null ;
                var e = new r(t);
                return e
            }
            ,
            r.validate = function(t) {
                return n.validate(o, t)
            }
            ,
            r.prototype.libUri = function() {
                return this.auctionDelegate.libUri
            }
            ,
            r.prototype.init = function(t, e) {
                this.auctionDelegate.init(t, e)
            }
            ,
            r.prototype.refresh = function(t, e) {
                var i = this.auctionDelegate && this.auctionDelegate.refresh || null ;
                return i ? void i(t, e) : void s.publish(s.EVENT_TYPE.WARN, "AuctionProvider.auctionDelegate.refresh not defined.")
            }
            ,
            n["extends"](r, a),
            e.exports = r
        }
        , {
            "../event": 6,
            "../interfaces": 7,
            "../pubfoodobject": 15,
            "../util": 16
        }],
        13: [function(t, e, i) {
            "use strict";
            function r(t) {
                this.init_ && this.init_();
                var e = t || {};
                this.name = e.name || "",
                this.bidDelegate = e,
                this.enabled_ = !0
            }
            var n = t("../util")
              , o = t("../interfaces").BidDelegate
              , s = t("../event")
              , a = t("../pubfoodobject");
            r.withDelegate = function(t) {
                if (!r.validate(t))
                    return s.publish(s.EVENT_TYPE.WARN, {
                        msg: "Warn: invalid bidder delegate - " + t || ""
                    }),
                    null ;
                var e = new r(t);
                return e
            }
            ,
            r.validate = function(t) {
                return n.validate(o, t)
            }
            ,
            r.prototype.libUri = function(t) {
                return t && (this.bidDelegate.libUri = t),
                this.bidDelegate.libUri
            }
            ,
            r.prototype.sync = function() {
                var t = Array.prototype.slice.call(arguments);
                return t.length > 0 && "boolean" === n.asType(t[0]) && (this.bidDelegate.sync = t[0]),
                !!this.bidDelegate.sync
            }
            ,
            r.prototype.init = function(t, e, i) {
                this.bidDelegate.init(t, e, i)
            }
            ,
            r.prototype.refresh = function(t, e, i) {
                var r = this.bidDelegate && this.bidDelegate.refresh || null ;
                return r ? void r(t, e, i) : void s.publish(s.EVENT_TYPE.WARN, "BidProvider.bidDelegate.refresh not defined.")
            }
            ,
            r.prototype.enabled = function(t) {
                return "boolean" === n.asType(t) && (this.enabled_ = t),
                this.enabled_
            }
            ,
            n["extends"](r, a),
            e.exports = r
        }
        , {
            "../event": 6,
            "../interfaces": 7,
            "../pubfoodobject": 15,
            "../util": 16
        }],
        14: [function(t, e, i) {
            "use strict";
            var r = t("./event")
              , n = t("./util")
              , o = t("./logger")
              , s = t("./interfaces").BidDelegate
              , a = t("./mediator/auctionmediator");
            !function(t, i, r) {
                t && (e.exports = r(t, t.pfConfig || {}))
            }(window || {}, void 0, function(e) {
                if (e.pubfood)
                    return e.pubfood.library.logger.logEvent(r.EVENT_TYPE.WARN, ["multiple api load"]),
                    e.pubfood;
                var i = function(t) {
                    return new i.library.init(t)
                }
                ;
                i.library = i.prototype = {
                    version: "0.1.14",
                    PubfoodError: t("./errors"),
                    logger: o
                };
                var u = function(t) {
                    var e = t.getBidProviders();
                    for (var i in t.requiredApiCalls)
                        0 === t.requiredApiCalls[i] && t.configErrors.push('"' + i + '" was not called');
                    for (var r = t.getSlots(), n = 0; n < r.length; n++)
                        for (var o = 0; o < r[n].bidProviders.length; o++) {
                            var s = r[n].bidProviders[o];
                            e[s] || t.configErrors.push('No configuration found for bid provider "' + s + '"')
                        }
                    return {
                        hasError: t.configErrors.length > 0,
                        details: t.configErrors
                    }
                }
                  , p = i.library.init = function(t) {
                    return t && (this.auctionProviderTimeout_ = t.auctionProviderCbTimeout || 2e3,
                    this.bidProviderTimeout_ = t.bidProviderCbTimeout || 2e3,
                    this.randomizeBidRequests_ = !!t.randomizeBidRequests),
                    this.mediator = new a,
                    r.publish(r.EVENT_TYPE.PUBFOOD_API_LOAD),
                    this.pushApiCall_("api.init", arguments),
                    this.configErrors = [],
                    this.requiredApiCalls = {
                        setAuctionProvider: 0,
                        addBidProvider: 0
                    },
                    this
                }
                ;
                return p.prototype.pushApiCall_ = function(t, e) {
                    this.library.logger.logCall(t, this.getAuctionId(), e)
                }
                ,
                p.prototype.getAuctionId = function() {
                    return this.mediator.getAuctionId()
                }
                ,
                p.prototype.dumpLog = function(t) {
                    this.library.logger.dumpLog(t)
                }
                ,
                p.prototype.addSlot = function(t) {
                    !n.isObject(t) || n.isArray(t.bidProviders) && 0 !== t.bidProviders.length || (t.bidProviders = ["__default__"],
                    this.mediator.bidProviderExists_("__default__") || this.mediator.addBidProvider(s)),
                    this.pushApiCall_("api.addSlot", arguments);
                    var e = this.mediator.addSlot(t);
                    return this.requiredApiCalls.addSlot++,
                    e
                }
                ,
                p.prototype.getSlots = function() {
                    this.pushApiCall_("api.getSlots", arguments);
                    var t = [];
                    for (var e in this.mediator.slotMap)
                        t.push(this.mediator.slotMap[e]);
                    return t
                }
                ,
                p.prototype.getSlot = function(t) {
                    return this.pushApiCall_("api.getSlot", arguments),
                    this.mediator.slotMap[t]
                }
                ,
                p.prototype.setAuctionProvider = function(t) {
                    this.pushApiCall_("api.setAuctionProvider", arguments);
                    var e = this.mediator.setAuctionProvider(t)
                      , i = t && t.name ? t.name : "undefined";
                    return e ? (this.mediator.setAuctionProviderCbTimeout(this.auctionProviderTimeout_),
                    this.requiredApiCalls.setAuctionProvider++,
                    e) : (this.configErrors.push("Invalid auction provider: " + i),
                    null )
                }
                ,
                p.prototype.getAuctionProvider = function() {
                    return this.pushApiCall_("api.getAuctionProvider", arguments),
                    this.mediator.auctionProvider
                }
                ,
                p.prototype.addBidProvider = function(t) {
                    this.pushApiCall_("api.addBidProvider", arguments);
                    var e = this.mediator.addBidProvider(t)
                      , i = t && t.name ? t.name : "undefined";
                    return e ? (this.mediator.setBidProviderCbTimeout(this.bidProviderTimeout_),
                    this.requiredApiCalls.addBidProvider++,
                    "function" === n.asType(t.init) && 3 !== t.init.length && this.configErrors.push("Bid provider " + i + "'s init method requires 3 arguments"),
                    "function" === n.asType(t.refresh) && 3 !== t.refresh.length && this.configErrors.push("Bid provider " + i + "'s refresh method requires 3 arguments"),
                    e) : (this.configErrors.push("Invalid bid provider: " + i),
                    null )
                }
                ,
                p.prototype.getBidProviders = function() {
                    return this.pushApiCall_("api.getBidProviders", arguments),
                    this.mediator.bidProviders
                }
                ,
                p.prototype.getBidProvider = function(t) {
                    return this.pushApiCall_("api.getBidProvider", arguments),
                    this.mediator.bidProviders[t]
                }
                ,
                p.prototype.observe = function(t, e) {
                    if (this.pushApiCall_("api.observe", arguments),
                    "function" == typeof t)
                        for (var i in r.EVENT_TYPE)
                            r.on(r.EVENT_TYPE[i], n.bind(t, this));
                    else
                        "string" == typeof t && (r.EVENT_TYPE[t] ? r.on(r.EVENT_TYPE[t], n.bind(e, this)) : r.publish(r.EVENT_TYPE.WARN, 'Warning: Invalid event type "' + t + '"'));
                    return this
                }
                ,
                p.prototype.timeout = function(t) {
                    return this.pushApiCall_("api.timeout", arguments),
                    this.mediator.timeout(t),
                    this
                }
                ,
                p.prototype.setAuctionTrigger = function(t) {
                    return this.pushApiCall_("api.setAuctionTrigger", arguments),
                    this.mediator.setAuctionTrigger(t),
                    this
                }
                ,
                p.prototype.addBidTransform = function(t) {
                    return this.pushApiCall_("api.addBidTransform", arguments),
                    this.mediator.addBidTransform(t),
                    this
                }
                ,
                p.prototype.addRequestTransform = function(t) {
                    return this.pushApiCall_("api.addRequestTransform", arguments),
                    this.mediator.addRequestTransform(t),
                    this
                }
                ,
                p.prototype.start = function(t, e) {
                    this.pushApiCall_("api.start", arguments);
                    var i = u(this);
                    return "function" == typeof e && e(i.hasError, i.details),
                    i.hasError || this.mediator.start(this.randomizeBidRequests_, t),
                    this
                }
                ,
                p.prototype.refresh = function(t) {
                    return this.pushApiCall_("api.refresh", arguments),
                    this.mediator.refresh(t),
                    this
                }
                ,
                p.prototype.library = i.library,
                e.pubfood = i,
                i
            })
        }
        , {
            "./errors": 5,
            "./event": 6,
            "./interfaces": 7,
            "./logger": 8,
            "./mediator/auctionmediator": 9,
            "./util": 16
        }],
        15: [function(t, e, i) {
            "use strict";
            function r() {
                this.id = n.newId(),
                this.params_ = {}
            }
            var n = t("./util");
            r.prototype.setParam = function(t, e) {
                var i = n.asType(t);
                return "object" !== i && "array" !== i && "function" !== i && "undefined" !== i && (this.params_[t] = e),
                this
            }
            ,
            r.prototype.getParam = function(t) {
                return this.params_[t]
            }
            ,
            r.prototype.getParamKeys = function() {
                var t = [];
                for (var e in this.params_)
                    t.push(this.params_[e]);
                return t
            }
            ,
            e.exports = r
        }
        , {
            "./util": 16
        }],
        16: [function(t, e, i) {
            "use strict";
            var r = {
                asType: function(t) {
                    return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
                },
                newId: function() {
                    return (+new Date).toString(36) + "xxxxxxxxxx".replace(/[x]/g, function() {
                        return (0 | 36 * Math.random()).toString(36)
                    })
                },
                "extends": function(t, e) {
                    for (var i in e.prototype)
                        t.prototype[i] = e.prototype[i];
                    t.prototype.parents = t.prototype.parents || [],
                    t.prototype.parents.push(function() {
                        return e
                    }),
                    t.prototype.init_ = function() {
                        for (var t = this.parents || [], e = 0; e < t.length; e++)
                            t[e]().call(this)
                    }
                },
                hasFunctions: function(t, e) {
                    if (!t)
                        return !1;
                    for (var i = !0, n = 0; n < e.length; n++) {
                        var o = e[n];
                        if (!t[o] || "function" === !r.asType(t[o])) {
                            i = !1;
                            break
                        }
                    }
                    return i
                },
                loadUri: function(t, e) {
                    var i = document
                      , r = t || "";
                    if (e)
                        if ("complete" === i.readyState || "loaded" === i.readyState)
                            ;
                        else
                            try {
                                i.write('<script src="' + r + '"></script>')
                            } catch (n) {}
                    else {
                        var o = document.createElement("script");
                        o.async = !0,
                        o.src = r,
                        (i.head || i.body || i.documentElement).appendChild(o)
                    }
                },
                bind: function(t, e) {
                    return function() {
                        t.apply(e, Array.prototype.slice.call(arguments))
                    }
                },
                mergeToObject: function(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (this.isObject(e[i]) ? (t[i] || (t[i] = {}),
                        this.mergeToObject(t[i], e[i])) : this.isArray(e[i]) ? (t[i] || (t[i] = []),
                        this.mergeToArray(t[i], e[i])) : t[i] = e[i]);
                    return t
                },
                mergeToArray: function(t, e) {
                    for (var i = 0; i < e.length; i++)
                        t.push(this.clone(e[i]));
                    return t
                },
                isArray: function(t) {
                    return !!t && "array" === this.asType(t)
                },
                isObject: function(t) {
                    return !!t && "object" === this.asType(t)
                },
                clone: function(t) {
                    return this.isObject(t) ? this.cloneObject(t) : this.isArray(t) ? this.cloneArray(t) : t
                },
                cloneArray: function(t) {
                    return this.mergeToArray([], t)
                },
                cloneObject: function(t) {
                    return this.mergeToObject({}, t)
                },
                values: function(t) {
                    var e = [];
                    for (var i in t)
                        e.push(t[i]);
                    return e
                },
                validate: function(t, e) {
                    if (!e)
                        return !1;
                    var i = 0;
                    for (var n in t)
                        if ("optional" !== n) {
                            var o = !!t.optional && !!t.optional[n]
                              , s = e.hasOwnProperty(n)
                              , a = this.asType(e[n])
                              , u = !e.init
                              , p = !0;
                            if (("null" === a || "undefined" === a || "number" === a && !isFinite(e[n]) || "string" === a && "" === e[n]) && (p = !1),
                            o || s && p || ++i,
                            p && u && r.isArray(e[n]) && 0 === e[n].length && ++i,
                            p && !u && r.asType(e[n]) !== r.asType(t[n]) && ++i,
                            i > 0)
                                break
                        }
                    return !i
                }
            };
            r.randomize = function(t) {
                for (var e, i, r = t.length; r; )
                    i = Math.floor(Math.random() * r--),
                    e = t[r],
                    t[r] = t[i],
                    t[i] = e;
                return t
            }
            ,
            e.exports = r
        }
        , {}]
    }, {}, [14])(14)
});
// END pubfood
// START common ad variable initializations
window.googletag = window.googletag || {};
googletag.cmd = googletag.cmd || [];
var gptadslots = {};
// END common ad variable initializations
var AddktHeader;
AddktHeader = {
    defineSlotsAndAuctionProvider: function() {
        for (var i = 0; i < addktAdConfig.slots.length; i++) {
            var slot = addktAdConfig.slots[i];
            if (AddktHeader.shouldIncludeSlotInAuction(slot)) {
                AddktHeader.pf.addSlot(slot);
            }
            AddktHeader.consolidatedBids[slot.name] = {
                'bids': [],
                'bidders': {}
            };
            for (var b = 0; b < slot.bidProviders.length; b++) {
                var provider = slot.bidProviders[b];
                AddktHeader.consolidatedBids[slot.name]['bidders'][provider] = [];
            }
        }
        AddktHeader.pf.setAuctionProvider({
            name: 'Google',
            libUri: '//www.googletagservices.com/tag/js/gpt.js',
            init: function(targeting, done) {
                googletag.cmd.push(function() {
                    var i;
                    for (i = 0; i < targeting.length; i++) {
                        var slot = targeting[i];
                        var gptslot = googletag.defineSlot(slot.name, slot.sizes, slot.elementId).addService(googletag.pubads());
                        gptadslots[slot.elementId] = gptslot;
                        for (var p in slot.targeting) {
                            if (slot.targeting.hasOwnProperty(p)) {
                                gptslot.setTargeting(p, slot.targeting[p]);
                            }
                        }
                    }
                    googletag.pubads().setTargeting('session-depth', AddktHeader.currDepth);
                    googletag.pubads().addEventListener("slotRenderEnded", function(event) {
                        try {
                            AddktHeader.logBidWin(event)
                        } catch (err) {}
                    });
                });
                googletag.cmd.push(function() {
                    googletag.enableServices();
                    done();
                });
            },
            refresh: function(targeting, done) {}
        });
    },
    generateRandom: function() {
        return Math.floor(1E10 * Math.random());
    },
    getPageUrl: function() {
        var loc = '';
        try {
            loc = window.top.location.href;
        } catch (e) {
            loc = window.location.href;
        }
        return loc;
    },
    getReferrerUrl: function() {
        return document.referrer;
    },
    getCookie: function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    },
    getAndIncrementSessionDepth: function() {
        var now = new Date();
        now.setTime(now.getTime() + 3600 * 1000);
        var expiration = now.toUTCString();
        var currSessDepth = this.getCookie('addkt-ad-session');
        if (currSessDepth == '') {
            document.cookie = 'addkt-ad-session=1; expires=' + expiration + ';path=/';
            currSessDepth = '0';
        }
        var new_depth = parseInt(currSessDepth) + 1;
        document.cookie = 'addkt-ad-session=' + new_depth + '; expires=' + expiration + ';path=/';
        return currSessDepth;
    },
    calcBidVal: function(bid_price, rev_share) {
        if (!bid_price) {
            return 0;
        }
        rev_share = typeof rev_share !== 'undefined' ? rev_share : 1;
        var centsBid = Math.floor(bid_price * 100);
        // account for rev_share
        centsBid = centsBid * rev_share;
        // round all bids for our bidding levels
        var finalBid = 0;
        if (centsBid <= 50) {
            finalBid = Math.ceil(centsBid);
        } else if (50 < centsBid && centsBid <= 500) {
            finalBid = Math.ceil(Math.ceil(centsBid / 5) * 5);
        } else if (500 < centsBid && centsBid <= 1000) {
            finalBid = Math.ceil(Math.ceil(centsBid / 10) * 10);
        } else if (1000 < centsBid && centsBid <= 2000) {
            finalBid = Math.ceil(Math.ceil(centsBid / 50) * 50);
        } else if (2000 < centsBid && centsBid <= 5000) {
            finalBid = Math.ceil(Math.ceil(centsBid / 100) * 100);
        } else {
            finalBid = 5000;
        }
        return finalBid;
    },
    setupBidProviders: function() {
        for (var i = 0; i < addktAdConfig.enabledProviders.length; i++) {
            var bdr = addktAdConfig.enabledProviders[i];
            try {
                AddktHeader.bidders[bdr].setup();
            } catch (err) {}
        }
    },
    defineBidProviders: function() {
        for (var i = 0; i < addktAdConfig.enabledProviders.length; i++) {
            var bdr = addktAdConfig.enabledProviders[i];
            try {
                AddktHeader.pf.addBidProvider({
                    name: bdr,
                    libUri: AddktHeader.bidders[bdr].getScriptPath(),
                    init: AddktHeader.bidders[bdr].init,
                    refresh: AddktHeader.bidders[bdr].refresh
                });
            } catch (err) {}
        }
    },
    initialize: function() {
        this.consolidatedBids = {};
        this.bidsByBidder = {};
        this.adsIsMobile = ((document.documentElement.clientWidth || document.body.clientWidth) < 668);
        // current session depth and platform
        this.currDepth = this.getAndIncrementSessionDepth();
        this.providerTimeout = this.currDepth == 0 ? (this.adsIsMobile ? 4000 : 2750) : (this.adsIsMobile ? 2750 : 2250);
        AddktHeader.pf = new pubfood({
            auctionProviderCbTimeout: 3000,
            bidProviderCbTimeout: this.providerTimeout,
            randomizeBidRequests: false
        });
        AddktHeader.pf.timeout(this.providerTimeout);
        this.timeReference = +(new Date());
    },
    runAuction: function() {
        var onStart = function(hasErrors, details) {
            if (hasErrors) {
                console.log('error details', details);
            } else {//console.log('no error');
            }
        }
        ;
        AddktHeader.pf.start(AddktHeader.timeReference, onStart);
    },
    getProtocol: function() {
        return ( 'https:' == document.location.protocol ? 'https://' : 'http://') ;
    },
    loadScript: function(scriptUrl) {
        if (!/^(f|ht)tps?:\/\//i.test(scriptUrl)) {
            scriptUrl = AddktHeader.getProtocol() + scriptUrl;
        }
        var adScript = document.createElement('script');
        adScript.type = 'text/javascript';
        adScript.async = true;
        adScript.src = scriptUrl;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(adScript, s);
    },
    makeRequest: function(url, success) {
        try {
            url = AddktHeader.getProtocol() + url;
            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.onreadystatechange = handleStateChange;
            request.withCredentials = true;
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
            function handleStateChange() {
                if (request.readyState === 4) {
                    if (this.status >= 200 && this.status < 300) {
                        var response = JSON.parse(request.responseText);
                        success(response);
                    }
                }
            }
        } catch (err) {}
    },
    getGptSlotFromSlot: function(slot) {
        var slotName;
        if (typeof slot.name !== 'undefined') {
            slotName = slot.name;
        } else {
            slotName = slot.slotName;
        }
        for (var sli = 0; sli < addktAdConfig.slots.length; sli++) {
            var gptslot = addktAdConfig.slots[sli];
            if (gptslot.name == slotName) {
                return gptslot;
            }
        }
    },
    shouldIncludeSlotInAuction: function(slot) {
        try {
            var gptslot = AddktHeader.getGptSlotFromSlot(slot);
            return ( gptslot.isMobile == AddktHeader.adsIsMobile) ;
        } catch (err) {
            return true;
        }
    },
    bidders: {
        'casale': {
            setup: function() {
                AddktHeader.bidsByBidder['casale'] = {}
            },
            getScriptPath: function() {
                return ' ';
            },
            init: function(slots, pushBid, done) {
                window.indexCallback = function(response) {
                    if (typeof response.seatbid != 'undefined') {
                        for (var i = 0; i < response.seatbid.length; i++) {
                            var bids = response.seatbid[i];
                            for (var g = 0; g < bids.bid.length; g++) {
                                try {
                                    var bid = bids.bid[g];
                                    AddktHeader.bidsByBidder['casale'][bid.impid] = bid;
                                    var idxSlot = addktAdConfig.bidders['casale'].slots[bid.impid];
                                    var slotTargeting = {};
                                    var rawPrice = parseInt(bid.ext.pricelevel.slice(1));
                                    var idxBid = AddktHeader.calcBidVal(rawPrice / 100)
                                    //PMP
                                    if (typeof bid.deal != 'undefined') {
                                        slotTargeting['P'] = bid.impid + '_' + bid.deal;
                                    } else {
                                        //Open market
                                        slotTargeting['O'] = bid.impid + '_' + idxBid;
                                    }
                                    var sizes = [idxSlot.defaultWidth, idxSlot.defaultHeight]
                                    slotTargeting['idx_size'] = idxSlot.defaultWidth + 'x' + idxSlot.defaultHeight;
                                    var bidObject = {
                                        slot: idxSlot.slotName,
                                        value: idxBid,
                                        sizes: sizes,
                                        targeting: slotTargeting
                                    };
                                    pushBid(bidObject);
                                } catch (err) {}
                            }
                        }
                    }
                    done();
                }
                ;
                var idxBidder = addktAdConfig.bidders['casale'];
                var httpEndPoint = "http://as.casalemedia.com/cygnus";
                var httpsEndPoint = "https://as-sec.casalemedia.com/cygnus";
                var scriptURL = document.location.protocol === "https:" ? httpsEndPoint : httpEndPoint;
                var cb = 1e18 * Math.random();
                var fn = 'indexCallback';
                var pid = idxBidder.partnerId;
                var s = idxBidder.siteId;
                var bidRequest = {
                    id: AddktHeader.generateRandom(),
                    site: {
                        "ref": document.referrer,
                        "page": AddktHeader.getPageUrl()
                    },
                    imp: []
                };
                var idxSlots = addktAdConfig.bidders['casale'].slots;
                for (var isl in idxSlots) {
                    if (idxSlots.hasOwnProperty(isl)) {
                        var slt = idxSlots[isl];
                        if (AddktHeader.shouldIncludeSlotInAuction(slt)) {
                            var banner = {
                                h: slt.defaultHeight,
                                w: slt.defaultWidth,
                                topframe: 1
                            }
                            var ext = {
                                sid: slt.id,
                                siteID: slt.siteId
                            }
                            var imp = {
                                banner: banner,
                                ext: ext,
                                id: slt.id
                            };
                            if (slt.baseFloor > 0) {
                                imp.bidfloor = slt.baseFloor,
                                imp.bidfloorcur = 'USD'
                            }
                            bidRequest.imp.push(imp);
                        }
                    }
                }
                scriptURL += '?v=7&fn=' + fn + '&pid=' + pid + '&cb=' + cb + '&s=' + s + '&r=' + JSON.stringify(bidRequest);
                ;AddktHeader.loadScript(scriptURL);
            },
            refresh: function(slots, pushBid, done) {},
            render: function(e, slt) {
                try {
                    var rawBid = AddktHeader.bidsByBidder['casale'][slt];
                    var idxSlot = addktAdConfig.bidders['casale'].slots[slt];
                    e.write(rawBid.adm);
                    e.close();
                    if (e.defaultView && e.defaultView.frameElement) {
                        e.defaultView.frameElement.width = idxSlot.defaultWidth;
                        e.defaultView.frameElement.height = idxSlot.defaultHeight;
                    }
                } catch (err) {}
            }
        },
        'openx': {
            setup: function() {
                AddktHeader.bidsByBidder['openx'] = {};
                window.OX_dfp_ads = [];
            },
            getScriptPath: function() {
                var openXTag = addktAdConfig.bidders['openx'].mobileScriptPath;
                if (AddktHeader.adsIsMobile) {
                    openXTag = addktAdConfig.bidders['openx'].mobileScriptPath;
                }
                return openXTag;
            },
            init: function(slots, pushBid, done) {
                window.openxCallback = function(response) {
                    try {
                        if (typeof response.ads != "undefined" && response.ads.adunits.length > 0) {
                            for (i = 0; i < response.ads.adunits.length; i++) {
                                var oxunit = response.ads.adunits[i];
                                var pid = oxunit.auid;
                                if (oxunit.chain.length > 0) {
                                    var oxAd = oxunit.chain[0]
                                    var oxslot;
                                    var oxslots = addktAdConfig.bidders['openx'].slots;
                                    for (var osl in oxslots) {
                                        if (oxslots.hasOwnProperty(osl)) {
                                            if (oxslots[osl].id == pid) {
                                                oxslot = oxslots[osl];
                                                break;
                                            }
                                        }
                                    }
                                    var br = 'p'
                                    var bp = 0;
                                    if (oxAd.cpipc != 0 && oxAd.cpipc != 't') {
                                        bp = oxAd.cpipc;
                                        var oxBid = AddktHeader.calcBidVal(oxAd.cpipc / 1000);
                                        AddktHeader.bidsByBidder['openx'][osl] = {
                                            ad: oxAd,
                                            fullResponse: response.ads
                                        };
                                        var sizes = [oxAd.width, oxAd.height];
                                        var slotTargeting = {};
                                        slotTargeting[osl] = oxBid;
                                        slotTargeting['ox_size'] = oxAd.width + 'x' + oxAd.height;
                                        var bidObject = {
                                            slot: oxslot.slotName,
                                            value: oxBid,
                                            sizes: sizes,
                                            targeting: slotTargeting
                                        };
                                        pushBid(bidObject);
                                    } else {
                                        if (oxAd.cpipc == 0) {
                                            br = 'n'
                                        }
                                        if (oxAd.cpipc == 't') {
                                            br = 't';
                                        }
                                    }
                                    //register the bidResponse
                                    var endT = new Date();
                                    var bd = endT - oxTimer;
                                    var bt = 5000;
                                    var ts = oxAd.ts;
                                    var beaconUrl = 'http://' + addktAdConfig.bidders['openx'].baseUrl + '/w/1.0/bo?br=' + br + '&bd=' + bd + '&bt=' + bt + '&bp=' + bp + '&ts=' + ts;
                                    (new Image()).src = beaconUrl;
                                }
                            }
                        }
                    } catch (err) {}
                    oxCounter++;
                    if (oxCounter == oxTotal) {
                        done();
                    }
                }
                ;
                window.oxDone = null ;
                var oxCounter = 0;
                var oxTotal = 0;
                var oxTimer = new Date();
                var elapsed = 0;
                function waitForOX() {
                    if (elapsed >= AddktHeader.providerTimeout) {
                        clearTimeout(oxwaiting);
                        done();
                    }
                    if (typeof window.OX !== "undefined") {
                        var oxslots = addktAdConfig.bidders['openx'].slots;
                        for (var isl in oxslots) {
                            if (oxslots.hasOwnProperty(isl)) {
                                var slt = oxslots[isl];
                                if (AddktHeader.shouldIncludeSlotInAuction(slt)) {
                                    try {
                                        var gptslot = AddktHeader.getGptSlotFromSlot(slt);
                                        var gpt_sizes = gptslot.sizes;
                                        var ox_szs = [];
                                        for (var s = 0; s < gpt_sizes.length; s++) {
                                            var ss = gpt_sizes[s][0] + 'x' + gpt_sizes[s][1];
                                            ox_szs.push(ss);
                                        }
                                        ox_szs = ox_szs.join(',')
                                        var scriptURL = OX().createAdRequestURL()
                                        var cbregex = /callback\=(.*?)\&/;
                                        var cbmatched = cbregex.exec(scriptURL)[1];
                                        scriptURL = scriptURL.replace(cbmatched, 'openxCallback')
                                        // get ad unit x and y
                                        try {
                                            var elem = document.getElementById(gptslot.elementId);
                                            var rect = elem.getBoundingClientRect();
                                            var xyregex = /adxy\=\&/;
                                            var xymatched = xyregex.exec(scriptURL);
                                            scriptURL = scriptURL.replace(xymatched, 'adxy=' + encodeURIComponent(rect.left + ',' + rect.top) + '&');
                                        } catch (err) {}
                                        // window dims
                                        var dimsregex = /dims\=\&/;
                                        var dimsmatched = dimsregex.exec(scriptURL);
                                        var newdims = document.height + 'x' + document.width;
                                        scriptURL = scriptURL.replace(dimsmatched, 'dims=' + newdims + '&');
                                        scriptURL += '&aus=' + encodeURIComponent(ox_szs);
                                        scriptURL += '&auid=' + slt.id;
                                        scriptURL += '&bc=hb_2api';
                                        if (slt.baseFloor > 0) {
                                            var flr = slt.baseFloor * 1000;
                                            scriptURL += '&aumf=' + encodeURIComponent(slt.id + ':' + flr);
                                        }
                                        AddktHeader.loadScript(scriptURL)
                                        oxTotal++;
                                    } catch (err) {}
                                }
                            }
                        }
                    } else {
                        var oxwaiting = setTimeout(function() {
                            waitForOX();
                        }, 50);
                        elapsed += 50;
                    }
                }
                waitForOX();
            },
            refresh: function(slots, pushBid, done) {},
            render: function(e, slt) {
                try {
                    var oxSlot = AddktHeader.bidsByBidder['openx'][slt];
                    var oxAd = oxSlot.ad;
                    var adCode = oxAd.html;
                    // Add record/impression pixel to the creative HTML
                    var recordPixel = OX.utils.template(oxSlot.fullResponse.record_tmpl, {
                        medium: OX.utils.getMedium(),
                        rtype: OX.Resources.RI,
                        txn_state: oxAd.ts
                    });
                    adCode += '<div style="position:absolute;left:0px;top:0px;visibility:hidden;"><img src="' + recordPixel + '"></div>';
                    e.write(adCode);
                    e.close();
                    if (e.defaultView && e.defaultView.frameElement) {
                        e.defaultView.frameElement.width = oxAd.width;
                        e.defaultView.frameElement.height = oxAd.height;
                    }
                } catch (err) {}
            }
        },
        'sovrn': {
            setup: function() {
                var url = 'http://gslbeacon.lijit.com/beacon?viewId=' + addktAdConfig.bidders['sovrn'].username + '_auction_api';
                url = url + '&rand=' + Math.floor(9e3 * Math.random());
                url = url + '&informer=' + addktAdConfig.bidders['sovrn'].informerId + '&type=fpads';
                url = url + "&loc=" + window.location.hostname;
                url = url + "&v=1.2";
                (new Image()).src = url;
                AddktHeader.bidsByBidder['sovrn'] = {}
            },
            getScriptPath: function() {
                try {
                    var sovrn_keys = [];
                    var sovrnSlots = addktAdConfig.bidders['sovrn'].slots;
                    for (var index in sovrnSlots) {
                        if (sovrnSlots.hasOwnProperty(index)) {
                            var sovrnslot = sovrnSlots[index];
                            if (AddktHeader.shouldIncludeSlotInAuction(sovrnslot)) {
                                var banner = {
                                    "w": sovrnslot.defaultWidth,
                                    "h": sovrnslot.defaultHeight
                                }
                                var item = {
                                    'id': index,
                                    'banner': banner,
                                    'tagid': sovrnslot.id
                                }
                                if (sovrnslot.baseFloor > 0) {
                                    item['bidfloor'] = sovrnslot.baseFloor;
                                }
                                sovrn_keys.push(item)
                            }
                        }
                    }
                    var sovrn_json = {
                        "id": 13385112,
                        "site": {
                            "domain": window.location.hostname,
                            "page": window.location.pathname
                        },
                        "imp": sovrn_keys
                    };
                    var sovrn_json_string = JSON.stringify(sovrn_json);
                    var encodedSovrn = encodeURIComponent(sovrn_json_string);
                    return 'http://ap.lijit.com/rtb/bid?callback=sovrn_callback&br=' + encodedSovrn + '&rand=' + Math.floor(9e6 * Math.random());
                } catch (err) {
                    return ' ';
                }
            },
            init: function(slots, pushBid, done) {
                window.sovrn_callback = function(sovrn_data) {
                    try {
                        for (var j = 0; j < sovrn_data.seatbid[0].bid.length; j++) {
                            var bid_obj = sovrn_data.seatbid[0].bid[j];
                            if (bid_obj.impid && bid_obj.adm && bid_obj.nurl.length != 0) {
                                var sovrn_bid = AddktHeader.calcBidVal(bid_obj.price);
                                var svrn_slot = bid_obj.impid;
                                AddktHeader.bidsByBidder['sovrn'][svrn_slot] = {
                                    'ad': bid_obj.adm,
                                    'nurl': bid_obj.nurl,
                                    'bid': sovrn_bid
                                };
                                var sslot = addktAdConfig.bidders['sovrn'].slots[svrn_slot];
                                var sizes = [sslot.defaultWidth, sslot.defaultHeight];
                                var slotTargeting = {};
                                slotTargeting[svrn_slot] = sovrn_bid;
                                slotTargeting['svrn_size'] = sslot.defaultWidth + 'x' + sslot.defaultHeight;
                                var bidObject = {
                                    slot: sslot.slotName,
                                    value: sovrn_bid,
                                    sizes: sizes,
                                    targeting: slotTargeting
                                };
                                pushBid(bidObject);
                            }
                        }
                    } catch (e) {}
                    done();
                }
                ;
            },
            refresh: function(slots, pushBid, done) {},
            render: function(e, slt) {
                try {
                    var bid_obj = AddktHeader.bidsByBidder['sovrn'][slt];
                    (new Image()).src = decodeURIComponent(bid_obj.nurl);
                    var svrn_ad = decodeURIComponent(bid_obj.ad);
                    e.write(svrn_ad);
                } catch (err) {}
            }
        },
        'yieldbot': {
            setup: function() {
                window.ybotq = window.ybotq || [];
                AddktHeader.bidsByBidder['yieldbot'] = {};
            },
            getScriptPath: function() {
                return '//cdn.yldbt.com/js/yieldbot.intent.js';
            },
            init: function(slots, pushBid, done) {
                var slotMap = {};
                var ybotSlots = addktAdConfig.bidders['yieldbot'].slots;
                ybotq.push(function() {
                    var psn = AddktHeader.adsIsMobile ? addktAdConfig.bidders['yieldbot'].mobileId : addktAdConfig.bidders['yieldbot'].desktopId;
                    yieldbot.pub(psn);
                    for (var k = 0; k < slots.length; k++) {
                        var slot = slots[k];
                        for (var slt in ybotSlots) {
                            if (ybotSlots.hasOwnProperty(slt) && ybotSlots[slt].slotName == slot.name) {
                                var ybslot = slt;
                                break;
                            }
                        }
                        yieldbot.defineSlot(ybslot, {
                            sizes: slot.sizes
                        });
                        slotMap[ybslot] = slot.name;
                    }
                    yieldbot.enableAsync();
                    yieldbot.go();
                });
                ybotq.push(function() {
                    var pageCriteria = yieldbot.getPageCriteria();
                    var pageSlots = pageCriteria !== '' ? pageCriteria.split(',') : [];
                    for (var i = 0; i < pageSlots.length; i++) {
                        var slotInfo = pageSlots[i].split(':');
                        var slot = slotInfo[0];
                        var size = slotInfo[1];
                        var bid = 0;
                        if (slotInfo.length && slotInfo[2]) {
                            bid = parseFloat(slotInfo[2], 10);
                        }
                        var sizes = size.split('x');
                        sizes[0] = parseInt(sizes[0], 10);
                        sizes[1] = parseInt(sizes[1], 10);
                        AddktHeader.bidsByBidder['yieldbot'][slot] = {
                            'bid': bid,
                            'unit': ybotSlots[slot].slotName
                        };
                        // submit my bid...
                        var bidObject = {
                            slot: ybotSlots[slot].slotName || 'undefined_slot',
                            value: bid,
                            sizes: sizes,
                            targeting: {
                                ybot_size: size,
                                ybot_cpm: bid,
                                ybot_ad: 'y',
                                ybot_slot: slot
                            }
                        };
                        pushBid(bidObject);
                    }
                    done();
                });
            },
            refresh: function(slots, pushBid, done) {},
            render: function(e, slt) {}
        },
        'amazon': {
            setup: function() {
                window.amznads = window.amznads || [];
            },
            getScriptPath: function() {
                return '//c.amazon-adsystem.com/aax2/amzn_ads.js';
            },
            init: function(slots, pushBid, done) {
                amznads.asyncParams = {
                    'id': addktAdConfig.bidders['amazon'].siteId,
                    'callbackFn': function() {
                        try {
                            amznads.setTargetingForGPTAsync('amznslots');
                            done();
                        } catch (e) {
                            done();
                        }
                    },
                    'timeout': 2e3
                };
            },
            refresh: function(slots, pushBid, done) {}
        },
        'rubicon': {
            setup: function() {
                AddktHeader.bidsByBidder['rubicon'] = {};
                window.rubicontag = window.rubicontag || {};
                window.rubicontag.cmd = window.rubicontag.cmd || [];
                window.RUBICON_SIZE_MAP = {
                    '728x90': 2,
                    '160x600': 9,
                    '300x600': 10,
                    '300x250': 15,
                    '320x50': 43,
                    '300x1050': 54,
                    '970x90': 55,
                    '970x250': 57
                };
            },
            getScriptPath: function() {
                return '//ads.rubiconproject.com/header/' + addktAdConfig.bidders['rubicon'].siteId + '.js';
            },
            init: function(slots, pushBid, done) {
                window.rubicontag.cmd.push(function() {
                    var rbslots = [];
                    var rubiconSlots = addktAdConfig.bidders['rubicon'].slots;
                    for (var rbslot in rubiconSlots) {
                        if (rubiconSlots.hasOwnProperty(rbslot)) {
                            var rbparams = rubiconSlots[rbslot];
                            if (AddktHeader.shouldIncludeSlotInAuction(rbparams)) {
                                var temp_sizes = [];
                                temp_sizes.push(RUBICON_SIZE_MAP[rbparams.defaultWidth + 'x' + rbparams.defaultHeight]);
                                var slotParams = {
                                    siteId: rbparams.siteId,
                                    zoneId: rbparams.zoneId,
                                    id: rbparams.slotName,
                                    sizes: temp_sizes
                                }
                                if (rbparams.baseFloor > 0) {//slotParams.rp_floor = rbparams.baseFloor;
                                }
                                var slot = window.rubicontag.defineSlot(slotParams);
                                slot.clearTargeting();
                                rbslots.push(slot);
                            }
                        }
                    }
                    var parameters = {
                        slots: rbslots
                    };
                    function cpmSort(adA, adB) {
                        return (adB.cpm || 0.0) - (adA.cpm || 0.0);
                    }
                    var rubiconCallback = function(rSlots) {
                        var respSlots = rSlots.aSlots;
                        for (var si = 0; si < respSlots.length; si++) {
                            var slt = respSlots[si];
                            var ads = slt.getRawResponses();
                            if (!ads || ads.length === 0) {//pass
                            } else {
                                // if there are multiple ads, sort by CPM
                                ads = ads.sort(cpmSort);
                                var ad = ads[0];
                                for (var rbslt in rubiconSlots) {
                                    if (rubiconSlots.hasOwnProperty(rbslt) && rubiconSlots[rbslt].slotName == slt.getElementId()) {
                                        var rb_slot = rbslt;
                                        var auction_slot = rubiconSlots[rbslt].slotName;
                                        break;
                                    }
                                }
                                var rb_bid = AddktHeader.calcBidVal(ad.cpm, addktAdConfig.bidders['rubicon'].revShare);
                                AddktHeader.bidsByBidder['rubicon'][rb_slot] = rb_bid;
                                var rb_size = ad.dimensions;
                                var slotTargeting = {};
                                slotTargeting[rb_slot] = rb_bid;
                                slotTargeting['rb_size'] = rb_size[0] + 'x' + rb_size[1];
                                var bidObject = {
                                    slot: auction_slot,
                                    value: rb_bid,
                                    sizes: rb_size,
                                    targeting: slotTargeting
                                };
                                pushBid(bidObject);
                            }
                        }
                        done();
                    }
                    ;
                    window.rubicontag.run(rubiconCallback, parameters);
                });
            },
            refresh: function(slots, pushBid, done) {},
            render: function(e, slt) {
                try {
                    var rbslot = addktAdConfig.bidders['rubicon'].slots[slt];
                    var elemId = rbslot.slotName;
                    var size = rbslot.defaultWidth + 'x' + rbslot.defaultHeight;
                    var sizeId = RUBICON_SIZE_MAP[size];
                    window.rubicontag.renderCreative(e.body, elemId, sizeId);
                } catch (err) {}
            }
        },
        'aol': {
            setup: function() {
                AddktHeader.bidsByBidder['aol'] = {};
                AddktHeader.aolPixels = {};
            },
            getScriptPath: function() {
                return ' '
            },
            init: function(slots, pushBid, done) {
                AddktHeader.aolCallbacks = {};
                window.aolCallback = function(response, aolSlot) {
                    try {
                        if (typeof response.ext !== 'undefined' && typeof response.ext.pixels !== 'undefined')
                            AddktHeader.aolPixels[aolSlot] = response.ext.pixels;
                        var slot_resp = response.seatbid[0].bid[0];
                        AddktHeader.bidsByBidder['aol'][aolSlot] = slot_resp;
                        var aol_bid = AddktHeader.calcBidVal(slot_resp.price, addktAdConfig.bidders['aol'].revShare);
                        AddktHeader.bidsByBidder['aol'][aolSlot].final_bid = aol_bid;
                        var sizes = [slot_resp['w'], slot_resp['h']];
                        var aSlot = addktAdConfig.bidders['aol'].slots[aolSlot];
                        var slotTargeting = {};
                        slotTargeting[aolSlot] = aol_bid;
                        slotTargeting['aol_size'] = slot_resp['w'] + 'x' + slot_resp['h'];
                        var bidObject = {
                            slot: aSlot.slotName,
                            value: aol_bid,
                            sizes: sizes,
                            targeting: slotTargeting
                        };
                        pushBid(bidObject);
                    } catch (err) {}
                    aolCounter++;
                    if (aolCounter == aolTotal) {
                        done();
                    }
                }
                ;
                var aol_alias;
                var aolCounter = 0;
                var aolTotal = 0;
                var aolSlots = addktAdConfig.bidders['aol'].slots;
                for (var aSlot in aolSlots) {
                    try {
                        if (aolSlots.hasOwnProperty(aSlot)) {
                            aol_alias = aSlot;
                            var aol_slot = aolSlots[aSlot];
                            if (AddktHeader.shouldIncludeSlotInAuction(aol_slot)) {
                                AddktHeader.aolCallbacks[aol_alias] = (function(inner_alias) {
                                    return function(response) {
                                        window.aolCallback(response, inner_alias)
                                    }
                                    ;
                                }(aol_alias));
                                var req_url = 'adserver.adtechus.com/pubapi/3.0/' + addktAdConfig.bidders['aol'].siteId + '/';
                                req_url += aol_slot.id;
                                req_url += '/0/-1/ADTECH;cmd=bid;cors=yes;';
                                if (aol_slot.baseFloor > 0) {
                                    req_url += 'bidfloor=' + aol_slot.baseFloor + ';';
                                }
                                req_url += 'misc=' + 1e18 * Math.random();
                                AddktHeader.makeRequest(req_url, AddktHeader.aolCallbacks[aol_alias]);
                                aolTotal++;
                            }
                        }
                    } catch (err) {}
                }
            },
            refresh: function(slots, pushBid, done) {},
            render: function(e, slt) {
                try {
                    var bid_obj = AddktHeader.bidsByBidder['aol'][slt];
                    var aol_ad = decodeURIComponent(bid_obj.adm);
                    e.write(aol_ad);
                } catch (err) {}
                try {
                    var pxls = decodeURIComponent(AddktHeader.aolPixels[slt]);
                    if (typeof pxls !== 'undefined') {
                        e.write(pxls);
                    }
                } catch (err) {}
            }
        },
        //appnexus clones follow
        appnexusClone: {
            getParamsForSlot: function(slot, slotName) {
                var gptSlot = AddktHeader.getGptSlotFromSlot(slot);
                var slSizes = gptSlot.sizes;
                var primarySize = slSizes[0];
                var referrer = encodeURIComponent(window.location.href);
                var size = primarySize[0] + 'x' + primarySize[1];
                var promo_sizes = [];
                for (var sz = 1; sz < slSizes.length; sz++) {
                    var siz = slSizes[sz];
                    promo_sizes.push(siz[0] + 'x' + siz[1]);
                }
                promo_sizes.join(',');
                var common = '&psa=0&size=' + size + '&promo_sizes=' + promo_sizes + '&referrer=' + referrer + '&callback_uid=' + slotName;
                if (slot.baseFloor > 0) {
                    common += '&reserve=' + slot.baseFloor
                }
                common += '&misc=' + 1e18 * Math.random();
                return common
            },
            createBidObject: function(response, bidder, bidder_prefix) {
                try {
                    var slot = response.callback_uid;
                    var result = response.result;
                    if (typeof result.ad !== 'undefined' && result.ad !== '' && typeof result.cpm !== 'undefined' && result.cpm > 0) {
                        var an_bid = result.cpm / 10000;
                        var revShare = addktAdConfig.bidders[bidder].revShare || 1;
                        an_bid = AddktHeader.calcBidVal(an_bid, revShare);
                        var anSlot = addktAdConfig.bidders[bidder].slots[slot];
                        var sizes = [result.width, result.height];
                        AddktHeader.bidsByBidder[bidder][slot] = {
                            'ad': result.ad,
                            'bid': an_bid,
                            'width': result.width,
                            'height': result.height
                        };
                        var slot_key = bidder_prefix + '_slot';
                        var bid_key = bidder_prefix + '_bid';
                        var size_key = bidder_prefix + '_size';
                        var slotTargeting = {};
                        slotTargeting[slot] = an_bid;
                        slotTargeting[slot_key] = slot;
                        slotTargeting[bid_key] = an_bid;
                        slotTargeting[size_key] = result.width + 'x' + result.height;
                        return {
                            slot: anSlot.slotName,
                            value: an_bid,
                            sizes: sizes,
                            targeting: slotTargeting
                        };
                    }
                    return null ;
                } catch (err) {
                    return null ;
                }
            },
            render: function(e, anAd) {
                try {
                    e.write('<IFRAME SRC="' + anAd.ad + '" FRAMEBORDER="0" SCROLLING="no" MARGINHEIGHT="0" MARGINWIDTH="0" TOPMARGIN="0" LEFTMARGIN="0" ALLOWTRANSPARENCY="true" WIDTH="' + anAd.width + '" HEIGHT="' + anAd.height + '"></IFRAME>');
                    e.close();
                    if (e.defaultView && e.defaultView.frameElement) {
                        e.defaultView.frameElement.width = anAd.width;
                        e.defaultView.frameElement.height = anAd.height;
                    }
                } catch (err) {}
            }
        },
        'appnexus': {
            setup: function() {
                AddktHeader.bidsByBidder['appnexus'] = {}
            },
            getScriptPath: function() {
                return ' '
            },
            init: function(slots, pushBid, done) {
                window.appnexuscallback = function(response) {
                    try {
                        var bidObj = AddktHeader.bidders.appnexusClone.createBidObject(response, 'appnexus', 'an');
                        if (bidObj) {
                            pushBid(bidObj);
                        }
                    } catch (err) {}
                    anCounter++;
                    if (anCounter == anTotal) {
                        done();
                    }
                }
                ;
                var anCounter = 0;
                var anTotal = 0;
                var anSlots = addktAdConfig.bidders['appnexus'].slots;
                for (var slt in anSlots) {
                    try {
                        if (anSlots.hasOwnProperty(slt)) {
                            var anSlot = anSlots[slt];
                            if (AddktHeader.shouldIncludeSlotInAuction(anSlot)) {
                                anTotal++;
                                var appnexusCommon = AddktHeader.bidders.appnexusClone.getParamsForSlot(anSlot, slt);
                                var requrl = 'ib.adnxs.com/jpt?id=' + anSlot.id + '&callback=window.appnexuscallback' + appnexusCommon;
                                AddktHeader.loadScript(requrl);
                            }
                        }
                    } catch (err) {}
                }
            },
            refresh: function(slots, pushBid, done) {},
            render: function(e, adid, bid, slt) {
                try {
                    AddktHeader.bidders.appnexusClone.render(e, AddktHeader.bidsByBidder['appnexus'][slt]);
                } catch (err) {}
            }
        },
        'brealtime': {
            setup: function() {
                AddktHeader.bidsByBidder['brealtime'] = {};
            },
            getScriptPath: function() {
                return ' ';
            },
            init: function(slots, pushBid, done) {
                window.brealtimecallback = function(response) {
                    try {
                        var bidObj = AddktHeader.bidders.appnexusClone.createBidObject(response, 'brealtime', 'br');
                        if (bidObj) {
                            pushBid(bidObj);
                        }
                    } catch (err) {}
                    brCounter++;
                    if (brCounter == brTotal) {
                        done();
                    }
                }
                ;
                var brCounter = 0;
                var brTotal = 0;
                var brSlots = addktAdConfig.bidders['brealtime'].slots;
                for (var slt in brSlots) {
                    try {
                        if (brSlots.hasOwnProperty(slt)) {
                            var brSlot = brSlots[slt];
                            if (AddktHeader.shouldIncludeSlotInAuction(brSlot)) {
                                brTotal++;
                                var appnexusCommon = AddktHeader.bidders.appnexusClone.getParamsForSlot(brSlot, slt);
                                var requrl = 'optimizedby.brealtime.com/jpt?id=' + brSlot.id + '&callback=window.brealtimecallback' + appnexusCommon;
                                AddktHeader.loadScript(requrl);
                            }
                        }
                    } catch (err) {}
                }
            },
            refresh: function(slots, pushBid, done) {},
            render: function(e, slt) {
                try {
                    AddktHeader.bidders.appnexusClone.render(e, AddktHeader.bidsByBidder['brealtime'][slt]);
                } catch (err) {}
            }
        },
        'brightcom': {
            setup: function() {},
            getScriptPath: function() {},
            init: function(slots, pushBid, done) {},
            refresh: function(slots, pushBid, done) {},
            render: function(e, slt) {}
        },
        'districtm': {
            setup: function() {
                AddktHeader.bidsByBidder['districtm'] = {};
            },
            getScriptPath: function() {
                return ' ';
            },
            init: function(slots, pushBid, done) {
                window.districtmcallback = function(response) {
                    try {
                        var bidObj = AddktHeader.bidders.appnexusClone.createBidObject(response, 'districtm', 'dm');
                        if (bidObj) {
                            pushBid(bidObj);
                        }
                    } catch (err) {}
                    dmCounter++;
                    if (dmCounter == dmTotal) {
                        done();
                    }
                }
                ;
                var dmCounter = 0;
                var dmTotal = 0;
                var dmSlots = addktAdConfig.bidders['districtm'].slots;
                for (var slt in dmSlots) {
                    try {
                        if (dmSlots.hasOwnProperty(slt)) {
                            var dmSlot = dmSlots[slt];
                            if (AddktHeader.shouldIncludeSlotInAuction(dmSlot)) {
                                dmTotal++;
                                var appnexusCommon = AddktHeader.bidders.appnexusClone.getParamsForSlot(dmSlot, slt);
                                var requrl = 'secure.adnxs.com/jpt?member_id=' + addktAdConfig.bidders['districtm'].memberId + '&zone=' + dmSlot.zoneId + '&id=' + dmSlot.id;
                                requrl += '&callback=window.districtmcallback' + appnexusCommon;
                                AddktHeader.loadScript(requrl);
                            }
                        }
                    } catch (err) {}
                }
            },
            refresh: function(slots, pushBid, done) {},
            render: function(e, slt) {
                try {
                    AddktHeader.bidders.appnexusClone.render(e, AddktHeader.bidsByBidder['districtm'][slt]);
                } catch (err) {}
            }
        },
        'defy': {
            setup: function() {
                AddktHeader.bidsByBidder['defy'] = {};
            },
            getScriptPath: function() {
                return ' ';
            },
            init: function(slots, pushBid, done) {
                window.defycallback = function(response) {
                    try {
                        var bidObj = AddktHeader.bidders.appnexusClone.createBidObject(response, 'defy', 'df');
                        if (bidObj) {
                            pushBid(bidObj);
                        }
                    } catch (err) {}
                    dfCounter++;
                    if (dfCounter == dfTotal) {
                        done();
                    }
                }
                ;
                var dfCounter = 0;
                var dfTotal = 0;
                var dfSlots = addktAdConfig.bidders['defy'].slots;
                for (var slt in dfSlots) {
                    try {
                        if (dfSlots.hasOwnProperty(slt)) {
                            var dfSlot = dfSlots[slt];
                            if (AddktHeader.shouldIncludeSlotInAuction(dfSlot)) {
                                dfTotal++;
                                var appnexusCommon = AddktHeader.bidders.appnexusClone.getParamsForSlot(dfSlot, slt);
                                var requrl = 'ib.adnxs.com/jpt?id=' + dfSlot.id + '&callback=window.defycallback' + appnexusCommon;
                                AddktHeader.loadScript(requrl);
                            }
                        }
                    } catch (err) {}
                }
            },
            refresh: function(slots, pushBid, done) {},
            render: function(e, slt) {
                try {
                    AddktHeader.bidders.appnexusClone.render(e, AddktHeader.bidsByBidder['defy'][slt]);
                } catch (err) {}
            }
        }
    }
};
