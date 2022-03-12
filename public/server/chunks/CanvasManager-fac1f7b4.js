import { c as create_ssr_component, b as subscribe } from "./index-e675dbce.js";
import "canvas-sketch";
/* empty css                                               */import { w as writable } from "./index-5b1f353a.js";
import "./supabaseClient-ef6f751e.js";
import { p as page } from "./stores-60451e84.js";
const settingsChange = writable({});
const storedSettingsChange = {
  subscribe: settingsChange.subscribe,
  set: (val) => {
    console.log(`\u{1F680} ~ file: stores.js ~ line 8 ~ val`, val);
    settingsChange.set(val);
    localStorage.setItem("settingsChange", JSON.stringify(val));
  }
};
const CanvasManager = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storedSettingsChange, $$unsubscribe_storedSettingsChange;
  let $page, $$unsubscribe_page;
  $$unsubscribe_storedSettingsChange = subscribe(storedSettingsChange, (value) => $storedSettingsChange = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { settings = {} } = $$props;
  let { data = {} } = $$props;
  let { hidePanel = false } = $$props;
  let localStorageSupported = (() => {
    try {
      return typeof window.localStorage !== "undefined";
    } catch (err) {
      return false;
    }
  })();
  saveData(settings, data);
  readData(settings, data);
  function saveData(settings2, data2) {
    if (localStorageSupported && settings2.localStorage !== false) {
      window.localStorage.setItem(`${data2.TITLE}`, JSON.stringify(data2));
      if (data2.clearLS) {
        console.log(`\u{1F680} ~ file: CanvasManager.svelte ~ line 29 ~ saveData ~ data.clearLS`, data2.clearLS);
        console.log(`\u{1F680} ~ file: CanvasManager.svelte ~ line 29 ~ saveData ~ data`, data2);
        window.localStorage.setItem(`${data2.TITLE}`, JSON.stringify({}));
        data2.clearLS = false;
        $storedSettingsChange.set(!$storedSettingsChange);
        readData(settings2, data2);
        saveData(settings2, data2);
      }
    }
  }
  function readData(settings2, data2) {
    console.log(`\u{1F680} ~ file: CanvasManager.svelte ~ line 41 ~ readData ~ data`, data2);
    if (localStorageSupported && settings2.localStorage !== false) {
      try {
        const prev = window.localStorage.getItem(`${data2.TITLE}`);
        if (!prev)
          return;
        const newData = JSON.parse(prev);
        Object.assign(data2, newData);
      } catch (err) {
        console.warn(err);
      }
    }
  }
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0)
    $$bindings.settings(settings);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.hidePanel === void 0 && $$bindings.hidePanel && hidePanel !== void 0)
    $$bindings.hidePanel(hidePanel);
  $page.url.pathname;
  {
    saveData(settings, data);
  }
  $$unsubscribe_storedSettingsChange();
  $$unsubscribe_page();
  return `${!hidePanel ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});
export { CanvasManager as C, storedSettingsChange as s };
