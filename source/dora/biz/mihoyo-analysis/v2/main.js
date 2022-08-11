/*! Copyright © 2011 - 2022 miHoYo. All Rights Reserved */ ! function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.miHoYoAnalysis = n() : t.miHoYoAnalysis = n()
}(window, (function () {
    return function (t) {
        var n = {};

        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            })
        }, e.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function (t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & n && "string" != typeof t)
                for (var i in t) e.d(r, i, function (n) {
                    return t[n]
                }.bind(null, i));
            return r
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, e.p = "", e(e.s = 3)
    }([function (t, n) {
        var e = {
            utf8: {
                stringToBytes: function (t) {
                    return e.bin.stringToBytes(unescape(encodeURIComponent(t)))
                },
                bytesToString: function (t) {
                    return decodeURIComponent(escape(e.bin.bytesToString(t)))
                }
            },
            bin: {
                stringToBytes: function (t) {
                    for (var n = [], e = 0; e < t.length; e++) n.push(255 & t.charCodeAt(e));
                    return n
                },
                bytesToString: function (t) {
                    for (var n = [], e = 0; e < t.length; e++) n.push(String.fromCharCode(t[e]));
                    return n.join("")
                }
            }
        };
        t.exports = e
    }, function (t, n, e) {
        var r, i;
        /*!
         * JavaScript Cookie v2.2.1
         * https://github.com/js-cookie/js-cookie
         *
         * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
         * Released under the MIT license
         */
        ! function (o) {
            if (void 0 === (i = "function" == typeof (r = o) ? r.call(n, e, n, t) : r) || (t.exports = i), !0, t.exports = o(), !!0) {
                var u = window.Cookies,
                    a = window.Cookies = o();
                a.noConflict = function () {
                    return window.Cookies = u, a
                }
            }
        }((function () {
            function t() {
                for (var t = 0, n = {}; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var r in e) n[r] = e[r]
                }
                return n
            }

            function n(t) {
                return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
            }
            return function e(r) {
                function i() {}

                function o(n, e, o) {
                    if ("undefined" != typeof document) {
                        "number" == typeof (o = t({
                            path: "/"
                        }, i.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";
                        try {
                            var u = JSON.stringify(e);
                            /^[\{\[]/.test(u) && (e = u)
                        } catch (t) {}
                        e = r.write ? r.write(e, n) : encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                        var a = "";
                        for (var s in o) o[s] && (a += "; " + s, !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
                        return document.cookie = n + "=" + e + a
                    }
                }

                function u(t, e) {
                    if ("undefined" != typeof document) {
                        for (var i = {}, o = document.cookie ? document.cookie.split("; ") : [], u = 0; u < o.length; u++) {
                            var a = o[u].split("="),
                                s = a.slice(1).join("=");
                            e || '"' !== s.charAt(0) || (s = s.slice(1, -1));
                            try {
                                var f = n(a[0]);
                                if (s = (r.read || r)(s, f) || n(s), e) try {
                                    s = JSON.parse(s)
                                } catch (t) {}
                                if (i[f] = s, t === f) break
                            } catch (t) {}
                        }
                        return t ? i[t] : i
                    }
                }
                return i.set = o, i.get = function (t) {
                    return u(t, !1)
                }, i.getJSON = function (t) {
                    return u(t, !0)
                }, i.remove = function (n, e) {
                    o(n, "", t(e, {
                        expires: -1
                    }))
                }, i.defaults = {}, i.withConverter = e, i
            }((function () {}))
        }))
    }, function (t, n) {
        var e, r;
        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
            rotl: function (t, n) {
                return t << n | t >>> 32 - n
            },
            rotr: function (t, n) {
                return t << 32 - n | t >>> n
            },
            endian: function (t) {
                if (t.constructor == Number) return 16711935 & r.rotl(t, 8) | 4278255360 & r.rotl(t, 24);
                for (var n = 0; n < t.length; n++) t[n] = r.endian(t[n]);
                return t
            },
            randomBytes: function (t) {
                for (var n = []; t > 0; t--) n.push(Math.floor(256 * Math.random()));
                return n
            },
            bytesToWords: function (t) {
                for (var n = [], e = 0, r = 0; e < t.length; e++, r += 8) n[r >>> 5] |= t[e] << 24 - r % 32;
                return n
            },
            wordsToBytes: function (t) {
                for (var n = [], e = 0; e < 32 * t.length; e += 8) n.push(t[e >>> 5] >>> 24 - e % 32 & 255);
                return n
            },
            bytesToHex: function (t) {
                for (var n = [], e = 0; e < t.length; e++) n.push((t[e] >>> 4).toString(16)), n.push((15 & t[e]).toString(16));
                return n.join("")
            },
            hexToBytes: function (t) {
                for (var n = [], e = 0; e < t.length; e += 2) n.push(parseInt(t.substr(e, 2), 16));
                return n
            },
            bytesToBase64: function (t) {
                for (var n = [], r = 0; r < t.length; r += 3)
                    for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
                return n.join("")
            },
            base64ToBytes: function (t) {
                t = t.replace(/[^A-Z0-9+\/]/gi, "");
                for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4) 0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);
                return n
            }
        }, t.exports = r
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = u();
            return (r = function (n, i) {
                var o = e[n -= 348];
                if (void 0 === r.HFtqpF) {
                    var u = function (t) {
                        for (var n, e, r = "", i = "", o = 0, u = 0; e = t.charAt(u++); ~e && (n = o % 4 ? 64 * n + e : e, o++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * o & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
                        for (var a = 0, s = r.length; a < s; a++) i += "%" + ("00" + r.charCodeAt(a).toString(16)).slice(-2);
                        return decodeURIComponent(i)
                    };
                    r.XuBZjT = u, t = arguments, r.HFtqpF = !0
                }
                var a = e[0],
                    s = n + a,
                    f = t[s];
                return f ? o = f : (o = r.XuBZjT(o), t[s] = o), o
            })(t, n)
        }! function (t, n) {
            function e(t, n, e, i) {
                return r(e - -933, t)
            }
            var i = t();

            function o(t, n, e, i) {
                return r(e - -618, n)
            }
            for (;;) try {
                if (270529 === parseInt(o(0, 93, 43)) / 1 + parseInt(e(-372, 0, -314)) / 2 + -parseInt(o(0, 0, 41)) / 3 + parseInt(e(-521, 0, -448)) / 4 * (parseInt(o(0, -98, -181)) / 5) + -parseInt(e(-395, 0, -326)) / 6 + -parseInt(e(-295, 0, -434)) / 7 * (parseInt(o(0, -356, -202)) / 8) + -parseInt(e(-325, 0, -465)) / 9 * (parseInt(o(0, 141, -16)) / 10)) break;
                i.push(i.shift())
            } catch (t) {
                i.push(i.shift())
            }
        }(u);
        var i = {};

        function o(t, n, e, i) {
            return r(t - -926, n)
        }

        function u() {
            var t = ["CMvNAw9U", "Aw5ZDgfSBa", "z094twe", "DxrTx3nVDxjJzq", "zs5JB20VAduVDq", "DxnLCKv4DhjHAq", "zgv2zwXVCg1LBG", "DxvPza", "z05TuhO", "AwvvBgy", "m3W3Fdj8nq", "yuPXywW", "s0jVBLG", "t2TbBgq", "DevvCgW", "AxLxqxm", "u0zsugC", "sw5MBW", "z2fTzv9IAxO", "zxzLBNrby3rPBW", "wg9SwuK", "lxrLC3qU", "x19LC01VzhvSzq", "AuzhELq", "Ahr0Chm6lY9Kzq", "y2nVDw50Awq", "C3bSAxq", "CMvWBgfJzq", "AwzAywy", "ns91CgXVywq", "B1LSyu0", "zvfQuLq", "svzMwKq", "DwHOAKO", "sNHOANG", "DMXVzY11CgXVyq", "mtyZmenhrvzrzq", "zxHLyW", "ChjVDg90ExbL", "t1PICMG", "yxbPCW", "nZm3ndG0rMj6whPb", "DxbKyxrLvwLK", "zgf0yv9IzwXVBG", "D0TyuNK", "z2v0sfruufjLCq", "zxj0Eq", "AgfZvxbKyxrLvq", "mte0ztLMntzMyG", "z2v0vgLTzq", "Ec1YCgmTzgv2Aq", "z2v0rw52", "vwPiu0C", "mta2otC2nez1CwXPDq", "CMfUzg9Tswq", "z0XprNK", "sLr2zMC", "AhjLzG", "Bunjrwq", "yuHoC2C", "Cgf0Ag5HBwu", "yxmGysbMDw5JDa", "D3jPDgfIBgu", "nxWY", "zw52AxjVBM1LBG", "z2v0sxntzwe", "CK5jz3u", "r01gy0i", "zxzLBNrwywX1zq", "tuLorwS", "t05Fu1rfua", "BMfTzq", "BMvLzfvPza", "te5zEe0", "uM9Wswu", "yMGZtg9NAw5vAq", "BKLUzM8", "nhWZFdj8nxWWFa", "D2vIC3rHDgLJlG", "DhjHy2TfDMvUDa", "reTcB2m", "vK1jCfO", "yNHPExC", "uNfNsuC", "A2v5CW", "C2vHlG", "z2v0vxnLCKLUzG", "Dg9tDhjPBMC", "zunhwLC", "tKzQrM0", "AxniyxnO", "q3vdwfi", "CenVB2TPzuTLEq", "mtC4mJy5zNP4r0PZ", "yLjlrwy", "mJq5nJyXuKfAvhD0", "vezduei", "zvvXA1G", "CY5OB3LVDMvYCW", "CMHmte4", "AgfPs3i", "z2v0qwXSugfYyq", "Aw9U", "EwLmAwS", "B3bLBG", "BLvtsem", "sLzIBNG", "rxbuyuC", "D1Hosuu", "yMjZqxbW", "q2zxBe0", "z2v0u2vZC2LVBG", "BMvLzfnLC3nPBW", "DgHLBG", "DgLHBhm", "wxvrtu0", "EfDUrMG", "zvzXCu0", "D2fMsK4", "v3jiyLa", "AgfZt3DUuhjVCa", "z2v0vxvPza", "DxnLCL9PBMzV", "vMvYAwzPy2f0Aq", "twHdue0", "Dg9VBa", "AxniB3n0u2vH", "B29RAwvlzxK", "EMTOsem", "y2fSBa", "CgfNzw5HBwu", "BKL3txa", "yxv0AgTLEv92zq", "yw5HBhLZAxnwzq", "BwLOB3LVlMnVBq", "sgvHzgvYCW", "DhjHy2TqywDLDG", "nNWXFdb8nhWZFa", "z2v0ugfNzuLUzG", "vKDwzuO", "EK5gqwe", "zhPsEhm", "ru9Vtg0", "EgnPr2O", "A1fOs3y", "shjnyuK", "rxDLr0W", "ChjVzhvJDgLVBG", "zxzLBNrmAxn0", "DgvZDa", "vxzIzvC", "C2vZC2LVBKLUzG", "BgXLsey", "runYwgm", "yxbWx2LK", "EK5zB3e", "yM5TAgi", "vw1bDgy", "m3W3FdeZFdiYFa", "zwHhBuu", "BM93", "z2v0uMvXDwvZDa", "v1LlyKK", "qvnOBxC", "yxbWBgLJyxrPBW", "xcqM", "zw51BwvYywjSzq", "z2v0ugfYyw1cEq", "C2vZC2LVBKLK", "AwLUrNa", "wgLQAey", "z2v0qwnJB3vUDa", "DwLK", "DgvZDc5Zzwe", "yxbWvMvYC2LVBG", "DhjNrMK", "Dw9Zuvm", "thDst3m", "sgvHzgvY", "BLf1zw0", "wZ8Mxq", "mtKWmJi0ofHNt09lwa", "BcbHignSyxnZia", "Ag95B2XHyI4", "z0njAgq", "Ag95B3zLCNnLlG", "DxrTx21LzgL1Bq", "vgnkuNK", "Bg9N", "y3j6Euu", "rhvjEMy", "CgXVywq", "zuLequq", "zgf0yq", "v3b1vfa", "zgvMyxvSDa", "D2vIC3rHDgLJlq", "tMvWwuW", "u1rWuuq", "B0PztKm", "zc5TAwHVEw8UyW", "x01jqv9trvntsq", "ndiWnwXNtfjMuG", "m3WYFdf8nhWW", "CNnPB24", "A2v5", "zxH0CMfjBMzV", "CMvMzxjYzxi", "zMnjuwe", "qKLxqK0", "C2jtEvC", "DMfSDwu", "Aw5MBW", "yujUENe", "Awv3", "BhHwCfq", "z2fTzv91Awq", "C2vH", "v2nIy1G", "z291vNC", "zgv2AwnLx2LK", "AwHVEw8Uy29TlW", "ufbyqum", "Aw5KzxHpzG", "ChzqyxjHBxm", "B2Dsv0m", "DMLLDW", "uufUruC", "B3j5", "zK5PCu0", "yunHs2e", "CgfNzxvYBa", "ywnJB3vUDf9Pza", "mtCZotDxEwLkuLu", "u2vZCvy", "quH0uLG", "z3D2Ave", "Ahr0Chm6lY9SBW", "AM9PBG", "zxzLBNrdyxrLzW", "zxzLBNrmywjLBa", "AMvJDf0", "DgnVs3m", "zxjYB3i", "CfDIAg4", "C2vZC2LVBKLKqW", "yNzssNm", "CgfNzq", "BI9QC29U", "vfj0BuW", "mta1mMj4wKfbDq", "zY11CgXVywqTBW", "B20VAduVDxbSBW", "C2vUza", "z2fTzv9YzwDPBW", "y2vFAwq", "uMLLvvq", "Aw5PDa", "z2DsB3G", "BMzV", "q1Hzrfq", "B0v4CgLYzxm", "Aw5PDeLUC3rHBG", "qu5pteq", "n1LkvhbKuq", "C2vZC2LVBLn0zq", "DwvZDeHLywrLCG", "m3WXFdv8mNWWFa", "D1rmDwm", "zgvMAw5LuhjVCa", "ELzZv0u", "Cg9ZDa", "lxnLys10zxn0lG", "zY11CgXVywqUBq", "DhLWzq", "yxDzquq", "qvjluuS", "r2vJBuG", "zxvIDKq", "vNvL", "DwzPzuu", "BevAALy", "w29IAMvJDcbpyG", "rLPVvLy", "y29UzMLNDxjHyG", "D2TUs1K", "EffjvKC", "C2vHCMnO", "C2v0uMvXDwvZDa", "zM9YrwfJAa", "ufv3uxi", "tgPoBLC", "q2fUBM90ignHBa", "nNWX", "Ag9ZDa", "lNnLyq", "AvzTwvi", "ENnxyLK", "rxjnA00", "Bg9JyxrPB24", "rMnTzxq", "whjtwMm", "zKDLs3y", "C3rYAw5NAwz5", "C2v0", "t05Fsuq", "zMr0qu8", "zeTRz0G", "A3nnr0S", "vLfPCxK", "wMfyv2W", "z2v0rxzLBNrjBG", "zxzLBNrfEhrYyq", "AhPKzui", "vgLTzxn0yw1W", "tvDLDxq", "CeTeAhC", "nxW4Fdb8m3WYFa", "vhPzvuy", "CgfNzuv4DhjHAq", "tMfTzq", "rgTTzLy", "mhW5FdiZFdeXFa", "mJa1ntmWowm5yG", "q29UDgvUDc1nra", "BgvUz3rO", "mJb8mtD8mtz8oa", "q25mzLK", "yLzPEfq", "z2v0", "D3Loy0S"];
            return (u = function () {
                return t
            })()
        }
        i.value = !0, Object["defineProp" + o(-314, -430)](n, "__esModule", i);
        var a = Object.assign || function (t) {
                var n = {
                    eIDAD: function (t, n) {
                        return t !== n
                    },
                    fcIQa: function (t, n) {
                        return t === n
                    },
                    Jxhjx: function (t, n, e, r) {
                        return t(n, e, r)
                    },
                    trgFi: function (t, n) {
                        return t !== n
                    },
                    OKTuc: "JUbTM"
                };

                function e(t, n, e, r) {
                    return o(n - 1250, t)
                }
                for (var r = 1; r < arguments[e(765, 884)]; r++) {
                    var i = arguments[r];
                    for (var u in i)
                        if (Object[d(645, 699, 797, 643)][e(543, 679) + "erty"][d(386, 459, 423, 487)](i, u)) {
                            if (!n[d(620, 505, 652, 503)](n.OKTuc, e(927, 964))) {
                                var a = arguments[d(568, 655, 693, 791)] > 0 && n[e(682, 751)](arguments[0], _0x26d0ed) ? arguments[0] : {},
                                    s = a[d(630, 569, 689, 693) + "ory"],
                                    f = a[e(892, 909) + "n"],
                                    c = a.eventLabel,
                                    h = a[e(989, 958)],
                                    v = a.extraInfo,
                                    l = n[d(389, 538, 407, 645)](v, _0x5a0a3c) ? {} : v,
                                    p = {
                                        eventCategory: s,
                                        eventAction: f,
                                        eventLabel: c,
                                        eventValue: h,
                                        timestamp: (new _0x506fbb)[d(746, 710, 641, 661)](),
                                        extra_info: n[d(546, 695, 764, 620)](_0x44d4a3, {}, this[e(750, 871) + d(606, 542, 495, 395)] || {}, l)
                                    };
                                return p
                            }
                            t[u] = i[u]
                        }
                }

                function d(t, n, e, r) {
                    return o(n - 1021, t)
                }
                return t
            },
            s = function () {
                function t(t, n, e, r) {
                    return o(n - 269, t)
                }
                var n = {};

                function e(t, n, e, r) {
                    return o(t - 1535, e)
                }
                n[t(56, -76)] = function (t, n) {
                    return t < n
                }, n[e(1198, 1244, 1253, 1152)] = "4|1|0|2|3", n[e(1233, 1213, 1191, 1073)] = t(-196, -211);
                var r = n;

                function i(t, n) {
                    function i(t, n, r, i) {
                        return e(r - -846, 0, n)
                    }

                    function o(t, n, r, i) {
                        return e(r - 68, 0, n)
                    }
                    for (var u = 0; r[o(0, 1271, 1258)](u, n[o(0, 1329, 1237)]); u++)
                        for (var a = r[o(0, 1371, 1266)].split("|"), s = 0;;) {
                            switch (a[s++]) {
                                case "0":
                                    f[i(0, 245, 282) + "le"] = !0;
                                    continue;
                                case "1":
                                    f[i(0, 60, 164)] = f[o(0, 1104, 1078)] || !1;
                                    continue;
                                case "2":
                                    r[o(0, 1166, 1301)] in f && (f.writable = !0);
                                    continue;
                                case "3":
                                    Object[i(0, 310, 267) + i(0, 336, 375)](t, f[i(0, 79, 203)], f);
                                    continue;
                                case "4":
                                    var f = n[u];
                                    continue
                            }
                            break
                        }
                }
                return function (t, n, r) {
                    var o, u;
                    return n && i(t[(o = 806, u = 834, e(u - -379, 0, o))], n), r && i(t, r), t
                }
            }(),
            f = p(e(4)),
            c = p(e(1));
        var h = p(e(5)),
            v = p(e(7)),
            l = e(13);

        function p(t) {
            return t && t[(n = 67, e = 98, o(e - 436, n))] ? t : {
                default: t
            };
            var n, e
        }

        function d(t, n) {
            function e(t, n, e, r) {
                return o(n - 648, e)
            }
            var r = {};

            function i(t, n, e, r) {
                return o(t - -58, r)
            }
            r[e(0, 394, 553)] = function (t, n) {
                return t instanceof n
            }, r[e(0, 213, 58)] = e(0, 249, 254) + e(0, 139, 291) + i(-357, -405, -258, -398) + "ion";
            var u = r;
            if (!u[i(-312, 0, 0, -237)](t, n)) throw new TypeError(u[i(-493, 0, 0, -630)])
        }
        var g, y, w = function () {
            var t = {
                oYlaM: n(82, 48, -32, 0) + n(-360, -190, -196, -231) + n(47, -10, -28, 132) + "|2|19|15|12|21|6|14|5|4|10|1|18",
                DuIzf: function (t, n, e) {
                    return t(n, e)
                },
                TcJRy: "ON_STEP",
                eCGZW: "pload",
                hzdeB: "vlog-uplo-os.hoyover.com/h" ,
                nIwMp: "om/h/upl",
                NNqhn: n(-385, -157, -229, -116),
                ECrXc: i(1033, 966, 969, 872) + i(1227, 1040, 1073, 1083),
                gLOFy: i(1033, 1081, 1015, 1146),
                zkhHC: n(-91, -184, -128, -90),
                CCqmn: "6|4|0|1|8|" + i(988, 1056, 1109, 1068),
                dzRxs: function (t, n) {
                    return t + n
                },
                HrMaI: function (t, n) {
                    return t(n)
                },
                AHtRX: i(1129, 917, 964, 1071) + n(-127, -207, -137, -100),
                ggRox: n(-97, -36, -169, -240),
                MWeut: function (t, n) {
                    return t < n
                },
                ErMkM: function (t, n) {
                    return t !== n
                },
                wafJN: "wHtge",
                HwMmK: n(-5, -25, -68, -184),
                zsWbY: function (t, n) {
                    return t !== n
                },
                JycJe: n(-101, -61, 9, -90),
                GjuBb: "1|3|2|0|5|4",
                Fcmet: function (t, n) {
                    return t > n
                },
                QMxeQ: n(84, -225, -82, -173),
                djigo: "test.sea",
                PPXAC: function (t, n) {
                    return t > n
                },
                dPBwq: "webs-" + n(121, 151, 62, 219),
                KsztN: i(886, 973, 915, 923) + n(63, -173, -59, -44),
                UvbeW: function (t, n) {
                    return t > n
                },
                aBnzq: i(1319, 1190, 1177, 1133) + i(1063, 1007, 902, 833),
                CfWlM: i(862, 906, 915, 897),
                ehGmE: i(1075, 1256, 1120, 1011),
                wknKY: i(995, 807, 917, 818),
                PUwQr: i(1333, 1076, 1176, 1211) + i(1069, 1070, 1061, 899),
                pWbhn: i(1016, 952, 948, 1093),
                XijhF: "(=([^&#]*)|&|#|$)",
                fNiqM: i(1064, 975, 933, 876),
                lleHF: n(-199, -273, -122, -173),
                gAFTs: "ltuid",
                eUqkX: n(-71, -37, 52, 208) + "d",
                LVpem: i(842, 850, 951, 820),
                lEZjV: function (t, n) {
                    return t < n
                },
                bnmhb: function (t, n) {
                    return t > n
                },
                STpQD: i(1016, 944, 987, 1125),
                ZaXWl: "Zqztk",
                nQuem: function (t, n) {
                    return t > n
                },
                ufieE: function (t, n) {
                    return t !== n
                },
                sbSyW: "POST",
                YeZAg: n(2, 24, 29, -58),
                YuQMM: function (t, n) {
                    return t + n
                },
                zNFAa: function (t, n) {
                    return t(n)
                },
                NFjFm: function (t, n) {
                    return t === n
                },
                aHNsg: i(937, 1102, 965, 924),
                GMFcB: n(83, 96, -14, -153),
                XGzlj: n(-194, 71, -48, 71),
                uosQS: i(815, 865, 945, 1037),
                kFjxG: i(1140, 1097, 1102, 1138),
                aQfNg: i(840, 1066, 954, 961),
                fGeKv: "utm_campaign",
                VMIpZ: "authkey",
                uoBzg: i(741, 800, 900, 937) + "r",
                EZMZz: n(-131, -125, -5, -98),
                gCIhd: function (t, n) {
                    return t > n
                },
                TrWBM: function (t, n) {
                    return t === n
                },
                wTLuc: i(1062, 1083, 1112, 1002),
                rhLLN: i(1199, 1176, 1149, 1232) + i(889, 1167, 1023, 909),
                awYAD: "jGSHY",
                SFRPg: "nMslK",
                KBonX: function (t, n) {
                    return t !== n
                },
                TRtmL: function (t, n) {
                    return t !== n
                },
                hGHvV: function (t, n) {
                    return t > n
                },
                TjVbZ: function (t, n) {
                    return t > n
                },
                XrSZc: function (t, n) {
                    return t > n
                },
                TzYUF: function (t, n) {
                    return t !== n
                },
                OZbrh: i(1055, 1074, 1050, 1175) + n(-45, 32, -113, -71),
                uqyma: function (t, n) {
                    return t + n
                },
                zNYoq: function (t, n) {
                    return t + n
                },
                BIWBM: n(-264, -209, -151, -115),
                ARKQK: n(-106, -106, -143, -85),
                NUuZx: function (t, n) {
                    return t > n
                },
                lXrPM: "KZTvn",
                dKkgH: "UBuRa",
                yJfTo: i(1081, 1023, 967, 1046),
                WcbcX: function (t, n) {
                    return t !== n
                },
                sPqIN: i(875, 1134, 1004, 1148),
                VGVeJ: function (t, n) {
                    return t * n
                },
                haiKr: n(-80, -158, -217, -365) + n(-86, -33, 40, -92),
                uhhjJ: function (t, n) {
                    return t === n
                },
                UmAtf: n(-20, -133, -15, 8),
                CuCXR: i(1079, 1232, 1147, 1070) + i(949, 1231, 1091, 1160) + "90bc38fdd7c5",
                DkmfV: function (t, n) {
                    return t instanceof n
                },
                drmTo: "Cannot cal",
                bvRJs: "h5/uplo",
                EOoLm: n(-27, 66, -3, 74),
                CnLfY: i(911, 1008, 911, 939),
                iBtxd: function (t, n) {
                    return t !== n
                },
                eQjRT: function (t, n) {
                    return t > n
                },
                lxVpT: function (t, n, e, r) {
                    return t(n, e, r)
                },
                CXYDT: n(196, 152, 42, 149),
                AShmw: n(31, 28, 28, 191),
                rNIgu: "getParamByName",
                WrHbP: "getAccountid",
                aJqal: "getBh3SeaA" + i(973, 1046, 1124, 1178),
                tEUpl: n(-58, 144, 88, 215) + i(1193, 1090, 1116, 1129),
                tcoKs: i(1144, 1175, 1185, 1188) + "o",
                zVsWE: i(936, 1009, 1079, 1245) + "fo",
                rPkno: "getAllParams",
                pKDhw: i(1324, 1278, 1178, 1293),
                eubvD: i(788, 993, 904, 852) + n(-132, -82, -140, -225),
                IONsO: n(-248, -129, -193, -339) + "Headers",
                nUSHC: i(1142, 977, 1100, 1213),
                WpuTP: n(-164, -128, -97, 11)
            };

            function n(t, n, e, r) {
                return o(e - 337, t)
            }

            function e() {
                var r = t[a(522, 536, 646, 604)].split("|"),
                    o = 0;

                function u(t, n, e, r) {
                    return i(t - 47, t, e - -765, r - 104)
                }

                function a(t, e, r, i) {
                    return n(e, 0, r - 639)
                }
                for (;;) {
                    switch (r[o++]) {
                        case "0":
                            t[u(139, 0, 193, 224)](d, this, e);
                            continue;
                        case "1":
                            this["sessionSte" + a(0, 697, 708)] = t[a(0, 346, 472)];
                            continue;
                        case "2":
                            this[u(303, 0, 443, 426)] = void 0;
                            continue;
                        case "3":
                            this[a(0, 619, 539) + "n"] = "";
                            continue;
                        case "4":
                            this[u(2, 0, 129, 91)] = this[u(428, 0, 399, 368)]();
                            continue;
                        case "5":
                            this[a(0, 637, 680) + "t"] = this[a(0, 818, 667)]();
                            continue;
                        case "6":
                            var s = {};
                            s[a(0, 551, 432)] = "h5/upload", s[u(39, 0, 150, 75) + u(177, 0, 298, 364)] = t[u(578, 0, 422, 429)], s[u(240, 0, 152, 183)] = u(364, 0, 358, 468) + "vlog-uploa" + a(0, 554, 485) + a(0, 682, 537) + "ad", s[u(41, 0, 176, 286)] = t[u(363, 0, 316, 233)], s.development = t[u(128, 0, 134, 25)], this[u(472, 0, 374, 498)] = s;
                            continue;
                        case "7":
                            this.needUid = !1;
                            continue;
                        case "8":
                            this[a(0, 562, 559)] = t.NNqhn;
                            continue;
                        case "9":
                            this.app_id = "";
                            continue;
                        case "10":
                            this[u(236, 0, 248, 395) + u(-32, 0, 130, 18)] = t[u(50, 0, 156, 151)];
                            continue;
                        case "11":
                            this[u(211, 0, 219, 110)] = "";
                            continue;
                        case "12":
                            this[u(296, 0, 339, 394) + "nfo"] = void 0;
                            continue;
                        case "13":
                            this[a(0, 517, 663) + "id"] = !1;
                            continue;
                        case "14":
                            this[a(0, 350, 433)] = [];
                            continue;
                        case "15":
                            this[u(262, 0, 322, 334) + a(0, 517, 544)] = void 0;
                            continue;
                        case "16":
                            this[a(0, 462, 516)] = void 0;
                            continue;
                        case "17":
                            this[u(126, 0, 133, 152)] = void 0;
                            continue;
                        case "18":
                            this["analysisVe" + u(94, 0, 207, 178)] = "v2";
                            continue;
                        case "19":
                            this.device_id = "";
                            continue;
                        case "20":
                            var c = {};
                            c["eventCateg" + a(0, 360, 513)] = t[a(0, 575, 671)], c[u(459, 0, 353, 397) + "n"] = t[u(286, 0, 131, 27)], c.eventLabel = "", c[a(0, 729, 684)] = "", this[u(129, 0, 227, 353)] = c;
                            continue;
                        case "21":
                            this[a(0, 719, 597) + "info"] = void 0;
                            continue;
                        case "22":
                            this[a(0, 782, 623)] = f[a(0, 401, 480)][a(0, 269, 406)]() || "";
                            continue;
                        case "23":
                            this.data_belong = "";
                            continue
                    }
                    break
                }
            }

            function i(t, n, e, r) {
                return o(e - 1459, n)
            }
            return t[n(-30, 0, -139)](s, e, [{
                key: t[i(1128, 994, 1028, 952)],
                value: function () {
                    function e(t, e, r, i) {
                        return n(r, 0, t - 1127)
                    }
                    var r = window[u(974, 861, 1058, 1082)].host,
                        o = [t[e(1008, 0, 1162)], t[e(1031, 0, 1166)], u(858, 1003, 797, 785)];

                    function u(t, n, e, r) {
                        return i(t - 367, r, t - -93, r - 37)
                    }
                    for (var a = 0; t[e(1088, 0, 976)](a, o[e(1098, 0, 1260)]); a++)
                        if (t[e(1071, 0, 1040)](t[u(793, 0, 0, 808)], t.HwMmK)) {
                            if (r[u(898, 0, 0, 990)](o[a]) > -1) return !0
                        } else
                            for (var s = t.CCqmn[u(1032, 0, 0, 1169)]("|"), f = 0;;) {
                                switch (s[f++]) {
                                    case "0":
                                        var c = _0x538ca3[e(968, 0, 881)][e(1102, 0, 1017)](this["sessionSte" + e(1196, 0, 1253)]);
                                        continue;
                                    case "1":
                                        !h && (c = 0, h = t[u(816, 0, 0, 776)](t[u(816, 0, 0, 856)](this[e(1111, 0, 992)], "_"), (0, _0x4d5bdb[u(1060, 0, 0, 1193)])()), _0x154b68[e(968, 0, 1111)][e(1077, 0, 1088)](this.sessionIdCookieKey, h, {
                                            expires: this[e(924, 0, 779) + "oExpires"]
                                        }));
                                        continue;
                                    case "2":
                                        _0x310ceb[e(968, 0, 999)][e(1077, 0, 1032)](this[u(940, 0, 0, 999) + "pCookieKey"], c, {
                                            expires: this.sessionInfoExpires
                                        });
                                        continue;
                                    case "3":
                                        !c && (c = 0);
                                        continue;
                                    case "4":
                                        var h = _0x3dd7be[e(968, 0, 1062)].get(this[e(1018, 0, 1170) + e(900, 0, 845)]);
                                        continue;
                                    case "5":
                                        var v = {};
                                        return v.sessionId = h, v.sessionStep = c, v;
                                    case "6":
                                        if (!this[e(1216, 0, 1298) + e(1180, 0, 1051)]) {
                                            var l = {
                                                sessionId: ""
                                            };
                                            return l[u(940, 0, 0, 794) + "p"] = "", l
                                        }
                                        continue;
                                    case "7":
                                        c += 1;
                                        continue;
                                    case "8":
                                        c = t[u(820, 0, 0, 827)](_0x27ea97, c);
                                        continue
                                }
                                break
                            }
                    return !1
                }
            }, {
                key: t[n(-304, 0, -191)],
                value: function () {
                    function n(t, n, e, r) {
                        return i(t - 151, t, e - 427, r - 450)
                    }

                    function e(t, n, e, r) {
                        return i(t - 180, e, t - -1389, r - 434)
                    }
                    if (!t[e(-324, 0, -485, -179)](e(-475, 0, -621, -423), t.JycJe)) return e(-472, 0, -323, -319);
                    for (var r = t.GjuBb[e(-264, 0, -398, -201)]("|"), o = 0;;) {
                        switch (r[o++]) {
                            case "0":
                                if (t[n(1505, 0, 1495, 1460)](u.indexOf(t.QMxeQ), -1)) return t.djigo;
                                continue;
                            case "1":
                                var u = window.location[e(-327, 0, -372, -365)];
                                continue;
                            case "2":
                                if (t[n(1383, 0, 1417, 1324)](u.indexOf(t.dPBwq), -1)) return t.KsztN;
                                continue;
                            case "3":
                                if (t.UvbeW(u[n(1429, 0, 1418, 1547)](t[n(1451, 0, 1408, 1502)]), -1)) return t.CfWlM;
                                continue;
                            case "4":
                                return t[n(1637, 0, 1636, 1474)];
                            case "5":
                                if (u[e(-398, 0, -338, -498)](t[n(1233, 0, 1354, 1406)]) > -1) return t[e(-336, 0, -191, -352)];
                                continue
                        }
                        break
                    }
                }
            }, {
                key: t[i(1128, 1265, 1165, 1018)],
                value: function (e) {
                    var r = t[o(1087, 1048, 1211, 1066)][a(336, 372, 294, 218)]("|");

                    function o(t, n, e, r) {
                        return i(t - 65, r, n - -10, r - 190)
                    }
                    var u = 0;

                    function a(t, e, r, i) {
                        return n(e, 0, i - 215)
                    }
                    for (;;) {
                        switch (r[u++]) {
                            case "0":
                                if (!h) return;
                                continue;
                            case "1":
                                return t[o(1048, 903, 0, 1067)](decodeURIComponent, h[2][o(1083, 1116, 0, 1077)](/\+/g, " "));
                            case "2":
                                var s = window[a(0, 228, 0, 160)][o(1159, 1045, 0, 1009)];
                                continue;
                            case "3":
                                var f = new RegExp(t[o(864, 899, 0, 887)](t[o(1030, 899, 0, 933)](t[a(0, 232, 0, 105)], c), t[o(957, 928, 0, 1055)]));
                                continue;
                            case "4":
                                var c = e[o(1192, 1116, 0, 1031)](/[\[\]]/g, t[a(0, -55, 0, 90)]);
                                continue;
                            case "5":
                                var h = f[o(1038, 1126, 0, 1037)](s);
                                continue;
                            case "6":
                                if (!h[2]) return "";
                                continue
                        }
                        break
                    }
                }
            }, {
                key: t[i(1005, 825, 887, 836)],
                value: function () {
                    function e(t, n, e, r) {
                        return i(t - 339, e, n - -769, r - 480)
                    }

                    function r(t, e, r, i) {
                        return n(e, 0, i - 1161)
                    }
                    return c[r(0, 893, 0, 1002)][r(0, 1198, 0, 1136)](t[r(0, 1063, 0, 959)]) || c[e(166, 194, 294, 354)][e(298, 328, 173, 440)](t.gAFTs)
                }
            }, {
                key: t[i(1030, 1063, 1110, 1026)],
                value: function () {
                    function e(t, e, r, i) {
                        return n(t, 0, e - 125)
                    }
                    return c[e(18, -34)][e(41, 100)](t[e(337, 199)])
                }
            }, {
                key: i(1058, 1176, 1189, 1331),
                value: function () {
                    function n(t, n, e, r) {
                        return i(t - 297, t, r - 326, r - 151)
                    }

                    function e(t, n, e, r) {
                        return i(t - 109, e, t - -1355, r - 323)
                    }
                    if (t[e(-389, 0, -428, -224)] === t[n(1382, 0, 0, 1404)]) {
                        for (var r = _0x21eafc[n(1336, 0, 0, 1393)][e(-293, 0, -213, -372)], o = [t[e(-352, 0, -269, -213)], t[n(1206, 0, 0, 1352)], t.LVpem], u = 0; t[e(-306, 0, -159, -419)](u, o[e(-262, 0, -388, -144)]); u++)
                            if (t[e(-431, 0, -566, -521)](r.indexOf(o[u]), -1)) return !0;
                        return !1
                    }
                    return t[n(1196, 0, 0, 1273)](window[n(1514, 0, 0, 1393)][n(1329, 0, 0, 1482)][e(-364, 0, -514, -293)]("#/"), -1)
                }
            }, {
                key: t[n(94, 0, -9)],
                value: function () {
                    function e(t, e, r, i) {
                        return n(t, 0, e - 12)
                    }

                    function r(t, n, e, r) {
                        return i(t - 318, r, t - -1465, r - 138)
                    }
                    if (t.YeZAg !== e(-215, -225)) {
                        if (!this[r(-254, 0, 0, -288) + r(-290, 0, 0, -154)]) {
                            var o = {};
                            return o[e(-50, -174)] = "", o.sessionStep = "", o
                        }
                        var u = c[r(-502, 0, 0, -655)][e(-164, -13)](this[e(-251, -97) + "ookieKey"]),
                            a = c[e(-242, -147)].get(this[r(-432, 0, 0, -320) + "pCookieKey"]);
                        if (!u && (a = 0, u = t[e(-153, -227)](t[e(-261, -201)](this.uuid, "_"), (0, l[e(-11, 43)])()), c[r(-502, 0, 0, -587)][r(-393, 0, 0, -247)](this[r(-452, 0, 0, -565) + e(-167, -215)], u, {
                                expires: this[r(-546, 0, 0, -640) + "oExpires"]
                            })), !(a = t[r(-557, 0, 0, -557)](Number, a)))
                            if (t[e(73, 78)](t[r(-307, 0, 0, -277)], t[r(-299, 0, 0, -248)])) {
                                var s = t[r(-475, 0, 0, -351)](arguments[r(-372, 0, 0, -229)], 0) && t[r(-417, 0, 0, -260)](arguments[0], _0x564ce7) ? arguments[0] : {};
                                try {
                                    for (var f = (e(126, -25) + "7|1|6|4").split("|"), h = 0;;) {
                                        switch (f[h++]) {
                                            case "0":
                                                var v = _0x27d3ff[e(109, -39)](s);
                                                continue;
                                            case "1":
                                                var p = this[r(-536, 0, 0, -696) + e(-72, -207)](v);
                                                continue;
                                            case "2":
                                                d["withCreden" + r(-583, 0, 0, -469)] = !0;
                                                continue;
                                            case "3":
                                                var d = new _0x32273a;
                                                continue;
                                            case "4":
                                                d.send(v);
                                                continue;
                                            case "5":
                                                var g = this[r(-326, 0, 0, -188)][this[e(151, 53) + "t"]];
                                                continue;
                                            case "6":
                                                _0x83468b[r(-282, 0, 0, -129)](p)[r(-408, 0, 0, -293)]((function (t) {
                                                    var n, i, o, u;
                                                    d[(o = 135, u = 263, r(o - 544, 0, 0, u) + (n = 1192, i = 1357, e(n, i - 1521)))](t, p[t])
                                                }));
                                                continue;
                                            case "7":
                                                d.open(t[e(-197, -132)], g, !0);
                                                continue;
                                            case "8":
                                                if (!g) return;
                                                continue
                                        }
                                        break
                                    }
                                } catch (t) {
                                    _0x4649d9[r(-454, 0, 0, -354)](t)
                                }
                            } else a = 0;
                        a += 1, c[r(-502, 0, 0, -556)][e(-120, -38)](this.sessionStepCookieKey, a, {
                            expires: this[e(-86, -191) + e(-75, -81)]
                        });
                        var y = {};
                        return y[e(-326, -174)] = u, y[r(-432, 0, 0, -520) + "p"] = a, y
                    }
                    _0x5f8223[e(-12, 27)][e(-362, -222) + r(-320, 0, 0, -405)][r(-568, 0, 0, -459)](_0x380d68, _0x5bd04e) && (_0x1ca787[_0x3da40f] = _0x45d119[_0x35ae21])
                }
            }, {
                key: n(-83, 0, -216) + "o",
                value: function () {
                    function e(t, e, r, i) {
                        return n(i, 0, r - 369)
                    }

                    function r(t, n, e, r) {
                        return i(t - 321, e, t - -302, r - 116)
                    }
                    if (t.XGzlj !== t[e(0, 0, 191, 41)]) {
                        var o = this[r(887, 0, 1020, 731)]() ? window.location.hash[r(824, 0, 757, 843)]("#", "") : window.location[r(857, 0, 733, 725)];
                        return {
                            app_id: this[e(0, 0, 169, 251)],
                            page_url: this[r(697, 0, 627, 606)] || o,
                            page_name: this[r(596, 0, 478, 512)] || o,
                            page_fullurl: window[r(765, 0, 653, 886)].href,
                            utm_source: this["getParamBy" + e(0, 0, 335, 247)](t.kFjxG),
                            utm_medium: this[e(0, 0, 182, 113) + r(786, 0, 775, 723)](t.aQfNg),
                            utm_campaign: this[e(0, 0, 182, 76) + r(786, 0, 847, 892)](t[e(0, 0, 317, 198)]),
                            document_referrer: document[r(673, 0, 619, 764)],
                            extra_info: this["pageExtrai" + e(0, 0, 274, 277)]
                        }
                    }
                    var u = {};
                    return u.default = _0x4d4da5, _0x21f4df && _0x245aaf.__esModule ? _0x61226f : u
                }
            }, {
                key: t[n(-212, 0, -112)],
                value: function () {
                    function e(t, n, e, r) {
                        return i(t - 180, r, t - -575, r - 77)
                    }

                    function r(t, e, r, i) {
                        return n(i, 0, t - 266)
                    }
                    return {
                        auth_key: this[e(360, 0, 0, 293) + r(232, 0, 0, 271)](t[r(324, 0, 0, 316)]) || "",
                        authkey_ver: this.getParamByName(t.uoBzg),
                        game_biz: this["getParamBy" + e(513, 0, 0, 618)](t.EZMZz) || "",
                        account_id: this[e(364, 0, 0, 484) + "id"]() || "",
                        bh3_sea_account_id: this["getBh3SeaA" + r(268, 0, 0, 125)](),
                        game_uid: this.game_uid,
                        game_region: this.game_region,
                        uuid: this[e(531, 0, 0, 437)],
                        device_id: this[r(132, 0, 0, -14)],
                        extra_info: this[e(529, 0, 0, 485) + "nfo"]
                    }
                }
            }, {
                key: t[i(1123, 978, 1038, 916)],
                value: function () {
                    var e = t[h(280, 185, 49, 198)](arguments[h(235, 238, 306, 339)], 0) && t[l(459, 251, 307, 291)](arguments[0], void 0) ? arguments[0] : {},
                        r = e[l(169, 357, 266, 187) + h(359, 157, 194, 242)],
                        o = e[l(380, 481, 377, 492) + "n"],
                        u = e[l(304, 219, 267, 217)],
                        s = e.eventValue,
                        f = e[l(244, 193, 233, 168)],
                        c = t.TrWBM(f, void 0) ? {} : f;

                    function h(t, n, e, r) {
                        return i(t - 89, n, r - -754, r - 443)
                    }
                    var v = {
                        eventCategory: r,
                        eventAction: o,
                        eventLabel: u,
                        eventValue: s,
                        timestamp: (new Date)[l(472, 367, 407, 316)](),
                        extra_info: a({}, this["eventExtra" + h(373, 85, 0, 226)] || {}, c)
                    };

                    function l(t, e, r, i) {
                        return n(i, 0, r - 381)
                    }
                    return v
                }
            }, {
                key: t.rPkno,
                value: function () {
                    function e(t, e, r, i) {
                        return n(r, 0, t - 812)
                    }
                    var i = {
                            VQiqy: function (t, n) {
                                return t !== n
                            },
                            SesqV: t[e(726, 0, 734)],
                            LjNnW: t[e(888, 0, 749)],
                            ogRWC: function (n, e) {
                                return t.zNFAa(n, e)
                            },
                            OWvGe: "bh3LoginUid",
                            ifZaf: function (t, n) {
                                return t !== n
                            },
                            GecmH: t[e(733, 0, 857)],
                            TFCPB: t[e(805, 0, 799)]
                        },
                        o = this,
                        u = t[e(608, 0, 732)](arguments[e(783, 0, 921)], 0) && void 0 !== arguments[0] ? arguments[0] : {};

                    function a(t, e, r, i) {
                        return n(i, 0, e - 1356)
                    }
                    var s = this[a(0, 1444, 0, 1595) + e(806, 0, 768)](),
                        f = s.sessionId,
                        c = s[a(0, 1267, 0, 1195) + "p"],
                        h = {
                            page_info: this[a(0, 1140, 0, 1138) + "o"](),
                            user_info: this[e(875, 0, 884) + "o"](),
                            event_info: this[a(0, 1313, 0, 1181) + "fo"](u),
                            type: this[a(0, 1276, 0, 1370)],
                            data_belong: this[e(832, 0, 802) + "g"],
                            mia_session_id: f,
                            mia_session_step: c,
                            analysis_version: this[e(591, 0, 711) + "rsion"]
                        };
                    return new Promise((function (t) {
                        var n = {
                            FZoVV: i.LjNnW,
                            bxiyw: function (t, n) {
                                return i[(e = -421, o = -570, r(e - -881, o))](t, n);
                                var e, o
                            },
                            gOxMa: i.OWvGe
                        };

                        function u(t, n, r, i) {
                            return e(n - -697, 0, t)
                        }

                        function s(t, n, e, r) {
                            return a(0, t - -309, 0, r)
                        }
                        if (!i[u(47, 120)]("dHtJP", i[u(-124, 38)])) {
                            var f = {
                                sessionId: ""
                            };
                            return f[s(958, 0, 0, 940) + "p"] = "", f
                        }
                        if (o[u(169, 201)] && o.bbsApp[u(-86, -65)] && !o[u(82, -19)])
                            if (i.TFCPB !== i[u(281, 188)]) {
                                if (_0xda740f && _0x133cc1.data && _0x49a99b.data[n[s(976, 0, 0, 959)]]) {
                                    var c = _0x204390[u(21, -46)][n[s(976, 0, 0, 1046)]];
                                    _0x5a9ad2.device_id = c, _0xadde4[s(815, 0, 0, 904)][s(913, 0, 0, 797)] = c
                                }
                                n[u(59, 174)](_0x59f379, _0x215829)
                            } else o[u(144, 201)][s(1069, 0, 0, 919) + s(959, 0, 0, 813) + "s"]()[u(-97, -126)]((function (e) {
                                function r(t, n, e, r) {
                                    return s(t - -494, 0, 0, n)
                                }

                                function u(t, n, e, r) {
                                    return s(e - 393, 0, 0, t)
                                }
                                if (i[u(1531, 0, 1395)](u(1499, 0, 1430), i[r(433, 450)])) return _0x46c070[r(394, 289)][r(528, 378)](n[r(532, 694)]);
                                if (e && e[u(1396, 0, 1279)] && e[u(1285, 0, 1279)][i[u(1347, 0, 1377)]]) {
                                    var a = e[u(1283, 0, 1279)][i[u(1426, 0, 1377)]];
                                    o[r(419, 398)] = a, h.user_info[r(419, 549)] = a
                                }
                                i[u(1251, 0, 1311)](t, h)
                            }));
                        else i[s(918, 0, 0, 982)](t, h)
                    }))
                }
            }, {
                key: t[i(1206, 1180, 1084, 1174)],
                value: function () {
                    var e = (r(689, 781, 587, 644) + "4|6")[o(181, 234, 18, 80)]("|");

                    function r(t, e, r, i) {
                        return n(r, 0, i - 731)
                    }
                    var i = 0;

                    function o(t, e, r, i) {
                        return n(i, 0, t - 178)
                    }
                    for (;;) {
                        switch (e[i++]) {
                            case "0":
                                var u = arguments[r(0, 0, 767, 702)] > 3 && t[o(167, 0, 0, 149)](arguments[3], void 0) ? arguments[3] : "";
                                continue;
                            case "1":
                                var a = t[o(-26, 0, 0, 0)](arguments[r(0, 0, 689, 702)], 1) && t[o(73, 0, 0, 209)](arguments[1], void 0) ? arguments[1] : "";
                                continue;
                            case "2":
                                var s = this;
                                continue;
                            case "3":
                                var f = t.hGHvV(arguments[r(0, 0, 738, 702)], 0) && void 0 !== arguments[0] ? arguments[0] : "";
                                continue;
                            case "4":
                                var c = t.TjVbZ(arguments[r(0, 0, 584, 702)], 4) && void 0 !== arguments[4] ? arguments[4] : {};
                                continue;
                            case "5":
                                var h = t[o(125, 0, 0, 204)](arguments[o(149, 0, 0, 73)], 2) && t[o(142, 0, 0, -5)](arguments[2], void 0) ? arguments[2] : "";
                                continue;
                            case "6":
                                try {
                                    var v = {
                                        eventCategory: f,
                                        eventAction: a,
                                        eventLabel: h,
                                        eventValue: u,
                                        extraInfo: Object[r(0, 0, 697, 746)][o(242, 0, 0, 387)][o(-47, 0, 0, 94)](c) === t[r(0, 0, 838, 747)] ? c : {}
                                    };
                                    this[o(256, 0, 0, 299) + "ms"](v)[o(-63, 0, 0, -223)]((function (t) {
                                        var n, e;
                                        s[(n = 914, e = 897, o(e - 802, 0, 0, n))](t)
                                    }))
                                } catch (t) {
                                    console[r(0, 0, 584, 565)](t)
                                }
                                continue
                        }
                        break
                    }
                }
            }, {
                key: t[n(76, 0, -76)],
                value: function () {
                    var e = {};

                    function r(t, n, e, r) {
                        return i(t - 133, e, t - 200, r - 28)
                    }

                    function o(t, e, r, i) {
                        return n(i, 0, t - -359)
                    }
                    e.WYKbI = t[o(-504, -464, -405, -540)], e[r(1195, 0, 1283, 1322)] = t[o(-437, 0, 0, -289)];
                    var u = e,
                        a = this,
                        s = t.NUuZx(arguments[o(-388, 0, 0, -301)], 0) && void 0 !== arguments[0] ? arguments[0] : {};
                    try {
                        var f = s.path,
                            c = s[o(-311, 0, 0, -396)];
                        if (f) {
                            if (r(1112, 0, 1052, 981) === t.lXrPM) {
                                var h = _0x2418cd[r(1326, 0, 1290, 1397)](/[\[\]]/g, t.fNiqM),
                                    v = new _0x231244(t.uqyma(t[r(1123, 0, 1263, 1183)](o(-533, 0, 0, -516), h), t[o(-543, 0, 0, -583)])),
                                    l = _0x47fb9b[o(-414, 0, 0, -350)].search,
                                    p = v[r(1336, 0, 1421, 1379)](l);
                                return p ? p[2] ? t.zNFAa(_0x30a083, p[2][r(1326, 0, 1369, 1334)](/\+/g, " ")) : "" : _0x1baefb
                            }
                            this[o(-482, 0, 0, -402)] = f
                        }
                        c && (this[r(1098, 0, 1158, 1192)] = c), this[r(1400, 0, 1406, 1445) + "ms"](this[r(1192, 0, 1281, 1066)]).then((function (t) {
                            var n, e, i;
                            a[(n = -178, e = -130, i = -209, r(n - -1417, 0, e, i - 2))](t)
                        }))
                    } catch (n) {
                        if (t.zsWbY(t[o(-406, 0, 0, -398)], t.yJfTo)) console.log(n);
                        else
                            for (var d = u[o(-551, 0, 0, -476)][r(1325, 0, 1413, 1457)]("|"), g = 0;;) {
                                switch (d[g++]) {
                                    case "0":
                                        _0x45e51c[r(1237, 0, 1299, 1230) + o(-336, 0, 0, -380)](_0x3905d4, y[r(1173, 0, 1164, 1030)], y);
                                        continue;
                                    case "1":
                                        y[o(-429, 0, 0, -486) + "le"] = !0;
                                        continue;
                                    case "2":
                                        y[o(-547, 0, 0, -584)] = y[r(1134, 0, 1041, 1159)] || !1;
                                        continue;
                                    case "3":
                                        var y = _0x1be270[_0x52c268];
                                        continue;
                                    case "4":
                                        u[o(-486, 0, 0, -624)] in y && (y[r(1361, 0, 1474, 1229)] = !0);
                                        continue
                                }
                                break
                            }
                    }
                }
            }, {
                key: i(1051, 1221, 1141, 1037),
                value: function () {
                    var e = {
                        EjvAk: t[i(561, 692, 534, 563)],
                        RqgIG: function (n, e) {
                            return t[(r = 961, o = 1011, u = 847, i(r - 441, o - 31, u, r - 580))](n, e);
                            var r, o, u
                        },
                        crzyE: function (t, n) {
                            return t > n
                        },
                        wKXRy: function (n, e) {
                            return t[(r = 1, o = -29, u = 80, i(r - 333, o - 483, u, r - -495))](n, e);
                            var r, o, u
                        },
                        qzWfL: i(476, 372, 272, 414) + o(-209, -279, -389, -154),
                        bVixT: function (n, e) {
                            return t[(r = -80, o = -161, i(r - 21, o - 287, r, o - -593))](n, e);
                            var r, o
                        },
                        bRKEf: function (n, e) {
                            return t[(r = 425, o = 167, u = 271, i(r - 472, o - 138, o, u - -204))](n, e);
                            var r, o, u
                        }
                    };

                    function i(t, e, r, i) {
                        return n(r, 0, i - 486)
                    }

                    function o(t, e, r, i) {
                        return n(r, 0, e - -166)
                    }
                    if (t[i(0, 0, 189, 289)] === i(0, 0, 478, 570))
                        for (var u = e.EjvAk.split("|"), a = 0;;) {
                            switch (u[a++]) {
                                case "0":
                                    var s = arguments[i(0, 0, 486, 457)] > 2 && e[o(0, -106, -264)](arguments[2], _0x156150) ? arguments[2] : "";
                                    continue;
                                case "1":
                                    var f = e[i(0, 0, 188, 321)](arguments[i(0, 0, 402, 457)], 1) && e[o(0, -106, -31)](arguments[1], _0x658acd) ? arguments[1] : "";
                                    continue;
                                case "2":
                                    try {
                                        var c = {
                                            eventCategory: p,
                                            eventAction: f,
                                            eventLabel: s,
                                            eventValue: h,
                                            extraInfo: e[i(0, 0, 401, 507)](_0x683e99[i(0, 0, 530, 501)][o(0, -102, -36)].call(l), e.qzWfL) ? l : {}
                                        };
                                        this[i(0, 0, 653, 564) + "ms"](c)[i(0, 0, 403, 245)]((function (t) {
                                            v.post(t)
                                        }))
                                    } catch (t) {
                                        _0x2a77eb[i(0, 0, 171, 320)](t)
                                    }
                                    continue;
                                case "3":
                                    var h = e[i(0, 0, 613, 460)](arguments.length, 3) && e.RqgIG(arguments[3], _0x3c65db) ? arguments[3] : "";
                                    continue;
                                case "4":
                                    var v = this;
                                    continue;
                                case "5":
                                    var l = arguments[i(0, 0, 583, 457)] > 4 && arguments[4] !== _0x32ffc9 ? arguments[4] : {};
                                    continue;
                                case "6":
                                    var p = e.bVixT(arguments[o(0, -195, -135)], 0) && e[o(0, -95, -22)](arguments[0], _0x21d183) ? arguments[0] : "";
                                    continue
                            }
                            break
                        } else {
                            var d = this,
                                g = t[i(0, 0, 326, 316)](arguments[o(0, -195, -146)], 0) && void 0 !== arguments[0] ? arguments[0] : {};
                            this[o(0, -142, -258) + "id"] = !0;
                            var y = g[i(0, 0, 302, 304)],
                                w = g[i(0, 0, 307, 463)];
                            this[i(0, 0, 511, 348)] = y, this[i(0, 0, 326, 386) + "n"] = w, this[i(0, 0, 307, 280)][i(0, 0, 554, 421)]((function (n, e) {
                                function o(t, n, e, r) {
                                    return i(0, 0, r, n - 1055)
                                }
                                var u = {
                                    DKBoc: function (n, e) {
                                        return t[(i = 1086, o = 1002, r(i - 633, o))](n, e);
                                        var i, o
                                    },
                                    ksMGK: function (n, e) {
                                        return t[(i = 1594, o = 1431, r(o - 881, i))](n, e);
                                        var i, o
                                    }
                                };

                                function a(t, n, e, r) {
                                    return i(0, 0, n, e - 708)
                                }
                                if (!t.TrWBM("gwviQ", t.sPqIN)) {
                                    for (var s = 1; u[a(0, 1096, 1148)](s, arguments[a(0, 1189, 1165)]); s++) {
                                        var f = arguments[s];
                                        for (var c in f) _0x147bb6[o(0, 1556, 0, 1402)]["hasOwnProp" + a(0, 1130, 1217)][a(0, 818, 969)](f, c) && (_0x2987e2[c] = f[c])
                                    }
                                    return _0x43971b
                                }
                                t[a(0, 944, 1024)](e, 10) || t[o(0, 1377, 0, 1391)](setTimeout, (function () {
                                    function t(t, n, e, r) {
                                        return o(0, r - -841, 0, t)
                                    }

                                    function e(t, n, e, r) {
                                        return a(0, e, n - -573)
                                    }
                                    try {
                                        n[t(489, 0, 0, 468)].game_uid = d[e(0, 483, 463)], n[e(0, 389, 400)][e(0, 521, 601) + "n"] = d.game_region, d[t(546, 0, 0, 617)](n)
                                    } catch (n) {
                                        u[t(759, 0, 0, 757)](e(0, 654, 581), "JTvfg") ? this[e(0, 397, 554)] = _0x1073eb : console.error(n)
                                    }
                                }), t[o(0, 1326, 0, 1243)](e, 200))
                            })), this[i(0, 0, 404, 280)] = []
                        }
                }
            }, {
                key: t.IONsO,
                value: function (e) {
                    var r = t.sbSyW,
                        o = s(827, 955, 903, 741) + d(961, 928, 876, 849),
                        u = (0, h.default)(e),
                        a = {};

                    function s(t, e, r, i) {
                        return n(e, 0, t - 1017)
                    }
                    a[d(992, 850, 902, 981)] = o;
                    var f = new Blob([e], a).size,
                        c = parseInt(Date[s(823, 775)]() / 1e3, 10),
                        l = t[d(1032, 1074, 1050, 1160)],
                        p = (0, v[s(858, 733)])([r, u, o, f, c, l][s(901, 854)]("\n"));

                    function d(t, n, e, r) {
                        return i(t - 355, n, e - -140, r - 84)
                    }
                    var g = {};
                    return g["Content-Type"] = o, g[d(1095, 1083, 952, 901) + "5"] = u, g[d(1058, 1087, 942, 1006)] = c, g[d(762, 686, 751, 908) + "on"] = p, g
                }
            }, {
                key: i(909, 976, 1039, 998),
                value: function () {
                    var e = {
                        iVmYR: function (n, e, i) {
                            return t[(o = 1424, u = 1306, r(o - 999, u))](n, e, i);
                            var o, u
                        },
                        bBeIH: t[o(-438, -531, -545, -361)],
                        wyNcK: t[o(-371, -211, -476, -402)],
                        ANOLD: function (t, n) {
                            return t !== n
                        },
                        yiLik: u(139, 149, 252, 253)
                    };

                    function o(t, e, r, i) {
                        return n(i, 0, t - -330)
                    }

                    function u(t, n, e, r) {
                        return i(t - 441, e, n - -735, r - 260)
                    }
                    if (t[o(-387, 0, 0, -247)]("XolYI", t[u(269, 175, 62, 62)])) {
                        if (!t[o(-363, 0, 0, -387)](_0x10f302, _0x24db8f)) throw new _0x4b96e7(t.drmTo)
                    } else {
                        var a = t[o(-462, 0, 0, -314)](arguments[o(-359, 0, 0, -349)], 0) && t[u(262, 251, 137, 253)](arguments[0], void 0) ? arguments[0] : {};
                        try {
                            var s = this[o(-313, 0, 0, -330)][this[u(310, 428, 328, 414) + "t"]];
                            if (!s) return;
                            var f = JSON[u(244, 336, 409, 446)](a),
                                c = new XMLHttpRequest;
                            c["withCreden" + o(-570, 0, 0, -684)] = !0, c[o(-249, 0, 0, -340)](t[u(83, 243, 145, 138)], s, !0);
                            var h = this[u(66, 194, 137, 57) + u(254, 168, 209, 231)](f);
                            Object[o(-269, 0, 0, -234)](h).forEach((function (t) {
                                function n(t, n, e, r) {
                                    return o(n - 1231, 0, 0, e)
                                }

                                function i(t, n, e, r) {
                                    return o(t - 3, 0, 0, e)
                                }
                                var u = {
                                    iinFp: function (t, n, i) {
                                        return e[(o = -35, u = -79, r(o - -566, u))](t, n, i);
                                        var o, u
                                    },
                                    ixlDS: i(-434, 0, -410),
                                    MINEk: e.bBeIH,
                                    wXNIE: i(-326, 0, -296) + "vlog-upld.mhoyo.c" + n(0, 799, 942) + "ad",
                                    LNYxM: e[n(0, 877, 1029)],
                                    aCaKa: i(-480, 0, -500) + i(-376, 0, -468),
                                    MhCPM: "_MIA_SESSI" + n(0, 948, 906)
                                };
                                if (e[i(-418, 0, -500)](e[i(-247, 0, -107)], e.yiLik)) {
                                    u[n(0, 716, 863)](_0x257514, this, _0x47c802), this[i(-527, 0, -618)] = "", this.data_belong = "", this[n(0, 763, 685)] = "", this.game_region = "", this[n(0, 950, 1093)] = !1, this.hasUpdateUid = !1, this.uuid = _0x5a9ef4[n(0, 742, 861)][n(0, 668, 697)]() || "";
                                    var a = {};
                                    a[n(0, 786, 796) + i(-453, 0, -436)] = u.ixlDS, a[n(0, 897, 997) + "n"] = "view", a.eventLabel = "", a[n(0, 946, 852)] = "", this[i(-457, 0, -465)] = a, this.pagename = _0x37bd39, this[n(0, 778, 740)] = _0xb987e2, this[i(-407, 0, -430)] = n(0, 672, 638), this[n(0, 987, 914)] = _0x1b8308, this[n(0, 767, 804)] = "", this[i(-362, 0, -454) + n(0, 806, 840)] = _0x4bd964, this[i(-345, 0, -378) + n(0, 806, 685)] = _0x5382e0, this["eventExtra" + n(0, 759, 777)] = _0x187238;
                                    var s = {};
                                    s[n(0, 694, 586)] = u[i(-281, 0, -321)], s[i(-534, 0, -430) + i(-386, 0, -346)] = i(-444, 0, -463) + i(-430, 0, -372) + n(0, 976, 934) + n(0, 882, 956) + n(0, 738, 791), s[n(0, 696, 784)] = u.wXNIE, s[n(0, 720, 737)] = u[n(0, 951, 1085)], s[i(-344, 0, -442) + "t"] = u[i(-242, 0, -272)], this[i(-310, 0, -282)] = s, this[i(-533, 0, -627)] = [], this[i(-286, 0, -257) + "t"] = this[n(0, 929, 1042)](), this[n(0, 673, 603)] = this[n(0, 943, 823)](), this[i(-436, 0, -276) + i(-554, 0, -719)] = u[i(-451, 0, -378)], this.sessionStepCookieKey = u[n(0, 671, 655)], this[n(0, 680, 678) + n(0, 751, 902)] = "v2"
                                } else c[i(-393, 0, -310) + "Header"](t, h[t])
                            })), c[u(189, 286, 192, 442)](f)
                        } catch (t) {
                            console.log('f you')
                        }
                    }
                }
            }], [{
                key: t[i(1125, 1324, 1204, 1302)],
                value: function (n) {
                    function e(t, n, e, r) {
                        return i(t - 472, r, n - -284, r - 148)
                    }

                    function r(t, n, e, r) {
                        return i(t - 384, e, r - 268, r - 136)
                    }
                    if (t.TRtmL(t[e(727, 811, 0, 727)], "IHVLR")) {
                        var o = arguments[r(1395, 0, 1412, 1361)] > 1 && t.iBtxd(arguments[1], void 0) ? arguments[1] : {},
                            u = new this,
                            s = {};
                        s[r(1209, 0, 1301, 1315)] = n, (0, l[e(831, 746, 0, 693) + "ce"])(u, t.DuIzf(a, s, o))
                    } else _0x3649ec.user_info.game_uid = _0x868116[r(1228, 0, 1325, 1252)], _0x58dd52.user_info[r(1413, 0, 1399, 1290) + "n"] = _0x2d0517[r(1250, 0, 1212, 1290) + "n"], _0x5da0b0[e(704, 755, 0, 625)](_0x1a02d3)
                }
            }, {
                key: t[n(-110, 0, -160)],
                value: function () {
                    function e(t, e, r, i) {
                        return n(i, 0, e - 163)
                    }
                    var r = t[e(0, 171, 0, 215)](arguments[e(0, 134, 0, 176)], 0) && t[o(825, 823, 757, 594)](arguments[0], void 0) ? arguments[0] : {},
                        i = new this;

                    function o(t, e, r, i) {
                        return n(t, 0, r - 768)
                    }
                    return (0, l[e(0, 71, 0, 70) + "ce"])(i, r)
                }
            }]), e
        }();
        n[(g = 563, y = 538, r(g - 133, y))] = w
    }, function (t, n, e) {
        var r;
        "undefined" != typeof self && self, t.exports = (r = e(1), function (t) {
            var n = {};

            function e(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
            }
            return e.m = t, e.c = n, e.d = function (t, n, r) {
                e.o(t, n) || Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: r
                })
            }, e.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, e.t = function (t, n) {
                if (1 & n && (t = e(t)), 8 & n) return t;
                if (4 & n && "object" == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if (e.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & n && "string" != typeof t)
                    for (var i in t) e.d(r, i, function (n) {
                        return t[n]
                    }.bind(null, i));
                return r
            }, e.n = function (t) {
                var n = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return e.d(n, "a", n), n
            }, e.o = function (t, n) {
                return Object.prototype.hasOwnProperty.call(t, n)
            }, e.p = "", e(e.s = 0)
        }([function (t, n, e) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r, i = (r = e(1)) && r.__esModule ? r : {
                default: r
            };

            function o(t) {
                window.location.host.indexOf(".mihyo.com") > -1 ? i.default.set("_MHYUUID", t, {
                    domain: ".mihoo.com",
                    path: "/",
                    expires: 365
                }) : window.location.host.indexOf(".hoyolab.com") > -1 ? i.default.set("_MHYUUID", t, {
                    domain: ".hoyolab.com",
                    path: "/",
                    expires: 365
                }) : i.default.set("_MHYUUID", t, {
                    path: "/",
                    expires: 365
                })
            }
            n.default = {
                getVisitorId: function () {
                    var t = this;
                    return new Promise((function (n) {
                        n(t.getUuid())
                    }))
                },
                getUuid: function () {
                    var t = i.default.get("_MHYUUID");
                    if (t) return o(t), t;
                    for (var n = [], e = 0; e < 36; e++) n[e] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
                    return n[14] = "4", n[19] = "0123456789abcdef".substr(3 & n[19] | 8, 1), n[8] = n[13] = n[18] = n[23] = "-", o(t = n.join("")), t
                }
            }
        }, function (t, n) {
            t.exports = r
        }]).default)
    }, function (t, n, e) {
        var r, i, o, u, a;
        r = e(2), i = e(0).utf8, o = e(6), u = e(0).bin, (a = function (t, n) {
            t.constructor == String ? t = n && "binary" === n.encoding ? u.stringToBytes(t) : i.stringToBytes(t) : o(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());
            for (var e = r.bytesToWords(t), s = 8 * t.length, f = 1732584193, c = -271733879, h = -1732584194, v = 271733878, l = 0; l < e.length; l++) e[l] = 16711935 & (e[l] << 8 | e[l] >>> 24) | 4278255360 & (e[l] << 24 | e[l] >>> 8);
            e[s >>> 5] |= 128 << s % 32, e[14 + (s + 64 >>> 9 << 4)] = s;
            var p = a._ff,
                d = a._gg,
                g = a._hh,
                y = a._ii;
            for (l = 0; l < e.length; l += 16) {
                var w = f,
                    b = c,
                    x = h,
                    m = v;
                f = p(f, c, h, v, e[l + 0], 7, -680876936), v = p(v, f, c, h, e[l + 1], 12, -389564586), h = p(h, v, f, c, e[l + 2], 17, 606105819), c = p(c, h, v, f, e[l + 3], 22, -1044525330), f = p(f, c, h, v, e[l + 4], 7, -176418897), v = p(v, f, c, h, e[l + 5], 12, 1200080426), h = p(h, v, f, c, e[l + 6], 17, -1473231341), c = p(c, h, v, f, e[l + 7], 22, -45705983), f = p(f, c, h, v, e[l + 8], 7, 1770035416), v = p(v, f, c, h, e[l + 9], 12, -1958414417), h = p(h, v, f, c, e[l + 10], 17, -42063), c = p(c, h, v, f, e[l + 11], 22, -1990404162), f = p(f, c, h, v, e[l + 12], 7, 1804603682), v = p(v, f, c, h, e[l + 13], 12, -40341101), h = p(h, v, f, c, e[l + 14], 17, -1502002290), f = d(f, c = p(c, h, v, f, e[l + 15], 22, 1236535329), h, v, e[l + 1], 5, -165796510), v = d(v, f, c, h, e[l + 6], 9, -1069501632), h = d(h, v, f, c, e[l + 11], 14, 643717713), c = d(c, h, v, f, e[l + 0], 20, -373897302), f = d(f, c, h, v, e[l + 5], 5, -701558691), v = d(v, f, c, h, e[l + 10], 9, 38016083), h = d(h, v, f, c, e[l + 15], 14, -660478335), c = d(c, h, v, f, e[l + 4], 20, -405537848), f = d(f, c, h, v, e[l + 9], 5, 568446438), v = d(v, f, c, h, e[l + 14], 9, -1019803690), h = d(h, v, f, c, e[l + 3], 14, -187363961), c = d(c, h, v, f, e[l + 8], 20, 1163531501), f = d(f, c, h, v, e[l + 13], 5, -1444681467), v = d(v, f, c, h, e[l + 2], 9, -51403784), h = d(h, v, f, c, e[l + 7], 14, 1735328473), f = g(f, c = d(c, h, v, f, e[l + 12], 20, -1926607734), h, v, e[l + 5], 4, -378558), v = g(v, f, c, h, e[l + 8], 11, -2022574463), h = g(h, v, f, c, e[l + 11], 16, 1839030562), c = g(c, h, v, f, e[l + 14], 23, -35309556), f = g(f, c, h, v, e[l + 1], 4, -1530992060), v = g(v, f, c, h, e[l + 4], 11, 1272893353), h = g(h, v, f, c, e[l + 7], 16, -155497632), c = g(c, h, v, f, e[l + 10], 23, -1094730640), f = g(f, c, h, v, e[l + 13], 4, 681279174), v = g(v, f, c, h, e[l + 0], 11, -358537222), h = g(h, v, f, c, e[l + 3], 16, -722521979), c = g(c, h, v, f, e[l + 6], 23, 76029189), f = g(f, c, h, v, e[l + 9], 4, -640364487), v = g(v, f, c, h, e[l + 12], 11, -421815835), h = g(h, v, f, c, e[l + 15], 16, 530742520), f = y(f, c = g(c, h, v, f, e[l + 2], 23, -995338651), h, v, e[l + 0], 6, -198630844), v = y(v, f, c, h, e[l + 7], 10, 1126891415), h = y(h, v, f, c, e[l + 14], 15, -1416354905), c = y(c, h, v, f, e[l + 5], 21, -57434055), f = y(f, c, h, v, e[l + 12], 6, 1700485571), v = y(v, f, c, h, e[l + 3], 10, -1894986606), h = y(h, v, f, c, e[l + 10], 15, -1051523), c = y(c, h, v, f, e[l + 1], 21, -2054922799), f = y(f, c, h, v, e[l + 8], 6, 1873313359), v = y(v, f, c, h, e[l + 15], 10, -30611744), h = y(h, v, f, c, e[l + 6], 15, -1560198380), c = y(c, h, v, f, e[l + 13], 21, 1309151649), f = y(f, c, h, v, e[l + 4], 6, -145523070), v = y(v, f, c, h, e[l + 11], 10, -1120210379), h = y(h, v, f, c, e[l + 2], 15, 718787259), c = y(c, h, v, f, e[l + 9], 21, -343485551), f = f + w >>> 0, c = c + b >>> 0, h = h + x >>> 0, v = v + m >>> 0
            }
            return r.endian([f, c, h, v])
        })._ff = function (t, n, e, r, i, o, u) {
            var a = t + (n & e | ~n & r) + (i >>> 0) + u;
            return (a << o | a >>> 32 - o) + n
        }, a._gg = function (t, n, e, r, i, o, u) {
            var a = t + (n & r | e & ~r) + (i >>> 0) + u;
            return (a << o | a >>> 32 - o) + n
        }, a._hh = function (t, n, e, r, i, o, u) {
            var a = t + (n ^ e ^ r) + (i >>> 0) + u;
            return (a << o | a >>> 32 - o) + n
        }, a._ii = function (t, n, e, r, i, o, u) {
            var a = t + (e ^ (n | ~r)) + (i >>> 0) + u;
            return (a << o | a >>> 32 - o) + n
        }, a._blocksize = 16, a._digestsize = 16, t.exports = function (t, n) {
            if (null == t) throw new Error("Illegal argument " + t);
            var e = r.wordsToBytes(a(t, n));
            return n && n.asBytes ? e : n && n.asString ? u.bytesToString(e) : r.bytesToHex(e)
        }
    }, function (t, n) {
        function e(t) {
            return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        t.exports = function (t) {
            return null != t && (e(t) || function (t) {
                return "function" == typeof t.readFloatLE && "function" == typeof t.slice && e(t.slice(0, 0))
            }(t) || !!t._isBuffer)
        }
    }, function (t, n, e) {
        (function (n) {
            var r, i, o, u;
            r = e(2), i = e(0).utf8, o = e(0).bin, (u = function (t, e) {
                var u = r.wordsToBytes(function (t) {
                    t.constructor == String ? t = i.stringToBytes(t) : void 0 !== n && "function" == typeof n.isBuffer && n.isBuffer(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
                    var e = r.bytesToWords(t),
                        o = 8 * t.length,
                        u = [],
                        a = 1732584193,
                        s = -271733879,
                        f = -1732584194,
                        c = 271733878,
                        h = -1009589776;
                    e[o >> 5] |= 128 << 24 - o % 32, e[15 + (o + 64 >>> 9 << 4)] = o;
                    for (var v = 0; v < e.length; v += 16) {
                        for (var l = a, p = s, d = f, g = c, y = h, w = 0; w < 80; w++) {
                            if (w < 16) u[w] = e[v + w];
                            else {
                                var b = u[w - 3] ^ u[w - 8] ^ u[w - 14] ^ u[w - 16];
                                u[w] = b << 1 | b >>> 31
                            }
                            var x = (a << 5 | a >>> 27) + h + (u[w] >>> 0) + (w < 20 ? 1518500249 + (s & f | ~s & c) : w < 40 ? 1859775393 + (s ^ f ^ c) : w < 60 ? (s & f | s & c | f & c) - 1894007588 : (s ^ f ^ c) - 899497514);
                            h = c, c = f, f = s << 30 | s >>> 2, s = a, a = x
                        }
                        a += l, s += p, f += d, c += g, h += y
                    }
                    return [a, s, f, c, h]
                }(t));
                return e && e.asBytes ? u : e && e.asString ? o.bytesToString(u) : r.bytesToHex(u)
            })._blocksize = 16, u._digestsize = 20, t.exports = u
        }).call(this, e(8).Buffer)
    }, function (t, n, e) {
        "use strict";
        (function (t) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <http://feross.org>
             * @license  MIT
             */
            var r = e(10),
                i = e(11),
                o = e(12);

            function u() {
                return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function a(t, n) {
                if (u() < n) throw new RangeError("Invalid typed array length");
                return s.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(n)).__proto__ = s.prototype : (null === t && (t = new s(n)), t.length = n), t
            }

            function s(t, n, e) {
                if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(t, n, e);
                if ("number" == typeof t) {
                    if ("string" == typeof n) throw new Error("If encoding is specified then the first argument must be a string");
                    return h(this, t)
                }
                return f(this, t, n, e)
            }

            function f(t, n, e, r) {
                if ("number" == typeof n) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && n instanceof ArrayBuffer ? function (t, n, e, r) {
                    if (n.byteLength, e < 0 || n.byteLength < e) throw new RangeError("'offset' is out of bounds");
                    if (n.byteLength < e + (r || 0)) throw new RangeError("'length' is out of bounds");
                    n = void 0 === e && void 0 === r ? new Uint8Array(n) : void 0 === r ? new Uint8Array(n, e) : new Uint8Array(n, e, r);
                    s.TYPED_ARRAY_SUPPORT ? (t = n).__proto__ = s.prototype : t = v(t, n);
                    return t
                }(t, n, e, r) : "string" == typeof n ? function (t, n, e) {
                    "string" == typeof e && "" !== e || (e = "utf8");
                    if (!s.isEncoding(e)) throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | p(n, e),
                        i = (t = a(t, r)).write(n, e);
                    i !== r && (t = t.slice(0, i));
                    return t
                }(t, n, e) : function (t, n) {
                    if (s.isBuffer(n)) {
                        var e = 0 | l(n.length);
                        return 0 === (t = a(t, e)).length || n.copy(t, 0, 0, e), t
                    }
                    if (n) {
                        if ("undefined" != typeof ArrayBuffer && n.buffer instanceof ArrayBuffer || "length" in n) return "number" != typeof n.length || (r = n.length) != r ? a(t, 0) : v(t, n);
                        if ("Buffer" === n.type && o(n.data)) return v(t, n.data)
                    }
                    var r;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(t, n)
            }

            function c(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                if (t < 0) throw new RangeError('"size" argument must not be negative')
            }

            function h(t, n) {
                if (c(n), t = a(t, n < 0 ? 0 : 0 | l(n)), !s.TYPED_ARRAY_SUPPORT)
                    for (var e = 0; e < n; ++e) t[e] = 0;
                return t
            }

            function v(t, n) {
                var e = n.length < 0 ? 0 : 0 | l(n.length);
                t = a(t, e);
                for (var r = 0; r < e; r += 1) t[r] = 255 & n[r];
                return t
            }

            function l(t) {
                if (t >= u()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u().toString(16) + " bytes");
                return 0 | t
            }

            function p(t, n) {
                if (s.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var e = t.length;
                if (0 === e) return 0;
                for (var r = !1;;) switch (n) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return e;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return O(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * e;
                    case "hex":
                        return e >>> 1;
                    case "base64":
                        return Y(t).length;
                    default:
                        if (r) return O(t).length;
                        n = ("" + n).toLowerCase(), r = !0
                }
            }

            function d(t, n, e) {
                var r = !1;
                if ((void 0 === n || n < 0) && (n = 0), n > this.length) return "";
                if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
                if ((e >>>= 0) <= (n >>>= 0)) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return T(this, n, e);
                    case "utf8":
                    case "utf-8":
                        return C(this, n, e);
                    case "ascii":
                        return E(this, n, e);
                    case "latin1":
                    case "binary":
                        return L(this, n, e);
                    case "base64":
                        return z(this, n, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return M(this, n, e);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0
                }
            }

            function g(t, n, e) {
                var r = t[n];
                t[n] = t[e], t[e] = r
            }

            function y(t, n, e, r, i) {
                if (0 === t.length) return -1;
                if ("string" == typeof e ? (r = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
                    if (i) return -1;
                    e = t.length - 1
                } else if (e < 0) {
                    if (!i) return -1;
                    e = 0
                }
                if ("string" == typeof n && (n = s.from(n, r)), s.isBuffer(n)) return 0 === n.length ? -1 : w(t, n, e, r, i);
                if ("number" == typeof n) return n &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, n, e) : Uint8Array.prototype.lastIndexOf.call(t, n, e) : w(t, [n], e, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function w(t, n, e, r, i) {
                var o, u = 1,
                    a = t.length,
                    s = n.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (t.length < 2 || n.length < 2) return -1;
                    u = 2, a /= 2, s /= 2, e /= 2
                }

                function f(t, n) {
                    return 1 === u ? t[n] : t.readUInt16BE(n * u)
                }
                if (i) {
                    var c = -1;
                    for (o = e; o < a; o++)
                        if (f(t, o) === f(n, -1 === c ? 0 : o - c)) {
                            if (-1 === c && (c = o), o - c + 1 === s) return c * u
                        } else -1 !== c && (o -= o - c), c = -1
                } else
                    for (e + s > a && (e = a - s), o = e; o >= 0; o--) {
                        for (var h = !0, v = 0; v < s; v++)
                            if (f(t, o + v) !== f(n, v)) {
                                h = !1;
                                break
                            } if (h) return o
                    }
                return -1
            }

            function b(t, n, e, r) {
                e = Number(e) || 0;
                var i = t.length - e;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                var o = n.length;
                if (o % 2 != 0) throw new TypeError("Invalid hex string");
                r > o / 2 && (r = o / 2);
                for (var u = 0; u < r; ++u) {
                    var a = parseInt(n.substr(2 * u, 2), 16);
                    if (isNaN(a)) return u;
                    t[e + u] = a
                }
                return u
            }

            function x(t, n, e, r) {
                return k(O(n, t.length - e), t, e, r)
            }

            function m(t, n, e, r) {
                return k(function (t) {
                    for (var n = [], e = 0; e < t.length; ++e) n.push(255 & t.charCodeAt(e));
                    return n
                }(n), t, e, r)
            }

            function _(t, n, e, r) {
                return m(t, n, e, r)
            }

            function A(t, n, e, r) {
                return k(Y(n), t, e, r)
            }

            function B(t, n, e, r) {
                return k(function (t, n) {
                    for (var e, r, i, o = [], u = 0; u < t.length && !((n -= 2) < 0); ++u) e = t.charCodeAt(u), r = e >> 8, i = e % 256, o.push(i), o.push(r);
                    return o
                }(n, t.length - e), t, e, r)
            }

            function z(t, n, e) {
                return 0 === n && e === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(n, e))
            }

            function C(t, n, e) {
                e = Math.min(t.length, e);
                for (var r = [], i = n; i < e;) {
                    var o, u, a, s, f = t[i],
                        c = null,
                        h = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                    if (i + h <= e) switch (h) {
                        case 1:
                            f < 128 && (c = f);
                            break;
                        case 2:
                            128 == (192 & (o = t[i + 1])) && (s = (31 & f) << 6 | 63 & o) > 127 && (c = s);
                            break;
                        case 3:
                            o = t[i + 1], u = t[i + 2], 128 == (192 & o) && 128 == (192 & u) && (s = (15 & f) << 12 | (63 & o) << 6 | 63 & u) > 2047 && (s < 55296 || s > 57343) && (c = s);
                            break;
                        case 4:
                            o = t[i + 1], u = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & u) && 128 == (192 & a) && (s = (15 & f) << 18 | (63 & o) << 12 | (63 & u) << 6 | 63 & a) > 65535 && s < 1114112 && (c = s)
                    }
                    null === c ? (c = 65533, h = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), i += h
                }
                return function (t) {
                    var n = t.length;
                    if (n <= 4096) return String.fromCharCode.apply(String, t);
                    var e = "",
                        r = 0;
                    for (; r < n;) e += String.fromCharCode.apply(String, t.slice(r, r += 4096));
                    return e
                }(r)
            }
            n.Buffer = s, n.SlowBuffer = function (t) {
                +t != t && (t = 0);
                return s.alloc(+t)
            }, n.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                            return 42
                        }
                    }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }(), n.kMaxLength = u(), s.poolSize = 8192, s._augment = function (t) {
                return t.__proto__ = s.prototype, t
            }, s.from = function (t, n, e) {
                return f(null, t, n, e)
            }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
                value: null,
                configurable: !0
            })), s.alloc = function (t, n, e) {
                return function (t, n, e, r) {
                    return c(n), n <= 0 ? a(t, n) : void 0 !== e ? "string" == typeof r ? a(t, n).fill(e, r) : a(t, n).fill(e) : a(t, n)
                }(null, t, n, e)
            }, s.allocUnsafe = function (t) {
                return h(null, t)
            }, s.allocUnsafeSlow = function (t) {
                return h(null, t)
            }, s.isBuffer = function (t) {
                return !(null == t || !t._isBuffer)
            }, s.compare = function (t, n) {
                if (!s.isBuffer(t) || !s.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
                if (t === n) return 0;
                for (var e = t.length, r = n.length, i = 0, o = Math.min(e, r); i < o; ++i)
                    if (t[i] !== n[i]) {
                        e = t[i], r = n[i];
                        break
                    } return e < r ? -1 : r < e ? 1 : 0
            }, s.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, s.concat = function (t, n) {
                if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return s.alloc(0);
                var e;
                if (void 0 === n)
                    for (n = 0, e = 0; e < t.length; ++e) n += t[e].length;
                var r = s.allocUnsafe(n),
                    i = 0;
                for (e = 0; e < t.length; ++e) {
                    var u = t[e];
                    if (!s.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
                    u.copy(r, i), i += u.length
                }
                return r
            }, s.byteLength = p, s.prototype._isBuffer = !0, s.prototype.swap16 = function () {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var n = 0; n < t; n += 2) g(this, n, n + 1);
                return this
            }, s.prototype.swap32 = function () {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var n = 0; n < t; n += 4) g(this, n, n + 3), g(this, n + 1, n + 2);
                return this
            }, s.prototype.swap64 = function () {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var n = 0; n < t; n += 8) g(this, n, n + 7), g(this, n + 1, n + 6), g(this, n + 2, n + 5), g(this, n + 3, n + 4);
                return this
            }, s.prototype.toString = function () {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? C(this, 0, t) : d.apply(this, arguments)
            }, s.prototype.equals = function (t) {
                if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === s.compare(this, t)
            }, s.prototype.inspect = function () {
                var t = "",
                    e = n.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (t += " ... ")), "<Buffer " + t + ">"
            }, s.prototype.compare = function (t, n, e, r, i) {
                if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === n && (n = 0), void 0 === e && (e = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), n < 0 || e > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                if (r >= i && n >= e) return 0;
                if (r >= i) return -1;
                if (n >= e) return 1;
                if (this === t) return 0;
                for (var o = (i >>>= 0) - (r >>>= 0), u = (e >>>= 0) - (n >>>= 0), a = Math.min(o, u), f = this.slice(r, i), c = t.slice(n, e), h = 0; h < a; ++h)
                    if (f[h] !== c[h]) {
                        o = f[h], u = c[h];
                        break
                    } return o < u ? -1 : u < o ? 1 : 0
            }, s.prototype.includes = function (t, n, e) {
                return -1 !== this.indexOf(t, n, e)
            }, s.prototype.indexOf = function (t, n, e) {
                return y(this, t, n, e, !0)
            }, s.prototype.lastIndexOf = function (t, n, e) {
                return y(this, t, n, e, !1)
            }, s.prototype.write = function (t, n, e, r) {
                if (void 0 === n) r = "utf8", e = this.length, n = 0;
                else if (void 0 === e && "string" == typeof n) r = n, e = this.length, n = 0;
                else {
                    if (!isFinite(n)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    n |= 0, isFinite(e) ? (e |= 0, void 0 === r && (r = "utf8")) : (r = e, e = void 0)
                }
                var i = this.length - n;
                if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var o = !1;;) switch (r) {
                    case "hex":
                        return b(this, t, n, e);
                    case "utf8":
                    case "utf-8":
                        return x(this, t, n, e);
                    case "ascii":
                        return m(this, t, n, e);
                    case "latin1":
                    case "binary":
                        return _(this, t, n, e);
                    case "base64":
                        return A(this, t, n, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return B(this, t, n, e);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), o = !0
                }
            }, s.prototype.toJSON = function () {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };

            function E(t, n, e) {
                var r = "";
                e = Math.min(t.length, e);
                for (var i = n; i < e; ++i) r += String.fromCharCode(127 & t[i]);
                return r
            }

            function L(t, n, e) {
                var r = "";
                e = Math.min(t.length, e);
                for (var i = n; i < e; ++i) r += String.fromCharCode(t[i]);
                return r
            }

            function T(t, n, e) {
                var r = t.length;
                (!n || n < 0) && (n = 0), (!e || e < 0 || e > r) && (e = r);
                for (var i = "", o = n; o < e; ++o) i += N(t[o]);
                return i
            }

            function M(t, n, e) {
                for (var r = t.slice(n, e), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return i
            }

            function P(t, n, e) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + n > e) throw new RangeError("Trying to access beyond buffer length")
            }

            function D(t, n, e, r, i, o) {
                if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (n > i || n < o) throw new RangeError('"value" argument is out of bounds');
                if (e + r > t.length) throw new RangeError("Index out of range")
            }

            function S(t, n, e, r) {
                n < 0 && (n = 65535 + n + 1);
                for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i) t[e + i] = (n & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
            }

            function q(t, n, e, r) {
                n < 0 && (n = 4294967295 + n + 1);
                for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i) t[e + i] = n >>> 8 * (r ? i : 3 - i) & 255
            }

            function I(t, n, e, r, i, o) {
                if (e + r > t.length) throw new RangeError("Index out of range");
                if (e < 0) throw new RangeError("Index out of range")
            }

            function U(t, n, e, r, o) {
                return o || I(t, 0, e, 4), i.write(t, n, e, r, 23, 4), e + 4
            }

            function R(t, n, e, r, o) {
                return o || I(t, 0, e, 8), i.write(t, n, e, r, 52, 8), e + 8
            }
            s.prototype.slice = function (t, n) {
                var e, r = this.length;
                if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), n < t && (n = t), s.TYPED_ARRAY_SUPPORT)(e = this.subarray(t, n)).__proto__ = s.prototype;
                else {
                    var i = n - t;
                    e = new s(i, void 0);
                    for (var o = 0; o < i; ++o) e[o] = this[o + t]
                }
                return e
            }, s.prototype.readUIntLE = function (t, n, e) {
                t |= 0, n |= 0, e || P(t, n, this.length);
                for (var r = this[t], i = 1, o = 0; ++o < n && (i *= 256);) r += this[t + o] * i;
                return r
            }, s.prototype.readUIntBE = function (t, n, e) {
                t |= 0, n |= 0, e || P(t, n, this.length);
                for (var r = this[t + --n], i = 1; n > 0 && (i *= 256);) r += this[t + --n] * i;
                return r
            }, s.prototype.readUInt8 = function (t, n) {
                return n || P(t, 1, this.length), this[t]
            }, s.prototype.readUInt16LE = function (t, n) {
                return n || P(t, 2, this.length), this[t] | this[t + 1] << 8
            }, s.prototype.readUInt16BE = function (t, n) {
                return n || P(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, s.prototype.readUInt32LE = function (t, n) {
                return n || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, s.prototype.readUInt32BE = function (t, n) {
                return n || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, s.prototype.readIntLE = function (t, n, e) {
                t |= 0, n |= 0, e || P(t, n, this.length);
                for (var r = this[t], i = 1, o = 0; ++o < n && (i *= 256);) r += this[t + o] * i;
                return r >= (i *= 128) && (r -= Math.pow(2, 8 * n)), r
            }, s.prototype.readIntBE = function (t, n, e) {
                t |= 0, n |= 0, e || P(t, n, this.length);
                for (var r = n, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * n)), o
            }, s.prototype.readInt8 = function (t, n) {
                return n || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, s.prototype.readInt16LE = function (t, n) {
                n || P(t, 2, this.length);
                var e = this[t] | this[t + 1] << 8;
                return 32768 & e ? 4294901760 | e : e
            }, s.prototype.readInt16BE = function (t, n) {
                n || P(t, 2, this.length);
                var e = this[t + 1] | this[t] << 8;
                return 32768 & e ? 4294901760 | e : e
            }, s.prototype.readInt32LE = function (t, n) {
                return n || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, s.prototype.readInt32BE = function (t, n) {
                return n || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, s.prototype.readFloatLE = function (t, n) {
                return n || P(t, 4, this.length), i.read(this, t, !0, 23, 4)
            }, s.prototype.readFloatBE = function (t, n) {
                return n || P(t, 4, this.length), i.read(this, t, !1, 23, 4)
            }, s.prototype.readDoubleLE = function (t, n) {
                return n || P(t, 8, this.length), i.read(this, t, !0, 52, 8)
            }, s.prototype.readDoubleBE = function (t, n) {
                return n || P(t, 8, this.length), i.read(this, t, !1, 52, 8)
            }, s.prototype.writeUIntLE = function (t, n, e, r) {
                (t = +t, n |= 0, e |= 0, r) || D(this, t, n, e, Math.pow(2, 8 * e) - 1, 0);
                var i = 1,
                    o = 0;
                for (this[n] = 255 & t; ++o < e && (i *= 256);) this[n + o] = t / i & 255;
                return n + e
            }, s.prototype.writeUIntBE = function (t, n, e, r) {
                (t = +t, n |= 0, e |= 0, r) || D(this, t, n, e, Math.pow(2, 8 * e) - 1, 0);
                var i = e - 1,
                    o = 1;
                for (this[n + i] = 255 & t; --i >= 0 && (o *= 256);) this[n + i] = t / o & 255;
                return n + e
            }, s.prototype.writeUInt8 = function (t, n, e) {
                return t = +t, n |= 0, e || D(this, t, n, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[n] = 255 & t, n + 1
            }, s.prototype.writeUInt16LE = function (t, n, e) {
                return t = +t, n |= 0, e || D(this, t, n, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : S(this, t, n, !0), n + 2
            }, s.prototype.writeUInt16BE = function (t, n, e) {
                return t = +t, n |= 0, e || D(this, t, n, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : S(this, t, n, !1), n + 2
            }, s.prototype.writeUInt32LE = function (t, n, e) {
                return t = +t, n |= 0, e || D(this, t, n, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : q(this, t, n, !0), n + 4
            }, s.prototype.writeUInt32BE = function (t, n, e) {
                return t = +t, n |= 0, e || D(this, t, n, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : q(this, t, n, !1), n + 4
            }, s.prototype.writeIntLE = function (t, n, e, r) {
                if (t = +t, n |= 0, !r) {
                    var i = Math.pow(2, 8 * e - 1);
                    D(this, t, n, e, i - 1, -i)
                }
                var o = 0,
                    u = 1,
                    a = 0;
                for (this[n] = 255 & t; ++o < e && (u *= 256);) t < 0 && 0 === a && 0 !== this[n + o - 1] && (a = 1), this[n + o] = (t / u >> 0) - a & 255;
                return n + e
            }, s.prototype.writeIntBE = function (t, n, e, r) {
                if (t = +t, n |= 0, !r) {
                    var i = Math.pow(2, 8 * e - 1);
                    D(this, t, n, e, i - 1, -i)
                }
                var o = e - 1,
                    u = 1,
                    a = 0;
                for (this[n + o] = 255 & t; --o >= 0 && (u *= 256);) t < 0 && 0 === a && 0 !== this[n + o + 1] && (a = 1), this[n + o] = (t / u >> 0) - a & 255;
                return n + e
            }, s.prototype.writeInt8 = function (t, n, e) {
                return t = +t, n |= 0, e || D(this, t, n, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[n] = 255 & t, n + 1
            }, s.prototype.writeInt16LE = function (t, n, e) {
                return t = +t, n |= 0, e || D(this, t, n, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : S(this, t, n, !0), n + 2
            }, s.prototype.writeInt16BE = function (t, n, e) {
                return t = +t, n |= 0, e || D(this, t, n, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : S(this, t, n, !1), n + 2
            }, s.prototype.writeInt32LE = function (t, n, e) {
                return t = +t, n |= 0, e || D(this, t, n, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : q(this, t, n, !0), n + 4
            }, s.prototype.writeInt32BE = function (t, n, e) {
                return t = +t, n |= 0, e || D(this, t, n, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), s.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : q(this, t, n, !1), n + 4
            }, s.prototype.writeFloatLE = function (t, n, e) {
                return U(this, t, n, !0, e)
            }, s.prototype.writeFloatBE = function (t, n, e) {
                return U(this, t, n, !1, e)
            }, s.prototype.writeDoubleLE = function (t, n, e) {
                return R(this, t, n, !0, e)
            }, s.prototype.writeDoubleBE = function (t, n, e) {
                return R(this, t, n, !1, e)
            }, s.prototype.copy = function (t, n, e, r) {
                if (e || (e = 0), r || 0 === r || (r = this.length), n >= t.length && (n = t.length), n || (n = 0), r > 0 && r < e && (r = e), r === e) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (n < 0) throw new RangeError("targetStart out of bounds");
                if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - n < r - e && (r = t.length - n + e);
                var i, o = r - e;
                if (this === t && e < n && n < r)
                    for (i = o - 1; i >= 0; --i) t[i + n] = this[i + e];
                else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i) t[i + n] = this[i + e];
                else Uint8Array.prototype.set.call(t, this.subarray(e, e + o), n);
                return o
            }, s.prototype.fill = function (t, n, e, r) {
                if ("string" == typeof t) {
                    if ("string" == typeof n ? (r = n, n = 0, e = this.length) : "string" == typeof e && (r = e, e = this.length), 1 === t.length) {
                        var i = t.charCodeAt(0);
                        i < 256 && (t = i)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof t && (t &= 255);
                if (n < 0 || this.length < n || this.length < e) throw new RangeError("Out of range index");
                if (e <= n) return this;
                var o;
                if (n >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t)
                    for (o = n; o < e; ++o) this[o] = t;
                else {
                    var u = s.isBuffer(t) ? t : O(new s(t, r).toString()),
                        a = u.length;
                    for (o = 0; o < e - n; ++o) this[o + n] = u[o % a]
                }
                return this
            };
            var j = /[^+\/0-9A-Za-z-_]/g;

            function N(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }

            function O(t, n) {
                var e;
                n = n || 1 / 0;
                for (var r = t.length, i = null, o = [], u = 0; u < r; ++u) {
                    if ((e = t.charCodeAt(u)) > 55295 && e < 57344) {
                        if (!i) {
                            if (e > 56319) {
                                (n -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (u + 1 === r) {
                                (n -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = e;
                            continue
                        }
                        if (e < 56320) {
                            (n -= 3) > -1 && o.push(239, 191, 189), i = e;
                            continue
                        }
                        e = 65536 + (i - 55296 << 10 | e - 56320)
                    } else i && (n -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, e < 128) {
                        if ((n -= 1) < 0) break;
                        o.push(e)
                    } else if (e < 2048) {
                        if ((n -= 2) < 0) break;
                        o.push(e >> 6 | 192, 63 & e | 128)
                    } else if (e < 65536) {
                        if ((n -= 3) < 0) break;
                        o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                    } else {
                        if (!(e < 1114112)) throw new Error("Invalid code point");
                        if ((n -= 4) < 0) break;
                        o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                    }
                }
                return o
            }

            function Y(t) {
                return r.toByteArray(function (t) {
                    if ((t = function (t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                        }(t).replace(j, "")).length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }(t))
            }

            function k(t, n, e, r) {
                for (var i = 0; i < r && !(i + e >= n.length || i >= t.length); ++i) n[i + e] = t[i];
                return i
            }
        }).call(this, e(9))
    }, function (t, n) {
        var e;
        e = function () {
            return this
        }();
        try {
            e = e || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (e = window)
        }
        t.exports = e
    }, function (t, n, e) {
        "use strict";
        n.byteLength = function (t) {
            var n = f(t),
                e = n[0],
                r = n[1];
            return 3 * (e + r) / 4 - r
        }, n.toByteArray = function (t) {
            var n, e, r = f(t),
                u = r[0],
                a = r[1],
                s = new o(function (t, n, e) {
                    return 3 * (n + e) / 4 - e
                }(0, u, a)),
                c = 0,
                h = a > 0 ? u - 4 : u;
            for (e = 0; e < h; e += 4) n = i[t.charCodeAt(e)] << 18 | i[t.charCodeAt(e + 1)] << 12 | i[t.charCodeAt(e + 2)] << 6 | i[t.charCodeAt(e + 3)], s[c++] = n >> 16 & 255, s[c++] = n >> 8 & 255, s[c++] = 255 & n;
            2 === a && (n = i[t.charCodeAt(e)] << 2 | i[t.charCodeAt(e + 1)] >> 4, s[c++] = 255 & n);
            1 === a && (n = i[t.charCodeAt(e)] << 10 | i[t.charCodeAt(e + 1)] << 4 | i[t.charCodeAt(e + 2)] >> 2, s[c++] = n >> 8 & 255, s[c++] = 255 & n);
            return s
        }, n.fromByteArray = function (t) {
            for (var n, e = t.length, i = e % 3, o = [], u = 0, a = e - i; u < a; u += 16383) o.push(c(t, u, u + 16383 > a ? a : u + 16383));
            1 === i ? (n = t[e - 1], o.push(r[n >> 2] + r[n << 4 & 63] + "==")) : 2 === i && (n = (t[e - 2] << 8) + t[e - 1], o.push(r[n >> 10] + r[n >> 4 & 63] + r[n << 2 & 63] + "="));
            return o.join("")
        };
        for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = u.length; a < s; ++a) r[a] = u[a], i[u.charCodeAt(a)] = a;

        function f(t) {
            var n = t.length;
            if (n % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var e = t.indexOf("=");
            return -1 === e && (e = n), [e, e === n ? 0 : 4 - e % 4]
        }

        function c(t, n, e) {
            for (var i, o, u = [], a = n; a < e; a += 3) i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), u.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
            return u.join("")
        }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
    }, function (t, n) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        n.read = function (t, n, e, r, i) {
            var o, u, a = 8 * i - r - 1,
                s = (1 << a) - 1,
                f = s >> 1,
                c = -7,
                h = e ? i - 1 : 0,
                v = e ? -1 : 1,
                l = t[n + h];
            for (h += v, o = l & (1 << -c) - 1, l >>= -c, c += a; c > 0; o = 256 * o + t[n + h], h += v, c -= 8);
            for (u = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; u = 256 * u + t[n + h], h += v, c -= 8);
            if (0 === o) o = 1 - f;
            else {
                if (o === s) return u ? NaN : 1 / 0 * (l ? -1 : 1);
                u += Math.pow(2, r), o -= f
            }
            return (l ? -1 : 1) * u * Math.pow(2, o - r)
        }, n.write = function (t, n, e, r, i, o) {
            var u, a, s, f = 8 * o - i - 1,
                c = (1 << f) - 1,
                h = c >> 1,
                v = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                l = r ? 0 : o - 1,
                p = r ? 1 : -1,
                d = n < 0 || 0 === n && 1 / n < 0 ? 1 : 0;
            for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (a = isNaN(n) ? 1 : 0, u = c) : (u = Math.floor(Math.log(n) / Math.LN2), n * (s = Math.pow(2, -u)) < 1 && (u--, s *= 2), (n += u + h >= 1 ? v / s : v * Math.pow(2, 1 - h)) * s >= 2 && (u++, s /= 2), u + h >= c ? (a = 0, u = c) : u + h >= 1 ? (a = (n * s - 1) * Math.pow(2, i), u += h) : (a = n * Math.pow(2, h - 1) * Math.pow(2, i), u = 0)); i >= 8; t[e + l] = 255 & a, l += p, a /= 256, i -= 8);
            for (u = u << i | a, f += i; f > 0; t[e + l] = 255 & u, l += p, u /= 256, f -= 8);
            t[e + l - p] |= 128 * d
        }
    }, function (t, n) {
        var e = {}.toString;
        t.exports = Array.isArray || function (t) {
            return "[object Array]" == e.call(t)
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.initInstance = function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = n.Vue,
                i = n.dataBelong,
                o = void 0 === i ? [] : i,
                u = n.appId,
                a = n.router,
                s = n.needUid,
                f = n.env,
                c = n.isSea,
                h = void 0 !== c && c,
                v = n.debug,
                l = void 0 !== v && v,
                p = n.pagename,
                d = n.device_id,
                g = void 0 === d ? "" : d,
                y = n.pageExtrainfo,
                w = n.userExtrainfo,
                b = n.eventExtrainfo,
                x = n.type,
                m = void 0 === x ? "tool" : x,
                _ = n.autoTrackPageview,
                A = void 0 === _ || _,
                B = n.setMiaToVue,
                z = void 0 === B || B,
                C = n.needSessionInfo,
                E = void 0 !== C && C,
                L = n.sessionInfoExpires,
                T = void 0 === L ? 1 / 48 : L,
                M = n.host,
                P = void 0 === M ? "" : M,
                D = r || window.Vue;
            if (navigator && navigator.userAgent.includes("miHoYoBBS/")) {
                e(14);
                var S = {
                        test: "https://devapi-takumi.moyo.com/",
                        production: "https://api-takumi.miho.com/"
                    },
                    q = function () {
                        var n = new XMLHttpRequest;
                        n.onerror = () => {
                            return 1
                        };
                        n.withCredentials = !0;
                        var e = S.production;
                        ["development", "test", "sandbox"].includes(f || t.environment) && (e = S.test), n.onreadystatechange = function () {
                            4 === n.readyState && 200 === n.status && (0 !== JSON.parse(n.responseText).retcode && D.prototype.$bbsApp.getCookieToken(!0).then((function () {
                                D.prototype.$bbsApp.toLogin()
                            })))
                        }, n.open("GET", e + "auth/api/getUserAccountInfoByCookieToken", !0), n.send(), n.onerror = () => {
                            return 1
                        }
                    };
                window.addEventListener("ajaxReadyStateChange", (function (t) {
                    try {
                        var n = t.detail;
                        if (4 === n.readyState && 200 === n.status) {
                            var e = JSON.parse(n.responseText);
                            if (!D) {
                                if (!window.Vue) return;
                                D = window.Vue
                            } [-100, 10001].includes(e.retcode) && D.prototype.$bbsApp && D.prototype.$bbsApp.getCookieInfo().then((function (t) {
                                var n = t.data;
                                n && n.ltoken && q()
                            }))
                        }
                    } catch (t) {
                        console.log(t)
                    }
                }))
            }
            if (!u) throw console.error("请传入appId"), new Error("请传入appId");
            if (!Array.isArray(o)) throw console.error("dataBelong的类型为数组"), t.data_belong = "", new Error("dataBelong的类型为数组");
            return t.data_belong = o.join(","), f && t.apis[f] && (t.environment = f), (h || t.isHostSea) && "production" === t.environment && (t.environment = "production.sea"), l && (t.environment = "test"), (h || t.isHostSea) && "test" === t.environment && (t.environment = "test.sea"), D && z && (D.prototype.$mia = t), t.app_id = "" + u, t.needUid = s || !1, t.pagename = p, t.pageExtrainfo = y, t.userExtrainfo = w, t.eventExtrainfo = b, t.type = m, t.device_id = g, t.needSessionInfo = E, t.sessionInfoExpires = T, t.host = P, t.bbsApp = D && D.prototype.$bbsApp, A && (D ? a && a.afterEach((function (n) {
                var e = n || {},
                    r = (e.meta || {}).miaPagename;
                t.pageurl = e.path, t.pagename = r || e.name || e.path, t.trackPageview()
            })) : t.trackPageview()), t
        }, n.randomId = function () {
            var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                n = [],
                e = Math.random,
                r = void 0;
            n[8] = n[13] = n[18] = n[23] = n[28] = n[33] = n[38] = n[43] = n[48] = n[53] = n[58] = "-", n[14] = "4";
            for (var i = 0; i < 64; i++) n[i] || (r = 0 | 16 * e(), n[i] = t[19 === i ? 3 & r | 8 : 15 & r]);
            return n.join("").toLowerCase()
        }
    }, function (t, n, e) {
        "use strict";
        ! function () {
            if ("function" == typeof window.CustomEvent) return !1;

            function t(t, n) {
                n = n || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var e = document.createEvent("CustomEvent");
                return e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), e
            }
            t.prototype = window.Event.prototype, window.CustomEvent = t
        }(),
        function () {
            function t(t) {
                var n = new CustomEvent(t, {
                    detail: this
                });
                window.dispatchEvent(n)
            }
            var n = window.XMLHttpRequest;
            window.XMLHttpRequest = function () {
                var e = new n;
                e.onerror = () => {
                    return 1
                };
                e.addEventListener("abort", (function () {
                    t.call(this, "ajaxAbort")
                }), !1), e.addEventListener("error", (function () {
                    t.call(this, "ajaxError")
                }), !1), e.addEventListener("load", (function () {
                    t.call(this, "ajaxLoad")
                }), !1), e.addEventListener("loadstart", (function () {
                    t.call(this, "ajaxLoadStart")
                }), !1), e.addEventListener("progress", (function () {
                    t.call(this, "ajaxProgress")
                }), !1), e.addEventListener("timeout", (function () {
                    t.call(this, "ajaxTimeout")
                }), !1), e.onerror = () => {
                    return 1
                }, e.addEventListener("loadend", (function () {
                    t.call(this, "ajaxLoadEnd")
                }), !1), e.addEventListener("readystatechange", (function () {
                    t.call(this, "ajaxReadyStateChange")
                }), !1);
                var r = e.send;
                e.send = function () {
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    r.apply(e, i), e.body = i[0], t.call(e, "ajaxSend")
                };
                var i = e.open;
                e.open = function () {
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    i.apply(e, r), e.method = r[0], e.orignUrl = r[1], e.async = r[2], t.call(e, "ajaxOpen")
                };
                var o = e.setRequestHeader;
                return e.requestHeader = {}, e.setRequestHeader = function (t, n) {
                    e.requestHeader[t] = n, o.call(e, t, n)
                }, e
            }
        }()
    }]).default
}));