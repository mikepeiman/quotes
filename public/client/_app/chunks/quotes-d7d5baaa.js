import{am as o,D as s}from"./vendor-0f79dfe6.js";const a="https://blue-surf-460106.us-east-1.aws.cloud.dgraph.io/graphql";console.log("\u{1F680} ~ file: dgraphClient.js ~ line 4 ~ VITE_DGRAPH_ENDPOINT",a);const c=new o.GraphQLClient(a),i=s({}),l=s({}),r=s([]),d=s([]),q=e=>{console.log("\u{1F680} ~ file: quotes.js ~ line 9 ~ addQuote ~ quote",e),d.update(t=>[...t,e]),console.log("\u{1F680} ~ file: quotes.js ~ line 11 ~ addQuote ~ addedQuotes",d)},y=async e=>{let t;console.log("\u{1F680} ~ file: quotes.js ~ line 16 ~ uploadQuote ~ quote",e);const n=o.gql`mutation MyMutation {
            addQuote(input: {quoteBody: "${e.quoteBody}", originalText: "${e.originalText}", author: {name: "${e.author}"}})
            { numUids}
          }`;return console.log("\u{1F680} ~file: quotes.js ~line 19 ~uploadQuote ~query",n),await c.request(n).then(u=>{console.log("\u{1F680} ~ file: index.dgraph.json.js ~ line 18 ~ awaitclient.request ~ data",u),t=u.queryQuote,console.log("\u{1F680} ~ file: index.dgraph.json.js ~ line 19 ~ awaitclient.request ~ dgraph_quotes",t)}),{status:200,body:{dgraph_quotes:t}}};o.gql`query MyQuery {
    queryQuote {
      id
      quoteBody
      author {
        name
      }
    }
    }
  `;i.subscribe;const b={subscribe:l.subscribe,set:e=>{l.set(e),localStorage.setItem("fileContent",JSON.stringify(e))}},f={subscribe:r.subscribe,set:e=>{r.set(e),localStorage.setItem("quotesArray",JSON.stringify(e))}};export{f as a,d as b,q as c,r as q,b as s,y as u};
