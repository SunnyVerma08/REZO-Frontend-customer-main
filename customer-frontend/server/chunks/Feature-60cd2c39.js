import { c as create_ssr_component, b as add_attribute } from "./index-a25d457a.js";
const HeaderBackground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = 625 } = $$props;
  let { src } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  return `<div class="${"w-full lg:bg-cover bg-center p-4"}"${add_attribute("style", `height:${height}px;background-image:url(${src})`, 0)}><div class="${"relative h-full w-full bg-opacity-5"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
var BestDriverSVG = "/_app/assets/ola-best-driver-6027bcb1.svg";
var SupportSVG = "/_app/assets/support-61e1f95b.svg";
var SOSSVG = "/_app/assets/send_out_succour-c0f6247a.svg";
const Feature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classes = "" } = $$props;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `<div${add_attribute("class", "bg-white px-6 py-3 rounded shadow-lg " + classes, 0)}><div class="${"flex items-center justify-evenly space-x-4"}"><div class="${"inline-flex space-x-4 items-start"}"><img class="${"inline-block h-8 w-8 rounded-full ring-2 ring-white"}"${add_attribute("src", SupportSVG, 0)} alt="${"Best Driver"}">
            <div class="${"inline-block"}"><span class="${"block text-lg font-bold"}">24/7 Customer Support</span>
                <span class="${"block text-sm font-light text-gray-400 text-left"}">A dedicated 24/7 support team always at your service to help solve any problem
                </span></div></div>

        <div class="${"inline-flex space-x-4 items-start"}"><img class="${"inline-block h-8 w-8 rounded-full ring-2 ring-white"}"${add_attribute("src", SOSSVG, 0)} alt="${""}">
            <div class="${"inline-block"}"><span class="${"block text-lg font-bold"}">7 Days Service Gurantee</span>
                <span class="${"block text-sm font-light text-gray-400 text-left"}">Keep your loved ones informed about your travel routes or call emergency services in need
                </span></div></div>

      <div class="${"inline-flex space-x-4 items-start"}"><img class="${"inline-block h-8 w-8 rounded-full ring-2 ring-white"}"${add_attribute("src", BestDriverSVG, 0)} alt="${""}">
        <div class="${"inline-block"}"><span class="${"block text-lg font-bold"}">Top Rated Mechanics</span>
            <span class="${"block text-sm font-light text-gray-400 text-left"}">All our driver-partners are backgroud verified and trained to deliver only the best experience
            </span></div></div></div></div>`;
});
export { Feature as F, HeaderBackground as H };
