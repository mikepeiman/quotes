import { g as getContext, o as onDestroy, s as setContext, c as create_ssr_component, b as subscribe, k as add_attribute, e as escape, j as each } from "../../../chunks/index-e675dbce.js";
import "../../../chunks/quotes-5c506588.js";
import "../../../chunks/functions-9959eb37.js";
import "graphql-request";
import "../../../chunks/dgraphClient-b4a302b9.js";
/* empty css                                                                  */import { createRequest, stringifyVariables, Client } from "@urql/core";
import { w as writable } from "../../../chunks/index-5b1f353a.js";
/* empty css                                                            */function l(a, b) {
  b.tag = a;
  return b;
}
function m() {
}
function p(a) {
  return function(b) {
    var c = a.length;
    let d = false, e = false, f = false, g2 = 0;
    b(l(0, [
      function(h) {
        if (h) {
          d = true;
        } else if (e) {
          f = true;
        } else {
          for (e = f = true; f && !d; ) {
            g2 < c ? (h = a[g2], g2 = g2 + 1 | 0, f = false, b(l(1, [h]))) : (d = true, b(0));
          }
          e = false;
        }
      }
    ]));
  };
}
function r() {
}
function u(a) {
  let b = false;
  a(l(0, [
    function(c) {
      c ? b = true : b || a(0);
    }
  ]));
}
function x(a) {
  if (a === null || a[0] !== v) {
    return a;
  }
  if ((a = a[1]) !== 0) {
    return [v, a - 1 | 0];
  }
}
function z(a) {
  return function(b) {
    return function(c) {
      function d(b2) {
        typeof b2 == "number" ? k && (k = false, (b2 = e.shift()) !== void 0 ? (b2 = a(x(b2)), k = true, b2(d)) : q ? c(0) : g2 || (g2 = true, f(0))) : b2.tag ? k && (c(b2), n ? n = false : h(0)) : (h = b2 = b2[0], n = false, b2(0));
      }
      let e = [], f = m, g2 = false, h = m, k = false, n = false, q = false;
      b(function(b2) {
        typeof b2 == "number" ? q || (q = true, k || e.length !== 0 || c(0)) : b2.tag ? q || (b2 = b2[0], g2 = false, k ? e.push(b2) : (b2 = a(b2), k = true, b2(d))) : f = b2[0];
      });
      c(l(0, [
        function(c2) {
          if (c2) {
            if (q || (q = true, f(1)), k) {
              return k = false, h(1);
            }
          } else {
            q || g2 || (g2 = true, f(0)), k && !n && (n = true, h(0));
          }
        }
      ]));
    };
  };
}
function B(a) {
  return a;
}
function K(a) {
  return function(b) {
    return function(c) {
      function d(a2) {
        h && (typeof a2 == "number" ? (h = false, n ? c(a2) : f || (f = true, e(0))) : a2.tag ? (c(a2), k ? k = false : g2(0)) : (g2 = a2 = a2[0], k = false, a2(0)));
      }
      let e = m, f = false, g2 = m, h = false, k = false, n = false;
      b(function(b2) {
        typeof b2 == "number" ? n || (n = true, h || c(0)) : b2.tag ? n || (h && (g2(1), g2 = m), f ? f = false : (f = true, e(0)), b2 = a(b2[0]), h = true, b2(d)) : e = b2[0];
      });
      c(l(0, [
        function(a2) {
          if (a2) {
            if (n || (n = true, e(1)), h) {
              return h = false, g2(1);
            }
          } else {
            n || f || (f = true, e(0)), h && !k && (k = true, g2(0));
          }
        }
      ]));
    };
  };
}
function M(a) {
  return function(b) {
    return function(c) {
      let d = [], e = m;
      return b(function(b2) {
        typeof b2 == "number" ? p(d)(c) : b2.tag ? (d.length >= a && 0 < a && d.shift(), d.push(b2[0]), e(0)) : (b2 = b2[0], 0 >= a ? (b2(1), u(c)) : (e = b2, b2(0)));
      });
    };
  };
}
function N(a) {
  return function(b) {
    let c = m, d = false;
    b(function(e) {
      typeof e == "number" ? d = true : e.tag ? d || (a(e[0]), c(0)) : (c = e = e[0], e(0));
    });
    return {
      unsubscribe: function() {
        if (!d) {
          return d = true, c(1);
        }
      }
    };
  };
}
function concat$1(a) {
  return z(B)(p(a));
}
function fromValue$1(a) {
  return function(b) {
    let c = false;
    b(l(0, [
      function(d) {
        d ? c = true : c || (c = true, b(l(1, [a])), b(0));
      }
    ]));
  };
}
function make$1(a) {
  return function(b) {
    let c = r, d = false;
    c = a({
      next: function(a2) {
        d || b(l(1, [a2]));
      },
      complete: function() {
        d || (d = true, b(0));
      }
    });
    b(l(0, [
      function(a2) {
        if (a2 && !d) {
          return d = true, c();
        }
      }
    ]));
  };
}
function map$1(a) {
  return function(b) {
    return function(c) {
      return b(function(b2) {
        b2 = typeof b2 == "number" ? 0 : b2.tag ? l(1, [a(b2[0])]) : l(0, [b2[0]]);
        c(b2);
      });
    };
  };
}
function scan$1(a, b) {
  return function(a2, b2) {
    return function(c) {
      return function(d) {
        let e = b2;
        return c(function(c2) {
          typeof c2 == "number" ? c2 = 0 : c2.tag ? (e = a2(e, c2[0]), c2 = l(1, [e])) : c2 = l(0, [c2[0]]);
          d(c2);
        });
      };
    };
  }(a, b);
}
function take$1(a) {
  return function(b) {
    return function(c) {
      let d = false, e = 0, f = m;
      b(function(b2) {
        typeof b2 == "number" ? d || (d = true, c(0)) : b2.tag ? e < a && !d && (e = e + 1 | 0, c(b2), !d && e >= a && (d = true, c(0), f(1))) : (b2 = b2[0], 0 >= a ? (d = true, c(0), b2(1)) : f = b2);
      });
      c(l(0, [
        function(b2) {
          if (!d) {
            if (b2) {
              return d = true, f(1);
            }
            if (e < a) {
              return f(0);
            }
          }
        }
      ]));
    };
  };
}
function toPromise$1(a) {
  return new Promise(function(b) {
    M(1)(a)(function(a2) {
      if (typeof a2 != "number") {
        if (a2.tag) {
          b(a2[0]);
        } else {
          a2[0](0);
        }
      }
    });
  });
}
var v = [];
typeof Symbol == "function" ? Symbol.observable || (Symbol.observable = Symbol("observable")) : "@@observable";
function _extends() {
  return (_extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r2 in n) {
        if (Object.prototype.hasOwnProperty.call(n, r2)) {
          e[r2] = n[r2];
        }
      }
    }
    return e;
  }).apply(this, arguments);
}
var y = function() {
  return;
};
function operationStore(n, i, o) {
  var u2 = {
    query: n,
    variables: i || null,
    context: o
  };
  var a = {
    stale: false,
    fetching: false,
    data: void 0,
    error: void 0,
    extensions: void 0
  };
  var c = writable(a);
  var s = false;
  a.set = function set(n2) {
    if (!n2 || n2 === a) {
      return;
    }
    s = true;
    var i2 = false;
    if ("query" in n2 || "variables" in n2) {
      var o2 = createRequest(u2.query, u2.variables);
      var f = createRequest(n2.query || u2.query, n2.variables || u2.variables);
      if (o2.key !== f.key) {
        i2 = true;
        u2.query = n2.query || u2.query;
        u2.variables = n2.variables || u2.variables || null;
      }
    }
    if ("context" in n2) {
      if (stringifyVariables(u2.context) !== stringifyVariables(n2.context)) {
        i2 = true;
        u2.context = n2.context;
      }
    }
    for (var l2 in n2) {
      if (l2 === "query" || l2 === "variables" || l2 === "context") {
        continue;
      } else if (l2 === "fetching") {
        a[l2] = !!n2[l2];
      } else if (l2 in a) {
        a[l2] = n2[l2];
      }
      i2 = true;
    }
    a.stale = !!n2.stale;
    s = false;
    if (i2) {
      c.set(a);
    }
  };
  a.update = function update(e) {
    a.set(e(a));
  };
  a.subscribe = function subscribe2(e, t) {
    return c.subscribe(e, t);
  };
  a.reexecute = function(e) {
    u2.context = _extends({}, e || u2.context);
    c.set(a);
  };
  Object.keys(u2).forEach(function(e) {
    Object.defineProperty(a, e, {
      configurable: false,
      get: function() {
        return u2[e];
      },
      set: function set(t) {
        u2[e] = t;
        if (!s) {
          c.set(a);
        }
      }
    });
  });
  return a;
}
function getClient() {
  return getContext("$$_urql");
}
function setClient(e) {
  setContext("$$_urql", e);
}
function initClient(e) {
  var t = new Client(e);
  setClient(t);
  return t;
}
var g = {
  fetching: false,
  stale: false,
  error: void 0,
  data: void 0,
  extensions: void 0
};
function toSource(t) {
  return make$1(function(n) {
    var r2;
    var i = {};
    return t.subscribe(function(t2) {
      var o = createRequest(t2.query, t2.variables);
      if ((o.context = t2.context) !== i || o.key !== r2) {
        r2 = o.key;
        i = t2.context;
        n.next(o);
      }
    });
  });
}
function query(e) {
  var t = getClient();
  var n = N(function(t2) {
    e.set(t2);
  })(scan$1(function(e2, t2) {
    return _extends({}, e2, t2);
  }, g)(K(function(e2) {
    if (e2.context && e2.context.pause) {
      return fromValue$1({
        fetching: false,
        stale: false
      });
    }
    return concat$1([fromValue$1({
      fetching: true,
      stale: false
    }), map$1(function(e3) {
      return _extends({}, {
        fetching: false
      }, e3, {
        stale: !!e3.stale
      });
    })(t.executeQuery(e2, e2.context)), fromValue$1({
      fetching: false,
      stale: false
    })]);
  })(toSource(e))));
  onDestroy(n.unsubscribe);
  return e;
}
function mutation(t) {
  var n = getClient();
  var r2 = typeof t.subscribe != "function" ? operationStore(t.query, t.variables) : t;
  return function(t2, i) {
    var o = {
      fetching: true,
      variables: t2 || r2.variables,
      context: i || r2.context
    };
    y(o);
    r2.set(o);
    return toPromise$1(take$1(1)(n.executeMutation(createRequest(r2.query, r2.variables || {}), r2.context))).then(function(e) {
      var t3 = _extends({}, {
        fetching: false
      }, e);
      y(t3);
      r2.set(t3);
      return r2;
    });
  };
}
const Upload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $getQuotes, $$unsubscribe_getQuotes;
  const VITE_DGRAPH_ENDPOINT = { "VITE_SVELTEKIT_AMP": "", "VITE_REDIS_CONNECTION_URL": "{ host: '127.0.0.1', port: 6379,}", "VITE_PUBLIC_SUPABASE_URL": "https://nnlhldhudoyhcxzzmoxu.supabase.co", "VITE_PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ubGhsZGh1ZG95aGN4enptb3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUyODAyNjEsImV4cCI6MTk2MDg1NjI2MX0.7l9_jqyx-aP3xctjSSxkdvyjugMi5XjmAiOuz27Ixi", "VITE_GRAPHCMS_ENDPOINT": "https://api-us-west-2.graphcms.com/v2/cky4gufy805ry01z5eo0o92ef/master", "VITE_DGRAPH_ENDPOINT": "https://blue-surf-460106.us-east-1.aws.cloud.dgraph.io/graphql", "BASE_URL": "/_app/", "MODE": "production", "DEV": false, "PROD": true }["VITE_DGRAPH_ENDPOINT"];
  initClient({ url: VITE_DGRAPH_ENDPOINT });
  let { id } = $$props;
  let quoteBody = "";
  let quoteAuthor = "";
  let quoteContext = "";
  let quoteTags = "";
  let quoteSource = "";
  mutation({
    query: `
		mutation addQuotes($data: [AddQuoteInput!]!) {
			addQuote(input: $data) {
			numUids
			quote {
				id
				quoteBody
			}
			}
		}`
  });
  mutation({
    query: `
		mutation addNewQuote {
			addQuote(input: {quoteBody: "", author: {name: ""}}) {
				numUids
			}
			}`
  });
  const getQuotes = operationStore(`query getQuotes {
		queryQuote {
			quoteBody
			author {
			name
			}
		}
		}
		`);
  $$unsubscribe_getQuotes = subscribe(getQuotes, (value) => $getQuotes = value);
  mutation({
    query: `
		mutation deleteTestQuotes {
			deleteQuote(filter: {quoteBody: {anyoftext: "test"}})
			}
		`
  });
  let res = query(getQuotes);
  console.log(`\u{1F680} ~ file: index.json.js ~ line 38 ~ res from urql query getQuotes: `, res);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$unsubscribe_getQuotes();
  return `


<div class="${"p-10 card bg-base-200 container"}"><div class="${"form-control flex"}"><label class="${"label max-w-xs"}"><span>Quote</span></label>
		<input type="${"text"}" placeholder="${"Quote"}" class="${"input input-group max-w-xs"}"${add_attribute("value", quoteBody, 0)}>
		<label class="${"label"}"><span class="${"label-text"}">Author</span></label>
		<input type="${"text"}" placeholder="${"Author"}" class="${"input"}"${add_attribute("value", quoteAuthor, 0)}>
		<label class="${"label"}"><span class="${"label-text"}">Context</span></label>
		<input type="${"text"}" placeholder="${"Context"}" class="${"input"}"${add_attribute("value", quoteContext, 0)}>
		<label class="${"label"}"><span class="${"label-text"}">Tags</span></label>
		<input type="${"text"}" placeholder="${"Tags"}" class="${"input"}"${add_attribute("value", quoteTags, 0)}>
		<label class="${"label"}"><span class="${"label-text"}">Source</span></label>
		<input type="${"text"}" placeholder="${"Source"}" class="${"input"}"${add_attribute("value", quoteSource, 0)}></div>
	<button type="${"submit"}" class="${"btn btn-outline"}">SUBMIT</button>
	<button type="${"submit"}" class="${"btn btn-outline"}">Hit .json endpoint</button></div>

<h1>${escape(quoteBody)} - ${escape(quoteAuthor)}</h1>


<div class="${"quotes"}">${$getQuotes.fetching ? `<p>Loading...</p>` : `${$getQuotes.error ? `<p>Error: ${escape($getQuotes.Error.message)}</p>` : `${each($getQuotes.data.queryQuote, (item, i) => {
    return `<ul><li><h1>${escape(i + 1)}: ${escape(item.quoteBody)} - ${escape(item.author.name)}</h1></li>
			</ul>`;
  })}`}`}</div>`;
});
export { Upload as default };
