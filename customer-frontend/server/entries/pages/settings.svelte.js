import { c as create_ssr_component, a as subscribe, d as escape } from "../../chunks/index-a25d457a.js";
import "../../chunks/Toast.svelte_svelte_type_style_lang-172eb2d6.js";
import "axios";
import { a as USERDATA } from "../../chunks/checkAuth-d57e5fd3.js";
import "../../chunks/index-e671fec2.js";
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $USERDATA, $$unsubscribe_USERDATA;
  $$unsubscribe_USERDATA = subscribe(USERDATA, (value) => $USERDATA = value);
  $$unsubscribe_USERDATA();
  return `${$$result.head += `${$$result.title = `<title>Profile</title>`, ""}`, ""}


<section class="${"w-full pt-16 pb-20 bg-gray-50"}"><div class="${"px-10 mx-auto text-center max-w-7xl"}"><h2 class="${"text-5xl font-bold text-blue-600"}">${escape($USERDATA?.name?.toUpperCase())}&#39;s <span class="${"text-gray-800"}">Settings</span></h2>
		<p class="${"mt-3 text-lg text-gray-500"}">Page is under development</p>

		

		
		
		
		<div class="${"flex justify-center items-center m-40"}"><div class="${"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"}"></div></div>
		<button><h1 class="${"text-3xl"}">Go Home</h1></button>
		

		</div></section>`;
});
export { Settings as default };
