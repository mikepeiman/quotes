!function(t, n) {
  typeof exports == "object" && typeof module != "undefined" ? n(exports) : typeof define == "function" && define.amd ? define(["exports"], n) : n((t = t || self).Honeycomb = {});
}(globalThis, function(t) {
  var n = function(t2, n2) {
    return t2(n2 = { exports: {} }, n2.exports), n2.exports;
  }(function(t2, n2) {
    /*! axis.js v1.2.1 | (c) 2016 @toddmotto | https://github.com/toddmotto/axis */
    t2.exports = function() {
      var t3 = {}, n3 = "Array Object String Date RegExp Function Boolean Number Null Undefined".split(" ");
      function e2() {
        return Object.prototype.toString.call(this).slice(8, -1);
      }
      for (var r2 = n3.length; r2--; )
        t3["is" + n3[r2]] = function(t4) {
          return function(n4) {
            return e2.call(n4) === t4;
          };
        }(n3[r2]);
      return t3;
    }();
  }), e = n.isObject, r = n.isNumber, i = n.isArray, s = n.isString;
  function o(t2, n2) {
    return n2 + t2 * (1 & n2) >> 1;
  }
  function u(t2, n2) {
    return (t2 % n2 + n2) % n2;
  }
  function c(t2, n2) {
    if (!/^(N|S)?(E|W)?$/i.test(t2))
      throw new Error(`Invalid compass direction: ${t2}. Choose from E, SE, S, SW, W, NW, N or NE.`);
    if (n2 = n2.toLowerCase(), t2 = t2.toUpperCase(), n2 === "pointy" && ["N", "S"].includes(t2))
      throw new Error(`Direction ${t2} is ambiguous for pointy hexes. Did you mean ${t2}E or ${t2}W?`);
    if (n2 === "flat" && ["E", "W"].includes(t2))
      throw new Error(`Direction ${t2} is ambiguous for flat hexes. Did you mean N${t2} or S${t2}?`);
    return { pointy: { E: 0, SE: 1, SW: 2, W: 3, NW: 4, NE: 5 }, flat: { SE: 0, S: 1, SW: 2, NW: 3, N: 4, NE: 5 } }[n2][t2];
  }
  function a(t2, n2) {
    return r(t2) || r(n2) ? r(t2) ? r(n2) || (n2 = t2) : t2 = n2 : t2 = n2 = 0, { x: t2, y: n2 };
  }
  const f = [{ q: 1, r: 0, s: -1 }, { q: 0, r: 1, s: -1 }, { q: -1, r: 1, s: 0 }, { q: -1, r: 0, s: 1 }, { q: 0, r: -1, s: 1 }, { q: 1, r: -1, s: 0 }], h = [{ q: 2, r: -1, s: -1 }, { q: 1, r: 1, s: -2 }, { q: -1, r: 2, s: -1 }, { q: -2, r: 1, s: 1 }, { q: -1, r: -1, s: 2 }, { q: 1, r: -2, s: 1 }], l = { q: 1e-6, r: 1e-6, s: -2e-6 };
  function d(t2) {
    return r(t2) ? this[t2] : this[this.indexOf(t2)];
  }
  function x({ isValidHex: t2 }) {
    return function(n2, e2) {
      if (!t2(e2))
        return this;
      const i2 = r(n2) ? n2 : this.indexOf(n2);
      return i2 < 0 ? this.push(e2) : this[i2] = e2, this;
    };
  }
  function y(t2, n2) {
    const e2 = t2.distance(n2), r2 = 1 / Math.max(e2, 1);
    let i2 = [];
    for (let s2 = 0; s2 <= e2; s2++) {
      const e3 = t2.nudge().lerp(n2.nudge(), r2 * s2).round();
      i2.push(this.get(e3));
    }
    return i2;
  }
  function p({ isValidHex: t2 }) {
    return function(n2, e2 = 0, r2 = true) {
      if (!t2(n2))
        throw new Error(`Invalid center hex: ${n2}.`);
      if (!this.get(n2))
        throw new Error(`Center hex with coordinates ${n2} not present in grid.`);
      let i2 = [];
      for (let t3 = -e2; t3 <= e2; t3++)
        for (let s2 = Math.max(-e2, -t3 - e2); s2 <= Math.min(e2, -t3 + e2); s2++) {
          const e3 = this.get(n2.cubeToCartesian({ q: n2.q + t3, r: n2.r + s2 }));
          n2.equals(e3) && !r2 || i2.push(e3);
        }
      return i2.filter(Boolean);
    };
  }
  function b({ isValidHex: t2, signedModulo: n2, compassToNumberDirection: e2 }) {
    return function(r2, i2 = "all", o2 = false) {
      if (!t2(r2))
        throw new Error(`Invalid hex: ${r2}.`);
      const u2 = o2 ? h : f;
      return i2 === "all" && (i2 = [0, 1, 2, 3, 4, 5]), [].concat(i2).map((t3) => {
        s(t3) && (t3 = e2(t3, r2.orientation)), (t3 < 0 || t3 > 5) && (t3 = n2(t3, 6));
        const { q: i3, r: o3 } = u2[t3];
        return this.get(r2.cubeToCartesian({ q: r2.q + i3, r: r2.r + o3 }));
      });
    };
  }
  function g() {
    if (this.length === 0)
      return 0;
    const { 0: t2, length: n2, [n2 - 1]: e2 } = this[0].isPointy() ? [...this].sort((t3, n3) => n3.s - t3.s || t3.q - n3.q) : [...this].sort((t3, n3) => t3.q - n3.q);
    return e2.toPoint().x - t2.toPoint().x + this[0].width();
  }
  function q() {
    if (this.length === 0)
      return 0;
    const { 0: t2, length: n2, [n2 - 1]: e2 } = this[0].isPointy() ? [...this].sort((t3, n3) => t3.r - n3.r) : [...this].sort((t3, n3) => n3.s - t3.s || t3.r - n3.r);
    return e2.toPoint().y - t2.toPoint().y + this[0].height();
  }
  function P({ Hex: t2 }) {
    return function(n2, e2) {
      return t2().fromPoint(n2, e2);
    };
  }
  function m({ Grid: t2, Hex: n2 }) {
    return function({ width: e2, height: r2, start: i2, direction: s2 = 1, onCreate: o2 = () => {
    } }) {
      i2 = n2(i2);
      const [u2, c2, a2] = { 1: ["q", "r", "s"], 3: ["r", "s", "q"], 5: ["s", "q", "r"] }[s2], f2 = new t2();
      f2.width = e2, f2.height = r2, f2.start = i2, f2.direction = s2;
      for (let t3 = 0; t3 < e2; t3++)
        for (let e3 = 0; e3 < r2; e3++) {
          const r3 = n2({ [u2]: t3 + i2[u2], [c2]: e3 + i2[c2], [a2]: -t3 - e3 + i2[a2] });
          o2(r3, f2), f2.push(r3);
        }
      return f2;
    };
  }
  function w({ Grid: t2, Hex: n2 }) {
    return function({ size: e2, start: r2, direction: i2 = 1, onCreate: s2 = () => {
    } }) {
      r2 = n2(r2);
      const o2 = { 1: { rStart: () => 0, rEnd: (t3) => e2 - t3 }, 5: { rStart: (t3) => e2 - t3, rEnd: () => e2 + 1 } }, { rStart: u2, rEnd: c2 } = o2[i2], a2 = new t2();
      a2.size = e2, a2.start = r2, a2.direction = i2;
      for (let t3 = 0; t3 < e2; t3++)
        for (let e3 = u2(t3); e3 < c2(t3); e3++) {
          const i3 = n2({ q: t3 + r2.q, r: e3 + r2.r, s: -t3 - e3 + r2.s });
          s2(i3, a2), a2.push(i3);
        }
      return a2;
    };
  }
  function H({ Grid: t2, Hex: n2 }) {
    return function({ radius: e2, center: r2, onCreate: i2 = () => {
    } }) {
      r2 = n2(r2);
      const s2 = new t2();
      s2.radius = e2, s2.center = r2;
      for (let t3 = -e2; t3 <= e2; t3++) {
        const o2 = Math.max(-e2, -t3 - e2), u2 = Math.min(e2, -t3 + e2);
        for (let e3 = o2; e3 <= u2; e3++) {
          const o3 = n2({ q: t3 + r2.q, r: e3 + r2.r, s: -t3 - e3 + r2.s });
          i2(o3, s2), s2.push(o3);
        }
      }
      return s2;
    };
  }
  function O({ Grid: t2, Hex: n2, compassToNumberDirection: e2, signedModulo: r2 }) {
    return function({ width: i2, height: u2, start: c2, direction: a2 = n2().isPointy() ? 0 : 1, onCreate: f2 = () => {
    } }) {
      c2 = n2(c2), s(a2) && (a2 = e2(a2, c2.orientation)), (a2 < 0 || a2 > 5) && (a2 = r2(a2, 6));
      const [h2, l2, d2] = [["q", "r", "s"], ["r", "q", "s"], ["r", "s", "q"], ["s", "r", "q"], ["s", "q", "r"], ["q", "s", "r"]][a2], [x2, y2] = c2.isPointy() ? [i2, u2] : [u2, i2], p2 = new t2();
      p2.width = i2, p2.height = u2, p2.start = c2, p2.direction = a2;
      for (let t3 = 0; t3 < y2; t3++) {
        const e3 = o(c2.offset, t3);
        for (let r3 = -e3; r3 < x2 - e3; r3++) {
          const e4 = n2({ [h2]: r3 + c2[h2], [l2]: t3 + c2[l2], [d2]: -r3 - t3 + c2[d2] });
          f2(e4, p2), p2.push(e4);
        }
      }
      return p2;
    };
  }
  function j({ Grid: t2, Hex: n2 }) {
    return function({ radius: e2, center: r2, onCreate: i2 = () => {
    } }) {
      r2 = n2(r2);
      const s2 = new t2();
      s2.radius = e2, s2.center = r2;
      const { q: o2, r: u2, s: c2 } = r2;
      let a2 = n2({ q: o2, r: u2 - e2, s: c2 + e2 });
      for (let t3 = 0; t3 < 6; t3++)
        for (let r3 = 0; r3 < e2; r3++) {
          i2(a2, s2), s2.push(a2);
          const { q: e3, r: r4, s: o3 } = f[t3];
          a2 = n2({ q: a2.q + e3, r: a2.r + r4, s: a2.s + o3 });
        }
      return s2;
    };
  }
  function M({ Grid: t2, Hex: n2 }) {
    return function({ radius: e2, center: r2, onCreate: i2 = () => {
    } }) {
      r2 = n2(r2);
      let s2 = new t2();
      i2(r2, s2), s2.push(r2);
      for (let t3 = 1; t3 <= e2; t3++)
        s2 = s2.concat(this.ring({ radius: t3, center: r2, onCreate: i2 }));
      return s2.radius = e2, s2.center = r2, s2;
    };
  }
  function E({ Point: t2 }) {
    return function(n2, e2) {
      let r2;
      return { x: r2, y: e2 } = t2(n2, e2), t2(this.x + r2, this.y + e2);
    };
  }
  function C({ Point: t2 }) {
    return function(n2, e2) {
      let r2;
      return { x: r2, y: e2 } = t2(n2, e2), t2(this.x - r2, this.y - e2);
    };
  }
  function N({ Point: t2 }) {
    return function(n2, e2) {
      let r2;
      return { x: r2, y: e2 } = t2(n2, e2), t2(this.x * r2, this.y * e2);
    };
  }
  function S({ Point: t2 }) {
    return function(n2, e2) {
      let r2;
      return { x: r2, y: e2 } = t2(n2, e2), t2(this.x / r2, this.y / e2);
    };
  }
  function R({ ensureXY: t2 }) {
    const n2 = { add: E({ Point: s2 }), subtract: C({ Point: s2 }), multiply: N({ Point: s2 }), divide: S({ Point: s2 }) };
    function s2(s3, o2) {
      let u2;
      return u2 = r(s3) ? t2(s3, o2) : i(s3) ? t2(...s3) : e(s3) ? t2(s3.x, s3.y) : t2(0), Object.assign(Object.create(n2), u2);
    }
    return s2;
  }
  const v = R({ ensureXY: a });
  class $ extends Array {
    static isValidHex(t2) {
      return (t2 || {}).__isHoneycombHex === true;
    }
    fill() {
      throw new TypeError("Grid.prototype.fill is not implemented");
    }
    includes(t2, n2 = 0) {
      return !!(this.indexOf(t2, n2) + 1);
    }
    indexOf(t2, n2 = 0) {
      const { length: e2 } = this;
      let r2 = Number(n2);
      for (t2 = v(t2), r2 = Math.max(r2 >= 0 ? r2 : e2 + r2, 0); r2 < e2; r2++)
        if (this[r2].equals(t2))
          return r2;
      return -1;
    }
    lastIndexOf(t2, n2 = this.length - 1) {
      const { length: e2 } = this;
      let r2 = Number(n2);
      for (t2 = v(t2), r2 = r2 >= 0 ? Math.min(r2, e2 - 1) : e2 + r2; r2 >= 0; r2--)
        if (this[r2].equals(t2))
          return r2;
      return -1;
    }
    push(...t2) {
      return super.push(...t2.filter($.isValidHex));
    }
    splice(t2, n2, ...e2) {
      return n2 == null ? super.splice(t2) : super.splice(t2, n2, ...e2.filter($.isValidHex));
    }
    unshift(...t2) {
      return super.unshift(...t2.filter($.isValidHex));
    }
  }
  function G(t2, n2, e2) {
    return n2 in t2 ? Object.defineProperty(t2, n2, { value: e2, enumerable: true, configurable: true, writable: true }) : t2[n2] = e2, t2;
  }
  function T(t2, n2) {
    var e2 = Object.keys(t2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(t2);
      n2 && (r2 = r2.filter(function(n3) {
        return Object.getOwnPropertyDescriptor(t2, n3).enumerable;
      })), e2.push.apply(e2, r2);
    }
    return e2;
  }
  function D(t2) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var e2 = arguments[n2] != null ? arguments[n2] : {};
      n2 % 2 ? T(Object(e2), true).forEach(function(n3) {
        G(t2, n3, e2[n3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(e2)) : T(Object(e2)).forEach(function(n3) {
        Object.defineProperty(t2, n3, Object.getOwnPropertyDescriptor(e2, n3));
      });
    }
    return t2;
  }
  function z(t2, n2) {
    if (t2 == null)
      return {};
    var e2, r2, i2 = function(t3, n3) {
      if (t3 == null)
        return {};
      var e3, r3, i3 = {}, s3 = Object.keys(t3);
      for (r3 = 0; r3 < s3.length; r3++)
        e3 = s3[r3], n3.indexOf(e3) >= 0 || (i3[e3] = t3[e3]);
      return i3;
    }(t2, n2);
    if (Object.getOwnPropertySymbols) {
      var s2 = Object.getOwnPropertySymbols(t2);
      for (r2 = 0; r2 < s2.length; r2++)
        e2 = s2[r2], n2.indexOf(e2) >= 0 || Object.prototype.propertyIsEnumerable.call(t2, e2) && (i2[e2] = t2[e2]);
    }
    return i2;
  }
  function V({ Hex: t2 }) {
    return function(...n2) {
      return Object.assign(this, t2(...n2));
    };
  }
  function W() {
    return { x: this.x, y: this.y };
  }
  function I() {
    return { q: this.q, r: this.r, s: this.s };
  }
  function _({ q: t2, r: n2 }) {
    let e2, r2;
    return this.isPointy() ? (e2 = t2 + o(this.offset, n2), r2 = n2) : (e2 = t2, r2 = n2 + o(this.offset, t2)), { x: e2, y: r2 };
  }
  function X() {
    return this.orientation.toLowerCase() === "pointy";
  }
  function Y() {
    return this.orientation.toLowerCase() === "flat";
  }
  function B() {
    const { xRadius: t2 } = this.size;
    return this.isPointy() ? t2 * Math.sqrt(3) : 2 * t2;
  }
  function A() {
    const { yRadius: t2 } = this.size;
    return this.isPointy() ? 2 * t2 : t2 * Math.sqrt(3);
  }
  function L({ Point: t2 }) {
    return function() {
      const n2 = this.width(), e2 = this.height(), { x: r2, y: i2 } = this.origin;
      return this.isPointy() ? [t2(n2 - r2, 0.25 * e2 - i2), t2(n2 - r2, 0.75 * e2 - i2), t2(0.5 * n2 - r2, e2 - i2), t2(0 - r2, 0.75 * e2 - i2), t2(0 - r2, 0.25 * e2 - i2), t2(0.5 * n2 - r2, 0 - i2)] : [t2(n2 - r2, 0.5 * e2 - i2), t2(0.75 * n2 - r2, e2 - i2), t2(0.25 * n2 - r2, e2 - i2), t2(0 - r2, 0.5 * e2 - i2), t2(0.25 * n2 - r2, 0 - i2), t2(0.75 * n2 - r2, 0 - i2)];
    };
  }
  function k({ Point: t2 }) {
    return function() {
      const { x: n2, y: e2 } = this.origin;
      return t2(this.width() / 2 - n2, this.height() / 2 - e2);
    };
  }
  function F({ Point: t2 }) {
    return function() {
      const { q: n2, r: e2, size: r2 } = this, { xRadius: i2, yRadius: s2 } = r2;
      let o2, u2;
      return this.isPointy() ? (o2 = i2 * Math.sqrt(3) * (n2 + e2 / 2), u2 = 3 * s2 / 2 * e2) : (o2 = 3 * i2 / 2 * n2, u2 = s2 * Math.sqrt(3) * (e2 + n2 / 2)), t2(o2, u2);
    };
  }
  function U({ Point: t2, Hex: n2 }) {
    return function(e2, r2) {
      const { xRadius: i2, yRadius: s2 } = this.size;
      let o2, u2, c2;
      return { x: o2, y: r2 } = t2(e2, r2).subtract(this.center()), this.isPointy() ? (u2 = Math.sqrt(3) * o2 / (3 * i2) - r2 / (3 * s2), c2 = 2 / 3 * (r2 / s2)) : (u2 = 2 / 3 * (o2 / i2), c2 = Math.sqrt(3) * r2 / (3 * s2) - o2 / (3 * i2)), n2({ q: u2, r: c2, s: -u2 - c2 }).round();
    };
  }
  function J({ Hex: t2, Point: n2 }) {
    return function(e2) {
      const { x: r2, y: i2 } = n2(e2);
      return t2(this.x + r2, this.y + i2, D({}, this));
    };
  }
  function K({ Hex: t2, Point: n2 }) {
    return function(e2) {
      const { x: r2, y: i2 } = n2(e2);
      return t2(this.x - r2, this.y - i2, D({}, this));
    };
  }
  function Q({ Point: t2 }) {
    return function(n2) {
      if (n2 != null && (i(n2) || r(n2.x) && r(n2.y))) {
        const { x: e2, y: r2 } = t2(n2);
        return this.x === e2 && this.y === r2;
      }
      return false;
    };
  }
  function Z(t2) {
    return Math.max(Math.abs(this.q - t2.q), Math.abs(this.r - t2.r), Math.abs(this.s - t2.s));
  }
  function tt({ Hex: t2 }) {
    return function() {
      let { q: n2, r: e2, s: r2 } = this, i2 = Math.round(n2), s2 = Math.round(e2), o2 = Math.round(r2);
      const u2 = Math.abs(n2 - i2), c2 = Math.abs(e2 - s2), a2 = Math.abs(r2 - o2);
      return u2 > c2 && u2 > a2 ? i2 = -s2 - o2 : c2 > a2 ? s2 = -i2 - o2 : o2 = -i2 - s2, t2(D(D({}, this), {}, { q: i2, r: s2, s: o2 }));
    };
  }
  function nt({ Hex: t2 }) {
    return function(n2, e2) {
      const r2 = this.q * (1 - e2) + n2.q * e2, i2 = this.r * (1 - e2) + n2.r * e2;
      return t2(D(D({}, this), {}, { q: r2, r: i2, s: -r2 - i2 }));
    };
  }
  function et({ Hex: t2 }) {
    return function() {
      const { q: n2, r: e2, s: r2 } = l;
      return t2(D(D({}, this), {}, { q: this.q + n2, r: this.r + e2, s: this.s + r2 }));
    };
  }
  function rt() {
    return `${this.x},${this.y}`;
  }
  const it = { thirdCoordinate: function(t2, n2) {
    return -t2 - n2;
  } };
  const st = R({ ensureXY: a }), ot = function({ ensureXY: t2, normalizeRadiuses: n2, Point: s2 }) {
    return function(u2 = {}) {
      const c2 = function({ Point: t3 }) {
        return function(n3, e2) {
          let r2, i2, s3;
          return { x: r2, y: e2 } = t3(n3, e2), this.isPointy() ? (i2 = r2 - o(this.offset, e2), s3 = e2) : (i2 = r2, s3 = e2 - o(this.offset, r2)), { q: i2, r: s3, s: -i2 - s3 };
        };
      }({ Point: s2 }), a2 = { __isHoneycombHex: true, orientation: "pointy", origin: 0, size: { xRadius: 1, yRadius: 1 }, offset: -1, get q() {
        return this.cartesianToCube(this).q;
      }, get r() {
        return this.cartesianToCube(this).r;
      }, get s() {
        return this.cartesianToCube(this).s;
      }, add: J({ Hex: h2, Point: s2 }), cartesian: W, cartesianToCube: c2, center: k({ Point: s2 }), coordinates: W, corners: L({ Point: s2 }), cube: I, cubeToCartesian: _, distance: Z, equals: Q({ Point: s2 }), fromPoint: U({ Point: s2, Hex: h2 }), height: A, isFlat: Y, isPointy: X, lerp: nt({ Hex: h2 }), nudge: et({ Hex: h2 }), round: tt({ Hex: h2 }), set: V({ Hex: h2 }), subtract: K({ Hex: h2, Point: s2 }), toCartesian: _, toCube: c2, toPoint: F({ Point: s2 }), toString: rt, width: B }, f2 = Object.assign(a2, u2);
      function h2(n3, s3, o2 = {}) {
        let u3;
        if (e(n3)) {
          let { q: t3, r: e2, s: i2 } = n3, c3 = z(n3, ["q", "r", "s"]);
          if (r(t3) || r(e2) || r(i2)) {
            const n4 = t3 + e2 + i2;
            if (Number.isNaN(n4) || n4 > 1e-12)
              throw new Error(`Cube coordinates must have a sum of 0. q: ${t3}, r: ${e2}, s: ${i2}, sum: ${t3 + e2 + i2}.`);
            ({ x: u3, y: s3 } = f2.cubeToCartesian({ q: t3, r: e2, s: i2 }));
          } else
            ({ x: u3, y: s3 } = n3);
          o2 = c3;
        } else
          i(n3) ? ([u3, s3] = n3, o2 = {}) : u3 = n3;
        return Object.assign(Object.create(f2), Object.assign(o2, t2(u3, s3)));
      }
      return f2.size = n2(f2.size, f2.isPointy()), f2.origin = s2(f2.origin), Object.assign(h2, it, { toJSON: () => u2 }), h2;
    };
  }({ ensureXY: a, normalizeRadiuses: function(t2, n2) {
    if (e(t2)) {
      if (r(t2.xRadius) && r(t2.yRadius))
        return t2;
      const { width: e2, height: i2 } = t2;
      if (r(e2) && r(i2))
        return n2 ? { xRadius: e2 / Math.sqrt(3), yRadius: i2 / 2 } : { xRadius: e2 / 2, yRadius: i2 / Math.sqrt(3) };
    }
    if (r(t2))
      return { xRadius: t2, yRadius: t2 };
    throw new Error(`Invalid size: ${t2}. Set it as a number or as an object containing width and height.`);
  }, Point: st }), ut = function({ extendHex: t2, Grid: n2, Point: e2 }) {
    const { isValidHex: s2 } = n2;
    return function(o2 = t2()) {
      function a2(...t3) {
        return t3 = t3.filter(Boolean), i(t3[0]) && (t3[0].length === 0 || t3[0].some((t4) => !r(t4))) && (t3 = t3[0]), new n2(...t3.map((t4) => o2(t4)));
      }
      return Object.assign(a2, { Hex: o2, isValidHex: s2, pointToHex: P({ Point: e2, Hex: o2 }), parallelogram: m({ Grid: n2, Hex: o2 }), triangle: w({ Grid: n2, Hex: o2 }), hexagon: H({ Grid: n2, Hex: o2 }), rectangle: O({ Grid: n2, Hex: o2, compassToNumberDirection: c, signedModulo: u }), ring: j({ Grid: n2, Hex: o2 }), spiral: M({ Grid: n2, Hex: o2 }) }), Object.assign(n2.prototype, { get: d, hexesBetween: y, hexesInRange: p({ isValidHex: s2 }), neighborsOf: b({ isValidHex: s2, signedModulo: u, compassToNumberDirection: c }), pointHeight: q, pointWidth: g, set: x({ isValidHex: s2 }) }), a2;
    };
  }({ extendHex: ot, Grid: $, Point: st });
  t.Point = st, t.defineGrid = ut, t.extendHex = ot, Object.defineProperty(t, "__esModule", { value: true });
});
