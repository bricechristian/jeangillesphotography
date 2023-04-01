import client from '@sanity/client';
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent, m as maybeRenderHead } from '../astro.3cc6a945.mjs';
import 'html-escaper';
/* empty css                           */
const sanityClient = client({"projectId":"h890ay2m","dataset":"production","apiVersion":"2023-02-08","useCdn":false});

globalThis.sanityClient = sanityClient;

var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, jt = {}, Nn = {
  get exports() {
    return jt;
  },
  set exports(t) {
    jt = t;
  }
};
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(ue, function() {
    function r() {
      return r = Object.assign || function(p) {
        for (var h = 1; h < arguments.length; h++) {
          var y = arguments[h];
          for (var f in y)
            Object.prototype.hasOwnProperty.call(y, f) && (p[f] = y[f]);
        }
        return p;
      }, r.apply(this, arguments);
    }
    function n(p, h) {
      if (p) {
        if (typeof p == "string")
          return i(p, h);
        var y = Object.prototype.toString.call(p).slice(8, -1);
        if (y === "Object" && p.constructor && (y = p.constructor.name), y === "Map" || y === "Set")
          return Array.from(p);
        if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))
          return i(p, h);
      }
    }
    function i(p, h) {
      (h == null || h > p.length) && (h = p.length);
      for (var y = 0, f = new Array(h); y < h; y++)
        f[y] = p[y];
      return f;
    }
    function o(p, h) {
      var y = typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
      if (y)
        return (y = y.call(p)).next.bind(y);
      if (Array.isArray(p) || (y = n(p)) || h && p && typeof p.length == "number") {
        y && (p = y);
        var f = 0;
        return function() {
          return f >= p.length ? {
            done: !0
          } : {
            done: !1,
            value: p[f++]
          };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var a = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
    function s(p) {
      var h = p.split("-"), y = h[1], f = h[2], C = h[3];
      if (!y || !f || !C)
        throw new Error("Malformed asset _ref '" + p + `'. Expected an id like "` + a + '".');
      var _ = f.split("x"), A = _[0], H = _[1], G = +A, J = +H, z = isFinite(G) && isFinite(J);
      if (!z)
        throw new Error("Malformed asset _ref '" + p + `'. Expected an id like "` + a + '".');
      return {
        id: y,
        width: G,
        height: J,
        format: C
      };
    }
    var v = function(h) {
      var y = h;
      return y ? typeof y._ref == "string" : !1;
    }, c = function(h) {
      var y = h;
      return y ? typeof y._id == "string" : !1;
    }, g = function(h) {
      var y = h;
      return y && y.asset ? typeof y.asset.url == "string" : !1;
    };
    function u(p) {
      if (!p)
        return null;
      var h;
      if (typeof p == "string" && d(p))
        h = {
          asset: {
            _ref: O(p)
          }
        };
      else if (typeof p == "string")
        h = {
          asset: {
            _ref: p
          }
        };
      else if (v(p))
        h = {
          asset: p
        };
      else if (c(p))
        h = {
          asset: {
            _ref: p._id || ""
          }
        };
      else if (g(p))
        h = {
          asset: {
            _ref: O(p.asset.url)
          }
        };
      else if (typeof p.asset == "object")
        h = r({}, p);
      else
        return null;
      var y = p;
      return y.crop && (h.crop = y.crop), y.hotspot && (h.hotspot = y.hotspot), x(h);
    }
    function d(p) {
      return /^https?:\/\//.test("" + p);
    }
    function O(p) {
      var h = p.split("/").slice(-1);
      return ("image-" + h[0]).replace(/\.([a-z]+)$/, "-$1");
    }
    function x(p) {
      if (p.crop && p.hotspot)
        return p;
      var h = r({}, p);
      return h.crop || (h.crop = {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      }), h.hotspot || (h.hotspot = {
        x: 0.5,
        y: 0.5,
        height: 1,
        width: 1
      }), h;
    }
    var S = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"]];
    function T(p) {
      var h = r({}, p || {}), y = h.source;
      delete h.source;
      var f = u(y);
      if (!f)
        throw new Error("Unable to resolve image URL from source (" + JSON.stringify(y) + ")");
      var C = f.asset._ref || f.asset._id || "", _ = s(C), A = Math.round(f.crop.left * _.width), H = Math.round(f.crop.top * _.height), G = {
        left: A,
        top: H,
        width: Math.round(_.width - f.crop.right * _.width - A),
        height: Math.round(_.height - f.crop.bottom * _.height - H)
      }, J = f.hotspot.height * _.height / 2, z = f.hotspot.width * _.width / 2, ee = f.hotspot.x * _.width, le = f.hotspot.y * _.height, se = {
        left: ee - z,
        top: le - J,
        right: ee + z,
        bottom: le + J
      };
      return h.rect || h.focalPoint || h.ignoreImageParams || h.crop || (h = r({}, h, k({
        crop: G,
        hotspot: se
      }, h))), j(r({}, h, {
        asset: _
      }));
    }
    function j(p) {
      var h = (p.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""), y = p.asset.id + "-" + p.asset.width + "x" + p.asset.height + "." + p.asset.format, f = h + "/images/" + p.projectId + "/" + p.dataset + "/" + y, C = [];
      if (p.rect) {
        var _ = p.rect, A = _.left, H = _.top, G = _.width, J = _.height, z = A !== 0 || H !== 0 || J !== p.asset.height || G !== p.asset.width;
        z && C.push("rect=" + A + "," + H + "," + G + "," + J);
      }
      p.bg && C.push("bg=" + p.bg), p.focalPoint && (C.push("fp-x=" + p.focalPoint.x), C.push("fp-y=" + p.focalPoint.y));
      var ee = [p.flipHorizontal && "h", p.flipVertical && "v"].filter(Boolean).join("");
      return ee && C.push("flip=" + ee), S.forEach(function(le) {
        var se = le[0], ye = le[1];
        typeof p[se] < "u" ? C.push(ye + "=" + encodeURIComponent(p[se])) : typeof p[ye] < "u" && C.push(ye + "=" + encodeURIComponent(p[ye]));
      }), C.length === 0 ? f : f + "?" + C.join("&");
    }
    function k(p, h) {
      var y, f = h.width, C = h.height;
      if (!(f && C))
        return {
          width: f,
          height: C,
          rect: p.crop
        };
      var _ = p.crop, A = p.hotspot, H = f / C, G = _.width / _.height;
      if (G > H) {
        var J = Math.round(_.height), z = Math.round(J * H), ee = Math.max(0, Math.round(_.top)), le = Math.round((A.right - A.left) / 2 + A.left), se = Math.max(0, Math.round(le - z / 2));
        se < _.left ? se = _.left : se + z > _.left + _.width && (se = _.left + _.width - z), y = {
          left: se,
          top: ee,
          width: z,
          height: J
        };
      } else {
        var ye = _.width, Ce = Math.round(ye / H), ht = Math.max(0, Math.round(_.left)), Ue = Math.round((A.bottom - A.top) / 2 + A.top), ge = Math.max(0, Math.round(Ue - Ce / 2));
        ge < _.top ? ge = _.top : ge + Ce > _.top + _.height && (ge = _.top + _.height - Ce), y = {
          left: ht,
          top: ge,
          width: ye,
          height: Ce
        };
      }
      return {
        width: f,
        height: C,
        rect: y
      };
    }
    var q = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"], M = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"], oe = ["format"];
    function ae(p) {
      return p && "config" in p ? typeof p.config == "function" : !1;
    }
    function he(p) {
      return p && "clientConfig" in p ? typeof p.clientConfig == "object" : !1;
    }
    function ve(p) {
      for (var h = S, y = o(h), f; !(f = y()).done; ) {
        var C = f.value, _ = C[0], A = C[1];
        if (p === _ || p === A)
          return _;
      }
      return p;
    }
    function L(p) {
      if (ae(p)) {
        var h = p.config(), y = h.apiHost, f = h.projectId, C = h.dataset, _ = y || "https://api.sanity.io";
        return new B(null, {
          baseUrl: _.replace(/^https:\/\/api\./, "https://cdn."),
          projectId: f,
          dataset: C
        });
      }
      var A = p;
      if (he(A)) {
        var H = A.clientConfig, G = H.apiHost, J = H.projectId, z = H.dataset, ee = G || "https://api.sanity.io";
        return new B(null, {
          baseUrl: ee.replace(/^https:\/\/api\./, "https://cdn."),
          projectId: J,
          dataset: z
        });
      }
      return new B(null, p);
    }
    var B = /* @__PURE__ */ function() {
      function p(y, f) {
        this.options = void 0, this.options = y ? r({}, y.options || {}, f || {}) : r({}, f || {});
      }
      var h = p.prototype;
      return h.withOptions = function(f) {
        var C = f.baseUrl || this.options.baseUrl, _ = {
          baseUrl: C
        };
        for (var A in f)
          if (f.hasOwnProperty(A)) {
            var H = ve(A);
            _[H] = f[A];
          }
        return new p(this, r({
          baseUrl: C
        }, _));
      }, h.image = function(f) {
        return this.withOptions({
          source: f
        });
      }, h.dataset = function(f) {
        return this.withOptions({
          dataset: f
        });
      }, h.projectId = function(f) {
        return this.withOptions({
          projectId: f
        });
      }, h.bg = function(f) {
        return this.withOptions({
          bg: f
        });
      }, h.dpr = function(f) {
        return this.withOptions(f && f !== 1 ? {
          dpr: f
        } : {});
      }, h.width = function(f) {
        return this.withOptions({
          width: f
        });
      }, h.height = function(f) {
        return this.withOptions({
          height: f
        });
      }, h.focalPoint = function(f, C) {
        return this.withOptions({
          focalPoint: {
            x: f,
            y: C
          }
        });
      }, h.maxWidth = function(f) {
        return this.withOptions({
          maxWidth: f
        });
      }, h.minWidth = function(f) {
        return this.withOptions({
          minWidth: f
        });
      }, h.maxHeight = function(f) {
        return this.withOptions({
          maxHeight: f
        });
      }, h.minHeight = function(f) {
        return this.withOptions({
          minHeight: f
        });
      }, h.size = function(f, C) {
        return this.withOptions({
          width: f,
          height: C
        });
      }, h.blur = function(f) {
        return this.withOptions({
          blur: f
        });
      }, h.sharpen = function(f) {
        return this.withOptions({
          sharpen: f
        });
      }, h.rect = function(f, C, _, A) {
        return this.withOptions({
          rect: {
            left: f,
            top: C,
            width: _,
            height: A
          }
        });
      }, h.format = function(f) {
        return this.withOptions({
          format: f
        });
      }, h.invert = function(f) {
        return this.withOptions({
          invert: f
        });
      }, h.orientation = function(f) {
        return this.withOptions({
          orientation: f
        });
      }, h.quality = function(f) {
        return this.withOptions({
          quality: f
        });
      }, h.forceDownload = function(f) {
        return this.withOptions({
          download: f
        });
      }, h.flipHorizontal = function() {
        return this.withOptions({
          flipHorizontal: !0
        });
      }, h.flipVertical = function() {
        return this.withOptions({
          flipVertical: !0
        });
      }, h.ignoreImageParams = function() {
        return this.withOptions({
          ignoreImageParams: !0
        });
      }, h.fit = function(f) {
        if (q.indexOf(f) === -1)
          throw new Error('Invalid fit mode "' + f + '"');
        return this.withOptions({
          fit: f
        });
      }, h.crop = function(f) {
        if (M.indexOf(f) === -1)
          throw new Error('Invalid crop mode "' + f + '"');
        return this.withOptions({
          crop: f
        });
      }, h.saturation = function(f) {
        return this.withOptions({
          saturation: f
        });
      }, h.auto = function(f) {
        if (oe.indexOf(f) === -1)
          throw new Error('Invalid auto mode "' + f + '"');
        return this.withOptions({
          auto: f
        });
      }, h.pad = function(f) {
        return this.withOptions({
          pad: f
        });
      }, h.url = function() {
        return T(this.options);
      }, h.toString = function() {
        return this.url();
      }, p;
    }();
    return L;
  });
})(Nn);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var br = Object.getOwnPropertySymbols, _i = Object.prototype.hasOwnProperty, Oi = Object.prototype.propertyIsEnumerable;
function Ei(t) {
  if (t == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(t);
}
function Si() {
  try {
    if (!Object.assign)
      return !1;
    var t = new String("abc");
    if (t[5] = "de", Object.getOwnPropertyNames(t)[0] === "5")
      return !1;
    for (var e = {}, r = 0; r < 10; r++)
      e["_" + String.fromCharCode(r)] = r;
    var n = Object.getOwnPropertyNames(e).map(function(o) {
      return e[o];
    });
    if (n.join("") !== "0123456789")
      return !1;
    var i = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(o) {
      i[o] = o;
    }), Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var X = Si() ? Object.assign : function(t, e) {
  for (var r, n = Ei(t), i, o = 1; o < arguments.length; o++) {
    r = Object(arguments[o]);
    for (var a in r)
      _i.call(r, a) && (n[a] = r[a]);
    if (br) {
      i = br(r);
      for (var s = 0; s < i.length; s++)
        Oi.call(r, i[s]) && (n[i[s]] = r[i[s]]);
    }
  }
  return n;
}, Vt = {}, Wt = {}, Pe = {}, it = {};
Object.defineProperty(it, "__esModule", { value: !0 });
function Ii(t) {
  return typeof t == "function";
}
it.isFunction = Ii;
var ot = {}, ze = {};
Object.defineProperty(ze, "__esModule", { value: !0 });
var gt = !1;
ze.config = {
  Promise: void 0,
  set useDeprecatedSynchronousErrorHandling(t) {
    if (t) {
      var e = new Error();
      console.warn(`DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: 
` + e.stack);
    } else
      gt && console.log("RxJS: Back to a better error behavior. Thank you. <3");
    gt = t;
  },
  get useDeprecatedSynchronousErrorHandling() {
    return gt;
  }
};
var at = {};
Object.defineProperty(at, "__esModule", { value: !0 });
function Pi(t) {
  setTimeout(function() {
    throw t;
  }, 0);
}
at.hostReportError = Pi;
Object.defineProperty(ot, "__esModule", { value: !0 });
var Ci = ze, Ti = at;
ot.empty = {
  closed: !0,
  next: function(t) {
  },
  error: function(t) {
    if (Ci.config.useDeprecatedSynchronousErrorHandling)
      throw t;
    Ti.hostReportError(t);
  },
  complete: function() {
  }
};
var Xt = {}, Gt = {};
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.isArray = function() {
  return Array.isArray || function(t) {
    return t && typeof t.length == "number";
  };
}();
var Jt = {};
Object.defineProperty(Jt, "__esModule", { value: !0 });
function xi(t) {
  return t !== null && typeof t == "object";
}
Jt.isObject = xi;
var Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
var ji = function() {
  function t(e) {
    return Error.call(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(r, n) {
      return n + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e, this;
  }
  return t.prototype = Object.create(Error.prototype), t;
}();
Qt.UnsubscriptionError = ji;
Object.defineProperty(Xt, "__esModule", { value: !0 });
var Ri = Gt, Ai = Jt, $i = it, Ke = Qt, qi = function() {
  function t(e) {
    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e);
  }
  return t.prototype.unsubscribe = function() {
    var e;
    if (!this.closed) {
      var r = this, n = r._parentOrParents, i = r._ctorUnsubscribe, o = r._unsubscribe, a = r._subscriptions;
      if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t)
        n.remove(this);
      else if (n !== null)
        for (var s = 0; s < n.length; ++s) {
          var v = n[s];
          v.remove(this);
        }
      if ($i.isFunction(o)) {
        i && (this._unsubscribe = void 0);
        try {
          o.call(this);
        } catch (u) {
          e = u instanceof Ke.UnsubscriptionError ? wr(u.errors) : [u];
        }
      }
      if (Ri.isArray(a))
        for (var s = -1, c = a.length; ++s < c; ) {
          var g = a[s];
          if (Ai.isObject(g))
            try {
              g.unsubscribe();
            } catch (d) {
              e = e || [], d instanceof Ke.UnsubscriptionError ? e = e.concat(wr(d.errors)) : e.push(d);
            }
        }
      if (e)
        throw new Ke.UnsubscriptionError(e);
    }
  }, t.prototype.add = function(e) {
    var r = e;
    if (!e)
      return t.EMPTY;
    switch (typeof e) {
      case "function":
        r = new t(e);
      case "object":
        if (r === this || r.closed || typeof r.unsubscribe != "function")
          return r;
        if (this.closed)
          return r.unsubscribe(), r;
        if (!(r instanceof t)) {
          var n = r;
          r = new t(), r._subscriptions = [n];
        }
        break;
      default:
        throw new Error("unrecognized teardown " + e + " added to Subscription.");
    }
    var i = r._parentOrParents;
    if (i === null)
      r._parentOrParents = this;
    else if (i instanceof t) {
      if (i === this)
        return r;
      r._parentOrParents = [i, this];
    } else if (i.indexOf(this) === -1)
      i.push(this);
    else
      return r;
    var o = this._subscriptions;
    return o === null ? this._subscriptions = [r] : o.push(r), r;
  }, t.prototype.remove = function(e) {
    var r = this._subscriptions;
    if (r) {
      var n = r.indexOf(e);
      n !== -1 && r.splice(n, 1);
    }
  }, t.EMPTY = function(e) {
    return e.closed = !0, e;
  }(new t()), t;
}();
Xt.Subscription = qi;
function wr(t) {
  return t.reduce(function(e, r) {
    return e.concat(r instanceof Ke.UnsubscriptionError ? r.errors : r);
  }, []);
}
var Yt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.rxSubscriber = function() {
    return typeof Symbol == "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
  }(), t.$$rxSubscriber = t.rxSubscriber;
})(Yt);
var rn = ue && ue.__extends || function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        i.hasOwnProperty(o) && (n[o] = i[o]);
    }, t(e, r);
  };
  return function(e, r) {
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(Pe, "__esModule", { value: !0 });
var _r = it, qt = ot, Di = Xt, ki = Yt, Re = ze, Je = at, nn = function(t) {
  rn(e, t);
  function e(r, n, i) {
    var o = t.call(this) || this;
    switch (o.syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
      case 0:
        o.destination = qt.empty;
        break;
      case 1:
        if (!r) {
          o.destination = qt.empty;
          break;
        }
        if (typeof r == "object") {
          r instanceof e ? (o.syncErrorThrowable = r.syncErrorThrowable, o.destination = r, r.add(o)) : (o.syncErrorThrowable = !0, o.destination = new Dt(o, r));
          break;
        }
      default:
        o.syncErrorThrowable = !0, o.destination = new Dt(o, r, n, i);
        break;
    }
    return o;
  }
  return e.prototype[ki.rxSubscriber] = function() {
    return this;
  }, e.create = function(r, n, i) {
    var o = new e(r, n, i);
    return o.syncErrorThrowable = !1, o;
  }, e.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, e.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this));
  }, e.prototype._next = function(r) {
    this.destination.next(r);
  }, e.prototype._error = function(r) {
    this.destination.error(r), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.destination.complete(), this.unsubscribe();
  }, e.prototype._unsubscribeAndRecycle = function() {
    var r = this._parentOrParents;
    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = r, this;
  }, e;
}(Di.Subscription);
Pe.Subscriber = nn;
var Dt = function(t) {
  rn(e, t);
  function e(r, n, i, o) {
    var a = t.call(this) || this;
    a._parentSubscriber = r;
    var s, v = a;
    return _r.isFunction(n) ? s = n : n && (s = n.next, i = n.error, o = n.complete, n !== qt.empty && (v = Object.create(n), _r.isFunction(v.unsubscribe) && a.add(v.unsubscribe.bind(v)), v.unsubscribe = a.unsubscribe.bind(a))), a._context = v, a._next = s, a._error = i, a._complete = o, a;
  }
  return e.prototype.next = function(r) {
    if (!this.isStopped && this._next) {
      var n = this._parentSubscriber;
      !Re.config.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable ? this.__tryOrUnsub(this._next, r) : this.__tryOrSetError(n, this._next, r) && this.unsubscribe();
    }
  }, e.prototype.error = function(r) {
    if (!this.isStopped) {
      var n = this._parentSubscriber, i = Re.config.useDeprecatedSynchronousErrorHandling;
      if (this._error)
        !i || !n.syncErrorThrowable ? (this.__tryOrUnsub(this._error, r), this.unsubscribe()) : (this.__tryOrSetError(n, this._error, r), this.unsubscribe());
      else if (n.syncErrorThrowable)
        i ? (n.syncErrorValue = r, n.syncErrorThrown = !0) : Je.hostReportError(r), this.unsubscribe();
      else {
        if (this.unsubscribe(), i)
          throw r;
        Je.hostReportError(r);
      }
    }
  }, e.prototype.complete = function() {
    var r = this;
    if (!this.isStopped) {
      var n = this._parentSubscriber;
      if (this._complete) {
        var i = function() {
          return r._complete.call(r._context);
        };
        !Re.config.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable ? (this.__tryOrUnsub(i), this.unsubscribe()) : (this.__tryOrSetError(n, i), this.unsubscribe());
      } else
        this.unsubscribe();
    }
  }, e.prototype.__tryOrUnsub = function(r, n) {
    try {
      r.call(this._context, n);
    } catch (i) {
      if (this.unsubscribe(), Re.config.useDeprecatedSynchronousErrorHandling)
        throw i;
      Je.hostReportError(i);
    }
  }, e.prototype.__tryOrSetError = function(r, n, i) {
    if (!Re.config.useDeprecatedSynchronousErrorHandling)
      throw new Error("bad call");
    try {
      n.call(this._context, i);
    } catch (o) {
      return Re.config.useDeprecatedSynchronousErrorHandling ? (r.syncErrorValue = o, r.syncErrorThrown = !0, !0) : (Je.hostReportError(o), !0);
    }
    return !1;
  }, e.prototype._unsubscribe = function() {
    var r = this._parentSubscriber;
    this._context = null, this._parentSubscriber = null, r.unsubscribe();
  }, e;
}(nn);
Pe.SafeSubscriber = Dt;
Object.defineProperty(Wt, "__esModule", { value: !0 });
var Ui = Pe;
function Mi(t) {
  for (; t; ) {
    var e = t, r = e.closed, n = e.destination, i = e.isStopped;
    if (r || i)
      return !1;
    n && n instanceof Ui.Subscriber ? t = n : t = null;
  }
  return !0;
}
Wt.canReportError = Mi;
var Kt = {};
Object.defineProperty(Kt, "__esModule", { value: !0 });
var mt = Pe, Or = Yt, Hi = ot;
function Li(t, e, r) {
  if (t) {
    if (t instanceof mt.Subscriber)
      return t;
    if (t[Or.rxSubscriber])
      return t[Or.rxSubscriber]();
  }
  return !t && !e && !r ? new mt.Subscriber(Hi.empty) : new mt.Subscriber(t, e, r);
}
Kt.toSubscriber = Li;
var Zt = {};
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.observable = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var st = {}, er = {};
Object.defineProperty(er, "__esModule", { value: !0 });
function Fi(t) {
  return t;
}
er.identity = Fi;
Object.defineProperty(st, "__esModule", { value: !0 });
var Ni = er;
function Bi() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return on(t);
}
st.pipe = Bi;
function on(t) {
  return t.length === 0 ? Ni.identity : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(n, i) {
      return i(n);
    }, r);
  };
}
st.pipeFromArray = on;
Object.defineProperty(Vt, "__esModule", { value: !0 });
var zi = Wt, Vi = Kt, Wi = Zt, Xi = st, Ze = ze, Gi = function() {
  function t(e) {
    this._isScalar = !1, e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var r = new t();
    return r.source = this, r.operator = e, r;
  }, t.prototype.subscribe = function(e, r, n) {
    var i = this.operator, o = Vi.toSubscriber(e, r, n);
    if (i ? o.add(i.call(o, this.source)) : o.add(this.source || Ze.config.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), Ze.config.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown))
      throw o.syncErrorValue;
    return o;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (r) {
      Ze.config.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = r), zi.canReportError(e) ? e.error(r) : console.warn(r);
    }
  }, t.prototype.forEach = function(e, r) {
    var n = this;
    return r = Er(r), new r(function(i, o) {
      var a;
      a = n.subscribe(function(s) {
        try {
          e(s);
        } catch (v) {
          o(v), a && a.unsubscribe();
        }
      }, o, i);
    });
  }, t.prototype._subscribe = function(e) {
    var r = this.source;
    return r && r.subscribe(e);
  }, t.prototype[Wi.observable] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return e.length === 0 ? this : Xi.pipeFromArray(e)(this);
  }, t.prototype.toPromise = function(e) {
    var r = this;
    return e = Er(e), new e(function(n, i) {
      var o;
      r.subscribe(function(a) {
        return o = a;
      }, function(a) {
        return i(a);
      }, function() {
        return n(o);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
Vt.Observable = Gi;
function Er(t) {
  if (t || (t = Ze.config.Promise || Promise), !t)
    throw new Error("no Promise impl found");
  return t;
}
var tr = {}, Ji = ue && ue.__extends || function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        i.hasOwnProperty(o) && (n[o] = i[o]);
    }, t(e, r);
  };
  return function(e, r) {
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(tr, "__esModule", { value: !0 });
var Qi = Pe;
function Yi(t, e) {
  return function(n) {
    return n.lift(new Ki(t, e));
  };
}
tr.filter = Yi;
var Ki = function() {
  function t(e, r) {
    this.predicate = e, this.thisArg = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Zi(e, this.predicate, this.thisArg));
  }, t;
}(), Zi = function(t) {
  Ji(e, t);
  function e(r, n, i) {
    var o = t.call(this, r) || this;
    return o.predicate = n, o.thisArg = i, o.count = 0, o;
  }
  return e.prototype._next = function(r) {
    var n;
    try {
      n = this.predicate.call(this.thisArg, r, this.count++);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    n && this.destination.next(r);
  }, e;
}(Qi.Subscriber), ut = {}, eo = ue && ue.__extends || function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        i.hasOwnProperty(o) && (n[o] = i[o]);
    }, t(e, r);
  };
  return function(e, r) {
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(ut, "__esModule", { value: !0 });
var to = Pe;
function ro(t, e) {
  return function(n) {
    if (typeof t != "function")
      throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
    return n.lift(new an(t, e));
  };
}
ut.map = ro;
var an = function() {
  function t(e, r) {
    this.project = e, this.thisArg = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new no(e, this.project, this.thisArg));
  }, t;
}();
ut.MapOperator = an;
var no = function(t) {
  eo(e, t);
  function e(r, n, i) {
    var o = t.call(this, r) || this;
    return o.project = n, o.count = 0, o.thisArg = i || o, o;
  }
  return e.prototype._next = function(r) {
    var n;
    try {
      n = this.project.call(this.thisArg, r, this.count++);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(n);
  }, e;
}(to.Subscriber), io = Vt, oo = io.Observable, ao = tr, so = ao.filter, uo = ut, co = uo.map, Ve = {
  Observable: oo,
  filter: so,
  map: co
}, sn = function(e) {
  if (typeof e == "string" || Array.isArray(e))
    return {
      id: e
    };
  if (e && e.query)
    return "params" in e ? {
      query: e.query,
      params: e.params
    } : {
      query: e.query
    };
  var r = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join(`
`);
  throw new Error(`Unknown selection - must be one of:

`.concat(r));
}, Se = {};
(function(t) {
  function e(i) {
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
      return typeof o;
    } : function(o) {
      return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, e(i);
  }
  var r = ["image", "file"], n = ["before", "after", "replace"];
  t.dataset = function(i) {
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(i))
      throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
  }, t.projectId = function(i) {
    if (!/^[-a-z0-9]+$/i.test(i))
      throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
  }, t.validateAssetType = function(i) {
    if (r.indexOf(i) === -1)
      throw new Error("Invalid asset type: ".concat(i, ". Must be one of ").concat(r.join(", ")));
  }, t.validateObject = function(i, o) {
    if (o === null || e(o) !== "object" || Array.isArray(o))
      throw new Error("".concat(i, "() takes an object of properties"));
  }, t.requireDocumentId = function(i, o) {
    if (!o._id)
      throw new Error("".concat(i, '() requires that the document contains an ID ("_id" property)'));
    t.validateDocumentId(i, o._id);
  }, t.validateDocumentId = function(i, o) {
    if (typeof o != "string" || !/^[a-z0-9_.-]+$/i.test(o))
      throw new Error("".concat(i, '(): "').concat(o, '" is not a valid document ID'));
  }, t.validateInsert = function(i, o, a) {
    var s = "insert(at, selector, items)";
    if (n.indexOf(i) === -1) {
      var v = n.map(function(c) {
        return '"'.concat(c, '"');
      }).join(", ");
      throw new Error("".concat(s, ' takes an "at"-argument which is one of: ').concat(v));
    }
    if (typeof o != "string")
      throw new Error("".concat(s, ' takes a "selector"-argument which must be a string'));
    if (!Array.isArray(a))
      throw new Error("".concat(s, ' takes an "items"-argument which must be an array'));
  }, t.hasDataset = function(i) {
    if (!i.dataset)
      throw new Error("`dataset` must be provided to perform queries");
    return i.dataset || "";
  }, t.requestTag = function(i) {
    if (typeof i != "string" || !/^[a-z0-9._-]{1,75}$/i.test(i))
      throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
    return i;
  };
})(Se);
function bt(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Oe = X, fo = sn, un = Se, wt = un.validateObject, lo = un.validateInsert;
function kt(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  this.selection = t, this.operations = Oe({}, e), this.client = r;
}
Oe(kt.prototype, {
  clone: function() {
    return new kt(this.selection, Oe({}, this.operations), this.client);
  },
  set: function(e) {
    return this._assign("set", e);
  },
  diffMatchPatch: function(e) {
    return wt("diffMatchPatch", e), this._assign("diffMatchPatch", e);
  },
  unset: function(e) {
    if (!Array.isArray(e))
      throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
    return this.operations = Oe({}, this.operations, {
      unset: e
    }), this;
  },
  setIfMissing: function(e) {
    return this._assign("setIfMissing", e);
  },
  replace: function(e) {
    return wt("replace", e), this._set("set", {
      $: e
    });
  },
  inc: function(e) {
    return this._assign("inc", e);
  },
  dec: function(e) {
    return this._assign("dec", e);
  },
  insert: function(e, r, n) {
    var i;
    return lo(e, r, n), this._assign("insert", (i = {}, bt(i, e, r), bt(i, "items", n), i));
  },
  append: function(e, r) {
    return this.insert("after", "".concat(e, "[-1]"), r);
  },
  prepend: function(e, r) {
    return this.insert("before", "".concat(e, "[0]"), r);
  },
  splice: function(e, r, n, i) {
    var o = typeof n > "u" || n === -1, a = r < 0 ? r - 1 : r, s = o ? -1 : Math.max(0, r + n), v = a < 0 && s >= 0 ? "" : s, c = "".concat(e, "[").concat(a, ":").concat(v, "]");
    return this.insert("replace", c, i || []);
  },
  ifRevisionId: function(e) {
    return this.operations.ifRevisionID = e, this;
  },
  serialize: function() {
    return Oe(fo(this.selection), this.operations);
  },
  toJSON: function() {
    return this.serialize();
  },
  commit: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.client)
      throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
    var r = typeof this.selection == "string", n = Oe({
      returnFirst: r,
      returnDocuments: !0
    }, e);
    return this.client.mutate({
      patch: this.serialize()
    }, n);
  },
  reset: function() {
    return this.operations = {}, this;
  },
  _set: function(e, r) {
    return this._assign(e, r, !1);
  },
  _assign: function(e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    return wt(e, r), this.operations = Oe({}, this.operations, bt({}, e, Oe({}, n && this.operations[e] || {}, r))), this;
  }
});
var rr = kt;
function Sr(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var _t = X, Ae = Se, Ot = rr, po = {
  returnDocuments: !1
};
function Ut() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0;
  this.trxId = r, this.operations = t, this.client = e;
}
_t(Ut.prototype, {
  clone: function() {
    return new Ut(this.operations.slice(0), this.client, this.trxId);
  },
  create: function(e) {
    return Ae.validateObject("create", e), this._add({
      create: e
    });
  },
  createIfNotExists: function(e) {
    var r = "createIfNotExists";
    return Ae.validateObject(r, e), Ae.requireDocumentId(r, e), this._add(Sr({}, r, e));
  },
  createOrReplace: function(e) {
    var r = "createOrReplace";
    return Ae.validateObject(r, e), Ae.requireDocumentId(r, e), this._add(Sr({}, r, e));
  },
  delete: function(e) {
    return Ae.validateDocumentId("delete", e), this._add({
      delete: {
        id: e
      }
    });
  },
  patch: function(e, r) {
    var n = typeof r == "function", i = e instanceof Ot;
    if (i)
      return this._add({
        patch: e.serialize()
      });
    if (n) {
      var o = r(new Ot(e, {}, this.client));
      if (!(o instanceof Ot))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({
        patch: o.serialize()
      });
    }
    return this._add({
      patch: _t({
        id: e
      }, r)
    });
  },
  transactionId: function(e) {
    return e ? (this.trxId = e, this) : this.trxId;
  },
  serialize: function() {
    return this.operations.slice();
  },
  toJSON: function() {
    return this.serialize();
  },
  commit: function(e) {
    if (!this.client)
      throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
    return this.client.mutate(this.serialize(), _t({
      transactionId: this.trxId
    }, po, e || {}));
  },
  reset: function() {
    return this.operations = [], this;
  },
  _add: function(e) {
    return this.operations.push(e), this;
  }
});
var cn = Ut, ho = ["tag"];
function vo(t, e) {
  if (t == null)
    return {};
  var r = yo(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      n = o[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function yo(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
var $e = encodeURIComponent, fn = function(t) {
  var e = t.query, r = t.params, n = r === void 0 ? {} : r, i = t.options, o = i === void 0 ? {} : i, a = o.tag, s = vo(o, ho), v = "query=".concat($e(e)), c = a ? "?tag=".concat($e(a), "&").concat(v) : "?".concat(v), g = Object.keys(n).reduce(function(u, d) {
    return "".concat(u, "&").concat($e("$".concat(d)), "=").concat($e(JSON.stringify(n[d])));
  }, c);
  return Object.keys(s).reduce(function(u, d) {
    return o[d] ? "".concat(u, "&").concat($e(d), "=").concat($e(o[d])) : u;
  }, g);
}, rt = {}, go = {
  get exports() {
    return rt;
  },
  set exports(t) {
    rt = t;
  }
};
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
(function(t, e) {
  (function(r) {
    var n = r.setTimeout, i = r.clearTimeout, o = r.XMLHttpRequest, a = r.XDomainRequest, s = r.ActiveXObject, v = r.EventSource, c = r.document, g = r.Promise, u = r.fetch, d = r.Response, O = r.TextDecoder, x = r.TextEncoder, S = r.AbortController;
    if (typeof window < "u" && typeof c < "u" && !("readyState" in c) && c.body == null && (c.readyState = "loading", window.addEventListener("load", function(l) {
      c.readyState = "complete";
    }, !1)), o == null && s != null && (o = function() {
      return new s("Microsoft.XMLHTTP");
    }), Object.create == null && (Object.create = function(l) {
      function b() {
      }
      return b.prototype = l, new b();
    }), Date.now || (Date.now = function() {
      return new Date().getTime();
    }), S == null) {
      var T = u;
      u = function(l, b) {
        var w = b.signal;
        return T(l, { headers: b.headers, credentials: b.credentials, cache: b.cache }).then(function(m) {
          var I = m.body.getReader();
          return w._reader = I, w._aborted && w._reader.cancel(), {
            status: m.status,
            statusText: m.statusText,
            headers: m.headers,
            body: {
              getReader: function() {
                return I;
              }
            }
          };
        });
      }, S = function() {
        this.signal = {
          _reader: null,
          _aborted: !1
        }, this.abort = function() {
          this.signal._reader != null && this.signal._reader.cancel(), this.signal._aborted = !0;
        };
      };
    }
    function j() {
      this.bitsNeeded = 0, this.codePoint = 0;
    }
    j.prototype.decode = function(l) {
      function b(D, U, P) {
        if (P === 1)
          return D >= 128 >> U && D << U <= 2047;
        if (P === 2)
          return D >= 2048 >> U && D << U <= 55295 || D >= 57344 >> U && D << U <= 65535;
        if (P === 3)
          return D >= 65536 >> U && D << U <= 1114111;
        throw new Error();
      }
      function w(D, U) {
        if (D === 6 * 1)
          return U >> 6 > 15 ? 3 : U > 31 ? 2 : 1;
        if (D === 6 * 2)
          return U > 15 ? 3 : 2;
        if (D === 6 * 3)
          return 3;
        throw new Error();
      }
      for (var m = 65533, I = "", E = this.bitsNeeded, R = this.codePoint, F = 0; F < l.length; F += 1) {
        var $ = l[F];
        E !== 0 && ($ < 128 || $ > 191 || !b(R << 6 | $ & 63, E - 6, w(E, R))) && (E = 0, R = m, I += String.fromCharCode(R)), E === 0 ? ($ >= 0 && $ <= 127 ? (E = 0, R = $) : $ >= 192 && $ <= 223 ? (E = 6 * 1, R = $ & 31) : $ >= 224 && $ <= 239 ? (E = 6 * 2, R = $ & 15) : $ >= 240 && $ <= 247 ? (E = 6 * 3, R = $ & 7) : (E = 0, R = m), E !== 0 && !b(R, E, w(E, R)) && (E = 0, R = m)) : (E -= 6, R = R << 6 | $ & 63), E === 0 && (R <= 65535 ? I += String.fromCharCode(R) : (I += String.fromCharCode(55296 + (R - 65535 - 1 >> 10)), I += String.fromCharCode(56320 + (R - 65535 - 1 & 1023))));
      }
      return this.bitsNeeded = E, this.codePoint = R, I;
    };
    var k = function() {
      try {
        return new O().decode(new x().encode("test"), { stream: !0 }) === "test";
      } catch (l) {
        console.debug("TextDecoder does not support streaming option. Using polyfill instead: " + l);
      }
      return !1;
    };
    (O == null || x == null || !k()) && (O = j);
    var q = function() {
    };
    function M(l) {
      this.withCredentials = !1, this.readyState = 0, this.status = 0, this.statusText = "", this.responseText = "", this.onprogress = q, this.onload = q, this.onerror = q, this.onreadystatechange = q, this._contentType = "", this._xhr = l, this._sendTimeout = 0, this._abort = q;
    }
    M.prototype.open = function(l, b) {
      this._abort(!0);
      var w = this, m = this._xhr, I = 1, E = 0;
      this._abort = function(P) {
        w._sendTimeout !== 0 && (i(w._sendTimeout), w._sendTimeout = 0), (I === 1 || I === 2 || I === 3) && (I = 4, m.onload = q, m.onerror = q, m.onabort = q, m.onprogress = q, m.onreadystatechange = q, m.abort(), E !== 0 && (i(E), E = 0), P || (w.readyState = 4, w.onabort(null), w.onreadystatechange())), I = 0;
      };
      var R = function() {
        if (I === 1) {
          var P = 0, N = "", me = void 0;
          if ("contentType" in m)
            P = 200, N = "OK", me = m.contentType;
          else
            try {
              P = m.status, N = m.statusText, me = m.getResponseHeader("Content-Type");
            } catch {
              P = 0, N = "", me = void 0;
            }
          P !== 0 && (I = 2, w.readyState = 2, w.status = P, w.statusText = N, w._contentType = me, w.onreadystatechange());
        }
      }, F = function() {
        if (R(), I === 2 || I === 3) {
          I = 3;
          var P = "";
          try {
            P = m.responseText;
          } catch {
          }
          w.readyState = 3, w.responseText = P, w.onprogress();
        }
      }, $ = function(P, N) {
        if ((N == null || N.preventDefault == null) && (N = {
          preventDefault: q
        }), F(), I === 1 || I === 2 || I === 3) {
          if (I = 4, E !== 0 && (i(E), E = 0), w.readyState = 4, P === "load")
            w.onload(N);
          else if (P === "error")
            w.onerror(N);
          else if (P === "abort")
            w.onabort(N);
          else
            throw new TypeError();
          w.onreadystatechange();
        }
      }, D = function(P) {
        m != null && (m.readyState === 4 ? (!("onload" in m) || !("onerror" in m) || !("onabort" in m)) && $(m.responseText === "" ? "error" : "load", P) : m.readyState === 3 ? "onprogress" in m || F() : m.readyState === 2 && R());
      }, U = function() {
        E = n(function() {
          U();
        }, 500), m.readyState === 3 && F();
      };
      "onload" in m && (m.onload = function(P) {
        $("load", P);
      }), "onerror" in m && (m.onerror = function(P) {
        $("error", P);
      }), "onabort" in m && (m.onabort = function(P) {
        $("abort", P);
      }), "onprogress" in m && (m.onprogress = F), "onreadystatechange" in m && (m.onreadystatechange = function(P) {
        D(P);
      }), ("contentType" in m || !("ontimeout" in o.prototype)) && (b += (b.indexOf("?") === -1 ? "?" : "&") + "padding=true"), m.open(l, b, !0), "readyState" in m && (E = n(function() {
        U();
      }, 0));
    }, M.prototype.abort = function() {
      this._abort(!1);
    }, M.prototype.getResponseHeader = function(l) {
      return this._contentType;
    }, M.prototype.setRequestHeader = function(l, b) {
      var w = this._xhr;
      "setRequestHeader" in w && w.setRequestHeader(l, b);
    }, M.prototype.getAllResponseHeaders = function() {
      return this._xhr.getAllResponseHeaders != null && this._xhr.getAllResponseHeaders() || "";
    }, M.prototype.send = function() {
      if ((!("ontimeout" in o.prototype) || !("sendAsBinary" in o.prototype) && !("mozAnon" in o.prototype)) && c != null && c.readyState != null && c.readyState !== "complete") {
        var l = this;
        l._sendTimeout = n(function() {
          l._sendTimeout = 0, l.send();
        }, 4);
        return;
      }
      var b = this._xhr;
      "withCredentials" in b && (b.withCredentials = this.withCredentials);
      try {
        b.send(void 0);
      } catch (w) {
        throw w;
      }
    };
    function oe(l) {
      return l.replace(/[A-Z]/g, function(b) {
        return String.fromCharCode(b.charCodeAt(0) + 32);
      });
    }
    function ae(l) {
      for (var b = /* @__PURE__ */ Object.create(null), w = l.split(`\r
`), m = 0; m < w.length; m += 1) {
        var I = w[m], E = I.split(": "), R = E.shift(), F = E.join(": ");
        b[oe(R)] = F;
      }
      this._map = b;
    }
    ae.prototype.get = function(l) {
      return this._map[oe(l)];
    }, o != null && o.HEADERS_RECEIVED == null && (o.HEADERS_RECEIVED = 2);
    function he() {
    }
    he.prototype.open = function(l, b, w, m, I, E, R) {
      l.open("GET", I);
      var F = 0;
      l.onprogress = function() {
        var D = l.responseText, U = D.slice(F);
        F += U.length, w(U);
      }, l.onerror = function(D) {
        D.preventDefault(), m(new Error("NetworkError"));
      }, l.onload = function() {
        m(null);
      }, l.onabort = function() {
        m(null);
      }, l.onreadystatechange = function() {
        if (l.readyState === o.HEADERS_RECEIVED) {
          var D = l.status, U = l.statusText, P = l.getResponseHeader("Content-Type"), N = l.getAllResponseHeaders();
          b(D, U, P, new ae(N));
        }
      }, l.withCredentials = E;
      for (var $ in R)
        Object.prototype.hasOwnProperty.call(R, $) && l.setRequestHeader($, R[$]);
      return l.send(), l;
    };
    function ve(l) {
      this._headers = l;
    }
    ve.prototype.get = function(l) {
      return this._headers.get(l);
    };
    function L() {
    }
    L.prototype.open = function(l, b, w, m, I, E, R) {
      var F = null, $ = new S(), D = $.signal, U = new O();
      return u(I, {
        headers: R,
        credentials: E ? "include" : "same-origin",
        signal: D,
        cache: "no-store"
      }).then(function(P) {
        return F = P.body.getReader(), b(P.status, P.statusText, P.headers.get("Content-Type"), new ve(P.headers)), new g(function(N, me) {
          var Me = function() {
            F.read().then(function(te) {
              if (te.done)
                N(void 0);
              else {
                var Y = U.decode(te.value, { stream: !0 });
                w(Y), Me();
              }
            }).catch(function(te) {
              me(te);
            });
          };
          Me();
        });
      }).catch(function(P) {
        if (P.name !== "AbortError")
          return P;
      }).then(function(P) {
        m(P);
      }), {
        abort: function() {
          F != null && F.cancel(), $.abort();
        }
      };
    };
    function B() {
      this._listeners = /* @__PURE__ */ Object.create(null);
    }
    function p(l) {
      n(function() {
        throw l;
      }, 0);
    }
    B.prototype.dispatchEvent = function(l) {
      l.target = this;
      var b = this._listeners[l.type];
      if (b != null)
        for (var w = b.length, m = 0; m < w; m += 1) {
          var I = b[m];
          try {
            typeof I.handleEvent == "function" ? I.handleEvent(l) : I.call(this, l);
          } catch (E) {
            p(E);
          }
        }
    }, B.prototype.addEventListener = function(l, b) {
      l = String(l);
      var w = this._listeners, m = w[l];
      m == null && (m = [], w[l] = m);
      for (var I = !1, E = 0; E < m.length; E += 1)
        m[E] === b && (I = !0);
      I || m.push(b);
    }, B.prototype.removeEventListener = function(l, b) {
      l = String(l);
      var w = this._listeners, m = w[l];
      if (m != null) {
        for (var I = [], E = 0; E < m.length; E += 1)
          m[E] !== b && I.push(m[E]);
        I.length === 0 ? delete w[l] : w[l] = I;
      }
    };
    function h(l) {
      this.type = l, this.target = void 0;
    }
    function y(l, b) {
      h.call(this, l), this.data = b.data, this.lastEventId = b.lastEventId;
    }
    y.prototype = Object.create(h.prototype);
    function f(l, b) {
      h.call(this, l), this.status = b.status, this.statusText = b.statusText, this.headers = b.headers;
    }
    f.prototype = Object.create(h.prototype);
    function C(l, b) {
      h.call(this, l), this.error = b.error;
    }
    C.prototype = Object.create(h.prototype);
    var _ = -1, A = 0, H = 1, G = 2, J = -1, z = 0, ee = 1, le = 2, se = 3, ye = /^text\/event\-stream(;.*)?$/i, Ce = 1e3, ht = 18e6, Ue = function(l, b) {
      var w = l == null ? b : parseInt(l, 10);
      return w !== w && (w = b), ge(w);
    }, ge = function(l) {
      return Math.min(Math.max(l, Ce), ht);
    }, Te = function(l, b, w) {
      try {
        typeof b == "function" && b.call(l, w);
      } catch (m) {
        p(m);
      }
    };
    function ce(l, b) {
      B.call(this), b = b || {}, this.onopen = void 0, this.onmessage = void 0, this.onerror = void 0, this.url = void 0, this.readyState = void 0, this.withCredentials = void 0, this.headers = void 0, this._close = void 0, Hn(this, l, b);
    }
    function Un() {
      return o != null && "withCredentials" in o.prototype || a == null ? new o() : new a();
    }
    var Mn = u != null && d != null && "body" in d.prototype;
    function Hn(l, b, w) {
      b = String(b);
      var m = Boolean(w.withCredentials), I = w.lastEventIdQueryParameterName || "lastEventId", E = ge(1e3), R = Ue(w.heartbeatTimeout, 45e3), F = "", $ = E, D = !1, U = 0, P = w.headers || {}, N = w.Transport, me = Mn && N == null ? void 0 : new M(N != null ? new N() : Un()), Me = N != null && typeof N != "string" ? new N() : me == null ? new L() : new he(), te = void 0, Y = 0, fe = _, xe = "", We = "", be = "", Xe = "", K = z, vt = 0, Ie = 0, Ln = function(W, V, re, ne) {
        if (fe === A)
          if (W === 200 && re != null && ye.test(re)) {
            fe = H, D = Date.now(), $ = E, l.readyState = H;
            var Z = new f("open", {
              status: W,
              statusText: V,
              headers: ne
            });
            l.dispatchEvent(Z), Te(l, l.onopen, Z);
          } else {
            var Q = "";
            W !== 200 ? (V && (V = V.replace(/\s+/g, " ")), Q = "EventSource's response has a status " + W + " " + V + " that is not 200. Aborting the connection.") : Q = "EventSource's response has a Content-Type specifying an unsupported type: " + (re == null ? "-" : re.replace(/\s+/g, " ")) + ". Aborting the connection.", yt();
            var Z = new f("error", {
              status: W,
              statusText: V,
              headers: ne
            });
            l.dispatchEvent(Z), Te(l, l.onerror, Z), console.error(Q);
          }
      }, Fn = function(W) {
        if (fe === H) {
          for (var V = -1, re = 0; re < W.length; re += 1) {
            var ne = W.charCodeAt(re);
            (ne === `
`.charCodeAt(0) || ne === "\r".charCodeAt(0)) && (V = re);
          }
          var Z = (V !== -1 ? Xe : "") + W.slice(0, V + 1);
          Xe = (V === -1 ? Xe : "") + W.slice(V + 1), W !== "" && (D = Date.now(), U += W.length);
          for (var Q = 0; Q < Z.length; Q += 1) {
            var ne = Z.charCodeAt(Q);
            if (K === J && ne === `
`.charCodeAt(0))
              K = z;
            else if (K === J && (K = z), ne === "\r".charCodeAt(0) || ne === `
`.charCodeAt(0)) {
              if (K !== z) {
                K === ee && (Ie = Q + 1);
                var we = Z.slice(vt, Ie - 1), _e = Z.slice(Ie + (Ie < Q && Z.charCodeAt(Ie) === " ".charCodeAt(0) ? 1 : 0), Q);
                we === "data" ? (xe += `
`, xe += _e) : we === "id" ? We = _e : we === "event" ? be = _e : we === "retry" ? (E = Ue(_e, E), $ = E) : we === "heartbeatTimeout" && (R = Ue(_e, R), Y !== 0 && (i(Y), Y = n(function() {
                  He();
                }, R)));
              }
              if (K === z) {
                if (xe !== "") {
                  F = We, be === "" && (be = "message");
                  var je = new y(be, {
                    data: xe.slice(1),
                    lastEventId: We
                  });
                  if (l.dispatchEvent(je), be === "open" ? Te(l, l.onopen, je) : be === "message" ? Te(l, l.onmessage, je) : be === "error" && Te(l, l.onerror, je), fe === G)
                    return;
                }
                xe = "", be = "";
              }
              K = ne === "\r".charCodeAt(0) ? J : z;
            } else
              K === z && (vt = Q, K = ee), K === ee ? ne === ":".charCodeAt(0) && (Ie = Q + 1, K = le) : K === le && (K = se);
          }
        }
      }, pr = function(W) {
        if (fe === H || fe === A) {
          fe = _, Y !== 0 && (i(Y), Y = 0), Y = n(function() {
            He();
          }, $), $ = ge(Math.min(E * 16, $ * 2)), l.readyState = A;
          var V = new C("error", { error: W });
          l.dispatchEvent(V), Te(l, l.onerror, V), W != null && console.error(W);
        }
      }, yt = function() {
        fe = G, te != null && (te.abort(), te = void 0), Y !== 0 && (i(Y), Y = 0), l.readyState = G;
      }, He = function() {
        if (Y = 0, fe !== _) {
          if (!D && te != null)
            pr(new Error("No activity within " + R + " milliseconds. " + (fe === A ? "No response received." : U + " chars received.") + " Reconnecting.")), te != null && (te.abort(), te = void 0);
          else {
            var W = Math.max((D || Date.now()) + R - Date.now(), 1);
            D = !1, Y = n(function() {
              He();
            }, W);
          }
          return;
        }
        D = !1, U = 0, Y = n(function() {
          He();
        }, R), fe = A, xe = "", be = "", We = F, Xe = "", vt = 0, Ie = 0, K = z;
        var V = b;
        if (b.slice(0, 5) !== "data:" && b.slice(0, 5) !== "blob:" && F !== "") {
          var re = b.indexOf("?");
          V = re === -1 ? b : b.slice(0, re + 1) + b.slice(re + 1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g, function(_e, je) {
            return je === I ? "" : _e;
          }), V += (b.indexOf("?") === -1 ? "?" : "&") + I + "=" + encodeURIComponent(F);
        }
        var ne = l.withCredentials, Z = {};
        Z.Accept = "text/event-stream";
        var Q = l.headers;
        if (Q != null)
          for (var we in Q)
            Object.prototype.hasOwnProperty.call(Q, we) && (Z[we] = Q[we]);
        try {
          te = Me.open(me, Ln, Fn, pr, V, ne, Z);
        } catch (_e) {
          throw yt(), _e;
        }
      };
      l.url = b, l.readyState = A, l.withCredentials = m, l.headers = P, l._close = yt, He();
    }
    ce.prototype = Object.create(B.prototype), ce.prototype.CONNECTING = A, ce.prototype.OPEN = H, ce.prototype.CLOSED = G, ce.prototype.close = function() {
      this._close();
    }, ce.CONNECTING = A, ce.OPEN = H, ce.CLOSED = G, ce.prototype.withCredentials = void 0;
    var lr = v;
    o != null && (v == null || !("withCredentials" in v.prototype)) && (lr = ce), function(l) {
      {
        var b = l(e);
        b !== void 0 && (t.exports = b);
      }
    }(function(l) {
      l.EventSourcePolyfill = ce, l.NativeEventSource = v, l.EventSource = lr;
    });
  })(typeof globalThis > "u" ? typeof window < "u" ? window : typeof self < "u" ? self : ue : globalThis);
})(go, rt);
var mo = rt, bo = mo.EventSourcePolyfill, wo = function(t, e) {
  return e.reduce(function(r, n) {
    return typeof t[n] > "u" || (r[n] = t[n]), r;
  }, {});
}, _o = function(t, e) {
  return Object.keys(e).concat(Object.keys(t)).reduce(function(r, n) {
    return r[n] = typeof t[n] > "u" ? e[n] : t[n], r;
  }, {});
};
function Ir(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ir(Object(r), !0).forEach(function(n) {
      Oo(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ir(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Oo(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Eo = X, So = Ve, Cr = So.Observable, Io = bo, Po = wo, Co = _o, To = fn, xo = 16e3 - 1200, Tr = Io, jo = ["includePreviousRevision", "includeResult", "visibility", "effectFormat", "tag"], Ro = {
  includeResult: !0
}, Ao = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = this.clientConfig, o = i.url, a = i.token, s = i.withCredentials, v = i.requestTagPrefix, c = n.tag && v ? [v, n.tag].join(".") : n.tag, g = Pr(Pr({}, Co(n, Ro)), {}, {
    tag: c
  }), u = Po(g, jo), d = To({
    query: e,
    params: r,
    options: u,
    tag: c
  }), O = "".concat(o).concat(this.getDataUrl("listen", d));
  if (O.length > xo)
    return new Cr(function(j) {
      return j.error(new Error("Query too large for listener"));
    });
  var x = g.events ? g.events : ["mutation"], S = x.indexOf("reconnect") !== -1, T = {};
  return (a || s) && (T.withCredentials = !0), a && (T.headers = {
    Authorization: "Bearer ".concat(a)
  }), new Cr(function(j) {
    var k = p(), q, M = !1;
    function oe() {
      M || (B(), !M && k.readyState === Tr.CLOSED && (L(), clearTimeout(q), q = setTimeout(h, 100)));
    }
    function ae(f) {
      j.error($o(f));
    }
    function he(f) {
      var C = ln(f);
      return C instanceof Error ? j.error(C) : j.next(C);
    }
    function ve(f) {
      M = !0, L(), j.complete();
    }
    function L() {
      k.removeEventListener("error", oe, !1), k.removeEventListener("channelError", ae, !1), k.removeEventListener("disconnect", ve, !1), x.forEach(function(f) {
        return k.removeEventListener(f, he, !1);
      }), k.close();
    }
    function B() {
      S && j.next({
        type: "reconnect"
      });
    }
    function p() {
      var f = new Tr(O, T);
      return f.addEventListener("error", oe, !1), f.addEventListener("channelError", ae, !1), f.addEventListener("disconnect", ve, !1), x.forEach(function(C) {
        return f.addEventListener(C, he, !1);
      }), f;
    }
    function h() {
      k = p();
    }
    function y() {
      M = !0, L();
    }
    return y;
  });
};
function ln(t) {
  try {
    var e = t.data && JSON.parse(t.data) || {};
    return Eo({
      type: t.type
    }, e);
  } catch (r) {
    return r;
  }
}
function $o(t) {
  if (t instanceof Error)
    return t;
  var e = ln(t);
  return e instanceof Error ? e : new Error(qo(e));
}
function qo(t) {
  return t.error ? t.error.description ? t.error.description : typeof t.error == "string" ? t.error : JSON.stringify(t.error, null, 2) : t.message || "Unknown listener error";
}
function xr(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Do = X, pn = Ve, Fe = pn.map, Et = pn.filter, St = Se, ko = sn, Uo = fn, jr = cn, Rr = rr, Mo = Ao, Ho = function(e, r) {
  var n = typeof e > "u" ? r : e;
  return e === !1 ? void 0 : n;
}, Lo = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return {
    dryRun: e.dryRun,
    returnIds: !0,
    returnDocuments: Ho(e.returnDocuments, !0),
    visibility: e.visibility || "sync",
    autoGenerateArrayKeys: e.autoGenerateArrayKeys,
    skipCrossDatasetReferenceValidation: e.skipCrossDatasetReferenceValidation
  };
}, It = function(e) {
  return e.type === "response";
}, Fo = function(e) {
  return e.body;
}, No = function(e, r) {
  return e.reduce(function(n, i) {
    return n[r(i)] = i, n;
  }, /* @__PURE__ */ Object.create(null));
}, Qe = function(e) {
  return e.toPromise();
}, Bo = 11264, zo = {
  listen: Mo,
  getDataUrl: function(e, r) {
    var n = this.clientConfig, i = St.hasDataset(n), o = "/".concat(e, "/").concat(i), a = r ? "".concat(o, "/").concat(r) : o;
    return "/data".concat(a).replace(/\/($|\?)/, "$1");
  },
  fetch: function(e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.filterResponse === !1 ? function(a) {
      return a;
    } : function(a) {
      return a.result;
    }, o = this._dataRequest("query", {
      query: e,
      params: r
    }, n).pipe(Fe(i));
    return this.isPromiseAPI() ? Qe(o) : o;
  },
  getDocument: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = {
      uri: this.getDataUrl("doc", e),
      json: !0,
      tag: r.tag
    }, i = this._requestObservable(n).pipe(Et(It), Fe(function(o) {
      return o.body.documents && o.body.documents[0];
    }));
    return this.isPromiseAPI() ? Qe(i) : i;
  },
  getDocuments: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = {
      uri: this.getDataUrl("doc", e.join(",")),
      json: !0,
      tag: r.tag
    }, i = this._requestObservable(n).pipe(Et(It), Fe(function(o) {
      var a = No(o.body.documents || [], function(s) {
        return s._id;
      });
      return e.map(function(s) {
        return a[s] || null;
      });
    }));
    return this.isPromiseAPI() ? Qe(i) : i;
  },
  create: function(e, r) {
    return this._create(e, "create", r);
  },
  createIfNotExists: function(e, r) {
    return St.requireDocumentId("createIfNotExists", e), this._create(e, "createIfNotExists", r);
  },
  createOrReplace: function(e, r) {
    return St.requireDocumentId("createOrReplace", e), this._create(e, "createOrReplace", r);
  },
  patch: function(e, r) {
    return new Rr(e, r, this);
  },
  delete: function(e, r) {
    return this.dataRequest("mutate", {
      mutations: [{
        delete: ko(e)
      }]
    }, r);
  },
  mutate: function(e, r) {
    var n = e instanceof Rr || e instanceof jr ? e.serialize() : e, i = Array.isArray(n) ? n : [n], o = r && r.transactionId;
    return this.dataRequest("mutate", {
      mutations: i,
      transactionId: o
    }, r);
  },
  transaction: function(e) {
    return new jr(e, this);
  },
  dataRequest: function(e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = this._dataRequest(e, r, n);
    return this.isPromiseAPI() ? Qe(i) : i;
  },
  _dataRequest: function(e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = e === "mutate", o = e === "query", a = !i && Uo(r), s = !i && a.length < Bo, v = s ? a : "", c = n.returnFirst, g = n.timeout, u = n.token, d = n.tag, O = n.headers, x = this.getDataUrl(e, v), S = {
      method: s ? "GET" : "POST",
      uri: x,
      json: !0,
      body: s ? void 0 : r,
      query: i && Lo(n),
      timeout: g,
      headers: O,
      token: u,
      tag: d,
      canUseCdn: o
    };
    return this._requestObservable(S).pipe(Et(It), Fe(Fo), Fe(function(T) {
      if (!i)
        return T;
      var j = T.results || [];
      if (n.returnDocuments)
        return c ? j[0] && j[0].document : j.map(function(M) {
          return M.document;
        });
      var k = c ? "documentId" : "documentIds", q = c ? j[0] && j[0].id : j.map(function(M) {
        return M.id;
      });
      return xr({
        transactionId: T.transactionId,
        results: j
      }, k, q);
    }));
  },
  _create: function(e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = xr({}, r, e), o = Do({
      returnFirst: !0,
      returnDocuments: !0
    }, n);
    return this.dataRequest("mutate", {
      mutations: [i]
    }, o);
  }
}, Vo = X, Wo = Se;
function dn(t) {
  this.request = t.request.bind(t);
}
Vo(dn.prototype, {
  create: function(e, r) {
    return this._modify("PUT", e, r);
  },
  edit: function(e, r) {
    return this._modify("PATCH", e, r);
  },
  delete: function(e) {
    return this._modify("DELETE", e);
  },
  list: function() {
    return this.request({
      uri: "/datasets"
    });
  },
  _modify: function(e, r, n) {
    return Wo.dataset(r), this.request({
      method: e,
      uri: "/datasets/".concat(r),
      body: n
    });
  }
});
var Xo = dn, Go = X;
function hn(t) {
  this.client = t;
}
Go(hn.prototype, {
  list: function() {
    return this.client.request({
      uri: "/projects"
    });
  },
  getById: function(e) {
    return this.client.request({
      uri: "/projects/".concat(e)
    });
  }
});
var Jo = hn, Qo = function(t) {
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push("".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(t[r])));
  return e.length > 0 ? "?".concat(e.join("&")) : "";
};
function Yo(t, e) {
  return ta(t) || ea(t, e) || Zo(t, e) || Ko();
}
function Ko() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zo(t, e) {
  if (t) {
    if (typeof t == "string")
      return Ar(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ar(t, e);
  }
}
function Ar(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function ea(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
        ;
    } catch (v) {
      o = !0, s = v;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function ta(t) {
  if (Array.isArray(t))
    return t;
}
var vn = X, yn = Ve, ra = yn.map, na = yn.filter, ia = Qo, Ye = Se;
function gn(t) {
  this.client = t;
}
function oa(t, e) {
  return typeof window > "u" || !(e instanceof window.File) ? t : vn({
    filename: t.preserveFilename === !1 ? void 0 : e.name,
    contentType: e.type
  }, t);
}
vn(gn.prototype, {
  /**
   * Upload an asset
   *
   * @param  {String} assetType `image` or `file`
   * @param  {File|Blob|Buffer|ReadableStream} body File to upload
   * @param  {Object}  opts Options for the upload
   * @param  {Boolean} opts.preserveFilename Whether or not to preserve the original filename (default: true)
   * @param  {String}  opts.filename Filename for this file (optional)
   * @param  {Number}  opts.timeout  Milliseconds to wait before timing the request out (default: 0)
   * @param  {String}  opts.contentType Mime type of the file
   * @param  {Array}   opts.extract Array of metadata parts to extract from image.
   *                                 Possible values: `location`, `exif`, `image`, `palette`
   * @param  {String}  opts.label Label
   * @param  {String}  opts.title Title
   * @param  {String}  opts.description Description
   * @param  {String}  opts.creditLine The credit to person(s) and/or organization(s) required by the supplier of the image to be used when published
   * @param  {Object}  opts.source Source data (when the asset is from an external service)
   * @param  {String}  opts.source.id The (u)id of the asset within the source, i.e. 'i-f323r1E'
   *                                  Required if source is defined
   * @param  {String}  opts.source.name The name of the source, i.e. 'unsplash'
   *                                  Required if source is defined
   * @param  {String}  opts.source.url A url to where to find the asset, or get more info about it in the source
   *                                  Optional
   * @return {Promise} Resolves with the created asset document
   */
  upload: function(e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Ye.validateAssetType(e);
    var i = n.extract || void 0;
    i && !i.length && (i = ["none"]);
    var o = Ye.hasDataset(this.client.clientConfig), a = e === "image" ? "images" : "files", s = oa(n, r), v = s.tag, c = s.label, g = s.title, u = s.description, d = s.creditLine, O = s.filename, x = s.source, S = {
      label: c,
      title: g,
      description: u,
      filename: O,
      meta: i,
      creditLine: d
    };
    x && (S.sourceId = x.id, S.sourceName = x.name, S.sourceUrl = x.url);
    var T = this.client._requestObservable({
      tag: v,
      method: "POST",
      timeout: s.timeout || 0,
      uri: "/assets/".concat(a, "/").concat(o),
      headers: s.contentType ? {
        "Content-Type": s.contentType
      } : {},
      query: S,
      body: r
    });
    return this.client.isPromiseAPI() ? T.pipe(na(function(j) {
      return j.type === "response";
    }), ra(function(j) {
      return j.body.document;
    })).toPromise() : T;
  },
  delete: function(e, r) {
    console.warn("client.assets.delete() is deprecated, please use client.delete(<document-id>)");
    var n = r || "";
    return /^(image|file)-/.test(n) ? e._id && (n = e._id) : n = "".concat(e, "-").concat(n), Ye.hasDataset(this.client.clientConfig), this.client.delete(n);
  },
  getImageUrl: function(e, r) {
    var n = e._ref || e;
    if (typeof n != "string")
      throw new Error("getImageUrl() needs either an object with a _ref, or a string with an asset document ID");
    if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(n))
      throw new Error('Unsupported asset ID "'.concat(n, '". URL generation only works for auto-generated IDs.'));
    var i = n.split("-"), o = Yo(i, 4), a = o[1], s = o[2], v = o[3];
    Ye.hasDataset(this.client.clientConfig);
    var c = this.client.clientConfig, g = c.projectId, u = c.dataset, d = r ? ia(r) : "";
    return "https://cdn.sanity.io/images/".concat(g, "/").concat(u, "/").concat(a, "-").concat(s, ".").concat(v).concat(d);
  }
});
var aa = gn, sa = X;
function mn(t) {
  this.client = t;
}
sa(mn.prototype, {
  getById: function(e) {
    return this.client.request({
      uri: "/users/".concat(e)
    });
  }
});
var ua = mn, ca = X;
function bn(t) {
  this.client = t;
}
ca(bn.prototype, {
  getLoginProviders: function() {
    return this.client.request({
      uri: "/auth/providers"
    });
  },
  logout: function() {
    return this.client.request({
      uri: "/auth/logout",
      method: "POST"
    });
  }
});
var fa = bn, Mt = {}, la = {
  get exports() {
    return Mt;
  },
  set exports(t) {
    Mt = t;
  }
}, pa = function() {
  var e = [];
  return {
    subscribe: r,
    publish: n
  };
  function r(i) {
    return e.push(i), function() {
      var a = e.indexOf(i);
      a > -1 && e.splice(a, 1);
    };
  }
  function n() {
    for (var i = 0; i < e.length; i++)
      e[i].apply(null, arguments);
  }
}, da = function(t) {
  var e = function(n, i) {
    for (var o = n === "onError", a = i, s = arguments.length, v = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++)
      v[c - 2] = arguments[c];
    for (var g = 0; g < t[n].length; g++) {
      var u = t[n][g];
      if (a = u.apply(void 0, [a].concat(v)), o && !a)
        break;
    }
    return a;
  };
  return e;
}, ha = function(e, r) {
  if (r = r.split(":")[0], e = +e, !e)
    return !1;
  switch (r) {
    case "http":
    case "ws":
      return e !== 80;
    case "https":
    case "wss":
      return e !== 443;
    case "ftp":
      return e !== 21;
    case "gopher":
      return e !== 70;
    case "file":
      return !1;
  }
  return e !== 0;
}, nr = {}, va = Object.prototype.hasOwnProperty, ya;
function $r(t) {
  try {
    return decodeURIComponent(t.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function qr(t) {
  try {
    return encodeURIComponent(t);
  } catch {
    return null;
  }
}
function ga(t) {
  for (var e = /([^=?#&]+)=?([^&]*)/g, r = {}, n; n = e.exec(t); ) {
    var i = $r(n[1]), o = $r(n[2]);
    i === null || o === null || i in r || (r[i] = o);
  }
  return r;
}
function ma(t, e) {
  e = e || "";
  var r = [], n, i;
  typeof e != "string" && (e = "?");
  for (i in t)
    if (va.call(t, i)) {
      if (n = t[i], !n && (n === null || n === ya || isNaN(n)) && (n = ""), i = qr(i), n = qr(n), i === null || n === null)
        continue;
      r.push(i + "=" + n);
    }
  return r.length ? e + r.join("&") : "";
}
nr.stringify = ma;
nr.parse = ga;
var wn = ha, ct = nr, ba = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, _n = /[\n\r\t]/g, wa = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, On = /:\d+$/, _a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, Oa = /^[a-zA-Z]:/;
function ir(t) {
  return (t || "").toString().replace(ba, "");
}
var Ht = [
  ["#", "hash"],
  // Extract from the back.
  ["?", "query"],
  // Extract from the back.
  function(e, r) {
    return pe(r.protocol) ? e.replace(/\\/g, "/") : e;
  },
  ["/", "pathname"],
  // Extract from the back.
  ["@", "auth", 1],
  // Extract from the front.
  [NaN, "host", void 0, 1, 1],
  // Set left over value.
  [/:(\d*)$/, "port", void 0, 1],
  // RegExp the back.
  [NaN, "hostname", void 0, 1, 1]
  // Set left over.
], Dr = { hash: 1, query: 1 };
function En(t) {
  var e;
  typeof window < "u" ? e = window : typeof ue < "u" ? e = ue : typeof self < "u" ? e = self : e = {};
  var r = e.location || {};
  t = t || r;
  var n = {}, i = typeof t, o;
  if (t.protocol === "blob:")
    n = new de(unescape(t.pathname), {});
  else if (i === "string") {
    n = new de(t, {});
    for (o in Dr)
      delete n[o];
  } else if (i === "object") {
    for (o in t)
      o in Dr || (n[o] = t[o]);
    n.slashes === void 0 && (n.slashes = wa.test(t.href));
  }
  return n;
}
function pe(t) {
  return t === "file:" || t === "ftp:" || t === "http:" || t === "https:" || t === "ws:" || t === "wss:";
}
function Sn(t, e) {
  t = ir(t), t = t.replace(_n, ""), e = e || {};
  var r = _a.exec(t), n = r[1] ? r[1].toLowerCase() : "", i = !!r[2], o = !!r[3], a = 0, s;
  return i ? o ? (s = r[2] + r[3] + r[4], a = r[2].length + r[3].length) : (s = r[2] + r[4], a = r[2].length) : o ? (s = r[3] + r[4], a = r[3].length) : s = r[4], n === "file:" ? a >= 2 && (s = s.slice(2)) : pe(n) ? s = r[4] : n ? i && (s = s.slice(2)) : a >= 2 && pe(e.protocol) && (s = r[4]), {
    protocol: n,
    slashes: i || pe(n),
    slashesCount: a,
    rest: s
  };
}
function Ea(t, e) {
  if (t === "")
    return e;
  for (var r = (e || "/").split("/").slice(0, -1).concat(t.split("/")), n = r.length, i = r[n - 1], o = !1, a = 0; n--; )
    r[n] === "." ? r.splice(n, 1) : r[n] === ".." ? (r.splice(n, 1), a++) : a && (n === 0 && (o = !0), r.splice(n, 1), a--);
  return o && r.unshift(""), (i === "." || i === "..") && r.push(""), r.join("/");
}
function de(t, e, r) {
  if (t = ir(t), t = t.replace(_n, ""), !(this instanceof de))
    return new de(t, e, r);
  var n, i, o, a, s, v, c = Ht.slice(), g = typeof e, u = this, d = 0;
  for (g !== "object" && g !== "string" && (r = e, e = null), r && typeof r != "function" && (r = ct.parse), e = En(e), i = Sn(t || "", e), n = !i.protocol && !i.slashes, u.slashes = i.slashes || n && e.slashes, u.protocol = i.protocol || e.protocol || "", t = i.rest, (i.protocol === "file:" && (i.slashesCount !== 2 || Oa.test(t)) || !i.slashes && (i.protocol || i.slashesCount < 2 || !pe(u.protocol))) && (c[3] = [/(.*)/, "pathname"]); d < c.length; d++) {
    if (a = c[d], typeof a == "function") {
      t = a(t, u);
      continue;
    }
    o = a[0], v = a[1], o !== o ? u[v] = t : typeof o == "string" ? (s = o === "@" ? t.lastIndexOf(o) : t.indexOf(o), ~s && (typeof a[2] == "number" ? (u[v] = t.slice(0, s), t = t.slice(s + a[2])) : (u[v] = t.slice(s), t = t.slice(0, s)))) : (s = o.exec(t)) && (u[v] = s[1], t = t.slice(0, s.index)), u[v] = u[v] || n && a[3] && e[v] || "", a[4] && (u[v] = u[v].toLowerCase());
  }
  r && (u.query = r(u.query)), n && e.slashes && u.pathname.charAt(0) !== "/" && (u.pathname !== "" || e.pathname !== "") && (u.pathname = Ea(u.pathname, e.pathname)), u.pathname.charAt(0) !== "/" && pe(u.protocol) && (u.pathname = "/" + u.pathname), wn(u.port, u.protocol) || (u.host = u.hostname, u.port = ""), u.username = u.password = "", u.auth && (s = u.auth.indexOf(":"), ~s ? (u.username = u.auth.slice(0, s), u.username = encodeURIComponent(decodeURIComponent(u.username)), u.password = u.auth.slice(s + 1), u.password = encodeURIComponent(decodeURIComponent(u.password))) : u.username = encodeURIComponent(decodeURIComponent(u.auth)), u.auth = u.password ? u.username + ":" + u.password : u.username), u.origin = u.protocol !== "file:" && pe(u.protocol) && u.host ? u.protocol + "//" + u.host : "null", u.href = u.toString();
}
function Sa(t, e, r) {
  var n = this;
  switch (t) {
    case "query":
      typeof e == "string" && e.length && (e = (r || ct.parse)(e)), n[t] = e;
      break;
    case "port":
      n[t] = e, wn(e, n.protocol) ? e && (n.host = n.hostname + ":" + e) : (n.host = n.hostname, n[t] = "");
      break;
    case "hostname":
      n[t] = e, n.port && (e += ":" + n.port), n.host = e;
      break;
    case "host":
      n[t] = e, On.test(e) ? (e = e.split(":"), n.port = e.pop(), n.hostname = e.join(":")) : (n.hostname = e, n.port = "");
      break;
    case "protocol":
      n.protocol = e.toLowerCase(), n.slashes = !r;
      break;
    case "pathname":
    case "hash":
      if (e) {
        var i = t === "pathname" ? "/" : "#";
        n[t] = e.charAt(0) !== i ? i + e : e;
      } else
        n[t] = e;
      break;
    case "username":
    case "password":
      n[t] = encodeURIComponent(e);
      break;
    case "auth":
      var o = e.indexOf(":");
      ~o ? (n.username = e.slice(0, o), n.username = encodeURIComponent(decodeURIComponent(n.username)), n.password = e.slice(o + 1), n.password = encodeURIComponent(decodeURIComponent(n.password))) : n.username = encodeURIComponent(decodeURIComponent(e));
  }
  for (var a = 0; a < Ht.length; a++) {
    var s = Ht[a];
    s[4] && (n[s[1]] = n[s[1]].toLowerCase());
  }
  return n.auth = n.password ? n.username + ":" + n.password : n.username, n.origin = n.protocol !== "file:" && pe(n.protocol) && n.host ? n.protocol + "//" + n.host : "null", n.href = n.toString(), n;
}
function Ia(t) {
  (!t || typeof t != "function") && (t = ct.stringify);
  var e, r = this, n = r.host, i = r.protocol;
  i && i.charAt(i.length - 1) !== ":" && (i += ":");
  var o = i + (r.protocol && r.slashes || pe(r.protocol) ? "//" : "");
  return r.username ? (o += r.username, r.password && (o += ":" + r.password), o += "@") : r.password ? (o += ":" + r.password, o += "@") : r.protocol !== "file:" && pe(r.protocol) && !n && r.pathname !== "/" && (o += "@"), (n[n.length - 1] === ":" || On.test(r.hostname) && !r.port) && (n += ":"), o += n + r.pathname, e = typeof r.query == "object" ? t(r.query) : r.query, e && (o += e.charAt(0) !== "?" ? "?" + e : e), r.hash && (o += r.hash), o;
}
de.prototype = { set: Sa, toString: Ia };
de.extractProtocol = Sn;
de.location = En;
de.trimLeft = ir;
de.qs = ct;
var Pa = de, Pt = X, Ca = Pa, Ta = typeof navigator > "u" ? !1 : navigator.product === "ReactNative", xa = Object.prototype.hasOwnProperty, Lt = {
  timeout: Ta ? 6e4 : 12e4
}, ja = function(t) {
  var e = typeof t == "string" ? Pt({
    url: t
  }, Lt) : Pt({}, Lt, t), r = Ca(
    e.url,
    {},
    // Don't use current browser location
    !0
    // Parse query strings
  );
  return e.timeout = In(e.timeout), e.query && (r.query = Pt({}, r.query, Aa(e.query))), e.method = e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase(), e.url = r.toString(Ra), e;
};
function Ra(t) {
  var e = [];
  for (var r in t)
    xa.call(t, r) && n(r, t[r]);
  return e.length ? e.join("&") : "";
  function n(i, o) {
    Array.isArray(o) ? o.forEach(function(a) {
      return n(i, a);
    }) : e.push([i, o].map(encodeURIComponent).join("="));
  }
}
function In(t) {
  if (t === !1 || t === 0)
    return !1;
  if (t.connect || t.socket)
    return t;
  var e = Number(t);
  return isNaN(e) ? In(Lt.timeout) : {
    connect: e,
    socket: e
  };
}
function Aa(t) {
  var e = {};
  for (var r in t)
    t[r] !== void 0 && (e[r] = t[r]);
  return e;
}
var $a = /^https?:\/\//i, qa = function(t) {
  if (!$a.test(t.url))
    throw new Error('"'.concat(t.url, '" is not a valid URL'));
}, Ft = {}, Da = {
  get exports() {
    return Ft;
  },
  set exports(t) {
    Ft = t;
  }
}, kr = /^(?:(?:(?:([^:\/#\?]+:)?(?:(?:\/\/)((?:((?:[^:@\/#\?]+)(?:\:(?:[^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/, ka = {
  regex: kr,
  parse: function(t) {
    var e = kr.exec(t);
    return e ? {
      protocol: (e[1] || "").toLowerCase() || void 0,
      hostname: (e[5] || "").toLowerCase() || void 0,
      port: e[6] || void 0
    } : {};
  }
}, Ur = ka, Ua = function(t, e, r) {
  if (t === e)
    return !0;
  var n = Ur.parse(t, !1, !0), i = Ur.parse(e, !1, !0), o = n.port | 0 || (n.protocol === "https" ? 443 : 80), a = i.port | 0 || (i.protocol === "https" ? 443 : 80), s = {
    proto: n.protocol === i.protocol,
    hostname: n.hostname === i.hostname,
    port: o === a
  };
  return s.proto && s.hostname && (s.port || r);
}, Ct = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, Ma = function(t) {
  return Object.prototype.toString.call(t) === "[object Array]";
}, Ha = function(t) {
  if (!t)
    return {};
  for (var e = {}, r = Ct(t).split(`
`), n = 0; n < r.length; n++) {
    var i = r[n], o = i.indexOf(":"), a = Ct(i.slice(0, o)).toLowerCase(), s = Ct(i.slice(o + 1));
    typeof e[a] > "u" ? e[a] = s : Ma(e[a]) ? e[a].push(s) : e[a] = [e[a], s];
  }
  return e;
};
function ke() {
  this.readyState = 0;
}
ke.prototype.open = function(t, e) {
  this._method = t, this._url = e, this._resHeaders = "", this.readyState = 1, this.onreadystatechange();
};
ke.prototype.abort = function() {
  this._controller && this._controller.abort();
};
ke.prototype.getAllResponseHeaders = function() {
  return this._resHeaders;
};
ke.prototype.setRequestHeader = function(t, e) {
  this._headers = this._headers || {}, this._headers[t] = e;
};
ke.prototype.send = function(t) {
  var e = this, r = this._controller = typeof AbortController == "function" && new AbortController(), n = this.responseType !== "arraybuffer", i = {
    method: this._method,
    headers: this._headers,
    signal: r && r.signal,
    body: t
  };
  typeof window < "u" && (i.credentials = this.withCredentials ? "include" : "omit"), fetch(this._url, i).then(function(o) {
    return o.headers.forEach(function(a, s) {
      e._resHeaders += "".concat(s, ": ").concat(a, `\r
`);
    }), e.status = o.status, e.statusText = o.statusText, e.readyState = 3, n ? o.text() : o.arrayBuffer();
  }).then(function(o) {
    n ? e.responseText = o : e.response = o, e.readyState = 4, e.onreadystatechange();
  }).catch(function(o) {
    if (o.name === "AbortError") {
      e.onabort();
      return;
    }
    e.onerror(o);
  });
};
var La = ke, Fa = Ua, Na = Ha, Mr = La, Ba = function() {
}, Ee = typeof window > "u" ? void 0 : window, Hr = Ee ? "xhr" : "fetch", ft = typeof XMLHttpRequest == "function" ? XMLHttpRequest : Ba, za = "withCredentials" in new ft(), Va = typeof XDomainRequest > "u" ? void 0 : XDomainRequest, Pn = za ? ft : Va;
Ee || (ft = Mr, Pn = Mr);
var Wa = function(t, e) {
  var r = t.options, n = t.applyMiddleware("finalizeOptions", r), i = {}, o = Ee && Ee.location && !Fa(Ee.location.href, n.url), a = t.applyMiddleware("interceptRequest", void 0, {
    adapter: Hr,
    context: t
  });
  if (a) {
    var s = setTimeout(e, 0, null, a), v = function() {
      return clearTimeout(s);
    };
    return {
      abort: v
    };
  }
  var c = o ? new Pn() : new ft(), g = Ee && Ee.XDomainRequest && c instanceof Ee.XDomainRequest, u = n.headers, d = n.timeout, O = !1, x = !1, S = !1;
  c.onerror = ae, c.ontimeout = ae, c.onabort = function() {
    oe(!0), O = !0;
  }, c.onprogress = function() {
  };
  var T = g ? "onload" : "onreadystatechange";
  if (c[T] = function() {
    M(), !(O || c.readyState !== 4 && !g) && c.status !== 0 && ve();
  }, c.open(
    n.method,
    n.url,
    !0
    // Always async
  ), c.withCredentials = !!n.withCredentials, u && c.setRequestHeader)
    for (var j in u)
      u.hasOwnProperty(j) && c.setRequestHeader(j, u[j]);
  else if (u && g)
    throw new Error("Headers cannot be set on an XDomainRequest object");
  return n.rawBody && (c.responseType = "arraybuffer"), t.applyMiddleware("onRequest", {
    options: n,
    adapter: Hr,
    request: c,
    context: t
  }), c.send(n.body || null), d && (i.connect = setTimeout(function() {
    return q("ETIMEDOUT");
  }, d.connect)), {
    abort: k
  };
  function k() {
    O = !0, c && c.abort();
  }
  function q(L) {
    S = !0, c.abort();
    var B = new Error(L === "ESOCKETTIMEDOUT" ? "Socket timed out on request to ".concat(n.url) : "Connection timed out on request to ".concat(n.url));
    B.code = L, t.channels.error.publish(B);
  }
  function M() {
    d && (oe(), i.socket = setTimeout(function() {
      return q("ESOCKETTIMEDOUT");
    }, d.socket));
  }
  function oe(L) {
    (L || O || c.readyState >= 2 && i.connect) && clearTimeout(i.connect), i.socket && clearTimeout(i.socket);
  }
  function ae(L) {
    if (!x) {
      oe(!0), x = !0, c = null;
      var B = L || new Error("Network error while attempting to reach ".concat(n.url));
      B.isNetworkError = !0, B.request = n, e(B);
    }
  }
  function he() {
    var L = c.status, B = c.statusText;
    if (g && L === void 0)
      L = 200;
    else {
      if (L > 12e3 && L < 12156)
        return ae();
      L = c.status === 1223 ? 204 : c.status, B = c.status === 1223 ? "No Content" : B;
    }
    return {
      body: c.response || c.responseText,
      url: n.url,
      method: n.method,
      headers: g ? {} : Na(c.getAllResponseHeaders()),
      statusCode: L,
      statusMessage: B
    };
  }
  function ve() {
    if (!(O || x || S)) {
      if (c.status === 0) {
        ae(new Error("Unknown XHR error"));
        return;
      }
      oe(), x = !0, e(null, he());
    }
  }
};
(function(t) {
  t.exports = Wa;
})(Da);
var Xa = pa, Ga = da, Ja = ja, Qa = qa, Ya = Ft, Ka = ["request", "response", "progress", "error", "abort"], Lr = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"], Za = function t() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ya, n = [], i = Lr.reduce(function(a, s) {
    return a[s] = a[s] || [], a;
  }, {
    processOptions: [Ja],
    validateOptions: [Qa]
  });
  function o(a) {
    var s = Ka.reduce(function(S, T) {
      return S[T] = Xa(), S;
    }, {}), v = Ga(i), c = v("processOptions", a);
    v("validateOptions", c);
    var g = {
      options: c,
      channels: s,
      applyMiddleware: v
    }, u = null, d = s.request.subscribe(function(S) {
      u = r(S, function(T, j) {
        return x(T, j, S);
      });
    });
    s.abort.subscribe(function() {
      d(), u && u.abort();
    });
    var O = v("onReturn", s, g);
    return O === s && s.request.publish(g), O;
    function x(S, T, j) {
      var k = S, q = T;
      if (!k)
        try {
          q = v("onResponse", T, j);
        } catch (M) {
          q = null, k = M;
        }
      k = k && v("onError", k, j), k ? s.error.publish(k) : q && s.response.publish(q);
    }
  }
  return o.use = function(s) {
    if (!s)
      throw new Error("Tried to add middleware that resolved to falsey value");
    if (typeof s == "function")
      throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
    if (s.onReturn && i.onReturn.length > 0)
      throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
    return Lr.forEach(function(v) {
      s[v] && i[v].push(s[v]);
    }), n.push(s), o;
  }, o.clone = function() {
    return t(n);
  }, e.forEach(o.use), o;
};
(function(t) {
  t.exports = Za;
})(la);
var Nt = {}, Ne = {
  get exports() {
    return Nt;
  },
  set exports(t) {
    Nt = t;
  }
};
typeof globalThis < "u" ? Ne.exports = globalThis : typeof window < "u" ? Ne.exports = window : typeof ue < "u" ? Ne.exports = ue : typeof self < "u" ? Ne.exports = self : Ne.exports = {};
var es = Nt, Fr = X, ts = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.implementation || es.Observable;
  if (!e)
    throw new Error("`Observable` is not available in global scope, and no implementation was passed");
  return {
    onReturn: function(n, i) {
      return new e(function(o) {
        return n.error.subscribe(function(a) {
          return o.error(a);
        }), n.progress.subscribe(function(a) {
          return o.next(Fr({
            type: "progress"
          }, a));
        }), n.response.subscribe(function(a) {
          o.next(Fr({
            type: "response"
          }, a)), o.complete();
        }), n.request.publish(i), function() {
          return n.abort.publish();
        };
      });
    }
  };
};
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var rs = function(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
};
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var ns = rs;
function Nr(t) {
  return ns(t) === !0 && Object.prototype.toString.call(t) === "[object Object]";
}
var is = function(e) {
  var r, n;
  return !(Nr(e) === !1 || (r = e.constructor, typeof r != "function") || (n = r.prototype, Nr(n) === !1) || n.hasOwnProperty("isPrototypeOf") === !1);
};
function Bt(t) {
  return Bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Bt(t);
}
var Br = X, os = is, as = ["boolean", "string", "number"], ss = function(e) {
  return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}, us = function() {
  return {
    processOptions: function(e) {
      var r = e.body;
      if (!r)
        return e;
      var n = typeof r.pipe == "function", i = !n && !ss(r) && (as.indexOf(Bt(r)) !== -1 || Array.isArray(r) || os(r));
      return i ? Br({}, e, {
        body: JSON.stringify(e.body),
        headers: Br({}, e.headers, {
          "Content-Type": "application/json"
        })
      }) : e;
    }
  };
}, Tt = X, cs = function(t) {
  return {
    onResponse: function(r) {
      var n = r.headers["content-type"] || "", i = t && t.force || n.indexOf("application/json") !== -1;
      return !r.body || !n || !i ? r : Tt({}, r, {
        body: fs(r.body)
      });
    },
    processOptions: function(r) {
      return Tt({}, r, {
        headers: Tt({
          Accept: "application/json"
        }, r.headers)
      });
    }
  };
};
function fs(t) {
  try {
    return JSON.parse(t);
  } catch (e) {
    throw e.message = "Failed to parsed response body as JSON: ".concat(e.message), e;
  }
}
var zt = {}, ls = {
  get exports() {
    return zt;
  },
  set exports(t) {
    zt = t;
  }
}, ps = function() {
  return {
    onRequest: function(e) {
      if (e.adapter !== "xhr")
        return;
      var r = e.request, n = e.context;
      "upload" in r && "onprogress" in r.upload && (r.upload.onprogress = i("upload")), "onprogress" in r && (r.onprogress = i("download"));
      function i(o) {
        return function(a) {
          var s = a.lengthComputable ? a.loaded / a.total * 100 : -1;
          n.channels.progress.publish({
            stage: o,
            percent: s,
            total: a.total,
            loaded: a.loaded,
            lengthComputable: a.lengthComputable
          });
        };
      }
    }
  };
};
(function(t) {
  t.exports = ps;
})(ls);
var or = {}, nt = {}, ds = {
  get exports() {
    return nt;
  },
  set exports(t) {
    nt = t;
  }
};
(function(t, e) {
  var r = typeof Reflect < "u" ? Reflect.construct : void 0, n = Object.defineProperty, i = Error.captureStackTrace;
  i === void 0 && (i = function(c) {
    var g = new Error();
    n(c, "stack", {
      configurable: !0,
      get: function() {
        var d = g.stack;
        return n(this, "stack", {
          configurable: !0,
          value: d,
          writable: !0
        }), d;
      },
      set: function(d) {
        n(c, "stack", {
          configurable: !0,
          value: d,
          writable: !0
        });
      }
    });
  });
  function o(v) {
    v !== void 0 && n(this, "message", {
      configurable: !0,
      value: v,
      writable: !0
    });
    var c = this.constructor.name;
    c !== void 0 && c !== this.name && n(this, "name", {
      configurable: !0,
      value: c,
      writable: !0
    }), i(this, this.constructor);
  }
  o.prototype = Object.create(Error.prototype, {
    // See: https://github.com/JsCommunity/make-error/issues/4
    constructor: {
      configurable: !0,
      value: o,
      writable: !0
    }
  });
  var a = function() {
    function v(g, u) {
      return n(g, "name", {
        configurable: !0,
        value: u
      });
    }
    try {
      var c = function() {
      };
      if (v(c, "foo"), c.name === "foo")
        return v;
    } catch {
    }
  }();
  function s(v, c) {
    if (c == null || c === Error)
      c = o;
    else if (typeof c != "function")
      throw new TypeError("super_ should be a function");
    var g;
    if (typeof v == "string")
      g = v, v = r !== void 0 ? function() {
        return r(c, arguments, this.constructor);
      } : function() {
        c.apply(this, arguments);
      }, a !== void 0 && (a(v, g), g = void 0);
    else if (typeof v != "function")
      throw new TypeError("constructor should be either a string or a function");
    v.super_ = v.super = c;
    var u = {
      constructor: {
        configurable: !0,
        value: v,
        writable: !0
      }
    };
    return g !== void 0 && (u.name = {
      configurable: !0,
      value: g,
      writable: !0
    }), v.prototype = Object.create(c.prototype, u), v;
  }
  e = t.exports = s, e.BaseError = o;
})(ds, nt);
var Cn = nt, Tn = X;
function ar(t) {
  var e = xn(t);
  ar.super.call(this, e.message), Tn(this, e);
}
function sr(t) {
  var e = xn(t);
  sr.super.call(this, e.message), Tn(this, e);
}
function xn(t) {
  var e = t.body, r = {
    response: t,
    statusCode: t.statusCode,
    responseBody: vs(e, t)
  };
  return e.error && e.message ? (r.message = "".concat(e.error, " - ").concat(e.message), r) : e.error && e.error.description ? (r.message = e.error.description, r.details = e.error, r) : (r.message = e.error || e.message || hs(t), r);
}
function hs(t) {
  var e = t.statusMessage ? " ".concat(t.statusMessage) : "";
  return "".concat(t.method, "-request to ").concat(t.url, " resulted in HTTP ").concat(t.statusCode).concat(e);
}
function vs(t, e) {
  var r = (e.headers["content-type"] || "").toLowerCase(), n = r.indexOf("application/json") !== -1;
  return n ? JSON.stringify(t, null, 2) : t;
}
Cn(ar);
Cn(sr);
or.ClientError = ar;
or.ServerError = sr;
var ys = [], gs = Mt, ms = X, bs = ts, ws = us, _s = cs, Os = zt, Es = Ve, Ss = Es.Observable, jn = or, Rn = jn.ClientError, An = jn.ServerError, Is = {
  onResponse: function(e) {
    if (e.statusCode >= 500)
      throw new An(e);
    if (e.statusCode >= 400)
      throw new Rn(e);
    return e;
  }
}, Ps = {
  onResponse: function(e) {
    var r = e.headers["x-sanity-warning"], n = Array.isArray(r) ? r : [r];
    return n.filter(Boolean).forEach(function(i) {
      return console.warn(i);
    }), e;
  }
}, Cs = ys, Ts = Cs.concat([Ps, ws(), _s(), Os(), Is, bs({
  implementation: Ss
})]), $n = gs(Ts);
function lt(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $n;
  return e(ms({
    maxRedirects: 0
  }, t));
}
lt.defaultRequester = $n;
lt.ClientError = Rn;
lt.ServerError = An;
var xs = lt, zr = X, js = "X-Sanity-Project-ID", Rs = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = {}, n = e.token || t.token;
  n && (r.Authorization = "Bearer ".concat(n)), !e.useGlobalApi && !t.useProjectHostname && t.projectId && (r[js] = t.projectId);
  var i = Boolean(typeof e.withCredentials > "u" ? t.token || t.withCredentials : e.withCredentials), o = typeof e.timeout > "u" ? t.timeout : e.timeout;
  return zr({}, e, {
    headers: zr({}, r, e.headers || {}),
    timeout: typeof o > "u" ? 5 * 60 * 1e3 : o,
    proxy: e.proxy || t.proxy,
    json: !0,
    withCredentials: i
  });
}, qn = {}, As = "https://docs.sanity.io/help/", Dn = function(e) {
  return As + e;
}, pt = {}, $s = function(t) {
  var e = !1, r;
  return function() {
    return e || (r = t.apply(void 0, arguments), e = !0), r;
  };
}, ur = Dn, qs = $s, cr = function(e) {
  return (
    // eslint-disable-next-line no-console
    qs(function() {
      for (var r, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
        i[o] = arguments[o];
      return (r = console).warn.apply(r, [e.join(" ")].concat(i));
    })
  );
};
pt.printCdnWarning = cr(["You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and", "cheaper. Think about it! For more info, see ".concat(ur("js-client-cdn-configuration"), "."), "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating", "the client."]);
pt.printBrowserTokenWarning = cr(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", "See ".concat(ur("js-client-browser-token"), " for more information and how to hide this warning.")]);
pt.printNoApiVersionSpecifiedWarning = cr(["Using the Sanity client without specifying an API version is deprecated.", "See ".concat(ur("js-client-api-version"))]);
(function(t) {
  var e = X, r = Dn, n = Se, i = pt, o = "apicdn.sanity.io", a = {
    apiHost: "https://api.sanity.io",
    apiVersion: "1",
    useProjectHostname: !0,
    isPromiseAPI: !0
  }, s = ["localhost", "127.0.0.1", "0.0.0.0"], v = function(g) {
    return s.indexOf(g) !== -1;
  };
  t.defaultConfig = a, t.initConfig = function(c, g) {
    var u = e({}, g, c);
    u.apiVersion || i.printNoApiVersionSpecifiedWarning();
    var d = e({}, a, u), O = d.useProjectHostname;
    if (typeof Promise > "u") {
      var x = r("js-client-promise-polyfill");
      throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(x));
    }
    if (O && !d.projectId)
      throw new Error("Configuration must contain `projectId`");
    var S = typeof window < "u" && window.location && window.location.hostname, T = S && v(window.location.hostname);
    S && T && d.token && d.ignoreBrowserTokenWarning !== !0 ? i.printBrowserTokenWarning() : typeof d.useCdn > "u" && i.printCdnWarning(), O && n.projectId(d.projectId), d.dataset && n.dataset(d.dataset), "requestTagPrefix" in d && (d.requestTagPrefix = d.requestTagPrefix ? n.requestTag(d.requestTagPrefix).replace(/\.+$/, "") : void 0), d.apiVersion = "".concat(d.apiVersion).replace(/^v/, ""), d.isDefaultApi = d.apiHost === a.apiHost, d.useCdn = Boolean(d.useCdn) && !d.withCredentials, t.validateApiVersion(d.apiVersion);
    var j = d.apiHost.split("://", 2), k = j[0], q = j[1], M = d.isDefaultApi ? o : q;
    return d.useProjectHostname ? (d.url = "".concat(k, "://").concat(d.projectId, ".").concat(q, "/v").concat(d.apiVersion), d.cdnUrl = "".concat(k, "://").concat(d.projectId, ".").concat(M, "/v").concat(d.apiVersion)) : (d.url = "".concat(d.apiHost, "/v").concat(d.apiVersion), d.cdnUrl = d.url), d;
  }, t.validateApiVersion = function(g) {
    if (!(g === "1" || g === "X")) {
      var u = new Date(g), d = /^\d{4}-\d{2}-\d{2}$/.test(g) && u instanceof Date && u.getTime() > 0;
      if (!d)
        throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
    }
  };
})(qn);
function Vr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Vr(Object(r), !0).forEach(function(n) {
      Ds(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Vr(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Ds(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var qe = X, fr = Ve, ks = fr.Observable, Us = fr.map, Ms = fr.filter, Hs = rr, Ls = cn, Fs = zo, Ns = Xo, Bs = Jo, zs = aa, Vs = ua, Ws = fa, dt = xs, Xs = Rs, kn = qn, Gs = kn.defaultConfig, Js = kn.initConfig, Qs = Se, Ys = function(e) {
  return e.toPromise();
};
function ie() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gs;
  if (!(this instanceof ie))
    return new ie(t);
  if (this.config(t), this.assets = new zs(this), this.datasets = new Ns(this), this.projects = new Bs(this), this.users = new Vs(this), this.auth = new Ws(this), this.clientConfig.isPromiseAPI) {
    var e = qe({}, this.clientConfig, {
      isPromiseAPI: !1
    });
    this.observable = new ie(e);
  }
}
qe(ie.prototype, Fs);
qe(ie.prototype, {
  clone: function() {
    return new ie(this.config());
  },
  config: function(e) {
    if (typeof e > "u")
      return qe({}, this.clientConfig);
    if (this.clientConfig && this.clientConfig.allowReconfigure === !1)
      throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
    if (this.observable) {
      var r = qe({}, e, {
        isPromiseAPI: !1
      });
      this.observable.config(r);
    }
    return this.clientConfig = Js(e, this.clientConfig || {}), this;
  },
  withConfig: function(e) {
    return new ie(xt(xt({}, this.config()), e));
  },
  getUrl: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = r ? this.clientConfig.cdnUrl : this.clientConfig.url;
    return "".concat(n, "/").concat(e.replace(/^\//, ""));
  },
  isPromiseAPI: function() {
    return this.clientConfig.isPromiseAPI;
  },
  _requestObservable: function(e) {
    var r = this, n = e.url || e.uri, i = typeof e.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(e.method || "GET") >= 0 && n.indexOf("/data/") === 0 : e.canUseCdn, o = this.clientConfig.useCdn && i, a = e.tag && this.clientConfig.requestTagPrefix ? [this.clientConfig.requestTagPrefix, e.tag].join(".") : e.tag || this.clientConfig.requestTagPrefix;
    a && (e.query = xt({
      tag: Qs.requestTag(a)
    }, e.query));
    var s = Xs(this.clientConfig, qe({}, e, {
      url: this.getUrl(n, o)
    }));
    return new ks(function(v) {
      return dt(s, r.clientConfig.requester).subscribe(v);
    });
  },
  request: function(e) {
    var r = this._requestObservable(e).pipe(Ms(function(n) {
      return n.type === "response";
    }), Us(function(n) {
      return n.body;
    }));
    return this.isPromiseAPI() ? Ys(r) : r;
  }
});
ie.Patch = Hs;
ie.Transaction = Ls;
ie.ClientError = dt.ClientError;
ie.ServerError = dt.ServerError;
ie.requester = dt.defaultRequester;
function iu() {
  return globalThis.sanityClient || console.error("Sanity client has not been initialized correctly"), globalThis.sanityClient;
}

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const global = await iu().fetch(`*[_type=='global'][0]`);
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title ? `${title} | ${global.site_title}` : global.site_title}</title>    
	${renderHead($$result)}</head>
	<body>
		<main>
			${renderSlot($$result, $$slots["default"])}
		</main>
	</body></html>`;
}, "/Users/bricechristian/Documents/GitHub/jeangillesphotography/frontend/src/layouts/Layout.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<section>
		<div class="container py-12">
			<h1>Hello world.</h1>
		</div>
	</section>` })}`;
}, "/Users/bricechristian/Documents/GitHub/jeangillesphotography/frontend/src/pages/index.astro");

const $$file = "/Users/bricechristian/Documents/GitHub/jeangillesphotography/frontend/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
