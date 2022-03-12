import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-e675dbce.js";
import { C as CanvasSketchEditor } from "../../../chunks/CanvasSketchEditor-c9dcdbb0.js";
import { S as Slider } from "../../../chunks/Slider-62275319.js";
import { C as ColorInput } from "../../../chunks/ColorInput-9254f400.js";
import { O as OptionSelect } from "../../../chunks/OptionSelect-2d180e6a.js";
import { C as Checkbox_import } from "../../../chunks/Checkbox-import-681d2216.js";
import random from "canvas-sketch-util/random.js";
import "canvas-sketch-util/color.js";
import "canvas-sketch";
/* empty css                                                             */import "../../../chunks/stores-60451e84.js";
/* empty css                                                                 *//* empty css                                                                   *//* empty css                                                                */import "../../../chunks/index-3186a33b.js";
import "../../../chunks/index-5b1f353a.js";
var sketch02_svelte_svelte_type_style_lang = "";
const css = {
  code: ".input-group-wrapper.svelte-1d7ksxj{@apply flex flex-col items-start justify-center m-0 bg-sky-200 p-3 my-1 rounded-lg;}",
  map: null
};
const Sketch02 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hidePanel = false } = $$props;
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
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    data.totalItems = data.itemsPerColumn * data.itemsPerRow;
    $$rendered = `${validate_component(CanvasSketchEditor, "CanvasSketchEditor").$$render($$result, { sketch, settings, data, hidePanel }, {}, {
      default: () => {
        return `${validate_component(OptionSelect, "OptionSelect").$$render($$result, { items: data.shapes, selected: data.shape }, {
          selected: ($$value) => {
            data.shape = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Checkbox_import, "Checkbox").$$render($$result, {
          label: "Random fill",
          checked: data.randomFill
        }, {
          checked: ($$value) => {
            data.randomFill = $$value;
            $$settled = false;
          }
        }, {})}
	${!data.randomFill ? `<div class="${"input-group-wrapper svelte-1d7ksxj"}">${validate_component(ColorInput, "ColorInput").$$render($$result, {
          label: "Fill",
          opacity: data.fillOpacity,
          value: data.fill,
          hsla: data.fillHSLA
        }, {
          value: ($$value) => {
            data.fill = $$value;
            $$settled = false;
          },
          hsla: ($$value) => {
            data.fillHSLA = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Slider, "Slider").$$render($$result, {
          label: "Fill Opacity",
          min: "0",
          max: "1",
          step: ".05",
          value: data.fillOpacity
        }, {
          value: ($$value) => {
            data.fillOpacity = $$value;
            $$settled = false;
          }
        }, {})}</div>` : ``}
	
	${validate_component(Checkbox_import, "Checkbox").$$render($$result, {
          label: "Random stroke",
          hidePanel,
          checked: data.randomStroke
        }, {
          checked: ($$value) => {
            data.randomStroke = $$value;
            $$settled = false;
          }
        }, {})}
	<div class="${"input-group-wrapper svelte-1d7ksxj"}">${validate_component(ColorInput, "ColorInput").$$render($$result, { label: "Stroke", value: data.stroke }, {
          value: ($$value) => {
            data.stroke = $$value;
            $$settled = false;
          }
        }, {})}
		${validate_component(Slider, "Slider").$$render($$result, {
          label: "Stroke Opacity",
          min: "0",
          max: "1",
          step: ".05",
          value: data.strokeOpacity
        }, {
          value: ($$value) => {
            data.strokeOpacity = $$value;
            $$settled = false;
          }
        }, {})}
		 </div>
	<div class="${"input-group-wrapper svelte-1d7ksxj"}">${validate_component(ColorInput, "ColorInput").$$render($$result, {
          label: "Stroke Random",
          value: data.strokeRandom,
          hsla: data.strokeRandomHSLA
        }, {
          value: ($$value) => {
            data.strokeRandom = $$value;
            $$settled = false;
          },
          hsla: ($$value) => {
            data.strokeRandomHSLA = $$value;
            $$settled = false;
          }
        }, {})}
		${validate_component(Slider, "Slider").$$render($$result, {
          label: "Stroke Random Opacity",
          min: "0",
          max: "1",
          step: ".05",
          value: data.strokeRandomOpacity
        }, {
          value: ($$value) => {
            data.strokeRandomOpacity = $$value;
            $$settled = false;
          }
        }, {})}</div>
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Items per row",
          min: "1",
          max: "300",
          step: "1",
          value: data.itemsPerRow
        }, {
          value: ($$value) => {
            data.itemsPerRow = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Items per column",
          min: "1",
          max: "300",
          step: "1",
          value: data.itemsPerColumn
        }, {
          value: ($$value) => {
            data.itemsPerColumn = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Scale X",
          min: ".25",
          max: "10",
          step: ".25",
          value: data.itemScaleX
        }, {
          value: ($$value) => {
            data.itemScaleX = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Scale Y",
          min: ".25",
          max: "10",
          step: ".25",
          value: data.itemScaleY
        }, {
          value: ($$value) => {
            data.itemScaleY = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Gap",
          min: "0",
          max: "100",
          step: "5",
          value: data.gap
        }, {
          value: ($$value) => {
            data.gap = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Margin",
          min: "0",
          max: "500",
          step: "10",
          value: data.margin
        }, {
          value: ($$value) => {
            data.margin = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Offset",
          min: "0",
          max: "100",
          step: "1",
          value: data.offset
        }, {
          value: ($$value) => {
            data.offset = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Random Factor",
          min: "0",
          max: "1",
          step: ".05",
          value: data.randomFactor
        }, {
          value: ($$value) => {
            data.randomFactor = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Opacity Median",
          min: "0",
          max: "1",
          step: ".05",
          value: data.opacityMedian
        }, {
          value: ($$value) => {
            data.opacityMedian = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Opacity Variance",
          min: "0",
          max: "1",
          step: ".05",
          value: data.opacityVariance
        }, {
          value: ($$value) => {
            data.opacityVariance = $$value;
            $$settled = false;
          }
        }, {})}
	
	${validate_component(Checkbox_import, "Checkbox").$$render($$result, { label: "Outline", checked: data.outline }, {
          checked: ($$value) => {
            data.outline = $$value;
            $$settled = false;
          }
        }, {})}
	
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Line Width",
          min: "0",
          max: "100",
          value: data.lineWidth
        }, {
          value: ($$value) => {
            data.lineWidth = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Line Width Random",
          min: "0",
          max: "100",
          value: data.lineWidthRandom
        }, {
          value: ($$value) => {
            data.lineWidthRandom = $$value;
            $$settled = false;
          }
        }, {})}
	
	`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Sketch02 as default };
