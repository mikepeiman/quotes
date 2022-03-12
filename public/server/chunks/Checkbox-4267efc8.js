import { c as create_ssr_component, p as createEventDispatcher, k as add_attribute, e as escape } from "./index-e675dbce.js";
import { t as tweened, s as sineInOut } from "./index-3186a33b.js";
/* empty css                                                 */const createStyle = ({
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
  code: ".checkbox.svelte-1cylru6.svelte-1cylru6{--checkbox-color-primary:#242432;--checkbox-color-secondary:#d8d8ea;--checkbox-border-width:4%;--checkbox-border-width-active:7%;position:relative}.checkbox.svelte-1cylru6 input.svelte-1cylru6{opacity:0;width:100%;height:100%;position:absolute;top:0;right:0;margin:0;padding:0;cursor:pointer}.checkbox__svg.svelte-1cylru6.svelte-1cylru6{width:100%;height:100%}.checkbox__check.svelte-1cylru6.svelte-1cylru6,.checkbox__border.svelte-1cylru6.svelte-1cylru6{stroke-width:var(--checkbox-border-width);fill:none;stroke-linecap:round;stroke-linejoin:round}.checkbox__border.svelte-1cylru6.svelte-1cylru6{width:calc(100% - (var(--checkbox-border-width) * 2));height:calc(100% - (var(--checkbox-border-width) * 2));transform:translate(\r\n          calc(var(--checkbox-border-width) * -1),\r\n          var(--checkbox-border-width)\r\n        )\r\n        rotate(90deg);stroke:var(--checkbox-color-secondary);transition:0.2s;transform-origin:50% 50%}.checkbox__border.-active.svelte-1cylru6.svelte-1cylru6{stroke:var(--checkbox-color-primary);transition:none}.checkbox.svelte-1cylru6:hover .checkbox__border.svelte-1cylru6,.checkbox.-checked.svelte-1cylru6 .checkbox__border.svelte-1cylru6{--checkbox-border-width:var(--checkbox-border-width-active)}.checkbox.-changeBg.svelte-1cylru6 .checkbox__border.svelte-1cylru6{stroke:var(--checkbox-color-primary)}.checkbox__check.svelte-1cylru6.svelte-1cylru6{--checkbox-border-width:var(--checkbox-border-width-active);stroke:var(--checkbox-color-primary)}",
  map: null
};
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let self, canChange = true, changeBg = false, borderStyle, checkStyle;
  let { checked = false, size = "3rem", name = "", id = "", labelId = "", duration = 400, primaryColor = "#24ffac", secondaryColor = "#1828ea" } = $$props;
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
    "checkbox " + escape($$props.class) + " svelte-1cylru6",
    (changeBg ? "-changeBg" : "") + " " + (checked || !canChange ? "-checked" : "")
  ].join(" ").trim()}" style="${"width: " + escape(size) + ";height: " + escape(size) + ";"}"${add_attribute("this", self, 0)}><input${add_attribute("id", labelId, 0)} type="${"checkbox"}"${add_attribute("name", name, 0)} class="${"svelte-1cylru6"}">
    <svg class="${"checkbox__svg svelte-1cylru6"}" preserveAspectRatio="${"none"}" viewBox="${"0 0 100 100"}"><rect class="${"checkbox__border svelte-1cylru6"}" rx="${"15%"}"></rect><rect class="${"checkbox__border -active svelte-1cylru6"}"${add_attribute("style", borderStyle, 0)} rx="${"15%"}"></rect><path${add_attribute("style", checkStyle, 0)} class="${"checkbox__check svelte-1cylru6"}" d="${"M 89.5 13 L 46 71 L 28 54"}"></path></svg></div>`;
});
export { Checkbox as C };
