(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7575],
    {
     1213: function (e, n, t) {
      "use strict";
      function r(e, n) {
       var t = {};
       for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
       if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
       }
       return t;
      }
      t.d(n, {
       _: function () {
        return r;
       },
      });
     },
     9573: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return a;
       },
      });
      var r = t(2322),
       o = t(4801);
      function a({ color: e = "brand", children: n, size: t, dot: a, className: i }) {
       const s = (0, o.Z)("badge");
       let l = [s.base];
       return (
        e && l.push(s.color[e]),
        "large" === t && l.push(s.size.large),
        i && l.push(i),
        (0, r.jsxs)(
         "span",
         Object.assign(
          { className: l.join(" ") },
          { children: [a && (0, r.jsx)("svg", Object.assign({ className: `${s.dot} ${s.color[e]}`, fill: "currentColor", viewBox: "0 0 8 8" }, { children: (0, r.jsx)("circle", { cx: "4", cy: "4", r: "3" }, void 0) }), void 0), n] }
         ),
         void 0
        )
       );
      }
     },
     4393: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return c;
       },
      });
      var r = t(1213),
       o = t(2322),
       a = t(2784),
       i = t(2238),
       s = t(8315),
       l = t(4801);
      const c = (0, a.forwardRef)((e, n) => {
       var {
         block: t,
         className: c,
         children: d,
         danger: u,
         disabled: b = !1,
         onClick: p,
         icon: f,
         iconRight: g,
         loading: m = !1,
         loadingCentered: x = !1,
         shadow: h = !0,
         size: v = "tiny",
         style: y,
         type: w = "primary",
         htmlType: k = "button",
         ariaSelected: O,
         ariaControls: j,
         tabIndex: E,
         role: z,
         as: _,
         textAlign: S = "center",
        } = e,
        C = (0, r._)(e, [
         "block",
         "className",
         "children",
         "danger",
         "disabled",
         "onClick",
         "icon",
         "iconRight",
         "loading",
         "loadingCentered",
         "shadow",
         "size",
         "style",
         "type",
         "htmlType",
         "ariaSelected",
         "ariaControls",
         "tabIndex",
         "role",
         "as",
         "textAlign",
        ]);
       const N = (0, a.useRef)(null);
       (0, a.useImperativeHandle)(n, () => ({ button: () => N.current }));
       let A = (0, l.Z)("button");
       const P = m || f;
       let R = [A.base],
        I = [A.container];
       R.push(A.type[w]), t && (I.push(A.block), R.push(A.block)), h && "link" !== w && "text" !== w && R.push(A.shadow), v && R.push(A.size[v]), c && R.push(c), b && R.push(A.disabled);
       const L = [A.loading],
        T = (e) => {
         var n = (0, r._)(e, []);
         const t = _;
         return (0, o.jsx)(t, Object.assign({}, n), void 0);
        },
        M = (0, o.jsxs)(
         o.Fragment,
         {
          children: [
           P && (m ? (0, o.jsx)(s.Z, { size: v, className: L.join(" ") }, void 0) : f ? (0, o.jsx)(i.P.Provider, Object.assign({ value: { contextSize: v } }, { children: f }), void 0) : null),
           d && (0, o.jsx)("span", Object.assign({ className: A.label }, { children: d }), void 0),
           g && !m && (0, o.jsx)(i.P.Provider, Object.assign({ value: { contextSize: v } }, { children: g }), void 0),
          ],
         },
         void 0
        );
       return _
        ? (0, o.jsx)(T, Object.assign({}, C, { className: R.join(" "), onClick: p, style: y }, { children: M }), void 0)
        : (0, o.jsx)(
           "button",
           Object.assign({}, C, { ref: N, className: R.join(" "), disabled: m || (b && !0), onClick: p, style: y, type: k, "aria-selected": O, "aria-controls": j, tabIndex: E, role: z, form: C.form }, { children: M }),
           void 0
          );
      });
     },
     6405: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return s;
       },
      });
      var r = t(1213),
       o = t(2322),
       a = t(4801),
       i = t(2238);
      function s(e) {
       var { className: n, size: t, type: s = "Mail", color: l, strokeWidth: c, fill: d, stroke: u, background: b, src: p, icon: f } = e,
        g = (0, r._)(e, ["className", "size", "type", "color", "strokeWidth", "fill", "stroke", "background", "src", "icon"]);
       const m = (0, a.Z)("icon");
       return (0, o.jsx)(
        i.P.Consumer,
        {
         children: ({ contextSize: e, className: r }) => {
          const a = { tiny: 14, small: 18, medium: 20, large: 20, xlarge: 24, xxlarge: 30, xxxlarge: 42 },
           i = a.large,
           s = f;
          let x = 21;
          e && (x = e ? ("string" === typeof e ? a[e] : e) : i), t && (x = t ? ("string" === typeof t ? a[t] : t) : i);
          const h = !l && !d && !u;
          let v = ["sbui-icon", n];
          r && v.push(r);
          const y = p
           ? (0, o.jsx)(
              "svg",
              Object.assign({ xmlns: "http://www.w3.org/2000/svg", color: h ? "currentColor" : l, fill: h ? "none" : d || "none", stroke: h ? "currentColor" : u, className: v.join(" "), width: x, height: x }, { children: p }),
              void 0
             )
           : (0, o.jsx)(() => (0, o.jsx)(s, Object.assign({ color: h ? "currentColor" : l, stroke: h ? "currentColor" : u, className: v.join(" "), strokeWidth: c, size: x, fill: h ? "none" : d || "none" }, g), void 0), {}, void 0);
          return b ? (0, o.jsx)("div", Object.assign({ className: m.container }, { children: y }), void 0) : y;
         },
        },
        void 0
       );
      }
     },
     2238: function (e, n, t) {
      "use strict";
      t.d(n, {
       P: function () {
        return r;
       },
      });
      const r = (0, t(2784).createContext)({ contextSize: "", className: "" });
     },
     3875: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return u;
       },
      });
      var r = t(2322),
       o = t(2784),
       a = t(3980),
       i = t.n(a);
      function s() {
       return (
        (s =
         Object.assign ||
         function (e) {
          for (var n = 1; n < arguments.length; n++) {
           var t = arguments[n];
           for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
         }),
        s.apply(this, arguments)
       );
      }
      function l(e, n) {
       if (null == e) return {};
       var t,
        r,
        o = (function (e, n) {
         if (null == e) return {};
         var t,
          r,
          o = {},
          a = Object.keys(e);
         for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
         return o;
        })(e, n);
       if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
       }
       return o;
      }
      var c = (0, o.forwardRef)(function (e, n) {
       var t = e.color,
        r = void 0 === t ? "currentColor" : t,
        a = e.size,
        i = void 0 === a ? 24 : a,
        c = l(e, ["color", "size"]);
       return o.createElement(
        "svg",
        s({ ref: n, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, c),
        o.createElement("polyline", { points: "6 9 12 15 18 9" })
       );
      });
      (c.propTypes = { color: i().string, size: i().oneOfType([i().string, i().number]) }), (c.displayName = "ChevronDown");
      var d = t(6405);
      function u(e) {
       return (0, r.jsx)(d.Z, Object.assign({ icon: c }, e), void 0);
      }
     },
     5307: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return u;
       },
      });
      var r = t(2322),
       o = t(2784),
       a = t(3980),
       i = t.n(a);
      function s() {
       return (
        (s =
         Object.assign ||
         function (e) {
          for (var n = 1; n < arguments.length; n++) {
           var t = arguments[n];
           for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
         }),
        s.apply(this, arguments)
       );
      }
      function l(e, n) {
       if (null == e) return {};
       var t,
        r,
        o = (function (e, n) {
         if (null == e) return {};
         var t,
          r,
          o = {},
          a = Object.keys(e);
         for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
         return o;
        })(e, n);
       if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
       }
       return o;
      }
      var c = (0, o.forwardRef)(function (e, n) {
       var t = e.color,
        r = void 0 === t ? "currentColor" : t,
        a = e.size,
        i = void 0 === a ? 24 : a,
        c = l(e, ["color", "size"]);
       return o.createElement(
        "svg",
        s({ ref: n, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, c),
        o.createElement("polyline", { points: "9 18 15 12 9 6" })
       );
      });
      (c.propTypes = { color: i().string, size: i().oneOfType([i().string, i().number]) }), (c.displayName = "ChevronRight");
      var d = t(6405);
      function u(e) {
       return (0, r.jsx)(d.Z, Object.assign({ icon: c }, e), void 0);
      }
     },
     8315: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return u;
       },
      });
      var r = t(2322),
       o = t(2784),
       a = t(3980),
       i = t.n(a);
      function s() {
       return (
        (s =
         Object.assign ||
         function (e) {
          for (var n = 1; n < arguments.length; n++) {
           var t = arguments[n];
           for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
         }),
        s.apply(this, arguments)
       );
      }
      function l(e, n) {
       if (null == e) return {};
       var t,
        r,
        o = (function (e, n) {
         if (null == e) return {};
         var t,
          r,
          o = {},
          a = Object.keys(e);
         for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
         return o;
        })(e, n);
       if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
       }
       return o;
      }
      var c = (0, o.forwardRef)(function (e, n) {
       var t = e.color,
        r = void 0 === t ? "currentColor" : t,
        a = e.size,
        i = void 0 === a ? 24 : a,
        c = l(e, ["color", "size"]);
       return o.createElement(
        "svg",
        s({ ref: n, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, c),
        o.createElement("line", { x1: "12", y1: "2", x2: "12", y2: "6" }),
        o.createElement("line", { x1: "12", y1: "18", x2: "12", y2: "22" }),
        o.createElement("line", { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" }),
        o.createElement("line", { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" }),
        o.createElement("line", { x1: "2", y1: "12", x2: "6", y2: "12" }),
        o.createElement("line", { x1: "18", y1: "12", x2: "22", y2: "12" }),
        o.createElement("line", { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" }),
        o.createElement("line", { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" })
       );
      });
      (c.propTypes = { color: i().string, size: i().oneOfType([i().string, i().number]) }), (c.displayName = "Loader");
      var d = t(6405);
      function u(e) {
       return (0, r.jsx)(d.Z, Object.assign({ icon: c }, e), void 0);
      }
     },
     1447: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return u;
       },
      });
      var r = t(2322),
       o = t(2784),
       a = t(3980),
       i = t.n(a);
      function s() {
       return (
        (s =
         Object.assign ||
         function (e) {
          for (var n = 1; n < arguments.length; n++) {
           var t = arguments[n];
           for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
         }),
        s.apply(this, arguments)
       );
      }
      function l(e, n) {
       if (null == e) return {};
       var t,
        r,
        o = (function (e, n) {
         if (null == e) return {};
         var t,
          r,
          o = {},
          a = Object.keys(e);
         for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
         return o;
        })(e, n);
       if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
       }
       return o;
      }
      var c = (0, o.forwardRef)(function (e, n) {
       var t = e.color,
        r = void 0 === t ? "currentColor" : t,
        a = e.size,
        i = void 0 === a ? 24 : a,
        c = l(e, ["color", "size"]);
       return o.createElement(
        "svg",
        s({ ref: n, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, c),
        o.createElement("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
       );
      });
      (c.propTypes = { color: i().string, size: i().oneOfType([i().string, i().number]) }), (c.displayName = "Moon");
      var d = t(6405);
      function u(e) {
       return (0, r.jsx)(d.Z, Object.assign({ icon: c }, e), void 0);
      }
     },
     6100: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return u;
       },
      });
      var r = t(2322),
       o = t(2784),
       a = t(3980),
       i = t.n(a);
      function s() {
       return (
        (s =
         Object.assign ||
         function (e) {
          for (var n = 1; n < arguments.length; n++) {
           var t = arguments[n];
           for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
         }),
        s.apply(this, arguments)
       );
      }
      function l(e, n) {
       if (null == e) return {};
       var t,
        r,
        o = (function (e, n) {
         if (null == e) return {};
         var t,
          r,
          o = {},
          a = Object.keys(e);
         for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
         return o;
        })(e, n);
       if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
       }
       return o;
      }
      var c = (0, o.forwardRef)(function (e, n) {
       var t = e.color,
        r = void 0 === t ? "currentColor" : t,
        a = e.size,
        i = void 0 === a ? 24 : a,
        c = l(e, ["color", "size"]);
       return o.createElement(
        "svg",
        s({ ref: n, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, c),
        o.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
       );
      });
      (c.propTypes = { color: i().string, size: i().oneOfType([i().string, i().number]) }), (c.displayName = "Star");
      var d = t(6405);
      function u(e) {
       return (0, r.jsx)(d.Z, Object.assign({ icon: c }, e), void 0);
      }
     },
     7725: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return u;
       },
      });
      var r = t(2322),
       o = t(2784),
       a = t(3980),
       i = t.n(a);
      function s() {
       return (
        (s =
         Object.assign ||
         function (e) {
          for (var n = 1; n < arguments.length; n++) {
           var t = arguments[n];
           for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
         }),
        s.apply(this, arguments)
       );
      }
      function l(e, n) {
       if (null == e) return {};
       var t,
        r,
        o = (function (e, n) {
         if (null == e) return {};
         var t,
          r,
          o = {},
          a = Object.keys(e);
         for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
         return o;
        })(e, n);
       if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
       }
       return o;
      }
      var c = (0, o.forwardRef)(function (e, n) {
       var t = e.color,
        r = void 0 === t ? "currentColor" : t,
        a = e.size,
        i = void 0 === a ? 24 : a,
        c = l(e, ["color", "size"]);
       return o.createElement(
        "svg",
        s({ ref: n, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, c),
        o.createElement("circle", { cx: "12", cy: "12", r: "5" }),
        o.createElement("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
        o.createElement("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
        o.createElement("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
        o.createElement("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
        o.createElement("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
        o.createElement("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
        o.createElement("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
        o.createElement("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
       );
      });
      (c.propTypes = { color: i().string, size: i().oneOfType([i().string, i().number]) }), (c.displayName = "Sun");
      var d = t(6405);
      function u(e) {
       return (0, r.jsx)(d.Z, Object.assign({ icon: c }, e), void 0);
      }
     },
     819: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return u;
       },
      });
      var r = t(2322),
       o = t(2784),
       a = t(3980),
       i = t.n(a);
      function s() {
       return (
        (s =
         Object.assign ||
         function (e) {
          for (var n = 1; n < arguments.length; n++) {
           var t = arguments[n];
           for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
         }),
        s.apply(this, arguments)
       );
      }
      function l(e, n) {
       if (null == e) return {};
       var t,
        r,
        o = (function (e, n) {
         if (null == e) return {};
         var t,
          r,
          o = {},
          a = Object.keys(e);
         for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
         return o;
        })(e, n);
       if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
       }
       return o;
      }
      var c = (0, o.forwardRef)(function (e, n) {
       var t = e.color,
        r = void 0 === t ? "currentColor" : t,
        a = e.size,
        i = void 0 === a ? 24 : a,
        c = l(e, ["color", "size"]);
       return o.createElement(
        "svg",
        s({ ref: n, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, c),
        o.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        o.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
       );
      });
      (c.propTypes = { color: i().string, size: i().oneOfType([i().string, i().number]) }), (c.displayName = "X");
      var d = t(6405);
      function u(e) {
       return (0, r.jsx)(d.Z, Object.assign({ icon: c }, e), void 0);
      }
     },
     7777: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return c;
       },
      });
      const r = { brand: "border-brand-600", primary: "border-scale-700", secondary: "border-scale-400", alternative: "border-scale-600 dark:border-scaleDark-200" },
       o = "placeholder-scale-800",
       a = "\n    outline-none\n    focus:ring-current focus:ring-2\n  ",
       i = "\n    outline-none\n    transition-all\n    outline-0\n    focus-visible:outline-4\n    focus-visible:outline-offset-1\n  ",
       s = {
        text: { tiny: "text-xs", small: "text-sm leading-4", medium: "text-sm", large: "text-base", xlarge: "text-base" },
        padding: { tiny: "px-2.5 py-1", small: "px-3 py-2", medium: "px-4 py-2", large: "px-4 py-2", xlarge: "px-6 py-3" },
       },
       l = { tiny: `${s.text.tiny} ${s.padding.tiny}`, small: `${s.text.small} ${s.padding.small}`, medium: `${s.text.medium} ${s.padding.medium}`, large: `${s.text.large} ${s.padding.large}`, xlarge: `${s.text.xlarge} ${s.padding.xlarge}` };
      var c = {
       accordion: {
        variants: {
         default: {
          base: "\n          flex flex-col\n          space-y-3\n        ",
          container: "\n          group\n          first:rounded-tl-md first:rounded-tr-md\n          last:rounded-bl-md last:rounded-br-md\n          overflow-hidden\n        ",
          trigger:
           "\n          flex flex-row\n          gap-3\n          items-center\n          w-full \n          text-left \n          cursor-pointer \n\n          outline-none\n          focus-visible:ring-1\n          focus-visible:z-50\n          ring-scale-1100\n        ",
          content: "\n          data-open:animate-slide-down\n          data-closed:animate-slide-up\n        ",
          panel: "\n          py-3\n        ",
         },
         bordered: {
          base: "\n          flex flex-col\n          -space-y-px\n        ",
          container: "\n          group\n          border\n          border-scale-700\n          \n          first:rounded-tl-md first:rounded-tr-md\n          last:rounded-bl-md last:rounded-br-md\n        ",
          trigger:
           "\n          flex flex-row\n          items-center\n          px-6 py-4 \n          w-full \n          text-left \n          cursor-pointer \n          \n          font-medium \n          text-base \n          bg-transparent \n\n          outline-none\n          focus-visible:ring-1\n          focus-visible:z-50\n          ring-scale-1100\n          \n          transition-colors\n          hover:bg-scale-200\n\n          overflow-hidden\n\n          group-first:rounded-tl-md group-first:rounded-tr-md\n          group-last:rounded-bl-md group-last:rounded-br-md\n        ",
          content: "\n          data-open:animate-slide-down\n          data-closed:animate-slide-up\n        ",
          panel: "\n          px-6 py-3\n          border-t border-scale-700\n          bg-scale-200\n        ",
         },
        },
        justified: "justify-between",
        chevron: { base: "\n        text-scale-900\n        rotate-0 group-state-open:rotate-180\n        duration-200\n      ", align: { left: "order-first", right: "order-last" } },
        animate: Object.assign(
         {},
         {
          enter: "transition-max-height ease-in-out duration-700 overflow-hidden",
          enterFrom: "max-h-0",
          enterTo: "max-h-screen",
          leave: "transition-max-height ease-in-out duration-300 overflow-hidden",
          leaveFrom: "max-h-screen",
          leaveTo: "max-h-0",
         }
        ),
       },
       badge: {
        base: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-opacity-10",
        size: { large: "px-3 py-0.5 rounded-full text-sm" },
        dot: "-ml-0.5 mr-1.5 h-2 w-2 rounded-full",
        color: {
         brand: "bg-brand-200 text-brand-1100 border border-brand-700",
         scale: "bg-scale-200 text-scale-1100 border border-scale-700",
         tomato: "bg-tomato-200 text-tomato-1100 border border-tomato-700",
         red: "bg-red-200 text-red-1100 border border-red-700",
         crimson: "bg-crimson-200 text-crimson-1100 border border-crimson-700",
         pink: "bg-pink-200 text-pink-1100 border border-pink-700",
         plum: "bg-plum-200 text-plum-1100 border border-plum-700",
         purple: "bg-purple-200 text-purple-1100 border border-purple-700",
         violet: "bg-violet-200 text-violet-1100 border border-violet-700",
         indigo: "bg-indigo-200 text-indigo-1100 border border-indigo-700",
         blue: "bg-blue-200 text-blue-1100 border border-blue-700",
         cyan: "bg-cyan-200 text-cyan-1100 border border-cyan-700",
         teal: "bg-teal-200 text-teal-1100 border border-teal-700",
         green: "bg-green-200 text-green-1100 border border-green-700",
         grass: "bg-grass-200 text-grass-1100 border border-grass-700",
         brown: "bg-brown-200 text-brown-1100 border border-brown-700",
         orange: "bg-orange-200 text-orange-1100 border border-orange-700",
         sky: "bg-sky-200 text-sky-1100 border border-sky-700",
         mint: "bg-mint-200 text-mint-1100 border border-mint-700",
         lime: "bg-lime-200 text-lime-1100 border border-lime-700",
         yellow: "bg-yellow-200 text-yellow-1100 border border-yellow-700",
         amber: "bg-amber-200 text-amber-1100 border border-amber-700",
         gold: "bg-gold-200 text-gold-1100 border border-gold-700",
         bronze: "bg-bronze-200 text-bronze-1100 border border-bronze-700",
         gray: "bg-gray-200 text-gray-1100 border border-gray-700",
         mauve: "bg-mauve-200 text-mauve-1100 border border-mauve-700",
         slate: "bg-slate-200 text-slate-1100 border border-slate-700",
         sage: "bg-sage-200 text-sage-1100 border border-sage-700",
         olive: "bg-olive-200 text-olive-1100 border border-olive-700",
         sand: "bg-sand-200 text-sand-1100 border border-sand-700",
        },
       },
       alert: {
        base: "\n      relative rounded border py-4 px-6 \n      flex space-x-4 items-start \n    ",
        header: "block text-sm font-normal mb-1",
        description: "text-xs",
        variant: {
         danger: { base: "bg-red-200 dark:bg-red-100 btext-red-1200 border-red-700", icon: "text-red-900", header: "text-red-1200", description: "text-red-1100" },
         warning: { base: "bg-amber-200 dark:bg-amber-100 border-amber-700", icon: "text-amber-900", header: "text-amber-1200", description: "text-amber-1100" },
         info: { base: "bg-blue-200 dark:bg-blue-100 border-blue-700", icon: "text-blue-900", header: "text-blue-1200", description: "text-blue-1100" },
         success: { base: "bg-brand-300 dark:bg-brand-100 border-brand-700", icon: "text-brand-900", header: "text-brand-1200", description: "text-brand-1100" },
         neutral: { base: "bg-scale-300 dark:bg-scale-300 border-scale-500", icon: "text-scale-900", header: "text-scale-1200", description: "text-scale-1100" },
        },
        close: "\n      absolute \n      right-6 top-4 \n      p-0 m-0 \n      text-scale-900\n      cursor-pointer transition ease-in-out \n      bg-transparent border-transparent focus:outline-none\n      opacity-50 hover:opacity-100",
       },
       card: {
        base: `\n      bg-white dark:bg-scaleDark-700\n      \n      border\n      ${r.primary} \n\n      flex flex-col \n      rounded-md shadow-lg overflow-hidden relative\n    `,
        hoverable: "transition hover:-translate-y-1 hover:shadow-2xl",
        head: `px-8 py-6 flex justify-between \n    border-b\n      ${r.primary} `,
        content: "p-8",
       },
       tabs: {
        base: "w-full justify-between space-y-4",
        underlined: {
         list: `\n        flex items-center border-b \n        ${r.secondary}\n        `,
         base:
          " \n        relative \n        cursor-pointer \n        text-scale-900 \n        flex \n        items-center \n        space-x-2\n        text-center \n        transition\n        focus:outline-none \n        focus-visible:ring \n        focus-visible:ring-scale-700\n        focus-visible:border-scale-900\n      ",
         inactive: "\n        hover:text-scale-1200\n      ",
         active: "\n        text-scale-1200\n        border-b-2 border-scale-1200\n      ",
        },
        pills: {
         list: "flex space-x-1",
         base:
          " \n        relative \n        cursor-pointer \n        flex \n        items-center \n        space-x-2\n        text-center \n        transition\n        shadow-sm\n        rounded\n        focus:outline-none \n        focus-visible:ring \n        focus-visible:ring-scale-700\n        focus-visible:border-scale-900\n        ",
         inactive: "\n        bg-scale-200\n        border border-scale-700 hover:border-scale-900\n        text-scale-900 hover:text-scale-1200\n      ",
         active: "\n        bg-scale-1200\n        text-scale-200\n        border-scale-1200 \n      ",
        },
        block: "w-full flex items-center justify-center",
        size: Object.assign({}, l),
        scrollable: "overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right",
        content: "focus:outline-none focus:ring text-scale-900",
       },
       button: {
        base: `\n      relative \n      cursor-pointer \n      inline-flex items-center space-x-2 \n      text-center \n      font-regular\n      transition ease-out duration-200 \n      rounded \n      ${i}\n      \n    `,
        label: "truncate",
        container: "inline-flex font-medium",
        type: {
         primary: "\n        bg-brand-fixed-800 hover:bg-brand-fixed-900\n        text-lo-contrast\n        bordershadow-brand-fixed-800 hover:bordershadow-brand-fixed-1000\n        focus-visible:outline-brand-600\n      ",
         secondary:
          "\n        bg-scale-1200\n        text-scale-100 hover:text-scale-800\n        focus-visible:text-scale-600 \n\n        bordershadow-scale-1100 hover:bordershadow-scale-900\n\n        focus-visible:outline-scale-700\n      ",
         default:
          "\n        text-scale-1200\n        bg-scale-100 hover:bg-scale-300\n        bordershadow-scale-600 hover:bordershadow-scale-700\n        dark:bordershadow-scale-700 hover:dark:bordershadow-scale-800\n        dark:bg-scale-500 dark:hover:bg-scale-600\n        focus-visible:outline-brand-600\n        \n      ",
         alternative:
          "\n        text-brand-1100\n        bg-brand-200 hover:bg-brand-400\n        bordershadow-brand-600 hover:bordershadow-brand-800\n        dark:bordershadow-brand-700 hover:dark:bordershadow-brand-800\n        focus-visible:border-brand-800\n        focus-visible:outline-brand-600\n      ",
         outline:
          "\n        text-scale-1200 \n        bg-transparent \n        bordershadow-scale-600 hover:bordershadow-scale-700\n        dark:bordershadow-scale-800 hover:dark:bordershadow-scale-900\n        focus-visible:outline-scale-700\n      ",
         dashed: "\n        text-scale-1200 \n        border\n        border-dashed\n        border-scale-700 hover:border-scale-900\n        bg-transparent\n        focus-visible:outline-scale-700\n      ",
         link:
          "\n        text-brand-1100\n        border\n        border-transparent\n        hover:bg-brand-400\n        border-opacity-0\n        bg-opacity-0 dark:bg-opacity-0\n        shadow-none\n        focus-visible:outline-scale-700\n      ",
         text: "\n        text-scale-1200 \n        hover:bg-scale-500\n        shadow-none\n        focus-visible:outline-scale-700\n      ",
         danger: "\n        text-red-1100\n        bg-red-200\n        bordershadow-red-700 hover:bordershadow-red-900\n        hover:bg-red-900\n        hover:text-lo-contrast\n        focus-visible:outline-red-700\n      ",
         warning: "\n        text-amber-1100\n        bg-amber-200\n        bordershadow-amber-700 hover:bordershadow-amber-900\n        hover:bg-amber-900\n        hover:text-hi-contrast\n        focus-visible:outline-amber-700\n      ",
        },
        block: "w-full flex items-center justify-center",
        shadow: "shadow-sm",
        size: Object.assign({}, l),
        loading: "animate-spin",
        disabled: "opacity-50 cursor-not-allowed pointer-events-none",
       },
       input: {
        base: `\n      block \n      box-border \n      w-full \n      rounded-md \n      shadow-sm \n      transition-all\n      text-scale-1200  \n      border\n      focus:shadow-md\n      ${a}\n      focus:border-scale-900\n      focus:ring-scale-400\n      ${o}\n    `,
        variants: { standard: "\n        bg-scaleA-200\n        border border-scale-700\n        ", error: "\n        bg-red-100\n        border border-red-700 \n        focus:ring-red-500\n        placeholder:text-red-600\n       " },
        container: "relative",
        with_icon: "pl-10",
        size: Object.assign({}, l),
        disabled: "opacity-50",
        actions_container: "absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",
        textarea_actions_container: "absolute inset-y-1.5 right-0 pl-3 pr-1 flex space-x-1 items-start",
        textarea_actions_container_items: "flex items-center",
       },
       select: {
        base: `\n      block \n      box-border \n      w-full \n      rounded-md \n      shadow-sm \n      transition-all\n      text-scale-1200  \n      border\n      focus:shadow-md\n      ${a}\n      focus:border-scale-900\n      focus:ring-scale-400\n      ${o}\n\n      appearance-none\n      bg-none\n    `,
        variants: { standard: "\n        bg-scaleA-200\n        border border-scale-700\n        ", error: "\n        bg-red-100\n        border border-red-700 \n        focus:ring-red-500\n        placeholder:text-red-600\n       " },
        container: "relative",
        with_icon: "pl-10",
        size: Object.assign({}, l),
        disabled: "opacity-50",
        actions_container: "absolute inset-y-0 right-0 pl-3 pr-1 mr-5 flex items-center",
        chevron_container: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
        chevron: "h-5 w-5 text-scale-600",
       },
       inputNumber: {
        base: `\n      block\n      box-border \n      w-full \n      rounded-md \n      shadow-sm \n      transition-all\n      text-scale-1200  \n      border\n      focus:shadow-md\n      ${a}\n      focus:border-scale-900\n      focus:ring-scale-400\n      ${o}\n\n      appearance-none\n      bg-none\n    `,
        variants: { standard: "\n        bg-scaleA-200\n        border border-scale-700\n      ", error: "\n        bg-red-100\n        border border-red-700 \n        focus:ring-red-500\n        placeholder:text-red-600\n       " },
        disabled: "opacity-50",
        container: "relative",
        with_icon: "pl-10",
        size: Object.assign({}, l),
        actions_container: "absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",
       },
       checkbox: {
        base: `\n      bg-transparent \n      ${a}\n      focus:ring-scale-400\n      text-brand-900 \n      border-scale-700 \n      shadow-sm\n      rounded\n      cursor-pointer\n    `,
        container: "flex cursor-pointer leading-none",
        size: { tiny: "h-3 w-3 mt-1 mr-3", small: "h-3.5 w-3.5 mt-0.5 mr-3.5", medium: "h-4 w-4 mt-0.5 mr-3.5", large: "h-5 w-5 mt-0.5 mr-4", xlarge: "h-5 w-5 mt-0.5 mr-4" },
        disabled: "opacity-50",
        label: Object.assign({ base: "text-scale-1100 cursor-pointer" }, s.text),
        label_before: Object.assign({ base: "text-scale-500" }, s.text),
        label_after: Object.assign({ base: "text-scale-500" }, s.text),
        description: Object.assign({ base: "text-scale-900" }, s.text),
        group: "space-y-3",
       },
       radio: {
        base: `\n      absolute\n      ${a}\n      focus:ring-brand-400\n      border-scale-700\n      \n      text-brand-900\n      shadow-sm\n      cursor-pointer\n      peer\n\n      bg-scale-300\n    `,
        hidden: "absolute opacity-0",
        size: { tiny: "h-3 w-3", small: "h-3.5 w-3.5", medium: "h-4 w-4", large: "h-5 w-5", xlarge: "h-5 w-5" },
        variants: {
         cards: {
          container: { base: "relative cursor-pointer flex", align: { vertical: "flex flex-col space-y-1", horizontal: "flex flex-row space-x-2" } },
          group: "-space-y-px shadow-sm",
          base: "\n          transition\n          border\n          first:rounded-tl-md first:rounded-tr-md\n          last:rounded-bl-md last:rounded-br-md\n        ",
          size: { tiny: "px-5 py-3", small: "px-6 py-4", medium: "px-6 py-4", large: "px-8 p-4", xlarge: "px-8 p-4" },
          inactive: "\n          bg-scale-100 dark:bg-scale-400\n          border-scale-500 dark:border-scale-500\n          hover:border-scale-700 hover:dark:border-scale-700\n          hover:bg-scale-200 dark:hover:bg-scale-500\n        ",
          active: "\n          bg-scale-300 dark:bg-scale-600 z-10\n          border-scale-900 dark:border-scale-900 \n          border-1\n        ",
          radio_offset: "left-4",
         },
         "stacked-cards": {
          container: { base: "relative cursor-pointer flex items-center justify-between", align: { vertical: "flex flex-col space-y-1", horizontal: "flex flex-row space-x-2" } },
          group: "space-y-3",
          base: "\n          transition\n          rounded-md\n          border\n          shadow-sm \n        ",
          size: { tiny: "px-5 py-3", small: "px-6 py-4", medium: "px-6 py-4", large: "px-8 p-4", xlarge: "px-8 p-4" },
          inactive: "\n          bg-scale-100 dark:bg-scale-400\n          border-scale-500 dark:border-scale-500\n          hover:border-scale-700 hover:dark:border-scale-700\n          hover:bg-scale-200 dark:hover:bg-scale-500\n        ",
          active: "\n          bg-scale-300 dark:bg-scale-600 z-10\n          border-scale-900 dark:border-scale-900 \n          border-1\n        ",
          radio_offset: "left-4",
         },
         "small-cards": {
          container: { base: "relative cursor-pointer flex", align: { vertical: "flex flex-col space-y-1 items-center justify-center", horizontal: "flex flex-row space-x-2" } },
          group: "flex flex-row gap-3",
          base: "\n          transition \n          border\n          rounded-lg \n          grow\n          items-center\n          flex-wrap\n          justify-center\n          shadow-sm\n        ",
          size: { tiny: "px-5 py-3", small: "px-6 py-4", medium: "px-6 py-4", large: "px-8 p-4", xlarge: "px-8 p-4" },
          inactive: "\n          bg-scale-100 dark:bg-scale-400\n          border-scale-500 dark:border-scale-500\n          hover:border-scale-700 hover:dark:border-scale-700\n          hover:bg-scale-200 dark:hover:bg-scale-500\n        ",
          active: "\n          bg-scale-300 dark:bg-scale-500 z-10\n          border-scale-900 dark:border-scale-900 border-1\n        ",
          radio_offset: "left-4",
         },
         "large-cards": {
          container: { base: "relative cursor-pointer flex", align: { vertical: "flex flex-col space-y-1", horizontal: "flex flex-row space-x-2" } },
          group: "flex flex-row gap-3",
          base: "\n          transition \n          border border-scale-700 hover:border-scale-900 \n          shadow-sm\n          rounded-lg \n          grow\n        ",
          size: { tiny: "px-5 py-3", small: "px-6 py-4", medium: "px-6 py-4", large: "px-8 p-4", xlarge: "px-8 p-4" },
          inactive: "\n          bg-scale-100 dark:bg-scale-400\n          border-scale-500 dark:border-scale-500\n          hover:border-scale-700 hover:dark:border-scale-700\n          hover:bg-scale-200 dark:hover:bg-scale-500\n        ",
          active: "\n          bg-scale-300 dark:bg-scale-600 z-10\n          border-scale-900 dark:border-scale-900 \n          border-1\n        ",
          radio_offset: "left-4",
         },
         list: {
          container: { base: "relative cursor-pointer flex", size: { tiny: "pl-6", small: "pl-6", medium: "pl-7", large: "pl-10", xlarge: "pl-10" }, align: { vertical: "flex flex-col space-y-1", horizontal: "flex flex-row space-x-2" } },
          group: "space-y-4",
          base: "",
          size: { tiny: "0", small: "0", medium: "0", large: "0", xlarge: "0" },
          active: "",
          radio_offset: "left-0",
         },
        },
        label: Object.assign({ base: "text-scale-1100 cursor-pointer" }, s.text),
        label_before: Object.assign({ base: "text-scale-500" }, s.text),
        label_after: Object.assign({ base: "text-scale-500" }, s.text),
        description: Object.assign({ base: "text-scale-900" }, s.text),
        optionalLabel: Object.assign({ base: "text-scale-900" }, s.text),
        disabled: "opacity-50 cursor-auto border-dashed",
       },
       sidepanel: {
        base: "\n      bg-scale-100 dark:bg-scale-300\n      flex flex-col \n      fixed \n      inset-y-0 \n      max-w-full \n      h-screen\n      border-l border-overlay-border\n      shadow-xl\n    ",
        header: "\n      space-y-1 py-4 px-4 bg-overlay-bg sm:px-6 \n      border-b border-overlay-border\n    ",
        contents: "\n      relative \n      flex-1 \n      overflow-y-auto\n    ",
        content: "\n      px-4 sm:px-6\n    ",
        footer: "\n      flex justify-end gap-2\n      p-4 bg-overlay-bg\n      border-t border-overlay-border\n    ",
        size: { medium: "w-screen max-w-md h-full", large: "w-screen max-w-2xl h-full" },
        align: {
         left: "\n        left-0\n        data-open:animate-panel-slide-left-out \n        data-closed:animate-panel-slide-left-in\n      ",
         right: "\n        right-0\n        data-open:animate-panel-slide-right-out \n        data-closed:animate-panel-slide-right-in\n      ",
        },
        seperator: "\n      w-full\n      h-px\n      my-2\n      bg-scale-300 dark:bg-scale-500\n    ",
        overlay: "\n      fixed\n      bg-scale-300\n      dark:bg-scale-100\n      h-full w-full\n      left-0\n      top-0 \n      opacity-75\n      data-closed:animate-fade-out-overlay-bg \n      data-open:animate-fade-in-overlay-bg\n    ",
        trigger: "\n      border-none bg-transparent p-0 focus:ring-0\n    ",
       },
       toggle: {
        base: `\n      p-0 relative \n      inline-flex flex-shrink-0 \n      border-2 border-transparent \n      rounded-full \n      cursor-pointer\n      transition-colors ease-in-out duration-200\n      ${a}\n      focus:ring-scale-400\n      bg-scale-500\n\n      hover:bg-scale-700\n    `,
        active: "\n      bg-brand-900    \n      hover:bg-brand-900    \n    ",
        handle_container: { tiny: "h-4 w-7", small: "h-6 w-11", medium: "h-6 w-11", large: "h-7 w-12", xlarge: "h-7 w-12" },
        handle: {
         base: "\n        inline-block h-5 w-5 \n        rounded-full \n        bg-scale-100\n        dark:bg-scale-900\n        shadow ring-0 \n        transition \n        ease-in-out duration-200\n      ",
         tiny: "h-3 w-3",
         small: "h-5 w-5",
         medium: "h-5 w-5",
         large: "h-6 w-6",
         xlarge: "h-6 w-6",
        },
        handle_active: { tiny: " translate-x-3 dark:bg-white", small: "translate-x-5 dark:bg-white", medium: "translate-x-5 dark:bg-white", large: "translate-x-5 dark:bg-white", xlarge: "translate-x-5 dark:bg-white" },
        disabled: "opacity-75 cursor-not-allowed",
       },
       form_layout: {
        container: "grid gap-2",
        flex: { left: { base: "flex flex-row gap-6", content: "", labels: "order-2", data_input: "order-1" }, right: { base: "flex flex-row gap-6 justify-between", content: "order-last", labels: "", data_input: "text-right" } },
        responsive: "md:grid md:grid-cols-12 md:gap-x-4",
        non_responsive: "grid grid-cols-12 gap-2",
        labels_horizontal_layout: "flex flex-row space-x-2 justify-between col-span-12",
        labels_vertical_layout: "flex flex-col space-y-2 col-span-4",
        data_input_horizontal_layout: "col-span-12",
        non_box_data_input_spacing_vertical: "my-3",
        non_box_data_input_spacing_horizontal: "my-3 md:mt-0 mb-3",
        data_input_vertical_layout: "col-span-8",
        data_input_vertical_layout__align_right: "text-right",
        label: { base: "block text-scale-1100", size: Object.assign({}, s.text) },
        label_optional: { base: "text-scale-900", size: Object.assign({}, s.text) },
        description: { base: "mt-2 text-scale-900", size: Object.assign({}, s.text) },
        label_before: { base: "text-scale-500 ", size: Object.assign({}, s.text) },
        label_after: { base: "text-scale-500", size: Object.assign({}, s.text) },
        error: { base: "\n        text-red-900 \n        transition-all\n        data-show:mt-2\n        data-show:animate-slide-down-normal\n        data-hide:animate-slide-up-normal\n      ", size: Object.assign({}, s.text) },
        size: { tiny: "text-xs", small: "text-sm leading-4", medium: "text-sm", large: "text-base", xlarge: "text-base" },
       },
       dropdown: {
        trigger: "\n      flex\n\n      border-none \n      rounded\n      bg-transparent p-0\n      outline-none\n      outline-offset-1\n      transition-all\n      focus:outline-4\n      focus:outline-scale-600\n    ",
        item_nested:
         "\n      border-none\n      focus:outline-none\n      focus:bg-scale-300 dark:focus:bg-scale-500\n      focus:text-scale-1200\n      data-open:bg-scale-300 dark:data-open:bg-scale-500\n      data-open:text-scale-1200\n    ",
        content:
         "\n      bg-scale-100 dark:bg-scale-300\n      border border-scale-300 dark:border-scale-500\n      rounded\n      shadow-lg\n      py-1.5\n\n      origin-dropdown\n      data-open:animate-dropdown-content-show\n      data-closed:animate-dropdown-content-hide\n      min-w-fit\n    ",
        size: { tiny: "w-40", small: "w-48", medium: "w-64", large: "w-80", xlarge: "w-96", content: "w-auto" },
        arrow: "\n      fill-current\n      border-0 border-t\n    ",
        item:
         "\n      group\n      relative\n      text-xs\n      text-scale-1100\n      px-4 py-1.5 flex items-center space-x-2\n      cursor-pointer\n      focus:bg-scale-300 dark:focus:bg-scale-500\n      focus:text-scale-1200\n      border-none\n      focus:outline-none\n    ",
        label: "\n      text-scale-900\n      px-4 flex items-center space-x-2 py-1.5\n      text-xs\n    ",
        seperator: "\n      w-full\n      h-px\n      my-2\n      bg-scale-300 dark:bg-scale-500\n    ",
        misc: "\n      px-4 py-1.5\n    ",
        check: "\n      absolute left-3\n      flex items-center\n      data-checked:text-scale-1200\n    ",
        input: "\n      flex items-center space-x-0 pl-8 pr-4\n    ",
        right_slot: "\n      text-scale-900\n      group-focus:text-scale-1000\n      absolute\n      -translate-y-1/2\n      right-2\n      top-1/2\n    ",
       },
       popover: {
        trigger: "\n      flex\n      border-none \n  \n      rounded\n      bg-transparent\n      p-0\n      outline-none\n      outline-offset-1\n      transition-all\n      focus:outline-4\n      focus:outline-scale-600\n\n    ",
        content:
         "\n      bg-scale-100 dark:bg-scale-300\n      border border-scale-300 dark:border-scale-500\n      rounded\n      shadow-lg\n      data-open:animate-dropdown-content-show\n      data-closed:animate-dropdown-content-hide\n      min-w-fit\n\n      origin-popover \n      data-open:animate-dropdown-content-show\n      data-closed:animate-dropdown-content-hide\n    ",
        size: { tiny: "w-40", small: "w-48", medium: "w-64", large: "w-80", xlarge: "w-96", content: "w-auto" },
        header: "\n      bg-scale-200 dark:bg-scale-400\n      space-y-1 py-1.5 px-3\n      border-b border-scale-300 dark:border-scale-500\n    ",
        footer: "\n      bg-scale-200 dark:bg-scale-400\n      py-1.5 px-3\n      border-t border-scale-300 dark:border-scale-500\n    ",
        close: "\n      transition\n      text-scale-900 hover:text-scale-1100\n    ",
        seperator: "\n      w-full\n      h-px\n      my-2\n      bg-scale-300 dark:bg-scale-500\n    ",
       },
       menu: {
        item: {
         base: "\n        cursor-pointer\n        flex space-x-3 items-center\n        outline-none\n        focus-visible:ring-1 ring-scale-1200 focus-visible:z-10 \n        group\n      ",
         content: { base: "transition truncate text-sm w-full", normal: "text-scale-1100 group-hover:text-scale-1200", active: "text-scale-1200 font-semibold" },
         icon: { base: "transition truncate text-sm", normal: "text-scale-900 group-hover:text-scale-1100", active: "text-scale-1200" },
         variants: {
          text: {
           base: "\n            py-1\n          ",
           normal: "\n            font-normal\n            border-scale-500\n            group-hover:border-scale-900",
           active: "\n            font-semibold\n            text-scale-900\n            z-10\n          ",
          },
          border: {
           base: "\n            px-4 py-1\n          ",
           normal: "\n            border-l\n            font-normal\n            border-scale-500\n            group-hover:border-scale-900",
           active: "\n            font-semibold\n\n            text-scale-900\n            z-10\n\n            border-l\n            border-brand-900\n            group-hover:border-brand-900\n          ",
           rounded: "rounded-md",
          },
          pills: {
           base: "\n            px-3 py-1\n          ",
           normal: "\n            font-normal\n            border-scale-500\n            group-hover:border-scale-900",
           active: "\n            font-semibold\n            bg-scale-400\n            dark:bg-scale-300\n            text-scale-900\n            z-10\n\n            rounded-md\n          ",
          },
         },
        },
        group: { base: "\n        flex space-x-3 \n        mb-2\n        font-normal\n      ", icon: "text-scale-900", content: "text-sm text-scale-900 w-full", variants: { text: "", pills: "px-3", border: "" } },
       },
       modal: {
        base:
         "\n      relative\n      bg-scale-100 dark:bg-scale-300\n      my-4\n      border border-scale-300 dark:border-scale-500\n      rounded-md \n      shadow-xl \n      data-open:animate-overlay-show \n      data-closed:animate-overlay-hide  \n      \n    ",
        header: "\n      bg-scale-200 dark:bg-scale-400\n      space-y-1 py-3 px-4 sm:px-5 \n      border-b border-scale-300 dark:border-scale-500\n    ",
        footer: "\n      flex justify-end gap-2\n      py-3 px-5 \n      border-t border-scale-300 dark:border-scale-500\n    ",
        size: {
         tiny: "sm:align-middle sm:w-full sm:max-w-xs",
         small: "sm:align-middle sm:w-full sm:max-w-sm",
         medium: "sm:align-middle sm:w-full sm:max-w-lg",
         large: "sm:align-middle sm:w-full max-w-xl",
         xlarge: "sm:align-middle sm:w-full max-w-3xl",
         xxlarge: "sm:align-middle sm:w-full max-w-6xl",
         xxxlarge: "sm:align-middle sm:w-full max-w-7xl",
        },
        overlay: "\n      fixed\n      bg-scale-300\n      dark:bg-scale-100\n      h-full w-full\n      left-0\n      top-0 \n      opacity-75\n      data-closed:animate-fade-out-overlay-bg \n      data-open:animate-fade-in-overlay-bg\n    ",
        scroll_overlay: "\n      fixed\n      inset-0\n      grid\n      place-items-center\n      overflow-y-auto\n      data-open:animate-overlay-show data-closed:animate-overlay-hide  \n    ",
        seperator: "\n      w-full\n      h-px\n      my-2\n      bg-scale-300 dark:bg-scale-500\n    ",
        content: "px-5",
       },
       listbox: {
        base: `\n      block \n      box-border \n      w-full \n      rounded-md \n      shadow-sm \n      text-scale-1200  \n      border\n      focus:shadow-md\n      ${a}\n      focus:border-scale-900\n      focus:ring-scale-400\n      ${o}\n      indent-px\n      transition-all\n      bg-none\n    `,
        container: "relative",
        label: "truncate",
        variants: {
         standard: "\n        bg-scaleA-200\n        border border-scale-700\n\n        aria-expanded:border-scale-900\n        aria-expanded:ring-scale-400\n        aria-expanded:ring-2\n        ",
         error: "\n        bg-red-100\n        border border-red-700 \n        focus:ring-red-500\n        placeholder:text-red-600\n       ",
        },
        options_container_animate: "\n      transition\n      data-open:animate-slide-down \n      data-open:opacity-1\n      data-closed:animate-slide-up\n      data-closed:opacity-0\n    ",
        options_container:
         "\n      bg-scale-100 dark:bg-scale-300 \n      shadow-lg \n      border border-solid \n      border-gray-100 dark:border-gray-600 max-h-60 \n      rounded-md py-1 text-base \n      sm:text-sm z-10 overflow-hidden overflow-y-scroll\n\n      origin-dropdown\n      data-open:animate-dropdown-content-show\n      data-closed:animate-dropdown-content-hide\n    ",
        with_icon: "pl-10",
        addOnBefore: "\n    w-full flex flex-row items-center space-x-3\n    ",
        size: Object.assign({}, l),
        disabled: "opacity-50",
        actions_container: "absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",
        chevron_container: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
        chevron: "h-5 w-5 text-scale-600",
        option:
         "\n      w-listbox\n      transition cursor-pointer select-none relative py-2 pl-3 pr-9 \n      text-scale-900\n      text-sm\n\n      focus:bg-scale-300 dark:focus:bg-scale-500\n      focus:text-scale-1200\n      border-none\n      focus:outline-none\n    ",
        option_active: "text-scale-1200 bg-scale-600",
        option_disabled: "cursor-not-allowed opacity-50",
        option_inner: "flex items-center space-x-3",
        option_check: "absolute inset-y-0 right-0 flex items-center pr-3 text-brand-900",
        option_check_active: "text-brand-900",
        option_check_icon: "h-5 w-5",
       },
       collapsible: { content: "\n      data-open:animate-slide-down-normal\n      data-closed:animate-slide-up-normal\n    " },
       inputErrorIcon: { base: "\n      flex items-center \n      right-3 pr-2 pl-2 \n      inset-y-0 \n      pointer-events-none\n      text-red-900\n    " },
       inputIconContainer: { base: "\n    absolute inset-y-0 \n    left-0 pl-3 flex \n    items-center pointer-events-none\n    text-scale-1100\n    " },
       icon: { container: "flex-shrink-0 flex items-center justify-center rounded-full p-3" },
       loading: { base: "relative", content: { base: "transition-opacity duration-300", active: "opacity-40" }, spinner: "\n      absolute\n      text-brand-900 animate-spin\n      inset-0\n      m-auto\n    " },
      };
     },
     4801: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return i;
       },
      });
      var r = t(2784),
       o = t(7777);
      t(2322);
      const a = (0, r.createContext)({ theme: o.Z });
      function i(e) {
       let {
        theme: { [e]: n },
       } = (0, r.useContext)(a);
       return n || (n = o.Z.button), (n = JSON.stringify(n).replace(/\\n/g, "").replace(/\s\s+/g, " ")), (n = JSON.parse(n)), n;
      }
     },
     2779: function (e, n) {
      var t;
      !(function () {
       "use strict";
       var r = {}.hasOwnProperty;
       function o() {
        for (var e = [], n = 0; n < arguments.length; n++) {
         var t = arguments[n];
         if (t) {
          var a = typeof t;
          if ("string" === a || "number" === a) e.push(t);
          else if (Array.isArray(t)) {
           if (t.length) {
            var i = o.apply(null, t);
            i && e.push(i);
           }
          } else if ("object" === a)
           if (t.toString === Object.prototype.toString) for (var s in t) r.call(t, s) && t[s] && e.push(s);
           else e.push(t.toString());
         }
        }
        return e.join(" ");
       }
       e.exports
        ? ((o.default = o), (e.exports = o))
        : void 0 ===
           (t = function () {
            return o;
           }.apply(n, [])) || (e.exports = t);
      })();
     },
     3718: function (e, n, t) {
      "use strict";
      function r(e, n) {
       (null == n || n > e.length) && (n = e.length);
       for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
       return r;
      }
      function o(e, n, t) {
       return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
      }
      function a(e, n) {
       return (
        (function (e) {
         if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, n) {
         var t = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
         if (null != t) {
          var r,
           o,
           a = [],
           i = !0,
           s = !1;
          try {
           for (t = t.call(e); !(i = (r = t.next()).done) && (a.push(r.value), !n || a.length !== n); i = !0);
          } catch (l) {
           (s = !0), (o = l);
          } finally {
           try {
            i || null == t.return || t.return();
           } finally {
            if (s) throw o;
           }
          }
          return a;
         }
        })(e, n) ||
        s(e, n) ||
        (function () {
         throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })()
       );
      }
      function i(e) {
       return (
        (function (e) {
         if (Array.isArray(e)) return r(e);
        })(e) ||
        (function (e) {
         if (("undefined" !== typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
        })(e) ||
        s(e) ||
        (function () {
         throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })()
       );
      }
      function s(e, n) {
       if (e) {
        if ("string" === typeof e) return r(e, n);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? r(e, n) : void 0;
       }
      }
      n.default = function (e) {
       var n = e.src,
        t = e.sizes,
        r = e.unoptimized,
        s = void 0 !== r && r,
        l = e.priority,
        f = void 0 !== l && l,
        v = e.loading,
        j = e.lazyRoot,
        E = void 0 === j ? null : j,
        z = e.lazyBoundary,
        _ = void 0 === z ? "200px" : z,
        S = e.className,
        C = e.quality,
        N = e.width,
        A = e.height,
        P = e.objectFit,
        R = e.objectPosition,
        I = e.onLoadingComplete,
        L = e.loader,
        T = void 0 === L ? O : L,
        M = e.placeholder,
        $ = void 0 === M ? "empty" : M,
        Z = e.blurDataURL,
        D = (function (e, n) {
         if (null == e) return {};
         var t,
          r,
          o = (function (e, n) {
           if (null == e) return {};
           var t,
            r,
            o = {},
            a = Object.keys(e);
           for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
           return o;
          })(e, n);
         if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
         }
         return o;
        })(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]),
        W = c.useRef(null),
        U = c.useContext(p.ImageConfigContext),
        B = c.useMemo(
         function () {
          var e = m || U || u.imageConfigDefault,
           n = i(e.deviceSizes)
            .concat(i(e.imageSizes))
            .sort(function (e, n) {
             return e - n;
            }),
           t = e.deviceSizes.sort(function (e, n) {
            return e - n;
           });
          return g({}, e, { allSizes: n, deviceSizes: t });
         },
         [U]
        ),
        q = D,
        H = t ? "responsive" : "intrinsic";
       "layout" in q && (q.layout && (H = q.layout), delete q.layout);
       var F = "";
       if (
        (function (e) {
         return (
          "object" === typeof e &&
          (y(e) ||
           (function (e) {
            return void 0 !== e.src;
           })(e))
         );
        })(n)
       ) {
        var V = y(n) ? n.default : n;
        if (!V.src) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));
        if (((Z = Z || V.blurDataURL), (F = V.src), (!H || "fill" !== H) && ((A = A || V.height), (N = N || V.width), !V.height || !V.width)))
         throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)));
       }
       n = "string" === typeof n ? n : F;
       var G = k(N),
        J = k(A),
        K = k(C),
        X = !f && ("lazy" === v || "undefined" === typeof v);
       (n.startsWith("data:") || n.startsWith("blob:")) && ((s = !0), (X = !1));
       x.has(n) && (X = !1);
       0;
       var Q,
        Y = a(b.useIntersection({ rootRef: E, rootMargin: _, disabled: !X }), 2),
        ee = Y[0],
        ne = Y[1],
        te = !X || ne,
        re = { boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 },
        oe = { boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 },
        ae = !1,
        ie = {
         position: "absolute",
         top: 0,
         left: 0,
         bottom: 0,
         right: 0,
         boxSizing: "border-box",
         padding: 0,
         border: "none",
         margin: "auto",
         display: "block",
         width: 0,
         height: 0,
         minWidth: "100%",
         maxWidth: "100%",
         minHeight: "100%",
         maxHeight: "100%",
         objectFit: P,
         objectPosition: R,
        },
        se = "blur" === $ ? { filter: "blur(20px)", backgroundSize: P || "cover", backgroundImage: 'url("'.concat(Z, '")'), backgroundPosition: R || "0% 0%" } : {};
       if ("fill" === H) (re.display = "block"), (re.position = "absolute"), (re.top = 0), (re.left = 0), (re.bottom = 0), (re.right = 0);
       else if ("undefined" !== typeof G && "undefined" !== typeof J) {
        var le = J / G,
         ce = isNaN(le) ? "100%" : "".concat(100 * le, "%");
        "responsive" === H
         ? ((re.display = "block"), (re.position = "relative"), (ae = !0), (oe.paddingTop = ce))
         : "intrinsic" === H
         ? ((re.display = "inline-block"),
           (re.position = "relative"),
           (re.maxWidth = "100%"),
           (ae = !0),
           (oe.maxWidth = "100%"),
           (Q = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(G, "%27%20height=%27").concat(J, "%27/%3e")))
         : "fixed" === H && ((re.display = "inline-block"), (re.position = "relative"), (re.width = G), (re.height = J));
       } else 0;
       var de = { src: h, srcSet: void 0, sizes: void 0 };
       te && (de = w({ config: B, src: n, unoptimized: s, layout: H, width: G, quality: K, sizes: t, loader: T }));
       var ue = n;
       0;
       var be;
       0;
       var pe = (o((be = {}), "imagesrcset", de.srcSet), o(be, "imagesizes", de.sizes), be),
        fe = c.default.useLayoutEffect,
        ge = c.useRef(I);
       return (
        c.useEffect(
         function () {
          ge.current = I;
         },
         [I]
        ),
        fe(
         function () {
          ee(W.current);
         },
         [ee]
        ),
        c.useEffect(
         function () {
          !(function (e, n, t, r, o) {
           var a = function () {
            var t = e.current;
            t &&
             t.src !== h &&
             ("decode" in t ? t.decode() : Promise.resolve())
              .catch(function () {})
              .then(function () {
               if (e.current && (x.add(n), "blur" === r && ((t.style.filter = ""), (t.style.backgroundSize = ""), (t.style.backgroundImage = ""), (t.style.backgroundPosition = "")), o.current)) {
                var a = t.naturalWidth,
                 i = t.naturalHeight;
                o.current({ naturalWidth: a, naturalHeight: i });
               }
              });
           };
           e.current && (e.current.complete ? a() : (e.current.onload = a));
          })(W, ue, 0, $, ge);
         },
         [ue, H, $, te]
        ),
        c.default.createElement(
         "span",
         { style: re },
         ae
          ? c.default.createElement(
             "span",
             { style: oe },
             Q
              ? c.default.createElement("img", { style: { display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }, alt: "", "aria-hidden": !0, src: Q })
              : null
            )
          : null,
         c.default.createElement("img", Object.assign({}, q, de, { decoding: "async", "data-nimg": H, className: S, ref: W, style: g({}, ie, se) })),
         X &&
          c.default.createElement(
           "noscript",
           null,
           c.default.createElement(
            "img",
            Object.assign({}, q, w({ config: B, src: n, unoptimized: s, layout: H, width: G, quality: K, sizes: t, loader: T }), { decoding: "async", "data-nimg": H, style: ie, className: S, loading: v || "lazy" })
           )
          ),
         f ? c.default.createElement(d.default, null, c.default.createElement("link", Object.assign({ key: "__nimg-" + de.src + de.srcSet + de.sizes, rel: "preload", as: "image", href: de.srcSet ? void 0 : de.src }, pe))) : null
        )
       );
      };
      var l,
       c = (function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e)
         for (var t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) {
           var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
           r.get || r.set ? Object.defineProperty(n, t, r) : (n[t] = e[t]);
          }
        return (n.default = e), n;
       })(t(2784)),
       d = (l = t(5913)) && l.__esModule ? l : { default: l },
       u = t(9406),
       b = t(2030),
       p = t(1);
      function f(e, n, t) {
       return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
      }
      function g(e) {
       for (
        var n = arguments,
         t = function (t) {
          var r = null != n[t] ? n[t] : {},
           o = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
           (o = o.concat(
            Object.getOwnPropertySymbols(r).filter(function (e) {
             return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })
           )),
           o.forEach(function (n) {
            f(e, n, r[n]);
           });
         },
         r = 1;
        r < arguments.length;
        r++
       )
        t(r);
       return e;
      }
      var m = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default" },
       x = new Set(),
       h = (new Map(), "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      var v = new Map([
       [
        "default",
        function (e) {
         var n = e.config,
          t = e.src,
          r = e.width,
          o = e.quality;
         0;
         if (t.endsWith(".svg") && !n.dangerouslyAllowSVG) return t;
         return ""
          .concat(n.path, "?url=")
          .concat(encodeURIComponent(t), "&w=")
          .concat(r, "&q=")
          .concat(o || 75);
        },
       ],
       [
        "imgix",
        function (e) {
         var n = e.config,
          t = e.src,
          r = e.width,
          o = e.quality,
          a = new URL("".concat(n.path).concat(j(t))),
          i = a.searchParams;
         i.set("auto", i.get("auto") || "format"), i.set("fit", i.get("fit") || "max"), i.set("w", i.get("w") || r.toString()), o && i.set("q", o.toString());
         return a.href;
        },
       ],
       [
        "cloudinary",
        function (e) {
         var n = e.config,
          t = e.src,
          r = e.width,
          o = e.quality,
          a = ["f_auto", "c_limit", "w_" + r, "q_" + (o || "auto")].join(",") + "/";
         return "".concat(n.path).concat(a).concat(j(t));
        },
       ],
       [
        "akamai",
        function (e) {
         var n = e.config,
          t = e.src,
          r = e.width;
         return "".concat(n.path).concat(j(t), "?imwidth=").concat(r);
        },
       ],
       [
        "custom",
        function (e) {
         var n = e.src;
         throw new Error('Image with src "'.concat(n, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        },
       ],
      ]);
      function y(e) {
       return void 0 !== e.default;
      }
      function w(e) {
       var n = e.config,
        t = e.src,
        r = e.unoptimized,
        o = e.layout,
        a = e.width,
        s = e.quality,
        l = e.sizes,
        c = e.loader;
       if (r) return { src: t, srcSet: void 0, sizes: void 0 };
       var d = (function (e, n, t, r) {
         var o = e.deviceSizes,
          a = e.allSizes;
         if (r && ("fill" === t || "responsive" === t)) {
          for (var s, l = /(^|\s)(1?\d?\d)vw/g, c = []; (s = l.exec(r)); s) c.push(parseInt(s[2]));
          if (c.length) {
           var d,
            u = 0.01 * (d = Math).min.apply(d, i(c));
           return {
            widths: a.filter(function (e) {
             return e >= o[0] * u;
            }),
            kind: "w",
           };
          }
          return { widths: a, kind: "w" };
         }
         return "number" !== typeof n || "fill" === t || "responsive" === t
          ? { widths: o, kind: "w" }
          : {
             widths: i(
              new Set(
               [n, 2 * n].map(function (e) {
                return (
                 a.find(function (n) {
                  return n >= e;
                 }) || a[a.length - 1]
                );
               })
              )
             ),
             kind: "x",
            };
        })(n, a, o, l),
        u = d.widths,
        b = d.kind,
        p = u.length - 1;
       return {
        sizes: l || "w" !== b ? l : "100vw",
        srcSet: u
         .map(function (e, r) {
          return ""
           .concat(c({ config: n, src: t, quality: s, width: e }), " ")
           .concat("w" === b ? e : r + 1)
           .concat(b);
         })
         .join(", "),
        src: c({ config: n, src: t, quality: s, width: u[p] }),
       };
      }
      function k(e) {
       return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0;
      }
      function O(e) {
       var n,
        t = (null === (n = e.config) || void 0 === n ? void 0 : n.loader) || "default",
        r = v.get(t);
       if (r) return r(e);
       throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "), ". Received: ").concat(t));
      }
      function j(e) {
       return "/" === e[0] ? e.slice(1) : e;
      }
     },
     162: function (e, n, t) {
      "use strict";
      function r(e, n) {
       (null == n || n > e.length) && (n = e.length);
       for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
       return r;
      }
      function o(e, n) {
       return (
        (function (e) {
         if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, n) {
         var t = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
         if (null != t) {
          var r,
           o,
           a = [],
           i = !0,
           s = !1;
          try {
           for (t = t.call(e); !(i = (r = t.next()).done) && (a.push(r.value), !n || a.length !== n); i = !0);
          } catch (l) {
           (s = !0), (o = l);
          } finally {
           try {
            i || null == t.return || t.return();
           } finally {
            if (s) throw o;
           }
          }
          return a;
         }
        })(e, n) ||
        (function (e, n) {
         if (!e) return;
         if ("string" === typeof e) return r(e, n);
         var t = Object.prototype.toString.call(e).slice(8, -1);
         "Object" === t && e.constructor && (t = e.constructor.name);
         if ("Map" === t || "Set" === t) return Array.from(t);
         if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r(e, n);
        })(e, n) ||
        (function () {
         throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })()
       );
      }
      n.default = void 0;
      var a,
       i = (a = t(2784)) && a.__esModule ? a : { default: a },
       s = t(9918),
       l = t(3642),
       c = t(2030);
      var d = {};
      function u(e, n, t, r) {
       if (e && s.isLocalURL(n)) {
        e.prefetch(n, t, r).catch(function (e) {
         0;
        });
        var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
        d[n + "%" + t + (o ? "%" + o : "")] = !0;
       }
      }
      var b = function (e) {
       var n,
        t = !1 !== e.prefetch,
        r = l.useRouter(),
        a = i.default.useMemo(
         function () {
          var n = o(s.resolveHref(r, e.href, !0), 2),
           t = n[0],
           a = n[1];
          return { href: t, as: e.as ? s.resolveHref(r, e.as) : a || t };
         },
         [r, e.href, e.as]
        ),
        b = a.href,
        p = a.as,
        f = e.children,
        g = e.replace,
        m = e.shallow,
        x = e.scroll,
        h = e.locale;
       "string" === typeof f && (f = i.default.createElement("a", null, f));
       var v = (n = i.default.Children.only(f)) && "object" === typeof n && n.ref,
        y = o(c.useIntersection({ rootMargin: "200px" }), 2),
        w = y[0],
        k = y[1],
        O = i.default.useCallback(
         function (e) {
          w(e), v && ("function" === typeof v ? v(e) : "object" === typeof v && (v.current = e));
         },
         [v, w]
        );
       i.default.useEffect(
        function () {
         var e = k && t && s.isLocalURL(b),
          n = "undefined" !== typeof h ? h : r && r.locale,
          o = d[b + "%" + p + (n ? "%" + n : "")];
         e && !o && u(r, b, p, { locale: n });
        },
        [p, b, k, h, t, r]
       );
       var j = {
        ref: O,
        onClick: function (e) {
         n.props && "function" === typeof n.props.onClick && n.props.onClick(e),
          e.defaultPrevented ||
           (function (e, n, t, r, o, a, i, l) {
            ("A" !== e.currentTarget.nodeName.toUpperCase() ||
             (!(function (e) {
              var n = e.currentTarget.target;
              return (n && "_self" !== n) || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.nativeEvent && 2 === e.nativeEvent.which);
             })(e) &&
              s.isLocalURL(t))) &&
             (e.preventDefault(), n[o ? "replace" : "push"](t, r, { shallow: a, locale: l, scroll: i }));
           })(e, r, b, p, g, m, x, h);
        },
        onMouseEnter: function (e) {
         n.props && "function" === typeof n.props.onMouseEnter && n.props.onMouseEnter(e), s.isLocalURL(b) && u(r, b, p, { priority: !0 });
        },
       };
       if (e.passHref || ("a" === n.type && !("href" in n.props))) {
        var E = "undefined" !== typeof h ? h : r && r.locale,
         z = r && r.isLocaleDomain && s.getDomainLocale(p, E, r && r.locales, r && r.domainLocales);
        j.href = z || s.addBasePath(s.addLocale(p, E, r && r.defaultLocale));
       }
       return i.default.cloneElement(n, j);
      };
      n.default = b;
     },
     2030: function (e, n, t) {
      "use strict";
      function r(e, n) {
       (null == n || n > e.length) && (n = e.length);
       for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
       return r;
      }
      function o(e, n) {
       return (
        (function (e) {
         if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, n) {
         var t = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
         if (null != t) {
          var r,
           o,
           a = [],
           i = !0,
           s = !1;
          try {
           for (t = t.call(e); !(i = (r = t.next()).done) && (a.push(r.value), !n || a.length !== n); i = !0);
          } catch (l) {
           (s = !0), (o = l);
          } finally {
           try {
            i || null == t.return || t.return();
           } finally {
            if (s) throw o;
           }
          }
          return a;
         }
        })(e, n) ||
        (function (e, n) {
         if (!e) return;
         if ("string" === typeof e) return r(e, n);
         var t = Object.prototype.toString.call(e).slice(8, -1);
         "Object" === t && e.constructor && (t = e.constructor.name);
         if ("Map" === t || "Set" === t) return Array.from(t);
         if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r(e, n);
        })(e, n) ||
        (function () {
         throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })()
       );
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
       (n.useIntersection = function (e) {
        var n = e.rootRef,
         t = e.rootMargin,
         r = e.disabled || !s,
         d = a.useRef(),
         u = o(a.useState(!1), 2),
         b = u[0],
         p = u[1],
         f = o(a.useState(n ? n.current : null), 2),
         g = f[0],
         m = f[1],
         x = a.useCallback(
          function (e) {
           d.current && (d.current(), (d.current = void 0)),
            r ||
             b ||
             (e &&
              e.tagName &&
              (d.current = (function (e, n, t) {
               var r = (function (e) {
                 var n,
                  t = { root: e.root || null, margin: e.rootMargin || "" },
                  r = c.find(function (e) {
                   return e.root === t.root && e.margin === t.margin;
                  });
                 r ? (n = l.get(r)) : ((n = l.get(t)), c.push(t));
                 if (n) return n;
                 var o = new Map(),
                  a = new IntersectionObserver(function (e) {
                   e.forEach(function (e) {
                    var n = o.get(e.target),
                     t = e.isIntersecting || e.intersectionRatio > 0;
                    n && t && n(t);
                   });
                  }, e);
                 return l.set(t, (n = { id: t, observer: a, elements: o })), n;
                })(t),
                o = r.id,
                a = r.observer,
                i = r.elements;
               return (
                i.set(e, n),
                a.observe(e),
                function () {
                 if ((i.delete(e), a.unobserve(e), 0 === i.size)) {
                  a.disconnect(), l.delete(o);
                  var n = c.findIndex(function (e) {
                   return e.root === o.root && e.margin === o.margin;
                  });
                  n > -1 && c.splice(n, 1);
                 }
                }
               );
              })(
               e,
               function (e) {
                return e && p(e);
               },
               { root: g, rootMargin: t }
              )));
          },
          [r, g, t, b]
         );
        return (
         a.useEffect(
          function () {
           if (!s && !b) {
            var e = i.requestIdleCallback(function () {
             return p(!0);
            });
            return function () {
             return i.cancelIdleCallback(e);
            };
           }
          },
          [b]
         ),
         a.useEffect(
          function () {
           n && m(n.current);
          },
          [n]
         ),
         [x, b]
        );
       });
      var a = t(2784),
       i = t(9071),
       s = "undefined" !== typeof IntersectionObserver;
      var l = new Map(),
       c = [];
     },
     6577: function (e, n, t) {
      e.exports = t(3718);
     },
     9097: function (e, n, t) {
      e.exports = t(162);
     },
     8262: function (e, n, t) {
      "use strict";
      var r = t(3586);
      function o() {}
      function a() {}
      (a.resetWarningCache = o),
       (e.exports = function () {
        function e(e, n, t, o, a, i) {
         if (i !== r) {
          var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw ((s.name = "Invariant Violation"), s);
         }
        }
        function n() {
         return e;
        }
        e.isRequired = e;
        var t = {
         array: e,
         bigint: e,
         bool: e,
         func: e,
         number: e,
         object: e,
         string: e,
         symbol: e,
         any: e,
         arrayOf: n,
         element: e,
         elementType: e,
         instanceOf: n,
         node: e,
         objectOf: n,
         oneOf: n,
         oneOfType: n,
         shape: n,
         exact: n,
         checkPropTypes: a,
         resetWarningCache: o,
        };
        return (t.PropTypes = t), t;
       });
     },
     3980: function (e, n, t) {
      e.exports = t(8262)();
     },
     3586: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
     },
     3686: function (e, n, t) {
      "use strict";
      t.d(n, {
       Z: function () {
        return O;
       },
      });
      var r = t(7896),
       o = t(1461);
      function a(e, n) {
       return (
        (a = Object.setPrototypeOf
         ? Object.setPrototypeOf.bind()
         : function (e, n) {
            return (e.__proto__ = n), e;
           }),
        a(e, n)
       );
      }
      function i(e, n) {
       (e.prototype = Object.create(n.prototype)), (e.prototype.constructor = e), a(e, n);
      }
      function s(e, n) {
       return e
        .replace(new RegExp("(^|\\s)" + n + "(?:\\s|$)", "g"), "$1")
        .replace(/\s+/g, " ")
        .replace(/^\s*|\s*$/g, "");
      }
      var l = t(2784),
       c = t(8316),
       d = !1,
       u = l.createContext(null),
       b = function (e) {
        return e.scrollTop;
       },
       p = "unmounted",
       f = "exited",
       g = "entering",
       m = "entered",
       x = "exiting",
       h = (function (e) {
        function n(n, t) {
         var r;
         r = e.call(this, n, t) || this;
         var o,
          a = t && !t.isMounting ? n.enter : n.appear;
         return (r.appearStatus = null), n.in ? (a ? ((o = f), (r.appearStatus = g)) : (o = m)) : (o = n.unmountOnExit || n.mountOnEnter ? p : f), (r.state = { status: o }), (r.nextCallback = null), r;
        }
        i(n, e),
         (n.getDerivedStateFromProps = function (e, n) {
          return e.in && n.status === p ? { status: f } : null;
         });
        var t = n.prototype;
        return (
         (t.componentDidMount = function () {
          this.updateStatus(!0, this.appearStatus);
         }),
         (t.componentDidUpdate = function (e) {
          var n = null;
          if (e !== this.props) {
           var t = this.state.status;
           this.props.in ? t !== g && t !== m && (n = g) : (t !== g && t !== m) || (n = x);
          }
          this.updateStatus(!1, n);
         }),
         (t.componentWillUnmount = function () {
          this.cancelNextCallback();
         }),
         (t.getTimeouts = function () {
          var e,
           n,
           t,
           r = this.props.timeout;
          return (e = n = t = r), null != r && "number" !== typeof r && ((e = r.exit), (n = r.enter), (t = void 0 !== r.appear ? r.appear : n)), { exit: e, enter: n, appear: t };
         }),
         (t.updateStatus = function (e, n) {
          if ((void 0 === e && (e = !1), null !== n))
           if ((this.cancelNextCallback(), n === g)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
             var t = this.props.nodeRef ? this.props.nodeRef.current : c.findDOMNode(this);
             t && b(t);
            }
            this.performEnter(e);
           } else this.performExit();
          else this.props.unmountOnExit && this.state.status === f && this.setState({ status: p });
         }),
         (t.performEnter = function (e) {
          var n = this,
           t = this.props.enter,
           r = this.context ? this.context.isMounting : e,
           o = this.props.nodeRef ? [r] : [c.findDOMNode(this), r],
           a = o[0],
           i = o[1],
           s = this.getTimeouts(),
           l = r ? s.appear : s.enter;
          (!e && !t) || d
           ? this.safeSetState({ status: m }, function () {
              n.props.onEntered(a);
             })
           : (this.props.onEnter(a, i),
             this.safeSetState({ status: g }, function () {
              n.props.onEntering(a, i),
               n.onTransitionEnd(l, function () {
                n.safeSetState({ status: m }, function () {
                 n.props.onEntered(a, i);
                });
               });
             }));
         }),
         (t.performExit = function () {
          var e = this,
           n = this.props.exit,
           t = this.getTimeouts(),
           r = this.props.nodeRef ? void 0 : c.findDOMNode(this);
          n && !d
           ? (this.props.onExit(r),
             this.safeSetState({ status: x }, function () {
              e.props.onExiting(r),
               e.onTransitionEnd(t.exit, function () {
                e.safeSetState({ status: f }, function () {
                 e.props.onExited(r);
                });
               });
             }))
           : this.safeSetState({ status: f }, function () {
              e.props.onExited(r);
             });
         }),
         (t.cancelNextCallback = function () {
          null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
         }),
         (t.safeSetState = function (e, n) {
          (n = this.setNextCallback(n)), this.setState(e, n);
         }),
         (t.setNextCallback = function (e) {
          var n = this,
           t = !0;
          return (
           (this.nextCallback = function (r) {
            t && ((t = !1), (n.nextCallback = null), e(r));
           }),
           (this.nextCallback.cancel = function () {
            t = !1;
           }),
           this.nextCallback
          );
         }),
         (t.onTransitionEnd = function (e, n) {
          this.setNextCallback(n);
          var t = this.props.nodeRef ? this.props.nodeRef.current : c.findDOMNode(this),
           r = null == e && !this.props.addEndListener;
          if (t && !r) {
           if (this.props.addEndListener) {
            var o = this.props.nodeRef ? [this.nextCallback] : [t, this.nextCallback],
             a = o[0],
             i = o[1];
            this.props.addEndListener(a, i);
           }
           null != e && setTimeout(this.nextCallback, e);
          } else setTimeout(this.nextCallback, 0);
         }),
         (t.render = function () {
          var e = this.state.status;
          if (e === p) return null;
          var n = this.props,
           t = n.children,
           r =
            (n.in,
            n.mountOnEnter,
            n.unmountOnExit,
            n.appear,
            n.enter,
            n.exit,
            n.timeout,
            n.addEndListener,
            n.onEnter,
            n.onEntering,
            n.onEntered,
            n.onExit,
            n.onExiting,
            n.onExited,
            n.nodeRef,
            (0, o.Z)(n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
          return l.createElement(u.Provider, { value: null }, "function" === typeof t ? t(e, r) : l.cloneElement(l.Children.only(t), r));
         }),
         n
        );
       })(l.Component);
      function v() {}
      (h.contextType = u),
       (h.propTypes = {}),
       (h.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1, enter: !0, exit: !0, onEnter: v, onEntering: v, onEntered: v, onExit: v, onExiting: v, onExited: v }),
       (h.UNMOUNTED = p),
       (h.EXITED = f),
       (h.ENTERING = g),
       (h.ENTERED = m),
       (h.EXITING = x);
      var y = h,
       w = function (e, n) {
        return (
         e &&
         n &&
         n.split(" ").forEach(function (n) {
          return (r = n), void ((t = e).classList ? t.classList.remove(r) : "string" === typeof t.className ? (t.className = s(t.className, r)) : t.setAttribute("class", s((t.className && t.className.baseVal) || "", r)));
          var t, r;
         })
        );
       },
       k = (function (e) {
        function n() {
         for (var n, t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
         return (
          ((n = e.call.apply(e, [this].concat(r)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
          (n.onEnter = function (e, t) {
           var r = n.resolveArguments(e, t),
            o = r[0],
            a = r[1];
           n.removeClasses(o, "exit"), n.addClass(o, a ? "appear" : "enter", "base"), n.props.onEnter && n.props.onEnter(e, t);
          }),
          (n.onEntering = function (e, t) {
           var r = n.resolveArguments(e, t),
            o = r[0],
            a = r[1] ? "appear" : "enter";
           n.addClass(o, a, "active"), n.props.onEntering && n.props.onEntering(e, t);
          }),
          (n.onEntered = function (e, t) {
           var r = n.resolveArguments(e, t),
            o = r[0],
            a = r[1] ? "appear" : "enter";
           n.removeClasses(o, a), n.addClass(o, a, "done"), n.props.onEntered && n.props.onEntered(e, t);
          }),
          (n.onExit = function (e) {
           var t = n.resolveArguments(e)[0];
           n.removeClasses(t, "appear"), n.removeClasses(t, "enter"), n.addClass(t, "exit", "base"), n.props.onExit && n.props.onExit(e);
          }),
          (n.onExiting = function (e) {
           var t = n.resolveArguments(e)[0];
           n.addClass(t, "exit", "active"), n.props.onExiting && n.props.onExiting(e);
          }),
          (n.onExited = function (e) {
           var t = n.resolveArguments(e)[0];
           n.removeClasses(t, "exit"), n.addClass(t, "exit", "done"), n.props.onExited && n.props.onExited(e);
          }),
          (n.resolveArguments = function (e, t) {
           return n.props.nodeRef ? [n.props.nodeRef.current, e] : [e, t];
          }),
          (n.getClassNames = function (e) {
           var t = n.props.classNames,
            r = "string" === typeof t,
            o = r ? "" + (r && t ? t + "-" : "") + e : t[e];
           return { baseClassName: o, activeClassName: r ? o + "-active" : t[e + "Active"], doneClassName: r ? o + "-done" : t[e + "Done"] };
          }),
          n
         );
        }
        i(n, e);
        var t = n.prototype;
        return (
         (t.addClass = function (e, n, t) {
          var r = this.getClassNames(n)[t + "ClassName"],
           o = this.getClassNames("enter").doneClassName;
          "appear" === n && "done" === t && o && (r += " " + o),
           "active" === t && e && b(e),
           r &&
            ((this.appliedClasses[n][t] = r),
            (function (e, n) {
             e &&
              n &&
              n.split(" ").forEach(function (n) {
               return (
                (r = n),
                void ((t = e).classList
                 ? t.classList.add(r)
                 : (function (e, n) {
                    return e.classList ? !!n && e.classList.contains(n) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + n + " ");
                   })(t, r) || ("string" === typeof t.className ? (t.className = t.className + " " + r) : t.setAttribute("class", ((t.className && t.className.baseVal) || "") + " " + r)))
               );
               var t, r;
              });
            })(e, r));
         }),
         (t.removeClasses = function (e, n) {
          var t = this.appliedClasses[n],
           r = t.base,
           o = t.active,
           a = t.done;
          (this.appliedClasses[n] = {}), r && w(e, r), o && w(e, o), a && w(e, a);
         }),
         (t.render = function () {
          var e = this.props,
           n = (e.classNames, (0, o.Z)(e, ["classNames"]));
          return l.createElement(y, (0, r.Z)({}, n, { onEnter: this.onEnter, onEntered: this.onEntered, onEntering: this.onEntering, onExit: this.onExit, onExiting: this.onExiting, onExited: this.onExited }));
         }),
         n
        );
       })(l.Component);
      (k.defaultProps = { classNames: "" }), (k.propTypes = {});
      var O = k;
     },
     7896: function (e, n, t) {
      "use strict";
      function r() {
       return (
        (r = Object.assign
         ? Object.assign.bind()
         : function (e) {
            for (var n = 1; n < arguments.length; n++) {
             var t = arguments[n];
             for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
           }),
        r.apply(this, arguments)
       );
      }
      t.d(n, {
       Z: function () {
        return r;
       },
      });
     },
     1461: function (e, n, t) {
      "use strict";
      function r(e, n) {
       if (null == e) return {};
       var t,
        r,
        o = {},
        a = Object.keys(e);
       for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
       return o;
      }
      t.d(n, {
       Z: function () {
        return r;
       },
      });
     },
    },
   ]);
   