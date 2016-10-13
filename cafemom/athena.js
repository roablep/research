var athena = ""
  , AthenaJS_counter = 1
  , AthenaJS = {
    docCookies: {
        getItem: function(b) {
            return b ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(b).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
        },
        setItem: function(b, c, d, f, a, g) {
            if (!b || /^(?:expires|max\-age|path|domain|secure)$/i.test(b))
                return !1;
            var e = "";
            if (d)
                switch (d.constructor) {
                case Number:
                    e = Infinity === d ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + d;
                    break;
                case String:
                    e = "; expires=" + d;
                    break;
                case Date:
                    e = "; expires=" + d.toUTCString()
                }
            document.cookie = encodeURIComponent(b) + "=" + encodeURIComponent(c) + e + (a ? "; domain=" + a : "") + (f ? "; path=" + f : "") + (g ? "; secure" : "");
            return !0
        },
        removeItem: function(b, c, d) {
            if (!this.hasItem(b))
                return !1;
            document.cookie = encodeURIComponent(b) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (d ? "; domain=" + d : "") + (c ? "; path=" + c : "");
            return !0
        },
        hasItem: function(b) {
            return b ? (new RegExp("(?:^|;\\s*)" + encodeURIComponent(b).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie) : !1
        },
        keys: function() {
            for (var b = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), c = b.length, d = 0; d < c; d++)
                b[d] = decodeURIComponent(b[d]);
            return b
        }
    },
    dot2num: function(b) {
        b = b.split(".");
        return 256 * (256 * (256 * +b[0] + +b[1]) + +b[2]) + +b[3]
    },
    num2dot: function(b) {
        for (var c = b % 256, d = 3; 0 < d; d--)
            b = Math.floor(b / 256),
            c = b % 256 + "." + c;
        return c
    },
    replaceAll: function(b, c, d) {
        return d.replace(new RegExp(b,"g"), c)
    },
    loadScript: function(b, c) {
        try {
            if (this.docCookies.hasItem("cm_athena"))
                try {
                    athena = this.docCookies.getItem("cm_athena"),
                    this.mainCode()
                } catch (a) {}
            else {
                var d = document.getElementsByTagName("head")[0]
                  , f = document.createElement("script");
                f.type = "text/javascript";
                f.src = b;
                f.defer = !0;
                d.appendChild(f);
                f.addEventListener("load", function() {
                    AthenaJS.mainCode()
                })
            }
        } catch (a) {}
    },
    mainCode: function() {
        var b = "", c;
        c = window.location.hostname;
        var d = document.referrer
          , f = window.navigator.userLanguage || window.navigator.language
          , a = -1 < c.indexOf("cafemom.com")
          , g = -1 < c.indexOf("mamaslatinas.com");
        if (g || a) {
            try {
                this.docCookies.hasItem("cafemomis") && (b = this.docCookies.getItem("cafemomis"))
            } catch (h) {}
            -1 < window.location.pathname.split("/")[1].indexOf("articles") || -1 < c.indexOf("articles") ? (a = document.createElement("img"),
            a.src = "http://pixel.mathtag.com/event/img?mt_id=673193&mt_adid=105595&v1=&v2=&v3=&s1=&s2=&s3=",
            document.getElementsByTagName("head").item(0).appendChild(a),
            c = "articles") : -1 < c.indexOf("thestir") ? (a = document.createElement("img"),
            a.src = "http://pixel.mathtag.com/event/img?mt_id=673190&mt_adid=105595&v1=&v2=&v3=&s1=&s2=&s3=",
            document.getElementsByTagName("head").item(0).appendChild(a),
            c = "thestir") : -1 < c.indexOf("quemas") ? (a = document.createElement("img"),
            a.src = "http://pixel.mathtag.com/event/img?mt_id=673197&mt_adid=105595&v1=&v2=&v3=&s1=&s2=&s3=",
            document.getElementsByTagName("head").item(0).appendChild(a),
            c = "quemas") : g ? (a = document.createElement("img"),
            a.src = "http://pixel.mathtag.com/event/img?mt_id=673195&mt_adid=105595&v1=&v2=&v3=&s1=&s2=&s3=",
            document.getElementsByTagName("head").item(0).appendChild(a),
            c = "mamaslatinas") : (a = document.createElement("img"),
            a.src = "http://pixel.mathtag.com/event/img?mt_id=673192&mt_adid=105595&v1=&v2=&v3=&s1=&s2=&s3=",
            document.getElementsByTagName("head").item(0).appendChild(a),
            c = "cafemom");
            var e = "&" + document.getElementById("cm_athena").src.split("query=")[1]
        } else if (-1 < c.indexOf("namecandy.com") || -1 < c.indexOf("babynamewizard.com"))
            a = document.createElement("img"),
            a.src = "http://pixel.mathtag.com/event/img?mt_id=673191&mt_adid=105595&v1=&v2=&v3=&s1=&s2=&s3=",
            document.getElementsByTagName("head").item(0).appendChild(a),
            a = document.createElement("img"),
            a.src = "//load.exelator.com/load/?lb=AA53245",
            document.getElementsByTagName("head").item(0).appendChild(a),
            c = -1 < c.indexOf("namecandy.com") ? "namecandy" : "bnw";
        else if (-1 < c.indexOf("vivala.com")) {
            try {
                this.docCookies.hasItem("vivalais)short") && (b = this.docCookies.getItem("vivalais_short"))
            } catch (h) {}
            a = document.createElement("img");
            a.src = "http://pixel.mathtag.com/event/img?mt_id=796456&mt_adid=105595&v1=&v2=&v3=&s1=" + AthenaJS_counter + "&s2=&s3=";
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a);
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).removeChild(a);
            c = "vivala";
            e = "&" + document.getElementById("cm_athena").src.split("query=")[1] + "&cnt=" + AthenaJS_counter;
            AthenaJS_counter++
        } else if (-1 < c.indexOf("revelist.com")) {
            try {
                this.docCookies.hasItem("revelistis_short") && (b = this.docCookies.getItem("revelistis_short"))
            } catch (h) {}
            a = document.createElement("img");
            a.src = "http://pixel.mathtag.com/event/img?mt_id=923347&mt_adid=105595&v1=&v2=&v3=&s1=" + AthenaJS_counter + "&s2=&s3=";
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a);
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).removeChild(a);
            c = "revelist";
            e = "&" + document.getElementById("cm_athena").src.split("query=")[1] + "&cnt=" + AthenaJS_counter;
            AthenaJS_counter++
        } else
            -1 < c.indexOf("evite.com") ? (a = document.createElement("img"),
            a.src = "http://pixel.mathtag.com/event/img?mt_id=673194&mt_adid=105595&v1=&v2=&v3=&s1=&s2=&s3=",
            document.getElementsByTagName("head").item(0).appendChild(a),
            c = "evite") : -1 < c.indexOf("moneysavingmom.com") ? (a = document.createElement("img"),
            a.src = "http://pixel.mathtag.com/event/img?mt_id=673195&mt_adid=105595&v1=&v2=&v3=&s1=&s2=&s3=",
            document.getElementsByTagName("head").item(0).appendChild(a),
            c = "moneysavingmom") : -1 < c.indexOf("scarymommy.com") && (a = document.createElement("img"),
            a.src = "http://pixel.mathtag.com/event/img?mt_id=673512&mt_adid=105595&v1=&v2=&v3=&s1=&s2=&s3=",
            document.getElementsByTagName("head").item(0).appendChild(a),
            c = "scarymommy");
        try {
            isNaN(athena) && (athena = this.dot2num(athena)),
            "undefined" == typeof athena || this.docCookies.hasItem("cm_athena") || this.docCookies.setItem("cm_athena", athena, 1800, "/")
        } catch (h) {
            athena = ""
        }
        if ("undefined" == typeof e)
            try {
                if (e = document.getElementById("cm_athena").src.split("query=")[1],
                e = this.replaceAll("=", ":", e),
                cm_array = e.split("&"),
                e = "",
                0 < cm_array.length)
                    for (var a = 0, k = cm_array.length; a < k; a++)
                        e += "&s" + (a + 1) + "=" + cm_array[a];
                else
                    e = "&s1=&s2=&s3="
            } catch (h) {
                e = "&s1=&s2=&s3="
            }
        a = document.createElement("img");
        a.src = "//pixel.mathtag.com/event/img?mt_id=673188&mt_adid=105595&v1=" + athena + "&v2=" + c + "&v3=" + b + "&v4=" + f + "&v5=" + d + e;
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a);
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).removeChild(a);
        a = document.createElement("img");
        a.src = "https://idsync.rlcdn.com/402026.gif?partner_uid=" + b;
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a);
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).removeChild(a);
        b && (a = document.createElement("img"),
        a.src = "https://x.bidswitch.net/sync?dsp_id=98&user_id=" + b + "&expires=365",
        "undefined" != typeof athena_user_group && (a.src = a.src + "&user_group=" + athena_user_group),
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a),
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).removeChild(a))
    }
};
try {
    AthenaJS.loadScript("http://athena.cafemomstatic.com/?var=athena", AthenaJS.mainCode)
} catch (b) {}
;
