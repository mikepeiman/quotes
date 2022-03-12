import { c as create_ssr_component, p as createEventDispatcher, v as validate_component, k as add_attribute } from "./index-e675dbce.js";
import { P as Param } from "./Slider-62275319.js";
import "canvas-sketch-util/color.js";
/* empty css                                                   */const css = {
  code: "input.svelte-13o5b0t{cursor:pointer;-webkit-appearance:none;border:none;background:none;border-radius:5px;padding:0;overflow:hidden;width:50px;height:25px;outline:0;box-sizing:border-box;border:1px solid #dcdcdc;padding:0;margin:0}input[type='color'].svelte-13o5b0t::-webkit-color-swatch-wrapper{border:0;padding:0}input[type='color'].svelte-13o5b0t::-webkit-color-swatch{border:none;border:2px solid white;border-radius:5px}",
  map: null
};
const ColorInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { label = "" } = $$props;
  let { value = 0 } = $$props;
  let { hsla = "" } = $$props;
  let { opacity = 1 } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.hsla === void 0 && $$bindings.hsla && hsla !== void 0)
    $$bindings.hsla(hsla);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  $$result.css.add(css);
  return `${validate_component(Param, "Param").$$render($$result, { label }, {}, {
    default: () => {
      return `<input type="${"color"}" class="${"svelte-13o5b0t"}"${add_attribute("value", value, 0)}>`;
    }
  })}`;
});
export { ColorInput as C };
