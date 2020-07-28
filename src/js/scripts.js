"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.5.1",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function is(e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0;
  }

  function Ee() {
    return !1;
  }

  function Se(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function ke(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        ke(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }

  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Ae(this, e, Se), !1;
      },
      trigger: function trigger() {
        return Ae(this, e), !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return ke(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return ke(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Oe(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function Pe(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(je, ""), u, l));
      }
    }

    return n;
  }

  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Oe(o[r], a[r]);
      } else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Re(this, e, !0);
    },
    remove: function remove(e) {
      return Re(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Pe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Ie = function Ie(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      We = function We(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function $e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
      }
    }));
  }();
  var _e = ["Webkit", "Moz", "ms"],
      ze = E.createElement("div").style,
      Ue = {};

  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = _e.length;

      while (n--) {
        if ((e = _e[n] + t) in ze) return e;
      }
    }(e) || e);
  }

  var Ve = /^(none|table(?!-c[ea]).+)/,
      Ge = /^--/,
      Ye = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Qe = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Ze(e, t, n) {
    var r = Ie(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Ge.test(t),
            l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
          return Ze(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = et).prototype = {
    constructor: et,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0;
    }), tt = Date.now();
  }

  function lt(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ft(o, e, t) {
    var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: tt || ut(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], ot.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && at.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (tt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), tt = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st());
  }, S.fx.stop = function () {
    nt = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt,
      dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), pt = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;

    dt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(P) || []).join(" ");
  }

  function yt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, yt(this)));
      });
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, yt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, yt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = mt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : vt(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function wt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var Tt = C.location,
      Ct = {
    guid: Date.now()
  },
      Et = /\?/;

  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
  };

  var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;

  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      Dt(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      Dt(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  });
  var jt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Bt(t, i, o, a) {
    var s = {},
        u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function $t(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Ht.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var _t = {
    0: 200,
    1223: 204
  },
      zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || zt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Yt = C.jQuery,
      Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this);
    }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
    }, this)), a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      });
    }, this)), this.setup(), this.initialize();
  }

  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function run() {
      this._width = this.$element.width();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      this.$stage.children(".cloned").remove();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this.settings.margin || "",
          c = !this.settings.autoWidth,
          d = this.settings.rtl,
          e = {
        width: "auto",
        "margin-left": d ? b : "",
        "margin-right": d ? "" : b
      };
      !c && this.$stage.children().css(e), a.css = e;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          c = null,
          d = this._items.length,
          e = !this.settings.autoWidth,
          f = [];

      for (a.items = {
        merge: !1,
        width: b
      }; d--;) {
        c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      }

      this._widths = f;
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      var b = [],
          c = this._items,
          d = this.settings,
          e = Math.max(2 * d.items, 4),
          f = 2 * Math.ceil(c.length / 2),
          g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
          h = "",
          i = "";

      for (g /= 2; g > 0;) {
        b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
      }

      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
        d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      }

      this._coordinates = f;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      var a = this.settings.stagePadding,
          b = this._coordinates,
          c = {
        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
        "padding-left": a || "",
        "padding-right": a || ""
      };
      this.$stage.css(c);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this._coordinates.length,
          c = !this.settings.autoWidth,
          d = this.$stage.children();
      if (c && a.items.merge) for (; b--;) {
        a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
      } else c && (a.css.width = a.items.width, d.css(a.css));
    }
  }, {
    filter: ["items"],
    run: function run() {
      this._coordinates.length < 1 && this.$stage.removeAttr("style");
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
    }
  }, {
    filter: ["position"],
    run: function run() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function run() {
      var a,
          b,
          c,
          d,
          e = this.settings.rtl ? 1 : -1,
          f = 2 * this.settings.stagePadding,
          g = this.coordinates(this.current()) + f,
          h = g + this.width() * e,
          i = [];

      for (c = 0, d = this._coordinates.length; c < d; c++) {
        a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      }

      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
    }
  }], e.prototype.initializeStage = function () {
    this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
      "class": this.settings.stageClass
    }).wrap(a("<div/>", {
      "class": this.settings.stageOuterClass
    })), this.$element.append(this.$stage.parent()));
  }, e.prototype.initializeItems = function () {
    var b = this.$element.find(".owl-item");
    if (b.length) return this._items = b.get().map(function (b) {
      return a(b);
    }), this._mergers = this._items.map(function () {
      return 1;
    }), void this.refresh();
    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
  }, e.prototype.initialize = function () {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var a, b, c;
      a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a);
    }

    this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
  }, e.prototype.isVisible = function () {
    return !this.settings.checkVisibility || this.$element.is(":visible");
  }, e.prototype.setup = function () {
    var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
    c ? (a.each(c, function (a) {
      a <= b && a > d && (d = Number(a));
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }, e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data;
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
      return this[a];
    }, this._invalidated), e = {}; b < c;) {
      (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    }

    this._invalidated = {}, !this.is("valid") && this.enter("valid");
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;

      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  }, e.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  }, e.prototype.onResize = function () {
    return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
  }, e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1;
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
  }, e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
    }, this)));
  }, e.prototype.onDragMove = function (a) {
    var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
  }, e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1;
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
  }, e.prototype.closest = function (b, c) {
    var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
    return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) {
      return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e;
    }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e;
  }, e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    });
  }, e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0;
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;

    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }

    return this._current;
  }, e.prototype.invalidate = function (b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
      return b;
    });
  }, e.prototype.reset = function (a) {
    (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
  }, e.prototype.normalize = function (a, b) {
    var c = this._items.length,
        e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
  }, e.prototype.relative = function (a) {
    return a -= this._clones.length / 2, this.normalize(a, !0);
  }, e.prototype.maximum = function (a) {
    var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
      if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d);) {
        ;
      }
      f = b + 1;
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0);
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2;
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function f(a) {
      return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
    };

    return b === d ? a.map(this._clones, function (a, b) {
      return f(b);
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null;
    });
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed;
  }, e.prototype.coordinates = function (b) {
    var c,
        e = 1,
        f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b);
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
  }, e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
  }, e.prototype.to = function (a, b) {
    var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update();
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a);
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a);
  }, e.prototype.onTransitionEnd = function (a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated");
  }, e.prototype.viewport = function () {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType;
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    });
  }, e.prototype.remove = function (a) {
    (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }));
  }, e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
    }, this));
  }, e.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));

    for (var d in this._plugins) {
      this._plugins[d].destroy();
    }

    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;

    switch (b) {
      case "<":
        return d ? a > c : a < c;

      case ">":
        return d ? a < c : a > c;

      case ">=":
        return d ? a <= c : a >= c;

      case "<=":
        return d ? a >= c : a <= c;
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
  }, e.prototype.trigger = function (b, c, d, f, g) {
    var h = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    },
        i = a.camelCase(a.grep(["on", b, d], function (a) {
      return a;
    }).join("-").toLowerCase()),
        j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
      relatedTarget: this
    }, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j);
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
  }, e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
    }, this));
  }, e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b]--;
    }, this));
  }, e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
        }, a.event.special[b.name].owl = !0;
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d;
    }, this)));
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0;
    }, this));
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b];
    }, this));
  }, e.prototype.pointer = function (a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
  }, e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a));
  }, e.prototype.difference = function (a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    };
  }, a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
          f = d.data("owl.carousel");
      f || (f = new e(this, "object" == _typeof(b) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
        }, f));
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
    });
  }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function () {
    this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
  }, e.prototype.refresh = function () {
    this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
  }, e.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this._interval);

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
          var c = this._core.settings,
              e = c.center && Math.ceil(c.items / 2) || c.items,
              f = c.center && -1 * e || 0,
              g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
              h = this._core.clones().length,
              i = a.proxy(function (a, b) {
            this.load(b);
          }, this);

          for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) {
            this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
          }
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    lazyLoad: !1,
    lazyLoadEager: 0
  }, e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c),
        e = d && d.find(".owl-lazy");

    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e,
          f = a(d),
          g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () {
        this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("srcset", g) : (e = new Image(), e.onload = a.proxy(function () {
        f.css({
          "background-image": 'url("' + g + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this), e.src = g);
    }, this)), this._loaded.push(d.get(0)));
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this._core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(c) {
    this._core = c, this._previousHeight = null, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
      }, this),
      "loaded.owl.lazy": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
    var d = this;
    a(b).on("load", function () {
      d._core.settings.autoHeight && d.update();
    }), a(b).resize(function () {
      d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () {
        d.update();
      }, 250));
    });
  };

  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function () {
    var b = this._core._current,
        c = b + this._core.settings.items,
        d = this._core.settings.lazyLoad,
        e = this._core.$stage.children().toArray().slice(b, c),
        f = [],
        g = 0;

    a.each(e, function (b, c) {
      f.push(a(c).height());
    }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        });
      }, this),
      "resize.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop();
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a);
    }, this));
  };

  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function (a, b) {
    var c = function () {
      return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
    }(),
        d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
        e = a.attr("data-width") || this._core.settings.videoWidth,
        f = a.attr("data-height") || this._core.settings.videoHeight,
        g = a.attr("href");

    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar";
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
  }, e.prototype.thumbnail = function (b, c) {
    var d,
        e,
        f,
        g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
        h = b.find("img"),
        i = "src",
        j = "",
        k = this._core.settings,
        l = function l(c) {
      e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
        "class": "owl-video-tn " + j,
        srcType: c
      }) : a("<div/>", {
        "class": "owl-video-tn",
        style: "opacity:1;background-image:url(" + c + ")"
      }), b.after(d), b.after(e);
    };

    if (b.wrap(a("<div/>", {
      "class": "owl-video-wrapper",
      style: g
    })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
    "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a[0].thumbnail_large, l(f);
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a.framegrab_url, l(f);
      }
    });
  }, e.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
  }, e.prototype.play = function (b) {
    var c,
        d = a(b.target),
        e = d.closest("." + this._core.settings.itemClass),
        f = this._videos[e.attr("data-video")],
        g = f.width || "100%",
        h = f.height || this._core.$stage.height();

    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
  }, e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame");
  }, e.prototype.destroy = function () {
    var a, b;

    this._core.$element.off("click.owl.video");

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        a.namespace && (this.swapping = "translated" == a.type);
      }, this),
      "translate.owl.carousel": a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
      }, this)
    }, this.core.$element.on(this.handlers);
  };

  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function () {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b,
          c = a.proxy(this.clear, this),
          d = this.core.$stage.children().eq(this.previous),
          e = this.core.$stage.children().eq(this.next),
          f = this.core.settings.animateIn,
          g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + "px"
      }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
    }
  }, e.prototype.clear = function (b) {
    a(b.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this.core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play();
      }, this),
      "play.owl.autoplay": a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c);
      }, this),
      "stop.owl.autoplay": a.proxy(function (a) {
        a.namespace && this.stop();
      }, this),
      "mouseover.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
      }, this),
      "touchstart.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "touchend.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play();
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
  };

  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype._next = function (d) {
    this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
  }, e.prototype.read = function () {
    return new Date().getTime() - this._time;
  }, e.prototype.play = function (c, d) {
    var e;
    this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e);
  }, e.prototype.stop = function () {
    this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"));
  }, e.prototype.pause = function () {
    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call));
  }, e.prototype.destroy = function () {
    var a, b;
    this.stop();

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
      }, this),
      "added.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
      }, this),
      "remove.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && this.draw();
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  };

  e.Defaults = {
    nav: !1,
    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
    navSpeed: !1,
    navElement: 'button type="button" role="presentation"',
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function () {
    var b,
        c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.prev(c.navSpeed);
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.next(c.navSpeed);
    }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed);
    }, this));

    for (b in this._overrides) {
      this._core[b] = a.proxy(this[b], this);
    }
  }, e.prototype.destroy = function () {
    var a, b, c, d, e;
    e = this._core.settings;

    for (a in this._handlers) {
      this.$element.off(a, this._handlers[a]);
    }

    for (b in this._controls) {
      "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
    }

    for (d in this.overides) {
      this._core[d] = this._overrides[d];
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, e.prototype.update = function () {
    var a,
        b,
        c,
        d = this._core.clones().length / 2,
        e = d + this._core.items().length,
        f = this._core.maximum(!0),
        g = this._core.settings,
        h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;

    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
      if (b >= h || 0 === b) {
        if (this._pages.push({
          start: Math.min(f, a - d),
          end: a - d + h - 1
        }), Math.min(f, a - d) === f) break;
        b = 0, ++c;
      }

      b += this._core.mergers(this._core.relative(a));
    }
  }, e.prototype.draw = function () {
    var b,
        c = this._core.settings,
        d = this._core.items().length <= c.items,
        e = this._core.relative(this._core.current()),
        f = c.loop || c.rewind;

    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
  }, e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    };
  }, e.prototype.current = function () {
    var b = this._core.relative(this._core.current());

    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b;
    }, this)).pop();
  }, e.prototype.getPosition = function (b) {
    var c,
        d,
        e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
  }, e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
  }, e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
  }, e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content;
        }
      }, this),
      "changed.owl.carousel": a.proxy(function (c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
              e = a.map(this._hashes, function (a, b) {
            return a === d ? b : null;
          }).join();

          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
      var c = b.location.hash.substring(1),
          e = this._core.$stage.children(),
          f = this._hashes[c] && e.index(this._hashes[c]);

      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
    }, this));
  };

  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");

    for (c in this._handlers) {
      this._core.$element.off(c, this._handlers[c]);
    }

    for (d in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[d] && (this[d] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  function e(b, c) {
    var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
      if (g[b] !== d) return e = !c || b, !1;
    }), e;
  }

  function f(a) {
    return e(a, !0);
  }

  var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
    transition: {
      end: {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
      }
    },
    animation: {
      end: {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd",
        animation: "animationend"
      }
    }
  },
      j = {
    csstransforms: function csstransforms() {
      return !!e("transform");
    },
    csstransforms3d: function csstransforms3d() {
      return !!e("perspective");
    },
    csstransitions: function csstransitions() {
      return !!e("transition");
    },
    cssanimations: function cssanimations() {
      return !!e("animation");
    }
  };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);
"use strict";

var controller = {
  productsArray: {
    /** @method commaInMoney "Método substituir os pontos por vírgulas nos preços dos produtos"
     * @param {Array} productsArray "Array contendo os produtos que serão utilizados na página."
     * @returns {Array} "Array de produtos com os preços modificados"
     */
    commaInMoney: function commaInMoney(productsArray) {
      var result = productsArray.map(function (value) {
        return {
          productName: value.productName,
          productBrand: value.productBrand,
          productPrice: value.productPrice.replace('.', ','),
          productSalePrice: value.productSalePrice.replace('.', ','),
          productIsMamboPlus: value.productIsMamboPlus,
          productIsOrganic: value.productIsOrganic,
          productHasStock: value.productHasStock,
          productDescription: value.productDescription
        };
      });
      return result;
    },

    /** @method addImageKey "Método adicionar as imagens nos produtos juntamente com uma nova Key chamada 'productImages'"
     * @param {Array} productsArray "Array contendo os produtos que serão utilizados na página."
     * @returns {Array} "Array de produtos com as imagens inseridas na Key 'productImages'"
     */
    addImageKey: function addImageKey(productsArray) {
      var result = productsArray.map(function (value) {
        var productImagesLocal = [];

        switch (value.productName) {
          case 'Carne Moída de Patinho Bovina Resfriada Bandeja':
            productImagesLocal = ['https://s3-alpha-sig.figma.com/img/a83e/d341/adc59341c8d9b54f76aa430164074beb?Expires=1596412800&Signature=Okp0nL9hm0PIvllFohX7XkiNsqZi5oWxhbr~~opAmgnlTUup0KRkznWAI8T8klr9dvE8KDbWb4oN6Qf9dhPvp1ZLpv8MY7DqMETRy-RgQGMgYcfTsMxlDzZTarwsI~gI2HZMkjBPK66nVt3tlPQ6ygIFGVjBewi3Dlm9LkE7V~vv4ejwDaVUu6adCD3bOVZHDAgQHn5WD0GgV6nVEpPtgUHXoiJ3fl4hcZW-GHFX4NMObwyQrPsNvMX3kIn-3fcpWigBdWw~CGp4bMXTwnlFPvaqS4IhiM9VxohsDxthf9RexVw06XlO2MAWVkqxaFB5r8XP2Lo5FSw0-OXum-Hs7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/a83e/d341/adc59341c8d9b54f76aa430164074beb?Expires=1596412800&Signature=Okp0nL9hm0PIvllFohX7XkiNsqZi5oWxhbr~~opAmgnlTUup0KRkznWAI8T8klr9dvE8KDbWb4oN6Qf9dhPvp1ZLpv8MY7DqMETRy-RgQGMgYcfTsMxlDzZTarwsI~gI2HZMkjBPK66nVt3tlPQ6ygIFGVjBewi3Dlm9LkE7V~vv4ejwDaVUu6adCD3bOVZHDAgQHn5WD0GgV6nVEpPtgUHXoiJ3fl4hcZW-GHFX4NMObwyQrPsNvMX3kIn-3fcpWigBdWw~CGp4bMXTwnlFPvaqS4IhiM9VxohsDxthf9RexVw06XlO2MAWVkqxaFB5r8XP2Lo5FSw0-OXum-Hs7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/a83e/d341/adc59341c8d9b54f76aa430164074beb?Expires=1596412800&Signature=Okp0nL9hm0PIvllFohX7XkiNsqZi5oWxhbr~~opAmgnlTUup0KRkznWAI8T8klr9dvE8KDbWb4oN6Qf9dhPvp1ZLpv8MY7DqMETRy-RgQGMgYcfTsMxlDzZTarwsI~gI2HZMkjBPK66nVt3tlPQ6ygIFGVjBewi3Dlm9LkE7V~vv4ejwDaVUu6adCD3bOVZHDAgQHn5WD0GgV6nVEpPtgUHXoiJ3fl4hcZW-GHFX4NMObwyQrPsNvMX3kIn-3fcpWigBdWw~CGp4bMXTwnlFPvaqS4IhiM9VxohsDxthf9RexVw06XlO2MAWVkqxaFB5r8XP2Lo5FSw0-OXum-Hs7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/a83e/d341/adc59341c8d9b54f76aa430164074beb?Expires=1596412800&Signature=Okp0nL9hm0PIvllFohX7XkiNsqZi5oWxhbr~~opAmgnlTUup0KRkznWAI8T8klr9dvE8KDbWb4oN6Qf9dhPvp1ZLpv8MY7DqMETRy-RgQGMgYcfTsMxlDzZTarwsI~gI2HZMkjBPK66nVt3tlPQ6ygIFGVjBewi3Dlm9LkE7V~vv4ejwDaVUu6adCD3bOVZHDAgQHn5WD0GgV6nVEpPtgUHXoiJ3fl4hcZW-GHFX4NMObwyQrPsNvMX3kIn-3fcpWigBdWw~CGp4bMXTwnlFPvaqS4IhiM9VxohsDxthf9RexVw06XlO2MAWVkqxaFB5r8XP2Lo5FSw0-OXum-Hs7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'];
            break;

          case 'Vinho Chileno Branco Gewurztraminer Adobe Orgânico 750ml':
            productImagesLocal = ['https://s3-alpha-sig.figma.com/img/66f6/37a1/55375e9fa65d088dc1a02dc466e40fa7?Expires=1596412800&Signature=ek9dD2LhKNL0MU4ue6q32Jmoj2vVO0heikBgfeldYc5RKMREDLQAxsIOllm9tIZElHYmsnzroyL3IbGg8bdom-ZzO8Bdf~3XDj2OImttKZamwicKqbEV6DHX4tLU~gk2Tp9oudEKHlxXpmrEBn5SxcHlxCLW91AQyTlVUaJxZLtsQWdBOEAjIyTLLRIaIc7NWM-n3OKs3dJ3FTjGNnlyWwvty7nZxHEmXPkBtOte4kINNWxxnZV8JTVNiJ9YpnUerbQu3PVdBrmgpLwgQALz1FwRSYEH4eum0zAyXQixv4WI3MeO12GPmLT~RR59iTBwEd9PYYJW8ySAreFOAn4~fA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/66f6/37a1/55375e9fa65d088dc1a02dc466e40fa7?Expires=1596412800&Signature=ek9dD2LhKNL0MU4ue6q32Jmoj2vVO0heikBgfeldYc5RKMREDLQAxsIOllm9tIZElHYmsnzroyL3IbGg8bdom-ZzO8Bdf~3XDj2OImttKZamwicKqbEV6DHX4tLU~gk2Tp9oudEKHlxXpmrEBn5SxcHlxCLW91AQyTlVUaJxZLtsQWdBOEAjIyTLLRIaIc7NWM-n3OKs3dJ3FTjGNnlyWwvty7nZxHEmXPkBtOte4kINNWxxnZV8JTVNiJ9YpnUerbQu3PVdBrmgpLwgQALz1FwRSYEH4eum0zAyXQixv4WI3MeO12GPmLT~RR59iTBwEd9PYYJW8ySAreFOAn4~fA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/66f6/37a1/55375e9fa65d088dc1a02dc466e40fa7?Expires=1596412800&Signature=ek9dD2LhKNL0MU4ue6q32Jmoj2vVO0heikBgfeldYc5RKMREDLQAxsIOllm9tIZElHYmsnzroyL3IbGg8bdom-ZzO8Bdf~3XDj2OImttKZamwicKqbEV6DHX4tLU~gk2Tp9oudEKHlxXpmrEBn5SxcHlxCLW91AQyTlVUaJxZLtsQWdBOEAjIyTLLRIaIc7NWM-n3OKs3dJ3FTjGNnlyWwvty7nZxHEmXPkBtOte4kINNWxxnZV8JTVNiJ9YpnUerbQu3PVdBrmgpLwgQALz1FwRSYEH4eum0zAyXQixv4WI3MeO12GPmLT~RR59iTBwEd9PYYJW8ySAreFOAn4~fA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/66f6/37a1/55375e9fa65d088dc1a02dc466e40fa7?Expires=1596412800&Signature=ek9dD2LhKNL0MU4ue6q32Jmoj2vVO0heikBgfeldYc5RKMREDLQAxsIOllm9tIZElHYmsnzroyL3IbGg8bdom-ZzO8Bdf~3XDj2OImttKZamwicKqbEV6DHX4tLU~gk2Tp9oudEKHlxXpmrEBn5SxcHlxCLW91AQyTlVUaJxZLtsQWdBOEAjIyTLLRIaIc7NWM-n3OKs3dJ3FTjGNnlyWwvty7nZxHEmXPkBtOte4kINNWxxnZV8JTVNiJ9YpnUerbQu3PVdBrmgpLwgQALz1FwRSYEH4eum0zAyXQixv4WI3MeO12GPmLT~RR59iTBwEd9PYYJW8ySAreFOAn4~fA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'];
            break;

          case 'Amaranto de Flocos Orgânico Jasmine 150g':
            productImagesLocal = ['https://s3-alpha-sig.figma.com/img/eed0/2e18/450a2336303293f21ae6479d2f7ca7d0?Expires=1596412800&Signature=Kil4~6djTbxY0Nilgisc-nDF5p3O4TYcCCjLOrGkrHRLh294puK8G8OLOSVHtp7hLc1NVLJiGXvesQGIdrq6OCVPpHYnXfWwoVm2JtdGc9A633O05VPW6R-wnw3F1z-jFdShW2tzcq9ksq1VxdwpKlQEqmsCIyec34y58wK52bHzeRlmFCNRgApUhLiVEHOsqC0rRtFwQQDO89BxLRhXp8B8WX5gH2zu1AjXKp2NSLl-R1cPYVHLwI9Edzt6NQ5WvfKyP2APE6t0kYsfZKPwSDirIZl6fp5plksi18Ye8nCHKv~8ar4UdjJdvWgJBN0kFGOLR6C04kaPc80051srsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/eed0/2e18/450a2336303293f21ae6479d2f7ca7d0?Expires=1596412800&Signature=Kil4~6djTbxY0Nilgisc-nDF5p3O4TYcCCjLOrGkrHRLh294puK8G8OLOSVHtp7hLc1NVLJiGXvesQGIdrq6OCVPpHYnXfWwoVm2JtdGc9A633O05VPW6R-wnw3F1z-jFdShW2tzcq9ksq1VxdwpKlQEqmsCIyec34y58wK52bHzeRlmFCNRgApUhLiVEHOsqC0rRtFwQQDO89BxLRhXp8B8WX5gH2zu1AjXKp2NSLl-R1cPYVHLwI9Edzt6NQ5WvfKyP2APE6t0kYsfZKPwSDirIZl6fp5plksi18Ye8nCHKv~8ar4UdjJdvWgJBN0kFGOLR6C04kaPc80051srsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/eed0/2e18/450a2336303293f21ae6479d2f7ca7d0?Expires=1596412800&Signature=Kil4~6djTbxY0Nilgisc-nDF5p3O4TYcCCjLOrGkrHRLh294puK8G8OLOSVHtp7hLc1NVLJiGXvesQGIdrq6OCVPpHYnXfWwoVm2JtdGc9A633O05VPW6R-wnw3F1z-jFdShW2tzcq9ksq1VxdwpKlQEqmsCIyec34y58wK52bHzeRlmFCNRgApUhLiVEHOsqC0rRtFwQQDO89BxLRhXp8B8WX5gH2zu1AjXKp2NSLl-R1cPYVHLwI9Edzt6NQ5WvfKyP2APE6t0kYsfZKPwSDirIZl6fp5plksi18Ye8nCHKv~8ar4UdjJdvWgJBN0kFGOLR6C04kaPc80051srsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/eed0/2e18/450a2336303293f21ae6479d2f7ca7d0?Expires=1596412800&Signature=Kil4~6djTbxY0Nilgisc-nDF5p3O4TYcCCjLOrGkrHRLh294puK8G8OLOSVHtp7hLc1NVLJiGXvesQGIdrq6OCVPpHYnXfWwoVm2JtdGc9A633O05VPW6R-wnw3F1z-jFdShW2tzcq9ksq1VxdwpKlQEqmsCIyec34y58wK52bHzeRlmFCNRgApUhLiVEHOsqC0rRtFwQQDO89BxLRhXp8B8WX5gH2zu1AjXKp2NSLl-R1cPYVHLwI9Edzt6NQ5WvfKyP2APE6t0kYsfZKPwSDirIZl6fp5plksi18Ye8nCHKv~8ar4UdjJdvWgJBN0kFGOLR6C04kaPc80051srsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'];
            break;

          case 'Água Mineral sem Gás Bonafont 1,5 Litro':
            productImagesLocal = ['https://s3-alpha-sig.figma.com/img/8dc1/0e18/608690abe1e008de9dd7bc71b4937459?Expires=1596412800&Signature=bDfar9zy-GhKf1fthBEzBFBNpGUEyfKIBZEEgU7K8XiRI5ykvJxi~lyXVglD37PNKI6YUKizqL5Eryis851brdyzSCfqPwuwl3wJUlkNgaT9VRYuCVvIEyq6H8Hwxr9MmR7syGlcS4zh1q3yTwWxZME~56Qa1UI2Xh-iqOWNyLdWE5TK19mBowRPqddmidWC1-82avM~IET8pjGxA1OtP32XmSS8mzw~EKSYQ02XAtBssFylA-EosJDH6aJ3fiQksJoVlghxLI2SnAWOLetiXGRWlyZ4YaMTRcqjLVbNg7xC~4oyICP0QgigNpliFxoK9eoyr4QLNtclO4Vet8~zAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/8dc1/0e18/608690abe1e008de9dd7bc71b4937459?Expires=1596412800&Signature=bDfar9zy-GhKf1fthBEzBFBNpGUEyfKIBZEEgU7K8XiRI5ykvJxi~lyXVglD37PNKI6YUKizqL5Eryis851brdyzSCfqPwuwl3wJUlkNgaT9VRYuCVvIEyq6H8Hwxr9MmR7syGlcS4zh1q3yTwWxZME~56Qa1UI2Xh-iqOWNyLdWE5TK19mBowRPqddmidWC1-82avM~IET8pjGxA1OtP32XmSS8mzw~EKSYQ02XAtBssFylA-EosJDH6aJ3fiQksJoVlghxLI2SnAWOLetiXGRWlyZ4YaMTRcqjLVbNg7xC~4oyICP0QgigNpliFxoK9eoyr4QLNtclO4Vet8~zAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/8dc1/0e18/608690abe1e008de9dd7bc71b4937459?Expires=1596412800&Signature=bDfar9zy-GhKf1fthBEzBFBNpGUEyfKIBZEEgU7K8XiRI5ykvJxi~lyXVglD37PNKI6YUKizqL5Eryis851brdyzSCfqPwuwl3wJUlkNgaT9VRYuCVvIEyq6H8Hwxr9MmR7syGlcS4zh1q3yTwWxZME~56Qa1UI2Xh-iqOWNyLdWE5TK19mBowRPqddmidWC1-82avM~IET8pjGxA1OtP32XmSS8mzw~EKSYQ02XAtBssFylA-EosJDH6aJ3fiQksJoVlghxLI2SnAWOLetiXGRWlyZ4YaMTRcqjLVbNg7xC~4oyICP0QgigNpliFxoK9eoyr4QLNtclO4Vet8~zAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/8dc1/0e18/608690abe1e008de9dd7bc71b4937459?Expires=1596412800&Signature=bDfar9zy-GhKf1fthBEzBFBNpGUEyfKIBZEEgU7K8XiRI5ykvJxi~lyXVglD37PNKI6YUKizqL5Eryis851brdyzSCfqPwuwl3wJUlkNgaT9VRYuCVvIEyq6H8Hwxr9MmR7syGlcS4zh1q3yTwWxZME~56Qa1UI2Xh-iqOWNyLdWE5TK19mBowRPqddmidWC1-82avM~IET8pjGxA1OtP32XmSS8mzw~EKSYQ02XAtBssFylA-EosJDH6aJ3fiQksJoVlghxLI2SnAWOLetiXGRWlyZ4YaMTRcqjLVbNg7xC~4oyICP0QgigNpliFxoK9eoyr4QLNtclO4Vet8~zAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'];
            break;

          case 'Lava Roupa em Pó Lavagem Perfeita Omo 800g':
            productImagesLocal = ['https://s3-alpha-sig.figma.com/img/faa2/ab9b/2de8ca2d284721b0893c51f896f7b177?Expires=1596412800&Signature=WwJ0QmC3Ccj1UNospw0zgYQaENxP7rRIXIUKSDQ2kQ3mx5OM1hczaxMM6jXqJVHGW~FWIIvLjqksfz1bZY-fNoj69crkC~DtBZtj9SJ2ZpmvcRt81SN9pV5GSnA-mAQ9MkctJ4R0VtAyAaTbQ2Lqslln8ObQ104sRpGkjlNztH6XuMV56cNKmeP-zTeoHeGKY2ogrp3W54hoG5CY4PxPHF8W8AE-tCrzqh6aZiUhBmxdzgHlxHTthfFN6-xcXk0gm3K9wwpvIrcJQXz-Ib1l5We1U9JXHXc9z-MFublscaQgBdjdFN5xsmHY2d7QLA0f7oTcXEtOd4OkvCpWHcZcJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/faa2/ab9b/2de8ca2d284721b0893c51f896f7b177?Expires=1596412800&Signature=WwJ0QmC3Ccj1UNospw0zgYQaENxP7rRIXIUKSDQ2kQ3mx5OM1hczaxMM6jXqJVHGW~FWIIvLjqksfz1bZY-fNoj69crkC~DtBZtj9SJ2ZpmvcRt81SN9pV5GSnA-mAQ9MkctJ4R0VtAyAaTbQ2Lqslln8ObQ104sRpGkjlNztH6XuMV56cNKmeP-zTeoHeGKY2ogrp3W54hoG5CY4PxPHF8W8AE-tCrzqh6aZiUhBmxdzgHlxHTthfFN6-xcXk0gm3K9wwpvIrcJQXz-Ib1l5We1U9JXHXc9z-MFublscaQgBdjdFN5xsmHY2d7QLA0f7oTcXEtOd4OkvCpWHcZcJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/faa2/ab9b/2de8ca2d284721b0893c51f896f7b177?Expires=1596412800&Signature=WwJ0QmC3Ccj1UNospw0zgYQaENxP7rRIXIUKSDQ2kQ3mx5OM1hczaxMM6jXqJVHGW~FWIIvLjqksfz1bZY-fNoj69crkC~DtBZtj9SJ2ZpmvcRt81SN9pV5GSnA-mAQ9MkctJ4R0VtAyAaTbQ2Lqslln8ObQ104sRpGkjlNztH6XuMV56cNKmeP-zTeoHeGKY2ogrp3W54hoG5CY4PxPHF8W8AE-tCrzqh6aZiUhBmxdzgHlxHTthfFN6-xcXk0gm3K9wwpvIrcJQXz-Ib1l5We1U9JXHXc9z-MFublscaQgBdjdFN5xsmHY2d7QLA0f7oTcXEtOd4OkvCpWHcZcJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/faa2/ab9b/2de8ca2d284721b0893c51f896f7b177?Expires=1596412800&Signature=WwJ0QmC3Ccj1UNospw0zgYQaENxP7rRIXIUKSDQ2kQ3mx5OM1hczaxMM6jXqJVHGW~FWIIvLjqksfz1bZY-fNoj69crkC~DtBZtj9SJ2ZpmvcRt81SN9pV5GSnA-mAQ9MkctJ4R0VtAyAaTbQ2Lqslln8ObQ104sRpGkjlNztH6XuMV56cNKmeP-zTeoHeGKY2ogrp3W54hoG5CY4PxPHF8W8AE-tCrzqh6aZiUhBmxdzgHlxHTthfFN6-xcXk0gm3K9wwpvIrcJQXz-Ib1l5We1U9JXHXc9z-MFublscaQgBdjdFN5xsmHY2d7QLA0f7oTcXEtOd4OkvCpWHcZcJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'];
            break;

          case 'Morango Orgânico FLD 250g':
            productImagesLocal = ['https://s3-alpha-sig.figma.com/img/ae6e/a809/fbc5133129eccaa5e2309e061dcff3b9?Expires=1596412800&Signature=VYjQtxrVFa2OSruXu149JyYKyf8~TebCsJXj~mjzT1QmqivH6vp4SQXJ9KwD2mSXfxXnfBbbd5NlMVEmqGDL79j58I~uZ1vIZwS7h2rMOwlEGf8Xz48RBuySpaqKREGiqjrqLCaWOHZXpGPvsR0~DnythfoT6yHZ-8GZ8gsIZVaUv0YjEkEJ-NPOcN4bQybqsH7Dl7AXoPRAfZSXWFYIpSJ9tTj9~AdpOdoGtNE2bsRQYAw93tnUBoBsajtPgWL~mlLarqmPhfAZi0rVupwMqmT8hdhAf~ji0dEECRxwa0KS6Xx~w1Dls-2khRYljvf7KM2tMaweZ6G1PgKuNxMBAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/ae6e/a809/fbc5133129eccaa5e2309e061dcff3b9?Expires=1596412800&Signature=VYjQtxrVFa2OSruXu149JyYKyf8~TebCsJXj~mjzT1QmqivH6vp4SQXJ9KwD2mSXfxXnfBbbd5NlMVEmqGDL79j58I~uZ1vIZwS7h2rMOwlEGf8Xz48RBuySpaqKREGiqjrqLCaWOHZXpGPvsR0~DnythfoT6yHZ-8GZ8gsIZVaUv0YjEkEJ-NPOcN4bQybqsH7Dl7AXoPRAfZSXWFYIpSJ9tTj9~AdpOdoGtNE2bsRQYAw93tnUBoBsajtPgWL~mlLarqmPhfAZi0rVupwMqmT8hdhAf~ji0dEECRxwa0KS6Xx~w1Dls-2khRYljvf7KM2tMaweZ6G1PgKuNxMBAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/ae6e/a809/fbc5133129eccaa5e2309e061dcff3b9?Expires=1596412800&Signature=VYjQtxrVFa2OSruXu149JyYKyf8~TebCsJXj~mjzT1QmqivH6vp4SQXJ9KwD2mSXfxXnfBbbd5NlMVEmqGDL79j58I~uZ1vIZwS7h2rMOwlEGf8Xz48RBuySpaqKREGiqjrqLCaWOHZXpGPvsR0~DnythfoT6yHZ-8GZ8gsIZVaUv0YjEkEJ-NPOcN4bQybqsH7Dl7AXoPRAfZSXWFYIpSJ9tTj9~AdpOdoGtNE2bsRQYAw93tnUBoBsajtPgWL~mlLarqmPhfAZi0rVupwMqmT8hdhAf~ji0dEECRxwa0KS6Xx~w1Dls-2khRYljvf7KM2tMaweZ6G1PgKuNxMBAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/ae6e/a809/fbc5133129eccaa5e2309e061dcff3b9?Expires=1596412800&Signature=VYjQtxrVFa2OSruXu149JyYKyf8~TebCsJXj~mjzT1QmqivH6vp4SQXJ9KwD2mSXfxXnfBbbd5NlMVEmqGDL79j58I~uZ1vIZwS7h2rMOwlEGf8Xz48RBuySpaqKREGiqjrqLCaWOHZXpGPvsR0~DnythfoT6yHZ-8GZ8gsIZVaUv0YjEkEJ-NPOcN4bQybqsH7Dl7AXoPRAfZSXWFYIpSJ9tTj9~AdpOdoGtNE2bsRQYAw93tnUBoBsajtPgWL~mlLarqmPhfAZi0rVupwMqmT8hdhAf~ji0dEECRxwa0KS6Xx~w1Dls-2khRYljvf7KM2tMaweZ6G1PgKuNxMBAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'];
            break;

          case 'Suco de Laranja Integral Natural One 1,5 Litro':
            productImagesLocal = ['https://s3-alpha-sig.figma.com/img/a754/e08d/7cc2c0be6b255804656fbaa194438b89?Expires=1596412800&Signature=K7X-FoCpOyDsl-iT7isoZjs-QsZ-9rICvV-BNdYiJ1hUkYS6RalGt-p-ZTPZDXPJW-tGY2~DKUBuTWsh6IUlyX5MauaUoNnHTmiI2MOK~78e96sGMbBA7ySVndcGFGSm2MOTFBsOAP5fh8FE4J34CdlndFxxw5c1RpCpdUtI9ZCXgPToyiVJ9AO1KijRuhE6s4DvXQDYdh5fZl1aUP2CMTIzuPJW6P0tJ6mdQE1mOoVa3n39h1cQb~VQiqhYfXRWywcQU5mXyAuMKZCNphkCwW4C4msL2qtBwj-8wGGWqsNuCg-9OzmQTb1Y1Xb5JICMdu3DaSFO186h4gHIXjlFaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/a754/e08d/7cc2c0be6b255804656fbaa194438b89?Expires=1596412800&Signature=K7X-FoCpOyDsl-iT7isoZjs-QsZ-9rICvV-BNdYiJ1hUkYS6RalGt-p-ZTPZDXPJW-tGY2~DKUBuTWsh6IUlyX5MauaUoNnHTmiI2MOK~78e96sGMbBA7ySVndcGFGSm2MOTFBsOAP5fh8FE4J34CdlndFxxw5c1RpCpdUtI9ZCXgPToyiVJ9AO1KijRuhE6s4DvXQDYdh5fZl1aUP2CMTIzuPJW6P0tJ6mdQE1mOoVa3n39h1cQb~VQiqhYfXRWywcQU5mXyAuMKZCNphkCwW4C4msL2qtBwj-8wGGWqsNuCg-9OzmQTb1Y1Xb5JICMdu3DaSFO186h4gHIXjlFaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/a754/e08d/7cc2c0be6b255804656fbaa194438b89?Expires=1596412800&Signature=K7X-FoCpOyDsl-iT7isoZjs-QsZ-9rICvV-BNdYiJ1hUkYS6RalGt-p-ZTPZDXPJW-tGY2~DKUBuTWsh6IUlyX5MauaUoNnHTmiI2MOK~78e96sGMbBA7ySVndcGFGSm2MOTFBsOAP5fh8FE4J34CdlndFxxw5c1RpCpdUtI9ZCXgPToyiVJ9AO1KijRuhE6s4DvXQDYdh5fZl1aUP2CMTIzuPJW6P0tJ6mdQE1mOoVa3n39h1cQb~VQiqhYfXRWywcQU5mXyAuMKZCNphkCwW4C4msL2qtBwj-8wGGWqsNuCg-9OzmQTb1Y1Xb5JICMdu3DaSFO186h4gHIXjlFaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/a754/e08d/7cc2c0be6b255804656fbaa194438b89?Expires=1596412800&Signature=K7X-FoCpOyDsl-iT7isoZjs-QsZ-9rICvV-BNdYiJ1hUkYS6RalGt-p-ZTPZDXPJW-tGY2~DKUBuTWsh6IUlyX5MauaUoNnHTmiI2MOK~78e96sGMbBA7ySVndcGFGSm2MOTFBsOAP5fh8FE4J34CdlndFxxw5c1RpCpdUtI9ZCXgPToyiVJ9AO1KijRuhE6s4DvXQDYdh5fZl1aUP2CMTIzuPJW6P0tJ6mdQE1mOoVa3n39h1cQb~VQiqhYfXRWywcQU5mXyAuMKZCNphkCwW4C4msL2qtBwj-8wGGWqsNuCg-9OzmQTb1Y1Xb5JICMdu3DaSFO186h4gHIXjlFaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'];
            break;

          case 'Brocolis Ninja Bandeja 300g':
            productImagesLocal = ['https://s3-alpha-sig.figma.com/img/e511/d445/723a77e88cb56d0ef4f7ad5d7476b53a?Expires=1596412800&Signature=A0qq4uoqnf4GwAsjxw3pqKOeGLVMjbtkhbgkMfmASBKTaTa-l-IJPAlTxMttpp8l55ldNXGEofSatG8kgk0hfQkul-cIm64D8mzurznyTmm5M5D-eeW2Fb3~I3aw70mhwRBGbIoxF1J~nMSlPzSrm7pGZQdDf4q4L9T0wnsX1zqnIsA~U2ec4ETUa973kVVTdRY73O888arLBxCnVP5zC38pqkqIDJbDBuVbbfBID0SOMmENZf15qeX8mix3mLHngFNKIYJbZgvBQXs2cSRfUfVSNHM2s0bRs~yZGBEpZu~JpK6pAk-xOtachuvY~~CoJr0Pua0roRc5pQ8NF6~Fyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/e511/d445/723a77e88cb56d0ef4f7ad5d7476b53a?Expires=1596412800&Signature=A0qq4uoqnf4GwAsjxw3pqKOeGLVMjbtkhbgkMfmASBKTaTa-l-IJPAlTxMttpp8l55ldNXGEofSatG8kgk0hfQkul-cIm64D8mzurznyTmm5M5D-eeW2Fb3~I3aw70mhwRBGbIoxF1J~nMSlPzSrm7pGZQdDf4q4L9T0wnsX1zqnIsA~U2ec4ETUa973kVVTdRY73O888arLBxCnVP5zC38pqkqIDJbDBuVbbfBID0SOMmENZf15qeX8mix3mLHngFNKIYJbZgvBQXs2cSRfUfVSNHM2s0bRs~yZGBEpZu~JpK6pAk-xOtachuvY~~CoJr0Pua0roRc5pQ8NF6~Fyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/e511/d445/723a77e88cb56d0ef4f7ad5d7476b53a?Expires=1596412800&Signature=A0qq4uoqnf4GwAsjxw3pqKOeGLVMjbtkhbgkMfmASBKTaTa-l-IJPAlTxMttpp8l55ldNXGEofSatG8kgk0hfQkul-cIm64D8mzurznyTmm5M5D-eeW2Fb3~I3aw70mhwRBGbIoxF1J~nMSlPzSrm7pGZQdDf4q4L9T0wnsX1zqnIsA~U2ec4ETUa973kVVTdRY73O888arLBxCnVP5zC38pqkqIDJbDBuVbbfBID0SOMmENZf15qeX8mix3mLHngFNKIYJbZgvBQXs2cSRfUfVSNHM2s0bRs~yZGBEpZu~JpK6pAk-xOtachuvY~~CoJr0Pua0roRc5pQ8NF6~Fyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/e511/d445/723a77e88cb56d0ef4f7ad5d7476b53a?Expires=1596412800&Signature=A0qq4uoqnf4GwAsjxw3pqKOeGLVMjbtkhbgkMfmASBKTaTa-l-IJPAlTxMttpp8l55ldNXGEofSatG8kgk0hfQkul-cIm64D8mzurznyTmm5M5D-eeW2Fb3~I3aw70mhwRBGbIoxF1J~nMSlPzSrm7pGZQdDf4q4L9T0wnsX1zqnIsA~U2ec4ETUa973kVVTdRY73O888arLBxCnVP5zC38pqkqIDJbDBuVbbfBID0SOMmENZf15qeX8mix3mLHngFNKIYJbZgvBQXs2cSRfUfVSNHM2s0bRs~yZGBEpZu~JpK6pAk-xOtachuvY~~CoJr0Pua0roRc5pQ8NF6~Fyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'];
            break;

          case 'Brioche Mambo 400g':
            productImagesLocal = ['https://s3-alpha-sig.figma.com/img/49dc/6be4/572ce91427213f5c8d2416b685b911dd?Expires=1596412800&Signature=XQXTBr821owKxw4q78tXMNSz16oWzy08GKjGGREf8WO9TWUKSbMSfOZdZS0kTSgEUTzehPI~CB0v4k~-9RRN9paXCrXdJ-jp2S9DkhRMQdGIxbcfNEANSSDd~qayYfC-LPSdE0q9IQEj9KAHH1MpjLXuCEVie-pgNJYTZ54rm75hfO9fvNPamR1~ppu9ZkSAkn-kvPfagph6txmC~-5iRy9pZB4Wd-n7hih8hUtuNSKQ7ucd96eKOPcIK6RIXcF8V0Zrgc1eluk3ED-ZRrl8gkzYtl8WVexwOZrmKYcZchQjE8gQ9ReQr4bgrTpwXWJ9W3GWQPImH~nP2TgG6SvAdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/49dc/6be4/572ce91427213f5c8d2416b685b911dd?Expires=1596412800&Signature=XQXTBr821owKxw4q78tXMNSz16oWzy08GKjGGREf8WO9TWUKSbMSfOZdZS0kTSgEUTzehPI~CB0v4k~-9RRN9paXCrXdJ-jp2S9DkhRMQdGIxbcfNEANSSDd~qayYfC-LPSdE0q9IQEj9KAHH1MpjLXuCEVie-pgNJYTZ54rm75hfO9fvNPamR1~ppu9ZkSAkn-kvPfagph6txmC~-5iRy9pZB4Wd-n7hih8hUtuNSKQ7ucd96eKOPcIK6RIXcF8V0Zrgc1eluk3ED-ZRrl8gkzYtl8WVexwOZrmKYcZchQjE8gQ9ReQr4bgrTpwXWJ9W3GWQPImH~nP2TgG6SvAdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/49dc/6be4/572ce91427213f5c8d2416b685b911dd?Expires=1596412800&Signature=XQXTBr821owKxw4q78tXMNSz16oWzy08GKjGGREf8WO9TWUKSbMSfOZdZS0kTSgEUTzehPI~CB0v4k~-9RRN9paXCrXdJ-jp2S9DkhRMQdGIxbcfNEANSSDd~qayYfC-LPSdE0q9IQEj9KAHH1MpjLXuCEVie-pgNJYTZ54rm75hfO9fvNPamR1~ppu9ZkSAkn-kvPfagph6txmC~-5iRy9pZB4Wd-n7hih8hUtuNSKQ7ucd96eKOPcIK6RIXcF8V0Zrgc1eluk3ED-ZRrl8gkzYtl8WVexwOZrmKYcZchQjE8gQ9ReQr4bgrTpwXWJ9W3GWQPImH~nP2TgG6SvAdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/49dc/6be4/572ce91427213f5c8d2416b685b911dd?Expires=1596412800&Signature=XQXTBr821owKxw4q78tXMNSz16oWzy08GKjGGREf8WO9TWUKSbMSfOZdZS0kTSgEUTzehPI~CB0v4k~-9RRN9paXCrXdJ-jp2S9DkhRMQdGIxbcfNEANSSDd~qayYfC-LPSdE0q9IQEj9KAHH1MpjLXuCEVie-pgNJYTZ54rm75hfO9fvNPamR1~ppu9ZkSAkn-kvPfagph6txmC~-5iRy9pZB4Wd-n7hih8hUtuNSKQ7ucd96eKOPcIK6RIXcF8V0Zrgc1eluk3ED-ZRrl8gkzYtl8WVexwOZrmKYcZchQjE8gQ9ReQr4bgrTpwXWJ9W3GWQPImH~nP2TgG6SvAdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'];
            break;

          case 'Salgadinho Queijo Nacho Doritos 167g':
            productImagesLocal = ['https://s3-alpha-sig.figma.com/img/b24e/7831/47388595cf2e8ee8c20b75c95c940f31?Expires=1596412800&Signature=A0uZTEQKgmCcA74p2QsO-U16Vq9gggZW4HLqOCPj9iqR4mIf36EPR-sYoWjRpbZTwKQXS8ybIGAUQVbaVeDE5gcZoSUg7JcaP9m48jP4gWSZFXSGOQMnlWDsypyMI9Znqz2ewXOshWB2DuuwT2pTvOwTxwNX4s91B0mnkFFTjrDn7~gtoBwyieYuMOcuPtn92KuSoIvYGpTSu-1U3fvXUlpj4ngXxi~KwrI2U~aL10BYX1ine5Oi9EYS1S5vE44H56QGmGfzZZ2YN-II7qfX9rAojqM5wzpO7UDBFO4eVNraTop68ec5bOCVcPTm74KHJsfHQsNUWMfIo7j9RBXuwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/b24e/7831/47388595cf2e8ee8c20b75c95c940f31?Expires=1596412800&Signature=A0uZTEQKgmCcA74p2QsO-U16Vq9gggZW4HLqOCPj9iqR4mIf36EPR-sYoWjRpbZTwKQXS8ybIGAUQVbaVeDE5gcZoSUg7JcaP9m48jP4gWSZFXSGOQMnlWDsypyMI9Znqz2ewXOshWB2DuuwT2pTvOwTxwNX4s91B0mnkFFTjrDn7~gtoBwyieYuMOcuPtn92KuSoIvYGpTSu-1U3fvXUlpj4ngXxi~KwrI2U~aL10BYX1ine5Oi9EYS1S5vE44H56QGmGfzZZ2YN-II7qfX9rAojqM5wzpO7UDBFO4eVNraTop68ec5bOCVcPTm74KHJsfHQsNUWMfIo7j9RBXuwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/b24e/7831/47388595cf2e8ee8c20b75c95c940f31?Expires=1596412800&Signature=A0uZTEQKgmCcA74p2QsO-U16Vq9gggZW4HLqOCPj9iqR4mIf36EPR-sYoWjRpbZTwKQXS8ybIGAUQVbaVeDE5gcZoSUg7JcaP9m48jP4gWSZFXSGOQMnlWDsypyMI9Znqz2ewXOshWB2DuuwT2pTvOwTxwNX4s91B0mnkFFTjrDn7~gtoBwyieYuMOcuPtn92KuSoIvYGpTSu-1U3fvXUlpj4ngXxi~KwrI2U~aL10BYX1ine5Oi9EYS1S5vE44H56QGmGfzZZ2YN-II7qfX9rAojqM5wzpO7UDBFO4eVNraTop68ec5bOCVcPTm74KHJsfHQsNUWMfIo7j9RBXuwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/b24e/7831/47388595cf2e8ee8c20b75c95c940f31?Expires=1596412800&Signature=A0uZTEQKgmCcA74p2QsO-U16Vq9gggZW4HLqOCPj9iqR4mIf36EPR-sYoWjRpbZTwKQXS8ybIGAUQVbaVeDE5gcZoSUg7JcaP9m48jP4gWSZFXSGOQMnlWDsypyMI9Znqz2ewXOshWB2DuuwT2pTvOwTxwNX4s91B0mnkFFTjrDn7~gtoBwyieYuMOcuPtn92KuSoIvYGpTSu-1U3fvXUlpj4ngXxi~KwrI2U~aL10BYX1ine5Oi9EYS1S5vE44H56QGmGfzZZ2YN-II7qfX9rAojqM5wzpO7UDBFO4eVNraTop68ec5bOCVcPTm74KHJsfHQsNUWMfIo7j9RBXuwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'];
            break;

          case 'Manga Haden 1 Unidade 500g':
            productImagesLocal = ['https://s3-alpha-sig.figma.com/img/7902/9451/2a77471ca443737bd2f40a7ceb702427?Expires=1596412800&Signature=QxfDtUYsUVxw4eTN5b3kFN7RoI8Y4Nxhy~ys3GTwgIolNUqFrMBvLqfeljXTl9z6r1Kxdm06yICs7wc-4hjYSg2611gjXPWSQicF6kqNT2WhgzeTEFdwwlJoSjNn9NhhmgrAGXTAX4UJ1hwgytOyDLaZQz38cjI3b5aR8wwJoeBXqBh0potBwrH747zQhpVvT8ciRmTAbOHPnCFhN1q6fVbmbM03-WByUXrmWt~1O8qgndNtqxeDcS430bGYLc9zC8MHFMRWNyKuqnbzIbdrfVb~gwRsR~iJTA2jqweQwfIBgJPBYuMU23eF471PRQY~rMhDcgRYjVvtNNxOUeYcuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/7902/9451/2a77471ca443737bd2f40a7ceb702427?Expires=1596412800&Signature=QxfDtUYsUVxw4eTN5b3kFN7RoI8Y4Nxhy~ys3GTwgIolNUqFrMBvLqfeljXTl9z6r1Kxdm06yICs7wc-4hjYSg2611gjXPWSQicF6kqNT2WhgzeTEFdwwlJoSjNn9NhhmgrAGXTAX4UJ1hwgytOyDLaZQz38cjI3b5aR8wwJoeBXqBh0potBwrH747zQhpVvT8ciRmTAbOHPnCFhN1q6fVbmbM03-WByUXrmWt~1O8qgndNtqxeDcS430bGYLc9zC8MHFMRWNyKuqnbzIbdrfVb~gwRsR~iJTA2jqweQwfIBgJPBYuMU23eF471PRQY~rMhDcgRYjVvtNNxOUeYcuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/7902/9451/2a77471ca443737bd2f40a7ceb702427?Expires=1596412800&Signature=QxfDtUYsUVxw4eTN5b3kFN7RoI8Y4Nxhy~ys3GTwgIolNUqFrMBvLqfeljXTl9z6r1Kxdm06yICs7wc-4hjYSg2611gjXPWSQicF6kqNT2WhgzeTEFdwwlJoSjNn9NhhmgrAGXTAX4UJ1hwgytOyDLaZQz38cjI3b5aR8wwJoeBXqBh0potBwrH747zQhpVvT8ciRmTAbOHPnCFhN1q6fVbmbM03-WByUXrmWt~1O8qgndNtqxeDcS430bGYLc9zC8MHFMRWNyKuqnbzIbdrfVb~gwRsR~iJTA2jqweQwfIBgJPBYuMU23eF471PRQY~rMhDcgRYjVvtNNxOUeYcuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/7902/9451/2a77471ca443737bd2f40a7ceb702427?Expires=1596412800&Signature=QxfDtUYsUVxw4eTN5b3kFN7RoI8Y4Nxhy~ys3GTwgIolNUqFrMBvLqfeljXTl9z6r1Kxdm06yICs7wc-4hjYSg2611gjXPWSQicF6kqNT2WhgzeTEFdwwlJoSjNn9NhhmgrAGXTAX4UJ1hwgytOyDLaZQz38cjI3b5aR8wwJoeBXqBh0potBwrH747zQhpVvT8ciRmTAbOHPnCFhN1q6fVbmbM03-WByUXrmWt~1O8qgndNtqxeDcS430bGYLc9zC8MHFMRWNyKuqnbzIbdrfVb~gwRsR~iJTA2jqweQwfIBgJPBYuMU23eF471PRQY~rMhDcgRYjVvtNNxOUeYcuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'];
            break;

          case 'Papel Manteiga Wyda':
            productImagesLocal = ['https://s3-alpha-sig.figma.com/img/e40a/ba7e/8212c3201f326fcdfbd5cf86c6cf1aaf?Expires=1596412800&Signature=gMu64muUGdFy8PX0HaT5Fob5jnp5i2KSY2TcGNgJPTAI3OlizsvTuGCXCpAK2U2cthz7lokiiDOh6CzlXcNtp50h4Dts1rRTJ35Mrt0erF9QLrjcIdu2E2pd350NgIWiqhDCe7lAUtvmfQyVjQYKIP-cJUVo2P9fRxbHYtJYNsy-jxaEtzBfY2AvoO1YaIv~G2yO7A1oSAvoUsdBHXP2AcgAbCbbutWZa7Ma-XvUb-UdwBP8IpWYMJSpL5anlgTQ4MjTRJTB0-~32KKSujtBux2mJtdk0I8c-UWfUCz51Gdpvisso0UkKGmTBGSndcRwECdbD3K6RmNv7zH4Jgjw4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/e40a/ba7e/8212c3201f326fcdfbd5cf86c6cf1aaf?Expires=1596412800&Signature=gMu64muUGdFy8PX0HaT5Fob5jnp5i2KSY2TcGNgJPTAI3OlizsvTuGCXCpAK2U2cthz7lokiiDOh6CzlXcNtp50h4Dts1rRTJ35Mrt0erF9QLrjcIdu2E2pd350NgIWiqhDCe7lAUtvmfQyVjQYKIP-cJUVo2P9fRxbHYtJYNsy-jxaEtzBfY2AvoO1YaIv~G2yO7A1oSAvoUsdBHXP2AcgAbCbbutWZa7Ma-XvUb-UdwBP8IpWYMJSpL5anlgTQ4MjTRJTB0-~32KKSujtBux2mJtdk0I8c-UWfUCz51Gdpvisso0UkKGmTBGSndcRwECdbD3K6RmNv7zH4Jgjw4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/e40a/ba7e/8212c3201f326fcdfbd5cf86c6cf1aaf?Expires=1596412800&Signature=gMu64muUGdFy8PX0HaT5Fob5jnp5i2KSY2TcGNgJPTAI3OlizsvTuGCXCpAK2U2cthz7lokiiDOh6CzlXcNtp50h4Dts1rRTJ35Mrt0erF9QLrjcIdu2E2pd350NgIWiqhDCe7lAUtvmfQyVjQYKIP-cJUVo2P9fRxbHYtJYNsy-jxaEtzBfY2AvoO1YaIv~G2yO7A1oSAvoUsdBHXP2AcgAbCbbutWZa7Ma-XvUb-UdwBP8IpWYMJSpL5anlgTQ4MjTRJTB0-~32KKSujtBux2mJtdk0I8c-UWfUCz51Gdpvisso0UkKGmTBGSndcRwECdbD3K6RmNv7zH4Jgjw4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 'https://s3-alpha-sig.figma.com/img/e40a/ba7e/8212c3201f326fcdfbd5cf86c6cf1aaf?Expires=1596412800&Signature=gMu64muUGdFy8PX0HaT5Fob5jnp5i2KSY2TcGNgJPTAI3OlizsvTuGCXCpAK2U2cthz7lokiiDOh6CzlXcNtp50h4Dts1rRTJ35Mrt0erF9QLrjcIdu2E2pd350NgIWiqhDCe7lAUtvmfQyVjQYKIP-cJUVo2P9fRxbHYtJYNsy-jxaEtzBfY2AvoO1YaIv~G2yO7A1oSAvoUsdBHXP2AcgAbCbbutWZa7Ma-XvUb-UdwBP8IpWYMJSpL5anlgTQ4MjTRJTB0-~32KKSujtBux2mJtdk0I8c-UWfUCz51Gdpvisso0UkKGmTBGSndcRwECdbD3K6RmNv7zH4Jgjw4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'];
            break;

          default:
            productImagesLocal = ['https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg'];
        }

        return {
          productName: value.productName,
          productBrand: value.productBrand,
          productPrice: value.productPrice,
          productSalePrice: value.productSalePrice,
          productIsMamboPlus: value.productIsMamboPlus,
          productIsOrganic: value.productIsOrganic,
          productHasStock: value.productHasStock,
          productDescription: value.productDescription,
          productImages: productImagesLocal
        };
      });
      return result;
    }
  }
};
"use strict";

var injectHTML = {
  /** @method repeat "Método para repetir um mesmo código HTML automaticamente"
   * @param {String} codeHTML "String contendo o código HTML que será repetido."
   * @param {Number} repeatNumber "Número que representa a quantidade de repetições."
   * @returns {String} "String com o resultado do código HTML repetido"
   */
  repeat: function repeat(codeHTML, repeatNumber) {
    var result = '';

    for (var i = 0; i < repeatNumber; i++) {
      result += codeHTML;
    }

    return result;
  }
};
"use strict";

var productsArray = {
  "products": [{
    "productName": "Carne Moída de Patinho Bovina Resfriada Bandeja",
    "productBrand": "Bovino in natura",
    "productPrice": "16.75",
    "productSalePrice": "",
    "productIsMamboPlus": true,
    "productIsOrganic": false,
    "productHasStock": true,
    "productDescription": "A carne chega fresquinha em sua casa e pode ser utilizada no preparo de diversos pratos ou como acompanhamento para o arroz e feijão Aproximadamente 550g."
  }, {
    "productName": "Vinho Chileno Branco Gewurztraminer Adobe Orgânico 750ml",
    "productBrand": "Adobe",
    "productPrice": "50.65",
    "productSalePrice": "60.00",
    "productIsMamboPlus": false,
    "productIsOrganic": false,
    "productHasStock": true,
    "productDescription": "Vinho Trivento Tribu Cabernet Sauvignon, elaborado com selecionadas uvas provenientes dos vinhedos da região de Mendoza, na Argentina. Produzido somente com a variedade Cabernet Suvignon, sua coloração é de um vermelho intenso com reflexos violáceos, médio corpo, aroma de ameixas maduras, com sutis notas tostadas, herbáceas e de especiarias. Frutado, com taninos macios, acidez balanceada e final equilibrado. Graduação Alcoólica: 14%."
  }, {
    "productName": "Amaranto de Flocos Orgânico Jasmine 150g",
    "productBrand": "Jasmine",
    "productPrice": "10.95",
    "productSalePrice": "",
    "productIsMamboPlus": false,
    "productIsOrganic": true,
    "productHasStock": false,
    "productDescription": "Os flocos estão prontos para serem consumidos e podem ser adicionados ao café da manhã, acompanhando frutas, cereais e iogurtes. Seu uso é adequado para o consumo diário também na forma de sopas e mingaus ou batido em shakes e sucos."
  }, {
    "productName": "Água Mineral sem Gás Bonafont 1,5 Litro",
    "productBrand": "Bonafont",
    "productPrice": "1.99",
    "productSalePrice": "2.49",
    "productIsMamboPlus": true,
    "productIsOrganic": false,
    "productHasStock": true,
    "productDescription": "Bonafont Água Leve é a água da Danone, a companheira ideal para o dia a dia. Beba pelo menos 2 litros ao dia."
  }, {
    "productName": "Lava Roupa em Pó Lavagem Perfeita Omo 800g",
    "productBrand": "Omo",
    "productPrice": "7.90",
    "productSalePrice": "9.90",
    "productIsMamboPlus": true,
    "productIsOrganic": false,
    "productHasStock": false,
    "productDescription": "OMO mudou e agora está melhor. OMO Lavagem Perfeita é 10x melhor, porque tem pó ultrafino de rápida dissolução, sem resíduos que danificam as roupas, remoção de manchas de primeira, higieniza as roupas, brancura imbatível, elimina o mau odor, perfume exclusivo que dura muito mais, produto mais sustentável, cuida das cores e cuida da máquina."
  }, {
    "productName": "Morango Orgânico FLD 250g",
    "productBrand": "Direto do produtor",
    "productPrice": "9.90",
    "productSalePrice": "",
    "productIsMamboPlus": false,
    "productIsOrganic": true,
    "productHasStock": true,
    "productDescription": "Morango orgânico, sem agrotóxicos ou conservantes, diretamente do produtor. Muito mais saúde e nutrição na sua mesa. Cuide bem do seu corpo, com orgânicos FLD."
  }, {
    "productName": "Suco de Laranja Integral Natural One 1,5 Litro",
    "productBrand": "Natural One",
    "productPrice": "14.99",
    "productSalePrice": "",
    "productIsMamboPlus": false,
    "productIsOrganic": false,
    "productHasStock": true,
    "productDescription": "Suco de Laranja Natural One, 100% natural, sem conservantes e sem adição de açúcares. Somente laranjas selecionadas, o sabor do suco espremido na hora, fruta e mais fruta na garrafa. Vem em prática embalagem, uma delícia em qualquer hora do dia, seja no café da manhã, no almoço ou lanche da tarde."
  }, {
    "productName": "Brocolis Ninja Bandeja 300g",
    "productBrand": "Direto do produtor",
    "productPrice": "5.99",
    "productSalePrice": "",
    "productIsMamboPlus": false,
    "productIsOrganic": false,
    "productHasStock": true,
    "productDescription": "O brócolis é rico em fibra alimentar, vitamina C e antioxidantes que ajuda na redução do nível de colesterol no organismo. Ainda é anti-inflamatório, devido à presença de sulforafano, que ajuda a reduzir os danos ao revestimento do vaso sanguíneo. Brócolis também contém o antioxidante betacaroteno, que ajuda a restringir o dano celular nos músculos cardiovasculares."
  }, {
    "productName": "Brioche Mambo 400g",
    "productBrand": "Mambo",
    "productPrice": "21.60",
    "productSalePrice": "",
    "productIsMamboPlus": true,
    "productIsOrganic": false,
    "productHasStock": true,
    "productDescription": "Brioche Artesanal, feito com carinho para você!<br> Oferecemos os mais diversos tipos de pães produzidos com ingredientes selecionados, ideal para o cafés da manhã, lanches e reuniões. Sempre macios e fresquinhos, com qualidade e garantia Mambo!"
  }, {
    "productName": "Salgadinho Queijo Nacho Doritos 167g",
    "productBrand": "Doritos",
    "productPrice": "7.99",
    "productSalePrice": "11.55",
    "productIsMamboPlus": false,
    "productIsOrganic": false,
    "productHasStock": true,
    "productDescription": "Doritos queijo nacho, deliciosas e crocantes tortilhas de milho com sabor intenso. O mais famoso e crocante salgadinho triangular com o incrível sabor queijo nacho, perfeito para devorá-lo a qualquer hora, sozinho ou com amigos."
  }, {
    "productName": "Manga Haden 1 Unidade 500g",
    "productBrand": "Direto do produtor",
    "productPrice": "4.45",
    "productSalePrice": "",
    "productIsMamboPlus": false,
    "productIsOrganic": true,
    "productHasStock": false,
    "productDescription": "A manga é rica em proteínas como potássio, magnésio e ferro, além de vitamina A, do complexo B e C, e fibras. É ótima no combate à cãimbras, estresse e problemas cardíacos. Aproximadamente 500g."
  }, {
    "productName": "Papel Manteiga Wyda",
    "productBrand": "Wyda",
    "productPrice": "6.99",
    "productSalePrice": "",
    "productIsMamboPlus": false,
    "productIsOrganic": false,
    "productHasStock": true,
    "productDescription": "O papel manteiga Wyda é a solução ideal na sua cozinha. Preparado com matéria resistente, o papel manteiga Wyda é ideal para separar alimentos e fazer assados. Pode ser usado em microondas, freezer ou forno."
  }]
};
"use strict";

var env = {
  allProducts: controller.productsArray.addImageKey(controller.productsArray.commaInMoney(productsArray.products)),
  modal: {
    productView: {
      productSelected: {
        productName: '',
        productBrand: '',
        productPrice: '',
        productSalePrice: '',
        productIsMamboPlus: '',
        productIsOrganic: '',
        productHasStock: '',
        productDescription: '',
        productImages: ['https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg']
      }
    }
  }
};
"use strict";

$('#headerbarBurgermenuClose').on('click', function () {
  $('.headerbar__burgermenu__nav__container').addClass('hide--side--burgermenu');
  $('.headerbar__burgermenu__background__container').fadeOut();
});
$('#headerbarBurgermenuOpen').on('click', function () {
  $('.headerbar__burgermenu__background__container').fadeIn();
  $('.headerbar__burgermenu__nav__container').removeClass('hide--side--burgermenu');
});
"use strict";

$(document).ready(function () {
  $('.owl-banner').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 0,
    dots: false,
    nav: true,
    navContainerClass: 'banner__carousel__nav__buttons__container',
    navClass: ['prev-button', 'next-button']
  });
});
"use strict";

$('.owl-promotions').owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 7000,
  slideBy: 'page',
  autoWidth: true,
  center: true,
  margin: 20,
  dots: true,
  nav: true,
  navContainerClass: 'promotions__carousel__nav__buttons__container',
  navClass: ['prev-button', 'next-button']
});
"use strict";

$(document).ready(function () {
  $('.owl-discountshell').owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    slideBy: 'page',
    margin: 0,
    dots: true,
    nav: true,
    navContainerClass: 'discountshell__carousel__nav__buttons__container',
    navClass: ['prev-button', 'next-button'],
    responsive: {
      960: {
        items: 3
      },
      1250: {
        items: 4
      },
      1500: {
        items: 5
      }
    }
  });
});
"use strict";

$('#discountShelfCarouselItemContainer').html(inject_discountShelf());

function inject_discountShelf() {
  var result = '';
  env.allProducts.forEach(function (value, index) {
    result += "\n      <div class=\"discountshelf__carousel__item__container\">\n        <div class=\"discountshelf__carousel__item\" data-discountshelfitem=\"".concat(index, "\">\n          <div class=\"discountshelf__carousel__item__image__container\">\n            <img  class=\"discountshelf__carousel__item__image\"src=\"").concat(value.productImages[0], "\"></img>\n            <div class=\"discountshelf__carousel__item__type\">\n            ").concat(value.productIsOrganic ? "\n              <div class=\"discountshelf__carousel__item__type__border\">\n                <svg width=\"10\" height=\"20\" viewBox=\"0 0 8 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path class=\"svg--producttype__organic\" d=\"M4.24115 15.7469L4.24183 12.3097C6.62678 12.2132 7.99948 10.66 8 8.00787C8.00043 5.82684 6.07642 2.38996 4.92198 0.523248C4.71284 0.200502 4.37815 0.00864327 4.00158 0C3.63338 7.9026e-05 3.28188 0.192085 3.08097 0.523644C1.93416 2.38212 0.000427399 5.82856 1.50795e-07 7.99214C-0.000523573 10.6443 1.36318 12.2056 3.75647 12.2923L3.75579 15.7471C3.75576 15.8866 3.86453 16 3.99842 16C4.13231 16 4.24112 15.8865 4.24115 15.7469ZM4.23386 10.2944L6.04176 8.4096C6.13383 8.31361 6.13386 8.15658 6.04183 8.06063C5.9498 7.96469 5.79917 7.96472 5.7071 8.0607L4.24236 9.58774L4.24279 7.44161L5.50665 6.124C5.59872 6.02801 5.59875 5.87098 5.50672 5.77503C5.41468 5.67909 5.26406 5.67912 5.17199 5.7751L4.2513 6.73495L4.25171 4.64117C4.25174 4.50158 4.14297 4.38819 4.00908 4.38822C3.87519 4.38825 3.76638 4.50169 3.76635 4.64127L3.76594 6.73506L2.84563 5.7756C2.7536 5.67966 2.60297 5.67969 2.5109 5.77567C2.41883 5.87166 2.4188 6.02869 2.51083 6.12464L3.77417 7.44171L3.77375 9.57039L2.30961 8.04398C2.21758 7.94804 2.06696 7.94807 1.97489 8.04406C1.88282 8.14004 1.88279 8.29707 1.97482 8.39302L3.77361 10.2683L3.77331 11.7863C2.44278 11.7255 0.501479 11.0978 0.502096 7.97458C0.485756 5.96804 2.36089 2.61758 3.48259 0.802729C3.59142 0.619499 3.78391 0.506045 3.99311 0.514724C4.20231 0.523403 4.39476 0.619327 4.50351 0.80251C5.6245 2.61688 7.50668 5.95781 7.50628 7.99925C7.50566 11.1225 5.55575 11.7423 4.23356 11.8124L4.23386 10.2944Z\" fill=\"#3B6626\"/>\n                </svg>\n              </div>" : '', "\n            ").concat(value.productIsMamboPlus ? "\n                <svg class=\"discountshelf__carousel__item__mamboplus svg--mplus__icon\" width=\"51\" height=\"52\" viewBox=\"0 0 51 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path class=\"svg--mplus__icon--sub01\" d=\"M40.9651 51.0187H10.035C4.52046 51.0187 5.81619e-05 46.4983 5.81619e-05 40.9838V10.0349C-0.0186987 4.52041 4.50171 0 10.035 0H40.9651C46.4796 0 51 4.52041 51 10.0349V40.965C51 46.4983 46.4796 51.0187 40.9651 51.0187Z\" fill=\"#FF001F\"/>\n                  <path class=\"svg--mplus__icon--sub02\" d=\"M5.8147 37.1386H13.2237L16.1872 22.9772C17.0688 18.7756 24.0089 17.9503 23.0147 22.7896L20.0136 37.1386H27.4226L29.9173 25.1342C30.5925 21.908 31.8117 19.5634 34.6815 19.5634C38.039 19.5634 37.1574 22.9959 36.7073 25.1342L34.1938 37.1386H41.6028L45.0166 20.7076C46.6672 12.7734 34.2501 11.6855 30.3299 17.7628C29.2045 12.0044 20.2387 13.2611 17.0501 17.4627H16.975L17.5753 14.5554H10.5227L5.8147 37.1386Z\" fill=\"white\"/>\n                  <path class=\"svg--mplus__icon--sub03\" d=\"M26.2972 43.1783C26.2409 43.2533 26.1096 43.3846 25.9408 43.5722C25.772 43.741 25.5469 43.9473 25.228 44.2099C24.9092 44.4725 24.4778 44.8289 23.9151 45.2415C23.2961 45.7105 22.7521 46.0293 22.2832 46.1606C21.8143 46.3107 21.4016 46.3482 21.0453 46.2919H21.0077C20.989 46.2919 20.9702 46.2919 20.9702 46.2919H20.9515H20.9327C20.7639 46.2544 20.6138 46.2169 20.4825 46.1419C20.3512 46.0856 20.2199 46.0106 20.1074 45.9168C19.8448 45.7667 19.6385 45.5604 19.5072 45.279L19.0758 46.4795C18.7569 47.6237 18.5506 48.599 18.438 49.368C18.3255 50.1371 18.3255 50.681 18.4193 50.9811C18.1755 50.9624 17.9504 50.9249 17.7253 50.8686C17.5377 50.8123 17.3314 50.7185 17.1438 50.5685C16.9563 50.4372 16.7874 50.2309 16.6374 49.987C16.5624 49.8745 16.5624 49.6119 16.6374 49.218C16.7124 48.8241 16.825 48.3552 16.9938 47.7925C17.1626 47.2298 17.3689 46.6108 17.6127 45.9168C17.8566 45.2228 18.1192 44.5288 18.3818 43.816C18.6444 43.1033 18.9257 42.3905 19.2258 41.6965C19.5072 41.0025 19.7885 40.3647 20.0324 39.7645C20.2762 39.1831 20.5201 38.6766 20.7264 38.2452C20.9327 37.8138 21.1015 37.5325 21.2141 37.3636C21.4391 37.4012 21.6642 37.4574 21.8706 37.4949C22.0394 37.5325 22.2082 37.6075 22.377 37.6638C22.5458 37.7388 22.6771 37.8138 22.7709 37.9264C22.6583 38.0952 22.5458 38.2827 22.4333 38.4891C22.3207 38.6766 22.2082 38.883 22.0769 39.1268C21.9456 39.3706 21.7955 39.6332 21.6267 39.9146C21.6642 39.8396 21.7205 39.7833 21.7393 39.7458C22.2082 39.0518 22.6021 38.5266 22.9209 38.1327C23.2398 37.7575 23.5399 37.5137 23.7838 37.4387C24.0276 37.3449 24.2339 37.4199 24.4027 37.6262C24.5715 37.8326 24.7216 38.1889 24.8341 38.6766C24.9467 39.0893 24.9654 39.5957 24.8904 40.1584C24.8341 40.7399 24.7028 41.3213 24.5153 41.9403C24.3277 42.5593 24.1026 43.1408 23.8213 43.7222C23.5399 44.3037 23.2398 44.7914 22.9022 45.204C23.2773 45.0165 23.6525 44.7726 24.0088 44.51C24.3652 44.2474 24.7028 43.9848 24.9842 43.741C25.3218 43.4409 25.6407 43.1408 25.9408 42.8407L26.2972 43.1783ZM23.7087 37.9264C23.5399 38.0201 23.3711 38.1889 23.1648 38.4328C22.9585 38.6766 22.7521 38.9767 22.527 39.3144C22.302 39.652 22.0956 40.0084 21.8706 40.4023C21.6455 40.7962 21.4391 41.2088 21.2141 41.6027C20.7264 42.5405 20.2387 43.5909 19.7135 44.7351C19.7885 44.9227 19.8636 45.054 19.9761 45.129C20.0887 45.204 20.1824 45.2603 20.2762 45.279C20.3888 45.3166 20.5013 45.3166 20.6138 45.279C20.989 45.1665 21.3266 44.9227 21.608 44.5288C21.8893 44.1349 22.1519 43.7035 22.377 43.2158C22.6021 42.7281 22.8084 42.2029 22.996 41.6777C23.1835 41.1338 23.3336 40.6649 23.4836 40.2522C23.6337 39.8396 23.7275 39.4832 23.765 39.1831C23.8025 38.883 23.8213 38.6579 23.8025 38.4703C23.8025 38.264 23.765 38.0764 23.7087 37.9264Z\" fill=\"black\"/>\n                  <path class=\"svg--mplus__icon--sub04\" d=\"M28.0791 40.8525C27.9103 41.2088 27.7227 41.584 27.5352 41.9591C27.3476 42.353 27.1788 42.7281 27.01 43.0845C26.8412 43.4597 26.7099 43.7973 26.5973 44.1349C26.4848 44.4538 26.4098 44.7539 26.3535 44.9977C26.316 45.2416 26.2972 45.4479 26.3535 45.5792C26.391 45.7292 26.5035 45.7855 26.6536 45.7855C26.7661 45.7855 26.8787 45.748 26.9912 45.6542C27.1225 45.5604 27.2538 45.4479 27.4039 45.3166C27.5539 45.1853 27.6852 45.0165 27.8353 44.8477C27.9853 44.6601 28.1166 44.4913 28.2667 44.3037C28.5856 43.8723 28.9044 43.4034 29.242 42.8594L29.4671 43.4409C29.0357 44.1349 28.6043 44.7351 28.1729 45.2416C27.9853 45.4479 27.7978 45.6542 27.6102 45.8418C27.4226 46.0293 27.2163 46.1794 27.01 46.2919C26.8037 46.4045 26.6161 46.4795 26.4285 46.4983C26.2409 46.517 26.0721 46.4795 25.9033 46.367C25.5657 46.1419 25.3406 45.8605 25.2281 45.5417C25.1155 45.2228 25.0593 44.9039 25.0593 44.5663C25.0593 44.2474 25.1155 43.9286 25.2093 43.6285C25.3031 43.3284 25.3781 43.1033 25.4532 42.9157C25.622 42.5031 25.8095 42.0717 26.0159 41.6027C26.2222 41.1526 26.4473 40.6836 26.6911 40.2335C26.935 39.7646 27.16 39.3144 27.4039 38.8642C27.6477 38.4141 27.8728 37.9827 28.1166 37.5888C28.6606 36.6322 29.2233 35.6943 29.786 34.7565C29.8235 34.7752 29.8798 34.7752 29.9361 34.794C29.9923 34.8127 30.0673 34.8127 30.1611 34.8315C30.2549 34.8503 30.3862 34.869 30.5175 34.9065C30.7051 34.9628 30.8551 35.0191 30.9489 35.0753C31.0615 35.1316 31.1365 35.1691 31.1928 35.2066C31.2678 35.2441 31.3053 35.3004 31.3241 35.3192C30.9114 35.9944 30.4988 36.6509 30.1049 37.2886C29.7672 37.8514 29.3921 38.4516 29.017 39.0893C28.6606 39.727 28.3417 40.3085 28.0791 40.8525Z\" fill=\"black\"/>\n                  <path class=\"svg--mplus__icon--sub05\" d=\"M34.2501 45.7293C34.3626 45.7105 34.4752 45.673 34.5877 45.5792C34.719 45.4854 34.8503 45.3729 35.0004 45.2416C35.1504 45.1103 35.2817 44.9415 35.4318 44.7727C35.5818 44.5851 35.7131 44.4163 35.8632 44.2287C36.182 43.7973 36.5009 43.3096 36.8385 42.7657L37.0636 43.3471C36.6322 44.0787 36.2008 44.6789 35.7694 45.1853C35.5818 45.4104 35.3943 45.598 35.2067 45.7855C35.0191 45.9731 34.8128 46.1232 34.6065 46.2357C34.4001 46.3482 34.2126 46.4233 34.025 46.4608C33.8374 46.4795 33.6499 46.442 33.4998 46.3295C33.1247 46.0856 32.8996 45.7668 32.7871 45.4104C32.6745 45.054 32.6558 44.6976 32.6745 44.3225C32.4869 44.5851 32.2619 44.8664 32.018 45.1666C31.7742 45.4667 31.5116 45.7293 31.249 45.9543C30.9864 46.1794 30.7238 46.3295 30.4612 46.4233C30.1986 46.517 29.9548 46.4795 29.7297 46.3295C29.3921 46.1044 29.167 45.823 29.0544 45.5042C28.9419 45.1853 28.8856 44.8477 28.8856 44.5288C28.8856 44.2099 28.9419 43.8911 29.0357 43.591C29.1295 43.2909 29.2045 43.047 29.2795 42.8595C29.6171 42.0154 29.936 41.2651 30.2549 40.6086C30.5737 39.9521 30.8551 39.3894 31.1177 38.9205C31.4178 38.3766 31.6992 37.9076 31.9617 37.495C31.9993 37.495 32.0743 37.495 32.1306 37.5137C32.1868 37.5325 32.2619 37.5513 32.3556 37.57C32.4494 37.5888 32.562 37.6263 32.6933 37.6638C32.8808 37.7201 33.0309 37.7763 33.1247 37.8139C33.2372 37.8514 33.3122 37.9076 33.3685 37.9264C33.4435 37.9639 33.4811 38.0202 33.4998 38.0389C33.3873 38.1702 33.256 38.3578 33.1059 38.6016C32.9746 38.808 32.787 39.0893 32.5807 39.4457C32.3744 39.8021 32.1306 40.2522 31.868 40.7774C31.6054 41.3026 31.3428 41.8653 31.0614 42.4468C30.7988 43.0283 30.5737 43.5722 30.4049 44.0599C30.2361 44.5476 30.1423 44.9602 30.1236 45.2603C30.1048 45.5792 30.2174 45.7293 30.4612 45.7105C30.5925 45.6917 30.7613 45.6167 30.9301 45.4854C31.1177 45.3354 31.2865 45.1666 31.4741 44.9415C31.6616 44.7351 31.8492 44.4913 32.018 44.2475C32.2056 44.0036 32.3744 43.7785 32.5245 43.5535C32.6745 43.3471 32.7871 43.1596 32.8808 43.0095C32.9746 42.8595 33.0309 42.7657 33.0309 42.7469C33.3685 41.9216 33.6874 41.1713 34.0062 40.5336C34.3251 39.8771 34.6065 39.3332 34.8503 38.8642C35.1504 38.3203 35.4318 37.8514 35.6756 37.4387C35.7131 37.4387 35.7694 37.4387 35.8257 37.4575C35.8819 37.4762 35.957 37.495 36.0507 37.5137C36.1445 37.5325 36.2758 37.57 36.4071 37.6075C36.5947 37.6638 36.7448 37.7201 36.8385 37.7576C36.9511 37.7951 37.0261 37.8514 37.0824 37.8701C37.1574 37.9076 37.1949 37.9639 37.2137 37.9827C37.1011 38.114 36.9511 38.3015 36.801 38.5454C36.6697 38.7517 36.5009 39.0331 36.2946 39.3894C36.0883 39.7458 35.8632 40.196 35.6006 40.7212C35.338 41.2464 35.0754 41.8091 34.794 42.3905C34.5314 42.972 34.3064 43.5159 34.1375 44.0036C33.9687 44.4913 33.8749 44.904 33.8562 45.2041C33.8937 45.5792 34.0062 45.7293 34.2501 45.7293Z\" fill=\"black\"/>\n                  <path class=\"svg--mplus__icon--sub06\" d=\"M40.3461 44.9602C40.665 44.7726 40.9838 44.5475 41.2839 44.3037C41.584 44.0599 41.8654 43.816 42.128 43.6097C42.4093 43.3659 42.6907 43.1033 42.9533 42.8407L43.1596 43.2346C43.0846 43.3284 42.9533 43.4784 42.7657 43.666C42.5969 43.8348 42.3531 44.0411 42.0154 44.3225C41.6966 44.6038 41.2464 44.9602 40.7025 45.3916C40.0647 45.8793 39.4833 46.1982 38.9956 46.3295C38.5079 46.4607 38.0765 46.4983 37.7201 46.442C37.3637 46.3857 37.0824 46.2544 36.8573 46.0856C36.6322 45.898 36.4822 45.748 36.3884 45.6354C36.2946 45.5229 36.1821 45.3916 36.0508 45.204C35.9195 45.0165 35.8257 44.8852 35.7694 44.7726L35.8257 44.7164C35.8444 44.6976 35.8632 44.6788 35.882 44.6601C35.9007 44.6413 35.9195 44.6226 35.9382 44.6038C36.0883 44.8664 36.2758 45.0727 36.5197 45.2228C36.7635 45.3916 37.0261 45.4854 37.2887 45.5041C37.5513 45.5417 37.8327 45.4854 38.0953 45.3728C38.3579 45.2603 38.6017 45.054 38.7893 44.7726C38.9768 44.4913 39.1269 44.1161 39.2207 43.6472C39.3145 43.1783 39.3332 42.5968 39.2582 41.9028C39.1644 41.0775 39.2207 40.3835 39.4458 39.8396C39.6521 39.2956 39.9334 38.8642 40.2523 38.5266C40.5712 38.2077 40.9275 37.9639 41.3027 37.8138C41.6778 37.6638 41.9779 37.57 42.203 37.5325C42.4281 37.495 42.6344 37.5325 42.7845 37.6075C42.9533 37.7013 43.0846 37.7951 43.1784 37.9264C43.3097 38.0577 43.4035 38.2452 43.4972 38.4516C42.6719 38.7704 42.053 39.0893 41.6591 39.4269C41.2652 39.7645 41.0026 40.1022 40.8713 40.4585C40.74 40.8149 40.6837 41.1901 40.74 41.5464C40.7775 41.9216 40.815 42.2967 40.8713 42.6719C40.9088 43.047 40.9088 43.4409 40.8713 43.816C40.815 44.2099 40.6462 44.5851 40.3461 44.9602Z\" fill=\"black\"/>\n                </svg>" : '', "\n            </div>\n          </div>\n          <div class=\"discountshelf__carousel__item__brand\">").concat(value.productBrand, "</div>\n          <div class=\"discountshelf__carousel__item__name\">").concat(value.productName, "</div>\n          <div class=\"discountshelf__carousel__item__stars\">\n            ").concat(injectHTML.repeat("\n              <svg width=\"11\" height=\"11\" viewBox=\"0 0 11 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path class=\"svg--star__ratings\" d=\"M5.5 0.941162L7.12288 4.20747L10.7308 4.74157L8.12587 7.29436L8.73282 10.8908L5.5 9.20216L2.26718 10.8908L2.87413 7.29436L0.269189 4.74157L3.87713 4.20747L5.5 0.941162Z\" fill=\"#FDC14D\"/>\n              </svg>\n              ", 5), "(1)\n          </div>\n          <div class=\"discountshelf__carousel__item__price__container\">\n            ").concat(value.productSalePrice ? "<div class=\"discountshelf__carousel__item__saleprice\">R$ ".concat(value.productSalePrice, "</div>") : '', "\n            <div class=\"discountshelf__carousel__item__price\">R$ ").concat(value.productPrice, "</div>\n          </div>\n          ").concat(value.productHasStock ? "<button data-productname=\"".concat(value.productName, "\" class=\"discountshelf__carousel__item__buy ID_discountshelfCarouselItemBuy\">ADICIONAR</button>") : '<button class="discountshelf__carousel__item__buy no--stock--button">PRODUTO INDISPONÍVEL</button>', "\n          <div class=\"discountshelf--carousel--item--overcontainer\">\n            <button data-productname=\"").concat(value.productName, "\" data-productbrand=\"").concat(value.productBrand, "\" class=\"discountshelf__carousel__item__spy ID_discountShelfItemSpy\">ESPIAR</button>\n          </div>\n        </div>\n      </div>\n    ");
  });
  return result;
}
"use strict";

$(document).ready(function () {
  $('#productViewContainer').html(inject_productView());
}); // Alterar imagem de visualização

$(document).on('click', '.ID_productviewCarouselImage', function (e) {
  var imgSRC = $(e.target).attr('src');
  $('#productViewImageSelected').attr({
    src: imgSRC
  });
});

function inject_productView() {
  var productValue = env.modal.productView.productSelected;
  var localCaroucelImages = '';
  productValue.productImages.forEach(function (value) {
    localCaroucelImages += "\n    <div class=\"productview__carousel__image__container\">\n      <img class=\"productview__carousel__image ID_productviewCarouselImage\" src=\"".concat(value, "\"></img>\n    </div>\n    ");
  });
  var result = "\n    <div class=\"productview__maininfo__container\">\n\n      <!-- ###### Carrocel de imagens ##### -->\n\n      <div class=\"productview__images__container\">\n        <div class=\"productview__image__selected__container\">\n          <img id=\"productViewImageSelected\" class=\"productview__image__selected\" src=\"".concat(productValue.productImages[0], "\"></img>\n        </div>\n        <div class=\"productview__image__alert\">Imagens meramente ilustrativas</div>\n        <div\n          class=\"owl-productview owl-carousel owl-theme productview__carousel__container\"\n        >\n        ").concat(localCaroucelImages, "\n        </div>\n      </div>\n\n      <!-- ###### Informa\xE7\xF5es principais do produto ##### -->\n\n      <div class=\"productview__info__container\">\n        <div class=\"productview__info__brand\">").concat(productValue.productBrand, "</div>\n        <div class=\"productview__info__name\">").concat(productValue.productName, "</div>\n        <div class=\"productview__info__stars\">\n          ").concat(injectHTML.repeat("\n            <svg width=\"11\" height=\"11\" viewBox=\"0 0 11 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path class=\"svg--star__ratings\" d=\"M5.5 0.941162L7.12288 4.20747L10.7308 4.74157L8.12587 7.29436L8.73282 10.8908L5.5 9.20216L2.26718 10.8908L2.87413 7.29436L0.269189 4.74157L3.87713 4.20747L5.5 0.941162Z\" fill=\"#FDC14D\"/>\n            </svg>\n            ", 5), "(1)\n        </div>\n        <div class=\"productview__info__type\">\n        ").concat(productValue.productIsOrganic ? "<div class=\"productview__info__type__item\">\n                <div class=\"productview__info__type__icon\">\n                  <svg width=\"8\" height=\"16\" viewBox=\"0 0 8 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path class=\"svg--producttype__organic\" d=\"M4.24115 15.7469L4.24183 12.3097C6.62678 12.2132 7.99948 10.66 8 8.00787C8.00043 5.82684 6.07642 2.38996 4.92198 0.523248C4.71284 0.200502 4.37815 0.00864327 4.00158 0C3.63338 7.9026e-05 3.28188 0.192085 3.08097 0.523644C1.93416 2.38212 0.000427399 5.82856 1.50795e-07 7.99214C-0.000523573 10.6443 1.36318 12.2056 3.75647 12.2923L3.75579 15.7471C3.75576 15.8866 3.86453 16 3.99842 16C4.13231 16 4.24112 15.8865 4.24115 15.7469ZM4.23386 10.2944L6.04176 8.4096C6.13383 8.31361 6.13386 8.15658 6.04183 8.06063C5.9498 7.96469 5.79917 7.96472 5.7071 8.0607L4.24236 9.58774L4.24279 7.44161L5.50665 6.124C5.59872 6.02801 5.59875 5.87098 5.50672 5.77503C5.41468 5.67909 5.26406 5.67912 5.17199 5.7751L4.2513 6.73495L4.25171 4.64117C4.25174 4.50158 4.14297 4.38819 4.00908 4.38822C3.87519 4.38825 3.76638 4.50169 3.76635 4.64127L3.76594 6.73506L2.84563 5.7756C2.7536 5.67966 2.60297 5.67969 2.5109 5.77567C2.41883 5.87166 2.4188 6.02869 2.51083 6.12464L3.77417 7.44171L3.77375 9.57039L2.30961 8.04398C2.21758 7.94804 2.06696 7.94807 1.97489 8.04406C1.88282 8.14004 1.88279 8.29707 1.97482 8.39302L3.77361 10.2683L3.77331 11.7863C2.44278 11.7255 0.501479 11.0978 0.502096 7.97458C0.485756 5.96804 2.36089 2.61758 3.48259 0.802729C3.59142 0.619499 3.78391 0.506045 3.99311 0.514724C4.20231 0.523403 4.39476 0.619327 4.50351 0.80251C5.6245 2.61688 7.50668 5.95781 7.50628 7.99925C7.50566 11.1225 5.55575 11.7423 4.23356 11.8124L4.23386 10.2944Z\" fill=\"#3B6626\"/>\n                  </svg>\n                </div>\n                <div class=\"productview__info__type__text\">Org\xE2nico</div>\n              </div>" : '', "\n        </div>\n        <div class=\"productview__info__price__container\">\n          ").concat(productValue.productSalePrice ? "<div class=\"productview__info__saleprice\">R$ ".concat(productValue.productSalePrice, "</div>") : '', "\n          <div class=\"productview__info__price\">R$ ").concat(productValue.productPrice, "</div>\n        </div>\n        ").concat(productValue.productHasStock ? "<button data-productname=\"".concat(productValue.productName, "\" class=\"productview__info__buy ID_productViewInfoBuy\">ADICIONAR</button>") : '<button class="productview__info__buy no--stock--button">PRODUTO INDISPONÍVEL</button>', "\n      </div>\n    </div>\n\n    <!-- ###### Descri\xE7\xE3o do produto ##### -->\n\n    <div class=\"productview__description__container\">\n        <div class=\"productview__description__title\">Descri\xE7\xE3o do produto</div>\n        <div class=\"productview__description__content\">").concat(productValue.productDescription, "</div>\n    </div>\n  ");
  return result;
}
"use strict";

function injectCarousel__productView() {
  $('.owl-productview').owlCarousel({
    items: 2,
    loop: true,
    slideBy: 'page',
    center: true,
    margin: 0,
    dots: true,
    nav: true,
    navContainerClass: 'productview__carousel__nav__buttons__container',
    navClass: ['prev-button', 'next-button'],
    responsive: {
      600: {
        items: 3
      }
    }
  });
}
"use strict";

$('#footerInstitutionalToggle').on('click', function () {
  if (window.innerWidth < 700) {
    $('#footerInstitutionalToggle').toggleClass('footer--selected');
    $('#footerInstitutionalContent').slideToggle(200);
    $('#footerInstitutionalContent').css('display', 'flex');
  }
});
$('#footerHelpandsupportToggle').on('click', function () {
  if (window.innerWidth < 700) {
    $('#footerHelpandsupportToggle').toggleClass('footer--selected');
    $('#footerHelpandsupportContent').slideToggle(200);
    $('#footerHelpandsupportContent').css('display', 'flex');
  }
});
$('#footerAbountserviceToggle').on('click', function () {
  if (window.innerWidth < 700) {
    $('#footerAbountserviceToggle').toggleClass('footer--selected');
    $('#footerAbountserviceContent').slideToggle(200);
    $('#footerAbountserviceContent').css('display', 'flex');
  }
});
addEventListener('resize', function () {
  if (window.innerWidth > 701) {
    $('.footer__titles').removeClass('footer--selected');
    $('.footer__content').css('display', 'flex');
    $('.footer__content').slideDown(0);
  } else {
    $('.footer__content').css('display', 'none');
    $('.footer__content').slideUp(0);
  }
});
"use strict";

// Modal para visualizar produto
$('.ID_discountShelfItemSpy').on('click', function (e) {
  var productName = $(e.target).data('productname');
  var productBrand = $(e.target).data('productbrand');
  var productSearch = env.allProducts.filter(function (value) {
    if (value.productName === productName && value.productBrand === productBrand) return true;
  });
  env.modal.productView.productSelected = productSearch[0];
  $('#productViewContainer').html(inject_productView());
  $('#productViewModal').show().css('display', 'flex');
  injectCarousel__productView();
});
$('#productViewModalClose').on('click', function () {
  $('#productViewModal').hide();
});
"use strict";

$(document).ready(function () {
  $('.ID_discountshelfCarouselItemBuy, .ID_productViewInfoBuy').on('click', function (e) {
    var productName = $(e.target).data('productname');
    inject_successfulPruchase(productName);
    $('#successfulPruchaseContainer').slideDown(function () {
      $('#successfulPruchaseContainer').delay(1000).slideUp();
    });
  });
});

function inject_successfulPruchase(productSelected) {
  $('#successfulPruchaseContainer').html(function () {
    var result = "\n      <div class=\"successfulpruchase__item\">\n        <div class=\"successfulpruchase__icon\">\n          <svg width=\"19\" height=\"13\" viewBox=\"0 0 19 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path class=\"svg--ok__icon\" d=\"M1 5.13793L6.98344 11L17.1905 1\" stroke=\"white\" stroke-width=\"1.66667\" stroke-linecap=\"round\"/>\n          </svg>\n        </div>\n        <div>\n          <div class=\"successfulpruchase__name\">\n            ".concat(productSelected, "\n          </div>\n          <div class=\"successfulpruchase__message\">\n            Adicionado com Sucesso!\n          </div>\n        </div>\n      </div>\n    ");
    return result;
  });
}