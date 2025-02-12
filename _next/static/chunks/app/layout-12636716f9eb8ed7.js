(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
  4902: function(e, t, s) {
      Promise.resolve().then(s.t.bind(s, 7960, 23)),
      Promise.resolve().then(s.bind(s, 2990))
  },
  2990: function(e, t, s) {
      "use strict";
      s.d(t, {
          default: function() {
              return L
          }
      });
      var a = s(7437)
        , r = s(2265)
        , i = s(3145)
        , n = s(746)
        , l = {
          src: "/_next/static/media/menu.1cfe0588.svg",
          height: 18,
          width: 22,
          blurWidth: 0,
          blurHeight: 0
      }
        , d = s(9205);
      let o = (0,
      d.Z)("Copy", [["rect", {
          width: "14",
          height: "14",
          x: "8",
          y: "8",
          rx: "2",
          ry: "2",
          key: "17jyea"
      }], ["path", {
          d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
          key: "zix9uf"
      }]])
        , c = (0,
      d.Z)("X", [["path", {
          d: "M18 6 6 18",
          key: "1bl5f8"
      }], ["path", {
          d: "m6 6 12 12",
          key: "d8bk6v"
      }]]);
      var h = s(7648);
      let x = (0,
      d.Z)("MailOpen", [["path", {
          d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
          key: "1jhwl8"
      }], ["path", {
          d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",
          key: "1qfld7"
      }]]);
      var u = () => {
          let[e,t] = (0,
          r.useState)(!1)
            , [s,n] = (0,
          r.useState)(!1)
            , l = async () => {
              try {
                  await navigator.clipboard.writeText("0x000000000000000000000000000000"),
                  n(!0),
                  setTimeout( () => n(!1), 2e3)
              } catch (e) {
                  console.error("Failed to copy:", e)
              }
          }
          ;
          return (0,
          a.jsxs)(a.Fragment, {
              children: [(0,
              a.jsxs)("div", {
                  className: "fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-[760px] p-4 sm:p-2 flex justify-between items-center rounded-[32px] bg-[#171717] z-50",
                  children: [(0,
                  a.jsx)(h.default, {
                      href: "/",
                      children: (0,
                      a.jsx)(i.default, {
                          src: "/LogoScroll.svg",
                          alt: "logo",
                          width: 36,
                          height: 36
                      })
                  }), (0,
                  a.jsxs)("div", {
                      className: "hidden sm:flex items-center gap-6",
                      children: [(0,
                      a.jsx)("div", {
                          className: "text-[#D4D4D4] text-base font-bold",
                          children: (0,
                          a.jsx)(h.default, {
                              href: "#docs",
                              target: "_blank",
                              children: "Docs"
                          })
                      }), (0,
                      a.jsx)("div", {
                          className: "text-[#D4D4D4] text-base font-bold",
                          children: (0,
                          a.jsx)(h.default, {
                              href: "#app",
                              target: "_blank",
                              children: "App"
                          })
                      }), (0,
                      a.jsxs)("div", {
                          onClick: l,
                          className: "relative cursor-pointer text-[#D4D4D4] text-base font-bold flex gap-0.5",
                          children: [(0,
                          a.jsx)(o, {
                              className: "w-4 h-4"
                          }), "Contract Address", s && (0,
                          a.jsx)("div", {
                              className: "absolute top-8 left-3/4 -translate-x-1/2 bg-[#FF3838] text-[12px] font-semibold text-white py-2 px-6 rounded-lg whitespace-nowrap",
                              children: "Address copied to clipboard!"
                          })]
                      })]
                  }), (0,
                  a.jsxs)("div", {
                      className: "flex gap-x-3",
                      children: [(0,
                      a.jsx)("div", {
                          className: " flex items-center p-1.5 px-2.5 rounded-lg",
                          children: (0,
                          a.jsx)(h.default, {
                              href: "https://t.me/destraaioneth",
                              target: "_blank",
                              children: (0,
                              a.jsx)(i.default, {
                                  src: "/telegram.svg",
                                  alt: "alt",
                                  width: 100,
                                  height: 100,
                                  className: "size-6"
                              })
                          })
                      })]
                  }), (0,
                  a.jsx)("div", {
                      className: "sm:hidden z-50",
                      onClick: () => {
                          t(!e)
                      }
                      ,
                      children: e ? (0,
                      a.jsx)(c, {
                          className: "w-6 h-6 text-white"
                      }) : (0,
                      a.jsx)(i.default, {
                          src: "/menu.svg",
                          alt: "menu",
                          width: 24,
                          height: 24
                      })
                  })]
              }), (0,
              a.jsx)("div", {
                  className: "fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-40 transition-opacity duration-300 ".concat(e ? "opacity-100" : "opacity-0 pointer-events-none"),
                  children: e && (0,
                  a.jsxs)("div", {
                      className: "w-full max-w-screen-sm px-4 flex flex-col items-center justify-center text-center",
                      children: [(0,
                      a.jsxs)("div", {
                          className: "flex flex-col gap-y-6 text-2xl font-bold",
                          children: [(0,
                          a.jsx)(h.default, {
                              href: "#docs",
                              className: "text-red-500",
                              children: "DOCS"
                          }), (0,
                          a.jsx)(h.default, {
                              href: "#app",
                              target: "_blank",
                              children: "App"
                          })]
                      }), (0,
                      a.jsxs)("div", {
                          onClick: l,
                          className: "relative cursor-pointer text-[#D4D4D4] text-2xl font-bold",
                          children: ["CA", s && (0,
                          a.jsx)("div", {
                              className: "absolute top-8 left-3/4 -translate-x-1/2 bg-[#FF3838] text-[12px] font-semibold text-white py-2 px-6 rounded-lg whitespace-nowrap",
                              children: "Address copied to clipboard!"
                          })]
                      }), (0,
                      a.jsxs)("div", {
                          className: "flex flex-col items-center gap-y-4 my-6",
                          children: [(0,
                          a.jsxs)("div", {
                              className: "text-sm flex flex-col items-center gap-y-2 text-[#A3A3A3]",
                              children: [(0,
                              a.jsx)(h.default, {
                                  href: "/",
                                  className: "border-b border-[#A3A3A3]",
                                  children: "TERMS & CONDITIONS"
                              }), (0,
                              a.jsx)(h.default, {
                                  href: "/",
                                  className: "border-b border-[#A3A3A3]",
                                  children: "PRIVACY POLICY"
                              })]
                          }), (0,
                          a.jsx)("p", {
                              className: "text-lg font-medium",
                              children: "FOLLOW US"
                          }), (0,
                          a.jsx)("div", {
                              className: "flex items-center gap-x-3",
                              children: [{
                                  name: "x",
                                  url: "https://x.com/destraaioneth"
                              }, {
                                  name: "tg",
                                  url: "https://t.me/destraaioneth"
                              }].map(e => (0,
                              a.jsx)("a", {
                                  href: e.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0,
                                  a.jsx)(i.default, {
                                      src: "/socials/".concat(e.name, ".svg"),
                                      alt: e.name,
                                      className: "w-6 h-6",
                                      width: 24,
                                      height: 24
                                  })
                              }, e.name))
                          })]
                      })]
                  })
              })]
          })
      }
        , f = s(4922)
        , m = s(5439)
        , p = s(314);
      function j() {
          let[e,t] = (0,
          r.useState)(!1)
            , [s,d] = (0,
          r.useState)(!1);
          (0,
          r.useEffect)( () => {
              let e = () => {
                  window.scrollY > 100 ? d(!0) : d(!1)
              }
              ;
              return window.addEventListener("scroll", e),
              () => {
                  window.removeEventListener("scroll", e)
              }
          }
          , []);
          let x = (0,
          r.useRef)(null)
            , j = (0,
          f.Y)(x, {
              once: !0
          })
            , [g,w] = (0,
          r.useState)(!1)
            , y = async () => {
              try {
                  await navigator.clipboard.writeText("0x000000000000000000000000000000"),
                  w(!0),
                  setTimeout( () => w(!1), 2e3)
              } catch (e) {
                  console.error("Failed to copy:", e)
              }
          }
          ;
          return (0,
          a.jsxs)("div", {
              children: [(0,
              a.jsxs)("div", {
                  className: "hidden md:flex w-full p-8 mx-auto items-center text-white justify-between ",
                  ref: x,
                  children: [(0,
                  a.jsx)(m.E.div, {
                      initial: {
                          opacity: 0,
                          x: 10
                      },
                      animate: j ? {
                          opacity: 1,
                          x: 0
                      } : {},
                      transition: {
                          duration: 1.2,
                          ease: p.mZ
                      },
                      children: (0,
                      a.jsx)(h.default, {
                          href: "/",
                          children: (0,
                          a.jsx)(i.default, {
                              src: n.Z,
                              alt: "logo",
                              className: "z-50",
                              width: 180,
                              height: 40
                          })
                      })
                  }), (0,
                  a.jsxs)("div", {
                      className: "flex gap-x-6 text-lg font-bold",
                      children: [(0,
                      a.jsx)(m.E.div, {
                          initial: {
                              opacity: 0,
                              y: 23
                          },
                          animate: j ? {
                              opacity: 1,
                              y: 0
                          } : {},
                          transition: {
                              duration: 1,
                              ease: p.mZ
                          },
                          children: (0,
                          a.jsx)(h.default, {
                              href: "#docs",
                              target: "_blank",
                              className: "text-red-500",
                              children: "Docs"
                          })
                      }), (0,
                      a.jsx)(m.E.div, {
                          initial: {
                              opacity: 0,
                              y: 23
                          },
                          animate: j ? {
                              opacity: 1,
                              y: 0
                          } : {},
                          transition: {
                              duration: 1,
                              delay: .2,
                              ease: p.mZ
                          },
                          children: (0,
                          a.jsx)(h.default, {
                              href: "#app",
                              target: "_blank",
                              children: "App"
                          })
                      }), (0,
                      a.jsx)(m.E.div, {
                          initial: {
                              opacity: 0,
                              y: 23
                          },
                          animate: j ? {
                              opacity: 1,
                              y: 0
                          } : {},
                          transition: {
                              duration: 1,
                              delay: .5,
                              ease: "easeInOut"
                          },
                          children: (0,
                          a.jsxs)("div", {
                              onClick: y,
                              className: "relative cursor-pointer flex gap-1",
                              children: [(0,
                              a.jsx)(o, {
                                  className: "w-5 h-5"
                              }), "Contract Address", g && (0,
                              a.jsx)("div", {
                                  className: "absolute top-8 left-3/4 -translate-x-1/2 bg-[#FF3838] text-[12px] font-semibold text-white py-2 px-6 rounded-lg whitespace-nowrap",
                                  children: "Address copied to clipboard!"
                              })]
                          })
                      })]
                  }), (0,
                  a.jsxs)(m.E.div, {
                      initial: {
                          opacity: 0,
                          y: 23
                      },
                      animate: j ? {
                          opacity: 1,
                          y: 0
                      } : {},
                      transition: {
                          duration: 1,
                          delay: .7,
                          ease: p.YQ
                      },
                      className: "flex gap-x-3",
                      children: [(0,
                      a.jsx)("div", {
                          className: " flex items-center gap-1 rounded-[16px] justify-end p-2 bg-white",
                          children: (0,
                          a.jsx)(h.default, {
                              href: "https://t.me/destraaioneth",
                              target: "_blank",
                              children: (0,
                              a.jsx)(i.default, {
                                  src: "/telegramnav.svg",
                                  alt: "alt",
                                  width: 100,
                                  height: 100,
                                  className: "size-6"
                              })
                          })
                      })]
                  })]
              }), (0,
              a.jsxs)("div", {
                  className: "md:hidden  w-full max-w-screen-sm mx-auto flex items-center text-white justify-between py-4 px-4",
                  children: [(0,
                  a.jsx)(m.E.div, {
                      initial: {
                          opacity: 0,
                          x: 3,
                          y: 15
                      },
                      animate: {
                          opacity: 1,
                          x: 0,
                          y: 0
                      },
                      transition: {
                          duration: 1,
                          ease: p.mZ
                      },
                      children: (0,
                      a.jsx)(h.default, {
                          href: "/",
                          children: (0,
                          a.jsx)(i.default, {
                              src: n.Z,
                              alt: "logo",
                              className: "z-50",
                              width: 160,
                              height: 50
                          })
                      })
                  }), (0,
                  a.jsx)(m.E.div, {
                      initial: {
                          opacity: 0,
                          x: 3,
                          y: 15
                      },
                      animate: {
                          opacity: 1,
                          x: 0,
                          y: 0
                      },
                      transition: {
                          duration: 1,
                          delay: .2,
                          ease: p.mZ
                      },
                      onClick: () => {
                          t(!e)
                      }
                      ,
                      className: "cursor-pointer z-50",
                      children: e ? (0,
                      a.jsx)(c, {
                          className: "w-6 h-6"
                      }) : (0,
                      a.jsx)(i.default, {
                          src: l,
                          alt: "menu",
                          width: 24,
                          height: 24
                      })
                  })]
              }), e && (0,
              a.jsx)("div", {
                  className: "fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-40",
                  children: (0,
                  a.jsxs)("div", {
                      className: "w-full max-w-screen-sm px-4 flex flex-col items-center justify-center text-center",
                      children: [(0,
                      a.jsxs)("div", {
                          className: "flex flex-col gap-y-6 text-2xl font-bold",
                          children: [(0,
                          a.jsx)(h.default, {
                              href: "#docs",
                              className: "text-red-500",
                              children: "DOCS"
                          }), (0,
                          a.jsx)(h.default, {
                              href: "#app",
                              children: "App"
                          })]
                      }), (0,
                      a.jsxs)("div", {
                          className: "flex flex-col items-center gap-y-4 my-6",
                          children: [(0,
                          a.jsxs)("div", {
                              className: "text-sm flex flex-col items-center gap-y-2 text-[#A3A3A3]",
                              children: [(0,
                              a.jsx)(h.default, {
                                  href: "/",
                                  className: "border-b border-[#A3A3A3]",
                                  children: "TERMS & CONDITIONS"
                              }), (0,
                              a.jsx)(h.default, {
                                  href: "/",
                                  className: "border-b border-[#A3A3A3]",
                                  children: "PRIVACY POLICY"
                              })]
                          }), (0,
                          a.jsx)("p", {
                              className: "text-lg font-medium",
                              children: "FOLLOW US"
                          }), (0,
                          a.jsx)("div", {
                              className: "flex items-center gap-x-3",
                              children: [{
                                  name: "x",
                                  url: "https://x.com/destraaioneth"
                              }, {
                                  name: "tg",
                                  url: "https://t.me/destraaioneth"
                              }].map(e => (0,
                              a.jsx)("a", {
                                  href: e.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0,
                                  a.jsx)(i.default, {
                                      src: "/socials/".concat(e.name, ".svg"),
                                      alt: e.name,
                                      className: "w-6 h-6",
                                      width: 24,
                                      height: 24
                                  })
                              }, e.name))
                          })]
                      })]
                  })
              }), s && (0,
              a.jsx)(u, {})]
          })
      }
      var g = s(4252)
        , w = s(3576)
        , y = s(5750);
      class b extends r.Component {
          getSnapshotBeforeUpdate(e) {
              let t = this.props.childRef.current;
              if (t && e.isPresent && !this.props.isPresent) {
                  let e = this.props.sizeRef.current;
                  e.height = t.offsetHeight || 0,
                  e.width = t.offsetWidth || 0,
                  e.top = t.offsetTop,
                  e.left = t.offsetLeft
              }
              return null
          }
          componentDidUpdate() {}
          render() {
              return this.props.children
          }
      }
      function v({children: e, isPresent: t}) {
          let s = (0,
          r.useId)()
            , i = (0,
          r.useRef)(null)
            , n = (0,
          r.useRef)({
              width: 0,
              height: 0,
              top: 0,
              left: 0
          })
            , {nonce: l} = (0,
          r.useContext)(y._);
          return (0,
          r.useInsertionEffect)( () => {
              let {width: e, height: a, top: r, left: d} = n.current;
              if (t || !i.current || !e || !a)
                  return;
              i.current.dataset.motionPopId = s;
              let o = document.createElement("style");
              return l && (o.nonce = l),
              document.head.appendChild(o),
              o.sheet && o.sheet.insertRule(`
        [data-motion-pop-id="${s}"] {
          position: absolute !important;
          width: ${e}px !important;
          height: ${a}px !important;
          top: ${r}px !important;
          left: ${d}px !important;
        }
      `),
              () => {
                  document.head.removeChild(o)
              }
          }
          , [t]),
          (0,
          a.jsx)(b, {
              isPresent: t,
              childRef: i,
              sizeRef: n,
              children: r.cloneElement(e, {
                  ref: i
              })
          })
      }
      let N = ({children: e, initial: t, isPresent: s, onExitComplete: i, custom: n, presenceAffectsLayout: l, mode: d}) => {
          let o = (0,
          w.h)(k)
            , c = (0,
          r.useId)()
            , h = (0,
          r.useMemo)( () => ({
              id: c,
              initial: t,
              isPresent: s,
              custom: n,
              onExitComplete: e => {
                  for (let t of (o.set(e, !0),
                  o.values()))
                      if (!t)
                          return;
                  i && i()
              }
              ,
              register: e => (o.set(e, !1),
              () => o.delete(e))
          }), l ? [Math.random()] : [s]);
          return (0,
          r.useMemo)( () => {
              o.forEach( (e, t) => o.set(t, !1))
          }
          , [s]),
          r.useEffect( () => {
              s || o.size || !i || i()
          }
          , [s]),
          "popLayout" === d && (e = (0,
          a.jsx)(v, {
              isPresent: s,
              children: e
          })),
          (0,
          a.jsx)(g.O.Provider, {
              value: h,
              children: e
          })
      }
      ;
      function k() {
          return new Map
      }
      var E = s(8881)
        , A = s(3223);
      let C = e => e.key || "";
      function D(e) {
          let t = [];
          return r.Children.forEach(e, e => {
              (0,
              r.isValidElement)(e) && t.push(e)
          }
          ),
          t
      }
      var _ = s(1534);
      let O = ({children: e, exitBeforeEnter: t, custom: s, initial: i=!0, onExitComplete: n, presenceAffectsLayout: l=!0, mode: d="sync"}) => {
          (0,
          A.k)(!t, "Replace exitBeforeEnter with mode='wait'");
          let o = (0,
          r.useMemo)( () => D(e), [e])
            , c = o.map(C)
            , h = (0,
          r.useRef)(!0)
            , x = (0,
          r.useRef)(o)
            , u = (0,
          w.h)( () => new Map)
            , [f,m] = (0,
          r.useState)(o)
            , [p,j] = (0,
          r.useState)(o);
          (0,
          _.L)( () => {
              h.current = !1,
              x.current = o;
              for (let e = 0; e < p.length; e++) {
                  let t = C(p[e]);
                  c.includes(t) ? u.delete(t) : !0 !== u.get(t) && u.set(t, !1)
              }
          }
          , [p, c.length, c.join("-")]);
          let g = [];
          if (o !== f) {
              let e = [...o];
              for (let t = 0; t < p.length; t++) {
                  let s = p[t]
                    , a = C(s);
                  c.includes(a) || (e.splice(t, 0, s),
                  g.push(s))
              }
              "wait" === d && g.length && (e = g),
              j(D(e)),
              m(o);
              return
          }
          let {forceRender: y} = (0,
          r.useContext)(E.p);
          return (0,
          a.jsx)(a.Fragment, {
              children: p.map(e => {
                  let t = C(e)
                    , r = o === p || c.includes(t);
                  return (0,
                  a.jsx)(N, {
                      isPresent: r,
                      initial: (!h.current || !!i) && void 0,
                      custom: r ? void 0 : s,
                      presenceAffectsLayout: l,
                      mode: d,
                      onExitComplete: r ? void 0 : () => {
                          if (!u.has(t))
                              return;
                          u.set(t, !0);
                          let e = !0;
                          u.forEach(t => {
                              t || (e = !1)
                          }
                          ),
                          e && (null == y || y(),
                          j(x.current),
                          n && n())
                      }
                      ,
                      children: e
                  }, t)
              }
              )
          })
      }
      ;
      var P = s(4508);
      function R(e) {
          let {text: t, duration: s=.5, delayMultiple: r=.04, framerProps: i={
              hidden: {
                  opacity: 0,
                  x: -20
              },
              visible: {
                  opacity: 1,
                  x: 0
              }
          }, className: n} = e;
          return (0,
          a.jsx)("div", {
              className: "flex justify-center space-x-1",
              children: (0,
              a.jsx)(O, {
                  children: t.split("").map( (e, t) => (0,
                  a.jsx)(m.E.h1, {
                      initial: "hidden",
                      animate: "visible",
                      exit: "hidden",
                      variants: i,
                      transition: {
                          duration: s,
                          delay: t * r
                      },
                      className: (0,
                      P.cn)("drop-shadow-sm ", n),
                      children: " " === e ? (0,
                      a.jsx)("span", {
                          children: "\xa0"
                      }) : e
                  }, t))
              })
          })
      }
      var S = () => {
          let[e,t] = (0,
          r.useState)(!0);
          return ((0,
          r.useEffect)( () => {
              let e = setTimeout( () => {
                  t(!1)
              }
              , 2e3);
              return () => clearTimeout(e)
          }
          , []),
          e) ? (0,
          a.jsx)("div", {
              className: "fixed inset-0 flex items-center justify-center bg-black z-50",
              children: (0,
              a.jsx)(R, {
                  className: "font-display text-center text-4xl font-bold tracking-[-0.1em] text-white dark:text-white md:text-7xl md:leading-[5rem]",
                  text: "Destra Network AI"
              })
          }) : null
      }
      ;
      function L(e) {
          let {children: t} = e
            , [s,i] = (0,
          r.useState)(!0);
          return (0,
          r.useEffect)( () => {
              let e = setTimeout( () => {
                  i(!1)
              }
              , 2e3);
              return s ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto",
              () => {
                  clearTimeout(e),
                  document.body.style.overflow = "auto"
              }
          }
          , [s]),
          (0,
          a.jsxs)(a.Fragment, {
              children: [s ? (0,
              a.jsx)(S, {}) : (0,
              a.jsx)(j, {}), t]
          })
      }
  },
  4508: function(e, t, s) {
      "use strict";
      s.d(t, {
          cn: function() {
              return i
          }
      });
      var a = s(1994)
        , r = s(3335);
      function i() {
          for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
          return (0,
          r.m6)((0,
          a.W)(t))
      }
  },
  9205: function(e, t, s) {
      "use strict";
      s.d(t, {
          Z: function() {
              return d
          }
      });
      var a = s(2265);
      let r = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
        , i = function() {
          for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
          return t.filter( (e, t, s) => !!e && s.indexOf(e) === t).join(" ")
      };
      var n = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
      };
      let l = (0,
      a.forwardRef)( (e, t) => {
          let {color: s="currentColor", size: r=24, strokeWidth: l=2, absoluteStrokeWidth: d, className: o="", children: c, iconNode: h, ...x} = e;
          return (0,
          a.createElement)("svg", {
              ref: t,
              ...n,
              width: r,
              height: r,
              stroke: s,
              strokeWidth: d ? 24 * Number(l) / Number(r) : l,
              className: i("lucide", o),
              ...x
          }, [...h.map(e => {
              let[t,s] = e;
              return (0,
              a.createElement)(t, s)
          }
          ), ...Array.isArray(c) ? c : [c]])
      }
      )
        , d = (e, t) => {
          let s = (0,
          a.forwardRef)( (s, n) => {
              let {className: d, ...o} = s;
              return (0,
              a.createElement)(l, {
                  ref: n,
                  iconNode: t,
                  className: i("lucide-".concat(r(e)), d),
                  ...o
              })
          }
          );
          return s.displayName = "".concat(e),
          s
      }
  },
  7960: function() {},
  746: function(e, t) {
      "use strict";
      t.Z = {
          src: "/_next/static/media/logo.636487f6.svg",
          height: 42,
          width: 170,
          blurWidth: 0,
          blurHeight: 0
      }
  }
}, function(e) {
  e.O(0, [587, 726, 363, 137, 971, 117, 744], function() {
      return e(e.s = 4902)
  }),
  _N_E = e.O()
}
]);
