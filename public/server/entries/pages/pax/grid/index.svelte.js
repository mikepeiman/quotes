import { c as create_ssr_component, b as subscribe, k as add_attribute, v as validate_component, e as escape } from "../../../../chunks/index-e675dbce.js";
import { C as CanvasManager, s as storedSettingsChange } from "../../../../chunks/CanvasManager-fac1f7b4.js";
import { S as Slider } from "../../../../chunks/Slider-62275319.js";
import { C as Checkbox_import } from "../../../../chunks/Checkbox-import-681d2216.js";
import { O as OptionSelect } from "../../../../chunks/OptionSelect-2d180e6a.js";
import "honeycomb-grid";
import "canvas-sketch";
/* empty css                                                                */import "../../../../chunks/index-5b1f353a.js";
import "../../../../chunks/supabaseClient-ef6f751e.js";
import "@supabase/supabase-js";
import "../../../../chunks/stores-60451e84.js";
import "../../../../chunks/index-3186a33b.js";
/* empty css                                                                   *//* empty css                                                                      */var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.sketch-wrapper.svelte-v1peie{display:grid;grid-template-areas:"canvas controls";grid-template-columns:4fr 1fr}#canvas.svelte-v1peie{grid-area:canvas}.controls.svelte-v1peie{grid-area:controls}',
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storedSettingsChange, $$unsubscribe_storedSettingsChange;
  $$unsubscribe_storedSettingsChange = subscribe(storedSettingsChange, (value) => $storedSettingsChange = value);
  let w, h, canvas;
  let data = {
    TITLE: "Pax01-vanilla",
    fps: 60,
    tickRate: 10,
    numStars: 10,
    numTypes: 5,
    shipsMin: 1,
    shipsMax: 50,
    starRadius: 20,
    gridRadius: 55,
    gridOffset: 0,
    orbitXmod: 1,
    orbitYmod: 1,
    speed: 10,
    clearLS: false,
    drawStars: true,
    drawShips: true,
    drawCenters: false,
    drawHexes: true,
    drawVertices: false,
    buildVertices: true,
    drawStarNumber: true
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      console.log(`\u{1F680} ~ file: index.svelte ~ line 15 ~ $storedSettingsChange`, $storedSettingsChange);
    }
    {
      console.log(w, h);
    }
    $$rendered = `



<div class="${"sketch-wrapper svelte-v1peie"}"><canvas id="${"canvas"}" class="${"svelte-v1peie"}"${add_attribute("this", canvas, 0)}></canvas>
	<div class="${"controls flex flex-col p-5 svelte-v1peie"}">${validate_component(CanvasManager, "CanvasManager").$$render($$result, { data }, {}, {
      default: () => {
        return `${validate_component(Slider, "Slider").$$render($$result, {
          label: "Number of stars",
          min: "1",
          max: "50",
          step: "1",
          value: data.numStars
        }, {
          value: ($$value) => {
            data.numStars = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Ships min",
          min: "1",
          max: "50",
          step: "1",
          value: data.shipsMin
        }, {
          value: ($$value) => {
            data.shipsMin = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Ships max",
          min: "5",
          max: "250",
          step: "5",
          value: data.shipsMax
        }, {
          value: ($$value) => {
            data.shipsMax = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Speed",
          min: "5",
          max: "100",
          step: "5",
          value: data.speed
        }, {
          value: ($$value) => {
            data.speed = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "FPS",
          min: "1",
          max: "60",
          step: "1",
          value: data.fps
        }, {
          value: ($$value) => {
            data.fps = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Orbit X mod",
          min: ".1",
          max: "5",
          step: ".1",
          value: data.orbitXmod
        }, {
          value: ($$value) => {
            data.orbitXmod = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Orbit Y mod",
          min: ".1",
          max: "5",
          step: ".1",
          value: data.orbitYmod
        }, {
          value: ($$value) => {
            data.orbitYmod = $$value;
            $$settled = false;
          }
        }, {})}
			<button label="${"Start"}" class="${"p-3 m-2 bg-sky-600 hover:bg-sky-500 rounded"}">${escape(`${"Animate"}`)}</button>
			<button label="${"Start"}" class="${"p-3 m-2 bg-sky-600 hover:bg-sky-500 rounded"}">Redraw grid</button>
			<button label="${"Start"}" class="${"p-3 m-2 bg-sky-600 hover:bg-sky-500 rounded"}">Clear localStorage</button>
			${validate_component(Checkbox_import, "Checkbox").$$render($$result, {
          duration: "200",
          label: "Draw stars",
          checked: data.drawStars
        }, {
          checked: ($$value) => {
            data.drawStars = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Checkbox_import, "Checkbox").$$render($$result, {
          duration: "200",
          label: "Draw ships",
          checked: data.drawShips
        }, {
          checked: ($$value) => {
            data.drawShips = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Checkbox_import, "Checkbox").$$render($$result, {
          duration: "200",
          label: "Draw Centers",
          checked: data.drawCenters
        }, {
          checked: ($$value) => {
            data.drawCenters = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Checkbox_import, "Checkbox").$$render($$result, {
          duration: "200",
          label: "Draw Hexes",
          checked: data.drawHexes
        }, {
          checked: ($$value) => {
            data.drawHexes = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Checkbox_import, "Checkbox").$$render($$result, {
          duration: "200",
          label: "Draw Vertices",
          checked: data.drawVertices
        }, {
          checked: ($$value) => {
            data.drawVertices = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(OptionSelect, "OptionSelect").$$render($$result, {
          items: data.colorFunctions,
          selected: data.colorFunctionsIndex
        }, {
          selected: ($$value) => {
            data.colorFunctionsIndex = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}</div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_storedSettingsChange();
  return $$rendered;
});
export { Grid as default };
