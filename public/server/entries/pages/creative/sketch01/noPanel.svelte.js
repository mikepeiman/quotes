import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-e675dbce.js";
import { C as CanvasSketchEditor } from "../../../../chunks/CanvasSketchEditor-c9dcdbb0.js";
/* empty css                                                                */import "canvas-sketch-util/color.js";
/* empty css                                                                    *//* empty css                                                                  */import "canvas-sketch";
import "../../../../chunks/stores-60451e84.js";
const NoPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hidePanel = false } = $$props;
  const data = {
    TITLE: "Sketch01",
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
  return `



${validate_component(CanvasSketchEditor, "CanvasSketchEditor").$$render($$result, { sketch, settings, data, hidePanel }, {}, {})}`;
});
export { NoPanel as default };
