import { c as create_ssr_component, h as createEventDispatcher, b as add_attribute, v as validate_component, m as missing_component, e as each, d as escape } from "../../chunks/index-a25d457a.js";
import { R as RezoLogo } from "../../chunks/rezo-black-87x32-85fce49a.js";
import { H as HappyMotorPNG } from "../../chunks/happy-motor-male-bcdabddd.js";
import { S as ServiceLayout } from "../../chunks/ServiceLayout-a148d58f.js";
const Backdrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { component } = $$props;
  let { show } = $$props;
  let { props = {} } = $$props;
  let { prop = {} } = $$props;
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  if ($$props.prop === void 0 && $$bindings.prop && prop !== void 0)
    $$bindings.prop(prop);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${show ? `<div class="${"fixed left-0 right-0 h-screen bg-black bg-opacity-70 w-full max-w-xl m-0 block z-50"}"${add_attribute("aria-hidden", show, 0)}>${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign(props, { defaultProp: prop }), {
      defaultProp: ($$value) => {
        prop = $$value;
        $$settled = false;
      }
    }, {})}</div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const IntlFlagsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const countries = [
    {
      name: "Australia",
      code: "+61",
      flag: "../../static/img/icons/au.svg"
    },
    {
      name: "New Zealand",
      code: "+64",
      flag: "../../static/img/icons/nz.svg"
    },
    {
      name: "Afghanistan",
      code: "+93",
      flag: "../../static/img/icons/af.svg"
    },
    {
      name: "Bangladesh",
      code: "+880",
      flag: "../../static/img/icons/bd.svg"
    },
    {
      name: "Malaysia",
      code: "+60",
      flag: "../../static/img/icons/my.svg"
    },
    {
      name: "Canada",
      code: "+1",
      flag: "../../static/img/icons/ca.svg"
    }
  ];
  let { defaultProp = null } = $$props;
  let { visible = false } = $$props;
  if ($$props.defaultProp === void 0 && $$bindings.defaultProp && defaultProp !== void 0)
    $$bindings.defaultProp(defaultProp);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  return `${visible ? `<div class="${"z-10 overflow-y-auto"}" aria-labelledby="${"modal-title"}" role="${"dialog"}" aria-modal="${"true"}"><div class="${"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"}"><span class="${"hidden sm:inline-block sm:align-middle sm:h-screen"}" aria-hidden="${"true"}">\u200B</span>
        <div class="${"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-72 prevent-hide"}" aria-readonly="${"true"}"><div class="${"bg-white prevent-hide"}"><div class="${"relative prevent-hide"}"><div class="${"text-center text-sm font-medium tracking-wide p-4 prevent-hide"}">Select Country
                </div></div>

              <div class="${"overflow-scroll modal-body"}"><div class="${"pb-1 bg-white"}"><div class="${"table w-full py-3"}"><div class="${"text-center table-cell align-middle w-14"}"><img src="${"https://olawebcdn.com/sso_images/v1/in.svg"}" class="${"inline-block"}" width="${"24"}" height="${"24"}" alt="${"Country"}"></div>  
                    <div class="${"table-cell align-middle text-left text-base text-gray-700"}">India</div>
                    <div class="${"table-cell align-middle text-right text-base text-gray-700 pr-6"}">+91</div></div>
                  <div class="${"line"}"></div>
                  <ul class="${"m-0 p-0"}">${each(countries, ({ name, code, flag }) => {
    return `<li class="${"table w-full py-3 cursor-pointer"}"><div class="${"text-center table-cell align-middle w-14"}"><img${add_attribute("src", flag, 0)} class="${"inline-block"}" width="${"24"}" height="${"24"}" alt="${"Country"}"></div>  
                        <div class="${"table-cell align-middle text-left text-base text-gray-700"}">${escape(name)}</div>
                        <div class="${"table-cell align-middle text-right text-base text-gray-700 pr-6"}">${escape(code)}</div>
                      </li>`;
  })}</ul></div></div></div></div></div></div>` : ``}`;
});
const LoginService = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let IntlProp = {
    visible: false,
    code: "+91",
    flag: "../../static/img/icons/in.svg"
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(ServiceLayout, "ServiceLayout").$$render($$result, {
      header: false,
      backgroundImage: HappyMotorPNG
    }, {}, {
      default: () => {
        return `<div class="${"block absolute w-full top-0 left-0 bottom-0"}"><div class="${"relative text-center p-6 shadow-lg bg-white w-96 mt-16 mx-auto mb-4 rounded-md"}"><div class="${"header"}"><div class="${"absolute top-5 left-6"}"><span class="${"h-4 w-4 inline-block cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 19l-7-7m0 0l7-7m-7 7h18"}"></path></svg></span></div>
                <div class="${"pb-3"}"><img${add_attribute("src", RezoLogo, 0)} class="${"h-8 filter invert inline-block"}" alt="${" Rezo Logo"}"></div></div>

            <div class="${"content"}"><div class="${"text-lg font-semibold pb-2"}">Enter your mobile number</div>
                <div class="${"text-sm font-normal text-gray-400"}">A 4-digit OTP will be sent on SMS</div>
                <div class="${"relative mt-4 rounded-md bg-white border border-gray-300 h-12 w-full table"}"><div class="${"relative w-14 inline-block align-middle right-1 border-r border-gray-300 cursor-pointer"}"><div class="${"float-left"}"><img${add_attribute("src", IntlProp.flag, 0)} alt="${"Country"}" class="${"h-6 w-6 inline-block align-middle"}">
                            <span class="${"h-4 w-4 inline-block align-middle text-gray-300 ml-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M19 9l-7 7-7-7"}"></path></svg></span></div></div>
                    <div class="${"inline-block align-middle opacity-50 text-lg px-1"}">${escape(IntlProp.code)}</div>
                    <input type="${"tel"}" autocomplete="${"off"}" class="${"outline-none bg-white rounded-md h-11 border-0 w-2/4 inline-block align-middle opacity-50 text-lg"}"></div></div>
            <button type="${"button"}" class="${"bg-gray-300 mt-4 rounded-md text-gray-700 p-4 w-full"}">Next</button></div>
        </div>
    ${validate_component(Backdrop, "Backdrop").$$render($$result, {
          show: IntlProp.visible,
          component: IntlFlagsModal,
          props: IntlProp,
          prop: IntlProp
        }, {
          prop: ($$value) => {
            IntlProp = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { LoginService as default };
