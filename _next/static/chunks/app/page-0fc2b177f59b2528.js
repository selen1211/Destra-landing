(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
  193: function(e, t, s) {
      Promise.resolve().then(s.bind(s, 5201))
  },
  5201: function(e, t, s) {
      "use strict";
      s.r(t),
      s.d(t, {
          default: function() {
              return el
          }
      });
      var i = s(7437)
        , r = s(8349)
        , o = s(2265)
        , a = s(9708)
        , n = s(875)
        , l = s(4508);
      let d = a.fC
        , c = o.forwardRef( (e, t) => {
          let {className: s, ...r} = e;
          return (0,
          i.jsx)(a.ck, {
              ref: t,
              className: (0,
              l.cn)("border-b border-gray-500", s),
              ...r
          })
      }
      );
      c.displayName = "AccordionItem";
      let x = o.forwardRef( (e, t) => {
          let {className: s, children: r, ...o} = e;
          return (0,
          i.jsx)(a.h4, {
              className: "flex",
              children: (0,
              i.jsxs)(a.xz, {
                  ref: t,
                  className: (0,
                  l.cn)("flex flex-1 md:items-center items-start justify-between py-6  font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", s),
                  ...o,
                  children: [r, (0,
                  i.jsx)(n.Z, {
                      className: "h-4 -top-3 w-4 shrink-0 transition-transform duration-200"
                  })]
              })
          })
      }
      );
      x.displayName = a.xz.displayName;
      let p = o.forwardRef( (e, t) => {
          let {className: s, children: r, ...o} = e;
          return (0,
          i.jsx)(a.VY, {
              ref: t,
              className: "overflow-hidden text-sm font-normal items-start md:items-center transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
              ...o,
              children: (0,
              i.jsx)("div", {
                  className: (0,
                  l.cn)("pb-4 pt-0", s),
                  children: r
              })
          })
      }
      );
      p.displayName = a.VY.displayName;
      var f = s(4922)
        , u = s(5439)
        , h = s(314);
      let _ = [{
          value: "item-3",
          Question: "What is DSync and how does it contribute to decentralization?",
          answer: "DSync aims to establish a permanent and distributed web by employing a content-addressed system instead of HTTP's location-based system. This eliminates the need for a single server's IP address or a centralized CDN, ensuring true decentralization and eliminating central authority."
      }, {
          value: "item-5",
          Question: "How can users access websites hosted on Destra Network AI?",
          answer: "In supported browsers like Opera and Brave, users can access websites directly through ENS domain names. For Web3 unfriendly browsers like Chrome or Firefox, access is provided through Destra's Decentralized ENS gateway."
      }, {
          value: "item-6",
          Question: "What is Destra's Decentralized DNS and how does it enhance privacy?",
          answer: "Destra's Decentralized DNS links Web3 domain names directly to file IDs in a decentralized storage network like IPFS, bypassing traditional IP address-based resolutions."
      }, {
          value: "item-7",
          Question: "What is Proof of Sync consensus and how does it work?",
          answer: "Proof of Sync consensus measures the resource usage (storage, computing, database) by each participant on the network and rewards them accordingly. This unique mechanism ensures a fair and transparent ecosystem."
      }, {
          value: "item-8",
          Question: "How does Destra Network AI prioritize user privacy?",
          answer: "Privacy stands as the cornerstone of Destra Network AI's ethos. Through end-to-end encryption and privacy-preserving protocols, Destra Network AI safeguards the integrity and confidentiality of user data, empowering users to reclaim control over their digital footprint."
      }]
        , j = e => 3 * e;
      function g() {
          let e = (0,
          o.useRef)(null)
            , t = (0,
          f.Y)(e, {
              once: !0
          });
          return (0,
          i.jsxs)("div", {
              className: "z-100",
              children: [(0,
              i.jsxs)("div", {
                  className: " flex max-w-[340px] md:max-w-screen-sm w-full flex-col items-center mx-auto py-10",
                  ref: e,
                  children: [(0,
                  i.jsx)(u.E.div, {
                      initial: {
                          opacity: 0,
                          y: 90
                      },
                      animate: t ? {
                          opacity: 1,
                          y: 0
                      } : {},
                      transition: {
                          duration: 1,
                          ease: h.YQ
                      },
                      className: "hero-text2 font-semibold md:text-5xl text-4xl text-center",
                      children: "FAQ"
                  }), (0,
                  i.jsx)(u.E.p, {
                      initial: {
                          opacity: 0,
                          y: 90
                      },
                      animate: t ? {
                          opacity: 1,
                          y: 0
                      } : {},
                      transition: {
                          duration: 1,
                          delay: .1,
                          ease: h.YQ
                      },
                      className: "self-stretch text-center text-white md:text-base text-sm font-normal mt-4",
                      children: "For any other questions, feel welcome to reach out to the community"
                  })]
              }), (0,
              i.jsx)(d, {
                  type: "single",
                  collapsible: !0,
                  className: "w-full max-w-[370px] p-2.5  md:p-5 md:max-w-screen-lg mx-auto justify-start md:justify-center items-start text-white transition-all delay-500",
                  children: _.map( (e, s) => (0,
                  i.jsx)(u.E.div, {
                      initial: {
                          opacity: 0,
                          y: 90
                      },
                      animate: t ? {
                          opacity: 1,
                          y: 0
                      } : {},
                      transition: {
                          duration: .6,
                          delay: j(.1 * s),
                          ease: h.YQ
                      },
                      children: (0,
                      i.jsxs)(c, {
                          value: e.value,
                          children: [(0,
                          i.jsx)(x, {
                              children: e.Question
                          }), (0,
                          i.jsx)(p, {
                              children: e.answer
                          })]
                      })
                  }, s))
              })]
          })
      }
      var y = s(3145)
        , m = {
          src: "/_next/static/media/DestraFaster.b356d3d0.svg",
          height: 428,
          width: 328,
          blurWidth: 0,
          blurHeight: 0
      }
        , B = s(4930);
      let F = o.forwardRef( (e, t) => {
          let {className: s, ...r} = e;
          return (0,
          i.jsx)(B.fC, {
              ref: t,
              className: (0,
              l.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-[12px] md:rounded-full", s),
              ...r
          })
      }
      );
      F.displayName = B.fC.displayName;
      let U = o.forwardRef( (e, t) => {
          let {className: s, ...r} = e;
          return (0,
          i.jsx)(B.Ee, {
              ref: t,
              className: (0,
              l.cn)("aspect-square h-full w-full", s),
              ...r
          })
      }
      );
      U.displayName = B.Ee.displayName;
      let G = o.forwardRef( (e, t) => {
          let {className: s, ...r} = e;
          return (0,
          i.jsx)(B.NY, {
              ref: t,
              className: (0,
              l.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", s),
              ...r
          })
      }
      );
      G.displayName = B.NY.displayName;
      var w = s(722)
        , k = s(7495);
      let C = (0,
      s(7712).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
          variants: {
              variant: {
                  default: "bg-primary text-primary-foreground hover:bg-primary/90",
                  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  ghost: "hover:bg-accent hover:text-accent-foreground",
                  link: "text-primary underline-offset-4 hover:underline"
              },
              size: {
                  default: "h-10 px-4 py-2",
                  sm: "h-9 rounded-md px-3",
                  lg: "h-11 rounded-md px-8",
                  icon: "h-10 w-10"
              }
          },
          defaultVariants: {
              variant: "default",
              size: "default"
          }
      })
        , S = o.forwardRef( (e, t) => {
          let {className: s, variant: r, size: o, asChild: a=!1, ...n} = e
            , d = a ? k.g7 : "button";
          return (0,
          i.jsx)(d, {
              className: (0,
              l.cn)(C({
                  variant: r,
                  size: o,
                  className: s
              })),
              ref: t,
              ...n
          })
      }
      );
      S.displayName = "Button";
      var D = s(7648);
      let v = [{
          image: "/meme.svg",
          name: "Meme Analysis Model"
      }, {
          image: "/x.svg",
          name: "Twitter Activity "
      }, {
          image: "/token.svg",
          name: "Token  Sentiment"
      }, {
          image: "/bands.svg",
          name: "Bollinger Bands Model"
      }, {
          image: "/rsi.svg",
          name: "RSI Model"
      }, {
          image: "/wave.svg",
          name: "Elliott Wave Model"
      }, {
          image: "/macd.svg",
          name: "MACD Model"
      }, {
          image: "/airdrop.svg",
          name: "Airdrop Detection Model"
      }]
        , O = e => 0 - e;
      var b = () => {
          let e = (0,
          w.ac)({
              query: "(max-width: 768px)"
          })
            , t = (0,
          o.useRef)(null)
            , s = (0,
          f.Y)(t, {
              once: !0
          })
            , r = (0,
          o.useRef)(null)
            , a = (0,
          f.Y)(r, {
              once: !0
          })
            , n = (0,
          o.useRef)(null)
            , l = (0,
          f.Y)(n, {
              once: !0
          })
            , d = (0,
          o.useRef)(null)
            , c = (0,
          f.Y)(d, {
              once: !0
          })
            , x = (0,
          o.useRef)(null)
            , p = (0,
          f.Y)(x, {
              once: !0
          })
            , _ = (0,
          o.useRef)(null)
            , j = (0,
          o.useRef)(null);
          (0,
          f.Y)(_, {
              once: !0
          }),
          (0,
          f.Y)(j, {
              once: !0
          });
          let[g,B] = (0,
          o.useState)(!1);
          return (0,
          o.useEffect)( () => {
              let e = setTimeout( () => {
                  B(!0)
              }
              , 3e3);
              return () => clearTimeout(e)
          }
          , []),
          (0,
          i.jsx)("div", {
              className: "bg-white md:w-full   mb-10 mx-auto text-center",
              ref: t,
              children: (0,
              i.jsxs)(u.E.div, {
                  initial: {
                      opacity: 0,
                      visibility: "hidden"
                  },
                  animate: s ? {
                      opacity: 1,
                      visibility: "visible"
                  } : {},
                  className: "bg-white md:w-full mt-8 mb-8 p-4 md:p-8 mx-auto text-center box-grid",
                  children: [(0,
                  i.jsx)(u.E.div, {
                      initial: {
                          opacity: 0,
                          y: 100
                      },
                      animate: s ? {
                          opacity: 1,
                          y: 0
                      } : {},
                      transition: {
                          duration: .85,
                          delay: .4,
                          ease: h.mZ
                      },
                      className: "md:text-5xl text-4xl max-w-[697px] w-full mx-auto leading-tight sm:leading-normal font-semibold mt-4  items-center mb-7 sub-headings text-center not-italic",
                      children: "Train and use AI faster on Destra Network AI!"
                  }), (0,
                  i.jsxs)("div", {
                      className: "flex gap-2 mt-8 flex-col md:flex-row md:justify-evenly items-center md:ml-8 ",
                      children: [(0,
                      i.jsx)(u.E.div, {
                          initial: {
                              opacity: 0,
                              y: 160
                          },
                          animate: s ? {
                              opacity: 1,
                              y: 0
                          } : {},
                          transition: {
                              duration: 1,
                              delay: .5,
                              ease: h.mZ
                          },
                          className: "",
                          children: (0,
                          i.jsx)(y.default, {
                              src: m,
                              alt: "alt",
                              className: " w-full max-w-[600px] h-[510px] shrink-0"
                          })
                      }), (0,
                      i.jsxs)(u.E.div, {
                          initial: {
                              opacity: 0,
                              visibility: "hidden"
                          },
                          animate: a ? {
                              opacity: 1,
                              visibility: "visible"
                          } : {},
                          transition: {
                              duraction: 1,
                              delay: .6
                          },
                          className: "box-border rounded-3xl mt-4 md:mt-0 max-w-[850px] max-h-fit w-full mx-auto p-2 box-dots",
                          ref: r,
                          children: [(0,
                          i.jsxs)("div", {
                              className: "flex flex-col items-center md:items-start text-start mt-4 md:mt-0",
                              children: [(0,
                              i.jsx)(u.E.div, {
                                  initial: {
                                      opacity: 0,
                                      y: 90
                                  },
                                  animate: a ? {
                                      opacity: 1,
                                      y: 0
                                  } : {},
                                  transition: {
                                      duration: 1,
                                      delay: .7,
                                      ease: h.mZ
                                  },
                                  className: "text-[#171717] items-start md:text-2xl text-lg font-bold not-italic leading-[32px] md:leading-[36px] md:max-w-[659px] md:p-4 p-3 ",
                                  children: "Destra One Click AI (OCAI) Deployment enables access to exclusive AI models for the masses, trained at Destra Labs over years of historical data."
                              }), (0,
                              i.jsx)(u.E.div, {
                                  initial: {
                                      opacity: 0,
                                      y: 60
                                  },
                                  animate: a ? {
                                      opacity: 1,
                                      y: 0
                                  } : {},
                                  transition: {
                                      duration: 1,
                                      delay: .7,
                                      ease: h.YQ
                                  },
                                  className: "text-[#404040] items-start text-base md:text-lg font-medium leading-[24px] md:max-w-[561px] md:p-4 p-3 ",
                                  children: "OCAI particularly aims to simplify the process of deploying AI models on the Destra Decentralized GPU Network and use them in a few simple clicks."
                              })]
                          }), (0,
                          i.jsx)(u.E.div, {
                              initial: {
                                  opacity: 0,
                                  visibility: "hidden"
                              },
                              animate: c ? {
                                  opacity: 1,
                                  visibility: "visible"
                              } : {},
                              transition: {
                                  delay: .2,
                                  duration: .1
                              },
                              className: "rounded-3xl p-4 mr-2 mb-3 bg-[#F5F5F5]  shrink-0 max-w-[314px]  md:max-w-[610px] float-end  mx-auto w-full hidden md:block",
                              ref: d,
                              children: (0,
                              i.jsx)("div", {
                                  className: " md:max-w-[597px] max-w-[294px] shrink-0  justify-end gap-2 md:gap-3 content-center flex-wrap flex md:w-full items-center ",
                                  children: g && v.map( (e, t) => (0,
                                  i.jsxs)(u.E.div, {
                                      initial: {
                                          opacity: 0,
                                          x: 100
                                      },
                                      animate: c ? {
                                          opacity: 1,
                                          x: 0
                                      } : {},
                                      transition: {
                                          duration: 2,
                                          delay: O(.1 * t),
                                          ease: h.YQ
                                      },
                                      className: "flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] mx-[3px]",
                                      children: [(0,
                                      i.jsxs)(F, {
                                          className: "w-4 h-4",
                                          children: [(0,
                                          i.jsx)(U, {
                                              src: e.image
                                          }), (0,
                                          i.jsx)(G, {
                                              children: "CN"
                                          })]
                                      }), (0,
                                      i.jsx)("div", {
                                          className: "text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold",
                                          children: e.name
                                      })]
                                  }, t))
                              })
                          }), (0,
                          i.jsx)("div", {
                              className: " md:hidden rounded-3xl p-4 md:mr-2 md:mb-3 bg-[#F5F5F5] shrink-0  md:max-w-[610px] float-end  md:mx-auto w-full ",
                              ref: n,
                              children: (0,
                              i.jsx)("div", {
                                  className: " md:max-w-[597px] max-w-[294px] shrink-0  justify-end gap-2 md:gap-3 content-center flex-wrap flex md:w-full items-center",
                                  children: v.map( (e, t) => (0,
                                  i.jsxs)(u.E.div, {
                                      initial: {
                                          opacity: 0,
                                          y: 60
                                      },
                                      animate: l ? {
                                          opacity: 1,
                                          y: 0
                                      } : {},
                                      transition: {
                                          duration: .75,
                                          delay: O(-.1 * t),
                                          ease: h.YQ
                                      },
                                      className: "flex md:py-2 md:px-3 p-2 justify-center items-center md:gap-2 gap-1 rounded-2xl bg-[#fff] ",
                                      children: [(0,
                                      i.jsxs)(F, {
                                          className: "w-4 h-4",
                                          children: [(0,
                                          i.jsx)(U, {
                                              src: e.image
                                          }), (0,
                                          i.jsx)(G, {
                                              children: "CN"
                                          })]
                                      }), (0,
                                      i.jsx)("div", {
                                          className: "text-[#262626] md:text-sm text-[12px] not-italic leading-normal  font-bold",
                                          children: e.name
                                      })]
                                  }, t))
                              })
                          })]
                      })]
                  }), (0,
                  i.jsx)(u.E.div, {
                      initial: {
                          opacity: 0,
                          visibility: "hidden"
                      },
                      animate: c ? {
                          opacity: 1,
                          visibility: "visible"
                      } : {},
                      transition: {
                          delay: .2,
                          duration: .1
                      },
                      ref: d,
                      className: "Incentive ml-6 rounded-b-3xl w-full max-w-[1346px] mb-8  h-[258px]  mt-24 items-center justify-center md:block hidden  text-white ",
                      children: (0,
                      i.jsxs)(u.E.div, {
                          className: "flex max-w-[717px] ml-14 pt-10 flex-col items-start gap-[21px]",
                          initial: {
                              opacity: 0,
                              y: 90
                          },
                          animate: c ? {
                              opacity: 1,
                              y: 0
                          } : {},
                          transition: {
                              duration: 1,
                              delay: .7,
                              ease: h.mZ
                          },
                          children: [(0,
                          i.jsxs)("div", {
                              className: "flex flex-col items-start justify-start gap-3",
                              children: [(0,
                              i.jsx)("h2", {
                                  className: "text-4xl not-italic font-bold leading-normal ",
                                  children: "Destra Incentive Program"
                              }), (0,
                              i.jsx)("p", {
                                  className: "text-lg font-medium leading-normal self-stretch not-italic",
                                  children: "Early Adopters program for a chance at a $100,000 reward pool"
                              })]
                          })]
                      })
                  }), (0,
                  i.jsx)(u.E.div, {
                      initial: {
                          opacity: 0,
                          visibility: "hidden"
                      },
                      animate: p ? {
                          opacity: 1,
                          visibility: "visible"
                      } : {},
                      transition: {
                          delay: .2,
                          duration: .1
                      },
                      ref: x,
                      className: "IncentiveMobile max-w-[328px] mb-24 mt-24 w-full h-[500px] items-center justify-center md:hidden block text-white mx-auto",
                      children: (0,
                      i.jsxs)(u.E.div, {
                          className: "flex max-w-[328px] pt-10 flex-col items-center justify-center gap-[21px]",
                          initial: {
                              opacity: 0,
                              y: 90
                          },
                          animate: p ? {
                              opacity: 1,
                              y: 0
                          } : {},
                          transition: {
                              duration: 1,
                              delay: .5,
                              ease: h.mZ
                          },
                          children: [(0,
                          i.jsxs)("div", {
                              className: "flex flex-col items-center justify-center gap-3",
                              children: [(0,
                              i.jsx)("h2", {
                                  className: "text-3xl not-italic font-bold leading-normal ",
                                  children: "Destra Incentive Program"
                              }), (0,
                              i.jsx)("p", {
                                  className: "text-base font-semibold leading-normal not-italic text-balance",
                                  children: "Early Adopters program for a chance at a $100,000 reward pool"
                              })]
                          })]
                      })
                  })]
              })
          })
      }
        , I = s(5922)
        , N = {
          src: "/_next/static/media/D-Rigs.a7a5b02c.svg",
          height: 260,
          width: 644,
          blurWidth: 0,
          blurHeight: 0
      }
        , R = {
          src: "/_next/static/media/OneClickAniamation.748b32e1.svg",
          height: 200,
          width: 414,
          blurWidth: 0,
          blurHeight: 0
      }
        , H = {
          src: "/_next/static/media/DestraExclusiveAIModels.7cc320b9.svg",
          height: 248,
          width: 418,
          blurWidth: 0,
          blurHeight: 0
      }
        , L = {
          src: "/_next/static/media/ImmerseinAILLMTraining.e22a1760.svg",
          height: 203,
          width: 419,
          blurWidth: 0,
          blurHeight: 0
      }
        , V = {
          src: "/_next/static/media/Destra_Nodes_Looping.81287a2e.svg",
          height: 263,
          width: 644,
          blurWidth: 0,
          blurHeight: 0
      }
        , M = e => {
          let {children: t, className: s, shimmerWidth: r=100} = e;
          return (0,
          i.jsx)("p", {
              style: {
                  "--shimmer-width": "".concat(r, "px")
              },
              className: (0,
              l.cn)("mx-auto max-w-md  dark:text-neutral-400/70", "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]", "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80", s),
              children: t
          })
      }
      ;
      function E(e) {
          let {Shinytext: t} = e;
          return (0,
          i.jsx)("div", {
              className: "z-10 flex min-h-[2rem]  items-center justify-center",
              children: (0,
              i.jsx)("div", {
                  className: (0,
                  l.cn)("group rounded-full border border-[#404040] bg-[#171717] text-base text-[#D4D4D4] transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"),
                  children: (0,
                  i.jsx)(M, {
                      className: "inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400",
                      children: (0,
                      i.jsx)("span", {
                          children: t
                      })
                  })
              })
          })
      }
      var Z = s(9467)
        , Y = s(2660)
        , A = s(6858);
      let Q = o.createContext(null);
      function z() {
          let e = o.useContext(Q);
          if (!e)
              throw Error("useCarousel must be used within a <Carousel />");
          return e
      }
      let W = o.forwardRef( (e, t) => {
          let {orientation: s="horizontal", opts: r, setApi: a, plugins: n, className: d, children: c, ...x} = e
            , [p,f] = (0,
          Z.Z)({
              ...r,
              axis: "horizontal" === s ? "x" : "y"
          }, n)
            , [u,h] = o.useState(!1)
            , [_,j] = o.useState(!1)
            , g = o.useCallback(e => {
              e && (h(e.canScrollPrev()),
              j(e.canScrollNext()))
          }
          , [])
            , y = o.useCallback( () => {
              null == f || f.scrollPrev()
          }
          , [f])
            , m = o.useCallback( () => {
              null == f || f.scrollNext()
          }
          , [f])
            , B = o.useCallback(e => {
              "ArrowLeft" === e.key ? (e.preventDefault(),
              y()) : "ArrowRight" === e.key && (e.preventDefault(),
              m())
          }
          , [y, m]);
          return o.useEffect( () => {
              f && a && a(f)
          }
          , [f, a]),
          o.useEffect( () => {
              if (f)
                  return g(f),
                  f.on("reInit", g),
                  f.on("select", g),
                  () => {
                      null == f || f.off("select", g)
                  }
          }
          , [f, g]),
          (0,
          i.jsx)(Q.Provider, {
              value: {
                  carouselRef: p,
                  api: f,
                  opts: r,
                  orientation: s || ((null == r ? void 0 : r.axis) === "y" ? "vertical" : "horizontal"),
                  scrollPrev: y,
                  scrollNext: m,
                  canScrollPrev: u,
                  canScrollNext: _
              },
              children: (0,
              i.jsx)("div", {
                  ref: t,
                  onKeyDownCapture: B,
                  className: (0,
                  l.cn)("relative", d),
                  role: "region",
                  "aria-roledescription": "carousel",
                  ...x,
                  children: c
              })
          })
      }
      );
      W.displayName = "Carousel";
      let P = o.forwardRef( (e, t) => {
          let {className: s, ...r} = e
            , {carouselRef: o, orientation: a} = z();
          return (0,
          i.jsx)("div", {
              ref: o,
              className: "overflow-hidden",
              children: (0,
              i.jsx)("div", {
                  ref: t,
                  className: (0,
                  l.cn)("flex", "horizontal" === a ? "-ml-4" : "-mt-4 flex-col", s),
                  ...r
              })
          })
      }
      );
      P.displayName = "CarouselContent";
      let T = o.forwardRef( (e, t) => {
          let {className: s, ...r} = e
            , {orientation: o} = z();
          return (0,
          i.jsx)("div", {
              ref: t,
              role: "group",
              "aria-roledescription": "slide",
              className: (0,
              l.cn)("min-w-0 shrink-0 grow-0 basis-full", "horizontal" === o ? "pl-4" : "pt-4", s),
              ...r
          })
      }
      );
      function q() {
          (0,
          o.useRef)(null);
          let e = (0,
          o.useRef)(null)
            , t = (0,
          f.Y)(e, {
              once: !0
          })
            , s = (0,
          o.useRef)(null)
            , r = (0,
          f.Y)(s, {
              once: !0
          })
            , a = (0,
          o.useRef)(null)
            , n = (0,
          f.Y)(a, {
              once: !0
          })
            , l = (0,
          o.useRef)(null)
            , d = (0,
          f.Y)(l, {
              once: !0
          })
            , c = (0,
          o.useRef)(null)
            , x = (0,
          f.Y)(c, {
              once: !0
          })
            , p = (0,
          o.useRef)(null)
            , _ = (0,
          f.Y)(p, {
              once: !0
          })
            , j = (0,
          o.useRef)(null)
            , g = (0,
          f.Y)(j, {
              once: !0
          })
            , m = (0,
          o.useRef)(null)
            , B = (0,
          f.Y)(m, {
              once: !0
          })
            , F = (0,
          o.useRef)(null)
            , U = (0,
          f.Y)(F, {
              once: !0
          })
            , G = (0,
          o.useRef)(null)
            , k = (0,
          f.Y)(G, {
              once: !0
          })
            , C = (0,
          o.useRef)(null)
            , S = (0,
          f.Y)(C, {
              once: !0
          })
            , D = (0,
          o.useRef)(null)
            , v = (0,
          f.Y)(D, {
              once: !0
          })
            , O = (0,
          w.ac)({
              query: "(max-width: 768px)"
          })
            , b = e => 3 * e
            , I = [{
              img: "/WebHosting.svg",
              title: (0,
              i.jsx)(i.Fragment, {
                  children: (0,
                  i.jsx)("span", {
                      className: " self-stretch text-white md:text-xl text-lg not-italic   font-semibold leading-8",
                      children: "Web Hosting"
                  })
              }),
              desc: "decentralized web hosting, powered by Destra Decentralized DNS.",
              refstate: e,
              mrefstate: l,
              textrefstate: j,
              mtextrefstate: G
          }, {
              img: "/FileStorage.svg",
              title: (0,
              i.jsx)(i.Fragment, {
                  children: (0,
                  i.jsx)("span", {
                      className: " self-stretch text-white md:text-xl text-lg not-italic   font-semibold leading-8",
                      children: "File Storage"
                  })
              }),
              desc: "Decentralized file storage network, with a sustainable and viable reward mechanisms.",
              refstate: s,
              mrefstate: c,
              textrefstate: m,
              mtextrefstate: C
          }, {
              img: "/NFTStorage.svg",
              title: (0,
              i.jsx)(i.Fragment, {
                  children: (0,
                  i.jsx)("span", {
                      className: " self-stretch text-white md:text-xl text-lg not-italic   font-semibold leading-8",
                      children: "NFT Storage"
                  })
              }),
              desc: "A secure and decentralized storage solution for NFT projects.",
              refstate: a,
              mrefstate: p,
              textrefstate: F,
              mtextrefstate: D
          }];
          return (0,
          i.jsxs)("div", {
              children: [(0,
              i.jsx)("div", {
                  className: "hidden lg:block max-w-[1320px]  w-full justify-center items-center gap-8 ",
                  children: (0,
                  i.jsx)(W, {
                      children: (0,
                      i.jsx)(P, {
                          children: I.map( (e, s) => (0,
                          i.jsx)(T, {
                              className: "basis-1/1 md:basis-1/2 lg:basis-1/3",
                              children: (0,
                              i.jsxs)(u.E.div, {
                                  ref: e.refstate,
                                  initial: {
                                      opacity: 0,
                                      y: 150
                                  },
                                  animate: [{
                                      index: 0,
                                      condition: t
                                  }, {
                                      index: 1,
                                      condition: r
                                  }, {
                                      index: 2,
                                      condition: n
                                  }].some(e => e.index === s && e.condition) ? {
                                      opacity: 1,
                                      y: 0
                                  } : {},
                                  transition: {
                                      duration: 1,
                                      delay: b(.1 * s),
                                      ease: h.YQ
                                  },
                                  className: "flex flex-col  items-start  gap-y-8 box-grad p-5",
                                  children: [(0,
                                  i.jsx)(y.default, {
                                      src: e.img,
                                      alt: "alt",
                                      width: 200,
                                      height: 200,
                                      className: "w-full"
                                  }), (0,
                                  i.jsxs)(u.E.div, {
                                      initial: {
                                          opacity: 0,
                                          y: 40
                                      },
                                      animate: [{
                                          index: 0,
                                          condition: g
                                      }, {
                                          index: 1,
                                          condition: B
                                      }, {
                                          index: 2,
                                          condition: U
                                      }].some(e => e.index === s && e.condition) ? {
                                          opacity: 1,
                                          y: 0
                                      } : {},
                                      transition: {
                                          duration: .5,
                                          delay: b(.1 * s),
                                          ease: h.YQ
                                      },
                                      className: "px-2 flex  flex-col gap-y-2  items-start",
                                      ref: e.textrefstate,
                                      children: [(0,
                                      i.jsx)("h2", {
                                          className: "text-3xl font-semibold text-[#FCFCFC]",
                                          children: e.title
                                      }), (0,
                                      i.jsx)("p", {
                                          className: " text-[#D4D4D4]  text-sm font-normal leading-5 lowercase  items-start self-start ",
                                          children: e.desc
                                      })]
                                  })]
                              })
                          }, s))
                      })
                  })
              }), (0,
              i.jsx)("div", {
                  className: "lg:hidden flex flex-wrap justify-center  ",
                  children: I.map( (e, t) => (0,
                  i.jsx)(u.E.div, {
                      ref: e.mrefstate,
                      initial: {
                          opacity: 0,
                          y: 120
                      },
                      animate: [{
                          index: 0,
                          condition: d
                      }, {
                          index: 1,
                          condition: x
                      }, {
                          index: 2,
                          condition: _
                      }].some(e => e.index === t && e.condition) ? {
                          opacity: 1,
                          y: 0
                      } : {},
                      transition: O ? {
                          duration: .75,
                          delay: .1,
                          ease: h.YQ
                      } : {
                          duration: 1,
                          delay: b(.1 * t),
                          ease: h.YQ
                      },
                      className: "w-full md:w-1/2 p-2 py-5",
                      children: (0,
                      i.jsxs)("div", {
                          className: "flex flex-col items-center justify-center gap-y-10 box-grad p-6",
                          children: [(0,
                          i.jsx)(y.default, {
                              src: e.img,
                              alt: "alt",
                              width: 200,
                              height: 200,
                              className: "w-full"
                          }), (0,
                          i.jsxs)(u.E.div, {
                              initial: {
                                  opacity: 0,
                                  y: 50
                              },
                              animate: [{
                                  index: 0,
                                  condition: k
                              }, {
                                  index: 1,
                                  condition: S
                              }, {
                                  index: 2,
                                  condition: v
                              }].some(e => e.index === t && e.condition) ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: O ? {
                                  duration: .5,
                                  delay: .2,
                                  ease: h.YQ
                              } : {
                                  duration: .85,
                                  delay: b(.1 * t),
                                  ease: h.YQ
                              },
                              className: "px-2 flex flex-col gap-y-2  items-start",
                              ref: e.mtextrefstate,
                              children: [(0,
                              i.jsx)("h2", {
                                  className: "text-3xl text-[#FCFCFC] font-semibold",
                                  children: e.title
                              }), (0,
                              i.jsx)("p", {
                                  className: "text-base text-[#D4D4D4] items-start  ",
                                  children: e.desc
                              })]
                          })]
                      })
                  }, t))
              })]
          })
      }
      T.displayName = "CarouselItem",
      o.forwardRef( (e, t) => {
          let {className: s, variant: r="outline", size: o="icon", ...a} = e
            , {orientation: n, scrollPrev: d, canScrollPrev: c} = z();
          return (0,
          i.jsxs)(S, {
              ref: t,
              variant: r,
              size: o,
              className: (0,
              l.cn)("absolute  h-8 w-8 rounded-full", "horizontal" === n ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", s),
              disabled: !c,
              onClick: d,
              ...a,
              children: [(0,
              i.jsx)(Y.Z, {
                  className: "h-4 w-4"
              }), (0,
              i.jsx)("span", {
                  className: "sr-only",
                  children: "Previous slide"
              })]
          })
      }
      ).displayName = "CarouselPrevious",
      o.forwardRef( (e, t) => {
          let {className: s, variant: r="outline", size: o="icon", ...a} = e
            , {orientation: n, scrollNext: d, canScrollNext: c} = z();
          return (0,
          i.jsxs)(S, {
              ref: t,
              variant: r,
              size: o,
              className: (0,
              l.cn)("absolute h-8 w-8 rounded-full", "horizontal" === n ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", s),
              disabled: !c,
              onClick: d,
              ...a,
              children: [(0,
              i.jsx)(A.Z, {
                  className: "h-4 w-4"
              }), (0,
              i.jsx)("span", {
                  className: "sr-only",
                  children: "Next slide"
              })]
          })
      }
      ).displayName = "CarouselNext";
      var K = () => (0,
      i.jsx)("svg", {
          width: "644",
          height: "263",
          viewBox: "0 0 644 263",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "nodessvg pb-2 w-full h-fit",
          children: (0,
          i.jsx)("g", {
              id: "Destra",
              children: (0,
              i.jsxs)("g", {
                  id: "Group 106",
                  children: [(0,
                  i.jsxs)("g", {
                      id: "Vector",
                      children: [(0,
                      i.jsx)("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M566.516 169.65V180.99C580.749 181.382 590 170.158 590 157.995C590 148.921 585.032 140.517 576.298 136.551C576.298 135.93 576.257 135.625 575.717 135.625H574.28C574.07 135.627 573.99 135.662 573.94 135.799C573.732 135.743 573.539 135.69 573.357 135.64C572.402 135.379 571.718 135.192 570.581 135H548V155.051H559.144V146.374H568.979C568.979 146.374 579.082 146.862 579.082 157.995C579.082 169.65 568.91 170.175 566.516 169.65ZM575.021 138.391L576.17 148.125C574.051 146.282 571.578 145.35 568.754 145.166L565.043 141.209V140.713L573.586 137.632C573.586 138.068 574.01 138.391 574.222 138.391H575.021ZM567.149 145.166L564.162 142.004H562.587C562.285 142.004 561.97 141.72 561.931 141.382L556.649 143.486V144.113L558.712 145.177L567.149 145.166ZM558.4 136.232H549.525L553.176 141.609H555.773C556.252 141.609 556.636 141.919 556.636 142.201L561.794 140.165L558.4 136.232ZM559.961 136.229L570.581 136.201L572.695 136.707L565.043 139.47C565.043 138.974 564.732 138.829 564.269 138.805H562.531C562.373 138.823 562.311 138.847 562.281 138.938L559.961 136.229ZM549.005 152.02V137.574L552.247 142.309V145.812L549.005 152.02ZM553.404 146.093H556.073C556.249 146.093 556.649 145.797 556.649 145.441L557.988 146.142V153.885H549.369L553.404 146.093ZM581.674 146.239L577.516 148.921L576.17 138.134L576.361 137.865C578.225 138.471 579.283 139.072 581.212 140.782L581.674 146.239Z",
                          fill: "white"
                      }), (0,
                      i.jsx)("path", {
                          d: "M555.365 157.617H551.804C551.305 157.617 550.9 158.028 550.9 158.536V162.163C550.9 162.671 551.305 163.083 551.804 163.083H555.57L557.486 165.02V170.406L555.658 172.326C555.572 172.326 555.565 172.271 555.245 172.271H549.4C548.901 172.271 548.497 172.683 548.497 173.191V179.172C548.497 179.68 548.901 180.092 549.4 180.092H555.245C555.744 180.092 556.149 179.68 556.149 179.172V173.513L558.389 171.198H563.597C564.096 171.198 564.5 170.786 564.5 170.278V164.941C564.5 164.433 564.212 164.057 563.643 164.057H558.196L556.268 162.118V158.536C556.268 158.028 555.864 157.617 555.365 157.617Z",
                          fill: "white"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Group 68",
                      children: [(0,
                      i.jsx)("circle", {
                          id: "Ellipse 3971",
                          cx: "286",
                          cy: "114",
                          r: "3",
                          fill: "#676767"
                      }), (0,
                      i.jsx)("circle", {
                          id: "Ellipse 3972",
                          cx: "286",
                          cy: "114",
                          r: "4.5",
                          stroke: "#8D8D8D"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Group 75",
                      children: [(0,
                      i.jsx)("circle", {
                          id: "Ellipse 3971_2",
                          cx: "453",
                          cy: "158",
                          r: "3",
                          fill: "#FF3838"
                      }), (0,
                      i.jsx)("circle", {
                          id: "Ellipse 3972_2",
                          cx: "453",
                          cy: "158",
                          r: "4.5",
                          stroke: "#8D8D8D"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Group 69",
                      children: [(0,
                      i.jsx)("circle", {
                          id: "Ellipse 3971_3",
                          cx: "177",
                          cy: "90",
                          r: "3",
                          fill: "#676767"
                      }), (0,
                      i.jsx)("circle", {
                          id: "Ellipse 3972_3",
                          cx: "177",
                          cy: "90",
                          r: "4.5",
                          stroke: "#8D8D8D"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Group 70",
                      children: [(0,
                      i.jsx)("circle", {
                          id: "Ellipse 3971_4",
                          cx: "119",
                          cy: "148",
                          r: "3",
                          fill: "#676767"
                      }), (0,
                      i.jsx)("circle", {
                          id: "Ellipse 3972_4",
                          cx: "119",
                          cy: "148",
                          r: "4.5",
                          stroke: "#8D8D8D"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Group 71",
                      opacity: "0.4",
                      children: [(0,
                      i.jsx)("circle", {
                          id: "Ellipse 3971_5",
                          cx: "286",
                          cy: "167",
                          r: "3",
                          fill: "#D4D4D4"
                      }), (0,
                      i.jsx)("circle", {
                          id: "Ellipse 3972_5",
                          cx: "286",
                          cy: "167",
                          r: "4.5",
                          stroke: "#8D8D8D"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Group 72",
                      opacity: "0.2",
                      children: [(0,
                      i.jsx)("circle", {
                          id: "Ellipse 3971_6",
                          cx: "202",
                          cy: "220",
                          r: "3",
                          fill: "#D4D4D4"
                      }), (0,
                      i.jsx)("circle", {
                          id: "Ellipse 3972_6",
                          cx: "202",
                          cy: "220",
                          r: "4.5",
                          stroke: "#8D8D8D"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Group 73",
                      opacity: "0.2",
                      children: [(0,
                      i.jsx)("circle", {
                          id: "Ellipse 3971_7",
                          cx: "453",
                          cy: "73",
                          r: "3",
                          fill: "#D4D4D4"
                      }), (0,
                      i.jsx)("circle", {
                          id: "Ellipse 3972_7",
                          cx: "453",
                          cy: "73",
                          r: "4.5",
                          stroke: "#8D8D8D"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Group 74",
                      opacity: "0.2",
                      children: [(0,
                      i.jsx)("circle", {
                          id: "Ellipse 3971_8",
                          cx: "453",
                          cy: "114",
                          r: "3",
                          fill: "#D4D4D4"
                      }), (0,
                      i.jsx)("circle", {
                          id: "Ellipse 3972_8",
                          cx: "453",
                          cy: "114",
                          r: "4.5",
                          stroke: "#8D8D8D"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Group 76",
                      opacity: "0.2",
                      children: [(0,
                      i.jsx)("circle", {
                          id: "Ellipse 3971_9",
                          cx: "526",
                          cy: "158",
                          r: "3",
                          fill: "#D4D4D4"
                      }), (0,
                      i.jsx)("circle", {
                          id: "Ellipse 3972_9",
                          cx: "526",
                          cy: "158",
                          r: "4.5",
                          stroke: "#8D8D8D"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Group 77",
                      opacity: "0.2",
                      children: [(0,
                      i.jsx)("circle", {
                          id: "Ellipse 3971_10",
                          cx: "286",
                          cy: "32",
                          r: "3",
                          fill: "#D4D4D4"
                      }), (0,
                      i.jsx)("circle", {
                          id: "Ellipse 3972_10",
                          cx: "286",
                          cy: "32",
                          r: "4.5",
                          stroke: "#8D8D8D"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Group 78",
                      opacity: "0.2",
                      children: [(0,
                      i.jsx)("circle", {
                          id: "Ellipse 3971_11",
                          cx: "119",
                          cy: "33",
                          r: "3",
                          fill: "#D4D4D4"
                      }), (0,
                      i.jsx)("circle", {
                          id: "Ellipse 3972_11",
                          cx: "119",
                          cy: "33",
                          r: "4.5",
                          stroke: "#8D8D8D"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Group 79",
                      opacity: "0.2",
                      children: [(0,
                      i.jsx)("circle", {
                          id: "Ellipse 3971_12",
                          cx: "588",
                          cy: "73",
                          r: "3",
                          fill: "#D4D4D4"
                      }), (0,
                      i.jsx)("circle", {
                          id: "Ellipse 3972_12",
                          cx: "588",
                          cy: "73",
                          r: "4.5",
                          stroke: "#8D8D8D"
                      })]
                  }), (0,
                  i.jsx)("path", {
                      id: "Background",
                      d: "M119 32L200.5 113.5H526V190M286 32H453V114M286 32H202.5M286 32V166.5H202.5V217.5M592 72.75H389.5M453 220H119V126H56M93 210V174L188 79H356.5V158.5H552.5",
                      stroke: "#DADADA",
                      "stroke-opacity": "0.2",
                      "stroke-width": "2"
                  }), (0,
                  i.jsx)("path", {
                      className: "glow",
                      id: "highlightnodes",
                      d: "M119 32L200.5 113.5H526V190M286 32H453V114M286 32H202.5M286 32V166.5H202.5V217.5M592 72.75H389.5M453 220H119V126H56M93 210V174L188 79H356.5V158.5H552.5",
                      stroke: "#FF3838",
                      "stroke-width": "2"
                  })]
              })
          })
      })
        , $ = () => {
          let {theme: e} = (0,
          I.F)()
            , [t,s] = (0,
          o.useState)("#FCFCFC")
            , r = (0,
          o.useRef)(null)
            , a = (0,
          f.Y)(r, {
              once: !0
          })
            , n = (0,
          o.useRef)(null)
            , l = (0,
          f.Y)(n, {
              once: !0
          })
            , d = (0,
          o.useRef)(null);
          (0,
          f.Y)(d, {
              once: !0
          });
          let c = (0,
          o.useRef)(null)
            , x = (0,
          f.Y)(c, {
              once: !0
          })
            , p = (0,
          o.useRef)(null)
            , _ = (0,
          f.Y)(p, {
              once: !0
          })
            , j = (0,
          o.useRef)(null)
            , g = (0,
          f.Y)(j, {
              once: !0
          })
            , m = (0,
          o.useRef)(null)
            , B = (0,
          f.Y)(m, {
              once: !0
          })
            , F = (0,
          o.useRef)(null)
            , U = (0,
          f.Y)(F, {
              once: !0
          })
            , G = (0,
          o.useRef)(null)
            , k = (0,
          f.Y)(G, {
              once: !0
          })
            , C = (0,
          o.useRef)(null)
            , S = (0,
          f.Y)(C, {
              once: !0
          })
            , D = (0,
          o.useRef)(null)
            , v = (0,
          f.Y)(D, {
              once: !0
          })
            , O = (0,
          o.useRef)(null)
            , b = (0,
          f.Y)(O, {
              once: !0
          })
            , M = (0,
          o.useRef)(null)
            , Z = (0,
          f.Y)(M, {
              once: !0
          });
          (0,
          o.useEffect)( () => {
              s("dark" === e ? "#FFF" : "#FCFCFC")
          }
          , [e]);
          let Y = (0,
          w.ac)({
              query: "(max-width: 768px)"
          });
          return (0,
          i.jsxs)(i.Fragment, {
              children: [(0,
              i.jsxs)("div", {
                  children: [(0,
                  i.jsx)(u.E.div, {
                      initial: {
                          opacity: 0,
                          y: 90
                      },
                      animate: a ? {
                          opacity: 1,
                          y: 0
                      } : {},
                      transition: {
                          duration: 1,
                          ease: h.mZ
                      },
                      ref: r,
                      children: (0,
                      i.jsx)(E, {
                          Shinytext: "✨  AI Simplified  \uD83E\uDD16"
                      })
                  }), (0,
                  i.jsx)(u.E.div, {
                      initial: {
                          opacity: 0,
                          y: 90
                      },
                      animate: a ? {
                          opacity: 1,
                          y: 0
                      } : {},
                      transition: {
                          duration: 1,
                          delay: .1,
                          ease: h.mZ
                      },
                      className: "header-text text-center md:text-5xl text-4xl font-semibold flex-wrap mx-auto max-w-[450px] pt-8 pb-10 leading-tight sm:leading-normal px-8 sm:px-0",
                      children: "Unleash the power of one click AI"
                  })]
              }), (0,
              i.jsxs)("div", {
                  className: "relative flex flex-col max-w-screen-2xl mx-auto w-11/12 items-center justify-center overflow-hidden bg-black ",
                  children: [(0,
                  i.jsx)("div", {
                      className: "flex flex-col items-center justify-center gap-y-14 max-w-screen-2xl mx-auto",
                      children: (0,
                      i.jsxs)("div", {
                          className: "grid w-11/12 grid-cols-1 md:grid-cols-6 gap-x-10 gap-y-12 md:w-full overflow-hidden",
                          children: [(0,
                          i.jsxs)(u.E.div, {
                              initial: {
                                  opacity: 0,
                                  y: 140
                              },
                              animate: l ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: Y ? {
                                  duration: .75,
                                  ease: h.YQ
                              } : {
                                  duration: 1,
                                  ease: h.YQ
                              },
                              className: "col-span-3 md:col-span-2  border-card box-grad w-full py-4 flex flex-col gap-y-2",
                              ref: n,
                              children: [(0,
                              i.jsx)(y.default, {
                                  src: L,
                                  alt: "alt",
                                  className: "py-2 w-full h-60"
                              }), (0,
                              i.jsxs)(u.E.div, {
                                  initial: Y ? {
                                      opacity: 0,
                                      y: 60
                                  } : {
                                      opacity: 0,
                                      y: 30
                                  },
                                  animate: k ? {
                                      opacity: 1,
                                      y: 0
                                  } : {},
                                  ref: G,
                                  transition: Y ? {
                                      duration: .5,
                                      delay: .1,
                                      ease: h.YQ
                                  } : {
                                      duration: .75,
                                      delay: .3,
                                      ease: h.YQ
                                  },
                                  className: "w-5/6 mx-auto flex flex-col gap-y-2",
                                  children: [(0,
                                  i.jsx)("h6", {
                                      className: "text-[#FCFCFC]  md:text-xl not-italic leading-8 font-semibold",
                                      children: "Immerse in AI/LLM Training"
                                  }), (0,
                                  i.jsx)("p", {
                                      className: "text-[#D4D4D4] text-sm not-italic font-normal leading-5",
                                      children: "Unlock the full potential of AI with our advanced training platforms."
                                  })]
                              })]
                          }), (0,
                          i.jsxs)(u.E.div, {
                              initial: {
                                  opacity: 0,
                                  y: 140
                              },
                              animate: _ ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: Y ? {
                                  duration: .75,
                                  delay: .1,
                                  ease: h.YQ
                              } : {
                                  duration: 1,
                                  delay: .3,
                                  ease: h.YQ
                              },
                              ref: p,
                              className: "col-span-3 md:col-span-2  box-grad border-card w-full py-4 flex flex-col gap-y-2",
                              children: [(0,
                              i.jsx)(y.default, {
                                  src: H,
                                  alt: "alt",
                                  className: "py-2 w-full md:h-60 "
                              }), (0,
                              i.jsxs)(u.E.div, {
                                  initial: Y ? {
                                      opacity: 0,
                                      y: 60
                                  } : {
                                      opacity: 0,
                                      y: 30
                                  },
                                  animate: S ? {
                                      opacity: 1,
                                      y: 0
                                  } : {},
                                  transition: Y ? {
                                      duration: .5,
                                      delay: .1,
                                      ease: h.YQ
                                  } : {
                                      duration: .75,
                                      delay: .6,
                                      ease: h.YQ
                                  },
                                  ref: C,
                                  className: "w-5/6 mx-auto flex flex-col gap-y-2",
                                  children: [(0,
                                  i.jsx)("h6", {
                                      className: "text-[#FCFCFC]  md:text-xl not-italic leading-8 font-semibold",
                                      children: "Destra Exclusive AI Models"
                                  }), (0,
                                  i.jsx)("p", {
                                      className: "text-[#D4D4D4] text-sm not-italic font-normal leading-5",
                                      children: "Harness the power of AI with our proprietary, cutting-edge models."
                                  })]
                              })]
                          }), (0,
                          i.jsxs)(u.E.div, {
                              initial: {
                                  opacity: 0,
                                  y: 140
                              },
                              animate: g ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: Y ? {
                                  duration: .75,
                                  delay: .1,
                                  ease: h.YQ
                              } : {
                                  duration: 1,
                                  delay: .5,
                                  ease: h.YQ
                              },
                              ref: j,
                              className: "col-span-3 md:col-span-2  box-grad border-card w-full py-4 flex flex-col gap-y-2",
                              children: [(0,
                              i.jsx)(y.default, {
                                  src: R,
                                  alt: "alt",
                                  className: "py-2 px-4 w-full h-60"
                              }), (0,
                              i.jsxs)(u.E.div, {
                                  initial: Y ? {
                                      opacity: 0,
                                      y: 60
                                  } : {
                                      opacity: 0,
                                      y: 50
                                  },
                                  animate: v ? {
                                      opacity: 1,
                                      y: 0
                                  } : {},
                                  transition: Y ? {
                                      duration: .5,
                                      delay: .1,
                                      ease: h.YQ
                                  } : {
                                      duration: .75,
                                      delay: .9,
                                      ease: h.YQ
                                  },
                                  ref: D,
                                  className: "w-5/6 mx-auto flex flex-col gap-y-2",
                                  children: [(0,
                                  i.jsx)("h6", {
                                      className: "text-[#FCFCFC]  md:text-xl not-italic leading-8 font-semibold",
                                      children: "One-Click AI Deployment"
                                  }), (0,
                                  i.jsx)("p", {
                                      className: "text-[#D4D4D4] text-sm not-italic font-normal leading-5",
                                      children: "Deploy AI solutions effortlessly with our intuitive one-click system."
                                  })]
                              })]
                          }), (0,
                          i.jsxs)(u.E.div, {
                              initial: {
                                  opacity: 0,
                                  y: 140
                              },
                              animate: B ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: Y ? {
                                  duration: .75,
                                  delay: .1,
                                  ease: h.YQ
                              } : {
                                  duration: 1,
                                  delay: .5,
                                  ease: h.YQ
                              },
                              ref: m,
                              className: "col-span-3  box-grad border-card w-full py-4 flex flex-col-reverse md:flex-col gap-y-2 overflow-hidden",
                              children: [(0,
                              i.jsxs)(u.E.div, {
                                  initial: Y ? {
                                      opacity: 0,
                                      y: 60
                                  } : {
                                      opacity: 0,
                                      y: 50
                                  },
                                  animate: b ? {
                                      opacity: 1,
                                      y: 0
                                  } : {},
                                  transition: Y ? {
                                      duration: .5,
                                      delay: .1,
                                      ease: h.YQ
                                  } : {
                                      duration: .75,
                                      delay: 1.2,
                                      ease: h.YQ
                                  },
                                  ref: O,
                                  className: "w-5/6 mx-auto md:text-center flex flex-col md:items-center gap-y-2",
                                  children: [(0,
                                  i.jsx)("h6", {
                                      className: "text-[#FCFCFC]  md:text-xl not-italic leading-8 font-semibold",
                                      children: "D- Rigs"
                                  }), (0,
                                  i.jsx)("p", {
                                      className: "text-[#D4D4D4] text-sm not-italic font-normal leading-5 md:w-1/2",
                                      children: "Enhance performance and efficiency using our innovative D-Rings."
                                  })]
                              }), (0,
                              i.jsx)("div", {
                                  className: "w-full md:h-72",
                                  children: (0,
                                  i.jsx)(y.default, {
                                      src: N,
                                      alt: "alt",
                                      className: "pb-2 w-full h-fit"
                                  })
                              })]
                          }), (0,
                          i.jsxs)(u.E.div, {
                              initial: {
                                  opacity: 0,
                                  y: 140
                              },
                              animate: U ? {
                                  opacity: 1,
                                  y: 0
                              } : {
                                  opacity: 0,
                                  y: 145
                              },
                              transition: Y ? {
                                  duration: .75,
                                  delay: .1,
                                  ease: h.YQ
                              } : {
                                  duration: 1,
                                  delay: .5,
                                  ease: h.YQ
                              },
                              ref: F,
                              className: "col-span-3 box-grad border-card w-full py-4 flex flex-col-reverse md:flex-col gap-y-2 overflow-hidden",
                              children: [(0,
                              i.jsxs)(u.E.div, {
                                  initial: Y ? {
                                      opacity: 0,
                                      y: 60
                                  } : {
                                      opacity: 0,
                                      y: 50
                                  },
                                  animate: Z ? {
                                      opacity: 1,
                                      y: 0
                                  } : {},
                                  transition: Y ? {
                                      duration: .5,
                                      delay: .1,
                                      ease: h.YQ
                                  } : {
                                      duration: .75,
                                      delay: 1.3,
                                      ease: h.YQ
                                  },
                                  ref: M,
                                  className: "w-5/6 mx-auto md:text-center flex flex-col md:items-center  gap-y-2",
                                  children: [(0,
                                  i.jsx)("h6", {
                                      className: "text-[#FCFCFC]  md:text-xl not-italic leading-8 font-semibold",
                                      children: "Destra Nodes"
                                  }), (0,
                                  i.jsx)("p", {
                                      className: "text-[#D4D4D4] text-sm not-italic font-normal leading-5 md:w-1/2",
                                      children: "Live Stats GPU Nodes across Destra Network AI."
                                  })]
                              }), (0,
                              i.jsxs)("div", {
                                  className: "w-full md:h-72",
                                  children: [(0,
                                  i.jsx)(y.default, {
                                      src: V,
                                      alt: "alt",
                                      className: "pb-2 w-full h-fit md:block hidden"
                                  }), (0,
                                  i.jsx)("div", {
                                      className: "md:hidden block pb-2 w-full h-fit",
                                      children: (0,
                                      i.jsx)(K, {})
                                  })]
                              })]
                          })]
                      })
                  }), (0,
                  i.jsxs)("div", {
                      className: "flex flex-col w-full items-center sm:gap-y-8 py-20 sm:py-[160px] h-full max-w-screen-2xl mx-auto",
                      ref: c,
                      children: [(0,
                      i.jsx)(u.E.div, {
                          initial: {
                              opacity: 0,
                              y: 160
                          },
                          animate: x ? {
                              opacity: 1,
                              y: 0
                          } : {},
                          transition: {
                              duration: 1,
                              delay: .2
                          },
                          children: (0,
                          i.jsx)(E, {
                              Shinytext: "☁️ Cloud Efficiency ☁️"
                          })
                      }), (0,
                      i.jsxs)("div", {
                          className: "flex flex-col items-center text-center mt-8 sm:mt-0 px-8 sm:px-0",
                          children: [(0,
                          i.jsx)(u.E.h4, {
                              initial: {
                                  opacity: 0,
                                  y: 150
                              },
                              animate: x ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: {
                                  duration: 1,
                                  delay: .3
                              },
                              className: "text-4xl md:text-5xl font-semibold  hero-text2",
                              children: "Destra Cloud Services"
                          }), (0,
                          i.jsx)(u.E.p, {
                              initial: {
                                  opacity: 0,
                                  y: 160
                              },
                              animate: x ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: {
                                  duration: 1,
                                  delay: .4
                              },
                              className: "text-sm my-5 md:text-base text-[#FFF] max-w-[626px] leading-7 text-center mx-auto font-medium",
                              children: "Democratizing the decentralized infrastructure services for Web3, backed by our L2 blockchain tailored for infra transactions."
                          })]
                      }), (0,
                      i.jsx)(q, {})]
                  })]
              })]
          })
      }
        , J = {
          src: "/_next/static/media/tick.3b4ad98e.svg",
          height: 21,
          width: 21,
          blurWidth: 0,
          blurHeight: 0
      }
        , X = {
          src: "/_next/static/media/link.1d3e8d02.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0
      }
        , ee = () => {
          let e = (0,
          o.useRef)(null)
            , t = (0,
          f.Y)(e, {
              once: !0
          });
          return (0,
          i.jsx)(i.Fragment, {
              children: (0,
              i.jsxs)("div", {
                  className: "3xl:h-fit flex items-center justify-center flex-col w-full mb-20 pt-8 box-grid1",
                  children: [(0,
                  i.jsxs)("div", {
                      className: "flex max-w-[428px] sm:w-full flex-col justify-center items-center gap-4 mx-auto mb-3 ",
                      children: [(0,
                      i.jsx)(u.E.div, {
                          initial: {
                              opacity: 0,
                              y: 70
                          },
                          animate: t ? {
                              opacity: 1,
                              y: 0
                          } : {},
                          transition: {
                              duration: 1,
                              delay: .1,
                              ease: h.YQ
                          },
                          ref: e,
                          children: (0,
                          i.jsx)(E, {
                              Shinytext: "☁️ Cloud Efficiency ☁️"
                          })
                      }), (0,
                      i.jsxs)("div", {
                          className: "flex flex-col items-center gap-2 justify-center self-stretch ",
                          children: [(0,
                          i.jsx)(u.E.div, {
                              initial: {
                                  opacity: 0,
                                  y: 90
                              },
                              animate: t ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: {
                                  duration: 1,
                                  delay: .2,
                                  ease: h.YQ
                              },
                              className: "self-stretch sub-headings text-center text-4xl md:text-5xl leading-normal font-semibold not-italic",
                              children: "Destra Subnets"
                          }), (0,
                          i.jsx)(u.E.p, {
                              initial: {
                                  opacity: 0,
                                  y: 90
                              },
                              animate: t ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: {
                                  duration: 1,
                                  delay: .3,
                                  ease: h.YQ
                              },
                              className: "text-[#171717] self-stretch text-center text-sm not-italic leading-[24px] font-normal text-balance",
                              children: "AI-powered L3 blockchain with a complete suite of decentralized cloud services for enterprises."
                          })]
                      })]
                  }), (0,
                  i.jsxs)(u.E.div, {
                      initial: {
                          opacity: 0,
                          y: 120
                      },
                      animate: t ? {
                          opacity: 1,
                          y: 0
                      } : {},
                      transition: {
                          duration: 1,
                          delay: .4,
                          ease: h.YQ
                      },
                      className: "subnet-L3 max-w-[327px] mb-[10px] flex items-start flex-col md:max-w-[605px] w-full mx-auto shrink-0 md:flex-row px-4 py-4 sm:py-2 shadow-xl",
                      children: [(0,
                      i.jsxs)("div", {
                          className: "flex max-w-[228px] md:max-w-[691px] w-full flex-col  justify-center items-start gap-2 ml-2 mt-1",
                          children: [(0,
                          i.jsx)(u.E.h3, {
                              initial: {
                                  opacity: 0,
                                  y: 50
                              },
                              animate: t ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: {
                                  duration: 1,
                                  delay: 1.2,
                                  ease: h.YQ
                              },
                              className: "self-stretch text-[#171717] text-lg  font-semibold leading-[32px] not-italic md:mt-3",
                              children: "AI Powered L3"
                          }), (0,
                          i.jsx)(u.E.div, {
                              initial: {
                                  opacity: 0,
                                  y: 50
                              },
                              animate: t ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: {
                                  duration: 1,
                                  delay: 1.3,
                                  ease: h.YQ
                              },
                              className: "text-[#525252] text-sm font-normal leading-5 self-stretch",
                              children: "A tailored L3 blockchain for enterprises, powered by Destra AI."
                          })]
                      }), (0,
                      i.jsx)(y.default, {
                          src: "/AIPoweredL3.svg",
                          width: 180,
                          height: 180,
                          alt: "AiPowered",
                          className: "w-full p-2"
                      })]
                  })]
              })
          })
      }
      ;
      let et = [{
          img: "/_next/dexter.svg",
          name: "Dexter"
      }, {
          img: "/_next/diesel.svg",
          name: "Diesel"
      }, {
          img: "/_next/joules.svg",
          name: "Joules"
      }]
        , es = e => 3 * e;
      var ei = () => {
          let e = (0,
          o.useRef)(null)
            , t = (0,
          f.Y)(e, {
              once: !0
          })
            , s = (0,
          o.useRef)(null)
            , r = (0,
          f.Y)(s, {
              once: !0
          })
            , a = (0,
          o.useRef)(null)
            , n = (0,
          f.Y)(a, {
              once: !0
          })
            , l = (0,
          w.ac)({
              query: "(max-width: 768px)"
          });
          return (0,
          i.jsx)(i.Fragment, {
              children: (0,
              i.jsxs)("div", {
                  className: "flex flex-col w-full items-center py-10 md:max-w-screen-2xl mx-auto bg-white  ",
                  children: [(0,
                  i.jsxs)("div", {
                      ref: e,
                      className: "flex flex-col w-full items-center py-10 md:max-w-screen-2xl mx-auto bg-white box-grid1",
                      children: [(0,
                      i.jsxs)("div", {
                          className: "flex flex-col items-center text-center",
                          children: [(0,
                          i.jsx)("div", {
                              className: "flex items-center text-center gap-x-4",
                              children: (0,
                              i.jsx)(u.E.h4, {
                                  initial: {
                                      opacity: 0,
                                      y: 100
                                  },
                                  animate: t ? {
                                      opacity: 1,
                                      y: 0
                                  } : {},
                                  transition: l ? {
                                      duration: .75
                                  } : {
                                      duration: 1
                                  },
                                  className: "flex flex-col items-center text-4xl md:text-5xl font-semibold  hero-text2 leading-snug sub-headings mt-[50px] px-8 sm:px-0",
                                  children: "Meet Our Expert Team"
                              })
                          }), (0,
                          i.jsx)(u.E.p, {
                              initial: {
                                  opacity: 0,
                                  y: 100
                              },
                              animate: t ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: l ? {
                                  duration: .75,
                                  delay: .1
                              } : {
                                  duration: 1,
                                  delay: .1
                              },
                              className: "text-sm md:text-lg font-medium leading-6 not-italic max-w-[573px] mx-auto text-center text-[#404040] mt-2 px-2 sm:px-0",
                              children: "A diverse group of professionals committed to pushing boundaries and delivering excellence."
                          })]
                      }), (0,
                      i.jsx)("div", {
                          className: "flex flex-wrap w-full justify-between px-8 items-center max-w-[1320px] gap-4 mt-10",
                          ref: s,
                          children: et.map( (e, t) => (0,
                          i.jsxs)(u.E.div, {
                              initial: {
                                  opacity: 0,
                                  y: 60
                              },
                              animate: r ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: {
                                  duration: .75,
                                  delay: es(.1 * t),
                                  ease: h.YQ
                              },
                              className: "flex flex-col items-center gap-y-2.5 w-fit",
                              children: [(0,
                              i.jsx)(y.default, {
                                  src: e.img,
                                  alt: "alt",
                                  className: " md:w-[180px] md:h-[180px]  w-[120px] h-[120px]",
                                  width: 300,
                                  height: 300
                              }), (0,
                              i.jsx)("div", {
                                  className: "flex flex-col items-center justify-center",
                                  children: (0,
                                  i.jsxs)("h6", {
                                      className: "flex items-center gap-x-2 text-xl font-normal",
                                      children: [e.name, " ", (0,
                                      i.jsx)(y.default, {
                                          src: J,
                                          alt: "alt",
                                          className: "size-4 md:size-fit"
                                      })]
                                  })
                              })]
                          }, e.name))
                      }), (0,
                      i.jsxs)("div", {
                          className: "flex flex-col 2xl:h-fit items-center gap-6 w-full pt-28 pb-28 ",
                          children: [(0,
                          i.jsx)(u.E.div, {
                              ref: a,
                              initial: {
                                  opacity: 0,
                                  y: 90
                              },
                              animate: n ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: {
                                  duration: 1,
                                  ease: h.YQ
                              },
                              className: "flex justify-center items-center gap-4 self-stretch",
                              children: (0,
                              i.jsx)("span", {
                                  className: "text-center  text-4xl md:text-5xl font-semibold sub-headings text-[40px] md:text-[64px] not-italic ",
                                  children: "Partnerships"
                              })
                          }), (0,
                          i.jsxs)(u.E.div, {
                              initial: {
                                  opacity: 0,
                                  y: 100
                              },
                              animate: n ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: {
                                  duration: 1,
                                  delay: .1,
                                  ease: h.YQ
                              },
                              className: "flex md:items-center md:flex-row flex-col gap-10 md:gap-5",
                              children: [(0,
                                i.jsx)(y.default, {
                                    src: "/Uniswap.svg",
                                    width: 159,
                                    height: 50,
                                    alt: "uniswap-partners"
                                }), (0,
                                    i.jsx)("div", {
                                        className: "bg-[#262626] w-[1px] h-12 md:block hidden"
                                    }), (0,
                              i.jsx)(y.default, {
                                  src: "/partners/ankr.svg",
                                  width: 159,
                                  height: 50,
                                  alt: "ankr-partners"
                              }), (0,
                              i.jsx)("div", {
                                  className: "bg-[#262626] w-[1px] h-12 md:block hidden"
                              }), (0,
                              i.jsx)(y.default, {
                                  src: "/partners/arb.svg",
                                  width: 196,
                                  height: 50,
                                  alt: "ankr-partners"
                              }), (0,
                              i.jsx)("div", {
                                  className: "bg-[#262626] w-[1px] h-12 md:block hidden"
                              }), (0,
                              i.jsx)(y.default, {
                                  src: "/partners/file.svg",
                                  width: 150,
                                  height: 50,
                                  alt: "ankr-partners"
                              }), (0,
                              i.jsx)("div", {
                                  className: "bg-[#262626] w-[1px] h-12 md:block hidden"
                              }), (0,
                              i.jsx)(y.default, {
                                  src: "/partners/lighthouse.svg",
                                  width: 180,
                                  height: 50,
                                  alt: "ankr-partners"
                              }), (0,
                              i.jsx)("div", {
                                  className: "bg-[#262626] w-[1px] h-12 md:block hidden"
                              }), (0,
                              i.jsx)(y.default, {
                                  src: "/partners/assureDefi.svg",
                                  width: 150,
                                  height: 50,
                                  alt: "assure-partners"
                              }), (0,
                              i.jsx)("div", {
                                  className: "bg-[#262626] w-[1px] h-12 md:block hidden"
                              }), (0,
                              i.jsx)(y.default, {
                                  src: "/partners/hacken.svg",
                                  width: 150,
                                  height: 50,
                                  alt: "assure-partners"
                              })]
                          })]
                      })]
                  }), (0,
                  i.jsx)(ee, {})]
              })
          })
      }
        , er = () => (0,
      i.jsxs)("svg", {
          width: "1402",
          height: "482",
          viewBox: "0 0 1402 482",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0,
          i.jsxs)("g", {
              id: "Hero SVG Desktop",
              "clip-path": "url(#clip0_3351_13127)",
              children: [(0,
              i.jsxs)("g", {
                  id: "Background Lines",
                  children: [(0,
                  i.jsxs)("g", {
                      id: "Bottom Line",
                      children: [(0,
                      i.jsx)("path", {
                          id: "B-4",
                          opacity: "0.5",
                          d: "M722 200V482",
                          stroke: "#522E2E",
                          strokeWidth: "3"
                      }), (0,
                      i.jsx)("path", {
                          id: "B-3",
                          opacity: "0.5",
                          d: "M707 200V482",
                          stroke: "#522E2E",
                          strokeWidth: "3"
                      }), (0,
                      i.jsx)("path", {
                          id: "B-2",
                          opacity: "0.5",
                          d: "M692 200V482",
                          stroke: "#522E2E",
                          strokeWidth: "3"
                      }), (0,
                      i.jsx)("path", {
                          id: "B-1",
                          opacity: "0.5",
                          d: "M677 200V482",
                          stroke: "#522E2E",
                          strokeWidth: "3"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Left Line",
                      children: [(0,
                      i.jsx)("path", {
                          id: "L-1",
                          opacity: "0.5",
                          d: "M628.5 150H470.255C461.768 150 453.629 153.371 447.627 159.373L122 485",
                          stroke: "#522E2E",
                          strokeWidth: "3"
                      }), (0,
                      i.jsx)("path", {
                          id: "L-2",
                          opacity: "0.5",
                          d: "M628.5 135H450.255C441.768 135 433.629 138.371 427.627 144.373L240.373 331.627C234.371 337.629 226.232 341 217.745 341H198.5",
                          stroke: "#522E2E",
                          strokeWidth: "3"
                      }), (0,
                      i.jsx)("path", {
                          id: "L-3",
                          opacity: "0.5",
                          d: "M628.5 120H430.577C421.607 120 413.049 123.765 406.988 130.377L376.512 163.623C370.451 170.235 361.893 174 352.923 174H122.5",
                          stroke: "#522E2E",
                          strokeWidth: "3"
                      }), (0,
                      i.jsx)("path", {
                          id: "L-4",
                          opacity: "0.5",
                          d: "M628.5 105H367.305C358.196 105 349.519 101.118 343.448 94.3274L307.104 53.6726C301.033 46.8818 292.356 43 283.247 43H227.5",
                          stroke: "#522E2E",
                          strokeWidth: "3"
                      })]
                  }), (0,
                  i.jsxs)("g", {
                      id: "Right Line",
                      children: [(0,
                      i.jsx)("path", {
                          id: "R-4",
                          opacity: "0.5",
                          d: "M772 150H930.245C938.732 150 946.871 153.371 952.873 159.373L1278.5 485",
                          stroke: "#522E2E",
                          strokeWidth: "3"
                      }), (0,
                      i.jsx)("path", {
                          id: "R-3",
                          opacity: "0.5",
                          d: "M772 135H950.245C958.732 135 966.871 138.371 972.873 144.373L1160.13 331.627C1166.13 337.629 1174.27 341 1182.75 341H1202",
                          stroke: "#522E2E",
                          strokeWidth: "3"
                      }), (0,
                      i.jsx)("path", {
                          id: "R-2",
                          opacity: "0.5",
                          d: "M772 120H969.923C978.893 120 987.451 123.765 993.512 130.377L1023.99 163.623C1030.05 170.235 1038.61 174 1047.58 174H1278",
                          stroke: "#522E2E",
                          strokeWidth: "3"
                      }), (0,
                      i.jsx)("path", {
                          id: "R-1",
                          opacity: "0.5",
                          d: "M772 105H1033.2C1042.3 105 1050.98 101.118 1057.05 94.3274L1093.4 53.6726C1099.47 46.8818 1108.14 43 1117.25 43H1173",
                          stroke: "#522E2E",
                          strokeWidth: "3"
                      })]
                  })]
              }), (0,
              i.jsx)("defs", {
                  children: (0,
                  i.jsxs)("filter", {
                      id: "glow",
                      x: "-50%",
                      y: "-50%",
                      width: "200%",
                      height: "200%",
                      children: [(0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3.5",
                          result: "coloredBlur"
                      }), (0,
                      i.jsxs)("feMerge", {
                          children: [(0,
                          i.jsx)("feMergeNode", {
                              in: "coloredBlur"
                          }), (0,
                          i.jsx)("feMergeNode", {
                              in: "SourceGraphic"
                          })]
                      })]
                  })
              }), (0,
              i.jsxs)("g", {
                  id: "Left Highligght Lines",
                  filter: "url(#glow)",
                  children: [(0,
                  i.jsx)("path", {
                      className: "highlight l-1",
                      id: "L-1",
                      d: "M628.5 150H470.255C461.768 150 453.629 153.371 447.627 159.373L122 485",
                      stroke: "red",
                      strokeWidth: "3"
                  }), (0,
                  i.jsx)("path", {
                      className: "highlight l-2",
                      id: "L-2",
                      d: "M628.5 135H450.255C441.768 135 433.629 138.371 427.627 144.373L240.373 331.627C234.371 337.629 226.232 341 217.745 341H198.5",
                      stroke: "red",
                      strokeWidth: "3"
                  }), (0,
                  i.jsx)("path", {
                      className: "highlight l-3",
                      id: "L-3",
                      d: "M628.5 120H430.577C421.607 120 413.049 123.765 406.988 130.377L376.512 163.623C370.451 170.235 361.893 174 352.923 174H122.5",
                      stroke: "red",
                      strokeWidth: "3"
                  }), (0,
                  i.jsx)("path", {
                      className: "highlight l-4",
                      id: "L-4",
                      d: "M628.5 105H367.305C358.196 105 349.519 101.118 343.448 94.3274L307.104 53.6726C301.033 46.8818 292.356 43 283.247 43H227.5",
                      stroke: "red",
                      strokeWidth: "3"
                  })]
              }), (0,
              i.jsxs)("g", {
                  id: "Right Highligght Lines",
                  filter: "url(#glow)",
                  children: [(0,
                  i.jsx)("path", {
                      className: "highlight r-1",
                      id: "R-1",
                      d: "M772 105H1033.2C1042.3 105 1050.98 101.118 1057.05 94.3274L1093.4 53.6726C1099.47 46.8818 1108.14 43 1117.25 43H1173",
                      stroke: "red",
                      strokeWidth: "3"
                  }), (0,
                  i.jsx)("path", {
                      className: "highlight r-2",
                      id: "R-2",
                      d: "M772 120H969.923C978.893 120 987.451 123.765 993.512 130.377L1023.99 163.623C1030.05 170.235 1038.61 174 1047.58 174H1278",
                      stroke: "red",
                      strokeWidth: "3"
                  }), (0,
                  i.jsx)("path", {
                      className: "highlight r-3",
                      id: "R-3",
                      d: "M772 135H950.245C958.732 135 966.871 138.371 972.873 144.373L1160.13 331.627C1166.13 337.629 1174.27 341 1182.75 341H1202",
                      stroke: "red",
                      strokeWidth: "3"
                  }), (0,
                  i.jsx)("path", {
                      className: "highlight r-4",
                      id: "R-4",
                      d: "M772 150H930.245C938.732 150 946.871 153.371 952.873 159.373L1278.5 485",
                      stroke: "red",
                      strokeWidth: "3"
                  })]
              }), (0,
              i.jsxs)("g", {
                  id: "Bottom Highligght Lines",
                  filter: "url(#glow)",
                  children: [(0,
                  i.jsx)("path", {
                      className: "highlight b-1",
                      id: "B-1",
                      d: "M677 200V400",
                      stroke: "red",
                      strokeWidth: "1"
                  }), (0,
                  i.jsx)("path", {
                      className: "highlight b-2",
                      id: "B-2",
                      d: "M692 200V400",
                      stroke: "red",
                      strokeWidth: "1"
                  }), (0,
                  i.jsx)("path", {
                      className: "highlight b-3",
                      id: "B-3",
                      d: "M707 200V400",
                      stroke: "red",
                      strokeWidth: "1"
                  }), (0,
                  i.jsx)("path", {
                      className: "highlight b-4",
                      id: "B-4",
                      d: "M722 200V400",
                      stroke: "red",
                      strokeWidth: "1"
                  })]
              }), (0,
              i.jsxs)("g", {
                  id: "Right_small rectangle",
                  children: [(0,
                  i.jsx)("rect", {
                      id: "Rectangle 1",
                      x: "758.5",
                      y: "101.5",
                      width: "17",
                      height: "7",
                      rx: "3.5",
                      fill: "#171717",
                      stroke: "url(#paint72_linear_3351_13127)"
                  }), (0,
                  i.jsx)("rect", {
                      id: "Rectangle 2",
                      x: "758.5",
                      y: "116.5",
                      width: "17",
                      height: "7",
                      rx: "3.5",
                      fill: "#171717",
                      stroke: "url(#paint73_linear_3351_13127)"
                  }), (0,
                  i.jsx)("rect", {
                      id: "Rectangle 3",
                      x: "758.5",
                      y: "131.5",
                      width: "17",
                      height: "7",
                      rx: "3.5",
                      fill: "#171717",
                      stroke: "url(#paint74_linear_3351_13127)"
                  }), (0,
                  i.jsx)("rect", {
                      id: "Rectangle 4",
                      x: "758.5",
                      y: "146.5",
                      width: "17",
                      height: "7",
                      rx: "3.5",
                      fill: "#171717",
                      stroke: "url(#paint75_linear_3351_13127)"
                  })]
              }), (0,
              i.jsxs)("g", {
                  id: "Left_small rectangle",
                  children: [(0,
                  i.jsx)("rect", {
                      id: "Rectangle 1_2",
                      x: "-0.5",
                      y: "0.5",
                      width: "17",
                      height: "7",
                      rx: "3.5",
                      transform: "matrix(-1 0 0 1 639 102)",
                      fill: "#171717",
                      stroke: "url(#paint76_linear_3351_13127)"
                  }), (0,
                  i.jsx)("rect", {
                      id: "Rectangle 2_2",
                      x: "-0.5",
                      y: "0.5",
                      width: "17",
                      height: "7",
                      rx: "3.5",
                      transform: "matrix(-1 0 0 1 639 117)",
                      fill: "#171717",
                      stroke: "url(#paint77_linear_3351_13127)"
                  }), (0,
                  i.jsx)("rect", {
                      id: "Rectangle 3_2",
                      x: "-0.5",
                      y: "0.5",
                      width: "17",
                      height: "7",
                      rx: "3.5",
                      transform: "matrix(-1 0 0 1 639 132)",
                      fill: "#171717",
                      stroke: "url(#paint78_linear_3351_13127)"
                  }), (0,
                  i.jsx)("rect", {
                      id: "Rectangle 4_2",
                      x: "-0.5",
                      y: "0.5",
                      width: "17",
                      height: "7",
                      rx: "3.5",
                      transform: "matrix(-1 0 0 1 639 147)",
                      fill: "#171717",
                      stroke: "url(#paint79_linear_3351_13127)"
                  })]
              }), (0,
              i.jsxs)("g", {
                  id: "Down_small rectangle",
                  children: [(0,
                  i.jsx)("rect", {
                      id: "Rectangle 1_3",
                      x: "0.5",
                      y: "0.5",
                      width: "17",
                      height: "7",
                      rx: "3.5",
                      transform: "matrix(-4.37114e-08 1 1 4.37114e-08 673 190)",
                      fill: "#171717",
                      stroke: "url(#paint80_linear_3351_13127)"
                  }), (0,
                  i.jsx)("rect", {
                      id: "Rectangle 2_3",
                      x: "0.5",
                      y: "0.5",
                      width: "17",
                      height: "7",
                      rx: "3.5",
                      transform: "matrix(-4.37114e-08 1 1 4.37114e-08 688 190)",
                      fill: "#171717",
                      stroke: "url(#paint81_linear_3351_13127)"
                  }), (0,
                  i.jsx)("rect", {
                      id: "Rectangle 3_3",
                      x: "0.5",
                      y: "0.5",
                      width: "17",
                      height: "7",
                      rx: "3.5",
                      transform: "matrix(-4.37114e-08 1 1 4.37114e-08 703 190)",
                      fill: "#171717",
                      stroke: "url(#paint82_linear_3351_13127)"
                  }), (0,
                  i.jsx)("rect", {
                      id: "Rectangle 4_3",
                      x: "0.5",
                      y: "0.5",
                      width: "17",
                      height: "7",
                      rx: "3.5",
                      transform: "matrix(-4.37114e-08 1 1 4.37114e-08 718 190)",
                      fill: "#171717",
                      stroke: "url(#paint83_linear_3351_13127)"
                  })]
              }), (0,
              i.jsx)("g", {
                  id: "DGPU",
                  children: (0,
                  i.jsxs)("g", {
                      id: "Frame 1618873736",
                      children: [(0,
                      i.jsx)("rect", {
                          x: "641",
                          y: "73",
                          width: "116",
                          height: "116",
                          rx: "35",
                          fill: "#161615"
                      }), (0,
                      i.jsx)("rect", {
                          x: "641",
                          y: "73",
                          width: "116",
                          height: "116",
                          rx: "35",
                          stroke: "url(#paint84_linear_3351_13127)",
                          "stroke-width": "2"
                      }), (0,
                      i.jsxs)("g", {
                          id: "DGPU_2",
                          children: [(0,
                          i.jsx)("path", {
                              d: "M659 120.39H666.41C672.11 120.39 676.25 123.45 676.25 130.8C676.25 138.03 672.11 141.39 666.41 141.39H659V120.39ZM662.6 123.99V137.79H666.41C670.31 137.79 672.65 136.44 672.65 130.8C672.65 125.07 670.31 123.99 666.41 123.99H662.6Z",
                              fill: "white"
                          }), (0,
                          i.jsx)("path", {
                              d: "M659 120.39H666.41C672.11 120.39 676.25 123.45 676.25 130.8C676.25 138.03 672.11 141.39 666.41 141.39H659V120.39ZM662.6 123.99V137.79H666.41C670.31 137.79 672.65 136.44 672.65 130.8C672.65 125.07 670.31 123.99 666.41 123.99H662.6Z",
                              fill: "url(#paint85_linear_3351_13127)"
                          }), (0,
                          i.jsx)("path", {
                              d: "M696.891 133.71V132.9H691.191V129.9H700.491V141.39H696.891V137.82H696.291C695.271 139.92 693.531 141.66 689.931 141.66C684.381 141.66 678.651 138.03 678.651 130.8C678.651 123.27 684.651 120 690.951 120C694.611 120 698.571 121.11 700.551 123.75L700.011 128.16C698.031 124.74 694.251 123 691.131 123C687.261 123 682.851 125.67 682.851 130.8C682.851 135.93 686.601 138.66 690.021 138.66C693.531 138.66 696.891 136.44 696.891 133.71Z",
                              fill: "white"
                          }), (0,
                          i.jsx)("path", {
                              d: "M696.891 133.71V132.9H691.191V129.9H700.491V141.39H696.891V137.82H696.291C695.271 139.92 693.531 141.66 689.931 141.66C684.381 141.66 678.651 138.03 678.651 130.8C678.651 123.27 684.651 120 690.951 120C694.611 120 698.571 121.11 700.551 123.75L700.011 128.16C698.031 124.74 694.251 123 691.131 123C687.261 123 682.851 125.67 682.851 130.8C682.851 135.93 686.601 138.66 690.021 138.66C693.531 138.66 696.891 136.44 696.891 133.71Z",
                              fill: "url(#paint86_linear_3351_13127)"
                          }), (0,
                          i.jsx)("path", {
                              d: "M707.161 141.39H703.561V120.39H711.571C716.641 120.39 719.161 124.47 719.161 127.86C719.161 131.19 716.791 135.06 712.141 135.06H707.161V141.39ZM707.161 123.99V131.46H712.141C714.391 131.46 715.561 130.02 715.561 127.92C715.561 125.67 714.271 123.99 711.571 123.99H707.161Z",
                              fill: "white"
                          }), (0,
                          i.jsx)("path", {
                              d: "M707.161 141.39H703.561V120.39H711.571C716.641 120.39 719.161 124.47 719.161 127.86C719.161 131.19 716.791 135.06 712.141 135.06H707.161V141.39ZM707.161 123.99V131.46H712.141C714.391 131.46 715.561 130.02 715.561 127.92C715.561 125.67 714.271 123.99 711.571 123.99H707.161Z",
                              fill: "url(#paint87_linear_3351_13127)"
                          }), (0,
                          i.jsx)("path", {
                              d: "M738.521 134.97C738.521 139.41 734.351 141.66 730.181 141.66C726.041 141.66 721.871 139.41 721.871 134.97V120.39H725.471V134.97C725.471 137.52 727.841 138.66 730.181 138.66C732.551 138.66 734.921 137.52 734.921 134.97V120.39H738.521V134.97Z",
                              fill: "white"
                          }), (0,
                          i.jsx)("path", {
                              d: "M738.521 134.97C738.521 139.41 734.351 141.66 730.181 141.66C726.041 141.66 721.871 139.41 721.871 134.97V120.39H725.471V134.97C725.471 137.52 727.841 138.66 730.181 138.66C732.551 138.66 734.921 137.52 734.921 134.97V120.39H738.521V134.97Z",
                              fill: "url(#paint88_linear_3351_13127)"
                          })]
                      })]
                  })
              }), (0,
              i.jsx)("g", {
                  id: "AI",
                  children: (0,
                  i.jsxs)("g", {
                      id: "Group 14",
                      children: [(0,
                      i.jsx)("rect", {
                          id: "Rectangle 4_4",
                          x: "213.5",
                          y: "39.5",
                          width: "17",
                          height: "7",
                          rx: "3.5",
                          fill: "#171717",
                          stroke: "url(#paint89_linear_3351_13127)"
                      }), (0,
                      i.jsxs)("g", {
                          id: "Frame 1618873583",
                          children: [(0,
                          i.jsx)("rect", {
                              x: "-1",
                              y: "1",
                              width: "84",
                              height: "84",
                              rx: "25",
                              transform: "matrix(-1 0 0 1 211 0)",
                              fill: "#161615"
                          }), (0,
                          i.jsx)("rect", {
                              x: "-1",
                              y: "1",
                              width: "84",
                              height: "84",
                              rx: "25",
                              transform: "matrix(-1 0 0 1 211 0)",
                              stroke: "url(#paint90_linear_3351_13127)",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("g", {
                              id: "AI_2",
                              children: (0,
                              i.jsxs)("g", {
                                  id: "AI_3",
                                  children: [(0,
                                  i.jsx)("path", {
                                      d: "M167.985 25L181.056 60H173.253L170.669 52.9399H158.94L156.405 59.9499L149 60L162.27 25H167.985ZM161.475 46.4807H168.383L164.904 35.8154L161.475 46.4807Z",
                                      fill: "url(#paint91_linear_3351_13127)"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M192 59.9499H185.042V25.1001H192V59.9499Z",
                                      fill: "url(#paint92_linear_3351_13127)"
                                  })]
                              })
                          })]
                      })]
                  })
              }), (0,
              i.jsx)("g", {
                  id: "LLM",
                  children: (0,
                  i.jsxs)("g", {
                      id: "Group 14_2",
                      children: [(0,
                      i.jsx)("rect", {
                          id: "Rectangle 4_5",
                          x: "-0.5",
                          y: "0.5",
                          width: "17",
                          height: "7",
                          rx: "3.5",
                          transform: "matrix(-1 0 0 1 1187 40)",
                          fill: "#171717",
                          stroke: "url(#paint93_linear_3351_13127)"
                      }), (0,
                      i.jsxs)("g", {
                          id: "Frame 1618873583_2",
                          children: [(0,
                          i.jsx)("rect", {
                              x: "1189",
                              y: "2",
                              width: "84",
                              height: "84",
                              rx: "25",
                              fill: "#161615"
                          }), (0,
                          i.jsx)("rect", {
                              x: "1189",
                              y: "2",
                              width: "84",
                              height: "84",
                              rx: "25",
                              stroke: "url(#paint94_linear_3351_13127)",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("g", {
                              id: "LLM_2",
                              children: (0,
                              i.jsxs)("g", {
                                  id: "LLM_3",
                                  children: [(0,
                                  i.jsx)("path", {
                                      d: "M1205 34.0541L1208.22 34V50.2934H1218.44V53H1205V34.0541Z",
                                      fill: "url(#paint95_linear_3351_13127)"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M1221.11 34.0541L1224.34 34V50.2934H1234.55V53H1221.11V34.0541Z",
                                      fill: "url(#paint96_linear_3351_13127)"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M1249.18 49.5085H1245.04L1240.9 39.5755C1240.56 38.7094 1240.34 37.4644 1240.15 36.7877L1239.91 36.9231C1240.13 37.5185 1240.45 39.2507 1240.45 40.0897V53H1237.22V34.0541H1241.93L1247.11 46.0712L1252.3 34.0541H1257V53H1253.78V40.0897C1253.78 39.2507 1254.1 37.5185 1254.31 36.9231L1254.07 36.7877C1253.88 37.4644 1253.67 38.7094 1253.32 39.5755L1249.18 49.5085Z",
                                      fill: "url(#paint97_linear_3351_13127)"
                                  })]
                              })
                          })]
                      })]
                  })
              }), (0,
              i.jsx)("g", {
                  id: "Subnet",
                  children: (0,
                  i.jsxs)("g", {
                      id: "Group 13",
                      children: [(0,
                      i.jsx)("rect", {
                          id: "Rectangle 4_6",
                          x: "108.5",
                          y: "170.5",
                          width: "17",
                          height: "7",
                          rx: "3.5",
                          fill: "#171717",
                          stroke: "url(#paint98_linear_3351_13127)"
                      }), (0,
                      i.jsxs)("g", {
                          id: "Frame 1618873581",
                          children: [(0,
                          i.jsx)("rect", {
                              x: "-1",
                              y: "1",
                              width: "64",
                              height: "64",
                              rx: "19",
                              transform: "matrix(-1 0 0 1 108 141)",
                              fill: "#161615"
                          }), (0,
                          i.jsx)("rect", {
                              x: "-1",
                              y: "1",
                              width: "64",
                              height: "64",
                              rx: "19",
                              transform: "matrix(-1 0 0 1 108 141)",
                              stroke: "url(#paint99_linear_3351_13127)",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("g", {
                              id: "Subnet_2",
                              children: (0,
                              i.jsxs)("g", {
                                  id: "Vector",
                                  children: [(0,
                                  i.jsx)("path", {
                                      d: "M93 174.265C93 165.589 85.8224 158.53 76.9998 158.53C76.8359 158.53 76.6724 158.532 76.5101 158.537C75.7162 158.561 75.0917 159.212 75.1152 159.993C75.1388 160.774 75.8009 161.394 76.5952 161.365C76.7297 161.361 76.8649 161.358 77.0002 161.358C84.2366 161.358 90.1239 167.148 90.1239 174.265C90.1239 176.158 89.7092 177.995 88.9231 179.67C88.6295 179.605 88.3252 179.569 88.0116 179.569C85.7068 179.569 83.832 181.413 83.832 183.679C83.832 185.945 85.7064 187.79 88.0112 187.79C90.316 187.79 92.1908 185.946 92.1908 183.68C92.1908 182.758 91.8764 181.908 91.353 181.221C92.4276 179.081 93 176.713 93 174.265ZM88.2151 185.463C87.2357 185.463 86.4415 184.683 86.4415 183.719C86.4415 182.756 87.2353 181.975 88.2151 181.975C89.1944 181.975 89.9887 182.756 89.9887 183.719C89.9887 184.683 89.1948 185.463 88.2151 185.463Z",
                                      fill: "url(#paint100_linear_3351_13127)"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M69.9426 174.253C69.9426 178.117 73.1385 181.26 77.0668 181.26C80.9951 181.26 84.1907 178.117 84.1907 174.253C84.1907 170.39 80.9948 167.247 77.0668 167.247C73.1389 167.247 69.9426 170.39 69.9426 174.253ZM77.0668 170.076C79.4089 170.076 81.3147 171.95 81.3147 174.253C81.3147 176.557 79.4089 178.431 77.0668 178.431C74.7248 178.431 72.819 176.557 72.819 174.253C72.819 171.95 74.7244 170.076 77.0668 170.076Z",
                                      fill: "url(#paint101_linear_3351_13127)"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M83.2573 187.277C82.9899 186.542 82.1674 186.159 81.4189 186.422C80.0041 186.919 78.5178 187.171 77.0002 187.171C69.7638 187.171 63.8764 181.381 63.8764 174.265C63.8764 171.021 65.0977 167.974 67.2418 165.636C67.8687 166.005 68.5979 166.221 69.38 166.221C71.6848 166.221 73.5596 164.377 73.5596 162.111C73.5596 159.844 71.6844 158 69.38 158C67.0755 158 65.2004 159.844 65.2004 162.11C65.2004 162.564 65.2784 163 65.4172 163.408C62.607 166.299 61 170.152 61 174.265C61 182.941 68.1772 190 77.0002 190C78.8491 190 80.6615 189.692 82.3873 189.085C83.1349 188.822 83.5242 188.013 83.2573 187.277ZM69.4043 160.298C70.3476 160.298 71.1121 161.05 71.1121 161.978C71.1121 162.905 70.3472 163.657 69.4043 163.657C68.461 163.657 67.6965 162.905 67.6965 161.978C67.6965 161.05 68.461 160.298 69.4043 160.298Z",
                                      fill: "url(#paint102_linear_3351_13127)"
                                  })]
                              })
                          })]
                      })]
                  })
              }), (0,
              i.jsx)("g", {
                  id: "L3",
                  children: (0,
                  i.jsxs)("g", {
                      id: "Group 13_2",
                      children: [(0,
                      i.jsx)("rect", {
                          id: "Rectangle 4_7",
                          x: "-0.5",
                          y: "0.5",
                          width: "17",
                          height: "7",
                          rx: "3.5",
                          transform: "matrix(-1 0 0 1 1294 171)",
                          fill: "#171717",
                          stroke: "url(#paint103_linear_3351_13127)"
                      }), (0,
                      i.jsxs)("g", {
                          id: "Frame 1618873581_2",
                          children: [(0,
                          i.jsx)("rect", {
                              x: "1294",
                              y: "143",
                              width: "64",
                              height: "64",
                              rx: "19",
                              fill: "#161615"
                          }), (0,
                          i.jsx)("rect", {
                              x: "1294",
                              y: "143",
                              width: "64",
                              height: "64",
                              rx: "19",
                              stroke: "url(#paint104_linear_3351_13127)",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("g", {
                              id: "L3_2",
                              children: (0,
                              i.jsxs)("g", {
                                  id: "L3_3",
                                  children: [(0,
                                  i.jsx)("path", {
                                      d: "M1309.95 164.6L1313.55 164.54V182.6H1324.95V185.6H1309.95V164.6Z",
                                      fill: "url(#paint105_linear_3351_13127)"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M1329.26 167.63V164H1341.8V168.65L1336.37 172.79V173.09C1341.56 173.15 1343 175.97 1343 178.97C1343 183.17 1340.21 185.93 1335.62 185.93C1330.55 185.93 1328.03 182.54 1327.34 178.73L1331 177.74C1331.24 180.65 1333.01 182.93 1335.8 182.93C1338.26 182.93 1339.4 181.16 1339.4 179.03C1339.4 176.93 1338.26 174.56 1332.86 174.56V171.68L1338.23 167.6L1329.26 167.63Z",
                                      fill: "url(#paint106_linear_3351_13127)"
                                  })]
                              })
                          })]
                      })]
                  })
              }), (0,
              i.jsx)("g", {
                  id: "OCAI",
                  children: (0,
                  i.jsxs)("g", {
                      id: "Group 12",
                      children: [(0,
                      i.jsx)("rect", {
                          id: "Rectangle 4_8",
                          x: "182.5",
                          y: "337.5",
                          width: "17",
                          height: "7",
                          rx: "3.5",
                          fill: "#171717",
                          stroke: "url(#paint107_linear_3351_13127)"
                      }), (0,
                      i.jsxs)("g", {
                          id: "Frame 1618873582",
                          children: [(0,
                          i.jsx)("rect", {
                              x: "-1",
                              y: "1",
                              width: "84",
                              height: "84",
                              rx: "25",
                              transform: "matrix(-1 0 0 1 182 298)",
                              fill: "#161615"
                          }), (0,
                          i.jsx)("rect", {
                              x: "-1",
                              y: "1",
                              width: "84",
                              height: "84",
                              rx: "25",
                              transform: "matrix(-1 0 0 1 182 298)",
                              stroke: "url(#paint108_linear_3351_13127)",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("g", {
                              id: "OCAI_2",
                              children: (0,
                              i.jsxs)("g", {
                                  id: "OCAI_3",
                                  children: [(0,
                                  i.jsx)("path", {
                                      d: "M122.864 350C118.444 350 114 347.012 114 341.062C114 335.012 118.444 332 122.864 332C127.308 332 131.728 335.012 131.728 341.062C131.728 347.012 127.308 350 122.864 350ZM122.864 347.531C125.951 347.531 128.921 345.704 128.921 341.062C128.921 336.346 125.951 334.469 122.864 334.469C119.8 334.469 116.807 336.346 116.807 341.062C116.807 345.704 119.8 347.531 122.864 347.531Z",
                                      fill: "white"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M122.864 350C118.444 350 114 347.012 114 341.062C114 335.012 118.444 332 122.864 332C127.308 332 131.728 335.012 131.728 341.062C131.728 347.012 127.308 350 122.864 350ZM122.864 347.531C125.951 347.531 128.921 345.704 128.921 341.062C128.921 336.346 125.951 334.469 122.864 334.469C119.8 334.469 116.807 336.346 116.807 341.062C116.807 345.704 119.8 347.531 122.864 347.531Z",
                                      fill: "url(#paint109_linear_3351_13127)"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M147.021 345.852V348.864C145.617 349.63 144.05 350 142.46 350C138.04 350 133.596 347.012 133.596 341.062C133.596 335.111 138.04 332 142.46 332C144.05 332 145.617 332.395 147.021 333.16V336.173C145.851 334.716 144.238 334.469 142.46 334.469C139.794 334.469 136.87 336.716 136.87 341.062C136.87 345.407 139.794 347.531 142.46 347.531C144.238 347.531 145.851 347.309 147.021 345.852Z",
                                      fill: "white"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M147.021 345.852V348.864C145.617 349.63 144.05 350 142.46 350C138.04 350 133.596 347.012 133.596 341.062C133.596 335.111 138.04 332 142.46 332C144.05 332 145.617 332.395 147.021 333.16V336.173C145.851 334.716 144.238 334.469 142.46 334.469C139.794 334.469 136.87 336.716 136.87 341.062C136.87 345.407 139.794 347.531 142.46 347.531C144.238 347.531 145.851 347.309 147.021 345.852Z",
                                      fill: "url(#paint110_linear_3351_13127)"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M151.887 349.778H148.893L155.114 332.494H158.108L164.329 349.778H161.335L159.815 345.531H153.407L151.887 349.778ZM156.33 337.432L154.296 343.062H158.926L156.892 337.432H156.33Z",
                                      fill: "white"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M151.887 349.778H148.893L155.114 332.494H158.108L164.329 349.778H161.335L159.815 345.531H153.407L151.887 349.778ZM156.33 337.432L154.296 343.062H158.926L156.892 337.432H156.33Z",
                                      fill: "url(#paint111_linear_3351_13127)"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M166.193 332.494H169V349.778H166.193V332.494Z",
                                      fill: "white"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M166.193 332.494H169V349.778H166.193V332.494Z",
                                      fill: "url(#paint112_linear_3351_13127)"
                                  })]
                              })
                          })]
                      })]
                  })
              }), (0,
              i.jsx)("g", {
                  id: "Node",
                  children: (0,
                  i.jsxs)("g", {
                      id: "Group 12_2",
                      children: [(0,
                      i.jsx)("rect", {
                          id: "Rectangle 4_9",
                          x: "-0.5",
                          y: "0.5",
                          width: "17",
                          height: "7",
                          rx: "3.5",
                          transform: "matrix(-1 0 0 1 1215 338)",
                          fill: "#171717",
                          stroke: "url(#paint113_linear_3351_13127)"
                      }), (0,
                      i.jsxs)("g", {
                          id: "Frame 1618873582_2",
                          children: [(0,
                          i.jsx)("rect", {
                              x: "1215",
                              y: "300",
                              width: "84",
                              height: "84",
                              rx: "25",
                              fill: "#161615"
                          }), (0,
                          i.jsx)("rect", {
                              x: "1215",
                              y: "300",
                              width: "84",
                              height: "84",
                              rx: "25",
                              stroke: "url(#paint114_linear_3351_13127)",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("g", {
                              id: "L3_4",
                              children: (0,
                              i.jsxs)("g", {
                                  id: "Path",
                                  children: [(0,
                                  i.jsx)("path", {
                                      d: "M1263.96 355.893C1263.01 355.875 1262.09 355.508 1261.36 354.852C1260.63 354.196 1260.13 353.291 1259.94 352.287C1259.75 351.282 1259.88 350.238 1260.32 349.328C1260.76 348.417 1261.47 347.694 1262.34 347.278L1262.09 346.657C1261.64 345.532 1260.93 344.556 1260.02 343.833C1259.1 343.109 1258.02 342.663 1256.89 342.543L1256.75 342.543C1254.64 342.334 1252.69 341.282 1251.27 339.594L1251.27 350.15C1252.25 350.432 1253.1 351.089 1253.66 351.997C1254.23 352.905 1254.46 354.002 1254.33 355.085C1254.2 356.168 1253.71 357.162 1252.94 357.883C1252.18 358.603 1251.2 359 1250.18 359C1249.17 359 1248.19 358.603 1247.43 357.883C1246.66 357.162 1246.17 356.168 1246.04 355.085C1245.9 354.002 1246.14 352.905 1246.71 351.997C1247.27 351.089 1248.12 350.432 1249.1 350.15L1249.1 333.85C1248.12 333.568 1247.27 332.911 1246.71 332.003C1246.14 331.095 1245.9 329.998 1246.04 328.915C1246.17 327.832 1246.66 326.838 1247.43 326.117C1248.19 325.397 1249.17 325 1250.18 325C1251.2 325 1252.18 325.397 1252.94 326.117C1253.71 326.838 1254.2 327.832 1254.33 328.915C1254.46 329.998 1254.23 331.095 1253.66 332.003C1253.1 332.911 1252.25 333.568 1251.27 333.85C1251.35 335.471 1251.97 337.006 1253.01 338.175C1254.06 339.344 1255.46 340.068 1256.97 340.215L1257.11 340.215C1258.62 340.377 1260.07 340.974 1261.29 341.944C1262.52 342.913 1263.48 344.22 1264.07 345.726L1264.58 346.967C1265.59 347.169 1266.5 347.766 1267.13 348.644C1267.76 349.522 1268.06 350.62 1267.99 351.726C1267.91 352.832 1267.46 353.87 1266.72 354.639C1265.97 355.408 1264.99 355.854 1263.96 355.893Z",
                                      fill: "black"
                                  }), (0,
                                  i.jsx)("path", {
                                      d: "M1263.96 355.893C1263.01 355.875 1262.09 355.508 1261.36 354.852C1260.63 354.196 1260.13 353.291 1259.94 352.287C1259.75 351.282 1259.88 350.238 1260.32 349.328C1260.76 348.417 1261.47 347.694 1262.34 347.278L1262.09 346.657C1261.64 345.532 1260.93 344.556 1260.02 343.833C1259.1 343.109 1258.02 342.663 1256.89 342.543L1256.75 342.543C1254.64 342.334 1252.69 341.282 1251.27 339.594L1251.27 350.15C1252.25 350.432 1253.1 351.089 1253.66 351.997C1254.23 352.905 1254.46 354.002 1254.33 355.085C1254.2 356.168 1253.71 357.162 1252.94 357.883C1252.18 358.603 1251.2 359 1250.18 359C1249.17 359 1248.19 358.603 1247.43 357.883C1246.66 357.162 1246.17 356.168 1246.04 355.085C1245.9 354.002 1246.14 352.905 1246.71 351.997C1247.27 351.089 1248.12 350.432 1249.1 350.15L1249.1 333.85C1248.12 333.568 1247.27 332.911 1246.71 332.003C1246.14 331.095 1245.9 329.998 1246.04 328.915C1246.17 327.832 1246.66 326.838 1247.43 326.117C1248.19 325.397 1249.17 325 1250.18 325C1251.2 325 1252.18 325.397 1252.94 326.117C1253.71 326.838 1254.2 327.832 1254.33 328.915C1254.46 329.998 1254.23 331.095 1253.66 332.003C1253.1 332.911 1252.25 333.568 1251.27 333.85C1251.35 335.471 1251.97 337.006 1253.01 338.175C1254.06 339.344 1255.46 340.068 1256.97 340.215L1257.11 340.215C1258.62 340.377 1260.07 340.974 1261.29 341.944C1262.52 342.913 1263.48 344.22 1264.07 345.726L1264.58 346.967C1265.59 347.169 1266.5 347.766 1267.13 348.644C1267.76 349.522 1268.06 350.62 1267.99 351.726C1267.91 352.832 1267.46 353.87 1266.72 354.639C1265.97 355.408 1264.99 355.854 1263.96 355.893Z",
                                      fill: "url(#paint115_linear_3351_13127)"
                                  })]
                              })
                          })]
                      })]
                  })
              })]
          }), (0,
          i.jsxs)("defs", {
              children: [(0,
              i.jsxs)("filter", {
                  id: "filter0_f_3351_13127",
                  x: "495.342",
                  y: "80",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter1_f_3351_13127",
                  x: "495.342",
                  y: "80",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter2_f_3351_13127",
                  x: "507.342",
                  y: "92",
                  width: "104.643",
                  height: "27",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter3_f_3351_13127",
                  x: "513.342",
                  y: "98",
                  width: "92.6426",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter4_f_3351_13127",
                  x: "517.445",
                  y: "98",
                  width: "88.5391",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter5_f_3351_13127",
                  x: "495.342",
                  y: "95",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter6_f_3351_13127",
                  x: "495.342",
                  y: "95",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter7_f_3351_13127",
                  x: "507.342",
                  y: "107",
                  width: "104.643",
                  height: "27",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter8_f_3351_13127",
                  x: "513.342",
                  y: "113",
                  width: "92.6426",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter9_f_3351_13127",
                  x: "517.445",
                  y: "113",
                  width: "88.5391",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter10_f_3351_13127",
                  x: "495.342",
                  y: "110",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter11_f_3351_13127",
                  x: "495.342",
                  y: "110",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter12_f_3351_13127",
                  x: "507.342",
                  y: "122",
                  width: "104.643",
                  height: "27",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter13_f_3351_13127",
                  x: "513.342",
                  y: "128",
                  width: "92.6426",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter14_f_3351_13127",
                  x: "517.445",
                  y: "128",
                  width: "88.5391",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter15_f_3351_13127",
                  x: "495.342",
                  y: "125",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter16_f_3351_13127",
                  x: "495.342",
                  y: "125",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter17_f_3351_13127",
                  x: "507.342",
                  y: "137",
                  width: "104.643",
                  height: "27",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter18_f_3351_13127",
                  x: "513.342",
                  y: "143",
                  width: "92.6426",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter19_f_3351_13127",
                  x: "517.445",
                  y: "143",
                  width: "88.5391",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter20_f_3351_13127",
                  x: "793.012",
                  y: "80",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter21_f_3351_13127",
                  x: "793.012",
                  y: "80",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter22_f_3351_13127",
                  x: "805.012",
                  y: "92",
                  width: "104.643",
                  height: "27",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter23_f_3351_13127",
                  x: "811.012",
                  y: "98",
                  width: "92.6426",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter24_f_3351_13127",
                  x: "811.012",
                  y: "98",
                  width: "88.5391",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter25_f_3351_13127",
                  x: "793.012",
                  y: "95",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter26_f_3351_13127",
                  x: "793.012",
                  y: "95",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter27_f_3351_13127",
                  x: "805.012",
                  y: "107",
                  width: "104.643",
                  height: "27",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter28_f_3351_13127",
                  x: "811.012",
                  y: "113",
                  width: "92.6426",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter29_f_3351_13127",
                  x: "811.012",
                  y: "113",
                  width: "88.5391",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter30_f_3351_13127",
                  x: "793.012",
                  y: "125",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter31_f_3351_13127",
                  x: "793.012",
                  y: "125",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter32_f_3351_13127",
                  x: "805.012",
                  y: "137",
                  width: "104.643",
                  height: "27",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter33_f_3351_13127",
                  x: "811.012",
                  y: "143",
                  width: "92.6426",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter34_f_3351_13127",
                  x: "811.012",
                  y: "143",
                  width: "88.5391",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter35_f_3351_13127",
                  x: "793.012",
                  y: "110",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter36_f_3351_13127",
                  x: "793.012",
                  y: "110",
                  width: "128.643",
                  height: "51",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter37_f_3351_13127",
                  x: "805.012",
                  y: "122",
                  width: "104.643",
                  height: "27",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter38_f_3351_13127",
                  x: "811.012",
                  y: "128",
                  width: "92.6426",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter39_f_3351_13127",
                  x: "811.012",
                  y: "128",
                  width: "88.5391",
                  height: "15",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter40_f_3351_13127",
                  x: "650.484",
                  y: "249.012",
                  width: "51",
                  height: "128.643",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter41_f_3351_13127",
                  x: "650.484",
                  y: "249.012",
                  width: "51",
                  height: "128.643",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter42_f_3351_13127",
                  x: "662.484",
                  y: "261.012",
                  width: "27",
                  height: "104.643",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter43_f_3351_13127",
                  x: "668.484",
                  y: "267.012",
                  width: "15",
                  height: "92.6425",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter44_f_3351_13127",
                  x: "668.484",
                  y: "267.012",
                  width: "15",
                  height: "88.5394",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter45_f_3351_13127",
                  x: "666.484",
                  y: "249.012",
                  width: "51",
                  height: "128.643",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter46_f_3351_13127",
                  x: "666.484",
                  y: "249.012",
                  width: "51",
                  height: "128.643",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter47_f_3351_13127",
                  x: "678.484",
                  y: "261.012",
                  width: "27",
                  height: "104.643",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter48_f_3351_13127",
                  x: "684.484",
                  y: "267.012",
                  width: "15",
                  height: "92.6425",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter49_f_3351_13127",
                  x: "684.484",
                  y: "267.012",
                  width: "15",
                  height: "88.5394",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter50_f_3351_13127",
                  x: "681.484",
                  y: "249.012",
                  width: "51",
                  height: "128.643",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter51_f_3351_13127",
                  x: "681.484",
                  y: "249.012",
                  width: "51",
                  height: "128.643",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter52_f_3351_13127",
                  x: "693.484",
                  y: "261.012",
                  width: "27",
                  height: "104.643",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter53_f_3351_13127",
                  x: "699.484",
                  y: "267.012",
                  width: "15",
                  height: "92.6425",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter54_f_3351_13127",
                  x: "699.484",
                  y: "267.012",
                  width: "15",
                  height: "88.5394",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter55_f_3351_13127",
                  x: "696.484",
                  y: "249.012",
                  width: "51",
                  height: "128.643",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter56_f_3351_13127",
                  x: "696.484",
                  y: "249.012",
                  width: "51",
                  height: "128.643",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "12",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter57_f_3351_13127",
                  x: "708.484",
                  y: "261.012",
                  width: "27",
                  height: "104.643",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter58_f_3351_13127",
                  x: "714.484",
                  y: "267.012",
                  width: "15",
                  height: "92.6425",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("filter", {
                  id: "filter59_f_3351_13127",
                  x: "714.484",
                  y: "267.012",
                  width: "15",
                  height: "88.5394",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [(0,
                  i.jsx)("feFlood", {
                      "flood-opacity": "0",
                      result: "BackgroundImageFix"
                  }), (0,
                  i.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape"
                  }), (0,
                  i.jsx)("feGaussianBlur", {
                      stdDeviation: "3",
                      result: "effect1_foregroundBlur_3351_13127"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint0_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint1_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint2_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint3_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint4_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "76.5394",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint5_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint6_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint7_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint8_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint9_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint10_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "76.5394",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint11_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint12_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint13_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint14_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint15_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint16_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "76.5394",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint17_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint18_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint19_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint20_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint21_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint22_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "76.5394",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint23_linear_3351_13127",
                  x1: "1.5",
                  y1: "0",
                  x2: "1.5",
                  y2: "80.6425",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint24_linear_3351_13127",
                  x1: "818.512",
                  y1: "107",
                  x2: "818.512",
                  y2: "187.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint25_linear_3351_13127",
                  x1: "818.512",
                  y1: "107",
                  x2: "818.512",
                  y2: "187.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint26_linear_3351_13127",
                  x1: "818.512",
                  y1: "107",
                  x2: "818.512",
                  y2: "187.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint27_linear_3351_13127",
                  x1: "818.512",
                  y1: "107",
                  x2: "818.512",
                  y2: "187.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint28_linear_3351_13127",
                  x1: "818.512",
                  y1: "107",
                  x2: "818.512",
                  y2: "183.539",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint29_linear_3351_13127",
                  x1: "811.5",
                  y1: "107",
                  x2: "811.5",
                  y2: "187.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint30_linear_3351_13127",
                  x1: "818.512",
                  y1: "122",
                  x2: "818.512",
                  y2: "202.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint31_linear_3351_13127",
                  x1: "818.512",
                  y1: "122",
                  x2: "818.512",
                  y2: "202.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint32_linear_3351_13127",
                  x1: "818.512",
                  y1: "122",
                  x2: "818.512",
                  y2: "202.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint33_linear_3351_13127",
                  x1: "818.512",
                  y1: "122",
                  x2: "818.512",
                  y2: "202.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint34_linear_3351_13127",
                  x1: "818.512",
                  y1: "122",
                  x2: "818.512",
                  y2: "198.539",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint35_linear_3351_13127",
                  x1: "811.5",
                  y1: "122",
                  x2: "811.5",
                  y2: "202.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint36_linear_3351_13127",
                  x1: "818.512",
                  y1: "152",
                  x2: "818.512",
                  y2: "232.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint37_linear_3351_13127",
                  x1: "818.512",
                  y1: "152",
                  x2: "818.512",
                  y2: "232.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint38_linear_3351_13127",
                  x1: "818.512",
                  y1: "152",
                  x2: "818.512",
                  y2: "232.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint39_linear_3351_13127",
                  x1: "818.512",
                  y1: "152",
                  x2: "818.512",
                  y2: "232.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint40_linear_3351_13127",
                  x1: "818.512",
                  y1: "152",
                  x2: "818.512",
                  y2: "228.539",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint41_linear_3351_13127",
                  x1: "811.5",
                  y1: "152",
                  x2: "811.5",
                  y2: "232.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint42_linear_3351_13127",
                  x1: "818.512",
                  y1: "137",
                  x2: "818.512",
                  y2: "217.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint43_linear_3351_13127",
                  x1: "818.512",
                  y1: "137",
                  x2: "818.512",
                  y2: "217.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint44_linear_3351_13127",
                  x1: "818.512",
                  y1: "137",
                  x2: "818.512",
                  y2: "217.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint45_linear_3351_13127",
                  x1: "818.512",
                  y1: "137",
                  x2: "818.512",
                  y2: "217.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint46_linear_3351_13127",
                  x1: "818.512",
                  y1: "137",
                  x2: "818.512",
                  y2: "213.539",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint47_linear_3351_13127",
                  x1: "811.5",
                  y1: "137",
                  x2: "811.5",
                  y2: "217.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint48_linear_3351_13127",
                  x1: "675.984",
                  y1: "273.012",
                  x2: "675.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint49_linear_3351_13127",
                  x1: "675.984",
                  y1: "273.012",
                  x2: "675.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint50_linear_3351_13127",
                  x1: "675.984",
                  y1: "273.012",
                  x2: "675.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint51_linear_3351_13127",
                  x1: "675.984",
                  y1: "273.012",
                  x2: "675.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint52_linear_3351_13127",
                  x1: "675.984",
                  y1: "273.012",
                  x2: "675.984",
                  y2: "349.552",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint53_linear_3351_13127",
                  x1: "675.984",
                  y1: "266",
                  x2: "675.984",
                  y2: "346.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint54_linear_3351_13127",
                  x1: "691.984",
                  y1: "273.012",
                  x2: "691.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint55_linear_3351_13127",
                  x1: "691.984",
                  y1: "273.012",
                  x2: "691.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint56_linear_3351_13127",
                  x1: "691.984",
                  y1: "273.012",
                  x2: "691.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint57_linear_3351_13127",
                  x1: "691.984",
                  y1: "273.012",
                  x2: "691.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint58_linear_3351_13127",
                  x1: "691.984",
                  y1: "273.012",
                  x2: "691.984",
                  y2: "349.552",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint59_linear_3351_13127",
                  x1: "691.984",
                  y1: "266",
                  x2: "691.984",
                  y2: "346.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint60_linear_3351_13127",
                  x1: "706.984",
                  y1: "273.012",
                  x2: "706.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint61_linear_3351_13127",
                  x1: "706.984",
                  y1: "273.012",
                  x2: "706.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint62_linear_3351_13127",
                  x1: "706.984",
                  y1: "273.012",
                  x2: "706.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint63_linear_3351_13127",
                  x1: "706.984",
                  y1: "273.012",
                  x2: "706.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint64_linear_3351_13127",
                  x1: "706.984",
                  y1: "273.012",
                  x2: "706.984",
                  y2: "349.552",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint65_linear_3351_13127",
                  x1: "706.984",
                  y1: "266",
                  x2: "706.984",
                  y2: "346.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint66_linear_3351_13127",
                  x1: "721.984",
                  y1: "273.012",
                  x2: "721.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint67_linear_3351_13127",
                  x1: "721.984",
                  y1: "273.012",
                  x2: "721.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint68_linear_3351_13127",
                  x1: "721.984",
                  y1: "273.012",
                  x2: "721.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint69_linear_3351_13127",
                  x1: "721.984",
                  y1: "273.012",
                  x2: "721.984",
                  y2: "353.655",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint70_linear_3351_13127",
                  x1: "721.984",
                  y1: "273.012",
                  x2: "721.984",
                  y2: "349.552",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint71_linear_3351_13127",
                  x1: "721.984",
                  y1: "266",
                  x2: "721.984",
                  y2: "346.643",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#992222",
                      "stop-opacity": "0"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF3838"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint72_linear_3351_13127",
                  x1: "776",
                  y1: "105",
                  x2: "758",
                  y2: "105",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint73_linear_3351_13127",
                  x1: "776",
                  y1: "120",
                  x2: "758",
                  y2: "120",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint74_linear_3351_13127",
                  x1: "776",
                  y1: "135",
                  x2: "758",
                  y2: "135",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint75_linear_3351_13127",
                  x1: "776",
                  y1: "150",
                  x2: "758",
                  y2: "150",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint76_linear_3351_13127",
                  x1: "18",
                  y1: "4",
                  x2: "0",
                  y2: "4",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint77_linear_3351_13127",
                  x1: "18",
                  y1: "4",
                  x2: "0",
                  y2: "4",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint78_linear_3351_13127",
                  x1: "18",
                  y1: "4",
                  x2: "0",
                  y2: "4",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint79_linear_3351_13127",
                  x1: "18",
                  y1: "4",
                  x2: "0",
                  y2: "4",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint80_linear_3351_13127",
                  x1: "18",
                  y1: "4",
                  x2: "0",
                  y2: "4",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint81_linear_3351_13127",
                  x1: "18",
                  y1: "4",
                  x2: "0",
                  y2: "4",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint82_linear_3351_13127",
                  x1: "18",
                  y1: "4",
                  x2: "0",
                  y2: "4",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint83_linear_3351_13127",
                  x1: "18",
                  y1: "4",
                  x2: "0",
                  y2: "4",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint84_linear_3351_13127",
                  x1: "640",
                  y1: "72",
                  x2: "758",
                  y2: "190",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#525252",
                      "stop-opacity": "0.5"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#525252",
                      "stop-opacity": "0.12"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint85_linear_3351_13127",
                  x1: "700.253",
                  y1: "106.469",
                  x2: "700.253",
                  y2: "158.776",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint86_linear_3351_13127",
                  x1: "700.253",
                  y1: "106.469",
                  x2: "700.253",
                  y2: "158.776",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint87_linear_3351_13127",
                  x1: "700.253",
                  y1: "106.469",
                  x2: "700.253",
                  y2: "158.776",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint88_linear_3351_13127",
                  x1: "700.253",
                  y1: "106.469",
                  x2: "700.253",
                  y2: "158.776",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint89_linear_3351_13127",
                  x1: "231",
                  y1: "43",
                  x2: "213",
                  y2: "43",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint90_linear_3351_13127",
                  x1: "0",
                  y1: "0",
                  x2: "86",
                  y2: "86",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#525252",
                      "stop-opacity": "0.5"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#525252",
                      "stop-opacity": "0.12"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint91_linear_3351_13127",
                  x1: "171.149",
                  y1: "15.355",
                  x2: "171.149",
                  y2: "66.2089",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint92_linear_3351_13127",
                  x1: "171.149",
                  y1: "15.355",
                  x2: "171.149",
                  y2: "66.2089",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint93_linear_3351_13127",
                  x1: "18",
                  y1: "4",
                  x2: "0",
                  y2: "4",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint94_linear_3351_13127",
                  x1: "1188",
                  y1: "1",
                  x2: "1274",
                  y2: "87",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#525252",
                      "stop-opacity": "0.5"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#525252",
                      "stop-opacity": "0.12"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint95_linear_3351_13127",
                  x1: "1232.26",
                  y1: "21.4952",
                  x2: "1232.26",
                  y2: "68.6857",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint96_linear_3351_13127",
                  x1: "1232.26",
                  y1: "21.4952",
                  x2: "1232.26",
                  y2: "68.6857",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint97_linear_3351_13127",
                  x1: "1232.26",
                  y1: "21.4952",
                  x2: "1232.26",
                  y2: "68.6857",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint98_linear_3351_13127",
                  x1: "126",
                  y1: "174",
                  x2: "108",
                  y2: "174",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint99_linear_3351_13127",
                  x1: "0",
                  y1: "0",
                  x2: "66",
                  y2: "66",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#525252",
                      "stop-opacity": "0.5"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#525252",
                      "stop-opacity": "0.12"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint100_linear_3351_13127",
                  x1: "77.483",
                  y1: "149.182",
                  x2: "77.483",
                  y2: "195.677",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint101_linear_3351_13127",
                  x1: "77.483",
                  y1: "149.182",
                  x2: "77.483",
                  y2: "195.677",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint102_linear_3351_13127",
                  x1: "77.483",
                  y1: "149.182",
                  x2: "77.483",
                  y2: "195.677",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint103_linear_3351_13127",
                  x1: "18",
                  y1: "4",
                  x2: "0",
                  y2: "4",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint104_linear_3351_13127",
                  x1: "1293",
                  y1: "142",
                  x2: "1359",
                  y2: "208",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#525252",
                      "stop-opacity": "0.5"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#525252",
                      "stop-opacity": "0.12"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint105_linear_3351_13127",
                  x1: "1326.99",
                  y1: "150.679",
                  x2: "1326.99",
                  y2: "202.986",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint106_linear_3351_13127",
                  x1: "1326.99",
                  y1: "150.679",
                  x2: "1326.99",
                  y2: "202.986",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint107_linear_3351_13127",
                  x1: "200",
                  y1: "341",
                  x2: "182",
                  y2: "341",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint108_linear_3351_13127",
                  x1: "0",
                  y1: "0",
                  x2: "86",
                  y2: "86",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#525252",
                      "stop-opacity": "0.5"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#525252",
                      "stop-opacity": "0.12"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint109_linear_3351_13127",
                  x1: "142.33",
                  y1: "327.04",
                  x2: "142.33",
                  y2: "353.193",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint110_linear_3351_13127",
                  x1: "142.33",
                  y1: "327.04",
                  x2: "142.33",
                  y2: "353.193",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint111_linear_3351_13127",
                  x1: "142.33",
                  y1: "327.04",
                  x2: "142.33",
                  y2: "353.193",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint112_linear_3351_13127",
                  x1: "142.33",
                  y1: "327.04",
                  x2: "142.33",
                  y2: "353.193",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint113_linear_3351_13127",
                  x1: "18",
                  y1: "4",
                  x2: "0",
                  y2: "4",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#464646"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#737373",
                      "stop-opacity": "0"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint114_linear_3351_13127",
                  x1: "1214",
                  y1: "299",
                  x2: "1300",
                  y2: "385",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#525252",
                      "stop-opacity": "0.5"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#525252",
                      "stop-opacity": "0.12"
                  })]
              }), (0,
              i.jsxs)("linearGradient", {
                  id: "paint115_linear_3351_13127",
                  x1: "1257.33",
                  y1: "379.68",
                  x2: "1257.33",
                  y2: "298.473",
                  gradientUnits: "userSpaceOnUse",
                  children: [(0,
                  i.jsx)("stop", {
                      "stop-color": "#D2D2D2"
                  }), (0,
                  i.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#262626"
                  })]
              }), (0,
              i.jsx)("clipPath", {
                  id: "clip0_3351_13127",
                  children: (0,
                  i.jsx)("rect", {
                      width: "1402",
                      height: "482",
                      fill: "white"
                  })
              })]
          })]
      });
      function eo(e) {
          let {Shinytext: t} = e;
          return (0,
          i.jsx)("div", {
              className: "z-10 flex min-h-[2rem]  items-center justify-center",
              children: (0,
              i.jsx)("div", {
                  className: (0,
                  l.cn)("group rounded-full border border-[#404040] bg-[#171717] text-base text-[#D4D4D4] transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"),
                  children: (0,
                  i.jsxs)(M, {
                      className: "inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-[#101010]",
                      children: [(0,
                      i.jsx)("span", {
                          children: t
                      }), (0,
                      i.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "25",
                          height: "20",
                          viewBox: "0 0 33 32",
                          fill: "none",
                          className: "ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5",
                          children: [(0,
                          i.jsx)("circle", {
                              cx: "16.1495",
                              cy: "15.9996",
                              r: "7.27011",
                              fill: "#22C55E"
                          }), (0,
                          i.jsx)("circle", {
                              opacity: "0.2",
                              cx: "16.1497",
                              cy: "15.9998",
                              r: "15.8621",
                              fill: "#22C55E"
                          })]
                      })]
                  })
              })
          })
      }
      var ea = function() {
          let e = (0,
          w.ac)({
              query: "(max-width: 768px)"
          })
            , t = (0,
          o.useRef)(null)
            , s = (0,
          f.Y)(t, {
              once: !0
          });
          return (0,
          i.jsxs)("div", {
              ref: t,
              children: [(0,
              i.jsxs)("div", {
                  className: "flex flex-col md:items-center items-center justify-center gap-y-8 p-4 mt-4 pb-4",
                  children: [(0,
                    i.jsx)(u.E.div, {
                        initial: {
                            opacity: 0,
                            y: 100
                        },
                        animate: s ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: e ? {
                            duration: 1,
                            delay: 1.5,
                            ease: h.mZ
                        } : {
                            duration: 1,
                            delay: 1.8,
                            ease: h.mZ
                        },
                        children: (0,
                        i.jsx)(D.default, {
                            href: "https://stake-destranetwork-project.vercel.app/",
                            target: "_blank",
                            children: (0,
                            i.jsx)(eo, {
                                Shinytext: " Staking Live Now "
                            })
                        })
                    }), (0,
                  i.jsxs)(u.E.div, {
                      initial: {
                          opacity: 0,
                          y: 90
                      },
                      animate: s ? {
                          opacity: 1,
                          y: 0
                      } : {},
                      transition: e ? {
                          duration: 1,
                          delay: 1.6,
                          ease: h.mZ
                      } : {
                          duration: 1,
                          delay: 1.9,
                          ease: h.mZ
                      },
                      className: "hidden font-latom  text-4xl md:text-6xl font-semibold md:text-center hero-text1 gap-y-5 md:flex flex-col leading-normal",
                      children: [(0,
                      i.jsx)("h2", {
                          children: "Empowering the next-gen AI with"
                      }), (0,
                      i.jsx)("h2", {
                          className: "text-3xl md:text-5xl hero-text2",
                          children: "decentralized computing"
                      })]
                  }), (0,
                  i.jsxs)("div", {
                      className: "md:hidden text-5xl md:text-6xl font-semibold md:text-center  gap-y-2 flex flex-col leading-snug",
                      children: [(0,
                      i.jsxs)(u.E.h2, {
                          initial: {
                              opacity: 0,
                              y: 90
                          },
                          animate: s ? {
                              opacity: 1,
                              y: 0
                          } : {},
                          transition: e ? {
                              duration: 1,
                              delay: 1.7,
                              ease: h.mZ
                          } : {
                              duration: 1,
                              delay: 2,
                              ease: h.mZ
                          },
                          className: "flex flex-col items-center text-[#FFF] self-stretch",
                          children: ["Empowering", (0,
                          i.jsx)("span", {
                              className: "header-text",
                              children: "the next-gen "
                          }), (0,
                          i.jsx)("span", {
                              className: "hero-text1 ",
                              children: "AI with "
                          })]
                      }), (0,
                      i.jsxs)(u.E.h2, {
                          initial: {
                              opacity: 0,
                              y: 90
                          },
                          animate: s ? {
                              opacity: 1,
                              y: 0
                          } : {},
                          transition: e ? {
                              duration: 1,
                              delay: 1.8,
                              ease: h.mZ
                          } : {
                              duration: 1,
                              delay: 2.1,
                              ease: h.mZ
                          },
                          className: "text-5xl md:text-5xl hero-text2 flex items-center flex-col",
                          children: ["decentralized", (0,
                          i.jsx)("span", {
                              className: "hero-text3",
                              children: "computing "
                          })]
                      })]
                  }), (0,
                  i.jsxs)(u.E.p, {
                      initial: {
                          opacity: 0,
                          y: 80
                      },
                      animate: s ? {
                          opacity: 1,
                          y: 0
                      } : {},
                      transition: e ? {
                          duration: 1,
                          delay: 1.9,
                          ease: h.mZ
                      } : {
                          duration: 1,
                          delay: 2.4,
                          ease: h.mZ
                      },
                      className: "text-[#D4D4D4] font-normal md:text-lg text-sm items-center text-center md:text-center md:max-w-[984px]  leading-relaxed",
                      children: ["Destra Network AI pioneers true Decentralized computing solutions for the emerging AI economy. Our comprehensive suite of offerings is designed to immerse web3 enthusiasts in authentic decentralized AI", (0,
                      i.jsx)("span", {
                          className: "inline md:hidden",
                          children: "."
                      }), (0,
                      i.jsx)("span", {
                          className: "hidden md:inline",
                          children: ", leveraging the robust Destra GPU network and cloud solutions."
                      })]
                  }), (0,
                  i.jsx)("div", {
                      className: "flex gap-1",
                      children: (0,
                      i.jsx)(D.default, {
                          href: "https://destranetwork.io/",
                          target: "_blank",
                          className: "justify-center",
                          children: (0,
                          i.jsx)(u.E.button, {
                              initial: {
                                  opacity: 0,
                                  y: 80
                              },
                              animate: s ? {
                                  opacity: 1,
                                  y: 0
                              } : {},
                              transition: e ? {
                                  duration: 1,
                                  delay: 1.9,
                                  ease: h.YQ
                              } : {
                                  duration: 1,
                                  delay: 2.3,
                                  ease: h.YQ
                              },
                              className: "inline-flex py-3.5 px-8 justify-center items-center gap-2.5 rounded-3xl bg-[#FF3838] text-[#fff] text-lg font-bold not-italic leading-normal",
                              children: "Deploy Now"
                          })
                      })
                  })]
              })]
          })
      }
        , en = () => (0,
      i.jsx)(i.Fragment, {
          children: (0,
          i.jsxs)("svg", {
              width: "388",
              height: "528",
              viewBox: "0 0 388 528",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [(0,
              i.jsx)("g", {
                  id: "Hero SVG Mobile",
                  children: (0,
                  i.jsxs)("g", {
                      id: "Group 128",
                      children: [(0,
                      i.jsx)("defs", {
                          children: (0,
                          i.jsxs)("filter", {
                              id: "glow",
                              x: "-50%",
                              y: "-50%",
                              width: "200%",
                              height: "200%",
                              children: [(0,
                              i.jsx)("feGaussianBlur", {
                                  stdDeviation: "3.5",
                                  result: "coloredBlur"
                              }), (0,
                              i.jsxs)("feMerge", {
                                  children: [(0,
                                  i.jsx)("feMergeNode", {
                                      in: "coloredBlur"
                                  }), (0,
                                  i.jsx)("feMergeNode", {
                                      in: "SourceGraphic"
                                  })]
                              })]
                          })
                      }), (0,
                      i.jsxs)("g", {
                          id: "Left Highlight Lines",
                          filter: "url(#glow)",
                          className: "herosvg",
                          children: [(0,
                          i.jsx)("path", {
                              id: "L-4",
                              className: "highlight l-4",
                              opacity: "0.5",
                              d: "M136.5 129.5V129.5C124.626 129.5 115 139.126 115 151V250.095C115 258.696 110.398 266.638 102.937 270.916L89.5628 278.584C82.1018 282.862 77.5 290.804 77.5 299.405V306",
                              stroke: "red",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("path", {
                              id: "L-3",
                              className: "highlight l-3",
                              opacity: "0.5",
                              d: "M136.5 117.5H126C112.745 117.5 102 128.245 102 141.5V187.559C102 193.924 99.4714 200.029 94.9706 204.529L83.0294 216.471C78.5286 220.971 72.4241 223.5 66.0589 223.5H14.5",
                              stroke: "red",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("path", {
                              id: "L-2",
                              className: "highlight l-2",
                              opacity: "0.5",
                              d: "M136.5 105.5H11",
                              stroke: "red",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("path", {
                              id: "L-1",
                              className: "highlight l-1",
                              opacity: "0.5",
                              d: "M136.5 93.5V93.5C124.35 93.5 114.5 83.6503 114.5 71.5V50C114.5 41.7157 107.784 35 99.5 35V35",
                              stroke: "red",
                              "stroke-width": "2"
                          })]
                      }), (0,
                      i.jsxs)("g", {
                          id: "Right Highlight Lines",
                          filter: "url(#glow)",
                          className: "herosvg",
                          children: [(0,
                          i.jsx)("path", {
                              id: "R-4",
                              className: "highlight r-4",
                              opacity: "0.5",
                              d: "M251 129.5V129.5C262.874 129.5 272.5 139.126 272.5 151V250.095C272.5 258.696 277.102 266.638 284.563 270.916L297.937 278.584C305.398 282.862 310 290.804 310 299.405V306",
                              stroke: "red",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("path", {
                              id: "R-3",
                              className: "highlight r-3",
                              opacity: "0.5",
                              d: "M251 117.5H261.5C274.755 117.5 285.5 128.245 285.5 141.5V187.559C285.5 193.924 288.029 200.029 292.529 204.529L304.471 216.471C308.971 220.971 315.076 223.5 321.441 223.5H373",
                              stroke: "red",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("path", {
                              id: "R-2",
                              className: "highlight r-2",
                              opacity: "0.5",
                              d: "M251 105.5H376.5",
                              stroke: "red",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("path", {
                              id: "R-1",
                              className: "highlight r-1",
                              opacity: "0.5",
                              d: "M251 93.5V93.5C263.15 93.5 273 83.6503 273 71.5V50C273 41.7157 279.716 35 288 35V35",
                              stroke: "red",
                              "stroke-width": "2"
                          })]
                      }), (0,
                      i.jsxs)("g", {
                          id: "Bottom Highlight Lines",
                          filter: "url(#glow)",
                          className: "herosvg",
                          children: [(0,
                          i.jsx)("path", {
                              id: "B-4",
                              className: "highlight b-4",
                              opacity: "0.5",
                              d: "M212.781 170.5V527.844",
                              stroke: "red",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("path", {
                              id: "B-3",
                              className: "highlight b-3",
                              opacity: "0.5",
                              d: "M200.688 170.5V527.844",
                              stroke: "red",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("path", {
                              id: "B-2",
                              className: "highlight b-2",
                              opacity: "0.5",
                              d: "M188.594 170.5V527.844",
                              stroke: "red",
                              "stroke-width": "2"
                          }), (0,
                          i.jsx)("path", {
                              id: "B-1",
                              className: "highlight b-1",
                              opacity: "0.5",
                              d: "M176.5 170.5V527.844",
                              stroke: "red",
                              "stroke-width": "2"
                          })]
                      }), (0,
                      i.jsxs)("g", {
                          id: "Background Lines",
                          children: [(0,
                          i.jsxs)("g", {
                              id: "Bottom Lines",
                              children: [(0,
                              i.jsx)("path", {
                                  id: "B-4",
                                  opacity: "0.5",
                                  d: "M212.781 170.5V527.844",
                                  stroke: "#853D3D",
                                  "stroke-width": "2"
                              }), (0,
                              i.jsx)("path", {
                                  id: "B-3",
                                  opacity: "0.5",
                                  d: "M200.688 170.5V527.844",
                                  stroke: "#853D3D",
                                  "stroke-width": "2"
                              }), (0,
                              i.jsx)("path", {
                                  id: "B-2",
                                  opacity: "0.5",
                                  d: "M188.594 170.5V527.844",
                                  stroke: "#853D3D",
                                  "stroke-width": "2"
                              }), (0,
                              i.jsx)("path", {
                                  id: "B-1",
                                  opacity: "0.5",
                                  d: "M176.5 170.5V527.844",
                                  stroke: "#853D3D",
                                  "stroke-width": "2"
                              })]
                          }), (0,
                          i.jsxs)("g", {
                              id: "Left Line",
                              children: [(0,
                              i.jsx)("path", {
                                  id: "L-4",
                                  opacity: "0.5",
                                  d: "M136.5 129.5V129.5C124.626 129.5 115 139.126 115 151V250.095C115 258.696 110.398 266.638 102.937 270.916L89.5628 278.584C82.1018 282.862 77.5 290.804 77.5 299.405V306",
                                  stroke: "#853D3D",
                                  "stroke-width": "2"
                              }), (0,
                              i.jsx)("path", {
                                  id: "L-3",
                                  opacity: "0.5",
                                  d: "M136.5 117.5H126C112.745 117.5 102 128.245 102 141.5V187.559C102 193.924 99.4714 200.029 94.9706 204.529L83.0294 216.471C78.5286 220.971 72.4241 223.5 66.0589 223.5H14.5",
                                  stroke: "#853D3D",
                                  "stroke-width": "2"
                              }), (0,
                              i.jsx)("path", {
                                  id: "L-2",
                                  opacity: "0.5",
                                  d: "M136.5 105.5H11",
                                  stroke: "#853D3D",
                                  "stroke-width": "2"
                              }), (0,
                              i.jsx)("path", {
                                  id: "L-1",
                                  opacity: "0.5",
                                  d: "M136.5 93.5V93.5C124.35 93.5 114.5 83.6503 114.5 71.5V50C114.5 41.7157 107.784 35 99.5 35V35",
                                  stroke: "#853D3D",
                                  "stroke-width": "2"
                              })]
                          }), (0,
                          i.jsxs)("g", {
                              id: "Right Line",
                              children: [(0,
                              i.jsx)("path", {
                                  id: "R-4",
                                  opacity: "0.5",
                                  d: "M251 129.5V129.5C262.874 129.5 272.5 139.126 272.5 151V250.095C272.5 258.696 277.102 266.638 284.563 270.916L297.937 278.584C305.398 282.862 310 290.804 310 299.405V306",
                                  stroke: "#853D3D",
                                  "stroke-width": "2"
                              }), (0,
                              i.jsx)("path", {
                                  id: "R-3",
                                  opacity: "0.5",
                                  d: "M251 117.5H261.5C274.755 117.5 285.5 128.245 285.5 141.5V187.559C285.5 193.924 288.029 200.029 292.529 204.529L304.471 216.471C308.971 220.971 315.076 223.5 321.441 223.5H373",
                                  stroke: "#853D3D",
                                  "stroke-width": "2"
                              }), (0,
                              i.jsx)("path", {
                                  id: "R-2",
                                  opacity: "0.5",
                                  d: "M251 105.5H376.5",
                                  stroke: "#853D3D",
                                  "stroke-width": "2"
                              }), (0,
                              i.jsx)("path", {
                                  id: "R-1",
                                  opacity: "0.5",
                                  d: "M251 93.5V93.5C263.15 93.5 273 83.6503 273 71.5V50C273 41.7157 279.716 35 288 35V35",
                                  stroke: "#853D3D",
                                  "stroke-width": "2"
                              })]
                          })]
                      }), (0,
                      i.jsxs)("g", {
                          id: "Middle Part",
                          children: [(0,
                          i.jsxs)("g", {
                              id: "Right_small rectangle",
                              children: [(0,
                              i.jsx)("rect", {
                                  id: "Rectangle 1",
                                  x: "242.41",
                                  y: "90.4",
                                  width: "13.6",
                                  height: "5.6",
                                  rx: "2.8",
                                  fill: "#171717",
                                  stroke: "url(#paint72_linear_3351_13395)",
                                  "stroke-width": "0.8"
                              }), (0,
                              i.jsx)("rect", {
                                  id: "Rectangle 2",
                                  x: "242.41",
                                  y: "102.4",
                                  width: "13.6",
                                  height: "5.6",
                                  rx: "2.8",
                                  fill: "#171717",
                                  stroke: "url(#paint73_linear_3351_13395)",
                                  "stroke-width": "0.8"
                              }), (0,
                              i.jsx)("rect", {
                                  id: "Rectangle 3",
                                  x: "242.41",
                                  y: "114.4",
                                  width: "13.6",
                                  height: "5.6",
                                  rx: "2.8",
                                  fill: "#171717",
                                  stroke: "url(#paint74_linear_3351_13395)",
                                  "stroke-width": "0.8"
                              }), (0,
                              i.jsx)("rect", {
                                  id: "Rectangle 4",
                                  x: "242.41",
                                  y: "126.4",
                                  width: "13.6",
                                  height: "5.6",
                                  rx: "2.8",
                                  fill: "#171717",
                                  stroke: "url(#paint75_linear_3351_13395)",
                                  "stroke-width": "0.8"
                              })]
                          }), (0,
                          i.jsxs)("g", {
                              id: "Left_small rectangle",
                              children: [(0,
                              i.jsx)("rect", {
                                  id: "Rectangle 1_2",
                                  x: "-0.4",
                                  y: "0.4",
                                  width: "13.6",
                                  height: "5.6",
                                  rx: "2.8",
                                  transform: "matrix(-1 0 0 1 147.612 90)",
                                  fill: "#171717",
                                  stroke: "url(#paint76_linear_3351_13395)",
                                  "stroke-width": "0.8"
                              }), (0,
                              i.jsx)("rect", {
                                  id: "Rectangle 2_2",
                                  x: "-0.4",
                                  y: "0.4",
                                  width: "13.6",
                                  height: "5.6",
                                  rx: "2.8",
                                  transform: "matrix(-1 0 0 1 147.612 102)",
                                  fill: "#171717",
                                  stroke: "url(#paint77_linear_3351_13395)",
                                  "stroke-width": "0.8"
                              }), (0,
                              i.jsx)("rect", {
                                  id: "Rectangle 3_2",
                                  x: "-0.4",
                                  y: "0.4",
                                  width: "13.6",
                                  height: "5.6",
                                  rx: "2.8",
                                  transform: "matrix(-1 0 0 1 147.612 114)",
                                  fill: "#171717",
                                  stroke: "url(#paint78_linear_3351_13395)",
                                  "stroke-width": "0.8"
                              }), (0,
                              i.jsx)("rect", {
                                  id: "Rectangle 4_2",
                                  x: "-0.4",
                                  y: "0.4",
                                  width: "13.6",
                                  height: "5.6",
                                  rx: "2.8",
                                  transform: "matrix(-1 0 0 1 147.612 126)",
                                  fill: "#171717",
                                  stroke: "url(#paint79_linear_3351_13395)",
                                  "stroke-width": "0.8"
                              })]
                          }), (0,
                          i.jsxs)("g", {
                              id: "Bottom_small rectangle",
                              children: [(0,
                              i.jsx)("rect", {
                                  id: "Rectangle 1_3",
                                  x: "0.4",
                                  y: "0.4",
                                  width: "13.6",
                                  height: "5.6",
                                  rx: "2.8",
                                  transform: "matrix(-4.37114e-08 1 1 4.37114e-08 174.1 158)",
                                  fill: "#171717",
                                  stroke: "url(#paint80_linear_3351_13395)",
                                  "stroke-width": "0.8"
                              }), (0,
                              i.jsx)("rect", {
                                  id: "Rectangle 2_3",
                                  x: "0.4",
                                  y: "0.4",
                                  width: "13.6",
                                  height: "5.6",
                                  rx: "2.8",
                                  transform: "matrix(-4.37114e-08 1 1 4.37114e-08 186.1 158)",
                                  fill: "#171717",
                                  stroke: "url(#paint81_linear_3351_13395)",
                                  "stroke-width": "0.8"
                              }), (0,
                              i.jsx)("rect", {
                                  id: "Rectangle 3_3",
                                  x: "0.4",
                                  y: "0.4",
                                  width: "13.6",
                                  height: "5.6",
                                  rx: "2.8",
                                  transform: "matrix(-4.37114e-08 1 1 4.37114e-08 198.1 158)",
                                  fill: "#171717",
                                  stroke: "url(#paint82_linear_3351_13395)",
                                  "stroke-width": "0.8"
                              }), (0,
                              i.jsx)("rect", {
                                  id: "Rectangle 4_3",
                                  x: "0.4",
                                  y: "0.4",
                                  width: "13.6",
                                  height: "5.6",
                                  rx: "2.8",
                                  transform: "matrix(-4.37114e-08 1 1 4.37114e-08 210.1 158)",
                                  fill: "#171717",
                                  stroke: "url(#paint83_linear_3351_13395)",
                                  "stroke-width": "0.8"
                              })]
                          }), (0,
                          i.jsx)("g", {
                              id: "DGPU",
                              children: (0,
                              i.jsxs)("g", {
                                  id: "Frame 1618873736",
                                  children: [(0,
                                  i.jsx)("rect", {
                                      x: "147.8",
                                      y: "65.8",
                                      width: "92.8",
                                      height: "92.8",
                                      rx: "28",
                                      fill: "#161615"
                                  }), (0,
                                  i.jsx)("rect", {
                                      x: "147.8",
                                      y: "65.8",
                                      width: "92.8",
                                      height: "92.8",
                                      rx: "28",
                                      stroke: "url(#paint84_linear_3351_13395)",
                                      "stroke-width": "1.6"
                                  }), (0,
                                  i.jsxs)("g", {
                                      id: "DGPU_2",
                                      children: [(0,
                                      i.jsx)("path", {
                                          d: "M162.201 103.712H168.129C172.689 103.712 176.001 106.16 176.001 112.04C176.001 117.824 172.689 120.512 168.129 120.512H162.201V103.712ZM165.081 106.592V117.632H168.129C171.249 117.632 173.121 116.552 173.121 112.04C173.121 107.456 171.249 106.592 168.129 106.592H165.081Z",
                                          fill: "white"
                                      }), (0,
                                      i.jsx)("path", {
                                          d: "M162.201 103.712H168.129C172.689 103.712 176.001 106.16 176.001 112.04C176.001 117.824 172.689 120.512 168.129 120.512H162.201V103.712ZM165.081 106.592V117.632H168.129C171.249 117.632 173.121 116.552 173.121 112.04C173.121 107.456 171.249 106.592 168.129 106.592H165.081Z",
                                          fill: "url(#paint85_linear_3351_13395)"
                                      }), (0,
                                      i.jsx)("path", {
                                          d: "M192.514 114.368V113.72H187.954V111.32H195.394V120.512H192.514V117.656H192.034C191.218 119.336 189.826 120.728 186.946 120.728C182.506 120.728 177.922 117.824 177.922 112.04C177.922 106.016 182.722 103.4 187.762 103.4C190.69 103.4 193.858 104.288 195.442 106.4L195.01 109.928C193.426 107.192 190.402 105.8 187.906 105.8C184.81 105.8 181.282 107.936 181.282 112.04C181.282 116.144 184.282 118.328 187.018 118.328C189.826 118.328 192.514 116.552 192.514 114.368Z",
                                          fill: "white"
                                      }), (0,
                                      i.jsx)("path", {
                                          d: "M192.514 114.368V113.72H187.954V111.32H195.394V120.512H192.514V117.656H192.034C191.218 119.336 189.826 120.728 186.946 120.728C182.506 120.728 177.922 117.824 177.922 112.04C177.922 106.016 182.722 103.4 187.762 103.4C190.69 103.4 193.858 104.288 195.442 106.4L195.01 109.928C193.426 107.192 190.402 105.8 187.906 105.8C184.81 105.8 181.282 107.936 181.282 112.04C181.282 116.144 184.282 118.328 187.018 118.328C189.826 118.328 192.514 116.552 192.514 114.368Z",
                                          fill: "url(#paint86_linear_3351_13395)"
                                      }), (0,
                                      i.jsx)("path", {
                                          d: "M200.73 120.512H197.85V103.712H204.258C208.314 103.712 210.33 106.976 210.33 109.688C210.33 112.352 208.434 115.448 204.714 115.448H200.73V120.512ZM200.73 106.592V112.568H204.714C206.514 112.568 207.45 111.416 207.45 109.736C207.45 107.936 206.418 106.592 204.258 106.592H200.73Z",
                                          fill: "white"
                                      }), (0,
                                      i.jsx)("path", {
                                          d: "M200.73 120.512H197.85V103.712H204.258C208.314 103.712 210.33 106.976 210.33 109.688C210.33 112.352 208.434 115.448 204.714 115.448H200.73V120.512ZM200.73 106.592V112.568H204.714C206.514 112.568 207.45 111.416 207.45 109.736C207.45 107.936 206.418 106.592 204.258 106.592H200.73Z",
                                          fill: "url(#paint87_linear_3351_13395)"
                                      }), (0,
                                      i.jsx)("path", {
                                          d: "M225.818 115.376C225.818 118.928 222.482 120.728 219.146 120.728C215.834 120.728 212.498 118.928 212.498 115.376V103.712H215.378V115.376C215.378 117.416 217.274 118.328 219.146 118.328C221.042 118.328 222.938 117.416 222.938 115.376V103.712H225.818V115.376Z",
                                          fill: "white"
                                      }), (0,
                                      i.jsx)("path", {
                                          d: "M225.818 115.376C225.818 118.928 222.482 120.728 219.146 120.728C215.834 120.728 212.498 118.928 212.498 115.376V103.712H215.378V115.376C215.378 117.416 217.274 118.328 219.146 118.328C221.042 118.328 222.938 117.416 222.938 115.376V103.712H225.818V115.376Z",
                                          fill: "url(#paint88_linear_3351_13395)"
                                      })]
                                  })]
                              })
                          })]
                      }), (0,
                      i.jsx)("g", {
                          id: "AI",
                          children: (0,
                          i.jsxs)("g", {
                              id: "Group 124",
                              children: [(0,
                              i.jsx)("rect", {
                                  id: "Rectangle 4_4",
                                  x: "91.1218",
                                  y: "31.8443",
                                  width: "13.7052",
                                  height: "5.6433",
                                  rx: "2.82165",
                                  fill: "#171717",
                                  stroke: "url(#paint89_linear_3351_13395)",
                                  "stroke-width": "0.806186"
                              }), (0,
                              i.jsxs)("g", {
                                  id: "Frame 1618873583",
                                  children: [(0,
                                  i.jsx)("rect", {
                                      x: "-0.806186",
                                      y: "0.806186",
                                      width: "67.7196",
                                      height: "67.7196",
                                      rx: "20.1546",
                                      transform: "matrix(-1 0 0 1 90.7197 0)",
                                      fill: "#161615"
                                  }), (0,
                                  i.jsx)("rect", {
                                      x: "-0.806186",
                                      y: "0.806186",
                                      width: "67.7196",
                                      height: "67.7196",
                                      rx: "20.1546",
                                      transform: "matrix(-1 0 0 1 90.7197 0)",
                                      stroke: "url(#paint90_linear_3351_13395)",
                                      "stroke-width": "1.61237"
                                  }), (0,
                                  i.jsx)("g", {
                                      id: "AI_2",
                                      children: (0,
                                      i.jsxs)("g", {
                                          id: "AI_3",
                                          children: [(0,
                                          i.jsx)("path", {
                                              d: "M55.9871 20.2L66.4439 48.2H60.2016L58.1341 42.5519H48.7508L46.723 48.1599L40.7988 48.2L51.4147 20.2H55.9871ZM50.7785 37.3845H56.3052L53.522 28.8523L50.7785 37.3845Z",
                                              fill: "url(#paint91_linear_3351_13395)"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M75.1988 48.1599H69.6325V20.2801H75.1988V48.1599Z",
                                              fill: "url(#paint92_linear_3351_13395)"
                                          })]
                                      })
                                  })]
                              })]
                          })
                      }), (0,
                      i.jsx)("g", {
                          id: "LLM",
                          children: (0,
                          i.jsxs)("g", {
                              id: "Group 124_2",
                              children: [(0,
                              i.jsx)("rect", {
                                  id: "Rectangle 4_5",
                                  x: "-0.403093",
                                  y: "0.403093",
                                  width: "13.7052",
                                  height: "5.6433",
                                  rx: "2.82165",
                                  transform: "matrix(-1 0 0 1 301.706 31.4412)",
                                  fill: "#171717",
                                  stroke: "url(#paint93_linear_3351_13395)",
                                  "stroke-width": "0.806186"
                              }), (0,
                              i.jsxs)("g", {
                                  id: "Frame 1618873583_2",
                                  children: [(0,
                                  i.jsx)("rect", {
                                      x: "301.705",
                                      y: "0.806186",
                                      width: "67.7196",
                                      height: "67.7196",
                                      rx: "20.1546",
                                      fill: "#161615"
                                  }), (0,
                                  i.jsx)("rect", {
                                      x: "301.705",
                                      y: "0.806186",
                                      width: "67.7196",
                                      height: "67.7196",
                                      rx: "20.1546",
                                      stroke: "url(#paint94_linear_3351_13395)",
                                      "stroke-width": "1.61237"
                                  }), (0,
                                  i.jsx)("g", {
                                      id: "LLM_2",
                                      children: (0,
                                      i.jsxs)("g", {
                                          id: "LLM_3",
                                          children: [(0,
                                          i.jsx)("path", {
                                              d: "M314.83 26.6433L317.41 26.6V39.6347H325.578V41.8H314.83V26.6433Z",
                                              fill: "url(#paint95_linear_3351_13395)"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M327.719 26.6433L330.299 26.6V39.6347H338.468V41.8H327.719V26.6433Z",
                                              fill: "url(#paint96_linear_3351_13395)"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M350.175 39.0068H346.864L343.554 31.0604C343.274 30.3675 343.102 29.3715 342.952 28.8302L342.758 28.9384C342.93 29.4148 343.188 30.8005 343.188 31.4718V41.8H340.609V26.6433H344.371L348.519 36.257L352.668 26.6433H356.43V41.8H353.851V31.4718C353.851 30.8005 354.108 29.4148 354.28 28.9384L354.087 28.8302C353.937 29.3715 353.765 30.3675 353.485 31.0604L350.175 39.0068Z",
                                              fill: "url(#paint97_linear_3351_13395)"
                                          })]
                                      })
                                  })]
                              })]
                          })
                      }), (0,
                      i.jsx)("g", {
                          id: "Subnet",
                          children: (0,
                          i.jsxs)("g", {
                              id: "Group 125",
                              children: [(0,
                              i.jsx)("rect", {
                                  id: "Rectangle 4_6",
                                  x: "54.9988",
                                  y: "220.782",
                                  width: "13.7052",
                                  height: "5.6433",
                                  rx: "2.82165",
                                  fill: "#171717",
                                  stroke: "url(#paint98_linear_3351_13395)",
                                  "stroke-width": "0.806186"
                              }), (0,
                              i.jsxs)("g", {
                                  id: "Frame 1618873581",
                                  children: [(0,
                                  i.jsx)("rect", {
                                      x: "-0.806186",
                                      y: "0.806186",
                                      width: "51.5959",
                                      height: "51.5959",
                                      rx: "15.3175",
                                      transform: "matrix(-1 0 0 1 54.5966 197)",
                                      fill: "#161615"
                                  }), (0,
                                  i.jsx)("rect", {
                                      x: "-0.806186",
                                      y: "0.806186",
                                      width: "51.5959",
                                      height: "51.5959",
                                      rx: "15.3175",
                                      transform: "matrix(-1 0 0 1 54.5966 197)",
                                      stroke: "url(#paint99_linear_3351_13395)",
                                      "stroke-width": "1.61237"
                                  }), (0,
                                  i.jsx)("g", {
                                      id: "Subnet_2",
                                      children: (0,
                                      i.jsxs)("g", {
                                          id: "Vector",
                                          children: [(0,
                                          i.jsx)("path", {
                                              d: "M41.7992 223.212C41.7992 216.271 36.0571 210.624 28.9991 210.624C28.868 210.624 28.7372 210.626 28.6073 210.63C27.9722 210.648 27.4726 211.17 27.4914 211.794C27.5102 212.419 28.04 212.915 28.6754 212.892C28.783 212.889 28.8912 212.887 28.9994 212.887C34.7885 212.887 39.4984 217.519 39.4984 223.212C39.4984 224.726 39.1665 226.196 38.5377 227.536C38.3028 227.484 38.0594 227.455 37.8085 227.455C35.9646 227.455 34.4648 228.93 34.4648 230.743C34.4648 232.556 35.9643 234.032 37.8082 234.032C39.6521 234.032 41.1519 232.557 41.1519 230.744C41.1519 230.006 40.9003 229.326 40.4816 228.777C41.3413 227.065 41.7992 225.17 41.7992 223.212ZM37.9713 232.171C37.1878 232.171 36.5524 231.546 36.5524 230.775C36.5524 230.004 37.1875 229.38 37.9713 229.38C38.7547 229.38 39.3902 230.004 39.3902 230.775C39.3902 231.546 38.7551 232.171 37.9713 232.171Z",
                                              fill: "url(#paint100_linear_3351_13395)"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M23.3533 223.203C23.3533 226.293 25.9101 228.808 29.0527 228.808C32.1953 228.808 34.7518 226.293 34.7518 223.203C34.7518 220.112 32.195 217.598 29.0527 217.598C25.9104 217.598 23.3533 220.112 23.3533 223.203ZM29.0527 219.861C30.9264 219.861 32.451 221.36 32.451 223.203C32.451 225.045 30.9264 226.545 29.0527 226.545C27.179 226.545 25.6544 225.045 25.6544 223.203C25.6544 221.36 27.1787 219.861 29.0527 219.861Z",
                                              fill: "url(#paint101_linear_3351_13395)"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M34.005 233.622C33.7911 233.033 33.1331 232.727 32.5344 232.937C31.4025 233.335 30.2135 233.537 28.9994 233.537C23.2103 233.537 18.5004 228.905 18.5004 223.212C18.5004 220.617 19.4774 218.179 21.1926 216.309C21.6941 216.604 22.2775 216.777 22.9032 216.777C24.7471 216.777 26.2469 215.302 26.2469 213.489C26.2469 211.676 24.7468 210.2 22.9032 210.2C21.0597 210.2 19.5595 211.675 19.5595 213.488C19.5595 213.852 19.6219 214.2 19.733 214.527C17.4848 216.839 16.1992 219.922 16.1992 223.212C16.1992 230.153 21.941 235.8 28.9994 235.8C30.4785 235.8 31.9284 235.554 33.3091 235.068C33.9072 234.858 34.2186 234.21 34.005 233.622ZM22.9227 212.039C23.6773 212.039 24.2889 212.64 24.2889 213.382C24.2889 214.124 23.677 214.726 22.9227 214.726C22.168 214.726 21.5565 214.124 21.5565 213.382C21.5565 212.64 22.168 212.039 22.9227 212.039Z",
                                              fill: "url(#paint102_linear_3351_13395)"
                                          })]
                                      })
                                  })]
                              })]
                          })
                      }), (0,
                      i.jsx)("g", {
                          id: "L3",
                          children: (0,
                          i.jsxs)("g", {
                              id: "Group 125_2",
                              children: [(0,
                              i.jsx)("rect", {
                                  id: "Rectangle 4_7",
                                  x: "-0.403093",
                                  y: "0.403093",
                                  width: "13.7052",
                                  height: "5.6433",
                                  rx: "2.82165",
                                  transform: "matrix(-1 0 0 1 334.706 220.379)",
                                  fill: "#171717",
                                  stroke: "url(#paint103_linear_3351_13395)",
                                  "stroke-width": "0.806186"
                              }), (0,
                              i.jsxs)("g", {
                                  id: "Frame 1618873581_2",
                                  children: [(0,
                                  i.jsx)("rect", {
                                      x: "334.705",
                                      y: "197.806",
                                      width: "51.5959",
                                      height: "51.5959",
                                      rx: "15.3175",
                                      fill: "#161615"
                                  }), (0,
                                  i.jsx)("rect", {
                                      x: "334.705",
                                      y: "197.806",
                                      width: "51.5959",
                                      height: "51.5959",
                                      rx: "15.3175",
                                      stroke: "url(#paint104_linear_3351_13395)",
                                      "stroke-width": "1.61237"
                                  }), (0,
                                  i.jsx)("g", {
                                      id: "L3_2",
                                      children: (0,
                                      i.jsxs)("g", {
                                          id: "L3_3",
                                          children: [(0,
                                          i.jsx)("path", {
                                              d: "M348.268 214.68L351.148 214.632V229.08H360.268V231.48H348.268V214.68Z",
                                              fill: "url(#paint105_linear_3351_13395)"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M363.714 217.104V214.2H373.746V217.92L369.402 221.232V221.472C373.554 221.52 374.706 223.776 374.706 226.176C374.706 229.536 372.474 231.744 368.802 231.744C364.746 231.744 362.73 229.032 362.178 225.984L365.106 225.192C365.298 227.52 366.714 229.344 368.946 229.344C370.914 229.344 371.826 227.928 371.826 226.224C371.826 224.544 370.914 222.648 366.594 222.648V220.344L370.89 217.08L363.714 217.104Z",
                                              fill: "url(#paint106_linear_3351_13395)"
                                          })]
                                      })
                                  })]
                              })]
                          })
                      }), (0,
                      i.jsx)("g", {
                          id: "OCAI",
                          children: (0,
                          i.jsxs)("g", {
                              id: "Group 123",
                              children: [(0,
                              i.jsx)("rect", {
                                  id: "Rectangle 4_8",
                                  x: "74.8445",
                                  y: "318.108",
                                  width: "13.7052",
                                  height: "5.6433",
                                  rx: "2.82165",
                                  transform: "rotate(-90 74.8445 318.108)",
                                  fill: "#171717",
                                  stroke: "url(#paint107_linear_3351_13395)",
                                  "stroke-width": "0.806186"
                              }), (0,
                              i.jsxs)("g", {
                                  id: "Frame 1618873582",
                                  children: [(0,
                                  i.jsx)("rect", {
                                      x: "0.806186",
                                      y: "0.806186",
                                      width: "67.7196",
                                      height: "67.7196",
                                      rx: "20.1546",
                                      transform: "matrix(-4.37114e-08 1 1 4.37114e-08 43 316.899)",
                                      fill: "#161615"
                                  }), (0,
                                  i.jsx)("rect", {
                                      x: "0.806186",
                                      y: "0.806186",
                                      width: "67.7196",
                                      height: "67.7196",
                                      rx: "20.1546",
                                      transform: "matrix(-4.37114e-08 1 1 4.37114e-08 43 316.899)",
                                      stroke: "url(#paint108_linear_3351_13395)",
                                      "stroke-width": "1.61237"
                                  }), (0,
                                  i.jsx)("g", {
                                      id: "OCAI_2",
                                      "clip-path": "url(#clip0_3351_13395)",
                                      children: (0,
                                      i.jsxs)("g", {
                                          id: "OCAI_3",
                                          children: [(0,
                                          i.jsx)("path", {
                                              d: "M62.4915 358.649C58.9553 358.649 55.4004 356.259 55.4004 351.499C55.4004 346.659 58.9553 344.249 62.4915 344.249C66.0464 344.249 69.5826 346.659 69.5826 351.499C69.5826 356.259 66.0464 358.649 62.4915 358.649ZM62.4915 356.674C64.9612 356.674 67.3374 355.212 67.3374 351.499C67.3374 347.726 64.9612 346.225 62.4915 346.225C60.0405 346.225 57.6456 347.726 57.6456 351.499C57.6456 355.212 60.0405 356.674 62.4915 356.674Z",
                                              fill: "white"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M62.4915 358.649C58.9553 358.649 55.4004 356.259 55.4004 351.499C55.4004 346.659 58.9553 344.249 62.4915 344.249C66.0464 344.249 69.5826 346.659 69.5826 351.499C69.5826 356.259 66.0464 358.649 62.4915 358.649ZM62.4915 356.674C64.9612 356.674 67.3374 355.212 67.3374 351.499C67.3374 347.726 64.9612 346.225 62.4915 346.225C60.0405 346.225 57.6456 347.726 57.6456 351.499C57.6456 355.212 60.0405 356.674 62.4915 356.674Z",
                                              fill: "url(#paint109_linear_3351_13395)"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M81.8169 355.331V357.741C80.6943 358.353 79.4407 358.649 78.1685 358.649C74.6323 358.649 71.0774 356.259 71.0774 351.499C71.0774 346.738 74.6323 344.249 78.1685 344.249C79.4407 344.249 80.6943 344.566 81.8169 345.178V347.588C80.8814 346.422 79.5904 346.225 78.1685 346.225C76.0355 346.225 73.6968 348.022 73.6968 351.499C73.6968 354.975 76.0355 356.674 78.1685 356.674C79.5904 356.674 80.8814 356.496 81.8169 355.331Z",
                                              fill: "white"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M81.8169 355.331V357.741C80.6943 358.353 79.4407 358.649 78.1685 358.649C74.6323 358.649 71.0774 356.259 71.0774 351.499C71.0774 346.738 74.6323 344.249 78.1685 344.249C79.4407 344.249 80.6943 344.566 81.8169 345.178V347.588C80.8814 346.422 79.5904 346.225 78.1685 346.225C76.0355 346.225 73.6968 348.022 73.6968 351.499C73.6968 354.975 76.0355 356.674 78.1685 356.674C79.5904 356.674 80.8814 356.496 81.8169 355.331Z",
                                              fill: "url(#paint110_linear_3351_13395)"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M85.7098 358.472H83.3149L88.2917 344.645H90.6866L95.6635 358.472H93.2686L92.0525 355.074H86.9259L85.7098 358.472ZM89.2647 348.595L87.6369 353.099H91.3415L89.7137 348.595H89.2647Z",
                                              fill: "white"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M85.7098 358.472H83.3149L88.2917 344.645H90.6866L95.6635 358.472H93.2686L92.0525 355.074H86.9259L85.7098 358.472ZM89.2647 348.595L87.6369 353.099H91.3415L89.7137 348.595H89.2647Z",
                                              fill: "url(#paint111_linear_3351_13395)"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M97.1552 344.645H99.4004V358.472H97.1552V344.645Z",
                                              fill: "white"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M97.1552 344.645H99.4004V358.472H97.1552V344.645Z",
                                              fill: "url(#paint112_linear_3351_13395)"
                                          })]
                                      })
                                  })]
                              })]
                          })
                      }), (0,
                      i.jsx)("g", {
                          id: "Node",
                          children: (0,
                          i.jsxs)("g", {
                              id: "Group 123_2",
                              children: [(0,
                              i.jsx)("rect", {
                                  id: "Rectangle 4_9",
                                  x: "-0.403093",
                                  y: "-0.403093",
                                  width: "13.7052",
                                  height: "5.6433",
                                  rx: "2.82165",
                                  transform: "matrix(-4.37114e-08 -1 -1 4.37114e-08 312.084 317.705)",
                                  fill: "#171717",
                                  stroke: "url(#paint113_linear_3351_13395)",
                                  "stroke-width": "0.806186"
                              }), (0,
                              i.jsxs)("g", {
                                  id: "Frame 1618873582_2",
                                  children: [(0,
                                  i.jsx)("rect", {
                                      x: "343.526",
                                      y: "317.705",
                                      width: "67.7196",
                                      height: "67.7196",
                                      rx: "20.1546",
                                      transform: "rotate(90 343.526 317.705)",
                                      fill: "#161615"
                                  }), (0,
                                  i.jsx)("rect", {
                                      x: "343.526",
                                      y: "317.705",
                                      width: "67.7196",
                                      height: "67.7196",
                                      rx: "20.1546",
                                      transform: "rotate(90 343.526 317.705)",
                                      stroke: "url(#paint114_linear_3351_13395)",
                                      "stroke-width": "1.61237"
                                  }), (0,
                                  i.jsx)("g", {
                                      id: "L3_4",
                                      children: (0,
                                      i.jsxs)("g", {
                                          id: "Path",
                                          children: [(0,
                                          i.jsx)("path", {
                                              d: "M315.503 362.964C314.741 362.949 314.007 362.655 313.421 362.131C312.835 361.606 312.434 360.882 312.282 360.079C312.131 359.275 312.239 358.44 312.588 357.712C312.938 356.983 313.508 356.405 314.204 356.072L314.002 355.575C313.649 354.675 313.076 353.895 312.345 353.315C311.614 352.736 310.751 352.38 309.847 352.284L309.732 352.284C308.047 352.117 306.481 351.275 305.346 349.925L305.346 358.369C306.13 358.595 306.812 359.12 307.263 359.847C307.714 360.573 307.905 361.451 307.799 362.318C307.693 363.184 307.298 363.979 306.687 364.556C306.077 365.132 305.292 365.449 304.48 365.449C303.668 365.449 302.884 365.132 302.273 364.556C301.662 363.979 301.267 363.184 301.161 362.318C301.055 361.451 301.246 360.573 301.697 359.847C302.149 359.12 302.83 358.595 303.614 358.369L303.614 345.33C302.83 345.104 302.149 344.579 301.697 343.852C301.246 343.126 301.055 342.247 301.161 341.381C301.267 340.515 301.662 339.719 302.273 339.143C302.884 338.567 303.668 338.249 304.48 338.249C305.292 338.249 306.077 338.567 306.687 339.143C307.298 339.719 307.693 340.515 307.799 341.381C307.905 342.247 307.714 343.126 307.263 343.852C306.812 344.579 306.13 345.104 305.346 345.33C305.41 346.626 305.906 347.854 306.744 348.789C307.581 349.724 308.703 350.304 309.905 350.421L310.02 350.421C311.231 350.551 312.387 351.029 313.366 351.805C314.346 352.58 315.114 353.625 315.589 354.83L315.993 355.823C316.805 355.985 317.532 356.462 318.036 357.165C318.539 357.867 318.785 358.745 318.724 359.63C318.663 360.515 318.301 361.345 317.706 361.96C317.112 362.576 316.327 362.933 315.503 362.964Z",
                                              fill: "black"
                                          }), (0,
                                          i.jsx)("path", {
                                              d: "M315.503 362.964C314.741 362.949 314.007 362.655 313.421 362.131C312.835 361.606 312.434 360.882 312.282 360.079C312.131 359.275 312.239 358.44 312.588 357.712C312.938 356.983 313.508 356.405 314.204 356.072L314.002 355.575C313.649 354.675 313.076 353.895 312.345 353.315C311.614 352.736 310.751 352.38 309.847 352.284L309.732 352.284C308.047 352.117 306.481 351.275 305.346 349.925L305.346 358.369C306.13 358.595 306.812 359.12 307.263 359.847C307.714 360.573 307.905 361.451 307.799 362.318C307.693 363.184 307.298 363.979 306.687 364.556C306.077 365.132 305.292 365.449 304.48 365.449C303.668 365.449 302.884 365.132 302.273 364.556C301.662 363.979 301.267 363.184 301.161 362.318C301.055 361.451 301.246 360.573 301.697 359.847C302.149 359.12 302.83 358.595 303.614 358.369L303.614 345.33C302.83 345.104 302.149 344.579 301.697 343.852C301.246 343.126 301.055 342.247 301.161 341.381C301.267 340.515 301.662 339.719 302.273 339.143C302.884 338.567 303.668 338.249 304.48 338.249C305.292 338.249 306.077 338.567 306.687 339.143C307.298 339.719 307.693 340.515 307.799 341.381C307.905 342.247 307.714 343.126 307.263 343.852C306.812 344.579 306.13 345.104 305.346 345.33C305.41 346.626 305.906 347.854 306.744 348.789C307.581 349.724 308.703 350.304 309.905 350.421L310.02 350.421C311.231 350.551 312.387 351.029 313.366 351.805C314.346 352.58 315.114 353.625 315.589 354.83L315.993 355.823C316.805 355.985 317.532 356.462 318.036 357.165C318.539 357.867 318.785 358.745 318.724 359.63C318.663 360.515 318.301 361.345 317.706 361.96C317.112 362.576 316.327 362.933 315.503 362.964Z",
                                              fill: "url(#paint115_linear_3351_13395)"
                                          })]
                                      })
                                  })]
                              })]
                          })
                      })]
                  })
              }), (0,
              i.jsxs)("defs", {
                  children: [(0,
                  i.jsxs)("filter", {
                      id: "filter0_f_3351_13395",
                      x: "89.5508",
                      y: "129.826",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter1_f_3351_13395",
                      x: "89.5508",
                      y: "129.826",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter2_f_3351_13395",
                      x: "101.551",
                      y: "141.826",
                      width: "25.9688",
                      height: "76.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "6",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter3_f_3351_13395",
                      x: "107.551",
                      y: "147.826",
                      width: "13.9688",
                      height: "64.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter4_f_3351_13395",
                      x: "107.551",
                      y: "147.826",
                      width: "13.9688",
                      height: "62.2258",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter5_f_3351_13395",
                      x: "76.5508",
                      y: "112.826",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter6_f_3351_13395",
                      x: "76.5508",
                      y: "112.826",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter7_f_3351_13395",
                      x: "88.5508",
                      y: "124.826",
                      width: "25.9688",
                      height: "76.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "6",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter8_f_3351_13395",
                      x: "94.5508",
                      y: "130.826",
                      width: "13.9688",
                      height: "64.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter9_f_3351_13395",
                      x: "94.5508",
                      y: "130.826",
                      width: "13.9688",
                      height: "62.2258",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter10_f_3351_13395",
                      x: "0.775391",
                      y: "80",
                      width: "100.918",
                      height: "49.9686",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter11_f_3351_13395",
                      x: "0.775391",
                      y: "80",
                      width: "100.918",
                      height: "49.9686",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter12_f_3351_13395",
                      x: "12.7754",
                      y: "92",
                      width: "76.918",
                      height: "25.9686",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "6",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter13_f_3351_13395",
                      x: "18.7754",
                      y: "98",
                      width: "64.918",
                      height: "13.9686",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter14_f_3351_13395",
                      x: "21.4668",
                      y: "98",
                      width: "62.2266",
                      height: "13.9686",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter15_f_3351_13395",
                      x: "89.5508",
                      y: "22.2246",
                      width: "49.9688",
                      height: "77.2336",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter16_f_3351_13395",
                      x: "89.5508",
                      y: "22.2246",
                      width: "49.9688",
                      height: "77.2336",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter17_f_3351_13395",
                      x: "101.551",
                      y: "34.2246",
                      width: "25.9688",
                      height: "53.2336",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "6",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter18_f_3351_13395",
                      x: "107.551",
                      y: "40.2246",
                      width: "13.9688",
                      height: "41.2336",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter19_f_3351_13395",
                      x: "107.551",
                      y: "41.712",
                      width: "13.9688",
                      height: "39.7462",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter20_f_3351_13395",
                      x: "247.775",
                      y: "129.826",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter21_f_3351_13395",
                      x: "247.775",
                      y: "129.826",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter22_f_3351_13395",
                      x: "259.775",
                      y: "141.826",
                      width: "25.9688",
                      height: "76.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "6",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter23_f_3351_13395",
                      x: "265.775",
                      y: "147.826",
                      width: "13.9688",
                      height: "64.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter24_f_3351_13395",
                      x: "265.775",
                      y: "147.826",
                      width: "13.9688",
                      height: "62.2258",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter25_f_3351_13395",
                      x: "260.775",
                      y: "112.826",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter26_f_3351_13395",
                      x: "260.775",
                      y: "112.826",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter27_f_3351_13395",
                      x: "272.775",
                      y: "124.826",
                      width: "25.9688",
                      height: "76.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "6",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter28_f_3351_13395",
                      x: "278.775",
                      y: "130.826",
                      width: "13.9688",
                      height: "64.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter29_f_3351_13395",
                      x: "278.775",
                      y: "130.826",
                      width: "13.9688",
                      height: "62.2258",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter30_f_3351_13395",
                      x: "285.602",
                      y: "80",
                      width: "100.918",
                      height: "49.9686",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter31_f_3351_13395",
                      x: "285.602",
                      y: "80",
                      width: "100.918",
                      height: "49.9686",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter32_f_3351_13395",
                      x: "297.602",
                      y: "92",
                      width: "76.918",
                      height: "25.9686",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "6",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter33_f_3351_13395",
                      x: "303.602",
                      y: "98",
                      width: "64.918",
                      height: "13.9686",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter34_f_3351_13395",
                      x: "303.602",
                      y: "98",
                      width: "62.2266",
                      height: "13.9686",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter35_f_3351_13395",
                      x: "247.775",
                      y: "22.2246",
                      width: "49.9688",
                      height: "77.2336",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter36_f_3351_13395",
                      x: "247.775",
                      y: "22.2246",
                      width: "49.9688",
                      height: "77.2336",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter37_f_3351_13395",
                      x: "259.775",
                      y: "34.2246",
                      width: "25.9688",
                      height: "53.2336",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "6",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter38_f_3351_13395",
                      x: "265.775",
                      y: "40.2246",
                      width: "13.9688",
                      height: "41.2336",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter39_f_3351_13395",
                      x: "265.775",
                      y: "41.712",
                      width: "13.9688",
                      height: "39.7462",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter40_f_3351_13395",
                      x: "188",
                      y: "185.602",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter41_f_3351_13395",
                      x: "188",
                      y: "185.602",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter42_f_3351_13395",
                      x: "200",
                      y: "197.602",
                      width: "25.9688",
                      height: "76.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "6",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter43_f_3351_13395",
                      x: "206",
                      y: "203.602",
                      width: "13.9688",
                      height: "64.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter44_f_3351_13395",
                      x: "206",
                      y: "203.602",
                      width: "13.9688",
                      height: "62.2258",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter45_f_3351_13395",
                      x: "176",
                      y: "185.602",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter46_f_3351_13395",
                      x: "176",
                      y: "185.602",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter47_f_3351_13395",
                      x: "188",
                      y: "197.602",
                      width: "25.9688",
                      height: "76.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "6",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter48_f_3351_13395",
                      x: "194",
                      y: "203.602",
                      width: "13.9688",
                      height: "64.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter49_f_3351_13395",
                      x: "194",
                      y: "203.602",
                      width: "13.9688",
                      height: "62.2258",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter50_f_3351_13395",
                      x: "164",
                      y: "185.602",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter51_f_3351_13395",
                      x: "164",
                      y: "185.602",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter52_f_3351_13395",
                      x: "176",
                      y: "197.602",
                      width: "25.9688",
                      height: "76.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "6",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter53_f_3351_13395",
                      x: "182",
                      y: "203.602",
                      width: "13.9688",
                      height: "64.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter54_f_3351_13395",
                      x: "182",
                      y: "203.602",
                      width: "13.9688",
                      height: "62.2258",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter55_f_3351_13395",
                      x: "152",
                      y: "185.602",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter56_f_3351_13395",
                      x: "152",
                      y: "185.602",
                      width: "49.9688",
                      height: "100.918",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "12",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter57_f_3351_13395",
                      x: "164",
                      y: "197.602",
                      width: "25.9688",
                      height: "76.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "6",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter58_f_3351_13395",
                      x: "170",
                      y: "203.602",
                      width: "13.9688",
                      height: "64.9183",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("filter", {
                      id: "filter59_f_3351_13395",
                      x: "170",
                      y: "203.602",
                      width: "13.9688",
                      height: "62.2258",
                      filterUnits: "userSpaceOnUse",
                      "color-interpolation-filters": "sRGB",
                      children: [(0,
                      i.jsx)("feFlood", {
                          "flood-opacity": "0",
                          result: "BackgroundImageFix"
                      }), (0,
                      i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape"
                      }), (0,
                      i.jsx)("feGaussianBlur", {
                          stdDeviation: "3",
                          result: "effect1_foregroundBlur_3351_13395"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint0_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint1_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint2_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint3_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint4_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "50.2258",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint5_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint6_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint7_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint8_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint9_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint10_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "50.2258",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint11_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint12_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint13_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint14_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint15_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint16_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "50.2258",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint17_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "52.9183",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint18_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "29.2336",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint19_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "29.2336",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint20_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "29.2336",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint21_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "29.2336",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint22_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "27.7462",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint23_linear_3351_13395",
                      x1: "0.984313",
                      y1: "0",
                      x2: "0.984313",
                      y2: "29.2336",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint24_linear_3351_13395",
                      x1: "272.76",
                      y1: "153.826",
                      x2: "272.76",
                      y2: "206.744",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint25_linear_3351_13395",
                      x1: "272.76",
                      y1: "153.826",
                      x2: "272.76",
                      y2: "206.744",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint26_linear_3351_13395",
                      x1: "272.76",
                      y1: "153.826",
                      x2: "272.76",
                      y2: "206.744",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint27_linear_3351_13395",
                      x1: "272.76",
                      y1: "153.826",
                      x2: "272.76",
                      y2: "206.744",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint28_linear_3351_13395",
                      x1: "272.76",
                      y1: "153.826",
                      x2: "272.76",
                      y2: "204.052",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint29_linear_3351_13395",
                      x1: "272.76",
                      y1: "149.225",
                      x2: "272.76",
                      y2: "202.143",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint30_linear_3351_13395",
                      x1: "285.76",
                      y1: "136.826",
                      x2: "285.76",
                      y2: "189.744",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint31_linear_3351_13395",
                      x1: "285.76",
                      y1: "136.826",
                      x2: "285.76",
                      y2: "189.744",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint32_linear_3351_13395",
                      x1: "285.76",
                      y1: "136.826",
                      x2: "285.76",
                      y2: "189.744",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint33_linear_3351_13395",
                      x1: "285.76",
                      y1: "136.826",
                      x2: "285.76",
                      y2: "189.744",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint34_linear_3351_13395",
                      x1: "285.76",
                      y1: "136.826",
                      x2: "285.76",
                      y2: "187.052",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint35_linear_3351_13395",
                      x1: "285.76",
                      y1: "132.225",
                      x2: "285.76",
                      y2: "185.143",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint36_linear_3351_13395",
                      x1: "310.586",
                      y1: "105.969",
                      x2: "310.586",
                      y2: "158.887",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint37_linear_3351_13395",
                      x1: "310.586",
                      y1: "105.969",
                      x2: "310.586",
                      y2: "158.887",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint38_linear_3351_13395",
                      x1: "310.586",
                      y1: "105.969",
                      x2: "310.586",
                      y2: "158.887",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint39_linear_3351_13395",
                      x1: "310.586",
                      y1: "105.969",
                      x2: "310.586",
                      y2: "158.887",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint40_linear_3351_13395",
                      x1: "310.586",
                      y1: "105.969",
                      x2: "310.586",
                      y2: "156.194",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint41_linear_3351_13395",
                      x1: "305.984",
                      y1: "105.969",
                      x2: "305.984",
                      y2: "158.887",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint42_linear_3351_13395",
                      x1: "274.728",
                      y1: "75.4582",
                      x2: "274.728",
                      y2: "104.692",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint43_linear_3351_13395",
                      x1: "274.728",
                      y1: "75.4582",
                      x2: "274.728",
                      y2: "104.692",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint44_linear_3351_13395",
                      x1: "274.728",
                      y1: "75.4582",
                      x2: "274.728",
                      y2: "104.692",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint45_linear_3351_13395",
                      x1: "274.728",
                      y1: "75.4582",
                      x2: "274.728",
                      y2: "104.692",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint46_linear_3351_13395",
                      x1: "274.728",
                      y1: "75.4582",
                      x2: "274.728",
                      y2: "103.204",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint47_linear_3351_13395",
                      x1: "274.728",
                      y1: "78",
                      x2: "274.728",
                      y2: "107.234",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint48_linear_3351_13395",
                      x1: "212.984",
                      y1: "209.602",
                      x2: "212.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint49_linear_3351_13395",
                      x1: "212.984",
                      y1: "209.602",
                      x2: "212.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint50_linear_3351_13395",
                      x1: "212.984",
                      y1: "209.602",
                      x2: "212.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint51_linear_3351_13395",
                      x1: "212.984",
                      y1: "209.602",
                      x2: "212.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint52_linear_3351_13395",
                      x1: "212.984",
                      y1: "209.602",
                      x2: "212.984",
                      y2: "259.827",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint53_linear_3351_13395",
                      x1: "212.984",
                      y1: "205",
                      x2: "212.984",
                      y2: "257.918",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint54_linear_3351_13395",
                      x1: "200.984",
                      y1: "209.602",
                      x2: "200.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint55_linear_3351_13395",
                      x1: "200.984",
                      y1: "209.602",
                      x2: "200.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint56_linear_3351_13395",
                      x1: "200.984",
                      y1: "209.602",
                      x2: "200.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint57_linear_3351_13395",
                      x1: "200.984",
                      y1: "209.602",
                      x2: "200.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint58_linear_3351_13395",
                      x1: "200.984",
                      y1: "209.602",
                      x2: "200.984",
                      y2: "259.827",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint59_linear_3351_13395",
                      x1: "200.984",
                      y1: "205",
                      x2: "200.984",
                      y2: "257.918",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint60_linear_3351_13395",
                      x1: "188.984",
                      y1: "209.602",
                      x2: "188.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint61_linear_3351_13395",
                      x1: "188.984",
                      y1: "209.602",
                      x2: "188.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint62_linear_3351_13395",
                      x1: "188.984",
                      y1: "209.602",
                      x2: "188.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint63_linear_3351_13395",
                      x1: "188.984",
                      y1: "209.602",
                      x2: "188.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint64_linear_3351_13395",
                      x1: "188.984",
                      y1: "209.602",
                      x2: "188.984",
                      y2: "259.827",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint65_linear_3351_13395",
                      x1: "188.984",
                      y1: "205",
                      x2: "188.984",
                      y2: "257.918",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint66_linear_3351_13395",
                      x1: "176.984",
                      y1: "209.602",
                      x2: "176.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint67_linear_3351_13395",
                      x1: "176.984",
                      y1: "209.602",
                      x2: "176.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint68_linear_3351_13395",
                      x1: "176.984",
                      y1: "209.602",
                      x2: "176.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint69_linear_3351_13395",
                      x1: "176.984",
                      y1: "209.602",
                      x2: "176.984",
                      y2: "262.52",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint70_linear_3351_13395",
                      x1: "176.984",
                      y1: "209.602",
                      x2: "176.984",
                      y2: "259.827",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint71_linear_3351_13395",
                      x1: "176.984",
                      y1: "205",
                      x2: "176.984",
                      y2: "257.918",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#992222",
                          "stop-opacity": "0"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#FF3838"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint72_linear_3351_13395",
                      x1: "256.41",
                      y1: "93.2",
                      x2: "242.01",
                      y2: "93.2",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint73_linear_3351_13395",
                      x1: "256.41",
                      y1: "105.2",
                      x2: "242.01",
                      y2: "105.2",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint74_linear_3351_13395",
                      x1: "256.41",
                      y1: "117.2",
                      x2: "242.01",
                      y2: "117.2",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint75_linear_3351_13395",
                      x1: "256.41",
                      y1: "129.2",
                      x2: "242.01",
                      y2: "129.2",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint76_linear_3351_13395",
                      x1: "14.4",
                      y1: "3.2",
                      x2: "0",
                      y2: "3.2",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint77_linear_3351_13395",
                      x1: "14.4",
                      y1: "3.2",
                      x2: "0",
                      y2: "3.2",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint78_linear_3351_13395",
                      x1: "14.4",
                      y1: "3.2",
                      x2: "0",
                      y2: "3.2",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint79_linear_3351_13395",
                      x1: "14.4",
                      y1: "3.2",
                      x2: "0",
                      y2: "3.2",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint80_linear_3351_13395",
                      x1: "14.4",
                      y1: "3.2",
                      x2: "0",
                      y2: "3.2",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint81_linear_3351_13395",
                      x1: "14.4",
                      y1: "3.2",
                      x2: "0",
                      y2: "3.2",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint82_linear_3351_13395",
                      x1: "14.4",
                      y1: "3.2",
                      x2: "0",
                      y2: "3.2",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint83_linear_3351_13395",
                      x1: "14.4",
                      y1: "3.2",
                      x2: "0",
                      y2: "3.2",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint84_linear_3351_13395",
                      x1: "147",
                      y1: "65",
                      x2: "241.4",
                      y2: "159.4",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#525252",
                          "stop-opacity": "0.5"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#525252",
                          "stop-opacity": "0.12"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint85_linear_3351_13395",
                      x1: "195.203",
                      y1: "92.5755",
                      x2: "195.203",
                      y2: "134.421",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint86_linear_3351_13395",
                      x1: "195.203",
                      y1: "92.5755",
                      x2: "195.203",
                      y2: "134.421",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint87_linear_3351_13395",
                      x1: "195.203",
                      y1: "92.5755",
                      x2: "195.203",
                      y2: "134.421",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint88_linear_3351_13395",
                      x1: "195.203",
                      y1: "92.5755",
                      x2: "195.203",
                      y2: "134.421",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint89_linear_3351_13395",
                      x1: "105.23",
                      y1: "34.666",
                      x2: "90.7188",
                      y2: "34.666",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint90_linear_3351_13395",
                      x1: "0",
                      y1: "0",
                      x2: "69.332",
                      y2: "69.332",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#525252",
                          "stop-opacity": "0.5"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#525252",
                          "stop-opacity": "0.12"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint91_linear_3351_13395",
                      x1: "58.518",
                      y1: "12.484",
                      x2: "58.518",
                      y2: "53.1671",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint92_linear_3351_13395",
                      x1: "58.518",
                      y1: "12.484",
                      x2: "58.518",
                      y2: "53.1671",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint93_linear_3351_13395",
                      x1: "14.5113",
                      y1: "3.22474",
                      x2: "0",
                      y2: "3.22474",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint94_linear_3351_13395",
                      x1: "300.898",
                      y1: "0",
                      x2: "370.23",
                      y2: "69.332",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#525252",
                          "stop-opacity": "0.5"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#525252",
                          "stop-opacity": "0.12"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint95_linear_3351_13395",
                      x1: "336.639",
                      y1: "16.5962",
                      x2: "336.639",
                      y2: "54.3485",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint96_linear_3351_13395",
                      x1: "336.639",
                      y1: "16.5962",
                      x2: "336.639",
                      y2: "54.3485",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint97_linear_3351_13395",
                      x1: "336.639",
                      y1: "16.5962",
                      x2: "336.639",
                      y2: "54.3485",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint98_linear_3351_13395",
                      x1: "69.107",
                      y1: "223.604",
                      x2: "54.5957",
                      y2: "223.604",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint99_linear_3351_13395",
                      x1: "0",
                      y1: "0",
                      x2: "53.2082",
                      y2: "53.2082",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#525252",
                          "stop-opacity": "0.5"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#525252",
                          "stop-opacity": "0.12"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint100_linear_3351_13395",
                      x1: "29.3856",
                      y1: "203.145",
                      x2: "29.3856",
                      y2: "240.341",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint101_linear_3351_13395",
                      x1: "29.3856",
                      y1: "203.145",
                      x2: "29.3856",
                      y2: "240.341",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint102_linear_3351_13395",
                      x1: "29.3856",
                      y1: "203.145",
                      x2: "29.3856",
                      y2: "240.341",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint103_linear_3351_13395",
                      x1: "14.5113",
                      y1: "3.22474",
                      x2: "0",
                      y2: "3.22474",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint104_linear_3351_13395",
                      x1: "333.898",
                      y1: "197",
                      x2: "387.107",
                      y2: "250.208",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#525252",
                          "stop-opacity": "0.5"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#525252",
                          "stop-opacity": "0.12"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint105_linear_3351_13395",
                      x1: "361.902",
                      y1: "203.544",
                      x2: "361.902",
                      y2: "245.389",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint106_linear_3351_13395",
                      x1: "361.902",
                      y1: "203.544",
                      x2: "361.902",
                      y2: "245.389",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint107_linear_3351_13395",
                      x1: "88.9527",
                      y1: "321.736",
                      x2: "74.4414",
                      y2: "321.736",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint108_linear_3351_13395",
                      x1: "0",
                      y1: "0",
                      x2: "69.332",
                      y2: "69.332",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#525252",
                          "stop-opacity": "0.5"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#525252",
                          "stop-opacity": "0.12"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint109_linear_3351_13395",
                      x1: "78.0645",
                      y1: "340.281",
                      x2: "78.0645",
                      y2: "361.204",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint110_linear_3351_13395",
                      x1: "78.0645",
                      y1: "340.281",
                      x2: "78.0645",
                      y2: "361.204",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint111_linear_3351_13395",
                      x1: "78.0645",
                      y1: "340.281",
                      x2: "78.0645",
                      y2: "361.204",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint112_linear_3351_13395",
                      x1: "78.0645",
                      y1: "340.281",
                      x2: "78.0645",
                      y2: "361.204",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint113_linear_3351_13395",
                      x1: "14.5113",
                      y1: "3.22474",
                      x2: "0",
                      y2: "3.22474",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#464646"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#737373",
                          "stop-opacity": "0"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint114_linear_3351_13395",
                      x1: "344.332",
                      y1: "316.899",
                      x2: "413.664",
                      y2: "386.231",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#525252",
                          "stop-opacity": "0.5"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#525252",
                          "stop-opacity": "0.12"
                      })]
                  }), (0,
                  i.jsxs)("linearGradient", {
                      id: "paint115_linear_3351_13395",
                      x1: "310.199",
                      y1: "381.994",
                      x2: "310.199",
                      y2: "317.028",
                      gradientUnits: "userSpaceOnUse",
                      children: [(0,
                      i.jsx)("stop", {
                          "stop-color": "#D2D2D2"
                      }), (0,
                      i.jsx)("stop", {
                          offset: "1",
                          "stop-color": "#262626"
                      })]
                  }), (0,
                  i.jsx)("clipPath", {
                      id: "clip0_3351_13395",
                      children: (0,
                      i.jsx)("rect", {
                          width: "44.8",
                          height: "44.8",
                          fill: "white",
                          transform: "translate(55 329.449)"
                      })
                  })]
              })]
          })
      });
      function el() {
          let e = (0,
          o.useRef)(null)
            , t = (0,
          f.Y)(e, {
              once: !0
          })
            , s = (0,
          o.useRef)(null)
            , a = (0,
          f.Y)(s, {
              once: !0
          });
          return (0,
          i.jsxs)("main", {
              className: "min-h-screen mx-auto md:w-full h-full flex flex-col",
              children: [(0,
              i.jsxs)("div", {
                  className: "flex flex-col items-center justify-center relative max-w-screen-2xl w-11/12 mx-auto mt-4 sm:mt-4",
                  children: [(0,
                  i.jsx)(ea, {}), (0,
                  i.jsx)(u.E.div, {
                      initial: {
                          opacity: 0,
                          y: 100,
                          scale: .8
                      },
                      animate: t ? {
                          opacity: 1,
                          y: 0,
                          scale: 1
                      } : {},
                      transition: {
                          duration: .75,
                          delay: 1.7,
                          ease: h.YQ
                      },
                      className: "hidden md:block",
                      ref: e,
                      children: (0,
                      i.jsx)(er, {})
                  }), (0,
                  i.jsx)(u.E.div, {
                      initial: {
                          opacity: 0,
                          y: 100,
                          scale: .8
                      },
                      animate: a ? {
                          opacity: 1,
                          y: 0,
                          scale: 1
                      } : {},
                      transition: {
                          duration: .75,
                          delay: 1,
                          ease: h.YQ
                      },
                      className: "md:hidden block",
                      ref: s,
                      children: (0,
                      i.jsx)(en, {})
                  })]
              }), (0,
              i.jsx)(b, {}), (0,
              i.jsx)($, {}), (0,
              i.jsx)(ei, {}), (0,
              i.jsx)(g, {}), (0,
              i.jsx)(r.Z, {})]
          })
      }
  },
  8349: function(e, t, s) {
      "use strict";
      s.d(t, {
          Z: function() {
              return x
          }
      });
      var i = s(7437)
        , r = s(3145)
        , o = s(7648)
        , a = s(746)
        , n = s(4922)
        , l = s(5439)
        , d = s(2265)
        , c = s(722);
      function x() {
          let e = (0,
          c.ac)({
              query: "(max-width: 768px)"
          })
            , t = (0,
          d.useRef)(null)
            , s = (0,
          n.Y)(t, {
              once: !0
          })
            , [x,p] = (0,
          d.useState)(!1)
            , f = "0x000000000000000000000000000000"
            , u = async () => {
              try {
                  await navigator.clipboard.writeText(f),
                  p(!0),
                  setTimeout( () => p(!1), 2e3)
              } catch (e) {
                  console.error("Failed to copy:", e)
              }
          }
          ;
          return (0,
          i.jsxs)("div", {
              className: "bg-[#111111] text-white w-full max-w-screen-2xl mx-auto py-11 md:px-16 flex flex-col gap-y-5 md:gap-y-11",
              ref: t,
              children: [(0,
              i.jsxs)(l.E.div, {
                  initial: {
                      opacity: 0,
                      y: 90
                  },
                  animate: s ? {
                      opacity: 1,
                      y: 0
                  } : {},
                  transition: e ? {
                      duration: .75,
                      delay: .5
                  } : {
                      duration: 1,
                      delay: 1.5
                  },
                  className: "w-full flex flex-col gap-y-6 md:flex-row items-center justify-between py-4",
                  children: [(0,
                  i.jsx)(r.default, {
                      src: a.Z,
                      alt: "logo",
                      className: "size-fit"
                  }), (0,
                  i.jsx)("div", {
                      className: "flex flex-wrap justify-center items-center gap-x-6",
                      children: [{
                          name: "docs",
                          link: "#docs"
                      }, {
                          name: "app",
                          link: "#app"
                      }].map(e => (0,
                      i.jsx)(o.default, {
                          href: e.link,
                          target: "_blank",
                          className: "uppercase text-xs md:text-lg",
                          children: e.name
                      }, e.name))
                  }), (0,
                  i.jsx)("div", {
                      className: "flex items-center gap-x-6",
                      children: [{
                          name: "x",
                          url: "https://x.com/destraaioneth"
                      }, {
                          name: "tg",
                          url: "https://t.me/destraaioneth"
                      }].map(e => (0,
                      i.jsx)("a", {
                          href: e.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0,
                          i.jsx)(r.default, {
                              src: "/socials/".concat(e.name, ".svg"),
                              alt: e.name,
                              className: "size-5 md:size-8",
                              width: 40,
                              height: 40
                          })
                      }, e.name))
                  })]
              }), (0,
              i.jsx)(l.E.hr, {
                  initial: {
                      opacity: 0,
                      y: 90
                  },
                  animate: s ? {
                      opacity: 1,
                      y: 0
                  } : {},
                  transition: e ? {
                      duration: .75,
                      delay: .6
                  } : {
                      duration: 1,
                      delay: 1.6
                  },
                  className: "border-[#A3A3A3] mx-10 md:mx-0"
              }), (0,
              i.jsxs)(l.E.div, {
                  initial: {
                      opacity: 0,
                      y: 90
                  },
                  animate: s ? {
                      opacity: 1,
                      y: 0
                  } : {
                      opacity: 0,
                      y: 90
                  },
                  transition: e ? {
                      duration: .75,
                      delay: .7
                  } : {
                      duration: 1,
                      delay: 1.7
                  },
                  className: "flex flex-col md:flex-row gap-y-4 text-xs md:text-base items-center justify-between text-[#A3A3A3] capitalize",
                  children: [(0,
                  i.jsx)("p", {
                      children: "Destra Network AI @2025 all rights reserved"
                  }), (0,
                  i.jsxs)("div", {
                      className: "relative",
                      children: [(0,
                      i.jsxs)("div", {
                          className: " text-center   py-2.5 px-6 rounded-xl text-xs sm:text-sm md:text-base cursor-pointer",
                          onClick: u,
                          children: ["CA: ", f]
                      }), x && (0,
                      i.jsx)("div", {
                          className: "absolute top-0 left-1/2 -translate-x-1/2 mt-[-60px] bg-[#FF3838] font-sm font-semibold text-white py-2 px-4 rounded-md",
                          children: "Address copied to clipboard!"
                      })]
                  }), (0,
                  i.jsxs)("div", {
                      className: "flex items-center gap-x-6",
                      children: [(0,
                      i.jsx)(o.default, {
                          href: "/tnc",
                          target: "_blank",
                          children: "terms & conditions"
                      }), (0,
                      i.jsx)(o.default, {
                          href: "/privacy",
                          target: "_blank",
                          children: "privacy policy"
                      })]
                  })]
              })]
          })
      }
  },
  4508: function(e, t, s) {
      "use strict";
      s.d(t, {
          cn: function() {
              return o
          }
      });
      var i = s(1994)
        , r = s(3335);
      function o() {
          for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
          return (0,
          r.m6)((0,
          i.W)(t))
      }
  },
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
  e.O(0, [726, 363, 137, 491, 971, 117, 744], function() {
      return e(e.s = 193)
  }),
  _N_E = e.O()
}
]);
