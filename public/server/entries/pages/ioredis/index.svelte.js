import { c as create_ssr_component } from "../../../chunks/index-e675dbce.js";
import Redis from "ioredis";
const connectionString = "{ host: '127.0.0.1', port: 6379,}".toString();
connectionString ? new Redis(connectionString) : new Redis();
const Ioredis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>IOREDIS</h1>`;
});
export { Ioredis as default };
