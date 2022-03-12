import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-e675dbce.js";
import { C as CanvasSketchEditor } from "../../../chunks/CanvasSketchEditor-c9dcdbb0.js";
/* empty css                                                             *//* empty css                                                                   *//* empty css                                                                */import Color from "canvas-sketch-util/color.js";
/* empty css                                                                 *//* empty css                                                               */import random from "canvas-sketch-util/random.js";
import math from "canvas-sketch-util/math.js";
import "canvas-sketch";
import "../../../chunks/stores-60451e84.js";
const Sketch03_preview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hidePanel = true } = $$props;
  let width;
  let height;
  let context;
  let hexes = [];
  const data = {
    TITLE: "Sketch03-preview",
    numNodes: 50,
    range: 50,
    lineCap: "butt",
    lineCaps: [{ value: "butt", label: "butt" }, { value: "round", label: "round" }],
    showNodes: false,
    showLines: true,
    nodeType: "hex",
    nodeTypes: [{ value: "hex", label: "hex" }, { value: "circle", label: "circle" }],
    lineWidth: 1,
    lineWidthMax: 3,
    radiusMin: 10,
    radiusMax: 30,
    animate: true
  };
  const settings = {
    dimensions: [width, height],
    fps: 60,
    scaleContext: true
  };
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
      this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
      this.radius = random.range(data.radiusMin, data.radiusMax);
    }
    update() {
      this.pos.x += this.vel.x * 0.2;
      this.pos.y += this.vel.y * 0.2;
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
      this.positiveVelSum = parseFloat(makePositive(this.vel.x).toFixed(3) + makePositive(this.vel.y).toFixed(3));
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
      hexes.forEach((hex) => {
        hex.update();
        if (data.showNodes) {
          data.nodeType == "hex" ? hex.drawHex(context) : hex.drawCircle(context);
        }
        hex.bounce(width, height);
      });
      requestAnimationFrame(sketch());
    };
  };
  if ($$props.hidePanel === void 0 && $$bindings.hidePanel && hidePanel !== void 0)
    $$bindings.hidePanel(hidePanel);
  settings.dimensions[0] = width;
  settings.dimensions[1] = height;
  return `



${validate_component(CanvasSketchEditor, "CanvasSketchEditor").$$render($$result, { sketch, settings, data, hidePanel }, {}, {})}`;
});
export { Sketch03_preview as default };
