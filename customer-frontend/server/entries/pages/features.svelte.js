import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../chunks/index-a25d457a.js";
import { H as HeaderBackground, F as Feature } from "../../chunks/Feature-60cd2c39.js";
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let featureState = {
    tab: {
      classes: `text-sm w-32 inline-block uppercase h-10 leading-10 pointer 
                      transition-all bg-transparent font-normal text-white hover:bg-white hover:bg-opacity-25`,
      citytaxi: true,
      outstation: false
    }
  };
  return `${validate_component(HeaderBackground, "HeaderBackground").$$render($$result, {
    height: 450,
    src: "https://www.olacabs.com/webstatic/img/features-banner.jpg"
  }, {}, {
    default: () => {
      return `<div class="${"text-overlay"}"></div>
    <div class="${"absolute left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-2/4 text-center text-white"}"><h1 class="${"text-5xl font-semibold m-2 text-shadow-x-0 text-shadow-y-2 text-shadow-blur-3 text-shadow"}">Cab Features</h1>
        <span class="${"text-xl font-medium text-shadow-x-0 text-shadow-y-2 text-shadow-blur-3 text-shadow"}">What makes us different?</span></div>`;
    }
  })}

<section><div class="${"text-center"}"><div class="${"relative z-20 -mt-10"}"><a href="${"#city"}"${add_attribute("class", `${featureState.tab.classes + " tab-active"}`, 0)} data-tab="${"citytaxi"}">City Taxi
            </a>
            <a href="${"#outstation"}"${add_attribute("class", `${featureState.tab.classes + " "}`, 0)} data-tab="${"outstation"}">Outstation
            </a></div>
        <div class="${"text-center"}"><div${add_attribute("class", `opacity-0 transition-all overflow-hidden invisible h-0 w-full ${"content-active"}`, 0)} id="${"citytaxi"}">City
            </div>
            <div${add_attribute("class", `opacity-0 transition-all overflow-hidden invisible h-0 w-full ${""}`, 0)} id="${"outstation"}">Outstation
            </div></div></div></section>

<section class="${"relative"}">${validate_component(Feature, "Feature").$$render($$result, {}, {}, {})}</section>`;
});
export { Features as default };
