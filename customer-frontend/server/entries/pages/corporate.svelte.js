import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/index-a25d457a.js";
import "jquery";
var SlickCarousel_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'slick';@import 'slick-theme';",
  map: null
};
const SlickCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slidesToShow = 1 } = $$props;
  let { slidesToScroll = 1 } = $$props;
  let { arrows = true } = $$props;
  let { dots = false } = $$props;
  let { autoplay = false } = $$props;
  let { autoplaySpeed = 2e3 } = $$props;
  let { items = [] } = $$props;
  if ($$props.slidesToShow === void 0 && $$bindings.slidesToShow && slidesToShow !== void 0)
    $$bindings.slidesToShow(slidesToShow);
  if ($$props.slidesToScroll === void 0 && $$bindings.slidesToScroll && slidesToScroll !== void 0)
    $$bindings.slidesToScroll(slidesToScroll);
  if ($$props.arrows === void 0 && $$bindings.arrows && arrows !== void 0)
    $$bindings.arrows(arrows);
  if ($$props.dots === void 0 && $$bindings.dots && dots !== void 0)
    $$bindings.dots(dots);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.autoplaySpeed === void 0 && $$bindings.autoplaySpeed && autoplaySpeed !== void 0)
    $$bindings.autoplaySpeed(autoplaySpeed);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  return `<div id="${"slick"}"${add_attribute("data-slick", `{"slidesToShow": ${slidesToShow}, "slidesToScroll": ${slidesToScroll}, "arrows": ${arrows}, "dots": ${dots}, "autoplay": ${autoplay}, "autoplaySpeed": ${autoplaySpeed}}`, 0)}>${items.length ? each(items, ({ src, title, subTitle, description }) => {
    return `<a class="${"relative w-full inline-block"}" style="${"height: 500px"}" href="${"/#"}"><div class="${"relative"}"${add_attribute("style", `height: 500px; background: rgba(0, 0, 0, 0) url(${src}) scroll 0% 0%; background-repeat:no-repeat;background-size:cover`, 0)}></div>
        <div class="${"absolute left-0 right-0 top-0 bottom-0 h-full w-full bg-black bg-opacity-10 z-10"}"></div>
        <div class="${"absolute left-0 right-0 top-0 bottom-0 h-full w-4/5 opacity-80 z-20"}" style="${"background-image: linear-gradient(270deg,transparent,#000 82%)"}"></div>
        <div class="${"absolute top-64 left-0 right-0 m-auto text-white font-normal w-full z-50 max-w-6xl"}"><div class="${"tracking-widest w-96"}"><div class="${"text-2xl mb-1 font-normal"}">${escape(title)}</div>
              <div class="${"text-xl mb-3 font-normal"}">${escape(subTitle)}</div>
              <p class="${"font-light leading-6 text-lg"}">${escape(description)}</p>
           </div></div>
     </a>`;
  }) : `<div class="${"absolute left-0 right-0 top-0 bottom-0 h-full w-full bg-black bg-opacity-10 z-10"}"></div>
        <div class="${"absolute left-0 right-0 top-0 bottom-0 h-full w-4/5 opacity-80 z-20"}" style="${"background-image: linear-gradient(270deg,transparent,#000 82%)"}"></div>`}</div>`;
});
const Corporate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    {
      src: "https://partners.olacabs.com/public/corousel/driver_partner2.jpg",
      title: "Manpreet Singh, Ludhiana",
      subTitle: "Driver",
      description: "Manpreet used his life savings to buy an auto and become an Ola driver-partner. With Ola, he gets more bookings than regular auto drivers"
    },
    {
      src: "https://partners.olacabs.com/public/corousel/driver_partner1.jpg",
      title: "Manpreet Singh, Ludhiana",
      subTitle: "Driver",
      description: "Manpreet used his life savings to buy an auto and become an Ola driver-partner. With Ola, he gets more bookings than regular auto drivers"
    }
  ];
  return `<div class="${"w-full corporate"}">${validate_component(SlickCarousel, "SlickCarousel").$$render($$result, {
    items,
    autoplay: true,
    dots: true,
    arrows: false
  }, {}, {})}
   <section class="${"text-center pt-4 pb-10"}"><div class="${"max-w-6xl m-auto"}"><h1 class="${"text-4xl text-gray-900 block mb-2 font-semibold tracking-wider"}">Make Money. Earn Respect. Secure Your Future. </h1>
         <h4 class="${"text-base text-gray-600 font-thin tracking-wider"}">Apply now to become an Ola driver-partner. Start earning in 24 hours!</h4>
         <div class="${"mt-14 clearfix"}"><div class="${"m-0 p-0 flex flex-col md:flex-row items-center"}"><div class="${"text-center md:w-1/3 w-2/4 md:mb-0 mb-4"}"><img src="${"https://partners.olacabs.com/public/img/type1.c1be690.png"}" alt="${"Driver"}" class="${"w-80 h-52 rounded inline-block"}">
                  <p class="${"text-2xl mt-10 mb-10 font-semibold tracking-wider"}"><span class="${"font-light"}">Join Ola as a</span> <br>
                     Partner with a Car
                  </p>
                  <a href="${"/#"}" class="${"w-56 text-lg font-normal border-2 rounded-full bg-white inline-block text-blue-600 align-top text-center border-blue-600 m-auto py-3 px-6"}">Attach my Car</a></div>

               <div class="${"text-center md:w-1/3 w-2/4 md:mb-0 mb-4"}"><img src="${"https://partners.olacabs.com/public/img/type1.c1be690.png"}" alt="${"Driver"}" class="${"w-80 h-52 rounded inline-block"}">
                  <p class="${"text-2xl mt-10 mb-10 font-semibold tracking-wider"}"><span class="${"font-light"}">Join Ola as a</span> <br>
                     Partner with a Car
                  </p>
                  <a href="${"/#"}" class="${"w-56 text-lg font-normal border-2 rounded-full bg-white inline-block text-blue-600 align-top text-center border-blue-600 m-auto py-3 px-6"}">Attach my Car</a></div>

               <div class="${"text-center md:w-1/3 w-2/4 md:mb-0 mb-4"}"><img src="${"https://partners.olacabs.com/public/img/type1.c1be690.png"}" alt="${"Driver"}" class="${"w-80 h-52 rounded inline-block"}">
                  <p class="${"text-2xl mt-10 mb-10 font-semibold tracking-wider"}"><span class="${"font-light"}">Join Ola as a</span> <br>
                     Partner with a Car
                  </p>
                  <a href="${"/#"}" class="${"w-56 text-lg font-normal border-2 rounded-full bg-white inline-block text-blue-600 align-top text-center border-blue-600 m-auto py-3 px-6"}">Attach my Car</a></div></div></div></div>
      <div class="${"max-w-6xl mt-10 m-auto bg-gray-200 p-8 rounded-md tracking-wider leading-6 inline-flex items-center bg-opacity-20"}"><div class="${"w-2/3 pr-5 text-left"}"><div class="${"text-gray-800 text-xl font-medium block mb-1"}">Attach your Rickshaw or Bike with Ola </div>
            <div class="${"text-black text-base font-normal"}">Know about more ways of partnering with Ola &amp; how each category can help you earn more. </div></div>
         <div class="${"w-1/3 text-right"}"><a href="${"/#"}" class="${"px-9 rounded-full text-white text-center text-base font-normal inline-block align-top bg-blue-700 h-10 leading-10"}">Send your enquiry</a></div></div>
      <div class="${"clearfix"}"></div></section></div>`;
});
export { Corporate as default };
