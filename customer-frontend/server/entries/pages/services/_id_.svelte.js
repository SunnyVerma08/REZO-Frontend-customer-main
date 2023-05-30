import { c as create_ssr_component, a as subscribe, d as escape, e as each, b as add_attribute, v as validate_component } from "../../../chunks/index-a25d457a.js";
import { b as indexServicesApiData, p as planServices } from "../../../chunks/apiCallStore-1da2049a.js";
import "../../../chunks/Toast.svelte_svelte_type_style_lang-172eb2d6.js";
import { T as Toast } from "../../../chunks/Toast-d50045c6.js";
import "axios";
import { U as USERHEADERS } from "../../../chunks/checkAuth-d57e5fd3.js";
import "../../../chunks/index-e671fec2.js";
async function load(ctx) {
  let id = ctx.page.params.id;
  const service = await indexServicesApiData(id);
  return service;
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_USERHEADERS;
  let $planServices, $$unsubscribe_planServices;
  $$unsubscribe_USERHEADERS = subscribe(USERHEADERS, (value) => value);
  $$unsubscribe_planServices = subscribe(planServices, (value) => $planServices = value);
  const DATE = (daysToAdd) => {
    if (daysToAdd)
      return new Date(new Date().getTime() + daysToAdd * 24 * 60 * 60 * 1e3).toISOString().slice(0, 10);
    return new Date().toISOString().slice(0, 10);
  };
  let bookingFields = {
    service: "",
    location: "",
    vehicle: "",
    slot: { date: DATE(), time: "10:00" }
  };
  bookingFields.service = $planServices[0]._id;
  $$unsubscribe_USERHEADERS();
  $$unsubscribe_planServices();
  return `${$$result.head += `${$$result.title = `<title>Rezo - ${escape($planServices[0].planName)}</title>`, ""}`, ""}
<div class="${"flex flex-col"}"><h1 class="${"text-2xl my-8 uppercase"}">Plan : ${escape($planServices[0].planName)}</h1>
	<hr>
	<h1 class="${"text-xl uppercase"}">Rate : ${escape($planServices[0].rate)}</h1>
	${each($planServices[0].dataPoints, (item) => {
    return `<p style="${"margin-top:10px"}" class="${"text-xl uppercase"}"><span style="${"position: relative; top: -3px;"}">\u{1F449}</span>
			${escape(item)}
		</p>`;
  })}</div>
<div class="${"flex justify-center"}"><div class="${escape("w-1/2") + " flex-row bg-white rounded shadow-2xl p-8 m-4"}">${`<h1 class="${"block w-full text-center text-gray-800 text-2xl font-bold mb-6"}">Book Your Service
			</h1>
			<form><div class="${"flex flex-col mb-4"}"><label class="${"mb-2 font-bold text-lg text-gray-900"}" for="${"location"}">Location</label>
					<input class="${"border py-2 px-3 text-grey-800"}" type="${"text"}" location="${"location"}" id="${"location"}"${add_attribute("value", bookingFields.location, 0)}></div>
				<div class="${"flex flex-col mb-4"}"><label class="${"mb-2 font-bold text-lg text-gray-900"}" for="${"vehicle"}">Vehicle</label>
					<input class="${"border py-2 px-3 text-grey-800"}" type="${"text"}" name="${"vehicle"}" id="${"vehicle"}"${add_attribute("value", bookingFields.vehicle, 0)}></div>

				<div class="${"flex flex-col mb-4 content-between"}"><div class="${"flex flex-row justify-around"}"><p class="${"mb-2 font-bold text-lg text-gray-900"}">Slot Date :</p>
						<input class="${"border py-2 px-3 text-grey-800"}" type="${"date"}" id="${"start"}" name="${"trip-start"}"${add_attribute("min", DATE(), 0)}${add_attribute("max", DATE(30), 0)}${add_attribute("value", bookingFields.slot.date, 0)}></div>
					<div class="${"flex flex-row justify-around"}"><p class="${"mb-2 font-bold text-lg text-gray-900"}">Slot Time :</p>
						<input class="${"border py-2 px-3 text-grey-800"}" type="${"Time"}" id="${"start"}" name="${"trip-start"}" min="${"09:00"}" max="${"18:00"}"${add_attribute("value", bookingFields.slot.time, 0)}></div>
					<br>
					<button class="${"bg-yellow-500 hover:bg-yellow-200 hover:text-black text-white font-bold py-2 px-4 rounded transition-all items-center"}" type="${"submit"}">Submit</button></div></form>`}</div></div>
${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})}`;
});
export { U5Bidu5D as default, load };
