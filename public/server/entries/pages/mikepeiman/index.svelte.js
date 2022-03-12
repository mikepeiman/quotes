import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, e as escape, b as subscribe, v as validate_component, j as each, k as add_attribute } from "../../../chunks/index-e675dbce.js";
import { p as page } from "../../../chunks/stores-60451e84.js";
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
var MS = "millisecond";
var S = "second";
var MIN = "minute";
var H = "hour";
var D = "day";
var W = "week";
var M = "month";
var Q = "quarter";
var Y = "year";
var DATE = "date";
var FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
var INVALID_DATE_STRING = "Invalid Date";
var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
var en = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var padStart = function padStart2(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length)
    return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};
var padZoneStr = function padZoneStr2(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return "" + (negMinutes <= 0 ? "+" : "-") + padStart(hourOffset, 2, "0") + ":" + padStart(minuteOffset, 2, "0");
};
var monthDiff = function monthDiff2(a, b) {
  if (a.date() < b.date())
    return -monthDiff2(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};
var absFloor = function absFloor2(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};
var prettyUnit = function prettyUnit2(u) {
  var special = {
    M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H,
    m: MIN,
    s: S,
    ms: MS,
    Q
  };
  return special[u] || String(u || "").toLowerCase().replace(/s$/, "");
};
var isUndefined = function isUndefined2(s) {
  return s === void 0;
};
var U = {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};
var L = "en";
var Ls = {};
Ls[L] = en;
var isDayjs = function isDayjs2(d) {
  return d instanceof Dayjs;
};
var parseLocale = function parseLocale2(preset, object, isLocal) {
  var l;
  if (!preset)
    return L;
  if (typeof preset === "string") {
    if (Ls[preset]) {
      l = preset;
    }
    if (object) {
      Ls[preset] = object;
      l = preset;
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }
  if (!isLocal && l)
    L = l;
  return l || !isLocal && L;
};
var dayjs = function dayjs2(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  }
  var cfg = typeof c === "object" ? c : {};
  cfg.date = date;
  cfg.args = arguments;
  return new Dayjs(cfg);
};
var wrapper = function wrapper2(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset
  });
};
var Utils = U;
Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;
var parseDate = function parseDate2(cfg) {
  var date = cfg.date, utc = cfg.utc;
  if (date === null)
    return new Date(NaN);
  if (Utils.u(date))
    return new Date();
  if (date instanceof Date)
    return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);
    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || "0").substring(0, 3);
      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
};
var Dayjs = /* @__PURE__ */ function() {
  function Dayjs2(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg);
  }
  var _proto = Dayjs2.prototype;
  _proto.parse = function parse(cfg) {
    this.$d = parseDate(cfg);
    this.$x = cfg.x || {};
    this.init();
  };
  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  };
  _proto.$utils = function $utils() {
    return Utils;
  };
  _proto.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };
  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };
  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };
  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };
  _proto.$g = function $g(input, get, set) {
    if (Utils.u(input))
      return this[get];
    return this.set(set, input);
  };
  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1e3);
  };
  _proto.valueOf = function valueOf() {
    return this.$d.getTime();
  };
  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);
    var instanceFactory = function instanceFactory2(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };
    var instanceFactorySet = function instanceFactorySet2(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply(_this.toDate("s"), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
    };
    var $W = this.$W, $M = this.$M, $D = this.$D;
    var utcPad = "set" + (this.$u ? "UTC" : "");
    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
      case W: {
        var weekStart = this.$locale().weekStart || 0;
        var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
        return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
      }
      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);
      case H:
        return instanceFactorySet(utcPad + "Minutes", 1);
      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);
      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);
      default:
        return this.clone();
    }
  };
  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };
  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? "UTC" : "");
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;
    if (unit === M || unit === Y) {
      var date = this.clone().set(DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name)
      this.$d[name](arg);
    this.init();
    return this;
  };
  _proto.set = function set(string, _int2) {
    return this.clone().$set(string, _int2);
  };
  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };
  _proto.add = function add(number, units) {
    var _this2 = this, _C$MIN$C$H$C$S$unit;
    number = Number(number);
    var unit = Utils.p(units);
    var instanceFactorySet = function instanceFactorySet2(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };
    if (unit === M) {
      return this.set(M, this.$M + number);
    }
    if (unit === Y) {
      return this.set(Y, this.$y + number);
    }
    if (unit === D) {
      return instanceFactorySet(1);
    }
    if (unit === W) {
      return instanceFactorySet(7);
    }
    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1;
    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };
  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };
  _proto.format = function format(formatStr) {
    var _this3 = this;
    var locale = this.$locale();
    if (!this.isValid())
      return locale.invalidDate || INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H, $m = this.$m, $M = this.$M;
    var weekdays = locale.weekdays, months = locale.months, meridiem = locale.meridiem;
    var getShort = function getShort2(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].substr(0, length);
    };
    var get$H = function get$H2(num) {
      return Utils.s($H % 12 || 12, num, "0");
    };
    var meridiemFunc = meridiem || function(hour, minute, isLowercase) {
      var m = hour < 12 ? "AM" : "PM";
      return isLowercase ? m.toLowerCase() : m;
    };
    var matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, "0"),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, "0"),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, "0"),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, "0"),
      SSS: Utils.s(this.$ms, 3, "0"),
      Z: zoneStr
    };
    return str.replace(REGEX_FORMAT, function(match, $1) {
      return $1 || matches[match] || zoneStr.replace(":", "");
    });
  };
  _proto.utcOffset = function utcOffset() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };
  _proto.diff = function diff(input, units, _float) {
    var _C$Y$C$M$C$Q$C$W$C$D$;
    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff2 = this - that;
    var result = Utils.m(this, that);
    result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _C$Y$C$M$C$Q$C$W$C$D$[Y] = result / 12, _C$Y$C$M$C$Q$C$W$C$D$[M] = result, _C$Y$C$M$C$Q$C$W$C$D$[Q] = result / 3, _C$Y$C$M$C$Q$C$W$C$D$[W] = (diff2 - zoneDelta) / MILLISECONDS_A_WEEK, _C$Y$C$M$C$Q$C$W$C$D$[D] = (diff2 - zoneDelta) / MILLISECONDS_A_DAY, _C$Y$C$M$C$Q$C$W$C$D$[H] = diff2 / MILLISECONDS_A_HOUR, _C$Y$C$M$C$Q$C$W$C$D$[MIN] = diff2 / MILLISECONDS_A_MINUTE, _C$Y$C$M$C$Q$C$W$C$D$[S] = diff2 / MILLISECONDS_A_SECOND, _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff2;
    return _float ? result : Utils.a(result);
  };
  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };
  _proto.$locale = function $locale() {
    return Ls[this.$L];
  };
  _proto.locale = function locale(preset, object) {
    if (!preset)
      return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName)
      that.$L = nextLocaleName;
    return that;
  };
  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };
  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };
  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };
  _proto.toISOString = function toISOString() {
    return this.$d.toISOString();
  };
  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };
  return Dayjs2;
}();
var proto = Dayjs.prototype;
dayjs.prototype = proto;
[["$ms", MS], ["$s", S], ["$m", MIN], ["$H", H], ["$W", D], ["$M", M], ["$y", Y], ["$D", DATE]].forEach(function(g) {
  proto[g[1]] = function(input) {
    return this.$g(input, g[0], g[1]);
  };
});
dayjs.extend = function(plugin, option) {
  if (!plugin.$i) {
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }
  return dayjs;
};
dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;
dayjs.unix = function(timestamp) {
  return dayjs(timestamp * 1e3);
};
dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};
var relativeTime = function(o, c, d) {
  o = o || {};
  var proto2 = c.prototype;
  var relObj = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  d.en.relativeTime = relObj;
  proto2.fromToBase = function(input, withoutSuffix, instance, isFrom, postFormat) {
    var loc = instance.$locale().relativeTime || relObj;
    var T = o.thresholds || [{
      l: "s",
      r: 44,
      d: S
    }, {
      l: "m",
      r: 89
    }, {
      l: "mm",
      r: 44,
      d: MIN
    }, {
      l: "h",
      r: 89
    }, {
      l: "hh",
      r: 21,
      d: H
    }, {
      l: "d",
      r: 35
    }, {
      l: "dd",
      r: 25,
      d: D
    }, {
      l: "M",
      r: 45
    }, {
      l: "MM",
      r: 10,
      d: M
    }, {
      l: "y",
      r: 17
    }, {
      l: "yy",
      d: Y
    }];
    var Tl = T.length;
    var result;
    var out;
    var isFuture;
    for (var i = 0; i < Tl; i += 1) {
      var t = T[i];
      if (t.d) {
        result = isFrom ? d(input).diff(instance, t.d, true) : instance.diff(input, t.d, true);
      }
      var abs = (o.rounding || Math.round)(Math.abs(result));
      isFuture = result > 0;
      if (abs <= t.r || !t.r) {
        if (abs <= 1 && i > 0)
          t = T[i - 1];
        var format = loc[t.l];
        if (postFormat) {
          abs = postFormat("" + abs);
        }
        if (typeof format === "string") {
          out = format.replace("%d", abs);
        } else {
          out = format(abs, withoutSuffix, t.l, isFuture);
        }
        break;
      }
    }
    if (withoutSuffix)
      return out;
    var pastOrFuture = isFuture ? loc.future : loc.past;
    if (typeof pastOrFuture === "function") {
      return pastOrFuture(out);
    }
    return pastOrFuture.replace("%s", out);
  };
  function fromTo(input, withoutSuffix, instance, isFrom) {
    return proto2.fromToBase(input, withoutSuffix, instance, isFrom);
  }
  proto2.to = function(input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this, true);
  };
  proto2.from = function(input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this);
  };
  var makeNow = function makeNow2(thisDay) {
    return thisDay.$u ? d.utc() : d();
  };
  proto2.toNow = function(withoutSuffix) {
    return this.to(makeNow(this), withoutSuffix);
  };
  proto2.fromNow = function(withoutSuffix) {
    return this.from(makeNow(this), withoutSuffix);
  };
};
dayjs.extend(relativeTime);
const Time = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let $$restProps = compute_rest_props($$props, ["timestamp", "format", "relative", "live", "formatted"]);
  let { timestamp = new Date().toISOString() } = $$props;
  let { format = "MMM DD, YYYY" } = $$props;
  let { relative = false } = $$props;
  let { live = false } = $$props;
  let { formatted = "" } = $$props;
  if ($$props.timestamp === void 0 && $$bindings.timestamp && timestamp !== void 0)
    $$bindings.timestamp(timestamp);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  if ($$props.relative === void 0 && $$bindings.relative && relative !== void 0)
    $$bindings.relative(relative);
  if ($$props.live === void 0 && $$bindings.live && live !== void 0)
    $$bindings.live(live);
  if ($$props.formatted === void 0 && $$bindings.formatted && formatted !== void 0)
    $$bindings.formatted(formatted);
  formatted = relative ? dayjs(timestamp).from() : dayjs(timestamp).format(format);
  title = relative ? timestamp : void 0;
  return `<time${spread([
    escape_object($$restProps),
    { title: escape_attribute_value(title) },
    {
      datetime: escape_attribute_value(timestamp)
    }
  ], {})}>${escape(formatted)}</time>`;
});
const Chevron_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { width: "1.2em" },
    { height: "1.2em" },
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    escape_object($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z" fill="currentColor"/>`}<!-- HTML_TAG_END --></svg>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--color-1:var(--color-fuchsia-300);--color-2:var(--color-emerald-300);--color-3:var(--color-winterblues-400)}.color-1.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{color:var(--color-1)}.color-2.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{color:var(--color-2)}.color-3.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{color:var(--color-3)}.intro.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{grid-area:intro}.intro-body.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{letter-spacing:0.01em}.icon-wrapper.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{position:absolute;@apply -mr-4 transition right-0 text-2xl;}.icon-wrapper.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz:nth-of-type(1){@apply text-winterblues-400 right-6 transition delay-300;}.icon-wrapper.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz:nth-of-type(2){@apply text-winterblues-600 right-4 transition delay-200;}.icon-wrapper.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz:nth-of-type(3){@apply text-winterblues-800 right-2 transition delay-100;}.view-more.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{transition:all;transition-delay:0.1s}.view-more.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz:hover{transition-delay:0s}.view-more.svelte-1ap2pvz:hover .icon-wrapper.svelte-1ap2pvz.svelte-1ap2pvz:nth-of-type(1){@apply text-winterblues-200 transition delay-100;}.view-more.svelte-1ap2pvz:hover .icon-wrapper.svelte-1ap2pvz.svelte-1ap2pvz:nth-of-type(2){@apply text-winterblues-400 transition delay-200;}.view-more.svelte-1ap2pvz:hover .icon-wrapper.svelte-1ap2pvz.svelte-1ap2pvz:nth-of-type(3){@apply text-winterblues-600 transition delay-300;}.projects.svelte-1ap2pvz .icon-wrapper.svelte-1ap2pvz.svelte-1ap2pvz{@apply -mr-4 transition text-2xl;}.projects.svelte-1ap2pvz .icon-wrapper.svelte-1ap2pvz.svelte-1ap2pvz:nth-of-type(1){@apply text-orange-400 transition  delay-300;}.projects.svelte-1ap2pvz .icon-wrapper.svelte-1ap2pvz.svelte-1ap2pvz:nth-of-type(2){@apply text-orange-600 transition  delay-200;}.projects.svelte-1ap2pvz .icon-wrapper.svelte-1ap2pvz.svelte-1ap2pvz:nth-of-type(3){@apply text-orange-800 transition  delay-100;}.projects.svelte-1ap2pvz .view-more.svelte-1ap2pvz.svelte-1ap2pvz{transition:all;transition-delay:0.1s}.projects.svelte-1ap2pvz .view-more.svelte-1ap2pvz.svelte-1ap2pvz:hover{transition-delay:0s}.projects.svelte-1ap2pvz .view-more.svelte-1ap2pvz:hover .icon-wrapper.svelte-1ap2pvz:nth-of-type(1){@apply text-orange-200 transition delay-100;}.projects.svelte-1ap2pvz .view-more.svelte-1ap2pvz:hover .icon-wrapper.svelte-1ap2pvz:nth-of-type(2){@apply text-orange-400 transition delay-200;}.projects.svelte-1ap2pvz .view-more.svelte-1ap2pvz:hover .icon-wrapper.svelte-1ap2pvz:nth-of-type(3){@apply text-orange-600 transition delay-300;}.posts-panel.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{grid-area:posts}.project-card.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{display:flex;grid-template-rows:1.75rem 1fr;grid-template-areas:"tags" "details"}.project-card.svelte-1ap2pvz .project-details.svelte-1ap2pvz.svelte-1ap2pvz{grid-area:details;display:flex}.project-card-link.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz:first-of-type{margin-left:0}.project-card-link.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz:last-of-type{margin-right:0}ol.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{--list-counter-size:1.5rem;counter-reset:intro-counter;list-style:none;position:relative}ol.svelte-1ap2pvz li.svelte-1ap2pvz.svelte-1ap2pvz{counter-increment:intro-counter;position:relative}ol.svelte-1ap2pvz li.svelte-1ap2pvz.svelte-1ap2pvz::marker{content:counter(intro-counter) ". ";color:var(--color-3);font-weight:700;position:absolute;top:0;left:calc(-1 * var(--list-counter-size) - 2rem);font-size:var(--list-counter-size);font-family:"Newsreader"}ol.svelte-1ap2pvz li .li-heading.svelte-1ap2pvz.svelte-1ap2pvz{font-family:"Montserrat", sans-serif;position:relative;left:0.75rem;color:var(--color-3);@apply font-semibold italic leading-none;}.statement.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{font-family:"Montserrat", sans-serif;font-weight:600;line-height:1.25em;background:linear-gradient(black, black) padding-box, linear-gradient(120deg, var(--color-emerald-500) 10%, var(--color-amber-500) 25%, var(--color-rose-500) 50%, var(--color-fuchsia-500) 75%, var(--color-winterblues-400) 90%) border-box;border-radius:1rem;border:3px solid transparent}.statement.svelte-1ap2pvz .author.svelte-1ap2pvz.svelte-1ap2pvz{color:var(--color-gray-300)}.projects-group.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{grid-template-columns:repeat(3, 1fr)}.project-tags.svelte-1ap2pvz.svelte-1ap2pvz.svelte-1ap2pvz{grid-area:tags}.project-tags.svelte-1ap2pvz div.svelte-1ap2pvz.svelte-1ap2pvz{margin-left:0px;margin-right:4px}',
  map: null
};
const load = async ({ fetch }) => {
  const res = await fetch("../blog.json");
  if (res.ok) {
    const { posts } = await res.json();
    return { props: { posts } };
  }
};
const Mikepeiman = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { posts } = $$props;
  let selectedPosts = posts?.slice(0, 3);
  console.log(`\u{1F680} ~ file: index.svelte ~ line 4 ~ posts`, posts);
  let projects = [
    {
      name: "MetaBrain.io",
      url: "#",
      tags: ["knowledge management app", "GraphQL/DB", "LMS"],
      desc: "A knowledge tracking platform for life. Research, track, organize, curate, plan, analyze, schedule, do. One app to rule them all.",
      component: false
    },
    {
      name: "Super Tic-Tac-Toe",
      url: "https://super-tic-tac-toe.netlify.app/",
      tags: ["Svelte/Sapper", "game", "(S)CSS"],
      desc: "Inspired by pen-and-paper with my daughter. Tic-Tac-Toe on steroids. Choose an emoji, configure your gameboard and rules, and have at it with up to 8 players.",
      component: false
    },
    {
      name: "Creative Coding",
      url: "./creative/sketch05",
      tags: ["creative coding", "generative art", "javascript"],
      desc: "Fulfilling a lifelong passion for beauty, and exploring the relationships between form, movement and number."
    }
  ];
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  path = $page.url.pathname;
  {
    console.log(`\u{1F680} ~ file: index.svelte ~ line 24 ~ path`, path);
  }
  $$unsubscribe_page();
  return `

<main class="${"homepage bg-black flex flex-col self-center justify-items-center items-center w-full lg:text-sm lg:px-12 xl:px-24 2xl:w-4/5 2xl:px-12 3xl:w-3/4 3xl:px-36 mt-4 md:mt-20"}"><section class="${"articles md:grid md:articles-change w-full px-4 md:px-6 lg:px-0 self-center p-3"}"><div class="${"intro flex flex-col text-lg md:pr-12 lg:pr-18 xl:pr-24 xl:text-xl svelte-1ap2pvz"}"><h1 class="${"text-4xl lg:text-6xl font-bold font-display text-winterblues-300"}">Hi, I&#39;m Mike.
			</h1>
			<p class="${"intro-body mt-3 font-light text-lg md:text-xl xl:text-2xl leading-snug md:leading-relaxed font-montserrat svelte-1ap2pvz"}">I&#39;m a creative software developer, and this is my professional blog. I love
				<span class="${"font-bold italic color-1 svelte-1ap2pvz"}">user experience</span> and design that helps realize
				human potential. I follow a
				<span class="${"font-bold italic color-2 svelte-1ap2pvz"}">first-principles</span>
				approach in my life and my work. Here are a few of my
				<span class="${"color-3 font-bold italic svelte-1ap2pvz"}">design principles</span>:
			</p>

			<ol class="${"pl-7 mt-6 text-xl svelte-1ap2pvz"}"><li class="${"mt-4 svelte-1ap2pvz"}"><h2 class="${"li-heading color-3 leading-none text-xl lg:text-2xl xl:mt-3  svelte-1ap2pvz"}">Never deny the user basic options.
					</h2>
					<p class="${"li-snippet text-base lg:text-lg mt-3 font-light ml-3 xl:text-xl"}">Users should be provided the means to <span class="${"italic color-1 font-medium svelte-1ap2pvz"}">customize the user interface</span> as much as possible.
					</p></li>
				<li class="${"mt-4 svelte-1ap2pvz"}"><h2 class="${"li-heading color-3 leading-none lg:text-2xl xl:mt-9 svelte-1ap2pvz"}">Minimize barriers to action.
					</h2>
					<p class="${"li-snippet text-base lg:text-lg mt-3 font-light ml-3 xl:text-xl"}">The app (or website) is <span class="${"italic color-2 font-medium svelte-1ap2pvz"}">for something</span>.
						Make it as
						<span class="${"italic color-1 font-medium svelte-1ap2pvz"}">intuitive and efficient</span>
						as possible to <span class="${"italic color-2 font-medium svelte-1ap2pvz"}">do that thing.</span></p></li>
				<li class="${"mt-4 svelte-1ap2pvz"}"><h2 class="${"li-heading color-3 leading-none lg:text-2xl xl:mt-9 svelte-1ap2pvz"}">Leverage visual intelligence.
					</h2>
					<p class="${"li-snippet text-base lg:text-lg mt-3 font-light ml-3 xl:text-xl"}">Augment words and iconography with <span class="${"italic color-1 font-medium svelte-1ap2pvz"}">color</span>
						and structure - <span class="${"italic color-2 font-medium svelte-1ap2pvz"}">draw the eye</span> to key points
						and relationships. Effectively use negative space, layout and structure, diagrams and images
						to communicate beyond mere words.
					</p></li></ol></div>

		
		
		

		<div class="${"posts-panel flex flex-col self-center mt-12 mx-0 w-full md:mt-0 svelte-1ap2pvz"}"><div class="${"post w-full"}"><div class="${"view-more font-montserrat uppercase flex flex-row items-center justify-between -mb-4 border-t-[1px] lg:border-t-0 py-2 lg:pt-0 border-winterblues-400/[0.75] svelte-1ap2pvz"}"><h2 class="${"recent-label uppercase font-montserrat text-winterblues-400/[0.75] text-base lg:text-lg"}">Recent posts
					</h2>
					<div class="${"view-more relative svelte-1ap2pvz"}"><a href="${"/blog"}" class="${"view-more font-montserrat text-base xl:text-lg pr-8 relative flex flex-row text-right transition text-winterblues-400/[0.75] hover:text-white svelte-1ap2pvz"}">View more articles
						</a>
						<div class="${"icon-wrapper -top-[3px] xl:-top-[1px] svelte-1ap2pvz"}">${validate_component(Chevron_right, "IconChevronRight").$$render($$result, { class: "icon-chevron" }, {}, {})}</div>
						<div class="${"icon-wrapper -top-[3px] xl:-top-[1px] svelte-1ap2pvz"}">${validate_component(Chevron_right, "IconChevronRight").$$render($$result, { class: "icon-chevron" }, {}, {})}</div>
						<div class="${"icon-wrapper -top-[3px] xl:-top-[1px] svelte-1ap2pvz"}">${validate_component(Chevron_right, "IconChevronRight").$$render($$result, { class: "icon-chevron" }, {}, {})}</div></div></div>
				${selectedPosts ? `${each(selectedPosts, (post) => {
    return `<a${add_attribute("href", `/blog/${post.slug}`, 0)} class="${"no-underline relative"}"><div class="${"post-card transition duration-300 p-5 lg:p-7 rounded-md bg-gray-900 my-6 hover:bg-sky-800/[0.5] hover:-translate-x-2"}">
							<div class="${"post-title z-10 article-date p-0 pb-1 m-0 text-xs md:text-sm lg:pb-2 xl:pb-3 font-base font-fira text-yellow-300/[0.75]"}">${validate_component(Time, "Time").$$render($$result, { timestamp: post.date }, {}, {})}</div>
							<h1 class="${"font-display font-bold text-winterblues-300 z-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-0 md:mb-1 lg:mb-2 xl:mb-3 -mt-1"}">${escape(post.title)}</h1>
							<p class="${"font-fira font-light text-sky-200 tracking-wider z-10 text-sm md:text-base xl:text-lg"}">${escape(post.excerpt)}
							</p></div>
					</a>`;
  })}` : ``}</div></div></section>

	<section class="${"flex flex-col w-full min-w-0 shrink self-center text-center items-center justify-center px-8 lg:px-0"}"><p class="${"statement text-3xl leading-relaxed font-bold italic text-center p-6 border-2 -mx-3 my-12 lg:mx-0 lg:mb-6 lg:border-none border-amber-500 rounded-lg w-auto xl:w-4/5 xl:px-16 xl:leading-loose lg:text-4xl 2xl:w-3/4 2xl:text-4xl self-center py-12  svelte-1ap2pvz"}"><span class="${"font-medium min-w-0"}">\u201CIf a system is to serve the creative spirit, it must be entirely comprehensible to a
				single individual.\u201D</span> <br><span class="${"font-bold text-lg author uppercase  svelte-1ap2pvz"}">Daniel H. H. Ingalls</span></p></section>

	<section class="${"projects min-w-0 shrink flex flex-col w-full justify-center px-4 md:px-6 lg:px-0 svelte-1ap2pvz"}"><div class="${"flex flex-row items-center justify-between mt-9 -mb-1 border-t-[1px] lg:border-t-0 py-2 border-amber-400/[0.75] "}"><h2 class="${"recent-label font-montserrat uppercase text-base lg:text-lg text-amber-400/[0.75] "}">Selected Projects
			</h2>
			
			<h2 class="${"view-more font-montserrat text-base xl:text-lg pr-4 relative flex flex-row transition text-amber-400/[0.75] hover:text-white svelte-1ap2pvz"}">
				<a href="${"/creative"}" class="${"view-more offset-4 pr-4 no-underline uppercase text-right svelte-1ap2pvz"}">View more projects</a>
				<div class="${"icon-wrapper -top-[3px] xl:-top-[1px] svelte-1ap2pvz"}">${validate_component(Chevron_right, "IconChevronRight").$$render($$result, { class: "icon-chevron" }, {}, {})}</div>
				<div class="${"icon-wrapper -top-[3px] xl:-top-[1px] svelte-1ap2pvz"}">${validate_component(Chevron_right, "IconChevronRight").$$render($$result, { class: "icon-chevron" }, {}, {})}</div>
				<div class="${"icon-wrapper -top-[3px] xl:-top-[1px] svelte-1ap2pvz"}">${validate_component(Chevron_right, "IconChevronRight").$$render($$result, { class: "icon-chevron" }, {}, {})}</div></h2></div>
		<div class="${"projects-group min-w-0 shrink md:grid w-full flex flex-col mb-12 svelte-1ap2pvz"}">${each(projects, (project) => {
    return `<a${add_attribute("href", `${project.url}`, 0)} class="${"project-card-link no-underline flex my-3 md:mx-3 svelte-1ap2pvz"}" target="${"_blank"}">
					<div class="${"project-card card rounded-md transition-all bg-gray-900 hover:bg-sky-800/[0.5] flex flex-col md:flex-col-reverse md:justify-between lg:flex-col lg:justify-start p-5 lg:p-7 rounded-md hover:-translate-x-2 md:hover:-translate-y-2 md:hover:translate-x-0 svelte-1ap2pvz"}"><div class="${"text-xs flex flex-row project-tags svelte-1ap2pvz"}">
							${project.tags ? `<div class="${"mb-4 -mt-2 lg:mb-4 lg:-mt-2 md:mb-2 md:mt-2 space-x-2 flex flex-wrap justify-start align-start svelte-1ap2pvz"}">${each(project.tags, (tag) => {
      return `<div class="${"project-tag font-light font-montserrat mt-1 whitespace-nowrap px-2 py-1 rounded bg-fuchsia-900/[0.5] text-yellow-300/[0.75] svelte-1ap2pvz"}">${escape(tag)}</div>`;
    })}
								</div>` : ``}</div>
						<div class="${"project-details flex flex-col  svelte-1ap2pvz"}"><h1 class="${"font-display font-bold text-amber-200 z-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-0 md:mb-1 lg:mb-2 xl:mb-3 -mt-1"}">${escape(project.name)}</h1>
							<p class="${"font-fira font-light text-sky-200 tracking-wider mt-2 text-sm md:text-base xl:text-lg "}">${escape(project.desc)}
							</p></div>
						</div>
				</a>`;
  })}</div></section>
</main>`;
});
export { Mikepeiman as default, load };
