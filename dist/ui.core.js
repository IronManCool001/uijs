(() => {
    var e = {
            604: function (e, t) {
                var n, o;
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    void 0 ===
                        (o =
                            "function" ==
                            typeof (n = function () {
                                "use strict";
                                window.addEventListener("DOMContentLoaded", function () {
                                    var e = { red: "#DC2626", blue: "#3B82F6", green: "#10B981", black: "#111", yellow: "#FBBF24", gray: "#6B7280" };
                                    document.querySelectorAll("button").forEach(function (t) {
                                        var n = t.getAttribute("color"),
                                            o = t.getAttribute("outline");
                                        !1 === Boolean(o)
                                            ? Boolean(n) &&
                                              (console.log(n),
                                              (t.style.background = e[n]),
                                              (t.style.color = "#fff"),
                                              (t.style.border = "none"),
                                              (t.style.padding = "15px 32px"),
                                              (t.style.textAlign = "center"),
                                              (t.style.textDecoration = "none"),
                                              (t.style.display = "inline-block"),
                                              (t.style.fontFamily = "Open Sans,sans-serif"),
                                              (t.style.fontWeight = 300),
                                              (t.style.fontSize = "15px"))
                                            : Boolean(n) &&
                                              ((t.style.border = "2px solid"),
                                              (t.style.borderColor = e[n]),
                                              (t.style.color = e[n]),
                                              (t.style.backgroundColor = "#fff"),
                                              (t.style.padding = "15px 32px"),
                                              (t.style.textAlign = "center"),
                                              (t.style.textDecoration = "none"),
                                              (t.style.display = "inline-block"),
                                              (t.style.fontFamily = "Open Sans,sans-serif"),
                                              (t.style.fontWeight = 300),
                                              (t.style.fontSize = "15px"));
                                    });
                                });
                            })
                                ? n.apply(t, [])
                                : n) || (e.exports = o);
            },
            213: function (e, t) {
                var n, o;
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    void 0 ===
                        (o =
                            "function" ==
                            typeof (n = function (e) {
                                "use strict";
                                Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
                                e.default = function (e) {
                                    console.log(e);
                                };
                            })
                                ? n.apply(t, [t])
                                : n) || (e.exports = o);
            },
            867: function (e, t) {
                var n, o;
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    void 0 ===
                        (o =
                            "function" ==
                            typeof (n = function (e) {
                                "use strict";
                                Object.defineProperty(e, "__esModule", { value: !0 }), (e.Break = e.Input = e.Button = e.Text = e.init = void 0);
                                e.init = function (e) {
                                    (document.getElementById(e).style.boxSizing = "border-box"), (document.getElementById(e).style.margin = "0px"), (document.getElementById(e).style.fontFamily = "'Open Sans','Poppins','Roboto',sans-serif");
                                };
                                e.Text = function (e, t, n, o, l) {
                                    var i = document.createElement(n);
                                    (i.innerHTML = t),
                                        !1 === Boolean(o) && Boolean(l)
                                            ? ((i.className = l), document.getElementById(e).appendChild(i))
                                            : !1 === Boolean(l) && Boolean(o)
                                            ? ((i.id = o), document.getElementById(e).appendChild(i))
                                            : ((!1 === Boolean(o) && !1 === Boolean(l)) || ((i.id = o), (i.className = l)), document.getElementById(e).appendChild(i));
                                };
                                e.Button = function (e, t, n, o, l, i) {
                                    var d = document.createElement("button");
                                    (d.innerHTML = t),
                                        Boolean(n) && !1 === Boolean(o)
                                            ? d.setAttribute("color", n)
                                            : !1 === Boolean(n) && Boolean(o)
                                            ? d.setAttribute("outline", !0)
                                            : Boolean(n) && Boolean(o) && (d.setAttribute("outline", !0), d.setAttribute("color", n)),
                                        !1 === Boolean(l) && Boolean(i)
                                            ? ((d.className = i), document.getElementById(e).appendChild(d))
                                            : Boolean(l) && !1 === Boolean(i)
                                            ? ((d.id = l), document.getElementById(e).appendChild(d))
                                            : Boolean(l) && Boolean(i)
                                            ? ((d.id = l), (d.className = i), document.getElementById(e).appendChild(d))
                                            : document.getElementById(e).appendChild(d);
                                };
                                e.Input = function (e, t, n, o, l) {
                                    var i = document.createElement("input");
                                    (i.type = n),
                                        "text" === n && (i.setAttribute("placeholder", t), (i.style.padding = "12px 20px"), (i.style.margin = "8px 0"), (i.style.boxSizing = "border-box")),
                                        Boolean(o) && !1 === Boolean(l)
                                            ? ((i.id = o), document.getElementById(e).appendChild(i))
                                            : !1 === Boolean(o) && Boolean(l)
                                            ? ((i.className = l), document.getElementById(e).appendChild(i))
                                            : Boolean(o) && Boolean(l)
                                            ? ((i.id = o), (i.className = l), document.getElementById(e).appendChild(i))
                                            : document.getElementById(e).appendChild(i);
                                };
                                e.Break = function (e) {
                                    document.getElementById(e).appendChild(document.createElement("br"));
                                };
                            })
                                ? n.apply(t, [t])
                                : n) || (e.exports = o);
            },
            579: function (e, t, n) {
                var o, l, i;
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    (l = [n(213), n(867), n(604)]),
                    void 0 ===
                        (i =
                            "function" ==
                            typeof (o = function (e, t, n) {
                                "use strict";
                                var o;
                                (e = (o = e) && o.__esModule ? o : { default: o }),
                                    (window.pprint = e.default),
                                    (window.Tkinter = t.init),
                                    (window.TText = t.Text),
                                    (window.TButton = t.Button),
                                    (window.TInput = t.Input),
                                    (window.BreakLine = t.Break);
                            })
                                ? o.apply(t, l)
                                : o) || (e.exports = i);
            },
        },
        t = {};
    !(function n(o) {
        var l = t[o];
        if (void 0 !== l) return l.exports;
        var i = (t[o] = { exports: {} });
        return e[o].call(i.exports, i, i.exports, n), i.exports;
    })(579);
})();
