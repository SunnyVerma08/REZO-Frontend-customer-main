import { c as create_ssr_component, a as subscribe, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/index-a25d457a.js";
import { i as isUserLoggedIn, U as USERHEADERS, a as USERDATA } from "../../chunks/checkAuth-d57e5fd3.js";
import { D as DownArrow, p as page } from "../../chunks/down-arrow-7b0c9d83.js";
import { a as appStore } from "../../chunks/apiCallStore-1da2049a.js";
import _ from "lodash";
import { H as HeaderBackground, F as Feature } from "../../chunks/Feature-60cd2c39.js";
import { R as RezoLogo$1 } from "../../chunks/rezo-black-87x32-85fce49a.js";
import { r as readable } from "../../chunks/index-e671fec2.js";
import "axios";
var RezoLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAgCAAAAABChLvJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCh8HCxukSXlbAAAElklEQVRIx9VWW2xUVRRd+5w7M+30JZZHEWvD80OIgo9Wnmn8IMKPQYgSBFMMfiDGkKAgoiE8NMpLggYhplHio4RE0wgWEonAh2ihiIo2BgkpBnmEMiCFlrlzzl5+zLQzffjV8OH5vDd77b3XWWevLcQdOebOwN4x3AAA0AcZ0m9cQrTXd1phf6ADAELTE4Si6BdwAEDNgY9CyeVCUlOXxbKwzKGmb/1I55/OYgJQ7amnB97t0lFKYwDIqo51ajJAomkwYwhhJ2dGfBesBYVKEdIIIRl+j7XvHestKEznI2TKkc6bE9CmqaG3TKdN5wuytFGUlgIKvRFK+p8zNh0oyZN7hy9SoZiuIELeP5svWjR62hCFOVpXCADSsbhiXUoAUCV8cYwztvFQ883BlTPL0sDUFHcGzXSqjg2PmTGn6L3nlGp6JUmqsgoRAGZkPZP8EPF051+1RdN8xGLmJ/LKwmIAkOE76FUZZO+C9vyiy9V7StlLvKXR2YtvXfz0x4XfjUcsf/Db94YC/0j825SBL/x5TdvLE5CYc6S0piqS2HdsyaXV3hDUFHcEzXSa4r6ikq+Z9GwNu9f7BF5hyAvjzEqyNlJxjp6Zo8r5dvJN5QtS0UCvdEuLCvfTabd3rHCnIeaX53xPOSk0OXS03gAA3kaYDB3pnQ9lS13pewXya33+SzNC9Sm7obJjG0zufBAEWrh1X6TlKZvXkwmBiYWtGAYAEkM0FrUiJkCsaYNd/uhtHLxW9gyCwEZSkVn21BlhVisgUmo7nn340tktfaheku9+XzEfgLg1Jd6XvBEnaG+/dnnWMg1w1t1TBqHQYGz8+ulRGuTG/+ERyWtsX/hkd3rg43sbg6tnxm0tD6MU3aXCshWgccFbh0ZuAgQpFESYbrLQhu3I0TYC3xCD/jNy3tLez9R1XEzcf2CQNxAGdeUh44UQHxzcHls7wgUOcbnaHicFwJUwOgiSLUzRcLw49BsbV8Z6Dhx7a3bToWHNO0EANFUTp1ZXGtK2Lk/UzPOWwITo+dPwIDyOdgwZm4trw40Rhy+WxJz0Hi4WY17n5sOBB8AkwjD0JFaffHAtVRWYUZHYCUPV6Lkv+fhAL136TXJbtDz+MZOeqtpdvzOwgknOkYltjrWRihZ6Uh135w89SkdSHT+wd72aoOqJ6rzyP+mz9xY9t6W0dW6Ni4DCXtUaAOuPN61/BxLhm8Ue5uayYaviRZ9/IhBXvLZgyd+bNtePL/rrxLWy2lHeMjMffiNr7IDyFqa89947Ts6tdxqWMpXiDpE93I6CdKpvdqMollZhaYKOdZPiAMrm/U7HzHxQY9D0wwPXV1Z4m5nQNndIrFowHkb4/H2XBmD6rpgBIGFV2648WgCieQUwfu6sEy0SeWgEvSUgpA8+W7C/8oI3LO3yuWBmyWGVXFlQSAP+h59SqEYoFA9LCALAYPq4mXFjiFRnkGhYi4zaCPE0BhQ4iNXO3JZZt7VCWHoCJmOVQhByvv6G0WznAp1UnVMas94mffpbZwU5EMzaT8+m+3OEAEV7LRBi+rc/ZPrq3V0/9x35n+2T/wJv5pJx9vQHOQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0zMVQwNzoxMDowNiswMDowMFwMH8MAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMzFUMDc6MTA6MDYrMDA6MDAtUad/AAAAAElFTkSuQmCC";
var HeaderBackgroundImage = "/_app/assets/header-image-7d386338.png";
const ServiceForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let brands;
  let models;
  let $appStore, $$unsubscribe_appStore;
  $$unsubscribe_appStore = subscribe(appStore, (value) => $appStore = value);
  brands = $appStore.brands;
  models = $appStore.models;
  $$unsubscribe_appStore();
  return `<form method="${"GET"}" action="${"/book"}"><div class="${"grid grid-cols-6 gap-3"}"><div class="${"col-span-6"}"><div class="${"relative bg-gray-300 border border-gray-300 rounded"}"><div class="${"relative h-10 leading-5"}"><label for="${"brand"}" class="${"absolute w-16 pl-2 text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap leading-10"}">Brand</label>
                    <div class="${"text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute left-16 right-2 bg-no-repeat bg-right"}"${add_attribute("style", `background-image:url(${DownArrow}); background-size:28px 8px;`, 0)}><select id="${"brand_id"}" name="${"brand_id"}" class="${"border-0 outline-none pl-0 text-left relative top-auto left-auto bg-transparent h-full w-full appearance-none"}" required><option selected value="${""}">Select Brand</option>${!_.isEmpty(brands) ? `${each(brands, ({ _id, name }) => {
    return `<option${add_attribute("value", _id, 0)}>${escape(name)}</option>`;
  })}` : ``}</select></div></div></div></div>
        <div class="${"col-span-6"}"><div class="${"relative bg-gray-300 border border-gray-300 rounded"}"><div class="${"relative h-10 leading-5"}"><label for="${"model"}" class="${"absolute w-16 pl-2 text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap leading-10"}">Model</label>
                    <div class="${"text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute left-16 right-2 bg-no-repeat bg-right"}"${add_attribute("style", `background-image:url(${DownArrow}); background-size:28px 8px;`, 0)}><select id="${"model_id"}" name="${"model_id"}" class="${"border-0 outline-none pl-0 text-left relative top-auto left-auto bg-transparent h-full w-full appearance-none"}" required><option selected value="${""}">Select Model</option>${!_.isEmpty(models) ? `${each(models, ({ model, _id }) => {
    return `<option${add_attribute("value", _id, 0)}>${escape(model.name)}</option>`;
  })}` : ``}</select></div></div></div></div>
        <div class="${"col-span-6"}"><div class="${"relative bg-gray-300 border border-gray-300 rounded"}"><div class="${"relative h-10 leading-5"}"><label for="${"fuel_type"}" class="${"absolute w-16 pl-2 text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap leading-10"}">Fuel Type</label>
                    <div class="${"text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute left-16 right-2 bg-no-repeat bg-right"}"${add_attribute("style", `background-image:url(${DownArrow}); background-size:28px 8px;`, 0)}><select id="${"fuel_type"}" name="${"fuel_type"}" class="${"border-0 outline-none pl-0 text-left relative top-auto left-auto bg-transparent h-full w-full appearance-none"}" required><option value="${""}">Select Fuel Type</option><option value="${"petrol"}">Petrol</option><option value="${"electric"}">Electric</option></select></div></div></div></div>
        <div class="${"col-span-6"}"><button type="${"submit"}" class="${"bg-red-600 block w-full py-2 text-white rounded-2xl"}">Get Started</button></div></div></form>`;
});
const active = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
const inactive = "text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $isUserLoggedIn, $$unsubscribe_isUserLoggedIn;
  let $$unsubscribe_USERHEADERS;
  let $$unsubscribe_USERDATA;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isUserLoggedIn = subscribe(isUserLoggedIn, (value) => $isUserLoggedIn = value);
  $$unsubscribe_USERHEADERS = subscribe(USERHEADERS, (value) => value);
  $$unsubscribe_USERDATA = subscribe(USERDATA, (value) => value);
  let navState = {
    tabs: { panelOne: true, panelTwo: false },
    activeTab: {
      active: "transition duration-400 ease-in-out bg-yellow-300 px-9 py-1 rounded-3xl text-base font-bold",
      inactive: "transition duration-400 ease-in-out bg-gray-300 px-9 py-1 rounded-3xl text-base border-transparent font-medium"
    }
  };
  const url = {
    home: "/",
    register: "/register",
    about: "/about",
    login: "/login",
    book: "/book",
    feature: "/features"
  };
  $$unsubscribe_page();
  $$unsubscribe_isUserLoggedIn();
  $$unsubscribe_USERHEADERS();
  $$unsubscribe_USERDATA();
  return `<header>
	<nav class="${"bg-gray-800 hidden sm:block"}"><div class="${"px-2 py-2 sm:px-6 lg:px-8"}"><div class="${"flex justify-end"}"><div class="${"flex space-x-5 text-xs"}"><a href="${"/#"}" class="${"text-white"}">Service with rezo</a>
					<a href="${"/corporate"}" class="${"text-white"}">Rezo Corporate</a>
					<a href="${"/#"}" class="${"text-white"}">Offers</a>
					<a href="${"/support"}" class="${"text-white"}">Support</a></div></div></div></nav>

	<nav class="${"bg-white"}"><div class="${"mx-auto px-2 sm:px-6 lg:px-8"}"><div class="${"relative flex items-center justify-between h-16"}"><div class="${"absolute inset-y-0 left-0 flex items-center sm:hidden"}">
					<button type="${"button"}" class="${"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"}" aria-controls="${"mobile-menu"}" aria-expanded="${"false"}"><span class="${"sr-only"}">Open main menu</span>
						
						<svg class="${"block h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg>
						
						<svg class="${"hidden h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div>
				<div class="${"flex-1 flex items-center justify-center sm:items-stretch sm:justify-between"}"><div class="${"flex-shrink-0 flex items-center align-middle"}"><a href="${"/"}"><img${add_attribute("src", RezoLogo, 0)} alt="${"Rezo Logo"}" height="${"32"}"></a></div>
					<div class="${"hidden sm:block sm:ml-6"}"><div class="${"flex space-x-4"}">
							

							

							<a${add_attribute("href", url.about, 0)}${add_attribute("class", $page.url.pathname === url.about ? active : inactive, 0)}>Services</a>
							<a${add_attribute("href", url.about, 0)}${add_attribute("class", $page.url.pathname === url.about ? active : inactive, 0)}>Spares</a>
							<a${add_attribute("href", url.feature, 0)}${add_attribute("class", $page.url.pathname === url.feature ? active : inactive, 0)}>Features</a>
							<a${add_attribute("href", url.about, 0)} class="${"bg-yellow-300 px-3 py-2 rounded-3xl text-sm font-medium"}">Book Now</a>
							
							</div></div></div>
				<div class="${"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"}">${$isUserLoggedIn === true ? `<button type="${"button"}" class="${"bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"}"><span class="${"sr-only"}">View notifications</span>
							
							<svg class="${"h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"}"></path></svg></button>
						<div class="${"ml-3 relative"}"><div><button type="${"button"}" class="${"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"}" id="${"user-menu-button"}" aria-expanded="${"false"}" aria-haspopup="${"true"}"><span class="${"sr-only"}">Open user menu</span>
									<img class="${"h-8 w-8 rounded-full"}" src="${"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}" alt="${""}"></button></div>

							<div style="${escape("display:none") + ";"}" class="${"origin-top-right hover:border-2 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"}" role="${"menu"}" aria-orientation="${"vertical"}" aria-labelledby="${"user-menu-button"}" tabindex="${"-1"}">
								<a href="${"/profile"}" class="${"block px-4 py-2 text-sm text-gray-700 bg-white hover:text-yellow-500 hover:font-bold transition-all"}" role="${"menuitem"}" tabindex="${"-1"}" id="${"user-menu-item-0"}">Your Profile</a><a href="${"/bookings"}" class="${"block px-4 py-2 text-sm text-gray-700 bg-white hover:text-yellow-500 hover:font-bold transition-all"}" role="${"menuitem"}" tabindex="${"-1"}" id="${"user-menu-item-0"}">Your Bookings</a>
								<a href="${"/settings"}" class="${"block px-4 py-2 text-sm text-gray-700 bg-white hover:text-yellow-500 hover:font-bold transition-all"}" role="${"menuitem"}" tabindex="${"-1"}" id="${"user-menu-item-1"}">Settings</a>
								<a href="${"/"}" class="${"block px-4 py-2 text-sm text-gray-700 bg-white hover:text-yellow-500 hover:font-bold transition-all"}" role="${"menuitem"}" tabindex="${"-1"}" id="${"user-menu-item-2"}">Sign out</a></div></div>` : `
						`}</div></div></div>

		
		<div class="${"sm:hidden"}" id="${"mobile-menu"}"><div class="${"px-2 pt-2 pb-3 space-y-1"}">
				<a href="${"/"}" class="${"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"}" aria-current="${"page"}">Dashboard</a>

				<a href="${"/"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"}">Team</a>

				<a href="${"/"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"}">Projects</a>

				<a href="${"/"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"}">Calendar</a></div></div></nav>

	${$page.url.pathname === url.home ? `${validate_component(HeaderBackground, "HeaderBackground").$$render($$result, { src: HeaderBackgroundImage }, {}, {
    default: () => {
      return `<div class="${"text-center pt-8"}"><h1 class="${"text-white text-3xl text-bold tracking-tighter"}">Book your bike service at lightening speed</h1>
			<span class="${"block text-white text-lg"}">Choose from a range of categories and prices</span></div>
		<div class="${"bg-white w-full rounded mt-5 md:w-2/5 lg:w-1/3 sm:mt-8 sm:ml-10 transition-all"}"><div class="${"p-4"}"><div class="${"border-b border-gray-300 pb-3 mb-5"}"><div class="${"-mb-px flex space-x-4 justify-center"}" aria-orientation="${"horizontal"}" role="${"tablist"}"><button id="${"tabs-1-tab-1"}"${add_attribute("class", navState.activeTab.active, 0)} aria-controls="${"tabs-1-panel-1"}" role="${"tab"}" type="${"button"}">Service</button>
						</div></div>
				<h6 class="${"text-center text-sm font-bold"}">Your Motorcycle service partner</h6>
				<div${add_attribute("class", `mt-4 transition ease-in-out  ${"opacity-100 block"}`, 0)} id="${"tabs-1-panel-1"}" aria-labelledby="${"tabs-1-tab-1"}" role="${"tabpanel"}" tabindex="${"0"}">${validate_component(ServiceForm, "ServiceForm").$$render($$result, {}, {}, {})}</div>

				<div${add_attribute("class", `mt-4 ${"hidden"}`, 0)} id="${"tabs-1-panel-2"}" aria-labelledby="${"tabs-1-tab-2"}" role="${"tabpanel"}" tabindex="${"0"}">Second Pa
				</div></div></div>
		${validate_component(Feature, "Feature").$$render($$result, {
        classes: "absolute w-3/4 left-1/2 -bottom-16 transform -translate-x-2/4 hidden lg:block"
      }, {}, {})}`;
    }
  })}` : ``}</header>`;
});
const footerStyle = "flex flex-1 items-center justify-between flex-col md:flex-row md:space-y-0";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"bg-gray-800 px-10 py-6 sm:px-24"}"><div${add_attribute("class", `${footerStyle} space-y-1.5 border-b pb-4`, 0)}><div class="${"relative"}"><ul class="${"flex space-x-6"}"><li class="${"text-white font-light text-base"}"><a href="${"/about"}">About Rezo</a></li>
                <li class="${"text-white font-light text-base"}"><a href="${"/about"}">Offers</a></li>
                <li class="${"text-white font-light text-base"}"><a href="${"/about"}">Location</a></li>
                <li class="${"text-white font-light text-base"}"><a href="${"/contact"}">Contact</a></li></ul></div>
        <div class="${"flex space-x-6"}"><a href="${"/#"}" class="${"text-white font-medium text-base"}">Book a service</a>
            <a href="${"/#"}" class="${"text-white font-medium text-base"}">Become a mechanic</a></div></div>
    
    <div${add_attribute("class", `${footerStyle} space-y-2 pt-4`, 0)}><div class="${"flex-shrink-0"}"><img${add_attribute("src", RezoLogo$1, 0)} alt="${"Rezo Black Background 82x32"}"></div>
        <span class="${"text-white text-xs font-light text-center"}">Copyright \xA9 2021 Lenergy Mobility India. All Right Reserved</span></div></footer>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@tailwind base;@tailwind components;@tailwind utilities;",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $routes, $$unsubscribe_routes;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const routes = readable(["/book", "/loginService"]);
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  $$result.css.add(css);
  $$unsubscribe_routes();
  $$unsubscribe_page();
  return `${$$result.head += `<link href="${"../../css/rezo.css"}" rel="${"stylesheet"}" type="${"text/css"}" data-svelte="svelte-1gteasf">`, ""}

<div class="${"mx-auto"}">${$routes.includes($page.url.pathname) === false ? `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}` : ``}
	${slots.default ? slots.default({}) : ``}
	${$routes.includes($page.url.pathname) === false ? `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}` : ``}
</div>`;
});
export { _layout as default };
