import { c as create_ssr_component, d as escape, b as add_attribute, v as validate_component } from "../../chunks/index-a25d457a.js";
import "../../chunks/Toast.svelte_svelte_type_style_lang-172eb2d6.js";
import { T as Toast } from "../../chunks/Toast-d50045c6.js";
import "axios";
import "../../chunks/index-e671fec2.js";
const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let registerationFields = {
    name: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirm: ""
  };
  registerationFields.passwordConfirm = registerationFields.password;
  return `${$$result.head += `${$$result.title = `<title>Register</title>`, ""}`, ""}

<div class="${"flex justify-center items-center w-full p-20 "}"><div class="${escape("w-1/2") + " bg-white rounded shadow-2xl p-8 m-4"}">${`<h1 class="${"block w-full text-center text-gray-800 text-2xl font-bold mb-6"}">Registration Form
			</h1>
			<form><div class="${"flex flex-col mb-4"}"><label class="${"mb-2 font-bold text-lg text-gray-900"}" for="${"name"}">Name</label>
					<input class="${"border py-2 px-3 text-grey-800"}" type="${"text"}" name="${"name"}" id="${"name"}"${add_attribute("value", registerationFields.name, 0)}></div>
				
				<div class="${"flex flex-col mb-4"}"><label class="${"mb-2 font-bold text-lg text-gray-900"}" for="${"phone"}">Phone</label>
					<input class="${"border py-2 px-3 text-grey-800"}" type="${"text"}" name="${"phone"}" id="${"phone"}"${add_attribute("value", registerationFields.phone, 0)}></div>

				<div class="${"flex flex-col mb-4 content-between"}"><label class="${"mb-2 font-bold text-lg text-gray-900"}" for="${"password"}">Password</label>
					<input class="${"border py-2 px-3 text-grey-800"}" type="${"password"}" name="${"password"}" id="${"password"}"${add_attribute("value", registerationFields.password, 0)}>
					<br>
					<button class="${"bg-yellow-500 hover:bg-yellow-200 hover:text-black text-white font-bold py-2 px-4 rounded transition-all items-center"}" type="${"submit"}">Submit</button></div></form>`}</div></div>
${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})}`;
});
export { Register as default };
