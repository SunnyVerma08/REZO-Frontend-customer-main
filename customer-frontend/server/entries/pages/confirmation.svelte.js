import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../chunks/index-a25d457a.js";
import { S as ServiceLayout } from "../../chunks/ServiceLayout-a148d58f.js";
import { R as RezoLogo } from "../../chunks/rezo-black-87x32-85fce49a.js";
import { H as HappyMotorPNG } from "../../chunks/happy-motor-male-bcdabddd.js";
const Confirmation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ServiceLayout, "ServiceLayout").$$render($$result, { backgroundImage: HappyMotorPNG }, {}, {
    default: () => {
      return `<div class="${"block absolute w-full top-0 left-0 bottom-0"}"><div class="${"relative text-center p-6 shadow-lg bg-white w-96 mt-16 mx-auto mb-4 rounded-md z-50"}"><div class="${"header"}"><div class="${"absolute top-5 left-6"}"><span class="${"h-4 w-4 inline-block cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 19l-7-7m0 0l7-7m-7 7h18"}"></path></svg></span></div>
                <div class="${"pb-3"}"><img${add_attribute("src", RezoLogo, 0)} class="${"h-8 filter invert inline-block"}" alt="${" Rezo Logo"}"></div></div>

            <div class="${"content"}"><div class="${"text-center"}"><span class="${"inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-32 w-32"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"}"></path></svg></span>
                    <div class="${"text-lg font-semibold pb-3"}">Thank you!</div>
                    <p class="${"text-lg font-light tracking-wider capitalize"}">Your booking has been confirmed
                    </p></div></div></div></div>`;
    }
  })}`;
});
export { Confirmation as default };
