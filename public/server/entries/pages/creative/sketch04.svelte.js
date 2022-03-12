import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-e675dbce.js";
import { C as CanvasSketchEditor } from "../../../chunks/CanvasSketchEditor-c9dcdbb0.js";
import { S as Slider } from "../../../chunks/Slider-62275319.js";
import { O as OptionSelect } from "../../../chunks/OptionSelect-2d180e6a.js";
/* empty css                                                             */import Color from "canvas-sketch-util/color.js";
/* empty css                                                                 */import { C as Checkbox_import } from "../../../chunks/Checkbox-import-681d2216.js";
import random from "canvas-sketch-util/random.js";
import math from "canvas-sketch-util/math.js";
import "canvas-sketch";
import "../../../chunks/stores-60451e84.js";
/* empty css                                                                   *//* empty css                                                                */import "../../../chunks/index-3186a33b.js";
import "../../../chunks/index-5b1f353a.js";
let width = 800;
let height = 800;
function largest(a, b) {
  return a > b ? a : b;
}
const Sketch04 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hidePanel = false } = $$props;
  let context;
  let angles = [];
  angles = generateAngles();
  console.log(`\u{1F680} ~ file: sketch04.svelte ~ line 30 ~ onMount ~ angles`, angles);
  let hexes = [];
  function generateAngles() {
    for (let i = 0; i < 6; i++) {
      let point = {
        x: Math.cos(i * 2 * Math.PI / 6).toFixed(2),
        y: Math.sin(i * 2 * Math.PI / 6).toFixed(4)
      };
      angles.push(point);
    }
    return angles;
  }
  const data = {
    TITLE: "Sketch03",
    numNodes: 200,
    range: 200,
    lineCap: "butt",
    lineCaps: [{ value: "butt", label: "butt" }, { value: "round", label: "round" }],
    showNodes: true,
    showLines: true,
    nodeType: "hex",
    nodeTypes: [{ value: "hex", label: "hex" }, { value: "circle", label: "circle" }],
    lineWidth: 2,
    lineWidthMax: 5,
    radiusMin: 1,
    radiusMax: 3,
    animate: true
  };
  const settings = { dimensions: [width, height] };
  class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    getDistance(v) {
      const dx = this.x - v.x;
      const dy = this.y - v.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }
  class Agent {
    constructor(x, y) {
      this.pos = new Vector(x, y);
      this.angle = Math.floor(random.range(0, 6));
      this.vel = new Vector(parseFloat(angles[this.angle].x), parseFloat(angles[this.angle].y));
      this.radius = random.range(data.radiusMin, data.radiusMax);
      this.sideLength = 20;
      this.remainingTravel = this.sideLength;
    }
    update(i) {
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
      this.remainingTravel -= largest(makePositive(this.vel.x), makePositive(this.vel.y));
      if (this.remainingTravel <= 0) {
        this.remainingTravel = this.sideLength;
        let angle = Math.floor(random.range(-2, 2));
        this.angle = makePositive(this.angle + angle) % 6;
        this.vel = new Vector(parseFloat(angles[this.angle].x), parseFloat(angles[this.angle].y));
      }
    }
    bounce(width2, height2) {
      if (this.pos.x <= 0 || this.pos.x >= width2) {
        this.vel.x *= -1;
      }
      if (this.pos.y <= 0 || this.pos.y >= height2) {
        this.vel.y *= -1;
      }
    }
    wrap(width2, height2) {
      this.pos.x = (this.pos.x + width2) % width2;
      this.pos.y = (this.pos.y + height2) % height2;
    }
    drawCircle(context2) {
      context2.save();
      context2.translate(this.pos.x, this.pos.y);
      context2.beginPath();
      context2.arc(0, 0, this.radius, 0, Math.PI * 2);
      context2.fill();
      context2.lineWidth = 4;
      context2.strokeStyle = this.color;
      context2.stroke();
      context2.restore();
    }
  }
  class Hex extends Agent {
    constructor(x, y, numOfSides = 6, positiveVelSum = 0, color = "hsla(180,50%,50%,1)") {
      super(x, y);
      this.numOfSides = numOfSides;
      this.positiveVelSum = parseFloat(makePositive(this.vel.x)?.toFixed(3) + makePositive(this.vel.y)?.toFixed(3));
      this.color = hsla(this.positiveVelSum * 360 % 360, 50, 50, 1);
    }
    drawHex(context2) {
      context2.save();
      context2.beginPath();
      context2.moveTo(this.pos.x + this.radius * Math.cos(0), this.pos.y + this.radius * Math.sin(0));
      for (let i = 0; i < this.numOfSides; i++) {
        let xCoord = this.pos.x + this.radius * Math.cos(i * 2 * Math.PI / this.numOfSides);
        let yCoord = this.pos.y + this.radius * Math.sin(i * 2 * Math.PI / this.numOfSides);
        context2.lineTo(xCoord, yCoord);
        context2.fillStyle = this.color;
      }
      context2.fill();
      context2.restore();
    }
  }
  const makePositive = (value) => {
    if (value < 0)
      return value * -1;
    return value;
  };
  const hsla = (h, s, l, a) => {
    let color = `hsla(${h},${s}%,${l}%,${a})`;
    return color;
  };
  const rangeAlpha = (range, dist) => {
    return math.mapRange(dist, 0, range, 1, 0, true);
  };
  const constructNodes = (width2, height2) => {
    if (data.numNodes > hexes.length) {
      for (let i = 0; i < data.numNodes - hexes.length; i++) {
        let x = random.range(0, width2);
        let y = random.range(0, height2);
        let hex = new Hex(x, y);
        hexes.push(hex);
      }
    } else {
      for (let i = 0; i < hexes.length - data.numNodes; i++) {
        hexes.pop();
      }
    }
  };
  const sketch = () => {
    constructNodes(width, height);
    for (let i = 0; i < hexes.length; i++) {
      const hex = hexes[i];
      for (let j = i + 1; j < hexes.length; j++) {
        const other = hexes[j];
        const dist = hex.pos.getDistance(other.pos);
        if (dist > data.range)
          continue;
        context.lineWidth = math.mapRange(dist, 0, data.range, data.lineWidthMax, 1);
        context.beginPath();
        context.moveTo(hex.pos.x, hex.pos.y);
        data.showLines ? context.lineTo(other.pos.x, other.pos.y) : 0;
        let a = rangeAlpha(data.range, dist);
        let h = Color.parse(hex.color).hsla[0];
        let s = Color.parse(hex.color).hsla[1];
        let l = Color.parse(hex.color).hsla[2];
        context.strokeStyle = hsla(h, s, l, a);
        context.lineCap = data.lineCap;
        context.stroke();
      }
    }
    return () => {
      context.fillStyle = "black";
      context.fillRect(0, 0, width, height);
      if (data.numNodes != hexes.length)
        ;
      hexes.forEach((hex, i) => {
        hex.update(i);
        if (data.showNodes) {
          data.nodeType == "hex" ? hex.drawHex(context) : hex.drawCircle(context);
        }
        hex.wrap(width, height);
      });
      requestAnimationFrame(sketch());
    };
  };
  if ($$props.hidePanel === void 0 && $$bindings.hidePanel && hidePanel !== void 0)
    $$bindings.hidePanel(hidePanel);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `


${validate_component(CanvasSketchEditor, "CanvasSketchEditor").$$render($$result, { sketch, settings, data, hidePanel }, {}, {
      default: () => {
        return `${validate_component(Slider, "Slider").$$render($$result, {
          label: "Range",
          min: "10",
          max: "500",
          step: "10",
          value: data.range
        }, {
          value: ($$value) => {
            data.range = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Number of nodes",
          min: "10",
          max: "1000",
          step: "10",
          value: data.numNodes
        }, {
          value: ($$value) => {
            data.numNodes = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(OptionSelect, "OptionSelect").$$render($$result, {
          items: data.lineCaps,
          selected: data.lineCap
        }, {
          selected: ($$value) => {
            data.lineCap = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(OptionSelect, "OptionSelect").$$render($$result, {
          items: data.nodeTypes,
          selected: data.nodeType
        }, {
          selected: ($$value) => {
            data.nodeType = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Checkbox_import, "Checkbox").$$render($$result, {
          label: "Show nodes",
          checked: data.showNodes
        }, {
          checked: ($$value) => {
            data.showNodes = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Checkbox_import, "Checkbox").$$render($$result, {
          label: "Show lines",
          checked: data.showLines
        }, {
          checked: ($$value) => {
            data.showLines = $$value;
            $$settled = false;
          }
        }, {})}
	`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Sketch04 as default };
