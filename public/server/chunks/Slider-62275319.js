import { c as create_ssr_component, e as escape, l as null_to_empty, p as createEventDispatcher, v as validate_component, k as add_attribute } from "./index-e675dbce.js";
/* empty css                                               */const css$1 = {
  code: ".param.svelte-11wod0f{box-sizing:border-box;display:flex;justify-content:flex-start;align-items:center;width:100%}div.svelte-11wod0f:first-child{margin-top:0}.param-wrapper.svelte-11wod0f{display:flex;justify-content:flex-start;align-items:center;flex-shrink:1;flex-grow:1;flex-basis:60%;box-sizing:border-box}label.svelte-11wod0f{font-size:12px;flex-shrink:1;flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:10px;flex-basis:40%;box-sizing:border-box}",
  map: null
};
const Param = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { color = "currentColor" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$1);
  return `<div class="${"param svelte-11wod0f"}">${label ? `<label class="${escape(null_to_empty(color ? color : "currentColor")) + " svelte-11wod0f"}">${escape(label)}</label>` : ``}
	<div class="${"param-wrapper svelte-11wod0f"}">${slots.default ? slots.default({ class: "test" }) : ``}</div>
</div>`;
});
const css = {
  code: "input.svelte-6isbck::-webkit-outer-spin-button,input.svelte-6isbck::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type='number'].svelte-6isbck{-moz-appearance:textfield}",
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { label = "" } = $$props;
  let { value } = $$props;
  let { min = 1 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { color = "currentColor" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css);
  return `${validate_component(Param, "Param").$$render($$result, { label, color }, {}, {
    default: () => {
      return `<div class="${"flex"}"><input type="${"range"}"${add_attribute("min", min, 0)}${add_attribute("max", max, 0)}${add_attribute("step", step, 0)} class="${"svelte-6isbck"}"${add_attribute("value", value, 0)}>
		<input type="${"number"}" class="${"input input-primary input-bordered w-14 p-2 svelte-6isbck"}"${add_attribute("min", min, 0)}${add_attribute("max", max, 0)}${add_attribute("step", step, 0)}${add_attribute("value", value, 0)}></div>`;
    }
  })}`;
});
export { Param as P, Slider as S };
