import { c as create_ssr_component, a as subscribe } from "../../chunks/index-a25d457a.js";
import "../../chunks/Toast.svelte_svelte_type_style_lang-172eb2d6.js";
import "axios";
import { a as USERDATA } from "../../chunks/checkAuth-d57e5fd3.js";
import "../../chunks/index-e671fec2.js";
var bookings_svelte_svelte_type_style_lang = "";
const css = {
  code: ".table.svelte-1p4t0up.svelte-1p4t0up{border-spacing:0 15px}.table.svelte-1p4t0up tr.svelte-1p4t0up{border-radius:20px}tr.svelte-1p4t0up td.svelte-1p4t0up:nth-child(n + 8),tr.svelte-1p4t0up th.svelte-1p4t0up:nth-child(n + 8){border-radius:0 0.625rem 0.625rem 0}tr.svelte-1p4t0up td.svelte-1p4t0up:nth-child(1),tr.svelte-1p4t0up th.svelte-1p4t0up:nth-child(1){border-radius:0.625rem 0 0 0.625rem}",
  map: null
};
const Bookings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_USERDATA;
  $$unsubscribe_USERDATA = subscribe(USERDATA, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_USERDATA();
  return `${$$result.head += `${$$result.title = `<title>Profile</title>`, ""}`, ""}


<section class="${"w-full pt-16 pb-20 bg-gray-50"}">${`<div class="${"flex justify-center items-center m-40"}"><div class="${"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"}"></div></div>`}
</section>`;
});
export { Bookings as default };
