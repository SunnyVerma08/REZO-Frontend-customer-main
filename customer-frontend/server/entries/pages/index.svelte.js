import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../chunks/index-a25d457a.js";
import "../../chunks/Toast.svelte_svelte_type_style_lang-172eb2d6.js";
import "axios";
import { i as indexServices } from "../../chunks/apiCallStore-1da2049a.js";
import { F as FrontView } from "../../chunks/front-view-male-7f5c6426.js";
import "../../chunks/index-e671fec2.js";
import "../../chunks/checkAuth-d57e5fd3.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_indexServices;
  $$unsubscribe_indexServices = subscribe(indexServices, (value) => value);
  $$unsubscribe_indexServices();
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}


<section class="${"w-full mt-20 mb-20"}">

		
		

		
	
	<div class="${"flex justify-around flex-col space-y-2 px-4 sm:px-0 sm:space-y-0 sm:flex-row"}"><div class="${"inline-flex space-x-3 items-center"}"><div class="${"w-full sm:w-1/3 md:h-24 lg:h-40 min-h-80 aspect-h-1 aspect-w-1 overflow-hidden"}"><img${add_attribute("src", FrontView, 0)} alt="${"Cashback"}" class="${"w-full h-full object-cover object-center lg:w-full md:w-full"}"></div>
			<div class="${"text-left"}"><span class="${"text-red-600 text-3xl font-light block"}">Pehli booking pe</span>
				<span class="${"text-red-600 text-4xl font-bold block"}">50% Cashback</span></div></div>

		<div class="${"inline-flex space-x-3 items-center"}"><div class="${"text-left"}"><span class="${"text-red-600 text-2xl font-bold block"}">Starting</span>
				<p class="${"text-red-600 text-6xl"}">\u20B9399</p></div>
			<div class="${"w-full sm:w-1/3 md:h-24 lg:h-40 min-h-80 aspect-h-1 aspect-w-1 overflow-hidden"}"><img${add_attribute("src", FrontView, 0)} alt="${"Cashback"}" class="${"w-full h-full object-cover object-center lg:w-full md:w-full"}"></div></div></div>

	<div class="${"border border-gray-300 p-4 mx-6 sm:mx-14 mt-12 flex justify-between rounded flex-col sm:flex-row space-y-4 sm:space-y-0"}"><div class="${"inline-flex items-center space-x-4"}"><img class="${"inline-block h-8 w-8 rounded-full ring-2 ring-white"}" src="${"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}" alt="${""}">
			<div class="${"text-left"}"><h6 class="${"text-sm font-bold"}">Get access to exclusive deals</h6>
				<span class="${"text-xs text-gray-400"}">Only the best deal reach your inbox</span></div></div>
		<div class="${"relative inline-flex items-center"}"><label for="${"notify_me"}" class="${"block text-sm font-medium text-gray-700 absolute -top-1.5 left-5 w-20 h-5 bg-white text-center"}">First name</label>
            <input type="${"text"}" name="${"notify_me"}" id="${"notify_me"}" class="${"border border-gray-400 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md px-2"}" placeholder="${"E.g. john@example.com"}">
			<button type="${"button"}" class="${"p-2 bg-red-600 text-white rounded-md w-1/2 ml-2"}">Notify Me</button></div></div></section>`;
});
export { Routes as default };
