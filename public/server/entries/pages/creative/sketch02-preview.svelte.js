import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-e675dbce.js";
import { C as CanvasSketchEditor } from "../../../chunks/CanvasSketchEditor-c9dcdbb0.js";
/* empty css                                                             */import "canvas-sketch-util/color.js";
/* empty css                                                                 *//* empty css                                                                   *//* empty css                                                                *//* empty css                                                               */import random from "canvas-sketch-util/random.js";
import "canvas-sketch";
import "../../../chunks/stores-60451e84.js";
const Sketch02_preview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hidePanel = true } = $$props;
  const data = {
    TITLE: "Sketch02",
    itemHeight: 25,
    itemWidth: 25,
    itemScaleX: 1,
    itemScaleY: 1,
    width: 1e3,
    height: 1e3,
    gap: 15,
    itemsPerColumn: 25,
    itemsPerRow: 25,
    originX: 0,
    originY: 0,
    totalItems: false,
    remainingWidth: 1080,
    remainingHeight: 1080,
    margin: 100,
    offset: 0,
    randomFactor: 0.5,
    opacityMedian: 0.5,
    opacityVariance: 0.25,
    randomStroke: true,
    randomFill: true,
    fill: "hsla(180,50%,50%,0.5)",
    fillHSLA: "hsla(180,50%,50%,0.5)",
    fillOpacity: ".25",
    stroke: "#ffffffaa",
    strokeHSLA: "hsla(60,50%,50%,0.5)",
    strokeOpacity: ".25",
    strokeRandom: "#0033cff",
    strokeRandomHSLA: "hsla(320,50%,50%,0.5)",
    strokeRandomOpacity: ".25",
    background: "00000000",
    outline: true,
    fitToCanvas: true,
    shapes: [{ value: "square", label: "square" }, { value: "circle", label: "circle" }],
    shape: "square",
    startAngle: 0,
    endAngle: 7,
    arclen: 0.5,
    angle: 0,
    radius: 0.33,
    lineWidth: 2,
    lineWidthRandom: 5
  };
  let fill, stroke;
  const settings = {
    scaleToView: true,
    dimensions: [1280, 1280]
  };
  const sketch = ({ context, width, height }) => {
    data.width = width;
    data.height = height;
    data.remainingWidth = width - data.itemsPerRow * data.gap;
    data.remainingHeight = height - data.itemsPerColumn * data.gap;
    data.itemWidth = data.remainingWidth / data.itemsPerRow;
    data.itemHeight = data.remainingHeight / data.itemsPerColumn;
    return ({ context: context2, width: width2, height: height2 }) => {
      context2.clearRect(0, 0, width2, height2);
      context2.fillStyle = data.background;
      context2.fillRect(0, 0, width2, height2);
      drawGrid(context2);
    };
  };
  function drawGrid(context, width, height) {
    for (let j = 0; j < data.itemsPerColumn; j++) {
      for (let i = 0; i < data.itemsPerRow; i++) {
        let x = (data.itemWidth + data.gap) * i;
        let y = (data.itemHeight + data.gap) * j;
        stroke = data.strokeHSLA;
        if (data.shape == "square") {
          drawRect(context, x + data.margin / 2 + data.gap / 2, y + data.margin / 2 + data.gap / 2, data.itemWidth, data.itemHeight, data.fillHSLA, stroke, data.lineWidth);
        } else {
          drawArc(context, x + data.margin / 2 + data.gap / 2, y + data.margin / 2 + data.gap / 2, Math.abs(data.itemWidth), data.startAngle, data.endAngle, data.fillHSLA, stroke, data.lineWidth);
        }
        if (Math.random() < data.randomFactor) {
          data.randomStroke ? stroke = `hsla(${setItemColor(i, j, data.totalItems * 0.3)}, 90%, 50%, ${random.range(data.opacityMedian - data.opacityVariance, data.opacityMedian + data.opacityVariance)})` : stroke = data.strokeRandomHSLA;
          data.randomFill ? fill = `hsla(${setItemColor(i, j, data.totalItems * 0.3)}, 90%, 50%, ${random.range(data.opacityMedian - data.opacityVariance, data.opacityMedian + data.opacityVariance)})` : fill = data.fillRandomHSLA;
          if (data.shape == "square") {
            drawRect(context, x + data.margin / 2 + data.gap / 2 + data.offset, y + data.margin / 2 + data.gap / 2 + data.offset, data.itemWidth, data.itemHeight, fill, stroke, data.lineWidthRandom);
          } else {
            drawArc(context, x + data.margin / 2 + data.gap / 2 + data.offset, y + data.margin / 2 + data.gap / 2 + data.offset, Math.abs(data.itemWidth), data.startAngle, data.endAngle, fill, stroke, data.lineWidthRandom);
          }
        }
      }
    }
  }
  const drawRect = (context, originX, originY, width, height, fill2, stroke2, lineWidth) => {
    context.strokeStyle = stroke2;
    context.beginPath();
    context.rect(originX, originY, width * data.itemScaleX, height * data.itemScaleY);
    context.lineWidth = lineWidth;
    context.stroke();
    context.fillStyle = fill2;
    context.fill();
  };
  const drawArc = (context, originX, originY, radius, startAngle, endAngle, fill2, stroke2, lineWidth) => {
    context.strokeStyle = stroke2;
    context.beginPath();
    context.arc(originX, originY, radius, startAngle, endAngle);
    context.lineWidth = lineWidth;
    context.stroke();
    context.fillStyle = fill2;
    context.fill();
  };
  const setItemColor = (i, j, totalItems) => {
    let hueOffset = 30;
    let variance = Math.random() * 5;
    let currentFactor = (i + variance) * (j - variance) * (variance * totalItems);
    let hue = currentFactor + hueOffset;
    return hue;
  };
  if ($$props.hidePanel === void 0 && $$bindings.hidePanel && hidePanel !== void 0)
    $$bindings.hidePanel(hidePanel);
  data.totalItems = data.itemsPerColumn * data.itemsPerRow;
  return `${validate_component(CanvasSketchEditor, "CanvasSketchEditor").$$render($$result, { sketch, settings, data, hidePanel }, {}, {})}`;
});
export { Sketch02_preview as default };
