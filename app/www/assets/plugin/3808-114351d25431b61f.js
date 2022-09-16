"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3808],
  {
    5085: function (e, t, s) {
      s.r(t),
        (t.default = {
          src: "/_next/static/media/allbitty-logo-wordmark--dark.53d797e9.png",
          height: 449,
          width: 2322,
          blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEX+//7///82wYNDv4fqPs7iAAAABHRSTlNYPpZFsnIRzgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAA5JREFUCJljYGJmZAABAAA0AAf4ATV6AAAAAElFTkSuQmCC",
        });
    },
    5558: function (e, t, s) {
      s.r(t),
        (t.default = {
          src: "/_next/static/media/allbitty-logo-wordmark--light.ba3d6f54.png",
          height: 449,
          width: 2322,
          blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEUeHx4bAw0zrnc4w4X5CLl2AAAABHRSTlNYPkWWB70EfAAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAA5JREFUCJljYGZiZAABAAA1AAetxK47AAAAAElFTkSuQmCC",
        });
    },
    3808: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return T;
        },
      });
      var a = s(2322),
        r = s(2784),
        n = s(9097),
        l = s(9573),
        i = s(3875),
        o = s(4393),
        c = s(6100),
        d = s(9188),
        u = s(5285),
        h = s(1037),
        x = s(7791),
        m = s(5632),
        p = s(8461),
        g = s(6577),
        f = function () {
          var e = (0, m.useRouter)().basePath,
            t = Object.values(h).map(function (e) {
              var t = e.name,
                s = e.description,
                r = e.icon,
                i = e.label,
                o = e.url,
                c = (0, a.jsxs)("div", {
                  className: "flex lg:flex-col",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-row items-center",
                      children: [(0, a.jsx)(p.Z, { icon: r }), (0, a.jsx)("h5", { className: "text-scale-1200 overwrite ml-3 mb-0 text-base", children: t })],
                    }),
                    (0, a.jsxs)("div", {
                      className: "ml-4 mt-3 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0",
                      children: [(0, a.jsx)("p", { className: "text-scale-1000 text-sm", children: s }), i && (0, a.jsx)("div", { className: "mt-2", children: (0, a.jsx)(l.Z, { children: i }) })],
                    }),
                  ],
                });
              return o && (0, a.jsx)(n.default, { href: o, children: (0, a.jsx)("a", { className: "hover:bg-scale-300 dark:hover:bg-scale-500 col-span-6 rounded p-3 transition", children: c }) }, t);
            });
          return (0, a.jsxs)("div", {
            className: "grid grid-cols-12",
            children: [
              (0, a.jsx)("nav", { className: "col-span-6", "aria-labelledby": "product", children: (0, a.jsx)("div", { className: "m-3 grid grid-cols-12 gap-x-8 gap-y-4 py-4 pr-3", children: t }) }),
              (0, a.jsx)("div", {
                className: "col-span-6",
                children: (0, a.jsxs)("div", {
                  className: "m-3 mx-6",
                  children: [
                    (0, a.jsx)("p", { className: "p", children: "Latest case studies" }),
                    (0, a.jsx)("ul", {
                      className: "mt-6 space-y-3",
                      children: x.map(function (t, s) {
                        return s > 1
                          ? null
                          : (0, a.jsx)(
                              "li",
                              {
                                className: "flow-root",
                                children: (0, a.jsx)(n.default, {
                                  href: t.url,
                                  children: (0, a.jsxs)("a", {
                                    className: "dark:hover:bg-dark-700 flex items-center rounded-lg border p-3 transition duration-150 ease-in-out hover:bg-gray-100",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "relative hidden h-20 w-32 flex-shrink-0 overflow-auto rounded-md sm:block",
                                        children: (0, a.jsx)(g.default, { src: "".concat(e, "/").concat(t.imgUrl), alt: "caseStudyThumb", layout: "fill", objectFit: "cover" }),
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "min-w-0 flex-1 sm:ml-4",
                                        children: [(0, a.jsx)("h4", { className: "text-scale-1200 text-normal mb-0 text-base", children: t.title }), (0, a.jsx)("p", { className: "p text-sm", children: t.description })],
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              "flyout_case_".concat(s)
                            );
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        b = JSON.parse(
          '[{"text":"Documentation","description":"Everything you need that makes it simple to get started.","url":"/docs","icon":"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},{"text":"API reference","description":"Examples and references for using API libraries.","url":"/docs/client/allbitty-client","icon":"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"},{"text":"Guides","description":"Examples and references for using Allbitty.","url":"/docs/guides/examples","icon":"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"},{"text":"Careers","description":"Join the Allbitty team and get involved.","url":"https://about.allbitty.web.app/careers","icon":"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}]'
        ),
        v = JSON.parse(
          '[{"type":"Announcement","title":"Works With Allbitty - announcing our Partner Gallery","description":"Introducing our Partner Gallery - open source and made with Allbitty.","imgUrl":"images/blog/partner-gallery/partner-showcase-thumb.png","logoUrl":"images/blog/partner-gallery/partner-showcase-thumb.png","organization":"Allbitty","url":"/blog/2022/04/20/partner-gallery-works-with-allbitty","postMeta":{"name":"Thor Shcaeff, Alaister Young, Shane Rice","publishDate":"Apr 20, 2022","readLength":5},"ctaText":"Read blog post"},{"type":"Announcement","title":"Allbitty Launch Week 4","description":"Launch Week 4 had something for everybody: Community Day, GraphQL support, Edge Functions, and more.","imgUrl":"images/blog/launch-week-4/friday-before/launchweek-4-promo-cal.png","logoUrl":"images/blog/launch-week-4/friday-before/launchweek-4-promo.png","organization":"Allbitty","url":"/blog/2022/03/25/allbitty-launch-week-four","postMeta":{"name":"Paul Copplestone","avatarUrl":"https://avatars0.githubusercontent.com/u/10214025?v=4","publishDate":"Mar 25, 2022","readLength":4},"ctaText":"Read blog post"}]'
        ),
        j = function () {
          var e = (0, m.useRouter)().basePath,
            t = Object.values(b).map(function (e) {
              var t = e.text,
                s = e.description,
                r = e.url,
                l = e.icon,
                i = (0, a.jsxs)("div", {
                  className: "dark:hover:bg-scale-500 -m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50",
                  children: [
                    (0, a.jsx)("svg", {
                      className: "stroke-scale-900 h-5 w-5 flex-shrink-0",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "aria-hidden": "true",
                      children: (0, a.jsx)("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: l }),
                    }),
                    (0, a.jsxs)("div", { className: "ml-4", children: [(0, a.jsx)("h5", { className: "text-scale-1200 text-base", children: t }), (0, a.jsx)("p", { className: "text-scale-900 text-sm", children: s })] }),
                  ],
                });
              return r
                ? (0, a.jsx)(n.default, { href: r, children: (0, a.jsx)("a", { className: "dark:hover:bg-scale-500 col-span-6 rounded p-3 transition hover:bg-gray-50", children: i }) }, t)
                : (0, a.jsx)("div", { className: "-m-3 flex flex-col justify-between rounded-lg p-3 transition duration-150 ease-in-out", children: i }, t);
            });
          return (0, a.jsxs)("div", {
            className: "grid grid-cols-12",
            children: [
              (0, a.jsx)("nav", { className: "col-span-6 py-8", "aria-labelledby": "solutionsHeading", children: (0, a.jsx)("div", { className: "m-3 grid grid-cols-12 gap-x-8 gap-y-4 py-4 pr-3", children: t }) }),
              (0, a.jsx)("div", {
                className: "col-span-6",
                children: (0, a.jsxs)("div", {
                  className: "m-3 mx-6",
                  children: [
                    (0, a.jsx)("p", { className: "p", children: "Latest announcements" }),
                    (0, a.jsx)("ul", {
                      className: "mt-6 space-y-3 pb-6",
                      children: v.map(function (t, s) {
                        return (0,
                        a.jsx)("li", { className: "flow-root", children: (0, a.jsx)(n.default, { href: t.url, children: (0, a.jsxs)("a", { className: "dark:hover:bg-dark-700 flex items-center rounded-lg border p-3 transition duration-150 ease-in-out hover:bg-gray-100", children: [(0, a.jsx)("div", { className: "relative hidden h-20 w-32 flex-shrink-0 overflow-auto rounded-md sm:block", children: (0, a.jsx)(g.default, { src: "".concat(e, "/").concat(t.imgUrl), alt: "caseStudyThumb", layout: "fill", objectFit: "cover" }) }), (0, a.jsxs)("div", { className: "min-w-0 flex-1 sm:ml-4", children: [(0, a.jsx)("h4", { className: "text-scale-1200 text-normal mb-0 text-base", children: t.title }), (0, a.jsx)("p", { className: "p text-sm", children: t.description })] })] }) }) }, "flyout_case_".concat(s));
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        y = JSON.parse('{"show":true,"text":"Community Day & One More Thing!","cta":"Learn more","link":"/launch-week","badge":"Day 5"}'),
        w = s(5307),
        N = s(819),
        k = y,
        A = function () {
          var e = (0, r.useState)(!0),
            t = e[0],
            s = e[1],
            n = (0, m.useRouter)();
          if (!k.show) return null;
          var l = "announcement_" + k.text.replace(/ /g, "");
          return (
            (0, r.useEffect)(function () {
              if (!window.localStorage.getItem(l)) return s(!1);
            }, []),
            t
              ? null
              : (0, a.jsxs)("div", {
                  onClick: function () {
                    n.push(k.link), window.localStorage.setItem(l, "hidden");
                  },
                  className: " launch-week-gradientBg--anouncement-bar to-green-1000 hover:from-green-1000 hover:to-green-1100 relative flex cursor-pointer flex-row space-x-3 overflow-hidden bg-gradient-to-r from-green-900 text-white ",
                  children: [
                    (0, a.jsxs)("div", {
                      className: " mx-auto flex items-center justify-center divide-white p-3 text-sm font-medium lg:container lg:divide-x lg:px-16 xl:px-20 ",
                      children: [
                        (0, a.jsxs)("span", {
                          className: "item-center flex gap-2 px-3",
                          children: [k.badge && (0, a.jsx)("div", { className: "bg-brand-400 text-brand-900 py-0.25 rounded px-1.5", children: k.badge }), (0, a.jsx)("span", { children: k.text })],
                        }),
                        (0, a.jsxs)("span", { className: "hidden items-center space-x-2 px-3 lg:flex", children: [(0, a.jsx)("span", { children: k.cta }), (0, a.jsx)(w.Z, { size: 14 })] }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "absolute right-4 flex h-full items-center opacity-50 transition-opacity hover:opacity-100",
                      onClick: function (e) {
                        return e.stopPropagation(), window.localStorage.setItem(l, "hidden"), s(!0);
                      },
                      children: (0, a.jsx)(N.Z, { size: 16 }),
                    }),
                  ],
                })
          );
        },
        C = s(4986),
        S = s(1897),
        M = s(5085),
        L = s(5558),
        E = function () {
          var e = function (e) {
              t(), e();
            },
            t = function () {
              y(!1), k(!1);
            },
            s = (0, C.Fg)().isDarkMode,
            x = (0, r.useState)(!1),
            m = x[0],
            p = x[1],
            b = (0, r.useState)(!1),
            v = b[0],
            y = b[1],
            w = (0, r.useState)(!1),
            N = w[0],
            k = w[1];
          r.useEffect(
            function () {
              document.body.style.overflow = m ? "hidden" : "auto";
            },
            [m]
          );
          var E = Object.values(h).map(function (e, t) {
              var s = e.name,
                r = e.description,
                i = e.icon,
                o = e.label,
                c = e.url,
                d = (0, a.jsxs)("div", {
                  className: "mb-3 flex md:h-full lg:flex-col",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex-shrink-0",
                      children: (0, a.jsx)("div", {
                        className: "inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-800 text-white dark:bg-white dark:text-gray-800 sm:h-12 sm:w-12",
                        children: (0, a.jsx)("svg", {
                          className: "h-6 w-6",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "aria-hidden": "true",
                          children: (0, a.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: i }),
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsxs)("p", {
                              className: "space-x-2 text-base font-medium text-gray-900 dark:text-white",
                              children: [(0, a.jsx)("span", { children: s }), o && (0, a.jsx)(l.Z, { dot: !0, color: "green", children: o })],
                            }),
                            (0, a.jsx)("p", { className: "text-scale-1100 dark:text-dark-100 mt-1 text-sm", children: r }),
                          ],
                        }),
                        c && (0, a.jsx)("p", { className: "text-brand-900 mt-2 text-sm font-medium lg:mt-4", children: (0, a.jsx)(S.Z, { label: o ? "Get notified" : "Learn more", url: c }) }),
                      ],
                    }),
                  ],
                });
              return c
                ? (0, a.jsx)(
                    n.default,
                    { href: c, children: (0, a.jsx)("a", { className: "dark:hover:bg-scale-600 -m-3 my-2 flex flex-col justify-between rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50", children: d }) },
                    "solution_".concat(t)
                  )
                : (0, a.jsx)("div", { className: "-m-3 flex flex-col justify-between rounded-lg p-3 transition duration-150 ease-in-out", children: d }, "solution_".concat(t));
            }),
            O = function (e) {
              return (0, a.jsx)("div", {
                className: "absolute inset-y-0 left-0 flex items-center px-2 lg:hidden",
                onClick: function () {
                  return e.toggleFlyOut();
                },
                children: (0, a.jsxs)("button", {
                  className: "text-scale-900 focus:ring-brand-900 dark:bg-scale-200 dark:hover:bg-scale-300 inline-flex items-center justify-center rounded-md bg-gray-50 p-2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset",
                  "aria-expanded": "false",
                  children: [
                    (0, a.jsx)("span", { className: "sr-only", children: "Open main menu" }),
                    (0, a.jsx)("svg", {
                      className: "block h-6 w-6",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "aria-hidden": "true",
                      children: (0, a.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h16" }),
                    }),
                    (0, a.jsx)("svg", {
                      className: "hidden h-6 w-6",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "aria-hidden": "true",
                      children: (0, a.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }),
                    }),
                  ],
                }),
              });
            },
            P = function (e) {
              return (0, a.jsx)("div", {
                className:
                  "\n        text-scale-1200 hover:text-brand-900 \n        inline-flex cursor-pointer items-center \n        border-b-2 \n        border-transparent \n        px-1\n        text-sm font-medium\n        transition-colors\n                " +
                  e.active,
                onClick: e.onClick,
                children: (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", { children: e.title }),
                    (0, a.jsx)("div", {
                      className: "text-scale-900 group-hover:text-scale-900 ml-2 flex h-5 w-5 items-center justify-center transition duration-150 ease-in-out" + (e.active && " rotate-180 transform transition-all duration-100"),
                      children: (0, a.jsx)(i.Z, { size: 14, strokeWidth: 2 }),
                    }),
                  ],
                }),
              });
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(A, {}),
              (0, a.jsxs)("div", {
                className: "sticky top-0 z-50",
                children: [
                  (0, a.jsx)("div", { className: "bg-scale-200 absolute top-0 h-full w-full opacity-80" }),
                  (0, a.jsxs)("nav", {
                    className: "border-scale-400 border-b backdrop-blur-sm",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "relative mx-auto flex h-16 justify-between lg:container lg:px-16 xl:px-20",
                        children: [
                          (0, a.jsx)(O, {
                            toggleFlyOut: function () {
                              return p(!0);
                            },
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-1 items-center justify-center sm:items-stretch lg:justify-between",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "flex flex-shrink-0 items-center",
                                    children: (0, a.jsx)(n.default, {
                                      href: "/",
                                      as: "/",
                                      children: (0, a.jsx)("a", { className: "block h-6 w-auto", children: (0, a.jsx)(g.default, { src: s ? M : L, width: 124, height: 24, alt: "Allbitty Logo" }) }),
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "hidden pl-4 sm:ml-6 sm:space-x-4 lg:flex",
                                    children: [
                                      (0, a.jsx)(P, {
                                        title: "Product",
                                        onClick: function () {
                                          return e(function () {
                                            return y(!v);
                                          });
                                        },
                                        active: v,
                                      }),
                                      (0, a.jsx)(P, {
                                        title: "Developers",
                                        onClick: function () {
                                          return e(function () {
                                            return k(!N);
                                          });
                                        },
                                        active: N,
                                      }),
                                      (0, a.jsx)(n.default, {
                                        href: "/pricing",
                                        children: (0, a.jsx)("a", {
                                          className:
                                            "\n                        text-scale-1200 hover:text-brand-900 hover:border-brand-900 dark:text-dark-100 dark:hover:border-dark-100 inline-flex items-center\n                        border-b-2 border-transparent p-5 px-1\n                        text-sm font-medium\n                      ",
                                          children: "Pricing",
                                        }),
                                      }),
                                      (0, a.jsx)(n.default, {
                                        href: "/blog",
                                        children: (0, a.jsx)("a", {
                                          className:
                                            "\n                        text-scale-1200 hover:text-brand-900 hover:border-brand-900 dark:text-dark-100 dark:hover:border-dark-100 inline-flex items-center\n                        border-b-2 border-transparent p-5 px-1\n                        text-sm font-medium\n                      ",
                                          children: "Blog",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, a.jsx)(o.Z, {
                                    as: "a",
                                    className: "group hidden lg:flex",
                                    href: "https://github.com/allbitty/allbitty",
                                    target: "_blank",
                                    type: "text",
                                    icon: (0, a.jsx)("div", {
                                      className: "text-brand-800 flex h-4 w-4 items-center justify-center",
                                      children: (0, a.jsx)("div", {
                                        className:
                                          "text-scale-900 flex h-3 w-3 items-center justify-center transition-all group-hover:h-4 group-hover:w-4 group-hover:text-yellow-900 group-focus:h-4 group-focus:w-4 group-focus:text-yellow-900",
                                        children: (0, a.jsx)(c.Z, { strokeWidth: 2 }),
                                      }),
                                    }),
                                    children: "Star us on GitHub",
                                  }),
                                  (0, a.jsx)(n.default, {
                                    href: "#",
                                    children: (0, a.jsx)("button", { children: (0, a.jsx)(o.Z, { type: "default", className: "hidden lg:block", children: "Sign in" }) }),
                                  }),
                                  (0, a.jsx)(n.default, {
                                    href: "https://app.allbitty.web.app/",
                                    children: (0, a.jsx)("a", { children: (0, a.jsx)(o.Z, { className: "hidden text-white lg:block", children: "Start your project" }) }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(u.Z, {
                        appear: !0,
                        show: m,
                        enter: "transition ease-out duration-200",
                        enterFrom: "opacity-0 translate-y-1",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-1",
                        children: (0, a.jsxs)("div", {
                          className: "dark:bg-scale-300 fixed -inset-y-0 z-50 h-screen w-screen transform overflow-y-scroll bg-white p-4 md:p-8",
                          children: [
                            (0, a.jsx)("div", {
                              className: "absolute right-4 top-4 items-center justify-between",
                              children: (0, a.jsx)("div", {
                                className: "-mr-2",
                                children: (0, a.jsxs)("button", {
                                  onClick: function () {
                                    return p(!1);
                                  },
                                  type: "button",
                                  className:
                                    "text-scale-900 focus:ring-brand-900 dark:bg-scale-300 dark:hover:bg-scale-400 inline-flex items-center justify-center rounded-md bg-white p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset",
                                  children: [
                                    (0, a.jsx)("span", { className: "sr-only", children: "Close menu" }),
                                    (0, a.jsx)("svg", {
                                      className: "h-6 w-6",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      "aria-hidden": "true",
                                      children: (0, a.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "mt-6 mb-12",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "space-y-1 pt-2 pb-4",
                                  children: (0, a.jsx)(n.default, {
                                    href: "#",
                                    children: (0, a.jsx)("button", { className: "text-scale-900 block pl-3 pr-4 text-base font-medium dark:text-white", children: "Sign in" }),
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "space-y-1 pt-2 pb-4",
                                  children: [
                                    (0, a.jsx)(n.default, {
                                      href: "/docs",
                                      children: (0, a.jsx)("a", {
                                        className: "text-scale-900 dark:hover:bg-scale-600 block rounded-md py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 dark:text-white",
                                        children: "Developers",
                                      }),
                                    }),
                                    (0, a.jsx)(n.default, {
                                      href: "/company",
                                      children: (0, a.jsx)("a", {
                                        className: "text-scale-900 dark:hover:bg-scale-600 block rounded-md py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 dark:text-white",
                                        children: "Company",
                                      }),
                                    }),
                                    (0, a.jsx)(n.default, {
                                      href: "/pricing",
                                      children: (0, a.jsx)("a", {
                                        className: "text-scale-900 dark:hover:bg-scale-600 block rounded-md py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 dark:text-white",
                                        children: "Pricing",
                                      }),
                                    }),
                                    (0, a.jsx)(n.default, {
                                      href: "https://github.com/allbitty/allbitty",
                                      children: (0, a.jsx)("a", {
                                        target: "_blank",
                                        className: "text-scale-900 dark:hover:bg-scale-600 block rounded-md py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 dark:text-white",
                                        children: "GitHub",
                                      }),
                                    }),
                                    (0, a.jsx)(n.default, {
                                      href: "/blog",
                                      children: (0, a.jsx)("a", {
                                        target: "_blank",
                                        className: "text-scale-900 dark:hover:bg-scale-600 block rounded-md py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 dark:text-white",
                                        children: "Blog",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", { className: "p-3", children: [(0, a.jsx)("p", { className: "text-scale-900 mb-6 text-sm", children: "Products available:" }), E] }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(d.Z, { open: v, handleCancel: t, children: (0, a.jsx)(f, {}) }),
                  (0, a.jsx)(d.Z, { open: N, handleCancel: t, children: (0, a.jsx)(j, {}) }),
                ],
              }),
            ],
          });
        },
        O = JSON.parse(
          '[{"title":"Product","links":[{"text":"Database","url":"/database"},{"text":"Auth","url":"/auth"},{"text":"Storage","url":"/storage"},{"text":"Functions","url":"/edge-functions"},{"text":"Pricing","url":"/pricing"},{"text":"Beta","url":"/beta"}]},{"title":"Resources","links":[{"text":"Support","url":"/support"},{"text":"Brand Assets / Logos","url":"/brand-assets"},{"text":"Integrations","url":"/partners/integrations"},{"text":"Experts","url":"/partners/experts"},{"text":"System Status","url":"https://status.allbitty.web.app/"},{"text":"Terms of service","url":"/docs/company/terms"},{"text":"Privacy Policy","url":"/docs/company/privacy"},{"text":"DPA","url":"/legal/dpa"}]},{"title":"Developers","links":[{"text":"Documentation","url":"/docs"},{"text":"API Reference","url":"/docs/guides/api"},{"text":"Guides","url":"/docs/guides/examples"}]},{"title":"Company","links":[{"text":"Blog","url":"/blog"},{"text":"Open Source","url":"/docs/oss"},{"text":"Careers","url":"https://about.allbitty.web.app/careers"},{"text":"Company","url":"/company"},{"text":"Humans.txt","url":"/humans.txt"},{"text":"Lawyers.txt","url":"/lawyers.txt"},{"text":"Security.txt","url":"/.well-known/security.txt"}]}]'
        ),
        P = s(8020),
        Z = s(7725),
        F = s(1447);
      var D = function () {
          var e = (0, C.Fg)(),
            t = e.isDarkMode,
            s = e.toggleTheme;
          return (0, a.jsxs)("div", {
            className: "flex items-center",
            children: [
              (0, a.jsx)(Z.Z, { className: "text-scale-900", strokeWidth: 2 }),
              (0, a.jsxs)("button", {
                type: "button",
                "aria-pressed": "false",
                className: "\n                relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent \n                transition-colors duration-200 ease-in-out focus:outline-none ".concat(
                  t ? "bg-scale-500" : "bg-scale-900",
                  " mx-5\n              "
                ),
                onClick: function () {
                  return (function () {
                    localStorage.setItem("allbittyDarkMode", (!t).toString()), s();
                    var e = localStorage.getItem("allbittyDarkMode");
                    document.documentElement.className = "true" === e ? "dark" : "";
                  })();
                },
                children: [
                  (0, a.jsx)("span", { className: "sr-only", children: "Toggle Themes" }),
                  (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    className: "\n                  ".concat(
                      t ? "translate-x-5" : "translate-x-0",
                      " dark:bg-scale-300 inline-block h-5 w-5\n                  transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out\n                "
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(F.Z, { className: "text-scale-900", strokeWidth: 2 }),
            ],
          });
        },
        B = function () {
          var e = (0, C.Fg)().isDarkMode;
          return (0, a.jsxs)("footer", {
            className: "border-scale-500 dark:border-scale-600 border-t",
            "aria-labelledby": "footerHeading",
            children: [
              (0, a.jsx)("h2", { id: "footerHeading", className: "sr-only", children: "Footer" }),
              (0, a.jsxs)(P.Z, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "xl:grid xl:grid-cols-3 xl:gap-8",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "space-y-8 xl:col-span-1",
                        children: [
                          (0, a.jsx)(n.default, {
                            href: "#",
                            as: "/",
                            children: (0, a.jsx)("a", { className: "w-40", children: (0, a.jsx)(g.default, { src: e ? M : L, width: 160, height: 30, alt: "Allbitty" }) }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex space-x-5",
                            children: [
                              (0, a.jsxs)("a", {
                                href: "https://twitter.com/allbitty",
                                className: "text-scale-900 hover:text-scale-1200 transition",
                                children: [
                                  (0, a.jsx)("span", { className: "sr-only", children: "Twitter" }),
                                  (0, a.jsx)("svg", {
                                    className: "h-6 w-6",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)("path", {
                                      d:
                                        "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("a", {
                                href: "https://github.com/allbitty",
                                className: "text-scale-900 hover:text-scale-1200 transition",
                                children: [
                                  (0, a.jsx)("span", { className: "sr-only", children: "GitHub" }),
                                  (0, a.jsx)("svg", {
                                    className: "h-6 w-6",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)("path", {
                                      fillRule: "evenodd",
                                      d:
                                        "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                      clipRule: "evenodd",
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("a", {
                                href: "https://discord.allbitty.web.app/",
                                className: "text-scale-900 hover:text-scale-1200 transition",
                                children: [
                                  (0, a.jsx)("span", { className: "sr-only", children: "Discord" }),
                                  (0, a.jsx)("svg", {
                                    className: "h-6 w-6",
                                    fill: "currentColor",
                                    viewBox: "0 0 71 55",
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)("path", {
                                      fillRule: "evenodd",
                                      d:
                                        "M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z",
                                      clipRule: "evenodd",
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("a", {
                                href: "https://youtube.com/c/allbitty",
                                className: "text-scale-900 hover:text-scale-1200 transition",
                                children: [
                                  (0, a.jsx)("span", { className: "sr-only", children: "Youtube" }),
                                  (0, a.jsx)("svg", {
                                    className: "h-6 w-6",
                                    fill: "currentColor",
                                    viewBox: "0 0 576 512",
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)("path", {
                                      d:
                                        "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0",
                        children: (0, a.jsx)("div", {
                          className: "grid grid-cols-2 gap-8 md:grid-cols-4",
                          children: O.map(function (e) {
                            return (0, a.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, a.jsx)("h6", { className: "text-scale-1200 overwrite text-base", children: e.title }),
                                  (0, a.jsx)("ul", {
                                    className: "mt-4 space-y-2",
                                    children: e.links.map(function (t, s) {
                                      return (0,
                                      a.jsx)("li", { children: (0, a.jsxs)("a", { href: t.url, className: "text-sm transition-colors ".concat(t.url ? "text-scale-1100 hover:text-scale-1200 " : "text-scale-900 hover:text-scale-900", " "), children: [t.text, !t.url && (0, a.jsx)("div", { className: "ml-2 inline text-xs xl:ml-0 xl:block 2xl:ml-2 2xl:inline", children: (0, a.jsx)(l.Z, { color: "scale", size: "small", children: "Coming soon" }) })] }) }, "".concat(e.title, "_link_").concat(s));
                                    }),
                                  }),
                                ],
                              },
                              "footer_".concat(e.title)
                            );
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "border-scale-500 dark:border-scale-600 mt-32 flex justify-between border-t pt-8",
                    children: [(0, a.jsx)("small", { className: "small", children: "\xa9 Allbitty Inc" }), (0, a.jsx)(D, {})],
                  }),
                ],
              }),
            ],
          });
        },
        T = function (e) {
          var t = e.hideHeader,
            s = void 0 !== t && t,
            n = e.hideFooter,
            l = void 0 !== n && n,
            i = e.children;
          return (
            (0, r.useEffect)(function () {
              var e = localStorage.getItem("allbittyDarkMode");
              document.documentElement.className = e ? ("true" === e ? "dark" : "") : "dark";
            }, []),
            (0, a.jsxs)(a.Fragment, { children: [!s && (0, a.jsx)(E, {}), (0, a.jsx)("div", { className: "min-h-screen", children: (0, a.jsx)("main", { children: i }) }), !l && (0, a.jsx)(B, {})] })
          );
        };
    },
    8020: function (e, t, s) {
      var a = s(2322),
        r = s(2779),
        n = s.n(r);
      t.Z = function (e) {
        var t = e.children,
          s = e.className;
        return (0, a.jsx)("div", { className: n()("sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20", s), children: t });
      };
    },
    8461: function (e, t, s) {
      var a = s(2322);
      t.Z = function (e) {
        var t = e.icon;
        return (0, a.jsx)("div", {
          className: "bg-scale-1200 text-scale-100 inline-flex h-8 w-8 items-center justify-center rounded-md",
          children: (0, a.jsx)("svg", {
            className: "h-5 w-5 stroke-white dark:stroke-black",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: (0, a.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: t }),
          }),
        });
      };
    },
    1897: function (e, t, s) {
      var a = s(2322),
        r = s(5307);
      t.Z = function (e) {
        var t = e.url,
          s = e.label;
        return (0, a.jsx)("a", {
          href: t,
          className: "text-scale-1100 hover:text-scale-1200 mt-3 block cursor-pointer text-sm",
          children: (0, a.jsxs)("div", {
            className: "group flex items-center gap-1",
            children: [
              (0, a.jsx)("span", { className: "sr-only", children: "".concat(s, " about ").concat(t) }),
              (0, a.jsx)("span", { children: s }),
              (0, a.jsx)("div", { className: "transition-all group-hover:ml-0.5", children: (0, a.jsx)(r.Z, { size: 14, strokeWidth: 2 }) }),
            ],
          }),
        });
      };
    },
    9188: function (e, t, s) {
      var a = s(2322),
        r = s(2784),
        n = s(5285);
      t.Z = function (e) {
        e.title;
        var t = e.children,
          s = (e.className, e.singleBgColor),
          l = void 0 !== s && s,
          i = e.handleCancel;
        return (
          (0, r.useEffect)(function () {
            var e = function () {
              window.pageYOffset > 96 && i();
            };
            return (
              window.addEventListener("scroll", e),
              function () {
                return window.removeEventListener("scroll", e);
              }
            );
          }, []),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(n.Z, {
              appear: !0,
              show: e.open,
              enter: "transition ease-out duration-200",
              enterFrom: "opacity-0 translate-y-1",
              enterTo: "opacity-100 translate-y-0",
              leave: "transition ease-in duration-150",
              leaveFrom: "opacity-100 translate-y-0",
              leaveTo: "opacity-0 translate-y-1",
              children: (0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)("div", {
                  className: "absolute inset-x-0 transform shadow-lg ",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "dark:border-scale-500 absolute inset-0 flex border-b sm:flex-col lg:flex-row",
                      "aria-hidden": "true",
                      children: [
                        (0, a.jsx)("div", { className: "dark:bg-scale-200 dark:border-scale-400 border-r bg-white sm:h-1/2 sm:w-full lg:h-full lg:w-1/2" }),
                        (0, a.jsx)("div", { className: "".concat(l ? "dark:bg-scale-200 bg-white" : "dark:bg-scale-200 bg-gray-50", " sm:h-1/2 sm:w-full lg:h-full lg:w-1/2") }),
                      ],
                    }),
                    (0, a.jsx)("div", { className: "container relative mx-auto px-6 py-2 lg:grid-cols-2 lg:px-10 xl:px-14", children: t }),
                    (0, a.jsx)("div", {
                      className: "absolute z-50 h-screen w-full opacity-0",
                      style: { pointerEvents: "visiblePainted" },
                      onClick: function () {
                        return e.handleCancel();
                      },
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      };
    },
    5285: function (e, t, s) {
      var a = s(2322),
        r = s(3686),
        n = s(2784);
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var s = 0, a = new Array(t); s < t; s++) a[s] = e[s];
        return a;
      }
      function i(e, t, s) {
        return t in e ? Object.defineProperty(e, t, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = s), e;
      }
      function o(e) {
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
              i(e, t, s[t]);
            });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var s,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var s,
              a,
              r = {},
              n = Object.keys(e);
            for (a = 0; a < n.length; a++) (s = n[a]), t.indexOf(s) >= 0 || (r[s] = e[s]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (a = 0; a < n.length; a++) (s = n[a]), t.indexOf(s) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, s) && (r[s] = e[s]));
        }
        return r;
      }
      function d(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return l(e);
          })(e) ||
          (function (e) {
            if (("undefined" !== typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return l(e, t);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === s && e.constructor && (s = e.constructor.name);
            if ("Map" === s || "Set" === s) return Array.from(s);
            if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return l(e, t);
          })(e) ||
          (function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          })()
        );
      }
      var u = n.createContext({ parent: {} });
      function h(e) {
        var t = e.show,
          s = e.enter,
          n = void 0 === s ? "" : s,
          l = e.enterFrom,
          i = void 0 === l ? "" : l,
          o = e.enterTo,
          c = void 0 === o ? "" : o,
          u = e.leave,
          h = void 0 === u ? "" : u,
          x = e.leaveFrom,
          m = void 0 === x ? "" : x,
          p = e.leaveTo,
          g = void 0 === p ? "" : p,
          f = e.appear,
          b = e.children,
          v = function (e, t) {
            var s;
            t.length && (s = e.classList).add.apply(s, d(t));
          },
          j = function (e, t) {
            var s;
            t.length && (s = e.classList).remove.apply(s, d(t));
          },
          y = n.split(" ").filter(function (e) {
            return e.length;
          }),
          w = i.split(" ").filter(function (e) {
            return e.length;
          }),
          N = c.split(" ").filter(function (e) {
            return e.length;
          }),
          k = h.split(" ").filter(function (e) {
            return e.length;
          }),
          A = m.split(" ").filter(function (e) {
            return e.length;
          }),
          C = g.split(" ").filter(function (e) {
            return e.length;
          });
        return (0, a.jsx)(r.Z, {
          appear: f,
          unmountOnExit: !0,
          in: t,
          addEndListener: function (e, t) {
            e.addEventListener("transitionend", t, !1);
          },
          onEnter: function (e) {
            v(e, d(y).concat(d(w)));
          },
          onEntering: function (e) {
            j(e, w), v(e, N);
          },
          onEntered: function (e) {
            j(e, d(N).concat(d(y)));
          },
          onExit: function (e) {
            v(e, d(k).concat(d(A)));
          },
          onExiting: function (e) {
            j(e, A), v(e, C);
          },
          onExited: function (e) {
            j(e, d(C).concat(d(k)));
          },
          children: b,
        });
      }
      t.Z = function (e) {
        var t = e.show,
          s = e.appear,
          r = c(e, ["show", "appear"]),
          l = (0, n.useContext)(u).parent,
          i = (function () {
            var e = (0, n.useRef)(!0);
            return (
              (0, n.useEffect)(function () {
                e.current = !1;
              }, []),
              e.current
            );
          })();
        return void 0 === t
          ? (0, a.jsx)(h, o({ appear: l.appear || !l.isInitialRender, show: l.show }, r))
          : (0, a.jsx)(u.Provider, { value: { parent: { show: t, isInitialRender: i, appear: s } }, children: (0, a.jsx)(h, o({ appear: s, show: t }, r)) });
      };
    },
    7791: function (e) {
      e.exports = JSON.parse(
        '[{"type":"Case Study","title":"A web crawler handling millions of API requests.","description":"See how Monitoro built an automated a scraping platform using Allbitty.","imgUrl":"images/case-study-monitoro.jpg","logoUrl":"images/logos/monitoro.png","organization":"Monitoro","url":"/blog/case-study-monitoro","path":"/blog/case-study-monitoro","postMeta":{"name":"Paul Copplestone","avatarUrl":"https://avatars0.githubusercontent.com/u/10214025?v=4","publishDate":"Mar 16, 2020","readLength":6},"ctaText":"View case study"},{"type":"Case Study","title":"Counter-fraud watchlists for the fintech industry.","description":"See how Xendit use Allbitty to build a full-text search engine.","imgUrl":"images/case-study-xendit.jpg","logoUrl":"images/logos/xendit.png","organization":"Llama Lab","url":"/blog/case-study-xendit","path":"/blog/case-study-xendit","postMeta":{"name":"Paul Copplestone","avatarUrl":"https://avatars0.githubusercontent.com/u/10214025?v=4","publishDate":"Mar 20, 2020","readLength":10},"ctaText":"View case study"},{"type":"Case Study","title":"A no-code website builder, deployed in seven days.","description":"See how Tayfa went from idea to paying customer in less than 30 days.","imgUrl":"images/case-study-tayfab.jpg","logoUrl":"images/logos/monitoro.png","organization":"Tayfab","url":"/blog/case-study-tayfa","path":"/blog/case-study-tayfa","postMeta":{"name":"Paul Copplestone","avatarUrl":"https://avatars0.githubusercontent.com/u/10214025?v=4","publishDate":"Mar 27, 2020","readLength":5},"ctaText":"View case study"}]'
      );
    },
    1037: function (e) {
      e.exports = JSON.parse(
        '{"database":{"name":"Database","icon":"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4","description":"Every project is a full Postgres database, the world\'s most trusted relational database.","description_short":"","label":"","url":"/database"},"authentication":{"name":"Authentication","icon":"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z","description":"Add user sign ups and logins, securing your data with Row Level Security.","description_short":"","label":"","url":"/auth"},"storage":{"name":"Storage","icon":"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4","description":"Store, organize, and serve large files. Any media, including videos and images.","description_short":"","label":"","url":"/storage"},"edge-functions":{"name":"Edge Functions","icon":"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4","description":"Write custom code without deploying or scaling servers.","description_short":"","label":"","url":"/edge-functions"}}'
      );
    },
  },
]);
