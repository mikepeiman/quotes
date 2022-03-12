import { c as create_ssr_component, j as each, e as escape } from "../../chunks/index-e675dbce.js";
import chroma from "chroma-js";
import bezier from "bezier-easing";
const linear = bezier(0.5, 0.5, 0.5, 0.5);
const easeInCubic = bezier(0.55, 0.055, 0.675, 0.19);
const easeOutCubic = bezier(0.215, 0.61, 0.355, 1);
const easeInOutCubic = bezier(0.645, 0.045, 0.355, 1);
const easeInSine = bezier(0.47, 0, 0.745, 0.715);
const easeOutSine = bezier(0.39, 0.575, 0.565, 1);
const easeInOutSine = bezier(0.445, 0.05, 0.55, 0.95);
const easeInQuad = bezier(0.55, 0.085, 0.68, 0.53);
const easeOutQuad = bezier(0.25, 0.46, 0.45, 0.94);
const easeInOutQuad = bezier(0.455, 0.03, 0.515, 0.955);
const easeInQuart = bezier(0.895, 0.03, 0.685, 0.22);
const easeOutQuart = bezier(0.165, 0.84, 0.44, 1);
const easeInOutQuart = bezier(0.77, 0, 0.175, 1);
const easeInCirc = bezier(0.6, 0.04, 0.98, 0.335);
const easeOutCirc = bezier(0.075, 0.82, 0.165, 1);
const easeInOutCirc = bezier(0.785, 0.135, 0.15, 0.86);
const easeInQuint = bezier(0.755, 0.05, 0.855, 0.06);
const easeOutQuint = bezier(0.23, 1, 0.32, 1);
const easeInOutQuint = bezier(0.86, 0, 0.07, 1);
const easeInExpo = bezier(0.95, 0.05, 0.795, 0.035);
const easeOutExpo = bezier(0.19, 1, 0.22, 1);
const easeInOutExpo = bezier(1, 0, 0, 1);
const easeInBack = bezier(0.6, -0.28, 0.735, 0.045);
const easeOutBack = bezier(0.175, 0.885, 0.32, 1.275);
const easeInOutBack = bezier(0.68, -0.55, 0.265, 1.55);
var Curves = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  linear,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInSine,
  easeOutSine,
  easeInOutSine,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInBack,
  easeOutBack,
  easeInOutBack
});
function distribute(value, rangeA, rangeB) {
  const [fromLow, fromHigh] = Array.from(rangeA);
  const [toLow, toHigh] = Array.from(rangeB);
  const result = toLow + (value - fromLow) / (fromHigh - fromLow) * (toHigh - toLow);
  if (toLow < toHigh) {
    if (result < toLow) {
      return toLow;
    }
    if (result > toHigh) {
      return toHigh;
    }
  } else {
    if (result > toLow) {
      return toLow;
    }
    if (result < toHigh) {
      return toHigh;
    }
  }
  return result;
}
function generate({ specs }) {
  function generateNumberOfSteps(curve, steps) {
    var array = [];
    for (var step in Array.from(Array(steps).keys())) {
      const value = curve(step / (steps - 1));
      array.push(value);
    }
    array.reverse();
    return array;
  }
  var lum_array = generateNumberOfSteps(Curves[specs.lum_curve], specs.steps);
  var sat_array = generateNumberOfSteps(Curves[specs.sat_curve], specs.steps);
  var hue_array = generateNumberOfSteps(Curves[specs.hue_curve], specs.steps);
  var lum_array_adjusted = [];
  var sat_array_adjusted = [];
  var hue_array_adjusted = [];
  for (var index in lum_array) {
    const step = lum_array[index];
    lum_array_adjusted.push(distribute(step, [0, 1], [specs.lum_end * 0.01, specs.lum_start * 0.01]));
  }
  for (var index in sat_array) {
    const step = sat_array[index];
    var sat_step = distribute(step, [0, 1], [specs.sat_start * 0.01, specs.sat_end * 0.01]);
    sat_step = sat_step * (specs.sat_rate * 0.01);
    sat_array_adjusted.push(sat_step);
  }
  for (var index in hue_array) {
    const step = hue_array[index];
    hue_array_adjusted.push(distribute(step, [0, 1], [specs.hue_start, specs.hue_end]));
  }
  sat_array_adjusted.reverse();
  hue_array_adjusted.reverse();
  lum_array = lum_array_adjusted;
  sat_array = sat_array_adjusted;
  hue_array = hue_array_adjusted;
  var colorMap = [];
  for (var index in lum_array) {
    lum_array[index];
    var params = {
      hue: hue_array[index],
      saturation: sat_array[index],
      luminosity: lum_array[index]
    };
    if (params.saturation > 1) {
      params.saturation = 1;
    }
    var hex = chroma(chroma.hsv([params.hue, params.saturation, params.luminosity]));
    chroma(chroma.hsv([params.hue, params.saturation, params.luminosity])).rgb();
    const contrastWhite = chroma.contrast(hex, "white").toFixed(2);
    const contrastBlack = chroma.contrast(hex, "black").toFixed(2);
    var displayColor = "";
    if (contrastWhite >= 4.5) {
      displayColor = "white";
    } else {
      displayColor = "black";
    }
    var colorObj = {
      hex: chroma(hex).hex(),
      hue: chroma(hex).hsv()[0],
      sat: chroma(hex).hsv()[1],
      lum: chroma(hex).hsv()[2],
      hsv: chroma(hex).hsv(),
      hsl: chroma(hex).hsl(),
      rgb: chroma(hex).rgb(),
      hueRange: [specs.hue_start, specs.hue_end],
      steps: specs.steps,
      label: specs.modifier * index,
      contrastBlack,
      contrastWhite,
      displayColor
    };
    colorMap.push(colorObj);
  }
  return colorMap;
}
var color_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--grid-tracks:24;--min-w:calc(90vw / var(--grid-tracks));--min-h:calc(90vh / var(--grid-tracks))}.grid-col.svelte-1g200cd{grid-template-columns:repeat(var(--grid-tracks), minmax(var(--min-h), 1fr))}.grid-row.svelte-1g200cd{grid-template-rows:repeat(var(--grid-tracks), minmax(3rem, 1fr))}",
  map: null
};
let numColors = 36;
const Color = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let i = 0;
  let hueInc = 360 / numColors;
  let params = {
    specs: {
      steps: 10,
      hue_start: hueInc * i,
      hue_end: hueInc * 1,
      hue_curve: "easeInQuad",
      sat_start: 10,
      sat_end: 100,
      sat_curve: "easeOutQuad",
      sat_rate: 100,
      lum_start: 100,
      lum_end: 10,
      lum_curve: "easeOutQuad",
      modifier: 10
    }
  };
  let hexarray_deepReds = [
    "370617",
    "6a040f",
    "9d0208",
    "d00000",
    "dc2f02",
    "e85d04",
    "f48c06",
    "faa307",
    "ffba08"
  ];
  let hexarray_winterBlues = [
    "03045e",
    "023e8a",
    "0077b6",
    "0096c7",
    "00b4d8",
    "48cae4",
    "90e0ef",
    "ade8f4",
    "caf0f8"
  ];
  let hexarray_limeGreens = [
    "002411",
    "004b23",
    "006400",
    "007200",
    "008000",
    "38b000",
    "70e000",
    "9ef01a",
    "ccff33"
  ];
  function outputTailwindColorObjects() {
    let outputArray = [];
    for (let j = 0; j < colorSets.length; j++) {
      const set = colorSets[j];
      let obj = {};
      for (let z = 0; z < 9; z++) {
        obj[`${(z + 1) * 100}`] = set[z];
      }
      outputArray.push(obj);
    }
    console.log(`\u{1F680} ~ file: color.svelte ~ line 83 ~ outputTailwindColorObjects ~ outputArray`, outputArray);
  }
  let colorSets = [];
  colorSets = [hexarray_deepReds, hexarray_winterBlues, hexarray_limeGreens];
  colorSets = colorSets.map((arr) => arr.map((color) => `#${color}`));
  let colors = generate(params);
  colors = colors.map((c) => c.hex);
  colorSets.push(colors);
  console.log(`\u{1F680} ~ file: color.svelte ~ line 64 ~ colorSets`, colorSets);
  console.log(`\u{1F680} ~ file: color.svelte ~ line 24 ~ colors `, colors);
  outputTailwindColorObjects();
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Color Palette Generator</title>`, ""}`, ""}

<div class="${"grid grid-row svelte-1g200cd"}">${each(colorSets, (colorsArray) => {
    return `<div class="${"grid grid-col svelte-1g200cd"}">${each(colorsArray, (color) => {
      return `<div class="${"grid-item p-1 w-auto h-auto rounded-none"}" style="${"background: " + escape(color) + ";"}"></div>`;
    })}
		</div>`;
  })}
</div>`;
});
export { Color as default };
