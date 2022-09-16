(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405],
    {
     5698: function (e, t, s) {
      "use strict";
      s.d(t, {
       Z: function () {
        return h;
       },
      });
      var a = s(2322),
       r = s(2784),
       i = s(3980),
       o = s.n(i);
      function l() {
       return (
        (l =
         Object.assign ||
         function (e) {
          for (var t = 1; t < arguments.length; t++) {
           var s = arguments[t];
           for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
          }
          return e;
         }),
        l.apply(this, arguments)
       );
      }
      function n(e, t) {
       if (null == e) return {};
       var s,
        a,
        r = (function (e, t) {
         if (null == e) return {};
         var s,
          a,
          r = {},
          i = Object.keys(e);
         for (a = 0; a < i.length; a++) (s = i[a]), t.indexOf(s) >= 0 || (r[s] = e[s]);
         return r;
        })(e, t);
       if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) (s = i[a]), t.indexOf(s) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, s) && (r[s] = e[s]));
       }
       return r;
      }
      var u = (0, r.forwardRef)(function (e, t) {
       var s = e.color,
        a = void 0 === s ? "currentColor" : s,
        i = e.size,
        o = void 0 === i ? 24 : i,
        u = n(e, ["color", "size"]);
       return r.createElement(
        "svg",
        l({ ref: t, xmlns: "http://www.w3.org/2000/svg", width: o, height: o, viewBox: "0 0 24 24", fill: "none", stroke: a, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, u),
        r.createElement("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
       );
      });
      (u.propTypes = { color: o().string, size: o().oneOfType([o().string, o().number]) }), (u.displayName = "MessageCircle");
      var c = s(6405);
      function h(e) {
       return (0, a.jsx)(c.Z, Object.assign({ icon: u }, e), void 0);
      }
     },
     3255: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
       "/",
       function () {
        return s(1970);
       },
      ]);
     },
     1318: function (e, t, s) {
      "use strict";
      var a = s(2322),
       r = s(1812),
       i = s(6577);
      s(2784);
      t.Z = function (e) {
       var t = e.post,
        s = t.author ? t.author.split(",") : [],
        o = [];
       if (s)
        for (
         var l = function (e) {
           o.push(
            r.find(function (t) {
             return t.author_id === s[e];
            })
           );
          },
          n = 0;
         n < s.length;
         n++
        )
         l(n);
       return (0, a.jsx)("div", {
        children: (0, a.jsx)("a", {
         href: "".concat(t.path),
         children: (0, a.jsx)("div", {
          className: "group inline-block min-w-full",
          children: (0, a.jsxs)("div", {
           className: "flex flex-col space-y-6",
           children: [
            (0, a.jsxs)("div", {
             className: "flex flex-col space-y-3",
             children: [
              (0, a.jsx)("div", {
               className: "border-scale-300 relative mb-4 h-60 w-full overflow-auto rounded-lg border shadow-sm",
               children: (0, a.jsx)(i.default, {
                layout: "fill",
                src: t.thumb ? ("casestudy" === t.type ? t.thumb : "/images/blog/".concat(t.thumb)) : "/images/blog/blog-placeholder.png",
                objectFit: "cover",
                className: "scale-100 transform duration-100 ease-in group-hover:scale-105",
                alt: "case study thumbnail",
               }),
              }),
              (0, a.jsx)("h3", { className: "text-scale-1200 max-w-sm text-xl", children: t.title }),
              t.date && (0, a.jsx)("p", { className: "text-scale-1100 text-xs", children: t.date }),
              (0, a.jsx)("p", { className: "text-scale-1100 max-w-sm text-base", children: t.description }),
             ],
            }),
            (0, a.jsx)("div", {
             className: "flex items-center -space-x-2",
             children: o.map(function (e) {
              return (0,
              a.jsx)("div", { className: "dark:ring-scale-200 w-10 rounded-full ring-2 ring-white", children: e.author_image_url && (0, a.jsx)(i.default, { src: e.author_image_url, className: "dark:border-dark rounded-full border", width: "100%", height: "100%", layout: "responsive" }) });
             }),
            }),
           ],
          }),
         }),
        }),
       });
      };
     },
     9490: function (e, t, s) {
      "use strict";
      var a = s(2322),
       r = s(4393);
      t.Z = function (e) {
       var t = e.darkerBg;
       return (0, a.jsxs)("div", {
        className: "\n        bg-dark-800 grid grid-cols-12 items-center gap-4 border-t py-32 text-center dark:border-gray-600\n        ".concat(t ? "dark:bg-dark-900" : "", " px-16\n      "),
        children: [
         (0, a.jsx)("div", {
          className: "col-span-12",
          children: (0, a.jsxs)("h2", {
           className: "h2",
           children: [(0, a.jsx)("span", { className: "text-scale-900", children: "Build in a weekend," }), (0, a.jsx)("span", { className: "text-scale-1200 dark:text-white", children: " scale to millions" })],
          }),
         }),
         (0, a.jsx)("div", { className: "col-span-12 mt-4", children: (0, a.jsx)("a", { href: "https://app.allbitty.web.app/", children: (0, a.jsx)(r.Z, { size: "medium", className: "text-white", children: "Start your project" }) }) }),
        ],
       });
      };
     },
     8195: function (e, t, s) {
      "use strict";
      s.d(t, {
       Z: function () {
        return f;
       },
      });
      var a = s(2322),
       r = s(6946),
       i = s(3507),
       o = s(4393),
       l = s(1935),
       n = s(6474),
       u = s(2784),
       c = s(2282),
       h = s.n(c),
       d = s(429),
       p = s(7666),
       m = s(6497),
       g = s(4299),
       b = s(4969),
       x = {
        hljs: { display: "block", overflowX: "auto", padding: "0.5em", background: "#272822", color: "#ddd" },
        "hljs-tag": { color: "#569cd6" },
        "hljs-keyword": { color: "#569cd6", fontWeight: "normal" },
        "hljs-selector-tag": { color: "#569cd6", fontWeight: "normal" },
        "hljs-literal": { color: "#569cd6", fontWeight: "normal" },
        "hljs-strong": { color: "#569cd6" },
        "hljs-name": { color: "#569cd6" },
        "hljs-code": { color: "#66d9ef" },
        "hljs-class .hljs-title": { color: "gray" },
        "hljs-attribute": { color: "#bf79db" },
        "hljs-symbol": { color: "#bf79db" },
        "hljs-regexp": { color: "#bf79db" },
        "hljs-link": { color: "#bf79db" },
        "hljs-string": { color: "#3ECF8E" },
        "hljs-bullet": { color: "#3ECF8E" },
        "hljs-subst": { color: "#3ECF8E" },
        "hljs-title": { color: "#3ECF8E", fontWeight: "normal" },
        "hljs-section": { color: "#3ECF8E", fontWeight: "normal" },
        "hljs-emphasis": { color: "#3ECF8E" },
        "hljs-type": { color: "#3ECF8E", fontWeight: "normal" },
        "hljs-built_in": { color: "#3ECF8E" },
        "hljs-builtin-name": { color: "#3ECF8E" },
        "hljs-selector-attr": { color: "#3ECF8E" },
        "hljs-selector-pseudo": { color: "#3ECF8E" },
        "hljs-addition": { color: "#3ECF8E" },
        "hljs-variable": { color: "#3ECF8E" },
        "hljs-template-tag": { color: "#3ECF8E" },
        "hljs-template-variable": { color: "#3ECF8E" },
        "hljs-comment": { color: "#75715e" },
        "hljs-quote": { color: "#75715e" },
        "hljs-deletion": { color: "#75715e" },
        "hljs-meta": { color: "#75715e" },
        "hljs-doctag": { fontWeight: "normal" },
        "hljs-selector-id": { fontWeight: "normal" },
       };
      var f = function (e) {
       var t = (0, u.useState)(!1),
        s = t[0],
        c = t[1],
        f = e.children ? e.children.split("\n")[0] : "",
        j = "";
       f.includes("filename =") && (j = f.split("=")[1]);
       var w = e.children && j ? e.children.replace("".concat(f, "\n\n"), "") : e.children,
        _ = e.lang ? e.lang : e.className ? e.className.replace("language-", "") : "js";
       return (
        "jsx" === _ && (_ = "js"),
        d.Z.registerLanguage("js", m.Z),
        d.Z.registerLanguage("py", g.Z),
        d.Z.registerLanguage("sql", b.Z),
        d.Z.registerLanguage("bash", p.Z),
        (0, a.jsxs)("div", {
         className: "not-prose dark overflow-hidden",
         children: [
          j &&
           (0, a.jsxs)("div", {
            className: " bg-scale-200 text-scale-900 flex h-8 w-full items-center gap-1 rounded-tr rounded-tl border-t border-r border-l px-4 font-sans ",
            children: ["bash" === _ ? (0, a.jsx)(r.Z, { size: 12, strokeWidth: 2 }) : (0, a.jsx)(i.Z, { size: 12, strokeWidth: 2 }), (0, a.jsx)("span", { className: "text-xs", children: null !== j && void 0 !== j ? j : "index.js" })],
           }),
          (0, a.jsxs)("div", {
           className: "relative",
           children: [
            (0, a.jsx)(d.Z, {
             language: _,
             style: x,
             className: [!j && "rounded-t-lg", "rounded-b-lg"].join(" "),
             customStyle: { padding: "21px 24px", fontSize: "0.875rem", lineHeight: 1.4, background: "#181818" },
             showLineNumbers: e.showLineNumbers,
             lineNumberStyle: { padding: "0px", marginRight: "21px", minWidth: "1.5em", opacity: "0.3", fontSize: "0.75rem" },
             children: w,
            }),
            !e.hideCopy && e.children
             ? (0, a.jsx)("div", {
                className: "dark absolute right-2 top-2",
                children: (0, a.jsx)(h(), {
                 text: e.children,
                 children: (0, a.jsx)(o.Z, {
                  type: "text",
                  icon: s ? (0, a.jsx)("span", { className: "text-brand-900", children: (0, a.jsx)(l.Z, { strokeWidth: 3 }) }) : (0, a.jsx)(n.Z, {}),
                  onClick: function () {
                   return (
                    c(!0),
                    void setTimeout(function () {
                     c(!1);
                    }, 1e3)
                   );
                  },
                 }),
                }),
               })
             : null,
           ],
          }),
         ],
        })
       );
      };
     },
     4059: function (e, t, s) {
      "use strict";
      var a = s(2322);
      t.Z = function (e) {
       var t = e.children;
       return (0, a.jsx)("div", { children: t });
      };
     },
     4214: function (e, t, s) {
      "use strict";
      var a = s(2322),
       r = s(3265),
       i = s(1651),
       o = s(4393),
       l = s(1236),
       n = s(9097);
      t.Z = function (e) {
       return (0, a.jsxs)(a.Fragment, {
        children: [
         (0, a.jsx)("div", {
          className: "dark:bg-scale-300 border-scale-400 flex h-40 flex-col justify-between rounded rounded-b-none border border-t border-r border-l bg-white p-5 ",
          children: (0, a.jsxs)("div", {
           className: "mb-4",
           children: [
            (0, a.jsx)("h4", { className: "h6", children: e.title }),
            (0, a.jsx)("p", { className: "p text-sm", children: e.description }),
            (0, a.jsxs)("div", {
             children: [
              (0, a.jsx)("img", { src: e.author_img, alt: e.author + " GitHub profile picture", className: "border-scale-500 inline w-6 rounded-full" }),
              (0, a.jsx)("span", { className: "text-scale-1200 ml-2 text-sm", children: e.author }),
             ],
            }),
           ],
          }),
         }),
         (0, a.jsx)(r.Z, { light: !0 }),
         (0, a.jsx)("div", {
          children: (0, a.jsxs)("div", {
           className: " bg-scale-100 dark:bg-scale-400 border-scale-400 flex flex-col justify-between rounded rounded-t-none border border-b border-r border-l border-t-0 p-5",
           children: [
            (0, a.jsx)(n.default, {
             href: e.repo_url,
             as: e.repo_url,
             passHref: !0,
             children: (0, a.jsxs)("a", {
              className: "text-scale-1100 hover:text-scale-1200 flex flex-row items-center text-sm",
              target: "_blank",
              children: [(0, a.jsx)("span", { children: e.repo_name }), (0, a.jsx)("span", { className: "ml-1 inline-block", children: (0, a.jsx)(i.Z, { size: 14 }) })],
             }),
            }),
            (0, a.jsxs)("div", {
             className: "mt-3 flex items-center gap-2",
             children: [
              e.vercel_deploy_url && (0, a.jsx)("a", { target: "_blank", href: e.vercel_deploy_url, children: (0, a.jsx)("img", { className: "h-6", src: "https://vercel.com/button", alt: "vercel button" }) }),
              e.demo_url &&
               (0, a.jsx)(n.default, { href: e.demo_url, as: e.demo_url, children: (0, a.jsx)("a", { target: "_blank", children: (0, a.jsx)(o.Z, { size: "tiny", type: "default", iconRight: (0, a.jsx)(l.Z, {}), children: "Launch Demo" }) }) }),
              !e.demo_url &&
               (0, a.jsx)(n.default, { href: e.repo_url, as: e.repo_url, children: (0, a.jsx)("a", { target: "_blank", children: (0, a.jsx)(o.Z, { size: "tiny", type: "default", iconRight: (0, a.jsx)(l.Z, {}), children: "View Code" }) }) }),
             ],
            }),
           ],
          }),
         }),
        ],
       });
      };
     },
     9186: function (e, t, s) {
      "use strict";
      var a = s(2322);
      t.Z = function (e) {
       var t = e.icon,
        s = e.title,
        r = e.text;
       return (0, a.jsxs)(a.Fragment, {
        children: [t && (0, a.jsx)("div", { className: "p mb-2", children: t }), (0, a.jsx)("h4", { className: "text-scale-1200 mb-4 text-base", children: s }), (0, a.jsx)("p", { className: "p", children: r })],
       });
      };
     },
     4819: function (e, t, s) {
      "use strict";
      var a = s(2322),
       r = s(2784),
       i = s(4393),
       o = s(1236),
       l = s(112),
       n = s(3952),
       u = s(8395),
       c = s(8195),
       h = s(9097);
      t.Z = function (e) {
       var t = (0, r.useState)(void 0),
        s = t[0],
        d = t[1],
        p = (0, r.useState)(0),
        m = p[0],
        g = p[1];
       return (0, a.jsxs)("div", {
        className: "grid grid-cols-12 lg:gap-16",
        children: [
         (0, a.jsxs)("div", {
          className: "col-span-12 pb-8 lg:col-span-5 xl:col-span-5",
          children: [
           (0, a.jsx)("h2", { className: "h3", children: e.title }),
           (0, a.jsx)("p", { className: "p", children: e.text }),
           e.documentation_link &&
            (0, a.jsx)(h.default, {
             href: e.documentation_link,
             as: e.documentation_link,
             children: (0, a.jsx)("a", { children: (0, a.jsx)(i.Z, { size: "small", className: "mt-4", type: "default", icon: (0, a.jsx)(o.Z, {}), children: "Explore documentation" }) }),
            }),
           e.footer && (0, a.jsx)("div", { className: "py-8", children: e.footer }),
          ],
         }),
         (0, a.jsxs)("div", {
          className: "sbui-tabs--alt col-span-12 lg:col-span-7 xl:col-span-6 xl:col-start-7",
          children: [
           (0, a.jsx)(l.Z, {
            scrollable: !0,
            activeId: m.toString(),
            onChange: function (e) {
             return (t = Number(e)), g(t), void s.slideTo(t);
             var t;
            },
            children:
             e.content &&
             e.content.map(function (e, t) {
              return (0, a.jsx)(l.Z.Panel, { label: e.title, id: t.toString(), children: (0, a.jsx)("span", {}, t) }, t);
             }),
           }),
           (0, a.jsx)("div", {
            className: "overflow-hidden",
            children: (0, a.jsx)(n.t, {
             onSwiper: d,
             style: { zIndex: 0, marginRight: "1px" },
             initialSlide: m,
             spaceBetween: 0,
             slidesPerView: 1,
             speed: 300,
             allowTouchMove: !1,
             autoHeight: !!e.autoHeight && e.autoHeight,
             children:
              e.content &&
              e.content.map(function (t, s) {
               return (0, a.jsx)(u.o, { children: (0, a.jsx)(c.Z, { lang: t.lang, size: e.size ? e.size : "small", children: t.code }, s) }, s);
              }),
            }),
           }),
          ],
         }),
        ],
       });
      };
     },
     539: function (e, t, s) {
      "use strict";
      var a = s(2322);
      t.Z = function (e) {
       return (0, a.jsxs)("div", {
        className: e.className,
        children: [
         (0, a.jsxs)("div", {
          className: "space-y-4",
          children: [
           (0, a.jsx)("span", { className: "text-scale-900 block font-mono text-xs uppercase tracking-widest", children: e.subtitle }),
           (0, a.jsxs)("h3", { className: "h2", children: [(0, a.jsx)("span", { children: e.title }), e.title_alt && (0, a.jsx)("span", { className: "text-scale-1100 inline", children: e.title_alt })] }),
          ],
         }),
         e.paragraph && (0, a.jsx)("p", { className: "p max-w-3xl text-lg sm:mt-4", children: e.paragraph }),
        ],
       });
      };
     },
     1970: function (e, t, s) {
      "use strict";
      s.r(t),
       s.d(t, {
        default: function () {
         return V;
        },
       });
      var a = s(2322),
       r = s(4059),
       i = s(3808),
       o = s(4393),
       l = s(9630),
       n = s(9097),
       u = s(5632),
       c = s(8020),
       h = function () {
        var e = (0, u.useRouter)().basePath;
        return (0, a.jsx)("div", {
         className: "overflow-hidden",
         children: (0, a.jsx)(c.Z, {
          className: "pb-0 pt-24",
          children: (0, a.jsx)("div", {
           className: "relative",
           children: (0, a.jsx)("main", {
            className: "",
            children: (0, a.jsx)("div", {
             className: "mx-auto",
             children: (0, a.jsxs)("div", {
              className: "lg:grid lg:grid-cols-12 lg:gap-16",
              children: [
               (0, a.jsx)("div", {
                className: "md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left",
                children: (0, a.jsxs)("div", {
                 className: " space-y-12 sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full",
                 children: [
                  (0, a.jsxs)("div", {
                   children: [
                    (0, a.jsxs)("h1", {
                     className: " text-scale-1200 text-2xl sm:text-3xl sm:leading-none lg:text-4xl xl:text-5xl ",
                     children: [(0, a.jsx)("span", { className: "block", children: "Build in a weekend." }), (0, a.jsx)("span", { className: "text-brand-900 block md:ml-0", children: "Scale to millions." })],
                    }),
                    (0, a.jsx)("div", {
                     children: (0, a.jsx)("p", {
                      className: "p mt-1.5 text-sm sm:mt-5 sm:text-base lg:text-lg ",
                      children: "Allbitty is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, and Storage.",
                     }),
                    }),
                   ],
                  }),
                  (0, a.jsxs)("div", {
                   className: "flex items-center gap-2",
                   children: [
                    (0, a.jsx)(n.default, { href: "https://app.allbitty.web.app", as: "https://app.allbitty.web.app", passHref: !0, children: (0, a.jsx)(o.Z, { as: "a", size: "small", className: "text-white", children: "Start your project" }) }),
                    (0, a.jsx)(n.default, { href: "/docs", as: "/docs", passHref: !0, children: (0, a.jsx)(o.Z, { as: "a", size: "small", type: "default", icon: (0, a.jsx)(l.Z, {}), children: "Documentation" }) }),
                   ],
                  }),
                  (0, a.jsxs)("div", {
                   className: "flex flex-col gap-4",
                   children: [
                    (0, a.jsx)("small", { className: "small text-xs", children: "backed by" }),
                    (0, a.jsx)("div", {
                     className: "w-full sm:max-w-lg lg:ml-0",
                     children: (0, a.jsxs)("div", {
                      className: "flex flex-wrap items-center justify-start gap-y-8 sm:flex-nowrap",
                      children: [
                       (0, a.jsx)("img", { className: "h-8 pr-5 sm:h-8 md:pr-10", src: "".concat(e, "/images/logos/yc--grey.png"), alt: "Y Combinator" }),
                       (0, a.jsx)("img", { className: "relative h-5 pr-5 sm:h-5 md:pr-10", src: "".concat(e, "/images/logos/mozilla--grey.png"), alt: "Mozilla" }),
                       (0, a.jsx)("img", { className: "relative h-5 pr-5 sm:h-5 md:pr-10", src: "".concat(e, "/images/logos/coatue.png"), alt: "Coatue" }),
                       (0, a.jsx)("img", { className: "relative h-6 pr-5 sm:h-6 md:pr-10", src: "".concat(e, "/images/logos/felicis.png"), alt: "Felicis" }),
                      ],
                     }),
                    }),
                   ],
                  }),
                 ],
                }),
               }),
               (0, a.jsx)("div", {
                className: "mt-16 flex content-center sm:mt-24 lg:absolute lg:-right-80 lg:col-span-6 lg:mt-0 lg:w-9/12 xl:relative xl:right-0 xl:w-full",
                children: (0, a.jsxs)("div", {
                 className: "relative flex w-full flex-col items-center justify-center rounded-md",
                 children: [
                  (0, a.jsxs)("div", {
                   className: "bg-scale-400 flex h-5 w-full items-center justify-start rounded-t-md px-2",
                   children: [
                    (0, a.jsx)("div", { className: "bg-scale-800 mr-2 h-2 w-2 rounded-full" }),
                    (0, a.jsx)("div", { className: "bg-scale-800 mr-2 h-2 w-2 rounded-full" }),
                    (0, a.jsx)("div", { className: "bg-scale-800 mr-2 h-2 w-2 rounded-full" }),
                   ],
                  }),
                  (0, a.jsx)("div", {
                   className: "bg-scale-1000 relative w-full rounded-b-md shadow-lg",
                   style: { padding: "56.25% 0 0 0" },
                   children: (0, a.jsx)("iframe", {
                    title: "Demo video showcasing Allbitty",
                    className: "absolute h-full w-full rounded-b-md",
                    src: "https://www.youtube-nocookie.com/embed/dBOSUER_5T4?playlist=dBOSUER_5T4&autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&mute=1&muted=1",
                    style: { top: 0, left: 0 },
                    frameBorder: "0",
                    allow: "autoplay; modestbranding; encrypted-media",
                   }),
                  }),
                 ],
                }),
               }),
              ],
             }),
            }),
           }),
          }),
         }),
        });
       },
       d = s(9573),
       p = s(1037),
       m = s(8461),
       g = s(1897),
       b = function () {
        var e = Object.values(p).map(function (e) {
         var t = e.name,
          s = e.description,
          r = e.icon,
          i = e.label,
          o = e.url;
         return (0,
         a.jsxs)("div", { className: "mb-10 space-y-4 md:mb-0", children: [(0, a.jsxs)("div", { className: "flex items-center", children: [(0, a.jsx)(m.Z, { icon: r }), (0, a.jsx)("dt", { className: "text-scale-1200 ml-4 flex flex-row xl:flex-col", children: t })] }), (0, a.jsx)("p", { className: "p", children: s }), i && (0, a.jsx)("div", { children: (0, a.jsx)(d.Z, { dot: !0, children: i }) }), o && (0, a.jsx)(g.Z, { label: i ? "Get notified" : "Learn more", url: o })] }, t);
        });
        return (0, a.jsxs)(c.Z, {
         className: "space-y-16 pb-0",
         children: [
          (0, a.jsx)("h3", { className: "h3", children: "Build faster and focus on your products" }),
          (0, a.jsx)("dl", { className: "grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-2 md:gap-16 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-24", children: e }),
         ],
        });
       },
       x = s(1651),
       f = s(4214),
       j = s(783);
      function w(e, t, s) {
       return t in e ? Object.defineProperty(e, t, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = s), e;
      }
      function _(e) {
       for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
         a = Object.keys(s);
        "function" === typeof Object.getOwnPropertySymbols &&
         (a = a.concat(
          Object.getOwnPropertySymbols(s).filter(function (e) {
           return Object.getOwnPropertyDescriptor(s, e).enumerable;
          })
         )),
         a.forEach(function (t) {
          w(e, t, s[t]);
         });
       }
       return e;
      }
      var v = function () {
        (0, u.useRouter)().basePath;
        return (0, a.jsxs)(c.Z, {
         className: "xl:pt-32",
         children: [
          (0, a.jsxs)("div", {
           className: "text-center",
           children: [
            (0, a.jsx)("h3", { className: "h2", children: "What can you build with allbitty?" }),
            (0, a.jsx)("p", { className: "p", children: "There are many example apps and starter projects to get going" }),
            (0, a.jsxs)("div", {
             className: "flex justify-center gap-2 py-4",
             children: [
              (0, a.jsx)(n.default, { href: "/docs/guides/examples", as: "/docs/guides/examples", passHref: !0, children: (0, a.jsx)(o.Z, { as: "a", type: "default", size: "small", children: "View all examples" }) }),
              (0, a.jsx)(n.default, {
               href: "https://github.com/allbitty/examples",
               as: "https://github.com/allbitty/examples",
               passHref: !0,
               children: (0, a.jsx)(o.Z, { as: "a", type: "default", icon: (0, a.jsx)(x.Z, {}), size: "small", children: "Official github library" }),
              }),
             ],
            }),
           ],
          }),
          (0, a.jsx)("div", {
           className: "mt-16 grid grid-cols-12 gap-5",
           children: j.slice(0, 6).map(function (e, t) {
            return (0, a.jsx)("div", { className: "col-span-12 lg:col-span-6 xl:col-span-4 ".concat(t > 2 && "sm:hidden lg:block"), children: (0, a.jsx)(f.Z, _({}, e)) }, t);
           }),
          }),
         ],
        });
       },
       y = s(4819),
       N = s(9186),
       k = [
        {
         lang: "js",
         title: "Create user",
         description: "Sign up a new user in an example chat room",
         code:
          "import { createClient } from '@allbitty/allbitty-js'\n    \n// Initialize \nconst supabaseUrl = 'https://chat-room.allbitty.web.app'\nconst allbittyKey = 'public-anon-key'\nconst allbitty = createClient(allbittyUrl, allbittyKey)\n\n// Create a new user\nconst { user, error } = await allbitty.auth.signUpWithPassword({\n  email: 'example@email.com',\n  password: 'example-password',\n})\n    ",
        },
        {
         lang: "js",
         title: "Realtime subscriptions",
         description: "Receive realtime messages in an example chat room",
         code:
          "import { createClient } from '@allbitty/allbitty-js'\n    \n// Initialize \nconst allbittyUrl = 'https://chat-room.allbitty.web.app'\nconst allbittyKey = 'public-anon-key'\nconst allbitty = createClient(allbittyUrl, allbittyKey)\n\n// Get notified of all new chat messages\nconst realtime = allbitty\n  .from('messages')\n  .on('INSERT', message => {\n    console.log('New message!', message)\n  })\n  .subscribe()\n    ",
        },
        {
         lang: "js",
         title: "Read a record",
         description: "Get all public rooms and their messages",
         code:
          "import '@allbitty/allbitty-js'\n\n// Initialize \nconst supabaseUrl = 'https://chat-room.allbitty.web.app'\nconst allbittyKey = 'public-anon-key'\nconst allbitty = createClient(allbittyUrl, allbittyKey)\n\n// Get public rooms and their messages\nconst publicRooms = await allbitty\n  .from('rooms')\n  .select(`\n    name,\n    messages ( text )\n  `)\n  .eq('public', true)\n    ",
        },
        {
         lang: "js",
         title: "Create a record",
         description: "Create a new chat room",
         code:
          "import { createClient } from '@allbitty/allbitty-js'\n\n// Initialize \nconst supabaseUrl = 'https://chat-room.allbitty.web.app'\nconst allbittyKey = 'public-anon-key'\nconst allbitty = createClient(allbittyUrl, allbittyKey)\n\n// Create a new chat room\nconst newRoom = await allbitty\n  .from('rooms')\n  .insert({ name: 'allbitty Fan Club', public: true })\n  ",
        },
        {
         lang: "js",
         title: "Update a record",
         description: "Update a user",
         code:
          "import { createClient } from '@allbitty/allbitty-js'\n    \n// Initialize \nconst supabaseUrl = 'https://chat-room.allbitty.web.app'\nconst allbittyKey = 'public-anon-key'\nconst allbitty = createClient(allbittyUrl, allbittyKey)\n\n// Update multiple users\nconst updatedUsers = await allbitty\n  .from('users')\n  .eq('account_type', 'paid')\n  .update({ highlight_color: 'gold' })\n",
        },
       ],
       S = JSON.parse(
        '[{"name":"TypeScript Support","description":"Type definitions built directly from your database schema","badge":"","url":"/docs/client/generating-types"},{"name":"Install from CDN","description":"Use allbitty in the browser without a build process","badge":"","url":"/docs/client/initializing"},{"name":"Local emulator","description":"Develop locally and push to production when you\'re ready","badge":"","url":"/docs/guides/self-hosting"},{"name":"allbitty CLI","description":"Manage allbitty projects from your local machine","badge":"","url":"https://github.com/allbitty/cli"}]'
       ),
       Z = function () {
        return (0, a.jsx)(c.Z, {
         children: (0, a.jsx)(y.Z, {
          autoHeight: !0,
          size: "large",
          title: "Instant APIs that do the hard work for you",
          text: [(0, a.jsx)("p", { className: "lg:text-lg", children: "We introspect your database to provide APIs instantly. Stop building repetitive CRUD endpoints and focus on your product." }, "madefordeveloper-para-1")],
          content: k,
          footer: [
           (0, a.jsx)(
            "dl",
            {
             className: "grid grid-cols-12 gap-y-4 md:gap-8",
             children: S.map(function (e, t) {
              return (0,
              a.jsx)("div", { className: "col-span-12 md:col-span-6 lg:col-span-6", children: (0, a.jsx)("div", { className: "lg:mt-5", children: (0, a.jsxs)("dt", { children: [(0, a.jsx)(N.Z, { title: e.name, text: e.description }), e.badge && (0, a.jsx)("div", { className: "mb-4 block", children: (0, a.jsx)(d.Z, { dot: !0, color: "blue", children: e.badge }) }), e.badge ? (0, a.jsx)(g.Z, { url: e.url, label: "Get notified" }) : (0, a.jsx)(g.Z, { url: e.url, label: "Explore more" })] }) }) }, t);
             }),
            },
            "madefordeveloper-footer"
           ),
          ],
         }),
        });
       },
       E = s(2784),
       C = s(8595),
       I = JSON.parse(
        '[{"label":"Table editor","title":"Manage your data with the familiarity of a spreadsheet","text":"You don\u2019t have to be a database expert to use allbitty. Our table editor makes Postgres easy to use, even for non-techies. You can do everything right in our dashboard.","youtube_id":"xIHjwJgxOmk","cta":"Explore Table View","url":"/database"},{"label":"SQL Editor","title":"In-built SQL editor for when you need greater control","text":"Write, save, and execute SQL queries directly on our dashboard, with templates to save you time. Run common queries and even build applications using our growing list of templates.","video_url":"videos/tabSqlEditor.mp4","youtube_id":"Hch1mZPZ53A","cta":"Explore SQL Editor","url":"/database"},{"label":"Auth rules","title":"User management as straight-forward as it can be","text":"Easily manage your users with allbitty Auth, with email logins, magic links, and third-party logins. Create complex access policies with SQL rules to fit your unique business needs.","video_url":"videos/tabAuthRules.mp4","youtube_id":"vP319FCIZ6Y","cta":"Explore Auth","url":"/auth"}]'
       ),
       z = function () {
        (0, u.useRouter)().basePath;
        var e = (0, E.useState)("tabTableEditor");
        e[0], e[1];
        return (0, a.jsxs)(c.Z, {
         children: [(0, a.jsx)("div", { className: "mb-16", children: (0, a.jsx)("h2", { className: "h3", children: "Build your app without leaving the dashboard" }) }), (0, a.jsx)(C.Z, { content: I, altTabView: !0 })],
        });
       },
       P = s(539),
       O = s(7791),
       B = s(1318),
       T = function () {
        var e = (0, u.useRouter)().basePath;
        return (0, a.jsxs)(c.Z, {
         children: [
          (0, a.jsx)("div", {
           children: (0, a.jsx)(P.Z, {
            className: "mb-12",
            title: "Scale up",
            title_alt: " with no extra effort",
            subtitle: "Enterprise Solutions",
            paragraph: "allbitty is built with proven, enterprise-ready tools.\n We're supporting everything from fintech providers to social networks. ",
           }),
          }),
          (0, a.jsx)("div", {
           className: "mx-auto mt-5 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-12",
           children: O.map(function (t, s) {
            return (0, a.jsx)(B.Z, { post: { type: "casestudy", title: t.title, description: t.description, thumb: "".concat(e, "/").concat(t.imgUrl), hideAuthor: !0, url: t.url.replace("/blog/", ""), path: t.path } }, s);
           }),
          }),
         ],
        });
       },
       R = s(9490),
       A = s(3952),
       F = s(8395),
       L = s(1284),
       D = s(3701),
       W = s(2718),
       H = s(5698),
       U = s(8812),
       M = s(6373),
       q = JSON.parse(
        '[{"text":"Working with @allbitty has been one of the best dev experiences I\'ve had lately. Incredibly easy to set up, great documentation, and so many fewer hoops to jump through than the competition. I definitely plan to use it on any and all future projects.","url":"https://twitter.com/thatguy_tex/status/1497602628410388480","handle":"thatguy_tex","img_url":"/images/twitter-profiles/09HouOSt_400x400.jpg"},{"text":"@allbitty is just \ud83e\udd2f Now I see why a lot of people love using it as a backend for their applications. I am really impressed with how easy it is to set up an Auth and then just code it together for the frontend. @IngoKpp now I see your joy with allbitty #coding #fullstackwebdev","url":"https://twitter.com/IxoyeDesign/status/1497473731777728512","handle":"IxoyeDesign","img_url":"/images/twitter-profiles/C8opIL-g_400x400.jpg"},{"text":"I\'ve been using @allbitty for two personal projects and it has been amazing being able to use the power of Postgres and don\'t have to worry about the backend","url":"https://twitter.com/varlenneto/status/1496595780475535366","handle":"varlenneto","img_url":"/images/twitter-profiles/wkXN0t_F_400x400.jpg"},{"text":"Y\'all @allbitty + @nextjs is amazing! \ud83d\ude4c Barely an hour into a proof-of-concept and already have most of the functionality in place. \ud83e\udd2f\ud83e\udd2f\ud83e\udd2f","url":"https://twitter.com/justinjunodev/status/1500264302749622273","handle":"justinjunodev","img_url":"/images/twitter-profiles/9k_ZB9OO_400x400.jpg"},{"text":"And thanks to @allbitty, I was able to go from idea to launched feature in a matter of hours. Absolutely amazing!","url":"https://twitter.com/BraydonCoyer/status/1511071369731137537","handle":"BraydonCoyer","img_url":"/images/twitter-profiles/8YxkpW8f_400x400.jpg"},{"text":"Contributing to open-source projects and seeing merged PRs gives enormous happiness! Special thanks to @allbitty, for giving this opportunity by staying open-source and being junior-friendly\u270c\ud83c\udffc","url":"https://twitter.com/damlakoksal/status/1511436907984662539","handle":"damlakoksal","img_url":"/images/twitter-profiles/N8EfTFs7_400x400.jpg"},{"text":"Holy crap. @allbitty is absolutely incredible. Most elegant backend as a service I\'ve ever used. This is a dream.","url":"https://twitter.com/kentherogers/status/1512609587110719488","handle":"KenTheRogers","img_url":"/images/twitter-profiles/9l9Td-Fz_400x400.jpg"},{"text":"Over the course of a few weeks, we migrated 125.000 users (email/pw, Gmail, Facebook, Apple logins) from Auth0 to @allbitty and have now completed the migration. I\'m just glad the migration is done \ud83d\ude05 Went well, besides a few edge cases (duplicate emails/linked accounts)","url":"https://twitter.com/kevcodez/status/1518548401587204096","handle":"kevcodez","img_url":"/images/twitter-profiles/t6lpcRcn_400x400.jpg"},{"text":"Using @allbitty I\'m really pleased on the power of postgres (and sql in general). Despite being a bit dubious about the whole backend as a service thing I have to say I really don\'t miss anything. The whole experience feel very robust and secure.","url":"https://twitter.com/paoloricciuti/status/1497691838597066752","handle":"PaoloRicciuti","img_url":"/images/twitter-profiles/OCDKFUOp_400x400.jpg"},{"text":"@allbitty is lit. It took me less than 10 minutes to setup, the DX is just amazing.","url":"https://twitter.com/saxxone/status/1500812171063828486","handle":"saxxone","img_url":"/images/twitter-profiles/BXi6z1M7_400x400.jpg"},{"text":"I\u2019m not sure what magic @allbitty is using but we\u2019ve migrated @happyteamsdotio database to @allbitty from @heroku and it\u2019s much much faster at half the cost.","url":"https://twitter.com/michaelcdever/status/1524753565599690754","handle":"michaelcdever","img_url":"/images/twitter-profiles/rWX8Jzp5_400x400.jpg"},{"text":"There are a lot of indie hackers building in public, but it\u2019s rare to see a startup shipping as consistently and transparently as allbitty. Their upcoming March releases look to be \ud83d\udd25 Def worth a follow! also opened my eyes as to how to value add in open source.","url":"https://twitter.com/swyx/status/1366685025047994373","handle":"swyx","img_url":"/images/twitter-profiles/qhvO9V6x_400x400.jpg"},{"text":"This weekend I made a personal record \ud83e\udd47 on the less time spent creating an application with social login / permissions, database, cdn, infinite scaling, git push to deploy and for free. Thanks to @allbitty and @vercel","url":"https://twitter.com/jperelli/status/1366195769657720834","handle":"jperelli","img_url":"/images/twitter-profiles/_ki30kYo_400x400.jpg"},{"text":"Badass allbitty is amazing, literally saves our small team a while engineer\u2019s worth of work constantly Founders and everyone I\u2019ve chatted with at allbitty are just awesome people as well :)","url":"https://twitter.com/KennethCassel/status/1524359528619384834","handle":"KennethCassel","img_url":"/images/twitter-profiles/pmQj3TX-_400x400.jpg"},{"text":"Working with allbitty is just fun. It makes working with a DB so much easier.","url":"https://twitter.com/the_BrianB/status/1524716498442276864","handle":"the_BrianB","img_url":"/images/twitter-profiles/7NITI8Z3_400x400.jpg"},{"text":"This community is STRONG and will continue to be the reason why developers flock to @allbitty over an alternative. Keep up the good work! \u26a1\ufe0f","url":"https://twitter.com/_wilhelm__/status/1524074865107488769","handle":"_wilhelm__","img_url":"/images/twitter-profiles/CvqDy6YF_400x400.jpg"},{"text":"Working on my next SaaS app and I want this to be my whole job because I\'m just straight out vibing putting it together. @allbitty and chill, if you will","url":"https://twitter.com/drewclemcr8/status/1523843155484942340","handle":"drewclemcr8","img_url":"/images/twitter-profiles/bJlKtSxz_400x400.jpg"},{"text":"@allbitty Putting a ton of well-explained example API queries in a self-building documentation is just a classy move all around. I also love having GraphQL-style nested queries with traditional SQL filtering. This is pure DX delight. A+++. #backend","url":"https://twitter.com/CodiferousCoder/status/1522233113207836675","handle":"CodiferousCoder","img_url":"/images/twitter-profiles/t37cVLwy_400x400.jpg"},{"text":"Me using @allbitty for the first time right now \ud83e\udd2f","url":"https://twitter.com/nasiscoe/status/1365140856035024902","handle":"nasiscoe","img_url":"/images/twitter-profiles/nc2Ms5hH_400x400.jpg"},{"text":"I\'m trying @allbitty, Firebase alternative that uses PostgreSQL (and you can use GraphQL too) in the cloud. It\'s incredible \ud83d\ude0d","url":"https://twitter.com/JP__Gallegos/status/1365699468109242374","handle":"JP__Gallegos","img_url":"/images/twitter-profiles/1PH2mt6v_400x400.jpg"},{"text":"Check out this amazing product @allbitty. A must give try #newidea #opportunity","url":"https://twitter.com/digitaldaswani/status/1364447219642814464","handle":"digitaldaswani","img_url":"/images/twitter-profiles/w8HLdlC7_400x400.jpg"},{"text":"I gave @allbitty a try this weekend and I was able to create a quick dashboard to visualize the data from the PostgreSQL instance. It\'s super easy to use allbitty\'s API or the direct DB connection. Check out the tutorial \ud83d\udcd6","url":"https://twitter.com/razvanilin/status/1363770020581412867","handle":"razvanilin","img_url":"/images/twitter-profiles/AiaH9vJ2_400x400.jpg"},{"text":"Tried @allbitty for the first time yesterday. Amazing tool! I was able to get my Posgres DB up in no time and their documentation on operating on the DB is super easy! \ud83d\udc4f Can\'t wait for Cloud functions to arrive! It\'s gonna be a great Firebase alternative!","url":"https://twitter.com/chinchang457/status/1363347740793524227","handle":"chinchang457","img_url":"/images/twitter-profiles/LTw5OCnv_400x400.jpg"},{"text":"10/100 All day i was migrating my project from firebase to @allbitty Because it is perfect and simple!!! I like design and API for understandable. There are in BETA now. Just try!\ud83e\uddea","url":"https://twitter.com/roomahhka/status/1363155396391763971","handle":"roomahhka","img_url":"/images/twitter-profiles/e_2eQt6C_400x400.jpg"},{"text":"I gave @allbitty a try today and I was positively impressed! Very quick setup to get a working remote database with API access and documentation generated automatically for you \ud83d\udc4c 10/10 will play more","url":"https://twitter.com/razvanilin/status/1363002398738800640","handle":"razvanilin","img_url":"/images/twitter-profiles/AiaH9vJ2_400x400.jpg"},{"text":"Wait. Is it so easy to write queries for @allbitty ? It\'s like simple SQL stuff!","url":"https://twitter.com/T0ny_Boy/status/1362911838908911617","handle":"T0ny_Boy","img_url":"/images/twitter-profiles/UCBhUBZl_400x400.jpg"},{"text":"Jeez, and @allbitty have native support for magic link login?! I was going to use http://magic.link for this But if I can get my whole DB + auth + magic link support in one... Awesome","url":"https://twitter.com/louisbarclay/status/1362016666868154371","handle":"louisbarclay","img_url":"/images/twitter-profiles/6f1O8ZOW_400x400.jpg"},{"text":"@MongoDB or @MySQL?!?! Please, let me introduce you to @allbitty and the wonderful world of @PostgreSQL before it\'s too late!!","url":"https://twitter.com/jim_bisenius/status/1361772978841788416","handle":"jim_bisenius","img_url":"/images/twitter-profiles/rLgwUZSB_400x400.jpg"},{"text":"Where has @allbitty been all my life? \ud83d\ude0d","url":"https://twitter.com/Elsolo244/status/1360257201911320579","handle":"Elsolo244","img_url":"/images/twitter-profiles/v6citnk33y2wpeyzrq05_400x400.jpeg"},{"text":"Honestly allbitty is such a killer Firebase alternative.","url":"https://twitter.com/XPCheese/status/1360229397735895043","handle":"XPCheese","img_url":"/images/twitter-profiles/eYP6YXr7_400x400.jpg"},{"text":"I think you\'ll love @allbitty :-) Open-source, PostgreSQL-based & zero magic.","url":"https://twitter.com/zippoxer/status/1360021315852328961","handle":"zippoxer","img_url":"/images/twitter-profiles/6rd3xub9_400x400.png"},{"text":"@allbitty is the answer to all of firebase\u2019s problems imo","url":"https://twitter.com/jim_bisenius/status/1358590362953142278","handle":"jim_bisenius","img_url":"/images/twitter-profiles/rLgwUZSB_400x400.jpg"},{"text":"@allbitty is insane.","url":"https://twitter.com/codewithbhargav/status/1357647840911126528","handle":"codewithbhargav","img_url":"/images/twitter-profiles/LQYfHXBp_400x400.jpg"},{"text":"It\u2019s fun, feels lightweight, and really quick to spin up user auth and a few tables. Almost too easy! Highly recommend.","url":"https://twitter.com/nerdburn/status/1356857261495214085","handle":"nerdburn","img_url":"/images/twitter-profiles/66VSV9Mm_400x400.png"},{"text":"I\u2019m probably the wrong person to ask because I pick tools based on UX. allbitty was immediately approachable: instant setup, fast web app, auth, and easy APIs. Same reason I liked Firebase when I first discovered.","url":"https://twitter.com/jasonbarone/status/1357015483619422210","handle":"jasonbarone","img_url":"/images/twitter-profiles/6zCnwpvi_400x400.jpg"},{"text":"Now things are starting to get interesting! Firebase has long been the obvious choice for many #flutter devs for the ease of use. But their databases are NoSQL, which has its downsides... Seems like @allbitty is working on something interesting here!","url":"https://twitter.com/RobertBrunhage/status/1356973695865085953","handle":"RobertBrunhage","img_url":"/images/twitter-profiles/5LMWEACf_400x400.jpg"},{"text":"Honestly, I really love what @allbitty is doing, you don\'t need to own a complete backend, just write your logic within your app and you\'ll get a powerful Postgresql at your disposal.","url":"https://twitter.com/NavicsteinR/status/1356927229217959941","handle":"NavicsteinR","img_url":"/images/twitter-profiles/w_zNZAs7_400x400.jpg"},{"text":"Next.js, @allbitty, @stripe, and @vercel. Supastack\u2122","url":"https://twitter.com/jasonbarone/status/1356765411832922115","handle":"jasonbarone","img_url":"/images/twitter-profiles/6zCnwpvi_400x400.jpg"},{"text":"I\'ve really enjoyed the DX! Extremely fun to use, which is odd to say about a database at least for me.","url":"https://twitter.com/Soham_Asmi/status/1373086068132745217","handle":"Soham_Asmi","img_url":"/images/twitter-profiles/Os4nhKIr_400x400.jpg"},{"text":"allbitty team is doing some awesome stuff #allbitty #facts @allbitty","url":"https://twitter.com/_strawbird/status/1372607500499841025","handle":"_strawbird","img_url":"/images/twitter-profiles/iMBvvQdn_400x400.jpg"},{"text":"Did a website with @allbitty last week with no prior experience with it. Up and running in 20 minutes. It\'s awesome to use. Thumbs up","url":"https://twitter.com/michael_webdev/status/1352885366928404481?s=20","handle":"michael_webdev","img_url":"/images/twitter-profiles/SvAyLaWV_400x400.jpg"},{"text":"Next.js, @allbitty, @stripe, and @vercel. Supastack\u2122","url":"https://twitter.com/jasonbarone/status/1356765411832922115?s=20","handle":"jasonbarone","img_url":"/images/twitter-profiles/6zCnwpvi_400x400.jpg"},{"text":"I just learned about @allbitty and im in love \ud83d\ude0d allbitty is an open source Firebase alternative! EarListen (& react) to database changes \ud83d\udc81 Manage users & permissions \ud83d\udd27 Simple UI for database interaction","url":"https://twitter.com/0xBanana/status/1373677301905362948","handle":"0xBanana","img_url":"/images/twitter-profiles/pgHIGqZ0_400x400.jpg"}]'
       ),
       G = s(3361);
      s(4988), s(711), s(2730);
      L.Z.use([D.Z, W.Z]);
      var Q = function () {
        var e = (0, u.useRouter)().basePath,
         t = (0, E.useRef)(null),
         s = (0, E.useRef)(null);
        return (0, a.jsxs)(a.Fragment, {
         children: [
          (0, a.jsx)("div", {
           className: "grid grid-cols-12",
           children: (0, a.jsxs)("div", {
            className: "col-span-12 text-center",
            children: [
             (0, a.jsx)("h3", { className: "h2", children: "Join the community" }),
             (0, a.jsx)("p", { className: "p", children: "Supported by a network of early advocates, contributors, and champions." }),
             (0, a.jsxs)("div", {
              className: "my-8 flex justify-center gap-2",
              children: [
               (0, a.jsx)(n.default, {
                href: "https://github.com/allbitty/allbitty/discussions",
                passHref: !0,
                children: (0, a.jsx)(o.Z, { as: "a", target: "_blank", size: "small", iconRight: (0, a.jsx)(H.Z, { size: 14 }), type: "default", children: "GitHub discussions" }),
               }),
               (0, a.jsx)(n.default, {
                href: "https://discord.allbitty.web.app/",
                passHref: !0,
                children: (0, a.jsx)(o.Z, { as: "a", type: "default", target: "_blank", size: "small", iconRight: (0, a.jsx)(H.Z, { size: 14 }), children: "Discord" }),
               }),
              ],
             }),
            ],
           }),
          }),
          (0, a.jsx)("div", {
           className: "mt-6",
           children: (0, a.jsx)("div", {
            className: "cursor-move lg:-mr-32 lg:-ml-32",
            children: (0, a.jsxs)(A.t, {
             initialSlide: 3,
             spaceBetween: 0,
             slidesPerView: 4,
             speed: 300,
             navigation: { prevEl: t.current, nextEl: s.current },
             onInit: function (e) {
              (e.params.navigation.prevEl = t.current), (e.params.navigation.nextEl = s.current);
             },
             breakpoints: { 320: { slidesPerView: 1 }, 720: { slidesPerView: 2 }, 920: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, 1208: { slidesPerView: 5 } },
             children: [
              q.map(function (t, s) {
               return (0,
               a.jsx)(F.o, { children: (0, a.jsx)("div", { className: "mr-3 ml-3", children: (0, a.jsx)(n.default, { href: t.url, children: (0, a.jsx)("a", { target: "_blank", className: "cursor-pointer", children: (0, a.jsx)(G.Z, { handle: "@".concat(t.handle), quote: t.text, img_url: "".concat(e).concat(t.img_url) }, s) }) }) }) }, s);
              }),
              (0, a.jsxs)("div", {
               className: "container mx-auto mt-3 hidden flex-row justify-between md:flex",
               children: [(0, a.jsx)("div", { ref: t, className: "p ml-4 cursor-pointer", children: (0, a.jsx)(U.Z, {}) }), (0, a.jsx)("div", { ref: s, className: "p mr-4 cursor-pointer", children: (0, a.jsx)(M.Z, {}) })],
              }),
             ],
            }),
           }),
          }),
         ],
        });
       },
       K = function () {
        return (0, a.jsx)("div", {
         className: "relative",
         children: (0, a.jsxs)("div", {
          className: "section--masked",
          children: [
           (0, a.jsx)("div", { className: "section--bg-masked", children: (0, a.jsx)("div", { className: "section--bg border-t border-b" }) }),
           (0, a.jsx)("div", { className: "section-container pt-12 pb-0", children: (0, a.jsx)("div", { className: "overflow-x-hidden", children: (0, a.jsx)(c.Z, { className: "mb-0 pb-8", children: (0, a.jsx)(Q, {}) }) }) }),
          ],
         }),
        });
       };
      var V = function (e) {
       e =
        null !== e
         ? e
         : (function (e) {
            throw e;
           })(new TypeError("Cannot destructure undefined"));
       return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsx)(i.Z, { children: (0, a.jsxs)(r.Z, { children: [(0, a.jsx)(h, {}), (0, a.jsx)(b, {}), (0, a.jsx)(K, {}), (0, a.jsx)(v, {}), (0, a.jsx)(Z, {}), (0, a.jsx)(z, {}), (0, a.jsx)(T, {}), (0, a.jsx)(R.Z, {})] }) }),
       });
      };
     },
     711: function () {},
     2730: function () {},
     1812: function (e) {
      "use strict";
      e.exports = JSON.parse(
       '[{"author_id":"angelico_de_los_reyes","author":"Angelico de los Reyes","position":"","author_url":"https://github.com/dragarcia","author_image_url":"https://github.com/dragarcia.png"},{"author_id":"ant_wilson","author":"Ant Wilson","position":"CTO and Co-Founder","author_url":"https://github.com/awalias","author_image_url":"https://github.com/awalias.png"},{"author_id":"soedirgo","author":"Bobbie Soedirgo","username":"soedirgo","position":"Engineering","author_url":"https://github.com/soedirgo","author_image_url":"https://github.com/soedirgo.png"},{"author_id":"div_arora","author":"Div Arora","username":"darora","position":"Engineering","author_url":"https://github.com/darora","author_image_url":"https://github.com/darora.png"},{"author_id":"fracek","author":"Francesco Ceccon","username":"fracek","position":"Engineering","author_url":"https://github.com/fracek","author_image_url":"https://github.com/fracek.png"},{"author_id":"gurjeet","author":"Gurjeet Singh","username":"gurjeet","position":"Engineering","author_url":"https://github.com/gurjeet","author_image_url":"https://github.com/gurjeet.png"},{"author_id":"inian","author":"Inian Parameshwaran","username":"inian","position":"Engineering","author_url":"https://twitter.com/everConfusedGuy","author_image_url":"https://avatars.githubusercontent.com/u/2155545?v=4"},{"author_id":"kangmingtay","author":"Kang Ming Tay","username":"kangmingtay","position":"Engineering","author_url":"https://github.com/kangmingtay","author_image_url":"https://github.com/kangmingtay.png"},{"author_id":"oli_rice","author":"Oliver Rice","username":"olirice","position":"Engineering","author_url":"https://github.com/olirice","author_image_url":"https://github.com/olirice.png"},{"author_id":"paul_copplestone","author":"Paul Copplestone","position":"CEO and Co-Founder","author_url":"https://github.com/kiwicopple","author_image_url":"https://github.com/kiwicopple.png"},{"author_id":"qiao","author":"Qiao Han","position":"Engineering","author_url":"https://github.com/sweatybridge","author_image_url":"https://github.com/sweatybridge.png"},{"author_id":"rory_wilding","author":"Rory Wilding","position":"Head of Growth","author_url":"https://github.com/roryw10","author_image_url":"https://github.com/roryw10.png"},{"author_id":"steve_chavez","author":"Steve Chavez","username":"steve-chavez","position":"Engineering & PostgREST maintainer","author_url":"https://github.com/steve-chavez","author_image_url":"https://github.com/steve-chavez.png"},{"author_id":"allbitty","author":"allbitty","position":"","author_url":"https://github.com/allbitty","author_image_url":"https://github.com/allbitty.png"},{"author_id":"thor_schaeff","author":"Thor Schaeff","position":"DevRel & DX","author_url":"https://twitter.com/thorwebdev","author_image_url":"https://github.com/thorwebdev.png"},{"author_id":"wenbo_xie","author":"Wen Bo Xie","username":"w3b6x9","position":"Engineering","author_url":"https://github.com/w3b6x9","author_image_url":"https://github.com/w3b6x9.png"},{"author_id":"dthyresson","author":"David Thyresson","username":"dthyresson","position":"Engineering","author_url":"https://github.com/dthyresson","author_image_url":"https://github.com/dthyresson.png"},{"author_id":"shanerice","author":"Shane Rice","username":"shanerice","position":"Marketing","author_url":"https://github.com/shanerice","author_image_url":"https://github.com/shanerice.png"},{"author_id":"alaister","author":"Alaister Young","username":"alaister","position":"Engineering","author_url":"https://github.com/alaister","author_image_url":"https://github.com/alaister.png"},{"author_id":"tyler_shukert","author":"Tyler Shukert","username":"dshukertjr","position":"DevRel & Flutter","author_url":"https://github.com/dshukertjr","author_image_url":"https://github.com/dshukertjr.png"},{"author_id":"victor","author":"Victor","username":"t3hmrman","position":"Guest Author","author_url":"https://github.com/t3hmrman","author_image_url":"https://github.com/t3hmrman.png"},{"author_id":"andrew_smith","author":"Andrew Smith","username":"silentworks","position":"DevRel & DX","author_url":"https://github.com/silentworks","author_image_url":"https://github.com/silentworks.png"},{"author_id":"rodrigo_mansueli","author":"Rodrigo Mansueli Nunes","username":"mansueli","position":"Support Engineer","author_url":"https://github.com/mansueli","author_image_url":"https://github.com/mansueli.png"},{"author_id":"stas","author":"Stanislav Muzhyk","username":"abc3","position":"Engineering","author_url":"https://github.com/abc3","author_image_url":"https://github.com/abc3.png"},{"author_id":"jonmeyers_io","author":"Jon Meyers","position":"Developer Advocate","author_url":"https://twitter.com/jonmeyers_io","author_image_url":"https://github.com/dijonmusters.png"},{"author_id":"michel","author":"Michel Pelletier","position":"Engineering","author_url":"https://github.com/michelp","author_image_url":"https://github.com/michelp.png"},{"author_id":"joel","author":"Joel Lee","username":"j0","position":"Engineering","author_url":"https://github.com/j0","author_image_url":"https://github.com/j0.png"},{"author_id":"simon_grimm","author":"Simon Grimm","username":"schlimmson","position":"Guest Author","author_url":"https://twitter.com/schlimmson","author_image_url":"https://github.com/saimon24.png"}]'
      );
     },
    },
    function (e) {
     e.O(0, [7575, 8427, 2117, 2061, 495, 3808, 9191, 9774, 2888, 179], function () {
      return (t = 3255), e((e.s = t));
      var t;
     });
     var t = e.O();
     _N_E = t;
    },
   ]);
   