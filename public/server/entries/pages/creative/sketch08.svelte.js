import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-e675dbce.js";
import { C as CanvasSketchEditor } from "../../../chunks/CanvasSketchEditor-c9dcdbb0.js";
import { S as Slider } from "../../../chunks/Slider-62275319.js";
import { C as ColorInput } from "../../../chunks/ColorInput-9254f400.js";
import { C as Checkbox } from "../../../chunks/Checkbox-4267efc8.js";
import "canvas-sketch";
/* empty css                                                             */import "../../../chunks/stores-60451e84.js";
import "canvas-sketch-util/color.js";
/* empty css                                                                 */import "../../../chunks/index-3186a33b.js";
import "../../../chunks/index-5b1f353a.js";
/* empty css                                                               */const Sketch08 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hidePanel = false } = $$props;
  const data = {
    TITLE: "Sketch08",
    outline: true,
    arclen: 0.5,
    angle: 0,
    radius: 0.33,
    background: "#527A9B",
    foreground: "#F4B9A7",
    lineWidth: 20
  };
  const settings = {
    scaleToView: true,
    dimensions: [1280, 1280]
  };
  const sketch = ({}) => {
    return ({ context, width, height }) => {
      const { background, foreground, radius, arclen, angle, lineWidth, outline, stroke } = data;
      context.clearRect(0, 0, width, height);
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);
      const minDim = Math.min(width, height);
      context.beginPath();
      context.arc(width / 2, height / 2, minDim * radius, angle, Math.PI * 2 * arclen + angle);
      context.fillStyle = foreground;
      context.strokeStyle = foreground;
      context.lineWidth = lineWidth;
      if (outline)
        context.stroke();
      else
        context.fill();
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
        return `${validate_component(ColorInput, "ColorInput").$$render($$result, {
          label: "Background",
          value: data.background
        }, {
          value: ($$value) => {
            data.background = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(ColorInput, "ColorInput").$$render($$result, {
          label: "Foreground",
          value: data.foreground
        }, {
          value: ($$value) => {
            data.foreground = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, { label: "Arc Length", value: data.arclen }, {
          value: ($$value) => {
            data.arclen = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, { label: "Radius", value: data.radius }, {
          value: ($$value) => {
            data.radius = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Slider, "Slider").$$render($$result, {
          label: "Angle",
          min: -Math.PI,
          max: Math.PI,
          value: data.angle
        }, {
          value: ($$value) => {
            data.angle = $$value;
            $$settled = false;
          }
        }, {})}
	${validate_component(Checkbox, "Checkbox").$$render($$result, { label: "Outline", checked: data.outline }, {
          checked: ($$value) => {
            data.outline = $$value;
            $$settled = false;
          }
        }, {})}
	${data.outline ? `${validate_component(Slider, "Slider").$$render($$result, {
          label: "Line Width",
          min: "1",
          max: "100",
          value: data.lineWidth
        }, {
          value: ($$value) => {
            data.lineWidth = $$value;
            $$settled = false;
          }
        }, {})}` : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Sketch08 as default };
