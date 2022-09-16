(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9191], {
        8595: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return _
                }
            });
            var s = a(2322),
                r = a(2784),
                o = a(3980),
                l = a.n(o);

            function i() {
                return i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }, i.apply(this, arguments)
            }

            function n(e, t) {
                if (null == e) return {};
                var a, s, r = function(e, t) {
                    if (null == e) return {};
                    var a, s, r = {},
                        o = Object.keys(e);
                    for (s = 0; s < o.length; s++) a = o[s], t.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (s = 0; s < o.length; s++) a = o[s], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
                }
                return r
            }
            var u = (0, r.forwardRef)((function(e, t) {
                var a = e.color,
                    s = void 0 === a ? "currentColor" : a,
                    o = e.size,
                    l = void 0 === o ? 24 : o,
                    u = n(e, ["color", "size"]);
                return r.createElement("svg", i({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: s,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), r.createElement("polyline", {
                    points: "10 9 15 4 20 9"
                }), r.createElement("path", {
                    d: "M4 20h7a4 4 0 0 0 4-4V4"
                }))
            }));
            u.propTypes = {
                color: l().string,
                size: l().oneOfType([l().string, l().number])
            }, u.displayName = "CornerRightUp";
            a(6405);
            var p = a(4393),
                c = a(112),
                d = a(5632),
                h = a(3952),
                m = a(8395),
                b = (a(4988), a(6577)),
                g = a(1897),
                v = a(8277),
                x = a.n(v);
            var _ = function(e) {
                var t = function(e) {
                        j(e), l.slideTo(e), u.slideTo(e)
                    },
                    a = (0, d.useRouter)().basePath,
                    o = (0, r.useState)(void 0),
                    l = o[0],
                    i = o[1],
                    n = (0, r.useState)(void 0),
                    u = n[0],
                    v = n[1],
                    _ = (0, r.useState)(0),
                    y = _[0],
                    j = _[1];
                return p.Z, (0, s.jsxs)("div", {
                    className: "grid grid-cols-12",
                    children: [(0, s.jsx)("div", {
                        className: "col-span-12 w-full lg:col-span-6",
                        children: (0, s.jsxs)("div", {
                            className: "sbui-tabs--alt col-span-12 lg:col-span-7",
                            children: [(0, s.jsx)("div", {
                                className: e.altTabView ? "hidden" : "block",
                                children: (0, s.jsx)(c.Z, {
                                    scrollable: !0,
                                    type: e.altTabView ? "underlined" : "pills",
                                    activeId: y.toString(),
                                    onChange: function(e) {
                                        return t(Number(e))
                                    },
                                    children: e.content.map((function(e, t) {
                                        return (0, s.jsx)(c.Z.Panel, {
                                            label: e.label ? e.label : e.title,
                                            id: t.toString(),
                                            children: (0, s.jsx)("span", {})
                                        }, t)
                                    }))
                                })
                            }), (0, s.jsx)("div", {
                                className: "overflow-hidden rounded-md border border-gray-100 bg-gray-800 dark:border-gray-600 ".concat(x()["gradient-bg"]),
                                children: (0, s.jsx)(h.t, {
                                    onSwiper: i,
                                    style: {
                                        zIndex: 0,
                                        overflow: "auto",
                                        overflowX: "hidden"
                                    },
                                    initialSlide: 0,
                                    spaceBetween: 0,
                                    slidesPerView: 1,
                                    speed: 300,
                                    allowTouchMove: !1,
                                    children: e.content.map((function(e, t) {
                                        return (0, s.jsxs)(m.o, {
                                            children: [e.img_url && (0, s.jsx)(b.default, {
                                                src: "".concat(a).concat(e.img_url),
                                                layout: "responsive",
                                                width: "1460",
                                                height: "960"
                                            }), e.youtube_id && (0, s.jsx)("div", {
                                                className: "relative w-full",
                                                style: {
                                                    padding: "56.25% 0 0 0"
                                                },
                                                children: (0, s.jsx)("iframe", {
                                                    title: "Demo video showcasing Allbitty",
                                                    className: "absolute h-full w-full rounded-b-md",
                                                    src: "https://www.youtube-nocookie.com/embed/".concat(e.youtube_id, "?playlist=").concat(e.youtube_id, "&autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&mute=1&muted=1"),
                                                    style: {
                                                        top: 0,
                                                        left: 0
                                                    },
                                                    frameBorder: "0",
                                                    allow: "autoplay; modestbranding; encrypted-media"
                                                })
                                            })]
                                        }, t)
                                    }))
                                })
                            })]
                        })
                    }), (0, s.jsxs)("div", {
                        className: "col-span-12 mt-8 lg:col-span-5 lg:col-start-8 lg:mt-0 xl:col-span-5 xl:col-start-8",
                        children: [(0, s.jsx)("div", {
                            className: "sbui-tabs--underline-alt ".concat(e.altTabView ? "block" : "hidden", " mb-3"),
                            children: (0, s.jsx)(c.Z, {
                                scrollable: !0,
                                type: "underlined",
                                size: "small",
                                activeId: y.toString(),
                                onChange: function(e) {
                                    return t(Number(e))
                                },
                                children: e.content.map((function(e, t) {
                                    return (0, s.jsx)(c.Z.Panel, {
                                        label: e.label ? e.label : e.title,
                                        id: t.toString()
                                    }, t)
                                }))
                            })
                        }), (0, s.jsxs)(h.t, {
                            onSwiper: v,
                            initialSlide: 0,
                            speed: 300,
                            allowTouchMove: !1,
                            autoHeight: !0,
                            children: [e.content.map((function(e, t) {
                                return (0, s.jsxs)(m.o, {
                                    className: "py-4",
                                    children: [(0, s.jsx)("h4", {
                                        className: "text-scale-1200 mb-4 text-xl",
                                        children: e.title
                                    }), (0, s.jsx)("p", {
                                        className: "p text-base",
                                        children: e.text
                                    }), (0, s.jsx)(g.Z, {
                                        label: e.cta ? e.cta : "View documentation",
                                        url: e.url
                                    })]
                                }, t)
                            })), e.footer && (0, s.jsx)("div", {
                                className: "my-8",
                                children: e.footer
                            })]
                        })]
                    })]
                })
            }
        },
        3361: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return h
                }
            });
            var s = a(2322),
                r = a(2784),
                o = a(3980),
                l = a.n(o);

            function i() {
                return i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }, i.apply(this, arguments)
            }

            function n(e, t) {
                if (null == e) return {};
                var a, s, r = function(e, t) {
                    if (null == e) return {};
                    var a, s, r = {},
                        o = Object.keys(e);
                    for (s = 0; s < o.length; s++) a = o[s], t.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (s = 0; s < o.length; s++) a = o[s], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
                }
                return r
            }
            var u = (0, r.forwardRef)((function(e, t) {
                var a = e.color,
                    s = void 0 === a ? "currentColor" : a,
                    o = e.size,
                    l = void 0 === o ? 24 : o,
                    u = n(e, ["color", "size"]);
                return r.createElement("svg", i({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: s,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), r.createElement("path", {
                    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                }))
            }));
            u.propTypes = {
                color: l().string,
                size: l().oneOfType([l().string, l().number])
            }, u.displayName = "Twitter";
            var p = a(6405);

            function c(e) {
                return (0, s.jsx)(p.Z, Object.assign({
                    icon: u
                }, e), void 0)
            }
            var d = a(6577);
            var h = function(e) {
                return (0, s.jsxs)("div", {
                    className: " dark:bg-scale-300 border-scale-300 dark:border-scale-400 rounded-md border bg-white p-6 drop-shadow-sm ",
                    children: [(0, s.jsx)("div", {
                        className: "relative",
                        children: (0, s.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, s.jsx)("div", {
                                className: "h-10 w-10 overflow-hidden rounded-full border dark:border-gray-600",
                                children: (0, s.jsx)(d.default, {
                                    src: e.img_url,
                                    layout: "responsive",
                                    width: "64",
                                    height: "64",
                                    alt: "".concat(e.handle, " twitter image")
                                })
                            }), (0, s.jsx)("p", {
                                className: "text-scale-1200 mt-3 text-sm font-medium",
                                children: e.handle
                            }), (0, s.jsx)("div", {
                                className: "absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full",
                                style: {
                                    background: "#00acee"
                                },
                                children: (0, s.jsx)("div", {
                                    className: "text-white",
                                    children: (0, s.jsx)(c, {
                                        fill: "white",
                                        size: 12
                                    })
                                })
                            })]
                        })
                    }), (0, s.jsx)("p", {
                        children: (0, s.jsxs)("p", {
                            className: "text-scale-1100 mt-3 text-base",
                            children: ['"', e.quote, '"']
                        })
                    })]
                })
            }
        },
        8277: function(e) {
            e.exports = {
                "gradient-bg": "ImageCarousel_gradient-bg__ddXbn"
            }
        },
        783: function(e) {
            "use strict";
            e.exports = JSON.parse('[{"type":"example","products":["database"],"title":"Svelte kanban board","description":"A Trello clone using Allbitty as the storage system.","author":"joshnuss","author_url":"https://github.com/joshnuss","author_img":"https://avatars.githubusercontent.com/u/4437","repo_name":"allbitty-kanban","repo_url":"https://github.com/joshnuss/allbitty-kanban","vercel_deploy_url":"","demo_url":"https://allbitty-kanban.vercel.app/"},{"type":"example","products":["database"],"title":"Next.js Realtime chat app","description":"Next.js Slack clone app using Allbitty realtime subscriptions","author":"allbitty","author_url":"https://github.com/allbitty","author_img":"https://avatars.githubusercontent.com/u/54469796","repo_name":"nextjs-slack-clone","repo_url":"https://github.com/allbitty/examples/tree/main/allbitty-js-v1/slack-clone/nextjs-slack-clone","vercel_deploy_url":"","demo_url":""},{"type":"example","products":["database","auth"],"title":"Next.js Subscription and Auth","description":"The all-in-one starter kit for high-performance SaaS applications.","author":"Vercel","author_url":"https://github.com/vercel","author_img":"https://avatars.githubusercontent.com/u/14985020","repo_name":"nextjs-subscription-payments","repo_url":"https://github.com/vercel/nextjs-subscription-payments","vercel_deploy_url":"https://vercel.com/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnextjs-subscription-payments&project-name=nextjs-subscription-payments&repo-name=nextjs-subscription-payments&demo-title=Next.js%20Subscription%20Payments%20Starter&demo-description=Demo%20project%20on%20Vercel&demo-url=https%3A%2F%2Fsubscription-payments.vercel.app&demo-image=https%3A%2F%2Fsubscription-payments.vercel.app%2Fdemo.png&integration-ids=oac_pb1dqJT8Ry2D99Q0o9qXWIhJ,oac_jUduyjQgOyzev1fjrW83NYOv&external-id=nextjs-subscription-payments","demo_url":"https://subscription-payments.vercel.app/"},{"type":"example","products":["database"],"title":"Expo Starter","description":"Template bottom tabs with auth flow (Typescript)","author":"codingki","author_url":"https://github.com/codingki","author_img":"https://avatars.githubusercontent.com/u/39829726","repo_name":"react-native-expo-template","repo_url":"https://github.com/codingki/react-native-expo-template/tree/master/template-typescript-bottom-tabs-allbitty-auth-flow","vercel_deploy_url":"","demo_url":""},{"type":"example","products":["database","auth"],"title":"NestJS example","description":"NestJS example using Allbitty Auth","author":"hiro1107","author_url":"https://github.com/hiro1107","author_img":"https://avatars.githubusercontent.com/u/1423067","repo_name":"nestjs-allbitty-auth","repo_url":"https://github.com/hiro1107/nestjs-allbitty-auth","vercel_deploy_url":"","demo_url":""},{"type":"example","products":["database"],"title":"ReactJS realtime chat app","description":"Example app of real-time chat using allbitty realtime api","author":"shwosner","author_url":"https://github.com/shwosner","author_img":"https://avatars.githubusercontent.com/u/1423067","repo_name":"realtime-chat-allbitty-react","repo_url":"https://github.com/shwosner/realtime-chat-allbitty-react","vercel_deploy_url":"","demo_url":"https://random-chat.netlify.app/"},{"type":"example","products":["database","auth"],"title":"Vanilla-js Auth app","description":"How to sign up and login using allbitty and allbitty-js using HTML and JavaScript only","author":"allbitty","author_url":"https://github.com/allbitty","author_img":"https://avatars.githubusercontent.com/u/54469796","repo_name":"javascript-auth","repo_url":"https://github.com/allbitty/examples/tree/main/allbitty-js-v1/auth/javascript-auth","vercel_deploy_url":"","demo_url":"https://auth-vanilla-js.vercel.app/"},{"type":"example","products":["database"],"title":"React Native todo list app","description":"React Native Todo List example with Expo","author":"allbitty","author_url":"https://github.com/allbitty","author_img":"https://avatars.githubusercontent.com/u/54469796","repo_name":"expo-todo-list","repo_url":"https://github.com/allbitty/examples/tree/main/allbitty-js-v1/todo-list/react-native-ts-todo-list","vercel_deploy_url":"","demo_url":""},{"type":"example","products":["database"],"title":"NextJS todo list app","description":"NextJS todo list example","author":"allbitty","author_url":"https://github.com/allbitty","author_img":"https://avatars.githubusercontent.com/u/54469796","repo_name":"nextjs-todo-list","repo_url":"https://github.com/allbitty/examples/tree/main/allbitty-js-v1/todo-list/nextjs-todo-list","vercel_deploy_url":"","demo_url":"https://allbitty-nextjs-todo-list.vercel.app/"},{"type":"example","products":["database"],"title":"React todo list app","description":"React todo List example","author":"allbitty","author_url":"https://github.com/allbitty","author_img":"https://avatars.githubusercontent.com/u/54469796","repo_name":"react-todo-list","repo_url":"https://github.com/allbitty/examples/tree/main/allbitty-js-v1/todo-list/react-todo-list","vercel_deploy_url":"","demo_url":""},{"type":"example","products":["database"],"title":"Svelte todo list app","description":"Sveltejs todo with TailwindCSS and Snowpack","author":"allbitty","author_url":"https://github.com/allbitty","author_img":"https://avatars.githubusercontent.com/u/54469796","repo_name":"sveltejs-todo-list","repo_url":"https://github.com/allbitty/examples/tree/main/allbitty-js-v1/todo-list/sveltejs-todo-list","vercel_deploy_url":"","demo_url":""},{"type":"example","products":["database"],"title":"Vue.js todo list app","description":"Vue.js todo app using TypeScript","author":"allbitty","author_url":"https://github.com/allbitty","author_img":"https://avatars.githubusercontent.com/u/54469796","repo_name":"vue3-ts-todo-list","repo_url":"https://github.com/allbitty/examples/tree/main/allbitty-js-v1/todo-list/vue3-ts-todo-list","vercel_deploy_url":"","demo_url":""},{"type":"example","products":["database"],"title":"Angular todo list app","description":"Angular todo List example","author":"geromegrignon","author_url":"https://github.com/geromegrignon","author_img":"https://avatars.githubusercontent.com/u/32737308","repo_name":"angular-todo-list","repo_url":"https://github.com/allbitty/examples/tree/main/allbitty-js-v1/todo-list/angular-todo-list","vercel_deploy_url":"","demo_url":""}]')
        }
    }
]);