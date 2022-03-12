import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-e675dbce.js";
import { S as Slider } from "../../../chunks/Slider-62275319.js";
/* empty css                                                             */import "canvas-sketch-util/color.js";
/* empty css                                                                 *//* empty css                                                               */import random from "canvas-sketch-util/random.js";
import { C as CanvasManager } from "../../../chunks/CanvasManager-fac1f7b4.js";
import "canvas-sketch";
import "../../../chunks/index-5b1f353a.js";
import "../../../chunks/supabaseClient-ef6f751e.js";
import "@supabase/supabase-js";
import "../../../chunks/stores-60451e84.js";
var sketch06_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sketch{grid-area:sketch}.controls{grid-area:controls}",
  map: null
};
const Sketch06 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hidePanel = false } = $$props;
  const data = {
    TITLE: "Sketch06",
    outline: true,
    arclen: 0.5,
    angle: 0,
    radius: 0.33,
    background: "#527A9B",
    foreground: "#F4B9A7",
    lineWidth: 20,
    minDist: 20,
    maxDistFactor: 6,
    maxLines: 200,
    speed: 1,
    minWidth: 1,
    maxWidth: 10
  };
  const settings = {
    scaleToView: true,
    dimensions: [1280, 1280]
  };
  let w, h;
  let initialWidth = 1;
  if ($$props.hidePanel === void 0 && $$bindings.hidePanel && hidePanel !== void 0)
    $$bindings.hidePanel(hidePanel);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    data.minDist * data.maxDistFactor;
    ({
      x: random.range(0, w),
      y: random.range(0, h),
      vx: 0,
      vy: 0,
      width: random.range(initialWidth, data.maxWidth),
      reverse: false,
      dirIndex: 3,
      randomFactor: random.range(0.1, 1)
    });
    $$rendered = `<div class="${"flex h-full w-full sketch"}"><div id="${"canvasContainer"}"><canvas id="${"c"}"></canvas></div>
	<div class="${"controls flex flex-col p-4"}" id="${"controlPanel"}">${validate_component(CanvasManager, "CanvasManager").$$render($$result, { settings, data, hidePanel }, {}, {
      default: () => {
        return `${validate_component(Slider, "Slider").$$render($$result, {
          label: "Min Distance",
          min: "1",
          max: "500",
          step: "5",
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
          min: "1",
          max: "1000",
          step: "1",
          value: data.maxLines
        }, {
          value: ($$value) => {
            data.maxLines = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Speed",
          min: "1",
          max: "1000",
          step: "1",
          value: data.speed
        }, {
          value: ($$value) => {
            data.speed = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Maxdist Factor",
          min: "1",
          max: "25",
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
        }, {})}`;
      }
    })}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export { Sketch06 as default };
