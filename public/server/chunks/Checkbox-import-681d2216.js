import { c as create_ssr_component, p as createEventDispatcher, k as add_attribute, e as escape, v as validate_component } from "./index-e675dbce.js";
import { P as Param } from "./Slider-62275319.js";
import { t as tweened, s as sineInOut } from "./index-3186a33b.js";
/* empty css                                                  */const createStyle = ({
  from = 0,
  to = 1,
  reverse = false,
  duration = 300,
  delay = 0,
  css: css2 = {},
  onChange = () => false,
  onEnd = () => false,
  easing
}) => {
  const animation = tweened(reverse ? to : from, {
    duration,
    delay,
    easing
  });
  animation.subscribe((t) => {
    let newStyle = "";
    for (let item in css2) {
      const {
        input,
        output,
        onComplete = () => false,
        beforeStart = () => false
      } = css2[item];
      const inRange = input.filter((i) => i <= t).reverse()[0];
      const index = input.indexOf(inRange);
      let val;
      if (!inRange && inRange !== 0) {
        val = output[0];
        beforeStart();
      } else {
        if (input.length - 1 === index) {
          val = output[output.length - 1];
          input[input.length - 1] <= t && onComplete();
        } else {
          const endRange = input[index + 1];
          const percent = (t - inRange) * 100 / (endRange - inRange);
          const firstItem = output[index];
          const lastItem = output[index + 1];
          if (typeof lastItem === "object") {
            val = "";
            lastItem.map((i) => {
              val += firstItem + (i - firstItem) * percent / 100;
              val += " ";
            });
          } else {
            val = firstItem + (lastItem - firstItem) * percent / 100;
          }
        }
      }
      newStyle += `${item}: ${val};`;
    }
    onChange(newStyle);
    if (t === to || t === from) {
      onEnd();
    }
  });
  return {
    play: () => animation.set(to),
    reverse: () => animation.set(from)
  };
};
const css = {
  code: ".checkbox.svelte-d8g7vy.svelte-d8g7vy{--checkbox-color-primary:#242432;--checkbox-color-secondary:#d8d8ea;--checkbox-border-width:4%;--checkbox-border-width-active:7%;position:relative}.checkbox.svelte-d8g7vy input.svelte-d8g7vy{opacity:0;width:100%;height:100%;position:absolute;top:0;right:0;margin:0;padding:0;cursor:pointer}.checkbox__svg.svelte-d8g7vy.svelte-d8g7vy{width:100%;height:100%}.checkbox__check.svelte-d8g7vy.svelte-d8g7vy,.checkbox__border.svelte-d8g7vy.svelte-d8g7vy{stroke-width:var(--checkbox-border-width);fill:none;stroke-linecap:round;stroke-linejoin:round}.checkbox__border.svelte-d8g7vy.svelte-d8g7vy{width:calc(100% - (var(--checkbox-border-width) * 2));height:calc(100% - (var(--checkbox-border-width) * 2));transform:translate(\n        calc(var(--checkbox-border-width) * -1),\n        var(--checkbox-border-width)\n      )\n      rotate(90deg);stroke:var(--checkbox-color-secondary);transition:0.2s;transform-origin:50% 50%}.checkbox__border.-active.svelte-d8g7vy.svelte-d8g7vy{stroke:var(--checkbox-color-primary);transition:none}.checkbox.svelte-d8g7vy:hover .checkbox__border.svelte-d8g7vy,.checkbox.-checked.svelte-d8g7vy .checkbox__border.svelte-d8g7vy{--checkbox-border-width:var(--checkbox-border-width-active)}.checkbox.-changeBg.svelte-d8g7vy .checkbox__border.svelte-d8g7vy{stroke:var(--checkbox-color-primary)}.checkbox__check.svelte-d8g7vy.svelte-d8g7vy{--checkbox-border-width:var(--checkbox-border-width-active);stroke:var(--checkbox-color-primary)}",
  map: null
};
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let self, canChange = true, changeBg = false, borderStyle, checkStyle;
  let { checked = false, size = "3rem", name = "", id = "", labelId = "", duration = 900, primaryColor = "#242432", secondaryColor = "#d8d8ea" } = $$props;
  createEventDispatcher();
  const animationOptions = {
    to: 100,
    duration,
    easing: sineInOut,
    reverse: checked
  };
  createStyle({
    ...animationOptions,
    duration,
    css: {
      "stroke-dashoffset": {
        input: [0, 45, 75],
        output: [342, -150, -307],
        onComplete: () => changeBg = true
      },
      "stroke-dasharray": {
        input: [0, 45, 75],
        output: [342, 154, [0, 310]]
      },
      opacity: { input: [0, 5], output: [0, 1] }
    },
    onChange: (style) => borderStyle = style,
    onEnd: () => canChange = true
  });
  createStyle({
    ...animationOptions,
    css: {
      "stroke-dashoffset": {
        input: [65, 100],
        output: [300, 144],
        beforeStart: () => changeBg = false
      },
      "stroke-dasharray": { input: [65, 100], output: [100, 84] }
    },
    onChange: (style) => checkStyle = style
  });
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.labelId === void 0 && $$bindings.labelId && labelId !== void 0)
    $$bindings.labelId(labelId);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  $$result.css.add(css);
  return `<div${add_attribute("id", id, 0)} class="${[
    "checkbox " + escape($$props.class) + " svelte-d8g7vy",
    (changeBg ? "-changeBg" : "") + " " + (checked || !canChange ? "-checked" : "")
  ].join(" ").trim()}" style="${"width: " + escape(size) + ";height: " + escape(size) + ";"}"${add_attribute("this", self, 0)}><input${add_attribute("id", labelId, 0)} type="${"checkbox"}"${add_attribute("name", name, 0)} class="${"svelte-d8g7vy"}">
  <svg class="${"checkbox__svg svelte-d8g7vy"}" preserveAspectRatio="${"none"}" viewBox="${"0 0 100 100"}"><rect class="${"checkbox__border svelte-d8g7vy"}" rx="${"15%"}"></rect><rect class="${"checkbox__border -active svelte-d8g7vy"}"${add_attribute("style", borderStyle, 0)} rx="${"15%"}"></rect><path${add_attribute("style", checkStyle, 0)} class="${"checkbox__check svelte-d8g7vy"}" d="${"M 89.5 13 L 46 71 L 28 54"}"></path></svg></div>`;
});
const Checkbox_import = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { label = "" } = $$props;
  let { duration = "" } = $$props;
  let { checked = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Param, "Param").$$render($$result, { label }, {}, {
      default: () => {
        return `<div class="${"py-2"}">${validate_component(Checkbox, "Checkbox").$$render($$result, {
          duration: "400",
          primaryColor: "#11cc55",
          size: "2rem",
          checked
        }, {
          checked: ($$value) => {
            checked = $$value;
            $$settled = false;
          }
        }, {})}</div>
	`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Checkbox_import as C };
