!function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.DataSet = n() : t.DataSet = n()
}("undefined" != typeof self ? self : this, function () {
    return function (t) {
        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {i: r, l: !1, exports: {}};
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }

        var e = {};
        return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: r})
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, n.p = "", n(n.s = 195)
    }([function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(103);
        e.d(n, "geoArea", function () {
            return r.c
        });
        var i = e(197);
        e.d(n, "geoBounds", function () {
            return i.a
        });
        var o = e(198);
        e.d(n, "geoCentroid", function () {
            return o.a
        });
        var u = e(104);
        e.d(n, "geoCircle", function () {
            return u.b
        });
        var a = e(65);
        e.d(n, "geoClipExtent", function () {
            return a.b
        });
        var c = e(217);
        e.d(n, "geoContains", function () {
            return c.a
        });
        var f = e(122);
        e.d(n, "geoDistance", function () {
            return f.a
        });
        var s = e(218);
        e.d(n, "geoGraticule", function () {
            return s.a
        }), e.d(n, "geoGraticule10", function () {
            return s.b
        });
        var l = e(219);
        e.d(n, "geoInterpolate", function () {
            return l.a
        });
        var h = e(123);
        e.d(n, "geoLength", function () {
            return h.a
        });
        var p = e(220);
        e.d(n, "geoPath", function () {
            return p.a
        });
        var v = e(125);
        e.d(n, "geoAlbers", function () {
            return v.a
        });
        var d = e(230);
        e.d(n, "geoAlbersUsa", function () {
            return d.a
        });
        var g = e(231);
        e.d(n, "geoAzimuthalEqualArea", function () {
            return g.b
        }), e.d(n, "geoAzimuthalEqualAreaRaw", function () {
            return g.a
        });
        var b = e(232);
        e.d(n, "geoAzimuthalEquidistant", function () {
            return b.b
        }), e.d(n, "geoAzimuthalEquidistantRaw", function () {
            return b.a
        });
        var y = e(233);
        e.d(n, "geoConicConformal", function () {
            return y.b
        }), e.d(n, "geoConicConformalRaw", function () {
            return y.a
        });
        var j = e(68);
        e.d(n, "geoConicEqualArea", function () {
            return j.b
        }), e.d(n, "geoConicEqualAreaRaw", function () {
            return j.a
        });
        var O = e(234);
        e.d(n, "geoConicEquidistant", function () {
            return O.b
        }), e.d(n, "geoConicEquidistantRaw", function () {
            return O.a
        });
        var _ = e(127);
        e.d(n, "geoEquirectangular", function () {
            return _.a
        }), e.d(n, "geoEquirectangularRaw", function () {
            return _.b
        });
        var m = e(235);
        e.d(n, "geoGnomonic", function () {
            return m.a
        }), e.d(n, "geoGnomonicRaw", function () {
            return m.b
        });
        var w = e(236);
        e.d(n, "geoIdentity", function () {
            return w.a
        });
        var x = e(17);
        e.d(n, "geoProjection", function () {
            return x.a
        }), e.d(n, "geoProjectionMutator", function () {
            return x.b
        });
        var E = e(71);
        e.d(n, "geoMercator", function () {
            return E.a
        }), e.d(n, "geoMercatorRaw", function () {
            return E.c
        });
        var M = e(237);
        e.d(n, "geoOrthographic", function () {
            return M.a
        }), e.d(n, "geoOrthographicRaw", function () {
            return M.b
        });
        var T = e(238);
        e.d(n, "geoStereographic", function () {
            return T.a
        }), e.d(n, "geoStereographicRaw", function () {
            return T.b
        });
        var S = e(239);
        e.d(n, "geoTransverseMercator", function () {
            return S.a
        }), e.d(n, "geoTransverseMercatorRaw", function () {
            return S.b
        });
        var k = e(50);
        e.d(n, "geoRotation", function () {
            return k.a
        });
        var C = e(22);
        e.d(n, "geoStream", function () {
            return C.a
        });
        var P = e(51);
        e.d(n, "geoTransform", function () {
            return P.a
        })
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t > 0 ? Math.sqrt(t) : 0
        }

        e.d(n, "a", function () {
            return i
        }), e.d(n, "f", function () {
            return o
        }), e.d(n, "g", function () {
            return u
        }), e.d(n, "h", function () {
            return a
        }), e.d(n, "m", function () {
            return c
        }), e.d(n, "n", function () {
            return f
        }), e.d(n, "p", function () {
            return s
        }), e.d(n, "q", function () {
            return l
        }), e.d(n, "r", function () {
            return h
        }), e.d(n, "t", function () {
            return p
        }), e.d(n, "w", function () {
            return v
        }), e.d(n, "x", function () {
            return d
        }), e.d(n, "y", function () {
            return g
        }), e.d(n, "F", function () {
            return b
        }), e.d(n, "k", function () {
            return y
        }), e.d(n, "l", function () {
            return j
        }), e.d(n, "s", function () {
            return O
        }), e.d(n, "o", function () {
            return _
        }), e.d(n, "u", function () {
            return m
        }), e.d(n, "C", function () {
            return w
        }), e.d(n, "D", function () {
            return x
        }), e.d(n, "E", function () {
            return E
        }), e.d(n, "H", function () {
            return M
        }), e.d(n, "j", function () {
            return T
        }), e.d(n, "v", function () {
            return S
        }), n.z = function (t) {
            return t ? t / Math.sin(t) : 1
        }, n.e = function (t) {
            return t > 1 ? _ : t < -1 ? -_ : Math.asin(t)
        }, n.b = function (t) {
            return t > 1 ? 0 : t < -1 ? O : Math.acos(t)
        }, n.B = r, n.G = function (t) {
            return ((t = c(2 * t)) - 1) / (t + 1)
        }, n.A = function (t) {
            return (c(t) - c(-t)) / 2
        }, n.i = function (t) {
            return (c(t) + c(-t)) / 2
        }, n.d = function (t) {
            return s(t + r(t * t + 1))
        }, n.c = function (t) {
            return s(t + r(t * t - 1))
        };
        var i = Math.abs, o = Math.atan, u = Math.atan2, a = (Math.ceil, Math.cos), c = Math.exp, f = Math.floor,
            s = Math.log, l = Math.max, h = Math.min, p = Math.pow, v = Math.round, d = Math.sign || function (t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            }, g = Math.sin, b = Math.tan, y = 1e-6, j = 1e-12, O = Math.PI, _ = O / 2, m = O / 4, w = Math.SQRT1_2,
            x = r(2), E = r(O), M = 2 * O, T = 180 / O, S = O / 180
    }, function (t, n, e) {
        function r(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        var i = e(3), o = e(77), u = e(76), a = e(356), c = e(139), f = e(39), s = e(84), l = function (t) {
            function n(e) {
                var o;
                void 0 === e && (e = {state: {}});
                var u = r(r(o = t.call(this) || this));
                return i(u, {_onChangeTimer: null, DataSet: n, isDataSet: !0, views: {}}, e), o
            }

            !function (t, n) {
                t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n
            }(n, t);
            var e = n.prototype;
            return e._getUniqueViewName = function () {
                for (var t = a("view_"); this.views[t];) t = a("view_");
                return t
            }, e.createView = function (t, n) {
                void 0 === n && (n = {});
                var e = this;
                if (o(t) && (t = e._getUniqueViewName()), u(t) && (n = t, t = e._getUniqueViewName()), e.views[t]) throw new Error("data view exists: " + t);
                var r = new f(e, n);
                return e.views[t] = r, r
            }, e.getView = function (t) {
                return this.views[t]
            }, e.setView = function (t, n) {
                this.views[t] = n
            }, e.setState = function (t, n) {
                var e = this;
                e.state[t] = n, e._onChangeTimer && (clearTimeout(e._onChangeTimer), e._onChangeTimer = null), e._onChangeTimer = setTimeout(function () {
                    e.emit("statechange", t, n)
                }, 16)
            }, n
        }(c);
        i(l, {
            CONSTANTS: s,
            DataSet: l,
            DataView: f,
            View: f,
            connectors: {},
            transforms: {},
            registerConnector: function (t, n) {
                l.connectors[t] = n
            },
            getConnector: function (t) {
                return l.connectors[t] || l.connectors.default
            },
            registerTransform: function (t, n) {
                l.transforms[t] = n
            },
            getTransform: function (t) {
                return l.transforms[t] || l.transforms.default
            }
        }, s), f.DataSet = l, i(l.prototype, {view: l.prototype.createView}), l.version = "0.10.1", t.exports = l
    }, function (t, n) {
        function e(t, n) {
            for (var e in n) n.hasOwnProperty(e) && "constructor" !== e && void 0 !== n[e] && (t[e] = n[e])
        }

        t.exports = function (t, n, r, i) {
            return n && e(t, n), r && e(t, r), i && e(t, i), t
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "i", function () {
            return r
        }), e.d(n, "j", function () {
            return i
        }), e.d(n, "o", function () {
            return o
        }), e.d(n, "l", function () {
            return u
        }), e.d(n, "q", function () {
            return a
        }), e.d(n, "w", function () {
            return c
        }), e.d(n, "h", function () {
            return f
        }), e.d(n, "r", function () {
            return s
        }), e.d(n, "a", function () {
            return l
        }), e.d(n, "d", function () {
            return h
        }), e.d(n, "e", function () {
            return p
        }), e.d(n, "g", function () {
            return v
        }), e.d(n, "f", function () {
            return d
        }), e.d(n, "k", function () {
            return g
        }), e.d(n, "n", function () {
            return b
        }), e.d(n, "p", function () {
            return y
        }), e.d(n, "t", function () {
            return j
        }), e.d(n, "s", function () {
            return O
        }), e.d(n, "u", function () {
            return _
        }), e.d(n, "v", function () {
            return m
        }), n.b = function (t) {
            return t > 1 ? 0 : t < -1 ? o : Math.acos(t)
        }, n.c = function (t) {
            return t > 1 ? u : t < -1 ? -u : Math.asin(t)
        }, n.m = function (t) {
            return (t = j(t / 2)) * t
        };
        var r = 1e-6, i = 1e-12, o = Math.PI, u = o / 2, a = o / 4, c = 2 * o, f = 180 / o, s = o / 180, l = Math.abs,
            h = Math.atan, p = Math.atan2, v = Math.cos, d = Math.ceil, g = Math.exp, b = (Math.floor, Math.log),
            y = Math.pow, j = Math.sin, O = Math.sign || function (t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            }, _ = Math.sqrt, m = Math.tan
    }, function (t, n, e) {
        "use strict";
        e.d(n, "i", function () {
            return r
        }), e.d(n, "j", function () {
            return i
        }), e.d(n, "o", function () {
            return o
        }), e.d(n, "l", function () {
            return u
        }), e.d(n, "q", function () {
            return a
        }), e.d(n, "w", function () {
            return c
        }), e.d(n, "h", function () {
            return f
        }), e.d(n, "r", function () {
            return s
        }), e.d(n, "a", function () {
            return l
        }), e.d(n, "d", function () {
            return h
        }), e.d(n, "e", function () {
            return p
        }), e.d(n, "g", function () {
            return v
        }), e.d(n, "f", function () {
            return d
        }), e.d(n, "k", function () {
            return g
        }), e.d(n, "n", function () {
            return b
        }), e.d(n, "p", function () {
            return y
        }), e.d(n, "t", function () {
            return j
        }), e.d(n, "s", function () {
            return O
        }), e.d(n, "u", function () {
            return _
        }), e.d(n, "v", function () {
            return m
        }), n.b = function (t) {
            return t > 1 ? 0 : t < -1 ? o : Math.acos(t)
        }, n.c = function (t) {
            return t > 1 ? u : t < -1 ? -u : Math.asin(t)
        }, n.m = function (t) {
            return (t = j(t / 2)) * t
        };
        var r = 1e-6, i = 1e-12, o = Math.PI, u = o / 2, a = o / 4, c = 2 * o, f = 180 / o, s = o / 180, l = Math.abs,
            h = Math.atan, p = Math.atan2, v = Math.cos, d = Math.ceil, g = Math.exp, b = (Math.floor, Math.log),
            y = Math.pow, j = Math.sin, O = Math.sign || function (t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            }, _ = Math.sqrt, m = Math.tan
    }, function (t, n, e) {
        var r = e(41), i = Array.isArray ? Array.isArray : function (t) {
            return r(t, "Array")
        };
        t.exports = i
    }, function (t, n, e) {
        var r = e(6), i = e(10), o = "Invalid fields: it must be an array!";
        t.exports = {
            getField: function (t, n) {
                var e = t.field, o = t.fields;
                if (i(e)) return e;
                if (r(e)) return console.warn("Invalid field: it must be a string!"), e[0];
                if (console.warn("Invalid field: it must be a string! will try to get fields instead."), i(o)) return o;
                if (r(o) && o.length) return o[0];
                if (n) return n;
                throw new TypeError("Invalid field: it must be a string!")
            }, getFields: function (t, n) {
                var e = t.field, u = t.fields;
                if (r(u)) return u;
                if (i(u)) return console.warn(o), [u];
                if (console.warn(o + " will try to get field instead."), i(e)) return console.warn(o), [e];
                if (r(e) && e.length) return console.warn(o), e;
                if (n) return n;
                throw new TypeError(o)
            }
        }
    }, function (t, n, e) {
        var r;
        try {
            r = e(169)
        } catch (t) {
        }
        r || (r = window._), t.exports = r
    }, function (t, n, e) {
        var r = e(76), i = e(6);
        t.exports = function (t, n) {
            if (t) if (i(t)) for (var e = 0, o = t.length; e < o && !1 !== n(t[e], e); e++) ; else if (r(t)) for (var u in t) if (t.hasOwnProperty(u) && !1 === n(t[u], u)) break
        }
    }, function (t, n, e) {
        var r = e(41);
        t.exports = function (t) {
            return r(t, "String")
        }
    }, function (t, n, e) {
        var r = e(41);
        t.exports = function (t) {
            return r(t, "Function")
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r) {
            var i;
            do {
                i = o.uniqueId(r)
            } while (t.hasNode(i));
            return e.dummy = n, t.setNode(i, e), i
        }

        function i(t) {
            return o.max(o.map(t.nodes(), function (n) {
                var e = t.node(n).rank;
                if (!o.isUndefined(e)) return e
            }))
        }

        var o = e(8), u = e(16).Graph;
        t.exports = {
            addDummyNode: r, simplify: function (t) {
                var n = (new u).setGraph(t.graph());
                return o.forEach(t.nodes(), function (e) {
                    n.setNode(e, t.node(e))
                }), o.forEach(t.edges(), function (e) {
                    var r = n.edge(e.v, e.w) || {weight: 0, minlen: 1}, i = t.edge(e);
                    n.setEdge(e.v, e.w, {weight: r.weight + i.weight, minlen: Math.max(r.minlen, i.minlen)})
                }), n
            }, asNonCompoundGraph: function (t) {
                var n = new u({multigraph: t.isMultigraph()}).setGraph(t.graph());
                return o.forEach(t.nodes(), function (e) {
                    t.children(e).length || n.setNode(e, t.node(e))
                }), o.forEach(t.edges(), function (e) {
                    n.setEdge(e, t.edge(e))
                }), n
            }, successorWeights: function (t) {
                var n = o.map(t.nodes(), function (n) {
                    var e = {};
                    return o.forEach(t.outEdges(n), function (n) {
                        e[n.w] = (e[n.w] || 0) + t.edge(n).weight
                    }), e
                });
                return o.zipObject(t.nodes(), n)
            }, predecessorWeights: function (t) {
                var n = o.map(t.nodes(), function (n) {
                    var e = {};
                    return o.forEach(t.inEdges(n), function (n) {
                        e[n.v] = (e[n.v] || 0) + t.edge(n).weight
                    }), e
                });
                return o.zipObject(t.nodes(), n)
            }, intersectRect: function (t, n) {
                var e = t.x, r = t.y, i = n.x - e, o = n.y - r, u = t.width / 2, a = t.height / 2;
                if (!i && !o) throw new Error("Not possible to find intersection inside of the rectangle");
                var c, f;
                return Math.abs(o) * u > Math.abs(i) * a ? (o < 0 && (a = -a), c = a * i / o, f = a) : (i < 0 && (u = -u), c = u, f = u * o / i), {
                    x: e + c,
                    y: r + f
                }
            }, buildLayerMatrix: function (t) {
                var n = o.map(o.range(i(t) + 1), function () {
                    return []
                });
                return o.forEach(t.nodes(), function (e) {
                    var r = t.node(e), i = r.rank;
                    o.isUndefined(i) || (n[i][r.order] = e)
                }), n
            }, normalizeRanks: function (t) {
                var n = o.minBy(o.map(t.nodes(), function (n) {
                    return t.node(n).rank
                }));
                o.forEach(t.nodes(), function (e) {
                    var r = t.node(e);
                    o.has(r, "rank") && (r.rank -= n)
                })
            }, removeEmptyRanks: function (t) {
                var n = o.minBy(o.map(t.nodes(), function (n) {
                    return t.node(n).rank
                })), e = [];
                o.forEach(t.nodes(), function (r) {
                    var i = t.node(r).rank - n;
                    e[i] || (e[i] = []), e[i].push(r)
                });
                var r = 0, i = t.graph().nodeRankFactor;
                o.forEach(e, function (n, e) {
                    o.isUndefined(n) && e % i != 0 ? --r : r && o.forEach(n, function (n) {
                        t.node(n).rank += r
                    })
                })
            }, addBorderNode: function (t, n, e, i) {
                var o = {width: 0, height: 0};
                return arguments.length >= 4 && (o.rank = e, o.order = i), r(t, "border", o, n)
            }, maxRank: i, partition: function (t, n) {
                var e = {lhs: [], rhs: []};
                return o.forEach(t, function (t) {
                    n(t) ? e.lhs.push(t) : e.rhs.push(t)
                }), e
            }, time: function (t, n) {
                var e = o.now();
                try {
                    return n()
                } finally {
                    console.log(t + " time: " + (o.now() - e) + "ms")
                }
            }, notime: function (t, n) {
                return n()
            }
        }
    }, function (t, n, e) {
        var r;
        try {
            r = e(169)
        } catch (t) {
        }
        r || (r = window._), t.exports = r
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(109);
        e.d(n, "bisect", function () {
            return r.c
        }), e.d(n, "bisectRight", function () {
            return r.b
        }), e.d(n, "bisectLeft", function () {
            return r.a
        });
        var i = e(30);
        e.d(n, "ascending", function () {
            return i.a
        });
        var o = e(110);
        e.d(n, "bisector", function () {
            return o.a
        });
        var u = e(201);
        e.d(n, "cross", function () {
            return u.a
        });
        var a = e(202);
        e.d(n, "descending", function () {
            return a.a
        });
        var c = e(112);
        e.d(n, "deviation", function () {
            return c.a
        });
        var f = e(114);
        e.d(n, "extent", function () {
            return f.a
        });
        var s = e(203);
        e.d(n, "histogram", function () {
            return s.a
        });
        var l = e(206);
        e.d(n, "thresholdFreedmanDiaconis", function () {
            return l.a
        });
        var h = e(207);
        e.d(n, "thresholdScott", function () {
            return h.a
        });
        var p = e(118);
        e.d(n, "thresholdSturges", function () {
            return p.a
        });
        var v = e(208);
        e.d(n, "max", function () {
            return v.a
        });
        var d = e(209);
        e.d(n, "mean", function () {
            return d.a
        });
        var g = e(210);
        e.d(n, "median", function () {
            return g.a
        });
        var b = e(211);
        e.d(n, "merge", function () {
            return b.a
        });
        var y = e(119);
        e.d(n, "min", function () {
            return y.a
        });
        var j = e(111);
        e.d(n, "pairs", function () {
            return j.a
        });
        var O = e(212);
        e.d(n, "permute", function () {
            return O.a
        });
        var _ = e(66);
        e.d(n, "quantile", function () {
            return _.a
        });
        var m = e(116);
        e.d(n, "range", function () {
            return m.a
        });
        var w = e(213);
        e.d(n, "scan", function () {
            return w.a
        });
        var x = e(214);
        e.d(n, "shuffle", function () {
            return x.a
        });
        var E = e(215);
        e.d(n, "sum", function () {
            return E.a
        });
        var M = e(117);
        e.d(n, "ticks", function () {
            return M.a
        }), e.d(n, "tickIncrement", function () {
            return M.b
        }), e.d(n, "tickStep", function () {
            return M.c
        });
        var T = e(120);
        e.d(n, "transpose", function () {
            return T.a
        });
        var S = e(113);
        e.d(n, "variance", function () {
            return S.a
        });
        var k = e(216);
        e.d(n, "zip", function () {
            return k.a
        })
    }, function (t, n, e) {
        var r = e(6), i = e(11), o = e(10), u = e(352), a = e(353);
        t.exports = function (t, n, e) {
            void 0 === e && (e = []);
            var c = t;
            e && e.length && (c = a(t, e));
            var f;
            i(n) ? f = n : r(n) ? f = function (t) {
                return "_" + n.map(function (n) {
                    return t[n]
                }).join("-")
            } : o(n) && (f = function (t) {
                return "_" + t[n]
            });
            return u(c, f)
        }
    }, function (t, n, e) {
        var r;
        try {
            r = e(433)
        } catch (t) {
        }
        r || (r = window.graphlib), t.exports = r
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(t) {
                return t = j(t[0] * f.r, t[1] * f.r), [t[0] * E + g, b - t[1] * E]
            }

            function e(t, n) {
                return t = d(t, n), [t[0] * E + g, b - t[1] * E]
            }

            function r() {
                j = Object(a.a)(y = Object(s.b)(C, P, N), d);
                var t = d(S, k);
                return g = M - t[0] * E, b = T + t[1] * E, l()
            }

            function l() {
                return w = x = null, n
            }

            var d, g, b, y, j, O, _, m, w, x, E = 150, M = 480, T = 250, S = 0, k = 0, C = 0, P = 0, N = 0, R = null,
                B = i.a, A = null, I = c.a, L = .5, z = Object(p.a)(e, L);
            return n.stream = function (t) {
                return w && x === t ? w : w = v(B(y, z(I(x = t))))
            }, n.clipAngle = function (t) {
                return arguments.length ? (B = +t ? Object(o.a)(R = t * f.r, 6 * f.r) : (R = null, i.a), l()) : R * f.h
            }, n.clipExtent = function (t) {
                return arguments.length ? (I = null == t ? (A = O = _ = m = null, c.a) : Object(u.a)(A = +t[0][0], O = +t[0][1], _ = +t[1][0], m = +t[1][1]), l()) : null == A ? null : [[A, O], [_, m]]
            }, n.scale = function (t) {
                return arguments.length ? (E = +t, r()) : E
            }, n.translate = function (t) {
                return arguments.length ? (M = +t[0], T = +t[1], r()) : [M, T]
            }, n.center = function (t) {
                return arguments.length ? (S = t[0] % 360 * f.r, k = t[1] % 360 * f.r, r()) : [S * f.h, k * f.h]
            }, n.rotate = function (t) {
                return arguments.length ? (C = t[0] % 360 * f.r, P = t[1] % 360 * f.r, N = t.length > 2 ? t[2] % 360 * f.r : 0, r()) : [C * f.h, P * f.h, N * f.h]
            }, n.precision = function (t) {
                return arguments.length ? (z = Object(p.a)(e, L = t * t), l()) : Object(f.u)(L)
            }, n.fitExtent = function (t, e) {
                return Object(h.a)(n, t, e)
            }, n.fitSize = function (t, e) {
                return Object(h.b)(n, t, e)
            }, function () {
                return d = t.apply(this, arguments), n.invert = d.invert && function (t) {
                    return (t = j.invert((t[0] - g) / E, (b - t[1]) / E)) && [t[0] * f.h, t[1] * f.h]
                }, r()
            }
        }

        n.a = function (t) {
            return r(function () {
                return t
            })()
        }, n.b = r;
        var i = e(226), o = e(227), u = e(65), a = e(105), c = e(67), f = e(4), s = e(50), l = e(51), h = e(70),
            p = e(228), v = Object(l.b)({
                point: function (t, n) {
                    this.stream.point(t * f.r, n * f.r)
                }
            })
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(t) {
                return t = j(t[0] * f.r, t[1] * f.r), [t[0] * E + g, b - t[1] * E]
            }

            function e(t, n) {
                return t = d(t, n), [t[0] * E + g, b - t[1] * E]
            }

            function r() {
                j = Object(a.a)(y = Object(s.b)(C, P, N), d);
                var t = d(S, k);
                return g = M - t[0] * E, b = T + t[1] * E, l()
            }

            function l() {
                return w = x = null, n
            }

            var d, g, b, y, j, O, _, m, w, x, E = 150, M = 480, T = 250, S = 0, k = 0, C = 0, P = 0, N = 0, R = null,
                B = i.a, A = null, I = c.a, L = .5, z = Object(p.a)(e, L);
            return n.stream = function (t) {
                return w && x === t ? w : w = v(B(y, z(I(x = t))))
            }, n.clipAngle = function (t) {
                return arguments.length ? (B = +t ? Object(o.a)(R = t * f.r, 6 * f.r) : (R = null, i.a), l()) : R * f.h
            }, n.clipExtent = function (t) {
                return arguments.length ? (I = null == t ? (A = O = _ = m = null, c.a) : Object(u.a)(A = +t[0][0], O = +t[0][1], _ = +t[1][0], m = +t[1][1]), l()) : null == A ? null : [[A, O], [_, m]]
            }, n.scale = function (t) {
                return arguments.length ? (E = +t, r()) : E
            }, n.translate = function (t) {
                return arguments.length ? (M = +t[0], T = +t[1], r()) : [M, T]
            }, n.center = function (t) {
                return arguments.length ? (S = t[0] % 360 * f.r, k = t[1] % 360 * f.r, r()) : [S * f.h, k * f.h]
            }, n.rotate = function (t) {
                return arguments.length ? (C = t[0] % 360 * f.r, P = t[1] % 360 * f.r, N = t.length > 2 ? t[2] % 360 * f.r : 0, r()) : [C * f.h, P * f.h, N * f.h]
            }, n.precision = function (t) {
                return arguments.length ? (z = Object(p.a)(e, L = t * t), l()) : Object(f.u)(L)
            }, n.fitExtent = Object(h.a)(n), n.fitSize = Object(h.b)(n), function () {
                return d = t.apply(this, arguments), n.invert = d.invert && function (t) {
                    return (t = j.invert((t[0] - g) / E, (b - t[1]) / E)) && [t[0] * f.h, t[1] * f.h]
                }, r()
            }
        }

        n.a = function (t) {
            return r(function () {
                return t
            })()
        }, n.b = r;
        var i = e(336), o = e(338), u = e(145), a = e(144), c = e(150), f = e(5), s = e(78), l = e(81), h = e(154),
            p = e(339), v = Object(l.b)({
                point: function (t, n) {
                    this.stream.point(t * f.r, n * f.r)
                }
            })
    }, function (t, n, e) {
        !function (t, e) {
            e(n)
        }(0, function (t) {
            "use strict";

            function n(t) {
                if (0 === t.length) return 0;
                for (var n, e = t[0], r = 0, i = 1; i < t.length; i++) n = e + t[i], Math.abs(e) >= Math.abs(t[i]) ? r += e - n + t[i] : r += t[i] - n + e, e = n;
                return e + r
            }

            function e(t) {
                if (0 === t.length) throw new Error("mean requires at least one data point");
                return n(t) / t.length
            }

            function r(t, n) {
                var r, i, o = e(t), u = 0;
                if (2 === n) for (i = 0; i < t.length; i++) u += (r = t[i] - o) * r; else for (i = 0; i < t.length; i++) u += Math.pow(t[i] - o, n);
                return u
            }

            function i(t) {
                if (0 === t.length) throw new Error("variance requires at least one data point");
                return r(t, 2) / t.length
            }

            function o(t) {
                if (1 === t.length) return 0;
                var n = i(t);
                return Math.sqrt(n)
            }

            function u(t) {
                if (0 === t.length) throw new Error("mode requires at least one data point");
                if (1 === t.length) return t[0];
                for (var n = t[0], e = NaN, r = 0, i = 1, o = 1; o < t.length + 1; o++) t[o] !== n ? (r < i && (r = i, e = n), i = 1, n = t[o]) : i++;
                return e
            }

            function a(t) {
                return t.slice().sort(function (t, n) {
                    return t - n
                })
            }

            function c(t) {
                if (0 === t.length) throw new Error("min requires at least one data point");
                for (var n = t[0], e = 1; e < t.length; e++) t[e] < n && (n = t[e]);
                return n
            }

            function f(t) {
                if (0 === t.length) throw new Error("max requires at least one data point");
                for (var n = t[0], e = 1; e < t.length; e++) t[e] > n && (n = t[e]);
                return n
            }

            function s(t, n) {
                var e = t.length * n;
                if (0 === t.length) throw new Error("quantile requires at least one data point.");
                if (n < 0 || 1 < n) throw new Error("quantiles must be between 0 and 1");
                return 1 === n ? t[t.length - 1] : 0 === n ? t[0] : e % 1 != 0 ? t[Math.ceil(e) - 1] : t.length % 2 == 0 ? (t[e - 1] + t[e]) / 2 : t[e]
            }

            function l(t, n, e, r) {
                for (e = e || 0, r = r || t.length - 1; e < r;) {
                    if (600 < r - e) {
                        var i = r - e + 1, o = n - e + 1, u = Math.log(i), a = .5 * Math.exp(2 * u / 3),
                            c = .5 * Math.sqrt(u * a * (i - a) / i);
                        o - i / 2 < 0 && (c *= -1), l(t, n, Math.max(e, Math.floor(n - o * a / i + c)), Math.min(r, Math.floor(n + (i - o) * a / i + c)))
                    }
                    var f = t[n], s = e, p = r;
                    for (h(t, e, n), t[r] > f && h(t, e, r); s < p;) {
                        for (h(t, s, p), s++, p--; t[s] < f;) s++;
                        for (; t[p] > f;) p--
                    }
                    t[e] === f ? h(t, e, p) : h(t, ++p, r), p <= n && (e = p + 1), n <= p && (r = p - 1)
                }
            }

            function h(t, n, e) {
                var r = t[n];
                t[n] = t[e], t[e] = r
            }

            function p(t, n) {
                var e = t.slice();
                if (Array.isArray(n)) {
                    !function (t, n) {
                        for (var e = [0], r = 0; r < n.length; r++) e.push(g(t.length, n[r]));
                        e.push(t.length - 1), e.sort(d);
                        for (var i = [0, e.length - 1]; i.length;) {
                            var o = Math.ceil(i.pop()), u = Math.floor(i.pop());
                            if (!(o - u <= 1)) {
                                var a = Math.floor((u + o) / 2);
                                v(t, e[a], e[u], e[o]), i.push(u, a, a, o)
                            }
                        }
                    }(e, n);
                    for (var r = [], i = 0; i < n.length; i++) r[i] = s(e, n[i]);
                    return r
                }
                return v(e, g(e.length, n), 0, e.length - 1), s(e, n)
            }

            function v(t, n, e, r) {
                n % 1 == 0 ? l(t, n, e, r) : (l(t, n = Math.floor(n), e, r), l(t, n + 1, n + 1, r))
            }

            function d(t, n) {
                return t - n
            }

            function g(t, n) {
                var e = t * n;
                return 1 === n ? t - 1 : 0 === n ? 0 : e % 1 != 0 ? Math.ceil(e) - 1 : t % 2 == 0 ? e - .5 : e
            }

            function b(t, n) {
                if (n < t[0]) return 0;
                if (n > t[t.length - 1]) return 1;
                var e = function (t, n) {
                    for (var e = 0, r = 0, i = t.length; r < i;) n <= t[e = r + i >>> 1] ? i = e : r = -~e;
                    return r
                }(t, n);
                if (t[e] !== n) return e / t.length;
                e++;
                var r = function (t, n) {
                    for (var e = 0, r = 0, i = t.length; r < i;) n >= t[e = r + i >>> 1] ? r = -~e : i = e;
                    return r
                }(t, n);
                if (r === e) return e / t.length;
                var i = r - e + 1;
                return i * (r + e) / 2 / i / t.length
            }

            function y(t) {
                var n = p(t, .75), e = p(t, .25);
                if ("number" == typeof n && "number" == typeof e) return n - e
            }

            function j(t) {
                return +p(t, .5)
            }

            function O(t) {
                for (var n = j(t), e = [], r = 0; r < t.length; r++) e.push(Math.abs(t[r] - n));
                return j(e)
            }

            function _(t, n) {
                n = n || Math.random;
                for (var e, r, i = t.length; 0 < i;) r = Math.floor(n() * i--), e = t[i], t[i] = t[r], t[r] = e;
                return t
            }

            function m(t, n) {
                return _(t.slice().slice(), n)
            }

            function w(t) {
                for (var n, e = 0, r = 0; r < t.length; r++) 0 !== r && t[r] === n || (n = t[r], e++);
                return e
            }

            function x(t, n) {
                for (var e = [], r = 0; r < t; r++) {
                    for (var i = [], o = 0; o < n; o++) i.push(0);
                    e.push(i)
                }
                return e
            }

            function E(t, n, e, r) {
                var i;
                if (0 < t) {
                    var o = (e[n] - e[t - 1]) / (n - t + 1);
                    i = r[n] - r[t - 1] - (n - t + 1) * o * o
                } else i = r[n] - e[n] * e[n] / (n + 1);
                return i < 0 ? 0 : i
            }

            function M(t, n, e, r, i, o, u) {
                if (!(n < t)) {
                    var a = Math.floor((t + n) / 2);
                    r[e][a] = r[e - 1][a - 1], i[e][a] = a;
                    var c = e;
                    e < t && (c = Math.max(c, i[e][t - 1] || 0)), c = Math.max(c, i[e - 1][a] || 0);
                    var f, s, l, h = a - 1;
                    n < r.length - 1 && (h = Math.min(h, i[e][n + 1] || 0));
                    for (var p = h; c <= p && !((f = E(p, a, o, u)) + r[e - 1][c - 1] >= r[e][a]); --p) (s = E(c, a, o, u) + r[e - 1][c - 1]) < r[e][a] && (r[e][a] = s, i[e][a] = c), c++, (l = f + r[e - 1][p - 1]) < r[e][a] && (r[e][a] = l, i[e][a] = p);
                    M(t, a - 1, e, r, i, o, u), M(a + 1, n, e, r, i, o, u)
                }
            }

            function T(t, n) {
                if (t.length !== n.length) throw new Error("sampleCovariance requires samples with equal lengths");
                if (t.length < 2) throw new Error("sampleCovariance requires at least two data points in each sample");
                for (var r = e(t), i = e(n), o = 0, u = 0; u < t.length; u++) o += (t[u] - r) * (n[u] - i);
                return o / (t.length - 1)
            }

            function S(t) {
                if (t.length < 2) throw new Error("sampleVariance requires at least two data points");
                return r(t, 2) / (t.length - 1)
            }

            function k(t) {
                var n = S(t);
                return Math.sqrt(n)
            }

            function C(t, n, e, r) {
                return (t * n + e * r) / (n + r)
            }

            function P(t) {
                if (0 === t.length) throw new Error("rootMeanSquare requires at least one data point");
                for (var n = 0, e = 0; e < t.length; e++) n += Math.pow(t[e], 2);
                return Math.sqrt(n / t.length)
            }

            function N() {
                this.totalCount = 0, this.data = {}
            }

            function R() {
                this.weights = [], this.bias = 0
            }

            function B(t) {
                if (t < 0) throw new Error("factorial requires a non-negative value");
                if (Math.floor(t) !== t) throw new Error("factorial requires an integer input");
                for (var n = 1, e = 2; e <= t; e++) n *= e;
                return n
            }

            function A(t, n, e) {
                var r, i;
                if (void 0 === n) r = V.gaussian; else if ("string" == typeof n) {
                    if (!V[n]) throw new Error('Unknown kernel "' + n + '"');
                    r = V[n]
                } else r = n;
                if (void 0 === e) i = W.nrd(t); else if ("string" == typeof e) {
                    if (!W[e]) throw new Error('Unknown bandwidth method "' + e + '"');
                    i = W[e](t)
                } else i = e;
                return function (n) {
                    var e = 0, o = 0;
                    for (e = 0; e < t.length; e++) o += r((n - t[e]) / i);
                    return o / i / t.length
                }
            }

            function I(t) {
                for (var n = t, e = t, r = 1; r < 15; r++) n += e *= t * t / (2 * r + 1);
                return Math.round(1e4 * (.5 + n / Y * Math.exp(-t * t / 2))) / 1e4
            }

            function L(t) {
                var n = 1 / (1 + .5 * Math.abs(t)),
                    e = n * Math.exp(-Math.pow(t, 2) - 1.26551223 + 1.00002368 * n + .37409196 * Math.pow(n, 2) + .09678418 * Math.pow(n, 3) - .18628806 * Math.pow(n, 4) + .27886807 * Math.pow(n, 5) - 1.13520398 * Math.pow(n, 6) + 1.48851587 * Math.pow(n, 7) - .82215223 * Math.pow(n, 8) + .17087277 * Math.pow(n, 9));
                return 0 <= t ? 1 - e : e - 1
            }

            function z(t) {
                var n = 8 * (Math.PI - 3) / (3 * Math.PI * (4 - Math.PI)),
                    e = Math.sqrt(Math.sqrt(Math.pow(2 / (Math.PI * n) + Math.log(1 - t * t) / 2, 2) - Math.log(1 - t * t) / n) - (2 / (Math.PI * n) + Math.log(1 - t * t) / 2));
                return 0 <= t ? e : -e
            }

            function q(t) {
                if ("number" == typeof t) return t < 0 ? -1 : 0 === t ? 0 : 1;
                throw new TypeError("not a number")
            }

            N.prototype.train = function (t, n) {
                for (var e in this.data[n] || (this.data[n] = {}), t) {
                    var r = t[e];
                    void 0 === this.data[n][e] && (this.data[n][e] = {}), void 0 === this.data[n][e][r] && (this.data[n][e][r] = 0), this.data[n][e][r]++
                }
                this.totalCount++
            }, N.prototype.score = function (t) {
                var n, e = {};
                for (var r in t) {
                    var i = t[r];
                    for (n in this.data) e[n] = {}, this.data[n][r] ? e[n][r + "_" + i] = (this.data[n][r][i] || 0) / this.totalCount : e[n][r + "_" + i] = 0
                }
                var o = {};
                for (n in e) for (var u in o[n] = 0, e[n]) o[n] += e[n][u];
                return o
            }, R.prototype.predict = function (t) {
                if (t.length !== this.weights.length) return null;
                for (var n = 0, e = 0; e < this.weights.length; e++) n += this.weights[e] * t[e];
                return 0 < (n += this.bias) ? 1 : 0
            }, R.prototype.train = function (t, n) {
                if (0 !== n && 1 !== n) return null;
                t.length !== this.weights.length && (this.weights = t, this.bias = 1);
                var e = this.predict(t);
                if (e !== n) {
                    for (var r = n - e, i = 0; i < this.weights.length; i++) this.weights[i] += r * t[i];
                    this.bias += r
                }
                return this
            };
            for (var F = 1e-4, D = [.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, .0001580887032249125, -.00021026444172410488, .00021743961811521265, -.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22], G = Math.log(Math.sqrt(2 * Math.PI)), H = {
                1: {
                    .995: 0,
                    .99: 0,
                    .975: 0,
                    .95: 0,
                    .9: .02,
                    .5: .45,
                    .1: 2.71,
                    .05: 3.84,
                    .025: 5.02,
                    .01: 6.63,
                    .005: 7.88
                },
                2: {
                    .995: .01,
                    .99: .02,
                    .975: .05,
                    .95: .1,
                    .9: .21,
                    .5: 1.39,
                    .1: 4.61,
                    .05: 5.99,
                    .025: 7.38,
                    .01: 9.21,
                    .005: 10.6
                },
                3: {
                    .995: .07,
                    .99: .11,
                    .975: .22,
                    .95: .35,
                    .9: .58,
                    .5: 2.37,
                    .1: 6.25,
                    .05: 7.81,
                    .025: 9.35,
                    .01: 11.34,
                    .005: 12.84
                },
                4: {
                    .995: .21,
                    .99: .3,
                    .975: .48,
                    .95: .71,
                    .9: 1.06,
                    .5: 3.36,
                    .1: 7.78,
                    .05: 9.49,
                    .025: 11.14,
                    .01: 13.28,
                    .005: 14.86
                },
                5: {
                    .995: .41,
                    .99: .55,
                    .975: .83,
                    .95: 1.15,
                    .9: 1.61,
                    .5: 4.35,
                    .1: 9.24,
                    .05: 11.07,
                    .025: 12.83,
                    .01: 15.09,
                    .005: 16.75
                },
                6: {
                    .995: .68,
                    .99: .87,
                    .975: 1.24,
                    .95: 1.64,
                    .9: 2.2,
                    .5: 5.35,
                    .1: 10.65,
                    .05: 12.59,
                    .025: 14.45,
                    .01: 16.81,
                    .005: 18.55
                },
                7: {
                    .995: .99,
                    .99: 1.25,
                    .975: 1.69,
                    .95: 2.17,
                    .9: 2.83,
                    .5: 6.35,
                    .1: 12.02,
                    .05: 14.07,
                    .025: 16.01,
                    .01: 18.48,
                    .005: 20.28
                },
                8: {
                    .995: 1.34,
                    .99: 1.65,
                    .975: 2.18,
                    .95: 2.73,
                    .9: 3.49,
                    .5: 7.34,
                    .1: 13.36,
                    .05: 15.51,
                    .025: 17.53,
                    .01: 20.09,
                    .005: 21.96
                },
                9: {
                    .995: 1.73,
                    .99: 2.09,
                    .975: 2.7,
                    .95: 3.33,
                    .9: 4.17,
                    .5: 8.34,
                    .1: 14.68,
                    .05: 16.92,
                    .025: 19.02,
                    .01: 21.67,
                    .005: 23.59
                },
                10: {
                    .995: 2.16,
                    .99: 2.56,
                    .975: 3.25,
                    .95: 3.94,
                    .9: 4.87,
                    .5: 9.34,
                    .1: 15.99,
                    .05: 18.31,
                    .025: 20.48,
                    .01: 23.21,
                    .005: 25.19
                },
                11: {
                    .995: 2.6,
                    .99: 3.05,
                    .975: 3.82,
                    .95: 4.57,
                    .9: 5.58,
                    .5: 10.34,
                    .1: 17.28,
                    .05: 19.68,
                    .025: 21.92,
                    .01: 24.72,
                    .005: 26.76
                },
                12: {
                    .995: 3.07,
                    .99: 3.57,
                    .975: 4.4,
                    .95: 5.23,
                    .9: 6.3,
                    .5: 11.34,
                    .1: 18.55,
                    .05: 21.03,
                    .025: 23.34,
                    .01: 26.22,
                    .005: 28.3
                },
                13: {
                    .995: 3.57,
                    .99: 4.11,
                    .975: 5.01,
                    .95: 5.89,
                    .9: 7.04,
                    .5: 12.34,
                    .1: 19.81,
                    .05: 22.36,
                    .025: 24.74,
                    .01: 27.69,
                    .005: 29.82
                },
                14: {
                    .995: 4.07,
                    .99: 4.66,
                    .975: 5.63,
                    .95: 6.57,
                    .9: 7.79,
                    .5: 13.34,
                    .1: 21.06,
                    .05: 23.68,
                    .025: 26.12,
                    .01: 29.14,
                    .005: 31.32
                },
                15: {
                    .995: 4.6,
                    .99: 5.23,
                    .975: 6.27,
                    .95: 7.26,
                    .9: 8.55,
                    .5: 14.34,
                    .1: 22.31,
                    .05: 25,
                    .025: 27.49,
                    .01: 30.58,
                    .005: 32.8
                },
                16: {
                    .995: 5.14,
                    .99: 5.81,
                    .975: 6.91,
                    .95: 7.96,
                    .9: 9.31,
                    .5: 15.34,
                    .1: 23.54,
                    .05: 26.3,
                    .025: 28.85,
                    .01: 32,
                    .005: 34.27
                },
                17: {
                    .995: 5.7,
                    .99: 6.41,
                    .975: 7.56,
                    .95: 8.67,
                    .9: 10.09,
                    .5: 16.34,
                    .1: 24.77,
                    .05: 27.59,
                    .025: 30.19,
                    .01: 33.41,
                    .005: 35.72
                },
                18: {
                    .995: 6.26,
                    .99: 7.01,
                    .975: 8.23,
                    .95: 9.39,
                    .9: 10.87,
                    .5: 17.34,
                    .1: 25.99,
                    .05: 28.87,
                    .025: 31.53,
                    .01: 34.81,
                    .005: 37.16
                },
                19: {
                    .995: 6.84,
                    .99: 7.63,
                    .975: 8.91,
                    .95: 10.12,
                    .9: 11.65,
                    .5: 18.34,
                    .1: 27.2,
                    .05: 30.14,
                    .025: 32.85,
                    .01: 36.19,
                    .005: 38.58
                },
                20: {
                    .995: 7.43,
                    .99: 8.26,
                    .975: 9.59,
                    .95: 10.85,
                    .9: 12.44,
                    .5: 19.34,
                    .1: 28.41,
                    .05: 31.41,
                    .025: 34.17,
                    .01: 37.57,
                    .005: 40
                },
                21: {
                    .995: 8.03,
                    .99: 8.9,
                    .975: 10.28,
                    .95: 11.59,
                    .9: 13.24,
                    .5: 20.34,
                    .1: 29.62,
                    .05: 32.67,
                    .025: 35.48,
                    .01: 38.93,
                    .005: 41.4
                },
                22: {
                    .995: 8.64,
                    .99: 9.54,
                    .975: 10.98,
                    .95: 12.34,
                    .9: 14.04,
                    .5: 21.34,
                    .1: 30.81,
                    .05: 33.92,
                    .025: 36.78,
                    .01: 40.29,
                    .005: 42.8
                },
                23: {
                    .995: 9.26,
                    .99: 10.2,
                    .975: 11.69,
                    .95: 13.09,
                    .9: 14.85,
                    .5: 22.34,
                    .1: 32.01,
                    .05: 35.17,
                    .025: 38.08,
                    .01: 41.64,
                    .005: 44.18
                },
                24: {
                    .995: 9.89,
                    .99: 10.86,
                    .975: 12.4,
                    .95: 13.85,
                    .9: 15.66,
                    .5: 23.34,
                    .1: 33.2,
                    .05: 36.42,
                    .025: 39.36,
                    .01: 42.98,
                    .005: 45.56
                },
                25: {
                    .995: 10.52,
                    .99: 11.52,
                    .975: 13.12,
                    .95: 14.61,
                    .9: 16.47,
                    .5: 24.34,
                    .1: 34.28,
                    .05: 37.65,
                    .025: 40.65,
                    .01: 44.31,
                    .005: 46.93
                },
                26: {
                    .995: 11.16,
                    .99: 12.2,
                    .975: 13.84,
                    .95: 15.38,
                    .9: 17.29,
                    .5: 25.34,
                    .1: 35.56,
                    .05: 38.89,
                    .025: 41.92,
                    .01: 45.64,
                    .005: 48.29
                },
                27: {
                    .995: 11.81,
                    .99: 12.88,
                    .975: 14.57,
                    .95: 16.15,
                    .9: 18.11,
                    .5: 26.34,
                    .1: 36.74,
                    .05: 40.11,
                    .025: 43.19,
                    .01: 46.96,
                    .005: 49.65
                },
                28: {
                    .995: 12.46,
                    .99: 13.57,
                    .975: 15.31,
                    .95: 16.93,
                    .9: 18.94,
                    .5: 27.34,
                    .1: 37.92,
                    .05: 41.34,
                    .025: 44.46,
                    .01: 48.28,
                    .005: 50.99
                },
                29: {
                    .995: 13.12,
                    .99: 14.26,
                    .975: 16.05,
                    .95: 17.71,
                    .9: 19.77,
                    .5: 28.34,
                    .1: 39.09,
                    .05: 42.56,
                    .025: 45.72,
                    .01: 49.59,
                    .005: 52.34
                },
                30: {
                    .995: 13.79,
                    .99: 14.95,
                    .975: 16.79,
                    .95: 18.49,
                    .9: 20.6,
                    .5: 29.34,
                    .1: 40.26,
                    .05: 43.77,
                    .025: 46.98,
                    .01: 50.89,
                    .005: 53.67
                },
                40: {
                    .995: 20.71,
                    .99: 22.16,
                    .975: 24.43,
                    .95: 26.51,
                    .9: 29.05,
                    .5: 39.34,
                    .1: 51.81,
                    .05: 55.76,
                    .025: 59.34,
                    .01: 63.69,
                    .005: 66.77
                },
                50: {
                    .995: 27.99,
                    .99: 29.71,
                    .975: 32.36,
                    .95: 34.76,
                    .9: 37.69,
                    .5: 49.33,
                    .1: 63.17,
                    .05: 67.5,
                    .025: 71.42,
                    .01: 76.15,
                    .005: 79.49
                },
                60: {
                    .995: 35.53,
                    .99: 37.48,
                    .975: 40.48,
                    .95: 43.19,
                    .9: 46.46,
                    .5: 59.33,
                    .1: 74.4,
                    .05: 79.08,
                    .025: 83.3,
                    .01: 88.38,
                    .005: 91.95
                },
                70: {
                    .995: 43.28,
                    .99: 45.44,
                    .975: 48.76,
                    .95: 51.74,
                    .9: 55.33,
                    .5: 69.33,
                    .1: 85.53,
                    .05: 90.53,
                    .025: 95.02,
                    .01: 100.42,
                    .005: 104.22
                },
                80: {
                    .995: 51.17,
                    .99: 53.54,
                    .975: 57.15,
                    .95: 60.39,
                    .9: 64.28,
                    .5: 79.33,
                    .1: 96.58,
                    .05: 101.88,
                    .025: 106.63,
                    .01: 112.33,
                    .005: 116.32
                },
                90: {
                    .995: 59.2,
                    .99: 61.75,
                    .975: 65.65,
                    .95: 69.13,
                    .9: 73.29,
                    .5: 89.33,
                    .1: 107.57,
                    .05: 113.14,
                    .025: 118.14,
                    .01: 124.12,
                    .005: 128.3
                },
                100: {
                    .995: 67.33,
                    .99: 70.06,
                    .975: 74.22,
                    .95: 77.93,
                    .9: 82.36,
                    .5: 99.33,
                    .1: 118.5,
                    .05: 124.34,
                    .025: 129.56,
                    .01: 135.81,
                    .005: 140.17
                }
            }, U = Math.sqrt(2 * Math.PI), V = {
                gaussian: function (t) {
                    return Math.exp(-.5 * t * t) / U
                }
            }, W = {
                nrd: function (t) {
                    var n = k(t), e = y(t);
                    return "number" == typeof e && (n = Math.min(n, e / 1.34)), 1.06 * n * Math.pow(t.length, -.2)
                }
            }, Y = Math.sqrt(2 * Math.PI), $ = [], J = 0; J <= 3.09; J += .01) $.push(I(J));
            t.linearRegression = function (t) {
                var n, e, r = t.length;
                if (1 === r) e = t[n = 0][1]; else {
                    for (var i, o, u, a = 0, c = 0, f = 0, s = 0, l = 0; l < r; l++) a += o = (i = t[l])[0], c += u = i[1], f += o * o, s += o * u;
                    e = c / r - (n = (r * s - a * c) / (r * f - a * a)) * a / r
                }
                return {m: n, b: e}
            }, t.linearRegressionLine = function (t) {
                return function (n) {
                    return t.b + t.m * n
                }
            }, t.standardDeviation = o, t.rSquared = function (t, n) {
                if (t.length < 2) return 1;
                for (var e, r = 0, i = 0; i < t.length; i++) r += t[i][1];
                e = r / t.length;
                for (var o = 0, u = 0; u < t.length; u++) o += Math.pow(e - t[u][1], 2);
                for (var a = 0, c = 0; c < t.length; c++) a += Math.pow(t[c][1] - n(t[c][0]), 2);
                return 1 - a / o
            }, t.mode = function (t) {
                return u(a(t))
            }, t.modeFast = function (t) {
                for (var n, e = new Map, r = 0, i = 0; i < t.length; i++) {
                    var o = e.get(t[i]);
                    void 0 === o ? o = 1 : o++, r < o && (n = t[i], r = o), e.set(t[i], o)
                }
                if (0 === r) throw new Error("mode requires at last one data point");
                return n
            }, t.modeSorted = u, t.min = c, t.max = f, t.extent = function (t) {
                if (0 === t.length) throw new Error("extent requires at least one data point");
                for (var n = t[0], e = t[0], r = 1; r < t.length; r++) t[r] > e && (e = t[r]), t[r] < n && (n = t[r]);
                return [n, e]
            }, t.minSorted = function (t) {
                return t[0]
            }, t.maxSorted = function (t) {
                return t[t.length - 1]
            }, t.extentSorted = function (t) {
                return [t[0], t[t.length - 1]]
            }, t.sum = n, t.sumSimple = function (t) {
                for (var n = 0, e = 0; e < t.length; e++) n += t[e];
                return n
            }, t.product = function (t) {
                for (var n = 1, e = 0; e < t.length; e++) n *= t[e];
                return n
            }, t.quantile = p, t.quantileSorted = s, t.quantileRank = function (t, n) {
                return b(a(t), n)
            }, t.quantileRankSorted = b, t.interquartileRange = y, t.iqr = y, t.medianAbsoluteDeviation = O, t.mad = O, t.chunk = function (t, n) {
                var e = [];
                if (n < 1) throw new Error("chunk size must be a positive number");
                if (Math.floor(n) !== n) throw new Error("chunk size must be an integer");
                for (var r = 0; r < t.length; r += n) e.push(t.slice(r, r + n));
                return e
            }, t.sampleWithReplacement = function (t, n, e) {
                if (0 === t.length) return [];
                e = e || Math.random;
                for (var r = t.length, i = [], o = 0; o < n; o++) {
                    var u = Math.floor(e() * r);
                    i.push(t[u])
                }
                return i
            }, t.shuffle = m, t.shuffleInPlace = _, t.sample = function (t, n, e) {
                return m(t, e).slice(0, n)
            }, t.ckmeans = function (t, n) {
                if (n > t.length) throw new Error("cannot generate more classes than there are data values");
                var e = a(t);
                if (1 === w(e)) return [e];
                var r = x(n, e.length), i = x(n, e.length);
                !function (t, n, e) {
                    for (var r, i = n[0].length, o = t[Math.floor(i / 2)], u = [], a = [], c = 0; c < i; ++c) r = t[c] - o, 0 === c ? (u.push(r), a.push(r * r)) : (u.push(u[c - 1] + r), a.push(a[c - 1] + r * r)), n[0][c] = E(0, c, u, a), e[0][c] = 0;
                    for (var f = 1; f < n.length; ++f) M(f < n.length - 1 ? f : i - 1, i - 1, f, n, e, u, a)
                }(e, r, i);
                for (var o = [], u = i[0].length - 1, c = i.length - 1; 0 <= c; c--) {
                    var f = i[c][u];
                    o[c] = e.slice(f, u + 1), 0 < c && (u = f - 1)
                }
                return o
            }, t.uniqueCountSorted = w, t.sumNthPowerDeviations = r, t.equalIntervalBreaks = function (t, n) {
                if (t.length < 2) return t;
                for (var e = c(t), r = f(t), i = [e], o = (r - e) / n, u = 1; u < n; u++) i.push(i[0] + o * u);
                return i.push(r), i
            }, t.sampleCovariance = T, t.sampleCorrelation = function (t, n) {
                return T(t, n) / k(t) / k(n)
            }, t.sampleVariance = S, t.sampleStandardDeviation = k, t.sampleSkewness = function (t) {
                if (t.length < 3) throw new Error("sampleSkewness requires at least three data points");
                for (var n, r = e(t), i = 0, o = 0, u = 0; u < t.length; u++) i += (n = t[u] - r) * n, o += n * n * n;
                var a = t.length - 1, c = Math.sqrt(i / a), f = t.length;
                return f * o / ((f - 1) * (f - 2) * Math.pow(c, 3))
            }, t.sampleKurtosis = function (t) {
                var n = t.length;
                if (n < 4) throw new Error("sampleKurtosis requires at least four data points");
                for (var r, i = e(t), o = 0, u = 0, a = 0; a < n; a++) o += (r = t[a] - i) * r, u += r * r * r * r;
                return (n - 1) / ((n - 2) * (n - 3)) * (n * (n + 1) * u / (o * o) - 3 * (n - 1))
            }, t.permutationsHeap = function (t) {
                for (var n = new Array(t.length), e = [t.slice()], r = 0; r < t.length; r++) n[r] = 0;
                for (r = 0; r < t.length;) if (n[r] < r) {
                    var i = 0;
                    r % 2 != 0 && (i = n[r]);
                    var o = t[i];
                    t[i] = t[r], t[r] = o, e.push(t.slice()), n[r]++, r = 0
                } else n[r] = 0, r++;
                return e
            }, t.combinations = function t(n, e) {
                var r, i, o, u, a = [];
                for (r = 0; r < n.length; r++) if (1 === e) a.push([n[r]]); else for (o = t(n.slice(r + 1, n.length), e - 1), i = 0; i < o.length; i++) (u = o[i]).unshift(n[r]), a.push(u);
                return a
            }, t.combinationsReplacement = function t(n, e) {
                for (var r = [], i = 0; i < n.length; i++) if (1 === e) r.push([n[i]]); else for (var o = t(n.slice(i, n.length), e - 1), u = 0; u < o.length; u++) r.push([n[i]].concat(o[u]));
                return r
            }, t.addToMean = function (t, n, e) {
                return t + (e - t) / (n + 1)
            }, t.combineMeans = C, t.combineVariances = function (t, n, e, r, i, o) {
                var u = C(n, e, i, o);
                return (e * (t + Math.pow(n - u, 2)) + o * (r + Math.pow(i - u, 2))) / (e + o)
            }, t.geometricMean = function (t) {
                if (0 === t.length) throw new Error("geometricMean requires at least one data point");
                for (var n = 1, e = 0; e < t.length; e++) {
                    if (t[e] <= 0) throw new Error("geometricMean requires only positive numbers as input");
                    n *= t[e]
                }
                return Math.pow(n, 1 / t.length)
            }, t.harmonicMean = function (t) {
                if (0 === t.length) throw new Error("harmonicMean requires at least one data point");
                for (var n = 0, e = 0; e < t.length; e++) {
                    if (t[e] <= 0) throw new Error("harmonicMean requires only positive numbers as input");
                    n += 1 / t[e]
                }
                return t.length / n
            }, t.average = e, t.mean = e, t.median = j, t.medianSorted = function (t) {
                return s(t, .5)
            }, t.subtractFromMean = function (t, n, e) {
                return (t * n - e) / (n - 1)
            }, t.rootMeanSquare = P, t.rms = P, t.variance = i, t.tTest = function (t, n) {
                return (e(t) - n) / (o(t) / Math.sqrt(t.length))
            }, t.tTestTwoSample = function (t, n, r) {
                var i = t.length, o = n.length;
                if (!i || !o) return null;
                r || (r = 0);
                var u = e(t), a = e(n), c = S(t), f = S(n);
                if ("number" == typeof u && "number" == typeof a && "number" == typeof c && "number" == typeof f) {
                    var s = ((i - 1) * c + (o - 1) * f) / (i + o - 2);
                    return (u - a - r) / Math.sqrt(s * (1 / i + 1 / o))
                }
            }, t.BayesianClassifier = N, t.bayesian = N, t.PerceptronModel = R, t.perceptron = R, t.epsilon = F, t.factorial = B, t.gamma = function t(n) {
                if ("number" == typeof(e = n) && isFinite(e) && Math.floor(e) === e) return n <= 0 ? NaN : B(n - 1);
                var e;
                if (--n < 0) return Math.PI / (Math.sin(Math.PI * -n) * t(-n));
                var r = n + .25;
                return Math.pow(n / Math.E, n) * Math.sqrt(2 * Math.PI * (n + 1 / 6)) * (1 + 1 / 144 / Math.pow(r, 2) - 1 / 12960 / Math.pow(r, 3) - 257 / 207360 / Math.pow(r, 4) - 52 / 2612736 / Math.pow(r, 5) + 5741173 / 9405849600 / Math.pow(r, 6) + 37529 / 18811699200 / Math.pow(r, 7))
            }, t.gammaln = function (t) {
                if (t <= 0) return 1 / 0;
                t--;
                for (var n = D[0], e = 1; e < 15; e++) n += D[e] / (t + e);
                var r = 5.2421875 + t;
                return G + Math.log(n) - r + (t + .5) * Math.log(r)
            }, t.bernoulliDistribution = function (t) {
                if (t < 0 || 1 < t) throw new Error("bernoulliDistribution requires probability to be between 0 and 1 inclusive");
                return [1 - t, t]
            }, t.binomialDistribution = function (t, n) {
                if (!(n < 0 || 1 < n || t <= 0 || t % 1 != 0)) {
                    for (var e = 0, r = 0, i = [], o = 1; i[e] = o * Math.pow(n, e) * Math.pow(1 - n, t - e), r += i[e], o = o * (t - ++e + 1) / e, r < 1 - F;) ;
                    return i
                }
            }, t.poissonDistribution = function (t) {
                if (!(t <= 0)) {
                    for (var n = 0, e = 0, r = [], i = 1; r[n] = Math.exp(-t) * Math.pow(t, n) / i, e += r[n], i *= ++n, e < 1 - F;) ;
                    return r
                }
            }, t.chiSquaredDistributionTable = H, t.chiSquaredGoodnessOfFit = function (t, n, r) {
                for (var i, o, u = 0, a = n(e(t)), c = [], f = [], s = 0; s < t.length; s++) void 0 === c[t[s]] && (c[t[s]] = 0), c[t[s]]++;
                for (s = 0; s < c.length; s++) void 0 === c[s] && (c[s] = 0);
                for (o in a) o in c && (f[+o] = a[o] * t.length);
                for (o = f.length - 1; 0 <= o; o--) f[o] < 3 && (f[o - 1] += f[o], f.pop(), c[o - 1] += c[o], c.pop());
                for (o = 0; o < c.length; o++) u += Math.pow(c[o] - f[o], 2) / f[o];
                return i = c.length - 1 - 1, H[i][r] < u
            }, t.kernelDensityEstimation = A, t.kde = A, t.zScore = function (t, n, e) {
                return (t - n) / e
            }, t.cumulativeStdNormalProbability = function (t) {
                var n = Math.abs(t), e = Math.min(Math.round(100 * n), $.length - 1);
                return 0 <= t ? $[e] : +(1 - $[e]).toFixed(4)
            }, t.standardNormalTable = $, t.errorFunction = L, t.erf = L, t.inverseErrorFunction = z, t.probit = function (t) {
                return 0 === t ? t = F : 1 <= t && (t = 1 - F), Math.sqrt(2) * z(2 * t - 1)
            }, t.permutationTest = function (t, n, r, i) {
                if (void 0 === i && (i = 1e4), void 0 === r && (r = "two_side"), "two_side" !== r && "greater" !== r && "less" !== r) throw new Error("`alternative` must be either 'two_side', 'greater', or 'less'");
                for (var o = e(t) - e(n), u = new Array(i), a = t.concat(n), c = Math.floor(a.length / 2), f = 0; f < i; f++) {
                    _(a);
                    var s = a.slice(0, c), l = a.slice(c, a.length), h = e(s) - e(l);
                    u[f] = h
                }
                var p = 0;
                if ("two_side" === r) for (f = 0; f <= i; f++) Math.abs(u[f]) >= Math.abs(o) && (p += 1); else if ("greater" === r) for (f = 0; f <= i; f++) u[f] >= o && (p += 1); else for (f = 0; f <= i; f++) u[f] <= o && (p += 1);
                return p / i
            }, t.bisect = function (t, n, e, r, i) {
                if ("function" != typeof t) throw new TypeError("func must be a function");
                for (var o = 0; o < r; o++) {
                    var u = (n + e) / 2;
                    if (0 === t(u) || Math.abs((e - n) / 2) < i) return u;
                    q(t(u)) === q(t(n)) ? n = u : e = u
                }
                throw new Error("maximum number of iterations exceeded")
            }, t.quickselect = l, t.sign = q, t.numericSort = a, Object.defineProperty(t, "__esModule", {value: !0})
        })
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e, r = t * Object(u.y)(n), i = 30;
            do {
                n -= e = (n + Object(u.y)(n) - r) / (1 + Object(u.h)(n))
            } while (Object(u.a)(e) > u.k && --i > 0);
            return n / 2
        }

        function i(t, n, e) {
            function i(i, o) {
                return [t * i * Object(u.h)(o = r(e, o)), n * Object(u.y)(o)]
            }

            return i.invert = function (r, i) {
                return i = Object(u.e)(i / n), [r / (t * Object(u.h)(i)), Object(u.e)((2 * i + Object(u.y)(2 * i)) / e)]
            }, i
        }

        n.c = r, n.b = i, e.d(n, "d", function () {
            return a
        });
        var o = e(0), u = e(1), a = i(u.D / u.o, u.D, u.s);
        n.a = function () {
            return Object(o.geoProjection)(a).scale(169.529)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            t && a.hasOwnProperty(t.type) && a[t.type](t, n)
        }

        function i(t, n, e) {
            var r, i = -1, o = t.length - e;
            for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
            n.lineEnd()
        }

        function o(t, n) {
            var e = -1, r = t.length;
            for (n.polygonStart(); ++e < r;) i(t[e], n, 1);
            n.polygonEnd()
        }

        var u = {
            Feature: function (t, n) {
                r(t.geometry, n)
            }, FeatureCollection: function (t, n) {
                for (var e = t.features, i = -1, o = e.length; ++i < o;) r(e[i].geometry, n)
            }
        }, a = {
            Sphere: function (t, n) {
                n.sphere()
            }, Point: function (t, n) {
                t = t.coordinates, n.point(t[0], t[1], t[2])
            }, MultiPoint: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
            }, LineString: function (t, n) {
                i(t.coordinates, n, 0)
            }, MultiLineString: function (t, n) {
                for (var e = t.coordinates, r = -1, o = e.length; ++r < o;) i(e[r], n, 0)
            }, Polygon: function (t, n) {
                o(t.coordinates, n)
            }, MultiPolygon: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) o(e[r], n)
            }, GeometryCollection: function (t, n) {
                for (var e = t.geometries, i = -1, o = e.length; ++i < o;) r(e[i], n)
            }
        };
        n.a = function (t, n) {
            t && u.hasOwnProperty(t.type) ? u[t.type](t, n) : r(t, n)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return Object(a.a)(t[0] - n[0]) < a.k && Object(a.a)(t[1] - n[1]) < a.k
        }

        function i(t, n) {
            for (var e, r, i, o = -1, u = t.length, a = t[0], c = []; ++o < u;) {
                r = ((e = t[o])[0] - a[0]) / n, i = (e[1] - a[1]) / n;
                for (var f = 0; f < n; ++f) c.push([a[0] + f * r, a[1] + f * i]);
                a = e
            }
            return c.push(e), c
        }

        var o = e(14), u = e(0), a = e(1);
        n.a = function (t, n) {
            function e(e, r) {
                for (var i = r < 0 ? -1 : 1, o = n[+(r < 0)], u = 0, a = o.length - 1; u < a && e > o[u][2][0]; ++u) ;
                var c = t(e - o[u][1][0], r);
                return c[0] += t(o[u][1][0], i * r > i * o[u][0][1] ? o[u][0][1] : r)[0], c
            }

            var c = function (t) {
                var n, e, r, u, c, f, s, l = [], h = t[0].length;
                for (s = 0; s < h; ++s) e = (n = t[0][s])[0][0], r = n[0][1], u = n[1][1], c = n[2][0], f = n[2][1], l.push(i([[e + a.k, r + a.k], [e + a.k, u - a.k], [c - a.k, u - a.k], [c - a.k, f + a.k]], 30));
                for (s = t[1].length - 1; s >= 0; --s) e = (n = t[1][s])[0][0], r = n[0][1], u = n[1][1], c = n[2][0], f = n[2][1], l.push(i([[c - a.k, f - a.k], [c - a.k, u + a.k], [e + a.k, u + a.k], [e + a.k, r - a.k]], 30));
                return {type: "Polygon", coordinates: [Object(o.merge)(l)]}
            }(n), f = (n = n.map(function (t) {
                return t.map(function (t) {
                    return [[t[0][0] * a.v, t[0][1] * a.v], [t[1][0] * a.v, t[1][1] * a.v], [t[2][0] * a.v, t[2][1] * a.v]]
                })
            })).map(function (n) {
                return n.map(function (n) {
                    var e, r = t(n[0][0], n[0][1])[0], i = t(n[2][0], n[2][1])[0], o = t(n[1][0], n[0][1])[1],
                        u = t(n[1][0], n[1][1])[1];
                    return o > u && (e = o, o = u, u = e), [[r, o], [i, u]]
                })
            });
            t.invert && (e.invert = function (i, o) {
                for (var u = f[+(o < 0)], a = n[+(o < 0)], c = 0, s = u.length; c < s; ++c) {
                    var l = u[c];
                    if (l[0][0] <= i && i < l[1][0] && l[0][1] <= o && o < l[1][1]) {
                        var h = t.invert(i - t(a[c][1][0], 0)[0], o);
                        return h[0] += a[c][1][0], r(e(h[0], h[1]), [i, o]) ? h : null
                    }
                }
            });
            var s = Object(u.geoProjection)(e), l = s.stream;
            return s.stream = function (t) {
                var n = s.rotate(), e = l(t), r = (s.rotate([0, 0]), l(t));
                return s.rotate(n), e.sphere = function () {
                    Object(u.geoStream)(c, r)
                }, e
            }, s
        }
    }, function (t, n, e) {
        var r = e(9), i = e(11), o = Object.keys ? function (t) {
            return Object.keys(t)
        } : function (t) {
            var n = [];
            return r(t, function (e, r) {
                i(t) && "prototype" === r || n.push(r)
            }), n
        };
        t.exports = o
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            t && a.hasOwnProperty(t.type) && a[t.type](t, n)
        }

        function i(t, n, e) {
            var r, i = -1, o = t.length - e;
            for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
            n.lineEnd()
        }

        function o(t, n) {
            var e = -1, r = t.length;
            for (n.polygonStart(); ++e < r;) i(t[e], n, 1);
            n.polygonEnd()
        }

        var u = {
            Feature: function (t, n) {
                r(t.geometry, n)
            }, FeatureCollection: function (t, n) {
                for (var e = t.features, i = -1, o = e.length; ++i < o;) r(e[i].geometry, n)
            }
        }, a = {
            Sphere: function (t, n) {
                n.sphere()
            }, Point: function (t, n) {
                t = t.coordinates, n.point(t[0], t[1], t[2])
            }, MultiPoint: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
            }, LineString: function (t, n) {
                i(t.coordinates, n, 0)
            }, MultiLineString: function (t, n) {
                for (var e = t.coordinates, r = -1, o = e.length; ++r < o;) i(e[r], n, 0)
            }, Polygon: function (t, n) {
                o(t.coordinates, n)
            }, MultiPolygon: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) o(e[r], n)
            }, GeometryCollection: function (t, n) {
                for (var e = t.geometries, i = -1, o = e.length; ++i < o;) r(e[i], n)
            }
        };
        n.a = function (t, n) {
            t && u.hasOwnProperty(t.type) ? u[t.type](t, n) : r(t, n)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n, e) {
        var r = e(3);
        t.exports = {assign: r}
    }, function (t, n, e) {
        "use strict";

        function r() {
            this.reset()
        }

        function i(t, n, e) {
            var r = t.s = n + e, i = r - n, o = r - i;
            t.t = n - o + (e - i)
        }

        n.a = function () {
            return new r
        }, r.prototype = {
            constructor: r, reset: function () {
                this.s = this.t = 0
            }, add: function (t) {
                i(o, t, this.t), i(this, o.s, this.s), this.s ? this.t += o.t : this.s = o.t
            }, valueOf: function () {
                return this.s
            }
        };
        var o = new r
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e(1);
        n.a = function (t) {
            var n = 0, e = Object(r.geoProjectionMutator)(t), o = e(n);
            return o.parallel = function (t) {
                return arguments.length ? e(n = t * i.v) : n * i.j
            }, o
        }
    }, function (t, n, e) {
        var r = e(9), i = e(54), o = Object.prototype.hasOwnProperty;
        t.exports = function (t, n) {
            if (null === t || !i(t)) return {};
            var e = {};
            return r(n, function (n) {
                o.call(t, n) && (e[n] = t[n])
            }), e
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(349);
        e.d(n, "path", function () {
            return r.a
        })
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(369);
        e.d(n, "cluster", function () {
            return r.a
        });
        var i = e(86);
        e.d(n, "hierarchy", function () {
            return i.c
        });
        var o = e(381);
        e.d(n, "pack", function () {
            return o.a
        });
        var u = e(160);
        e.d(n, "packSiblings", function () {
            return u.a
        });
        var a = e(161);
        e.d(n, "packEnclose", function () {
            return a.a
        });
        var c = e(383);
        e.d(n, "partition", function () {
            return c.a
        });
        var f = e(384);
        e.d(n, "stratify", function () {
            return f.a
        });
        var s = e(385);
        e.d(n, "tree", function () {
            return s.a
        });
        var l = e(386);
        e.d(n, "treemap", function () {
            return l.a
        });
        var h = e(387);
        e.d(n, "treemapBinary", function () {
            return h.a
        });
        var p = e(45);
        e.d(n, "treemapDice", function () {
            return p.a
        });
        var v = e(55);
        e.d(n, "treemapSlice", function () {
            return v.a
        });
        var d = e(388);
        e.d(n, "treemapSliceDice", function () {
            return d.a
        });
        var g = e(88);
        e.d(n, "treemapSquarify", function () {
            return g.a
        });
        var b = e(389);
        e.d(n, "treemapResquarify", function () {
            return b.a
        })
    }, function (t, n, e) {
        "use strict";
        n.g = function (t) {
            return [Object(r.e)(t[1], t[0]), Object(r.c)(t[2])]
        }, n.a = function (t) {
            var n = t[0], e = t[1], i = Object(r.g)(e);
            return [i * Object(r.g)(n), i * Object(r.t)(n), Object(r.t)(e)]
        }, n.d = function (t, n) {
            return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
        }, n.c = function (t, n) {
            return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
        }, n.b = function (t, n) {
            t[0] += n[0], t[1] += n[1], t[2] += n[2]
        }, n.f = function (t, n) {
            return [t[0] * n, t[1] * n, t[2] * n]
        }, n.e = function (t) {
            var n = Object(r.u)(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] /= n, t[1] /= n, t[2] /= n
        };
        var r = e(4)
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return null === t ? NaN : +t
        }
    }, function (t, n, e) {
        "use strict";
        n.b = function (t) {
            return function (n, e) {
                var i = Object(r.g)(n), o = Object(r.g)(e), u = t(i * o);
                return [u * o * Object(r.t)(n), u * Object(r.t)(e)]
            }
        }, n.a = function (t) {
            return function (n, e) {
                var i = Object(r.u)(n * n + e * e), o = t(i), u = Object(r.t)(o), a = Object(r.g)(o);
                return [Object(r.e)(n * u, i * a), Object(r.c)(i && e * u / i)]
            }
        };
        var r = e(4)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t * Object(o.h)(n), n]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            return [t / Object(o.h)(n), n]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(152.63)
        }
    }, function (t, n, e) {
        function r(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        var i = e(139), o = e(3), u = e(40), a = e(40), c = e(320), f = e(9), s = e(6), l = e(54), h = e(140),
            p = e(76), v = e(10), d = e(24), g = e(32), b = function (t) {
                function n(n, e) {
                    var i, u = r(r(i = t.call(this) || this));
                    if (e = e || {}, (n = n || {}).isDataSet || (e = n, n = null), o(u, {
                            dataSet: n,
                            loose: !n,
                            dataType: "table",
                            isView: !0,
                            isDataView: !0,
                            origin: [],
                            rows: [],
                            transforms: [],
                            watchingStates: null
                        }, e), !u.loose) {
                        var a = u.watchingStates;
                        n.on("statechange", function (t) {
                            s(a) ? a.indexOf(t) > -1 && u._reExecute() : u._reExecute()
                        })
                    }
                    return i
                }

                !function (t, n) {
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n
                }(n, t);
                var e = n.prototype;
                return e._parseStateExpression = function (t) {
                    var n = this.dataSet, e = /^\$state\.(\w+)/.exec(t);
                    return e ? n.state[e[1]] : t
                }, e._preparseOptions = function (t) {
                    var n = this, e = function (t) {
                        var n = {};
                        return f(t, function (t, e) {
                            p(t) && t.isView ? n[e] = t : s(t) ? n[e] = t.concat([]) : l(t) ? n[e] = u(t) : n[e] = t
                        }), n
                    }(t);
                    return n.loose ? e : (f(e, function (t, r) {
                        v(t) && /^\$state\./.test(t) && (e[r] = n._parseStateExpression(t))
                    }), e)
                }, e._prepareSource = function (t, e) {
                    var r = this, i = n.DataSet;
                    if (r._source = {
                            source: t,
                            options: e
                        }, e) e = r._preparseOptions(e), r.origin = i.getConnector(e.type)(t, e, r); else if (t instanceof n || v(t)) r.origin = i.getConnector("default")(t, r.dataSet); else if (s(t)) r.origin = t; else {
                        if (!p(t) || !t.type) throw new TypeError("Invalid source");
                        e = r._preparseOptions(t), r.origin = i.getConnector(e.type)(e, r)
                    }
                    return r.rows = a(r.origin), r
                }, e.source = function (t, n) {
                    return this._prepareSource(t, n), this._reExecuteTransforms(), this.trigger("change"), this
                }, e.transform = function (t) {
                    void 0 === t && (t = {});
                    return this.transforms.push(t), this._executeTransform(t), this
                }, e._executeTransform = function (t) {
                    t = this._preparseOptions(t);
                    n.DataSet.getTransform(t.type)(this, t)
                }, e._reExecuteTransforms = function () {
                    var t = this;
                    t.transforms.forEach(function (n) {
                        t._executeTransform(n)
                    })
                }, e.addRow = function (t) {
                    this.rows.push(t)
                }, e.removeRow = function (t) {
                    this.rows.splice(t, 1)
                }, e.updateRow = function (t, n) {
                    o(this.rows[t], n)
                }, e.findRows = function (t) {
                    return this.rows.filter(function (n) {
                        return h(n, t)
                    })
                }, e.findRow = function (t) {
                    return c(this.rows, t)
                }, e.getColumnNames = function () {
                    var t = this.rows[0];
                    return t ? d(t) : []
                }, e.getColumnName = function (t) {
                    return this.getColumnNames()[t]
                }, e.getColumnIndex = function (t) {
                    return this.getColumnNames().indexOf(t)
                }, e.getColumn = function (t) {
                    return this.rows.map(function (n) {
                        return n[t]
                    })
                }, e.getColumnData = function (t) {
                    return this.getColumn(t)
                }, e.getSubset = function (t, n, e) {
                    for (var r = [], i = t; i <= n; i++) r.push(g(this.rows[i], e));
                    return r
                }, e.toString = function (t) {
                    return t ? JSON.stringify(this.rows, null, 2) : JSON.stringify(this.rows)
                }, e._reExecute = function () {
                    var t = this._source, n = t.source, e = t.options;
                    this._prepareSource(n, e), this._reExecuteTransforms(), this.trigger("change")
                }, n
            }(i);
        t.exports = b
    }, function (t, n, e) {
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, i = e(6);
        t.exports = function t(n) {
            if ("object" !== (void 0 === n ? "undefined" : r(n)) || null === n) return n;
            var e = void 0;
            if (i(n)) {
                e = [];
                for (var o = 0, u = n.length; o < u; o++) "object" === r(n[o]) && null != n[o] ? e[o] = t(n[o]) : e[o] = n[o]
            } else {
                e = {};
                for (var a in n) "object" === r(n[a]) && null != n[a] ? e[a] = t(n[a]) : e[a] = n[a]
            }
            return e
        }
    }, function (t, n) {
        var e = {}.toString;
        t.exports = function (t, n) {
            return e.call(t) === "[object " + n + "]"
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            this.reset()
        }

        function i(t, n, e) {
            var r = t.s = n + e, i = r - n, o = r - i;
            t.t = n - o + (e - i)
        }

        n.a = function () {
            return new r
        }, r.prototype = {
            constructor: r, reset: function () {
                this.s = this.t = 0
            }, add: function (t) {
                i(o, t, this.t), i(this, o.s, this.s), this.s ? this.t += o.t : this.s = o.t
            }, valueOf: function () {
                return this.s
            }
        };
        var o = new r
    }, function (t, n, e) {
        "use strict";
        n.g = function (t) {
            return [Object(r.e)(t[1], t[0]), Object(r.c)(t[2])]
        }, n.a = function (t) {
            var n = t[0], e = t[1], i = Object(r.g)(e);
            return [i * Object(r.g)(n), i * Object(r.t)(n), Object(r.t)(e)]
        }, n.d = function (t, n) {
            return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
        }, n.c = function (t, n) {
            return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
        }, n.b = function (t, n) {
            t[0] += n[0], t[1] += n[1], t[2] += n[2]
        }, n.f = function (t, n) {
            return [t[0] * n, t[1] * n, t[2] * n]
        }, n.e = function (t) {
            var n = Object(r.u)(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] /= n, t[1] /= n, t[2] /= n
        };
        var r = e(5)
    }, function (t, n, e) {
        "use strict";
        n.b = function (t) {
            return function (n, e) {
                var i = Object(r.g)(n), o = Object(r.g)(e), u = t(i * o);
                return [u * o * Object(r.t)(n), u * Object(r.t)(e)]
            }
        }, n.a = function (t) {
            return function (n, e) {
                var i = Object(r.u)(n * n + e * e), o = t(i), u = Object(r.t)(o), a = Object(r.g)(o);
                return [Object(r.e)(n * u, i * a), Object(r.c)(i && e * u / i)]
            }
        };
        var r = e(5)
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n, e, r, i) {
            for (var o, u = t.children, a = -1, c = u.length, f = t.value && (r - n) / t.value; ++a < c;) (o = u[a]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * f
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return r
        }), e.d(n, "d", function () {
            return i
        }), e.d(n, "e", function () {
            return o
        }), e.d(n, "h", function () {
            return u
        }), e.d(n, "i", function () {
            return a
        }), e.d(n, "k", function () {
            return c
        }), e.d(n, "l", function () {
            return f
        }), e.d(n, "f", function () {
            return s
        }), e.d(n, "j", function () {
            return l
        }), e.d(n, "g", function () {
            return h
        }), e.d(n, "m", function () {
            return p
        }), n.b = function (t) {
            return t > 1 ? 0 : t < -1 ? l : Math.acos(t)
        }, n.c = function (t) {
            return t >= 1 ? h : t <= -1 ? -h : Math.asin(t)
        };
        var r = Math.abs, i = Math.atan2, o = Math.cos, u = Math.max, a = Math.min, c = Math.sin, f = Math.sqrt,
            s = 1e-12, l = Math.PI, h = l / 2, p = 2 * l
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            if ((i = t.length) > 1) for (var e, r, i, o = 1, u = t[n[0]], a = u.length; o < i; ++o) for (r = u, u = t[n[o]], e = 0; e < a; ++e) u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
            return e
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
        }

        function i(t, n) {
            return n[1] - t[1] || n[0] - t[0]
        }

        function o(t, n) {
            var e, r, o, d = t.sort(i).pop();
            for (f = [], a = new Array(t.length), u = new v.b, c = new v.b; ;) if (o = h.c, d && (!o || d[1] < o.y || d[1] === o.y && d[0] < o.x)) d[0] === e && d[1] === r || (Object(s.a)(d), e = d[0], r = d[1]), d = t.pop(); else {
                if (!o) break;
                Object(s.b)(o.arc)
            }
            if (Object(l.d)(), n) {
                var g = +n[0][0], b = +n[0][1], y = +n[1][0], j = +n[1][1];
                Object(p.a)(g, b, y, j), Object(l.b)(g, b, y, j)
            }
            this.edges = f, this.cells = a, u = c = f = a = null
        }

        e.d(n, "f", function () {
            return d
        }), e.d(n, "g", function () {
            return g
        }), e.d(n, "a", function () {
            return u
        }), e.d(n, "b", function () {
            return a
        }), e.d(n, "c", function () {
            return c
        }), e.d(n, "e", function () {
            return f
        }), n.d = o;
        var u, a, c, f, s = e(513), l = e(191), h = e(192), p = e(100), v = e(99), d = 1e-6, g = 1e-12;
        o.prototype = {
            constructor: o, polygons: function () {
                var t = this.edges;
                return this.cells.map(function (n) {
                    var e = n.halfedges.map(function (e) {
                        return Object(l.a)(n, t[e])
                    });
                    return e.data = n.site.data, e
                })
            }, triangles: function () {
                var t = [], n = this.edges;
                return this.cells.forEach(function (e, i) {
                    if (u = (o = e.halfedges).length) for (var o, u, a, c = e.site, f = -1, s = n[o[u - 1]], l = s.left === c ? s.right : s.left; ++f < u;) a = l, l = (s = n[o[f]]).left === c ? s.right : s.left, a && l && i < a.index && i < l.index && r(c, a, l) < 0 && t.push([c.data, a.data, l.data])
                }), t
            }, links: function () {
                return this.edges.filter(function (t) {
                    return t.right
                }).map(function (t) {
                    return {source: t.left.data, target: t.right.data}
                })
            }, find: function (t, n, e) {
                for (var r, i, o = this, u = o._found || 0, a = o.cells.length; !(i = o.cells[u]);) if (++u >= a) return null;
                var c = t - i.site[0], f = n - i.site[1], s = c * c + f * f;
                do {
                    i = o.cells[r = u], u = null, i.halfedges.forEach(function (e) {
                        var r = o.edges[e], a = r.left;
                        if (a !== i.site && a || (a = r.right)) {
                            var c = t - a[0], f = n - a[1], l = c * c + f * f;
                            l < s && (s = l, u = a.index)
                        }
                    })
                } while (null !== u);
                return o._found = r, null == e || s <= e * e ? i.site : null
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t > f.o ? t - f.w : t < -f.o ? t + f.w : t, n]
        }

        function i(t, n, e) {
            return (t %= f.w) ? n || e ? Object(c.a)(u(t), a(n, e)) : u(t) : n || e ? a(n, e) : r
        }

        function o(t) {
            return function (n, e) {
                return n += t, [n > f.o ? n - f.w : n < -f.o ? n + f.w : n, e]
            }
        }

        function u(t) {
            var n = o(t);
            return n.invert = o(-t), n
        }

        function a(t, n) {
            function e(t, n) {
                var e = Object(f.g)(n), a = Object(f.g)(t) * e, c = Object(f.t)(t) * e, s = Object(f.t)(n),
                    l = s * r + a * i;
                return [Object(f.e)(c * o - l * u, a * r - s * i), Object(f.c)(l * o + c * u)]
            }

            var r = Object(f.g)(t), i = Object(f.t)(t), o = Object(f.g)(n), u = Object(f.t)(n);
            return e.invert = function (t, n) {
                var e = Object(f.g)(n), a = Object(f.g)(t) * e, c = Object(f.t)(t) * e, s = Object(f.t)(n),
                    l = s * o - c * u;
                return [Object(f.e)(c * o + s * u, a * r + l * i), Object(f.c)(l * r - a * i)]
            }, e
        }

        n.b = i;
        var c = e(105), f = e(4);
        r.invert = r, n.a = function (t) {
            function n(n) {
                return n = t(n[0] * f.r, n[1] * f.r), n[0] *= f.h, n[1] *= f.h, n
            }

            return t = i(t[0] * f.r, t[1] * f.r, t.length > 2 ? t[2] * f.r : 0), n.invert = function (n) {
                return n = t.invert(n[0] * f.r, n[1] * f.r), n[0] *= f.h, n[1] *= f.h, n
            }, n
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return function (n) {
                var e = new i;
                for (var r in t) e[r] = t[r];
                return e.stream = n, e
            }
        }

        function i() {
        }

        n.b = r, n.a = function (t) {
            return {stream: r(t)}
        }, i.prototype = {
            constructor: i, point: function (t, n) {
                this.stream.point(t, n)
            }, sphere: function () {
                this.stream.sphere()
            }, lineStart: function () {
                this.stream.lineStart()
            }, lineEnd: function () {
                this.stream.lineEnd()
            }, polygonStart: function () {
                this.stream.polygonStart()
            }, polygonEnd: function () {
                this.stream.polygonEnd()
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(1);
        n.a = function (t, n, e, i, o, u, a, c) {
            function f(f, s) {
                if (!s) return [t * f / r.s, 0];
                var l = s * s, h = t + l * (n + l * (e + l * i)), p = s * (o - 1 + l * (u - c + l * a)),
                    v = (h * h + p * p) / (2 * p), d = f * Object(r.e)(h / v) / r.s;
                return [v * Object(r.y)(d), s * (1 + l * c) + v * (1 - Object(r.h)(d))]
            }

            return arguments.length < 8 && (c = 0), f.invert = function (f, s) {
                var l, h, p = r.s * f / t, v = s, d = 50;
                do {
                    var g = v * v, b = t + g * (n + g * (e + g * i)), y = v * (o - 1 + g * (u - c + g * a)),
                        j = b * b + y * y, O = 2 * y, _ = j / O, m = _ * _, w = Object(r.e)(b / _) / r.s, x = p * w,
                        E = b * b, M = (2 * n + g * (4 * e + 6 * g * i)) * v, T = o + g * (3 * u + 5 * g * a),
                        S = (2 * (b * M + y * (T - 1)) * O - j * (2 * (T - 1))) / (O * O), k = Object(r.h)(x),
                        C = Object(r.y)(x), P = _ * k, N = _ * C,
                        R = p / r.s * (1 / Object(r.B)(1 - E / m)) * (M * _ - b * S) / m, B = N - f,
                        A = v * (1 + g * c) + _ - P - s, I = S * C + P * R, L = P * w, z = 1 + S - (S * k - N * R),
                        q = N * w, F = I * q - z * L;
                    if (!F) break;
                    p -= l = (A * I - B * z) / F, v -= h = (B * q - A * L) / F
                } while ((Object(r.a)(l) > r.k || Object(r.a)(h) > r.k) && --d > 0);
                return [p, v]
            }, f
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            var i, o, c = n.edges, f = c.length, s = {type: "MultiPoint", coordinates: n.face},
                l = n.face.filter(function (t) {
                    return 90 !== Object(a.a)(t[1])
                }), h = Object(u.geoBounds)({type: "MultiPoint", coordinates: l}), p = !1, v = -1,
                d = h[1][0] - h[0][0],
                g = 180 === d || 360 === d ? [(h[0][0] + h[1][0]) / 2, (h[0][1] + h[1][1]) / 2] : Object(u.geoCentroid)(s);
            if (e) for (; ++v < f && c[v] !== e;) ;
            ++v;
            for (var b = 0; b < f; ++b) o = c[(b + v) % f], Array.isArray(o) ? (p || (t.point((i = Object(u.geoInterpolate)(o[0], g)(a.k))[0], i[1]), p = !0), t.point((i = Object(u.geoInterpolate)(o[1], g)(a.k))[0], i[1])) : (p = !1, o !== e && r(t, o, n))
        }

        function i(t, n) {
            return t && n && t[0] === n[0] && t[1] === n[1]
        }

        function o(t) {
            return t.project.invert || t.children && t.children.some(o)
        }

        var u = e(0), a = e(1), c = e(294);
        n.a = function (t, n, e) {
            function f(t, n) {
                if (t.edges = function (t) {
                        for (var n = t.length, e = [], r = t[n - 1], i = 0; i < n; ++i) e.push([r, r = t[i]]);
                        return e
                    }(t.face), n.face) {
                    var e = t.shared = function (t, n) {
                        for (var e, r, i = t.length, o = null, u = 0; u < i; ++u) {
                            e = t[u];
                            for (var a = n.length; --a >= 0;) if (r = n[a], e[0] === r[0] && e[1] === r[1]) {
                                if (o) return [o, e];
                                o = e
                            }
                        }
                    }(t.face, n.face), r = Object(c.a)(e.map(n.project), e.map(t.project));
                    t.transform = n.transform ? Object(c.c)(n.transform, r) : r;
                    for (var o = n.edges, u = 0, a = o.length; u < a; ++u) i(e[0], o[u][1]) && i(e[1], o[u][0]) && (o[u] = t), i(e[0], o[u][0]) && i(e[1], o[u][1]) && (o[u] = t);
                    for (u = 0, a = (o = t.edges).length; u < a; ++u) i(e[0], o[u][0]) && i(e[1], o[u][1]) && (o[u] = n), i(e[0], o[u][1]) && i(e[1], o[u][0]) && (o[u] = n)
                } else t.transform = n.transform;
                return t.children && t.children.forEach(function (n) {
                    f(n, t)
                }), t
            }

            function s(t, e) {
                var r, i = n(t, e), o = i.project([t * a.j, e * a.j]);
                return (r = i.transform) ? [r[0] * o[0] + r[1] * o[1] + r[2], -(r[3] * o[0] + r[4] * o[1] + r[5])] : (o[1] = -o[1], o)
            }

            function l(t, e) {
                var r = t.project.invert, i = t.transform, o = e;
                if (i && (o = [(i = Object(c.b)(i))[0] * o[0] + i[1] * o[1] + i[2], i[3] * o[0] + i[4] * o[1] + i[5]]), r && t === function (t) {
                        return n(t[0] * a.v, t[1] * a.v)
                    }(u = r(o))) return u;
                for (var u, f = t.children, s = 0, h = f && f.length; s < h; ++s) if (u = l(f[s], e)) return u
            }

            e = null == e ? -a.s / 6 : e, f(t, {transform: [Object(a.h)(e), Object(a.y)(e), 0, -Object(a.y)(e), Object(a.h)(e), 0]}), o(t) && (s.invert = function (n, e) {
                var r = l(t, [n, -e]);
                return r && (r[0] *= a.v, r[1] *= a.v, r)
            });
            var h = Object(u.geoProjection)(s), p = h.stream;
            return h.stream = function (n) {
                var e = h.rotate(), i = p(n), o = (h.rotate([0, 0]), p(n));
                return h.rotate(e), i.sphere = function () {
                    o.polygonStart(), o.lineStart(), r(o, t), o.lineEnd(), o.polygonEnd()
                }, i
            }, h
        }
    }, function (t, n, e) {
        var r = e(321), i = e(41);
        t.exports = function (t) {
            if (!r(t) || !i(t, "Object")) return !1;
            if (null === Object.getPrototypeOf(t)) return !0;
            for (var n = t; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
            return Object.getPrototypeOf(t) === n
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n, e, r, i) {
            for (var o, u = t.children, a = -1, c = u.length, f = t.value && (i - e) / t.value; ++a < c;) (o = u[a]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * f
        }
    }, function (t, n, e) {
        var r = e(41);
        t.exports = function (t) {
            return r(t, "Number")
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            void 0 === n && (n = 1);
            for (var e = t[0], r = t[1], i = [], o = e; o < r;) i.push(o), o += n;
            return i.push(r), i
        }
    }, function (t, n, e) {
        var r = e(19), i = r.standardDeviation, o = r.interquartileRange;
        t.exports = {
            silverman: function (t) {
                var n = i(t), e = 4 * Math.pow(n, 5), r = 3 * t.length;
                return Math.pow(e / r, .2)
            }, nrd: function (t) {
                var n = i(t), e = o(t);
                return "number" == typeof e && (n = Math.min(n, e / 1.34)), 1.06 * n * Math.pow(t.length, -.2)
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(8);
        t.exports = {
            longestPath: function (t) {
                function n(i) {
                    var o = t.node(i);
                    if (r.has(e, i)) return o.rank;
                    e[i] = !0;
                    var u = r.minBy(r.map(t.outEdges(i), function (e) {
                        return n(e.w) - t.edge(e).minlen
                    }));
                    return u !== Number.POSITIVE_INFINITY && void 0 !== u && null !== u || (u = 0), o.rank = u
                }

                var e = {};
                r.forEach(t.sources(), n)
            }, slack: function (t, n) {
                return t.node(n.w).rank - t.node(n.v).rank - t.edge(n).minlen
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._context = t
        }

        r.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        this._context.lineTo(t, n)
                }
            }
        }, n.a = function (t) {
            return new r(t)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
        }

        function i(t) {
            this._context = t
        }

        n.b = r, n.a = i, i.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 3:
                        r(this, this._x1, this._y1);
                    case 2:
                        this._context.lineTo(this._x1, this._y1)
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                    default:
                        r(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
        }

        function i(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }

        n.b = r, n.a = i, i.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        r(this, this._x1, this._y1)
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2, this._x1 = t, this._y1 = n;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        r(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        (function t(n) {
            function e(t) {
                return new i(t, n)
            }

            return e.tension = function (n) {
                return t(+n)
            }, e
        })(0)
    }, function (t, n, e) {
        var r = e(193), i = function () {
            function t(t, n) {
                void 0 === n && (n = {});
                this.options = n, this.rootNode = r(t, n)
            }

            return t.prototype.execute = function () {
                throw new Error("please override this method")
            }, t
        }();
        t.exports = i
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r) {
            function l(i, o) {
                return t <= i && i <= e && n <= o && o <= r
            }

            function h(i, o, u, a) {
                var c = 0, f = 0;
                if (null == i || (c = p(i, u)) !== (f = p(o, u)) || d(i, o) < 0 ^ u > 0) do {
                    a.point(0 === c || 3 === c ? t : e, c > 1 ? r : n)
                } while ((c = (c + u + 4) % 4) !== f); else a.point(o[0], o[1])
            }

            function p(r, o) {
                return Object(i.a)(r[0] - t) < i.i ? o > 0 ? 0 : 3 : Object(i.a)(r[0] - e) < i.i ? o > 0 ? 2 : 1 : Object(i.a)(r[1] - n) < i.i ? o > 0 ? 1 : 0 : o > 0 ? 3 : 2
            }

            function v(t, n) {
                return d(t.x, n.x)
            }

            function d(t, n) {
                var e = p(t, 1), r = p(n, 1);
                return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
            }

            return function (i) {
                function p(t, n) {
                    l(t, n) && T.point(t, n)
                }

                function d(i, o) {
                    var a = l(i, o);
                    if (b && y.push([i, o]), E) j = i, O = o, _ = a, E = !1, a && (T.lineStart(), T.point(i, o)); else if (a && x) T.point(i, o); else {
                        var c = [m = Math.max(s, Math.min(f, m)), w = Math.max(s, Math.min(f, w))],
                            h = [i = Math.max(s, Math.min(f, i)), o = Math.max(s, Math.min(f, o))];
                        Object(u.a)(c, h, t, n, e, r) ? (x || (T.lineStart(), T.point(c[0], c[1])), T.point(h[0], h[1]), a || T.lineEnd(), M = !1) : a && (T.lineStart(), T.point(i, o), M = !1)
                    }
                    m = i, w = o, x = a
                }

                var g, b, y, j, O, _, m, w, x, E, M, T = i, S = Object(o.a)(), k = {
                    point: p, lineStart: function () {
                        k.point = d, b && b.push(y = []), E = !0, x = !1, m = w = NaN
                    }, lineEnd: function () {
                        g && (d(j, O), _ && x && S.rejoin(), g.push(S.result())), k.point = p, x && T.lineEnd()
                    }, polygonStart: function () {
                        T = S, g = [], b = [], M = !0
                    }, polygonEnd: function () {
                        var n = function () {
                            for (var n = 0, e = 0, i = b.length; e < i; ++e) for (var o, u, a = b[e], c = 1, f = a.length, s = a[0], l = s[0], h = s[1]; c < f; ++c) o = l, u = h, l = (s = a[c])[0], h = s[1], u <= r ? h > r && (l - o) * (r - u) > (h - u) * (t - o) && ++n : h <= r && (l - o) * (r - u) < (h - u) * (t - o) && --n;
                            return n
                        }(), e = M && n, o = (g = Object(c.merge)(g)).length;
                        (e || o) && (i.polygonStart(), e && (i.lineStart(), h(null, null, 1, i), i.lineEnd()), o && Object(a.a)(g, v, n, h, i), i.polygonEnd()), T = i, g = b = y = null
                    }
                };
                return k
            }
        }

        n.a = r;
        var i = e(4), o = e(106), u = e(200), a = e(107), c = e(14), f = 1e9, s = -f;
        n.b = function () {
            var t, n, e, i = 0, o = 0, u = 960, a = 500;
            return e = {
                stream: function (e) {
                    return t && n === e ? t : t = r(i, o, u, a)(n = e)
                }, extent: function (r) {
                    return arguments.length ? (i = +r[0][0], o = +r[0][1], u = +r[1][0], a = +r[1][1], t = n = null, e) : [[i, o], [u, a]]
                }
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(36);
        n.a = function (t, n, e) {
            if (null == e && (e = r.a), i = t.length) {
                if ((n = +n) <= 0 || i < 2) return +e(t[0], 0, t);
                if (n >= 1) return +e(t[i - 1], i - 1, t);
                var i, o = (i - 1) * n, u = Math.floor(o), a = +e(t[u], u, t);
                return a + (+e(t[u + 1], u + 1, t) - a) * (o - u)
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            function e(t, n) {
                var e = Object(i.u)(a - 2 * o * Object(i.t)(n)) / o;
                return [e * Object(i.t)(t *= o), c - e * Object(i.g)(t)]
            }

            var r = Object(i.t)(t), o = (r + Object(i.t)(n)) / 2;
            if (Object(i.a)(o) < i.i) return Object(u.a)(t);
            var a = 1 + r * (2 * o - r), c = Object(i.u)(a) / o;
            return e.invert = function (t, n) {
                var e = c - n;
                return [Object(i.e)(t, Object(i.a)(e)) / o * Object(i.s)(e), Object(i.c)((a - (t * t + e * e) * o * o) / (2 * o))]
            }, e
        }

        n.a = r;
        var i = e(4), o = e(69), u = e(229);
        n.b = function () {
            return Object(o.a)(r).scale(155.424).center([0, 33.6442])
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            var n = 0, e = r.o / 3, o = Object(i.b)(t), u = o(n, e);
            return u.parallels = function (t) {
                return arguments.length ? o(n = t[0] * r.r, e = t[1] * r.r) : [n * r.h, e * r.h]
            }, u
        };
        var r = e(4), i = e(17)
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            var r = n[1][0] - n[0][0], u = n[1][1] - n[0][1], a = t.clipExtent && t.clipExtent();
            t.scale(150).translate([0, 0]), null != a && t.clipExtent(null), Object(i.a)(e, t.stream(o.a));
            var c = o.a.result(), f = Math.min(r / (c[1][0] - c[0][0]), u / (c[1][1] - c[0][1])),
                s = +n[0][0] + (r - f * (c[1][0] + c[0][0])) / 2, l = +n[0][1] + (u - f * (c[1][1] + c[0][1])) / 2;
            return null != a && t.clipExtent(a), t.scale(150 * f).translate([s, l])
        }

        n.a = r, n.b = function (t, n, e) {
            return r(t, [[0, 0], n], e)
        };
        var i = e(22), o = e(124)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t, Object(o.n)(Object(o.v)((o.l + n) / 2))]
        }

        function i(t) {
            function n() {
                var n = o.o * l(), a = f(Object(u.a)(f.rotate()).invert([0, 0]));
                return p(null == v ? [[a[0] - n, a[1] - n], [a[0] + n, a[1] + n]] : t === r ? [[Math.max(a[0] - n, v), e], [Math.min(a[0] + n, i), c]] : [[v, Math.max(a[1] - n, e)], [i, Math.min(a[1] + n, c)]])
            }

            var e, i, c, f = Object(a.a)(t), s = f.center, l = f.scale, h = f.translate, p = f.clipExtent, v = null;
            return f.scale = function (t) {
                return arguments.length ? (l(t), n()) : l()
            }, f.translate = function (t) {
                return arguments.length ? (h(t), n()) : h()
            }, f.center = function (t) {
                return arguments.length ? (s(t), n()) : s()
            }, f.clipExtent = function (t) {
                return arguments.length ? (null == t ? v = e = i = c = null : (v = +t[0][0], e = +t[0][1], i = +t[1][0], c = +t[1][1]), n()) : null == v ? null : [[v, e], [i, c]]
            }, n()
        }

        n.c = r, n.b = i;
        var o = e(4), u = e(50), a = e(17);
        r.invert = function (t, n) {
            return [t, 2 * Object(o.d)(Object(o.k)(n)) - o.l]
        }, n.a = function () {
            return i(r).scale(961 / o.w)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.B)(1 - Object(o.y)(n));
            return [2 / o.E * t * e, o.E * (1 - e)]
        }

        n.a = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = (e = n / o.E - 1) * e;
            return [e > 0 ? t * Object(o.B)(o.s / e) / 2 : 0, Object(o.e)(1 - e)]
        }, n.b = function () {
            return Object(i.geoProjection)(r).scale(95.6464).center([0, 30])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return n > -a ? (t = Object(o.d)(t, n), t[1] += c, t) : Object(u.b)(t, n)
        }

        e.d(n, "b", function () {
            return a
        }), e.d(n, "d", function () {
            return c
        }), n.c = r;
        var i = e(0), o = e(21), u = e(38), a = .7109889596207567, c = .0528035274542;
        r.invert = function (t, n) {
            return n > -a ? o.d.invert(t, n - c) : u.b.invert(t, n)
        }, n.a = function () {
            return Object(i.geoProjection)(r).rotate([-20, -55]).scale(164.263).center([0, -5.4036])
        }
    }, function (t, n, e) {
        "use strict";
        var r = [[0, 90], [-90, 0], [0, 0], [90, 0], [180, 0], [0, -90]];
        n.a = [[0, 2, 1], [0, 3, 2], [5, 1, 2], [5, 2, 3], [0, 1, 4], [0, 4, 3], [5, 4, 1], [5, 3, 4]].map(function (t) {
            return t.map(function (t) {
                return r[t]
            })
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e(1);
        n.a = function (t) {
            function n(n, r) {
                var o = Object(i.a)(n) < i.o, u = t(o ? n : n > 0 ? n - i.s : n + i.s, r), a = (u[0] - u[1]) * i.C,
                    c = (u[0] + u[1]) * i.C;
                if (o) return [a, c];
                var f = e * i.C, s = a > 0 ^ c > 0 ? -1 : 1;
                return [s * a - Object(i.x)(c) * f, s * c - Object(i.x)(a) * f]
            }

            var e = t(i.o, 0)[0] - t(-i.o, 0)[0];
            return t.invert && (n.invert = function (n, r) {
                var o = (n + r) * i.C, u = (r - n) * i.C, a = Object(i.a)(o) < .5 * e && Object(i.a)(u) < .5 * e;
                if (!a) {
                    var c = e * i.C, f = o > 0 ^ u > 0 ? -1 : 1, s = -f * n + (u > 0 ? 1 : -1) * c,
                        l = -f * r + (o > 0 ? 1 : -1) * c;
                    o = (-s - l) * i.C, u = (s - l) * i.C
                }
                var h = t.invert(o, u);
                return a || (h[0] += o > 0 ? i.s : -i.s), h
            }), Object(r.geoProjection)(n).rotate([-90, -90, 45]).clipAngle(179.999)
        }
    }, function (t, n) {
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        t.exports = function (t) {
            var n = void 0 === t ? "undefined" : e(t);
            return null !== t && "object" === n || "function" === n
        }
    }, function (t, n) {
        t.exports = function (t) {
            return null === t || void 0 === t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t > f.o ? t - f.w : t < -f.o ? t + f.w : t, n]
        }

        function i(t, n, e) {
            return (t %= f.w) ? n || e ? Object(c.a)(u(t), a(n, e)) : u(t) : n || e ? a(n, e) : r
        }

        function o(t) {
            return function (n, e) {
                return n += t, [n > f.o ? n - f.w : n < -f.o ? n + f.w : n, e]
            }
        }

        function u(t) {
            var n = o(t);
            return n.invert = o(-t), n
        }

        function a(t, n) {
            function e(t, n) {
                var e = Object(f.g)(n), a = Object(f.g)(t) * e, c = Object(f.t)(t) * e, s = Object(f.t)(n),
                    l = s * r + a * i;
                return [Object(f.e)(c * o - l * u, a * r - s * i), Object(f.c)(l * o + c * u)]
            }

            var r = Object(f.g)(t), i = Object(f.t)(t), o = Object(f.g)(n), u = Object(f.t)(n);
            return e.invert = function (t, n) {
                var e = Object(f.g)(n), a = Object(f.g)(t) * e, c = Object(f.t)(t) * e, s = Object(f.t)(n),
                    l = s * o - c * u;
                return [Object(f.e)(c * o + s * u, a * r + l * i), Object(f.c)(l * r - a * i)]
            }, e
        }

        n.b = i;
        var c = e(144), f = e(5);
        r.invert = r, n.a = function (t) {
            function n(n) {
                return n = t(n[0] * f.r, n[1] * f.r), n[0] *= f.h, n[1] *= f.h, n
            }

            return t = i(t[0] * f.r, t[1] * f.r, t.length > 2 ? t[2] * f.r : 0), n.invert = function (n) {
                return n = t.invert(n[0] * f.r, n[1] * f.r), n[0] *= f.h, n[1] *= f.h, n
            }, n
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            function e(t, n) {
                var e = Object(i.u)(u - 2 * o * Object(i.t)(n)) / o;
                return [e * Object(i.t)(t *= o), a - e * Object(i.g)(t)]
            }

            var r = Object(i.t)(t), o = (r + Object(i.t)(n)) / 2, u = 1 + r * (2 * o - r), a = Object(i.u)(u) / o;
            return e.invert = function (t, n) {
                var e = a - n;
                return [Object(i.e)(t, e) / o, Object(i.c)((u - (t * t + e * e) * o * o) / (2 * o))]
            }, e
        }

        n.a = r;
        var i = e(5), o = e(80);
        n.b = function () {
            return Object(o.a)(r).scale(155.424).center([0, 33.6442])
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            var n = 0, e = r.o / 3, o = Object(i.b)(t), u = o(n, e);
            return u.parallels = function (t) {
                return arguments.length ? o(n = t[0] * r.r, e = t[1] * r.r) : [n * r.h, e * r.h]
            }, u
        };
        var r = e(5), i = e(18)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n() {
            }

            var e = n.prototype = Object.create(i.prototype);
            for (var r in t) e[r] = t[r];
            return function (t) {
                var e = new n;
                return e.stream = t, e
            }
        }

        function i() {
        }

        n.b = r, n.a = function (t) {
            return {stream: r(t)}
        }, i.prototype = {
            point: function (t, n) {
                this.stream.point(t, n)
            }, sphere: function () {
                this.stream.sphere()
            }, lineStart: function () {
                this.stream.lineStart()
            }, lineEnd: function () {
                this.stream.lineEnd()
            }, polygonStart: function () {
                this.stream.polygonStart()
            }, polygonEnd: function () {
                this.stream.polygonEnd()
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t, Object(u.n)(Object(u.v)((u.l + n) / 2))]
        }

        function i(t) {
            var n, e = Object(o.a)(t), r = e.scale, i = e.translate, a = e.clipExtent;
            return e.scale = function (t) {
                return arguments.length ? (r(t), n && e.clipExtent(null), e) : r()
            }, e.translate = function (t) {
                return arguments.length ? (i(t), n && e.clipExtent(null), e) : i()
            }, e.clipExtent = function (t) {
                if (!arguments.length) return n ? null : a();
                if (n = null == t) {
                    var o = u.o * r(), c = i();
                    t = [[c[0] - o, c[1] - o], [c[0] + o, c[1] + o]]
                }
                return a(t), e
            }, e.clipExtent(null)
        }

        n.c = r, n.b = i;
        var o = e(18), u = e(5);
        r.invert = function (t, n) {
            return [t, 2 * Object(u.d)(Object(u.k)(n)) - u.l]
        }, n.a = function () {
            return i(r).scale(961 / u.w)
        }
    }, function (t, n, e) {
        var r = e(9), i = e(11), o = Object.values ? function (t) {
            return Object.values(t)
        } : function (t) {
            var n = [];
            return r(t, function (e, r) {
                i(t) && "prototype" === r || n.push(e)
            }), n
        };
        t.exports = o
    }, function (t, n) {
        t.exports = {
            HIERARCHY: "hierarchy",
            GEO: "geo",
            HEX: "hex",
            GRAPH: "graph",
            TABLE: "table",
            GEO_GRATICULE: "geo-graticule",
            STATISTICS_METHODS: ["max", "mean", "median", "min", "mode", "product", "standardDeviation", "sum", "sumSimple", "variance"]
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return new Function("d", "return {" + t.map(function (t, n) {
                return JSON.stringify(t) + ": d[" + n + "]"
            }).join(",") + "}")
        }

        var i = {}, o = {}, u = 34, a = 10, c = 13;
        n.a = function (t) {
            function n(t, n) {
                function e() {
                    if (v) return o;
                    if (d) return d = !1, i;
                    var n, e, r = h;
                    if (t.charCodeAt(r) === u) {
                        for (; h++ < s && t.charCodeAt(h) !== u || t.charCodeAt(++h) === u;) ;
                        return (n = h) >= s ? v = !0 : (e = t.charCodeAt(h++)) === a ? d = !0 : e === c && (d = !0, t.charCodeAt(h) === a && ++h), t.slice(r + 1, n - 1).replace(/""/g, '"')
                    }
                    for (; h < s;) {
                        if ((e = t.charCodeAt(n = h++)) === a) d = !0; else if (e === c) d = !0, t.charCodeAt(h) === a && ++h; else if (e !== l) continue;
                        return t.slice(r, n)
                    }
                    return v = !0, t.slice(r, s)
                }

                var r, f = [], s = t.length, h = 0, p = 0, v = s <= 0, d = !1;
                for (t.charCodeAt(s - 1) === a && --s, t.charCodeAt(s - 1) === c && --s; (r = e()) !== o;) {
                    for (var g = []; r !== i && r !== o;) g.push(r), r = e();
                    n && null == (g = n(g, p++)) || f.push(g)
                }
                return f
            }

            function e(n) {
                return n.map(f).join(t)
            }

            function f(t) {
                return null == t ? "" : s.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
            }

            var s = new RegExp('["' + t + "\n\r]"), l = t.charCodeAt(0);
            return {
                parse: function (t, e) {
                    var i, o, u = n(t, function (t, n) {
                        if (i) return i(t, n - 1);
                        o = t, i = e ? function (t, n) {
                            var e = r(t);
                            return function (r, i) {
                                return n(e(r), i, t)
                            }
                        }(t, e) : r(t)
                    });
                    return u.columns = o || [], u
                }, parseRows: n, format: function (n, e) {
                    return null == e && (e = function (t) {
                        var n = Object.create(null), e = [];
                        return t.forEach(function (t) {
                            for (var r in t) r in n || e.push(n[r] = r)
                        }), e
                    }(n)), [e.map(f).join(t)].concat(n.map(function (n) {
                        return e.map(function (t) {
                            return f(n[t])
                        }).join(t)
                    })).join("\n")
                }, formatRows: function (t) {
                    return t.map(e).join("\n")
                }
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e, r, o, c, f, s = new a(t), l = +t.value && (s.value = t.value), h = [s];
            for (null == n && (n = i); e = h.pop();) if (l && (e.value = +e.data.value), (o = n(e.data)) && (f = o.length)) for (e.children = new Array(f), c = f - 1; c >= 0; --c) h.push(r = e.children[c] = new a(o[c])), r.parent = e, r.depth = e.depth + 1;
            return s.eachBefore(u)
        }

        function i(t) {
            return t.children
        }

        function o(t) {
            t.data = t.data.data
        }

        function u(t) {
            var n = 0;
            do {
                t.height = n
            } while ((t = t.parent) && t.height < ++n)
        }

        function a(t) {
            this.data = t, this.depth = this.height = 0, this.parent = null
        }

        n.c = r, n.b = u, n.a = a;
        var c = e(370), f = e(371), s = e(372), l = e(373), h = e(374), p = e(375), v = e(376), d = e(377), g = e(378),
            b = e(379), y = e(380);
        a.prototype = r.prototype = {
            constructor: a,
            count: c.a,
            each: f.a,
            eachAfter: l.a,
            eachBefore: s.a,
            sum: h.a,
            sort: p.a,
            path: v.a,
            ancestors: d.a,
            descendants: g.a,
            leaves: b.a,
            links: y.a,
            copy: function () {
                return r(this).eachBefore(o)
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            if ("function" != typeof t) throw new Error;
            return t
        }

        n.a = function (t) {
            return null == t ? null : r(t)
        }, n.b = r
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r, u, a) {
            for (var c, f, s, l, h, p, v, d, g, b, y, j = [], O = n.children, _ = 0, m = 0, w = O.length, x = n.value; _ < w;) {
                s = u - e, l = a - r;
                do {
                    h = O[m++].value
                } while (!h && m < w);
                for (p = v = h, y = h * h * (b = Math.max(l / s, s / l) / (x * t)), g = Math.max(v / y, y / p); m < w; ++m) {
                    if (h += f = O[m].value, f < p && (p = f), f > v && (v = f), y = h * h * b, (d = Math.max(v / y, y / p)) > g) {
                        h -= f;
                        break
                    }
                    g = d
                }
                j.push(c = {
                    value: h,
                    dice: s < l,
                    children: O.slice(_, m)
                }), c.dice ? Object(i.a)(c, e, r, u, x ? r += l * h / x : a) : Object(o.a)(c, e, r, x ? e += s * h / x : u, a), x -= h, _ = m
            }
            return j
        }

        e.d(n, "b", function () {
            return u
        }), n.c = r;
        var i = e(45), o = e(55), u = (1 + Math.sqrt(5)) / 2;
        n.a = function t(n) {
            function e(t, e, i, o, u) {
                r(n, t, e, i, o, u)
            }

            return e.ratio = function (n) {
                return t((n = +n) > 1 ? n : 1)
            }, e
        }(u)
    }, function (t, n, e) {
        "use strict";
        var r = e(165);
        n.a = function (t) {
            if (null == t) return r.a;
            var n, e, i = t.scale[0], o = t.scale[1], u = t.translate[0], a = t.translate[1];
            return function (t, r) {
                r || (n = e = 0);
                var c = 2, f = t.length, s = new Array(f);
                for (s[0] = (n += t[0]) * i + u, s[1] = (e += t[1]) * o + a; c < f;) s[c] = t[c], ++c;
                return s
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = n.id, r = n.bbox, o = null == n.properties ? {} : n.properties, u = i(t, n);
            return null == e && null == r ? {
                type: "Feature",
                properties: o,
                geometry: u
            } : null == r ? {type: "Feature", id: e, properties: o, geometry: u} : {
                type: "Feature",
                id: e,
                bbox: r,
                properties: o,
                geometry: u
            }
        }

        function i(t, n) {
            function e(t, n) {
                n.length && n.pop();
                for (var e = l[t < 0 ? ~t : t], r = 0, i = e.length; r < i; ++r) n.push(s(e[r], r));
                t < 0 && Object(o.a)(n, i)
            }

            function r(t) {
                return s(t)
            }

            function i(t) {
                for (var n = [], r = 0, i = t.length; r < i; ++r) e(t[r], n);
                return n.length < 2 && n.push(n[0]), n
            }

            function a(t) {
                for (var n = i(t); n.length < 4;) n.push(n[0]);
                return n
            }

            function c(t) {
                return t.map(a)
            }

            function f(t) {
                var n, e = t.type;
                switch (e) {
                    case"GeometryCollection":
                        return {type: e, geometries: t.geometries.map(f)};
                    case"Point":
                        n = r(t.coordinates);
                        break;
                    case"MultiPoint":
                        n = t.coordinates.map(r);
                        break;
                    case"LineString":
                        n = i(t.arcs);
                        break;
                    case"MultiLineString":
                        n = t.arcs.map(i);
                        break;
                    case"Polygon":
                        n = c(t.arcs);
                        break;
                    case"MultiPolygon":
                        n = t.arcs.map(c);
                        break;
                    default:
                        return null
                }
                return {type: e, coordinates: n}
            }

            var s = Object(u.a)(t.transform), l = t.arcs;
            return f(n)
        }

        n.b = i;
        var o = e(392), u = e(89);
        n.a = function (t, n) {
            return "GeometryCollection" === n.type ? {
                type: "FeatureCollection",
                features: n.geometries.map(function (n) {
                    return r(t, n)
                })
            } : r(t, n)
        }
    }, function (t, n) {
        t.exports = function (t) {
            return null !== t && "function" != typeof t && isFinite(t.length)
        }
    }, function (t, n) {
        function e(t) {
            return Math.abs(t) <= 1 ? .5 : 0
        }

        t.exports = {
            boxcar: e, cosine: function (t) {
                return Math.abs(t) <= 1 ? Math.PI / 4 * Math.cos(Math.PI / 2 * t) : 0
            }, epanechnikov: function (t) {
                return Math.abs(t) < 1 ? .75 * (1 - t * t) : 0
            }, gaussian: function (t) {
                return .3989422804 * Math.exp(-.5 * t * t)
            }, quartic: function (t) {
                if (Math.abs(t) < 1) {
                    var n = 1 - t * t;
                    return .9375 * n * n
                }
                return 0
            }, triangular: function (t) {
                var n = Math.abs(t);
                return n < 1 ? 1 - n : 0
            }, tricube: function (t) {
                return Math.abs(t) < 1 ? 70 / 81 * function (t) {
                    var n = 1 - Math.pow(Math.abs(t), 3);
                    return Math.pow(n, 3)
                }(t) : 0
            }, triweight: function (t) {
                if (Math.abs(t) < 1) {
                    var n = 1 - t * t;
                    return 35 / 32 * n * n * n
                }
                return 0
            }, uniform: e
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._isDirected = !c.has(t, "directed") || t.directed, this._isMultigraph = !!c.has(t, "multigraph") && t.multigraph, this._isCompound = !!c.has(t, "compound") && t.compound, this._label = void 0, this._defaultNodeLabelFn = c.constant(void 0), this._defaultEdgeLabelFn = c.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[s] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}
        }

        function i(t, n) {
            t[n] ? t[n]++ : t[n] = 1
        }

        function o(t, n) {
            --t[n] || delete t[n]
        }

        function u(t, n, e, r) {
            var i = "" + n, o = "" + e;
            if (!t && i > o) {
                var u = i;
                i = o, o = u
            }
            return i + l + o + l + (c.isUndefined(r) ? f : r)
        }

        function a(t, n) {
            return u(t, n.v, n.w, n.name)
        }

        var c = e(13);
        t.exports = r;
        var f = "\0", s = "\0", l = "";
        r.prototype._nodeCount = 0, r.prototype._edgeCount = 0, r.prototype.isDirected = function () {
            return this._isDirected
        }, r.prototype.isMultigraph = function () {
            return this._isMultigraph
        }, r.prototype.isCompound = function () {
            return this._isCompound
        }, r.prototype.setGraph = function (t) {
            return this._label = t, this
        }, r.prototype.graph = function () {
            return this._label
        }, r.prototype.setDefaultNodeLabel = function (t) {
            return c.isFunction(t) || (t = c.constant(t)), this._defaultNodeLabelFn = t, this
        }, r.prototype.nodeCount = function () {
            return this._nodeCount
        }, r.prototype.nodes = function () {
            return c.keys(this._nodes)
        }, r.prototype.sources = function () {
            var t = this;
            return c.filter(this.nodes(), function (n) {
                return c.isEmpty(t._in[n])
            })
        }, r.prototype.sinks = function () {
            var t = this;
            return c.filter(this.nodes(), function (n) {
                return c.isEmpty(t._out[n])
            })
        }, r.prototype.setNodes = function (t, n) {
            var e = arguments, r = this;
            return c.each(t, function (t) {
                e.length > 1 ? r.setNode(t, n) : r.setNode(t)
            }), this
        }, r.prototype.setNode = function (t, n) {
            return c.has(this._nodes, t) ? (arguments.length > 1 && (this._nodes[t] = n), this) : (this._nodes[t] = arguments.length > 1 ? n : this._defaultNodeLabelFn(t), this._isCompound && (this._parent[t] = s, this._children[t] = {}, this._children[s][t] = !0), this._in[t] = {}, this._preds[t] = {}, this._out[t] = {}, this._sucs[t] = {}, ++this._nodeCount, this)
        }, r.prototype.node = function (t) {
            return this._nodes[t]
        }, r.prototype.hasNode = function (t) {
            return c.has(this._nodes, t)
        }, r.prototype.removeNode = function (t) {
            var n = this;
            if (c.has(this._nodes, t)) {
                var e = function (t) {
                    n.removeEdge(n._edgeObjs[t])
                };
                delete this._nodes[t], this._isCompound && (this._removeFromParentsChildList(t), delete this._parent[t], c.each(this.children(t), function (t) {
                    n.setParent(t)
                }), delete this._children[t]), c.each(c.keys(this._in[t]), e), delete this._in[t], delete this._preds[t], c.each(c.keys(this._out[t]), e), delete this._out[t], delete this._sucs[t], --this._nodeCount
            }
            return this
        }, r.prototype.setParent = function (t, n) {
            if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
            if (c.isUndefined(n)) n = s; else {
                for (var e = n += ""; !c.isUndefined(e); e = this.parent(e)) if (e === t) throw new Error("Setting " + n + " as parent of " + t + " would create a cycle");
                this.setNode(n)
            }
            return this.setNode(t), this._removeFromParentsChildList(t), this._parent[t] = n, this._children[n][t] = !0, this
        }, r.prototype._removeFromParentsChildList = function (t) {
            delete this._children[this._parent[t]][t]
        }, r.prototype.parent = function (t) {
            if (this._isCompound) {
                var n = this._parent[t];
                if (n !== s) return n
            }
        }, r.prototype.children = function (t) {
            if (c.isUndefined(t) && (t = s), this._isCompound) {
                var n = this._children[t];
                if (n) return c.keys(n)
            } else {
                if (t === s) return this.nodes();
                if (this.hasNode(t)) return []
            }
        }, r.prototype.predecessors = function (t) {
            var n = this._preds[t];
            if (n) return c.keys(n)
        }, r.prototype.successors = function (t) {
            var n = this._sucs[t];
            if (n) return c.keys(n)
        }, r.prototype.neighbors = function (t) {
            var n = this.predecessors(t);
            if (n) return c.union(n, this.successors(t))
        }, r.prototype.isLeaf = function (t) {
            return 0 === (this.isDirected() ? this.successors(t) : this.neighbors(t)).length
        }, r.prototype.filterNodes = function (t) {
            function n(t) {
                var o = r.parent(t);
                return void 0 === o || e.hasNode(o) ? (i[t] = o, o) : o in i ? i[o] : n(o)
            }

            var e = new this.constructor({
                directed: this._isDirected,
                multigraph: this._isMultigraph,
                compound: this._isCompound
            });
            e.setGraph(this.graph());
            var r = this;
            c.each(this._nodes, function (n, r) {
                t(r) && e.setNode(r, n)
            }), c.each(this._edgeObjs, function (t) {
                e.hasNode(t.v) && e.hasNode(t.w) && e.setEdge(t, r.edge(t))
            });
            var i = {};
            return this._isCompound && c.each(e.nodes(), function (t) {
                e.setParent(t, n(t))
            }), e
        }, r.prototype.setDefaultEdgeLabel = function (t) {
            return c.isFunction(t) || (t = c.constant(t)), this._defaultEdgeLabelFn = t, this
        }, r.prototype.edgeCount = function () {
            return this._edgeCount
        }, r.prototype.edges = function () {
            return c.values(this._edgeObjs)
        }, r.prototype.setPath = function (t, n) {
            var e = this, r = arguments;
            return c.reduce(t, function (t, i) {
                return r.length > 1 ? e.setEdge(t, i, n) : e.setEdge(t, i), i
            }), this
        }, r.prototype.setEdge = function () {
            var t, n, e, r, o = !1, a = arguments[0];
            "object" == typeof a && null !== a && "v" in a ? (t = a.v, n = a.w, e = a.name, 2 === arguments.length && (r = arguments[1], o = !0)) : (t = a, n = arguments[1], e = arguments[3], arguments.length > 2 && (r = arguments[2], o = !0)), t = "" + t, n = "" + n, c.isUndefined(e) || (e = "" + e);
            var f = u(this._isDirected, t, n, e);
            if (c.has(this._edgeLabels, f)) return o && (this._edgeLabels[f] = r), this;
            if (!c.isUndefined(e) && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
            this.setNode(t), this.setNode(n), this._edgeLabels[f] = o ? r : this._defaultEdgeLabelFn(t, n, e);
            var s = function (t, n, e, r) {
                var i = "" + n, o = "" + e;
                if (!t && i > o) {
                    var u = i;
                    i = o, o = u
                }
                var a = {v: i, w: o};
                return r && (a.name = r), a
            }(this._isDirected, t, n, e);
            return t = s.v, n = s.w, Object.freeze(s), this._edgeObjs[f] = s, i(this._preds[n], t), i(this._sucs[t], n), this._in[n][f] = s, this._out[t][f] = s, this._edgeCount++, this
        }, r.prototype.edge = function (t, n, e) {
            var r = 1 === arguments.length ? a(this._isDirected, arguments[0]) : u(this._isDirected, t, n, e);
            return this._edgeLabels[r]
        }, r.prototype.hasEdge = function (t, n, e) {
            var r = 1 === arguments.length ? a(this._isDirected, arguments[0]) : u(this._isDirected, t, n, e);
            return c.has(this._edgeLabels, r)
        }, r.prototype.removeEdge = function (t, n, e) {
            var r = 1 === arguments.length ? a(this._isDirected, arguments[0]) : u(this._isDirected, t, n, e),
                i = this._edgeObjs[r];
            return i && (t = i.v, n = i.w, delete this._edgeLabels[r], delete this._edgeObjs[r], o(this._preds[n], t), o(this._sucs[t], n), delete this._in[n][r], delete this._out[t][r], this._edgeCount--), this
        }, r.prototype.inEdges = function (t, n) {
            var e = this._in[t];
            if (e) {
                var r = c.values(e);
                return n ? c.filter(r, function (t) {
                    return t.v === n
                }) : r
            }
        }, r.prototype.outEdges = function (t, n) {
            var e = this._out[t];
            if (e) {
                var r = c.values(e);
                return n ? c.filter(r, function (t) {
                    return t.w === n
                }) : r
            }
        }, r.prototype.nodeEdges = function (t, n) {
            var e = this.inEdges(t, n);
            if (e) return e.concat(this.outEdges(t, n))
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
        }

        function i(t, n) {
            var e = new r;
            if (t instanceof r) t.each(function (t, n) {
                e.set(n, t)
            }); else if (Array.isArray(t)) {
                var i, o = -1, u = t.length;
                if (null == n) for (; ++o < u;) e.set(o, t[o]); else for (; ++o < u;) e.set(n(i = t[o], o, t), i)
            } else if (t) for (var a in t) e.set(a, t[a]);
            return e
        }

        e.d(n, "b", function () {
            return o
        });
        var o = "$";
        r.prototype = i.prototype = {
            constructor: r, has: function (t) {
                return o + t in this
            }, get: function (t) {
                return this[o + t]
            }, set: function (t, n) {
                return this[o + t] = n, this
            }, remove: function (t) {
                var n = o + t;
                return n in this && delete this[n]
            }, clear: function () {
                for (var t in this) t[0] === o && delete this[t]
            }, keys: function () {
                var t = [];
                for (var n in this) n[0] === o && t.push(n.slice(1));
                return t
            }, values: function () {
                var t = [];
                for (var n in this) n[0] === o && t.push(this[n]);
                return t
            }, entries: function () {
                var t = [];
                for (var n in this) n[0] === o && t.push({key: n.slice(1), value: this[n]});
                return t
            }, size: function () {
                var t = 0;
                for (var n in this) n[0] === o && ++t;
                return t
            }, empty: function () {
                for (var t in this) if (t[0] === o) return !1;
                return !0
            }, each: function (t) {
                for (var n in this) n[0] === o && t(this[n], n.slice(1), this)
            }
        }, n.a = i
    }, function (t, n, e) {
        "use strict";
        var r = e(33), i = e(27), o = e(60), u = e(96);
        n.a = function () {
            function t(t) {
                var i, o, u, l = t.length, h = !1;
                for (null == c && (s = f(u = Object(r.path)())), i = 0; i <= l; ++i) !(i < l && a(o = t[i], i, t)) === h && ((h = !h) ? s.lineStart() : s.lineEnd()), h && s.point(+n(o, i, t), +e(o, i, t));
                if (u) return s = null, u + "" || null
            }

            var n = u.a, e = u.b, a = Object(i.a)(!0), c = null, f = o.a, s = null;
            return t.x = function (e) {
                return arguments.length ? (n = "function" == typeof e ? e : Object(i.a)(+e), t) : n
            }, t.y = function (n) {
                return arguments.length ? (e = "function" == typeof n ? n : Object(i.a)(+n), t) : e
            }, t.defined = function (n) {
                return arguments.length ? (a = "function" == typeof n ? n : Object(i.a)(!!n), t) : a
            }, t.curve = function (n) {
                return arguments.length ? (f = n, null != c && (s = f(c)), t) : f
            }, t.context = function (n) {
                return arguments.length ? (null == n ? c = s = null : s = f(c = n), t) : c
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return t[0]
        }, n.b = function (t) {
            return t[1]
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            var r = t._x1, i = t._y1, u = t._x2, a = t._y2;
            if (t._l01_a > o.f) {
                var c = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, f = 3 * t._l01_a * (t._l01_a + t._l12_a);
                r = (r * c - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / f, i = (i * c - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / f
            }
            if (t._l23_a > o.f) {
                var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, l = 3 * t._l23_a * (t._l23_a + t._l12_a);
                u = (u * s + t._x1 * t._l23_2a - n * t._l12_2a) / l, a = (a * s + t._y1 * t._l23_2a - e * t._l12_2a) / l
            }
            t._context.bezierCurveTo(r, i, u, a, t._x2, t._y2)
        }

        function i(t, n) {
            this._context = t, this._alpha = n
        }

        n.a = r;
        var o = e(46), u = e(63);
        i.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        this.point(this._x2, this._y2)
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t, i = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        r(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        (function t(n) {
            function e(t) {
                return n ? new i(t, n) : new u.a(t, 0)
            }

            return e.alpha = function (n) {
                return t(+n)
            }, e
        })(.5)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            for (var n, e = 0, r = -1, i = t.length; ++r < i;) (n = +t[r][1]) && (e += n);
            return e
        }

        n.b = r;
        var i = e(48);
        n.a = function (t) {
            var n = t.map(r);
            return Object(i.a)(t).sort(function (t, e) {
                return n[t] - n[e]
            })
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            this._ = null
        }

        function i(t, n) {
            var e = n, r = n.R, i = e.U;
            i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
        }

        function o(t, n) {
            var e = n, r = n.L, i = e.U;
            i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
        }

        function u(t) {
            for (; t.L;) t = t.L;
            return t
        }

        n.a = function (t) {
            t.U = t.C = t.L = t.R = t.P = t.N = null
        }, r.prototype = {
            constructor: r, insert: function (t, n) {
                var e, r, a;
                if (t) {
                    if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                        for (t = t.R; t.L;) t = t.L;
                        t.L = n
                    } else t.R = n;
                    e = t
                } else this._ ? (t = u(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
                for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (a = r.R) && a.C ? (e.C = a.C = !1, r.C = !0, t = r) : (t === e.R && (i(this, e), e = (t = e).U), e.C = !1, r.C = !0, o(this, r)) : (a = r.L) && a.C ? (e.C = a.C = !1, r.C = !0, t = r) : (t === e.L && (o(this, e), e = (t = e).U), e.C = !1, r.C = !0, i(this, r)), e = t.U;
                this._.C = !1
            }, remove: function (t) {
                t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                var n, e, r, a = t.U, c = t.L, f = t.R;
                if (e = c ? f ? u(f) : c : f, a ? a.L === t ? a.L = e : a.R = e : this._ = e, c && f ? (r = e.C, e.C = t.C, e.L = c, c.U = e, e !== f ? (a = e.U, e.U = t.U, t = e.R, a.L = t, e.R = f, f.U = e) : (e.U = a, a = e, t = e.R)) : (r = t.C, t = e), t && (t.U = a), !r) if (t && t.C) t.C = !1; else {
                    do {
                        if (t === this._) break;
                        if (t === a.L) {
                            if ((n = a.R).C && (n.C = !1, a.C = !0, i(this, a), n = a.R), n.L && n.L.C || n.R && n.R.C) {
                                n.R && n.R.C || (n.L.C = !1, n.C = !0, o(this, n), n = a.R), n.C = a.C, a.C = n.R.C = !1, i(this, a), t = this._;
                                break
                            }
                        } else if ((n = a.L).C && (n.C = !1, a.C = !0, o(this, a), n = a.L), n.L && n.L.C || n.R && n.R.C) {
                            n.L && n.L.C || (n.R.C = !1, n.C = !0, i(this, n), n = a.L), n.C = a.C, a.C = n.L.C = !1, o(this, a), t = this._;
                            break
                        }
                        n.C = !0, t = a, a = a.U
                    } while (!t.C);
                    t && (t.C = !1)
                }
            }
        }, n.b = r
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r) {
            t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
        }

        function i(t, n, e, r, i) {
            var o, u = t[0], a = t[1], c = u[0], f = u[1], s = 0, l = 1, h = a[0] - c, p = a[1] - f;
            if (o = n - c, h || !(o > 0)) {
                if (o /= h, h < 0) {
                    if (o < s) return;
                    o < l && (l = o)
                } else if (h > 0) {
                    if (o > l) return;
                    o > s && (s = o)
                }
                if (o = r - c, h || !(o < 0)) {
                    if (o /= h, h < 0) {
                        if (o > l) return;
                        o > s && (s = o)
                    } else if (h > 0) {
                        if (o < s) return;
                        o < l && (l = o)
                    }
                    if (o = e - f, p || !(o > 0)) {
                        if (o /= p, p < 0) {
                            if (o < s) return;
                            o < l && (l = o)
                        } else if (p > 0) {
                            if (o > l) return;
                            o > s && (s = o)
                        }
                        if (o = i - f, p || !(o < 0)) {
                            if (o /= p, p < 0) {
                                if (o > l) return;
                                o > s && (s = o)
                            } else if (p > 0) {
                                if (o < s) return;
                                o < l && (l = o)
                            }
                            return !(s > 0 || l < 1) || (s > 0 && (t[0] = [c + s * h, f + s * p]), l < 1 && (t[1] = [c + l * h, f + l * p]), !0)
                        }
                    }
                }
            }
        }

        function o(t, n, e, r, i) {
            var o = t[1];
            if (o) return !0;
            var u, a, c = t[0], f = t.left, s = t.right, l = f[0], h = f[1], p = s[0], v = s[1], d = (l + p) / 2,
                g = (h + v) / 2;
            if (v === h) {
                if (d < n || d >= r) return;
                if (l > p) {
                    if (c) {
                        if (c[1] >= i) return
                    } else c = [d, e];
                    o = [d, i]
                } else {
                    if (c) {
                        if (c[1] < e) return
                    } else c = [d, i];
                    o = [d, e]
                }
            } else if (u = (l - p) / (v - h), a = g - u * d, u < -1 || u > 1) if (l > p) {
                if (c) {
                    if (c[1] >= i) return
                } else c = [(e - a) / u, e];
                o = [(i - a) / u, i]
            } else {
                if (c) {
                    if (c[1] < e) return
                } else c = [(i - a) / u, i];
                o = [(e - a) / u, e]
            } else if (h < v) {
                if (c) {
                    if (c[0] >= r) return
                } else c = [n, u * n + a];
                o = [r, u * r + a]
            } else {
                if (c) {
                    if (c[0] < n) return
                } else c = [r, u * r + a];
                o = [n, u * n + a]
            }
            return t[0] = c, t[1] = o, !0
        }

        n.c = function (t, n, e, i) {
            var o = [null, null], a = u.e.push(o) - 1;
            return o.left = t, o.right = n, e && r(o, t, n, e), i && r(o, n, t, i), u.b[t.index].halfedges.push(a), u.b[n.index].halfedges.push(a), o
        }, n.b = function (t, n, e) {
            var r = [n, e];
            return r.left = t, r
        }, n.d = r, n.a = function (t, n, e, r) {
            for (var a, c = u.e.length; c--;) o(a = u.e[c], t, n, e, r) && i(a, t, n, e, r) && (Math.abs(a[0][0] - a[1][0]) > u.f || Math.abs(a[0][1] - a[1][1]) > u.f) || delete u.e[c]
        };
        var u = e(49)
    }, function (t, n, e) {
        var r = {compactBox: e(516), dendrogram: e(518), indented: e(520), mindmap: e(522)};
        t.exports = r
    }, function (t, n, e) {
        var r = e(194), i = ["LR", "RL", "TB", "BT", "H", "V"], o = ["LR", "RL", "H"], u = i[0];
        t.exports = function (t, n, e) {
            var a = n.direction || u;
            if (n.isHorizontal = function (t) {
                    return o.indexOf(t) > -1
                }(a), a && -1 === i.indexOf(a)) throw new TypeError("Invalid direction: " + a);
            if (a === i[0]) e(t, n); else if (a === i[1]) e(t, n), t.right2left(); else if (a === i[2]) e(t, n); else if (a === i[3]) e(t, n), t.bottom2top(); else if (a === i[4] || a === i[5]) {
                var c = r(t, n), f = c.left, s = c.right;
                e(f, n), e(s, n), n.isHorizontal ? f.right2left() : f.bottom2top(), s.translate(f.x - s.x, f.y - s.y), t.x = f.x, t.y = s.y;
                var l = t.getBoundingBox();
                n.isHorizontal ? l.top < 0 && t.translate(0, -l.top) : l.left < 0 && t.translate(-l.left, 0)
            }
            return t.translate(-(t.x + t.width / 2 + t.hgap), -(t.y + t.height / 2 + t.vgap)), t
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            y.point = o
        }

        function i() {
            u(a, c)
        }

        function o(t, n) {
            y.point = u, a = t, c = n, t *= p.r, n *= p.r, f = t, s = Object(p.g)(n = n / 2 + p.q), l = Object(p.t)(n)
        }

        function u(t, n) {
            t *= p.r, n = (n *= p.r) / 2 + p.q;
            var e = t - f, r = e >= 0 ? 1 : -1, i = r * e, o = Object(p.g)(n), u = Object(p.t)(n), a = l * u,
                c = s * o + a * Object(p.g)(i), h = a * r * Object(p.t)(i);
            g.add(Object(p.e)(h, c)), f = t, s = o, l = u
        }

        e.d(n, "a", function () {
            return g
        }), e.d(n, "b", function () {
            return y
        });
        var a, c, f, s, l, h = e(29), p = e(4), v = e(20), d = e(22), g = Object(h.a)(), b = Object(h.a)(), y = {
            point: v.a, lineStart: v.a, lineEnd: v.a, polygonStart: function () {
                g.reset(), y.lineStart = r, y.lineEnd = i
            }, polygonEnd: function () {
                var t = +g;
                b.add(t < 0 ? p.w + t : t), this.lineStart = this.lineEnd = this.point = v.a
            }, sphere: function () {
                b.add(p.w)
            }
        };
        n.c = function (t) {
            return b.reset(), Object(d.a)(t, y), 2 * b
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r, u, c) {
            if (e) {
                var f = Object(a.g)(n), s = Object(a.t)(n), l = r * e;
                null == u ? (u = n + r * a.w, c = n - l / 2) : (u = i(f, u), c = i(f, c), (r > 0 ? u < c : u > c) && (u += r * a.w));
                for (var h, p = u; r > 0 ? p > c : p < c; p -= l) h = Object(o.g)([f, -s * Object(a.g)(p), -s * Object(a.t)(p)]), t.point(h[0], h[1])
            }
        }

        function i(t, n) {
            (n = Object(o.a)(n))[0] -= t, Object(o.e)(n);
            var e = Object(a.b)(-n[1]);
            return ((-n[2] < 0 ? -e : e) + a.w - a.i) % a.w
        }

        n.a = r;
        var o = e(35), u = e(199), a = e(4), c = e(50);
        n.b = function () {
            function t() {
                var t = i.apply(this, arguments), u = o.apply(this, arguments) * a.r,
                    l = f.apply(this, arguments) * a.r;
                return n = [], e = Object(c.b)(-t[0] * a.r, -t[1] * a.r, 0).invert, r(s, u, l, 1), t = {
                    type: "Polygon",
                    coordinates: [n]
                }, n = e = null, t
            }

            var n, e, i = Object(u.a)([0, 0]), o = Object(u.a)(90), f = Object(u.a)(6), s = {
                point: function (t, r) {
                    n.push(t = e(t, r)), t[0] *= a.h, t[1] *= a.h
                }
            };
            return t.center = function (n) {
                return arguments.length ? (i = "function" == typeof n ? n : Object(u.a)([+n[0], +n[1]]), t) : i
            }, t.radius = function (n) {
                return arguments.length ? (o = "function" == typeof n ? n : Object(u.a)(+n), t) : o
            }, t.precision = function (n) {
                return arguments.length ? (f = "function" == typeof n ? n : Object(u.a)(+n), t) : f
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            function e(e, r) {
                return e = t(e, r), n(e[0], e[1])
            }

            return t.invert && n.invert && (e.invert = function (e, r) {
                return (e = n.invert(e, r)) && t.invert(e[0], e[1])
            }), e
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(20);
        n.a = function () {
            var t, n = [];
            return {
                point: function (n, e) {
                    t.push([n, e])
                }, lineStart: function () {
                    n.push(t = [])
                }, lineEnd: r.a, rejoin: function () {
                    n.length > 1 && n.push(n.pop().concat(n.shift()))
                }, result: function () {
                    var e = n;
                    return n = [], t = null, e
                }
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r) {
            this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
        }

        function i(t) {
            if (n = t.length) {
                for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
                i.n = e = t[0], e.p = i
            }
        }

        var o = e(108);
        n.a = function (t, n, e, u, a) {
            var c, f, s = [], l = [];
            if (t.forEach(function (t) {
                    if (!((n = t.length - 1) <= 0)) {
                        var n, e, i = t[0], u = t[n];
                        if (Object(o.a)(i, u)) {
                            for (a.lineStart(), c = 0; c < n; ++c) a.point((i = t[c])[0], i[1]);
                            a.lineEnd()
                        } else s.push(e = new r(i, t, null, !0)), l.push(e.o = new r(i, null, e, !1)), s.push(e = new r(u, t, null, !1)), l.push(e.o = new r(u, null, e, !0))
                    }
                }), s.length) {
                for (l.sort(n), i(s), i(l), c = 0, f = l.length; c < f; ++c) l[c].e = e = !e;
                for (var h, p, v = s[0]; ;) {
                    for (var d = v, g = !0; d.v;) if ((d = d.n) === v) return;
                    h = d.z, a.lineStart();
                    do {
                        if (d.v = d.o.v = !0, d.e) {
                            if (g) for (c = 0, f = h.length; c < f; ++c) a.point((p = h[c])[0], p[1]); else u(d.x, d.n.x, 1, a);
                            d = d.n
                        } else {
                            if (g) for (h = d.p.z, c = h.length - 1; c >= 0; --c) a.point((p = h[c])[0], p[1]); else u(d.x, d.p.x, -1, a);
                            d = d.p
                        }
                        h = (d = d.o).z, g = !g
                    } while (!d.v);
                    a.lineEnd()
                }
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(4);
        n.a = function (t, n) {
            return Object(r.a)(t[0] - n[0]) < r.i && Object(r.a)(t[1] - n[1]) < r.i
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return u
        }), e.d(n, "a", function () {
            return a
        });
        var r = e(30), i = e(110), o = Object(i.a)(r.a), u = o.right, a = o.left;
        n.c = u
    }, function (t, n, e) {
        "use strict";
        var r = e(30);
        n.a = function (t) {
            return 1 === t.length && (t = function (t) {
                return function (n, e) {
                    return Object(r.a)(t(n), e)
                }
            }(t)), {
                left: function (n, e, r, i) {
                    for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                        var o = r + i >>> 1;
                        t(n[o], e) < 0 ? r = o + 1 : i = o
                    }
                    return r
                }, right: function (n, e, r, i) {
                    for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                        var o = r + i >>> 1;
                        t(n[o], e) > 0 ? i = o : r = o + 1
                    }
                    return r
                }
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t, n]
        }

        n.b = r, n.a = function (t, n) {
            null == n && (n = r);
            for (var e = 0, i = t.length - 1, o = t[0], u = new Array(i < 0 ? 0 : i); e < i;) u[e] = n(o, o = t[++e]);
            return u
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(113);
        n.a = function (t, n) {
            var e = Object(r.a)(t, n);
            return e ? Math.sqrt(e) : e
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(36);
        n.a = function (t, n) {
            var e, i, o = t.length, u = 0, a = -1, c = 0, f = 0;
            if (null == n) for (; ++a < o;) isNaN(e = Object(r.a)(t[a])) || (f += (i = e - c) * (e - (c += i / ++u))); else for (; ++a < o;) isNaN(e = Object(r.a)(n(t[a], a, t))) || (f += (i = e - c) * (e - (c += i / ++u)));
            if (u > 1) return f / (u - 1)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            var e, r, i, o = t.length, u = -1;
            if (null == n) {
                for (; ++u < o;) if (null != (e = t[u]) && e >= e) for (r = i = e; ++u < o;) null != (e = t[u]) && (r > e && (r = e), i < e && (i = e))
            } else for (; ++u < o;) if (null != (e = n(t[u], u, t)) && e >= e) for (r = i = e; ++u < o;) null != (e = n(t[u], u, t)) && (r > e && (r = e), i < e && (i = e));
            return [r, i]
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return i
        }), e.d(n, "a", function () {
            return o
        });
        var r = Array.prototype, i = r.slice, o = r.map
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n, e) {
            t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
            for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;
            return o
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            var r = (n - t) / Math.max(0, e), a = Math.floor(Math.log(r) / Math.LN10), c = r / Math.pow(10, a);
            return a >= 0 ? (c >= i ? 10 : c >= o ? 5 : c >= u ? 2 : 1) * Math.pow(10, a) : -Math.pow(10, -a) / (c >= i ? 10 : c >= o ? 5 : c >= u ? 2 : 1)
        }

        n.b = r, n.c = function (t, n, e) {
            var r = Math.abs(n - t) / Math.max(0, e), a = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), c = r / a;
            return c >= i ? a *= 10 : c >= o ? a *= 5 : c >= u && (a *= 2), n < t ? -a : a
        };
        var i = Math.sqrt(50), o = Math.sqrt(10), u = Math.sqrt(2);
        n.a = function (t, n, e) {
            var i, o, u, a, c = -1;
            if (n = +n, t = +t, e = +e, t === n && e > 0) return [t];
            if ((i = n < t) && (o = t, t = n, n = o), 0 === (a = r(t, n, e)) || !isFinite(a)) return [];
            if (a > 0) for (t = Math.ceil(t / a), n = Math.floor(n / a), u = new Array(o = Math.ceil(n - t + 1)); ++c < o;) u[c] = (t + c) * a; else for (t = Math.floor(t * a), n = Math.ceil(n * a), u = new Array(o = Math.ceil(t - n + 1)); ++c < o;) u[c] = (t - c) / a;
            return i && u.reverse(), u
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return Math.ceil(Math.log(t.length) / Math.LN2) + 1
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            var e, r, i = t.length, o = -1;
            if (null == n) {
                for (; ++o < i;) if (null != (e = t[o]) && e >= e) for (r = e; ++o < i;) null != (e = t[o]) && r > e && (r = e)
            } else for (; ++o < i;) if (null != (e = n(t[o], o, t)) && e >= e) for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && r > e && (r = e);
            return r
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t.length
        }

        var i = e(119);
        n.a = function (t) {
            if (!(u = t.length)) return [];
            for (var n = -1, e = Object(i.a)(t, r), o = new Array(e); ++n < e;) for (var u, a = -1, c = o[n] = new Array(u); ++a < u;) c[a] = t[a][n];
            return o
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(29), i = e(35), o = e(4), u = Object(r.a)();
        n.a = function (t, n) {
            var e = n[0], r = n[1], a = [Object(o.t)(e), -Object(o.g)(e), 0], c = 0, f = 0;
            u.reset();
            for (var s = 0, l = t.length; s < l; ++s) if (p = (h = t[s]).length) for (var h, p, v = h[p - 1], d = v[0], g = v[1] / 2 + o.q, b = Object(o.t)(g), y = Object(o.g)(g), j = 0; j < p; ++j, d = _, b = w, y = x, v = O) {
                var O = h[j], _ = O[0], m = O[1] / 2 + o.q, w = Object(o.t)(m), x = Object(o.g)(m), E = _ - d,
                    M = E >= 0 ? 1 : -1, T = M * E, S = T > o.o, k = b * w;
                if (u.add(Object(o.e)(k * M * Object(o.t)(T), y * x + k * Object(o.g)(T))), c += S ? E + M * o.w : E, S ^ d >= e ^ _ >= e) {
                    var C = Object(i.c)(Object(i.a)(v), Object(i.a)(O));
                    Object(i.e)(C);
                    var P = Object(i.c)(a, C);
                    Object(i.e)(P);
                    var N = (S ^ E >= 0 ? -1 : 1) * Object(o.c)(P[2]);
                    (r > N || r === N && (C[0] || C[1])) && (f += S ^ E >= 0 ? 1 : -1)
                }
            }
            return (c < -o.i || c < o.i && u < -o.i) ^ 1 & f
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(123), i = [null, null], o = {type: "LineString", coordinates: i};
        n.a = function (t, n) {
            return i[0] = t, i[1] = n, Object(r.a)(o)
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            v.point = v.lineEnd = l.a
        }

        function i(t, n) {
            t *= s.r, n *= s.r, u = t, a = Object(s.t)(n), c = Object(s.g)(n), v.point = o
        }

        function o(t, n) {
            t *= s.r, n *= s.r;
            var e = Object(s.t)(n), r = Object(s.g)(n), i = Object(s.a)(t - u), o = Object(s.g)(i),
                f = r * Object(s.t)(i), l = c * e - a * r * o, h = a * e + c * r * o;
            p.add(Object(s.e)(Object(s.u)(f * f + l * l), h)), u = t, a = e, c = r
        }

        var u, a, c, f = e(29), s = e(4), l = e(20), h = e(22), p = Object(f.a)(), v = {
            sphere: l.a, point: l.a, lineStart: function () {
                v.point = i, v.lineEnd = r
            }, lineEnd: l.a, polygonStart: l.a, polygonEnd: l.a
        };
        n.a = function (t) {
            return p.reset(), Object(h.a)(t, v), +p
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(20), i = 1 / 0, o = i, u = -i, a = u, c = {
            point: function (t, n) {
                t < i && (i = t), t > u && (u = t), n < o && (o = n), n > a && (a = n)
            }, lineStart: r.a, lineEnd: r.a, polygonStart: r.a, polygonEnd: r.a, result: function () {
                var t = [[i, o], [u, a]];
                return u = a = -(o = i = 1 / 0), t
            }
        };
        n.a = c
    }, function (t, n, e) {
        "use strict";
        var r = e(68);
        n.a = function () {
            return Object(r.b)().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t.length > 1
        }

        function i(t, n) {
            return ((t = t.x)[0] < 0 ? t[1] - a.l - a.i : a.l - t[1]) - ((n = n.x)[0] < 0 ? n[1] - a.l - a.i : a.l - n[1])
        }

        var o = e(106), u = e(107), a = e(4), c = e(121), f = e(14);
        n.a = function (t, n, e, a) {
            return function (s, l) {
                function h(n, e) {
                    var r = s(n, e);
                    t(n = r[0], e = r[1]) && l.point(n, e)
                }

                function p(t, n) {
                    var e = s(t, n);
                    m.point(e[0], e[1])
                }

                function v() {
                    T.point = p, m.lineStart()
                }

                function d() {
                    T.point = h, m.lineEnd()
                }

                function g(t, n) {
                    _.push([t, n]);
                    var e = s(t, n);
                    E.point(e[0], e[1])
                }

                function b() {
                    E.lineStart(), _ = []
                }

                function y() {
                    g(_[0][0], _[0][1]), E.lineEnd();
                    var t, n, e, i, o = E.clean(), u = x.result(), a = u.length;
                    if (_.pop(), j.push(_), _ = null, a) if (1 & o) {
                        if (e = u[0], (n = e.length - 1) > 0) {
                            for (M || (l.polygonStart(), M = !0), l.lineStart(), t = 0; t < n; ++t) l.point((i = e[t])[0], i[1]);
                            l.lineEnd()
                        }
                    } else a > 1 && 2 & o && u.push(u.pop().concat(u.shift())), O.push(u.filter(r))
                }

                var j, O, _, m = n(l), w = s.invert(a[0], a[1]), x = Object(o.a)(), E = n(x), M = !1, T = {
                    point: h, lineStart: v, lineEnd: d, polygonStart: function () {
                        T.point = g, T.lineStart = b, T.lineEnd = y, O = [], j = []
                    }, polygonEnd: function () {
                        T.point = h, T.lineStart = v, T.lineEnd = d, O = Object(f.merge)(O);
                        var t = Object(c.a)(j, w);
                        O.length ? (M || (l.polygonStart(), M = !0), Object(u.a)(O, i, t, e, l)) : t && (M || (l.polygonStart(), M = !0), l.lineStart(), e(null, null, 1, l), l.lineEnd()), M && (l.polygonEnd(), M = !1), O = j = null
                    }, sphere: function () {
                        l.polygonStart(), l.lineStart(), e(null, null, 1, l), l.lineEnd(), l.polygonEnd()
                    }
                };
                return T
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t, n]
        }

        n.b = r;
        var i = e(17);
        r.invert = r, n.a = function () {
            return Object(i.a)(r).scale(152.63)
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(240);
        e.d(n, "geoAiry", function () {
            return r.b
        }), e.d(n, "geoAiryRaw", function () {
            return r.a
        });
        var i = e(129);
        e.d(n, "geoAitoff", function () {
            return i.b
        }), e.d(n, "geoAitoffRaw", function () {
            return i.a
        });
        var o = e(241);
        e.d(n, "geoArmadillo", function () {
            return o.b
        }), e.d(n, "geoArmadilloRaw", function () {
            return o.a
        });
        var u = e(130);
        e.d(n, "geoAugust", function () {
            return u.b
        }), e.d(n, "geoAugustRaw", function () {
            return u.a
        });
        var a = e(242);
        e.d(n, "geoBaker", function () {
            return a.b
        }), e.d(n, "geoBakerRaw", function () {
            return a.a
        });
        var c = e(243);
        e.d(n, "geoBerghaus", function () {
            return c.b
        }), e.d(n, "geoBerghausRaw", function () {
            return c.a
        });
        var f = e(131);
        e.d(n, "geoBoggs", function () {
            return f.b
        }), e.d(n, "geoBoggsRaw", function () {
            return f.a
        });
        var s = e(244);
        e.d(n, "geoBonne", function () {
            return s.b
        }), e.d(n, "geoBonneRaw", function () {
            return s.a
        });
        var l = e(245);
        e.d(n, "geoBottomley", function () {
            return l.b
        }), e.d(n, "geoBottomleyRaw", function () {
            return l.a
        });
        var h = e(246);
        e.d(n, "geoBromley", function () {
            return h.b
        }), e.d(n, "geoBromleyRaw", function () {
            return h.a
        });
        var p = e(247);
        e.d(n, "geoChamberlin", function () {
            return p.c
        }), e.d(n, "geoChamberlinRaw", function () {
            return p.b
        }), e.d(n, "geoChamberlinAfrica", function () {
            return p.a
        });
        var v = e(72);
        e.d(n, "geoCollignon", function () {
            return v.b
        }), e.d(n, "geoCollignonRaw", function () {
            return v.a
        });
        var d = e(248);
        e.d(n, "geoCraig", function () {
            return d.b
        }), e.d(n, "geoCraigRaw", function () {
            return d.a
        });
        var g = e(249);
        e.d(n, "geoCraster", function () {
            return g.b
        }), e.d(n, "geoCrasterRaw", function () {
            return g.a
        });
        var b = e(132);
        e.d(n, "geoCylindricalEqualArea", function () {
            return b.b
        }), e.d(n, "geoCylindricalEqualAreaRaw", function () {
            return b.a
        });
        var y = e(250);
        e.d(n, "geoCylindricalStereographic", function () {
            return y.b
        }), e.d(n, "geoCylindricalStereographicRaw", function () {
            return y.a
        });
        var j = e(251);
        e.d(n, "geoEckert1", function () {
            return j.a
        }), e.d(n, "geoEckert1Raw", function () {
            return j.b
        });
        var O = e(252);
        e.d(n, "geoEckert2", function () {
            return O.a
        }), e.d(n, "geoEckert2Raw", function () {
            return O.b
        });
        var _ = e(253);
        e.d(n, "geoEckert3", function () {
            return _.a
        }), e.d(n, "geoEckert3Raw", function () {
            return _.b
        });
        var m = e(254);
        e.d(n, "geoEckert4", function () {
            return m.a
        }), e.d(n, "geoEckert4Raw", function () {
            return m.b
        });
        var w = e(255);
        e.d(n, "geoEckert5", function () {
            return w.a
        }), e.d(n, "geoEckert5Raw", function () {
            return w.b
        });
        var x = e(256);
        e.d(n, "geoEckert6", function () {
            return x.a
        }), e.d(n, "geoEckert6Raw", function () {
            return x.b
        });
        var E = e(257);
        e.d(n, "geoEisenlohr", function () {
            return E.a
        }), e.d(n, "geoEisenlohrRaw", function () {
            return E.b
        });
        var M = e(258);
        e.d(n, "geoFahey", function () {
            return M.a
        }), e.d(n, "geoFaheyRaw", function () {
            return M.b
        });
        var T = e(259);
        e.d(n, "geoFoucaut", function () {
            return T.a
        }), e.d(n, "geoFoucautRaw", function () {
            return T.b
        });
        var S = e(260);
        e.d(n, "geoGilbert", function () {
            return S.a
        });
        var k = e(261);
        e.d(n, "geoGingery", function () {
            return k.a
        }), e.d(n, "geoGingeryRaw", function () {
            return k.b
        });
        var C = e(262);
        e.d(n, "geoGinzburg4", function () {
            return C.a
        }), e.d(n, "geoGinzburg4Raw", function () {
            return C.b
        });
        var P = e(263);
        e.d(n, "geoGinzburg5", function () {
            return P.a
        }), e.d(n, "geoGinzburg5Raw", function () {
            return P.b
        });
        var N = e(264);
        e.d(n, "geoGinzburg6", function () {
            return N.a
        }), e.d(n, "geoGinzburg6Raw", function () {
            return N.b
        });
        var R = e(265);
        e.d(n, "geoGinzburg8", function () {
            return R.a
        }), e.d(n, "geoGinzburg8Raw", function () {
            return R.b
        });
        var B = e(266);
        e.d(n, "geoGinzburg9", function () {
            return B.a
        }), e.d(n, "geoGinzburg9Raw", function () {
            return B.b
        });
        var A = e(133);
        e.d(n, "geoGringorten", function () {
            return A.a
        }), e.d(n, "geoGringortenRaw", function () {
            return A.b
        });
        var I = e(135);
        e.d(n, "geoGuyou", function () {
            return I.a
        }), e.d(n, "geoGuyouRaw", function () {
            return I.b
        });
        var L = e(268);
        e.d(n, "geoHammer", function () {
            return L.a
        }), e.d(n, "geoHammerRaw", function () {
            return L.b
        });
        var z = e(269);
        e.d(n, "geoHammerRetroazimuthal", function () {
            return z.a
        }), e.d(n, "geoHammerRetroazimuthalRaw", function () {
            return z.b
        });
        var q = e(270);
        e.d(n, "geoHealpix", function () {
            return q.a
        }), e.d(n, "geoHealpixRaw", function () {
            return q.b
        });
        var F = e(271);
        e.d(n, "geoHill", function () {
            return F.a
        }), e.d(n, "geoHillRaw", function () {
            return F.b
        });
        var D = e(136);
        e.d(n, "geoHomolosine", function () {
            return D.a
        }), e.d(n, "geoHomolosineRaw", function () {
            return D.b
        });
        var G = e(23);
        e.d(n, "geoInterrupt", function () {
            return G.a
        });
        var H = e(272);
        e.d(n, "geoInterruptedBoggs", function () {
            return H.a
        });
        var U = e(273);
        e.d(n, "geoInterruptedHomolosine", function () {
            return U.a
        });
        var V = e(274);
        e.d(n, "geoInterruptedMollweide", function () {
            return V.a
        });
        var W = e(275);
        e.d(n, "geoInterruptedMollweideHemispheres", function () {
            return W.a
        });
        var Y = e(276);
        e.d(n, "geoInterruptedSinuMollweide", function () {
            return Y.a
        });
        var $ = e(277);
        e.d(n, "geoInterruptedSinusoidal", function () {
            return $.a
        });
        var J = e(278);
        e.d(n, "geoKavrayskiy7", function () {
            return J.a
        }), e.d(n, "geoKavrayskiy7Raw", function () {
            return J.b
        });
        var K = e(279);
        e.d(n, "geoLagrange", function () {
            return K.a
        }), e.d(n, "geoLagrangeRaw", function () {
            return K.b
        });
        var X = e(280);
        e.d(n, "geoLarrivee", function () {
            return X.a
        }), e.d(n, "geoLarriveeRaw", function () {
            return X.b
        });
        var Z = e(281);
        e.d(n, "geoLaskowski", function () {
            return Z.a
        }), e.d(n, "geoLaskowskiRaw", function () {
            return Z.b
        });
        var Q = e(282);
        e.d(n, "geoLittrow", function () {
            return Q.a
        }), e.d(n, "geoLittrowRaw", function () {
            return Q.b
        });
        var tt = e(283);
        e.d(n, "geoLoximuthal", function () {
            return tt.a
        }), e.d(n, "geoLoximuthalRaw", function () {
            return tt.b
        });
        var nt = e(284);
        e.d(n, "geoMiller", function () {
            return nt.a
        }), e.d(n, "geoMillerRaw", function () {
            return nt.b
        });
        var et = e(285);
        e.d(n, "geoModifiedStereographic", function () {
            return et.a
        }), e.d(n, "geoModifiedStereographicRaw", function () {
            return et.g
        }), e.d(n, "geoModifiedStereographicAlaska", function () {
            return et.b
        }), e.d(n, "geoModifiedStereographicGs48", function () {
            return et.c
        }), e.d(n, "geoModifiedStereographicGs50", function () {
            return et.d
        }), e.d(n, "geoModifiedStereographicMiller", function () {
            return et.f
        }), e.d(n, "geoModifiedStereographicLee", function () {
            return et.e
        });
        var rt = e(21);
        e.d(n, "geoMollweide", function () {
            return rt.a
        }), e.d(n, "geoMollweideRaw", function () {
            return rt.d
        });
        var it = e(286);
        e.d(n, "geoMtFlatPolarParabolic", function () {
            return it.a
        }), e.d(n, "geoMtFlatPolarParabolicRaw", function () {
            return it.b
        });
        var ot = e(287);
        e.d(n, "geoMtFlatPolarQuartic", function () {
            return ot.a
        }), e.d(n, "geoMtFlatPolarQuarticRaw", function () {
            return ot.b
        });
        var ut = e(288);
        e.d(n, "geoMtFlatPolarSinusoidal", function () {
            return ut.a
        }), e.d(n, "geoMtFlatPolarSinusoidalRaw", function () {
            return ut.b
        });
        var at = e(289);
        e.d(n, "geoNaturalEarth", function () {
            return at.a
        }), e.d(n, "geoNaturalEarthRaw", function () {
            return at.b
        });
        var ct = e(290);
        e.d(n, "geoNaturalEarth2", function () {
            return ct.a
        }), e.d(n, "geoNaturalEarth2Raw", function () {
            return ct.b
        });
        var ft = e(291);
        e.d(n, "geoNellHammer", function () {
            return ft.a
        }), e.d(n, "geoNellHammerRaw", function () {
            return ft.b
        });
        var st = e(292);
        e.d(n, "geoPatterson", function () {
            return st.a
        }), e.d(n, "geoPattersonRaw", function () {
            return st.b
        });
        var lt = e(293);
        e.d(n, "geoPolyconic", function () {
            return lt.a
        }), e.d(n, "geoPolyconicRaw", function () {
            return lt.b
        });
        var ht = e(53);
        e.d(n, "geoPolyhedral", function () {
            return ht.a
        });
        var pt = e(295);
        e.d(n, "geoPolyhedralButterfly", function () {
            return pt.a
        });
        var vt = e(296);
        e.d(n, "geoPolyhedralCollignon", function () {
            return vt.a
        });
        var dt = e(297);
        e.d(n, "geoPolyhedralWaterman", function () {
            return dt.a
        });
        var gt = e(298);
        e.d(n, "geoProject", function () {
            return gt.a
        });
        var bt = e(302);
        e.d(n, "geoGringortenQuincuncial", function () {
            return bt.a
        });
        var yt = e(137);
        e.d(n, "geoPeirceQuincuncial", function () {
            return yt.a
        }), e.d(n, "geoPierceQuincuncial", function () {
            return yt.a
        });
        var jt = e(303);
        e.d(n, "geoQuantize", function () {
            return jt.a
        });
        var Ot = e(75);
        e.d(n, "geoQuincuncial", function () {
            return Ot.a
        });
        var _t = e(304);
        e.d(n, "geoRectangularPolyconic", function () {
            return _t.a
        }), e.d(n, "geoRectangularPolyconicRaw", function () {
            return _t.b
        });
        var mt = e(305);
        e.d(n, "geoRobinson", function () {
            return mt.a
        }), e.d(n, "geoRobinsonRaw", function () {
            return mt.b
        });
        var wt = e(306);
        e.d(n, "geoSatellite", function () {
            return wt.a
        }), e.d(n, "geoSatelliteRaw", function () {
            return wt.b
        });
        var xt = e(73);
        e.d(n, "geoSinuMollweide", function () {
            return xt.a
        }), e.d(n, "geoSinuMollweideRaw", function () {
            return xt.c
        });
        var Et = e(38);
        e.d(n, "geoSinusoidal", function () {
            return Et.a
        }), e.d(n, "geoSinusoidalRaw", function () {
            return Et.b
        });
        var Mt = e(307);
        e.d(n, "geoStitch", function () {
            return Mt.a
        });
        var Tt = e(308);
        e.d(n, "geoTimes", function () {
            return Tt.a
        }), e.d(n, "geoTimesRaw", function () {
            return Tt.b
        });
        var St = e(309);
        e.d(n, "geoTwoPointAzimuthal", function () {
            return St.a
        }), e.d(n, "geoTwoPointAzimuthalRaw", function () {
            return St.b
        }), e.d(n, "geoTwoPointAzimuthalUsa", function () {
            return St.c
        });
        var kt = e(310);
        e.d(n, "geoTwoPointEquidistant", function () {
            return kt.a
        }), e.d(n, "geoTwoPointEquidistantRaw", function () {
            return kt.b
        }), e.d(n, "geoTwoPointEquidistantUsa", function () {
            return kt.c
        });
        var Ct = e(311);
        e.d(n, "geoVanDerGrinten", function () {
            return Ct.a
        }), e.d(n, "geoVanDerGrintenRaw", function () {
            return Ct.b
        });
        var Pt = e(312);
        e.d(n, "geoVanDerGrinten2", function () {
            return Pt.a
        }), e.d(n, "geoVanDerGrinten2Raw", function () {
            return Pt.b
        });
        var Nt = e(313);
        e.d(n, "geoVanDerGrinten3", function () {
            return Nt.a
        }), e.d(n, "geoVanDerGrinten3Raw", function () {
            return Nt.b
        });
        var Rt = e(314);
        e.d(n, "geoVanDerGrinten4", function () {
            return Rt.a
        }), e.d(n, "geoVanDerGrinten4Raw", function () {
            return Rt.b
        });
        var Bt = e(315);
        e.d(n, "geoWagner4", function () {
            return Bt.a
        }), e.d(n, "geoWagner4Raw", function () {
            return Bt.b
        });
        var At = e(316);
        e.d(n, "geoWagner6", function () {
            return At.a
        }), e.d(n, "geoWagner6Raw", function () {
            return At.b
        });
        var It = e(317);
        e.d(n, "geoWagner7", function () {
            return It.a
        }), e.d(n, "geoWagner7Raw", function () {
            return It.b
        });
        var Lt = e(318);
        e.d(n, "geoWiechel", function () {
            return Lt.a
        }), e.d(n, "geoWiechelRaw", function () {
            return Lt.b
        });
        var zt = e(319);
        e.d(n, "geoWinkel3", function () {
            return zt.a
        }), e.d(n, "geoWinkel3Raw", function () {
            return zt.b
        })
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.h)(n), r = Object(o.z)(Object(o.b)(e * Object(o.h)(t /= 2)));
            return [2 * e * Object(o.y)(t) * r, Object(o.y)(n) * r]
        }

        n.a = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            if (!(t * t + 4 * n * n > o.s * o.s + o.k)) {
                var e = t, r = n, i = 25;
                do {
                    var u, a = Object(o.y)(e), c = Object(o.y)(e / 2), f = Object(o.h)(e / 2), s = Object(o.y)(r),
                        l = Object(o.h)(r), h = Object(o.y)(2 * r), p = s * s, v = l * l, d = c * c, g = 1 - v * f * f,
                        b = g ? Object(o.b)(l * f) * Object(o.B)(u = 1 / g) : u = 0, y = 2 * b * l * c - t,
                        j = b * s - n, O = u * (v * d + b * l * f * p), _ = u * (.5 * a * h - 2 * b * s * c),
                        m = .25 * u * (h * c - b * s * v * a), w = u * (p * f + b * d * l), x = _ * m - w * O;
                    if (!x) break;
                    var E = (j * _ - y * w) / x, M = (y * m - j * O) / x;
                    e -= E, r -= M
                } while ((Object(o.a)(E) > o.k || Object(o.a)(M) > o.k) && --i > 0);
                return [e, r]
            }
        }, n.b = function () {
            return Object(i.geoProjection)(r).scale(152.63)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.F)(n / 2), r = Object(o.B)(1 - e * e), i = 1 + r * Object(o.h)(t /= 2),
                u = Object(o.y)(t) * r / i, a = e / i, c = u * u, f = a * a;
            return [4 / 3 * u * (3 + c - 3 * f), 4 / 3 * a * (3 + 3 * c - f)]
        }

        n.a = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            if (t *= 3 / 8, n *= 3 / 8, !t && Object(o.a)(n) > 1) return null;
            var e = 1 + t * t + n * n, r = Object(o.B)((e - Object(o.B)(e * e - 4 * n * n)) / 2),
                i = Object(o.e)(r) / 3, u = r ? Object(o.c)(Object(o.a)(n / r)) / 3 : Object(o.d)(Object(o.a)(t)) / 3,
                a = Object(o.h)(i), c = Object(o.i)(u), f = c * c - a * a;
            return [2 * Object(o.x)(t) * Object(o.g)(Object(o.A)(u) * a, .25 - f), 2 * Object(o.x)(n) * Object(o.g)(c * Object(o.y)(i), .25 + f)]
        }, n.b = function () {
            return Object(i.geoProjection)(r).scale(66.1603)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.c)(u.s, n);
            return [a * t / (1 / Object(u.h)(n) + c / Object(u.h)(e)), (n + u.D * Object(u.y)(e)) / a]
        }

        n.a = r;
        var i = e(0), o = e(21), u = e(1), a = 2.00276, c = 1.11072;
        r.invert = function (t, n) {
            var e, r, i = a * n, o = n < 0 ? -u.u : u.u, f = 25;
            do {
                r = i - u.D * Object(u.y)(o), o -= e = (Object(u.y)(2 * o) + 2 * o - u.s * Object(u.y)(r)) / (2 * Object(u.h)(2 * o) + 2 + u.s * Object(u.h)(r) * u.D * Object(u.h)(o))
            } while (Object(u.a)(e) > u.k && --f > 0);
            return r = i - u.D * Object(u.y)(o), [t * (1 / Object(u.h)(r) + c / Object(u.h)(o)) / a, r]
        }, n.b = function () {
            return Object(i.geoProjection)(r).scale(160.857)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(t, n) {
                return [t * e, Object(i.y)(n) / e]
            }

            var e = Object(i.h)(t);
            return n.invert = function (t, n) {
                return [t / e, Object(i.e)(n * e)]
            }, n
        }

        n.a = r;
        var i = e(1), o = e(31);
        n.b = function () {
            return Object(o.a)(r).parallel(38.58).scale(195.044)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.x)(t), r = Object(o.x)(n), i = Object(o.h)(n), u = Object(o.h)(t) * i,
                a = Object(o.y)(t) * i, c = Object(o.y)(r * n);
            t = Object(o.a)(Object(o.g)(a, c)), n = Object(o.e)(u), Object(o.a)(t - o.o) > o.k && (t %= o.o);
            var f = function (t, n) {
                if (n === o.o) return [0, 0];
                var e, r, i = Object(o.y)(n), u = i * i, a = u * u, c = 1 + a, f = 1 + 3 * a, s = 1 - a,
                    l = Object(o.e)(1 / Object(o.B)(c)), h = s + u * c * l, p = (1 - i) / h, v = Object(o.B)(p),
                    d = p * c, g = Object(o.B)(d), b = v * s;
                if (0 === t) return [0, -(b + u * g)];
                var y, j = Object(o.h)(n), O = 1 / j, _ = 2 * i * j,
                    m = (-h * j - (-3 * u + l * f) * _ * (1 - i)) / (h * h), w = -O * _,
                    x = -O * (u * c * m + p * f * _), E = -2 * O * (s * (.5 * m / v) - 2 * u * v * _), M = 4 * t / o.s;
                if (t > .222 * o.s || n < o.s / 4 && t > .175 * o.s) {
                    if (e = (b + u * Object(o.B)(d * (1 + a) - b * b)) / (1 + a), t > o.s / 4) return [e, e];
                    var T = e, S = .5 * e;
                    e = .5 * (S + T), r = 50;
                    do {
                        var k = Object(o.B)(d - e * e), C = e * (E + w * k) + x * Object(o.e)(e / g) - M;
                        if (!C) break;
                        C < 0 ? S = e : T = e, e = .5 * (S + T)
                    } while (Object(o.a)(T - S) > o.k && --r > 0)
                } else {
                    e = o.k, r = 25;
                    do {
                        var P = e * e, N = Object(o.B)(d - P), R = E + w * N, B = e * R + x * Object(o.e)(e / g) - M;
                        e -= y = N ? B / (R + (x - w * P) / N) : 0
                    } while (Object(o.a)(y) > o.k && --r > 0)
                }
                return [e, -b - u * Object(o.B)(d - e * e)]
            }(t > o.s / 4 ? o.o - t : t, n);
            return t > o.s / 4 && (c = f[0], f[0] = -f[1], f[1] = -c), f[0] *= e, f[1] *= -r, f
        }

        n.b = r;
        var i = e(0), o = e(1), u = e(134);
        r.invert = function (t, n) {
            Object(o.a)(t) > 1 && (t = 2 * Object(o.x)(t) - t), Object(o.a)(n) > 1 && (n = 2 * Object(o.x)(n) - n);
            var e = Object(o.x)(t), r = Object(o.x)(n), i = -e * t, u = -r * n, a = u / i < 1, c = function (t, n) {
                for (var e = 0, r = 1, i = .5, u = 50; ;) {
                    var a = i * i, c = Object(o.B)(i), f = Object(o.e)(1 / Object(o.B)(1 + a)),
                        s = 1 - a + i * (1 + a) * f, l = (1 - c) / s, h = Object(o.B)(l), p = l * (1 + a),
                        v = h * (1 - a), d = p - t * t, g = Object(o.B)(d), b = n + v + i * g;
                    if (Object(o.a)(r - e) < o.l || 0 == --u || 0 === b) break;
                    b > 0 ? e = i : r = i, i = .5 * (e + r)
                }
                if (!u) return null;
                var y = Object(o.e)(c), j = Object(o.h)(y), O = 1 / j, _ = 2 * c * j,
                    m = (-s * j - (-3 * i + f * (1 + 3 * a)) * _ * (1 - c)) / (s * s),
                    w = -2 * O * (.5 * m / h * (1 - a) - 2 * i * h * _), x = -O * _,
                    E = -O * (i * (1 + a) * m + l * (1 + 3 * a) * _);
                return [o.s / 4 * (t * (w + x * g) + E * Object(o.e)(t / Object(o.B)(p))), y]
            }(a ? u : i, a ? i : u), f = c[0], s = c[1], l = Object(o.h)(s);
            return a && (f = -o.o - f), [e * (Object(o.g)(Object(o.y)(f) * l, -Object(o.y)(s)) + o.s), r * Object(o.e)(Object(o.h)(f) * l)]
        }, n.a = function () {
            return Object(i.geoProjection)(Object(u.a)(r)).scale(239.75)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(1);
        n.a = function (t) {
            function n(n, i) {
                var o = n > 0 ? -.5 : .5, u = t(n + o * r.s, i);
                return u[0] -= o * e, u
            }

            var e = t(r.o, 0)[0] - t(-r.o, 0)[0];
            return t.invert && (n.invert = function (n, i) {
                var o = n > 0 ? -.5 : .5, u = t.invert(n + o * e, i), a = u[0] - o * r.s;
                return a < -r.s ? a += 2 * r.s : a > r.s && (a -= 2 * r.s), u[0] = a, u
            }), n
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = (u.D - 1) / (u.D + 1), r = Object(u.B)(1 - e * e), i = Object(o.a)(u.o, r * r),
                a = Object(u.p)(Object(u.F)(u.s / 4 + Object(u.a)(n) / 2)), c = Object(u.m)(-1 * a) / Object(u.B)(e),
                f = function (t, n) {
                    var e = t * t, r = n + 1, i = 1 - e - n * n;
                    return [.5 * ((t >= 0 ? u.o : -u.o) - Object(u.g)(i, 2 * t)), -.25 * Object(u.p)(i * i + 4 * e) + .5 * Object(u.p)(r * r + e)]
                }(c * Object(u.h)(-1 * t), c * Object(u.y)(-1 * t)), s = Object(o.b)(f[0], f[1], r * r);
            return [-s[1], (n >= 0 ? 1 : -1) * (.5 * i - s[0])]
        }

        n.b = r;
        var i = e(0), o = e(267), u = e(1), a = e(134);
        r.invert = function (t, n) {
            var e = (u.D - 1) / (u.D + 1), r = Object(u.B)(1 - e * e), i = Object(o.a)(u.o, r * r),
                a = Object(o.c)(.5 * i - n, -t, r * r), c = function (t, n) {
                    var e = n[0] * n[0] + n[1] * n[1];
                    return [(t[0] * n[0] + t[1] * n[1]) / e, (t[1] * n[0] - t[0] * n[1]) / e]
                }(a[0], a[1]);
            return [Object(u.g)(c[1], c[0]) / -1, 2 * Object(u.f)(Object(u.m)(-.5 * Object(u.p)(e * c[0] * c[0] + e * c[1] * c[1]))) - u.o]
        }, n.a = function () {
            return Object(i.geoProjection)(Object(a.a)(r)).scale(151.496)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return Object(o.a)(n) > c.b ? (t = Object(u.d)(t, n), t[1] -= n > 0 ? c.d : -c.d, t) : Object(a.b)(t, n)
        }

        n.b = r;
        var i = e(0), o = e(1), u = e(21), a = e(38), c = e(73);
        r.invert = function (t, n) {
            return Object(o.a)(n) > c.b ? u.d.invert(t, n + (n > 0 ? c.d : -c.d)) : a.b.invert(t, n)
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(152.63)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(135), i = e(75);
        n.a = function () {
            return Object(i.a)(r.b).scale(111.48)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e(1);
        n.a = function (t, n, e) {
            var o = Object(r.geoInterpolate)(n, e), u = o(.5), a = Object(r.geoRotation)([-u[0], -u[1]])(n),
                c = o.distance / 2, f = -Object(i.e)(Object(i.y)(a[1] * i.v) / Object(i.y)(c)),
                s = [-u[0], -u[1], -(a[0] > 0 ? i.s - f : f) * i.j], l = Object(r.geoProjection)(t(c)).rotate(s),
                h = Object(r.geoRotation)(s), p = l.center;
            return delete l.rotate, l.center = function (t) {
                return arguments.length ? p(h(t)) : h.invert(p())
            }, l.clipAngle(90)
        }
    }, function (t, n, e) {
        var r;
        !function (n) {
            "use strict";

            function i() {
            }

            function o(t, n) {
                for (var e = t.length; e--;) if (t[e].listener === n) return e;
                return -1
            }

            function u(t) {
                return function () {
                    return this[t].apply(this, arguments)
                }
            }

            function a(t) {
                return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && a(t.listener)
            }

            var c = i.prototype, f = n.EventEmitter;
            c.getListeners = function (t) {
                var n, e, r = this._getEvents();
                if (t instanceof RegExp) {
                    n = {};
                    for (e in r) r.hasOwnProperty(e) && t.test(e) && (n[e] = r[e])
                } else n = r[t] || (r[t] = []);
                return n
            }, c.flattenListeners = function (t) {
                var n, e = [];
                for (n = 0; n < t.length; n += 1) e.push(t[n].listener);
                return e
            }, c.getListenersAsObject = function (t) {
                var n, e = this.getListeners(t);
                return e instanceof Array && ((n = {})[t] = e), n || e
            }, c.addListener = function (t, n) {
                if (!a(n)) throw new TypeError("listener must be a function");
                var e, r = this.getListenersAsObject(t), i = "object" == typeof n;
                for (e in r) r.hasOwnProperty(e) && -1 === o(r[e], n) && r[e].push(i ? n : {listener: n, once: !1});
                return this
            }, c.on = u("addListener"), c.addOnceListener = function (t, n) {
                return this.addListener(t, {listener: n, once: !0})
            }, c.once = u("addOnceListener"), c.defineEvent = function (t) {
                return this.getListeners(t), this
            }, c.defineEvents = function (t) {
                for (var n = 0; n < t.length; n += 1) this.defineEvent(t[n]);
                return this
            }, c.removeListener = function (t, n) {
                var e, r, i = this.getListenersAsObject(t);
                for (r in i) i.hasOwnProperty(r) && -1 !== (e = o(i[r], n)) && i[r].splice(e, 1);
                return this
            }, c.off = u("removeListener"), c.addListeners = function (t, n) {
                return this.manipulateListeners(!1, t, n)
            }, c.removeListeners = function (t, n) {
                return this.manipulateListeners(!0, t, n)
            }, c.manipulateListeners = function (t, n, e) {
                var r, i, o = t ? this.removeListener : this.addListener,
                    u = t ? this.removeListeners : this.addListeners;
                if ("object" != typeof n || n instanceof RegExp) for (r = e.length; r--;) o.call(this, n, e[r]); else for (r in n) n.hasOwnProperty(r) && (i = n[r]) && ("function" == typeof i ? o.call(this, r, i) : u.call(this, r, i));
                return this
            }, c.removeEvent = function (t) {
                var n, e = typeof t, r = this._getEvents();
                if ("string" === e) delete r[t]; else if (t instanceof RegExp) for (n in r) r.hasOwnProperty(n) && t.test(n) && delete r[n]; else delete this._events;
                return this
            }, c.removeAllListeners = u("removeEvent"), c.emitEvent = function (t, n) {
                var e, r, i, o, u = this.getListenersAsObject(t);
                for (o in u) if (u.hasOwnProperty(o)) for (e = u[o].slice(0), i = 0; i < e.length; i++) !0 === (r = e[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, n || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
                return this
            }, c.trigger = u("emitEvent"), c.emit = function (t) {
                var n = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(t, n)
            }, c.setOnceReturnValue = function (t) {
                return this._onceReturnValue = t, this
            }, c._getOnceReturnValue = function () {
                return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
            }, c._getEvents = function () {
                return this._events || (this._events = {})
            }, i.noConflict = function () {
                return n.EventEmitter = f, i
            }, void 0 !== (r = function () {
                return i
            }.call(n, e, n, t)) && (t.exports = r)
        }(this || {})
    }, function (t, n, e) {
        var r = e(24), i = e(77);
        t.exports = function (t, n) {
            var e = r(n), o = e.length;
            if (i(t)) return !o;
            for (var u = 0; u < o; u += 1) {
                var a = e[u];
                if (n[a] !== t[a] || !(a in t)) return !1
            }
            return !0
        }
    }, function (t, n, e) {
        var r = e(11), i = e(10), o = e(0), u = e(128), a = e(322);
        t.exports = function (t, n) {
            if (r(t)) return n ? t : t();
            if (i(t)) {
                if (o[t]) return n ? o[t] : o[t]();
                if (u[t]) return n ? u[t] : u[t]();
                if (a[t]) return n ? a[t] : a[t]()
            }
            return null
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            y.point = o
        }

        function i() {
            u(a, c)
        }

        function o(t, n) {
            y.point = u, a = t, c = n, t *= p.r, n *= p.r, f = t, s = Object(p.g)(n = n / 2 + p.q), l = Object(p.t)(n)
        }

        function u(t, n) {
            t *= p.r, n = (n *= p.r) / 2 + p.q;
            var e = t - f, r = e >= 0 ? 1 : -1, i = r * e, o = Object(p.g)(n), u = Object(p.t)(n), a = l * u,
                c = s * o + a * Object(p.g)(i), h = a * r * Object(p.t)(i);
            g.add(Object(p.e)(h, c)), f = t, s = o, l = u
        }

        e.d(n, "a", function () {
            return g
        }), e.d(n, "b", function () {
            return y
        });
        var a, c, f, s, l, h = e(42), p = e(5), v = e(25), d = e(26), g = Object(h.a)(), b = Object(h.a)(), y = {
            point: v.a, lineStart: v.a, lineEnd: v.a, polygonStart: function () {
                g.reset(), y.lineStart = r, y.lineEnd = i
            }, polygonEnd: function () {
                var t = +g;
                b.add(t < 0 ? p.w + t : t), this.lineStart = this.lineEnd = this.point = v.a
            }, sphere: function () {
                b.add(p.w)
            }
        };
        n.c = function (t) {
            return b.reset(), Object(d.a)(t, y), 2 * b
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r, u, c) {
            if (e) {
                var f = Object(a.g)(n), s = Object(a.t)(n), l = r * e;
                null == u ? (u = n + r * a.w, c = n - l / 2) : (u = i(f, u), c = i(f, c), (r > 0 ? u < c : u > c) && (u += r * a.w));
                for (var h, p = u; r > 0 ? p > c : p < c; p -= l) h = Object(o.g)([f, -s * Object(a.g)(p), -s * Object(a.t)(p)]), t.point(h[0], h[1])
            }
        }

        function i(t, n) {
            (n = Object(o.a)(n))[0] -= t, Object(o.e)(n);
            var e = Object(a.b)(-n[1]);
            return ((-n[2] < 0 ? -e : e) + a.w - a.i) % a.w
        }

        n.a = r;
        var o = e(43), u = e(326), a = e(5), c = e(78);
        n.b = function () {
            function t() {
                var t = i.apply(this, arguments), u = o.apply(this, arguments) * a.r,
                    l = f.apply(this, arguments) * a.r;
                return n = [], e = Object(c.b)(-t[0] * a.r, -t[1] * a.r, 0).invert, r(s, u, l, 1), t = {
                    type: "Polygon",
                    coordinates: [n]
                }, n = e = null, t
            }

            var n, e, i = Object(u.a)([0, 0]), o = Object(u.a)(90), f = Object(u.a)(6), s = {
                point: function (t, r) {
                    n.push(t = e(t, r)), t[0] *= a.h, t[1] *= a.h
                }
            };
            return t.center = function (n) {
                return arguments.length ? (i = "function" == typeof n ? n : Object(u.a)([+n[0], +n[1]]), t) : i
            }, t.radius = function (n) {
                return arguments.length ? (o = "function" == typeof n ? n : Object(u.a)(+n), t) : o
            }, t.precision = function (n) {
                return arguments.length ? (f = "function" == typeof n ? n : Object(u.a)(+n), t) : f
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            function e(e, r) {
                return e = t(e, r), n(e[0], e[1])
            }

            return t.invert && n.invert && (e.invert = function (e, r) {
                return (e = n.invert(e, r)) && t.invert(e[0], e[1])
            }), e
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r) {
            function l(i, o) {
                return t <= i && i <= e && n <= o && o <= r
            }

            function h(i, o, u, a) {
                var c = 0, f = 0;
                if (null == i || (c = p(i, u)) !== (f = p(o, u)) || d(i, o) < 0 ^ u > 0) do {
                    a.point(0 === c || 3 === c ? t : e, c > 1 ? r : n)
                } while ((c = (c + u + 4) % 4) !== f); else a.point(o[0], o[1])
            }

            function p(r, o) {
                return Object(i.a)(r[0] - t) < i.i ? o > 0 ? 0 : 3 : Object(i.a)(r[0] - e) < i.i ? o > 0 ? 2 : 1 : Object(i.a)(r[1] - n) < i.i ? o > 0 ? 1 : 0 : o > 0 ? 3 : 2
            }

            function v(t, n) {
                return d(t.x, n.x)
            }

            function d(t, n) {
                var e = p(t, 1), r = p(n, 1);
                return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
            }

            return function (i) {
                function p(t, n) {
                    l(t, n) && T.point(t, n)
                }

                function d(i, o) {
                    var a = l(i, o);
                    if (b && y.push([i, o]), E) j = i, O = o, _ = a, E = !1, a && (T.lineStart(), T.point(i, o)); else if (a && x) T.point(i, o); else {
                        var c = [m = Math.max(s, Math.min(f, m)), w = Math.max(s, Math.min(f, w))],
                            h = [i = Math.max(s, Math.min(f, i)), o = Math.max(s, Math.min(f, o))];
                        Object(u.a)(c, h, t, n, e, r) ? (x || (T.lineStart(), T.point(c[0], c[1])), T.point(h[0], h[1]), a || T.lineEnd(), M = !1) : a && (T.lineStart(), T.point(i, o), M = !1)
                    }
                    m = i, w = o, x = a
                }

                var g, b, y, j, O, _, m, w, x, E, M, T = i, S = Object(o.a)(), k = {
                    point: p, lineStart: function () {
                        k.point = d, b && b.push(y = []), E = !0, x = !1, m = w = NaN
                    }, lineEnd: function () {
                        g && (d(j, O), _ && x && S.rejoin(), g.push(S.result())), k.point = p, x && T.lineEnd()
                    }, polygonStart: function () {
                        T = S, g = [], b = [], M = !0
                    }, polygonEnd: function () {
                        var n = function () {
                            for (var n = 0, e = 0, i = b.length; e < i; ++e) for (var o, u, a = b[e], c = 1, f = a.length, s = a[0], l = s[0], h = s[1]; c < f; ++c) o = l, u = h, l = (s = a[c])[0], h = s[1], u <= r ? h > r && (l - o) * (r - u) > (h - u) * (t - o) && ++n : h <= r && (l - o) * (r - u) < (h - u) * (t - o) && --n;
                            return n
                        }(), e = M && n, o = (g = Object(c.merge)(g)).length;
                        (e || o) && (i.polygonStart(), e && (i.lineStart(), h(null, null, 1, i), i.lineEnd()), o && Object(a.a)(g, v, n, h, i), i.polygonEnd()), T = i, g = b = y = null
                    }
                };
                return k
            }
        }

        n.a = r;
        var i = e(5), o = e(146), u = e(327), a = e(147), c = e(14), f = 1e9, s = -f;
        n.b = function () {
            var t, n, e, i = 0, o = 0, u = 960, a = 500;
            return e = {
                stream: function (e) {
                    return t && n === e ? t : t = r(i, o, u, a)(n = e)
                }, extent: function (r) {
                    return arguments.length ? (i = +r[0][0], o = +r[0][1], u = +r[1][0], a = +r[1][1], t = n = null, e) : [[i, o], [u, a]]
                }
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(25);
        n.a = function () {
            var t, n = [];
            return {
                point: function (n, e) {
                    t.push([n, e])
                }, lineStart: function () {
                    n.push(t = [])
                }, lineEnd: r.a, rejoin: function () {
                    n.length > 1 && n.push(n.pop().concat(n.shift()))
                }, result: function () {
                    var e = n;
                    return n = [], t = null, e
                }
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r) {
            this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
        }

        function i(t) {
            if (n = t.length) {
                for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
                i.n = e = t[0], e.p = i
            }
        }

        var o = e(148);
        n.a = function (t, n, e, u, a) {
            var c, f, s = [], l = [];
            if (t.forEach(function (t) {
                    if (!((n = t.length - 1) <= 0)) {
                        var n, e, i = t[0], u = t[n];
                        if (Object(o.a)(i, u)) {
                            for (a.lineStart(), c = 0; c < n; ++c) a.point((i = t[c])[0], i[1]);
                            a.lineEnd()
                        } else s.push(e = new r(i, t, null, !0)), l.push(e.o = new r(i, null, e, !1)), s.push(e = new r(u, t, null, !1)), l.push(e.o = new r(u, null, e, !0))
                    }
                }), s.length) {
                for (l.sort(n), i(s), i(l), c = 0, f = l.length; c < f; ++c) l[c].e = e = !e;
                for (var h, p, v = s[0]; ;) {
                    for (var d = v, g = !0; d.v;) if ((d = d.n) === v) return;
                    h = d.z, a.lineStart();
                    do {
                        if (d.v = d.o.v = !0, d.e) {
                            if (g) for (c = 0, f = h.length; c < f; ++c) a.point((p = h[c])[0], p[1]); else u(d.x, d.n.x, 1, a);
                            d = d.n
                        } else {
                            if (g) for (h = d.p.z, c = h.length - 1; c >= 0; --c) a.point((p = h[c])[0], p[1]); else u(d.x, d.p.x, -1, a);
                            d = d.p
                        }
                        h = (d = d.o).z, g = !g
                    } while (!d.v);
                    a.lineEnd()
                }
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(5);
        n.a = function (t, n) {
            return Object(r.a)(t[0] - n[0]) < r.i && Object(r.a)(t[1] - n[1]) < r.i
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            v.point = v.lineEnd = l.a
        }

        function i(t, n) {
            t *= s.r, n *= s.r, u = t, a = Object(s.t)(n), c = Object(s.g)(n), v.point = o
        }

        function o(t, n) {
            t *= s.r, n *= s.r;
            var e = Object(s.t)(n), r = Object(s.g)(n), i = Object(s.a)(t - u), o = Object(s.g)(i),
                f = r * Object(s.t)(i), l = c * e - a * r * o, h = a * e + c * r * o;
            p.add(Object(s.e)(Object(s.u)(f * f + l * l), h)), u = t, a = e, c = r
        }

        var u, a, c, f = e(42), s = e(5), l = e(25), h = e(26), p = Object(f.a)(), v = {
            sphere: l.a, point: l.a, lineStart: function () {
                v.point = i, v.lineEnd = r
            }, lineEnd: l.a, polygonStart: l.a, polygonEnd: l.a
        };
        n.a = function (t) {
            return p.reset(), Object(h.a)(t, v), +p
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return t
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(25), i = 1 / 0, o = i, u = -i, a = u, c = {
            point: function (t, n) {
                t < i && (i = t), t > u && (u = t), n < o && (o = n), n > a && (a = n)
            }, lineStart: r.a, lineEnd: r.a, polygonStart: r.a, polygonEnd: r.a, result: function () {
                var t = [[i, o], [u, a]];
                return u = a = -(o = i = 1 / 0), t
            }
        };
        n.a = c
    }, function (t, n, e) {
        "use strict";
        var r = e(79);
        n.a = function () {
            return Object(r.b)().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t.length > 1
        }

        function i(t, n) {
            return ((t = t.x)[0] < 0 ? t[1] - a.l - a.i : a.l - t[1]) - ((n = n.x)[0] < 0 ? n[1] - a.l - a.i : a.l - n[1])
        }

        var o = e(146), u = e(147), a = e(5), c = e(337), f = e(14);
        n.a = function (t, n, e, a) {
            return function (s, l) {
                function h(n, e) {
                    var r = s(n, e);
                    t(n = r[0], e = r[1]) && l.point(n, e)
                }

                function p(t, n) {
                    var e = s(t, n);
                    m.point(e[0], e[1])
                }

                function v() {
                    T.point = p, m.lineStart()
                }

                function d() {
                    T.point = h, m.lineEnd()
                }

                function g(t, n) {
                    _.push([t, n]);
                    var e = s(t, n);
                    E.point(e[0], e[1])
                }

                function b() {
                    E.lineStart(), _ = []
                }

                function y() {
                    g(_[0][0], _[0][1]), E.lineEnd();
                    var t, n, e, i, o = E.clean(), u = x.result(), a = u.length;
                    if (_.pop(), j.push(_), _ = null, a) if (1 & o) {
                        if (e = u[0], (n = e.length - 1) > 0) {
                            for (M || (l.polygonStart(), M = !0), l.lineStart(), t = 0; t < n; ++t) l.point((i = e[t])[0], i[1]);
                            l.lineEnd()
                        }
                    } else a > 1 && 2 & o && u.push(u.pop().concat(u.shift())), O.push(u.filter(r))
                }

                var j, O, _, m = n(l), w = s.invert(a[0], a[1]), x = Object(o.a)(), E = n(x), M = !1, T = {
                    point: h, lineStart: v, lineEnd: d, polygonStart: function () {
                        T.point = g, T.lineStart = b, T.lineEnd = y, O = [], j = []
                    }, polygonEnd: function () {
                        T.point = h, T.lineStart = v, T.lineEnd = d, O = Object(f.merge)(O);
                        var t = Object(c.a)(j, w);
                        O.length ? (M || (l.polygonStart(), M = !0), Object(u.a)(O, i, t, e, l)) : t && (M || (l.polygonStart(), M = !0), l.lineStart(), e(null, null, 1, l), l.lineEnd()), M && (l.polygonEnd(), M = !1), O = j = null
                    }, sphere: function () {
                        l.polygonStart(), l.lineStart(), e(null, null, 1, l), l.lineEnd(), l.polygonEnd()
                    }
                };
                return T
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            var r = n[1][0] - n[0][0], u = n[1][1] - n[0][1], a = t.clipExtent && t.clipExtent();
            t.scale(150).translate([0, 0]), null != a && t.clipExtent(null), Object(i.a)(e, t.stream(o.a));
            var c = o.a.result(), f = Math.min(r / (c[1][0] - c[0][0]), u / (c[1][1] - c[0][1])),
                s = +n[0][0] + (r - f * (c[1][0] + c[0][0])) / 2, l = +n[0][1] + (u - f * (c[1][1] + c[0][1])) / 2;
            return null != a && t.clipExtent(a), t.scale(150 * f).translate([s, l])
        }

        n.b = function (t) {
            return function (n, e) {
                return r(t, [[0, 0], n], e)
            }
        }, n.a = function (t) {
            return function (n, e) {
                return r(t, n, e)
            }
        };
        var i = e(26), o = e(151)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t, n]
        }

        n.b = r;
        var i = e(18);
        r.invert = r, n.a = function () {
            return Object(i.a)(r).scale(152.63)
        }
    }, function (t, n, e) {
        var r = e(6);
        t.exports = function t(n) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            if (r(n)) for (var i = 0; i < n.length; i += 1) t(n[i], e); else e.push(n);
            return e
        }
    }, function (t, n) {
        t.exports = function (t) {
            for (var n = 1 / t, e = [], r = 0; r <= 1; r += n) e.push(r);
            return e
        }
    }, function (t, n, e) {
        function r(t, n, e) {
            e.dataType = c;
            var r = o(t.features);
            return r.forEach(function (t) {
                t.name = t.properties.name, t.longitude = [], t.latitude = [];
                var n = t.pathData = s(t);
                i(n)._path.forEach(function (n) {
                    t.longitude.push(n[1]), t.latitude.push(n[2])
                });
                var e = s.centroid(t);
                t.centroidX = e[0], t.centroidY = e[1]
            }), r
        }

        var i = e(159), o = e(40), u = e(0).geoPath, a = e(2), c = a.GEO, f = a.registerConnector, s = u();
        f("geo", r), f("geojson", r), f("GeoJSON", r), t.exports = r
    }, function (t, n, e) {
        function r(t) {
            if (!(this instanceof r)) return new r(t);
            this._path = u(t) ? t : o(t), this._path = a(this._path), this._path = function (t) {
                for (var n = [], e = ["L", 0, 0], r = 0, i = t.length; r < i; r++) {
                    var o = t[r];
                    switch (o[0]) {
                        case"M":
                            e = ["L", o[1], o[2]], n.push(o);
                            break;
                        case"Z":
                            n.push(e);
                            break;
                        default:
                            n.push(o)
                    }
                }
                return n
            }(this._path)
        }

        function i(t, n, e, r) {
            var i = t - e, o = n - r;
            return Math.sqrt(i * i + o * o)
        }

        var o = e(362), u = e(363), a = e(364);
        t.exports = r, r.prototype.at = function (t, n) {
            return this._walk(t, n).pos
        }, r.prototype.length = function () {
            return this._walk(null).length
        }, r.prototype._walk = function (t, n) {
            var e = [0, 0], r = [0, 0, 0], o = 0;
            "number" == typeof t && (t *= 1.045);
            for (var u = 0; u < this._path.length; u++) {
                var a = this._path[u];
                if ("M" === a[0]) {
                    if (e[0] = a[1], e[1] = a[2], 0 === t) return {length: o, pos: e}
                } else if ("C" === a[0]) {
                    r[0] = e[0], r[1] = e[1], r[2] = o;
                    for (var c = 100, f = 0; f <= c; f++) {
                        var s = function (t, n) {
                            return Math.pow(1 - n, 3) * e[0] + 3 * Math.pow(1 - n, 2) * n * t[1] + 3 * (1 - n) * Math.pow(n, 2) * t[3] + Math.pow(n, 3) * t[5]
                        }(a, h = f / c), l = function (t, n) {
                            return Math.pow(1 - n, 3) * e[1] + 3 * Math.pow(1 - n, 2) * n * t[2] + 3 * (1 - n) * Math.pow(n, 2) * t[4] + Math.pow(n, 3) * t[6]
                        }(a, h);
                        if (o += i(e[0], e[1], s, l), e[0] = s, e[1] = l, "number" == typeof t && o >= t) {
                            p = (o - t) / (o - r[2]);
                            return {length: o, pos: v = [e[0] * (1 - p) + r[0] * p, e[1] * (1 - p) + r[1] * p]}
                        }
                        r[0] = e[0], r[1] = e[1], r[2] = o
                    }
                } else if ("Q" === a[0]) {
                    r[0] = e[0], r[1] = e[1], r[2] = o;
                    for (var c = 100, f = 0; f <= c; f++) {
                        var h = f / c, s = function (t, n) {
                            return Math.pow(1 - n, 2) * e[0] + 2 * (1 - n) * n * t[1] + Math.pow(n, 2) * t[3]
                        }(a, h), l = function (t, n) {
                            return Math.pow(1 - n, 2) * e[1] + 2 * (1 - n) * n * t[2] + Math.pow(n, 2) * t[4]
                        }(a, h);
                        if (o += i(e[0], e[1], s, l), e[0] = s, e[1] = l, "number" == typeof t && o >= t) {
                            p = (o - t) / (o - r[2]);
                            return {length: o, pos: v = [e[0] * (1 - p) + r[0] * p, e[1] * (1 - p) + r[1] * p]}
                        }
                        r[0] = e[0], r[1] = e[1], r[2] = o
                    }
                } else if ("L" === a[0]) {
                    if (r[0] = e[0], r[1] = e[1], r[2] = o, o += i(e[0], e[1], a[1], a[2]), e[0] = a[1], e[1] = a[2], "number" == typeof t && o >= t) {
                        var p = (o - t) / (o - r[2]), v = [e[0] * (1 - p) + r[0] * p, e[1] * (1 - p) + r[1] * p];
                        return {length: o, pos: v}
                    }
                    r[0] = e[0], r[1] = e[1], r[2] = o
                }
            }
            return {length: o / 1.045, pos: e}
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            var r = t.x, i = t.y, o = n.r + e.r, u = t.r + e.r, a = n.x - r, c = n.y - i, f = a * a + c * c;
            if (f) {
                var s = .5 + ((u *= u) - (o *= o)) / (2 * f),
                    l = Math.sqrt(Math.max(0, 2 * o * (u + f) - (u -= f) * u - o * o)) / (2 * f);
                e.x = r + s * a + l * c, e.y = i + s * c - l * a
            } else e.x = r + u, e.y = i
        }

        function i(t, n) {
            var e = n.x - t.x, r = n.y - t.y, i = t.r + n.r;
            return i * i - 1e-6 > e * e + r * r
        }

        function o(t) {
            var n = t._, e = t.next._, r = n.r + e.r, i = (n.x * e.r + e.x * n.r) / r, o = (n.y * e.r + e.y * n.r) / r;
            return i * i + o * o
        }

        function u(t) {
            this._ = t, this.next = null, this.previous = null
        }

        function a(t) {
            if (!(f = t.length)) return 0;
            var n, e, a, f, s, l, h, p, v, d, g;
            if (n = t[0], n.x = 0, n.y = 0, !(f > 1)) return n.r;
            if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(f > 2)) return n.r + e.r;
            r(e, n, a = t[2]), n = new u(n), e = new u(e), a = new u(a), n.next = a.previous = e, e.next = n.previous = a, a.next = e.previous = n;
            t:for (h = 3; h < f; ++h) {
                r(n._, e._, a = t[h]), a = new u(a), p = e.next, v = n.previous, d = e._.r, g = n._.r;
                do {
                    if (d <= g) {
                        if (i(p._, a._)) {
                            e = p, n.next = e, e.previous = n, --h;
                            continue t
                        }
                        d += p._.r, p = p.next
                    } else {
                        if (i(v._, a._)) {
                            (n = v).next = e, e.previous = n, --h;
                            continue t
                        }
                        g += v._.r, v = v.previous
                    }
                } while (p !== v.next);
                for (a.previous = n, a.next = e, n.next = e.previous = e = a, s = o(n); (a = a.next) !== e;) (l = o(a)) < s && (n = a, s = l);
                e = n.next
            }
            for (n = [e._], a = e; (a = a.next) !== e;) n.push(a._);
            for (a = Object(c.a)(n), h = 0; h < f; ++h) n = t[h], n.x -= a.x, n.y -= a.y;
            return a.r
        }

        n.b = a;
        var c = e(161);
        n.a = function (t) {
            return a(t), t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = t.r - n.r, r = n.x - t.x, i = n.y - t.y;
            return e < 0 || e * e < r * r + i * i
        }

        function i(t, n) {
            var e = t.r - n.r + 1e-6, r = n.x - t.x, i = n.y - t.y;
            return e > 0 && e * e > r * r + i * i
        }

        function o(t, n) {
            for (var e = 0; e < n.length; ++e) if (!i(t, n[e])) return !1;
            return !0
        }

        function u(t, n) {
            var e = t.x, r = t.y, i = t.r, o = n.x, u = n.y, a = n.r, c = o - e, f = u - r, s = a - i,
                l = Math.sqrt(c * c + f * f);
            return {x: (e + o + c / l * s) / 2, y: (r + u + f / l * s) / 2, r: (l + i + a) / 2}
        }

        function a(t, n, e) {
            var r = t.x, i = t.y, o = t.r, u = n.x, a = n.y, c = n.r, f = e.x, s = e.y, l = e.r, h = r - u, p = r - f,
                v = i - a, d = i - s, g = c - o, b = l - o, y = r * r + i * i - o * o, j = y - u * u - a * a + c * c,
                O = y - f * f - s * s + l * l, _ = p * v - h * d, m = (v * O - d * j) / (2 * _) - r,
                w = (d * g - v * b) / _, x = (p * j - h * O) / (2 * _) - i, E = (h * b - p * g) / _,
                M = w * w + E * E - 1, T = 2 * (o + m * w + x * E), S = m * m + x * x - o * o,
                k = -(M ? (T + Math.sqrt(T * T - 4 * M * S)) / (2 * M) : S / T);
            return {x: r + m + w * k, y: i + x + E * k, r: k}
        }

        var c = e(382);
        n.a = function (t) {
            for (var n, e, f = 0, s = (t = Object(c.a)(c.b.call(t))).length, l = []; f < s;) n = t[f], e && i(e, n) ? ++f : (e = function (t) {
                switch (t.length) {
                    case 1:
                        return function (t) {
                            return {x: t.x, y: t.y, r: t.r}
                        }(t[0]);
                    case 2:
                        return u(t[0], t[1]);
                    case 3:
                        return a(t[0], t[1], t[2])
                }
            }(l = function (t, n) {
                var e, i;
                if (o(n, t)) return [n];
                for (e = 0; e < t.length; ++e) if (r(n, t[e]) && o(u(t[e], n), t)) return [t[e], n];
                for (e = 0; e < t.length - 1; ++e) for (i = e + 1; i < t.length; ++i) if (r(u(t[e], t[i]), n) && r(u(t[e], n), t[i]) && r(u(t[i], n), t[e]) && o(a(t[e], t[i], n), t)) return [t[e], t[i], n];
                throw new Error
            }(l, n)), f = 0);
            return e
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
            return 0
        }, n.b = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(89);
        n.a = function (t) {
            function n(t) {
                (t = o(t))[0] < u && (u = t[0]), t[0] > c && (c = t[0]), t[1] < a && (a = t[1]), t[1] > f && (f = t[1])
            }

            function e(t) {
                switch (t.type) {
                    case"GeometryCollection":
                        t.geometries.forEach(e);
                        break;
                    case"Point":
                        n(t.coordinates);
                        break;
                    case"MultiPoint":
                        t.coordinates.forEach(n)
                }
            }

            var i, o = Object(r.a)(t.transform), u = 1 / 0, a = u, c = -u, f = -u;
            t.arcs.forEach(function (t) {
                for (var n, e = -1, r = t.length; ++e < r;) (n = o(t[e], e))[0] < u && (u = n[0]), n[0] > c && (c = n[0]), n[1] < a && (a = n[1]), n[1] > f && (f = n[1])
            });
            for (i in t.objects) e(t.objects[i]);
            return [u, a, c, f]
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            function e(t, n) {
                for (var e in t) {
                    var i = t[e];
                    delete n[i.start], delete i.start, delete i.end, i.forEach(function (t) {
                        r[t < 0 ? ~t : t] = 1
                    }), u.push(i)
                }
            }

            var r = {}, i = {}, o = {}, u = [], a = -1;
            return n.forEach(function (e, r) {
                var i, o = t.arcs[e < 0 ? ~e : e];
                o.length < 3 && !o[1][0] && !o[1][1] && (i = n[++a], n[a] = e, n[r] = i)
            }), n.forEach(function (n) {
                var e, r, u = function (n) {
                    var e, r = t.arcs[n < 0 ? ~n : n], i = r[0];
                    return t.transform ? (e = [0, 0], r.forEach(function (t) {
                        e[0] += t[0], e[1] += t[1]
                    })) : e = r[r.length - 1], n < 0 ? [e, i] : [i, e]
                }(n), a = u[0], c = u[1];
                if (e = o[a]) if (delete o[e.end], e.push(n), e.end = c, r = i[c]) {
                    delete i[r.start];
                    var f = r === e ? e : e.concat(r);
                    i[f.start = e.start] = o[f.end = r.end] = f
                } else i[e.start] = o[e.end] = e; else if (e = i[c]) if (delete i[e.start], e.unshift(n), e.start = a, r = o[a]) {
                    delete o[r.end];
                    var s = r === e ? e : r.concat(e);
                    i[s.start = r.start] = o[s.end = e.end] = s
                } else i[e.start] = o[e.end] = e; else i[(e = [n]).start = a] = o[e.end = c] = e
            }), e(o, i), e(i, o), n.forEach(function (t) {
                r[t < 0 ? ~t : t] || u.push([t])
            }), u
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(165);
        n.a = function (t) {
            if (null == t) return r.a;
            var n, e, i = t.scale[0], o = t.scale[1], u = t.translate[0], a = t.translate[1];
            return function (t, r) {
                r || (n = e = 0);
                var c = 2, f = t.length, s = new Array(f), l = Math.round((t[0] - u) / i),
                    h = Math.round((t[1] - a) / o);
                for (s[0] = l - n, n = l, s[1] = h - e, e = h; c < f;) s[c] = t[c], ++c;
                return s
            }
        }
    }, function (t, n, e) {
        var r = e(91), i = Array.prototype.indexOf;
        t.exports = function (t, n) {
            return !!r(t) && i.call(t, n) > -1
        }
    }, function (t, n, e) {
        (function (t, r) {
            var i;
            (function () {
                function o(t, n) {
                    return t.set(n[0], n[1]), t
                }

                function u(t, n) {
                    return t.add(n), t
                }

                function a(t, n, e) {
                    switch (e.length) {
                        case 0:
                            return t.call(n);
                        case 1:
                            return t.call(n, e[0]);
                        case 2:
                            return t.call(n, e[0], e[1]);
                        case 3:
                            return t.call(n, e[0], e[1], e[2])
                    }
                    return t.apply(n, e)
                }

                function c(t, n) {
                    for (var e = -1, r = null == t ? 0 : t.length; ++e < r && !1 !== n(t[e], e, t);) ;
                    return t
                }

                function f(t, n) {
                    for (var e = -1, r = null == t ? 0 : t.length; ++e < r;) if (!n(t[e], e, t)) return !1;
                    return !0
                }

                function s(t, n) {
                    for (var e = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++e < r;) {
                        var u = t[e];
                        n(u, e, t) && (o[i++] = u)
                    }
                    return o
                }

                function l(t, n) {
                    return !!(null == t ? 0 : t.length) && j(t, n, 0) > -1
                }

                function h(t, n, e) {
                    for (var r = -1, i = null == t ? 0 : t.length; ++r < i;) if (e(n, t[r])) return !0;
                    return !1
                }

                function p(t, n) {
                    for (var e = -1, r = null == t ? 0 : t.length, i = Array(r); ++e < r;) i[e] = n(t[e], e, t);
                    return i
                }

                function v(t, n) {
                    for (var e = -1, r = n.length, i = t.length; ++e < r;) t[i + e] = n[e];
                    return t
                }

                function d(t, n, e, r) {
                    var i = -1, o = null == t ? 0 : t.length;
                    for (r && o && (e = t[++i]); ++i < o;) e = n(e, t[i], i, t);
                    return e
                }

                function g(t, n) {
                    for (var e = -1, r = null == t ? 0 : t.length; ++e < r;) if (n(t[e], e, t)) return !0;
                    return !1
                }

                function b(t, n, e) {
                    var r;
                    return e(t, function (t, e, i) {
                        if (n(t, e, i)) return r = e, !1
                    }), r
                }

                function y(t, n, e, r) {
                    for (var i = t.length, o = e + (r ? 1 : -1); r ? o-- : ++o < i;) if (n(t[o], o, t)) return o;
                    return -1
                }

                function j(t, n, e) {
                    return n == n ? function (t, n, e) {
                        var r = e - 1, i = t.length;
                        for (; ++r < i;) if (t[r] === n) return r;
                        return -1
                    }(t, n, e) : y(t, O, e)
                }

                function O(t) {
                    return t != t
                }

                function _(t, n) {
                    var e = null == t ? 0 : t.length;
                    return e ? E(t, n) / e : yt
                }

                function m(t) {
                    return function (n) {
                        return null == n ? D : n[t]
                    }
                }

                function w(t) {
                    return function (n) {
                        return null == t ? D : t[n]
                    }
                }

                function x(t, n, e, r, i) {
                    return i(t, function (t, i, o) {
                        e = r ? (r = !1, t) : n(e, t, i, o)
                    }), e
                }

                function E(t, n) {
                    for (var e, r = -1, i = t.length; ++r < i;) {
                        var o = n(t[r]);
                        o !== D && (e = e === D ? o : e + o)
                    }
                    return e
                }

                function M(t, n) {
                    for (var e = -1, r = Array(t); ++e < t;) r[e] = n(e);
                    return r
                }

                function T(t) {
                    return function (n) {
                        return t(n)
                    }
                }

                function S(t, n) {
                    return p(n, function (n) {
                        return t[n]
                    })
                }

                function k(t, n) {
                    return t.has(n)
                }

                function C(t, n) {
                    for (var e = -1, r = t.length; ++e < r && j(n, t[e], 0) > -1;) ;
                    return e
                }

                function P(t, n) {
                    for (var e = t.length; e-- && j(n, t[e], 0) > -1;) ;
                    return e
                }

                function N(t) {
                    return "\\" + he[t]
                }

                function R(t) {
                    return ue.test(t)
                }

                function B(t) {
                    var n = -1, e = Array(t.size);
                    return t.forEach(function (t, r) {
                        e[++n] = [r, t]
                    }), e
                }

                function A(t, n) {
                    return function (e) {
                        return t(n(e))
                    }
                }

                function I(t, n) {
                    for (var e = -1, r = t.length, i = 0, o = []; ++e < r;) {
                        var u = t[e];
                        u !== n && u !== Y || (t[e] = Y, o[i++] = e)
                    }
                    return o
                }

                function L(t) {
                    var n = -1, e = Array(t.size);
                    return t.forEach(function (t) {
                        e[++n] = t
                    }), e
                }

                function z(t) {
                    var n = -1, e = Array(t.size);
                    return t.forEach(function (t) {
                        e[++n] = [t, t]
                    }), e
                }

                function q(t) {
                    return R(t) ? function (t) {
                        var n = ie.lastIndex = 0;
                        for (; ie.test(t);) ++n;
                        return n
                    }(t) : ke(t)
                }

                function F(t) {
                    return R(t) ? function (t) {
                        return t.match(ie) || []
                    }(t) : function (t) {
                        return t.split("")
                    }(t)
                }

                var D, G = 200, H = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                    U = "Expected a function", V = "__lodash_hash_undefined__", W = 500, Y = "__lodash_placeholder__",
                    $ = 1, J = 2, K = 4, X = 1, Z = 2, Q = 1, tt = 2, nt = 4, et = 8, rt = 16, it = 32, ot = 64,
                    ut = 128, at = 256, ct = 512, ft = 30, st = "...", lt = 800, ht = 16, pt = 1, vt = 2, dt = 1 / 0,
                    gt = 9007199254740991, bt = 1.7976931348623157e308, yt = NaN, jt = 4294967295, Ot = jt - 1,
                    _t = jt >>> 1,
                    mt = [["ary", ut], ["bind", Q], ["bindKey", tt], ["curry", et], ["curryRight", rt], ["flip", ct], ["partial", it], ["partialRight", ot], ["rearg", at]],
                    wt = "[object Arguments]", xt = "[object Array]", Et = "[object AsyncFunction]",
                    Mt = "[object Boolean]", Tt = "[object Date]", St = "[object DOMException]", kt = "[object Error]",
                    Ct = "[object Function]", Pt = "[object GeneratorFunction]", Nt = "[object Map]",
                    Rt = "[object Number]", Bt = "[object Null]", At = "[object Object]", It = "[object Proxy]",
                    Lt = "[object RegExp]", zt = "[object Set]", qt = "[object String]", Ft = "[object Symbol]",
                    Dt = "[object Undefined]", Gt = "[object WeakMap]", Ht = "[object WeakSet]",
                    Ut = "[object ArrayBuffer]", Vt = "[object DataView]", Wt = "[object Float32Array]",
                    Yt = "[object Float64Array]", $t = "[object Int8Array]", Jt = "[object Int16Array]",
                    Kt = "[object Int32Array]", Xt = "[object Uint8Array]", Zt = "[object Uint8ClampedArray]",
                    Qt = "[object Uint16Array]", tn = "[object Uint32Array]", nn = /\b__p \+= '';/g,
                    en = /\b(__p \+=) '' \+/g, rn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, on = /&(?:amp|lt|gt|quot|#39);/g,
                    un = /[&<>"']/g, an = RegExp(on.source), cn = RegExp(un.source), fn = /<%-([\s\S]+?)%>/g,
                    sn = /<%([\s\S]+?)%>/g, ln = /<%=([\s\S]+?)%>/g,
                    hn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pn = /^\w*$/, vn = /^\./,
                    dn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    gn = /[\\^$.*+?()[\]{}|]/g, bn = RegExp(gn.source), yn = /^\s+|\s+$/g, jn = /^\s+/, On = /\s+$/,
                    _n = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, mn = /\{\n\/\* \[wrapped with (.+)\] \*/,
                    wn = /,? & /, xn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, En = /\\(\\)?/g,
                    Mn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Tn = /\w*$/, Sn = /^[-+]0x[0-9a-f]+$/i, kn = /^0b[01]+$/i,
                    Cn = /^\[object .+?Constructor\]$/, Pn = /^0o[0-7]+$/i, Nn = /^(?:0|[1-9]\d*)$/,
                    Rn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Bn = /($^)/, An = /['\n\r\u2028\u2029\\]/g,
                    In = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                    Ln = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                    zn = "[\\ud800-\\udfff]", qn = "[" + Ln + "]", Fn = "[" + In + "]", Dn = "\\d+",
                    Gn = "[\\u2700-\\u27bf]", Hn = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                    Un = "[^\\ud800-\\udfff" + Ln + Dn + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                    Vn = "\\ud83c[\\udffb-\\udfff]", Wn = "[^\\ud800-\\udfff]", Yn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    $n = "[\\ud800-\\udbff][\\udc00-\\udfff]", Jn = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                    Kn = "(?:" + Hn + "|" + Un + ")", Xn = "(?:" + Jn + "|" + Un + ")",
                    Zn = "(?:" + Fn + "|" + Vn + ")" + "?",
                    Qn = "[\\ufe0e\\ufe0f]?" + Zn + ("(?:\\u200d(?:" + [Wn, Yn, $n].join("|") + ")[\\ufe0e\\ufe0f]?" + Zn + ")*"),
                    te = "(?:" + [Gn, Yn, $n].join("|") + ")" + Qn,
                    ne = "(?:" + [Wn + Fn + "?", Fn, Yn, $n, zn].join("|") + ")", ee = RegExp("['â€™]", "g"),
                    re = RegExp(Fn, "g"), ie = RegExp(Vn + "(?=" + Vn + ")|" + ne + Qn, "g"),
                    oe = RegExp([Jn + "?" + Hn + "+(?:['â€™](?:d|ll|m|re|s|t|ve))?(?=" + [qn, Jn, "$"].join("|") + ")", Xn + "+(?:['â€™](?:D|LL|M|RE|S|T|VE))?(?=" + [qn, Jn + Kn, "$"].join("|") + ")", Jn + "?" + Kn + "+(?:['â€™](?:d|ll|m|re|s|t|ve))?", Jn + "+(?:['â€™](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", Dn, te].join("|"), "g"),
                    ue = RegExp("[\\u200d\\ud800-\\udfff" + In + "\\ufe0e\\ufe0f]"),
                    ae = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                    ce = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                    fe = -1, se = {};
                se[Wt] = se[Yt] = se[$t] = se[Jt] = se[Kt] = se[Xt] = se[Zt] = se[Qt] = se[tn] = !0, se[wt] = se[xt] = se[Ut] = se[Mt] = se[Vt] = se[Tt] = se[kt] = se[Ct] = se[Nt] = se[Rt] = se[At] = se[Lt] = se[zt] = se[qt] = se[Gt] = !1;
                var le = {};
                le[wt] = le[xt] = le[Ut] = le[Vt] = le[Mt] = le[Tt] = le[Wt] = le[Yt] = le[$t] = le[Jt] = le[Kt] = le[Nt] = le[Rt] = le[At] = le[Lt] = le[zt] = le[qt] = le[Ft] = le[Xt] = le[Zt] = le[Qt] = le[tn] = !0, le[kt] = le[Ct] = le[Gt] = !1;
                var he = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"},
                    pe = parseFloat, ve = parseInt, de = "object" == typeof t && t && t.Object === Object && t,
                    ge = "object" == typeof self && self && self.Object === Object && self,
                    be = de || ge || Function("return this")(), ye = "object" == typeof n && n && !n.nodeType && n,
                    je = ye && "object" == typeof r && r && !r.nodeType && r, Oe = je && je.exports === ye,
                    _e = Oe && de.process, me = function () {
                        try {
                            return _e && _e.binding && _e.binding("util")
                        } catch (t) {
                        }
                    }(), we = me && me.isArrayBuffer, xe = me && me.isDate, Ee = me && me.isMap, Me = me && me.isRegExp,
                    Te = me && me.isSet, Se = me && me.isTypedArray, ke = m("length"), Ce = w({
                        "Ã€": "A",
                        "Ã": "A",
                        "Ã‚": "A",
                        "Ãƒ": "A",
                        "Ã„": "A",
                        "Ã…": "A",
                        "Ã ": "a",
                        "Ã¡": "a",
                        "Ã¢": "a",
                        "Ã£": "a",
                        "Ã¤": "a",
                        "Ã¥": "a",
                        "Ã‡": "C",
                        "Ã§": "c",
                        "Ã": "D",
                        "Ã°": "d",
                        "Ãˆ": "E",
                        "Ã‰": "E",
                        "ÃŠ": "E",
                        "Ã‹": "E",
                        "Ã¨": "e",
                        "Ã©": "e",
                        "Ãª": "e",
                        "Ã«": "e",
                        "ÃŒ": "I",
                        "Ã": "I",
                        "ÃŽ": "I",
                        "Ã": "I",
                        "Ã¬": "i",
                        "Ã­": "i",
                        "Ã®": "i",
                        "Ã¯": "i",
                        "Ã‘": "N",
                        "Ã±": "n",
                        "Ã’": "O",
                        "Ã“": "O",
                        "Ã”": "O",
                        "Ã•": "O",
                        "Ã–": "O",
                        "Ã˜": "O",
                        "Ã²": "o",
                        "Ã³": "o",
                        "Ã´": "o",
                        "Ãµ": "o",
                        "Ã¶": "o",
                        "Ã¸": "o",
                        "Ã™": "U",
                        "Ãš": "U",
                        "Ã›": "U",
                        "Ãœ": "U",
                        "Ã¹": "u",
                        "Ãº": "u",
                        "Ã»": "u",
                        "Ã¼": "u",
                        "Ã": "Y",
                        "Ã½": "y",
                        "Ã¿": "y",
                        "Ã†": "Ae",
                        "Ã¦": "ae",
                        "Ãž": "Th",
                        "Ã¾": "th",
                        "ÃŸ": "ss",
                        "Ä€": "A",
                        "Ä‚": "A",
                        "Ä„": "A",
                        "Ä": "a",
                        "Äƒ": "a",
                        "Ä…": "a",
                        "Ä†": "C",
                        "Äˆ": "C",
                        "ÄŠ": "C",
                        "ÄŒ": "C",
                        "Ä‡": "c",
                        "Ä‰": "c",
                        "Ä‹": "c",
                        "Ä": "c",
                        "ÄŽ": "D",
                        "Ä": "D",
                        "Ä": "d",
                        "Ä‘": "d",
                        "Ä’": "E",
                        "Ä”": "E",
                        "Ä–": "E",
                        "Ä˜": "E",
                        "Äš": "E",
                        "Ä“": "e",
                        "Ä•": "e",
                        "Ä—": "e",
                        "Ä™": "e",
                        "Ä›": "e",
                        "Äœ": "G",
                        "Äž": "G",
                        "Ä ": "G",
                        "Ä¢": "G",
                        "Ä": "g",
                        "ÄŸ": "g",
                        "Ä¡": "g",
                        "Ä£": "g",
                        "Ä¤": "H",
                        "Ä¦": "H",
                        "Ä¥": "h",
                        "Ä§": "h",
                        "Ä¨": "I",
                        "Äª": "I",
                        "Ä¬": "I",
                        "Ä®": "I",
                        "Ä°": "I",
                        "Ä©": "i",
                        "Ä«": "i",
                        "Ä­": "i",
                        "Ä¯": "i",
                        "Ä±": "i",
                        "Ä´": "J",
                        "Äµ": "j",
                        "Ä¶": "K",
                        "Ä·": "k",
                        "Ä¸": "k",
                        "Ä¹": "L",
                        "Ä»": "L",
                        "Ä½": "L",
                        "Ä¿": "L",
                        "Å": "L",
                        "Äº": "l",
                        "Ä¼": "l",
                        "Ä¾": "l",
                        "Å€": "l",
                        "Å‚": "l",
                        "Åƒ": "N",
                        "Å…": "N",
                        "Å‡": "N",
                        "ÅŠ": "N",
                        "Å„": "n",
                        "Å†": "n",
                        "Åˆ": "n",
                        "Å‹": "n",
                        "ÅŒ": "O",
                        "ÅŽ": "O",
                        "Å": "O",
                        "Å": "o",
                        "Å": "o",
                        "Å‘": "o",
                        "Å”": "R",
                        "Å–": "R",
                        "Å˜": "R",
                        "Å•": "r",
                        "Å—": "r",
                        "Å™": "r",
                        "Åš": "S",
                        "Åœ": "S",
                        "Åž": "S",
                        "Å ": "S",
                        "Å›": "s",
                        "Å": "s",
                        "ÅŸ": "s",
                        "Å¡": "s",
                        "Å¢": "T",
                        "Å¤": "T",
                        "Å¦": "T",
                        "Å£": "t",
                        "Å¥": "t",
                        "Å§": "t",
                        "Å¨": "U",
                        "Åª": "U",
                        "Å¬": "U",
                        "Å®": "U",
                        "Å°": "U",
                        "Å²": "U",
                        "Å©": "u",
                        "Å«": "u",
                        "Å­": "u",
                        "Å¯": "u",
                        "Å±": "u",
                        "Å³": "u",
                        "Å´": "W",
                        "Åµ": "w",
                        "Å¶": "Y",
                        "Å·": "y",
                        "Å¸": "Y",
                        "Å¹": "Z",
                        "Å»": "Z",
                        "Å½": "Z",
                        "Åº": "z",
                        "Å¼": "z",
                        "Å¾": "z",
                        "Ä²": "IJ",
                        "Ä³": "ij",
                        "Å’": "Oe",
                        "Å“": "oe",
                        "Å‰": "'n",
                        "Å¿": "s"
                    }), Pe = w({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}),
                    Ne = w({"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'"}), Re = function t(n) {
                        function e(t) {
                            if (to(t) && !Ua(t) && !(t instanceof w)) {
                                if (t instanceof i) return t;
                                if (Uo.call(t, "__wrapped__")) return xi(t)
                            }
                            return new i(t)
                        }

                        function r() {
                        }

                        function i(t, n) {
                            this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = D
                        }

                        function w(t) {
                            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = jt, this.__views__ = []
                        }

                        function In(t) {
                            var n = -1, e = null == t ? 0 : t.length;
                            for (this.clear(); ++n < e;) {
                                var r = t[n];
                                this.set(r[0], r[1])
                            }
                        }

                        function Ln(t) {
                            var n = -1, e = null == t ? 0 : t.length;
                            for (this.clear(); ++n < e;) {
                                var r = t[n];
                                this.set(r[0], r[1])
                            }
                        }

                        function zn(t) {
                            var n = -1, e = null == t ? 0 : t.length;
                            for (this.clear(); ++n < e;) {
                                var r = t[n];
                                this.set(r[0], r[1])
                            }
                        }

                        function qn(t) {
                            var n = -1, e = null == t ? 0 : t.length;
                            for (this.__data__ = new zn; ++n < e;) this.add(t[n])
                        }

                        function Fn(t) {
                            var n = this.__data__ = new Ln(t);
                            this.size = n.size
                        }

                        function Dn(t, n) {
                            var e = Ua(t), r = !e && Ha(t), i = !e && !r && Wa(t), o = !e && !r && !i && Xa(t),
                                u = e || r || i || o, a = u ? M(t.length, Lo) : [], c = a.length;
                            for (var f in t) !n && !Uo.call(t, f) || u && ("length" == f || i && ("offset" == f || "parent" == f) || o && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || si(f, c)) || a.push(f);
                            return a
                        }

                        function Gn(t) {
                            var n = t.length;
                            return n ? t[Qe(0, n - 1)] : D
                        }

                        function Hn(t, n, e) {
                            (e === D || Wi(t[n], e)) && (e !== D || n in t) || Yn(t, n, e)
                        }

                        function Un(t, n, e) {
                            var r = t[n];
                            Uo.call(t, n) && Wi(r, e) && (e !== D || n in t) || Yn(t, n, e)
                        }

                        function Vn(t, n) {
                            for (var e = t.length; e--;) if (Wi(t[e][0], n)) return e;
                            return -1
                        }

                        function Wn(t, n) {
                            return t && Tr(n, vo(n), t)
                        }

                        function Yn(t, n, e) {
                            "__proto__" == n && cu ? cu(t, n, {
                                configurable: !0,
                                enumerable: !0,
                                value: e,
                                writable: !0
                            }) : t[n] = e
                        }

                        function $n(t, n) {
                            for (var e = -1, r = n.length, i = Co(r), o = null == t; ++e < r;) i[e] = o ? D : ho(t, n[e]);
                            return i
                        }

                        function Jn(t, n, e) {
                            return t == t && (e !== D && (t = t <= e ? t : e), n !== D && (t = t >= n ? t : n)), t
                        }

                        function Kn(t, n, e, r, i, a) {
                            var f, s = n & $, l = n & J, h = n & K;
                            if (e && (f = i ? e(t, r, i, a) : e(t)), f !== D) return f;
                            if (!Qi(t)) return t;
                            var p = Ua(t);
                            if (p) {
                                if (f = function (t) {
                                        var n = t.length, e = t.constructor(n);
                                        return n && "string" == typeof t[0] && Uo.call(t, "index") && (e.index = t.index, e.input = t.input), e
                                    }(t), !s) return Mr(t, f)
                            } else {
                                var v = ta(t), g = v == Ct || v == Pt;
                                if (Wa(t)) return Or(t, s);
                                if (v == At || v == wt || g && !i) {
                                    if (f = l || g ? {} : ci(t), !s) return l ? function (t, n) {
                                        return Tr(t, Qu(t), n)
                                    }(t, function (n, e) {
                                        return n && Tr(t, go(t), n)
                                    }(f)) : function (t, n) {
                                        return Tr(t, Zu(t), n)
                                    }(t, Wn(f, t))
                                } else {
                                    if (!le[v]) return i ? t : {};
                                    f = function (t, n, e, r) {
                                        var i = t.constructor;
                                        switch (n) {
                                            case Ut:
                                                return _r(t);
                                            case Mt:
                                            case Tt:
                                                return new i(+t);
                                            case Vt:
                                                return function (t, n) {
                                                    var e = n ? _r(t.buffer) : t.buffer;
                                                    return new t.constructor(e, t.byteOffset, t.byteLength)
                                                }(t, r);
                                            case Wt:
                                            case Yt:
                                            case $t:
                                            case Jt:
                                            case Kt:
                                            case Xt:
                                            case Zt:
                                            case Qt:
                                            case tn:
                                                return mr(t, r);
                                            case Nt:
                                                return function (t, n, e) {
                                                    return d(n ? e(B(t), $) : B(t), o, new t.constructor)
                                                }(t, r, e);
                                            case Rt:
                                            case qt:
                                                return new i(t);
                                            case Lt:
                                                return function (t) {
                                                    var n = new t.constructor(t.source, Tn.exec(t));
                                                    return n.lastIndex = t.lastIndex, n
                                                }(t);
                                            case zt:
                                                return function (t, n, e) {
                                                    return d(n ? e(L(t), $) : L(t), u, new t.constructor)
                                                }(t, r, e);
                                            case Ft:
                                                return function (t) {
                                                    return qu ? Ao(qu.call(t)) : {}
                                                }(t)
                                        }
                                    }(t, v, Kn, s)
                                }
                            }
                            a || (a = new Fn);
                            var b = a.get(t);
                            if (b) return b;
                            a.set(t, f);
                            var y = p ? D : (h ? l ? ti : Qr : l ? go : vo)(t);
                            return c(y || t, function (r, i) {
                                y && (r = t[i = r]), Un(f, i, Kn(r, n, e, i, t, a))
                            }), f
                        }

                        function Xn(t, n, e) {
                            var r = e.length;
                            if (null == t) return !r;
                            for (t = Ao(t); r--;) {
                                var i = e[r], o = n[i], u = t[i];
                                if (u === D && !(i in t) || !o(u)) return !1
                            }
                            return !0
                        }

                        function Zn(t, n, e) {
                            if ("function" != typeof t) throw new zo(U);
                            return ra(function () {
                                t.apply(D, e)
                            }, n)
                        }

                        function Qn(t, n, e, r) {
                            var i = -1, o = l, u = !0, a = t.length, c = [], f = n.length;
                            if (!a) return c;
                            e && (n = p(n, T(e))), r ? (o = h, u = !1) : n.length >= G && (o = k, u = !1, n = new qn(n));
                            t:for (; ++i < a;) {
                                var s = t[i], v = null == e ? s : e(s);
                                if (s = r || 0 !== s ? s : 0, u && v == v) {
                                    for (var d = f; d--;) if (n[d] === v) continue t;
                                    c.push(s)
                                } else o(n, v, r) || c.push(s)
                            }
                            return c
                        }

                        function te(t, n, e) {
                            for (var r = -1, i = t.length; ++r < i;) {
                                var o = t[r], u = n(o);
                                if (null != u && (a === D ? u == u && !io(u) : e(u, a))) var a = u, c = o
                            }
                            return c
                        }

                        function ne(t, n) {
                            var e = [];
                            return Gu(t, function (t, r, i) {
                                n(t, r, i) && e.push(t)
                            }), e
                        }

                        function ie(t, n, e, r, i) {
                            var o = -1, u = t.length;
                            for (e || (e = fi), i || (i = []); ++o < u;) {
                                var a = t[o];
                                n > 0 && e(a) ? n > 1 ? ie(a, n - 1, e, r, i) : v(i, a) : r || (i[i.length] = a)
                            }
                            return i
                        }

                        function ue(t, n) {
                            return t && Uu(t, n, vo)
                        }

                        function he(t, n) {
                            return t && Vu(t, n, vo)
                        }

                        function de(t, n) {
                            return s(n, function (n) {
                                return Ki(t[n])
                            })
                        }

                        function ge(t, n) {
                            for (var e = 0, r = (n = yr(n, t)).length; null != t && e < r;) t = t[mi(n[e++])];
                            return e && e == r ? t : D
                        }

                        function ye(t, n, e) {
                            var r = n(t);
                            return Ua(t) ? r : v(r, e(t))
                        }

                        function je(t) {
                            return null == t ? t === D ? Dt : Bt : au && au in Ao(t) ? function (t) {
                                var n = Uo.call(t, au), e = t[au];
                                try {
                                    t[au] = D;
                                    var r = !0
                                } catch (t) {
                                }
                                var i = Yo.call(t);
                                return r && (n ? t[au] = e : delete t[au]), i
                            }(t) : function (t) {
                                return Yo.call(t)
                            }(t)
                        }

                        function _e(t, n) {
                            return t > n
                        }

                        function me(t, n) {
                            return null != t && Uo.call(t, n)
                        }

                        function ke(t, n) {
                            return null != t && n in Ao(t)
                        }

                        function Be(t, n, e) {
                            for (var r = e ? h : l, i = t[0].length, o = t.length, u = o, a = Co(o), c = 1 / 0, f = []; u--;) {
                                var s = t[u];
                                u && n && (s = p(s, T(n))), c = Ou(s.length, c), a[u] = !e && (n || i >= 120 && s.length >= 120) ? new qn(u && s) : D
                            }
                            s = t[0];
                            var v = -1, d = a[0];
                            t:for (; ++v < i && f.length < c;) {
                                var g = s[v], b = n ? n(g) : g;
                                if (g = e || 0 !== g ? g : 0, !(d ? k(d, b) : r(f, b, e))) {
                                    for (u = o; --u;) {
                                        var y = a[u];
                                        if (!(y ? k(y, b) : r(t[u], b, e))) continue t
                                    }
                                    d && d.push(b), f.push(g)
                                }
                            }
                            return f
                        }

                        function Ae(t, n, e) {
                            var r = null == (t = yi(t, n = yr(n, t))) ? t : t[mi(ki(n))];
                            return null == r ? D : a(r, t, e)
                        }

                        function Ie(t) {
                            return to(t) && je(t) == wt
                        }

                        function Le(t, n, e, r, i) {
                            return t === n || (null == t || null == n || !to(t) && !to(n) ? t != t && n != n : function (t, n, e, r, i, o) {
                                var u = Ua(t), a = Ua(n), c = u ? xt : ta(t), f = a ? xt : ta(n),
                                    s = (c = c == wt ? At : c) == At, l = (f = f == wt ? At : f) == At, h = c == f;
                                if (h && Wa(t)) {
                                    if (!Wa(n)) return !1;
                                    u = !0, s = !1
                                }
                                if (h && !s) return o || (o = new Fn), u || Xa(t) ? Xr(t, n, e, r, i, o) : function (t, n, e, r, i, o, u) {
                                    switch (c) {
                                        case Vt:
                                            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) return !1;
                                            t = t.buffer, n = n.buffer;
                                        case Ut:
                                            return !(t.byteLength != n.byteLength || !o(new Qo(t), new Qo(n)));
                                        case Mt:
                                        case Tt:
                                        case Rt:
                                            return Wi(+t, +n);
                                        case kt:
                                            return t.name == n.name && t.message == n.message;
                                        case Lt:
                                        case qt:
                                            return t == n + "";
                                        case Nt:
                                            var a = B;
                                        case zt:
                                            var f = r & X;
                                            if (a || (a = L), t.size != n.size && !f) return !1;
                                            var s = u.get(t);
                                            if (s) return s == n;
                                            r |= Z, u.set(t, n);
                                            var l = Xr(a(t), a(n), r, i, o, u);
                                            return u.delete(t), l;
                                        case Ft:
                                            if (qu) return qu.call(t) == qu.call(n)
                                    }
                                    return !1
                                }(t, n, 0, e, r, i, o);
                                if (!(e & X)) {
                                    var p = s && Uo.call(t, "__wrapped__"), v = l && Uo.call(n, "__wrapped__");
                                    if (p || v) {
                                        var d = p ? t.value() : t, g = v ? n.value() : n;
                                        return o || (o = new Fn), i(d, g, e, r, o)
                                    }
                                }
                                return !!h && (o || (o = new Fn), function (t, n, e, r, i, o) {
                                    var u = e & X, a = Qr(t), c = a.length, f = Qr(n).length;
                                    if (c != f && !u) return !1;
                                    for (var s = c; s--;) {
                                        var l = a[s];
                                        if (!(u ? l in n : Uo.call(n, l))) return !1
                                    }
                                    var h = o.get(t);
                                    if (h && o.get(n)) return h == n;
                                    var p = !0;
                                    o.set(t, n), o.set(n, t);
                                    for (var v = u; ++s < c;) {
                                        l = a[s];
                                        var d = t[l], g = n[l];
                                        if (r) var b = u ? r(g, d, l, n, t, o) : r(d, g, l, t, n, o);
                                        if (!(b === D ? d === g || i(d, g, e, r, o) : b)) {
                                            p = !1;
                                            break
                                        }
                                        v || (v = "constructor" == l)
                                    }
                                    if (p && !v) {
                                        var y = t.constructor, j = n.constructor;
                                        y != j && "constructor" in t && "constructor" in n && !("function" == typeof y && y instanceof y && "function" == typeof j && j instanceof j) && (p = !1)
                                    }
                                    return o.delete(t), o.delete(n), p
                                }(t, n, e, r, i, o))
                            }(t, n, e, r, Le, i))
                        }

                        function ze(t, n, e, r) {
                            var i = e.length, o = i, u = !r;
                            if (null == t) return !o;
                            for (t = Ao(t); i--;) {
                                var a = e[i];
                                if (u && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
                            }
                            for (; ++i < o;) {
                                var c = (a = e[i])[0], f = t[c], s = a[1];
                                if (u && a[2]) {
                                    if (f === D && !(c in t)) return !1
                                } else {
                                    var l = new Fn;
                                    if (r) var h = r(f, s, c, t, n, l);
                                    if (!(h === D ? Le(s, f, X | Z, r, l) : h)) return !1
                                }
                            }
                            return !0
                        }

                        function qe(t) {
                            return !(!Qi(t) || !!Wo && Wo in t) && (Ki(t) ? Ko : Cn).test(wi(t))
                        }

                        function Fe(t) {
                            return "function" == typeof t ? t : null == t ? wo : "object" == typeof t ? Ua(t) ? We(t[0], t[1]) : Ve(t) : To(t)
                        }

                        function De(t) {
                            if (!vi(t)) return yu(t);
                            var n = [];
                            for (var e in Ao(t)) Uo.call(t, e) && "constructor" != e && n.push(e);
                            return n
                        }

                        function Ge(t) {
                            if (!Qi(t)) return function (t) {
                                var n = [];
                                if (null != t) for (var e in Ao(t)) n.push(e);
                                return n
                            }(t);
                            var n = vi(t), e = [];
                            for (var r in t) ("constructor" != r || !n && Uo.call(t, r)) && e.push(r);
                            return e
                        }

                        function He(t, n) {
                            return t < n
                        }

                        function Ue(t, n) {
                            var e = -1, r = Yi(t) ? Co(t.length) : [];
                            return Gu(t, function (t, i, o) {
                                r[++e] = n(t, i, o)
                            }), r
                        }

                        function Ve(t) {
                            var n = oi(t);
                            return 1 == n.length && n[0][2] ? gi(n[0][0], n[0][1]) : function (e) {
                                return e === t || ze(e, t, n)
                            }
                        }

                        function We(t, n) {
                            return hi(t) && di(n) ? gi(mi(t), n) : function (e) {
                                var r = ho(e, t);
                                return r === D && r === n ? po(e, t) : Le(n, r, X | Z)
                            }
                        }

                        function Ye(t, n, e, r, i) {
                            t !== n && Uu(n, function (o, u) {
                                if (Qi(o)) i || (i = new Fn), function (t, n, e, r, i, o, u) {
                                    var a = t[e], c = n[e], f = u.get(c);
                                    if (f) Hn(t, e, f); else {
                                        var s = o ? o(a, c, e + "", t, n, u) : D, l = s === D;
                                        if (l) {
                                            var h = Ua(c), p = !h && Wa(c), v = !h && !p && Xa(c);
                                            s = c, h || p || v ? Ua(a) ? s = a : $i(a) ? s = Mr(a) : p ? (l = !1, s = Or(c, !0)) : v ? (l = !1, s = mr(c, !0)) : s = [] : eo(c) || Ha(c) ? (s = a, Ha(a) ? s = so(a) : (!Qi(a) || r && Ki(a)) && (s = ci(c))) : l = !1
                                        }
                                        l && (u.set(c, s), i(s, c, r, o, u), u.delete(c)), Hn(t, e, s)
                                    }
                                }(t, n, u, e, Ye, r, i); else {
                                    var a = r ? r(t[u], o, u + "", t, n, i) : D;
                                    a === D && (a = o), Hn(t, u, a)
                                }
                            }, go)
                        }

                        function $e(t, n) {
                            var e = t.length;
                            if (e) return n += n < 0 ? e : 0, si(n, e) ? t[n] : D
                        }

                        function Je(t, n, e) {
                            var r = -1;
                            return n = p(n.length ? n : [wo], T(ri())), function (t, n) {
                                var e = t.length;
                                for (t.sort(n); e--;) t[e] = t[e].value;
                                return t
                            }(Ue(t, function (t, e, i) {
                                return {
                                    criteria: p(n, function (n) {
                                        return n(t)
                                    }), index: ++r, value: t
                                }
                            }), function (t, n) {
                                return function (t, n, e) {
                                    for (var r = -1, i = t.criteria, o = n.criteria, u = i.length, a = e.length; ++r < u;) {
                                        var c = wr(i[r], o[r]);
                                        if (c) {
                                            if (r >= a) return c;
                                            var f = e[r];
                                            return c * ("desc" == f ? -1 : 1)
                                        }
                                    }
                                    return t.index - n.index
                                }(t, n, e)
                            })
                        }

                        function Ke(t, n, e) {
                            for (var r = -1, i = n.length, o = {}; ++r < i;) {
                                var u = n[r], a = ge(t, u);
                                e(a, u) && er(o, yr(u, t), a)
                            }
                            return o
                        }

                        function Xe(t, n, e, r) {
                            var i = r ? function (t, n, e, r) {
                                for (var i = e - 1, o = t.length; ++i < o;) if (r(t[i], n)) return i;
                                return -1
                            } : j, o = -1, u = n.length, a = t;
                            for (t === n && (n = Mr(n)), e && (a = p(t, T(e))); ++o < u;) for (var c = 0, f = n[o], s = e ? e(f) : f; (c = i(a, s, c, r)) > -1;) a !== t && iu.call(a, c, 1), iu.call(t, c, 1);
                            return t
                        }

                        function Ze(t, n) {
                            for (var e = t ? n.length : 0, r = e - 1; e--;) {
                                var i = n[e];
                                if (e == r || i !== o) {
                                    var o = i;
                                    si(i) ? iu.call(t, i, 1) : sr(t, i)
                                }
                            }
                            return t
                        }

                        function Qe(t, n) {
                            return t + pu(wu() * (n - t + 1))
                        }

                        function tr(t, n) {
                            var e = "";
                            if (!t || n < 1 || n > gt) return e;
                            do {
                                n % 2 && (e += t), (n = pu(n / 2)) && (t += t)
                            } while (n);
                            return e
                        }

                        function nr(t, n) {
                            return ia(bi(t, n, wo), t + "")
                        }

                        function er(t, n, e, r) {
                            if (!Qi(t)) return t;
                            for (var i = -1, o = (n = yr(n, t)).length, u = o - 1, a = t; null != a && ++i < o;) {
                                var c = mi(n[i]), f = e;
                                if (i != u) {
                                    var s = a[c];
                                    (f = r ? r(s, c, a) : D) === D && (f = Qi(s) ? s : si(n[i + 1]) ? [] : {})
                                }
                                Un(a, c, f), a = a[c]
                            }
                            return t
                        }

                        function rr(t, n, e) {
                            var r = -1, i = t.length;
                            n < 0 && (n = -n > i ? 0 : i + n), (e = e > i ? i : e) < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
                            for (var o = Co(i); ++r < i;) o[r] = t[r + n];
                            return o
                        }

                        function ir(t, n, e) {
                            var r = 0, i = null == t ? r : t.length;
                            if ("number" == typeof n && n == n && i <= _t) {
                                for (; r < i;) {
                                    var o = r + i >>> 1, u = t[o];
                                    null !== u && !io(u) && (e ? u <= n : u < n) ? r = o + 1 : i = o
                                }
                                return i
                            }
                            return or(t, n, wo, e)
                        }

                        function or(t, n, e, r) {
                            n = e(n);
                            for (var i = 0, o = null == t ? 0 : t.length, u = n != n, a = null === n, c = io(n), f = n === D; i < o;) {
                                var s = pu((i + o) / 2), l = e(t[s]), h = l !== D, p = null === l, v = l == l, d = io(l);
                                if (u) var g = r || v; else g = f ? v && (r || h) : a ? v && h && (r || !p) : c ? v && h && !p && (r || !d) : !p && !d && (r ? l <= n : l < n);
                                g ? i = s + 1 : o = s
                            }
                            return Ou(o, Ot)
                        }

                        function ur(t, n) {
                            for (var e = -1, r = t.length, i = 0, o = []; ++e < r;) {
                                var u = t[e], a = n ? n(u) : u;
                                if (!e || !Wi(a, c)) {
                                    var c = a;
                                    o[i++] = 0 === u ? 0 : u
                                }
                            }
                            return o
                        }

                        function ar(t) {
                            return "number" == typeof t ? t : io(t) ? yt : +t
                        }

                        function cr(t) {
                            if ("string" == typeof t) return t;
                            if (Ua(t)) return p(t, cr) + "";
                            if (io(t)) return Fu ? Fu.call(t) : "";
                            var n = t + "";
                            return "0" == n && 1 / t == -dt ? "-0" : n
                        }

                        function fr(t, n, e) {
                            var r = -1, i = l, o = t.length, u = !0, a = [], c = a;
                            if (e) u = !1, i = h; else if (o >= G) {
                                var f = n ? null : Ku(t);
                                if (f) return L(f);
                                u = !1, i = k, c = new qn
                            } else c = n ? [] : a;
                            t:for (; ++r < o;) {
                                var s = t[r], p = n ? n(s) : s;
                                if (s = e || 0 !== s ? s : 0, u && p == p) {
                                    for (var v = c.length; v--;) if (c[v] === p) continue t;
                                    n && c.push(p), a.push(s)
                                } else i(c, p, e) || (c !== a && c.push(p), a.push(s))
                            }
                            return a
                        }

                        function sr(t, n) {
                            return n = yr(n, t), null == (t = yi(t, n)) || delete t[mi(ki(n))]
                        }

                        function lr(t, n, e, r) {
                            return er(t, n, e(ge(t, n)), r)
                        }

                        function hr(t, n, e, r) {
                            for (var i = t.length, o = r ? i : -1; (r ? o-- : ++o < i) && n(t[o], o, t);) ;
                            return e ? rr(t, r ? 0 : o, r ? o + 1 : i) : rr(t, r ? o + 1 : 0, r ? i : o)
                        }

                        function pr(t, n) {
                            var e = t;
                            return e instanceof w && (e = e.value()), d(n, function (t, n) {
                                return n.func.apply(n.thisArg, v([t], n.args))
                            }, e)
                        }

                        function vr(t, n, e) {
                            var r = t.length;
                            if (r < 2) return r ? fr(t[0]) : [];
                            for (var i = -1, o = Co(r); ++i < r;) for (var u = t[i], a = -1; ++a < r;) a != i && (o[i] = Qn(o[i] || u, t[a], n, e));
                            return fr(ie(o, 1), n, e)
                        }

                        function dr(t, n, e) {
                            for (var r = -1, i = t.length, o = n.length, u = {}; ++r < i;) {
                                var a = r < o ? n[r] : D;
                                e(u, t[r], a)
                            }
                            return u
                        }

                        function gr(t) {
                            return $i(t) ? t : []
                        }

                        function br(t) {
                            return "function" == typeof t ? t : wo
                        }

                        function yr(t, n) {
                            return Ua(t) ? t : hi(t, n) ? [t] : oa(lo(t))
                        }

                        function jr(t, n, e) {
                            var r = t.length;
                            return e = e === D ? r : e, !n && e >= r ? t : rr(t, n, e)
                        }

                        function Or(t, n) {
                            if (n) return t.slice();
                            var e = t.length, r = tu ? tu(e) : new t.constructor(e);
                            return t.copy(r), r
                        }

                        function _r(t) {
                            var n = new t.constructor(t.byteLength);
                            return new Qo(n).set(new Qo(t)), n
                        }

                        function mr(t, n) {
                            var e = n ? _r(t.buffer) : t.buffer;
                            return new t.constructor(e, t.byteOffset, t.length)
                        }

                        function wr(t, n) {
                            if (t !== n) {
                                var e = t !== D, r = null === t, i = t == t, o = io(t), u = n !== D, a = null === n,
                                    c = n == n, f = io(n);
                                if (!a && !f && !o && t > n || o && u && c && !a && !f || r && u && c || !e && c || !i) return 1;
                                if (!r && !o && !f && t < n || f && e && i && !r && !o || a && e && i || !u && i || !c) return -1
                            }
                            return 0
                        }

                        function xr(t, n, e, r) {
                            for (var i = -1, o = t.length, u = e.length, a = -1, c = n.length, f = ju(o - u, 0), s = Co(c + f), l = !r; ++a < c;) s[a] = n[a];
                            for (; ++i < u;) (l || i < o) && (s[e[i]] = t[i]);
                            for (; f--;) s[a++] = t[i++];
                            return s
                        }

                        function Er(t, n, e, r) {
                            for (var i = -1, o = t.length, u = -1, a = e.length, c = -1, f = n.length, s = ju(o - a, 0), l = Co(s + f), h = !r; ++i < s;) l[i] = t[i];
                            for (var p = i; ++c < f;) l[p + c] = n[c];
                            for (; ++u < a;) (h || i < o) && (l[p + e[u]] = t[i++]);
                            return l
                        }

                        function Mr(t, n) {
                            var e = -1, r = t.length;
                            for (n || (n = Co(r)); ++e < r;) n[e] = t[e];
                            return n
                        }

                        function Tr(t, n, e, r) {
                            var i = !e;
                            e || (e = {});
                            for (var o = -1, u = n.length; ++o < u;) {
                                var a = n[o], c = r ? r(e[a], t[a], a, e, t) : D;
                                c === D && (c = t[a]), i ? Yn(e, a, c) : Un(e, a, c)
                            }
                            return e
                        }

                        function Sr(t, n) {
                            return function (e, r) {
                                var i = Ua(e) ? function (t, n, e, r) {
                                    for (var i = -1, o = null == t ? 0 : t.length; ++i < o;) {
                                        var u = t[i];
                                        n(r, u, e(u), t)
                                    }
                                    return r
                                } : function (t, n, e, r) {
                                    return Gu(t, function (t, i, o) {
                                        n(r, t, e(t), o)
                                    }), r
                                }, o = n ? n() : {};
                                return i(e, t, ri(r, 2), o)
                            }
                        }

                        function kr(t) {
                            return nr(function (n, e) {
                                var r = -1, i = e.length, o = i > 1 ? e[i - 1] : D, u = i > 2 ? e[2] : D;
                                for (o = t.length > 3 && "function" == typeof o ? (i--, o) : D, u && li(e[0], e[1], u) && (o = i < 3 ? D : o, i = 1), n = Ao(n); ++r < i;) {
                                    var a = e[r];
                                    a && t(n, a, r, o)
                                }
                                return n
                            })
                        }

                        function Cr(t, n) {
                            return function (e, r) {
                                if (null == e) return e;
                                if (!Yi(e)) return t(e, r);
                                for (var i = e.length, o = n ? i : -1, u = Ao(e); (n ? o-- : ++o < i) && !1 !== r(u[o], o, u);) ;
                                return e
                            }
                        }

                        function Pr(t) {
                            return function (n, e, r) {
                                for (var i = -1, o = Ao(n), u = r(n), a = u.length; a--;) {
                                    var c = u[t ? a : ++i];
                                    if (!1 === e(o[c], c, o)) break
                                }
                                return n
                            }
                        }

                        function Nr(t) {
                            return function (n) {
                                var e = R(n = lo(n)) ? F(n) : D, r = e ? e[0] : n.charAt(0),
                                    i = e ? jr(e, 1).join("") : n.slice(1);
                                return r[t]() + i
                            }
                        }

                        function Rr(t) {
                            return function (n) {
                                return d(_o(Oo(n).replace(ee, "")), t, "")
                            }
                        }

                        function Br(t) {
                            return function () {
                                var n = arguments;
                                switch (n.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(n[0]);
                                    case 2:
                                        return new t(n[0], n[1]);
                                    case 3:
                                        return new t(n[0], n[1], n[2]);
                                    case 4:
                                        return new t(n[0], n[1], n[2], n[3]);
                                    case 5:
                                        return new t(n[0], n[1], n[2], n[3], n[4]);
                                    case 6:
                                        return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
                                    case 7:
                                        return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
                                }
                                var e = Du(t.prototype), r = t.apply(e, n);
                                return Qi(r) ? r : e
                            }
                        }

                        function Ar(t) {
                            return function (n, e, r) {
                                var i = Ao(n);
                                if (!Yi(n)) {
                                    var o = ri(e, 3);
                                    n = vo(n), e = function (t) {
                                        return o(i[t], t, i)
                                    }
                                }
                                var u = t(n, e, r);
                                return u > -1 ? i[o ? n[u] : u] : D
                            }
                        }

                        function Ir(t) {
                            return Zr(function (n) {
                                var e = n.length, r = e, o = i.prototype.thru;
                                for (t && n.reverse(); r--;) {
                                    var u = n[r];
                                    if ("function" != typeof u) throw new zo(U);
                                    if (o && !a && "wrapper" == ni(u)) var a = new i([], !0)
                                }
                                for (r = a ? r : e; ++r < e;) {
                                    var c = ni(u = n[r]), f = "wrapper" == c ? Xu(u) : D;
                                    a = f && pi(f[0]) && f[1] == (ut | et | it | at) && !f[4].length && 1 == f[9] ? a[ni(f[0])].apply(a, f[3]) : 1 == u.length && pi(u) ? a[c]() : a.thru(u)
                                }
                                return function () {
                                    var t = arguments, r = t[0];
                                    if (a && 1 == t.length && Ua(r)) return a.plant(r).value();
                                    for (var i = 0, o = e ? n[i].apply(this, t) : r; ++i < e;) o = n[i].call(this, o);
                                    return o
                                }
                            })
                        }

                        function Lr(t, n, e, r, i, o, u, a, c, f) {
                            function s() {
                                for (var b = arguments.length, y = Co(b), j = b; j--;) y[j] = arguments[j];
                                if (v) var O = ei(s), _ = function (t, n) {
                                    for (var e = t.length, r = 0; e--;) t[e] === n && ++r;
                                    return r
                                }(y, O);
                                if (r && (y = xr(y, r, i, v)), o && (y = Er(y, o, u, v)), b -= _, v && b < f) {
                                    var m = I(y, O);
                                    return Ur(t, n, Lr, s.placeholder, e, y, m, a, c, f - b)
                                }
                                var w = h ? e : this, x = p ? w[t] : t;
                                return b = y.length, a ? y = function (t, n) {
                                    for (var e = t.length, r = Ou(n.length, e), i = Mr(t); r--;) {
                                        var o = n[r];
                                        t[r] = si(o, e) ? i[o] : D
                                    }
                                    return t
                                }(y, a) : d && b > 1 && y.reverse(), l && c < b && (y.length = c), this && this !== be && this instanceof s && (x = g || Br(x)), x.apply(w, y)
                            }

                            var l = n & ut, h = n & Q, p = n & tt, v = n & (et | rt), d = n & ct, g = p ? D : Br(t);
                            return s
                        }

                        function zr(t, n) {
                            return function (e, r) {
                                return function (t, n, e, r) {
                                    return ue(t, function (t, i, o) {
                                        n(r, e(t), i, o)
                                    }), r
                                }(e, t, n(r), {})
                            }
                        }

                        function qr(t, n) {
                            return function (e, r) {
                                var i;
                                if (e === D && r === D) return n;
                                if (e !== D && (i = e), r !== D) {
                                    if (i === D) return r;
                                    "string" == typeof e || "string" == typeof r ? (e = cr(e), r = cr(r)) : (e = ar(e), r = ar(r)), i = t(e, r)
                                }
                                return i
                            }
                        }

                        function Fr(t) {
                            return Zr(function (n) {
                                return n = p(n, T(ri())), nr(function (e) {
                                    var r = this;
                                    return t(n, function (t) {
                                        return a(t, r, e)
                                    })
                                })
                            })
                        }

                        function Dr(t, n) {
                            var e = (n = n === D ? " " : cr(n)).length;
                            if (e < 2) return e ? tr(n, t) : n;
                            var r = tr(n, hu(t / q(n)));
                            return R(n) ? jr(F(r), 0, t).join("") : r.slice(0, t)
                        }

                        function Gr(t) {
                            return function (n, e, r) {
                                return r && "number" != typeof r && li(n, e, r) && (e = r = D), n = uo(n), e === D ? (e = n, n = 0) : e = uo(e), r = r === D ? n < e ? 1 : -1 : uo(r), function (t, n, e, r) {
                                    for (var i = -1, o = ju(hu((n - t) / (e || 1)), 0), u = Co(o); o--;) u[r ? o : ++i] = t, t += e;
                                    return u
                                }(n, e, r, t)
                            }
                        }

                        function Hr(t) {
                            return function (n, e) {
                                return "string" == typeof n && "string" == typeof e || (n = fo(n), e = fo(e)), t(n, e)
                            }
                        }

                        function Ur(t, n, e, r, i, o, u, a, c, f) {
                            var s = n & et;
                            n |= s ? it : ot, (n &= ~(s ? ot : it)) & nt || (n &= ~(Q | tt));
                            var l = [t, n, i, s ? o : D, s ? u : D, s ? D : o, s ? D : u, a, c, f], h = e.apply(D, l);
                            return pi(t) && ea(h, l), h.placeholder = r, ji(h, t, n)
                        }

                        function Vr(t) {
                            var n = Bo[t];
                            return function (t, e) {
                                if (t = fo(t), e = null == e ? 0 : Ou(ao(e), 292)) {
                                    var r = (lo(t) + "e").split("e");
                                    return +((r = (lo(n(r[0] + "e" + (+r[1] + e))) + "e").split("e"))[0] + "e" + (+r[1] - e))
                                }
                                return n(t)
                            }
                        }

                        function Wr(t) {
                            return function (n) {
                                var e = ta(n);
                                return e == Nt ? B(n) : e == zt ? z(n) : function (t, n) {
                                    return p(n, function (n) {
                                        return [n, t[n]]
                                    })
                                }(n, t(n))
                            }
                        }

                        function Yr(t, n, e, r, i, o, u, c) {
                            var f = n & tt;
                            if (!f && "function" != typeof t) throw new zo(U);
                            var s = r ? r.length : 0;
                            if (s || (n &= ~(it | ot), r = i = D), u = u === D ? u : ju(ao(u), 0), c = c === D ? c : ao(c), s -= i ? i.length : 0, n & ot) {
                                var l = r, h = i;
                                r = i = D
                            }
                            var p = f ? D : Xu(t), v = [t, n, e, r, i, l, h, o, u, c];
                            if (p && function (t, n) {
                                    var e = t[1], r = n[1], i = e | r, o = i < (Q | tt | ut),
                                        u = r == ut && e == et || r == ut && e == at && t[7].length <= n[8] || r == (ut | at) && n[7].length <= n[8] && e == et;
                                    if (!o && !u) return t;
                                    r & Q && (t[2] = n[2], i |= e & Q ? 0 : nt);
                                    var a = n[3];
                                    if (a) {
                                        var c = t[3];
                                        t[3] = c ? xr(c, a, n[4]) : a, t[4] = c ? I(t[3], Y) : n[4]
                                    }
                                    (a = n[5]) && (c = t[5], t[5] = c ? Er(c, a, n[6]) : a, t[6] = c ? I(t[5], Y) : n[6]), (a = n[7]) && (t[7] = a), r & ut && (t[8] = null == t[8] ? n[8] : Ou(t[8], n[8])), null == t[9] && (t[9] = n[9]), t[0] = n[0], t[1] = i
                                }(v, p), t = v[0], n = v[1], e = v[2], r = v[3], i = v[4], !(c = v[9] = v[9] === D ? f ? 0 : t.length : ju(v[9] - s, 0)) && n & (et | rt) && (n &= ~(et | rt)), n && n != Q) d = n == et || n == rt ? function (t, n, e) {
                                function r() {
                                    for (var o = arguments.length, u = Co(o), c = o, f = ei(r); c--;) u[c] = arguments[c];
                                    var s = o < 3 && u[0] !== f && u[o - 1] !== f ? [] : I(u, f);
                                    return (o -= s.length) < e ? Ur(t, n, Lr, r.placeholder, D, u, s, D, D, e - o) : a(this && this !== be && this instanceof r ? i : t, this, u)
                                }

                                var i = Br(t);
                                return r
                            }(t, n, c) : n != it && n != (Q | it) || i.length ? Lr.apply(D, v) : function (t, n, e, r) {
                                function i() {
                                    for (var n = -1, c = arguments.length, f = -1, s = r.length, l = Co(s + c), h = this && this !== be && this instanceof i ? u : t; ++f < s;) l[f] = r[f];
                                    for (; c--;) l[f++] = arguments[++n];
                                    return a(h, o ? e : this, l)
                                }

                                var o = n & Q, u = Br(t);
                                return i
                            }(t, n, e, r); else var d = function (t, n, e) {
                                function r() {
                                    return (this && this !== be && this instanceof r ? o : t).apply(i ? e : this, arguments)
                                }

                                var i = n & Q, o = Br(t);
                                return r
                            }(t, n, e);
                            return ji((p ? Wu : ea)(d, v), t, n)
                        }

                        function $r(t, n, e, r) {
                            return t === D || Wi(t, Do[e]) && !Uo.call(r, e) ? n : t
                        }

                        function Jr(t, n, e, r, i, o) {
                            return Qi(t) && Qi(n) && (o.set(n, t), Ye(t, n, D, Jr, o), o.delete(n)), t
                        }

                        function Kr(t) {
                            return eo(t) ? D : t
                        }

                        function Xr(t, n, e, r, i, o) {
                            var u = e & X, a = t.length, c = n.length;
                            if (a != c && !(u && c > a)) return !1;
                            var f = o.get(t);
                            if (f && o.get(n)) return f == n;
                            var s = -1, l = !0, h = e & Z ? new qn : D;
                            for (o.set(t, n), o.set(n, t); ++s < a;) {
                                var p = t[s], v = n[s];
                                if (r) var d = u ? r(v, p, s, n, t, o) : r(p, v, s, t, n, o);
                                if (d !== D) {
                                    if (d) continue;
                                    l = !1;
                                    break
                                }
                                if (h) {
                                    if (!g(n, function (t, n) {
                                            if (!k(h, n) && (p === t || i(p, t, e, r, o))) return h.push(n)
                                        })) {
                                        l = !1;
                                        break
                                    }
                                } else if (p !== v && !i(p, v, e, r, o)) {
                                    l = !1;
                                    break
                                }
                            }
                            return o.delete(t), o.delete(n), l
                        }

                        function Zr(t) {
                            return ia(bi(t, D, Ti), t + "")
                        }

                        function Qr(t) {
                            return ye(t, vo, Zu)
                        }

                        function ti(t) {
                            return ye(t, go, Qu)
                        }

                        function ni(t) {
                            for (var n = t.name + "", e = Nu[n], r = Uo.call(Nu, n) ? e.length : 0; r--;) {
                                var i = e[r], o = i.func;
                                if (null == o || o == t) return i.name
                            }
                            return n
                        }

                        function ei(t) {
                            return (Uo.call(e, "placeholder") ? e : t).placeholder
                        }

                        function ri() {
                            var t = e.iteratee || xo;
                            return t = t === xo ? Fe : t, arguments.length ? t(arguments[0], arguments[1]) : t
                        }

                        function ii(t, n) {
                            var e = t.__data__;
                            return function (t) {
                                var e = typeof n;
                                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== n : null === n
                            }() ? e["string" == typeof n ? "string" : "hash"] : e.map
                        }

                        function oi(t) {
                            for (var n = vo(t), e = n.length; e--;) {
                                var r = n[e], i = t[r];
                                n[e] = [r, i, di(i)]
                            }
                            return n
                        }

                        function ui(t, n) {
                            var e = function (t, n) {
                                return null == t ? D : t[n]
                            }(t, n);
                            return qe(e) ? e : D
                        }

                        function ai(t, n, e) {
                            for (var r = -1, i = (n = yr(n, t)).length, o = !1; ++r < i;) {
                                var u = mi(n[r]);
                                if (!(o = null != t && e(t, u))) break;
                                t = t[u]
                            }
                            return o || ++r != i ? o : !!(i = null == t ? 0 : t.length) && Zi(i) && si(u, i) && (Ua(t) || Ha(t))
                        }

                        function ci(t) {
                            return "function" != typeof t.constructor || vi(t) ? {} : Du(nu(t))
                        }

                        function fi(t) {
                            return Ua(t) || Ha(t) || !!(ou && t && t[ou])
                        }

                        function si(t, n) {
                            return !!(n = null == n ? gt : n) && ("number" == typeof t || Nn.test(t)) && t > -1 && t % 1 == 0 && t < n
                        }

                        function li(t, n, e) {
                            if (!Qi(e)) return !1;
                            var r = typeof n;
                            return !!("number" == r ? Yi(e) && si(n, e.length) : "string" == r && n in e) && Wi(e[n], t)
                        }

                        function hi(t, n) {
                            if (Ua(t)) return !1;
                            var e = typeof t;
                            return !("number" != e && "symbol" != e && "boolean" != e && null != t && !io(t)) || pn.test(t) || !hn.test(t) || null != n && t in Ao(n)
                        }

                        function pi(t) {
                            var n = ni(t), r = e[n];
                            if ("function" != typeof r || !(n in w.prototype)) return !1;
                            if (t === r) return !0;
                            var i = Xu(r);
                            return !!i && t === i[0]
                        }

                        function vi(t) {
                            var n = t && t.constructor;
                            return t === ("function" == typeof n && n.prototype || Do)
                        }

                        function di(t) {
                            return t == t && !Qi(t)
                        }

                        function gi(t, n) {
                            return function (e) {
                                return null != e && e[t] === n && (n !== D || t in Ao(e))
                            }
                        }

                        function bi(t, n, e) {
                            return n = ju(n === D ? t.length - 1 : n, 0), function () {
                                for (var r = arguments, i = -1, o = ju(r.length - n, 0), u = Co(o); ++i < o;) u[i] = r[n + i];
                                i = -1;
                                for (var c = Co(n + 1); ++i < n;) c[i] = r[i];
                                return c[n] = e(u), a(t, this, c)
                            }
                        }

                        function yi(t, n) {
                            return n.length < 2 ? t : ge(t, rr(n, 0, -1))
                        }

                        function ji(t, n, e) {
                            var r = n + "";
                            return ia(t, function (t, n) {
                                var e = n.length;
                                if (!e) return t;
                                var r = e - 1;
                                return n[r] = (e > 1 ? "& " : "") + n[r], n = n.join(e > 2 ? ", " : " "), t.replace(_n, "{\n/* [wrapped with " + n + "] */\n")
                            }(r, function (t, n) {
                                return c(mt, function (e) {
                                    var r = "_." + e[0];
                                    n & e[1] && !l(t, r) && t.push(r)
                                }), t.sort()
                            }(function (t) {
                                var n = t.match(mn);
                                return n ? n[1].split(wn) : []
                            }(r), e)))
                        }

                        function Oi(t) {
                            var n = 0, e = 0;
                            return function () {
                                var r = _u(), i = ht - (r - e);
                                if (e = r, i > 0) {
                                    if (++n >= lt) return arguments[0]
                                } else n = 0;
                                return t.apply(D, arguments)
                            }
                        }

                        function _i(t, n) {
                            var e = -1, r = t.length, i = r - 1;
                            for (n = n === D ? r : n; ++e < n;) {
                                var o = Qe(e, i), u = t[o];
                                t[o] = t[e], t[e] = u
                            }
                            return t.length = n, t
                        }

                        function mi(t) {
                            if ("string" == typeof t || io(t)) return t;
                            var n = t + "";
                            return "0" == n && 1 / t == -dt ? "-0" : n
                        }

                        function wi(t) {
                            if (null != t) {
                                try {
                                    return Ho.call(t)
                                } catch (t) {
                                }
                                try {
                                    return t + ""
                                } catch (t) {
                                }
                            }
                            return ""
                        }

                        function xi(t) {
                            if (t instanceof w) return t.clone();
                            var n = new i(t.__wrapped__, t.__chain__);
                            return n.__actions__ = Mr(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n
                        }

                        function Ei(t, n, e) {
                            var r = null == t ? 0 : t.length;
                            if (!r) return -1;
                            var i = null == e ? 0 : ao(e);
                            return i < 0 && (i = ju(r + i, 0)), y(t, ri(n, 3), i)
                        }

                        function Mi(t, n, e) {
                            var r = null == t ? 0 : t.length;
                            if (!r) return -1;
                            var i = r - 1;
                            return e !== D && (i = ao(e), i = e < 0 ? ju(r + i, 0) : Ou(i, r - 1)), y(t, ri(n, 3), i, !0)
                        }

                        function Ti(t) {
                            return (null == t ? 0 : t.length) ? ie(t, 1) : []
                        }

                        function Si(t) {
                            return t && t.length ? t[0] : D
                        }

                        function ki(t) {
                            var n = null == t ? 0 : t.length;
                            return n ? t[n - 1] : D
                        }

                        function Ci(t, n) {
                            return t && t.length && n && n.length ? Xe(t, n) : t
                        }

                        function Pi(t) {
                            return null == t ? t : xu.call(t)
                        }

                        function Ni(t) {
                            if (!t || !t.length) return [];
                            var n = 0;
                            return t = s(t, function (t) {
                                if ($i(t)) return n = ju(t.length, n), !0
                            }), M(n, function (n) {
                                return p(t, m(n))
                            })
                        }

                        function Ri(t, n) {
                            if (!t || !t.length) return [];
                            var e = Ni(t);
                            return null == n ? e : p(e, function (t) {
                                return a(n, D, t)
                            })
                        }

                        function Bi(t) {
                            var n = e(t);
                            return n.__chain__ = !0, n
                        }

                        function Ai(t, n) {
                            return n(t)
                        }

                        function Ii(t, n) {
                            return (Ua(t) ? c : Gu)(t, ri(n, 3))
                        }

                        function Li(t, n) {
                            return (Ua(t) ? function (t, n) {
                                for (var e = null == t ? 0 : t.length; e-- && !1 !== n(t[e], e, t);) ;
                                return t
                            } : Hu)(t, ri(n, 3))
                        }

                        function zi(t, n) {
                            return (Ua(t) ? p : Ue)(t, ri(n, 3))
                        }

                        function qi(t, n, e) {
                            return n = e ? D : n, n = t && null == n ? t.length : n, Yr(t, ut, D, D, D, D, n)
                        }

                        function Fi(t, n) {
                            var e;
                            if ("function" != typeof n) throw new zo(U);
                            return t = ao(t), function () {
                                return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = D), e
                            }
                        }

                        function Di(t, n, e) {
                            var r = Yr(t, et, D, D, D, D, D, n = e ? D : n);
                            return r.placeholder = Di.placeholder, r
                        }

                        function Gi(t, n, e) {
                            var r = Yr(t, rt, D, D, D, D, D, n = e ? D : n);
                            return r.placeholder = Gi.placeholder, r
                        }

                        function Hi(t, n, e) {
                            function r(n) {
                                var e = c, r = f;
                                return c = f = D, v = n, l = t.apply(r, e)
                            }

                            function i(t) {
                                var e = t - p;
                                return p === D || e >= n || e < 0 || g && t - v >= s
                            }

                            function o() {
                                var t = Na();
                                if (i(t)) return u(t);
                                h = ra(o, function (t) {
                                    var e = n - (t - p);
                                    return g ? Ou(e, s - (t - v)) : e
                                }(t))
                            }

                            function u(t) {
                                return h = D, b && c ? r(t) : (c = f = D, l)
                            }

                            function a() {
                                var t = Na(), e = i(t);
                                if (c = arguments, f = this, p = t, e) {
                                    if (h === D) return function (t) {
                                        return v = t, h = ra(o, n), d ? r(t) : l
                                    }(p);
                                    if (g) return h = ra(o, n), r(p)
                                }
                                return h === D && (h = ra(o, n)), l
                            }

                            var c, f, s, l, h, p, v = 0, d = !1, g = !1, b = !0;
                            if ("function" != typeof t) throw new zo(U);
                            return n = fo(n) || 0, Qi(e) && (d = !!e.leading, s = (g = "maxWait" in e) ? ju(fo(e.maxWait) || 0, n) : s, b = "trailing" in e ? !!e.trailing : b), a.cancel = function () {
                                h !== D && Ju(h), v = 0, c = p = f = h = D
                            }, a.flush = function () {
                                return h === D ? l : u(Na())
                            }, a
                        }

                        function Ui(t, n) {
                            if ("function" != typeof t || null != n && "function" != typeof n) throw new zo(U);
                            var e = function () {
                                var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
                                if (o.has(i)) return o.get(i);
                                var u = t.apply(this, r);
                                return e.cache = o.set(i, u) || o, u
                            };
                            return e.cache = new (Ui.Cache || zn), e
                        }

                        function Vi(t) {
                            if ("function" != typeof t) throw new zo(U);
                            return function () {
                                var n = arguments;
                                switch (n.length) {
                                    case 0:
                                        return !t.call(this);
                                    case 1:
                                        return !t.call(this, n[0]);
                                    case 2:
                                        return !t.call(this, n[0], n[1]);
                                    case 3:
                                        return !t.call(this, n[0], n[1], n[2])
                                }
                                return !t.apply(this, n)
                            }
                        }

                        function Wi(t, n) {
                            return t === n || t != t && n != n
                        }

                        function Yi(t) {
                            return null != t && Zi(t.length) && !Ki(t)
                        }

                        function $i(t) {
                            return to(t) && Yi(t)
                        }

                        function Ji(t) {
                            if (!to(t)) return !1;
                            var n = je(t);
                            return n == kt || n == St || "string" == typeof t.message && "string" == typeof t.name && !eo(t)
                        }

                        function Ki(t) {
                            if (!Qi(t)) return !1;
                            var n = je(t);
                            return n == Ct || n == Pt || n == Et || n == It
                        }

                        function Xi(t) {
                            return "number" == typeof t && t == ao(t)
                        }

                        function Zi(t) {
                            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= gt
                        }

                        function Qi(t) {
                            var n = typeof t;
                            return null != t && ("object" == n || "function" == n)
                        }

                        function to(t) {
                            return null != t && "object" == typeof t
                        }

                        function no(t) {
                            return "number" == typeof t || to(t) && je(t) == Rt
                        }

                        function eo(t) {
                            if (!to(t) || je(t) != At) return !1;
                            var n = nu(t);
                            if (null === n) return !0;
                            var e = Uo.call(n, "constructor") && n.constructor;
                            return "function" == typeof e && e instanceof e && Ho.call(e) == $o
                        }

                        function ro(t) {
                            return "string" == typeof t || !Ua(t) && to(t) && je(t) == qt
                        }

                        function io(t) {
                            return "symbol" == typeof t || to(t) && je(t) == Ft
                        }

                        function oo(t) {
                            if (!t) return [];
                            if (Yi(t)) return ro(t) ? F(t) : Mr(t);
                            if (uu && t[uu]) return function (t) {
                                for (var n, e = []; !(n = t.next()).done;) e.push(n.value);
                                return e
                            }(t[uu]());
                            var n = ta(t);
                            return (n == Nt ? B : n == zt ? L : yo)(t)
                        }

                        function uo(t) {
                            return t ? (t = fo(t)) === dt || t === -dt ? (t < 0 ? -1 : 1) * bt : t == t ? t : 0 : 0 === t ? t : 0
                        }

                        function ao(t) {
                            var n = uo(t), e = n % 1;
                            return n == n ? e ? n - e : n : 0
                        }

                        function co(t) {
                            return t ? Jn(ao(t), 0, jt) : 0
                        }

                        function fo(t) {
                            if ("number" == typeof t) return t;
                            if (io(t)) return yt;
                            if (Qi(t)) {
                                var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                                t = Qi(n) ? n + "" : n
                            }
                            if ("string" != typeof t) return 0 === t ? t : +t;
                            t = t.replace(yn, "");
                            var e = kn.test(t);
                            return e || Pn.test(t) ? ve(t.slice(2), e ? 2 : 8) : Sn.test(t) ? yt : +t
                        }

                        function so(t) {
                            return Tr(t, go(t))
                        }

                        function lo(t) {
                            return null == t ? "" : cr(t)
                        }

                        function ho(t, n, e) {
                            var r = null == t ? D : ge(t, n);
                            return r === D ? e : r
                        }

                        function po(t, n) {
                            return null != t && ai(t, n, ke)
                        }

                        function vo(t) {
                            return Yi(t) ? Dn(t) : De(t)
                        }

                        function go(t) {
                            return Yi(t) ? Dn(t, !0) : Ge(t)
                        }

                        function bo(t, n) {
                            if (null == t) return {};
                            var e = p(ti(t), function (t) {
                                return [t]
                            });
                            return n = ri(n), Ke(t, e, function (t, e) {
                                return n(t, e[0])
                            })
                        }

                        function yo(t) {
                            return null == t ? [] : S(t, vo(t))
                        }

                        function jo(t) {
                            return wc(lo(t).toLowerCase())
                        }

                        function Oo(t) {
                            return (t = lo(t)) && t.replace(Rn, Ce).replace(re, "")
                        }

                        function _o(t, n, e) {
                            return t = lo(t), (n = e ? D : n) === D ? function (t) {
                                return ae.test(t)
                            }(t) ? function (t) {
                                return t.match(oe) || []
                            }(t) : function (t) {
                                return t.match(xn) || []
                            }(t) : t.match(n) || []
                        }

                        function mo(t) {
                            return function () {
                                return t
                            }
                        }

                        function wo(t) {
                            return t
                        }

                        function xo(t) {
                            return Fe("function" == typeof t ? t : Kn(t, $))
                        }

                        function Eo(t, n, e) {
                            var r = vo(n), i = de(n, r);
                            null != e || Qi(n) && (i.length || !r.length) || (e = n, n = t, t = this, i = de(n, vo(n)));
                            var o = !(Qi(e) && "chain" in e && !e.chain), u = Ki(t);
                            return c(i, function (e) {
                                var r = n[e];
                                t[e] = r, u && (t.prototype[e] = function () {
                                    var n = this.__chain__;
                                    if (o || n) {
                                        var e = t(this.__wrapped__);
                                        return (e.__actions__ = Mr(this.__actions__)).push({
                                            func: r,
                                            args: arguments,
                                            thisArg: t
                                        }), e.__chain__ = n, e
                                    }
                                    return r.apply(t, v([this.value()], arguments))
                                })
                            }), t
                        }

                        function Mo() {
                        }

                        function To(t) {
                            return hi(t) ? m(mi(t)) : function (t) {
                                return function (n) {
                                    return ge(n, t)
                                }
                            }(t)
                        }

                        function So() {
                            return []
                        }

                        function ko() {
                            return !1
                        }

                        var Co = (n = null == n ? be : Re.defaults(be.Object(), n, Re.pick(be, ce))).Array, Po = n.Date,
                            No = n.Error, Ro = n.Function, Bo = n.Math, Ao = n.Object, Io = n.RegExp, Lo = n.String,
                            zo = n.TypeError, qo = Co.prototype, Fo = Ro.prototype, Do = Ao.prototype,
                            Go = n["__core-js_shared__"], Ho = Fo.toString, Uo = Do.hasOwnProperty, Vo = 0,
                            Wo = function () {
                                var t = /[^.]+$/.exec(Go && Go.keys && Go.keys.IE_PROTO || "");
                                return t ? "Symbol(src)_1." + t : ""
                            }(), Yo = Do.toString, $o = Ho.call(Ao), Jo = be._,
                            Ko = Io("^" + Ho.call(Uo).replace(gn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            Xo = Oe ? n.Buffer : D, Zo = n.Symbol, Qo = n.Uint8Array, tu = Xo ? Xo.allocUnsafe : D,
                            nu = A(Ao.getPrototypeOf, Ao), eu = Ao.create, ru = Do.propertyIsEnumerable, iu = qo.splice,
                            ou = Zo ? Zo.isConcatSpreadable : D, uu = Zo ? Zo.iterator : D, au = Zo ? Zo.toStringTag : D,
                            cu = function () {
                                try {
                                    var t = ui(Ao, "defineProperty");
                                    return t({}, "", {}), t
                                } catch (t) {
                                }
                            }(), fu = n.clearTimeout !== be.clearTimeout && n.clearTimeout,
                            su = Po && Po.now !== be.Date.now && Po.now,
                            lu = n.setTimeout !== be.setTimeout && n.setTimeout, hu = Bo.ceil, pu = Bo.floor,
                            vu = Ao.getOwnPropertySymbols, du = Xo ? Xo.isBuffer : D, gu = n.isFinite, bu = qo.join,
                            yu = A(Ao.keys, Ao), ju = Bo.max, Ou = Bo.min, _u = Po.now, mu = n.parseInt, wu = Bo.random,
                            xu = qo.reverse, Eu = ui(n, "DataView"), Mu = ui(n, "Map"), Tu = ui(n, "Promise"),
                            Su = ui(n, "Set"), ku = ui(n, "WeakMap"), Cu = ui(Ao, "create"), Pu = ku && new ku, Nu = {},
                            Ru = wi(Eu), Bu = wi(Mu), Au = wi(Tu), Iu = wi(Su), Lu = wi(ku), zu = Zo ? Zo.prototype : D,
                            qu = zu ? zu.valueOf : D, Fu = zu ? zu.toString : D, Du = function () {
                                function t() {
                                }

                                return function (n) {
                                    if (!Qi(n)) return {};
                                    if (eu) return eu(n);
                                    t.prototype = n;
                                    var e = new t;
                                    return t.prototype = D, e
                                }
                            }();
                        e.templateSettings = {
                            escape: fn,
                            evaluate: sn,
                            interpolate: ln,
                            variable: "",
                            imports: {_: e}
                        }, (e.prototype = r.prototype).constructor = e, (i.prototype = Du(r.prototype)).constructor = i, (w.prototype = Du(r.prototype)).constructor = w, In.prototype.clear = function () {
                            this.__data__ = Cu ? Cu(null) : {}, this.size = 0
                        }, In.prototype.delete = function (t) {
                            var n = this.has(t) && delete this.__data__[t];
                            return this.size -= n ? 1 : 0, n
                        }, In.prototype.get = function (t) {
                            var n = this.__data__;
                            if (Cu) {
                                var e = n[t];
                                return e === V ? D : e
                            }
                            return Uo.call(n, t) ? n[t] : D
                        }, In.prototype.has = function (t) {
                            var n = this.__data__;
                            return Cu ? n[t] !== D : Uo.call(n, t)
                        }, In.prototype.set = function (t, n) {
                            var e = this.__data__;
                            return this.size += this.has(t) ? 0 : 1, e[t] = Cu && n === D ? V : n, this
                        }, Ln.prototype.clear = function () {
                            this.__data__ = [], this.size = 0
                        }, Ln.prototype.delete = function (t) {
                            var n = this.__data__, e = Vn(n, t);
                            return !(e < 0 || (e == n.length - 1 ? n.pop() : iu.call(n, e, 1), --this.size, 0))
                        }, Ln.prototype.get = function (t) {
                            var n = this.__data__, e = Vn(n, t);
                            return e < 0 ? D : n[e][1]
                        }, Ln.prototype.has = function (t) {
                            return Vn(this.__data__, t) > -1
                        }, Ln.prototype.set = function (t, n) {
                            var e = this.__data__, r = Vn(e, t);
                            return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this
                        }, zn.prototype.clear = function () {
                            this.size = 0, this.__data__ = {hash: new In, map: new (Mu || Ln), string: new In}
                        }, zn.prototype.delete = function (t) {
                            var n = ii(this, t).delete(t);
                            return this.size -= n ? 1 : 0, n
                        }, zn.prototype.get = function (t) {
                            return ii(this, t).get(t)
                        }, zn.prototype.has = function (t) {
                            return ii(this, t).has(t)
                        }, zn.prototype.set = function (t, n) {
                            var e = ii(this, t), r = e.size;
                            return e.set(t, n), this.size += e.size == r ? 0 : 1, this
                        }, qn.prototype.add = qn.prototype.push = function (t) {
                            return this.__data__.set(t, V), this
                        }, qn.prototype.has = function (t) {
                            return this.__data__.has(t)
                        }, Fn.prototype.clear = function () {
                            this.__data__ = new Ln, this.size = 0
                        }, Fn.prototype.delete = function (t) {
                            var n = this.__data__, e = n.delete(t);
                            return this.size = n.size, e
                        }, Fn.prototype.get = function (t) {
                            return this.__data__.get(t)
                        }, Fn.prototype.has = function (t) {
                            return this.__data__.has(t)
                        }, Fn.prototype.set = function (t, n) {
                            var e = this.__data__;
                            if (e instanceof Ln) {
                                var r = e.__data__;
                                if (!Mu || r.length < G - 1) return r.push([t, n]), this.size = ++e.size, this;
                                e = this.__data__ = new zn(r)
                            }
                            return e.set(t, n), this.size = e.size, this
                        };
                        var Gu = Cr(ue), Hu = Cr(he, !0), Uu = Pr(), Vu = Pr(!0), Wu = Pu ? function (t, n) {
                            return Pu.set(t, n), t
                        } : wo, Yu = cu ? function (t, n) {
                            return cu(t, "toString", {configurable: !0, enumerable: !1, value: mo(n), writable: !0})
                        } : wo, $u = nr, Ju = fu || function (t) {
                            return be.clearTimeout(t)
                        }, Ku = Su && 1 / L(new Su([, -0]))[1] == dt ? function (t) {
                            return new Su(t)
                        } : Mo, Xu = Pu ? function (t) {
                            return Pu.get(t)
                        } : Mo, Zu = vu ? function (t) {
                            return null == t ? [] : (t = Ao(t), s(vu(t), function (n) {
                                return ru.call(t, n)
                            }))
                        } : So, Qu = vu ? function (t) {
                            for (var n = []; t;) v(n, Zu(t)), t = nu(t);
                            return n
                        } : So, ta = je;
                        (Eu && ta(new Eu(new ArrayBuffer(1))) != Vt || Mu && ta(new Mu) != Nt || Tu && "[object Promise]" != ta(Tu.resolve()) || Su && ta(new Su) != zt || ku && ta(new ku) != Gt) && (ta = function (t) {
                            var n = je(t), e = n == At ? t.constructor : D, r = e ? wi(e) : "";
                            if (r) switch (r) {
                                case Ru:
                                    return Vt;
                                case Bu:
                                    return Nt;
                                case Au:
                                    return "[object Promise]";
                                case Iu:
                                    return zt;
                                case Lu:
                                    return Gt
                            }
                            return n
                        });
                        var na = Go ? Ki : ko, ea = Oi(Wu), ra = lu || function (t, n) {
                            return be.setTimeout(t, n)
                        }, ia = Oi(Yu), oa = function (t) {
                            var n = Ui(t, function (t) {
                                return e.size === W && e.clear(), t
                            }), e = n.cache;
                            return n
                        }(function (t) {
                            var n = [];
                            return vn.test(t) && n.push(""), t.replace(dn, function (t, e, r, i) {
                                n.push(r ? i.replace(En, "$1") : e || t)
                            }), n
                        }), ua = nr(function (t, n) {
                            return $i(t) ? Qn(t, ie(n, 1, $i, !0)) : []
                        }), aa = nr(function (t, n) {
                            var e = ki(n);
                            return $i(e) && (e = D), $i(t) ? Qn(t, ie(n, 1, $i, !0), ri(e, 2)) : []
                        }), ca = nr(function (t, n) {
                            var e = ki(n);
                            return $i(e) && (e = D), $i(t) ? Qn(t, ie(n, 1, $i, !0), D, e) : []
                        }), fa = nr(function (t) {
                            var n = p(t, gr);
                            return n.length && n[0] === t[0] ? Be(n) : []
                        }), sa = nr(function (t) {
                            var n = ki(t), e = p(t, gr);
                            return n === ki(e) ? n = D : e.pop(), e.length && e[0] === t[0] ? Be(e, ri(n, 2)) : []
                        }), la = nr(function (t) {
                            var n = ki(t), e = p(t, gr);
                            return (n = "function" == typeof n ? n : D) && e.pop(), e.length && e[0] === t[0] ? Be(e, D, n) : []
                        }), ha = nr(Ci), pa = Zr(function (t, n) {
                            var e = null == t ? 0 : t.length, r = $n(t, n);
                            return Ze(t, p(n, function (t) {
                                return si(t, e) ? +t : t
                            }).sort(wr)), r
                        }), va = nr(function (t) {
                            return fr(ie(t, 1, $i, !0))
                        }), da = nr(function (t) {
                            var n = ki(t);
                            return $i(n) && (n = D), fr(ie(t, 1, $i, !0), ri(n, 2))
                        }), ga = nr(function (t) {
                            var n = ki(t);
                            return n = "function" == typeof n ? n : D, fr(ie(t, 1, $i, !0), D, n)
                        }), ba = nr(function (t, n) {
                            return $i(t) ? Qn(t, n) : []
                        }), ya = nr(function (t) {
                            return vr(s(t, $i))
                        }), ja = nr(function (t) {
                            var n = ki(t);
                            return $i(n) && (n = D), vr(s(t, $i), ri(n, 2))
                        }), Oa = nr(function (t) {
                            var n = ki(t);
                            return n = "function" == typeof n ? n : D, vr(s(t, $i), D, n)
                        }), _a = nr(Ni), ma = nr(function (t) {
                            var n = t.length, e = n > 1 ? t[n - 1] : D;
                            return e = "function" == typeof e ? (t.pop(), e) : D, Ri(t, e)
                        }), wa = Zr(function (t) {
                            var n = t.length, e = n ? t[0] : 0, r = this.__wrapped__, o = function (n) {
                                return $n(n, t)
                            };
                            return !(n > 1 || this.__actions__.length) && r instanceof w && si(e) ? ((r = r.slice(e, +e + (n ? 1 : 0))).__actions__.push({
                                func: Ai,
                                args: [o],
                                thisArg: D
                            }), new i(r, this.__chain__).thru(function (t) {
                                return n && !t.length && t.push(D), t
                            })) : this.thru(o)
                        }), xa = Sr(function (t, n, e) {
                            Uo.call(t, e) ? ++t[e] : Yn(t, e, 1)
                        }), Ea = Ar(Ei), Ma = Ar(Mi), Ta = Sr(function (t, n, e) {
                            Uo.call(t, e) ? t[e].push(n) : Yn(t, e, [n])
                        }), Sa = nr(function (t, n, e) {
                            var r = -1, i = "function" == typeof n, o = Yi(t) ? Co(t.length) : [];
                            return Gu(t, function (t) {
                                o[++r] = i ? a(n, t, e) : Ae(t, n, e)
                            }), o
                        }), ka = Sr(function (t, n, e) {
                            Yn(t, e, n)
                        }), Ca = Sr(function (t, n, e) {
                            t[e ? 0 : 1].push(n)
                        }, function () {
                            return [[], []]
                        }), Pa = nr(function (t, n) {
                            if (null == t) return [];
                            var e = n.length;
                            return e > 1 && li(t, n[0], n[1]) ? n = [] : e > 2 && li(n[0], n[1], n[2]) && (n = [n[0]]), Je(t, ie(n, 1), [])
                        }), Na = su || function () {
                            return be.Date.now()
                        }, Ra = nr(function (t, n, e) {
                            var r = Q;
                            if (e.length) {
                                var i = I(e, ei(Ra));
                                r |= it
                            }
                            return Yr(t, r, n, e, i)
                        }), Ba = nr(function (t, n, e) {
                            var r = Q | tt;
                            if (e.length) {
                                var i = I(e, ei(Ba));
                                r |= it
                            }
                            return Yr(n, r, t, e, i)
                        }), Aa = nr(function (t, n) {
                            return Zn(t, 1, n)
                        }), Ia = nr(function (t, n, e) {
                            return Zn(t, fo(n) || 0, e)
                        });
                        Ui.Cache = zn;
                        var La = $u(function (t, n) {
                            var e = (n = 1 == n.length && Ua(n[0]) ? p(n[0], T(ri())) : p(ie(n, 1), T(ri()))).length;
                            return nr(function (r) {
                                for (var i = -1, o = Ou(r.length, e); ++i < o;) r[i] = n[i].call(this, r[i]);
                                return a(t, this, r)
                            })
                        }), za = nr(function (t, n) {
                            var e = I(n, ei(za));
                            return Yr(t, it, D, n, e)
                        }), qa = nr(function (t, n) {
                            var e = I(n, ei(qa));
                            return Yr(t, ot, D, n, e)
                        }), Fa = Zr(function (t, n) {
                            return Yr(t, at, D, D, D, n)
                        }), Da = Hr(_e), Ga = Hr(function (t, n) {
                            return t >= n
                        }), Ha = Ie(function () {
                            return arguments
                        }()) ? Ie : function (t) {
                            return to(t) && Uo.call(t, "callee") && !ru.call(t, "callee")
                        }, Ua = Co.isArray, Va = we ? T(we) : function (t) {
                            return to(t) && je(t) == Ut
                        }, Wa = du || ko, Ya = xe ? T(xe) : function (t) {
                            return to(t) && je(t) == Tt
                        }, $a = Ee ? T(Ee) : function (t) {
                            return to(t) && ta(t) == Nt
                        }, Ja = Me ? T(Me) : function (t) {
                            return to(t) && je(t) == Lt
                        }, Ka = Te ? T(Te) : function (t) {
                            return to(t) && ta(t) == zt
                        }, Xa = Se ? T(Se) : function (t) {
                            return to(t) && Zi(t.length) && !!se[je(t)]
                        }, Za = Hr(He), Qa = Hr(function (t, n) {
                            return t <= n
                        }), tc = kr(function (t, n) {
                            if (vi(n) || Yi(n)) Tr(n, vo(n), t); else for (var e in n) Uo.call(n, e) && Un(t, e, n[e])
                        }), nc = kr(function (t, n) {
                            Tr(n, go(n), t)
                        }), ec = kr(function (t, n, e, r) {
                            Tr(n, go(n), t, r)
                        }), rc = kr(function (t, n, e, r) {
                            Tr(n, vo(n), t, r)
                        }), ic = Zr($n), oc = nr(function (t) {
                            return t.push(D, $r), a(ec, D, t)
                        }), uc = nr(function (t) {
                            return t.push(D, Jr), a(lc, D, t)
                        }), ac = zr(function (t, n, e) {
                            t[n] = e
                        }, mo(wo)), cc = zr(function (t, n, e) {
                            Uo.call(t, n) ? t[n].push(e) : t[n] = [e]
                        }, ri), fc = nr(Ae), sc = kr(function (t, n, e) {
                            Ye(t, n, e)
                        }), lc = kr(function (t, n, e, r) {
                            Ye(t, n, e, r)
                        }), hc = Zr(function (t, n) {
                            var e = {};
                            if (null == t) return e;
                            var r = !1;
                            n = p(n, function (n) {
                                return n = yr(n, t), r || (r = n.length > 1), n
                            }), Tr(t, ti(t), e), r && (e = Kn(e, $ | J | K, Kr));
                            for (var i = n.length; i--;) sr(e, n[i]);
                            return e
                        }), pc = Zr(function (t, n) {
                            return null == t ? {} : function (t, n) {
                                return Ke(t, n, function (n, e) {
                                    return po(t, e)
                                })
                            }(t, n)
                        }), vc = Wr(vo), dc = Wr(go), gc = Rr(function (t, n, e) {
                            return n = n.toLowerCase(), t + (e ? jo(n) : n)
                        }), bc = Rr(function (t, n, e) {
                            return t + (e ? "-" : "") + n.toLowerCase()
                        }), yc = Rr(function (t, n, e) {
                            return t + (e ? " " : "") + n.toLowerCase()
                        }), jc = Nr("toLowerCase"), Oc = Rr(function (t, n, e) {
                            return t + (e ? "_" : "") + n.toLowerCase()
                        }), _c = Rr(function (t, n, e) {
                            return t + (e ? " " : "") + wc(n)
                        }), mc = Rr(function (t, n, e) {
                            return t + (e ? " " : "") + n.toUpperCase()
                        }), wc = Nr("toUpperCase"), xc = nr(function (t, n) {
                            try {
                                return a(t, D, n)
                            } catch (t) {
                                return Ji(t) ? t : new No(t)
                            }
                        }), Ec = Zr(function (t, n) {
                            return c(n, function (n) {
                                n = mi(n), Yn(t, n, Ra(t[n], t))
                            }), t
                        }), Mc = Ir(), Tc = Ir(!0), Sc = nr(function (t, n) {
                            return function (e) {
                                return Ae(e, t, n)
                            }
                        }), kc = nr(function (t, n) {
                            return function (e) {
                                return Ae(t, e, n)
                            }
                        }), Cc = Fr(p), Pc = Fr(f), Nc = Fr(g), Rc = Gr(), Bc = Gr(!0), Ac = qr(function (t, n) {
                            return t + n
                        }, 0), Ic = Vr("ceil"), Lc = qr(function (t, n) {
                            return t / n
                        }, 1), zc = Vr("floor"), qc = qr(function (t, n) {
                            return t * n
                        }, 1), Fc = Vr("round"), Dc = qr(function (t, n) {
                            return t - n
                        }, 0);
                        return e.after = function (t, n) {
                            if ("function" != typeof n) throw new zo(U);
                            return t = ao(t), function () {
                                if (--t < 1) return n.apply(this, arguments)
                            }
                        }, e.ary = qi, e.assign = tc, e.assignIn = nc, e.assignInWith = ec, e.assignWith = rc, e.at = ic, e.before = Fi, e.bind = Ra, e.bindAll = Ec, e.bindKey = Ba, e.castArray = function () {
                            if (!arguments.length) return [];
                            var t = arguments[0];
                            return Ua(t) ? t : [t]
                        }, e.chain = Bi, e.chunk = function (t, n, e) {
                            n = (e ? li(t, n, e) : n === D) ? 1 : ju(ao(n), 0);
                            var r = null == t ? 0 : t.length;
                            if (!r || n < 1) return [];
                            for (var i = 0, o = 0, u = Co(hu(r / n)); i < r;) u[o++] = rr(t, i, i += n);
                            return u
                        }, e.compact = function (t) {
                            for (var n = -1, e = null == t ? 0 : t.length, r = 0, i = []; ++n < e;) {
                                var o = t[n];
                                o && (i[r++] = o)
                            }
                            return i
                        }, e.concat = function () {
                            var t = arguments.length;
                            if (!t) return [];
                            for (var n = Co(t - 1), e = arguments[0], r = t; r--;) n[r - 1] = arguments[r];
                            return v(Ua(e) ? Mr(e) : [e], ie(n, 1))
                        }, e.cond = function (t) {
                            var n = null == t ? 0 : t.length, e = ri();
                            return t = n ? p(t, function (t) {
                                if ("function" != typeof t[1]) throw new zo(U);
                                return [e(t[0]), t[1]]
                            }) : [], nr(function (e) {
                                for (var r = -1; ++r < n;) {
                                    var i = t[r];
                                    if (a(i[0], this, e)) return a(i[1], this, e)
                                }
                            })
                        }, e.conforms = function (t) {
                            return function (t) {
                                var n = vo(t);
                                return function (e) {
                                    return Xn(e, t, n)
                                }
                            }(Kn(t, $))
                        }, e.constant = mo, e.countBy = xa, e.create = function (t, n) {
                            var e = Du(t);
                            return null == n ? e : Wn(e, n)
                        }, e.curry = Di, e.curryRight = Gi, e.debounce = Hi, e.defaults = oc, e.defaultsDeep = uc, e.defer = Aa, e.delay = Ia, e.difference = ua, e.differenceBy = aa, e.differenceWith = ca, e.drop = function (t, n, e) {
                            var r = null == t ? 0 : t.length;
                            return r ? (n = e || n === D ? 1 : ao(n), rr(t, n < 0 ? 0 : n, r)) : []
                        }, e.dropRight = function (t, n, e) {
                            var r = null == t ? 0 : t.length;
                            return r ? (n = e || n === D ? 1 : ao(n), n = r - n, rr(t, 0, n < 0 ? 0 : n)) : []
                        }, e.dropRightWhile = function (t, n) {
                            return t && t.length ? hr(t, ri(n, 3), !0, !0) : []
                        }, e.dropWhile = function (t, n) {
                            return t && t.length ? hr(t, ri(n, 3), !0) : []
                        }, e.fill = function (t, n, e, r) {
                            var i = null == t ? 0 : t.length;
                            return i ? (e && "number" != typeof e && li(t, n, e) && (e = 0, r = i), function (t, n, e, r) {
                                var i = t.length;
                                for ((e = ao(e)) < 0 && (e = -e > i ? 0 : i + e), (r = r === D || r > i ? i : ao(r)) < 0 && (r += i), r = e > r ? 0 : co(r); e < r;) t[e++] = n;
                                return t
                            }(t, n, e, r)) : []
                        }, e.filter = function (t, n) {
                            return (Ua(t) ? s : ne)(t, ri(n, 3))
                        }, e.flatMap = function (t, n) {
                            return ie(zi(t, n), 1)
                        }, e.flatMapDeep = function (t, n) {
                            return ie(zi(t, n), dt)
                        }, e.flatMapDepth = function (t, n, e) {
                            return e = e === D ? 1 : ao(e), ie(zi(t, n), e)
                        }, e.flatten = Ti, e.flattenDeep = function (t) {
                            return (null == t ? 0 : t.length) ? ie(t, dt) : []
                        }, e.flattenDepth = function (t, n) {
                            return (null == t ? 0 : t.length) ? (n = n === D ? 1 : ao(n), ie(t, n)) : []
                        }, e.flip = function (t) {
                            return Yr(t, ct)
                        }, e.flow = Mc, e.flowRight = Tc, e.fromPairs = function (t) {
                            for (var n = -1, e = null == t ? 0 : t.length, r = {}; ++n < e;) {
                                var i = t[n];
                                r[i[0]] = i[1]
                            }
                            return r
                        }, e.functions = function (t) {
                            return null == t ? [] : de(t, vo(t))
                        }, e.functionsIn = function (t) {
                            return null == t ? [] : de(t, go(t))
                        }, e.groupBy = Ta, e.initial = function (t) {
                            return (null == t ? 0 : t.length) ? rr(t, 0, -1) : []
                        }, e.intersection = fa, e.intersectionBy = sa, e.intersectionWith = la, e.invert = ac, e.invertBy = cc, e.invokeMap = Sa, e.iteratee = xo, e.keyBy = ka, e.keys = vo, e.keysIn = go, e.map = zi, e.mapKeys = function (t, n) {
                            var e = {};
                            return n = ri(n, 3), ue(t, function (t, r, i) {
                                Yn(e, n(t, r, i), t)
                            }), e
                        }, e.mapValues = function (t, n) {
                            var e = {};
                            return n = ri(n, 3), ue(t, function (t, r, i) {
                                Yn(e, r, n(t, r, i))
                            }), e
                        }, e.matches = function (t) {
                            return Ve(Kn(t, $))
                        }, e.matchesProperty = function (t, n) {
                            return We(t, Kn(n, $))
                        }, e.memoize = Ui, e.merge = sc, e.mergeWith = lc, e.method = Sc, e.methodOf = kc, e.mixin = Eo, e.negate = Vi, e.nthArg = function (t) {
                            return t = ao(t), nr(function (n) {
                                return $e(n, t)
                            })
                        }, e.omit = hc, e.omitBy = function (t, n) {
                            return bo(t, Vi(ri(n)))
                        }, e.once = function (t) {
                            return Fi(2, t)
                        }, e.orderBy = function (t, n, e, r) {
                            return null == t ? [] : (Ua(n) || (n = null == n ? [] : [n]), e = r ? D : e, Ua(e) || (e = null == e ? [] : [e]), Je(t, n, e))
                        }, e.over = Cc, e.overArgs = La, e.overEvery = Pc, e.overSome = Nc, e.partial = za, e.partialRight = qa, e.partition = Ca, e.pick = pc, e.pickBy = bo, e.property = To, e.propertyOf = function (t) {
                            return function (n) {
                                return null == t ? D : ge(t, n)
                            }
                        }, e.pull = ha, e.pullAll = Ci, e.pullAllBy = function (t, n, e) {
                            return t && t.length && n && n.length ? Xe(t, n, ri(e, 2)) : t
                        }, e.pullAllWith = function (t, n, e) {
                            return t && t.length && n && n.length ? Xe(t, n, D, e) : t
                        }, e.pullAt = pa, e.range = Rc, e.rangeRight = Bc, e.rearg = Fa, e.reject = function (t, n) {
                            return (Ua(t) ? s : ne)(t, Vi(ri(n, 3)))
                        }, e.remove = function (t, n) {
                            var e = [];
                            if (!t || !t.length) return e;
                            var r = -1, i = [], o = t.length;
                            for (n = ri(n, 3); ++r < o;) {
                                var u = t[r];
                                n(u, r, t) && (e.push(u), i.push(r))
                            }
                            return Ze(t, i), e
                        }, e.rest = function (t, n) {
                            if ("function" != typeof t) throw new zo(U);
                            return n = n === D ? n : ao(n), nr(t, n)
                        }, e.reverse = Pi,e.sampleSize = function (t, n, e) {
                            return n = (e ? li(t, n, e) : n === D) ? 1 : ao(n), (Ua(t) ? function (t, n) {
                                return _i(Mr(t), Jn(n, 0, t.length))
                            } : function (t, n) {
                                var e = yo(t);
                                return _i(e, Jn(n, 0, e.length))
                            })(t, n)
                        },e.set = function (t, n, e) {
                            return null == t ? t : er(t, n, e)
                        },e.setWith = function (t, n, e, r) {
                            return r = "function" == typeof r ? r : D, null == t ? t : er(t, n, e, r)
                        },e.shuffle = function (t) {
                            return (Ua(t) ? function (t) {
                                return _i(Mr(t))
                            } : function (t) {
                                return _i(yo(t))
                            })(t)
                        },e.slice = function (t, n, e) {
                            var r = null == t ? 0 : t.length;
                            return r ? (e && "number" != typeof e && li(t, n, e) ? (n = 0, e = r) : (n = null == n ? 0 : ao(n), e = e === D ? r : ao(e)), rr(t, n, e)) : []
                        },e.sortBy = Pa,e.sortedUniq = function (t) {
                            return t && t.length ? ur(t) : []
                        },e.sortedUniqBy = function (t, n) {
                            return t && t.length ? ur(t, ri(n, 2)) : []
                        },e.split = function (t, n, e) {
                            return e && "number" != typeof e && li(t, n, e) && (n = e = D), (e = e === D ? jt : e >>> 0) ? (t = lo(t)) && ("string" == typeof n || null != n && !Ja(n)) && !(n = cr(n)) && R(t) ? jr(F(t), 0, e) : t.split(n, e) : []
                        },e.spread = function (t, n) {
                            if ("function" != typeof t) throw new zo(U);
                            return n = null == n ? 0 : ju(ao(n), 0), nr(function (e) {
                                var r = e[n], i = jr(e, 0, n);
                                return r && v(i, r), a(t, this, i)
                            })
                        },e.tail = function (t) {
                            var n = null == t ? 0 : t.length;
                            return n ? rr(t, 1, n) : []
                        },e.take = function (t, n, e) {
                            return t && t.length ? (n = e || n === D ? 1 : ao(n), rr(t, 0, n < 0 ? 0 : n)) : []
                        },e.takeRight = function (t, n, e) {
                            var r = null == t ? 0 : t.length;
                            return r ? (n = e || n === D ? 1 : ao(n), n = r - n, rr(t, n < 0 ? 0 : n, r)) : []
                        },e.takeRightWhile = function (t, n) {
                            return t && t.length ? hr(t, ri(n, 3), !1, !0) : []
                        },e.takeWhile = function (t, n) {
                            return t && t.length ? hr(t, ri(n, 3)) : []
                        },e.tap = function (t, n) {
                            return n(t), t
                        },e.throttle = function (t, n, e) {
                            var r = !0, i = !0;
                            if ("function" != typeof t) throw new zo(U);
                            return Qi(e) && (r = "leading" in e ? !!e.leading : r, i = "trailing" in e ? !!e.trailing : i), Hi(t, n, {
                                leading: r,
                                maxWait: n,
                                trailing: i
                            })
                        },e.thru = Ai,e.toArray = oo,e.toPairs = vc,e.toPairsIn = dc,e.toPath = function (t) {
                            return Ua(t) ? p(t, mi) : io(t) ? [t] : Mr(oa(lo(t)))
                        },e.toPlainObject = so,e.transform = function (t, n, e) {
                            var r = Ua(t), i = r || Wa(t) || Xa(t);
                            if (n = ri(n, 4), null == e) {
                                var o = t && t.constructor;
                                e = i ? r ? new o : [] : Qi(t) && Ki(o) ? Du(nu(t)) : {}
                            }
                            return (i ? c : ue)(t, function (t, r, i) {
                                return n(e, t, r, i)
                            }), e
                        },e.unary = function (t) {
                            return qi(t, 1)
                        },e.union = va,e.unionBy = da,e.unionWith = ga,e.uniq = function (t) {
                            return t && t.length ? fr(t) : []
                        },e.uniqBy = function (t, n) {
                            return t && t.length ? fr(t, ri(n, 2)) : []
                        },e.uniqWith = function (t, n) {
                            return n = "function" == typeof n ? n : D, t && t.length ? fr(t, D, n) : []
                        },e.unset = function (t, n) {
                            return null == t || sr(t, n)
                        },e.unzip = Ni,e.unzipWith = Ri,e.update = function (t, n, e) {
                            return null == t ? t : lr(t, n, br(e))
                        },e.updateWith = function (t, n, e, r) {
                            return r = "function" == typeof r ? r : D, null == t ? t : lr(t, n, br(e), r)
                        },e.values = yo,e.valuesIn = function (t) {
                            return null == t ? [] : S(t, go(t))
                        },e.without = ba,e.words = _o,e.wrap = function (t, n) {
                            return za(br(n), t)
                        },e.xor = ya,e.xorBy = ja,e.xorWith = Oa,e.zip = _a,e.zipObject = function (t, n) {
                            return dr(t || [], n || [], Un)
                        },e.zipObjectDeep = function (t, n) {
                            return dr(t || [], n || [], er)
                        },e.zipWith = ma,e.entries = vc,e.entriesIn = dc,e.extend = nc,e.extendWith = ec,Eo(e, e),e.add = Ac,e.attempt = xc,e.camelCase = gc,e.capitalize = jo,e.ceil = Ic,e.clamp = function (t, n, e) {
                            return e === D && (e = n, n = D), e !== D && (e = (e = fo(e)) == e ? e : 0), n !== D && (n = (n = fo(n)) == n ? n : 0), Jn(fo(t), n, e)
                        },e.clone = function (t) {
                            return Kn(t, K)
                        },e.cloneDeep = function (t) {
                            return Kn(t, $ | K)
                        },e.cloneDeepWith = function (t, n) {
                            return n = "function" == typeof n ? n : D, Kn(t, $ | K, n)
                        },e.cloneWith = function (t, n) {
                            return n = "function" == typeof n ? n : D, Kn(t, K, n)
                        },e.conformsTo = function (t, n) {
                            return null == n || Xn(t, n, vo(n))
                        },e.deburr = Oo,e.defaultTo = function (t, n) {
                            return null == t || t != t ? n : t
                        },e.divide = Lc,e.endsWith = function (t, n, e) {
                            t = lo(t), n = cr(n);
                            var r = t.length, i = e = e === D ? r : Jn(ao(e), 0, r);
                            return (e -= n.length) >= 0 && t.slice(e, i) == n
                        },e.eq = Wi,e.escape = function (t) {
                            return (t = lo(t)) && cn.test(t) ? t.replace(un, Pe) : t
                        },e.escapeRegExp = function (t) {
                            return (t = lo(t)) && bn.test(t) ? t.replace(gn, "\\$&") : t
                        },e.every = function (t, n, e) {
                            var r = Ua(t) ? f : function (t, n) {
                                var e = !0;
                                return Gu(t, function (t, r, i) {
                                    return e = !!n(t, r, i)
                                }), e
                            };
                            return e && li(t, n, e) && (n = D), r(t, ri(n, 3))
                        },e.find = Ea,e.findIndex = Ei,e.findKey = function (t, n) {
                            return b(t, ri(n, 3), ue)
                        },e.findLast = Ma,e.findLastIndex = Mi,e.findLastKey = function (t, n) {
                            return b(t, ri(n, 3), he)
                        },e.floor = zc,e.forEach = Ii,e.forEachRight = Li,e.forIn = function (t, n) {
                            return null == t ? t : Uu(t, ri(n, 3), go)
                        },e.forInRight = function (t, n) {
                            return null == t ? t : Vu(t, ri(n, 3), go)
                        },e.forOwn = function (t, n) {
                            return t && ue(t, ri(n, 3))
                        },e.forOwnRight = function (t, n) {
                            return t && he(t, ri(n, 3))
                        },e.get = ho,e.gt = Da,e.gte = Ga,e.has = function (t, n) {
                            return null != t && ai(t, n, me)
                        },e.hasIn = po,e.head = Si,e.identity = wo,e.includes = function (t, n, e, r) {
                            t = Yi(t) ? t : yo(t), e = e && !r ? ao(e) : 0;
                            var i = t.length;
                            return e < 0 && (e = ju(i + e, 0)), ro(t) ? e <= i && t.indexOf(n, e) > -1 : !!i && j(t, n, e) > -1
                        },e.indexOf = function (t, n, e) {
                            var r = null == t ? 0 : t.length;
                            if (!r) return -1;
                            var i = null == e ? 0 : ao(e);
                            return i < 0 && (i = ju(r + i, 0)), j(t, n, i)
                        },e.inRange = function (t, n, e) {
                            return n = uo(n), e === D ? (e = n, n = 0) : e = uo(e), t = fo(t), function (t, n, e) {
                                return t >= Ou(n, e) && t < ju(n, e)
                            }(t, n, e)
                        },e.invoke = fc,e.isArguments = Ha,e.isArray = Ua,e.isArrayBuffer = Va,e.isArrayLike = Yi,e.isArrayLikeObject = $i,e.isBoolean = function (t) {
                            return !0 === t || !1 === t || to(t) && je(t) == Mt
                        },e.isBuffer = Wa,e.isDate = Ya,e.isElement = function (t) {
                            return to(t) && 1 === t.nodeType && !eo(t)
                        },e.isEmpty = function (t) {
                            if (null == t) return !0;
                            if (Yi(t) && (Ua(t) || "string" == typeof t || "function" == typeof t.splice || Wa(t) || Xa(t) || Ha(t))) return !t.length;
                            var n = ta(t);
                            if (n == Nt || n == zt) return !t.size;
                            if (vi(t)) return !De(t).length;
                            for (var e in t) if (Uo.call(t, e)) return !1;
                            return !0
                        },e.isEqual = function (t, n) {
                            return Le(t, n)
                        },e.isEqualWith = function (t, n, e) {
                            var r = (e = "function" == typeof e ? e : D) ? e(t, n) : D;
                            return r === D ? Le(t, n, D, e) : !!r
                        },e.isError = Ji,e.isFinite = function (t) {
                            return "number" == typeof t && gu(t)
                        },e.isFunction = Ki,e.isInteger = Xi,e.isLength = Zi,e.isMap = $a,e.isMatch = function (t, n) {
                            return t === n || ze(t, n, oi(n))
                        },e.isMatchWith = function (t, n, e) {
                            return e = "function" == typeof e ? e : D, ze(t, n, oi(n), e)
                        },e.isNaN = function (t) {
                            return no(t) && t != +t
                        },e.isNative = function (t) {
                            if (na(t)) throw new No(H);
                            return qe(t)
                        },e.isNil = function (t) {
                            return null == t
                        },e.isNull = function (t) {
                            return null === t
                        },e.isNumber = no,e.isObject = Qi,e.isObjectLike = to,e.isPlainObject = eo,e.isRegExp = Ja,e.isSafeInteger = function (t) {
                            return Xi(t) && t >= -gt && t <= gt
                        },e.isSet = Ka,e.isString = ro,e.isSymbol = io,e.isTypedArray = Xa,e.isUndefined = function (t) {
                            return t === D
                        },e.isWeakMap = function (t) {
                            return to(t) && ta(t) == Gt
                        },e.isWeakSet = function (t) {
                            return to(t) && je(t) == Ht
                        },e.join = function (t, n) {
                            return null == t ? "" : bu.call(t, n)
                        },e.kebabCase = bc,e.last = ki,e.lastIndexOf = function (t, n, e) {
                            var r = null == t ? 0 : t.length;
                            if (!r) return -1;
                            var i = r;
                            return e !== D && (i = (i = ao(e)) < 0 ? ju(r + i, 0) : Ou(i, r - 1)), n == n ? function (t, n, e) {
                                for (var r = e + 1; r--;) if (t[r] === n) return r;
                                return r
                            }(t, n, i) : y(t, O, i, !0)
                        },e.lowerCase = yc,e.lowerFirst = jc,e.lt = Za,e.lte = Qa,e.max = function (t) {
                            return t && t.length ? te(t, wo, _e) : D
                        },e.maxBy = function (t, n) {
                            return t && t.length ? te(t, ri(n, 2), _e) : D
                        },e.mean = function (t) {
                            return _(t, wo)
                        },e.meanBy = function (t, n) {
                            return _(t, ri(n, 2))
                        },e.min = function (t) {
                            return t && t.length ? te(t, wo, He) : D
                        },e.minBy = function (t, n) {
                            return t && t.length ? te(t, ri(n, 2), He) : D
                        },e.stubArray = So,e.stubFalse = ko,e.stubObject = function () {
                            return {}
                        },e.stubString = function () {
                            return ""
                        },e.stubTrue = function () {
                            return !0
                        },e.multiply = qc,e.nth = function (t, n) {
                            return t && t.length ? $e(t, ao(n)) : D
                        },e.noConflict = function () {
                            return be._ === this && (be._ = Jo), this
                        },e.noop = Mo,e.now = Na,e.pad = function (t, n, e) {
                            t = lo(t);
                            var r = (n = ao(n)) ? q(t) : 0;
                            if (!n || r >= n) return t;
                            var i = (n - r) / 2;
                            return Dr(pu(i), e) + t + Dr(hu(i), e)
                        },e.padEnd = function (t, n, e) {
                            t = lo(t);
                            var r = (n = ao(n)) ? q(t) : 0;
                            return n && r < n ? t + Dr(n - r, e) : t
                        },e.padStart = function (t, n, e) {
                            t = lo(t);
                            var r = (n = ao(n)) ? q(t) : 0;
                            return n && r < n ? Dr(n - r, e) + t : t
                        },e.parseInt = function (t, n, e) {
                            return e || null == n ? n = 0 : n && (n = +n), mu(lo(t).replace(jn, ""), n || 0)
                        },e.random = function (t, n, e) {
                            if (e && "boolean" != typeof e && li(t, n, e) && (n = e = D), e === D && ("boolean" == typeof n ? (e = n, n = D) : "boolean" == typeof t && (e = t, t = D)), t === D && n === D ? (t = 0, n = 1) : (t = uo(t), n === D ? (n = t, t = 0) : n = uo(n)), t > n) {
                                var r = t;
                                t = n, n = r
                            }
                            if (e || t % 1 || n % 1) {
                                var i = wu();
                                return Ou(t + i * (n - t + pe("1e-" + ((i + "").length - 1))), n)
                            }
                            return Qe(t, n)
                        },e.reduce = function (t, n, e) {
                            var r = Ua(t) ? d : x, i = arguments.length < 3;
                            return r(t, ri(n, 4), e, i, Gu)
                        },e.reduceRight = function (t, n, e) {
                            var r = Ua(t) ? function (t, n, e, r) {
                                var i = null == t ? 0 : t.length;
                                for (r && i && (e = t[--i]); i--;) e = n(e, t[i], i, t);
                                return e
                            } : x, i = arguments.length < 3;
                            return r(t, ri(n, 4), e, i, Hu)
                        },e.repeat = function (t, n, e) {
                            return n = (e ? li(t, n, e) : n === D) ? 1 : ao(n), tr(lo(t), n)
                        },e.replace = function () {
                            var t = arguments, n = lo(t[0]);
                            return t.length < 3 ? n : n.replace(t[1], t[2])
                        },e.result = function (t, n, e) {
                            var r = -1, i = (n = yr(n, t)).length;
                            for (i || (i = 1, t = D); ++r < i;) {
                                var o = null == t ? D : t[mi(n[r])];
                                o === D && (r = i, o = e), t = Ki(o) ? o.call(t) : o
                            }
                            return t
                        },e.round = Fc,e.runInContext = t,e.sample = function (t) {
                            return (Ua(t) ? Gn : function (t) {
                                return Gn(yo(t))
                            })(t)
                        },e.size = function (t) {
                            if (null == t) return 0;
                            if (Yi(t)) return ro(t) ? q(t) : t.length;
                            var n = ta(t);
                            return n == Nt || n == zt ? t.size : De(t).length
                        },e.snakeCase = Oc,e.some = function (t, n, e) {
                            var r = Ua(t) ? g : function (t, n) {
                                var e;
                                return Gu(t, function (t, r, i) {
                                    return !(e = n(t, r, i))
                                }), !!e
                            };
                            return e && li(t, n, e) && (n = D), r(t, ri(n, 3))
                        },e.sortedIndex = function (t, n) {
                            return ir(t, n)
                        },e.sortedIndexBy = function (t, n, e) {
                            return or(t, n, ri(e, 2))
                        },e.sortedIndexOf = function (t, n) {
                            var e = null == t ? 0 : t.length;
                            if (e) {
                                var r = ir(t, n);
                                if (r < e && Wi(t[r], n)) return r
                            }
                            return -1
                        },e.sortedLastIndex = function (t, n) {
                            return ir(t, n, !0)
                        },e.sortedLastIndexBy = function (t, n, e) {
                            return or(t, n, ri(e, 2), !0)
                        },e.sortedLastIndexOf = function (t, n) {
                            if (null == t ? 0 : t.length) {
                                var e = ir(t, n, !0) - 1;
                                if (Wi(t[e], n)) return e
                            }
                            return -1
                        },e.startCase = _c,e.startsWith = function (t, n, e) {
                            return t = lo(t), e = null == e ? 0 : Jn(ao(e), 0, t.length), n = cr(n), t.slice(e, e + n.length) == n
                        },e.subtract = Dc,e.sum = function (t) {
                            return t && t.length ? E(t, wo) : 0
                        },e.sumBy = function (t, n) {
                            return t && t.length ? E(t, ri(n, 2)) : 0
                        },e.template = function (t, n, r) {
                            var i = e.templateSettings;
                            r && li(t, n, r) && (n = D), t = lo(t), n = ec({}, n, i, $r);
                            var o, u, a = ec({}, n.imports, i.imports, $r), c = vo(a), f = S(a, c), s = 0,
                                l = n.interpolate || Bn, h = "__p += '",
                                p = Io((n.escape || Bn).source + "|" + l.source + "|" + (l === ln ? Mn : Bn).source + "|" + (n.evaluate || Bn).source + "|$", "g"),
                                v = "//# sourceURL=" + ("sourceURL" in n ? n.sourceURL : "lodash.templateSources[" + ++fe + "]") + "\n";
                            t.replace(p, function (n, e, r, i, a, c) {
                                return r || (r = i), h += t.slice(s, c).replace(An, N), e && (o = !0, h += "' +\n__e(" + e + ") +\n'"), a && (u = !0, h += "';\n" + a + ";\n__p += '"), r && (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), s = c + n.length, n
                            }), h += "';\n";
                            var d = n.variable;
                            d || (h = "with (obj) {\n" + h + "\n}\n"), h = (u ? h.replace(nn, "") : h).replace(en, "$1").replace(rn, "$1;"), h = "function(" + (d || "obj") + ") {\n" + (d ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (u ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
                            var g = xc(function () {
                                return Ro(c, v + "return " + h).apply(D, f)
                            });
                            if (g.source = h, Ji(g)) throw g;
                            return g
                        },e.times = function (t, n) {
                            if ((t = ao(t)) < 1 || t > gt) return [];
                            var e = jt, r = Ou(t, jt);
                            n = ri(n), t -= jt;
                            for (var i = M(r, n); ++e < t;) n(e);
                            return i
                        },e.toFinite = uo,e.toInteger = ao,e.toLength = co,e.toLower = function (t) {
                            return lo(t).toLowerCase()
                        },e.toNumber = fo,e.toSafeInteger = function (t) {
                            return t ? Jn(ao(t), -gt, gt) : 0 === t ? t : 0
                        },e.toString = lo,e.toUpper = function (t) {
                            return lo(t).toUpperCase()
                        },e.trim = function (t, n, e) {
                            if ((t = lo(t)) && (e || n === D)) return t.replace(yn, "");
                            if (!t || !(n = cr(n))) return t;
                            var r = F(t), i = F(n);
                            return jr(r, C(r, i), P(r, i) + 1).join("")
                        },e.trimEnd = function (t, n, e) {
                            if ((t = lo(t)) && (e || n === D)) return t.replace(On, "");
                            if (!t || !(n = cr(n))) return t;
                            var r = F(t);
                            return jr(r, 0, P(r, F(n)) + 1).join("")
                        },e.trimStart = function (t, n, e) {
                            if ((t = lo(t)) && (e || n === D)) return t.replace(jn, "");
                            if (!t || !(n = cr(n))) return t;
                            var r = F(t);
                            return jr(r, C(r, F(n))).join("")
                        },e.truncate = function (t, n) {
                            var e = ft, r = st;
                            if (Qi(n)) {
                                var i = "separator" in n ? n.separator : i;
                                e = "length" in n ? ao(n.length) : e, r = "omission" in n ? cr(n.omission) : r
                            }
                            var o = (t = lo(t)).length;
                            if (R(t)) {
                                var u = F(t);
                                o = u.length
                            }
                            if (e >= o) return t;
                            var a = e - q(r);
                            if (a < 1) return r;
                            var c = u ? jr(u, 0, a).join("") : t.slice(0, a);
                            if (i === D) return c + r;
                            if (u && (a += c.length - a), Ja(i)) {
                                if (t.slice(a).search(i)) {
                                    var f, s = c;
                                    for (i.global || (i = Io(i.source, lo(Tn.exec(i)) + "g")), i.lastIndex = 0; f = i.exec(s);) var l = f.index;
                                    c = c.slice(0, l === D ? a : l)
                                }
                            } else if (t.indexOf(cr(i), a) != a) {
                                var h = c.lastIndexOf(i);
                                h > -1 && (c = c.slice(0, h))
                            }
                            return c + r
                        },e.unescape = function (t) {
                            return (t = lo(t)) && an.test(t) ? t.replace(on, Ne) : t
                        },e.uniqueId = function (t) {
                            var n = ++Vo;
                            return lo(t) + n
                        },e.upperCase = mc,e.upperFirst = wc,e.each = Ii,e.eachRight = Li,e.first = Si,Eo(e, function () {
                            var t = {};
                            return ue(e, function (n, r) {
                                Uo.call(e.prototype, r) || (t[r] = n)
                            }), t
                        }(), {chain: !1}),e.VERSION = "4.17.4",c(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
                            e[t].placeholder = e
                        }),c(["drop", "take"], function (t, n) {
                            w.prototype[t] = function (e) {
                                e = e === D ? 1 : ju(ao(e), 0);
                                var r = this.__filtered__ && !n ? new w(this) : this.clone();
                                return r.__filtered__ ? r.__takeCount__ = Ou(e, r.__takeCount__) : r.__views__.push({
                                    size: Ou(e, jt),
                                    type: t + (r.__dir__ < 0 ? "Right" : "")
                                }), r
                            }, w.prototype[t + "Right"] = function (n) {
                                return this.reverse()[t](n).reverse()
                            }
                        }),c(["filter", "map", "takeWhile"], function (t, n) {
                            var e = n + 1, r = e == pt || 3 == e;
                            w.prototype[t] = function (t) {
                                var n = this.clone();
                                return n.__iteratees__.push({
                                    iteratee: ri(t, 3),
                                    type: e
                                }), n.__filtered__ = n.__filtered__ || r, n
                            }
                        }),c(["head", "last"], function (t, n) {
                            var e = "take" + (n ? "Right" : "");
                            w.prototype[t] = function () {
                                return this[e](1).value()[0]
                            }
                        }),c(["initial", "tail"], function (t, n) {
                            var e = "drop" + (n ? "" : "Right");
                            w.prototype[t] = function () {
                                return this.__filtered__ ? new w(this) : this[e](1)
                            }
                        }),w.prototype.compact = function () {
                            return this.filter(wo)
                        },w.prototype.find = function (t) {
                            return this.filter(t).head()
                        },w.prototype.findLast = function (t) {
                            return this.reverse().find(t)
                        },w.prototype.invokeMap = nr(function (t, n) {
                            return "function" == typeof t ? new w(this) : this.map(function (e) {
                                return Ae(e, t, n)
                            })
                        }),w.prototype.reject = function (t) {
                            return this.filter(Vi(ri(t)))
                        },w.prototype.slice = function (t, n) {
                            t = ao(t);
                            var e = this;
                            return e.__filtered__ && (t > 0 || n < 0) ? new w(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)), n !== D && (e = (n = ao(n)) < 0 ? e.dropRight(-n) : e.take(n - t)), e)
                        },w.prototype.takeRightWhile = function (t) {
                            return this.reverse().takeWhile(t).reverse()
                        },w.prototype.toArray = function () {
                            return this.take(jt)
                        },ue(w.prototype, function (t, n) {
                            var r = /^(?:filter|find|map|reject)|While$/.test(n), o = /^(?:head|last)$/.test(n),
                                u = e[o ? "take" + ("last" == n ? "Right" : "") : n], a = o || /^find/.test(n);
                            u && (e.prototype[n] = function () {
                                var n = this.__wrapped__, c = o ? [1] : arguments, f = n instanceof w, s = c[0],
                                    l = f || Ua(n), h = function (t) {
                                        var n = u.apply(e, v([t], c));
                                        return o && p ? n[0] : n
                                    };
                                l && r && "function" == typeof s && 1 != s.length && (f = l = !1);
                                var p = this.__chain__, d = !!this.__actions__.length, g = a && !p, b = f && !d;
                                if (!a && l) {
                                    n = b ? n : new w(this);
                                    var y = t.apply(n, c);
                                    return y.__actions__.push({func: Ai, args: [h], thisArg: D}), new i(y, p)
                                }
                                return g && b ? t.apply(this, c) : (y = this.thru(h), g ? o ? y.value()[0] : y.value() : y)
                            })
                        }),c(["pop", "push", "shift", "sort", "splice", "unshift"], function (t) {
                            var n = qo[t], r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                                i = /^(?:pop|shift)$/.test(t);
                            e.prototype[t] = function () {
                                var t = arguments;
                                if (i && !this.__chain__) {
                                    var e = this.value();
                                    return n.apply(Ua(e) ? e : [], t)
                                }
                                return this[r](function (e) {
                                    return n.apply(Ua(e) ? e : [], t)
                                })
                            }
                        }),ue(w.prototype, function (t, n) {
                            var r = e[n];
                            if (r) {
                                var i = r.name + "";
                                (Nu[i] || (Nu[i] = [])).push({name: n, func: r})
                            }
                        }),Nu[Lr(D, tt).name] = [{name: "wrapper", func: D}],w.prototype.clone = function () {
                            var t = new w(this.__wrapped__);
                            return t.__actions__ = Mr(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Mr(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Mr(this.__views__), t
                        },w.prototype.reverse = function () {
                            if (this.__filtered__) {
                                var t = new w(this);
                                t.__dir__ = -1, t.__filtered__ = !0
                            } else (t = this.clone()).__dir__ *= -1;
                            return t
                        },w.prototype.value = function () {
                            var t = this.__wrapped__.value(), n = this.__dir__, e = Ua(t), r = n < 0, i = e ? t.length : 0,
                                o = function (t, n, e) {
                                    for (var r = -1, i = e.length; ++r < i;) {
                                        var o = e[r], u = o.size;
                                        switch (o.type) {
                                            case"drop":
                                                t += u;
                                                break;
                                            case"dropRight":
                                                n -= u;
                                                break;
                                            case"take":
                                                n = Ou(n, t + u);
                                                break;
                                            case"takeRight":
                                                t = ju(t, n - u)
                                        }
                                    }
                                    return {start: t, end: n}
                                }(0, i, this.__views__), u = o.start, a = o.end, c = a - u, f = r ? a : u - 1,
                                s = this.__iteratees__, l = s.length, h = 0, p = Ou(c, this.__takeCount__);
                            if (!e || !r && i == c && p == c) return pr(t, this.__actions__);
                            var v = [];
                            t:for (; c-- && h < p;) {
                                for (var d = -1, g = t[f += n]; ++d < l;) {
                                    var b = s[d], y = b.iteratee, j = b.type, O = y(g);
                                    if (j == vt) g = O; else if (!O) {
                                        if (j == pt) continue t;
                                        break t
                                    }
                                }
                                v[h++] = g
                            }
                            return v
                        },e.prototype.at = wa,e.prototype.chain = function () {
                            return Bi(this)
                        },e.prototype.commit = function () {
                            return new i(this.value(), this.__chain__)
                        },e.prototype.next = function () {
                            this.__values__ === D && (this.__values__ = oo(this.value()));
                            var t = this.__index__ >= this.__values__.length;
                            return {done: t, value: t ? D : this.__values__[this.__index__++]}
                        },e.prototype.plant = function (t) {
                            for (var n, e = this; e instanceof r;) {
                                var i = xi(e);
                                i.__index__ = 0, i.__values__ = D, n ? o.__wrapped__ = i : n = i;
                                var o = i;
                                e = e.__wrapped__
                            }
                            return o.__wrapped__ = t, n
                        },e.prototype.reverse = function () {
                            var t = this.__wrapped__;
                            if (t instanceof w) {
                                var n = t;
                                return this.__actions__.length && (n = new w(this)), (n = n.reverse()).__actions__.push({
                                    func: Ai,
                                    args: [Pi],
                                    thisArg: D
                                }), new i(n, this.__chain__)
                            }
                            return this.thru(Pi)
                        },e.prototype.toJSON = e.prototype.valueOf = e.prototype.value = function () {
                            return pr(this.__wrapped__, this.__actions__)
                        },e.prototype.first = e.prototype.head,uu && (e.prototype[uu] = function () {
                            return this
                        }),e
                    }();
                be._ = Re, (i = function () {
                    return Re
                }.call(n, e, n, r)) !== D && (r.exports = i)
            }).call(this)
        }).call(n, e(435), e(436)(t))
    }, function (t, n, e) {
        var r = e(13), i = e(171);
        t.exports = function (t, n, e, r) {
            return function (t, n, e, r) {
                var o, u, a = {}, c = new i, f = function (t) {
                    var n = t.v !== o ? t.v : t.w, r = a[n], i = e(t), f = u.distance + i;
                    if (i < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + t + " Weight: " + i);
                    f < r.distance && (r.distance = f, r.predecessor = o, c.decrease(n, f))
                };
                for (t.nodes().forEach(function (t) {
                    var e = t === n ? 0 : Number.POSITIVE_INFINITY;
                    a[t] = {distance: e}, c.add(t, e)
                }); c.size() > 0 && (o = c.removeMin(), (u = a[o]).distance !== Number.POSITIVE_INFINITY);) r(o).forEach(f);
                return a
            }(t, String(n), e || o, r || function (n) {
                return t.outEdges(n)
            })
        };
        var o = r.constant(1)
    }, function (t, n, e) {
        function r() {
            this._arr = [], this._keyIndices = {}
        }

        var i = e(13);
        t.exports = r, r.prototype.size = function () {
            return this._arr.length
        }, r.prototype.keys = function () {
            return this._arr.map(function (t) {
                return t.key
            })
        }, r.prototype.has = function (t) {
            return i.has(this._keyIndices, t)
        }, r.prototype.priority = function (t) {
            var n = this._keyIndices[t];
            if (void 0 !== n) return this._arr[n].priority
        }, r.prototype.min = function () {
            if (0 === this.size()) throw new Error("Queue underflow");
            return this._arr[0].key
        }, r.prototype.add = function (t, n) {
            var e = this._keyIndices;
            if (t = String(t), !i.has(e, t)) {
                var r = this._arr, o = r.length;
                return e[t] = o, r.push({key: t, priority: n}), this._decrease(o), !0
            }
            return !1
        }, r.prototype.removeMin = function () {
            this._swap(0, this._arr.length - 1);
            var t = this._arr.pop();
            return delete this._keyIndices[t.key], this._heapify(0), t.key
        }, r.prototype.decrease = function (t, n) {
            var e = this._keyIndices[t];
            if (n > this._arr[e].priority) throw new Error("New priority is greater than current priority. Key: " + t + " Old: " + this._arr[e].priority + " New: " + n);
            this._arr[e].priority = n, this._decrease(e)
        }, r.prototype._heapify = function (t) {
            var n = this._arr, e = 2 * t, r = e + 1, i = t;
            e < n.length && (i = n[e].priority < n[i].priority ? e : i, r < n.length && (i = n[r].priority < n[i].priority ? r : i), i !== t && (this._swap(t, i), this._heapify(i)))
        }, r.prototype._decrease = function (t) {
            for (var n, e = this._arr, r = e[t].priority; 0 !== t && (n = t >> 1, !(e[n].priority < r));) this._swap(t, n), t = n
        }, r.prototype._swap = function (t, n) {
            var e = this._arr, r = this._keyIndices, i = e[t], o = e[n];
            e[t] = o, e[n] = i, r[o.key] = t, r[i.key] = n
        }
    }, function (t, n, e) {
        var r = e(13);
        t.exports = function (t) {
            function n(a) {
                var c = o[a] = {onStack: !0, lowlink: e, index: e++};
                if (i.push(a), t.successors(a).forEach(function (t) {
                        r.has(o, t) ? o[t].onStack && (c.lowlink = Math.min(c.lowlink, o[t].index)) : (n(t), c.lowlink = Math.min(c.lowlink, o[t].lowlink))
                    }), c.lowlink === c.index) {
                    var f, s = [];
                    do {
                        f = i.pop(), o[f].onStack = !1, s.push(f)
                    } while (a !== f);
                    u.push(s)
                }
            }

            var e = 0, i = [], o = {}, u = [];
            return t.nodes().forEach(function (t) {
                r.has(o, t) || n(t)
            }), u
        }
    }, function (t, n, e) {
        function r(t) {
            function n(a) {
                if (o.has(r, a)) throw new i;
                o.has(e, a) || (r[a] = !0, e[a] = !0, o.each(t.predecessors(a), n), delete r[a], u.push(a))
            }

            var e = {}, r = {}, u = [];
            if (o.each(t.sinks(), n), o.size(e) !== t.nodeCount()) throw new i;
            return u
        }

        function i() {
        }

        var o = e(13);
        t.exports = r, r.CycleException = i
    }, function (t, n, e) {
        function r(t, n, e, o, u, a) {
            i.has(o, n) || (o[n] = !0, e || a.push(n), i.each(u(n), function (n) {
                r(t, n, e, o, u, a)
            }), e && a.push(n))
        }

        var i = e(13);
        t.exports = function (t, n, e) {
            i.isArray(n) || (n = [n]);
            var o = (t.isDirected() ? t.successors : t.neighbors).bind(t), u = [], a = {};
            return i.each(n, function (n) {
                if (!t.hasNode(n)) throw new Error("Graph does not have node: " + n);
                r(t, n, "post" === e, a, o, u)
            }), u
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(8), i = e(16).Graph, o = e(59).slack;
        t.exports = function (t) {
            var n = new i({directed: !1}), e = t.nodes()[0], u = t.nodeCount();
            n.setNode(e, {});
            for (var a; function (t, n) {
                function e(i) {
                    r.forEach(n.nodeEdges(i), function (r) {
                        var u = r.v, a = i === u ? r.w : u;
                        t.hasNode(a) || o(n, r) || (t.setNode(a, {}), t.setEdge(i, a, {}), e(a))
                    })
                }

                return r.forEach(t.nodes(), e), t.nodeCount()
            }(n, t) < u;) a = function (t, n) {
                return r.minBy(n.edges(), function (e) {
                    if (t.hasNode(e.v) !== t.hasNode(e.w)) return o(n, e)
                })
            }(n, t), function (t, n, e) {
                r.forEach(t.nodes(), function (t) {
                    n.node(t).rank += e
                })
            }(n, t, n.hasNode(a.v) ? o(t, a) : -o(t, a));
            return n
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t.target.depth
        }

        n.c = function (t) {
            return t.depth
        }, n.d = function (t, n) {
            return n - 1 - t.height
        }, n.b = function (t, n) {
            return t.sourceLinks.length ? t.depth : n - 1
        }, n.a = function (t) {
            return t.targetLinks.length ? t.depth : t.sourceLinks.length ? Object(i.min)(t.sourceLinks, r) - 1 : 0
        };
        var i = e(14)
    }, function (t, n, e) {
        "use strict";
        var r = e(33), i = e(27), o = e(60), u = e(95), a = e(96);
        n.a = function () {
            function t(t) {
                var n, i, o, u, a, d = t.length, g = !1, b = new Array(d), y = new Array(d);
                for (null == h && (v = p(a = Object(r.path)())), n = 0; n <= d; ++n) {
                    if (!(n < d && l(u = t[n], n, t)) === g) if (g = !g) i = n, v.areaStart(), v.lineStart(); else {
                        for (v.lineEnd(), v.lineStart(), o = n - 1; o >= i; --o) v.point(b[o], y[o]);
                        v.lineEnd(), v.areaEnd()
                    }
                    g && (b[n] = +e(u, n, t), y[n] = +f(u, n, t), v.point(c ? +c(u, n, t) : b[n], s ? +s(u, n, t) : y[n]))
                }
                if (a) return v = null, a + "" || null
            }

            function n() {
                return Object(u.a)().defined(l).curve(p).context(h)
            }

            var e = a.a, c = null, f = Object(i.a)(0), s = a.b, l = Object(i.a)(!0), h = null, p = o.a, v = null;
            return t.x = function (n) {
                return arguments.length ? (e = "function" == typeof n ? n : Object(i.a)(+n), c = null, t) : e
            }, t.x0 = function (n) {
                return arguments.length ? (e = "function" == typeof n ? n : Object(i.a)(+n), t) : e
            }, t.x1 = function (n) {
                return arguments.length ? (c = null == n ? null : "function" == typeof n ? n : Object(i.a)(+n), t) : c
            }, t.y = function (n) {
                return arguments.length ? (f = "function" == typeof n ? n : Object(i.a)(+n), s = null, t) : f
            }, t.y0 = function (n) {
                return arguments.length ? (f = "function" == typeof n ? n : Object(i.a)(+n), t) : f
            }, t.y1 = function (n) {
                return arguments.length ? (s = null == n ? null : "function" == typeof n ? n : Object(i.a)(+n), t) : s
            }, t.lineX0 = t.lineY0 = function () {
                return n().x(e).y(f)
            }, t.lineY1 = function () {
                return n().x(e).y(s)
            }, t.lineX1 = function () {
                return n().x(c).y(f)
            }, t.defined = function (n) {
                return arguments.length ? (l = "function" == typeof n ? n : Object(i.a)(!!n), t) : l
            }, t.curve = function (n) {
                return arguments.length ? (p = n, null != h && (v = p(h)), t) : p
            }, t.context = function (n) {
                return arguments.length ? (null == n ? h = v = null : v = p(h = n), t) : h
            }, t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._curve = t
        }

        function i(t) {
            function n(n) {
                return new r(t(n))
            }

            return n._curve = t, n
        }

        e.d(n, "a", function () {
            return o
        }), n.b = i;
        var o = i(e(60).a);
        r.prototype = {
            areaStart: function () {
                this._curve.areaStart()
            }, areaEnd: function () {
                this._curve.areaEnd()
            }, lineStart: function () {
                this._curve.lineStart()
            }, lineEnd: function () {
                this._curve.lineEnd()
            }, point: function (t, n) {
                this._curve.point(n * Math.sin(t), n * -Math.cos(t))
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            var n = t.curve;
            return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
                return arguments.length ? n(Object(i.b)(t)) : n()._curve
            }, t
        }

        n.a = r;
        var i = e(178);
        e(95)
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return r
        });
        var r = Array.prototype.slice
    }, function (t, n, e) {
        "use strict";
        var r = e(46);
        n.a = {
            draw: function (t, n) {
                var e = Math.sqrt(n / r.j);
                t.moveTo(e, 0), t.arc(0, 0, e, 0, r.m)
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = {
            draw: function (t, n) {
                var e = Math.sqrt(n / 5) / 2;
                t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = Math.sqrt(1 / 3), i = 2 * r;
        n.a = {
            draw: function (t, n) {
                var e = Math.sqrt(n / i), o = e * r;
                t.moveTo(0, -e), t.lineTo(o, 0), t.lineTo(0, e), t.lineTo(-o, 0), t.closePath()
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(46), i = Math.sin(r.j / 10) / Math.sin(7 * r.j / 10), o = Math.sin(r.m / 10) * i,
            u = -Math.cos(r.m / 10) * i;
        n.a = {
            draw: function (t, n) {
                var e = Math.sqrt(.8908130915292852 * n), i = o * e, a = u * e;
                t.moveTo(0, -e), t.lineTo(i, a);
                for (var c = 1; c < 5; ++c) {
                    var f = r.m * c / 5, s = Math.cos(f), l = Math.sin(f);
                    t.lineTo(l * e, -s * e), t.lineTo(s * i - l * a, l * i + s * a)
                }
                t.closePath()
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = {
            draw: function (t, n) {
                var e = Math.sqrt(n), r = -e / 2;
                t.rect(r, r, e, e)
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = Math.sqrt(3);
        n.a = {
            draw: function (t, n) {
                var e = -Math.sqrt(n / (3 * r));
                t.moveTo(0, 2 * e), t.lineTo(-r * e, -e), t.lineTo(r * e, -e), t.closePath()
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = -.5, i = Math.sqrt(3) / 2, o = 1 / Math.sqrt(12), u = 3 * (o / 2 + 1);
        n.a = {
            draw: function (t, n) {
                var e = Math.sqrt(n / u), a = e / 2, c = e * o, f = a, s = e * o + e, l = -f, h = s;
                t.moveTo(a, c), t.lineTo(f, s), t.lineTo(l, h), t.lineTo(r * a - i * c, i * a + r * c), t.lineTo(r * f - i * s, i * f + r * s), t.lineTo(r * l - i * h, i * l + r * h), t.lineTo(r * a + i * c, r * c - i * a), t.lineTo(r * f + i * s, r * s - i * f), t.lineTo(r * l + i * h, r * h - i * l), t.closePath()
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }

        n.a = r;
        var i = e(61), o = e(63);
        r.prototype = {
            areaStart: i.a, areaEnd: i.a, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                    default:
                        Object(o.b)(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        (function t(n) {
            function e(t) {
                return new r(t, n)
            }

            return e.tension = function (n) {
                return t(+n)
            }, e
        })(0)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }

        n.a = r;
        var i = e(63);
        r.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        Object(i.b)(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        (function t(n) {
            function e(t) {
                return new r(t, n)
            }

            return e.tension = function (n) {
                return t(+n)
            }, e
        })(0)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = t.site, r = n.left, i = n.right;
            return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
        }

        function i(t, n) {
            return n[+(n.left !== t.site)]
        }

        function o(t, n) {
            return n[+(n.left === t.site)]
        }

        n.c = function (t) {
            return a.b[t.index] = {site: t, halfedges: []}
        }, n.a = i, n.d = function () {
            for (var t, n, e, i, o = 0, u = a.b.length; o < u; ++o) if ((t = a.b[o]) && (i = (n = t.halfedges).length)) {
                var c = new Array(i), f = new Array(i);
                for (e = 0; e < i; ++e) c[e] = e, f[e] = r(t, a.e[n[e]]);
                for (c.sort(function (t, n) {
                    return f[n] - f[t]
                }), e = 0; e < i; ++e) f[e] = n[c[e]];
                for (e = 0; e < i; ++e) n[e] = f[e]
            }
        }, n.b = function (t, n, e, r) {
            var c, f, s, l, h, p, v, d, g, b, y, j, O = a.b.length, _ = !0;
            for (c = 0; c < O; ++c) if (f = a.b[c]) {
                for (s = f.site, l = (h = f.halfedges).length; l--;) a.e[h[l]] || h.splice(l, 1);
                for (l = 0, p = h.length; l < p;) y = (b = o(f, a.e[h[l]]))[0], j = b[1], d = (v = i(f, a.e[h[++l % p]]))[0], g = v[1], (Math.abs(y - d) > a.f || Math.abs(j - g) > a.f) && (h.splice(l, 0, a.e.push(Object(u.b)(s, b, Math.abs(y - t) < a.f && r - j > a.f ? [t, Math.abs(d - t) < a.f ? g : r] : Math.abs(j - r) < a.f && e - y > a.f ? [Math.abs(g - r) < a.f ? d : e, r] : Math.abs(y - e) < a.f && j - n > a.f ? [e, Math.abs(d - e) < a.f ? g : n] : Math.abs(j - n) < a.f && y - t > a.f ? [Math.abs(g - n) < a.f ? d : t, n] : null)) - 1), ++p);
                p && (_ = !1)
            }
            if (_) {
                var m, w, x, E = 1 / 0;
                for (c = 0, _ = null; c < O; ++c) (f = a.b[c]) && (x = (m = (s = f.site)[0] - t) * m + (w = s[1] - n) * w) < E && (E = x, _ = f);
                if (_) {
                    var M = [t, n], T = [t, r], S = [e, r], k = [e, n];
                    _.halfedges.push(a.e.push(Object(u.b)(s = _.site, M, T)) - 1, a.e.push(Object(u.b)(s, T, S)) - 1, a.e.push(Object(u.b)(s, S, k)) - 1, a.e.push(Object(u.b)(s, k, M)) - 1)
                }
            }
            for (c = 0; c < O; ++c) (f = a.b[c]) && (f.halfedges.length || delete a.b[c])
        };
        var u = e(100), a = e(49)
    }, function (t, n, e) {
        "use strict";
        e.d(n, "c", function () {
            return r
        }), n.a = function (t) {
            var n = t.P, e = t.N;
            if (n && e) {
                var a = n.site, c = t.site, f = e.site;
                if (a !== f) {
                    var s = c[0], l = c[1], h = a[0] - s, p = a[1] - l, v = f[0] - s, d = f[1] - l,
                        g = 2 * (h * d - p * v);
                    if (!(g >= -o.g)) {
                        var b = h * h + p * p, y = v * v + d * d, j = (d * b - p * y) / g, O = (h * y - v * b) / g,
                            _ = u.pop() || new function () {
                                Object(i.a)(this), this.x = this.y = this.arc = this.site = this.cy = null
                            };
                        _.arc = t, _.site = c, _.x = j + s, _.y = (_.cy = O + l) + Math.sqrt(j * j + O * O), t.circle = _;
                        for (var m = null, w = o.c._; w;) if (_.y < w.y || _.y === w.y && _.x <= w.x) {
                            if (!w.L) {
                                m = w.P;
                                break
                            }
                            w = w.L
                        } else {
                            if (!w.R) {
                                m = w;
                                break
                            }
                            w = w.R
                        }
                        o.c.insert(m, _), m || (r = _)
                    }
                }
            }
        }, n.b = function (t) {
            var n = t.circle;
            n && (n.P || (r = n.N), o.c.remove(n), u.push(n), Object(i.a)(n), t.circle = null)
        };
        var r, i = e(99), o = e(49), u = []
    }, function (t, n, e) {
        function r(t, n) {
            var e = this;
            if (e.vgap = e.hgap = 0, t instanceof r) return t;
            e.data = t;
            var i = n.getHGap(t), o = n.getVGap(t);
            return e.width = n.getWidth(t), e.height = n.getHeight(t), e.id = n.getId(t), e.x = e.y = 0, e.depth = 0, e.children || (e.children = []), e.addGap(i, o), e
        }

        var i = e(28), o = {
            getId: function (t) {
                return t.id || t.name
            }, getHGap: function (t) {
                return t.hgap || 18
            }, getVGap: function (t) {
                return t.vgap || 18
            }, getChildren: function (t) {
                return t.children
            }, getHeight: function (t) {
                return t.height || 36
            }, getWidth: function (t) {
                var n = t.name || " ";
                return t.width || 18 * n.split("").length
            }
        };
        i.assign(r.prototype, {
            isRoot: function () {
                return 0 === this.depth
            }, isLeaf: function () {
                return 0 === this.children.length
            }, addGap: function (t, n) {
                this.hgap += t, this.vgap += n, this.width += 2 * t, this.height += 2 * n
            }, eachNode: function (t) {
                for (var n, e = [this]; n = e.pop();) t(n), e = e.concat(n.children)
            }, DFTraverse: function (t) {
                this.eachNode(t)
            }, BFTraverse: function (t) {
                for (var n, e = [this]; n = e.shift();) t(n), e = e.concat(n.children)
            }, getBoundingBox: function () {
                var t = {left: Number.MAX_VALUE, top: Number.MAX_VALUE, width: 0, height: 0};
                return this.eachNode(function (n) {
                    t.left = Math.min(t.left, n.x), t.top = Math.min(t.top, n.y), t.width = Math.max(t.width, n.x + n.width), t.height = Math.max(t.height, n.y + n.height)
                }), t
            }, translate: function (t, n) {
                void 0 === t && (t = 0), void 0 === n && (n = 0), this.eachNode(function (e) {
                    e.x += t, e.y += n
                })
            }, right2left: function () {
                var t = this.getBoundingBox();
                this.eachNode(function (n) {
                    n.x = n.x - 2 * (n.x - t.left) - n.width
                }), this.translate(t.width, 0)
            }, bottom2top: function () {
                var t = this.getBoundingBox();
                this.eachNode(function (n) {
                    n.y = n.y - 2 * (n.y - t.top) - n.height
                }), this.translate(0, t.height)
            }
        }), t.exports = function (t, n, e) {
            void 0 === n && (n = {});
            var u, a = new r(t, n = i.assign({}, o, n)), c = [a];
            if (!e && !t.collapsed) for (; u = c.pop();) if (!u.data.collapsed) {
                var f = n.getChildren(u.data), s = f ? f.length : 0;
                if (u.children = new Array(s), f && s) for (var l = 0; l < s; l++) {
                    var h = new r(f[l], n);
                    u.children[l] = h, c.push(h), h.parent = u, h.depth = u.depth + 1
                }
            }
            return a
        }
    }, function (t, n, e) {
        var r = e(193);
        t.exports = function (t, n) {
            for (var e = r(t.data, n, !0), i = r(t.data, n, !0), o = t.children.length, u = Math.round(o / 2), a = n.getSide || function (t, n) {
                return n < u ? "right" : "left"
            }, c = 0; c < o; c++) {
                var f = t.children[c];
                "right" === a(f, c) ? i.children.push(f) : e.children.push(f)
            }
            return e.eachNode(function (t) {
                t.isRoot() || (t.side = "left")
            }), i.eachNode(function (t) {
                t.isRoot() || (t.side = "right")
            }), {left: e, right: i}
        }
    }, function (t, n, e) {
        e(196), e(350), e(351), e(354), e(355), e(357), e(361), e(158), e(365), e(366), e(368), e(390), e(398), e(399), e(400), e(403), e(404), e(405), e(406), e(407), e(408), e(409), e(410), e(411), e(413), e(414), e(415), e(418), e(420), e(422), e(423), e(424), e(425), e(426), e(427), e(428), e(429), e(430), e(431), e(472), e(508), e(514), e(515), e(524), e(525), e(526), e(527), e(528), e(529), e(530), e(532), e(534), e(535), t.exports = e(2)
    }, function (t, n, e) {
        var r = e(3), i = e(0), o = i.geoArea, u = i.geoCentroid, a = i.geoContains, c = i.geoDistance, f = i.geoLength,
            s = e(128).geoProject, l = e(39), h = e(141);
        r(l.prototype, {
            geoArea: function (t) {
                return o(t)
            }, geoAreaByName: function (t) {
                return o(this.geoFeatureByName(t))
            }, geoCentroid: function (t) {
                return u(t)
            }, geoCentroidByName: function (t) {
                return u(this.geoFeatureByName(t))
            }, geoDistance: function (t, n) {
                return c(t, n)
            }, geoLength: function (t) {
                return f(t)
            }, geoLengthByName: function (t) {
                return f(this.geoFeatureByName(t))
            }, geoContains: function (t, n) {
                return a(t, n)
            }, geoFeatureByName: function (t) {
                var n;
                return this.rows.some(function (e) {
                    return e.name === t && (n = e, !0)
                }), n
            }, geoFeatureByPosition: function (t) {
                var n;
                return this.rows.some(function (e) {
                    return !!a(e, t) && (n = e, !0)
                }), n
            }, geoNameByPosition: function (t) {
                var n = this.geoFeatureByPosition(t);
                if (n) return n.name
            }, getGeoProjection: h, geoProject: function (t, n, e) {
                return n = h(n, e), s(t, n)
            }, geoProjectByName: function (t, n, e) {
                return n = h(n, e), s(this.geoFeatureByName(t), n)
            }, geoProjectPosition: function (t, n, e) {
                return (n = h(n, e))(t)
            }, geoProjectInvert: function (t, n, e) {
                return (n = h(n, e)).invert(t)
            }
        })
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            _.push(m = [p = t, d = t]), n < v && (v = n), n > g && (g = n)
        }

        function i(t, n) {
            var e = Object(E.a)([t * M.r, n * M.r]);
            if (O) {
                var r = Object(E.c)(O, e), i = [r[1], -r[0], 0], o = Object(E.c)(i, r);
                Object(E.e)(o), o = Object(E.g)(o);
                var u, a = t - b, c = a > 0 ? 1 : -1, f = o[0] * M.h * c, l = Object(M.a)(a) > 180;
                l ^ (c * b < f && f < c * t) ? (u = o[1] * M.h) > g && (g = u) : (f = (f + 360) % 360 - 180, l ^ (c * b < f && f < c * t) ? (u = -o[1] * M.h) < v && (v = u) : (n < v && (v = n), n > g && (g = n))), l ? t < b ? s(p, t) > s(p, d) && (d = t) : s(t, d) > s(p, d) && (p = t) : d >= p ? (t < p && (p = t), t > d && (d = t)) : t > b ? s(p, t) > s(p, d) && (d = t) : s(t, d) > s(p, d) && (p = t)
            } else _.push(m = [p = t, d = t]);
            n < v && (v = n), n > g && (g = n), O = e, b = t
        }

        function o() {
            k.point = i
        }

        function u() {
            m[0] = p, m[1] = d, k.point = r, O = null
        }

        function a(t, n) {
            if (O) {
                var e = t - b;
                S.add(Object(M.a)(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
            } else y = t, j = n;
            x.b.point(t, n), i(t, n)
        }

        function c() {
            x.b.lineStart()
        }

        function f() {
            a(y, j), x.b.lineEnd(), Object(M.a)(S) > M.i && (p = -(d = 180)), m[0] = p, m[1] = d, O = null
        }

        function s(t, n) {
            return (n -= t) < 0 ? n + 360 : n
        }

        function l(t, n) {
            return t[0] - n[0]
        }

        function h(t, n) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }

        var p, v, d, g, b, y, j, O, _, m, w = e(29), x = e(103), E = e(35), M = e(4), T = e(22), S = Object(w.a)(),
            k = {
                point: r, lineStart: o, lineEnd: u, polygonStart: function () {
                    k.point = a, k.lineStart = c, k.lineEnd = f, S.reset(), x.b.polygonStart()
                }, polygonEnd: function () {
                    x.b.polygonEnd(), k.point = r, k.lineStart = o, k.lineEnd = u, x.a < 0 ? (p = -(d = 180), v = -(g = 90)) : S > M.i ? g = 90 : S < -M.i && (v = -90), m[0] = p, m[1] = d
                }
            };
        n.a = function (t) {
            var n, e, r, i, o, u, a;
            if (g = d = -(p = v = 1 / 0), _ = [], Object(T.a)(t, k), e = _.length) {
                for (_.sort(l), n = 1, o = [r = _[0]]; n < e; ++n) h(r, (i = _[n])[0]) || h(r, i[1]) ? (s(r[0], i[1]) > s(r[0], r[1]) && (r[1] = i[1]), s(i[0], r[1]) > s(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
                for (u = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) i = o[n], (a = s(r[1], i[0])) > u && (u = a, p = i[0], d = r[1])
            }
            return _ = m = null, p === 1 / 0 || v === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[p, v], [d, g]]
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            t *= k.r, n *= k.r;
            var e = Object(k.g)(n);
            i(e * Object(k.g)(t), e * Object(k.t)(t), Object(k.t)(n))
        }

        function i(t, n, e) {
            d += (t - d) / ++p, g += (n - g) / p, b += (e - b) / p
        }

        function o() {
            N.point = u
        }

        function u(t, n) {
            t *= k.r, n *= k.r;
            var e = Object(k.g)(n);
            M = e * Object(k.g)(t), T = e * Object(k.t)(t), S = Object(k.t)(n), N.point = a, i(M, T, S)
        }

        function a(t, n) {
            t *= k.r, n *= k.r;
            var e = Object(k.g)(n), r = e * Object(k.g)(t), o = e * Object(k.t)(t), u = Object(k.t)(n),
                a = Object(k.e)(Object(k.u)((a = T * u - S * o) * a + (a = S * r - M * u) * a + (a = M * o - T * r) * a), M * r + T * o + S * u);
            v += a, y += a * (M + (M = r)), j += a * (T + (T = o)), O += a * (S + (S = u)), i(M, T, S)
        }

        function c() {
            N.point = r
        }

        function f() {
            N.point = l
        }

        function s() {
            h(x, E), N.point = r
        }

        function l(t, n) {
            x = t, E = n, t *= k.r, n *= k.r, N.point = h;
            var e = Object(k.g)(n);
            M = e * Object(k.g)(t), T = e * Object(k.t)(t), S = Object(k.t)(n), i(M, T, S)
        }

        function h(t, n) {
            t *= k.r, n *= k.r;
            var e = Object(k.g)(n), r = e * Object(k.g)(t), o = e * Object(k.t)(t), u = Object(k.t)(n),
                a = T * u - S * o, c = S * r - M * u, f = M * o - T * r, s = Object(k.u)(a * a + c * c + f * f),
                l = Object(k.c)(s), h = s && -l / s;
            _ += h * a, m += h * c, w += h * f, v += l, y += l * (M + (M = r)), j += l * (T + (T = o)), O += l * (S + (S = u)), i(M, T, S)
        }

        var p, v, d, g, b, y, j, O, _, m, w, x, E, M, T, S, k = e(4), C = e(20), P = e(22), N = {
            sphere: C.a, point: r, lineStart: o, lineEnd: c, polygonStart: function () {
                N.lineStart = f, N.lineEnd = s
            }, polygonEnd: function () {
                N.lineStart = o, N.lineEnd = c
            }
        };
        n.a = function (t) {
            p = v = d = g = b = y = j = O = _ = m = w = 0, Object(P.a)(t, N);
            var n = _, e = m, r = w, i = n * n + e * e + r * r;
            return i < k.j && (n = y, e = j, r = O, v < k.i && (n = d, e = g, r = b), (i = n * n + e * e + r * r) < k.j) ? [NaN, NaN] : [Object(k.e)(e, n) * k.h, Object(k.c)(r / Object(k.u)(i)) * k.h]
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n, e, r, i, o) {
            var u, a = t[0], c = t[1], f = 0, s = 1, l = n[0] - a, h = n[1] - c;
            if (u = e - a, l || !(u > 0)) {
                if (u /= l, l < 0) {
                    if (u < f) return;
                    u < s && (s = u)
                } else if (l > 0) {
                    if (u > s) return;
                    u > f && (f = u)
                }
                if (u = i - a, l || !(u < 0)) {
                    if (u /= l, l < 0) {
                        if (u > s) return;
                        u > f && (f = u)
                    } else if (l > 0) {
                        if (u < f) return;
                        u < s && (s = u)
                    }
                    if (u = r - c, h || !(u > 0)) {
                        if (u /= h, h < 0) {
                            if (u < f) return;
                            u < s && (s = u)
                        } else if (h > 0) {
                            if (u > s) return;
                            u > f && (f = u)
                        }
                        if (u = o - c, h || !(u < 0)) {
                            if (u /= h, h < 0) {
                                if (u > s) return;
                                u > f && (f = u)
                            } else if (h > 0) {
                                if (u < f) return;
                                u < s && (s = u)
                            }
                            return f > 0 && (t[0] = a + f * l, t[1] = c + f * h), s < 1 && (n[0] = a + s * l, n[1] = c + s * h), !0
                        }
                    }
                }
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(111);
        n.a = function (t, n, e) {
            var i, o, u, a, c = t.length, f = n.length, s = new Array(c * f);
            for (null == e && (e = r.b), i = u = 0; i < c; ++i) for (a = t[i], o = 0; o < f; ++o, ++u) s[u] = e(a, n[o]);
            return s
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(115), i = e(109), o = e(204), u = e(114), a = e(205), c = e(116), f = e(117), s = e(118);
        n.a = function () {
            function t(t) {
                var r, o, u = t.length, a = new Array(u);
                for (r = 0; r < u; ++r) a[r] = n(t[r], r, t);
                var s = e(a), h = s[0], p = s[1], v = l(a, h, p);
                Array.isArray(v) || (v = Object(f.c)(h, p, v), v = Object(c.a)(Math.ceil(h / v) * v, Math.floor(p / v) * v, v));
                for (var d = v.length; v[0] <= h;) v.shift(), --d;
                for (; v[d - 1] > p;) v.pop(), --d;
                var g, b = new Array(d + 1);
                for (r = 0; r <= d; ++r) (g = b[r] = []).x0 = r > 0 ? v[r - 1] : h, g.x1 = r < d ? v[r] : p;
                for (r = 0; r < u; ++r) h <= (o = a[r]) && o <= p && b[Object(i.c)(v, o, 0, d)].push(t[r]);
                return b
            }

            var n = a.a, e = u.a, l = s.a;
            return t.value = function (e) {
                return arguments.length ? (n = "function" == typeof e ? e : Object(o.a)(e), t) : n
            }, t.domain = function (n) {
                return arguments.length ? (e = "function" == typeof n ? n : Object(o.a)([n[0], n[1]]), t) : e
            }, t.thresholds = function (n) {
                return arguments.length ? (l = "function" == typeof n ? n : Array.isArray(n) ? Object(o.a)(r.b.call(n)) : Object(o.a)(n), t) : l
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return t
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(115), i = e(30), o = e(36), u = e(66);
        n.a = function (t, n, e) {
            return t = r.a.call(t, o.a).sort(i.a), Math.ceil((e - n) / (2 * (Object(u.a)(t, .75) - Object(u.a)(t, .25)) * Math.pow(t.length, -1 / 3)))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(112);
        n.a = function (t, n, e) {
            return Math.ceil((e - n) / (3.5 * Object(r.a)(t) * Math.pow(t.length, -1 / 3)))
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            var e, r, i = t.length, o = -1;
            if (null == n) {
                for (; ++o < i;) if (null != (e = t[o]) && e >= e) for (r = e; ++o < i;) null != (e = t[o]) && e > r && (r = e)
            } else for (; ++o < i;) if (null != (e = n(t[o], o, t)) && e >= e) for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && e > r && (r = e);
            return r
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(36);
        n.a = function (t, n) {
            var e, i = t.length, o = i, u = -1, a = 0;
            if (null == n) for (; ++u < i;) isNaN(e = Object(r.a)(t[u])) ? --o : a += e; else for (; ++u < i;) isNaN(e = Object(r.a)(n(t[u], u, t))) ? --o : a += e;
            if (o) return a / o
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(30), i = e(36), o = e(66);
        n.a = function (t, n) {
            var e, u = t.length, a = -1, c = [];
            if (null == n) for (; ++a < u;) isNaN(e = Object(i.a)(t[a])) || c.push(e); else for (; ++a < u;) isNaN(e = Object(i.a)(n(t[a], a, t))) || c.push(e);
            return Object(o.a)(c.sort(r.a), .5)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;) u += t[o].length;
            for (e = new Array(u); --i >= 0;) for (n = (r = t[i]).length; --n >= 0;) e[--u] = r[n];
            return e
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
            return r
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(30);
        n.a = function (t, n) {
            if (e = t.length) {
                var e, i, o = 0, u = 0, a = t[u];
                for (null == n && (n = r.a); ++o < e;) (n(i = t[o], a) < 0 || 0 !== n(a, a)) && (a = i, u = o);
                return 0 === n(a, a) ? u : void 0
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n, e) {
            for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
            return t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            var e, r = t.length, i = -1, o = 0;
            if (null == n) for (; ++i < r;) (e = +t[i]) && (o += e); else for (; ++i < r;) (e = +n(t[i], i, t)) && (o += e);
            return o
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(120);
        n.a = function () {
            return Object(r.a)(arguments)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return !(!t || !p.hasOwnProperty(t.type)) && p[t.type](t, n)
        }

        function i(t, n) {
            return 0 === Object(s.a)(t, n)
        }

        function o(t, n) {
            var e = Object(s.a)(t[0], t[1]);
            return Object(s.a)(t[0], n) + Object(s.a)(n, t[1]) <= e + l.i
        }

        function u(t, n) {
            return !!Object(f.a)(t.map(a), c(n))
        }

        function a(t) {
            return (t = t.map(c)).pop(), t
        }

        function c(t) {
            return [t[0] * l.r, t[1] * l.r]
        }

        var f = e(121), s = e(122), l = e(4), h = {
            Feature: function (t, n) {
                return r(t.geometry, n)
            }, FeatureCollection: function (t, n) {
                for (var e = t.features, i = -1, o = e.length; ++i < o;) if (r(e[i].geometry, n)) return !0;
                return !1
            }
        }, p = {
            Sphere: function () {
                return !0
            }, Point: function (t, n) {
                return i(t.coordinates, n)
            }, MultiPoint: function (t, n) {
                for (var e = t.coordinates, r = -1, o = e.length; ++r < o;) if (i(e[r], n)) return !0;
                return !1
            }, LineString: function (t, n) {
                return o(t.coordinates, n)
            }, MultiLineString: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) if (o(e[r], n)) return !0;
                return !1
            }, Polygon: function (t, n) {
                return u(t.coordinates, n)
            }, MultiPolygon: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) if (u(e[r], n)) return !0;
                return !1
            }, GeometryCollection: function (t, n) {
                for (var e = t.geometries, i = -1, o = e.length; ++i < o;) if (r(e[i], n)) return !0;
                return !1
            }
        };
        n.a = function (t, n) {
            return (t && h.hasOwnProperty(t.type) ? h[t.type] : r)(t, n)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            var r = Object(u.range)(t, n - a.i, e).concat(n);
            return function (t) {
                return r.map(function (n) {
                    return [t, n]
                })
            }
        }

        function i(t, n, e) {
            var r = Object(u.range)(t, n - a.i, e).concat(n);
            return function (t) {
                return r.map(function (n) {
                    return [n, t]
                })
            }
        }

        function o() {
            function t() {
                return {type: "MultiLineString", coordinates: n()}
            }

            function n() {
                return Object(u.range)(Object(a.f)(f / O) * O, c, O).map(g).concat(Object(u.range)(Object(a.f)(p / _) * _, h, _).map(b)).concat(Object(u.range)(Object(a.f)(o / y) * y, e, y).filter(function (t) {
                    return Object(a.a)(t % O) > a.i
                }).map(v)).concat(Object(u.range)(Object(a.f)(l / j) * j, s, j).filter(function (t) {
                    return Object(a.a)(t % _) > a.i
                }).map(d))
            }

            var e, o, c, f, s, l, h, p, v, d, g, b, y = 10, j = y, O = 90, _ = 360, m = 2.5;
            return t.lines = function () {
                return n().map(function (t) {
                    return {type: "LineString", coordinates: t}
                })
            }, t.outline = function () {
                return {
                    type: "Polygon",
                    coordinates: [g(f).concat(b(h).slice(1), g(c).reverse().slice(1), b(p).reverse().slice(1))]
                }
            }, t.extent = function (n) {
                return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor()
            }, t.extentMajor = function (n) {
                return arguments.length ? (f = +n[0][0], c = +n[1][0], p = +n[0][1], h = +n[1][1], f > c && (n = f, f = c, c = n), p > h && (n = p, p = h, h = n), t.precision(m)) : [[f, p], [c, h]]
            }, t.extentMinor = function (n) {
                return arguments.length ? (o = +n[0][0], e = +n[1][0], l = +n[0][1], s = +n[1][1], o > e && (n = o, o = e, e = n), l > s && (n = l, l = s, s = n), t.precision(m)) : [[o, l], [e, s]]
            }, t.step = function (n) {
                return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor()
            }, t.stepMajor = function (n) {
                return arguments.length ? (O = +n[0], _ = +n[1], t) : [O, _]
            }, t.stepMinor = function (n) {
                return arguments.length ? (y = +n[0], j = +n[1], t) : [y, j]
            }, t.precision = function (n) {
                return arguments.length ? (m = +n, v = r(l, s, 90), d = i(o, e, m), g = r(p, h, 90), b = i(f, c, m), t) : m
            }, t.extentMajor([[-180, -90 + a.i], [180, 90 - a.i]]).extentMinor([[-180, -80 - a.i], [180, 80 + a.i]])
        }

        n.a = o, n.b = function () {
            return o()()
        };
        var u = e(14), a = e(4)
    }, function (t, n, e) {
        "use strict";
        var r = e(4);
        n.a = function (t, n) {
            var e = t[0] * r.r, i = t[1] * r.r, o = n[0] * r.r, u = n[1] * r.r, a = Object(r.g)(i), c = Object(r.t)(i),
                f = Object(r.g)(u), s = Object(r.t)(u), l = a * Object(r.g)(e), h = a * Object(r.t)(e),
                p = f * Object(r.g)(o), v = f * Object(r.t)(o),
                d = 2 * Object(r.c)(Object(r.u)(Object(r.m)(u - i) + a * f * Object(r.m)(o - e))), g = Object(r.t)(d),
                b = d ? function (t) {
                    var n = Object(r.t)(t *= d) / g, e = Object(r.t)(d - t) / g, i = e * l + n * p, o = e * h + n * v,
                        u = e * c + n * s;
                    return [Object(r.e)(o, i) * r.h, Object(r.e)(u, Object(r.u)(i * i + o * o)) * r.h]
                } : function () {
                    return [e * r.h, i * r.h]
                };
            return b.distance = d, b
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(67), i = e(22), o = e(221), u = e(124), a = e(222), c = e(223), f = e(224), s = e(225);
        n.a = function (t, n) {
            function e(t) {
                return t && ("function" == typeof p && h.pointRadius(+p.apply(this, arguments)), Object(i.a)(t, l(h))), h.result()
            }

            var l, h, p = 4.5;
            return e.area = function (t) {
                return Object(i.a)(t, l(o.a)), o.a.result()
            }, e.measure = function (t) {
                return Object(i.a)(t, l(f.a)), f.a.result()
            }, e.bounds = function (t) {
                return Object(i.a)(t, l(u.a)), u.a.result()
            }, e.centroid = function (t) {
                return Object(i.a)(t, l(a.a)), a.a.result()
            }, e.projection = function (n) {
                return arguments.length ? (l = null == n ? (t = null, r.a) : (t = n).stream, e) : t
            }, e.context = function (t) {
                return arguments.length ? (h = null == t ? (n = null, new s.a) : new c.a(n = t), "function" != typeof p && h.pointRadius(p), e) : n
            }, e.pointRadius = function (t) {
                return arguments.length ? (p = "function" == typeof t ? t : (h.pointRadius(+t), +t), e) : p
            }, e.projection(t).context(n)
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            g.point = i
        }

        function i(t, n) {
            g.point = o, a = f = t, c = s = n
        }

        function o(t, n) {
            d.add(s * t - f * n), f = t, s = n
        }

        function u() {
            o(a, c)
        }

        var a, c, f, s, l = e(29), h = e(4), p = e(20), v = Object(l.a)(), d = Object(l.a)(), g = {
            point: p.a, lineStart: p.a, lineEnd: p.a, polygonStart: function () {
                g.lineStart = r, g.lineEnd = u
            }, polygonEnd: function () {
                g.lineStart = g.lineEnd = g.point = p.a, v.add(Object(h.a)(d)), d.reset()
            }, result: function () {
                var t = v / 2;
                return v.reset(), t
            }
        };
        n.a = g
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            b += t, y += n, ++j
        }

        function i() {
            M.point = o
        }

        function o(t, n) {
            M.point = u, r(v = t, d = n)
        }

        function u(t, n) {
            var e = t - v, i = n - d, o = Object(g.u)(e * e + i * i);
            O += o * (v + t) / 2, _ += o * (d + n) / 2, m += o, r(v = t, d = n)
        }

        function a() {
            M.point = r
        }

        function c() {
            M.point = s
        }

        function f() {
            l(h, p)
        }

        function s(t, n) {
            M.point = l, r(h = v = t, p = d = n)
        }

        function l(t, n) {
            var e = t - v, i = n - d, o = Object(g.u)(e * e + i * i);
            O += o * (v + t) / 2, _ += o * (d + n) / 2, m += o, w += (o = d * t - v * n) * (v + t), x += o * (d + n), E += 3 * o, r(v = t, d = n)
        }

        var h, p, v, d, g = e(4), b = 0, y = 0, j = 0, O = 0, _ = 0, m = 0, w = 0, x = 0, E = 0, M = {
            point: r, lineStart: i, lineEnd: a, polygonStart: function () {
                M.lineStart = c, M.lineEnd = f
            }, polygonEnd: function () {
                M.point = r, M.lineStart = i, M.lineEnd = a
            }, result: function () {
                var t = E ? [w / E, x / E] : m ? [O / m, _ / m] : j ? [b / j, y / j] : [NaN, NaN];
                return b = y = j = O = _ = m = w = x = E = 0, t
            }
        };
        n.a = M
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._context = t
        }

        n.a = r;
        var i = e(4), o = e(20);
        r.prototype = {
            _radius: 4.5, pointRadius: function (t) {
                return this._radius = t, this
            }, polygonStart: function () {
                this._line = 0
            }, polygonEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                0 === this._line && this._context.closePath(), this._point = NaN
            }, point: function (t, n) {
                switch (this._point) {
                    case 0:
                        this._context.moveTo(t, n), this._point = 1;
                        break;
                    case 1:
                        this._context.lineTo(t, n);
                        break;
                    default:
                        this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, i.w)
                }
            }, result: o.a
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            v.point = i, u = c = t, a = f = n
        }

        function i(t, n) {
            c -= t, f -= n, p.add(Object(l.u)(c * c + f * f)), c = t, f = n
        }

        var o, u, a, c, f, s = e(29), l = e(4), h = e(20), p = Object(s.a)(), v = {
            point: h.a, lineStart: function () {
                v.point = r
            }, lineEnd: function () {
                o && i(u, a), v.point = h.a
            }, polygonStart: function () {
                o = !0
            }, polygonEnd: function () {
                o = null
            }, result: function () {
                var t = +p;
                return p.reset(), t
            }
        };
        n.a = v
    }, function (t, n, e) {
        "use strict";

        function r() {
            this._string = []
        }

        function i(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
        }

        n.a = r, r.prototype = {
            _radius: 4.5, _circle: i(4.5), pointRadius: function (t) {
                return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
            }, polygonStart: function () {
                this._line = 0
            }, polygonEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                0 === this._line && this._string.push("Z"), this._point = NaN
            }, point: function (t, n) {
                switch (this._point) {
                    case 0:
                        this._string.push("M", t, ",", n), this._point = 1;
                        break;
                    case 1:
                        this._string.push("L", t, ",", n);
                        break;
                    default:
                        null == this._circle && (this._circle = i(this._radius)), this._string.push("M", t, ",", n, this._circle)
                }
            }, result: function () {
                if (this._string.length) {
                    var t = this._string.join("");
                    return this._string = [], t
                }
                return null
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(126), i = e(4);
        n.a = Object(r.a)(function () {
            return !0
        }, function (t) {
            var n, e = NaN, r = NaN, o = NaN;
            return {
                lineStart: function () {
                    t.lineStart(), n = 1
                }, point: function (u, a) {
                    var c = u > 0 ? i.o : -i.o, f = Object(i.a)(u - e);
                    Object(i.a)(f - i.o) < i.i ? (t.point(e, r = (r + a) / 2 > 0 ? i.l : -i.l), t.point(o, r), t.lineEnd(), t.lineStart(), t.point(c, r), t.point(u, r), n = 0) : o !== c && f >= i.o && (Object(i.a)(e - o) < i.i && (e -= o * i.i), Object(i.a)(u - c) < i.i && (u -= c * i.i), r = function (t, n, e, r) {
                        var o, u, a = Object(i.t)(t - e);
                        return Object(i.a)(a) > i.i ? Object(i.d)((Object(i.t)(n) * (u = Object(i.g)(r)) * Object(i.t)(e) - Object(i.t)(r) * (o = Object(i.g)(n)) * Object(i.t)(t)) / (o * u * a)) : (n + r) / 2
                    }(e, r, u, a), t.point(o, r), t.lineEnd(), t.lineStart(), t.point(c, r), n = 0), t.point(e = u, r = a), o = c
                }, lineEnd: function () {
                    t.lineEnd(), e = r = NaN
                }, clean: function () {
                    return 2 - n
                }
            }
        }, function (t, n, e, r) {
            var o;
            if (null == t) o = e * i.l, r.point(-i.o, o), r.point(0, o), r.point(i.o, o), r.point(i.o, 0), r.point(i.o, -o), r.point(0, -o), r.point(-i.o, -o), r.point(-i.o, 0), r.point(-i.o, o); else if (Object(i.a)(t[0] - n[0]) > i.i) {
                var u = t[0] < n[0] ? i.o : -i.o;
                o = e * u / 2, r.point(-u, o), r.point(0, o), r.point(u, o)
            } else r.point(n[0], n[1])
        }, [-i.o, -i.l])
    }, function (t, n, e) {
        "use strict";
        var r = e(35), i = e(104), o = e(4), u = e(108), a = e(126);
        n.a = function (t, n) {
            function e(t, n) {
                return Object(o.g)(t) * Object(o.g)(n) > s
            }

            function c(t, n, e) {
                var i = Object(r.a)(t), u = Object(r.a)(n), a = [1, 0, 0], c = Object(r.c)(i, u), f = Object(r.d)(c, c),
                    l = c[0], h = f - l * l;
                if (!h) return !e && t;
                var p = s * f / h, v = -s * l / h, d = Object(r.c)(a, c), g = Object(r.f)(a, p), b = Object(r.f)(c, v);
                Object(r.b)(g, b);
                var y = d, j = Object(r.d)(g, y), O = Object(r.d)(y, y), _ = j * j - O * (Object(r.d)(g, g) - 1);
                if (!(_ < 0)) {
                    var m = Object(o.u)(_), w = Object(r.f)(y, (-j - m) / O);
                    if (Object(r.b)(w, g), w = Object(r.g)(w), !e) return w;
                    var x, E = t[0], M = n[0], T = t[1], S = n[1];
                    M < E && (x = E, E = M, M = x);
                    var k = M - E, C = Object(o.a)(k - o.o) < o.i, P = C || k < o.i;
                    if (!C && S < T && (x = T, T = S, S = x), P ? C ? T + S > 0 ^ w[1] < (Object(o.a)(w[0] - E) < o.i ? T : S) : T <= w[1] && w[1] <= S : k > o.o ^ (E <= w[0] && w[0] <= M)) {
                        var N = Object(r.f)(y, (-j + m) / O);
                        return Object(r.b)(N, g), [w, Object(r.g)(N)]
                    }
                }
            }

            function f(n, e) {
                var r = l ? t : o.o - t, i = 0;
                return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i
            }

            var s = Object(o.g)(t), l = s > 0, h = Object(o.a)(s) > o.i;
            return Object(a.a)(e, function (t) {
                var n, r, i, a, s;
                return {
                    lineStart: function () {
                        a = i = !1, s = 1
                    }, point: function (p, v) {
                        var d, g = [p, v], b = e(p, v),
                            y = l ? b ? 0 : f(p, v) : b ? f(p + (p < 0 ? o.o : -o.o), v) : 0;
                        if (!n && (a = i = b) && t.lineStart(), b !== i && (!(d = c(n, g)) || Object(u.a)(n, d) || Object(u.a)(g, d)) && (g[0] += o.i, g[1] += o.i, b = e(g[0], g[1])), b !== i) s = 0, b ? (t.lineStart(), d = c(g, n), t.point(d[0], d[1])) : (d = c(n, g), t.point(d[0], d[1]), t.lineEnd()), n = d; else if (h && n && l ^ b) {
                            var j;
                            y & r || !(j = c(g, n, !0)) || (s = 0, l ? (t.lineStart(), t.point(j[0][0], j[0][1]), t.point(j[1][0], j[1][1]), t.lineEnd()) : (t.point(j[1][0], j[1][1]), t.lineEnd(), t.lineStart(), t.point(j[0][0], j[0][1])))
                        }
                        !b || n && Object(u.a)(n, g) || t.point(g[0], g[1]), n = g, i = b, r = y
                    }, lineEnd: function () {
                        i && t.lineEnd(), n = null
                    }, clean: function () {
                        return s | (a && i) << 1
                    }
                }
            }, function (e, r, o, u) {
                Object(i.a)(u, t, n, o, e, r)
            }, l ? [0, -t] : [-o.o, t - o.o])
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(35), i = e(4), o = e(51), u = 16, a = Object(i.g)(30 * i.r);
        n.a = function (t, n) {
            return +n ? function (t, n) {
                function e(r, o, u, c, f, s, l, h, p, v, d, g, b, y) {
                    var j = l - r, O = h - o, _ = j * j + O * O;
                    if (_ > 4 * n && b--) {
                        var m = c + v, w = f + d, x = s + g, E = Object(i.u)(m * m + w * w + x * x),
                            M = Object(i.c)(x /= E),
                            T = Object(i.a)(Object(i.a)(x) - 1) < i.i || Object(i.a)(u - p) < i.i ? (u + p) / 2 : Object(i.e)(w, m),
                            S = t(T, M), k = S[0], C = S[1], P = k - r, N = C - o, R = O * P - j * N;
                        (R * R / _ > n || Object(i.a)((j * P + O * N) / _ - .5) > .3 || c * v + f * d + s * g < a) && (e(r, o, u, c, f, s, k, C, T, m /= E, w /= E, x, b, y), y.point(k, C), e(k, C, T, m, w, x, l, h, p, v, d, g, b, y))
                    }
                }

                return function (n) {
                    function i(e, r) {
                        e = t(e, r), n.point(e[0], e[1])
                    }

                    function o() {
                        j = NaN, x.point = a, n.lineStart()
                    }

                    function a(i, o) {
                        var a = Object(r.a)([i, o]), c = t(i, o);
                        e(j, O, y, _, m, w, j = c[0], O = c[1], y = i, _ = a[0], m = a[1], w = a[2], u, n), n.point(j, O)
                    }

                    function c() {
                        x.point = i, n.lineEnd()
                    }

                    function f() {
                        o(), x.point = s, x.lineEnd = l
                    }

                    function s(t, n) {
                        a(h = t, n), p = j, v = O, d = _, g = m, b = w, x.point = a
                    }

                    function l() {
                        e(j, O, y, _, m, w, p, v, h, d, g, b, u, n), x.lineEnd = c, c()
                    }

                    var h, p, v, d, g, b, y, j, O, _, m, w, x = {
                        point: i, lineStart: o, lineEnd: c, polygonStart: function () {
                            n.polygonStart(), x.lineStart = f
                        }, polygonEnd: function () {
                            n.polygonEnd(), x.lineStart = o
                        }
                    };
                    return x
                }
            }(t, n) : function (t) {
                return Object(o.b)({
                    point: function (n, e) {
                        n = t(n, e), this.stream.point(n[0], n[1])
                    }
                })
            }(t)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            function n(t, n) {
                return [t * e, Object(r.t)(n) / e]
            }

            var e = Object(r.g)(t);
            return n.invert = function (t, n) {
                return [t / e, Object(r.c)(n * e)]
            }, n
        };
        var r = e(4)
    }, function (t, n, e) {
        "use strict";
        var r = e(4), i = e(125), o = e(68), u = e(70);
        n.a = function () {
            function t(t) {
                var n = t[0], e = t[1];
                return l = null, c.point(n, e), l || (f.point(n, e), l) || (s.point(n, e), l)
            }

            function n() {
                return e = a = null, t
            }

            var e, a, c, f, s, l, h = Object(i.a)(),
                p = Object(o.b)().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                v = Object(o.b)().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), d = {
                    point: function (t, n) {
                        l = [t, n]
                    }
                };
            return t.invert = function (t) {
                var n = h.scale(), e = h.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? p : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? v : h).invert(t)
            }, t.stream = function (t) {
                return e && a === t ? e : e = function (t) {
                    var n = t.length;
                    return {
                        point: function (e, r) {
                            for (var i = -1; ++i < n;) t[i].point(e, r)
                        }, sphere: function () {
                            for (var e = -1; ++e < n;) t[e].sphere()
                        }, lineStart: function () {
                            for (var e = -1; ++e < n;) t[e].lineStart()
                        }, lineEnd: function () {
                            for (var e = -1; ++e < n;) t[e].lineEnd()
                        }, polygonStart: function () {
                            for (var e = -1; ++e < n;) t[e].polygonStart()
                        }, polygonEnd: function () {
                            for (var e = -1; ++e < n;) t[e].polygonEnd()
                        }
                    }
                }([h.stream(a = t), p.stream(t), v.stream(t)])
            }, t.precision = function (t) {
                return arguments.length ? (h.precision(t), p.precision(t), v.precision(t), n()) : h.precision()
            }, t.scale = function (n) {
                return arguments.length ? (h.scale(n), p.scale(.35 * n), v.scale(n), t.translate(h.translate())) : h.scale()
            }, t.translate = function (t) {
                if (!arguments.length) return h.translate();
                var e = h.scale(), i = +t[0], o = +t[1];
                return c = h.translate(t).clipExtent([[i - .455 * e, o - .238 * e], [i + .455 * e, o + .238 * e]]).stream(d), f = p.translate([i - .307 * e, o + .201 * e]).clipExtent([[i - .425 * e + r.i, o + .12 * e + r.i], [i - .214 * e - r.i, o + .234 * e - r.i]]).stream(d), s = v.translate([i - .205 * e, o + .212 * e]).clipExtent([[i - .214 * e + r.i, o + .166 * e + r.i], [i - .115 * e - r.i, o + .234 * e - r.i]]).stream(d), n()
            }, t.fitExtent = function (n, e) {
                return Object(u.a)(t, n, e)
            }, t.fitSize = function (n, e) {
                return Object(u.b)(t, n, e)
            }, t.scale(1070)
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return u
        });
        var r = e(4), i = e(37), o = e(17), u = Object(i.b)(function (t) {
            return Object(r.u)(2 / (1 + t))
        });
        u.invert = Object(i.a)(function (t) {
            return 2 * Object(r.c)(t / 2)
        }), n.b = function () {
            return Object(o.a)(u).scale(124.75).clipAngle(179.999)
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return u
        });
        var r = e(4), i = e(37), o = e(17), u = Object(i.b)(function (t) {
            return (t = Object(r.b)(t)) && t / Object(r.t)(t)
        });
        u.invert = Object(i.a)(function (t) {
            return t
        }), n.b = function () {
            return Object(o.a)(u).scale(79.4188).clipAngle(179.999)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return Object(o.v)((o.l + t) / 2)
        }

        function i(t, n) {
            function e(t, n) {
                c > 0 ? n < -o.l + o.i && (n = -o.l + o.i) : n > o.l - o.i && (n = o.l - o.i);
                var e = c / Object(o.p)(r(n), u);
                return [e * Object(o.t)(u * t), c - e * Object(o.g)(u * t)]
            }

            var i = Object(o.g)(t),
                u = t === n ? Object(o.t)(t) : Object(o.n)(i / Object(o.g)(n)) / Object(o.n)(r(n) / r(t)),
                c = i * Object(o.p)(r(t), u) / u;
            return u ? (e.invert = function (t, n) {
                var e = c - n, r = Object(o.s)(u) * Object(o.u)(t * t + e * e);
                return [Object(o.e)(t, Object(o.a)(e)) / u * Object(o.s)(e), 2 * Object(o.d)(Object(o.p)(c / r, 1 / u)) - o.l]
            }, e) : a.c
        }

        n.a = i;
        var o = e(4), u = e(69), a = e(71);
        n.b = function () {
            return Object(u.a)(i).scale(109.5).parallels([30, 30])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            function e(t, n) {
                var e = a - n, r = o * t;
                return [e * Object(i.t)(r), a - e * Object(i.g)(r)]
            }

            var r = Object(i.g)(t), o = t === n ? Object(i.t)(t) : (r - Object(i.g)(n)) / (n - t), a = r / o + t;
            return Object(i.a)(o) < i.i ? u.b : (e.invert = function (t, n) {
                var e = a - n;
                return [Object(i.e)(t, Object(i.a)(e)) / o * Object(i.s)(e), a - Object(i.s)(o) * Object(i.u)(t * t + e * e)]
            }, e)
        }

        n.a = r;
        var i = e(4), o = e(69), u = e(127);
        n.b = function () {
            return Object(o.a)(r).scale(131.154).center([0, 13.9389])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(i.g)(n), r = Object(i.g)(t) * e;
            return [e * Object(i.t)(t) / r, Object(i.t)(n) / r]
        }

        n.b = r;
        var i = e(4), o = e(37), u = e(17);
        r.invert = Object(o.a)(i.d), n.a = function () {
            return Object(u.a)(r).scale(144.049).clipAngle(60)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r) {
            return 1 === t && 1 === n && 0 === e && 0 === r ? o.a : Object(u.b)({
                point: function (i, o) {
                    this.stream.point(i * t + e, o * n + r)
                }
            })
        }

        var i = e(65), o = e(67), u = e(51), a = e(70);
        n.a = function () {
            function t() {
                return c = f = null, s
            }

            var n, e, u, c, f, s, l = 1, h = 0, p = 0, v = 1, d = 1, g = o.a, b = null, y = o.a;
            return s = {
                stream: function (t) {
                    return c && f === t ? c : c = g(y(f = t))
                }, clipExtent: function (r) {
                    return arguments.length ? (y = null == r ? (b = n = e = u = null, o.a) : Object(i.a)(b = +r[0][0], n = +r[0][1], e = +r[1][0], u = +r[1][1]), t()) : null == b ? null : [[b, n], [e, u]]
                }, scale: function (n) {
                    return arguments.length ? (g = r((l = +n) * v, l * d, h, p), t()) : l
                }, translate: function (n) {
                    return arguments.length ? (g = r(l * v, l * d, h = +n[0], p = +n[1]), t()) : [h, p]
                }, reflectX: function (n) {
                    return arguments.length ? (g = r(l * (v = n ? -1 : 1), l * d, h, p), t()) : v < 0
                }, reflectY: function (n) {
                    return arguments.length ? (g = r(l * v, l * (d = n ? -1 : 1), h, p), t()) : d < 0
                }, fitExtent: function (t, n) {
                    return Object(a.a)(s, t, n)
                }, fitSize: function (t, n) {
                    return Object(a.b)(s, t, n)
                }
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [Object(i.g)(n) * Object(i.t)(t), Object(i.t)(n)]
        }

        n.b = r;
        var i = e(4), o = e(37), u = e(17);
        r.invert = Object(o.a)(i.c), n.a = function () {
            return Object(u.a)(r).scale(249.5).clipAngle(90 + i.i)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(i.g)(n), r = 1 + Object(i.g)(t) * e;
            return [e * Object(i.t)(t) / r, Object(i.t)(n) / r]
        }

        n.b = r;
        var i = e(4), o = e(37), u = e(17);
        r.invert = Object(o.a)(function (t) {
            return 2 * Object(i.d)(t)
        }), n.a = function () {
            return Object(u.a)(r).scale(250).clipAngle(142)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [Object(i.n)(Object(i.v)((i.l + n) / 2)), -t]
        }

        n.b = r;
        var i = e(4), o = e(71);
        r.invert = function (t, n) {
            return [-n, 2 * Object(i.d)(Object(i.k)(t)) - i.l]
        }, n.a = function () {
            var t = Object(o.b)(r), n = t.center, e = t.rotate;
            return t.center = function (t) {
                return arguments.length ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]])
            }, t.rotate = function (t) {
                return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
            }, e([0, 0, 90]).scale(159.155)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(t, n) {
                var e = Object(o.h)(t), i = Object(o.h)(n), u = Object(o.y)(n), a = i * e,
                    c = -((1 - a ? Object(o.p)((1 + a) / 2) / (1 - a) : -.5) + r / (1 + a));
                return [c * i * Object(o.y)(t), c * u]
            }

            var e = Object(o.F)(t / 2), r = 2 * Object(o.p)(Object(o.h)(t / 2)) / (e * e);
            return n.invert = function (n, e) {
                var i, u = Object(o.B)(n * n + e * e), a = -t / 2, c = 50;
                if (!u) return [0, 0];
                do {
                    var f = a / 2, s = Object(o.h)(f), l = Object(o.y)(f), h = Object(o.F)(f), p = Object(o.p)(1 / s);
                    a -= i = (2 / h * p - r * h - u) / (-p / (l * l) + 1 - r / (2 * s * s))
                } while (Object(o.a)(i) > o.k && --c > 0);
                var v = Object(o.y)(a);
                return [Object(o.g)(n * v, u * Object(o.h)(a)), Object(o.e)(e * v / u)]
            }, n
        }

        n.a = r;
        var i = e(0), o = e(1);
        n.b = function () {
            var t = o.o, n = Object(i.geoProjectionMutator)(r), e = n(t);
            return e.radius = function (e) {
                return arguments.length ? n(t = e * o.v) : t * o.j
            }, e.scale(179.976).clipAngle(147)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(t, n) {
                var c = Object(o.h)(n), f = Object(o.h)(t /= 2);
                return [(1 + c) * Object(o.y)(t), (i * n > -Object(o.g)(f, u) - .001 ? 0 : 10 * -i) + a + Object(o.y)(n) * r - (1 + c) * e * f]
            }

            var e = Object(o.y)(t), r = Object(o.h)(t), i = t >= 0 ? 1 : -1, u = Object(o.F)(i * t),
                a = (1 + e - r) / 2;
            return n.invert = function (t, n) {
                var c = 0, f = 0, s = 50;
                do {
                    var l = Object(o.h)(c), h = Object(o.y)(c), p = Object(o.h)(f), v = Object(o.y)(f), d = 1 + p,
                        g = d * h - t, b = a + v * r - d * e * l - n, y = d * l / 2, j = -h * v, O = e * d * h / 2,
                        _ = r * p + e * l * v, m = j * O - _ * y, w = (b * j - g * _) / m / 2, x = (g * O - b * y) / m;
                    c -= w, f -= x
                } while ((Object(o.a)(w) > o.k || Object(o.a)(x) > o.k) && --s > 0);
                return i * f > -Object(o.g)(Object(o.h)(c), u) - .001 ? [2 * c, f] : null
            }, n
        }

        n.a = r;
        var i = e(0), o = e(1);
        n.b = function () {
            var t = 20 * o.v, n = t >= 0 ? 1 : -1, e = Object(o.F)(n * t), u = Object(i.geoProjectionMutator)(r),
                a = u(t), c = a.stream;
            return a.parallel = function (r) {
                return arguments.length ? (e = Object(o.F)((n = (t = r * o.v) >= 0 ? 1 : -1) * t), u(t)) : t * o.j
            }, a.stream = function (r) {
                var i = a.rotate(), u = c(r), f = (a.rotate([0, 0]), c(r));
                return a.rotate(i), u.sphere = function () {
                    f.polygonStart(), f.lineStart();
                    for (var r = -180 * n; n * r < 180; r += 90 * n) f.point(r, 90 * n);
                    for (; n * (r -= t) >= -180;) f.point(r, n * -Object(o.g)(Object(o.h)(r * o.v / 2), e) * o.j);
                    f.lineEnd(), f.polygonEnd()
                }, u
            }, a.scale(218.695).center([0, 28.0974])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.a)(n);
            return e < o.u ? [t, Object(o.p)(Object(o.F)(o.u + n / 2))] : [t * Object(o.h)(e) * (2 * o.D - 1 / Object(o.y)(e)), Object(o.x)(n) * (2 * o.D * (e - o.u) - Object(o.p)(Object(o.F)(e / 2)))]
        }

        n.a = r;
        var i = e(0), o = e(1), u = Object(o.B)(8), a = Object(o.p)(1 + o.D);
        r.invert = function (t, n) {
            if ((r = Object(o.a)(n)) < a) return [t, 2 * Object(o.f)(Object(o.m)(n)) - o.o];
            var e, r, i = o.u, c = 25;
            do {
                var f = Object(o.h)(i / 2), s = Object(o.F)(i / 2);
                i -= e = (u * (i - o.u) - Object(o.p)(s) - r) / (u - f * f / (2 * s))
            } while (Object(o.a)(e) > o.l && --c > 0);
            return [t / (Object(o.h)(i) * (u - 1 / Object(o.y)(i))), Object(o.x)(n) * i]
        }, n.b = function () {
            return Object(i.geoProjection)(r).scale(112.314)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(t, n) {
                var r = Object(i.geoAzimuthalEquidistantRaw)(t, n);
                if (Object(o.a)(t) > o.o) {
                    var u = Object(o.g)(r[1], r[0]), a = Object(o.B)(r[0] * r[0] + r[1] * r[1]),
                        c = e * Object(o.w)((u - o.o) / e) + o.o,
                        f = Object(o.g)(Object(o.y)(u -= c), 2 - Object(o.h)(u));
                    u = c + Object(o.e)(o.s / a * Object(o.y)(f)) - f, r[0] = a * Object(o.h)(u), r[1] = a * Object(o.y)(u)
                }
                return r
            }

            var e = 2 * o.s / t;
            return n.invert = function (t, n) {
                var r = Object(o.B)(t * t + n * n);
                if (r > o.o) {
                    var u = Object(o.g)(n, t), a = e * Object(o.w)((u - o.o) / e) + o.o, c = u > a ? -1 : 1,
                        f = r * Object(o.h)(a - u),
                        s = 1 / Object(o.F)(c * Object(o.b)((f - o.s) / Object(o.B)(o.s * (o.s - 2 * f) + r * r)));
                    u = a + 2 * Object(o.f)((s + c * Object(o.B)(s * s - 3)) / 3), t = r * Object(o.h)(u), n = r * Object(o.y)(u)
                }
                return i.geoAzimuthalEquidistantRaw.invert(t, n)
            }, n
        }

        n.a = r;
        var i = e(0), o = e(1);
        n.b = function () {
            var t = 5, n = Object(i.geoProjectionMutator)(r), e = n(t), u = e.stream, a = -Object(o.h)(.01 * o.v),
                c = Object(o.y)(.01 * o.v);
            return e.lobes = function (e) {
                return arguments.length ? n(t = +e) : t
            }, e.stream = function (n) {
                var r = e.rotate(), i = u(n), f = (e.rotate([0, 0]), u(n));
                return e.rotate(r), i.sphere = function () {
                    f.polygonStart(), f.lineStart();
                    for (var n = 0, e = 360 / t, r = 2 * o.s / t, i = 90 - 180 / t, u = o.o; n < t; ++n, i -= e, u -= r) f.point(Object(o.g)(c * Object(o.h)(u), a) * o.j, Object(o.e)(c * Object(o.y)(u)) * o.j), i < -90 ? (f.point(-90, -180 - i - .01), f.point(-90, -180 - i + .01)) : (f.point(90, i + .01), f.point(90, i - .01));
                    f.lineEnd(), f.polygonEnd()
                }, i
            }, e.scale(87.8076).center([0, 17.1875]).clipAngle(179.999)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(n, r) {
                var i = e + t - r, u = i ? n * Object(o.h)(r) / i : i;
                return [i * Object(o.y)(u), e - i * Object(o.h)(u)]
            }

            if (!t) return u.b;
            var e = 1 / Object(o.F)(t);
            return n.invert = function (n, r) {
                var i = Object(o.B)(n * n + (r = e - r) * r), u = e + t - i;
                return [i / Object(o.h)(u) * Object(o.g)(n, r), u]
            }, n
        }

        n.a = r;
        var i = e(31), o = e(1), u = e(38);
        n.b = function () {
            return Object(i.a)(r).scale(123.082).center([0, 26.1441]).parallel(45)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(n, e) {
                var r = o.o - e, i = r ? n * t * Object(o.y)(r) / r : r;
                return [r * Object(o.y)(i) / t, o.o - r * Object(o.h)(i)]
            }

            return n.invert = function (n, e) {
                var r = n * t, i = o.o - e, u = Object(o.B)(r * r + i * i), a = Object(o.g)(r, i);
                return [(u ? u / Object(o.y)(u) : 1) * a / t, o.o - u]
            }, n
        }

        n.a = r;
        var i = e(0), o = e(1);
        n.b = function () {
            var t = .5, n = Object(i.geoProjectionMutator)(r), e = n(t);
            return e.fraction = function (e) {
                return arguments.length ? n(t = +e) : t
            }, e.scale(158.837)
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return u
        });
        var r = e(0), i = e(1), o = e(21), u = Object(o.b)(1, 4 / i.s, i.s);
        n.b = function () {
            return Object(r.geoProjection)(u).scale(152.63)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r, i, o) {
            var u, a = Object(s.h)(o);
            if (Object(s.a)(t) > 1 || Object(s.a)(o) > 1) u = Object(s.b)(e * i + n * r * a); else {
                var c = Object(s.y)(t / 2), f = Object(s.y)(o / 2);
                u = 2 * Object(s.e)(Object(s.B)(c * c + n * r * f * f))
            }
            return Object(s.a)(u) > s.k ? [u, Object(s.g)(r * Object(s.y)(o), n * i - e * r * a)] : [0, 0]
        }

        function i(t, n, e) {
            return Object(s.b)((t * t + n * n - e * e) / (2 * t * n))
        }

        function o(t) {
            return t - 2 * s.s * Object(s.n)((t + s.s) / (2 * s.s))
        }

        function u(t, n, e) {
            for (var u, a = [[t[0], t[1], Object(s.y)(t[1]), Object(s.h)(t[1])], [n[0], n[1], Object(s.y)(n[1]), Object(s.h)(n[1])], [e[0], e[1], Object(s.y)(e[1]), Object(s.h)(e[1])]], c = a[2], f = 0; f < 3; ++f, c = u) u = a[f], c.v = r(u[1] - c[1], c[3], c[2], u[3], u[2], u[0] - c[0]), c.point = [0, 0];
            var l = i(a[0].v[0], a[2].v[0], a[1].v[0]), h = i(a[0].v[0], a[1].v[0], a[2].v[0]), p = s.s - l;
            a[2].point[1] = 0, a[0].point[0] = -(a[1].point[0] = a[0].v[0] / 2);
            var v = [a[2].point[0] = a[0].point[0] + a[2].v[0] * Object(s.h)(l), 2 * (a[0].point[1] = a[1].point[1] = a[2].v[0] * Object(s.y)(l))];
            return function (t, n) {
                var e, u = Object(s.y)(n), c = Object(s.h)(n), f = new Array(3);
                for (e = 0; e < 3; ++e) {
                    var l = a[e];
                    if (f[e] = r(n - l[1], l[3], l[2], c, u, t - l[0]), !f[e][0]) return l.point;
                    f[e][1] = o(f[e][1] - l.v[1])
                }
                var d = v.slice();
                for (e = 0; e < 3; ++e) {
                    var g = 2 == e ? 0 : e + 1, b = i(a[e].v[0], f[e][0], f[g][0]);
                    f[e][1] < 0 && (b = -b), e ? 1 == e ? (b = h - b, d[0] -= f[e][0] * Object(s.h)(b), d[1] -= f[e][0] * Object(s.y)(b)) : (b = p - b, d[0] += f[e][0] * Object(s.h)(b), d[1] += f[e][0] * Object(s.y)(b)) : (d[0] += f[e][0] * Object(s.h)(b), d[1] -= f[e][0] * Object(s.y)(b))
                }
                return d[0] /= 3, d[1] /= 3, d
            }
        }

        function a(t) {
            return t[0] *= s.v, t[1] *= s.v, t
        }

        function c(t, n, e) {
            var r = Object(f.geoCentroid)({type: "MultiPoint", coordinates: [t, n, e]}), i = [-r[0], -r[1]],
                o = Object(f.geoRotation)(i), c = Object(f.geoProjection)(u(a(o(t)), a(o(n)), a(o(e)))).rotate(i),
                s = c.center;
            return delete c.rotate, c.center = function (t) {
                return arguments.length ? s(o(t)) : o.invert(s())
            }, c.clipAngle(90)
        }

        n.b = u, n.a = function () {
            return c([0, 22], [45, 22], [22.5, -22]).scale(380).center([22.5, 2])
        }, n.c = c;
        var f = e(0), s = e(1)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(t, n) {
                return [t, (t ? t / Object(i.y)(t) : 1) * (Object(i.y)(n) * Object(i.h)(t) - e * Object(i.h)(n))]
            }

            var e = Object(i.F)(t);
            return n.invert = e ? function (t, n) {
                t && (n *= Object(i.y)(t) / t);
                var r = Object(i.h)(t);
                return [t, 2 * Object(i.g)(Object(i.B)(r * r + e * e - n * n) - r, e - n)]
            } : function (t, n) {
                return [t, Object(i.e)(t ? n * Object(i.F)(t) / t : n)]
            }, n
        }

        n.a = r;
        var i = e(1), o = e(31);
        n.b = function () {
            return Object(o.a)(r).scale(249.828).clipAngle(90)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [u * t * (2 * Object(o.h)(2 * n / 3) - 1) / o.E, u * o.E * Object(o.y)(n / 3)]
        }

        n.a = r;
        var i = e(0), o = e(1), u = Object(o.B)(3);
        r.invert = function (t, n) {
            var e = 3 * Object(o.e)(n / (u * o.E));
            return [o.E * t / (u * (2 * Object(o.h)(2 * e / 3) - 1)), e]
        }, n.b = function () {
            return Object(i.geoProjection)(r).scale(156.19)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(t, n) {
                return [t * e, (1 + e) * Object(i.F)(n / 2)]
            }

            var e = Object(i.h)(t);
            return n.invert = function (t, n) {
                return [t / e, 2 * Object(i.f)(n / (1 + e))]
            }, n
        }

        n.a = r;
        var i = e(1), o = e(31);
        n.b = function () {
            return Object(o.a)(r).scale(124.75)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.B)(8 / (3 * o.s));
            return [e * t * (1 - Object(o.a)(n) / o.s), e * n]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = Object(o.B)(8 / (3 * o.s)), r = n / e;
            return [t / (e * (1 - Object(o.a)(r) / o.s)), r]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(165.664)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.B)(4 - 3 * Object(o.y)(Object(o.a)(n)));
            return [2 / Object(o.B)(6 * o.s) * t * e, Object(o.x)(n) * Object(o.B)(2 * o.s / 3) * (2 - e)]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = 2 - Object(o.a)(n) / Object(o.B)(2 * o.s / 3);
            return [t * Object(o.B)(6 * o.s) / (2 * e), Object(o.x)(n) * Object(o.e)((4 - e * e) / 3)]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(165.664)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.B)(o.s * (4 + o.s));
            return [2 / e * t * (1 + Object(o.B)(1 - 4 * n * n / (o.s * o.s))), 4 / e * n]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = Object(o.B)(o.s * (4 + o.s)) / 2;
            return [t * e / (1 + Object(o.B)(1 - n * n * (4 + o.s) / (4 * o.s))), n * e / 2]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(180.739)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = (2 + o.o) * Object(o.y)(n);
            n /= 2;
            for (var r = 0, i = 1 / 0; r < 10 && Object(o.a)(i) > o.k; r++) {
                var u = Object(o.h)(n);
                n -= i = (n + Object(o.y)(n) * (u + 2) - e) / (2 * u * (1 + u))
            }
            return [2 / Object(o.B)(o.s * (4 + o.s)) * t * (1 + Object(o.h)(n)), 2 * Object(o.B)(o.s / (4 + o.s)) * Object(o.y)(n)]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = n * Object(o.B)((4 + o.s) / o.s) / 2, r = Object(o.e)(e), i = Object(o.h)(r);
            return [t / (2 / Object(o.B)(o.s * (4 + o.s)) * (1 + i)), Object(o.e)((r + e * (i + 2)) / (2 + o.o))]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(180.739)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t * (1 + Object(o.h)(n)) / Object(o.B)(2 + o.s), 2 * n / Object(o.B)(2 + o.s)]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = Object(o.B)(2 + o.s), r = n * e / 2;
            return [e * t / (1 + Object(o.h)(r)), r]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(173.044)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            for (var e = (1 + o.o) * Object(o.y)(n), r = 0, i = 1 / 0; r < 10 && Object(o.a)(i) > o.k; r++) n -= i = (n + Object(o.y)(n) - e) / (1 + Object(o.h)(n));
            return e = Object(o.B)(2 + o.s), [t * (1 + Object(o.h)(n)) / e, 2 * n / e]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = 1 + o.o, r = Object(o.B)(e / 2);
            return [2 * t * r / (1 + Object(o.h)(n *= r)), Object(o.e)((n + Object(o.y)(n)) / e)]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(173.044)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(u.y)(t /= 2), r = Object(u.h)(t), i = Object(u.B)(Object(u.h)(n)), o = Object(u.h)(n /= 2),
                c = Object(u.y)(n) / (o + u.D * r * i), f = Object(u.B)(2 / (1 + c * c)),
                s = Object(u.B)((u.D * o + (r + e) * i) / (u.D * o + (r - e) * i));
            return [a * (f * (s - 1 / s) - 2 * Object(u.p)(s)), a * (f * c * (s + 1 / s) - 2 * Object(u.f)(c))]
        }

        n.b = r;
        var i = e(0), o = e(130), u = e(1), a = 3 + 2 * u.D;
        r.invert = function (t, n) {
            if (!(e = o.a.invert(t / 1.2, 1.065 * n))) return null;
            var e, r = e[0], i = e[1], c = 20;
            t /= a, n /= a;
            do {
                var f = r / 2, s = i / 2, l = Object(u.y)(f), h = Object(u.h)(f), p = Object(u.y)(s),
                    v = Object(u.h)(s), d = Object(u.h)(i), g = Object(u.B)(d), b = p / (v + u.D * h * g), y = b * b,
                    j = Object(u.B)(2 / (1 + y)), O = (u.D * v + (h + l) * g) / (u.D * v + (h - l) * g),
                    _ = Object(u.B)(O), m = _ - 1 / _, w = _ + 1 / _, x = j * m - 2 * Object(u.p)(_) - t,
                    E = j * b * w - 2 * Object(u.f)(b) - n, M = p && u.C * g * l * y / p,
                    T = (u.D * h * v + g) / (2 * (v + u.D * h * g) * (v + u.D * h * g) * g), S = -.5 * b * j * j * j,
                    k = S * M, C = S * T, P = (P = 2 * v + u.D * g * (h - l)) * P * _, N = (u.D * h * v * g + d) / P,
                    R = -u.D * l * p / (g * P), B = m * k - 2 * N / _ + j * (N + N / O),
                    A = m * C - 2 * R / _ + j * (R + R / O),
                    I = b * w * k - 2 * M / (1 + y) + j * w * M + j * b * (N - N / O),
                    L = b * w * C - 2 * T / (1 + y) + j * w * T + j * b * (R - R / O), z = A * I - L * B;
                if (!z) break;
                var q = (E * A - x * L) / z, F = (x * I - E * B) / z;
                r -= q, i = Object(u.q)(-u.o, Object(u.r)(u.o, i - F))
            } while ((Object(u.a)(q) > u.k || Object(u.a)(F) > u.k) && --c > 0);
            return Object(u.a)(Object(u.a)(i) - u.o) < u.k ? [0, i] : c && [r, i]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(62.5271)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.F)(n / 2);
            return [t * u * Object(o.B)(1 - e * e), (1 + u) * e]
        }

        n.b = r;
        var i = e(0), o = e(1), u = Object(o.h)(35 * o.v);
        r.invert = function (t, n) {
            var e = n / (1 + u);
            return [t && t / (u * Object(o.B)(1 - e * e)), 2 * Object(o.f)(e)]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(137.152)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = n / 2, r = Object(o.h)(e);
            return [2 * t / o.E * Object(o.h)(n) * r * r, o.E * Object(o.F)(e)]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = Object(o.f)(n / o.E), r = Object(o.h)(e), i = 2 * e;
            return [t * o.E / 2 / (Object(o.h)(i) * r * r), i]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(135.264)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return [t[0] / 2, Object(u.e)(Object(u.F)(t[1] / 2 * u.v)) * u.j]
        }

        function i(t) {
            return [2 * t[0], 2 * Object(u.f)(Object(u.y)(t[1] * u.v)) * u.j]
        }

        var o = e(0), u = e(1);
        n.a = function (t) {
            function n(t) {
                return a(r(t))
            }

            function e(t) {
                n[t] = function (e) {
                    return arguments.length ? (a[t](e), n) : a[t]()
                }
            }

            null == t && (t = o.geoOrthographic);
            var a = t(), c = Object(o.geoEquirectangular)().scale(u.j).precision(0).clipAngle(null).translate([0, 0]);
            return a.invert && (n.invert = function (t) {
                return i(a.invert(t))
            }), n.stream = function (t) {
                var n = a.stream(t), e = c.stream({
                    point: function (t, e) {
                        n.point(t / 2, Object(u.e)(Object(u.F)(-e / 2 * u.v)) * u.j)
                    }, lineStart: function () {
                        n.lineStart()
                    }, lineEnd: function () {
                        n.lineEnd()
                    }, polygonStart: function () {
                        n.polygonStart()
                    }, polygonEnd: function () {
                        n.polygonEnd()
                    }
                });
                return e.sphere = n.sphere, e
            }, n.rotate = function (t) {
                return arguments.length ? (c.rotate(t), n) : c.rotate()
            }, n.center = function (t) {
                return arguments.length ? (a.center(r(t)), n) : i(a.center())
            }, e("clipAngle"), e("clipExtent"), e("scale"), e("translate"), e("precision"), n.scale(249.5)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            function e(n, e) {
                var f = Object(u.geoAzimuthalEquidistantRaw)(n, e), s = f[0], l = f[1], h = s * s + l * l;
                if (h > c) {
                    var p = Object(a.B)(h), v = Object(a.g)(l, s), d = r * Object(a.w)(v / r), g = v - d,
                        b = t * Object(a.h)(g), y = (t * Object(a.y)(g) - g * Object(a.y)(b)) / (a.o - b), j = i(g, y),
                        O = (a.s - t) / o(j, b, a.s);
                    s = p;
                    var _, m = 50;
                    do {
                        s -= _ = (t + o(j, b, s) * O - p) / (j(s) * O)
                    } while (Object(a.a)(_) > a.k && --m > 0);
                    l = g * Object(a.y)(s), s < a.o && (l -= y * (s - a.o));
                    var w = Object(a.y)(d), x = Object(a.h)(d);
                    f[0] = s * x - l * w, f[1] = s * w + l * x
                }
                return f
            }

            var r = 2 * a.s / n, c = t * t;
            return e.invert = function (n, e) {
                var f = n * n + e * e;
                if (f > c) {
                    var s = Object(a.B)(f), l = Object(a.g)(e, n), h = r * Object(a.w)(l / r), p = l - h;
                    n = s * Object(a.h)(p), e = s * Object(a.y)(p);
                    for (var v = n - a.o, d = Object(a.y)(n), g = e / d, b = n < a.o ? 1 / 0 : 0, y = 10; ;) {
                        var j = t * Object(a.y)(g), O = t * Object(a.h)(g), _ = Object(a.y)(O), m = a.o - O,
                            w = (j - g * _) / m, x = i(g, w);
                        if (Object(a.a)(b) < a.l || !--y) break;
                        g -= b = (g * d - w * v - e) / (d - 2 * v * (m * (O + g * j * Object(a.h)(O) - _) - j * (j - g * _)) / (m * m))
                    }
                    l = h + g, n = (s = t + o(x, O, n) * (a.s - t) / o(x, O, a.s)) * Object(a.h)(l), e = s * Object(a.y)(l)
                }
                return u.geoAzimuthalEquidistantRaw.invert(n, e)
            }, e
        }

        function i(t, n) {
            return function (e) {
                var r = t * Object(a.h)(e);
                return e < a.o && (r -= n), Object(a.B)(1 + r * r)
            }
        }

        function o(t, n, e) {
            for (var r = (e - n) / 50, i = t(n) + t(e), o = 1, u = n; o < 50; ++o) i += 2 * t(u += r);
            return .5 * i * r
        }

        n.b = r;
        var u = e(0), a = e(1);
        n.a = function () {
            var t = 6, n = 30 * a.v, e = Object(a.h)(n), i = Object(a.y)(n), o = Object(u.geoProjectionMutator)(r),
                c = o(n, t), f = c.stream, s = -Object(a.h)(.01 * a.v), l = Object(a.y)(.01 * a.v);
            return c.radius = function (r) {
                return arguments.length ? (e = Object(a.h)(n = r * a.v), i = Object(a.y)(n), o(n, t)) : n * a.j
            }, c.lobes = function (e) {
                return arguments.length ? o(n, t = +e) : t
            }, c.stream = function (n) {
                var r = c.rotate(), o = f(n), u = (c.rotate([0, 0]), f(n));
                return c.rotate(r), o.sphere = function () {
                    u.polygonStart(), u.lineStart();
                    for (var n = 0, r = 2 * a.s / t, o = 0; n < t; ++n, o -= r) u.point(Object(a.g)(l * Object(a.h)(o), s) * a.j, Object(a.e)(l * Object(a.y)(o)) * a.j), u.point(Object(a.g)(i * Object(a.h)(o - r / 2), e) * a.j, Object(a.e)(i * Object(a.y)(o - r / 2)) * a.j);
                    u.lineEnd(), u.polygonEnd()
                }, o
            }, c.rotate([90, -40]).scale(91.7095).clipAngle(179.999)
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return o
        });
        var r = e(0), i = e(52), o = Object(i.a)(2.8284, -1.6988, .75432, -.18071, 1.76003, -.38914, .042555);
        n.a = function () {
            return Object(r.geoProjection)(o).scale(149.995)
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return o
        });
        var r = e(0), i = e(52), o = Object(i.a)(2.583819, -.835827, .170354, -.038094, 1.543313, -.411435, .082742);
        n.a = function () {
            return Object(r.geoProjection)(o).scale(153.93)
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return u
        });
        var r = e(0), i = e(52), o = e(1), u = Object(i.a)(5 / 6 * o.s, -.62636, -.0344, 0, 1.3493, -.05524, 0, .045);
        n.a = function () {
            return Object(r.geoProjection)(u).scale(130.945)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = t * t, r = n * n;
            return [t * (1 - .162388 * r) * (.87 - 952426e-9 * e * e), n * (1 + r / 12)]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e, r = t, i = n, u = 50;
            do {
                var a = i * i;
                i -= e = (i * (1 + a / 12) - n) / (1 + a / 4)
            } while (Object(o.a)(e) > o.k && --u > 0);
            u = 50, t /= 1 - .162388 * a;
            do {
                var c = (c = r * r) * c;
                r -= e = (r * (.87 - 952426e-9 * c) - t) / (.87 - .00476213 * c)
            } while (Object(o.a)(e) > o.k && --u > 0);
            return [r, i]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(131.747)
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return o
        });
        var r = e(0), i = e(52), o = Object(i.a)(2.6516, -.76534, .19123, -.047094, 1.36289, -.13965, .031762);
        n.a = function () {
            return Object(r.geoProjection)(o).scale(131.087)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e, r, i, u, a;
            if (n < o.k) return u = Object(o.y)(t), r = Object(o.h)(t), e = n * (t - u * r) / 4, [u - e * r, r + e * u, 1 - n * u * u / 2, t - e];
            if (n >= 1 - o.k) return e = (1 - n) / 4, r = Object(o.i)(t), u = Object(o.G)(t), i = 1 / r, a = r * Object(o.A)(t), [u + e * (a - t) / (r * r), i - e * u * i * (a - t), i + e * u * i * (a + t), 2 * Object(o.f)(Object(o.m)(t)) - o.o + e * (a - t) / r];
            var c = [1, 0, 0, 0, 0, 0, 0, 0, 0], f = [Object(o.B)(n), 0, 0, 0, 0, 0, 0, 0, 0], s = 0;
            for (r = Object(o.B)(1 - n), a = 1; Object(o.a)(f[s] / c[s]) > o.k && s < 8;) e = c[s++], f[s] = (e - r) / 2, c[s] = (e + r) / 2, r = Object(o.B)(e * r), a *= 2;
            i = a * c[s] * t;
            do {
                u = f[s] * Object(o.y)(r = i) / c[s], i = (Object(o.e)(u) + i) / 2
            } while (--s);
            return [Object(o.y)(i), u = Object(o.h)(i), u / Object(o.h)(i - r), i]
        }

        function i(t, n) {
            if (!n) return t;
            if (1 === n) return Object(o.p)(Object(o.F)(t / 2 + o.u));
            for (var e = 1, r = Object(o.B)(1 - n), i = Object(o.B)(n), u = 0; Object(o.a)(i) > o.k; u++) {
                if (t % o.s) {
                    var a = Object(o.f)(r * Object(o.F)(t) / e);
                    a < 0 && (a += o.s), t += a + ~~(t / o.s) * o.s
                } else t += t;
                i = (e + r) / 2, r = Object(o.B)(e * r), i = ((e = i) - r) / 2
            }
            return t / (Object(o.t)(2, u) * e)
        }

        n.c = function (t, n, e) {
            var i, o, u;
            return t ? (i = r(t, e), n ? (o = r(n, 1 - e), u = o[1] * o[1] + e * i[0] * i[0] * o[0] * o[0], [[i[0] * o[2] / u, i[1] * i[2] * o[0] * o[1] / u], [i[1] * o[1] / u, -i[0] * i[2] * o[0] * o[2] / u], [i[2] * o[1] * o[2] / u, -e * i[0] * i[1] * o[0] / u]]) : [[i[0], 0], [i[1], 0], [i[2], 0]]) : (o = r(n, 1 - e), [[0, o[0] / o[1]], [1 / o[1], 0], [o[2] / o[1], 0]])
        }, n.b = function (t, n, e) {
            var r = Object(o.a)(t), u = Object(o.a)(n), a = Object(o.A)(u);
            if (r) {
                var c = 1 / Object(o.y)(r), f = 1 / (Object(o.F)(r) * Object(o.F)(r)),
                    s = -(f + e * (a * a * c * c) - 1 + e), l = (e - 1) * f, h = (-s + Object(o.B)(s * s - 4 * l)) / 2;
                return [i(Object(o.f)(1 / Object(o.B)(h)), e) * Object(o.x)(t), i(Object(o.f)(Object(o.B)((h / f - 1) / e)), 1 - e) * Object(o.x)(n)]
            }
            return [0, i(Object(o.f)(a), 1 - e) * Object(o.x)(n)]
        }, n.a = i;
        var o = e(1)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            function e(e, r) {
                var i = Object(o.geoAzimuthalEqualAreaRaw)(e / n, r);
                return i[0] *= t, i
            }

            return arguments.length < 2 && (n = t), 1 === n ? o.geoAzimuthalEqualAreaRaw : n === 1 / 0 ? i : (e.invert = function (e, r) {
                var i = o.geoAzimuthalEqualAreaRaw.invert(e / t, r);
                return i[0] *= n, i
            }, e)
        }

        function i(t, n) {
            return [t * Object(u.h)(n) / Object(u.h)(n /= 2), 2 * Object(u.y)(n)]
        }

        n.b = r;
        var o = e(0), u = e(1);
        i.invert = function (t, n) {
            var e = 2 * Object(u.e)(n / 2);
            return [t * Object(u.h)(e / 2) / Object(u.h)(e), e]
        }, n.a = function () {
            var t = 2, n = Object(o.geoProjectionMutator)(r), e = n(t);
            return e.coefficient = function (e) {
                return arguments.length ? n(t = +e) : t
            }, e.scale(169.529)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(t, n) {
                var i = o(t, n);
                t = i[0], n = i[1];
                var a = Object(u.y)(n), c = Object(u.h)(n), f = Object(u.h)(t), s = Object(u.b)(e * a + r * c * f),
                    l = Object(u.y)(s), h = Object(u.a)(l) > u.k ? s / l : 1;
                return [h * r * Object(u.y)(t), (Object(u.a)(t) > u.o ? h : -h) * (e * c - r * a * f)]
            }

            var e = Object(u.y)(t), r = Object(u.h)(t), o = i(t);
            return o.invert = i(-t), n.invert = function (t, n) {
                var r = Object(u.B)(t * t + n * n), i = -Object(u.y)(r), a = Object(u.h)(r), c = r * a, f = -n * i,
                    s = r * e, l = Object(u.B)(c * c + f * f - s * s), h = Object(u.g)(c * s + f * l, f * s - c * l),
                    p = (r > u.o ? -1 : 1) * Object(u.g)(t * i, r * Object(u.h)(h) * a + n * Object(u.y)(h) * i);
                return o.invert(p, h)
            }, n
        }

        function i(t) {
            var n = Object(u.y)(t), e = Object(u.h)(t);
            return function (t, r) {
                var i = Object(u.h)(r), o = Object(u.h)(t) * i, a = Object(u.y)(t) * i, c = Object(u.y)(r);
                return [Object(u.g)(a, o * e - c * n), Object(u.e)(c * e + o * n)]
            }
        }

        n.b = r;
        var o = e(0), u = e(1);
        n.a = function () {
            var t = 0, n = Object(o.geoProjectionMutator)(r), e = n(t), i = e.rotate, a = e.stream,
                c = Object(o.geoCircle)();
            return e.parallel = function (r) {
                if (!arguments.length) return t * u.j;
                var i = e.rotate();
                return n(t = r * u.v).rotate(i)
            }, e.rotate = function (n) {
                return arguments.length ? (i.call(e, [n[0], n[1] - t * u.j]), c.center([-n[0], -n[1]]), e) : (n = i.call(e), n[1] += t * u.j, n)
            }, e.stream = function (t) {
                return t = a(t), t.sphere = function () {
                    t.polygonStart();
                    var n, e = c.radius(89.99)().coordinates[0], r = e.length - 1, i = -1;
                    for (t.lineStart(); ++i < r;) t.point((n = e[i])[0], n[1]);
                    for (t.lineEnd(), r = (e = c.radius(90.01)().coordinates[0]).length - 1, t.lineStart(); --i >= 0;) t.point((n = e[i])[0], n[1]);
                    t.lineEnd(), t.polygonEnd()
                }, t
            }, e.scale(79.4187).parallel(45).clipAngle(179.999)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(n, f) {
                var v, d = Object(c.a)(f);
                if (d > e) {
                    var g = Object(c.r)(t - 1, Object(c.q)(0, Object(c.n)((n + c.s) / l)));
                    n += c.s * (t - 1) / t - g * l, (v = Object(u.a)(n, d))[0] = v[0] * c.H / r - c.H * (t - 1) / (2 * t) + g * c.H / t, v[1] = i + 4 * (v[1] - o) * a / c.H, f < 0 && (v[1] = -v[1])
                } else v = s(n, f);
                return v[0] *= h, v[1] /= p, v
            }

            var e = f * c.v, r = Object(u.a)(c.s, e)[0] - Object(u.a)(-c.s, e)[0], i = s(0, e)[1],
                o = Object(u.a)(0, e)[1], a = c.E - o, l = c.H / t, h = 4 / c.H, p = i + a * a * 4 / c.H;
            return n.invert = function (n, e) {
                n /= h, e *= p;
                var f = Object(c.a)(e);
                if (f > i) {
                    var v = Object(c.r)(t - 1, Object(c.q)(0, Object(c.n)((n + c.s) / l)));
                    n = (n + c.s * (t - 1) / t - v * l) * r / c.H;
                    var d = u.a.invert(n, .25 * (f - i) * c.H / a + o);
                    return d[0] -= c.s * (t - 1) / t - v * l, e < 0 && (d[1] = -d[1]), d
                }
                return s.invert(n, e)
            }, n
        }

        n.b = r;
        var i = e(14), o = e(0), u = e(72), a = e(132), c = e(1), f = 41 + 48 / 36 + 37 / 3600, s = Object(a.a)(0);
        n.a = function () {
            var t = 4, n = Object(o.geoProjectionMutator)(r), e = n(t), u = e.stream;
            return e.lobes = function (e) {
                return arguments.length ? n(t = +e) : t
            }, e.stream = function (n) {
                var r = e.rotate(), a = u(n), c = (e.rotate([0, 0]), u(n));
                return e.rotate(r), a.sphere = function () {
                    Object(o.geoStream)(function (t) {
                        return {
                            type: "Polygon",
                            coordinates: [Object(i.range)(-180, 180 + t / 2, t).map(function (t, n) {
                                return [t, 1 & n ? 90 - 1e-6 : f]
                            }).concat(Object(i.range)(180, -180 - t / 2, -t).map(function (t, n) {
                                return [t, 1 & n ? 1e-6 - 90 : -f]
                            }))]
                        }
                    }(180 / t), c)
                }, a
            }, e.scale(239.75)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(n, i) {
                var l, h, p = 1 - Object(o.y)(i);
                if (p && p < 2) {
                    var v, d = o.o - i, g = 25;
                    do {
                        var b = Object(o.y)(d), y = Object(o.h)(d), j = u + Object(o.g)(b, r - y),
                            O = 1 + s - 2 * r * y;
                        d -= v = (d - f * u - r * b + O * j - .5 * p * e) / (2 * r * b * j)
                    } while (Object(o.a)(v) > o.l && --g > 0);
                    l = a * Object(o.B)(O), h = n * j / o.s
                } else l = a * (t + p), h = n * u / o.s;
                return [l * Object(o.y)(h), c - l * Object(o.h)(h)]
            }

            var e, r = 1 + t, i = Object(o.y)(1 / r), u = Object(o.e)(i),
                a = 2 * Object(o.B)(o.s / (e = o.s + 4 * u * r)), c = .5 * a * (r + Object(o.B)(t * (2 + t))),
                f = t * t, s = r * r;
            return n.invert = function (t, n) {
                var i = t * t + (n -= c) * n, l = (1 + s - i / (a * a)) / (2 * r), h = Object(o.b)(l),
                    p = Object(o.y)(h), v = u + Object(o.g)(p, r - l);
                return [Object(o.e)(t / Object(o.B)(i)) * o.s / v, Object(o.e)(1 - 2 * (h - f * u - r * p + (1 + s - 2 * r * l) * v) / e)]
            }, n
        }

        n.b = r;
        var i = e(0), o = e(1);
        n.a = function () {
            var t = 1, n = Object(i.geoProjectionMutator)(r), e = n(t);
            return e.ratio = function (e) {
                return arguments.length ? n(t = +e) : t
            }, e.scale(167.774).center([0, 18.67])
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(131), i = e(23),
            o = [[[[-180, 0], [-100, 90], [-40, 0]], [[-40, 0], [30, 90], [180, 0]]], [[[-180, 0], [-160, -90], [-100, 0]], [[-100, 0], [-60, -90], [-20, 0]], [[-20, 0], [20, -90], [80, 0]], [[80, 0], [140, -90], [180, 0]]]];
        n.a = function () {
            return Object(i.a)(r.a, o).scale(160.857)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(136), i = e(23),
            o = [[[[-180, 0], [-100, 90], [-40, 0]], [[-40, 0], [30, 90], [180, 0]]], [[[-180, 0], [-160, -90], [-100, 0]], [[-100, 0], [-60, -90], [-20, 0]], [[-20, 0], [20, -90], [80, 0]], [[80, 0], [140, -90], [180, 0]]]];
        n.a = function () {
            return Object(i.a)(r.b, o).scale(152.63)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(21), i = e(23),
            o = [[[[-180, 0], [-100, 90], [-40, 0]], [[-40, 0], [30, 90], [180, 0]]], [[[-180, 0], [-160, -90], [-100, 0]], [[-100, 0], [-60, -90], [-20, 0]], [[-20, 0], [20, -90], [80, 0]], [[80, 0], [140, -90], [180, 0]]]];
        n.a = function () {
            return Object(i.a)(r.d, o).scale(169.529)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(21), i = e(23),
            o = [[[[-180, 0], [-90, 90], [0, 0]], [[0, 0], [90, 90], [180, 0]]], [[[-180, 0], [-90, -90], [0, 0]], [[0, 0], [90, -90], [180, 0]]]];
        n.a = function () {
            return Object(i.a)(r.d, o).scale(169.529).rotate([20, 0])
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(73), i = e(23),
            o = [[[[-180, 35], [-30, 90], [0, 35]], [[0, 35], [30, 90], [180, 35]]], [[[-180, -10], [-102, -90], [-65, -10]], [[-65, -10], [5, -90], [77, -10]], [[77, -10], [103, -90], [180, -10]]]];
        n.a = function () {
            return Object(i.a)(r.c, o).rotate([-20, -55]).scale(164.263).center([0, -5.4036])
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(38), i = e(23),
            o = [[[[-180, 0], [-110, 90], [-40, 0]], [[-40, 0], [0, 90], [40, 0]], [[40, 0], [110, 90], [180, 0]]], [[[-180, 0], [-110, -90], [-40, 0]], [[-40, 0], [0, -90], [40, 0]], [[40, 0], [110, -90], [180, 0]]]];
        n.a = function () {
            return Object(i.a)(r.b, o).scale(152.63).rotate([-20, 0])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [3 / o.H * t * Object(o.B)(o.s * o.s / 3 - n * n), n]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            return [o.H / 3 * t / Object(o.B)(o.s * o.s / 3 - n * n), n]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(158.837)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(n, e) {
                if (Object(o.a)(Object(o.a)(e) - o.o) < o.k) return [0, e < 0 ? -2 : 2];
                var r = Object(o.y)(e), i = Object(o.t)((1 + r) / (1 - r), t / 2),
                    u = .5 * (i + 1 / i) + Object(o.h)(n *= t);
                return [2 * Object(o.y)(n) / u, (i - 1 / i) / u]
            }

            return n.invert = function (n, e) {
                var r = Object(o.a)(e);
                if (Object(o.a)(r - 2) < o.k) return n ? null : [0, Object(o.x)(e) * o.o];
                if (r > 2) return null;
                var i = (n /= 2) * n, u = (e /= 2) * e, a = 2 * e / (1 + i + u);
                return a = Object(o.t)((1 + a) / (1 - a), 1 / t), [Object(o.g)(2 * n, 1 - i - u) / t, Object(o.e)((a - 1) / (a + 1))]
            }, n
        }

        n.b = r;
        var i = e(0), o = e(1);
        n.a = function () {
            var t = .5, n = Object(i.geoProjectionMutator)(r), e = n(t);
            return e.spacing = function (e) {
                return arguments.length ? n(t = +e) : t
            }, e.scale(124.75)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t * (1 + Object(o.B)(Object(o.h)(n))) / 2, n / (Object(o.h)(n / 2) * Object(o.h)(t / 6))]
        }

        n.b = r;
        var i = e(0), o = e(1), u = o.s / o.D;
        r.invert = function (t, n) {
            var e = Object(o.a)(t), r = Object(o.a)(n), i = o.k, a = o.o;
            r < u ? a *= r / u : i += 6 * Object(o.b)(u / r);
            for (var c = 0; c < 25; c++) {
                var f = Object(o.y)(a), s = Object(o.B)(Object(o.h)(a)), l = Object(o.y)(a / 2), h = Object(o.h)(a / 2),
                    p = Object(o.y)(i / 6), v = Object(o.h)(i / 6), d = .5 * i * (1 + s) - e, g = a / (h * v) - r,
                    b = s ? -.25 * i * f / s : 0, y = .5 * (1 + s), j = (1 + .5 * a * l / h) / (h * v),
                    O = a / h * (p / 6) / (v * v), _ = b * O - j * y, m = (d * O - g * y) / _, w = (g * b - d * j) / _;
                if (a -= m, i -= w, Object(o.a)(m) < o.k && Object(o.a)(w) < o.k) break
            }
            return [t < 0 ? -i : i, n < 0 ? -a : a]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(97.2672)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = t * t, r = n * n;
            return [t * (.975534 + r * (-.0143059 * e - .119161 + -.0547009 * r)), n * (1.00384 + e * (.0802894 + -.02855 * r + 199025e-9 * e) + r * (.0998909 + -.0491032 * r))]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = Object(o.x)(t) * o.s, r = n / 2, i = 50;
            do {
                var u = e * e, a = r * r, c = e * r,
                    f = e * (.975534 + a * (-.0143059 * u - .119161 + -.0547009 * a)) - t,
                    s = r * (1.00384 + u * (.0802894 + -.02855 * a + 199025e-9 * u) + a * (.0998909 + -.0491032 * a)) - n,
                    l = .975534 - a * (.119161 + 3 * u * .0143059 + .0547009 * a),
                    h = -c * (.238322 + .2188036 * a + .0286118 * u), p = c * (.1605788 + 7961e-7 * u + -.0571 * a),
                    v = 1.00384 + u * (.0802894 + 199025e-9 * u) + a * (3 * (.0998909 - .02855 * u) - .245516 * a),
                    d = h * p - v * l, g = (s * h - f * v) / d, b = (f * p - s * l) / d;
                e -= g, r -= b
            } while ((Object(o.a)(g) > o.k || Object(o.a)(b) > o.k) && --i > 0);
            return i && [e, r]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(139.98)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [Object(o.y)(t) / Object(o.h)(n), Object(o.F)(n) * Object(o.h)(t)]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = t * t, r = n * n, i = r + 1,
                u = t ? o.C * Object(o.B)((i - Object(o.B)(e * e + 2 * e * (r - 1) + i * i)) / e + 1) : 1 / Object(o.B)(i);
            return [Object(o.e)(t * u), Object(o.x)(n) * Object(o.b)(u)]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(144.049).clipAngle(89.999)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(n, i) {
                var u = i - t,
                    a = Object(o.a)(u) < o.k ? n * e : Object(o.a)(a = o.u + i / 2) < o.k || Object(o.a)(Object(o.a)(a) - o.o) < o.k ? 0 : n * u / Object(o.p)(Object(o.F)(a) / r);
                return [a, u]
            }

            var e = Object(o.h)(t), r = Object(o.F)(o.u + t / 2);
            return n.invert = function (n, i) {
                var u, a = i + t;
                return [Object(o.a)(i) < o.k ? n / e : Object(o.a)(u = o.u + a / 2) < o.k || Object(o.a)(Object(o.a)(u) - o.o) < o.k ? 0 : n * Object(o.p)(Object(o.F)(u) / r) / i, a]
            }, n
        }

        n.b = r;
        var i = e(31), o = e(1);
        n.a = function () {
            return Object(i.a)(r).parallel(40).scale(158.837)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t, 1.25 * Object(o.p)(Object(o.F)(o.u + .4 * n))]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            return [t, 2.5 * Object(o.f)(Object(o.m)(.8 * n)) - .625 * o.s]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(108.318)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(n, r) {
                for (var i, o = Object(u.h)(r), a = 2 / (1 + o * Object(u.h)(n)), c = a * o * Object(u.y)(n), f = a * Object(u.y)(r), s = e, l = t[s], h = l[0], p = l[1]; --s >= 0;) h = (l = t[s])[0] + c * (i = h) - f * p, p = l[1] + c * p + f * i;
                return h = c * (i = h) - f * p, p = c * p + f * i, [h, p]
            }

            var e = t.length - 1;
            return n.invert = function (n, r) {
                var i = 20, o = n, a = r;
                do {
                    for (var c, f = e, s = t[f], l = s[0], h = s[1], p = 0, v = 0; --f >= 0;) p = l + o * (c = p) - a * v, v = h + o * v + a * c, l = (s = t[f])[0] + o * (c = l) - a * h, h = s[1] + o * h + a * c;
                    var d, g, b = (p = l + o * (c = p) - a * v) * p + (v = h + o * v + a * c) * v;
                    o -= d = ((l = o * (c = l) - a * h - n) * p + (h = o * h + a * c - r) * v) / b, a -= g = (h * p - l * v) / b
                } while (Object(u.a)(d) + Object(u.a)(g) > u.k * u.k && --i > 0);
                if (i) {
                    var y = Object(u.B)(o * o + a * a), j = 2 * Object(u.f)(.5 * y), O = Object(u.y)(j);
                    return [Object(u.g)(o * O, y * Object(u.h)(j)), y ? Object(u.e)(a * O / y) : 0]
                }
            }, n
        }

        function i(t, n) {
            var e = Object(o.geoProjection)(r(t)).rotate(n).clipAngle(90), i = Object(o.geoRotation)(n), u = e.center;
            return delete e.rotate, e.center = function (t) {
                return arguments.length ? u(i(t)) : i.invert(u())
            }, e
        }

        n.g = r, n.b = function () {
            return i(a, [152, -64]).scale(1500).center([-160.908, 62.4864]).clipAngle(25)
        }, n.c = function () {
            return i(c, [95, -38]).scale(1e3).clipAngle(55).center([-96.5563, 38.8675])
        }, n.d = function () {
            return i(f, [120, -45]).scale(359.513).clipAngle(55).center([-117.474, 53.0628])
        }, n.f = function () {
            return i(s, [-20, -18]).scale(209.091).center([20, 16.7214]).clipAngle(82)
        }, n.e = function () {
            return i(l, [165, 10]).scale(250).clipAngle(130).center([-165, -10])
        }, n.a = i;
        var o = e(0), u = e(1),
            a = [[.9972523, 0], [.0052513, -.0041175], [.0074606, .0048125], [-.0153783, -.1968253], [.0636871, -.1408027], [.3660976, -.2937382]],
            c = [[.98879, 0], [0, 0], [-.050909, 0], [0, 0], [.075528, 0]],
            f = [[.984299, 0], [.0211642, .0037608], [-.1036018, -.0575102], [-.0329095, -.0320119], [.0499471, .1223335], [.026046, .0899805], [7388e-7, -.1435792], [.0075848, -.1334108], [-.0216473, .0776645], [-.0225161, .0853673]],
            s = [[.9245, 0], [0, 0], [.01943, 0]], l = [[.721316, 0], [0, 0], [-.00881625, -.00617325]]
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.e)(7 * Object(o.y)(n) / (3 * u));
            return [u * t * (2 * Object(o.h)(2 * e / 3) - 1) / a, 9 * Object(o.y)(e / 3) / a]
        }

        n.b = r;
        var i = e(0), o = e(1), u = Object(o.B)(6), a = Object(o.B)(7);
        r.invert = function (t, n) {
            var e = 3 * Object(o.e)(n * a / 9);
            return [t * a / (u * (2 * Object(o.h)(2 * e / 3) - 1)), Object(o.e)(3 * Object(o.y)(e) * u / 7)]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(164.859)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            for (var e, r = (1 + o.C) * Object(o.y)(n), i = n, u = 0; u < 25 && (i -= e = (Object(o.y)(i / 2) + Object(o.y)(i) - r) / (.5 * Object(o.h)(i / 2) + Object(o.h)(i)), !(Object(o.a)(e) < o.k)); u++) ;
            return [t * (1 + 2 * Object(o.h)(i) / Object(o.h)(i / 2)) / (3 * o.D), 2 * Object(o.B)(3) * Object(o.y)(i / 2) / Object(o.B)(2 + o.D)]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = n * Object(o.B)(2 + o.D) / (2 * Object(o.B)(3)), r = 2 * Object(o.e)(e);
            return [3 * o.D * t / (1 + 2 * Object(o.h)(r) / Object(o.h)(r / 2)), Object(o.e)((e + Object(o.y)(r)) / (1 + o.C))]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(188.209)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            for (var e, r = Object(o.B)(6 / (4 + o.s)), i = (1 + o.s / 4) * Object(o.y)(n), u = n / 2, a = 0; a < 25 && (u -= e = (u / 2 + Object(o.y)(u) - i) / (.5 + Object(o.h)(u)), !(Object(o.a)(e) < o.k)); a++) ;
            return [r * (.5 + Object(o.h)(u)) * t / 1.5, r * u]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = Object(o.B)(6 / (4 + o.s)), r = n / e;
            return Object(o.a)(Object(o.a)(r) - o.o) < o.k && (r = r < 0 ? -o.o : o.o), [1.5 * t / (e * (.5 + Object(o.h)(r))), Object(o.e)((r / 2 + Object(o.y)(r)) / (1 + o.s / 4))]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(166.518)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = n * n, r = e * e;
            return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e, r = n, i = 25;
            do {
                var u = r * r, a = u * u;
                r -= e = (r * (1.007226 + u * (.015085 + a * (.028874 * u - .044475 - .005916 * a))) - n) / (1.007226 + u * (.045255 + a * (.259866 * u - .311325 - .005916 * 11 * a)))
            } while (Object(o.a)(e) > o.k && --i > 0);
            return [t / (.8707 + (u = r * r) * (u * (u * u * u * (.003971 - .001529 * u) - .013791) - .131979)), r]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(175.295)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = n * n, r = e * e, i = e * r;
            return [t * (.84719 - .13063 * e + i * i * (.05494 * e - .04515 - .02326 * r + .00331 * i)), n * (1.01183 + r * r * (.01926 * e - .02625 - .00396 * r))]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e, r, i, u, a = n, c = 25;
            do {
                a -= e = (a * (1.01183 + (i = (r = a * a) * r) * i * (.01926 * r - .02625 - .00396 * i)) - n) / (1.01183 + i * i * (.21186 * r - .23625 + -.05148 * i))
            } while (Object(o.a)(e) > o.l && --c > 0);
            return r = a * a, i = r * r, u = r * i, [t / (.84719 - .13063 * r + u * u * (.05494 * r - .04515 - .02326 * i + .00331 * u)), a]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(175.295)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t * (1 + Object(o.h)(n)) / 2, 2 * (n - Object(o.F)(n / 2))]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            for (var e = n / 2, r = 0, i = 1 / 0; r < 10 && Object(o.a)(i) > o.k; ++r) {
                var u = Object(o.h)(n / 2);
                n -= i = (n - Object(o.F)(n / 2) - e) / (1 - .5 / (u * u))
            }
            return [2 * t / (1 + Object(o.h)(n)), n]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(152.63)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = n * n;
            return [t, n * (u + e * e * (a + e * (c + f * e)))]
        }

        n.b = r;
        var i = e(0), o = e(1), u = 1.0148, a = .23185, c = -.14499, f = .02406, s = u, l = 5 * a, h = 7 * c, p = 9 * f;
        r.invert = function (t, n) {
            n > 1.790857183 ? n = 1.790857183 : n < -1.790857183 && (n = -1.790857183);
            var e, r = n;
            do {
                var i = r * r;
                r -= e = (r * (u + i * i * (a + i * (c + f * i))) - n) / (s + i * i * (l + i * (h + p * i)))
            } while (Object(o.a)(e) > o.k);
            return [t, r]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(139.319)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            if (Object(o.a)(n) < o.k) return [t, 0];
            var e = Object(o.F)(n), r = t * Object(o.y)(n);
            return [Object(o.y)(r) / e, n + (1 - Object(o.h)(r)) / e]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            if (Object(o.a)(n) < o.k) return [t, 0];
            var e, r = t * t + n * n, i = .5 * n, u = 10;
            do {
                var a = Object(o.F)(i), c = 1 / Object(o.h)(i), f = r - 2 * n * i + i * i;
                i -= e = (a * f + 2 * (i - n)) / (2 + f * c * c + 2 * (i - n) * a)
            } while (Object(o.a)(e) > o.k && --u > 0);
            return a = Object(o.F)(i), [(Object(o.a)(n) < Object(o.a)(i + 1 / a) ? Object(o.e)(t * a) : Object(o.x)(t) * (Object(o.b)(Object(o.a)(t * a)) + o.o)) / Object(o.y)(i), i]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(103.74)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t[0] * n[0] + t[1] * n[3], t[0] * n[1] + t[1] * n[4], t[0] * n[2] + t[1] * n[5] + t[2], t[3] * n[0] + t[4] * n[3], t[3] * n[1] + t[4] * n[4], t[3] * n[2] + t[4] * n[5] + t[5]]
        }

        function i(t, n) {
            return [t[0] - n[0], t[1] - n[1]]
        }

        function o(t) {
            return Object(u.B)(t[0] * t[0] + t[1] * t[1])
        }

        n.b = function (t) {
            var n = 1 / (t[0] * t[4] - t[1] * t[3]);
            return [n * t[4], -n * t[1], n * (t[1] * t[5] - t[2] * t[4]), -n * t[3], n * t[0], n * (t[2] * t[3] - t[0] * t[5])]
        }, n.c = r;
        var u = e(1);
        n.a = function (t, n) {
            var e = i(t[1], t[0]), a = i(n[1], n[0]), c = function (t, n) {
                return Object(u.g)(t[0] * n[1] - t[1] * n[0], t[0] * n[0] + t[1] * n[1])
            }(e, a), f = o(e) / o(a);
            return r([1, 0, t[0][0], 0, 1, t[0][1]], r([f, 0, 0, 0, f, 0], r([Object(u.h)(c), Object(u.y)(c), 0, -Object(u.y)(c), Object(u.h)(c), 0], [1, 0, -n[0][0], 0, 1, -n[0][1]])))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e(1), o = e(53), u = e(74);
        n.a = function (t) {
            t = t || function (t) {
                var n = Object(r.geoCentroid)({type: "MultiPoint", coordinates: t});
                return Object(r.geoGnomonic)().scale(1).translate([0, 0]).rotate([-n[0], -n[1]])
            };
            var n = u.a.map(function (n) {
                return {face: n, project: t(n)}
            });
            return [-1, 0, 0, 1, 0, 1, 4, 5].forEach(function (t, e) {
                var r = n[t];
                r && (r.children || (r.children = [])).push(n[e])
            }), Object(o.a)(n[0], function (t, e) {
                return n[t < -i.s / 2 ? e < 0 ? 6 : 4 : t < 0 ? e < 0 ? 2 : 0 : t < i.s / 2 ? e < 0 ? 3 : 1 : e < 0 ? 7 : 5]
            }).scale(101.858).center([0, 45])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.a)(t, n);
            return [e[0] * f, e[1]]
        }

        var i = e(0), o = e(72), u = e(1), a = e(53), c = e(74), f = 2 / Object(u.B)(3);
        r.invert = function (t, n) {
            return o.a.invert(t / f, n)
        }, n.a = function (t) {
            t = t || function (t) {
                var n = Object(i.geoCentroid)({type: "MultiPoint", coordinates: t});
                return Object(i.geoProjection)(r).translate([0, 0]).scale(1).rotate(n[1] > 0 ? [-n[0], 0] : [180 - n[0], 180])
            };
            var n = c.a.map(function (n) {
                return {face: n, project: t(n)}
            });
            return [-1, 0, 0, 1, 0, 1, 4, 5].forEach(function (t, e) {
                var r = n[t];
                r && (r.children || (r.children = [])).push(n[e])
            }), Object(a.a)(n[0], function (t, e) {
                return n[t < -u.s / 2 ? e < 0 ? 6 : 4 : t < 0 ? e < 0 ? 2 : 0 : t < u.s / 2 ? e < 0 ? 3 : 1 : e < 0 ? 7 : 5]
            }).scale(121.906).center([0, 48.5904])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            for (var e = 0, r = t.length, i = 0; e < r; ++e) i += t[e] * n[e];
            return i
        }

        function i(t) {
            return [Object(a.g)(t[1], t[0]) * a.j, Object(a.e)(Object(a.q)(-1, Object(a.r)(1, t[2]))) * a.j]
        }

        function o(t) {
            var n = t[0] * a.v, e = t[1] * a.v, r = Object(a.h)(e);
            return [r * Object(a.h)(n), r * Object(a.y)(n), Object(a.y)(e)]
        }

        var u = e(0), a = e(1), c = e(53), f = e(74);
        n.a = function (t) {
            t = t || function (t) {
                var n = 6 === t.length ? Object(u.geoCentroid)({type: "MultiPoint", coordinates: t}) : t[0];
                return Object(u.geoGnomonic)().scale(1).translate([0, 0]).rotate([-n[0], -n[1]])
            };
            var n = f.a.map(function (t) {
                for (var n, e = t.map(o), r = e.length, u = e[r - 1], a = [], c = 0; c < r; ++c) n = e[c], a.push(i([.9486832980505138 * u[0] + .31622776601683794 * n[0], .9486832980505138 * u[1] + .31622776601683794 * n[1], .9486832980505138 * u[2] + .31622776601683794 * n[2]]), i([.9486832980505138 * n[0] + .31622776601683794 * u[0], .9486832980505138 * n[1] + .31622776601683794 * u[1], .9486832980505138 * n[2] + .31622776601683794 * u[2]])), u = n;
                return a
            }), e = [], s = [-1, 0, 0, 1, 0, 1, 4, 5];
            n.forEach(function (t, r) {
                for (var i = f.a[r], u = i.length, a = e[r] = [], c = 0; c < u; ++c) n.push([i[c], t[(2 * c + 2) % (2 * u)], t[(2 * c + 1) % (2 * u)]]), s.push(r), a.push(function (t, n) {
                    return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
                }(o(t[(2 * c + 2) % (2 * u)]), o(t[(2 * c + 1) % (2 * u)])))
            });
            var l = n.map(function (n) {
                return {project: t(n), face: n}
            });
            return s.forEach(function (t, n) {
                var e = l[t];
                e && (e.children || (e.children = [])).push(l[n])
            }), Object(c.a)(l[0], function (t, n) {
                var i = Object(a.h)(n), o = [i * Object(a.h)(t), i * Object(a.y)(t), Object(a.y)(n)],
                    u = t < -a.s / 2 ? n < 0 ? 6 : 4 : t < 0 ? n < 0 ? 2 : 0 : t < a.s / 2 ? n < 0 ? 3 : 1 : n < 0 ? 7 : 5,
                    c = e[u];
                return l[r(c[0], o) < 0 ? 8 + 3 * u : r(c[1], o) < 0 ? 8 + 3 * u + 1 : r(c[2], o) < 0 ? 8 + 3 * u + 2 : u]
            }).scale(110.625).center([0, 45])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return {
                type: "FeatureCollection", features: t.features.map(function (t) {
                    return i(t, n)
                })
            }
        }

        function i(t, n) {
            return {type: "Feature", id: t.id, properties: t.properties, geometry: o(t.geometry, n)}
        }

        function o(t, n) {
            if (!t) return null;
            if ("GeometryCollection" === t.type) return function (t, n) {
                return {
                    type: "GeometryCollection", geometries: t.geometries.map(function (t) {
                        return o(t, n)
                    })
                }
            }(t, n);
            var e;
            switch (t.type) {
                case"Point":
                case"MultiPoint":
                    e = h;
                    break;
                case"LineString":
                case"MultiLineString":
                    e = p;
                    break;
                case"Polygon":
                case"MultiPolygon":
                case"Sphere":
                    e = v;
                    break;
                default:
                    return null
            }
            return Object(u.geoStream)(t, n(e)), e.result()
        }

        var u = e(0), a = e(299), c = e(300), f = e(301);
        n.a = function (t, n) {
            var e, u = n.stream;
            if (!u) throw new Error("invalid projection");
            switch (t && t.type) {
                case"Feature":
                    e = i;
                    break;
                case"FeatureCollection":
                    e = r;
                    break;
                default:
                    e = o
            }
            return e(t, u)
        };
        var s = [], l = [], h = {
            point: function (t, n) {
                s.push([t, n])
            }, result: function () {
                var t = s.length ? s.length < 2 ? {type: "Point", coordinates: s[0]} : {
                    type: "MultiPoint",
                    coordinates: s
                } : null;
                return s = [], t
            }
        }, p = {
            lineStart: a.a, point: function (t, n) {
                s.push([t, n])
            }, lineEnd: function () {
                s.length && (l.push(s), s = [])
            }, result: function () {
                var t = l.length ? l.length < 2 ? {type: "LineString", coordinates: l[0]} : {
                    type: "MultiLineString",
                    coordinates: l
                } : null;
                return l = [], t
            }
        }, v = {
            polygonStart: a.a, lineStart: a.a, point: function (t, n) {
                s.push([t, n])
            }, lineEnd: function () {
                var t = s.length;
                if (t) {
                    do {
                        s.push(s[0].slice())
                    } while (++t < 4);
                    l.push(s), s = []
                }
            }, polygonEnd: a.a, result: function () {
                if (!l.length) return null;
                var t = [], n = [];
                return l.forEach(function (e) {
                    Object(c.a)(e) ? t.push([e]) : n.push(e)
                }), n.forEach(function (n) {
                    var e = n[0];
                    t.some(function (t) {
                        if (Object(f.a)(t[0], e)) return t.push(n), !0
                    }) || t.push([n])
                }), l = [], t.length ? t.length > 1 ? {type: "MultiPolygon", coordinates: t} : {
                    type: "Polygon",
                    coordinates: t[0]
                } : null
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            if ((n = t.length) < 4) return !1;
            for (var n, e = 0, r = t[n - 1][1] * t[0][0] - t[n - 1][0] * t[0][1]; ++e < n;) r += t[e - 1][1] * t[e][0] - t[e - 1][0] * t[e][1];
            return r <= 0
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            for (var e = n[0], r = n[1], i = !1, o = 0, u = t.length, a = u - 1; o < u; a = o++) {
                var c = t[o], f = c[0], s = c[1], l = t[a], h = l[0], p = l[1];
                s > r ^ p > r && e < (h - f) * (r - s) / (p - s) + f && (i = !i)
            }
            return i
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(133), i = e(75);
        n.a = function () {
            return Object(i.a)(r.b).scale(176.423)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            function e(t) {
                var e = t.length, r = 2, i = new Array(e);
                for (i[0] = +t[0].toFixed(n), i[1] = +t[1].toFixed(n); r < e;) i[r] = t[r], ++r;
                return i
            }

            function r(t) {
                return t.map(e)
            }

            function i(t) {
                return t.map(r)
            }

            function o(t) {
                if (null == t) return t;
                var n;
                switch (t.type) {
                    case"GeometryCollection":
                        n = {type: "GeometryCollection", geometries: t.geometries.map(o)};
                        break;
                    case"Point":
                        n = {type: "Point", coordinates: e(t.coordinates)};
                        break;
                    case"MultiPoint":
                    case"LineString":
                        n = {type: t.type, coordinates: r(t.coordinates)};
                        break;
                    case"MultiLineString":
                    case"Polygon":
                        n = {type: t.type, coordinates: i(t.coordinates)};
                        break;
                    case"MultiPolygon":
                        n = {type: "MultiPolygon", coordinates: t.coordinates.map(i)};
                        break;
                    default:
                        return t
                }
                return null != t.bbox && (n.bbox = t.bbox), n
            }

            function u(t) {
                var n = {type: "Feature", properties: t.properties, geometry: o(t.geometry)};
                return null != t.id && (n.id = t.id), null != t.bbox && (n.bbox = t.bbox), n
            }

            if (!(0 <= (n = +n) && n <= 20)) throw new Error("invalid digits");
            if (null != t) switch (t.type) {
                case"Feature":
                    return u(t);
                case"FeatureCollection":
                    var a = {type: "FeatureCollection", features: t.features.map(u)};
                    return null != t.bbox && (a.bbox = t.bbox), a;
                default:
                    return o(t)
            }
            return t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(n, r) {
                var o = e ? Object(i.F)(n * e / 2) / e : n / 2;
                if (!r) return [2 * o, -t];
                var u = 2 * Object(i.f)(o * Object(i.y)(r)), a = 1 / Object(i.F)(r);
                return [Object(i.y)(u) * a, r + (1 - Object(i.h)(u)) * a - t]
            }

            var e = Object(i.y)(t);
            return n.invert = function (n, r) {
                if (Object(i.a)(r += t) < i.k) return [e ? 2 * Object(i.f)(e * n / 2) / e : n, 0];
                var o, u = n * n + r * r, a = 0, c = 10;
                do {
                    var f = Object(i.F)(a), s = 1 / Object(i.h)(a), l = u - 2 * r * a + a * a;
                    a -= o = (f * l + 2 * (a - r)) / (2 + l * s * s + 2 * (a - r) * f)
                } while (Object(i.a)(o) > i.k && --c > 0);
                var h = n * (f = Object(i.F)(a)),
                    p = Object(i.F)(Object(i.a)(r) < Object(i.a)(a + 1 / f) ? .5 * Object(i.e)(h) : .5 * Object(i.b)(h) + i.s / 4) / Object(i.y)(a);
                return [e ? 2 * Object(i.f)(e * p) / e : 2 * p, a]
            }, n
        }

        n.b = r;
        var i = e(1), o = e(31);
        n.a = function () {
            return Object(o.a)(r).scale(131.215)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e, r = Object(o.r)(18, 36 * Object(o.a)(n) / o.s), i = Object(o.n)(r), a = r - i, c = (e = u[i])[0],
                f = e[1], s = (e = u[++i])[0], l = e[1], h = (e = u[Object(o.r)(19, ++i)])[0], p = e[1];
            return [t * (s + a * (h - c) / 2 + a * a * (h - 2 * s + c) / 2), (n > 0 ? o.o : -o.o) * (l + a * (p - f) / 2 + a * a * (p - 2 * l + f) / 2)]
        }

        n.b = r;
        var i = e(0), o = e(1),
            u = [[.9986, -.062], [1, 0], [.9986, .062], [.9954, .124], [.99, .186], [.9822, .248], [.973, .31], [.96, .372], [.9427, .434], [.9216, .4958], [.8962, .5571], [.8679, .6176], [.835, .6769], [.7986, .7346], [.7597, .7903], [.7186, .8435], [.6732, .8936], [.6213, .9394], [.5722, .9761], [.5322, 1]];
        u.forEach(function (t) {
            t[1] *= 1.0144
        }), r.invert = function (t, n) {
            var e = n / o.o, r = 90 * e, i = Object(o.r)(18, Object(o.a)(r / 5)), a = Object(o.q)(0, Object(o.n)(i));
            do {
                var c = u[a][1], f = u[a + 1][1], s = u[Object(o.r)(19, a + 2)][1], l = s - c, h = s - 2 * f + c,
                    p = 2 * (Object(o.a)(e) - f) / l, v = h / l, d = p * (1 - v * p * (1 - 2 * v * p));
                if (d >= 0 || 1 === a) {
                    r = (n >= 0 ? 5 : -5) * (d + i);
                    var g, b = 50;
                    do {
                        d = (i = Object(o.r)(18, Object(o.a)(r) / 5)) - (a = Object(o.n)(i)), c = u[a][1], f = u[a + 1][1], s = u[Object(o.r)(19, a + 2)][1], r -= (g = (n >= 0 ? o.o : -o.o) * (f + d * (s - c) / 2 + d * d * (s - 2 * f + c) / 2) - n) * o.j
                    } while (Object(o.a)(g) > o.l && --b > 0);
                    break
                }
            } while (--a >= 0);
            var y = u[a][0], j = u[a + 1][0], O = u[Object(o.r)(19, a + 2)][0];
            return [t / (j + d * (O - y) / 2 + d * d * (O - 2 * j + y) / 2), r * o.v]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(152.63)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            function e(n, e) {
                var o = r(n, e), a = o[1], c = a * u / (t - 1) + i;
                return [o[0] * i / c, a / c]
            }

            var r = function (t) {
                function n(n, e) {
                    var r = Object(o.h)(e), i = (t - 1) / (t - r * Object(o.h)(n));
                    return [i * r * Object(o.y)(n), i * Object(o.y)(e)]
                }

                return n.invert = function (n, e) {
                    var r = n * n + e * e, i = Object(o.B)(r),
                        u = (t - Object(o.B)(1 - r * (t + 1) / (t - 1))) / ((t - 1) / i + i / (t - 1));
                    return [Object(o.g)(n * u, i * Object(o.B)(1 - u * u)), i ? Object(o.e)(e * u / i) : 0]
                }, n
            }(t);
            if (!n) return r;
            var i = Object(o.h)(n), u = Object(o.y)(n);
            return e.invert = function (n, e) {
                var o = (t - 1) / (t - 1 - e * u);
                return r.invert(o * n, o * e * i)
            }, e
        }

        n.b = r;
        var i = e(0), o = e(1);
        n.a = function () {
            var t = 2, n = 0, e = Object(i.geoProjectionMutator)(r), u = e(t, n);
            return u.distance = function (r) {
                return arguments.length ? e(t = +r, n) : t
            }, u.tilt = function (r) {
                return arguments.length ? e(t, n = r * o.v) : n * o.j
            }, u.scale(432.147).clipAngle(Object(o.b)(1 / t) * o.j - 1e-6)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t.length > 0
        }

        function i(t) {
            return t === g || t === y ? [0, t] : [h, function (t) {
                return Math.floor(t * l) / l
            }(t)]
        }

        function o(t) {
            var n = t[0], e = t[1], r = !1;
            return n <= p ? (n = h, r = !0) : n >= d && (n = v, r = !0), e <= b ? (e = g, r = !0) : e >= j && (e = y, r = !0), r ? [n, e] : t
        }

        function u(t) {
            return t.map(o)
        }

        function a(t, n, e) {
            for (var r = 0, u = t.length; r < u; ++r) {
                var a = t[r].slice();
                e.push({index: -1, polygon: n, ring: a});
                for (var c = 0, f = a.length; c < f; ++c) {
                    var s = a[c], l = s[0], h = s[1];
                    if (l <= p || l >= d || h <= b || h >= j) {
                        a[c] = o(s);
                        for (var v = c + 1; v < f; ++v) {
                            var g = a[v], y = g[0], O = g[1];
                            if (y > p && y < d && O > b && O < j) break
                        }
                        if (v === c + 1) continue;
                        if (c) {
                            var _ = {index: -1, polygon: n, ring: a.slice(0, c + 1)};
                            _.ring[_.ring.length - 1] = i(h), e[e.length - 1] = _
                        } else e.pop();
                        if (v >= f) break;
                        e.push({
                            index: -1,
                            polygon: n,
                            ring: a = a.slice(v - 1)
                        }), a[0] = i(a[0][1]), c = -1, f = a.length
                    }
                }
            }
        }

        function c(t) {
            var n, e, r, i, o, u, a = t.length, c = {}, f = {};
            for (n = 0; n < a; ++n) r = (e = t[n]).ring[0], o = e.ring[e.ring.length - 1], r[0] !== o[0] || r[1] !== o[1] ? (e.index = n, c[r] = f[o] = e) : (e.polygon.push(e.ring), t[n] = null);
            for (n = 0; n < a; ++n) if (e = t[n]) {
                if (r = e.ring[0], o = e.ring[e.ring.length - 1], i = f[r], u = c[o], delete c[r], delete f[o], r[0] === o[0] && r[1] === o[1]) {
                    e.polygon.push(e.ring);
                    continue
                }
                i ? (delete f[r], delete c[i.ring[0]], i.ring.pop(), t[i.index] = null, e = {
                    index: -1,
                    polygon: i.polygon,
                    ring: i.ring.concat(e.ring)
                }, i === u ? e.polygon.push(e.ring) : (e.index = a++, t.push(c[e.ring[0]] = f[e.ring[e.ring.length - 1]] = e))) : u ? (delete c[o], delete f[u.ring[u.ring.length - 1]], e.ring.pop(), e = {
                    index: a++,
                    polygon: u.polygon,
                    ring: e.ring.concat(u.ring)
                }, t[u.index] = null, t.push(c[e.ring[0]] = f[e.ring[e.ring.length - 1]] = e)) : (e.ring.push(e.ring[0]), e.polygon.push(e.ring))
            }
        }

        function f(t) {
            var n = {type: "Feature", geometry: s(t.geometry)};
            return null != t.id && (n.id = t.id), null != t.bbox && (n.bbox = t.bbox), null != t.properties && (n.properties = t.properties), n
        }

        function s(t) {
            if (null == t) return t;
            var n, e, i, f;
            switch (t.type) {
                case"GeometryCollection":
                    n = {type: "GeometryCollection", geometries: t.geometries.map(s)};
                    break;
                case"Point":
                    n = {type: "Point", coordinates: o(t.coordinates)};
                    break;
                case"MultiPoint":
                case"LineString":
                    n = {type: t.type, coordinates: u(t.coordinates)};
                    break;
                case"MultiLineString":
                    n = {type: "MultiLineString", coordinates: t.coordinates.map(u)};
                    break;
                case"Polygon":
                    var l = [];
                    a(t.coordinates, l, e = []), c(e), n = {type: "Polygon", coordinates: l};
                    break;
                case"MultiPolygon":
                    e = [], i = -1, f = t.coordinates.length;
                    for (var h = new Array(f); ++i < f;) a(t.coordinates[i], h[i] = [], e);
                    c(e), n = {type: "MultiPolygon", coordinates: h.filter(r)};
                    break;
                default:
                    return t
            }
            return null != t.bbox && (n.bbox = t.bbox), n
        }

        var l = 1e4, h = -180, p = h + 1e-4, v = 180, d = v - 1e-4, g = -90, b = g + 1e-4, y = 90, j = y - 1e-4;
        n.a = function (t) {
            if (null == t) return t;
            switch (t.type) {
                case"Feature":
                    return f(t);
                case"FeatureCollection":
                    var n = {type: "FeatureCollection", features: t.features.map(f)};
                    return null != t.bbox && (n.bbox = t.bbox), n;
                default:
                    return s(t)
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.F)(n / 2), r = Object(o.y)(o.u * e);
            return [t * (.74482 - .34588 * r * r), 1.70711 * e]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = n / 1.70711, r = Object(o.y)(o.u * e);
            return [t / (.74482 - .34588 * r * r), 2 * Object(o.f)(e)]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(146.153)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(t, n) {
                var r = Object(o.geoGnomonicRaw)(t, n);
                return r[0] *= e, r
            }

            var e = Object(u.h)(t);
            return n.invert = function (t, n) {
                return o.geoGnomonicRaw.invert(t / e, n)
            }, n
        }

        function i(t, n) {
            return Object(a.a)(r, t, n)
        }

        n.b = r, n.c = function () {
            return i([-158, 21.5], [-77, 39]).clipAngle(60).scale(400)
        }, n.a = i;
        var o = e(0), u = e(1), a = e(138)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(n, o) {
                var a = Object(u.b)(Object(u.h)(o) * Object(u.h)(n - e)),
                    c = Object(u.b)(Object(u.h)(o) * Object(u.h)(n - r));
                return a *= a, c *= c, [(a - c) / (2 * t), (o < 0 ? -1 : 1) * Object(u.B)(4 * i * c - (i - a + c) * (i - a + c)) / (2 * t)]
            }

            if (!(t *= 2)) return o.geoAzimuthalEquidistantRaw;
            var e = -t / 2, r = -e, i = t * t, a = Object(u.F)(r), c = .5 / Object(u.y)(r);
            return n.invert = function (t, n) {
                var i, o, f = n * n, s = Object(u.h)(Object(u.B)(f + (i = t + e) * i)),
                    l = Object(u.h)(Object(u.B)(f + (i = t + r) * i));
                return [Object(u.g)(o = s - l, i = (s + l) * a), (n < 0 ? -1 : 1) * Object(u.b)(Object(u.B)(i * i + o * o) * c)]
            }, n
        }

        function i(t, n) {
            return Object(a.a)(r, t, n)
        }

        n.b = r, n.c = function () {
            return i([-158, 21.5], [-77, 39]).clipAngle(130).scale(122.571)
        }, n.a = i;
        var o = e(0), u = e(1), a = e(138)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            if (Object(o.a)(n) < o.k) return [t, 0];
            var e = Object(o.a)(n / o.o), r = Object(o.e)(e);
            if (Object(o.a)(t) < o.k || Object(o.a)(Object(o.a)(n) - o.o) < o.k) return [0, Object(o.x)(n) * o.s * Object(o.F)(r / 2)];
            var i = Object(o.h)(r), u = Object(o.a)(o.s / t - t / o.s) / 2, a = u * u, c = i / (e + i - 1),
                f = c * (2 / e - 1), s = f * f, l = s + a, h = c - s, p = a + c;
            return [Object(o.x)(t) * o.s * (u * h + Object(o.B)(a * h * h - l * (c * c - s))) / l, Object(o.x)(n) * o.s * (f * p - u * Object(o.B)((a + 1) * l - p * p)) / l]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            if (Object(o.a)(n) < o.k) return [t, 0];
            if (Object(o.a)(t) < o.k) return [0, o.o * Object(o.y)(2 * Object(o.f)(n / o.s))];
            var e = (t /= o.s) * t, r = (n /= o.s) * n, i = e + r, u = i * i, a = -Object(o.a)(n) * (1 + i),
                c = a - 2 * r + e, f = -2 * a + 1 + 2 * r + u,
                s = r / f + (2 * c * c * c / (f * f * f) - 9 * a * c / (f * f)) / 27, l = (a - c * c / (3 * f)) / f,
                h = 2 * Object(o.B)(-l / 3), p = Object(o.b)(3 * s / (l * h)) / 3;
            return [o.s * (i - 1 + Object(o.B)(1 + 2 * (e - r) + u)) / (2 * t), Object(o.x)(n) * o.s * (-h * Object(o.h)(p + o.s / 3) - c / (3 * f))]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(79.4183)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            if (Object(o.a)(n) < o.k) return [t, 0];
            var e = Object(o.a)(n / o.o), r = Object(o.e)(e);
            if (Object(o.a)(t) < o.k || Object(o.a)(Object(o.a)(n) - o.o) < o.k) return [0, Object(o.x)(n) * o.s * Object(o.F)(r / 2)];
            var i = Object(o.h)(r), u = Object(o.a)(o.s / t - t / o.s) / 2, a = u * u,
                c = i * (Object(o.B)(1 + a) - u * i) / (1 + a * e * e);
            return [Object(o.x)(t) * o.s * c, Object(o.x)(n) * o.s * Object(o.B)(1 - c * (2 * u + c))]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            if (!t) return [0, o.o * Object(o.y)(2 * Object(o.f)(n / o.s))];
            var e = Object(o.a)(t / o.s), r = (1 - e * e - (n /= o.s) * n) / (2 * e), i = r * r, u = Object(o.B)(i + 1);
            return [Object(o.x)(t) * o.s * (u - r), Object(o.x)(n) * o.o * Object(o.y)(2 * Object(o.g)(Object(o.B)((1 - 2 * r * e) * (r + u) - e), Object(o.B)(u + r + e)))]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(79.4183)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            if (Object(o.a)(n) < o.k) return [t, 0];
            var e = n / o.o, r = Object(o.e)(e);
            if (Object(o.a)(t) < o.k || Object(o.a)(Object(o.a)(n) - o.o) < o.k) return [0, o.s * Object(o.F)(r / 2)];
            var i = (o.s / t - t / o.s) / 2, u = e / (1 + Object(o.h)(r));
            return [o.s * (Object(o.x)(t) * Object(o.B)(i * i + 1 - u * u) - i), o.s * u]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            if (!n) return [t, 0];
            var e = n / o.s, r = (o.s * o.s * (1 - e * e) - t * t) / (2 * o.s * t);
            return [t ? o.s * (Object(o.x)(t) * Object(o.B)(r * r + 1) - r) : 0, o.o * Object(o.y)(2 * Object(o.f)(e))]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(79.4183)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            if (!n) return [t, 0];
            var e = Object(o.a)(n);
            if (!t || e === o.o) return [0, n];
            var r = e / o.o, i = r * r, u = (8 * r - i * (i + 2) - 5) / (2 * i * (r - 1)), a = u * u, c = r * u,
                f = i + a + 2 * c, s = r + 3 * u, l = t / o.o, h = l + 1 / l,
                p = Object(o.x)(Object(o.a)(t) - o.o) * Object(o.B)(h * h - 4), v = p * p,
                d = f * (i + a * v - 1) + (1 - i) * (i * (s * s + 4 * a) + 12 * c * a + 4 * a * a),
                g = (p * (f + a - 1) + 2 * Object(o.B)(d)) / (4 * f + v);
            return [Object(o.x)(t) * o.o * g, Object(o.x)(n) * o.o * Object(o.B)(1 + p * Object(o.a)(g) - g * g)]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e;
            if (!t || !n) return [t, n];
            n /= o.s;
            var r = Object(o.x)(t) * t / o.o, i = (r * r - 1 + 4 * n * n) / Object(o.a)(r), u = i * i, a = 2 * n,
                c = 50;
            do {
                var f = a * a, s = (8 * a - f * (f + 2) - 5) / (2 * f * (a - 1)),
                    l = (3 * a - f * a - 10) / (2 * f * a), h = s * s, p = a * s, v = a + s, d = v * v, g = a + 3 * s,
                    b = d * (f + h * u - 1) + (1 - f) * (f * (g * g + 4 * h) + h * (12 * p + 4 * h)),
                    y = -2 * v * (4 * p * h + (1 - 4 * f + 3 * f * f) * (1 + l) + h * (14 * f - 6 - u + (8 * f - 8 - 2 * u) * l) + p * (12 * f - 8 + (10 * f - 10 - u) * l)),
                    j = Object(o.B)(b);
                a -= e = (i * (d + h - 1) + 2 * j - r * (4 * d + u)) / (i * (2 * s * l + 2 * v * (1 + l)) + y / j - 8 * v * (i * (-1 + h + d) + 2 * j) * (1 + l) / (u + 4 * d))
            } while (e > o.k && --c > 0);
            return [Object(o.x)(t) * (Object(o.B)(i * i + 4) + i) * o.s / 4, o.o * a]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(127.16)
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return c
        });
        var r = e(0), i = e(1), o = e(21), u = 4 * i.s + 3 * Object(i.B)(3),
            a = 2 * Object(i.B)(2 * i.s * Object(i.B)(3) / u), c = Object(o.b)(a * Object(i.B)(3) / i.s, a, u / 6);
        n.a = function () {
            return Object(r.geoProjection)(c).scale(176.84)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t * Object(o.B)(1 - 3 * n * n / (o.s * o.s)), n]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            return [t / Object(o.B)(1 - 3 * n * n / (o.s * o.s)), n]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(152.63)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = .90631 * Object(o.y)(n), r = Object(o.B)(1 - e * e),
                i = Object(o.B)(2 / (1 + r * Object(o.h)(t /= 3)));
            return [2.66723 * r * i * Object(o.y)(t), 1.24104 * e * i]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = t / 2.66723, r = n / 1.24104, i = Object(o.B)(e * e + r * r), u = 2 * Object(o.e)(i / 2);
            return [3 * Object(o.g)(t * Object(o.F)(u), 2.66723 * i), i && Object(o.e)(n * Object(o.y)(u) / (1.24104 * .90631 * i))]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(172.632)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.h)(n), r = Object(o.h)(t) * e, i = 1 - r,
                u = Object(o.h)(t = Object(o.g)(Object(o.y)(t) * e, -Object(o.y)(n))), a = Object(o.y)(t);
            return e = Object(o.B)(1 - r * r), [a * e - u * i, -u * e - a * i]
        }

        n.b = r;
        var i = e(0), o = e(1);
        r.invert = function (t, n) {
            var e = (t * t + n * n) / -2, r = Object(o.B)(-e * (2 + e)), i = n * e + t * r, u = t * e - n * r,
                a = Object(o.B)(u * u + i * i);
            return [Object(o.g)(r * i, a * (1 + e)), a ? -Object(o.e)(r * u / a) : 0]
        }, n.a = function () {
            return Object(i.geoProjection)(r).rotate([0, -90, 45]).scale(124.75).clipAngle(179.999)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(o.a)(t, n);
            return [(e[0] + t / u.o) / 2, (e[1] + n) / 2]
        }

        n.b = r;
        var i = e(0), o = e(129), u = e(1);
        r.invert = function (t, n) {
            var e = t, r = n, i = 25;
            do {
                var o, a = Object(u.h)(r), c = Object(u.y)(r), f = Object(u.y)(2 * r), s = c * c, l = a * a,
                    h = Object(u.y)(e), p = Object(u.h)(e / 2), v = Object(u.y)(e / 2), d = v * v, g = 1 - l * p * p,
                    b = g ? Object(u.b)(a * p) * Object(u.B)(o = 1 / g) : o = 0, y = .5 * (2 * b * a * v + e / u.o) - t,
                    j = .5 * (b * c + r) - n, O = .5 * o * (l * d + b * a * p * s) + .5 / u.o,
                    _ = o * (h * f / 4 - b * c * v), m = .125 * o * (f * v - b * c * l * h),
                    w = .5 * o * (s * p + b * d * a) + .5, x = _ * m - w * O, E = (j * _ - y * w) / x,
                    M = (y * m - j * O) / x;
                e -= E, r -= M
            } while ((Object(u.a)(E) > u.k || Object(u.a)(M) > u.k) && --i > 0);
            return [e, r]
        }, n.a = function () {
            return Object(i.geoProjection)(r).scale(158.837)
        }
    }, function (t, n, e) {
        var r = e(11), i = e(54), o = e(140);
        t.exports = function (t, n) {
            var e = void 0;
            if (r(n) && (e = n), i(n) && (e = function (t) {
                    return o(t, n)
                }), e) for (var u = 0; u < t.length; u += 1) if (e(t[u])) return t[u];
            return null
        }
    }, function (t, n) {
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        t.exports = function (t) {
            return "object" === (void 0 === t ? "undefined" : e(t)) && null !== t
        }
    }, function (t, n, e) {
        !function (t, r) {
            r(n, e(323), e(33))
        }(0, function (t, n, e) {
            "use strict";

            function r() {
            }

            function i(t, e, r) {
                var i = e[1][0] - e[0][0], o = e[1][1] - e[0][1], u = t.clipExtent && t.clipExtent();
                t.scale(150).translate([0, 0]), null != u && t.clipExtent(null), n.geoStream(r, t.stream(l));
                var a = l.result(), c = Math.min(i / (a[1][0] - a[0][0]), o / (a[1][1] - a[0][1])),
                    f = +e[0][0] + (i - c * (a[1][0] + a[0][0])) / 2, s = +e[0][1] + (o - c * (a[1][1] + a[0][1])) / 2;
                return null != u && t.clipExtent(u), t.scale(150 * c).translate([f, s])
            }

            function o(t, n, e) {
                return i(t, [[0, 0], n], e)
            }

            var u = 1e-6, a = 1 / 0, c = a, f = -a, s = f, l = {
                point: function (t, n) {
                    t < a && (a = t), t > f && (f = t), n < c && (c = n), n > s && (s = n)
                }, lineStart: r, lineEnd: r, polygonStart: r, polygonEnd: r, result: function () {
                    var t = [[a, c], [f, s]];
                    return f = s = -(c = a = 1 / 0), t
                }
            };
            t.geoAlbersUsa = function () {
                function t(t) {
                    var n = t[0], e = t[1];
                    return h = null, f.point(n, e), h || (s.point(n, e), h) || (l.point(n, e), h)
                }

                function r() {
                    return a = c = null, t
                }

                var a, c, f, s, l, h, p = n.geoAlbers(),
                    v = n.geoConicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    d = n.geoConicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), g = {
                        point: function (t, n) {
                            h = [t, n]
                        }
                    };
                return t.invert = function (t) {
                    var n = p.scale(), e = p.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                    return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? v : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? d : p).invert(t)
                }, t.stream = function (t) {
                    return a && c === t ? a : a = function (t) {
                        var n = t.length;
                        return {
                            point: function (e, r) {
                                for (var i = -1; ++i < n;) t[i].point(e, r)
                            }, sphere: function () {
                                for (var e = -1; ++e < n;) t[e].sphere()
                            }, lineStart: function () {
                                for (var e = -1; ++e < n;) t[e].lineStart()
                            }, lineEnd: function () {
                                for (var e = -1; ++e < n;) t[e].lineEnd()
                            }, polygonStart: function () {
                                for (var e = -1; ++e < n;) t[e].polygonStart()
                            }, polygonEnd: function () {
                                for (var e = -1; ++e < n;) t[e].polygonEnd()
                            }
                        }
                    }([p.stream(c = t), v.stream(t), d.stream(t)])
                }, t.precision = function (t) {
                    return arguments.length ? (p.precision(t), v.precision(t), d.precision(t), r()) : p.precision()
                }, t.scale = function (n) {
                    return arguments.length ? (p.scale(n), v.scale(.35 * n), d.scale(n), t.translate(p.translate())) : p.scale()
                }, t.translate = function (t) {
                    if (!arguments.length) return p.translate();
                    var n = p.scale(), e = +t[0], i = +t[1];
                    return f = p.translate(t).clipExtent([[e - .455 * n, i - .238 * n], [e + .455 * n, i + .238 * n]]).stream(g), s = v.translate([e - .307 * n, i + .201 * n]).clipExtent([[e - .425 * n + u, i + .12 * n + u], [e - .214 * n - u, i + .234 * n - u]]).stream(g), l = d.translate([e - .205 * n, i + .212 * n]).clipExtent([[e - .214 * n + u, i + .166 * n + u], [e - .115 * n - u, i + .234 * n - u]]).stream(g), r()
                }, t.fitExtent = function (n, e) {
                    return i(t, n, e)
                }, t.fitSize = function (n, e) {
                    return o(t, n, e)
                }, t.drawCompositionBorders = function (t) {
                    var n = p([-102.91, 26.3]), e = p([-104, 27.5]), r = p([-108, 29.1]), i = p([-110, 29.1]),
                        o = p([-110, 26.7]), u = p([-112.8, 27.6]), a = p([-114.3, 30.6]), c = p([-119.3, 30.1]);
                    t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.moveTo(o[0], o[1]), t.lineTo(u[0], u[1]), t.lineTo(a[0], a[1]), t.lineTo(c[0], c[1])
                }, t.getCompositionBorders = function () {
                    var t = e.path();
                    return this.drawCompositionBorders(t), t.toString()
                }, t.scale(1070)
            }, t.geoAlbersUsaTerritories = function () {
                function t(t) {
                    var n = t[0], e = t[1];
                    return d = null, f.point(n, e), d || (s.point(n, e), d) || (l.point(n, e), d) || (h.point(n, e), d) || (p.point(n, e), d) || (v.point(n, e), d)
                }

                function r() {
                    return a = c = null, t
                }

                var a, c, f, s, l, h, p, v, d, g = n.geoAlbers(),
                    b = n.geoConicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    y = n.geoConicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                    j = n.geoConicEqualArea().rotate([66, 0]).center([0, 18]).parallels([8, 18]),
                    O = n.geoEquirectangular().rotate([173, 14]), _ = n.geoEquirectangular().rotate([-145, -16.8]),
                    m = {
                        point: function (t, n) {
                            d = [t, n]
                        }
                    };
                return t.invert = function (t) {
                    var n = g.scale(), e = g.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                    return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? b : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? y : i >= .2064 && i < .2413 && r >= .312 && r < .385 ? j : i >= .09 && i < .1197 && r >= -.4243 && r < -.3232 ? O : i >= -.0518 && i < .0895 && r >= -.4243 && r < -.3824 ? _ : g).invert(t)
                }, t.stream = function (t) {
                    return a && c === t ? a : a = function (t) {
                        var n = t.length;
                        return {
                            point: function (e, r) {
                                for (var i = -1; ++i < n;) t[i].point(e, r)
                            }, sphere: function () {
                                for (var e = -1; ++e < n;) t[e].sphere()
                            }, lineStart: function () {
                                for (var e = -1; ++e < n;) t[e].lineStart()
                            }, lineEnd: function () {
                                for (var e = -1; ++e < n;) t[e].lineEnd()
                            }, polygonStart: function () {
                                for (var e = -1; ++e < n;) t[e].polygonStart()
                            }, polygonEnd: function () {
                                for (var e = -1; ++e < n;) t[e].polygonEnd()
                            }
                        }
                    }([g.stream(c = t), b.stream(t), y.stream(t), j.stream(t), O.stream(t), _.stream(t)])
                }, t.precision = function (t) {
                    return arguments.length ? (g.precision(t), b.precision(t), y.precision(t), j.precision(t), O.precision(t), _.precision(t), r()) : g.precision()
                }, t.scale = function (n) {
                    return arguments.length ? (g.scale(n), b.scale(.35 * n), y.scale(n), j.scale(n), O.scale(2 * n), _.scale(n), t.translate(g.translate())) : g.scale()
                }, t.translate = function (t) {
                    if (!arguments.length) return g.translate();
                    var n = g.scale(), e = +t[0], i = +t[1];
                    return f = g.translate(t).clipExtent([[e - .455 * n, i - .238 * n], [e + .455 * n, i + .238 * n]]).stream(m), s = b.translate([e - .307 * n, i + .201 * n]).clipExtent([[e - .425 * n + u, i + .12 * n + u], [e - .214 * n - u, i + .233 * n - u]]).stream(m), l = y.translate([e - .205 * n, i + .212 * n]).clipExtent([[e - .214 * n + u, i + .166 * n + u], [e - .115 * n - u, i + .233 * n - u]]).stream(m), h = j.translate([e + .35 * n, i + .224 * n]).clipExtent([[e + .312 * n + u, i + .2064 * n + u], [e + .385 * n - u, i + .233 * n - u]]).stream(m), p = O.translate([e - .492 * n, i + .09 * n]).clipExtent([[e - .4243 * n + u, i + .0903 * n + u], [e - .3233 * n - u, i + .1197 * n - u]]).stream(m), v = _.translate([e - .408 * n, i + .018 * n]).clipExtent([[e - .4244 * n + u, i - .0519 * n + u], [e - .3824 * n - u, i + .0895 * n - u]]).stream(m), r()
                }, t.fitExtent = function (n, e) {
                    return i(t, n, e)
                }, t.fitSize = function (n, e) {
                    return o(t, n, e)
                }, t.drawCompositionBorders = function (t) {
                    var n = g([-110.4641, 28.2805]), e = g([-104.0597, 28.9528]), r = g([-103.7049, 25.1031]),
                        i = g([-109.8337, 24.4531]), o = g([-124.4745, 28.1407]), u = g([-110.931, 30.8844]),
                        a = g([-109.8337, 24.4531]), c = g([-122.4628, 21.8562]), f = g([-76.8579, 25.1544]),
                        s = g([-72.429, 24.2097]), l = g([-72.8265, 22.7056]), h = g([-77.1852, 23.6392]),
                        p = g([-125.0093, 29.7791]), v = g([-118.5193, 31.3262]), d = g([-118.064, 29.6912]),
                        b = g([-124.4369, 28.169]), y = g([-128.1314, 37.4582]), j = g([-125.2132, 38.214]),
                        O = g([-122.3616, 30.5115]), _ = g([-125.0315, 29.8211]);
                    t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), t.moveTo(o[0], o[1]), t.lineTo(u[0], u[1]), t.lineTo(a[0], a[1]), t.lineTo(a[0], a[1]), t.lineTo(c[0], c[1]), t.closePath(), t.moveTo(f[0], f[1]), t.lineTo(s[0], s[1]), t.lineTo(l[0], l[1]), t.lineTo(l[0], l[1]), t.lineTo(h[0], h[1]), t.closePath(), t.moveTo(p[0], p[1]), t.lineTo(v[0], v[1]), t.lineTo(d[0], d[1]), t.lineTo(d[0], d[1]), t.lineTo(b[0], b[1]), t.closePath(), t.moveTo(y[0], y[1]), t.lineTo(j[0], j[1]), t.lineTo(O[0], O[1]), t.lineTo(O[0], O[1]), t.lineTo(_[0], _[1]), t.closePath()
                }, t.getCompositionBorders = function () {
                    var t = e.path();
                    return this.drawCompositionBorders(t), t.toString()
                }, t.scale(1070)
            }, t.geoConicConformalSpain = function () {
                function t(t) {
                    var n = t[0], e = t[1];
                    return l = null, f.point(n, e), l || (s.point(n, e), l)
                }

                function r() {
                    return a = c = null, t
                }

                var a, c, f, s, l, h = n.geoConicConformal().rotate([5, -38.6]).parallels([0, 60]),
                    p = n.geoConicConformal().rotate([5, -38.6]).parallels([0, 60]), v = {
                        point: function (t, n) {
                            l = [t, n]
                        }
                    };
                return t.invert = function (t) {
                    var n = h.scale(), e = h.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                    return (i >= .05346 && i < .0897 && r >= -.13388 && r < -.0322 ? p : h).invert(t)
                }, t.stream = function (t) {
                    return a && c === t ? a : a = function (t) {
                        var n = t.length;
                        return {
                            point: function (e, r) {
                                for (var i = -1; ++i < n;) t[i].point(e, r)
                            }, sphere: function () {
                                for (var e = -1; ++e < n;) t[e].sphere()
                            }, lineStart: function () {
                                for (var e = -1; ++e < n;) t[e].lineStart()
                            }, lineEnd: function () {
                                for (var e = -1; ++e < n;) t[e].lineEnd()
                            }, polygonStart: function () {
                                for (var e = -1; ++e < n;) t[e].polygonStart()
                            }, polygonEnd: function () {
                                for (var e = -1; ++e < n;) t[e].polygonEnd()
                            }
                        }
                    }([h.stream(c = t), p.stream(t)])
                }, t.precision = function (t) {
                    return arguments.length ? (h.precision(t), p.precision(t), r()) : h.precision()
                }, t.scale = function (n) {
                    return arguments.length ? (h.scale(n), p.scale(n), t.translate(h.translate())) : h.scale()
                }, t.translate = function (t) {
                    if (!arguments.length) return h.translate();
                    var n = h.scale(), e = +t[0], i = +t[1];
                    return f = h.translate(t).clipExtent([[e - .06857 * n, i - .1288 * n], [e + .13249 * n, i + .06 * n]]).stream(v), s = p.translate([e + .1 * n, i - .094 * n]).clipExtent([[e - .1331 * n + u, i + .053457 * n + u], [e - .0354 * n - u, i + .08969 * n - u]]).stream(v), r()
                }, t.fitExtent = function (n, e) {
                    return i(t, n, e)
                }, t.fitSize = function (n, e) {
                    return o(t, n, e)
                }, t.drawCompositionBorders = function (t) {
                    var n = h([-14.034675, 34.965007]), e = h([-7.4208899, 35.536988]), r = h([-7.3148275, 33.54359]);
                    t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1])
                }, t.getCompositionBorders = function () {
                    var t = e.path();
                    return this.drawCompositionBorders(t), t.toString()
                }, t.scale(2700)
            }, t.geoConicConformalPortugal = function () {
                function t(t) {
                    var n = t[0], e = t[1];
                    return h = null, f.point(n, e), h || (s.point(n, e), h) || (l.point(n, e), h)
                }

                function r() {
                    return a = c = null, t
                }

                var a, c, f, s, l, h, p = n.geoConicConformal().rotate([10, -39.3]).parallels([0, 60]),
                    v = n.geoConicConformal().rotate([17, -32.7]).parallels([0, 60]),
                    d = n.geoConicConformal().rotate([27.8, -38.6]).parallels([0, 60]), g = {
                        point: function (t, n) {
                            h = [t, n]
                        }
                    };
                return t.invert = function (t) {
                    var n = p.scale(), e = p.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                    return (i >= .0093 && i < .03678 && r >= -.03875 && r < -.0116 ? v : i >= -.0412 && i < .0091 && r >= -.07782 && r < -.01166 ? d : p).invert(t)
                }, t.stream = function (t) {
                    return a && c === t ? a : a = function (t) {
                        var n = t.length;
                        return {
                            point: function (e, r) {
                                for (var i = -1; ++i < n;) t[i].point(e, r)
                            }, sphere: function () {
                                for (var e = -1; ++e < n;) t[e].sphere()
                            }, lineStart: function () {
                                for (var e = -1; ++e < n;) t[e].lineStart()
                            }, lineEnd: function () {
                                for (var e = -1; ++e < n;) t[e].lineEnd()
                            }, polygonStart: function () {
                                for (var e = -1; ++e < n;) t[e].polygonStart()
                            }, polygonEnd: function () {
                                for (var e = -1; ++e < n;) t[e].polygonEnd()
                            }
                        }
                    }([p.stream(c = t), v.stream(t), d.stream(t)])
                }, t.precision = function (t) {
                    return arguments.length ? (p.precision(t), v.precision(t), d.precision(t), r()) : p.precision()
                }, t.scale = function (n) {
                    return arguments.length ? (p.scale(n), v.scale(n), d.scale(.6 * n), t.translate(p.translate())) : p.scale()
                }, t.translate = function (t) {
                    if (!arguments.length) return p.translate();
                    var n = p.scale(), e = +t[0], i = +t[1];
                    return f = p.translate(t).clipExtent([[e - .0115 * n, i - .1138 * n], [e + .2105 * n, i + .0673 * n]]).stream(g), s = v.translate([e - .0265 * n, i + .025 * n]).clipExtent([[e - .0388 * n + u, i + .0093 * n + u], [e - .0116 * n - u, i + .0368 * n - u]]).stream(g), l = d.translate([e - .045 * n, i + -.02 * n]).clipExtent([[e - .0778 * n + u, i - .0413 * n + u], [e - .0117 * n - u, i + .0091 * n - u]]).stream(g), r()
                }, t.fitExtent = function (n, e) {
                    return i(t, n, e)
                }, t.fitSize = function (n, e) {
                    return o(t, n, e)
                }, t.drawCompositionBorders = function (t) {
                    var n = p([-12.8351, 38.7113]), e = p([-10.8482, 38.7633]), r = p([-10.8181, 37.2072]),
                        i = p([-12.7345, 37.1573]), o = p([-16.0753, 41.4436]), u = p([-10.9168, 41.6861]),
                        a = p([-10.8557, 38.7747]), c = p([-15.6728, 38.5505]);
                    t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), t.moveTo(o[0], o[1]), t.lineTo(u[0], u[1]), t.lineTo(a[0], a[1]), t.lineTo(a[0], a[1]), t.lineTo(c[0], c[1]), t.closePath()
                }, t.getCompositionBorders = function () {
                    var t = e.path();
                    return this.drawCompositionBorders(t), t.toString()
                }, t.scale(4200)
            }, t.geoMercatorEcuador = function () {
                function t(t) {
                    var n = t[0], e = t[1];
                    return l = null, f.point(n, e), l || (s.point(n, e), l)
                }

                function r() {
                    return a = c = null, t
                }

                var a, c, f, s, l, h = n.geoMercator().rotate([80, 1.5]), p = n.geoMercator().rotate([90.73, 1]), v = {
                    point: function (t, n) {
                        l = [t, n]
                    }
                };
                return t.invert = function (t) {
                    var n = h.scale(), e = h.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                    return (i >= -.0676 && i < -.026 && r >= -.0857 && r < -.0263 ? p : h).invert(t)
                }, t.stream = function (t) {
                    return a && c === t ? a : a = function (t) {
                        var n = t.length;
                        return {
                            point: function (e, r) {
                                for (var i = -1; ++i < n;) t[i].point(e, r)
                            }, sphere: function () {
                                for (var e = -1; ++e < n;) t[e].sphere()
                            }, lineStart: function () {
                                for (var e = -1; ++e < n;) t[e].lineStart()
                            }, lineEnd: function () {
                                for (var e = -1; ++e < n;) t[e].lineEnd()
                            }, polygonStart: function () {
                                for (var e = -1; ++e < n;) t[e].polygonStart()
                            }, polygonEnd: function () {
                                for (var e = -1; ++e < n;) t[e].polygonEnd()
                            }
                        }
                    }([h.stream(c = t), p.stream(t)])
                }, t.precision = function (t) {
                    return arguments.length ? (h.precision(t), p.precision(t), r()) : h.precision()
                }, t.scale = function (n) {
                    return arguments.length ? (h.scale(n), p.scale(n), t.translate(h.translate())) : h.scale()
                }, t.translate = function (t) {
                    if (!arguments.length) return h.translate();
                    var n = h.scale(), e = +t[0], i = +t[1];
                    return f = h.translate(t).clipExtent([[e - .0262 * n, i - .0734 * n], [e + .1741 * n, i + .079 * n]]).stream(v), s = p.translate([e - .06 * n, i - .04 * n]).clipExtent([[e - .0857 * n + u, i - .0676 * n + u], [e - .0263 * n - u, i - .026 * n - u]]).stream(v), r()
                }, t.fitExtent = function (n, e) {
                    return i(t, n, e)
                }, t.fitSize = function (n, e) {
                    return o(t, n, e)
                }, t.drawCompositionBorders = function (t) {
                    var n = h([-84.9032, 2.3757]), e = h([-81.5047, 2.3708]), r = h([-81.5063, -.01]),
                        i = h([-84.9086, -.005]);
                    t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath()
                }, t.getCompositionBorders = function () {
                    var t = e.path();
                    return this.drawCompositionBorders(t), t.toString()
                }, t.scale(3500)
            }, t.geoTransverseMercatorChile = function () {
                function t(t) {
                    var n = t[0], e = t[1];
                    return p = null, f.point(n, e), p || (s.point(n, e), p) || (l.point(n, e), p) || (h.point(n, e), p)
                }

                function r() {
                    return a = c = null, t
                }

                var a, c, f, s, l, h, p, v = n.geoTransverseMercator().rotate([72, 37]),
                    d = n.geoStereographic().rotate([72, 0]), g = n.geoMercator().rotate([80, 33.5]),
                    b = n.geoMercator().rotate([110, 25]), y = {
                        point: function (t, n) {
                            p = [t, n]
                        }
                    };
                return t.invert = function (t) {
                    var n = v.scale(), e = v.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                    return (i >= .2582 && i < .32 && r >= -.1036 && r < -.087 ? d : i >= -.01298 && i < .0133 && r >= -.11396 && r < -.05944 ? g : i >= .01539 && i < .03911 && r >= -.089 && r < -.0588 ? b : v).invert(t)
                }, t.stream = function (t) {
                    return a && c === t ? a : a = function (t) {
                        var n = t.length;
                        return {
                            point: function (e, r) {
                                for (var i = -1; ++i < n;) t[i].point(e, r)
                            }, sphere: function () {
                                for (var e = -1; ++e < n;) t[e].sphere()
                            }, lineStart: function () {
                                for (var e = -1; ++e < n;) t[e].lineStart()
                            }, lineEnd: function () {
                                for (var e = -1; ++e < n;) t[e].lineEnd()
                            }, polygonStart: function () {
                                for (var e = -1; ++e < n;) t[e].polygonStart()
                            }, polygonEnd: function () {
                                for (var e = -1; ++e < n;) t[e].polygonEnd()
                            }
                        }
                    }([v.stream(c = t), d.stream(t), g.stream(t), b.stream(t)])
                }, t.precision = function (t) {
                    return arguments.length ? (v.precision(t), d.precision(t), g.precision(t), b.precision(t), r()) : v.precision()
                }, t.scale = function (n) {
                    return arguments.length ? (v.scale(n), d.scale(.15 * n), g.scale(1.5 * n), b.scale(1.5 * n), t.translate(v.translate())) : v.scale()
                }, t.translate = function (t) {
                    if (!arguments.length) return v.translate();
                    var n = v.scale(), e = +t[0], i = +t[1];
                    return f = v.translate(t).clipExtent([[e - .059 * n, i - .3835 * n], [e + .4498 * n, i + .3375 * n]]).stream(y), s = d.translate([e - .087 * n, i + .17 * n]).clipExtent([[e - .1166 * n + u, i + .2582 * n + u], [e - .06 * n - u, i + .32 * n - u]]).stream(y), l = g.translate([e - .092 * n, i - 0 * n]).clipExtent([[e - .114 * n + u, i - .013 * n + u], [e - .0594 * n - u, i + .0133 * n - u]]).stream(y), h = b.translate([e - .089 * n, i - .0265 * n]).clipExtent([[e - .089 * n + u, i + .0154 * n + u], [e - .0588 * n - u, i + .0391 * n - u]]).stream(y), r()
                }, t.fitExtent = function (n, e) {
                    return i(t, n, e)
                }, t.fitSize = function (n, e) {
                    return o(t, n, e)
                }, t.drawCompositionBorders = function (t) {
                    var n = v([-82.6999, -51.3043]), e = v([-77.5442, -51.6631]), r = v([-78.0254, -55.186]),
                        i = v([-83.6106, -54.7785]), o = v([-80.0638, -35.984]), u = v([-76.2153, -36.1811]),
                        a = v([-76.2994, -37.6839]), c = v([-80.2231, -37.4757]), f = v([-78.442, -37.706]),
                        s = v([-76.263, -37.8054]), l = v([-76.344, -39.1595]), h = v([-78.5638, -39.0559]);
                    t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), t.moveTo(o[0], o[1]), t.lineTo(u[0], u[1]), t.lineTo(a[0], a[1]), t.lineTo(a[0], a[1]), t.lineTo(c[0], c[1]), t.closePath(), t.moveTo(f[0], f[1]), t.lineTo(s[0], s[1]), t.lineTo(l[0], l[1]), t.lineTo(l[0], l[1]), t.lineTo(h[0], h[1]), t.closePath()
                }, t.getCompositionBorders = function () {
                    var t = e.path();
                    return this.drawCompositionBorders(t), t.toString()
                }, t.scale(700)
            }, t.geoConicEquidistantJapan = function () {
                function t(t) {
                    var n = t[0], e = t[1];
                    return h = null, f.point(n, e), h || (s.point(n, e), h) || (l.point(n, e), h)
                }

                function r() {
                    return a = c = null, t
                }

                var a, c, f, s, l, h, p = n.geoConicEquidistant().rotate([-136, -22]).parallels([40, 34]),
                    v = n.geoConicEquidistant().rotate([-146, -26]).parallels([40, 34]),
                    d = n.geoConicEquidistant().rotate([-126, -19]).parallels([40, 34]), g = {
                        point: function (t, n) {
                            h = [t, n]
                        }
                    };
                return t.invert = function (t) {
                    var n = p.scale(), e = p.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                    return (i >= -.10925 && i < -.02701 && r >= -.135 && r < -.0397 ? v : i >= .04713 && i < .11138 && r >= -.03986 && r < .051 ? d : p).invert(t)
                }, t.stream = function (t) {
                    return a && c === t ? a : a = function (t) {
                        var n = t.length;
                        return {
                            point: function (e, r) {
                                for (var i = -1; ++i < n;) t[i].point(e, r)
                            }, sphere: function () {
                                for (var e = -1; ++e < n;) t[e].sphere()
                            }, lineStart: function () {
                                for (var e = -1; ++e < n;) t[e].lineStart()
                            }, lineEnd: function () {
                                for (var e = -1; ++e < n;) t[e].lineEnd()
                            }, polygonStart: function () {
                                for (var e = -1; ++e < n;) t[e].polygonStart()
                            }, polygonEnd: function () {
                                for (var e = -1; ++e < n;) t[e].polygonEnd()
                            }
                        }
                    }([p.stream(c = t), v.stream(t), d.stream(t)])
                }, t.precision = function (t) {
                    return arguments.length ? (p.precision(t), v.precision(t), d.precision(t), r()) : p.precision()
                }, t.scale = function (n) {
                    return arguments.length ? (p.scale(n), v.scale(n), d.scale(.7 * n), t.translate(p.translate())) : p.scale()
                }, t.translate = function (t) {
                    if (!arguments.length) return p.translate();
                    var n = p.scale(), e = +t[0], i = +t[1];
                    return f = p.translate(t).clipExtent([[e - .1352 * n, i - .1091 * n], [e + .117 * n, i + .098 * n]]).stream(g), s = v.translate([e - .0425 * n, i - .005 * n]).clipExtent([[e - .135 * n + u, i - .1093 * n + u], [e - .0397 * n - u, i - .027 * n - u]]).stream(g), l = d.translate(t).clipExtent([[e - .0399 * n + u, i + .0471 * n + u], [e + .051 * n - u, i + .1114 * n - u]]).stream(g), r()
                }, t.fitExtent = function (n, e) {
                    return i(t, n, e)
                }, t.fitSize = function (n, e) {
                    return o(t, n, e)
                }, t.drawCompositionBorders = function (t) {
                    var n = p([126.01320483689143, 41.621090310215585]), e = p([133.04304387025903, 42.15087523707186]),
                        r = p([133.3021766080688, 37.43975444725098]), i = p([126.87889168628224, 36.95488945159779]),
                        o = p([132.9, 29.8]), u = p([134, 33]), a = p([139.3, 33.2]), c = p([139.16, 30.5]);
                    t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), t.moveTo(o[0], o[1]), t.lineTo(u[0], u[1]), t.lineTo(a[0], a[1]), t.lineTo(c[0], c[1])
                }, t.getCompositionBorders = function () {
                    var t = e.path();
                    return this.drawCompositionBorders(t), t.toString()
                }, t.scale(2200)
            }, t.geoConicConformalFrance = function () {
                function t(t) {
                    var n = t[0], e = t[1];
                    return _ = null, f.point(n, e), _ || (s.point(n, e), _) || (l.point(n, e), _) || (h.point(n, e), _) || (p.point(n, e), _) || (v.point(n, e), _) || (d.point(n, e), _) || (g.point(n, e), _) || (b.point(n, e), _) || (y.point(n, e), _) || (j.point(n, e), _) || (O.point(n, e), _)
                }

                function r() {
                    return a = c = null, t
                }

                var a, c, f, s, l, h, p, v, d, g, b, y, j, O, _,
                    m = n.geoConicConformal().rotate([-3, -46.2]).parallels([0, 60]),
                    w = n.geoMercator().center([-53.2, 3.9]), x = n.geoMercator().center([-61.03, 14.67]),
                    E = n.geoMercator().center([-61.46, 16.14]), M = n.geoMercator().center([-62.85, 17.92]),
                    T = n.geoMercator().center([-56.23, 46.93]), S = n.geoMercator().center([45.16, -12.8]),
                    k = n.geoMercator().center([55.52, -21.13]), C = n.geoMercator().center([165.8, -21.07]),
                    P = n.geoMercator().center([-178.1, -14.3]), N = n.geoMercator().center([-150.55, -17.11]),
                    R = n.geoMercator().center([-150.55, -17.11]), B = {
                        point: function (t, n) {
                            _ = [t, n]
                        }
                    };
                return t.invert = function (t) {
                    var n = m.scale(), e = m.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                    return (i >= .029 && i < .0864 && r >= -.14 && r < -.0996 ? w : i >= 0 && i < .029 && r >= -.14 && r < -.0996 ? x : i >= -.032 && i < 0 && r >= -.14 && r < -.0996 ? E : i >= -.052 && i < -.032 && r >= -.14 && r < -.0996 ? M : i >= -.076 && i < .052 && r >= -.14 && r < -.0996 ? T : i >= -.076 && i < -.052 && r >= .0967 && r < .1371 ? S : i >= -.052 && i < -.02 && r >= .0967 && r < .1371 ? k : i >= -.02 && i < .012 && r >= .0967 && r < .1371 ? C : i >= .012 && i < .033 && r >= .0967 && r < .1371 ? P : i >= .033 && i < .0864 && r >= .0967 && r < .1371 ? N : m).invert(t)
                }, t.stream = function (t) {
                    return a && c === t ? a : a = function (t) {
                        var n = t.length;
                        return {
                            point: function (e, r) {
                                for (var i = -1; ++i < n;) t[i].point(e, r)
                            }, sphere: function () {
                                for (var e = -1; ++e < n;) t[e].sphere()
                            }, lineStart: function () {
                                for (var e = -1; ++e < n;) t[e].lineStart()
                            }, lineEnd: function () {
                                for (var e = -1; ++e < n;) t[e].lineEnd()
                            }, polygonStart: function () {
                                for (var e = -1; ++e < n;) t[e].polygonStart()
                            }, polygonEnd: function () {
                                for (var e = -1; ++e < n;) t[e].polygonEnd()
                            }
                        }
                    }([m.stream(c = t), w.stream(t), x.stream(t), E.stream(t), M.stream(t), T.stream(t), S.stream(t), k.stream(t), C.stream(t), P.stream(t), N.stream(t), R.stream(t)])
                }, t.precision = function (t) {
                    return arguments.length ? (m.precision(t), w.precision(t), x.precision(t), E.precision(t), M.precision(t), T.precision(t), S.precision(t), k.precision(t), C.precision(t), P.precision(t), N.precision(t), R.precision(t), r()) : m.precision()
                }, t.scale = function (n) {
                    return arguments.length ? (m.scale(n), w.scale(.6 * n), x.scale(1.6 * n), E.scale(1.4 * n), M.scale(5 * n), T.scale(1.3 * n), S.scale(1.6 * n), k.scale(1.2 * n), C.scale(.3 * n), P.scale(2.7 * n), N.scale(.5 * n), R.scale(.06 * n), t.translate(m.translate())) : m.scale()
                }, t.translate = function (t) {
                    if (!arguments.length) return m.translate();
                    var n = m.scale(), e = +t[0], i = +t[1];
                    return f = m.translate(t).clipExtent([[e - .0996 * n, i - .0908 * n], [e + .0967 * n, i + .0864 * n]]).stream(B), s = w.translate([e - .12 * n, i + .0575 * n]).clipExtent([[e - .14 * n + u, i + .029 * n + u], [e - .0996 * n - u, i + .0864 * n - u]]).stream(B), l = x.translate([e - .12 * n, i + .013 * n]).clipExtent([[e - .14 * n + u, i + 0 * n + u], [e - .0996 * n - u, i + .029 * n - u]]).stream(B), h = E.translate([e - .12 * n, i - .014 * n]).clipExtent([[e - .14 * n + u, i - .032 * n + u], [e - .0996 * n - u, i + 0 * n - u]]).stream(B), p = M.translate([e - .12 * n, i - .044 * n]).clipExtent([[e - .14 * n + u, i - .052 * n + u], [e - .0996 * n - u, i - .032 * n - u]]).stream(B), v = T.translate([e - .12 * n, i - .065 * n]).clipExtent([[e - .14 * n + u, i - .076 * n + u], [e - .0996 * n - u, i - .052 * n - u]]).stream(B), d = S.translate([e + .117 * n, i - .064 * n]).clipExtent([[e + .0967 * n + u, i - .076 * n + u], [e + .1371 * n - u, i - .052 * n - u]]).stream(B), g = k.translate([e + .116 * n, i - .0355 * n]).clipExtent([[e + .0967 * n + u, i - .052 * n + u], [e + .1371 * n - u, i - .02 * n - u]]).stream(B), b = C.translate([e + .116 * n, i - .0048 * n]).clipExtent([[e + .0967 * n + u, i - .02 * n + u], [e + .1371 * n - u, i + .012 * n - u]]).stream(B), y = P.translate([e + .116 * n, i + .022 * n]).clipExtent([[e + .0967 * n + u, i + .012 * n + u], [e + .1371 * n - u, i + .033 * n - u]]).stream(B), O = R.translate([e + .11 * n, i + .045 * n]).clipExtent([[e + .0967 * n + u, i + .033 * n + u], [e + .1371 * n - u, i + .06 * n - u]]).stream(B), j = N.translate([e + .115 * n, i + .075 * n]).clipExtent([[e + .0967 * n + u, i + .06 * n + u], [e + .1371 * n - u, i + .0864 * n - u]]).stream(B), r()
                }, t.fitExtent = function (n, e) {
                    return i(t, n, e)
                }, t.fitSize = function (n, e) {
                    return o(t, n, e)
                }, t.drawCompositionBorders = function (t) {
                    var n, e, r, i;
                    n = m([-7.938886725111036, 43.7219460918835]), e = m([-4.832080896458295, 44.12930268549372]), r = m([-4.205299743793263, 40.98096346967365]), i = m([-7.071796453126152, 40.610037319181444]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([-8.42751373617692, 45.32889452553031]), e = m([-5.18599305777107, 45.7566442062976]), r = m([-4.832080905154431, 44.129302726751426]), i = m([-7.938886737126192, 43.72194613263854]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([-9.012656899657046, 47.127733821030176]), e = m([-5.6105244772793155, 47.579777861410626]), r = m([-5.185993067168585, 45.756644248170346]), i = m([-8.427513749141811, 45.32889456686326]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([-9.405747558985553, 48.26506375557457]), e = m([-5.896175018439575, 48.733352850851624]), r = m([-5.610524487556043, 47.57977790393761]), i = m([-9.012656913808351, 47.127733862971255]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([-9.908436061346974, 49.642448789505856]), e = m([-6.262026716233124, 50.131426841787174]), r = m([-5.896175029331232, 48.73335289377258]), i = m([-9.40574757396393, 48.26506379787767]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([11.996907706504462, 50.16039028163579]), e = m([15.649907879773343, 49.68279246765253]), r = m([15.156712840526632, 48.30371557625831]), i = m([11.64122661754411, 48.761078240546816]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([11.641226606955788, 48.7610781975889]), e = m([15.156712825832164, 48.30371553390465]), r = m([14.549932166241172, 46.4866532486199]), i = m([11.204443787952183, 46.91899233914248]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([11.204443778297161, 46.918992296823646]), e = m([14.549932152815039, 46.486653206856396]), r = m([13.994409796764009, 44.695833444323256]), i = m([10.805306599253848, 45.105133870684924]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([10.805306590412085, 45.10513382903308]), e = m([13.99440978444733, 44.695833403183606]), r = m([13.654633799024392, 43.53552468558152]), i = m([10.561516803980956, 43.930671459798624]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([10.561516795617383, 43.93067141859757]), e = m([13.654633787361952, 43.5355246448671]), r = m([12.867691604239901, 40.640701985019405]), i = m([9.997809515987688, 41.00288343254471]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([10.8, 42.4]), e = m([12.8, 42.13]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1])
                }, t.getCompositionBorders = function () {
                    var t = e.path();
                    return this.drawCompositionBorders(t), t.toString()
                }, t.scale(2700)
            }, t.geoConicConformalEurope = function () {
                function t(t) {
                    var n = t[0], e = t[1];
                    return _ = null, f.point(n, e), _ || (l.point(n, e), _) || (b.point(n, e), _) || (s.point(n, e), _) || (g.point(n, e), _) || (d.point(n, e), _) || (y.point(n, e), _) || (j.point(n, e), _) || (O.point(n, e), _) || (h.point(n, e), _) || (p.point(n, e), _) || (v.point(n, e), _)
                }

                function r() {
                    return a = c = null, t
                }

                var a, c, f, s, l, h, p, v, d, g, b, y, j, O, _,
                    m = n.geoConicConformal().rotate([-10, -53]).parallels([0, 60]),
                    w = n.geoMercator().center([-61.46, 16.14]), x = n.geoMercator().center([-53.2, 3.9]),
                    E = n.geoConicConformal().rotate([27.8, -38.9]).parallels([0, 60]),
                    M = n.geoConicConformal().rotate([25.43, -37.398]).parallels([0, 60]),
                    T = n.geoConicConformal().rotate([31.17, -39.539]).parallels([0, 60]),
                    S = n.geoConicConformal().rotate([17, -32.7]).parallels([0, 60]),
                    k = n.geoConicConformal().rotate([16, -28.5]).parallels([0, 60]),
                    C = n.geoMercator().center([-61.03, 14.67]), P = n.geoMercator().center([45.16, -12.8]),
                    N = n.geoMercator().center([55.52, -21.13]),
                    R = n.geoConicConformal().rotate([-14.4, -35.95]).parallels([0, 60]), B = {
                        point: function (t, n) {
                            _ = [t, n]
                        }
                    };
                return t.invert = function (t) {
                    var n = m.scale(), e = m.translate(), r = (t[0] - (e[0] + .08 * n)) / n, i = (t[1] - e[1]) / n;
                    return (i >= -.31 && i < -.24 && r >= .14 && r < .24 ? w : i >= -.24 && i < -.17 && r >= .14 && r < .24 ? x : i >= -.17 && i < -.12 && r >= .21 && r < .24 ? M : i >= -.17 && i < -.14 && r >= .14 && r < .165 ? T : i >= -.17 && i < -.1 && r >= .14 && r < .24 ? E : i >= -.1 && i < -.03 && r >= .14 && r < .24 ? S : i >= -.03 && i < .04 && r >= .14 && r < .24 ? k : i >= -.31 && i < -.24 && r >= .24 && r < .34 ? C : i >= -.24 && i < -.17 && r >= .24 && r < .34 ? P : i >= -.17 && i < -.1 && r >= .24 && r < .34 ? N : i >= -.1 && i < -.03 && r >= .24 && r < .34 ? R : m).invert(t)
                }, t.stream = function (t) {
                    return a && c === t ? a : a = function (t) {
                        var n = t.length;
                        return {
                            point: function (e, r) {
                                for (var i = -1; ++i < n;) t[i].point(e, r)
                            }, sphere: function () {
                                for (var e = -1; ++e < n;) t[e].sphere()
                            }, lineStart: function () {
                                for (var e = -1; ++e < n;) t[e].lineStart()
                            }, lineEnd: function () {
                                for (var e = -1; ++e < n;) t[e].lineEnd()
                            }, polygonStart: function () {
                                for (var e = -1; ++e < n;) t[e].polygonStart()
                            }, polygonEnd: function () {
                                for (var e = -1; ++e < n;) t[e].polygonEnd()
                            }
                        }
                    }([m.stream(c = t), x.stream(t), C.stream(t), w.stream(t), k.stream(t), S.stream(t), P.stream(t), N.stream(t), R.stream(t), E.stream(t), M.stream(t), T.stream(t)])
                }, t.precision = function (t) {
                    return arguments.length ? (m.precision(t), x.precision(t), C.precision(t), w.precision(t), k.precision(t), S.precision(t), P.precision(t), N.precision(t), R.precision(t), E.precision(t), M.precision(t), T.precision(t), r()) : m.precision()
                }, t.scale = function (n) {
                    return arguments.length ? (m.scale(n), w.scale(3 * n), x.scale(.8 * n), C.scale(3.5 * n), N.scale(2.7 * n), E.scale(2 * n), M.scale(2 * n), T.scale(2 * n), S.scale(3 * n), k.scale(n), P.scale(5.5 * n), R.scale(6 * n), t.translate(m.translate())) : m.scale()
                }, t.translate = function (t) {
                    if (!arguments.length) return m.translate();
                    var n = m.scale(), e = +t[0], i = +t[1];
                    return f = m.translate([e - .08 * n, i]).clipExtent([[e - .51 * n, i - .33 * n], [e + .5 * n, i + .33 * n]]).stream(B), s = w.translate([e + .19 * n, i - .275 * n]).clipExtent([[e + .14 * n + u, i - .31 * n + u], [e + .24 * n - u, i - .24 * n - u]]).stream(B), l = x.translate([e + .19 * n, i - .205 * n]).clipExtent([[e + .14 * n + u, i - .24 * n + u], [e + .24 * n - u, i - .17 * n - u]]).stream(B), h = E.translate([e + .19 * n, i - .135 * n]).clipExtent([[e + .14 * n + u, i - .17 * n + u], [e + .24 * n - u, i - .1 * n - u]]).stream(B), p = M.translate([e + .225 * n, i - .147 * n]).clipExtent([[e + .21 * n + u, i - .17 * n + u], [e + .24 * n - u, i - .12 * n - u]]).stream(B), v = T.translate([e + .153 * n, i - .15 * n]).clipExtent([[e + .14 * n + u, i - .17 * n + u], [e + .165 * n - u, i - .14 * n - u]]).stream(B), d = S.translate([e + .19 * n, i - .065 * n]).clipExtent([[e + .14 * n + u, i - .1 * n + u], [e + .24 * n - u, i - .03 * n - u]]).stream(B), g = k.translate([e + .19 * n, i + .005 * n]).clipExtent([[e + .14 * n + u, i - .03 * n + u], [e + .24 * n - u, i + .04 * n - u]]).stream(B), b = C.translate([e + .29 * n, i - .275 * n]).clipExtent([[e + .24 * n + u, i - .31 * n + u], [e + .34 * n - u, i - .24 * n - u]]).stream(B), y = P.translate([e + .29 * n, i - .205 * n]).clipExtent([[e + .24 * n + u, i - .24 * n + u], [e + .34 * n - u, i - .17 * n - u]]).stream(B), j = N.translate([e + .29 * n, i - .135 * n]).clipExtent([[e + .24 * n + u, i - .17 * n + u], [e + .34 * n - u, i - .1 * n - u]]).stream(B), O = R.translate([e + .29 * n, i - .065 * n]).clipExtent([[e + .24 * n + u, i - .1 * n + u], [e + .34 * n - u, i - .03 * n - u]]).stream(B), r()
                }, t.fitExtent = function (n, e) {
                    return i(t, n, e)
                }, t.fitSize = function (n, e) {
                    return o(t, n, e)
                }, t.drawCompositionBorders = function (t) {
                    var n, e, r, i;
                    n = m([42.45755610828648, 63.343658547914934]), e = m([52.65837266667029, 59.35045080290929]), r = m([47.19754502247785, 56.12653496548117]), i = m([37.673034273363044, 59.61638268506111]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([59.41110754003403, 62.35069727399336]), e = m([66.75050228640794, 57.11797303636038]), r = m([60.236065725110436, 54.63331433818992]), i = m([52.65837313153311, 59.350450804599355]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([48.81091130080243, 66.93353402634641]), e = m([59.41110730654679, 62.35069740653086]), r = m([52.6583728974441, 59.3504509222445]), i = m([42.45755631675751, 63.34365868805821]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([31.054198418446475, 52.1080673766184]), e = m([39.09869284884117, 49.400700047190554]), r = m([36.0580811499175, 46.02944174908498]), i = m([28.690508588835726, 48.433126979386415]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([33.977877745912025, 55.849945501331]), e = m([42.75328432167726, 52.78455122462353]), r = m([39.09869297540224, 49.400700176148625]), i = m([31.05419851807008, 52.10806751810923]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([52.658372900759296, 59.35045068526415]), e = m([60.23606549583304, 54.63331423800264]), r = m([54.6756370953122, 51.892298789399455]), i = m([47.19754524788189, 56.126534861222794]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([47.19754506082455, 56.126534735591456]), e = m([54.675636900123514, 51.892298681337095]), r = m([49.94448648951486, 48.98775484983285]), i = m([42.75328468716108, 52.78455126060818]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([42.75328453416769, 52.78455113209101]), e = m([49.94448632339758, 48.98775473706457]), r = m([45.912339990394315, 45.99361784987003]), i = m([39.09869317356607, 49.40070009378711]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([37.673034114296634, 59.61638254183119]), e = m([47.197544835420544, 56.126534839849846]), r = m([42.75328447467064, 52.78455135314068]), i = m([33.977877870363905, 55.849945644671145]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([44.56748486446032, 57.26489367845818]), r = m([43.9335791193588, 53.746540942601726]), i = m([43, 56]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = m([37.673034114296634, 59.61638254183119]), e = m([40.25902691953466, 58.83002044222639]), r = m([38.458270492742024, 57.26232178028002]), i = m([35.97754948030156, 58.00266637992386]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath()
                }, t.getCompositionBorders = function () {
                    var t = e.path();
                    return this.drawCompositionBorders(t), t.toString()
                }, t.scale(750)
            }, t.geoMercatorMalaysia = function () {
                function t(t) {
                    var n = t[0], e = t[1];
                    return l = null, f.point(n, e), l || (s.point(n, e), l)
                }

                function r() {
                    return a = c = null, t
                }

                var a, c, f, s, l, h = n.geoMercator().center([105.25, 4]), p = n.geoMercator().center([118.65, 2.86]),
                    v = {
                        point: function (t, n) {
                            l = [t, n]
                        }
                    };
                return t.invert = function (t) {
                    var n = h.scale(), e = h.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                    return (i >= -.0521 && i < .0229 && r >= -.0111 && r < .1 ? p : h).invert(t)
                }, t.stream = function (t) {
                    return a && c === t ? a : a = function (t) {
                        var n = t.length;
                        return {
                            point: function (e, r) {
                                for (var i = -1; ++i < n;) t[i].point(e, r)
                            }, sphere: function () {
                                for (var e = -1; ++e < n;) t[e].sphere()
                            }, lineStart: function () {
                                for (var e = -1; ++e < n;) t[e].lineStart()
                            }, lineEnd: function () {
                                for (var e = -1; ++e < n;) t[e].lineEnd()
                            }, polygonStart: function () {
                                for (var e = -1; ++e < n;) t[e].polygonStart()
                            }, polygonEnd: function () {
                                for (var e = -1; ++e < n;) t[e].polygonEnd()
                            }
                        }
                    }([h.stream(c = t), p.stream(t)])
                }, t.precision = function (t) {
                    return arguments.length ? (h.precision(t), p.precision(t), r()) : h.precision()
                }, t.scale = function (n) {
                    return arguments.length ? (h.scale(n), p.scale(.615 * n), t.translate(h.translate())) : h.scale()
                }, t.translate = function (t) {
                    if (!arguments.length) return h.translate();
                    var n = h.scale(), e = +t[0], i = +t[1];
                    return f = h.translate(t).clipExtent([[e - .11 * n, i - .0521 * n], [e - .0111 * n, i + .0521 * n]]).stream(v), s = p.translate([e + .09 * n, i - 0 * n]).clipExtent([[e - .0111 * n + u, i - .0521 * n + u], [e + .1 * n - u, i + .024 * n - u]]).stream(v), r()
                }, t.fitExtent = function (n, e) {
                    return i(t, n, e)
                }, t.fitSize = function (n, e) {
                    return o(t, n, e)
                }, t.drawCompositionBorders = function (t) {
                    var n = h([106.3214, 2.0228]), e = h([105.1843, 2.3761]), r = h([104.2151, 3.3618]),
                        i = h([104.215, 4.5651]);
                    t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1])
                }, t.getCompositionBorders = function () {
                    var t = e.path();
                    return this.drawCompositionBorders(t), t.toString()
                }, t.scale(4800)
            }, t.geoMercatorEquatorialGuinea = function () {
                function t(t) {
                    var n = t[0], e = t[1];
                    return h = null, f.point(n, e), h || (s.point(n, e), h) || (l.point(n, e), h)
                }

                function r() {
                    return a = c = null, t
                }

                var a, c, f, s, l, h, p = n.geoMercator().rotate([-9.5, -1.5]),
                    v = n.geoMercator().rotate([-8.6, -3.5]), d = n.geoMercator().rotate([-5.6, 1.45]), g = {
                        point: function (t, n) {
                            h = [t, n]
                        }
                    };
                return t.invert = function (t) {
                    var n = p.scale(), e = p.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                    return (i >= -.02 && i < 0 && r >= -.038 && r < -.005 ? v : i >= 0 && i < .02 && r >= -.038 && r < -.005 ? d : p).invert(t)
                }, t.stream = function (t) {
                    return a && c === t ? a : a = function (t) {
                        var n = t.length;
                        return {
                            point: function (e, r) {
                                for (var i = -1; ++i < n;) t[i].point(e, r)
                            }, sphere: function () {
                                for (var e = -1; ++e < n;) t[e].sphere()
                            }, lineStart: function () {
                                for (var e = -1; ++e < n;) t[e].lineStart()
                            }, lineEnd: function () {
                                for (var e = -1; ++e < n;) t[e].lineEnd()
                            }, polygonStart: function () {
                                for (var e = -1; ++e < n;) t[e].polygonStart()
                            }, polygonEnd: function () {
                                for (var e = -1; ++e < n;) t[e].polygonEnd()
                            }
                        }
                    }([p.stream(c = t), v.stream(t), d.stream(t)])
                }, t.precision = function (t) {
                    return arguments.length ? (p.precision(t), v.precision(t), d.precision(t), r()) : p.precision()
                }, t.scale = function (n) {
                    return arguments.length ? (p.scale(n), v.scale(1.5 * n), d.scale(4 * n), t.translate(p.translate())) : p.scale()
                }, t.translate = function (t) {
                    if (!arguments.length) return p.translate();
                    var n = p.scale(), e = +t[0], i = +t[1];
                    return f = p.translate(t).clipExtent([[e - .005 * n, i - .02 * n], [e + .038 * n, i + .02 * n]]).stream(g), s = v.translate([e - .025 * n, i - .01 * n]).clipExtent([[e - .038 * n + u, i - .02 * n + u], [e - .005 * n - u, i + 0 * n - u]]).stream(g), l = d.translate([e - .025 * n, i + .01 * n]).clipExtent([[e - .038 * n + u, i - 0 * n + u], [e - .005 * n - u, i + .02 * n - u]]).stream(g), r()
                }, t.fitExtent = function (n, e) {
                    return i(t, n, e)
                }, t.fitSize = function (n, e) {
                    return o(t, n, e)
                }, t.drawCompositionBorders = function (t) {
                    var n, e, r, i;
                    n = p([9.21327272751682, 2.645820439454123]), e = p([11.679126293239872, 2.644755519268689]), r = p([11.676845389029227, .35307824637606433]), i = p([9.213572917774014, .35414205204417754]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = p([7.320873711543669, 2.64475551449975]), e = p([9.213272722738658, 2.645820434679803]), r = p([9.213422896480349, 1.4999812505283054]), i = p([7.322014760520787, 1.4989168878985566]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath(), n = p([7.3220147605302905, 1.4989168783492766]), e = p([9.213422896481598, 1.499981240979021]), r = p([9.213572912999604, .354142056817247]), i = p([7.323154615739809, .353078251154504]), t.moveTo(n[0], n[1]), t.lineTo(e[0], e[1]), t.lineTo(r[0], r[1]), t.lineTo(i[0], i[1]), t.closePath()
                }, t.getCompositionBorders = function () {
                    var t = e.path();
                    return this.drawCompositionBorders(t), t.toString()
                }, t.scale(12e3)
            }, Object.defineProperty(t, "__esModule", {value: !0})
        })
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(142);
        e.d(n, "geoArea", function () {
            return r.c
        });
        var i = e(324);
        e.d(n, "geoBounds", function () {
            return i.a
        });
        var o = e(325);
        e.d(n, "geoCentroid", function () {
            return o.a
        });
        var u = e(143);
        e.d(n, "geoCircle", function () {
            return u.b
        });
        var a = e(145);
        e.d(n, "geoClipExtent", function () {
            return a.b
        });
        var c = e(328);
        e.d(n, "geoDistance", function () {
            return c.a
        });
        var f = e(329);
        e.d(n, "geoGraticule", function () {
            return f.a
        });
        var s = e(330);
        e.d(n, "geoInterpolate", function () {
            return s.a
        });
        var l = e(149);
        e.d(n, "geoLength", function () {
            return l.a
        });
        var h = e(331);
        e.d(n, "geoPath", function () {
            return h.a
        });
        var p = e(152);
        e.d(n, "geoAlbers", function () {
            return p.a
        });
        var v = e(340);
        e.d(n, "geoAlbersUsa", function () {
            return v.a
        });
        var d = e(341);
        e.d(n, "geoAzimuthalEqualArea", function () {
            return d.b
        }), e.d(n, "geoAzimuthalEqualAreaRaw", function () {
            return d.a
        });
        var g = e(342);
        e.d(n, "geoAzimuthalEquidistant", function () {
            return g.b
        }), e.d(n, "geoAzimuthalEquidistantRaw", function () {
            return g.a
        });
        var b = e(343);
        e.d(n, "geoConicConformal", function () {
            return b.b
        }), e.d(n, "geoConicConformalRaw", function () {
            return b.a
        });
        var y = e(79);
        e.d(n, "geoConicEqualArea", function () {
            return y.b
        }), e.d(n, "geoConicEqualAreaRaw", function () {
            return y.a
        });
        var j = e(344);
        e.d(n, "geoConicEquidistant", function () {
            return j.b
        }), e.d(n, "geoConicEquidistantRaw", function () {
            return j.a
        });
        var O = e(155);
        e.d(n, "geoEquirectangular", function () {
            return O.a
        }), e.d(n, "geoEquirectangularRaw", function () {
            return O.b
        });
        var _ = e(345);
        e.d(n, "geoGnomonic", function () {
            return _.a
        }), e.d(n, "geoGnomonicRaw", function () {
            return _.b
        });
        var m = e(18);
        e.d(n, "geoProjection", function () {
            return m.a
        }), e.d(n, "geoProjectionMutator", function () {
            return m.b
        });
        var w = e(82);
        e.d(n, "geoMercator", function () {
            return w.a
        }), e.d(n, "geoMercatorRaw", function () {
            return w.c
        });
        var x = e(346);
        e.d(n, "geoOrthographic", function () {
            return x.a
        }), e.d(n, "geoOrthographicRaw", function () {
            return x.b
        });
        var E = e(347);
        e.d(n, "geoStereographic", function () {
            return E.a
        }), e.d(n, "geoStereographicRaw", function () {
            return E.b
        });
        var M = e(348);
        e.d(n, "geoTransverseMercator", function () {
            return M.a
        }), e.d(n, "geoTransverseMercatorRaw", function () {
            return M.b
        });
        var T = e(78);
        e.d(n, "geoRotation", function () {
            return T.a
        });
        var S = e(26);
        e.d(n, "geoStream", function () {
            return S.a
        });
        var k = e(81);
        e.d(n, "geoTransform", function () {
            return k.a
        })
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            _.push(m = [p = t, d = t]), n < v && (v = n), n > g && (g = n)
        }

        function i(t, n) {
            var e = Object(E.a)([t * M.r, n * M.r]);
            if (O) {
                var i = Object(E.c)(O, e), o = [i[1], -i[0], 0], u = Object(E.c)(o, i);
                Object(E.e)(u), u = Object(E.g)(u);
                var a, c = t - b, f = c > 0 ? 1 : -1, l = u[0] * M.h * f, h = Object(M.a)(c) > 180;
                h ^ (f * b < l && l < f * t) ? (a = u[1] * M.h) > g && (g = a) : (l = (l + 360) % 360 - 180, h ^ (f * b < l && l < f * t) ? (a = -u[1] * M.h) < v && (v = a) : (n < v && (v = n), n > g && (g = n))), h ? t < b ? s(p, t) > s(p, d) && (d = t) : s(t, d) > s(p, d) && (p = t) : d >= p ? (t < p && (p = t), t > d && (d = t)) : t > b ? s(p, t) > s(p, d) && (d = t) : s(t, d) > s(p, d) && (p = t)
            } else r(t, n);
            O = e, b = t
        }

        function o() {
            k.point = i
        }

        function u() {
            m[0] = p, m[1] = d, k.point = r, O = null
        }

        function a(t, n) {
            if (O) {
                var e = t - b;
                S.add(Object(M.a)(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
            } else y = t, j = n;
            x.b.point(t, n), i(t, n)
        }

        function c() {
            x.b.lineStart()
        }

        function f() {
            a(y, j), x.b.lineEnd(), Object(M.a)(S) > M.i && (p = -(d = 180)), m[0] = p, m[1] = d, O = null
        }

        function s(t, n) {
            return (n -= t) < 0 ? n + 360 : n
        }

        function l(t, n) {
            return t[0] - n[0]
        }

        function h(t, n) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }

        var p, v, d, g, b, y, j, O, _, m, w = e(42), x = e(142), E = e(43), M = e(5), T = e(26), S = Object(w.a)(),
            k = {
                point: r, lineStart: o, lineEnd: u, polygonStart: function () {
                    k.point = a, k.lineStart = c, k.lineEnd = f, S.reset(), x.b.polygonStart()
                }, polygonEnd: function () {
                    x.b.polygonEnd(), k.point = r, k.lineStart = o, k.lineEnd = u, x.a < 0 ? (p = -(d = 180), v = -(g = 90)) : S > M.i ? g = 90 : S < -M.i && (v = -90), m[0] = p, m[1] = d
                }
            };
        n.a = function (t) {
            var n, e, r, i, o, u, a;
            if (g = d = -(p = v = 1 / 0), _ = [], Object(T.a)(t, k), e = _.length) {
                for (_.sort(l), n = 1, o = [r = _[0]]; n < e; ++n) h(r, (i = _[n])[0]) || h(r, i[1]) ? (s(r[0], i[1]) > s(r[0], r[1]) && (r[1] = i[1]), s(i[0], r[1]) > s(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
                for (u = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) i = o[n], (a = s(r[1], i[0])) > u && (u = a, p = i[0], d = r[1])
            }
            return _ = m = null, p === 1 / 0 || v === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[p, v], [d, g]]
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            t *= k.r, n *= k.r;
            var e = Object(k.g)(n);
            i(e * Object(k.g)(t), e * Object(k.t)(t), Object(k.t)(n))
        }

        function i(t, n, e) {
            d += (t - d) / ++p, g += (n - g) / p, b += (e - b) / p
        }

        function o() {
            N.point = u
        }

        function u(t, n) {
            t *= k.r, n *= k.r;
            var e = Object(k.g)(n);
            M = e * Object(k.g)(t), T = e * Object(k.t)(t), S = Object(k.t)(n), N.point = a, i(M, T, S)
        }

        function a(t, n) {
            t *= k.r, n *= k.r;
            var e = Object(k.g)(n), r = e * Object(k.g)(t), o = e * Object(k.t)(t), u = Object(k.t)(n),
                a = Object(k.e)(Object(k.u)((a = T * u - S * o) * a + (a = S * r - M * u) * a + (a = M * o - T * r) * a), M * r + T * o + S * u);
            v += a, y += a * (M + (M = r)), j += a * (T + (T = o)), O += a * (S + (S = u)), i(M, T, S)
        }

        function c() {
            N.point = r
        }

        function f() {
            N.point = l
        }

        function s() {
            h(x, E), N.point = r
        }

        function l(t, n) {
            x = t, E = n, t *= k.r, n *= k.r, N.point = h;
            var e = Object(k.g)(n);
            M = e * Object(k.g)(t), T = e * Object(k.t)(t), S = Object(k.t)(n), i(M, T, S)
        }

        function h(t, n) {
            t *= k.r, n *= k.r;
            var e = Object(k.g)(n), r = e * Object(k.g)(t), o = e * Object(k.t)(t), u = Object(k.t)(n),
                a = T * u - S * o, c = S * r - M * u, f = M * o - T * r, s = Object(k.u)(a * a + c * c + f * f),
                l = M * r + T * o + S * u, h = s && -Object(k.b)(l) / s, p = Object(k.e)(s, l);
            _ += h * a, m += h * c, w += h * f, v += p, y += p * (M + (M = r)), j += p * (T + (T = o)), O += p * (S + (S = u)), i(M, T, S)
        }

        var p, v, d, g, b, y, j, O, _, m, w, x, E, M, T, S, k = e(5), C = e(25), P = e(26), N = {
            sphere: C.a, point: r, lineStart: o, lineEnd: c, polygonStart: function () {
                N.lineStart = f, N.lineEnd = s
            }, polygonEnd: function () {
                N.lineStart = o, N.lineEnd = c
            }
        };
        n.a = function (t) {
            p = v = d = g = b = y = j = O = _ = m = w = 0, Object(P.a)(t, N);
            var n = _, e = m, r = w, i = n * n + e * e + r * r;
            return i < k.j && (n = y, e = j, r = O, v < k.i && (n = d, e = g, r = b), (i = n * n + e * e + r * r) < k.j) ? [NaN, NaN] : [Object(k.e)(e, n) * k.h, Object(k.c)(r / Object(k.u)(i)) * k.h]
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n, e, r, i, o) {
            var u, a = t[0], c = t[1], f = 0, s = 1, l = n[0] - a, h = n[1] - c;
            if (u = e - a, l || !(u > 0)) {
                if (u /= l, l < 0) {
                    if (u < f) return;
                    u < s && (s = u)
                } else if (l > 0) {
                    if (u > s) return;
                    u > f && (f = u)
                }
                if (u = i - a, l || !(u < 0)) {
                    if (u /= l, l < 0) {
                        if (u > s) return;
                        u > f && (f = u)
                    } else if (l > 0) {
                        if (u < f) return;
                        u < s && (s = u)
                    }
                    if (u = r - c, h || !(u > 0)) {
                        if (u /= h, h < 0) {
                            if (u < f) return;
                            u < s && (s = u)
                        } else if (h > 0) {
                            if (u > s) return;
                            u > f && (f = u)
                        }
                        if (u = o - c, h || !(u < 0)) {
                            if (u /= h, h < 0) {
                                if (u > s) return;
                                u > f && (f = u)
                            } else if (h > 0) {
                                if (u < f) return;
                                u < s && (s = u)
                            }
                            return f > 0 && (t[0] = a + f * l, t[1] = c + f * h), s < 1 && (n[0] = a + s * l, n[1] = c + s * h), !0
                        }
                    }
                }
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(149), i = [null, null], o = {type: "LineString", coordinates: i};
        n.a = function (t, n) {
            return i[0] = t, i[1] = n, Object(r.a)(o)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            var r = Object(o.range)(t, n - u.i, e).concat(n);
            return function (t) {
                return r.map(function (n) {
                    return [t, n]
                })
            }
        }

        function i(t, n, e) {
            var r = Object(o.range)(t, n - u.i, e).concat(n);
            return function (t) {
                return r.map(function (n) {
                    return [n, t]
                })
            }
        }

        var o = e(14), u = e(5);
        n.a = function () {
            function t() {
                return {type: "MultiLineString", coordinates: n()}
            }

            function n() {
                return Object(o.range)(Object(u.f)(f / O) * O, c, O).map(g).concat(Object(o.range)(Object(u.f)(p / _) * _, h, _).map(b)).concat(Object(o.range)(Object(u.f)(a / y) * y, e, y).filter(function (t) {
                    return Object(u.a)(t % O) > u.i
                }).map(v)).concat(Object(o.range)(Object(u.f)(l / j) * j, s, j).filter(function (t) {
                    return Object(u.a)(t % _) > u.i
                }).map(d))
            }

            var e, a, c, f, s, l, h, p, v, d, g, b, y = 10, j = y, O = 90, _ = 360, m = 2.5;
            return t.lines = function () {
                return n().map(function (t) {
                    return {type: "LineString", coordinates: t}
                })
            }, t.outline = function () {
                return {
                    type: "Polygon",
                    coordinates: [g(f).concat(b(h).slice(1), g(c).reverse().slice(1), b(p).reverse().slice(1))]
                }
            }, t.extent = function (n) {
                return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor()
            }, t.extentMajor = function (n) {
                return arguments.length ? (f = +n[0][0], c = +n[1][0], p = +n[0][1], h = +n[1][1], f > c && (n = f, f = c, c = n), p > h && (n = p, p = h, h = n), t.precision(m)) : [[f, p], [c, h]]
            }, t.extentMinor = function (n) {
                return arguments.length ? (a = +n[0][0], e = +n[1][0], l = +n[0][1], s = +n[1][1], a > e && (n = a, a = e, e = n), l > s && (n = l, l = s, s = n), t.precision(m)) : [[a, l], [e, s]]
            }, t.step = function (n) {
                return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor()
            }, t.stepMajor = function (n) {
                return arguments.length ? (O = +n[0], _ = +n[1], t) : [O, _]
            }, t.stepMinor = function (n) {
                return arguments.length ? (y = +n[0], j = +n[1], t) : [y, j]
            }, t.precision = function (n) {
                return arguments.length ? (m = +n, v = r(l, s, 90), d = i(a, e, m), g = r(p, h, 90), b = i(f, c, m), t) : m
            }, t.extentMajor([[-180, -90 + u.i], [180, 90 - u.i]]).extentMinor([[-180, -80 - u.i], [180, 80 + u.i]])
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(5);
        n.a = function (t, n) {
            var e = t[0] * r.r, i = t[1] * r.r, o = n[0] * r.r, u = n[1] * r.r, a = Object(r.g)(i), c = Object(r.t)(i),
                f = Object(r.g)(u), s = Object(r.t)(u), l = a * Object(r.g)(e), h = a * Object(r.t)(e),
                p = f * Object(r.g)(o), v = f * Object(r.t)(o),
                d = 2 * Object(r.c)(Object(r.u)(Object(r.m)(u - i) + a * f * Object(r.m)(o - e))), g = Object(r.t)(d),
                b = d ? function (t) {
                    var n = Object(r.t)(t *= d) / g, e = Object(r.t)(d - t) / g, i = e * l + n * p, o = e * h + n * v,
                        u = e * c + n * s;
                    return [Object(r.e)(o, i) * r.h, Object(r.e)(u, Object(r.u)(i * i + o * o)) * r.h]
                } : function () {
                    return [e * r.h, i * r.h]
                };
            return b.distance = d, b
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(150), i = e(26), o = e(332), u = e(151), a = e(333), c = e(334), f = e(335);
        n.a = function () {
            function t(t) {
                return t && ("function" == typeof h && l.pointRadius(+h.apply(this, arguments)), Object(i.a)(t, e(l))), l.result()
            }

            var n, e, s, l, h = 4.5;
            return t.area = function (t) {
                return Object(i.a)(t, e(o.a)), o.a.result()
            }, t.bounds = function (t) {
                return Object(i.a)(t, e(u.a)), u.a.result()
            }, t.centroid = function (t) {
                return Object(i.a)(t, e(a.a)), a.a.result()
            }, t.projection = function (i) {
                return arguments.length ? (e = null == (n = i) ? r.a : i.stream, t) : n
            }, t.context = function (n) {
                return arguments.length ? (l = null == (s = n) ? new f.a : new c.a(n), "function" != typeof h && l.pointRadius(h), t) : s
            }, t.pointRadius = function (n) {
                return arguments.length ? (h = "function" == typeof n ? n : (l.pointRadius(+n), +n), t) : h
            }, t.projection(null).context(null)
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            g.point = i
        }

        function i(t, n) {
            g.point = o, a = f = t, c = s = n
        }

        function o(t, n) {
            d.add(s * t - f * n), f = t, s = n
        }

        function u() {
            o(a, c)
        }

        var a, c, f, s, l = e(42), h = e(5), p = e(25), v = Object(l.a)(), d = Object(l.a)(), g = {
            point: p.a, lineStart: p.a, lineEnd: p.a, polygonStart: function () {
                g.lineStart = r, g.lineEnd = u
            }, polygonEnd: function () {
                g.lineStart = g.lineEnd = g.point = p.a, v.add(Object(h.a)(d)), d.reset()
            }, result: function () {
                var t = v / 2;
                return v.reset(), t
            }
        };
        n.a = g
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            b += t, y += n, ++j
        }

        function i() {
            M.point = o
        }

        function o(t, n) {
            M.point = u, r(v = t, d = n)
        }

        function u(t, n) {
            var e = t - v, i = n - d, o = Object(g.u)(e * e + i * i);
            O += o * (v + t) / 2, _ += o * (d + n) / 2, m += o, r(v = t, d = n)
        }

        function a() {
            M.point = r
        }

        function c() {
            M.point = s
        }

        function f() {
            l(h, p)
        }

        function s(t, n) {
            M.point = l, r(h = v = t, p = d = n)
        }

        function l(t, n) {
            var e = t - v, i = n - d, o = Object(g.u)(e * e + i * i);
            O += o * (v + t) / 2, _ += o * (d + n) / 2, m += o, w += (o = d * t - v * n) * (v + t), x += o * (d + n), E += 3 * o, r(v = t, d = n)
        }

        var h, p, v, d, g = e(5), b = 0, y = 0, j = 0, O = 0, _ = 0, m = 0, w = 0, x = 0, E = 0, M = {
            point: r, lineStart: i, lineEnd: a, polygonStart: function () {
                M.lineStart = c, M.lineEnd = f
            }, polygonEnd: function () {
                M.point = r, M.lineStart = i, M.lineEnd = a
            }, result: function () {
                var t = E ? [w / E, x / E] : m ? [O / m, _ / m] : j ? [b / j, y / j] : [NaN, NaN];
                return b = y = j = O = _ = m = w = x = E = 0, t
            }
        };
        n.a = M
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._context = t
        }

        n.a = r;
        var i = e(5), o = e(25);
        r.prototype = {
            _radius: 4.5, pointRadius: function (t) {
                return this._radius = t, this
            }, polygonStart: function () {
                this._line = 0
            }, polygonEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                0 === this._line && this._context.closePath(), this._point = NaN
            }, point: function (t, n) {
                switch (this._point) {
                    case 0:
                        this._context.moveTo(t, n), this._point = 1;
                        break;
                    case 1:
                        this._context.lineTo(t, n);
                        break;
                    default:
                        this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, i.w)
                }
            }, result: o.a
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            this._string = []
        }

        function i(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
        }

        n.a = r, r.prototype = {
            _circle: i(4.5), pointRadius: function (t) {
                return this._circle = i(t), this
            }, polygonStart: function () {
                this._line = 0
            }, polygonEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                0 === this._line && this._string.push("Z"), this._point = NaN
            }, point: function (t, n) {
                switch (this._point) {
                    case 0:
                        this._string.push("M", t, ",", n), this._point = 1;
                        break;
                    case 1:
                        this._string.push("L", t, ",", n);
                        break;
                    default:
                        this._string.push("M", t, ",", n, this._circle)
                }
            }, result: function () {
                if (this._string.length) {
                    var t = this._string.join("");
                    return this._string = [], t
                }
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(153), i = e(5);
        n.a = Object(r.a)(function () {
            return !0
        }, function (t) {
            var n, e = NaN, r = NaN, o = NaN;
            return {
                lineStart: function () {
                    t.lineStart(), n = 1
                }, point: function (u, a) {
                    var c = u > 0 ? i.o : -i.o, f = Object(i.a)(u - e);
                    Object(i.a)(f - i.o) < i.i ? (t.point(e, r = (r + a) / 2 > 0 ? i.l : -i.l), t.point(o, r), t.lineEnd(), t.lineStart(), t.point(c, r), t.point(u, r), n = 0) : o !== c && f >= i.o && (Object(i.a)(e - o) < i.i && (e -= o * i.i), Object(i.a)(u - c) < i.i && (u -= c * i.i), r = function (t, n, e, r) {
                        var o, u, a = Object(i.t)(t - e);
                        return Object(i.a)(a) > i.i ? Object(i.d)((Object(i.t)(n) * (u = Object(i.g)(r)) * Object(i.t)(e) - Object(i.t)(r) * (o = Object(i.g)(n)) * Object(i.t)(t)) / (o * u * a)) : (n + r) / 2
                    }(e, r, u, a), t.point(o, r), t.lineEnd(), t.lineStart(), t.point(c, r), n = 0), t.point(e = u, r = a), o = c
                }, lineEnd: function () {
                    t.lineEnd(), e = r = NaN
                }, clean: function () {
                    return 2 - n
                }
            }
        }, function (t, n, e, r) {
            var o;
            if (null == t) o = e * i.l, r.point(-i.o, o), r.point(0, o), r.point(i.o, o), r.point(i.o, 0), r.point(i.o, -o), r.point(0, -o), r.point(-i.o, -o), r.point(-i.o, 0), r.point(-i.o, o); else if (Object(i.a)(t[0] - n[0]) > i.i) {
                var u = t[0] < n[0] ? i.o : -i.o;
                o = e * u / 2, r.point(-u, o), r.point(0, o), r.point(u, o)
            } else r.point(n[0], n[1])
        }, [-i.o, -i.l])
    }, function (t, n, e) {
        "use strict";
        var r = e(42), i = e(43), o = e(5), u = Object(r.a)();
        n.a = function (t, n) {
            var e = n[0], r = n[1], a = [Object(o.t)(e), -Object(o.g)(e), 0], c = 0, f = 0;
            u.reset();
            for (var s = 0, l = t.length; s < l; ++s) if (p = (h = t[s]).length) for (var h, p, v = h[p - 1], d = v[0], g = v[1] / 2 + o.q, b = Object(o.t)(g), y = Object(o.g)(g), j = 0; j < p; ++j, d = _, b = w, y = x, v = O) {
                var O = h[j], _ = O[0], m = O[1] / 2 + o.q, w = Object(o.t)(m), x = Object(o.g)(m), E = _ - d,
                    M = E >= 0 ? 1 : -1, T = M * E, S = T > o.o, k = b * w;
                if (u.add(Object(o.e)(k * M * Object(o.t)(T), y * x + k * Object(o.g)(T))), c += S ? E + M * o.w : E, S ^ d >= e ^ _ >= e) {
                    var C = Object(i.c)(Object(i.a)(v), Object(i.a)(O));
                    Object(i.e)(C);
                    var P = Object(i.c)(a, C);
                    Object(i.e)(P);
                    var N = (S ^ E >= 0 ? -1 : 1) * Object(o.c)(P[2]);
                    (r > N || r === N && (C[0] || C[1])) && (f += S ^ E >= 0 ? 1 : -1)
                }
            }
            return (c < -o.i || c < o.i && u < -o.i) ^ 1 & f
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(43), i = e(143), o = e(5), u = e(148), a = e(153);
        n.a = function (t, n) {
            function e(t, n) {
                return Object(o.g)(t) * Object(o.g)(n) > s
            }

            function c(t, n, e) {
                var i = Object(r.a)(t), u = Object(r.a)(n), a = [1, 0, 0], c = Object(r.c)(i, u), f = Object(r.d)(c, c),
                    l = c[0], h = f - l * l;
                if (!h) return !e && t;
                var p = s * f / h, v = -s * l / h, d = Object(r.c)(a, c), g = Object(r.f)(a, p), b = Object(r.f)(c, v);
                Object(r.b)(g, b);
                var y = d, j = Object(r.d)(g, y), O = Object(r.d)(y, y), _ = j * j - O * (Object(r.d)(g, g) - 1);
                if (!(_ < 0)) {
                    var m = Object(o.u)(_), w = Object(r.f)(y, (-j - m) / O);
                    if (Object(r.b)(w, g), w = Object(r.g)(w), !e) return w;
                    var x, E = t[0], M = n[0], T = t[1], S = n[1];
                    M < E && (x = E, E = M, M = x);
                    var k = M - E, C = Object(o.a)(k - o.o) < o.i, P = C || k < o.i;
                    if (!C && S < T && (x = T, T = S, S = x), P ? C ? T + S > 0 ^ w[1] < (Object(o.a)(w[0] - E) < o.i ? T : S) : T <= w[1] && w[1] <= S : k > o.o ^ (E <= w[0] && w[0] <= M)) {
                        var N = Object(r.f)(y, (-j + m) / O);
                        return Object(r.b)(N, g), [w, Object(r.g)(N)]
                    }
                }
            }

            function f(n, e) {
                var r = l ? t : o.o - t, i = 0;
                return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i
            }

            var s = Object(o.g)(t), l = s > 0, h = Object(o.a)(s) > o.i;
            return Object(a.a)(e, function (t) {
                var n, r, i, a, s;
                return {
                    lineStart: function () {
                        a = i = !1, s = 1
                    }, point: function (p, v) {
                        var d, g = [p, v], b = e(p, v),
                            y = l ? b ? 0 : f(p, v) : b ? f(p + (p < 0 ? o.o : -o.o), v) : 0;
                        if (!n && (a = i = b) && t.lineStart(), b !== i && (d = c(n, g), (Object(u.a)(n, d) || Object(u.a)(g, d)) && (g[0] += o.i, g[1] += o.i, b = e(g[0], g[1]))), b !== i) s = 0, b ? (t.lineStart(), d = c(g, n), t.point(d[0], d[1])) : (d = c(n, g), t.point(d[0], d[1]), t.lineEnd()), n = d; else if (h && n && l ^ b) {
                            var j;
                            y & r || !(j = c(g, n, !0)) || (s = 0, l ? (t.lineStart(), t.point(j[0][0], j[0][1]), t.point(j[1][0], j[1][1]), t.lineEnd()) : (t.point(j[1][0], j[1][1]), t.lineEnd(), t.lineStart(), t.point(j[0][0], j[0][1])))
                        }
                        !b || n && Object(u.a)(n, g) || t.point(g[0], g[1]), n = g, i = b, r = y
                    }, lineEnd: function () {
                        i && t.lineEnd(), n = null
                    }, clean: function () {
                        return s | (a && i) << 1
                    }
                }
            }, function (e, r, o, u) {
                Object(i.a)(u, t, n, o, e, r)
            }, l ? [0, -t] : [-o.o, t - o.o])
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(43), i = e(5), o = e(81), u = 16, a = Object(i.g)(30 * i.r);
        n.a = function (t, n) {
            return +n ? function (t, n) {
                function e(r, o, u, c, f, s, l, h, p, v, d, g, b, y) {
                    var j = l - r, O = h - o, _ = j * j + O * O;
                    if (_ > 4 * n && b--) {
                        var m = c + v, w = f + d, x = s + g, E = Object(i.u)(m * m + w * w + x * x),
                            M = Object(i.c)(x /= E),
                            T = Object(i.a)(Object(i.a)(x) - 1) < i.i || Object(i.a)(u - p) < i.i ? (u + p) / 2 : Object(i.e)(w, m),
                            S = t(T, M), k = S[0], C = S[1], P = k - r, N = C - o, R = O * P - j * N;
                        (R * R / _ > n || Object(i.a)((j * P + O * N) / _ - .5) > .3 || c * v + f * d + s * g < a) && (e(r, o, u, c, f, s, k, C, T, m /= E, w /= E, x, b, y), y.point(k, C), e(k, C, T, m, w, x, l, h, p, v, d, g, b, y))
                    }
                }

                return function (n) {
                    function i(e, r) {
                        e = t(e, r), n.point(e[0], e[1])
                    }

                    function o() {
                        j = NaN, x.point = a, n.lineStart()
                    }

                    function a(i, o) {
                        var a = Object(r.a)([i, o]), c = t(i, o);
                        e(j, O, y, _, m, w, j = c[0], O = c[1], y = i, _ = a[0], m = a[1], w = a[2], u, n), n.point(j, O)
                    }

                    function c() {
                        x.point = i, n.lineEnd()
                    }

                    function f() {
                        o(), x.point = s, x.lineEnd = l
                    }

                    function s(t, n) {
                        a(h = t, n), p = j, v = O, d = _, g = m, b = w, x.point = a
                    }

                    function l() {
                        e(j, O, y, _, m, w, p, v, h, d, g, b, u, n), x.lineEnd = c, c()
                    }

                    var h, p, v, d, g, b, y, j, O, _, m, w, x = {
                        point: i, lineStart: o, lineEnd: c, polygonStart: function () {
                            n.polygonStart(), x.lineStart = f
                        }, polygonEnd: function () {
                            n.polygonEnd(), x.lineStart = o
                        }
                    };
                    return x
                }
            }(t, n) : function (t) {
                return Object(o.b)({
                    point: function (n, e) {
                        n = t(n, e), this.stream.point(n[0], n[1])
                    }
                })
            }(t)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(5), i = e(152), o = e(79), u = e(154);
        n.a = function () {
            function t(t) {
                var n = t[0], e = t[1];
                return s = null, a.point(n, e), s || (c.point(n, e), s) || (f.point(n, e), s)
            }

            var n, e, a, c, f, s, l = Object(i.a)(),
                h = Object(o.b)().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                p = Object(o.b)().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), v = {
                    point: function (t, n) {
                        s = [t, n]
                    }
                };
            return t.invert = function (t) {
                var n = l.scale(), e = l.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? h : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? p : l).invert(t)
            }, t.stream = function (t) {
                return n && e === t ? n : n = function (t) {
                    var n = t.length;
                    return {
                        point: function (e, r) {
                            for (var i = -1; ++i < n;) t[i].point(e, r)
                        }, sphere: function () {
                            for (var e = -1; ++e < n;) t[e].sphere()
                        }, lineStart: function () {
                            for (var e = -1; ++e < n;) t[e].lineStart()
                        }, lineEnd: function () {
                            for (var e = -1; ++e < n;) t[e].lineEnd()
                        }, polygonStart: function () {
                            for (var e = -1; ++e < n;) t[e].polygonStart()
                        }, polygonEnd: function () {
                            for (var e = -1; ++e < n;) t[e].polygonEnd()
                        }
                    }
                }([l.stream(e = t), h.stream(t), p.stream(t)])
            }, t.precision = function (n) {
                return arguments.length ? (l.precision(n), h.precision(n), p.precision(n), t) : l.precision()
            }, t.scale = function (n) {
                return arguments.length ? (l.scale(n), h.scale(.35 * n), p.scale(n), t.translate(l.translate())) : l.scale()
            }, t.translate = function (n) {
                if (!arguments.length) return l.translate();
                var e = l.scale(), i = +n[0], o = +n[1];
                return a = l.translate(n).clipExtent([[i - .455 * e, o - .238 * e], [i + .455 * e, o + .238 * e]]).stream(v), c = h.translate([i - .307 * e, o + .201 * e]).clipExtent([[i - .425 * e + r.i, o + .12 * e + r.i], [i - .214 * e - r.i, o + .234 * e - r.i]]).stream(v), f = p.translate([i - .205 * e, o + .212 * e]).clipExtent([[i - .214 * e + r.i, o + .166 * e + r.i], [i - .115 * e - r.i, o + .234 * e - r.i]]).stream(v), t
            }, t.fitExtent = Object(u.a)(t), t.fitSize = Object(u.b)(t), t.scale(1070)
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return u
        });
        var r = e(5), i = e(44), o = e(18), u = Object(i.b)(function (t) {
            return Object(r.u)(2 / (1 + t))
        });
        u.invert = Object(i.a)(function (t) {
            return 2 * Object(r.c)(t / 2)
        }), n.b = function () {
            return Object(o.a)(u).scale(124.75).clipAngle(179.999)
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return u
        });
        var r = e(5), i = e(44), o = e(18), u = Object(i.b)(function (t) {
            return (t = Object(r.b)(t)) && t / Object(r.t)(t)
        });
        u.invert = Object(i.a)(function (t) {
            return t
        }), n.b = function () {
            return Object(o.a)(u).scale(79.4188).clipAngle(179.999)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return Object(o.v)((o.l + t) / 2)
        }

        function i(t, n) {
            function e(t, n) {
                c > 0 ? n < -o.l + o.i && (n = -o.l + o.i) : n > o.l - o.i && (n = o.l - o.i);
                var e = c / Object(o.p)(r(n), u);
                return [e * Object(o.t)(u * t), c - e * Object(o.g)(u * t)]
            }

            var i = Object(o.g)(t),
                u = t === n ? Object(o.t)(t) : Object(o.n)(i / Object(o.g)(n)) / Object(o.n)(r(n) / r(t)),
                c = i * Object(o.p)(r(t), u) / u;
            return u ? (e.invert = function (t, n) {
                var e = c - n, r = Object(o.s)(u) * Object(o.u)(t * t + e * e);
                return [Object(o.e)(t, e) / u, 2 * Object(o.d)(Object(o.p)(c / r, 1 / u)) - o.l]
            }, e) : a.c
        }

        n.a = i;
        var o = e(5), u = e(80), a = e(82);
        n.b = function () {
            return Object(u.a)(i).scale(109.5).parallels([30, 30])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            function e(t, n) {
                var e = a - n, r = o * t;
                return [e * Object(i.t)(r), a - e * Object(i.g)(r)]
            }

            var r = Object(i.g)(t), o = t === n ? Object(i.t)(t) : (r - Object(i.g)(n)) / (n - t), a = r / o + t;
            return Object(i.a)(o) < i.i ? u.b : (e.invert = function (t, n) {
                var e = a - n;
                return [Object(i.e)(t, e) / o, a - Object(i.s)(o) * Object(i.u)(t * t + e * e)]
            }, e)
        }

        n.a = r;
        var i = e(5), o = e(80), u = e(155);
        n.b = function () {
            return Object(o.a)(r).scale(131.154).center([0, 13.9389])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(i.g)(n), r = Object(i.g)(t) * e;
            return [e * Object(i.t)(t) / r, Object(i.t)(n) / r]
        }

        n.b = r;
        var i = e(5), o = e(44), u = e(18);
        r.invert = Object(o.a)(i.d), n.a = function () {
            return Object(u.a)(r).scale(144.049).clipAngle(60)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [Object(i.g)(n) * Object(i.t)(t), Object(i.t)(n)]
        }

        n.b = r;
        var i = e(5), o = e(44), u = e(18);
        r.invert = Object(o.a)(i.c), n.a = function () {
            return Object(u.a)(r).scale(249.5).clipAngle(90 + i.i)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object(i.g)(n), r = 1 + Object(i.g)(t) * e;
            return [e * Object(i.t)(t) / r, Object(i.t)(n) / r]
        }

        n.b = r;
        var i = e(5), o = e(44), u = e(18);
        r.invert = Object(o.a)(function (t) {
            return 2 * Object(i.d)(t)
        }), n.a = function () {
            return Object(u.a)(r).scale(250).clipAngle(142)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [Object(i.n)(Object(i.v)((i.l + n) / 2)), -t]
        }

        n.b = r;
        var i = e(5), o = e(82);
        r.invert = function (t, n) {
            return [-n, 2 * Object(i.d)(Object(i.k)(t)) - i.l]
        }, n.a = function () {
            var t = Object(o.b)(r), n = t.center, e = t.rotate;
            return t.center = function (t) {
                return arguments.length ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]])
            }, t.rotate = function (t) {
                return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
            }, e([0, 0, 90]).scale(159.155)
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
        }

        function i() {
            return new r
        }

        var o = Math.PI, u = 2 * o, a = u - 1e-6;
        r.prototype = i.prototype = {
            constructor: r, moveTo: function (t, n) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
            }, closePath: function () {
                null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
            }, lineTo: function (t, n) {
                this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
            }, quadraticCurveTo: function (t, n, e, r) {
                this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
            }, bezierCurveTo: function (t, n, e, r, i, o) {
                this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o)
            }, arcTo: function (t, n, e, r, i) {
                t = +t, n = +n, e = +e, r = +r, i = +i;
                var u = this._x1, a = this._y1, c = e - t, f = r - n, s = u - t, l = a - n, h = s * s + l * l;
                if (i < 0) throw new Error("negative radius: " + i);
                if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n); else if (h > 1e-6) if (Math.abs(l * c - f * s) > 1e-6 && i) {
                    var p = e - u, v = r - a, d = c * c + f * f, g = p * p + v * v, b = Math.sqrt(d), y = Math.sqrt(h),
                        j = i * Math.tan((o - Math.acos((d + h - g) / (2 * b * y))) / 2), O = j / y, _ = j / b;
                    Math.abs(O - 1) > 1e-6 && (this._ += "L" + (t + O * s) + "," + (n + O * l)), this._ += "A" + i + "," + i + ",0,0," + +(l * p > s * v) + "," + (this._x1 = t + _ * c) + "," + (this._y1 = n + _ * f)
                } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n); else ;
            }, arc: function (t, n, e, r, i, c) {
                t = +t, n = +n;
                var f = (e = +e) * Math.cos(r), s = e * Math.sin(r), l = t + f, h = n + s, p = 1 ^ c,
                    v = c ? r - i : i - r;
                if (e < 0) throw new Error("negative radius: " + e);
                null === this._x1 ? this._ += "M" + l + "," + h : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) && (this._ += "L" + l + "," + h), e && (v < 0 && (v = v % u + u), v > a ? this._ += "A" + e + "," + e + ",0,1," + p + "," + (t - f) + "," + (n - s) + "A" + e + "," + e + ",0,1," + p + "," + (this._x1 = l) + "," + (this._y1 = h) : v > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(v >= o) + "," + p + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
            }, rect: function (t, n, e, r) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
            }, toString: function () {
                return this._
            }
        }, n.a = i
    }, function (t, n, e) {
        var r = e(3), i = e(39);
        r(i.prototype, {
            getAllNodes: function () {
                var t = [], n = this.root;
                return n.each ? n.each(function (n) {
                    t.push(n)
                }) : n.eachNode && n.eachNode(function (n) {
                    t.push(n)
                }), t
            }, getAllLinks: function () {
                for (var t, n = [], e = [this.root]; t = e.pop();) {
                    var r = t.children;
                    r && r.forEach(function (r) {
                        n.push({source: t, target: r}), e.push(r)
                    })
                }
                return n
            }
        }), r(i.prototype, {getAllEdges: i.prototype.getAllLinks})
    }, function (t, n, e) {
        var r = e(3), i = e(83), o = e(15);
        r(e(39).prototype, {
            partition: function (t, n) {
                return void 0 === t && (t = []), void 0 === n && (n = []), o(this.rows, t, n)
            }, group: function (t, n) {
                var e = this.partition(t, n);
                return i(e)
            }, groups: function (t, n) {
                return this.group(t, n)
            }
        })
    }, function (t, n, e) {
        var r = e(9), i = e(6), o = Object.prototype.hasOwnProperty;
        t.exports = function (t, n) {
            if (!n || !i(t)) return t;
            var e = {}, u = null;
            return r(t, function (t) {
                u = n(t), o.call(e, u) ? e[u].push(t) : e[u] = [t]
            }), e
        }
    }, function (t, n, e) {
        var r = e(6), i = e(11), o = e(10);
        t.exports = function (t, n) {
            void 0 === n && (n = []);
            var e;
            return i(n) ? e = n : r(n) ? e = function (t, e) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    if (t[i] < e[i]) return -1;
                    if (t[i] > e[i]) return 1
                }
                return 0
            } : o(n) && (e = function (t, e) {
                return t[n] < e[n] ? -1 : t[n] > e[n] ? 1 : 0
            }), t.sort(e)
        }
    }, function (t, n, e) {
        function r(t, n) {
            var e = t.getColumn(n);
            return u(e) && u(e[0]) && (e = o(e)), e
        }

        var i = e(3), o = e(156), u = e(6), a = e(19), c = e(39), f = e(157);
        e(84).STATISTICS_METHODS.forEach(function (t) {
            c.prototype[t] = function (n) {
                return a[t](r(this, n))
            }
        });
        var s = a.quantile;
        i(c.prototype, {
            average: c.prototype.mean, quantile: function (t, n) {
                return s(r(this, t), n)
            }, quantiles: function (t, n) {
                var e = r(this, t);
                return n.map(function (t) {
                    return s(e, t)
                })
            }, quantilesByFraction: function (t, n) {
                return this.quantiles(t, f(n))
            }, range: function (t) {
                return [this.min(t), this.max(t)]
            }, extent: function (t) {
                return this.range(t)
            }
        })
    }, function (t, n, e) {
        var r = e(10), i = e(40);
        (0, e(2).registerConnector)("default", function (t, n) {
            if (r(t) && (t = n.getView(t)), !t) throw new TypeError("Invalid dataView");
            return i(t.rows)
        })
    }, function (t, n) {
        var e = function () {
            var t = {};
            return function (n) {
                return n = n || "g", t[n] ? t[n] += 1 : t[n] = 1, n + t[n]
            }
        }();
        t.exports = e
    }, function (t, n, e) {
        var r = e(10), i = e(358), o = i.dsvFormat, u = i.csvParse, a = i.tsvParse, c = e(2).registerConnector;
        c("dsv", function (t, n) {
            void 0 === n && (n = {});
            var e = n.delimiter || ",";
            if (!r(e)) throw new TypeError("Invalid delimiter: must be a string!");
            return o(e).parse(t)
        }), c("csv", function (t) {
            return u(t)
        }), c("tsv", function (t) {
            return a(t)
        })
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(85);
        e.d(n, "dsvFormat", function () {
            return r.a
        });
        var i = e(359);
        e.d(n, "csvParse", function () {
            return i.c
        }), e.d(n, "csvParseRows", function () {
            return i.d
        }), e.d(n, "csvFormat", function () {
            return i.a
        }), e.d(n, "csvFormatRows", function () {
            return i.b
        });
        var o = e(360);
        e.d(n, "tsvParse", function () {
            return o.c
        }), e.d(n, "tsvParseRows", function () {
            return o.d
        }), e.d(n, "tsvFormat", function () {
            return o.a
        }), e.d(n, "tsvFormatRows", function () {
            return o.b
        })
    }, function (t, n, e) {
        "use strict";
        e.d(n, "c", function () {
            return o
        }), e.d(n, "d", function () {
            return u
        }), e.d(n, "a", function () {
            return a
        }), e.d(n, "b", function () {
            return c
        });
        var r = e(85), i = Object(r.a)(","), o = i.parse, u = i.parseRows, a = i.format, c = i.formatRows
    }, function (t, n, e) {
        "use strict";
        e.d(n, "c", function () {
            return o
        }), e.d(n, "d", function () {
            return u
        }), e.d(n, "a", function () {
            return a
        }), e.d(n, "b", function () {
            return c
        });
        var r = e(85), i = Object(r.a)("\t"), o = i.parse, u = i.parseRows, a = i.format, c = i.formatRows
    }, function (t, n, e) {
        function r(t, n) {
            n.dataType = "geo-graticule";
            var e = i().lines();
            return e.map(function (t, n) {
                return t.index = "" + n, t
            }), n.rows = e, e
        }

        var i = e(0).geoGraticule;
        (0, e(2).registerConnector)("geo-graticule", r), t.exports = r
    }, function (t, n) {
        t.exports = function (t) {
            var n = [];
            return t.replace(r, function (t, r, o) {
                var u = r.toLowerCase();
                for (o = function (t) {
                    var n = t.match(i);
                    return n ? n.map(Number) : []
                }(o), "m" == u && o.length > 2 && (n.push([r].concat(o.splice(0, 2))), u = "l", r = "m" == r ? "l" : "L"); ;) {
                    if (o.length == e[u]) return o.unshift(r), n.push(o);
                    if (o.length < e[u]) throw new Error("malformed path data");
                    n.push([r].concat(o.splice(0, e[u])))
                }
            }), n
        };
        var e = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0}, r = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
            i = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi
    }, function (t, n) {
        t.exports = Array.isArray || function (t) {
            return "[object Array]" == Object.prototype.toString.call(t)
        }
    }, function (t, n) {
        t.exports = function (t) {
            var n = 0, e = 0, r = 0, i = 0;
            return t.map(function (t) {
                var o = (t = t.slice())[0], u = o.toUpperCase();
                if (o != u) switch (t[0] = u, o) {
                    case"a":
                        t[6] += r, t[7] += i;
                        break;
                    case"v":
                        t[1] += i;
                        break;
                    case"h":
                        t[1] += r;
                        break;
                    default:
                        for (var a = 1; a < t.length;) t[a++] += r, t[a++] += i
                }
                switch (u) {
                    case"Z":
                        r = n, i = e;
                        break;
                    case"H":
                        r = t[1];
                        break;
                    case"V":
                        i = t[1];
                        break;
                    case"M":
                        r = n = t[1], i = e = t[2];
                        break;
                    default:
                        r = t[t.length - 2], i = t[t.length - 1]
                }
                return t
            })
        }
    }, function (t, n, e) {
        function r(t, n, e) {
            n = i({}, f, n), e.dataType = a;
            var r = n, u = r.nodes, c = r.edges;
            if (u && !o(u)) throw new TypeError("Invalid nodes: must be a function!");
            if (c && !o(c)) throw new TypeError("Invalid edges: must be a function!");
            return e.rows = e.graph = {nodes: u(t), edges: c(t)}, i(e, e.graph), e.rows
        }

        var i = e(3), o = e(11), u = e(2), a = u.GRAPH, c = u.registerConnector, f = {
            nodes: function (t) {
                return t.nodes
            }, edges: function (t) {
                return t.edges
            }
        };
        c("graph", r), c("diagram", r)
    }, function (t, n, e) {
        function r(t) {
            return t.cx = t.x, t.cy = t.y, t.x = [], t.y = [], t.vertices.forEach(function (n) {
                t.x.push(n.x + t.cx), t.y.push(n.y + t.cy)
            }), t
        }

        function i(t, n, e) {
            e.dataType = l;
            var i = n = o({}, p, n), a = i.width, s = i.height, h = u(t);
            e._HexJSON = h;
            var v = e._GridHexJSON = c(h), d = e.rows = f(h, a, s).map(r);
            return e._gridRows = f(v, a, s).map(r), d
        }

        var o = e(3), u = e(40), a = e(367), c = a.getGridForHexJSON, f = a.renderHexJSON, s = e(2), l = s.HEX,
            h = s.registerConnector, p = {width: 1, height: 1};
        h("hex", i), h("hexjson", i), h("hex-json", i), h("HexJSON", i), t.exports = i
    }, function (t, n, e) {
        !function (t, r) {
            r(n, e(14))
        }(0, function (t, n) {
            "use strict";
            t.renderHexJSON = function (t, e, r) {
                var i = t.layout, o = [], u = 0;
                Object.keys(t.hexes).forEach(function (n) {
                    t.hexes[n].key = n, o.push(t.hexes[n])
                });
                var a = n.max(o, function (t) {
                        return +t.q
                    }), c = n.min(o, function (t) {
                        return +t.q
                    }), f = n.max(o, function (t) {
                        return +t.r
                    }), s = n.min(o, function (t) {
                        return +t.r
                    }), l = a - c + 1, h = f - s + 1,
                    p = (u = "odd-r" === i || "even-r" === i ? n.min([e / ((l + .5) * Math.sqrt(3)), r / (1.5 * (h + 1 / 3))]) : n.min([r / ((h + .5) * Math.sqrt(3)), e / (1.5 * (l + 1 / 3))])) * Math.sqrt(3),
                    v = function (t, n, e) {
                        var r = [];
                        switch (t) {
                            case"odd-r":
                            case"even-r":
                                r.push({x: 0, y: 0 - e}), r.push({x: 0 + .5 * n, y: 0 - .5 * e}), r.push({
                                    x: 0 + .5 * n,
                                    y: 0 + .5 * e
                                }), r.push({x: 0, y: 0 + e}), r.push({
                                    x: 0 - .5 * n,
                                    y: 0 + .5 * e
                                }), r.push({x: 0 - .5 * n, y: 0 - .5 * e});
                                break;
                            case"odd-q":
                            case"even-q":
                                r.push({x: 0 - e, y: 0}), r.push({x: 0 - .5 * e, y: 0 - .5 * n}), r.push({
                                    x: 0 + .5 * e,
                                    y: 0 - .5 * n
                                }), r.push({x: 0 + e, y: 0}), r.push({
                                    x: 0 + .5 * e,
                                    y: 0 + .5 * n
                                }), r.push({x: 0 - .5 * e, y: 0 + .5 * n})
                        }
                        return r
                    }(i, p, u), d = function (t) {
                        var n = "";
                        return t.forEach(function (t) {
                            n += t.x + "," + t.y + " "
                        }), n.substring(0, n.length - 1)
                    }(v);
                return o.forEach(function (t) {
                    t.qc = t.q - c, t.rc = f - t.r, t.x = function (t, n, e, r) {
                        var i = 0, o = 0;
                        switch (n) {
                            case"odd-r":
                                o = t.rc % 2 == 1 ? e : e / 2, i = t.qc * e + o;
                                break;
                            case"even-r":
                                o = t.rc % 2 == 0 ? e : e / 2, i = t.qc * e + o;
                                break;
                            case"odd-q":
                            case"even-q":
                                i = t.qc * r * 1.5 + r
                        }
                        return i
                    }(t, i, p, u), t.y = function (t, n, e, r) {
                        var i = 0, o = 0;
                        switch (n) {
                            case"odd-r":
                            case"even-r":
                                i = t.rc * r * 1.5 + r;
                                break;
                            case"odd-q":
                                o = t.qc % 2 == 1 ? e : e / 2, i = t.rc * e + o;
                                break;
                            case"even-q":
                                o = t.qc % 2 == 0 ? e : e / 2, i = t.rc * e + o
                        }
                        return i
                    }(t, i, p, u), t.vertices = v, t.points = d
                }), o
            }, t.getGridForHexJSON = function (t) {
                var e = {};
                e.layout = t.layout, e.hexes = {};
                var r = [];
                Object.keys(t.hexes).forEach(function (n) {
                    r.push(t.hexes[n])
                });
                var i, o, u, a = n.max(r, function (t) {
                    return +t.q
                }), c = n.min(r, function (t) {
                    return +t.q
                }), f = n.max(r, function (t) {
                    return +t.r
                }), s = n.min(r, function (t) {
                    return +t.r
                });
                for (i = c; i <= a; i++) for (o = s; o <= f; o++) u = "Q" + i + "R" + o, e.hexes[u] = {q: i, r: o};
                return e
            }, Object.defineProperty(t, "__esModule", {value: !0})
        })
    }, function (t, n, e) {
        function r(t, n, e) {
            e.dataType = a;
            var r = n && n.children ? n.children : null;
            if (r && !i(r)) throw new TypeError("Invalid children: must be a function!");
            return n.pureData ? e.rows = e.root = t : e.rows = e.root = o(t, r), t
        }

        var i = e(11), o = e(34).hierarchy, u = e(2), a = u.HIERARCHY, c = u.registerConnector;
        c("hierarchy", r), c("tree", r)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return t.parent === n.parent ? 1 : 2
        }

        function i(t, n) {
            return t + n.x
        }

        function o(t, n) {
            return Math.max(t, n.y)
        }

        n.a = function () {
            function t(t) {
                var r, c = 0;
                t.eachAfter(function (t) {
                    var e = t.children;
                    e ? (t.x = function (t) {
                        return t.reduce(i, 0) / t.length
                    }(e), t.y = function (t) {
                        return 1 + t.reduce(o, 0)
                    }(e)) : (t.x = r ? c += n(t, r) : 0, t.y = 0, r = t)
                });
                var f = function (t) {
                    for (var n; n = t.children;) t = n[0];
                    return t
                }(t), s = function (t) {
                    for (var n; n = t.children;) t = n[n.length - 1];
                    return t
                }(t), l = f.x - n(f, s) / 2, h = s.x + n(s, f) / 2;
                return t.eachAfter(a ? function (n) {
                    n.x = (n.x - t.x) * e, n.y = (t.y - n.y) * u
                } : function (n) {
                    n.x = (n.x - l) / (h - l) * e, n.y = (1 - (t.y ? n.y / t.y : 1)) * u
                })
            }

            var n = r, e = 1, u = 1, a = !1;
            return t.separation = function (e) {
                return arguments.length ? (n = e, t) : n
            }, t.size = function (n) {
                return arguments.length ? (a = !1, e = +n[0], u = +n[1], t) : a ? null : [e, u]
            }, t.nodeSize = function (n) {
                return arguments.length ? (a = !0, e = +n[0], u = +n[1], t) : a ? [e, u] : null
            }, t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            var n = 0, e = t.children, r = e && e.length;
            if (r) for (; --r >= 0;) n += e[r].value; else n = 1;
            t.value = n
        }

        n.a = function () {
            return this.eachAfter(r)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            var n, e, r, i, o = this, u = [o];
            do {
                for (n = u.reverse(), u = []; o = n.pop();) if (t(o), e = o.children) for (r = 0, i = e.length; r < i; ++r) u.push(e[r])
            } while (u.length);
            return this
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            for (var n, e, r = this, i = [r]; r = i.pop();) if (t(r), n = r.children) for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
            return this
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            for (var n, e, r, i = this, o = [i], u = []; i = o.pop();) if (u.push(i), n = i.children) for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
            for (; i = u.pop();) t(i);
            return this
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return this.eachAfter(function (n) {
                for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                n.value = e
            })
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return this.eachBefore(function (n) {
                n.children && n.children.sort(t)
            })
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            for (var n = this, e = function (t, n) {
                if (t === n) return t;
                var e = t.ancestors(), r = n.ancestors(), i = null;
                for (t = e.pop(), n = r.pop(); t === n;) i = t, t = e.pop(), n = r.pop();
                return i
            }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
            for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
            return r
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
            for (var t = this, n = [t]; t = t.parent;) n.push(t);
            return n
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
            var t = [];
            return this.each(function (n) {
                t.push(n)
            }), t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
            var t = [];
            return this.eachBefore(function (n) {
                n.children || t.push(n)
            }), t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
            var t = this, n = [];
            return t.each(function (e) {
                e !== t && n.push({source: e.parent, target: e})
            }), n
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return Math.sqrt(t.value)
        }

        function i(t) {
            return function (n) {
                n.children || (n.r = Math.max(0, +t(n) || 0))
            }
        }

        function o(t, n) {
            return function (e) {
                if (r = e.children) {
                    var r, i, o, u = r.length, c = t(e) * n || 0;
                    if (c) for (i = 0; i < u; ++i) r[i].r += c;
                    if (o = Object(a.b)(r), c) for (i = 0; i < u; ++i) r[i].r -= c;
                    e.r = o + c
                }
            }
        }

        function u(t) {
            return function (n) {
                var e = n.parent;
                n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
            }
        }

        var a = e(160), c = e(87), f = e(162);
        n.a = function () {
            function t(t) {
                return t.x = e / 2, t.y = a / 2, n ? t.eachBefore(i(n)).eachAfter(o(s, .5)).eachBefore(u(1)) : t.eachBefore(i(r)).eachAfter(o(f.a, 1)).eachAfter(o(s, t.r / Math.min(e, a))).eachBefore(u(Math.min(e, a) / (2 * t.r))), t
            }

            var n = null, e = 1, a = 1, s = f.a;
            return t.radius = function (e) {
                return arguments.length ? (n = Object(c.a)(e), t) : n
            }, t.size = function (n) {
                return arguments.length ? (e = +n[0], a = +n[1], t) : [e, a]
            }, t.padding = function (n) {
                return arguments.length ? (s = "function" == typeof n ? n : Object(f.b)(+n), t) : s
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return r
        }), n.a = function (t) {
            for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
            return t
        };
        var r = Array.prototype.slice
    }, function (t, n, e) {
        "use strict";
        var r = e(163), i = e(45);
        n.a = function () {
            function t(t) {
                var a = t.height + 1;
                return t.x0 = t.y0 = o, t.x1 = n, t.y1 = e / a, t.eachBefore(function (t, n) {
                    return function (e) {
                        e.children && Object(i.a)(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);
                        var r = e.x0, u = e.y0, a = e.x1 - o, c = e.y1 - o;
                        a < r && (r = a = (r + a) / 2), c < u && (u = c = (u + c) / 2), e.x0 = r, e.y0 = u, e.x1 = a, e.y1 = c
                    }
                }(e, a)), u && t.eachBefore(r.a), t
            }

            var n = 1, e = 1, o = 0, u = !1;
            return t.round = function (n) {
                return arguments.length ? (u = !!n, t) : u
            }, t.size = function (r) {
                return arguments.length ? (n = +r[0], e = +r[1], t) : [n, e]
            }, t.padding = function (n) {
                return arguments.length ? (o = +n, t) : o
            }, t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t.id
        }

        function i(t) {
            return t.parentId
        }

        var o = e(87), u = e(86), a = "$", c = {depth: -1}, f = {};
        n.a = function () {
            function t(t) {
                var r, i, o, s, l, h, p, v = t.length, d = new Array(v), g = {};
                for (i = 0; i < v; ++i) r = t[i], l = d[i] = new u.a(r), null != (h = n(r, i, t)) && (h += "") && (g[p = a + (l.id = h)] = p in g ? f : l);
                for (i = 0; i < v; ++i) if (l = d[i], null != (h = e(t[i], i, t)) && (h += "")) {
                    if (!(s = g[a + h])) throw new Error("missing: " + h);
                    if (s === f) throw new Error("ambiguous: " + h);
                    s.children ? s.children.push(l) : s.children = [l], l.parent = s
                } else {
                    if (o) throw new Error("multiple roots");
                    o = l
                }
                if (!o) throw new Error("no root");
                if (o.parent = c, o.eachBefore(function (t) {
                        t.depth = t.parent.depth + 1, --v
                    }).eachBefore(u.b), o.parent = null, v > 0) throw new Error("cycle");
                return o
            }

            var n = r, e = i;
            return t.id = function (e) {
                return arguments.length ? (n = Object(o.b)(e), t) : n
            }, t.parentId = function (n) {
                return arguments.length ? (e = Object(o.b)(n), t) : e
            }, t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return t.parent === n.parent ? 1 : 2
        }

        function i(t) {
            var n = t.children;
            return n ? n[0] : t.t
        }

        function o(t) {
            var n = t.children;
            return n ? n[n.length - 1] : t.t
        }

        function u(t, n, e) {
            var r = e / (n.i - t.i);
            n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
        }

        function a(t, n, e) {
            return t.a.parent === n.parent ? t.a : e
        }

        function c(t, n) {
            this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
        }

        var f = e(86);
        c.prototype = Object.create(f.a.prototype), n.a = function () {
            function t(t) {
                var r = function (t) {
                    for (var n, e, r, i, o, u = new c(t, 0), a = [u]; n = a.pop();) if (r = n._.children) for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) a.push(e = n.children[i] = new c(r[i], i)), e.parent = n;
                    return (u.parent = new c(null, 0)).children = [u], u
                }(t);
                if (r.eachAfter(n), r.parent.m = -r.z, r.eachBefore(e), p) t.eachBefore(f); else {
                    var i = t, o = t, u = t;
                    t.eachBefore(function (t) {
                        t.x < i.x && (i = t), t.x > o.x && (o = t), t.depth > u.depth && (u = t)
                    });
                    var a = i === o ? 1 : s(i, o) / 2, v = a - i.x, d = l / (o.x + a + v), g = h / (u.depth || 1);
                    t.eachBefore(function (t) {
                        t.x = (t.x + v) * d, t.y = t.depth * g
                    })
                }
                return t
            }

            function n(t) {
                var n = t.children, e = t.parent.children, r = t.i ? e[t.i - 1] : null;
                if (n) {
                    !function (t) {
                        for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) (n = i[o]).z += e, n.m += e, e += n.s + (r += n.c)
                    }(t);
                    var c = (n[0].z + n[n.length - 1].z) / 2;
                    r ? (t.z = r.z + s(t._, r._), t.m = t.z - c) : t.z = c
                } else r && (t.z = r.z + s(t._, r._));
                t.parent.A = function (t, n, e) {
                    if (n) {
                        for (var r, c = t, f = t, l = n, h = c.parent.children[0], p = c.m, v = f.m, d = l.m, g = h.m; l = o(l), c = i(c), l && c;) h = i(h), (f = o(f)).a = t, (r = l.z + d - c.z - p + s(l._, c._)) > 0 && (u(a(l, t, e), t, r), p += r, v += r), d += l.m, p += c.m, g += h.m, v += f.m;
                        l && !o(f) && (f.t = l, f.m += d - v), c && !i(h) && (h.t = c, h.m += p - g, e = t)
                    }
                    return e
                }(t, r, t.parent.A || e[0])
            }

            function e(t) {
                t._.x = t.z + t.parent.m, t.m += t.parent.m
            }

            function f(t) {
                t.x *= l, t.y = t.depth * h
            }

            var s = r, l = 1, h = 1, p = null;
            return t.separation = function (n) {
                return arguments.length ? (s = n, t) : s
            }, t.size = function (n) {
                return arguments.length ? (p = !1, l = +n[0], h = +n[1], t) : p ? null : [l, h]
            }, t.nodeSize = function (n) {
                return arguments.length ? (p = !0, l = +n[0], h = +n[1], t) : p ? [l, h] : null
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(163), i = e(88), o = e(87), u = e(162);
        n.a = function () {
            function t(t) {
                return t.x0 = t.y0 = 0, t.x1 = c, t.y1 = f, t.eachBefore(n), s = [0], a && t.eachBefore(r.a), t
            }

            function n(t) {
                var n = s[t.depth], r = t.x0 + n, i = t.y0 + n, o = t.x1 - n, u = t.y1 - n;
                o < r && (r = o = (r + o) / 2), u < i && (i = u = (i + u) / 2), t.x0 = r, t.y0 = i, t.x1 = o, t.y1 = u, t.children && (n = s[t.depth + 1] = l(t) / 2, r += d(t) - n, i += h(t) - n, o -= p(t) - n, u -= v(t) - n, o < r && (r = o = (r + o) / 2), u < i && (i = u = (i + u) / 2), e(t, r, i, o, u))
            }

            var e = i.a, a = !1, c = 1, f = 1, s = [0], l = u.a, h = u.a, p = u.a, v = u.a, d = u.a;
            return t.round = function (n) {
                return arguments.length ? (a = !!n, t) : a
            }, t.size = function (n) {
                return arguments.length ? (c = +n[0], f = +n[1], t) : [c, f]
            }, t.tile = function (n) {
                return arguments.length ? (e = Object(o.b)(n), t) : e
            }, t.padding = function (n) {
                return arguments.length ? t.paddingInner(n).paddingOuter(n) : t.paddingInner()
            }, t.paddingInner = function (n) {
                return arguments.length ? (l = "function" == typeof n ? n : Object(u.b)(+n), t) : l
            }, t.paddingOuter = function (n) {
                return arguments.length ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : t.paddingTop()
            }, t.paddingTop = function (n) {
                return arguments.length ? (h = "function" == typeof n ? n : Object(u.b)(+n), t) : h
            }, t.paddingRight = function (n) {
                return arguments.length ? (p = "function" == typeof n ? n : Object(u.b)(+n), t) : p
            }, t.paddingBottom = function (n) {
                return arguments.length ? (v = "function" == typeof n ? n : Object(u.b)(+n), t) : v
            }, t.paddingLeft = function (n) {
                return arguments.length ? (d = "function" == typeof n ? n : Object(u.b)(+n), t) : d
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n, e, r, i) {
            function o(t, n, e, r, i, u, a) {
                if (t >= n - 1) {
                    var f = c[t];
                    return f.x0 = r, f.y0 = i, f.x1 = u, void(f.y1 = a)
                }
                for (var l = s[t], h = e / 2 + l, p = t + 1, v = n - 1; p < v;) {
                    var d = p + v >>> 1;
                    s[d] < h ? p = d + 1 : v = d
                }
                h - s[p - 1] < s[p] - h && t + 1 < p && --p;
                var g = s[p] - l, b = e - g;
                if (u - r > a - i) {
                    var y = (r * b + u * g) / e;
                    o(t, p, g, r, i, y, a), o(p, n, b, y, i, u, a)
                } else {
                    var j = (i * b + a * g) / e;
                    o(t, p, g, r, i, u, j), o(p, n, b, r, j, u, a)
                }
            }

            var u, a, c = t.children, f = c.length, s = new Array(f + 1);
            for (s[0] = a = u = 0; u < f; ++u) s[u + 1] = a += c[u].value;
            o(0, f, t.value, n, e, r, i)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(45), i = e(55);
        n.a = function (t, n, e, o, u) {
            (1 & t.depth ? i.a : r.a)(t, n, e, o, u)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(45), i = e(55), o = e(88);
        n.a = function t(n) {
            function e(t, e, u, a, c) {
                if ((f = t._squarify) && f.ratio === n) for (var f, s, l, h, p, v = -1, d = f.length, g = t.value; ++v < d;) {
                    for (l = (s = f[v]).children, h = s.value = 0, p = l.length; h < p; ++h) s.value += l[h].value;
                    s.dice ? Object(r.a)(s, e, u, a, u += (c - u) * s.value / g) : Object(i.a)(s, e, u, e += (a - e) * s.value / g, c), g -= s.value
                } else t._squarify = f = Object(o.c)(n, t, e, u, a, c), f.ratio = n
            }

            return e.ratio = function (n) {
                return t((n = +n) > 1 ? n : 1)
            }, e
        }(o.b)
    }, function (t, n, e) {
        function r(t, n, e) {
            var r = n.object;
            if (!i(r)) throw new TypeError("Invalid object: must be a string!");
            var a = o(t, t.objects[r]);
            return u(a, n, e)
        }

        var i = e(10), o = e(391).feature, u = e(158), a = e(2).registerConnector;
        a("topojson", r), a("TopoJSON", r)
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(164);
        e.d(n, "bbox", function () {
            return r.a
        });
        var i = e(90);
        e.d(n, "feature", function () {
            return i.a
        });
        var o = e(393);
        e.d(n, "mesh", function () {
            return o.a
        }), e.d(n, "meshArcs", function () {
            return o.b
        });
        var u = e(394);
        e.d(n, "merge", function () {
            return u.a
        }), e.d(n, "mergeArcs", function () {
            return u.b
        });
        var a = e(395);
        e.d(n, "neighbors", function () {
            return a.a
        });
        var c = e(397);
        e.d(n, "quantize", function () {
            return c.a
        });
        var f = e(89);
        e.d(n, "transform", function () {
            return f.a
        });
        var s = e(167);
        e.d(n, "untransform", function () {
            return s.a
        })
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            for (var e, r = t.length, i = r - n; i < --r;) e = t[i], t[i++] = t[r], t[r] = e
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            var r, i, u;
            if (arguments.length > 1) r = function (t, n, e) {
                function r(t) {
                    var n = t < 0 ? ~t : t;
                    (f[n] || (f[n] = [])).push({i: t, g: a})
                }

                function i(t) {
                    t.forEach(r)
                }

                function o(t) {
                    t.forEach(i)
                }

                function u(t) {
                    switch (a = t, t.type) {
                        case"GeometryCollection":
                            t.geometries.forEach(u);
                            break;
                        case"LineString":
                            i(t.arcs);
                            break;
                        case"MultiLineString":
                        case"Polygon":
                            o(t.arcs);
                            break;
                        case"MultiPolygon":
                            !function (t) {
                                t.forEach(o)
                            }(t.arcs)
                    }
                }

                var a, c = [], f = [];
                return u(n), f.forEach(null == e ? function (t) {
                    c.push(t[0].i)
                } : function (t) {
                    e(t[0].g, t[t.length - 1].g) && c.push(t[0].i)
                }), c
            }(0, n, e); else for (i = 0, r = new Array(u = t.arcs.length); i < u; ++i) r[i] = i;
            return {type: "MultiLineString", arcs: Object(o.a)(t, r)}
        }

        n.b = r;
        var i = e(90), o = e(166);
        n.a = function (t) {
            return Object(i.b)(t, r.apply(this, arguments))
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            function e(t) {
                switch (t.type) {
                    case"GeometryCollection":
                        t.geometries.forEach(e);
                        break;
                    case"Polygon":
                        r(t.arcs);
                        break;
                    case"MultiPolygon":
                        t.arcs.forEach(r)
                }
            }

            function r(t) {
                t.forEach(function (n) {
                    n.forEach(function (n) {
                        (a[n = n < 0 ? ~n : n] || (a[n] = [])).push(t)
                    })
                }), c.push(t)
            }

            function u(n) {
                return function (t) {
                    for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[0] * i[1] - n[1] * i[0];
                    return Math.abs(o)
                }(Object(i.b)(t, {type: "Polygon", arcs: [n]}).coordinates[0])
            }

            var a = {}, c = [], f = [];
            return n.forEach(e), c.forEach(function (t) {
                if (!t._) {
                    var n = [], e = [t];
                    for (t._ = 1, f.push(n); t = e.pop();) n.push(t), t.forEach(function (t) {
                        t.forEach(function (t) {
                            a[t < 0 ? ~t : t].forEach(function (t) {
                                t._ || (t._ = 1, e.push(t))
                            })
                        })
                    })
                }
            }), c.forEach(function (t) {
                delete t._
            }), {
                type: "MultiPolygon", arcs: f.map(function (n) {
                    var e, r = [];
                    if (n.forEach(function (t) {
                            t.forEach(function (t) {
                                t.forEach(function (t) {
                                    a[t < 0 ? ~t : t].length < 2 && r.push(t)
                                })
                            })
                        }), r = Object(o.a)(t, r), (e = r.length) > 1) for (var i, c, f = 1, s = u(r[0]); f < e; ++f) (i = u(r[f])) > s && (c = r[0], r[0] = r[f], r[f] = c, s = i);
                    return r
                })
            }
        }

        n.b = r;
        var i = e(90), o = e(166);
        n.a = function (t) {
            return Object(i.b)(t, r.apply(this, arguments))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(396);
        n.a = function (t) {
            function n(t, n) {
                t.forEach(function (t) {
                    t < 0 && (t = ~t);
                    var e = o[t];
                    e ? e.push(n) : o[t] = [n]
                })
            }

            function e(t, e) {
                t.forEach(function (t) {
                    n(t, e)
                })
            }

            function i(t, n) {
                "GeometryCollection" === t.type ? t.geometries.forEach(function (t) {
                    i(t, n)
                }) : t.type in a && a[t.type](t.arcs, n)
            }

            var o = {}, u = t.map(function () {
                return []
            }), a = {
                LineString: n, MultiLineString: e, Polygon: e, MultiPolygon: function (t, n) {
                    t.forEach(function (t) {
                        e(t, n)
                    })
                }
            };
            t.forEach(i);
            for (var c in o) for (var f = o[c], s = f.length, l = 0; l < s; ++l) for (var h = l + 1; h < s; ++h) {
                var p, v = f[l], d = f[h];
                (p = u[v])[c = Object(r.a)(p, d)] !== d && p.splice(c, 0, d), (p = u[d])[c = Object(r.a)(p, v)] !== v && p.splice(c, 0, v)
            }
            return u
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            for (var e = 0, r = t.length; e < r;) {
                var i = e + r >>> 1;
                t[i] < n ? e = i + 1 : r = i
            }
            return e
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(164), i = e(167);
        n.a = function (t, n) {
            function e(t) {
                return p(t)
            }

            function o(t) {
                var n;
                switch (t.type) {
                    case"GeometryCollection":
                        n = {type: "GeometryCollection", geometries: t.geometries.map(o)};
                        break;
                    case"Point":
                        n = {type: "Point", coordinates: e(t.coordinates)};
                        break;
                    case"MultiPoint":
                        n = {type: "MultiPoint", coordinates: t.coordinates.map(e)};
                        break;
                    default:
                        return t
                }
                return null != t.id && (n.id = t.id), null != t.bbox && (n.bbox = t.bbox), null != t.properties && (n.properties = t.properties), n
            }

            if (t.transform) throw new Error("already quantized");
            if (n && n.scale) l = t.bbox; else {
                if (!((u = Math.floor(n)) >= 2)) throw new Error("n must be â‰¥2");
                var u, a = (l = t.bbox || Object(r.a)(t))[0], c = l[1], f = l[2], s = l[3];
                n = {scale: [f - a ? (f - a) / (u - 1) : 1, s - c ? (s - c) / (u - 1) : 1], translate: [a, c]}
            }
            var l, h, p = Object(i.a)(n), v = t.objects, d = {};
            for (h in v) d[h] = o(v[h]);
            return {
                type: "Topology", bbox: l, transform: n, objects: d, arcs: t.arcs.map(function (t) {
                    var n, e = 0, r = 1, i = t.length, o = new Array(i);
                    for (o[0] = p(t[0], 0); ++e < i;) ((n = p(t[e], e))[0] || n[1]) && (o[r++] = n);
                    return 1 === r && (o[r++] = [0, 0]), o.length = r, o
                })
            }
        }
    }, function (t, n, e) {
        (0, e(2).registerTransform)("default", function (t) {
            return t
        })
    }, function (t, n, e) {
        (0, e(2).registerTransform)("filter", function (t, n) {
            void 0 === n && (n = {}), t.rows = t.rows.filter(n.callback || function (t) {
                return !!t
            })
        })
    }, function (t, n, e) {
        var r = e(3), i = e(401), o = e(32), u = e(2).registerTransform, a = e(7).getFields,
            c = {fields: [], key: "key", retains: [], value: "value"};
        u("fold", function (t, n) {
            var e = t.getColumnNames();
            n = r({}, c, n);
            var u = a(n);
            0 === u.length && (console.warn("warning: option fields is not specified, will fold all columns."), u = e);
            var f = n.key, s = n.value, l = n.retains;
            0 === l.length && (l = i(e, u));
            var h = [];
            t.rows.forEach(function (t) {
                u.forEach(function (n) {
                    var e = o(t, l);
                    e[f] = n, e[s] = t[n], h.push(e)
                })
            }), t.rows = h
        })
    }, function (t, n, e) {
        var r = e(402), i = e(168);
        t.exports = function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return r(t, function (t) {
                return !i(n, t)
            })
        }
    }, function (t, n, e) {
        var r = e(9), i = e(91);
        t.exports = function (t, n) {
            if (!i(t)) return t;
            var e = [];
            return r(t, function (t, r) {
                n(t, r) && e.push(t)
            }), e
        }
    }, function (t, n, e) {
        (0, e(2).registerTransform)("map", function (t, n) {
            void 0 === n && (n = {}), t.rows = t.rows.map(n.callback || function (t) {
                return t
            })
        })
    }, function (t, n, e) {
        function r(t, n) {
            void 0 === n && (n = {}), n = i({}, c, n), t.rows = o(u(t.rows, n.groupBy, n.orderBy))
        }

        var i = e(3), o = e(83), u = e(15), a = e(2).registerTransform, c = {groupBy: [], orderBy: []};
        a("partition", function (t, n) {
            void 0 === n && (n = {}), n = i({}, c, n), t.rows = u(t.rows, n.groupBy, n.orderBy)
        }), a("group", r), a("groups", r)
    }, function (t, n, e) {
        var r = e(3), i = e(9), o = e(6), u = e(10), a = e(19).sum, c = e(15), f = e(2).registerTransform,
            s = e(7).getField, l = {groupBy: [], as: "_percent"};
        f("percent", function (t, n) {
            void 0 === n && (n = {}), n = r({}, l, n);
            var e = s(n), f = n.dimension, h = n.groupBy, p = n.as;
            if (!u(f)) throw new TypeError("Invalid dimension: must be a string!");
            if (o(p) && (console.warn("Invalid as: must be a string, will use the first element of the array specified."), p = p[0]), !u(p)) throw new TypeError("Invalid as: must be a string!");
            var v = t.rows, d = [], g = c(v, h);
            i(g, function (t) {
                var n = a(t.map(function (t) {
                    return t[e]
                }));
                0 === n && console.warn("Invalid data: total sum of field " + e + " is 0!");
                var r = c(t, [f]);
                i(r, function (t) {
                    var r = a(t.map(function (t) {
                        return t[e]
                    })), i = t[0], o = i[f];
                    i[e] = r, i[f] = o, i[p] = 0 === n ? 0 : r / n, d.push(i)
                })
            }), t.rows = d
        })
    }, function (t, n, e) {
        var r = e(32), i = e(2).registerTransform, o = e(7).getFields;
        i("pick", function (t, n) {
            void 0 === n && (n = {});
            var e = o(n, t.getColumnNames());
            t.rows = t.rows.map(function (t) {
                return r(t, e)
            })
        })
    }, function (t, n, e) {
        var r = e(3), i = e(9), o = e(6), u = e(10), a = e(15), c = e(2).registerTransform, f = e(7).getField,
            s = {groupBy: [], as: "_proportion"};
        c("proportion", function (t, n) {
            void 0 === n && (n = {}), n = r({}, s, n);
            var e = f(n), c = n.dimension, l = n.groupBy, h = n.as;
            if (!u(c)) throw new TypeError("Invalid dimension: must be a string!");
            if (o(h) && (console.warn("Invalid as: must be a string, will use the first element of the array specified."), h = h[0]), !u(h)) throw new TypeError("Invalid as: must be a string!");
            var p = t.rows, v = [], d = a(p, l);
            i(d, function (t) {
                var n = t.length, r = a(t, [c]);
                i(r, function (t) {
                    var r = t.length, i = t[0], o = i[c];
                    i[e] = r, i[c] = o, i[h] = r / n, v.push(i)
                })
            }), t.rows = v
        })
    }, function (t, n, e) {
        function r(t, n) {
            void 0 === n && (n = {});
            var e = n.map || {}, r = {};
            o(e) && i(e, function (t, n) {
                u(t) && u(n) && (r[n] = t)
            }), t.rows.forEach(function (t) {
                i(e, function (n, e) {
                    var r = t[e];
                    delete t[e], t[n] = r
                })
            })
        }

        var i = e(9), o = e(54), u = e(10), a = e(2).registerTransform;
        a("rename", r), a("rename-fields", r)
    }, function (t, n, e) {
        (0, e(2).registerTransform)("reverse", function (t) {
            t.rows.reverse()
        })
    }, function (t, n, e) {
        (0, e(2).registerTransform)("sort", function (t, n) {
            void 0 === n && (n = {});
            var e = t.getColumnName(0);
            t.rows.sort(n.callback || function (t, n) {
                return t[e] - n[e]
            })
        })
    }, function (t, n, e) {
        function r(t, n) {
            void 0 === n && (n = {});
            var e = a(n, [t.getColumnName(0)]);
            if (!i(e)) throw new TypeError("Invalid fields: must be an array with strings!");
            t.rows = o(t.rows, e);
            var r = n.order;
            if (r && -1 === c.indexOf(r)) throw new TypeError("Invalid order: " + r + " must be one of " + c.join(", "));
            "DESC" === r && t.rows.reverse()
        }

        var i = e(6), o = e(412), u = e(2).registerTransform, a = e(7).getFields, c = ["ASC", "DESC"];
        u("sort-by", r), u("sortBy", r)
    }, function (t, n, e) {
        var r = e(10), i = e(11), o = e(6);
        t.exports = function (t, n) {
            var e = void 0;
            if (i(n)) e = function (t, e) {
                return n(t) - n(e)
            }; else {
                var u = [];
                r(n) ? u.push(n) : o(n) && (u = n), e = function (t, n) {
                    for (var e = 0; e < u.length; e += 1) {
                        var r = u[e];
                        if (t[r] > n[r]) return 1;
                        if (t[r] < n[r]) return -1
                    }
                    return 0
                }
            }
            return t.sort(e), t
        }
    }, function (t, n, e) {
        var r = e(2).registerTransform, i = e(7).getFields;
        r("subset", function (t, n) {
            void 0 === n && (n = {});
            var e = n.startRowIndex || 0, r = n.endRowIndex || t.rows.length - 1, o = i(n, t.getColumnNames());
            t.rows = t.getSubset(e, r, o)
        })
    }, function (t, n, e) {
        function r(t, n) {
            var e = t.map(function (t) {
                return t
            });
            return n.forEach(function (t) {
                var n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }), e
        }

        function i(t, n) {
            void 0 === n && (n = {}), n = o({}, f, n);
            var e = t.rows, i = n.groupBy, c = n.orderBy, s = a(e, i, c), l = 0, h = [];
            u(s, function (t) {
                t.length > l && (l = t.length, h = t)
            });
            var p = [], v = {};
            if (h.forEach(function (t) {
                    var n = c.map(function (n) {
                        return t[n]
                    }).join("-");
                    p.push(n), v[n] = t
                }), "order" === n.fillBy) {
                var d = h[0], g = [], b = {};
                e.forEach(function (t) {
                    var n = c.map(function (n) {
                        return t[n]
                    }).join("-");
                    -1 === g.indexOf(n) && (g.push(n), b[n] = t)
                });
                r(g, p).forEach(function (t) {
                    var n = {};
                    i.forEach(function (t) {
                        n[t] = d[t]
                    }), c.forEach(function (e) {
                        n[e] = b[t][e]
                    }), e.push(n), h.push(n), p.push(t), v[t] = n
                }), l = h.length
            }
            u(s, function (t) {
                if (t !== h && t.length < l) {
                    var n = t[0], o = [];
                    t.forEach(function (t) {
                        o.push(c.map(function (n) {
                            return t[n]
                        }).join("-"))
                    });
                    r(p, o).some(function (r, o) {
                        if (o >= l - t.length) return !0;
                        var u = v[r], a = {};
                        return i.forEach(function (t) {
                            a[t] = n[t]
                        }), c.forEach(function (t) {
                            a[t] = u[t]
                        }), e.push(a), !1
                    })
                }
            })
        }

        var o = e(3), u = e(9), a = e(15), c = e(2).registerTransform, f = {fillBy: "group", groupBy: [], orderBy: []};
        c("fill-rows", i), c("fillRows", i)
    }, function (t, n, e) {
        function r(t) {
            return t.filter(function (t) {
                return !c(t)
            })
        }

        var i = e(3), o = e(9), u = e(416), a = e(11), c = e(417), f = e(10), s = e(19), l = e(15),
            h = e(2).registerTransform, p = e(7).getField, v = {groupBy: []}, d = ["mean", "median", "max", "min"],
            g = {};
        d.forEach(function (t) {
            g[t] = function (n, e) {
                return s[t](e)
            }
        }), g.value = function (t, n, e) {
            return e
        }, h("impute", function (t, n) {
            void 0 === n && (n = {}), n = i({}, v, n);
            var e = p(n), s = n.method;
            if (!s) throw new TypeError("Invalid method!");
            if ("value" === s && !u(n, "value")) throw new TypeError("Invalid value: it is nil.");
            var h = r(t.getColumn(e)), b = l(t.rows, n.groupBy);
            o(b, function (t) {
                var i = r(t.map(function (t) {
                    return t[e]
                }));
                0 === i.length && (i = h), t.forEach(function (r) {
                    if (c(r[e])) if (a(s)) r[e] = s(r, i, n.value, t); else {
                        if (!f(s)) throw new TypeError("Invalid method: must be a function or one of " + d.join(", "));
                        r[e] = g[s](r, i, n.value)
                    }
                })
            })
        })
    }, function (t, n) {
        t.exports = function (t, n) {
            return t.hasOwnProperty(n)
        }
    }, function (t, n) {
        t.exports = function (t) {
            return void 0 === t
        }
    }, function (t, n, e) {
        function r(t, n) {
            n = i({}, g, n);
            var e = d(n);
            if (!a(e)) throw new TypeError("Invalid fields: it must be an array with one or more strings!");
            var r = n.as || [];
            c(r) && (r = [r]);
            var o = n.operations;
            c(o) && (o = [o]);
            var f = [b];
            if (a(o) && o.length || (console.warn('operations is not defined, will use [ "count" ] directly.'), r = o = f), 1 !== o.length || o[0] !== b) {
                if (o.length !== e.length) throw new TypeError("Invalid operations: it's length must be the same as fields!");
                if (r.length !== e.length) throw new TypeError("Invalid as: it's length must be the same as fields!")
            }
            var s = h(t.rows, n.groupBy), l = [];
            u(s, function (t) {
                var n = t[0];
                o.forEach(function (i, o) {
                    var u = r[o], a = e[o];
                    n[u] = y[i](t, a)
                }), l.push(n)
            }), t.rows = l
        }

        var i = e(3), o = e(156), u = e(9), a = e(6), c = e(10), f = e(24), s = e(419), l = e(19), h = e(15),
            p = e(2).registerTransform, v = e(84).STATISTICS_METHODS, d = e(7).getFields,
            g = {as: [], fields: [], groupBy: [], operations: []}, b = "count", y = {
                count: function (t) {
                    return t.length
                }, distinct: function (t, n) {
                    return s(t.map(function (t) {
                        return t[n]
                    })).length
                }
            };
        v.forEach(function (t) {
            y[t] = function (n, e) {
                var r = n.map(function (t) {
                    return t[e]
                });
                return a(r) && a(r[0]) && (r = o(r)), l[t](r)
            }
        }), y.average = y.mean, p("aggregate", r), p("summary", r), t.exports = {VALID_AGGREGATES: f(y)}
    }, function (t, n, e) {
        var r = e(9), i = e(168);
        t.exports = function (t) {
            var n = [];
            return r(t, function (t) {
                i(n, t) || n.push(t)
            }), n
        }
    }, function (t, n, e) {
        var r = e(3), i = e(6), o = e(56), u = e(421), a = e(57), c = e(2).registerTransform, f = e(7).getFields,
            s = e(58).silverman, l = {as: ["x", "y"], method: "linear", order: 2, precision: 2},
            h = ["linear", "exponential", "logarithmic", "power", "polynomial"];
        c("regression", function (t, n) {
            n = r({}, l, n);
            var e = f(n);
            if (!i(e) || 2 !== e.length) throw new TypeError("invalid fields: must be an array of 2 strings.");
            var c = e[0], p = e[1], v = n.method;
            if (-1 === h.indexOf(v)) throw new TypeError("invalid method: " + v + ". Must be one of " + h.join(", "));
            var d = t.rows.map(function (t) {
                return [t[c], t[p]]
            }), g = u[v](d, n), b = n.extent;
            i(b) && 2 === b.length || (b = t.range(c));
            var y = n.bandwidth;
            (!o(y) || y <= 0) && (y = s(t.getColumn(c)));
            var j = a(b, y), O = [], _ = n.as, m = _[0], w = _[1];
            j.forEach(function (t) {
                var n = {}, e = g.predict(t), r = e[0], i = e[1];
                n[m] = r, n[w] = i, isFinite(i) && O.push(n)
            }), t.rows = O
        }), t.exports = {REGRESSION_METHODS: h}
    }, function (t, n, e) {
        var r, i, o;
        !function (e, u) {
            i = [t], void 0 !== (o = "function" == typeof(r = u) ? r.apply(n, i) : r) && (t.exports = o)
        }(0, function (t) {
            "use strict";

            function n(t, n) {
                var e = [], r = [];
                t.forEach(function (t, i) {
                    null !== t[1] && (r.push(t), e.push(n[i]))
                });
                var i = r.reduce(function (t, n) {
                    return t + n[1]
                }, 0) / r.length, o = r.reduce(function (t, n) {
                    var e = n[1] - i;
                    return t + e * e
                }, 0);
                return 1 - r.reduce(function (t, n, r) {
                    var i = e[r], o = n[1] - i[1];
                    return t + o * o
                }, 0) / o
            }

            function e(t, n) {
                var e = Math.pow(10, n);
                return Math.round(t * e) / e
            }

            var r = Object.assign || function (t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }
                return t
            }, i = {order: 2, precision: 2, period: null}, o = {
                linear: function (t, r) {
                    for (var i = [0, 0, 0, 0, 0], o = 0, u = 0; u < t.length; u++) null !== t[u][1] && (o++, i[0] += t[u][0], i[1] += t[u][1], i[2] += t[u][0] * t[u][0], i[3] += t[u][0] * t[u][1], i[4] += t[u][1] * t[u][1]);
                    var a = o * i[2] - i[0] * i[0], c = o * i[3] - i[0] * i[1], f = 0 === a ? 0 : e(c / a, r.precision),
                        s = e(i[1] / o - f * i[0] / o, r.precision), l = function (t) {
                            return [e(t, r.precision), e(f * t + s, r.precision)]
                        }, h = t.map(function (t) {
                            return l(t[0])
                        });
                    return {
                        points: h,
                        predict: l,
                        equation: [f, s],
                        r2: e(n(t, h), r.precision),
                        string: 0 === s ? "y = " + f + "x" : "y = " + f + "x + " + s
                    }
                }, exponential: function (t, r) {
                    for (var i = [0, 0, 0, 0, 0, 0], o = 0; o < t.length; o++) null !== t[o][1] && (i[0] += t[o][0], i[1] += t[o][1], i[2] += t[o][0] * t[o][0] * t[o][1], i[3] += t[o][1] * Math.log(t[o][1]), i[4] += t[o][0] * t[o][1] * Math.log(t[o][1]), i[5] += t[o][0] * t[o][1]);
                    var u = i[1] * i[2] - i[5] * i[5], a = Math.exp((i[2] * i[3] - i[5] * i[4]) / u),
                        c = (i[1] * i[4] - i[5] * i[3]) / u, f = e(a, r.precision), s = e(c, r.precision),
                        l = function (t) {
                            return [e(t, r.precision), e(f * Math.exp(s * t), r.precision)]
                        }, h = t.map(function (t) {
                            return l(t[0])
                        });
                    return {
                        points: h,
                        predict: l,
                        equation: [f, s],
                        string: "y = " + f + "e^(" + s + "x)",
                        r2: e(n(t, h), r.precision)
                    }
                }, logarithmic: function (t, r) {
                    for (var i = [0, 0, 0, 0], o = t.length, u = 0; u < o; u++) null !== t[u][1] && (i[0] += Math.log(t[u][0]), i[1] += t[u][1] * Math.log(t[u][0]), i[2] += t[u][1], i[3] += Math.pow(Math.log(t[u][0]), 2));
                    var a = e((o * i[1] - i[2] * i[0]) / (o * i[3] - i[0] * i[0]), r.precision),
                        c = e((i[2] - a * i[0]) / o, r.precision), f = function (t) {
                            return [e(t, r.precision), e(e(c + a * Math.log(t), r.precision), r.precision)]
                        }, s = t.map(function (t) {
                            return f(t[0])
                        });
                    return {
                        points: s,
                        predict: f,
                        equation: [c, a],
                        string: "y = " + c + " + " + a + " ln(x)",
                        r2: e(n(t, s), r.precision)
                    }
                }, power: function (t, r) {
                    for (var i = [0, 0, 0, 0, 0], o = t.length, u = 0; u < o; u++) null !== t[u][1] && (i[0] += Math.log(t[u][0]), i[1] += Math.log(t[u][1]) * Math.log(t[u][0]), i[2] += Math.log(t[u][1]), i[3] += Math.pow(Math.log(t[u][0]), 2));
                    var a = (o * i[1] - i[0] * i[2]) / (o * i[3] - Math.pow(i[0], 2)), c = (i[2] - a * i[0]) / o,
                        f = e(Math.exp(c), r.precision), s = e(a, r.precision), l = function (t) {
                            return [e(t, r.precision), e(e(f * Math.pow(t, s), r.precision), r.precision)]
                        }, h = t.map(function (t) {
                            return l(t[0])
                        });
                    return {
                        points: h,
                        predict: l,
                        equation: [f, s],
                        string: "y = " + f + "x^" + s,
                        r2: e(n(t, h), r.precision)
                    }
                }, polynomial: function (t, r) {
                    for (var i = [], o = [], u = 0, a = 0, c = t.length, f = r.order + 1, s = 0; s < f; s++) {
                        for (var l = 0; l < c; l++) null !== t[l][1] && (u += Math.pow(t[l][0], s) * t[l][1]);
                        i.push(u), u = 0;
                        for (var h = [], p = 0; p < f; p++) {
                            for (var v = 0; v < c; v++) null !== t[v][1] && (a += Math.pow(t[v][0], s + p));
                            h.push(a), a = 0
                        }
                        o.push(h)
                    }
                    o.push(i);
                    for (var d = function (t, n) {
                        for (var e = t, r = t.length - 1, i = [n], o = 0; o < r; o++) {
                            for (var u = o, a = o + 1; a < r; a++) Math.abs(e[o][a]) > Math.abs(e[o][u]) && (u = a);
                            for (var c = o; c < r + 1; c++) {
                                var f = e[c][o];
                                e[c][o] = e[c][u], e[c][u] = f
                            }
                            for (var s = o + 1; s < r; s++) for (var l = r; l >= o; l--) e[l][s] -= e[l][o] * e[o][s] / e[o][o]
                        }
                        for (var h = r - 1; h >= 0; h--) {
                            for (var p = 0, v = h + 1; v < r; v++) p += e[v][h] * i[v];
                            i[h] = (e[r][h] - p) / e[h][h]
                        }
                        return i
                    }(o, f).map(function (t) {
                        return e(t, r.precision)
                    }), g = function (t) {
                        return [e(t, r.precision), e(d.reduce(function (n, e, r) {
                            return n + e * Math.pow(t, r)
                        }, 0), r.precision)]
                    }, b = t.map(function (t) {
                        return g(t[0])
                    }), y = "y = ", j = d.length - 1; j >= 0; j--) y += j > 1 ? d[j] + "x^" + j + " + " : 1 === j ? d[j] + "x + " : d[j];
                    return {
                        string: y, points: b, predict: g, equation: [].concat(function (t) {
                            if (Array.isArray(t)) {
                                for (var n = 0, e = Array(t.length); n < t.length; n++) e[n] = t[n];
                                return e
                            }
                            return Array.from(t)
                        }(d)).reverse(), r2: e(n(t, b), r.precision)
                    }
                }
            };
            t.exports = Object.keys(o).reduce(function (t, n) {
                return r({_round: e}, t, function (t, n, e) {
                    return n in t ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = e, t
                }({}, n, function (t, e) {
                    return o[n](t, r({}, i, e))
                }))
            }, {})
        })
    }, function (t, n, e) {
        function r(t, n) {
            n = i({}, O, n);
            var e = y(n);
            if (!a(e) || e.length < 1) throw new TypeError("invalid fields: must be an array of at least 1 strings!");
            var r = n.as;
            if (!a(r) || 3 !== r.length) throw new TypeError("invalid as: must be an array of 3 strings!");
            var l = n.method;
            if (s(l)) {
                if (-1 === _.indexOf(l)) throw new TypeError("invalid method: " + l + ". Must be one of " + _.join(", "));
                l = v[l]
            }
            if (!c(l)) throw new TypeError("invalid method: kernel method must be a function!");
            var b = n.extent;
            if (!a(b) || 0 === b.length) {
                var m = [];
                o(e, function (n) {
                    var e = t.range(n);
                    m = m.concat(e)
                }), b = [Math.min.apply(Math, m), Math.max.apply(Math, m)]
            }
            var w = n.bandwidth;
            s(w) && d[w] ? w = d[w](t.getColumn(e[0])) : c(w) ? w = w(t.getColumn(e[0])) : (!f(w) || w <= 0) && (w = d.nrd(t.getColumn(e[0])));
            var x = p(b, n.step ? n.step : w), E = [], M = n.groupBy, T = g(t.rows, M);
            u(T, function (t) {
                var i = {};
                o(e, function (e) {
                    var u = h(t[0], M);
                    i[e] = j(t.map(function (t) {
                        return t[e]
                    }), l, w);
                    var a = r[0], c = r[1], f = r[2];
                    u[a] = e, u[c] = [], u[f] = [], o(x, function (t) {
                        var r = i[e](t);
                        r >= n.minSize && (u[c].push(t), u[f].push(r))
                    }), E.push(u)
                })
            }), t.rows = E
        }

        var i = e(3), o = e(9), u = e(9), a = e(6), c = e(11), f = e(56), s = e(10), l = e(24), h = e(32), p = e(57),
            v = e(92), d = e(58), g = e(15), b = e(2).registerTransform, y = e(7).getFields,
            j = e(19).kernelDensityEstimation, O = {
                minSize: .01,
                as: ["key", "y", "size"],
                extent: [],
                method: "gaussian",
                bandwidth: "nrd",
                step: 0,
                groupBy: []
            }, _ = l(v), m = l(d);
        b("kernel-density-estimation", r), b("kde", r), b("KDE", r), t.exports = {
            KERNEL_METHODS: _,
            BANDWIDTH_METHODS: m
        }
    }, function (t, n, e) {
        function r(t, n, e, r) {
            return Math.sqrt((t - e) * (t - e) + (n - r) * (n - r))
        }

        function i(t, n, e) {
            var r = t - e;
            n /= 2;
            var i = Math.floor(r / n);
            return [n * (i + (1 === Math.abs(i % 2) ? 1 : 0)) + e, n * (i + (1 === Math.abs(i % 2) ? 0 : 1)) + e]
        }

        function o(t, n) {
            n = u({}, l, n);
            var e = s(n);
            if (!c(e) || 2 !== e.length) throw new TypeError("Invalid fields: it must be an array with 2 strings!");
            var o = e[0], f = e[1], p = t.range(o), d = t.range(f), g = p[1] - p[0], b = d[1] - d[0],
                y = n.binWidth || [];
            if (2 !== y.length) {
                var j = n.bins, O = j[0], _ = j[1];
                if (O <= 0 || _ <= 0) throw new TypeError("Invalid bins: must be an array with two positive numbers (e.g. [ 30, 30 ])!");
                y = [g / O, b / _]
            }
            var m = n.offset, w = m[0], x = m[1], E = 3 * y[0] / (h * y[1]), M = function (t, n, e) {
                void 0 === n && (n = [1, 1]), void 0 === e && (e = [0, 0]);
                var o = {}, u = n, a = u[0], c = u[1], f = e, s = f[0], l = f[1];
                return t.forEach(function (t) {
                    var n, e, u, f = t[0], h = t[1], p = i(f, a, s), v = p[0], d = p[1], g = i(h, c, l), b = g[0],
                        y = g[1];
                    r(f, h, v, b) < r(f, h, d, y) ? (n = "x" + v + "y" + b, e = v, u = b) : (n = "x" + d + "y" + y, e = d, u = y), o[n] = o[n] || {
                        x: e,
                        y: u,
                        count: 0
                    }, o[n].count++
                }), o
            }(t.rows.map(function (t) {
                return [t[o], E * t[f]]
            }), [y[0], E * y[1]], [w, E * x]), T = n.as, S = T[0], k = T[1], C = T[2];
            if (!S || !k || !C) throw new TypeError('Invalid as: it must be an array with three elements (e.g. [ "x", "y", "count" ])!');
            var P = y[0] / h, N = v.map(function (t) {
                return [Math.sin(t) * P, -Math.cos(t) * P]
            }), R = [], B = 0;
            n.sizeByCount && a(M, function (t) {
                t.count > B && (B = t.count)
            }), a(M, function (t) {
                var e = t.x, r = t.y, i = t.count, o = {};
                o[C] = i, n.sizeByCount ? (o[S] = N.map(function (n) {
                    return e + t.count / B * n[0]
                }), o[k] = N.map(function (n) {
                    return (r + t.count / B * n[1]) / E
                })) : (o[S] = N.map(function (t) {
                    return e + t[0]
                }), o[k] = N.map(function (t) {
                    return (r + t[1]) / E
                })), R.push(o)
            }), t.rows = R
        }

        var u = e(3), a = e(9), c = e(6), f = e(2).registerTransform, s = e(7).getFields,
            l = {as: ["x", "y", "count"], bins: [30, 30], offset: [0, 0], sizeByCount: !1}, h = Math.sqrt(3),
            p = Math.PI / 3, v = [0, p, 2 * p, 3 * p, 4 * p, 5 * p];
        f("bin.hexagon", o), f("bin.hex", o), f("hexbin", o)
    }, function (t, n, e) {
        function r(t, n) {
            n = i({}, s, n);
            var e = f(n);
            if (0 !== t.rows.length) {
                var r = t.range(e), c = r[1] - r[0], l = n.binWidth;
                if (!l) {
                    var h = n.bins;
                    if (h <= 0) throw new TypeError("Invalid bins: it must be a positive number!");
                    l = c / h
                }
                var p = n.offset % l, v = [], d = n.groupBy, g = a(t.rows, d);
                o(g, function (t) {
                    var r = {};
                    t.map(function (t) {
                        return t[e]
                    }).forEach(function (t) {
                        var n = function (t, n, e) {
                            var r = t - e, i = Math.floor(r / n);
                            return [i * n + e, (i + 1) * n + e]
                        }(t, l, p), e = n[0], i = n[1], o = e + "-" + i;
                        r[o] = r[o] || {x0: e, x1: i, count: 0}, r[o].count++
                    });
                    var a = n.as, c = a[0], f = a[1];
                    if (!c || !f) throw new TypeError('Invalid as: it must be an array with 2 elements (e.g. [ "x", "count" ])!');
                    var s = u(t[0], d);
                    o(r, function (t) {
                        var n = i({}, s);
                        n[c] = [t.x0, t.x1], n[f] = t.count, v.push(n)
                    })
                }), t.rows = v
            }
        }

        var i = e(3), o = e(9), u = e(32), a = e(15), c = e(2).registerTransform, f = e(7).getField,
            s = {as: ["x", "count"], bins: 30, offset: 0, groupBy: []};
        c("bin.histogram", r), c("bin.dot", r)
    }, function (t, n, e) {
        var r = e(3), i = e(9), o = e(6), u = e(10), a = e(19).quantile, c = e(15), f = e(157),
            s = e(2).registerTransform, l = e(7).getField, h = {as: "_bin", groupBy: [], fraction: 4};
        s("bin.quantile", function (t, n) {
            n = r({}, h, n);
            var e = l(n), s = n.as;
            if (!u(s)) throw new TypeError('Invalid as: it must be a string (e.g. "_bin")!');
            var p = n.p, v = n.fraction;
            o(p) && 0 !== p.length || (p = f(v));
            var d = t.rows, g = n.groupBy, b = c(d, g), y = [];
            i(b, function (t) {
                var n = t[0], r = t.map(function (t) {
                    return t[e]
                }), i = p.map(function (t) {
                    return a(r, t)
                });
                n[s] = i, y.push(n)
            }), t.rows = y
        })
    }, function (t, n, e) {
        function r(t, n, e) {
            var r = t - e, i = Math.floor(r / n);
            return [i * n + e, (i + 1) * n + e]
        }

        function i(t, n) {
            n = o({}, f, n);
            var e = c(n), i = e[0], a = e[1];
            if (!i || !a) throw new TypeError("Invalid fields: must be an array with 2 strings!");
            var s = t.range(i), l = t.range(a), h = s[1] - s[0], p = l[1] - l[0], v = n.binWidth || [];
            if (2 !== v.length) {
                var d = n.bins, g = d[0], b = d[1];
                if (g <= 0 || b <= 0) throw new TypeError("Invalid bins: must be an array with 2 positive numbers (e.g. [ 30, 30 ])!");
                v = [h / g, p / b]
            }
            var y = t.rows.map(function (t) {
                return [t[i], t[a]]
            }), j = {}, O = n.offset, _ = O[0], m = O[1];
            y.forEach(function (t) {
                var n = r(t[0], v[0], _), e = n[0], i = n[1], o = r(t[1], v[1], m), u = o[0], a = o[1],
                    c = e + "-" + i + "-" + u + "-" + a;
                j[c] = j[c] || {x0: e, x1: i, y0: u, y1: a, count: 0}, j[c].count++
            });
            var w = [], x = n.as, E = x[0], M = x[1], T = x[2];
            if (!E || !M || !T) throw new TypeError('Invalid as: it must be an array with 3 strings (e.g. [ "x", "y", "count" ])!');
            if (n.sizeByCount) {
                var S = 0;
                u(j, function (t) {
                    t.count > S && (S = t.count)
                }), u(j, function (t) {
                    var n = t.x0, e = t.x1, r = t.y0, i = t.y1, o = t.count, u = o / S, a = (n + e) / 2,
                        c = (r + i) / 2, f = (e - n) * u / 2, s = (i - r) * u / 2, l = a - f, h = a + f, p = c - s,
                        v = c + s, d = {};
                    d[E] = [l, h, h, l], d[M] = [p, p, v, v], d[T] = o, w.push(d)
                })
            } else u(j, function (t) {
                var n = {};
                n[E] = [t.x0, t.x1, t.x1, t.x0], n[M] = [t.y0, t.y0, t.y1, t.y1], n[T] = t.count, w.push(n)
            });
            t.rows = w
        }

        var o = e(3), u = e(9), a = e(2).registerTransform, c = e(7).getFields,
            f = {as: ["x", "y", "count"], bins: [30, 30], offset: [0, 0], sizeByCount: !1};
        a("bin.rectangle", i), a("bin.rect", i)
    }, function (t, n, e) {
        var r = e(3), i = e(6), o = e(10), u = e(2).registerTransform, a = e(7).getField,
            c = {as: ["_centroid_x", "_centroid_y"]};
        u("geo.centroid", function (t, n) {
            n = r({}, c, n);
            var e = a(n), u = n.geoView || n.geoDataView;
            if (o(u) && (u = t.dataSet.getView(u)), !u || "geo" !== u.dataType) throw new TypeError("Invalid geoView: must be a DataView of GEO dataType!");
            var f = n.as;
            if (!i(f) || 2 !== f.length) throw new TypeError('Invalid as: it must be an array with 2 strings (e.g. [ "cX", "cY" ])!');
            var s = f[0], l = f[1];
            t.rows.forEach(function (t) {
                var n = u.geoFeatureByName(t[e]);
                n && (u._projectedAs ? (t[s] = n[u._projectedAs[2]], t[l] = n[u._projectedAs[3]]) : (t[s] = n.centroidX, t[l] = n.centroidY))
            })
        })
    }, function (t, n, e) {
        var r = e(3), i = e(0), o = e(159), u = e(6), a = e(2).registerTransform, c = e(141), f = i.geoPath,
            s = {as: ["_x", "_y", "_centroid_x", "_centroid_y"]};
        a("geo.projection", function (t, n) {
            if ("geo" !== t.dataType && "geo-graticule" !== t.dataType) throw new TypeError("Invalid dataView: this transform is for Geo data only!");
            var e = (n = r({}, s, n)).projection;
            if (!e) throw new TypeError("Invalid projection!");
            e = c(e);
            var i = f(e), a = n.as;
            if (!u(a) || 4 !== a.length) throw new TypeError('Invalid as: it must be an array with 4 strings (e.g. [ "x", "y", "cX", "cY" ])!');
            t._projectedAs = a;
            var l = a[0], h = a[1], p = a[2], v = a[3];
            t.rows.forEach(function (t) {
                t[l] = [], t[h] = [];
                var n = i(t);
                if (n) {
                    o(n)._path.forEach(function (n) {
                        t[l].push(n[1]), t[h].push(n[2])
                    });
                    var e = i.centroid(t);
                    t[p] = e[0], t[v] = e[1]
                }
            }), t.rows = t.rows.filter(function (t) {
                return 0 !== t[l].length
            })
        })
    }, function (t, n, e) {
        var r = e(3), i = e(6), o = e(10), u = e(2).registerTransform, a = e(7).getField, c = {as: ["_x", "_y"]};
        u("geo.region", function (t, n) {
            n = r({}, c, n);
            var e = a(n), u = n.geoView || n.geoDataView;
            if (o(u) && (u = t.dataSet.getView(u)), !u || "geo" !== u.dataType) throw new TypeError("Invalid geoView: must be a DataView of GEO dataType!");
            var f = n.as;
            if (!i(f) || 2 !== f.length) throw new TypeError('Invalid as: it must be an array with 2 strings (e.g. [ "x", "y" ])!');
            var s = f[0], l = f[1];
            t.rows.forEach(function (t) {
                var n = u.geoFeatureByName(t[e]);
                n && (u._projectedAs ? (t[s] = n[u._projectedAs[0]], t[l] = n[u._projectedAs[1]]) : (t[s] = n.longitude, t[l] = n.latitude))
            })
        })
    }, function (t, n, e) {
        function r(t, n) {
            n = i({}, s, n);
            var e = {}, r = t.nodes, f = t.edges;
            u(r) && 0 !== r.length || (r = function (t, n, e) {
                return void 0 === e && (e = {}), t.forEach(function (t) {
                    var r = n.edgeSource(t), i = n.edgeTarget(t);
                    e[r] || (e[r] = {id: r}), e[i] || (e[i] = {id: i})
                }), a(e)
            }(f, n, e)), r.forEach(function (t) {
                var r = n.id(t);
                e[r] = t
            }), function (t, n, e) {
                o(t, function (t, r) {
                    t.inEdges = n.filter(function (t) {
                        return "" + e.target(t) == "" + r
                    }), t.outEdges = n.filter(function (t) {
                        return "" + e.source(t) == "" + r
                    }), t.edges = t.outEdges.concat(t.inEdges), t.frequency = t.edges.length, t.value = 0, t.inEdges.forEach(function (n) {
                        t.value += e.targetWeight(n)
                    }), t.outEdges.forEach(function (n) {
                        t.value += e.sourceWeight(n)
                    })
                })
            }(e, f, n), function (t, n) {
                var e = {
                    weight: function (t, n) {
                        return n.value - t.value
                    }, frequency: function (t, n) {
                        return n.frequency - t.frequency
                    }, id: function (t, e) {
                        return ("" + n.id(t)).localeCompare("" + n.id(e))
                    }
                }[n.sortBy];
                !e && c(n.sortBy) && (e = n.sortBy), e && t.sort(e)
            }(r, n), function (t, n) {
                var e = t.length;
                if (!e) throw new TypeError("Invalid nodes: it's empty!");
                if (n.weight) {
                    var r = n.marginRatio;
                    if (r < 0 || r >= 1) throw new TypeError("Invalid marginRatio: it must be in range [0, 1)!");
                    var i = r / (2 * e), o = n.thickness;
                    if (o <= 0 || o >= 1) throw new TypeError("Invalid thickness: it must be in range (0, 1)!");
                    var u = 0;
                    t.forEach(function (t) {
                        u += t.value
                    }), t.forEach(function (t) {
                        t.weight = t.value / u, t.width = t.weight * (1 - r), t.height = o
                    }), t.forEach(function (e, r) {
                        for (var u = 0, a = r - 1; a >= 0; a--) u += t[a].width + 2 * i;
                        var c = e.minX = i + u, f = e.maxX = e.minX + e.width, s = e.minY = n.y - o / 2,
                            l = e.maxY = s + o;
                        e.x = [c, f, f, c], e.y = [s, s, l, l]
                    })
                } else {
                    var a = 1 / e;
                    t.forEach(function (t, e) {
                        t.x = (e + .5) * a, t.y = n.y
                    })
                }
            }(r, n), function (t, n, e) {
                if (e.weight) {
                    var r = {};
                    o(t, function (t, n) {
                        r[n] = t.value
                    }), n.forEach(function (n) {
                        var i = e.source(n), o = e.target(n), u = t[i], a = t[o];
                        if (u && a) {
                            var c = r[i], f = e.sourceWeight(n), s = u.minX + (u.value - c) / u.value * u.width,
                                l = s + f / u.value * u.width;
                            r[i] -= f;
                            var h = r[o], p = e.targetWeight(n), v = a.minX + (a.value - h) / a.value * a.width,
                                d = v + p / a.value * a.width;
                            r[o] -= p;
                            var g = e.y;
                            n.x = [s, l, v, d], n.y = [g, g, g, g]
                        }
                    })
                } else n.forEach(function (n) {
                    var r = t[e.source(n)], i = t[e.target(n)];
                    r && i && (n.x = [r.x, i.x], n.y = [r.y, i.y])
                })
            }(e, f, n), t.nodes = r, t.edges = f
        }

        var i = e(3), o = e(9), u = e(6), a = e(83), c = e(11), f = e(2).registerTransform, s = {
            y: 0, thickness: .05, weight: !1, marginRatio: .1, id: function (t) {
                return t.id
            }, source: function (t) {
                return t.source
            }, target: function (t) {
                return t.target
            }, sourceWeight: function (t) {
                return t.value || 1
            }, targetWeight: function (t) {
                return t.value || 1
            }, sortBy: null
        };
        f("diagram.arc", r), f("arc", r)
    }, function (t, n, e) {
        function r(t, n) {
            n = i({}, a, n);
            var e = new o.graphlib.Graph;
            e.setGraph({}), e.setDefaultEdgeLabel(function () {
                return {}
            }), t.nodes.forEach(function (t) {
                var r = n.nodeId ? n.nodeId(t) : t.id;
                t.height || t.width || (t.height = t.width = n.edgesep), e.setNode(r, t)
            }), t.edges.forEach(function (t) {
                e.setEdge(n.source(t), n.target(t))
            }), o.layout(e);
            var r = [], u = [];
            e.nodes().forEach(function (t) {
                var n = e.node(t), i = n.x, o = n.y, u = n.height, a = n.width;
                n.x = [i - a / 2, i + a / 2, i + a / 2, i - a / 2], n.y = [o + u / 2, o + u / 2, o - u / 2, o - u / 2], r.push(n)
            }), e.edges().forEach(function (t) {
                var n = e.edge(t).points, r = {};
                r.x = n.map(function (t) {
                    return t.x
                }), r.y = n.map(function (t) {
                    return t.y
                }), u.push(r)
            }), t.nodes = r, t.edges = u
        }

        var i = e(3), o = e(432), u = e(2).registerTransform, a = {
            rankdir: "TB", align: "TB", nodesep: 50, edgesep: 10, ranksep: 50, source: function (t) {
                return t.source
            }, target: function (t) {
                return t.target
            }
        };
        u("diagram.dagre", r), u("dagre", r)
    }, function (t, n, e) {
        t.exports = {
            graphlib: e(16),
            layout: e(448),
            debug: e(470),
            util: {time: e(12).time, notime: e(12).notime},
            version: e(471)
        }
    }, function (t, n, e) {
        var r = e(434);
        t.exports = {Graph: r.Graph, json: e(438), alg: e(439), version: r.version}
    }, function (t, n, e) {
        t.exports = {Graph: e(93), version: e(437)}
    }, function (t, n) {
        var e;
        e = function () {
            return this
        }();
        try {
            e = e || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (e = window)
        }
        t.exports = e
    }, function (t, n) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {
            }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0, get: function () {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function (t, n) {
        t.exports = "2.1.5"
    }, function (t, n, e) {
        var r = e(13), i = e(93);
        t.exports = {
            write: function (t) {
                var n = {
                    options: {directed: t.isDirected(), multigraph: t.isMultigraph(), compound: t.isCompound()},
                    nodes: function (t) {
                        return r.map(t.nodes(), function (n) {
                            var e = t.node(n), i = t.parent(n), o = {v: n};
                            return r.isUndefined(e) || (o.value = e), r.isUndefined(i) || (o.parent = i), o
                        })
                    }(t),
                    edges: function (t) {
                        return r.map(t.edges(), function (n) {
                            var e = t.edge(n), i = {v: n.v, w: n.w};
                            return r.isUndefined(n.name) || (i.name = n.name), r.isUndefined(e) || (i.value = e), i
                        })
                    }(t)
                };
                return r.isUndefined(t.graph()) || (n.value = r.clone(t.graph())), n
            }, read: function (t) {
                var n = new i(t.options).setGraph(t.value);
                return r.each(t.nodes, function (t) {
                    n.setNode(t.v, t.value), t.parent && n.setParent(t.v, t.parent)
                }), r.each(t.edges, function (t) {
                    n.setEdge({v: t.v, w: t.w, name: t.name}, t.value)
                }), n
            }
        }
    }, function (t, n, e) {
        t.exports = {
            components: e(440),
            dijkstra: e(170),
            dijkstraAll: e(441),
            findCycles: e(442),
            floydWarshall: e(443),
            isAcyclic: e(444),
            postorder: e(445),
            preorder: e(446),
            prim: e(447),
            tarjan: e(172),
            topsort: e(173)
        }
    }, function (t, n, e) {
        var r = e(13);
        t.exports = function (t) {
            function n(o) {
                r.has(i, o) || (i[o] = !0, e.push(o), r.each(t.successors(o), n), r.each(t.predecessors(o), n))
            }

            var e, i = {}, o = [];
            return r.each(t.nodes(), function (t) {
                e = [], n(t), e.length && o.push(e)
            }), o
        }
    }, function (t, n, e) {
        var r = e(170), i = e(13);
        t.exports = function (t, n, e) {
            return i.transform(t.nodes(), function (i, o) {
                i[o] = r(t, o, n, e)
            }, {})
        }
    }, function (t, n, e) {
        var r = e(13), i = e(172);
        t.exports = function (t) {
            return r.filter(i(t), function (n) {
                return n.length > 1 || 1 === n.length && t.hasEdge(n[0], n[0])
            })
        }
    }, function (t, n, e) {
        var r = e(13);
        t.exports = function (t, n, e) {
            return function (t, n, e) {
                var r = {}, i = t.nodes();
                return i.forEach(function (t) {
                    r[t] = {}, r[t][t] = {distance: 0}, i.forEach(function (n) {
                        t !== n && (r[t][n] = {distance: Number.POSITIVE_INFINITY})
                    }), e(t).forEach(function (e) {
                        var i = e.v === t ? e.w : e.v, o = n(e);
                        r[t][i] = {distance: o, predecessor: t}
                    })
                }), i.forEach(function (t) {
                    var n = r[t];
                    i.forEach(function (e) {
                        var o = r[e];
                        i.forEach(function (e) {
                            var r = o[t], i = n[e], u = o[e], a = r.distance + i.distance;
                            a < u.distance && (u.distance = a, u.predecessor = i.predecessor)
                        })
                    })
                }), r
            }(t, n || i, e || function (n) {
                return t.outEdges(n)
            })
        };
        var i = r.constant(1)
    }, function (t, n, e) {
        var r = e(173);
        t.exports = function (t) {
            try {
                r(t)
            } catch (t) {
                if (t instanceof r.CycleException) return !1;
                throw t
            }
            return !0
        }
    }, function (t, n, e) {
        var r = e(174);
        t.exports = function (t, n) {
            return r(t, n, "post")
        }
    }, function (t, n, e) {
        var r = e(174);
        t.exports = function (t, n) {
            return r(t, n, "pre")
        }
    }, function (t, n, e) {
        var r = e(13), i = e(93), o = e(171);
        t.exports = function (t, n) {
            function e(t) {
                var e = t.v === u ? t.w : t.v, r = f.priority(e);
                if (void 0 !== r) {
                    var i = n(t);
                    i < r && (c[e] = u, f.decrease(e, i))
                }
            }

            var u, a = new i, c = {}, f = new o;
            if (0 === t.nodeCount()) return a;
            r.each(t.nodes(), function (t) {
                f.add(t, Number.POSITIVE_INFINITY), a.setNode(t)
            }), f.decrease(t.nodes()[0], 0);
            for (var s = !1; f.size() > 0;) {
                if (u = f.removeMin(), r.has(c, u)) a.setEdge(u, c[u]); else {
                    if (s) throw new Error("Input graph is not connected: " + t);
                    s = !0
                }
                t.nodeEdges(u).forEach(e)
            }
            return a
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return o.mapValues(o.pick(t, n), Number)
        }

        function i(t) {
            var n = {};
            return o.forEach(t, function (t, e) {
                n[e.toLowerCase()] = t
            }), n
        }

        var o = e(8), u = e(449), a = e(452), c = e(453), f = e(12).normalizeRanks, s = e(455),
            l = e(12).removeEmptyRanks, h = e(456), p = e(457), v = e(458), d = e(459), g = e(468), b = e(12),
            y = e(16).Graph;
        t.exports = function (t, n) {
            var e = n && n.debugTiming ? b.time : b.notime;
            e("layout", function () {
                var n = e("  buildLayoutGraph", function () {
                    return function (t) {
                        var n = new y({multigraph: !0, compound: !0}), e = i(t.graph());
                        return n.setGraph(o.merge({}, O, r(e, j), o.pick(e, _))), o.forEach(t.nodes(), function (e) {
                            var u = i(t.node(e));
                            n.setNode(e, o.defaults(r(u, m), w)), n.setParent(e, t.parent(e))
                        }), o.forEach(t.edges(), function (e) {
                            var u = i(t.edge(e));
                            n.setEdge(e, o.merge({}, E, r(u, x), o.pick(u, M)))
                        }), n
                    }(t)
                });
                e("  runLayout", function () {
                    !function (t, n) {
                        n("    makeSpaceForEdgeLabels", function () {
                            !function (t) {
                                var n = t.graph();
                                n.ranksep /= 2, o.forEach(t.edges(), function (e) {
                                    var r = t.edge(e);
                                    r.minlen *= 2, "c" !== r.labelpos.toLowerCase() && ("TB" === n.rankdir || "BT" === n.rankdir ? r.width += r.labeloffset : r.height += r.labeloffset)
                                })
                            }(t)
                        }), n("    removeSelfEdges", function () {
                            !function (t) {
                                o.forEach(t.edges(), function (n) {
                                    if (n.v === n.w) {
                                        var e = t.node(n.v);
                                        e.selfEdges || (e.selfEdges = []), e.selfEdges.push({
                                            e: n,
                                            label: t.edge(n)
                                        }), t.removeEdge(n)
                                    }
                                })
                            }(t)
                        }), n("    acyclic", function () {
                            u.run(t)
                        }), n("    nestingGraph.run", function () {
                            h.run(t)
                        }), n("    rank", function () {
                            c(b.asNonCompoundGraph(t))
                        }), n("    injectEdgeLabelProxies", function () {
                            !function (t) {
                                o.forEach(t.edges(), function (n) {
                                    var e = t.edge(n);
                                    if (e.width && e.height) {
                                        var r = t.node(n.v), i = {rank: (t.node(n.w).rank - r.rank) / 2 + r.rank, e: n};
                                        b.addDummyNode(t, "edge-proxy", i, "_ep")
                                    }
                                })
                            }(t)
                        }), n("    removeEmptyRanks", function () {
                            l(t)
                        }), n("    nestingGraph.cleanup", function () {
                            h.cleanup(t)
                        }), n("    normalizeRanks", function () {
                            f(t)
                        }), n("    assignRankMinMax", function () {
                            !function (t) {
                                var n = 0;
                                o.forEach(t.nodes(), function (e) {
                                    var r = t.node(e);
                                    r.borderTop && (r.minRank = t.node(r.borderTop).rank, r.maxRank = t.node(r.borderBottom).rank, n = o.max(n, r.maxRank))
                                }), t.graph().maxRank = n
                            }(t)
                        }), n("    removeEdgeLabelProxies", function () {
                            !function (t) {
                                o.forEach(t.nodes(), function (n) {
                                    var e = t.node(n);
                                    "edge-proxy" === e.dummy && (t.edge(e.e).labelRank = e.rank, t.removeNode(n))
                                })
                            }(t)
                        }), n("    normalize.run", function () {
                            a.run(t)
                        }), n("    parentDummyChains", function () {
                            s(t)
                        }), n("    addBorderSegments", function () {
                            p(t)
                        }), n("    order", function () {
                            d(t)
                        }), n("    insertSelfEdges", function () {
                            !function (t) {
                                var n = b.buildLayerMatrix(t);
                                o.forEach(n, function (n) {
                                    var e = 0;
                                    o.forEach(n, function (n, r) {
                                        var i = t.node(n);
                                        i.order = r + e, o.forEach(i.selfEdges, function (n) {
                                            b.addDummyNode(t, "selfedge", {
                                                width: n.label.width,
                                                height: n.label.height,
                                                rank: i.rank,
                                                order: r + ++e,
                                                e: n.e,
                                                label: n.label
                                            }, "_se")
                                        }), delete i.selfEdges
                                    })
                                })
                            }(t)
                        }), n("    adjustCoordinateSystem", function () {
                            v.adjust(t)
                        }), n("    position", function () {
                            g(t)
                        }), n("    positionSelfEdges", function () {
                            !function (t) {
                                o.forEach(t.nodes(), function (n) {
                                    var e = t.node(n);
                                    if ("selfedge" === e.dummy) {
                                        var r = t.node(e.e.v), i = r.x + r.width / 2, o = r.y, u = e.x - i,
                                            a = r.height / 2;
                                        t.setEdge(e.e, e.label), t.removeNode(n), e.label.points = [{
                                            x: i + 2 * u / 3,
                                            y: o - a
                                        }, {x: i + 5 * u / 6, y: o - a}, {x: i + u, y: o}, {
                                            x: i + 5 * u / 6,
                                            y: o + a
                                        }, {x: i + 2 * u / 3, y: o + a}], e.label.x = e.x, e.label.y = e.y
                                    }
                                })
                            }(t)
                        }), n("    removeBorderNodes", function () {
                            !function (t) {
                                o.forEach(t.nodes(), function (n) {
                                    if (t.children(n).length) {
                                        var e = t.node(n), r = t.node(e.borderTop), i = t.node(e.borderBottom),
                                            u = t.node(o.last(e.borderLeft)), a = t.node(o.last(e.borderRight));
                                        e.width = Math.abs(a.x - u.x), e.height = Math.abs(i.y - r.y), e.x = u.x + e.width / 2, e.y = r.y + e.height / 2
                                    }
                                }), o.forEach(t.nodes(), function (n) {
                                    "border" === t.node(n).dummy && t.removeNode(n)
                                })
                            }(t)
                        }), n("    normalize.undo", function () {
                            a.undo(t)
                        }), n("    fixupEdgeLabelCoords", function () {
                            !function (t) {
                                o.forEach(t.edges(), function (n) {
                                    var e = t.edge(n);
                                    if (o.has(e, "x")) switch ("l" !== e.labelpos && "r" !== e.labelpos || (e.width -= e.labeloffset), e.labelpos) {
                                        case"l":
                                            e.x -= e.width / 2 + e.labeloffset;
                                            break;
                                        case"r":
                                            e.x += e.width / 2 + e.labeloffset
                                    }
                                })
                            }(t)
                        }), n("    undoCoordinateSystem", function () {
                            v.undo(t)
                        }), n("    translateGraph", function () {
                            !function (t) {
                                function n(t) {
                                    var n = t.x, o = t.y, a = t.width, c = t.height;
                                    e = Math.min(e, n - a / 2), r = Math.max(r, n + a / 2), i = Math.min(i, o - c / 2), u = Math.max(u, o + c / 2)
                                }

                                var e = Number.POSITIVE_INFINITY, r = 0, i = Number.POSITIVE_INFINITY, u = 0,
                                    a = t.graph(), c = a.marginx || 0, f = a.marginy || 0;
                                o.forEach(t.nodes(), function (e) {
                                    n(t.node(e))
                                }), o.forEach(t.edges(), function (e) {
                                    var r = t.edge(e);
                                    o.has(r, "x") && n(r)
                                }), e -= c, i -= f, o.forEach(t.nodes(), function (n) {
                                    var r = t.node(n);
                                    r.x -= e, r.y -= i
                                }), o.forEach(t.edges(), function (n) {
                                    var r = t.edge(n);
                                    o.forEach(r.points, function (t) {
                                        t.x -= e, t.y -= i
                                    }), o.has(r, "x") && (r.x -= e), o.has(r, "y") && (r.y -= i)
                                }), a.width = r - e + c, a.height = u - i + f
                            }(t)
                        }), n("    assignNodeIntersects", function () {
                            !function (t) {
                                o.forEach(t.edges(), function (n) {
                                    var e, r, i = t.edge(n), o = t.node(n.v), u = t.node(n.w);
                                    i.points ? (e = i.points[0], r = i.points[i.points.length - 1]) : (i.points = [], e = u, r = o), i.points.unshift(b.intersectRect(o, e)), i.points.push(b.intersectRect(u, r))
                                })
                            }(t)
                        }), n("    reversePoints", function () {
                            !function (t) {
                                o.forEach(t.edges(), function (n) {
                                    var e = t.edge(n);
                                    e.reversed && e.points.reverse()
                                })
                            }(t)
                        }), n("    acyclic.undo", function () {
                            u.undo(t)
                        })
                    }(n, e)
                }), e("  updateInputGraph", function () {
                    !function (t, n) {
                        o.forEach(t.nodes(), function (e) {
                            var r = t.node(e), i = n.node(e);
                            r && (r.x = i.x, r.y = i.y, n.children(e).length && (r.width = i.width, r.height = i.height))
                        }), o.forEach(t.edges(), function (e) {
                            var r = t.edge(e), i = n.edge(e);
                            r.points = i.points, o.has(i, "x") && (r.x = i.x, r.y = i.y)
                        }), t.graph().width = n.graph().width, t.graph().height = n.graph().height
                    }(t, n)
                })
            })
        };
        var j = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
            O = {ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb"}, _ = ["acyclicer", "ranker", "rankdir", "align"],
            m = ["width", "height"], w = {width: 0, height: 0},
            x = ["minlen", "weight", "width", "height", "labeloffset"],
            E = {minlen: 1, weight: 1, width: 0, height: 0, labeloffset: 10, labelpos: "r"}, M = ["labelpos"]
    }, function (t, n, e) {
        "use strict";
        var r = e(8), i = e(450);
        t.exports = {
            run: function (t) {
                var n = "greedy" === t.graph().acyclicer ? i(t, function (t) {
                    return function (n) {
                        return t.edge(n).weight
                    }
                }(t)) : function (t) {
                    function n(u) {
                        r.has(o, u) || (o[u] = !0, i[u] = !0, r.forEach(t.outEdges(u), function (t) {
                            r.has(i, t.w) ? e.push(t) : n(t.w)
                        }), delete i[u])
                    }

                    var e = [], i = {}, o = {};
                    return r.forEach(t.nodes(), n), e
                }(t);
                r.forEach(n, function (n) {
                    var e = t.edge(n);
                    t.removeEdge(n), e.forwardName = n.name, e.reversed = !0, t.setEdge(n.w, n.v, e, r.uniqueId("rev"))
                })
            }, undo: function (t) {
                r.forEach(t.edges(), function (n) {
                    var e = t.edge(n);
                    if (e.reversed) {
                        t.removeEdge(n);
                        var r = e.forwardName;
                        delete e.reversed, delete e.forwardName, t.setEdge(n.w, n.v, e, r)
                    }
                })
            }
        }
    }, function (t, n, e) {
        function r(t, n, e, r, u) {
            var a = u ? [] : void 0;
            return o.forEach(t.inEdges(r.v), function (r) {
                var o = t.edge(r), c = t.node(r.v);
                u && a.push({v: r.v, w: r.w}), c.out -= o, i(n, e, c)
            }), o.forEach(t.outEdges(r.v), function (r) {
                var o = t.edge(r), u = r.w, a = t.node(u);
                a.in -= o, i(n, e, a)
            }), t.removeNode(r.v), a
        }

        function i(t, n, e) {
            e.out ? e.in ? t[e.out - e.in + n].enqueue(e) : t[t.length - 1].enqueue(e) : t[0].enqueue(e)
        }

        var o = e(8), u = e(16).Graph, a = e(451);
        t.exports = function (t, n) {
            if (t.nodeCount() <= 1) return [];
            var e = function (t, n) {
                var e = new u, r = 0, c = 0;
                o.forEach(t.nodes(), function (t) {
                    e.setNode(t, {v: t, in: 0, out: 0})
                }), o.forEach(t.edges(), function (t) {
                    var i = e.edge(t.v, t.w) || 0, o = n(t), u = i + o;
                    e.setEdge(t.v, t.w, u), c = Math.max(c, e.node(t.v).out += o), r = Math.max(r, e.node(t.w).in += o)
                });
                var f = o.range(c + r + 3).map(function () {
                    return new a
                }), s = r + 1;
                return o.forEach(e.nodes(), function (t) {
                    i(f, s, e.node(t))
                }), {graph: e, buckets: f, zeroIdx: s}
            }(t, n || c), f = function (t, n, e) {
                for (var i, o = [], u = n[n.length - 1], a = n[0]; t.nodeCount();) {
                    for (; i = a.dequeue();) r(t, n, e, i);
                    for (; i = u.dequeue();) r(t, n, e, i);
                    if (t.nodeCount()) for (var c = n.length - 2; c > 0; --c) if (i = n[c].dequeue()) {
                        o = o.concat(r(t, n, e, i, !0));
                        break
                    }
                }
                return o
            }(e.graph, e.buckets, e.zeroIdx);
            return o.flatten(o.map(f, function (n) {
                return t.outEdges(n.v, n.w)
            }), !0)
        };
        var c = o.constant(1)
    }, function (t, n) {
        function e() {
            var t = {};
            t._next = t._prev = t, this._sentinel = t
        }

        function r(t) {
            t._prev._next = t._next, t._next._prev = t._prev, delete t._next, delete t._prev
        }

        function i(t, n) {
            if ("_next" !== t && "_prev" !== t) return n
        }

        t.exports = e, e.prototype.dequeue = function () {
            var t = this._sentinel, n = t._prev;
            if (n !== t) return r(n), n
        }, e.prototype.enqueue = function (t) {
            var n = this._sentinel;
            t._prev && t._next && r(t), t._next = n._next, n._next._prev = t, n._next = t, t._prev = n
        }, e.prototype.toString = function () {
            for (var t = [], n = this._sentinel, e = n._prev; e !== n;) t.push(JSON.stringify(e, i)), e = e._prev;
            return "[" + t.join(", ") + "]"
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(8), i = e(12);
        t.exports = {
            run: function (t) {
                t.graph().dummyChains = [], r.forEach(t.edges(), function (n) {
                    !function (t, n) {
                        var e = n.v, r = t.node(e).rank, o = n.w, u = t.node(o).rank, a = n.name, c = t.edge(n),
                            f = c.labelRank;
                        if (u !== r + 1) {
                            t.removeEdge(n);
                            var s, l, h;
                            for (h = 0, ++r; r < u; ++h, ++r) c.points = [], l = {
                                width: 0,
                                height: 0,
                                edgeLabel: c,
                                edgeObj: n,
                                rank: r
                            }, s = i.addDummyNode(t, "edge", l, "_d"), r === f && (l.width = c.width, l.height = c.height, l.dummy = "edge-label", l.labelpos = c.labelpos), t.setEdge(e, s, {weight: c.weight}, a), 0 === h && t.graph().dummyChains.push(s), e = s;
                            t.setEdge(e, o, {weight: c.weight}, a)
                        }
                    }(t, n)
                })
            }, undo: function (t) {
                r.forEach(t.graph().dummyChains, function (n) {
                    var e, r = t.node(n), i = r.edgeLabel;
                    for (t.setEdge(r.edgeObj, i); r.dummy;) e = t.successors(n)[0], t.removeNode(n), i.points.push({
                        x: r.x,
                        y: r.y
                    }), "edge-label" === r.dummy && (i.x = r.x, i.y = r.y, i.width = r.width, i.height = r.height), n = e, r = t.node(n)
                })
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            u(t)
        }

        var i = e(59).longestPath, o = e(175), u = e(454);
        t.exports = function (t) {
            switch (t.graph().ranker) {
                case"network-simplex":
                    r(t);
                    break;
                case"tight-tree":
                    !function (t) {
                        i(t), o(t)
                    }(t);
                    break;
                case"longest-path":
                    a(t);
                    break;
                default:
                    r(t)
            }
        };
        var a = i
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            t = y(t), d(t);
            var n = p(t);
            u(n), i(n, t);
            for (var e; e = c(n);) s(n, t, e, f(n, t, e))
        }

        function i(t, n) {
            var e = b(t, t.nodes());
            e = e.slice(0, e.length - 1), h.forEach(e, function (e) {
                !function (t, n, e) {
                    var r = t.node(e).parent;
                    t.edge(e, r).cutvalue = o(t, n, e)
                }(t, n, e)
            })
        }

        function o(t, n, e) {
            var r = t.node(e).parent, i = !0, o = n.edge(e, r), u = 0;
            return o || (i = !1, o = n.edge(r, e)), u = o.weight, h.forEach(n.nodeEdges(e), function (o) {
                var a = o.v === e, c = a ? o.w : o.v;
                if (c !== r) {
                    var f = a === i, s = n.edge(o).weight;
                    if (u += f ? s : -s, function (t, n, e) {
                            return t.hasEdge(n, e)
                        }(t, e, c)) {
                        var l = t.edge(e, c).cutvalue;
                        u += f ? -l : l
                    }
                }
            }), u
        }

        function u(t, n) {
            arguments.length < 2 && (n = t.nodes()[0]), a(t, {}, 1, n)
        }

        function a(t, n, e, r, i) {
            var o = e, u = t.node(r);
            return n[r] = !0, h.forEach(t.neighbors(r), function (i) {
                h.has(n, i) || (e = a(t, n, e, i, r))
            }), u.low = o, u.lim = e++, i ? u.parent = i : delete u.parent, e
        }

        function c(t) {
            return h.find(t.edges(), function (n) {
                return t.edge(n).cutvalue < 0
            })
        }

        function f(t, n, e) {
            var r = e.v, i = e.w;
            n.hasEdge(r, i) || (r = e.w, i = e.v);
            var o = t.node(r), u = t.node(i), a = o, c = !1;
            o.lim > u.lim && (a = u, c = !0);
            var f = h.filter(n.edges(), function (n) {
                return c === l(t, t.node(n.v), a) && c !== l(t, t.node(n.w), a)
            });
            return h.minBy(f, function (t) {
                return v(n, t)
            })
        }

        function s(t, n, e, r) {
            var o = e.v, a = e.w;
            t.removeEdge(o, a), t.setEdge(r.v, r.w, {}), u(t), i(t, n), function (t, n) {
                var e = h.find(t.nodes(), function (t) {
                    return !n.node(t).parent
                }), r = g(t, e);
                r = r.slice(1), h.forEach(r, function (e) {
                    var r = t.node(e).parent, i = n.edge(e, r), o = !1;
                    i || (i = n.edge(r, e), o = !0), n.node(e).rank = n.node(r).rank + (o ? i.minlen : -i.minlen)
                })
            }(t, n)
        }

        function l(t, n, e) {
            return e.low <= n.lim && n.lim <= e.lim
        }

        var h = e(8), p = e(175), v = e(59).slack, d = e(59).longestPath, g = e(16).alg.preorder,
            b = e(16).alg.postorder, y = e(12).simplify;
        t.exports = r, r.initLowLimValues = u, r.initCutValues = i, r.calcCutValue = o, r.leaveEdge = c, r.enterEdge = f, r.exchangeEdges = s
    }, function (t, n, e) {
        var r = e(8);
        t.exports = function (t) {
            var n = function (t) {
                function n(o) {
                    var u = i;
                    r.forEach(t.children(o), n), e[o] = {low: u, lim: i++}
                }

                var e = {}, i = 0;
                return r.forEach(t.children(), n), e
            }(t);
            r.forEach(t.graph().dummyChains, function (e) {
                for (var r = t.node(e), i = r.edgeObj, o = function (t, n, e, r) {
                    var i, o, u = [], a = [], c = Math.min(n[e].low, n[r].low), f = Math.max(n[e].lim, n[r].lim);
                    i = e;
                    do {
                        i = t.parent(i), u.push(i)
                    } while (i && (n[i].low > c || f > n[i].lim));
                    for (o = i, i = r; (i = t.parent(i)) !== o;) a.push(i);
                    return {path: u.concat(a.reverse()), lca: o}
                }(t, n, i.v, i.w), u = o.path, a = o.lca, c = 0, f = u[c], s = !0; e !== i.w;) {
                    if (r = t.node(e), s) {
                        for (; (f = u[c]) !== a && t.node(f).maxRank < r.rank;) c++;
                        f === a && (s = !1)
                    }
                    if (!s) {
                        for (; c < u.length - 1 && t.node(f = u[c + 1]).minRank <= r.rank;) c++;
                        f = u[c]
                    }
                    t.setParent(e, f), e = t.successors(e)[0]
                }
            })
        }
    }, function (t, n, e) {
        function r(t, n, e, u, a, c, f) {
            var s = t.children(f);
            if (s.length) {
                var l = o.addBorderNode(t, "_bt"), h = o.addBorderNode(t, "_bb"), p = t.node(f);
                t.setParent(l, f), p.borderTop = l, t.setParent(h, f), p.borderBottom = h, i.forEach(s, function (i) {
                    r(t, n, e, u, a, c, i);
                    var o = t.node(i), s = o.borderTop ? o.borderTop : i, p = o.borderBottom ? o.borderBottom : i,
                        v = o.borderTop ? u : 2 * u, d = s !== p ? 1 : a - c[f] + 1;
                    t.setEdge(l, s, {weight: v, minlen: d, nestingEdge: !0}), t.setEdge(p, h, {
                        weight: v,
                        minlen: d,
                        nestingEdge: !0
                    })
                }), t.parent(f) || t.setEdge(n, l, {weight: 0, minlen: a + c[f]})
            } else f !== n && t.setEdge(n, f, {weight: 0, minlen: e})
        }

        var i = e(8), o = e(12);
        t.exports = {
            run: function (t) {
                var n = o.addDummyNode(t, "root", {}, "_root"), e = function (t) {
                    function n(r, o) {
                        var u = t.children(r);
                        u && u.length && i.forEach(u, function (t) {
                            n(t, o + 1)
                        }), e[r] = o
                    }

                    var e = {};
                    return i.forEach(t.children(), function (t) {
                        n(t, 1)
                    }), e
                }(t), u = i.max(i.values(e)) - 1, a = 2 * u + 1;
                t.graph().nestingRoot = n, i.forEach(t.edges(), function (n) {
                    t.edge(n).minlen *= a
                });
                var c = function (t) {
                    return i.reduce(t.edges(), function (n, e) {
                        return n + t.edge(e).weight
                    }, 0)
                }(t) + 1;
                i.forEach(t.children(), function (i) {
                    r(t, n, a, c, u, e, i)
                }), t.graph().nodeRankFactor = a
            }, cleanup: function (t) {
                var n = t.graph();
                t.removeNode(n.nestingRoot), delete n.nestingRoot, i.forEach(t.edges(), function (n) {
                    t.edge(n).nestingEdge && t.removeEdge(n)
                })
            }
        }
    }, function (t, n, e) {
        function r(t, n, e, r, i, u) {
            var a = {width: 0, height: 0, rank: u, borderType: n}, c = i[n][u - 1],
                f = o.addDummyNode(t, "border", a, e);
            i[n][u] = f, t.setParent(f, r), c && t.setEdge(c, f, {weight: 1})
        }

        var i = e(8), o = e(12);
        t.exports = function (t) {
            function n(e) {
                var o = t.children(e), u = t.node(e);
                if (o.length && i.forEach(o, n), i.has(u, "minRank")) {
                    u.borderLeft = [], u.borderRight = [];
                    for (var a = u.minRank, c = u.maxRank + 1; a < c; ++a) r(t, "borderLeft", "_bl", e, u, a), r(t, "borderRight", "_br", e, u, a)
                }
            }

            i.forEach(t.children(), n)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            a.forEach(t.nodes(), function (n) {
                i(t.node(n))
            }), a.forEach(t.edges(), function (n) {
                i(t.edge(n))
            })
        }

        function i(t) {
            var n = t.width;
            t.width = t.height, t.height = n
        }

        function o(t) {
            t.y = -t.y
        }

        function u(t) {
            var n = t.x;
            t.x = t.y, t.y = n
        }

        var a = e(8);
        t.exports = {
            adjust: function (t) {
                var n = t.graph().rankdir.toLowerCase();
                "lr" !== n && "rl" !== n || r(t)
            }, undo: function (t) {
                var n = t.graph().rankdir.toLowerCase();
                "bt" !== n && "rl" !== n || function (t) {
                    a.forEach(t.nodes(), function (n) {
                        o(t.node(n))
                    }), a.forEach(t.edges(), function (n) {
                        var e = t.edge(n);
                        a.forEach(e.points, o), a.has(e, "y") && o(e)
                    })
                }(t), "lr" !== n && "rl" !== n || (function (t) {
                    a.forEach(t.nodes(), function (n) {
                        u(t.node(n))
                    }), a.forEach(t.edges(), function (n) {
                        var e = t.edge(n);
                        a.forEach(e.points, u), a.has(e, "x") && u(e)
                    })
                }(t), r(t))
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            return o.map(n, function (n) {
                return f(t, n, e)
            })
        }

        function i(t, n) {
            o.forEach(n, function (n) {
                o.forEach(n, function (n, e) {
                    t.node(n).order = e
                })
            })
        }

        var o = e(8), u = e(460), a = e(461), c = e(462), f = e(466), s = e(467), l = e(16).Graph, h = e(12);
        t.exports = function (t) {
            var n = h.maxRank(t), e = r(t, o.range(1, n + 1), "inEdges"), f = r(t, o.range(n - 1, -1, -1), "outEdges"),
                p = u(t);
            i(t, p);
            for (var v, d = Number.POSITIVE_INFINITY, g = 0, b = 0; b < 4; ++g, ++b) {
                !function (t, n) {
                    var e = new l;
                    o.forEach(t, function (t) {
                        var r = t.graph().root, i = c(t, r, e, n);
                        o.forEach(i.vs, function (n, e) {
                            t.node(n).order = e
                        }), s(t, e, i.vs)
                    })
                }(g % 2 ? e : f, g % 4 >= 2), p = h.buildLayerMatrix(t);
                var y = a(t, p);
                y < d && (b = 0, v = o.cloneDeep(p), d = y)
            }
            i(t, v)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(8);
        t.exports = function (t) {
            function n(i) {
                if (!r.has(e, i)) {
                    e[i] = !0;
                    var o = t.node(i);
                    u[o.rank].push(i), r.forEach(t.successors(i), n)
                }
            }

            var e = {}, i = r.filter(t.nodes(), function (n) {
                return !t.children(n).length
            }), o = r.max(r.map(i, function (n) {
                return t.node(n).rank
            })), u = r.map(r.range(o + 1), function () {
                return []
            }), a = r.sortBy(i, function (n) {
                return t.node(n).rank
            });
            return r.forEach(a, n), u
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(8);
        t.exports = function (t, n) {
            for (var e = 0, i = 1; i < n.length; ++i) e += function (t, n, e) {
                for (var i = r.zipObject(e, r.map(e, function (t, n) {
                    return n
                })), o = r.flatten(r.map(n, function (n) {
                    return r.chain(t.outEdges(n)).map(function (n) {
                        return {pos: i[n.w], weight: t.edge(n).weight}
                    }).sortBy("pos").value()
                }), !0), u = 1; u < e.length;) u <<= 1;
                var a = 2 * u - 1;
                u -= 1;
                var c = r.map(new Array(a), function () {
                    return 0
                }), f = 0;
                return r.forEach(o.forEach(function (t) {
                    var n = t.pos + u;
                    c[n] += t.weight;
                    for (var e = 0; n > 0;) n % 2 && (e += c[n + 1]), c[n = n - 1 >> 1] += t.weight;
                    f += t.weight * e
                })), f
            }(t, n[i - 1], n[i]);
            return e
        }
    }, function (t, n, e) {
        function r(t, n, e, c) {
            var f = t.children(n), s = t.node(n), l = s ? s.borderLeft : void 0, h = s ? s.borderRight : void 0, p = {};
            l && (f = i.filter(f, function (t) {
                return t !== l && t !== h
            }));
            var v = o(t, f);
            i.forEach(v, function (n) {
                if (t.children(n.v).length) {
                    var o = r(t, n.v, e, c);
                    p[n.v] = o, i.has(o, "barycenter") && function (t, n) {
                        i.isUndefined(t.barycenter) ? (t.barycenter = n.barycenter, t.weight = n.weight) : (t.barycenter = (t.barycenter * t.weight + n.barycenter * n.weight) / (t.weight + n.weight), t.weight += n.weight)
                    }(n, o)
                }
            });
            var d = u(v, e);
            !function (t, n) {
                i.forEach(t, function (t) {
                    t.vs = i.flatten(t.vs.map(function (t) {
                        return n[t] ? n[t].vs : t
                    }), !0)
                })
            }(d, p);
            var g = a(d, c);
            if (l && (g.vs = i.flatten([l, g.vs, h], !0), t.predecessors(l).length)) {
                var b = t.node(t.predecessors(l)[0]), y = t.node(t.predecessors(h)[0]);
                i.has(g, "barycenter") || (g.barycenter = 0, g.weight = 0), g.barycenter = (g.barycenter * g.weight + b.order + y.order) / (g.weight + 2), g.weight += 2
            }
            return g
        }

        var i = e(8), o = e(463), u = e(464), a = e(465);
        t.exports = r
    }, function (t, n, e) {
        var r = e(8);
        t.exports = function (t, n) {
            return r.map(n, function (n) {
                var e = t.inEdges(n);
                if (e.length) {
                    var i = r.reduce(e, function (n, e) {
                        var r = t.edge(e), i = t.node(e.v);
                        return {sum: n.sum + r.weight * i.order, weight: n.weight + r.weight}
                    }, {sum: 0, weight: 0});
                    return {v: n, barycenter: i.sum / i.weight, weight: i.weight}
                }
                return {v: n}
            })
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(8);
        t.exports = function (t, n) {
            var e = {};
            return r.forEach(t, function (t, n) {
                var i = e[t.v] = {indegree: 0, in: [], out: [], vs: [t.v], i: n};
                r.isUndefined(t.barycenter) || (i.barycenter = t.barycenter, i.weight = t.weight)
            }), r.forEach(n.edges(), function (t) {
                var n = e[t.v], i = e[t.w];
                r.isUndefined(n) || r.isUndefined(i) || (i.indegree++, n.out.push(e[t.w]))
            }), function (t) {
                function n(t) {
                    return function (n) {
                        n.merged || (r.isUndefined(n.barycenter) || r.isUndefined(t.barycenter) || n.barycenter >= t.barycenter) && function (t, n) {
                            var e = 0, r = 0;
                            t.weight && (e += t.barycenter * t.weight, r += t.weight), n.weight && (e += n.barycenter * n.weight, r += n.weight), t.vs = n.vs.concat(t.vs), t.barycenter = e / r, t.weight = r, t.i = Math.min(n.i, t.i), n.merged = !0
                        }(t, n)
                    }
                }

                function e(n) {
                    return function (e) {
                        e.in.push(n), 0 == --e.indegree && t.push(e)
                    }
                }

                for (var i = []; t.length;) {
                    var o = t.pop();
                    i.push(o), r.forEach(o.in.reverse(), n(o)), r.forEach(o.out, e(o))
                }
                return r.chain(i).filter(function (t) {
                    return !t.merged
                }).map(function (t) {
                    return r.pick(t, ["vs", "i", "barycenter", "weight"])
                }).value()
            }(r.filter(e, function (t) {
                return !t.indegree
            }))
        }
    }, function (t, n, e) {
        function r(t, n, e) {
            for (var r; n.length && (r = i.last(n)).i <= e;) n.pop(), t.push(r.vs), e++;
            return e
        }

        var i = e(8), o = e(12);
        t.exports = function (t, n) {
            var e = o.partition(t, function (t) {
                return i.has(t, "barycenter")
            }), u = e.lhs, a = i.sortBy(e.rhs, function (t) {
                return -t.i
            }), c = [], f = 0, s = 0, l = 0;
            u.sort(function (t) {
                return function (n, e) {
                    return n.barycenter < e.barycenter ? -1 : n.barycenter > e.barycenter ? 1 : t ? e.i - n.i : n.i - e.i
                }
            }(!!n)), l = r(c, a, l), i.forEach(u, function (t) {
                l += t.vs.length, c.push(t.vs), f += t.barycenter * t.weight, s += t.weight, l = r(c, a, l)
            });
            var h = {vs: i.flatten(c, !0)};
            return s && (h.barycenter = f / s, h.weight = s), h
        }
    }, function (t, n, e) {
        var r = e(8), i = e(16).Graph;
        t.exports = function (t, n, e) {
            var o = function (t) {
                for (var n; t.hasNode(n = r.uniqueId("_root"));) ;
                return n
            }(t), u = new i({compound: !0}).setGraph({root: o}).setDefaultNodeLabel(function (n) {
                return t.node(n)
            });
            return r.forEach(t.nodes(), function (i) {
                var a = t.node(i), c = t.parent(i);
                (a.rank === n || a.minRank <= n && n <= a.maxRank) && (u.setNode(i), u.setParent(i, c || o), r.forEach(t[e](i), function (n) {
                    var e = n.v === i ? n.w : n.v, o = u.edge(e, i), a = r.isUndefined(o) ? 0 : o.weight;
                    u.setEdge(e, i, {weight: t.edge(n).weight + a})
                }), r.has(a, "minRank") && u.setNode(i, {borderLeft: a.borderLeft[n], borderRight: a.borderRight[n]}))
            }), u
        }
    }, function (t, n, e) {
        var r = e(8);
        t.exports = function (t, n, e) {
            var i, o = {};
            r.forEach(e, function (e) {
                for (var r, u, a = t.parent(e); a;) {
                    if ((r = t.parent(a)) ? (u = o[r], o[r] = a) : (u = i, i = a), u && u !== a) return void n.setEdge(u, a);
                    a = r
                }
            })
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(8), i = e(12), o = e(469).positionX;
        t.exports = function (t) {
            (function (t) {
                var n = i.buildLayerMatrix(t), e = t.graph().ranksep, o = 0;
                r.forEach(n, function (n) {
                    var i = r.max(r.map(n, function (n) {
                        return t.node(n).height
                    }));
                    r.forEach(n, function (n) {
                        t.node(n).y = o + i / 2
                    }), o += i + e
                })
            })(t = i.asNonCompoundGraph(t)), r.forEach(o(t), function (n, e) {
                t.node(e).x = n
            })
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = {};
            return h.reduce(n, function (n, r) {
                var i = 0, u = 0, a = n.length, c = h.last(r);
                return h.forEach(r, function (n, f) {
                    var s = function (t, n) {
                        if (t.node(n).dummy) return h.find(t.predecessors(n), function (n) {
                            return t.node(n).dummy
                        })
                    }(t, n), l = s ? t.node(s).order : a;
                    (s || n === c) && (h.forEach(r.slice(u, f + 1), function (n) {
                        h.forEach(t.predecessors(n), function (r) {
                            var u = t.node(r), a = u.order;
                            !(a < i || l < a) || u.dummy && t.node(n).dummy || o(e, r, n)
                        })
                    }), u = f + 1, i = l)
                }), r
            }), e
        }

        function i(t, n) {
            function e(n, e, i, u, a) {
                var c;
                h.forEach(h.range(e, i), function (e) {
                    c = n[e], t.node(c).dummy && h.forEach(t.predecessors(c), function (n) {
                        var e = t.node(n);
                        e.dummy && (e.order < u || e.order > a) && o(r, n, c)
                    })
                })
            }

            var r = {};
            return h.reduce(n, function (n, r) {
                var i, o = -1, u = 0;
                return h.forEach(r, function (a, c) {
                    if ("border" === t.node(a).dummy) {
                        var f = t.predecessors(a);
                        f.length && (i = t.node(f[0]).order, e(r, u, c, o, i), u = c, o = i)
                    }
                    e(r, u, r.length, i, n.length)
                }), r
            }), r
        }

        function o(t, n, e) {
            if (n > e) {
                var r = n;
                n = e, e = r
            }
            var i = t[n];
            i || (t[n] = i = {}), i[e] = !0
        }

        function u(t, n, e) {
            if (n > e) {
                var r = n;
                n = e, e = r
            }
            return h.has(t[n], e)
        }

        function a(t, n, e, r) {
            var i = {}, o = {}, a = {};
            return h.forEach(n, function (t) {
                h.forEach(t, function (t, n) {
                    i[t] = t, o[t] = t, a[t] = n
                })
            }), h.forEach(n, function (t) {
                var n = -1;
                h.forEach(t, function (t) {
                    var c = r(t);
                    if (c.length) for (var f = ((c = h.sortBy(c, function (t) {
                        return a[t]
                    })).length - 1) / 2, s = Math.floor(f), l = Math.ceil(f); s <= l; ++s) {
                        var p = c[s];
                        o[t] === t && n < a[p] && !u(e, t, p) && (o[p] = t, o[t] = i[t] = i[p], n = a[p])
                    }
                })
            }), {root: i, align: o}
        }

        function c(t, n, e, r, i) {
            function o(t, n) {
                for (var e = a.nodes(), r = e.pop(), i = {}; r;) i[r] ? t(r) : (i[r] = !0, e.push(r), e = e.concat(n(r))), r = e.pop()
            }

            var u = {}, a = function (t, n, e, r) {
                var i = new p, o = t.graph(), u = function (t, n, e) {
                    return function (r, i, o) {
                        var u, a = r.node(i), c = r.node(o), f = 0;
                        if (f += a.width / 2, h.has(a, "labelpos")) switch (a.labelpos.toLowerCase()) {
                            case"l":
                                u = -a.width / 2;
                                break;
                            case"r":
                                u = a.width / 2
                        }
                        if (u && (f += e ? u : -u), u = 0, f += (a.dummy ? n : t) / 2, f += (c.dummy ? n : t) / 2, f += c.width / 2, h.has(c, "labelpos")) switch (c.labelpos.toLowerCase()) {
                            case"l":
                                u = c.width / 2;
                                break;
                            case"r":
                                u = -c.width / 2
                        }
                        return u && (f += e ? u : -u), u = 0, f
                    }
                }(o.nodesep, o.edgesep, r);
                return h.forEach(n, function (n) {
                    var r;
                    h.forEach(n, function (n) {
                        var o = e[n];
                        if (i.setNode(o), r) {
                            var a = e[r], c = i.edge(a, o);
                            i.setEdge(a, o, Math.max(u(t, n, r), c || 0))
                        }
                        r = n
                    })
                }), i
            }(t, n, e, i), c = i ? "borderLeft" : "borderRight";
            return o(function (t) {
                u[t] = a.inEdges(t).reduce(function (t, n) {
                    return Math.max(t, u[n.v] + a.edge(n))
                }, 0)
            }, h.bind(a.predecessors, a)), o(function (n) {
                var e = a.outEdges(n).reduce(function (t, n) {
                    return Math.min(t, u[n.w] - a.edge(n))
                }, Number.POSITIVE_INFINITY), r = t.node(n);
                e !== Number.POSITIVE_INFINITY && r.borderType !== c && (u[n] = Math.max(u[n], e))
            }, h.bind(a.successors, a)), h.forEach(r, function (t) {
                u[t] = u[e[t]]
            }), u
        }

        function f(t, n) {
            return h.minBy(h.values(n), function (n) {
                var e = Number.NEGATIVE_INFINITY, r = Number.POSITIVE_INFINITY;
                return h.forIn(n, function (n, i) {
                    var o = function (t, n) {
                        return t.node(n).width
                    }(t, i) / 2;
                    e = Math.max(n + o, e), r = Math.min(n - o, r)
                }), e - r
            })
        }

        function s(t, n) {
            var e = h.values(n), r = h.min(e), i = h.max(e);
            h.forEach(["u", "d"], function (e) {
                h.forEach(["l", "r"], function (o) {
                    var u, a = e + o, c = t[a];
                    if (c !== n) {
                        var f = h.values(c);
                        (u = "l" === o ? r - h.min(f) : i - h.max(f)) && (t[a] = h.mapValues(c, function (t) {
                            return t + u
                        }))
                    }
                })
            })
        }

        function l(t, n) {
            return h.mapValues(t.ul, function (e, r) {
                if (n) return t[n.toLowerCase()][r];
                var i = h.sortBy(h.map(t, r));
                return (i[1] + i[2]) / 2
            })
        }

        var h = e(8), p = e(16).Graph, v = e(12);
        t.exports = {
            positionX: function (t) {
                var n, e = v.buildLayerMatrix(t), o = h.merge(r(t, e), i(t, e)), u = {};
                h.forEach(["u", "d"], function (r) {
                    n = "u" === r ? e : h.values(e).reverse(), h.forEach(["l", "r"], function (e) {
                        "r" === e && (n = h.map(n, function (t) {
                            return h.values(t).reverse()
                        }));
                        var i = h.bind("u" === r ? t.predecessors : t.successors, t), f = a(0, n, o, i),
                            s = c(t, n, f.root, f.align, "r" === e);
                        "r" === e && (s = h.mapValues(s, function (t) {
                            return -t
                        })), u[r + e] = s
                    })
                });
                var p = f(t, u);
                return s(u, p), l(u, t.graph().align)
            },
            findType1Conflicts: r,
            findType2Conflicts: i,
            addConflict: o,
            hasConflict: u,
            verticalAlignment: a,
            horizontalCompaction: c,
            alignCoordinates: s,
            findSmallestWidthAlignment: f,
            balance: l
        }
    }, function (t, n, e) {
        var r = e(8), i = e(12), o = e(16).Graph;
        t.exports = {
            debugOrdering: function (t) {
                var n = i.buildLayerMatrix(t), e = new o({compound: !0, multigraph: !0}).setGraph({});
                return r.forEach(t.nodes(), function (n) {
                    e.setNode(n, {label: n}), e.setParent(n, "layer" + t.node(n).rank)
                }), r.forEach(t.edges(), function (t) {
                    e.setEdge(t.v, t.w, {}, t.name)
                }), r.forEach(n, function (t, n) {
                    var i = "layer" + n;
                    e.setNode(i, {rank: "same"}), r.reduce(t, function (t, n) {
                        return e.setEdge(t, n, {style: "invis"}), n
                    })
                }), e
            }
        }
    }, function (t, n) {
        t.exports = "0.8.2"
    }, function (t, n, e) {
        function r(t, n) {
            n = i({}, d, n);
            var e = null;
            o(n.nodeAlign) ? e = v[n.nodeAlign] : u(n.nodeAlign) && (e = n.nodeAlign);
            var r = c().links(function (t) {
                return t.edges
            }).nodeWidth(n.nodeWidth).nodePadding(n.nodePadding).extent([[0, 0], [1, 1]]);
            u(n.nodeId) && r.nodeId(n.nodeId), e && r.nodeAlign(e), r(t), t.nodes.forEach(function (t) {
                var n = t.x0, e = t.x1, r = t.y0, i = t.y1;
                t.x = [n, e, e, n], t.y = [r, r, i, i]
            }), t.edges.forEach(function (t) {
                var n = t.source, e = t.target, r = n.x1, i = e.x0;
                t.x = [r, r, i, i];
                var o = t.width / 2;
                t.y = [t.y0 + o, t.y0 - o, t.y1 + o, t.y1 - o]
            })
        }

        var i = e(3), o = e(10), u = e(11), a = e(473), c = a.sankey, f = a.sankeyLeft, s = a.sankeyRight,
            l = a.sankeyCenter, h = a.sankeyJustify, p = e(2).registerTransform,
            v = {sankeyLeft: f, sankeyRight: s, sankeyCenter: l, sankeyJustify: h}, d = {
                value: function (t) {
                    return t.value
                }, source: function (t) {
                    return t.source
                }, target: function (t) {
                    return t.target
                }, nodeAlign: "sankeyJustify", nodeWidth: .02, nodePadding: .02
            };
        p("diagram.sankey", r), p("sankey", r)
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(474);
        e.d(n, "sankey", function () {
            return r.a
        });
        var i = e(176);
        e.d(n, "sankeyCenter", function () {
            return i.a
        }), e.d(n, "sankeyLeft", function () {
            return i.c
        }), e.d(n, "sankeyRight", function () {
            return i.d
        }), e.d(n, "sankeyJustify", function () {
            return i.b
        });
        var o = e(482);
        e.d(n, "sankeyLinkHorizontal", function () {
            return o.a
        })
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return o(t.source, n.source) || t.index - n.index
        }

        function i(t, n) {
            return o(t.target, n.target) || t.index - n.index
        }

        function o(t, n) {
            return t.y0 - n.y0
        }

        function u(t) {
            return t.value
        }

        function a(t) {
            return (t.y0 + t.y1) / 2
        }

        function c(t) {
            return a(t.source) * t.value
        }

        function f(t) {
            return a(t.target) * t.value
        }

        function s(t) {
            return t.index
        }

        function l(t) {
            return t.nodes
        }

        function h(t) {
            return t.links
        }

        function p(t, n) {
            var e = t.get(n);
            if (!e) throw new Error("missing: " + n);
            return e
        }

        var v = e(14), d = e(475), g = e(176), b = e(481);
        n.a = function () {
            function t() {
                var t = {nodes: E.apply(null, arguments), links: M.apply(null, arguments)};
                return function (t) {
                    t.nodes.forEach(function (t, n) {
                        t.index = n, t.sourceLinks = [], t.targetLinks = []
                    });
                    var n = Object(d.a)(t.nodes, w);
                    t.links.forEach(function (t, e) {
                        t.index = e;
                        var r = t.source, i = t.target;
                        "object" != typeof r && (r = t.source = p(n, r)), "object" != typeof i && (i = t.target = p(n, i)), r.sourceLinks.push(t), i.targetLinks.push(t)
                    })
                }(t), function (t) {
                    t.nodes.forEach(function (t) {
                        t.value = Math.max(Object(v.sum)(t.sourceLinks, u), Object(v.sum)(t.targetLinks, u))
                    })
                }(t), function (t) {
                    var n, r, i;
                    for (n = t.nodes, r = [], i = 0; n.length; ++i, n = r, r = []) n.forEach(function (t) {
                        t.depth = i, t.sourceLinks.forEach(function (t) {
                            r.indexOf(t.target) < 0 && r.push(t.target)
                        })
                    });
                    for (n = t.nodes, r = [], i = 0; n.length; ++i, n = r, r = []) n.forEach(function (t) {
                        t.height = i, t.targetLinks.forEach(function (t) {
                            r.indexOf(t.source) < 0 && r.push(t.source)
                        })
                    });
                    var o = (j - e - _) / (i - 1);
                    t.nodes.forEach(function (t) {
                        t.x1 = (t.x0 = e + Math.max(0, Math.min(i - 1, Math.floor(x.call(null, t, i)))) * o) + _
                    })
                }(t), function (t) {
                    function n() {
                        e.forEach(function (t) {
                            var n, e, r, i = y, u = t.length;
                            for (t.sort(o), r = 0; r < u; ++r) n = t[r], (e = i - n.y0) > 0 && (n.y0 += e, n.y1 += e), i = n.y1 + m;
                            if ((e = i - m - O) > 0) for (i = n.y0 -= e, n.y1 -= e, r = u - 2; r >= 0; --r) n = t[r], (e = n.y1 + m - i) > 0 && (n.y0 -= e, n.y1 -= e), i = n.y0
                        })
                    }

                    var e = Object(d.b)().key(function (t) {
                        return t.x0
                    }).sortKeys(v.ascending).entries(t.nodes).map(function (t) {
                        return t.values
                    });
                    (function () {
                        var n = Object(v.min)(e, function (t) {
                            return (O - y - (t.length - 1) * m) / Object(v.sum)(t, u)
                        });
                        e.forEach(function (t) {
                            t.forEach(function (t, e) {
                                t.y1 = (t.y0 = e) + t.value * n
                            })
                        }), t.links.forEach(function (t) {
                            t.width = t.value * n
                        })
                    })(), n();
                    for (var r = 1, i = T; i > 0; --i) !function (t) {
                        e.slice().reverse().forEach(function (n) {
                            n.forEach(function (n) {
                                if (n.sourceLinks.length) {
                                    var e = (Object(v.sum)(n.sourceLinks, f) / Object(v.sum)(n.sourceLinks, u) - a(n)) * t;
                                    n.y0 += e, n.y1 += e
                                }
                            })
                        })
                    }(r *= .99), n(), function (t) {
                        e.forEach(function (n) {
                            n.forEach(function (n) {
                                if (n.targetLinks.length) {
                                    var e = (Object(v.sum)(n.targetLinks, c) / Object(v.sum)(n.targetLinks, u) - a(n)) * t;
                                    n.y0 += e, n.y1 += e
                                }
                            })
                        })
                    }(r), n()
                }(t), n(t), t
            }

            function n(t) {
                t.nodes.forEach(function (t) {
                    t.sourceLinks.sort(i), t.targetLinks.sort(r)
                }), t.nodes.forEach(function (t) {
                    var n = t.y0, e = n;
                    t.sourceLinks.forEach(function (t) {
                        t.y0 = n + t.width / 2, n += t.width
                    }), t.targetLinks.forEach(function (t) {
                        t.y1 = e + t.width / 2, e += t.width
                    })
                })
            }

            var e = 0, y = 0, j = 1, O = 1, _ = 24, m = 8, w = s, x = g.b, E = l, M = h, T = 32;
            return t.update = function (t) {
                return n(t), t
            }, t.nodeId = function (n) {
                return arguments.length ? (w = "function" == typeof n ? n : Object(b.a)(n), t) : w
            }, t.nodeAlign = function (n) {
                return arguments.length ? (x = "function" == typeof n ? n : Object(b.a)(n), t) : x
            }, t.nodeWidth = function (n) {
                return arguments.length ? (_ = +n, t) : _
            }, t.nodePadding = function (n) {
                return arguments.length ? (m = +n, t) : m
            }, t.nodes = function (n) {
                return arguments.length ? (E = "function" == typeof n ? n : Object(b.a)(n), t) : E
            }, t.links = function (n) {
                return arguments.length ? (M = "function" == typeof n ? n : Object(b.a)(n), t) : M
            }, t.size = function (n) {
                return arguments.length ? (e = y = 0, j = +n[0], O = +n[1], t) : [j - e, O - y]
            }, t.extent = function (n) {
                return arguments.length ? (e = +n[0][0], j = +n[1][0], y = +n[0][1], O = +n[1][1], t) : [[e, y], [j, O]]
            }, t.iterations = function (n) {
                return arguments.length ? (T = +n, t) : T
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(476);
        e.d(n, "b", function () {
            return r.a
        });
        e(477);
        var i = e(94);
        e.d(n, "a", function () {
            return i.a
        });
        e(478), e(479), e(480)
    }, function (t, n, e) {
        "use strict";

        function r() {
            return {}
        }

        function i(t, n, e) {
            t[n] = e
        }

        function o() {
            return Object(a.a)()
        }

        function u(t, n, e) {
            t.set(n, e)
        }

        var a = e(94);
        n.a = function () {
            function t(n, r, i, o) {
                if (r >= s.length) return null != e && n.sort(e), null != c ? c(n) : n;
                for (var u, f, l, h = -1, p = n.length, v = s[r++], d = Object(a.a)(), g = i(); ++h < p;) (l = d.get(u = v(f = n[h]) + "")) ? l.push(f) : d.set(u, [f]);
                return d.each(function (n, e) {
                    o(g, e, t(n, r, i, o))
                }), g
            }

            function n(t, e) {
                if (++e > s.length) return t;
                var r, i = l[e - 1];
                return null != c && e >= s.length ? r = t.entries() : (r = [], t.each(function (t, i) {
                    r.push({key: i, values: n(t, e)})
                })), null != i ? r.sort(function (t, n) {
                    return i(t.key, n.key)
                }) : r
            }

            var e, c, f, s = [], l = [];
            return f = {
                object: function (n) {
                    return t(n, 0, r, i)
                }, map: function (n) {
                    return t(n, 0, o, u)
                }, entries: function (e) {
                    return n(t(e, 0, o, u), 0)
                }, key: function (t) {
                    return s.push(t), f
                }, sortKeys: function (t) {
                    return l[s.length - 1] = t, f
                }, sortValues: function (t) {
                    return e = t, f
                }, rollup: function (t) {
                    return c = t, f
                }
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
        }

        function i(t, n) {
            var e = new r;
            if (t instanceof r) t.each(function (t) {
                e.add(t)
            }); else if (t) {
                var i = -1, o = t.length;
                if (null == n) for (; ++i < o;) e.add(t[i]); else for (; ++i < o;) e.add(n(t[i], i, t))
            }
            return e
        }

        var o = e(94), u = o.a.prototype;
        r.prototype = i.prototype = {
            constructor: r, has: u.has, add: function (t) {
                return t += "", this[o.b + t] = t, this
            }, remove: u.remove, clear: u.clear, values: u.keys, size: u.size, empty: u.empty, each: u.each
        }
    }, function (t, n, e) {
        "use strict"
    }, function (t, n, e) {
        "use strict"
    }, function (t, n, e) {
        "use strict"
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return [t.source.x1, t.y0]
        }

        function i(t) {
            return [t.target.x0, t.y1]
        }

        var o = e(483);
        n.a = function () {
            return Object(o.a)().source(r).target(i)
        }
    }, function (t, n, e) {
        "use strict";
        e(484), e(177), e(95), e(485), e(488), e(179), e(180);
        var r = e(489);
        e.d(n, "a", function () {
            return r.a
        });
        e(490), e(182), e(183), e(184), e(186), e(185), e(187), e(188), e(491), e(492), e(62), e(493), e(189), e(190), e(63), e(494), e(495), e(97), e(496), e(60), e(497), e(498), e(499), e(500), e(501), e(502), e(47), e(503), e(504), e(98), e(505), e(506), e(48), e(507)
    }, function (t, n, e) {
        "use strict";
        e(33), e(27), e(46)
    }, function (t, n, e) {
        "use strict";
        e(27), e(486), e(487), e(46)
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return t
        }
    }, function (t, n, e) {
        "use strict";
        e(178), e(177), e(179)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t.source
        }

        function i(t) {
            return t.target
        }

        function o(t) {
            function n() {
                var n, r = c.a.call(arguments), i = e.apply(this, r), f = o.apply(this, r);
                if (h || (h = n = Object(a.path)()), t(h, +u.apply(this, (r[0] = i, r)), +l.apply(this, r), +u.apply(this, (r[0] = f, r)), +l.apply(this, r)), n) return h = null, n + "" || null
            }

            var e = r, o = i, u = s.a, l = s.b, h = null;
            return n.source = function (t) {
                return arguments.length ? (e = t, n) : e
            }, n.target = function (t) {
                return arguments.length ? (o = t, n) : o
            }, n.x = function (t) {
                return arguments.length ? (u = "function" == typeof t ? t : Object(f.a)(+t), n) : u
            }, n.y = function (t) {
                return arguments.length ? (l = "function" == typeof t ? t : Object(f.a)(+t), n) : l
            }, n.context = function (t) {
                return arguments.length ? (h = null == t ? null : t, n) : h
            }, n
        }

        function u(t, n, e, r, i) {
            t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i)
        }

        n.a = function () {
            return o(u)
        };
        var a = e(33), c = e(181), f = e(27), s = e(96);
        e(180)
    }, function (t, n, e) {
        "use strict";
        e(33);
        var r = e(182), i = e(183), o = e(184), u = e(185), a = e(186), c = e(187), f = e(188);
        e(27), r.a, i.a, o.a, a.a, u.a, c.a, f.a
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._context = t
        }

        var i = e(61), o = e(62);
        r.prototype = {
            areaStart: i.a, areaEnd: i.a, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x2, this._y2), this._context.closePath();
                        break;
                    case 2:
                        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                }
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._x2 = t, this._y2 = n;
                        break;
                    case 1:
                        this._point = 2, this._x3 = t, this._y3 = n;
                        break;
                    case 2:
                        this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                        break;
                    default:
                        Object(o.b)(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._context = t
        }

        var i = e(62);
        r.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                        var e = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + n) / 6;
                        this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        Object(i.b)(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._basis = new i.a(t), this._beta = n
        }

        var i = e(62);
        r.prototype = {
            lineStart: function () {
                this._x = [], this._y = [], this._basis.lineStart()
            }, lineEnd: function () {
                var t = this._x, n = this._y, e = t.length - 1;
                if (e > 0) for (var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * u), this._beta * n[c] + (1 - this._beta) * (o + r * a));
                this._x = this._y = null, this._basis.lineEnd()
            }, point: function (t, n) {
                this._x.push(+t), this._y.push(+n)
            }
        };
        (function t(n) {
            function e(t) {
                return 1 === n ? new i.a(t) : new r(t, n)
            }

            return e.beta = function (n) {
                return t(+n)
            }, e
        })(.85)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._context = t, this._alpha = n
        }

        var i = e(189), o = e(61), u = e(97);
        r.prototype = {
            areaStart: o.a, areaEnd: o.a, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            }, point: function (t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t, r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                    default:
                        Object(u.a)(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        (function t(n) {
            function e(t) {
                return n ? new r(t, n) : new i.a(t, 0)
            }

            return e.alpha = function (n) {
                return t(+n)
            }, e
        })(.5)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._context = t, this._alpha = n
        }

        var i = e(190), o = e(97);
        r.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t, r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        Object(o.a)(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        (function t(n) {
            function e(t) {
                return n ? new r(t, n) : new i.a(t, 0)
            }

            return e.alpha = function (n) {
                return t(+n)
            }, e
        })(.5)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._context = t
        }

        var i = e(61);
        r.prototype = {
            areaStart: i.a, areaEnd: i.a, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                this._point && this._context.closePath()
            }, point: function (t, n) {
                t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t < 0 ? -1 : 1
        }

        function i(t, n, e) {
            var i = t._x1 - t._x0, o = n - t._x1, u = (t._y1 - t._y0) / (i || o < 0 && -0),
                a = (e - t._y1) / (o || i < 0 && -0), c = (u * o + a * i) / (i + o);
            return (r(u) + r(a)) * Math.min(Math.abs(u), Math.abs(a), .5 * Math.abs(c)) || 0
        }

        function o(t, n) {
            var e = t._x1 - t._x0;
            return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
        }

        function u(t, n, e) {
            var r = t._x0, i = t._y0, o = t._x1, u = t._y1, a = (o - r) / 3;
            t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u)
        }

        function a(t) {
            this._context = t
        }

        function c(t) {
            this._context = new f(t)
        }

        function f(t) {
            this._context = t
        }

        a.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x1, this._y1);
                        break;
                    case 3:
                        u(this, this._t0, o(this, this._t0))
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                var e = NaN;
                if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, u(this, o(this, e = i(this, t, n)), e);
                            break;
                        default:
                            u(this, this._t0, e = i(this, t, n))
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                }
            }
        }, (c.prototype = Object.create(a.prototype)).point = function (t, n) {
            a.prototype.point.call(this, n, t)
        }, f.prototype = {
            moveTo: function (t, n) {
                this._context.moveTo(n, t)
            }, closePath: function () {
                this._context.closePath()
            }, lineTo: function (t, n) {
                this._context.lineTo(n, t)
            }, bezierCurveTo: function (t, n, e, r, i, o) {
                this._context.bezierCurveTo(n, t, r, e, o, i)
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._context = t
        }

        function i(t) {
            var n, e, r = t.length - 1, i = new Array(r), o = new Array(r), u = new Array(r);
            for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
            for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, u[n] -= e * u[n - 1];
            for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (u[n] - i[n + 1]) / o[n];
            for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
            return [i, o]
        }

        r.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x = [], this._y = []
            }, lineEnd: function () {
                var t = this._x, n = this._y, e = t.length;
                if (e) if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]); else for (var r = i(t), o = i(n), u = 0, a = 1; a < e; ++u, ++a) this._context.bezierCurveTo(r[0][u], o[0][u], r[1][u], o[1][u], t[a], n[a]);
                (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
            }, point: function (t, n) {
                this._x.push(+t), this._y.push(+n)
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._context = t, this._t = n
        }

        r.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x = this._y = NaN, this._point = 0
            }, lineEnd: function () {
                0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n); else {
                            var e = this._x * (1 - this._t) + t * this._t;
                            this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                        }
                }
                this._x = t, this._y = n
            }
        }
    }, function (t, n, e) {
        "use strict";
        e(181), e(27), e(47), e(48)
    }, function (t, n, e) {
        "use strict";
        e(47)
    }, function (t, n, e) {
        "use strict"
    }, function (t, n, e) {
        "use strict";
        e(47)
    }, function (t, n, e) {
        "use strict";
        e(47)
    }, function (t, n, e) {
        "use strict";
        e(98)
    }, function (t, n, e) {
        "use strict";
        e(48), e(98)
    }, function (t, n, e) {
        "use strict";
        e(48)
    }, function (t, n, e) {
        function r(t, n) {
            var e = (n = i({}, f, n)).as;
            if (!u(e) || 2 !== e.length) throw new TypeError("Invalid as: must be an array with two strings!");
            var r = e[0], a = e[1], s = c(n);
            if (!u(s) && 2 !== s.length) throw new TypeError("Invalid fields: must be an array with two strings!");
            var l = s[0], h = s[1], p = t.rows, v = p.map(function (t) {
                return [t[l], t[h]]
            }), d = o.voronoi();
            n.extend && d.extent(n.extend), n.size && d.size(n.size);
            var g = d(v).polygons();
            p.forEach(function (t, n) {
                var e = g[n].filter(function (t) {
                    return !!t
                });
                t[r] = e.map(function (t) {
                    return t[0]
                }), t[a] = e.map(function (t) {
                    return t[1]
                })
            })
        }

        var i = e(3), o = e(509), u = e(6), a = e(2).registerTransform, c = e(7).getFields, f = {as: ["_x", "_y"]};
        a("diagram.voronoi", r), a("voronoi", r)
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(510);
        e.d(n, "voronoi", function () {
            return r.a
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(511), i = e(512), o = e(49);
        n.a = function () {
            function t(t) {
                return new o.d(t.map(function (r, i) {
                    var u = [Math.round(n(r, i, t) / o.f) * o.f, Math.round(e(r, i, t) / o.f) * o.f];
                    return u.index = i, u.data = r, u
                }), u)
            }

            var n = i.a, e = i.b, u = null;
            return t.polygons = function (n) {
                return t(n).polygons()
            }, t.links = function (n) {
                return t(n).links()
            }, t.triangles = function (n) {
                return t(n).triangles()
            }, t.x = function (e) {
                return arguments.length ? (n = "function" == typeof e ? e : Object(r.a)(+e), t) : n
            }, t.y = function (n) {
                return arguments.length ? (e = "function" == typeof n ? n : Object(r.a)(+n), t) : e
            }, t.extent = function (n) {
                return arguments.length ? (u = null == n ? null : [[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]], t) : u && [[u[0][0], u[0][1]], [u[1][0], u[1][1]]]
            }, t.size = function (n) {
                return arguments.length ? (u = null == n ? null : [[0, 0], [+n[0], +n[1]]], t) : u && [u[1][0] - u[0][0], u[1][1] - u[0][1]]
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return t[0]
        }, n.b = function (t) {
            return t[1]
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            var n = l.pop() || new function () {
                Object(u.a)(this), this.edge = this.site = this.circle = null
            };
            return n.site = t, n
        }

        function i(t) {
            Object(c.b)(t), s.a.remove(t), l.push(t), Object(u.a)(t)
        }

        function o(t, n) {
            var e = t.site, r = e[0], i = e[1], o = i - n;
            if (!o) return r;
            var u = t.P;
            if (!u) return -1 / 0;
            var a = (e = u.site)[0], c = e[1], f = c - n;
            if (!f) return a;
            var s = a - r, l = 1 / o - 1 / f, h = s / f;
            return l ? (-h + Math.sqrt(h * h - 2 * l * (s * s / (-2 * f) - c + f / 2 + i - o / 2))) / l + r : (r + a) / 2
        }

        n.b = function (t) {
            var n = t.circle, e = n.x, r = n.cy, o = [e, r], u = t.P, a = t.N, l = [t];
            i(t);
            for (var h = u; h.circle && Math.abs(e - h.circle.x) < s.f && Math.abs(r - h.circle.cy) < s.f;) u = h.P, l.unshift(h), i(h), h = u;
            l.unshift(h), Object(c.b)(h);
            for (var p = a; p.circle && Math.abs(e - p.circle.x) < s.f && Math.abs(r - p.circle.cy) < s.f;) a = p.N, l.push(p), i(p), p = a;
            l.push(p), Object(c.b)(p);
            var v, d = l.length;
            for (v = 1; v < d; ++v) p = l[v], h = l[v - 1], Object(f.d)(p.edge, h.site, p.site, o);
            h = l[0], (p = l[d - 1]).edge = Object(f.c)(h.site, p.site, null, o), Object(c.a)(h), Object(c.a)(p)
        }, n.a = function (t) {
            for (var n, e, i, u, l = t[0], h = t[1], p = s.a._; p;) if ((i = o(p, h) - l) > s.f) p = p.L; else {
                if (!((u = l - function (t, n) {
                        var e = t.N;
                        if (e) return o(e, n);
                        var r = t.site;
                        return r[1] === n ? r[0] : 1 / 0
                    }(p, h)) > s.f)) {
                    i > -s.f ? (n = p.P, e = p) : u > -s.f ? (n = p, e = p.N) : n = e = p;
                    break
                }
                if (!p.R) {
                    n = p;
                    break
                }
                p = p.R
            }
            Object(a.c)(t);
            var v = r(t);
            if (s.a.insert(n, v), n || e) {
                if (n === e) return Object(c.b)(n), e = r(n.site), s.a.insert(v, e), v.edge = e.edge = Object(f.c)(n.site, v.site), Object(c.a)(n), void Object(c.a)(e);
                if (e) {
                    Object(c.b)(n), Object(c.b)(e);
                    var d = n.site, g = d[0], b = d[1], y = t[0] - g, j = t[1] - b, O = e.site, _ = O[0] - g,
                        m = O[1] - b, w = 2 * (y * m - j * _), x = y * y + j * j, E = _ * _ + m * m,
                        M = [(m * x - j * E) / w + g, (y * E - _ * x) / w + b];
                    Object(f.d)(e.edge, d, O, M), v.edge = Object(f.c)(d, t, null, M), e.edge = Object(f.c)(t, O, null, M), Object(c.a)(n), Object(c.a)(e)
                } else v.edge = Object(f.c)(n.site, v.site)
            }
        };
        var u = e(99), a = e(191), c = e(192), f = e(100), s = e(49), l = []
    }, function (t, n, e) {
        function r(t, n) {
            if (t.dataType !== c) throw new TypeError("Invalid DataView: This transform is for Hierarchy data only!");
            var e = t.root, r = (n = i({}, l, n)).as;
            if (!u(r) || 2 !== r.length) throw new TypeError('Invalid as: it must be an array with 2 strings (e.g. [ "x", "y" ])!');
            var a;
            try {
                a = s(n)
            } catch (t) {
                console.warn(t)
            }
            a && e.sum(function (t) {
                return t[a]
            });
            var f = o.cluster();
            f.size(n.size), n.nodeSize && f.nodeSize(n.nodeSize), n.separation && f.separation(n.separation), f(e);
            var h = r[0], p = r[1];
            e.each(function (t) {
                t[h] = t.x, t[p] = t.y
            })
        }

        var i = e(3), o = e(34), u = e(6), a = e(2), c = a.HIERARCHY, f = a.registerTransform, s = e(7).getField,
            l = {field: "value", size: [1, 1], nodeSize: null, separation: null, as: ["x", "y"]};
        f("hierarchy.cluster", r), f("dendrogram", r)
    }, function (t, n, e) {
        function r(t, n) {
            var e = t.root;
            if (n = Object.assign({}, c, n), t.dataType !== u) throw new TypeError("Invalid DataView: This transform is for Hierarchy data only!");
            t.root = i.compactBox(e, n)
        }

        var i = e(101), o = e(2), u = o.HIERARCHY, a = o.registerTransform, c = {};
        a("hierarchy.compact-box", r), a("compact-box-tree", r), a("non-layered-tidy-tree", r), a("mindmap-logical", r)
    }, function (t, n, e) {
        var r = e(64), i = e(517), o = e(102), u = e(28), a = function (t) {
            function n() {
                return t.apply(this, arguments) || this
            }

            !function (t, n) {
                t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n
            }(n, t);
            return n.prototype.execute = function () {
                return o(this.rootNode, this.options, i)
            }, n
        }(r), c = {};
        t.exports = function (t, n) {
            return n = u.assign({}, c, n), new a(t, n).execute()
        }
    }, function (t, n) {
        function e(t, n, e, r) {
            void 0 === r && (r = []);
            var i = this;
            i.w = t || 0, i.h = n || 0, i.y = e || 0, i.x = 0, i.c = r || [], i.cs = r.length, i.prelim = 0, i.mod = 0, i.shift = 0, i.change = 0, i.tl = null, i.tr = null, i.el = null, i.er = null, i.msel = 0, i.mser = 0
        }

        function r(t, n, e) {
            e ? t.y += n : t.x += n, t.children.forEach(function (t) {
                r(t, n, e)
            })
        }

        function i(t, n) {
            var e = n ? t.y : t.x;
            return t.children.forEach(function (t) {
                e = Math.min(i(t, n), e)
            }), e
        }

        function o(t, n, e) {
            e ? n.y = t.x : n.x = t.x, t.c.forEach(function (t, r) {
                o(t, n.children[r], e)
            })
        }

        function u(t, n, e) {
            void 0 === e && (e = 0), n ? (t.x = e, e += t.width) : (t.y = e, e += t.height), t.children.forEach(function (t) {
                u(t, n, e)
            })
        }

        e.fromNode = function (t, n) {
            if (!t) return null;
            var r = [];
            return t.children.forEach(function (t) {
                r.push(e.fromNode(t, n))
            }), n ? new e(t.height, t.width, t.x, r) : new e(t.width, t.height, t.y, r)
        }, t.exports = function (t, n) {
            function a(t) {
                if (0 !== t.cs) {
                    a(t.c[0]);
                    for (var n = l(f(t.c[0].el), 0, null), e = 1; e < t.cs; ++e) {
                        a(t.c[e]);
                        var r = f(t.c[e].er);
                        !function (t, n, e) {
                            var r = t.c[n - 1], i = r.mod, o = t.c[n], u = o.mod;
                            for (; null !== r && null !== o;) {
                                f(r) > e.low && (e = e.nxt);
                                var a = i + r.prelim + r.w - (u + o.prelim);
                                a > 0 && (u += a, function (t, n, e, r) {
                                    t.c[n].mod += r, t.c[n].msel += r, t.c[n].mser += r, function (t, n, e, r) {
                                        if (e !== n - 1) {
                                            var i = n - e;
                                            t.c[e + 1].shift += r / i, t.c[n].shift -= r / i, t.c[n].change -= r - r / i
                                        }
                                    }(t, n, e, r)
                                }(t, n, e.index, a));
                                var c = f(r), s = f(o);
                                c <= s && null !== (r = function (t) {
                                    return 0 === t.cs ? t.tr : t.c[t.cs - 1]
                                }(r)) && (i += r.mod), c >= s && null !== (o = function (t) {
                                    return 0 === t.cs ? t.tl : t.c[0]
                                }(o)) && (u += o.mod)
                            }
                            !r && o ? function (t, n, e, r) {
                                var i = t.c[0].el;
                                i.tl = e;
                                var o = r - e.mod - t.c[0].msel;
                                i.mod += o, i.prelim -= o, t.c[0].el = t.c[n].el, t.c[0].msel = t.c[n].msel
                            }(t, n, o, u) : r && !o && function (t, n, e, r) {
                                var i = t.c[n].er;
                                i.tr = e;
                                var o = r - e.mod - t.c[n].mser;
                                i.mod += o, i.prelim -= o, t.c[n].er = t.c[n - 1].er, t.c[n].mser = t.c[n - 1].mser
                            }(t, n, r, i)
                        }(t, e, n), n = l(r, e, n)
                    }
                    !function (t) {
                        t.prelim = (t.c[0].prelim + t.c[0].mod + t.c[t.cs - 1].mod + t.c[t.cs - 1].prelim + t.c[t.cs - 1].w) / 2 - t.w / 2
                    }(t), c(t)
                } else c(t)
            }

            function c(t) {
                0 === t.cs ? (t.el = t, t.er = t, t.msel = t.mser = 0) : (t.el = t.c[0].el, t.msel = t.c[0].msel, t.er = t.c[t.cs - 1].er, t.mser = t.c[t.cs - 1].mser)
            }

            function f(t) {
                return t.y + t.h
            }

            function s(t, n) {
                n += t.mod, t.x = t.prelim + n, function (t) {
                    for (var n = 0, e = 0, r = 0; r < t.cs; r++) n += t.c[r].shift, e += n + t.c[r].change, t.c[r].mod += e
                }(t);
                for (var e = 0; e < t.cs; e++) s(t.c[e], n)
            }

            function l(t, n, e) {
                for (; null !== e && t >= e.low;) e = e.nxt;
                return {low: t, index: n, nxt: e}
            }

            void 0 === n && (n = {});
            var h = n.isHorizontal;
            u(t, h);
            var p = e.fromNode(t, h);
            return a(p), s(p, 0), o(p, t, h), function (t, n) {
                r(t, -i(t, n), n)
            }(t, h), t
        }
    }, function (t, n, e) {
        var r = e(64), i = e(519), o = e(102), u = e(28), a = function (t) {
            function n() {
                return t.apply(this, arguments) || this
            }

            !function (t, n) {
                t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n
            }(n, t);
            return n.prototype.execute = function () {
                return this.rootNode.width = 0, o(this.rootNode, this.options, i)
            }, n
        }(r), c = {};
        t.exports = function (t, n) {
            return n = u.assign({}, c, n), new a(t, n).execute()
        }
    }, function (t, n, e) {
        function r(t, n, e) {
            e ? (n.x = t.x, n.y = t.y) : (n.x = t.y, n.y = t.x), t.children.forEach(function (t, i) {
                r(t, n.children[i], e)
            })
        }

        var i = e(28), o = {isHorizontal: !0, nodeSep: 20, nodeSize: 20, rankSep: 200, subTreeSep: 10};
        t.exports = function (t, n) {
            function e(t) {
                if (!t) return null;
                t.width = 0, t.depth && t.depth > f && (f = t.depth);
                var n = t.children, r = n.length, i = new function (t, n) {
                    void 0 === t && (t = 0), void 0 === n && (n = []);
                    var e = this;
                    e.x = e.y = 0, e.leftChild = e.rightChild = null, e.height = 0, e.children = n
                }(t.height, []);
                return n.forEach(function (t, n) {
                    var o = e(t);
                    i.children.push(o), 0 === n && (i.leftChild = o), n === r - 1 && (i.rightChild = o)
                }), i.originNode = t, i.isLeaf = t.isLeaf(), i
            }

            function u(t) {
                if (t.isLeaf || 0 === t.children.length) t.drawingDepth = f; else {
                    var n = t.children.map(function (t) {
                        return u(t)
                    }), e = Math.min.apply(null, n);
                    t.drawingDepth = e - 1
                }
                return t.drawingDepth
            }

            function a(t) {
                t.x = t.drawingDepth * n.rankSep, t.isLeaf ? (t.y = 0, c && (t.y = c.y + c.height + n.nodeSep, t.originNode.parent !== c.originNode.parent && (t.y += n.subTreeSep)), c = t) : (t.children.forEach(function (t) {
                    a(t)
                }), t.y = (t.leftChild.y + t.rightChild.y) / 2)
            }

            void 0 === n && (n = {}), n = i.assign({}, o, n);
            var c, f = 0, s = e(t);
            return u(s), a(s), r(s, t, n.isHorizontal), t
        }
    }, function (t, n, e) {
        var r = e(64), i = e(521), o = e(194), u = e(28), a = ["LR", "RL", "H"], c = a[0], f = function (t) {
            function n() {
                return t.apply(this, arguments) || this
            }

            !function (t, n) {
                t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n
            }(n, t);
            return n.prototype.execute = function () {
                var t = this.options, n = this.rootNode;
                t.isHorizontal = !0;
                var e = t.indent, r = t.direction || c;
                if (r && -1 === a.indexOf(r)) throw new TypeError("Invalid direction: " + r);
                if (r === a[0]) i(n, e); else if (r === a[1]) i(n, e), n.right2left(); else if (r === a[2]) {
                    var u = o(n, t), f = u.left, s = u.right;
                    i(f, e), f.right2left(), i(s, e);
                    var l = f.getBoundingBox();
                    s.translate(l.width, 0), n.x = s.x - n.width / 2
                }
                return n
            }, n
        }(r), s = {};
        t.exports = function (t, n) {
            return n = u.assign({}, s, n), new f(t, n).execute()
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            void 0 === n && (n = 20);
            var e = null;
            t.eachNode(function (t) {
                !function (t, n, e) {
                    t.x += e * t.depth, t.y = n ? n.y + n.height : 0
                }(t, e, n), e = t
            })
        }
    }, function (t, n, e) {
        var r = e(64), i = e(523), o = e(102), u = e(28), a = function (t) {
            function n() {
                return t.apply(this, arguments) || this
            }

            !function (t, n) {
                t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n
            }(n, t);
            return n.prototype.execute = function () {
                return o(this.rootNode, this.options, i)
            }, n
        }(r), c = {};
        t.exports = function (t, n) {
            return n = u.assign({}, c, n), new a(t, n).execute()
        }
    }, function (t, n, e) {
        function r(t, n) {
            var e = 0;
            return t.children.length ? t.children.forEach(function (t) {
                e += r(t, n)
            }) : e = t.height, t._subTreeSep = n.getSubTreeSep(t.data), t.totalHeight = Math.max(t.height, e) + 2 * t._subTreeSep, t.totalHeight
        }

        function i(t) {
            var n = t.children, e = n.length;
            if (e) {
                n.forEach(function (t) {
                    i(t)
                });
                var r = n[0], o = n[e - 1], u = o.y - r.y + o.height, a = 0;
                if (n.forEach(function (t) {
                        a += t.totalHeight
                    }), u > t.height) t.y = r.y + u / 2 - t.height / 2; else if (1 !== n.length || t.height > a) {
                    var c = t.y + (t.height - u) / 2 - r.y;
                    n.forEach(function (t) {
                        t.translate(0, c)
                    })
                } else t.y = (r.y + r.height / 2 + o.y + o.height / 2) / 2 - t.height / 2
            }
        }

        var o = e(28), u = {
            getSubTreeSep: function () {
                return 0
            }
        };
        t.exports = function (t, n) {
            void 0 === n && (n = {}), n = o.assign({}, u, n), t.parent = {
                x: 0,
                width: 0,
                height: 0,
                y: 0
            }, t.BFTraverse(function (t) {
                t.x = t.parent.x + t.parent.width
            }), t.parent = null, r(t, n), t.startY = 0, t.y = t.totalHeight / 2 - t.height / 2, t.eachNode(function (t) {
                var n = t.children, e = n.length;
                if (e) {
                    var r = n[0];
                    if (r.startY = t.startY + t._subTreeSep, 1 === e) r.y = t.y + t.height / 2 - r.height / 2; else {
                        r.y = r.startY + r.totalHeight / 2 - r.height / 2;
                        for (var i = 1; i < e; i++) {
                            var o = n[i];
                            o.startY = n[i - 1].startY + n[i - 1].totalHeight, o.y = o.startY + o.totalHeight / 2 - o.height / 2
                        }
                    }
                }
            }), i(t)
        }
    }, function (t, n, e) {
        function r(t, n) {
            var e = t.root;
            if (n = Object.assign({}, c, n), t.dataType !== u) throw new TypeError("Invalid DataView: This transform is for Hierarchy data only!");
            t.root = i.dendrogram(e, n)
        }

        var i = e(101), o = e(2), u = o.HIERARCHY, a = o.registerTransform, c = {};
        a("hierarchy.dendrogram", r), a("dendrogram", r)
    }, function (t, n, e) {
        function r(t, n) {
            var e = t.root;
            if (n = Object.assign({}, c, n), t.dataType !== u) throw new TypeError("Invalid DataView: This transform is for Hierarchy data only!");
            t.root = i.indented(e, n)
        }

        var i = e(101), o = e(2), u = o.HIERARCHY, a = o.registerTransform, c = {};
        a("hierarchy.indented", r), a("indented-tree", r)
    }, function (t, n, e) {
        function r(t, n) {
            if (t.dataType !== c) throw new TypeError("Invalid DataView: This transform is for Hierarchy data only!");
            var e = t.root, r = (n = i({}, l, n)).as;
            if (!u(r) || 3 !== r.length) throw new TypeError('Invalid as: it must be an array with 3 strings (e.g. [ "x", "y", "r" ])!');
            var a;
            try {
                a = s(n)
            } catch (t) {
                console.warn(t)
            }
            a && e.sum(function (t) {
                return t[a]
            }).sort(function (t, n) {
                return n[a] - t[a]
            });
            var f = o.pack();
            f.size(n.size), n.padding && f.padding(n.padding), f(e);
            var h = r[0], p = r[1], v = r[2];
            e.each(function (t) {
                t[h] = t.x, t[p] = t.y, t[v] = t.r
            })
        }

        var i = e(3), o = e(34), u = e(6), a = e(2), c = a.HIERARCHY, f = a.registerTransform, s = e(7).getField,
            l = {field: "value", size: [1, 1], padding: 0, as: ["x", "y", "r"]};
        f("hierarchy.pack", r), f("hierarchy.circle-packing", r), f("circle-packing", r)
    }, function (t, n, e) {
        function r(t, n) {
            if (t.dataType !== c) throw new TypeError("Invalid DataView: This transform is for Hierarchy data only!");
            var e = t.root, r = (n = i({}, l, n)).as;
            if (!u(r) || 2 !== r.length) throw new TypeError('Invalid as: it must be an array with 2 strings (e.g. [ "x", "y" ])!');
            var a;
            try {
                a = s(n)
            } catch (t) {
                console.warn(t)
            }
            a && e.sum(function (t) {
                return t[a]
            });
            var f = o.partition();
            f.size(n.size).round(n.round).padding(n.padding), f(e);
            var h = r[0], p = r[1];
            e.each(function (t) {
                t[h] = [t.x0, t.x1, t.x1, t.x0], t[p] = [t.y1, t.y1, t.y0, t.y0], ["x0", "x1", "y0", "y1"].forEach(function (n) {
                    -1 === r.indexOf(n) && delete t[n]
                })
            })
        }

        var i = e(3), o = e(34), u = e(6), a = e(2), c = a.HIERARCHY, f = a.registerTransform, s = e(7).getField,
            l = {field: "value", size: [1, 1], round: !1, padding: 0, sort: !0, as: ["x", "y"]};
        f("hierarchy.partition", r), f("adjacency", r)
    }, function (t, n, e) {
        function r(t, n) {
            if (t.dataType !== c) throw new TypeError("Invalid DataView: This transform is for Hierarchy data only!");
            var e = t.root, r = (n = i({}, l, n)).as;
            if (!u(r) || 2 !== r.length) throw new TypeError('Invalid as: it must be an array with 2 strings (e.g. [ "x", "y" ])!');
            var a;
            try {
                a = s(n)
            } catch (t) {
                console.warn(t)
            }
            a && e.sum(function (t) {
                return t[a]
            });
            var f = o.tree();
            f.size(n.size), n.nodeSize && f.nodeSize(n.nodeSize), n.separation && f.separation(n.separation), f(e);
            var h = r[0], p = r[1];
            e.each(function (t) {
                t[h] = t.x, t[p] = t.y
            })
        }

        var i = e(3), o = e(34), u = e(6), a = e(2), c = a.HIERARCHY, f = a.registerTransform, s = e(7).getField,
            l = {field: "value", size: [1, 1], nodeSize: null, separation: null, as: ["x", "y"]};
        f("hierarchy.tree", r), f("tree", r)
    }, function (t, n, e) {
        function r(t, n) {
            if (t.dataType !== c) throw new TypeError("Invalid DataView: This transform is for Hierarchy data only!");
            var e = t.root, r = (n = i({}, l, n)).as;
            if (!u(r) || 2 !== r.length) throw new TypeError('Invalid as: it must be an array with 2 strings (e.g. [ "x", "y" ])!');
            var a;
            try {
                a = s(n)
            } catch (t) {
                console.warn(t)
            }
            a && e.sum(function (t) {
                return t[a]
            });
            var f = o.treemap();
            f.tile(o[n.tile]).size(n.size).round(n.round).padding(n.padding).paddingInner(n.paddingInner).paddingOuter(n.paddingOuter).paddingTop(n.paddingTop).paddingRight(n.paddingRight).paddingBottom(n.paddingBottom).paddingLeft(n.paddingLeft), f(e);
            var h = r[0], p = r[1];
            e.each(function (t) {
                t[h] = [t.x0, t.x1, t.x1, t.x0], t[p] = [t.y1, t.y1, t.y0, t.y0], ["x0", "x1", "y0", "y1"].forEach(function (n) {
                    -1 === r.indexOf(n) && delete t[n]
                })
            })
        }

        var i = e(3), o = e(34), u = e(6), a = e(2), c = a.HIERARCHY, f = a.registerTransform, s = e(7).getField, l = {
            field: "value",
            tile: "treemapSquarify",
            size: [1, 1],
            round: !1,
            padding: 0,
            paddingInner: 0,
            paddingOuter: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            as: ["x", "y"]
        };
        f("hierarchy.treemap", r), f("treemap", r)
    }, function (t, n, e) {
        function r(t, n) {
            n = i({}, f, n);
            var e = a();
            ["font", "fontSize", "padding", "rotate", "size", "spiral", "timeInterval"].forEach(function (t) {
                n[t] && e[t](n[t])
            });
            var r = c(n), u = r[0], s = r[1];
            if (!o(u) || !o(s)) throw new TypeError('Invalid fields: must be an array with 2 strings (e.g. [ "text", "value" ])!');
            var l = t.rows.map(function (t) {
                return t.text = t[u], t.value = t[s], t
            });
            e.words(l), n.imageMask && e.createMask(n.imageMask);
            var h = e.start(), p = h._tags, v = h._bounds;
            p.forEach(function (t) {
                t.x += n.size[0] / 2, t.y += n.size[1] / 2
            });
            var d = n.size, g = d[0], b = d[1], y = h.hasImage;
            p.push({text: "", value: 0, x: y ? 0 : v[0].x, y: y ? 0 : v[0].y, opacity: 0}), p.push({
                text: "",
                value: 0,
                x: y ? g : v[1].x,
                y: y ? b : v[1].y,
                opacity: 0
            }), t.rows = p, t._tagCloud = h
        }

        var i = e(3), o = e(10), u = e(2).registerTransform, a = e(531), c = e(7).getFields, f = {
            fields: ["text", "value"], font: function () {
                return "serif"
            }, padding: 1, size: [500, 500], spiral: "archimedean", timeInterval: 500
        };
        u("tag-cloud", r), u("word-cloud", r)
    }, function (t, n) {
        function e(t) {
            return t.text
        }

        function r() {
            return "serif"
        }

        function i() {
            return "normal"
        }

        function o(t) {
            return t.value
        }

        function u() {
            return 90 * ~~(2 * Math.random())
        }

        function a() {
            return 1
        }

        function c(t, n, e, r) {
            if (!n.sprite) {
                var i = t.context, o = t.ratio;
                i.clearRect(0, 0, (b << 5) / o, y / o);
                var u = 0, a = 0, c = 0, f = e.length;
                for (--r; ++r < f;) {
                    n = e[r], i.save(), i.font = n.style + " " + n.weight + " " + ~~((n.size + 1) / o) + "px " + n.font;
                    var s = i.measureText(n.text + "m").width * o, l = n.size << 1;
                    if (n.rotate) {
                        var h = Math.sin(n.rotate * g), p = Math.cos(n.rotate * g), v = s * p, d = s * h, j = l * p,
                            O = l * h;
                        s = Math.max(Math.abs(v + O), Math.abs(v - O)) + 31 >> 5 << 5, l = ~~Math.max(Math.abs(d + j), Math.abs(d - j))
                    } else s = s + 31 >> 5 << 5;
                    if (l > c && (c = l), u + s >= b << 5 && (u = 0, a += c, c = 0), a + l >= y) break;
                    i.translate((u + (s >> 1)) / o, (a + (l >> 1)) / o), n.rotate && i.rotate(n.rotate * g), i.fillText(n.text, 0, 0), n.padding && (i.lineWidth = 2 * n.padding, i.strokeText(n.text, 0, 0)), i.restore(), n.width = s, n.height = l, n.xoff = u, n.yoff = a, n.x1 = s >> 1, n.y1 = l >> 1, n.x0 = -n.x1, n.y0 = -n.y1, n.hasText = !0, u += s
                }
                for (var _ = i.getImageData(0, 0, (b << 5) / o, y / o).data, m = []; --r >= 0;) if ((n = e[r]).hasText) {
                    for (var w = n.width, x = w >> 5, E = n.y1 - n.y0, M = 0; M < E * x; M++) m[M] = 0;
                    if (null == (u = n.xoff)) return;
                    a = n.yoff;
                    for (var T = 0, S = -1, k = 0; k < E; k++) {
                        for (var C = 0; C < w; C++) {
                            var P = x * k + (C >> 5), N = _[(a + k) * (b << 5) + (u + C) << 2] ? 1 << 31 - C % 32 : 0;
                            m[P] |= N, T |= N
                        }
                        T ? S = k : (n.y0++, E--, k--, a++)
                    }
                    n.y1 = n.y0 + S, n.sprite = m.slice(0, (n.y1 - n.y0) * x)
                }
            }
        }

        function f(t, n, e) {
            e >>= 5;
            for (var r, i = t.sprite, o = t.width >> 5, u = t.x - (o << 4), a = 127 & u, c = 32 - a, f = t.y1 - t.y0, s = (t.y + t.y0) * e + (u >> 5), l = 0; l < f; l++) {
                r = 0;
                for (var h = 0; h <= o; h++) if ((r << c | (h < o ? (r = i[l * o + h]) >>> a : 0)) & n[s + h]) return !0;
                s += e
            }
            return !1
        }

        function s(t, n) {
            var e = t[0], r = t[1];
            n.x + n.x0 < e.x && (e.x = n.x + n.x0), n.y + n.y0 < e.y && (e.y = n.y + n.y0), n.x + n.x1 > r.x && (r.x = n.x + n.x1), n.y + n.y1 > r.y && (r.y = n.y + n.y1)
        }

        function l(t, n) {
            return t.x + t.x1 > n[0].x && t.x + t.x0 < n[1].x && t.y + t.y1 > n[0].y && t.y + t.y0 < n[1].y
        }

        function h(t) {
            var n = t[0] / t[1];
            return function (t) {
                return [n * (t *= .1) * Math.cos(t), t * Math.sin(t)]
            }
        }

        function p(t) {
            for (var n = [], e = -1; ++e < t;) n[e] = 0;
            return n
        }

        function v() {
            return document.createElement("canvas")
        }

        function d(t) {
            return "function" == typeof t ? t : function () {
                return t
            }
        }

        var g = Math.PI / 180, b = 64, y = 2048, j = {
            archimedean: h, rectangular: function (t) {
                var n = 4 * t[0] / t[1], e = 0, r = 0;
                return function (t) {
                    var i = t < 0 ? -1 : 1;
                    switch (Math.sqrt(1 + 4 * i * t) - i & 3) {
                        case 0:
                            e += n;
                            break;
                        case 1:
                            r += 4;
                            break;
                        case 2:
                            e -= n;
                            break;
                        default:
                            r -= 4
                    }
                    return [e, r]
                }
            }
        };
        t.exports = function () {
            var t = [256, 256], n = e, g = r, O = o, _ = i, m = i, w = u, x = a, E = h, M = [], T = 1 / 0,
                S = Math.random, k = v, C = {};
            return C.canvas = function (t) {
                return arguments.length ? (k = d(t), C) : k
            }, C.start = function () {
                var e = t, r = e[0], i = e[1], o = function (t) {
                    t.width = t.height = 1;
                    var n = Math.sqrt(t.getContext("2d").getImageData(0, 0, 1, 1).data.length >> 2);
                    t.width = (b << 5) / n, t.height = y / n;
                    var e = t.getContext("2d");
                    return e.fillStyle = e.strokeStyle = "red", e.textAlign = "center", {context: e, ratio: n}
                }(k()), u = C.board ? C.board : p((t[0] >> 5) * t[1]), a = M.length, h = [], v = M.map(function (t, e) {
                    return t.text = n.call(this, t, e), t.font = g.call(this, t, e), t.style = _.call(this, t, e), t.weight = m.call(this, t, e), t.rotate = w.call(this, t, e), t.size = ~~O.call(this, t, e), t.padding = x.call(this, t, e), t
                }).sort(function (t, n) {
                    return n.size - t.size
                }), d = -1, j = C.board ? [{x: 0, y: 0}, {x: r, y: i}] : null;
                return function () {
                    for (var n = Date.now(); Date.now() - n < T && ++d < a;) {
                        var e = v[d];
                        e.x = r * (S() + .5) >> 1, e.y = i * (S() + .5) >> 1, c(o, e, v, d), e.hasText && function (n, e, r) {
                            for (var i, o, u, a = e.x, c = e.y, s = Math.sqrt(t[0] * t[0] + t[1] * t[1]), h = E(t), p = S() < .5 ? 1 : -1, v = -p; (i = h(v += p)) && (o = ~~i[0], u = ~~i[1], !(Math.min(Math.abs(o), Math.abs(u)) >= s));) if (e.x = a + o, e.y = c + u, !(e.x + e.x0 < 0 || e.y + e.y0 < 0 || e.x + e.x1 > t[0] || e.y + e.y1 > t[1]) && (!r || !f(e, n, t[0])) && (!r || l(e, r))) {
                                for (var d = e.sprite, g = e.width >> 5, b = t[0] >> 5, y = e.x - (g << 4), j = 127 & y, O = 32 - j, _ = e.y1 - e.y0, m = void 0, w = (e.y + e.y0) * b + (y >> 5), x = 0; x < _; x++) {
                                    m = 0;
                                    for (var M = 0; M <= g; M++) n[w + M] |= m << O | (M < g ? (m = d[x * g + M]) >>> j : 0);
                                    w += b
                                }
                                return delete e.sprite, !0
                            }
                            return !1
                        }(u, e, j) && (h.push(e), j ? C.hasImage || s(j, e) : j = [{
                            x: e.x + e.x0,
                            y: e.y + e.y0
                        }, {x: e.x + e.x1, y: e.y + e.y1}], e.x -= t[0] >> 1, e.y -= t[1] >> 1)
                    }
                    C._tags = h, C._bounds = j
                }(), C
            }, C.createMask = function (n) {
                var e = document.createElement("canvas"), r = t, i = r[0], o = r[1], u = i >> 5, a = p((i >> 5) * o);
                e.width = i, e.height = o;
                var c = e.getContext("2d");
                c.drawImage(n, 0, 0, n.width, n.height, 0, 0, i, o);
                for (var f = c.getImageData(0, 0, i, o).data, s = 0; s < o; s++) for (var l = 0; l < i; l++) {
                    var h = u * s + (l >> 5), v = s * i + l << 2,
                        d = f[v] >= 250 && f[v + 1] >= 250 && f[v + 2] >= 250 ? 1 << 31 - l % 32 : 0;
                    a[h] |= d
                }
                C.board = a, C.hasImage = !0
            }, C.timeInterval = function (t) {
                return arguments.length ? (T = null == t ? 1 / 0 : t, C) : T
            }, C.words = function (t) {
                return arguments.length ? (M = t, C) : M
            }, C.size = function (n) {
                return arguments.length ? (t = [+n[0], +n[1]], C) : t
            }, C.font = function (t) {
                return arguments.length ? (g = d(t), C) : g
            }, C.fontStyle = function (t) {
                return arguments.length ? (_ = d(t), C) : _
            }, C.fontWeight = function (t) {
                return arguments.length ? (m = d(t), C) : m
            }, C.rotate = function (t) {
                return arguments.length ? (w = d(t), C) : w
            }, C.text = function (t) {
                return arguments.length ? (n = d(t), C) : n
            }, C.spiral = function (t) {
                return arguments.length ? (E = j[t] || t, C) : E
            }, C.fontSize = function (t) {
                return arguments.length ? (O = d(t), C) : O
            }, C.padding = function (t) {
                return arguments.length ? (x = d(t), C) : x
            }, C.random = function (t) {
                return arguments.length ? (S = t, C) : S
            }, C
        }
    }, function (t, n, e) {
        var r = e(3), i = e(9), o = e(9), u = e(24), a = e(533), c = e(32), f = e(19).sum, s = e(15),
            l = e(2).registerTransform, h = e(7).getFields, p = {
                fields: ["name", "value"],
                rows: 5,
                size: [1, 1],
                scale: 1,
                groupBy: [],
                maxCount: 1e3,
                gapRatio: .1,
                as: ["x", "y"]
            };
        l("waffle", function (t, n) {
            n = r({}, p, n);
            var e = h(n), l = e[0], v = e[1], d = n.as, g = d[0], b = d[1], y = n.groupBy, j = s(t.rows, y), O = u(j),
                _ = n.size, m = _[0], w = _[1], x = n.maxCount, E = w / O.length, M = n.rows, T = n.gapRatio, S = [],
                k = n.scale, C = 0, P = 0;
            o(j, function (t) {
                var n = f(a(t, function (t) {
                    return t[v]
                })), e = Math.ceil(n * k / M);
                n * k > x && (k = x / n, e = Math.ceil(n * k / M)), P = m / e
            }), o(j, function (t) {
                var n = [C * E, (C + 1) * E], e = (n[1] - n[0]) * (1 - T) / M, r = 0, o = 0;
                i(t, function (t) {
                    for (var i = t[v], u = Math.round(i * k), a = 0; a < u; a++) {
                        o === M && (o = 0, r++);
                        var f = c(t, [l, v].concat(y));
                        f[g] = r * P + P / 2, f[b] = o * e + e / 2 + n[0], f._wStep = P, f._hStep = e, o++, S.push(f)
                    }
                }), C += 1
            }), t.rows = S
        })
    }, function (t, n, e) {
        var r = e(9), i = e(91);
        t.exports = function (t, n) {
            if (!i(t)) return t;
            var e = [];
            return r(t, function (t, r) {
                e.push(n(t, r))
            }), e
        }
    }, function (t, n, e) {
        function r(t, n) {
            n = i({}, d, n);
            var e = p(n);
            if (!o(e) || 2 !== e.length) throw new TypeError("invalid fields: must be an array of 2 strings!");
            var r = n.as, f = r[0], h = r[1], b = r[2];
            if (!c(f) || !c(h) || !c(b)) throw new TypeError("invalid as: must be an array of 3 strings!");
            var y = n.method;
            if (c(y)) {
                if (-1 === g.indexOf(y)) throw new TypeError("invalid method: " + y + ". Must be one of " + g.join(", "));
                y = l[y]
            }
            if (!u(y)) throw new TypeError("invalid method: kernel method must be a function!");
            var j = e[0], O = e[1], _ = n.extent, m = _[0], w = _[1];
            o(m) && o(w) || (m = t.range(j), w = t.range(O));
            var x = n.bandwidth, E = x[0], M = x[1];
            (!a(E) || E <= 0 || !a(M) || M <= 0) && (E = v(t.getColumn(j)), M = v(t.getColumn(O)));
            for (var T = s(m, E), S = s(w, M), k = t.rows.length, C = [], P = 0; P < T.length; P++) for (var N = 0; N < S.length; N++) {
                for (var R = 0, B = T[P], A = S[N], I = 0; I < k; I++) R += y((B - t.rows[I][j]) / E) * y((A - t.rows[I][O]) / M);
                var L = 1 / (k * E * M) * R, z = {};
                z[f] = B, z[h] = A, z[b] = L, C.push(z)
            }
            t.rows = C
        }

        var i = e(3), o = e(6), u = e(11), a = e(56), c = e(10), f = e(24), s = e(57), l = e(92),
            h = e(2).registerTransform, p = e(7).getFields, v = e(58).silverman,
            d = {as: ["x", "y", "z"], method: "gaussian", extent: [], bandwidth: []}, g = f(l);
        h("kernel-smooth.density", r), h("kernel.density", r), t.exports = {KERNEL_METHODS: g}
    }, function (t, n, e) {
        function r(t) {
            return function (n) {
                return u(n) ? n.map(function (n) {
                    return t(n)
                }) : t(n)
            }
        }

        function i(t, n) {
            n = o({}, y, n);
            var e = g(n);
            if (!u(e) || 1 !== e.length && 2 !== e.length) throw new TypeError("invalid fields: must be an array of 1 or 2 strings!");
            var i = n.as, l = i[0], d = i[1];
            if (!s(l) || !s(d)) throw new TypeError("invalid as: must be an array of 2 strings!");
            var O = n.method;
            if (s(O)) {
                if (-1 === j.indexOf(O)) throw new TypeError("invalid method: " + O + ". Must be one of " + j.join(", "));
                O = v[O]
            }
            if (!a(O)) throw new TypeError("invalid method: kernel method must be a function!");
            var _ = e[0], m = e[1], w = t.getColumn(_), x = n.extent;
            u(x) || (x = t.range(_));
            var E = n.bandwidth;
            (!f(E) || E <= 0) && (E = b(w));
            var M, T = p(x, E), S = w.length, k = function (t, n, e, r) {
                return t((r - e) / n)
            }.bind(null, O, E);
            if (c(m)) M = r(function (t) {
                var n = w.map(function (n) {
                    return k(t, n)
                }), e = h(n), r = S * E;
                return e && r ? e / r : 0
            }); else {
                var C = t.getColumn(m);
                M = r(function (t) {
                    var n = w.map(function (n) {
                        return k(t, n)
                    }), e = h(n.map(function (t, n) {
                        return t * C[n]
                    })), r = h(n);
                    return e && r ? e / r : 0
                })
            }
            var P = T.map(function (t) {
                var n = {};
                return n[l] = t, n[d] = M(t), n
            });
            t.rows = P
        }

        var o = e(3), u = e(6), a = e(11), c = e(77), f = e(56), s = e(10), l = e(24), h = e(19).sum, p = e(57),
            v = e(92), d = e(2).registerTransform, g = e(7).getFields, b = e(58).silverman,
            y = {as: ["x", "y"], method: "gaussian"}, j = l(v);
        d("kernel-smooth.regression", i), d("kernel.regression", i), t.exports = {KERNEL_METHODS: j}
    }])
});
