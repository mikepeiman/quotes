import { c as create_ssr_component } from "../../chunks/index-e675dbce.js";
import random from "canvas-sketch-util/random.js";
var sketch05_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sketch{grid-area:sketch}.controls{grid-area:controls}",
  map: null
};
const Sketch05 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let w, h;
  w = h = 1080;
  let evenX, evenY = 50;
  $$result.css.add(css);
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
  evenX = Math.floor(w / data.minDist);
  {
    console.log(`\u{1F680} ~ file: sketch05.svelte ~ line 73 ~ data.minDist`, data.minDist);
  }
  {
    console.log(`\u{1F680} ~ file: sketch05.svelte ~ line 73 ~ data - `, data);
  }
  {
    console.log(`\u{1F680} ~ file: sketch05.svelte ~ line 73 ~ evenX`, evenX);
  }
  evenY = Math.floor(h / data.minDist);
  Array.from(Array(evenX), (x, i) => i * data.minDist);
  Array.from(Array(evenY), (x, i) => i * data.minDist);
  return `<div class="${"flex h-full w-screen sketch"}"><div id="${"canvasContainer"}" class="${"w-full"}"><canvas id="${"c"}"></canvas></div>
</div>`;
});
export { Sketch05 as default };
