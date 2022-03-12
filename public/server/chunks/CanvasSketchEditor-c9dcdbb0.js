import { c as create_ssr_component, o as onDestroy, k as add_attribute, b as subscribe, e as escape, v as validate_component } from "./index-e675dbce.js";
import "canvas-sketch";
/* empty css                                               */import { p as page } from "./stores-60451e84.js";
const css$1 = {
  code: "canvas.svelte-t8neft{margin:0;display:block;box-shadow:0px 2px 12px -2px rgba(0, 0, 0, 0.15);width:100%;height:auto}",
  map: null
};
const CanvasSketch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  let { settings = { dimensions: [250, 205] } } = $$props;
  let { data = {} } = $$props;
  let { sketch = () => {
  } } = $$props;
  let loader, manager, windowInnerW;
  onDestroy(() => {
    console.log(`\u{1F680} ~ file: CanvasSketch.svelte ~ line 68 ~ onDestroy ~ loader`, loader);
    loader = null;
    manager = null;
  });
  console.log(`\u{1F680} ~ file: CanvasSketch.svelte ~ line 65 ~ manager`, manager);
  function dataChanged(data2) {
    console.log(`\u{1F680} ~ file: CanvasSketch.svelte ~ line 65 ~ dataChanged ~ data`, data2);
    if (manager) {
      Object.assign(manager.props.data, data2);
      manager.render();
    }
  }
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0)
    $$bindings.settings(settings);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.sketch === void 0 && $$bindings.sketch && sketch !== void 0)
    $$bindings.sketch(sketch);
  $$result.css.add(css$1);
  {
    console.log(`\u{1F680} ~ file: CanvasSketch.svelte ~ line 53 ~ windowInnerW width`, windowInnerW);
  }
  settings.dimensions[0];
  settings.dimensions[1];
  manager && manager.update(settings);
  {
    dataChanged(data);
  }
  return `
<canvas class="${"rounded-lg svelte-t8neft"}"${add_attribute("this", canvas, 0)}></canvas>`;
});
var CanvasSketchEditor_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-69dtcj{width:auto;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:row;grid-area:main}main.preview.svelte-69dtcj{grid-area:none;width:100%;height:100%;display:grid;grid-template-rows:3rem 16rem;grid-template-areas:"sketch-title" "sketch-canvas";justify-content:center;align-items:center;flex-direction:row}.title.svelte-69dtcj{grid-area:sketch-title}.viewport.svelte-69dtcj{grid-area:sketch-canvas;display:flex;justify-content:center;align-items:flex-start;flex-direction:column;width:100%;height:100%;flex-basis:60%;flex-grow:1;flex-shrink:1}.panel.svelte-69dtcj{padding:20px;box-sizing:border-box;flex-basis:300px;min-width:200px;max-width:400px;flex-grow:1;flex-shrink:1;height:100%;background:#f2f2f2;border-left:1px solid #e6e6e6;overflow-y:scroll}',
  map: null
};
const CanvasSketchEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { settings = {} } = $$props;
  let { data = {} } = $$props;
  let { sketch = () => {
  } } = $$props;
  let { hidePanel = false } = $$props;
  let viewportW;
  let localStorageSupported = (() => {
    try {
      return typeof window.localStorage !== "undefined";
    } catch (err) {
      return false;
    }
  })();
  readData(settings, data);
  function saveData(settings2, data2) {
    if (localStorageSupported && settings2.localStorage !== false) {
      window.localStorage.setItem(`${data2.TITLE}`, JSON.stringify(data2));
    }
  }
  function readData(settings2, data2) {
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
  if ($$props.sketch === void 0 && $$bindings.sketch && sketch !== void 0)
    $$bindings.sketch(sketch);
  if ($$props.hidePanel === void 0 && $$bindings.hidePanel && hidePanel !== void 0)
    $$bindings.hidePanel(hidePanel);
  $$result.css.add(css);
  path = $page.url.pathname;
  {
    saveData(settings, data);
  }
  {
    console.log(`\u{1F680} ~ file: CanvasSketchEditor.svelte ~ line 45 ~ viewportW`, viewportW);
  }
  $$unsubscribe_page();
  return `<main class="${["sketch rounded-lg svelte-69dtcj", path === "/creative" ? "preview" : ""].join(" ").trim()}">${path === "/creative" ? `<div class="${"title flex items-center justify-center flex w-full self-center svelte-69dtcj"}"><h1 class="${"text-2xl text-center text-sky-200 mt-6 w-full self-center"}">${escape(data.TITLE)}</h1></div>` : ``}
	<div class="${"viewport rounded-lg svelte-69dtcj"}">${validate_component(CanvasSketch, "CanvasSketch").$$render($$result, { data, settings, sketch }, {}, {})}</div>

	${!hidePanel ? `<div class="${"panel svelte-69dtcj"}">${slots.default ? slots.default({}) : ``}</div>` : ``}
</main>`;
});
export { CanvasSketchEditor as C };
