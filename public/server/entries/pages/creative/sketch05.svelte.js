import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-e675dbce.js";
import { S as Slider } from "../../../chunks/Slider-62275319.js";
/* empty css                                                             */import "canvas-sketch-util/color.js";
/* empty css                                                                 */import { C as Checkbox } from "../../../chunks/Checkbox-4267efc8.js";
import { O as OptionSelect } from "../../../chunks/OptionSelect-2d180e6a.js";
import random from "canvas-sketch-util/random.js";
import { C as CanvasManager } from "../../../chunks/CanvasManager-fac1f7b4.js";
import "../../../chunks/index-3186a33b.js";
import "../../../chunks/index-5b1f353a.js";
/* empty css                                                               *//* empty css                                                                   *//* empty css                                                                */import "canvas-sketch";
import "../../../chunks/supabaseClient-ef6f751e.js";
import "@supabase/supabase-js";
import "../../../chunks/stores-60451e84.js";
var sketch05_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sketch{grid-area:sketch}.controls{grid-area:controls}",
  map: null
};
const Sketch05 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hidePanel = false } = $$props;
  const data = {
    TITLE: "Sketch05",
    fps: 60,
    minDist: 20,
    maxDistFactor: 6,
    initialLines: 0,
    maxLines: 100,
    speed: 3,
    minWidth: 1,
    maxWidth: 4,
    lineBirthFactor: 0.25,
    randomColors: false,
    colorFunctions: [
      { value: 0, label: "original" },
      { value: 1, label: "2" },
      { value: 2, label: "3" },
      { value: 3, label: "4" },
      { value: 4, label: "5" },
      { value: 5, label: "6" },
      { value: 6, label: "7" }
    ],
    colorFunctionsIndex: 0
  };
  const settings = {
    scaleToView: true,
    dimensions: [1280, 1280]
  };
  let w, h;
  if ($$props.hidePanel === void 0 && $$bindings.hidePanel && hidePanel !== void 0)
    $$bindings.hidePanel(hidePanel);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({
      x: w / 2,
      y: h / 2,
      vx: 1,
      vy: 0.5,
      width: random.range(data.minWidth, data.maxWidth),
      reverse: false,
      dirIndex: Math.floor(random.range(0, 6)),
      randomFactor: random.range(0.1, 1)
    });
    data.minDist * data.maxDistFactor;
    $$rendered = `<div class="${"flex h-full w-full sketch"}"><div id="${"canvasContainer"}"><canvas id="${"c"}"></canvas></div>
	<div class="${"controls flex flex-col p-4"}" id="${"controlPanel"}">${validate_component(CanvasManager, "CanvasManager").$$render($$result, { settings, data, hidePanel }, {}, {
      default: () => {
        return `${validate_component(Slider, "Slider").$$render($$result, {
          label: "Min Distance",
          min: "4",
          max: "1200",
          step: "4",
          color: "text-sky-400",
          value: data.minDist
        }, {
          value: ($$value) => {
            data.minDist = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Number of lines",
          min: "10",
          max: "500",
          step: "10",
          value: data.maxLines
        }, {
          value: ($$value) => {
            data.maxLines = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Speed",
          min: ".2",
          max: "20",
          step: ".2",
          value: data.speed
        }, {
          value: ($$value) => {
            data.speed = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Line Birth",
          min: ".1",
          max: "1",
          step: ".1",
          value: data.lineBirthFactor
        }, {
          value: ($$value) => {
            data.lineBirthFactor = $$value;
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
          label: "Maxdist Factor",
          min: "1",
          max: "50",
          step: "1",
          value: data.maxDistFactor
        }, {
          value: ($$value) => {
            data.maxDistFactor = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Min Width",
          min: "1",
          max: "100",
          step: "1",
          value: data.minWidth
        }, {
          value: ($$value) => {
            data.minWidth = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Max Width",
          min: "1",
          max: "100",
          step: "1",
          value: data.maxWidth
        }, {
          value: ($$value) => {
            data.maxWidth = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Checkbox, "Checkbox").$$render($$result, {
          label: "Random color functions?",
          checked: data.randomColors
        }, {
          checked: ($$value) => {
            data.randomColors = $$value;
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
  return $$rendered;
});
export { Sketch05 as default };
