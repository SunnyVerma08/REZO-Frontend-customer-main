import { c as create_ssr_component, b as add_attribute, a as subscribe, d as escape, e as each, v as validate_component, h as createEventDispatcher, m as missing_component, j as spread, k as escape_object, l as escape_attribute_value, o as globals, p as is_promise, n as noop } from "../../chunks/index-a25d457a.js";
import { p as page, D as DownArrow } from "../../chunks/down-arrow-7b0c9d83.js";
import _ from "lodash";
import { F as FrontView } from "../../chunks/front-view-male-7f5c6426.js";
import { S as ServiceLayout } from "../../chunks/ServiceLayout-a148d58f.js";
import { a as appStore } from "../../chunks/apiCallStore-1da2049a.js";
import "../../chunks/rezo-black-87x32-85fce49a.js";
import "../../chunks/index-e671fec2.js";
import "axios";
import "../../chunks/checkAuth-d57e5fd3.js";
var GPSPNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABjUlEQVRIic2Vv04CQRDGf3exU7yGUioV7RRaiRG09WlsLIhvotKqqLWF+KfRJ+B8BYHDwAtgsbO5yXkutxoTv2RyMPvt9y2zNwP4IQFGnnu8MJMojPCPDlLYIAD2gQ4Qq3wMnAMt4fwIG8ATaVm+i0eg6iu+C3yIwDvQBraBRYma5AbCGQONouKbSvwKKDm4y8C1MlmfJx4Az0q8SH1DZfIwb88BaVn0yStAF5hK3GLuyCIiLVfLZdARUjsjnvD1cseyZnEi+VOXQSykLZXr5ojbuFS8muT6WdG80+nyTB0GE8Ur5ayPQjxbPwO9N/dyQ6AsiwHwJvlVxbl3GNypz2vyjJVeOTsqXuV5qHLHmL7IIgGO1He758VxIFqYnz3ANJFFBXOhE4kLYEWtR8BQ9jZdBgFmtswwzVNk2oaYvpgBvQJ8qph33JpEDm4E3Ag3Ib2HuWgokyGmierAEuZ1rEvOliUBdoqKW6xjZsu8cd3zOXkemsAZpkOtaB8zEvZ+I5yH//efvODJT3wNPgH6DIkeOvcDwAAAAABJRU5ErkJggg==";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `${type === "bike" ? `
<svg version="${"1.1"}" id="${"Capa_1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}"${add_attribute("width", width + "px", 0)}${add_attribute("height", height + "px", 0)} viewBox="${"0 0 451.66 451.66"}" style="${"enable-background:new 0 0 451.66 451.66;"}" xml:space="${"preserve"}"><g><path d="${"M397.884,217.461c0.881-0.868,1.736-1.715,2.56-2.537c10.797-10.797,15.417-21.94,13.73-33.119\n		c-1.75-11.611-10.229-21.74-24.521-29.292c-18.274-9.656-74.508-38.746-75.073-39.039c-3.479-1.799-7.688-1.402-10.771,1.017\n		c-3.081,2.419-4.467,6.415-3.544,10.221l8.234,33.965l-66.88-14.592c-2.841-0.62-5.807,0.026-8.132,1.77l-38.365,28.773\n		l-42.261-8.965l-36.938-35.517c-2.166-2.082-5.154-3.079-8.135-2.719l-98.995,12c-4.312,0.522-7.794,3.77-8.614,8.036\n		c-0.822,4.266,1.204,8.574,5.014,10.661l120.526,66.045l-11.528,9.278C103.263,223.254,88.617,217,72.528,217\n		c-33.719,0-61.151,27.433-61.151,61.151c0,33.72,27.434,61.151,61.151,61.151c32.589,0,59.302-25.626,61.056-57.784h34.394\n		l6.84,15.801c1.584,3.659,5.188,6.027,9.177,6.027h115.494c2.417,0,4.753-0.875,6.574-2.465c1.003-0.875,10.445-9.12,23.349-20.568\n		c1.145,32.721,28.104,58.989,61.097,58.989c33.721,0,61.152-27.433,61.152-61.151C451.659,246.931,428.135,221.119,397.884,217.461\n		z M72.528,299.304c-11.663,0-21.151-9.488-21.151-21.15c0-11.664,9.488-21.152,21.151-21.152s21.151,9.489,21.151,21.152\n		C93.68,289.815,84.191,299.304,72.528,299.304z M390.506,299.304c-11.663,0-21.15-9.488-21.15-21.15\n		c0-11.664,9.487-21.152,21.15-21.152s21.152,9.489,21.152,21.152C411.659,289.815,402.169,299.304,390.506,299.304z"}"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>` : ``}`;
});
const util = {
  async days() {
    const _default = await import("moment");
    const moment = _default.default;
    const getDaysObject = [];
    let date = null;
    for (let d = 1; d < 7; d++) {
      date = moment().add(d, "days");
      getDaysObject.push({
        value: date.format("L"),
        text: date.calendar().includes("Tomorrow") ? "Tomorrow" : date.format("ll")
      });
    }
    return getDaysObject;
  },
  async serviceTime(startTime, endTime) {
    const _default = await import("moment");
    const moment = _default.default;
    const getTimes = [];
    let _startTime = moment(startTime, "HH:mm");
    let _endTime = moment(endTime, "HH:mm");
    let _prevStart = {};
    if (_endTime.isBefore(_startTime))
      _endTime.add(1, "day");
    while (_startTime <= _endTime) {
      _prevStart = _startTime.clone();
      _startTime.add(60, "minutes");
      getTimes.push({
        value: `${_prevStart.valueOf()}-${_startTime.valueOf()}`,
        text: `${_prevStart.format("hh:mm A")} - ${_startTime.format("hh:mm A")}`
      });
    }
    return getTimes;
  },
  getPricingOnCC(engines, cc) {
    let priceAndDuration = { cost: 0, duration: 0 };
    for (let engine of engines) {
      const { cost, duration } = engine;
      if (engine.cc instanceof Array) {
        engine.cc.includes(cc) && (priceAndDuration = { cost, duration });
      }
      if (engine.cc instanceof Number) {
        engine.cc === cc && (priceAndDuration = { cost, duration });
      }
    }
    return priceAndDuration;
  },
  getWorkShop() {
    return [
      {
        name: "delhi",
        addresses: [
          { name: "NCR Motorcycles", phone: "9911464687", location: "New Delhi", coordinates: { lat: 28.569655, lng: 77.282428 }, full_address: "R-282, Street No. 7, near Islah Masjid, Jogabai Extension, Okhla, New Delhi, Delhi 110025" },
          { name: "ARV Brother", phone: "981031066", location: "New Delhi", coordinates: { lat: 28.502958, lng: 77.247521 }, full_address: "E-7C/611A, Ratiya Marg, opp. Bangali Sweets, Sangam Vihar, New Delhi, Delhi 110080" },
          { name: "Bike Center", phone: "9811389158", location: "Delhi", coordinates: { lat: 28.671198, lng: 77.174808 }, full_address: "5-E Shahjada Bagh, Near TVS Showroom, Industrial Area, Inderlok, Delhi 110007" },
          { name: "Yadav Scooters and Service Center", phone: "01125031544", location: "New Delhi", coordinates: { lat: 28.595199, lng: 77.080518 }, full_address: "RZ-L-1, Main Road, Palam - Dabri Marg, near Shiv Vani Model School, Mahavir Enclave I, Mahavir Enclave, New Delhi, Delhi 110025" },
          { name: "Yash Bike Service Center", phone: "8826587429", location: "Delhi", coordinates: { lat: 28.703818, lng: 77.080611 }, full_address: "G-101, Dharam Market, Kanjhawala Rd, Krishan Vihar, Delhi 110025" },
          { name: "Sachin Automobiles", phone: "8802425389", location: "Delhi", coordinates: { lat: 28.712534, lng: 77.082883 }, full_address: "X-1/66, Main Rithala Road, Near Meera Devi Public School, Budh Vihar Phase I, Jharoda Kalan, Majraa, Delhi 110025" },
          { name: "Balaji Motor Bike Center", phone: "9811088239", location: "New Delhi", coordinates: { lat: 28.565822, lng: 77.181371 }, full_address: "Shop No. 9, Vivekanand Marg, Sector 1, RK Puram, New Delhi, Delhi 110025" }
        ]
      }
    ];
  },
  getServices() {
    return [
      {
        _id: "763ad187f15faf8c0a7384d1",
        name: "General Service",
        engine_cc: [
          {
            cc: [100, 110],
            cost: 499,
            duration: 75
          },
          {
            cc: 125,
            cost: 599,
            duration: 75
          },
          {
            cc: [150, 160],
            cost: 699,
            duration: 90
          },
          {
            cc: [180, 200, 220],
            cost: 999,
            duration: 105
          },
          {
            cc: 220,
            cost: 1299,
            duration: 120
          },
          {
            cc: 400,
            cost: 1899,
            duration: 180
          }
        ],
        specs: {
          warranty: "Valid Warranty in a number of weeks: 1000KMs or 1 month",
          recommended: "The recommended number of KM / Number of Months for repeat service: Every 5000KMs or 6 Months",
          services_included: [
            "Engine oil replacement (Regular)",
            "Oil strainer cleaning",
            "Air filter cleaning",
            "Spark plug cleaning & Testing",
            "Drive chain cleaning & lubrication",
            "Drive chain slackness adjustment",
            "Battery testing",
            "Fasteners tightening",
            "ABC (Accelerator, Brake and Clutch cable adjustment)",
            "General Electrical and mechanical inspection",
            "Full wash"
          ]
        }
      },
      {
        _id: "26fc5059e7c4ccf7f995726c",
        name: "Complete/Full Service",
        engine_cc: [
          {
            cc: [100, 110],
            cost: 899,
            duration: 120
          },
          {
            cc: 125,
            cost: 999,
            duration: 120
          },
          {
            cc: [150, 160],
            cost: 1299,
            duration: 150
          },
          {
            cc: [180, 200, 220],
            cost: 1699,
            duration: 150
          },
          {
            cc: 220,
            cost: 1899,
            duration: 180
          },
          {
            cc: 400,
            cost: 2e3,
            duration: 200
          }
        ],
        specs: {
          warranty: "Valid Warranty in a number of weeks: 1000KMs or 1 month",
          recommended: "The recommended number of KM / Number of Months for repeat service: Every 10000KMs or 12 Months",
          services_included: [
            "Engine oil replacement (Regular)",
            "Oil strainer replacement",
            "Carburetor cleaning",
            "Air filter replacement",
            "Spark plug replacement",
            "Coolant replacement",
            "Brake oil replacement",
            "Brake drum/pad service",
            "Throttle body cleaning",
            "Tappet checking & adjustment",
            "Idle speed / CO% checking & adjustment",
            "Fuel line checking",
            "Fuel filter cleaning",
            "Suspension checking & adjustment",
            "Drive chain cleaning & lubrication",
            "Drive chain slackness adjustment",
            "Wiring harness checking",
            "Tire tread wear checking",
            "Steering play adjustment",
            "Main stand & side stand pin greasing",
            "Headlight checking & Focus adjustment",
            "Wiring harness checking",
            "Battery testing",
            "Fasteners tightening",
            "General lubrication",
            "ABC (Accelerator, Brake and Clutch cable adjustment)",
            "Full vehicle wash"
          ]
        }
      },
      {
        _id: "adac3310c7f63ab4cecfc01b",
        name: "Bike Spa & Cleaning",
        engine_cc: [
          {
            cc: [100, 110],
            cost: 149,
            duration: 30
          },
          {
            cc: 125,
            cost: 149,
            duration: 30
          },
          {
            cc: [150, 160],
            cost: 149,
            duration: 30
          },
          {
            cc: [180, 200, 220],
            cost: 149,
            duration: 30
          },
          {
            cc: 220,
            cost: 149,
            duration: 30
          },
          {
            cc: 400,
            cost: 149,
            duration: 30
          }
        ],
        specs: {
          warranty: "",
          recommended: "",
          services_included: [
            "Outer body Wash",
            "Underbody wash",
            "Complete Dry/foam wash"
          ]
        }
      },
      {
        _id: "72ffd22c3df85c570d471dcc",
        name: "Inspection (General Service Inspection)",
        engine_cc: [
          {
            cc: [100, 110],
            cost: 149,
            duration: "30-60"
          },
          {
            cc: 125,
            cost: 149,
            duration: "30-60"
          },
          {
            cc: [150, 160],
            cost: 149,
            duration: "30-60"
          },
          {
            cc: [180, 200, 220],
            cost: 149,
            duration: "30-60"
          },
          {
            cc: 220,
            cost: 149,
            duration: "30-60"
          },
          {
            cc: 400,
            cost: 149,
            duration: "30-60"
          }
        ],
        specs: {
          warranty: "",
          recommended: "",
          services_included: [
            "Complete inspection",
            "General Mechanical & electrical check up",
            "Service/repair recommendations (Flexible)",
            "Service add ons based on Inspection"
          ]
        }
      }
    ];
  }
};
const AvailServices = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let address;
  let { selectedService = {} } = $$props;
  let { model = {} } = $$props;
  let { location = "" } = $$props;
  if ($$props.selectedService === void 0 && $$bindings.selectedService && selectedService !== void 0)
    $$bindings.selectedService(selectedService);
  if ($$props.model === void 0 && $$bindings.model && model !== void 0)
    $$bindings.model(model);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  address = util.getWorkShop().find((loc) => loc.name === location).addresses[0];
  $$unsubscribe_page();
  return `<div class="${"available-services p-3 ml-2 shadow bg-white rounded-md"}"><div class="${"flow-root"}"><ul role="${"list"}" class="${"divide-y divide-gray-200 -mt-3"}"><li class="${"flex py-3"}"><div class="${"flex-shrink-0 overflow-hidden h-6 w-6"}"><img${add_attribute("src", GPSPNG, 0)} class="${"h-full w-full object-cover object-center"}" alt="${"GPS"}"></div>
                <div class="${"flex-1 flex flex-col ml-4"}"><h3 class="${"text-sm font-light tracking-wide"}">Workshop is located at <address>${escape(address.full_address)}</address></h3>
                    </div></li>
            ${each(util.getServices(), (service) => {
    let { cost, duration } = util.getPricingOnCC(service.engine_cc, model.cc);
    return `
            <li class="${"flex py-3 cursor-pointer"}"${add_attribute("data-service-id", service._id, 0)}><div class="${"flex-shrink-0 overflow-hidden h-6 w-6"}">
                    ${validate_component(Icon, "Icon").$$render($$result, { type: "bike", width: 24, height: 24 }, {}, {})}</div>
                <div class="${"flex-1 flex flex-col ml-4"}"><div class="${"flex justify-between text-base font-medium"}"><h3 class="${"tracking-wide"}">${escape(service.name)}</h3>
                        <p class="${"mx-4"}">\u20B9${escape(cost)}</p></div>
                    <div class="${""}"><ul role="${"list"}"><li class="${"text-xs font-normal text-gray-600"}">${escape(duration)} Min</li></ul>
                    </div></div>
            </li>`;
  })}</ul></div></div>`;
});
function isOutOfViewport(parent, container) {
  const parentBounding = parent.getBoundingClientRect();
  const boundingContainer = container.getBoundingClientRect();
  const out = {};
  out.top = parentBounding.top < 0;
  out.left = parentBounding.left < 0;
  out.bottom = parentBounding.bottom + boundingContainer.height > (window.innerHeight || document.documentElement.clientHeight);
  out.right = parentBounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  return out;
}
var Item_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".item.svelte-3e0qet{cursor:default;height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--itemPadding, 0 20px);color:var(--itemColor, inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.groupHeader.svelte-3e0qet{text-transform:var(--groupTitleTextTransform, uppercase)}.groupItem.svelte-3e0qet{padding-left:var(--groupItemPaddingLeft, 40px)}.item.svelte-3e0qet:active{background:var(--itemActiveBackground, #b9daff)}.item.active.svelte-3e0qet{background:var(--itemIsActiveBG, #007aff);color:var(--itemIsActiveColor, #fff)}.item.notSelectable.svelte-3e0qet{color:var(--itemIsNotSelectableColor, #999)}.item.first.svelte-3e0qet{border-radius:var(--itemFirstBorderRadius, 4px 4px 0 0)}.item.hover.svelte-3e0qet:not(.active){background:var(--itemHoverBG, #e7f2ff);color:var(--itemHoverColor, inherit)}",
  map: null
};
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isActive = false } = $$props;
  let { isFirst = false } = $$props;
  let { isHover = false } = $$props;
  let { isSelectable = false } = $$props;
  let { getOptionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  let { filterText = "" } = $$props;
  let itemClasses = "";
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.isFirst === void 0 && $$bindings.isFirst && isFirst !== void 0)
    $$bindings.isFirst(isFirst);
  if ($$props.isHover === void 0 && $$bindings.isHover && isHover !== void 0)
    $$bindings.isHover(isHover);
  if ($$props.isSelectable === void 0 && $$bindings.isSelectable && isSelectable !== void 0)
    $$bindings.isSelectable(isSelectable);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  $$result.css.add(css$5);
  {
    {
      const classes = [];
      if (isActive) {
        classes.push("active");
      }
      if (isFirst) {
        classes.push("first");
      }
      if (isHover) {
        classes.push("hover");
      }
      if (item.isGroupHeader) {
        classes.push("groupHeader");
      }
      if (item.isGroupItem) {
        classes.push("groupItem");
      }
      if (!isSelectable) {
        classes.push("notSelectable");
      }
      itemClasses = classes.join(" ");
    }
  }
  return `<div class="${"item " + escape(itemClasses) + " svelte-3e0qet"}"><!-- HTML_TAG_START -->${getOptionLabel(item, filterText)}<!-- HTML_TAG_END --></div>`;
});
var List_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".listContainer.svelte-1uyqfml{box-shadow:var(--listShadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));border-radius:var(--listBorderRadius, 4px);max-height:var(--listMaxHeight, 250px);overflow-y:auto;background:var(--listBackground, #fff);border:var(--listBorder, none);position:var(--listPosition, absolute);z-index:var(--listZIndex, 2);width:100%;left:var(--listLeft, 0);right:var(--listRight, 0)}.virtualList.svelte-1uyqfml{height:var(--virtualListHeight, 200px)}.listGroupTitle.svelte-1uyqfml{color:var(--groupTitleColor, #8f8f8f);cursor:default;font-size:var(--groupTitleFontSize, 12px);font-weight:var(--groupTitleFontWeight, 600);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--groupTitlePadding, 0 20px);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;text-transform:var(--groupTitleTextTransform, uppercase)}.empty.svelte-1uyqfml{text-align:var(--listEmptyTextAlign, center);padding:var(--listEmptyPadding, 20px 0);color:var(--listEmptyColor, #78848f)}",
  map: null
};
function isItemActive(item, value, optionIdentifier) {
  return value && value[optionIdentifier] === item[optionIdentifier];
}
function isItemFirst(itemIndex) {
  return itemIndex === 0;
}
function isItemHover(hoverItemIndex, item, itemIndex, items) {
  return isItemSelectable(item) && (hoverItemIndex === itemIndex || items.length === 1);
}
function isItemSelectable(item) {
  return item.isGroupHeader && item.isSelectable || item.selectable || !item.hasOwnProperty("selectable");
}
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { container = void 0 } = $$props;
  let { VirtualList: VirtualList2 = null } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { isVirtualList = false } = $$props;
  let { items = [] } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    if (option)
      return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { getGroupHeaderLabel = null } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { value = void 0 } = $$props;
  let { optionIdentifier = "value" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { isMulti = false } = $$props;
  let { activeItemIndex = 0 } = $$props;
  let { filterText = "" } = $$props;
  let { parent = null } = $$props;
  let { listPlacement = null } = $$props;
  let { listAutoWidth = null } = $$props;
  let { listOffset = 5 } = $$props;
  let listStyle;
  function computePlacement() {
    const { height, width } = parent.getBoundingClientRect();
    listStyle = "";
    listStyle += `min-width:${width}px;width:${listAutoWidth ? "auto" : "100%"};`;
    if (listPlacement === "top" || listPlacement === "auto" && isOutOfViewport(parent, container).bottom) {
      listStyle += `bottom:${height + listOffset}px;`;
    } else {
      listStyle += `top:${height + listOffset}px;`;
    }
  }
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList2 !== void 0)
    $$bindings.VirtualList(VirtualList2);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier !== void 0)
    $$bindings.optionIdentifier(optionIdentifier);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.activeItemIndex === void 0 && $$bindings.activeItemIndex && activeItemIndex !== void 0)
    $$bindings.activeItemIndex(activeItemIndex);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  $$result.css.add(css$4);
  {
    {
      if (parent && container)
        computePlacement();
    }
  }
  return `

<div class="${["listContainer svelte-1uyqfml", isVirtualList ? "virtualList" : ""].join(" ").trim()}"${add_attribute("style", listStyle, 0)}${add_attribute("this", container, 0)}>${isVirtualList ? `${validate_component(VirtualList2 || missing_component, "svelte:component").$$render($$result, { items, itemHeight }, {}, {
    default: ({ item, i }) => {
      return `<div class="${"listItem"}">${validate_component(Item$1 || missing_component, "svelte:component").$$render($$result, {
        item,
        filterText,
        getOptionLabel,
        isFirst: isItemFirst(i),
        isActive: isItemActive(item, value, optionIdentifier),
        isHover: isItemHover(hoverItemIndex, item, i, items),
        isSelectable: isItemSelectable(item)
      }, {}, {})}</div>`;
    }
  })}` : `${items.length ? each(items, (item, i) => {
    return `${item.isGroupHeader && !item.isSelectable ? `<div class="${"listGroupTitle svelte-1uyqfml"}">${escape(getGroupHeaderLabel(item))}</div>` : `<div class="${"listItem"}" tabindex="${"-1"}">${validate_component(Item$1 || missing_component, "svelte:component").$$render($$result, {
      item,
      filterText,
      getOptionLabel,
      isFirst: isItemFirst(i),
      isActive: isItemActive(item, value, optionIdentifier),
      isHover: isItemHover(hoverItemIndex, item, i, items),
      isSelectable: isItemSelectable(item)
    }, {}, {})}
                </div>`}`;
  }) : `${!hideEmptyState ? `<div class="${"empty svelte-1uyqfml"}">${escape(noOptionsMessage)}</div>` : ``}`}`}</div>`;
});
var Selection_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".selection.svelte-pu1q1n{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}",
  map: null
};
const Selection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { getSelectionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$3);
  return `<div class="${"selection svelte-pu1q1n"}"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>`;
});
var MultiSelection_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".multiSelectItem.svelte-liu9pa.svelte-liu9pa{background:var(--multiItemBG, #ebedef);margin:var(--multiItemMargin, 5px 5px 0 0);border-radius:var(--multiItemBorderRadius, 16px);height:var(--multiItemHeight, 32px);line-height:var(--multiItemHeight, 32px);display:flex;cursor:default;padding:var(--multiItemPadding, 0 10px 0 15px);max-width:100%}.multiSelectItem_label.svelte-liu9pa.svelte-liu9pa{margin:var(--multiLabelMargin, 0 5px 0 0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiSelectItem.svelte-liu9pa.svelte-liu9pa:hover,.multiSelectItem.active.svelte-liu9pa.svelte-liu9pa{background-color:var(--multiItemActiveBG, #006fff);color:var(--multiItemActiveColor, #fff)}.multiSelectItem.disabled.svelte-liu9pa.svelte-liu9pa:hover{background:var(--multiItemDisabledHoverBg, #ebedef);color:var(--multiItemDisabledHoverColor, #c1c6cc)}.multiSelectItem_clear.svelte-liu9pa.svelte-liu9pa{border-radius:var(--multiClearRadius, 50%);background:var(--multiClearBG, #52616f);min-width:var(--multiClearWidth, 16px);max-width:var(--multiClearWidth, 16px);height:var(--multiClearHeight, 16px);position:relative;top:var(--multiClearTop, 8px);text-align:var(--multiClearTextAlign, center);padding:var(--multiClearPadding, 1px)}.multiSelectItem_clear.svelte-liu9pa.svelte-liu9pa:hover,.active.svelte-liu9pa .multiSelectItem_clear.svelte-liu9pa{background:var(--multiClearHoverBG, #fff)}.multiSelectItem_clear.svelte-liu9pa:hover svg.svelte-liu9pa,.active.svelte-liu9pa .multiSelectItem_clear svg.svelte-liu9pa{fill:var(--multiClearHoverFill, #006fff)}.multiSelectItem_clear.svelte-liu9pa svg.svelte-liu9pa{fill:var(--multiClearFill, #ebedef);vertical-align:top}",
  map: null
};
const MultiSelection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value = [] } = $$props;
  let { activeValue = void 0 } = $$props;
  let { isDisabled = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { getSelectionLabel = void 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.activeValue === void 0 && $$bindings.activeValue && activeValue !== void 0)
    $$bindings.activeValue(activeValue);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  $$result.css.add(css$2);
  return `${each(value, (item, i) => {
    return `<div class="${"multiSelectItem " + escape(activeValue === i ? "active" : "") + " " + escape(isDisabled ? "disabled" : "") + " svelte-liu9pa"}"><div class="${"multiSelectItem_label svelte-liu9pa"}"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>
        ${!isDisabled && !multiFullItemClearable ? `<div class="${"multiSelectItem_clear svelte-liu9pa"}"><svg width="${"100%"}" height="${"100%"}" viewBox="${"-2 -2 50 50"}" focusable="${"false"}" aria-hidden="${"true"}" role="${"presentation"}" class="${"svelte-liu9pa"}"><path d="${"M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"}"></path></svg>
            </div>` : ``}
    </div>`;
  })}`;
});
var VirtualList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "svelte-virtual-list-viewport.svelte-g2cagw{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-g2cagw,svelte-virtual-list-row.svelte-g2cagw{display:block}svelte-virtual-list-row.svelte-g2cagw{overflow:hidden}",
  map: null
};
const VirtualList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = void 0 } = $$props;
  let { height = "100%" } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { start = 0 } = $$props;
  let { end = 0 } = $$props;
  let viewport;
  let contents;
  let visible;
  let top = 0;
  let bottom = 0;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  $$result.css.add(css$1);
  visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  return `<svelte-virtual-list-viewport style="${"height: " + escape(height) + ";"}" class="${"svelte-g2cagw"}"${add_attribute("this", viewport, 0)}><svelte-virtual-list-contents style="${"padding-top: " + escape(top) + "px; padding-bottom: " + escape(bottom) + "px;"}" class="${"svelte-g2cagw"}"${add_attribute("this", contents, 0)}>${each(visible, (row) => {
    return `<svelte-virtual-list-row class="${"svelte-g2cagw"}">${slots.default ? slots.default({
      item: row.data,
      i: row.index,
      hoverItemIndex
    }) : `Missing template`}
            </svelte-virtual-list-row>`;
  })}</svelte-virtual-list-contents></svelte-virtual-list-viewport>`;
});
const ClearIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" viewBox="${"-2 -2 50 50"}" focusable="${"false"}" aria-hidden="${"true"}" role="${"presentation"}"><path fill="${"currentColor"}" d="${"M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124\n    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"}"></path></svg>`;
});
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
}
var Select_svelte_svelte_type_style_lang = "";
const { Object: Object_1 } = globals;
const css = {
  code: ".selectContainer.svelte-17l1npl.svelte-17l1npl{--internalPadding:0 16px;border:var(--border, 1px solid #d8dbdf);border-radius:var(--borderRadius, 3px);box-sizing:border-box;height:var(--height, 42px);position:relative;display:flex;align-items:center;padding:var(--padding, var(--internalPadding));background:var(--background, #fff);margin:var(--margin, 0)}.selectContainer.svelte-17l1npl input.svelte-17l1npl{cursor:default;border:none;color:var(--inputColor, #3f4f5f);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--inputPadding, var(--padding, var(--internalPadding)));width:100%;background:transparent;font-size:var(--inputFontSize, 14px);letter-spacing:var(--inputLetterSpacing, -0.08px);position:absolute;left:var(--inputLeft, 0);margin:var(--inputMargin, 0)}.selectContainer.svelte-17l1npl input.svelte-17l1npl::placeholder{color:var(--placeholderColor, #78848f);opacity:var(--placeholderOpacity, 1)}.selectContainer.svelte-17l1npl input.svelte-17l1npl:focus{outline:none}.selectContainer.svelte-17l1npl.svelte-17l1npl:hover{border-color:var(--borderHoverColor, #b2b8bf)}.selectContainer.focused.svelte-17l1npl.svelte-17l1npl{border-color:var(--borderFocusColor, #006fe8)}.selectContainer.disabled.svelte-17l1npl.svelte-17l1npl{background:var(--disabledBackground, #ebedef);border-color:var(--disabledBorderColor, #ebedef);color:var(--disabledColor, #c1c6cc)}.selectContainer.disabled.svelte-17l1npl input.svelte-17l1npl::placeholder{color:var(--disabledPlaceholderColor, #c1c6cc);opacity:var(--disabledPlaceholderOpacity, 1)}.selectedItem.svelte-17l1npl.svelte-17l1npl{line-height:var(--height, 42px);height:var(--height, 42px);overflow-x:hidden;padding:var(--selectedItemPadding, 0 20px 0 0)}.selectedItem.svelte-17l1npl.svelte-17l1npl:focus{outline:none}.clearSelect.svelte-17l1npl.svelte-17l1npl{position:absolute;right:var(--clearSelectRight, 10px);top:var(--clearSelectTop, 11px);bottom:var(--clearSelectBottom, 11px);width:var(--clearSelectWidth, 20px);color:var(--clearSelectColor, #c5cacf);flex:none !important}.clearSelect.svelte-17l1npl.svelte-17l1npl:hover{color:var(--clearSelectHoverColor, #2c3e50)}.selectContainer.focused.svelte-17l1npl .clearSelect.svelte-17l1npl{color:var(--clearSelectFocusColor, #3f4f5f)}.indicator.svelte-17l1npl.svelte-17l1npl{position:absolute;right:var(--indicatorRight, 10px);top:var(--indicatorTop, 11px);width:var(--indicatorWidth, 20px);height:var(--indicatorHeight, 20px);color:var(--indicatorColor, #c5cacf)}.indicator.svelte-17l1npl svg.svelte-17l1npl{display:inline-block;fill:var(--indicatorFill, currentcolor);line-height:1;stroke:var(--indicatorStroke, currentcolor);stroke-width:0}.spinner.svelte-17l1npl.svelte-17l1npl{position:absolute;right:var(--spinnerRight, 10px);top:var(--spinnerLeft, 11px);width:var(--spinnerWidth, 20px);height:var(--spinnerHeight, 20px);color:var(--spinnerColor, #51ce6c);animation:svelte-17l1npl-rotate 0.75s linear infinite}.spinner_icon.svelte-17l1npl.svelte-17l1npl{display:block;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transform:none}.spinner_path.svelte-17l1npl.svelte-17l1npl{stroke-dasharray:90;stroke-linecap:round}.multiSelect.svelte-17l1npl.svelte-17l1npl{display:flex;padding:var(--multiSelectPadding, 0 35px 0 16px);height:auto;flex-wrap:wrap;align-items:stretch}.multiSelect.svelte-17l1npl>.svelte-17l1npl{flex:1 1 50px}.selectContainer.multiSelect.svelte-17l1npl input.svelte-17l1npl{padding:var(--multiSelectInputPadding, 0);position:relative;margin:var(--multiSelectInputMargin, 0)}.hasError.svelte-17l1npl.svelte-17l1npl{border:var(--errorBorder, 1px solid #ff2d55);background:var(--errorBackground, #fff)}.a11yText.svelte-17l1npl.svelte-17l1npl{z-index:9999;border:0px;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0px;white-space:nowrap}@keyframes svelte-17l1npl-rotate{100%{transform:rotate(360deg)}}",
  map: null
};
function convertStringItemsToObjects(_items) {
  return _items.map((item, index) => {
    return { index, value: item, label: `${item}` };
  });
}
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredItems;
  let showSelectedItem;
  let showClearIcon;
  let placeholderText;
  let showMultiSelect;
  let listProps;
  let ariaSelection;
  let ariaContext;
  const dispatch = createEventDispatcher();
  let { id = null } = $$props;
  let { container = void 0 } = $$props;
  let { input = void 0 } = $$props;
  let { isMulti = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { isDisabled = false } = $$props;
  let { isCreatable = false } = $$props;
  let { isFocused = false } = $$props;
  let { value = null } = $$props;
  let { filterText = "" } = $$props;
  let { placeholder = "Select..." } = $$props;
  let { placeholderAlwaysShow = false } = $$props;
  let { items = null } = $$props;
  let { itemFilter = (label, filterText2, option) => `${label}`.toLowerCase().includes(filterText2.toLowerCase()) } = $$props;
  let { groupBy = void 0 } = $$props;
  let { groupFilter = (groups) => groups } = $$props;
  let { isGroupHeaderSelectable = false } = $$props;
  let { getGroupHeaderLabel = (option) => {
    return option[labelIdentifier] || option.id;
  } } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { optionIdentifier = "value" } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { hasError = false } = $$props;
  let { containerStyles = "" } = $$props;
  let { getSelectionLabel = (option) => {
    if (option)
      return option[labelIdentifier];
    else
      return null;
  } } = $$props;
  let { createGroupHeaderItem = (groupValue) => {
    return { value: groupValue, label: groupValue };
  } } = $$props;
  let { createItem = (filterText2) => {
    return { value: filterText2, label: filterText2 };
  } } = $$props;
  const getFilteredItems = () => {
    return filteredItems;
  };
  let { isSearchable = true } = $$props;
  let { inputStyles = "" } = $$props;
  let { isClearable = true } = $$props;
  let { isWaiting = false } = $$props;
  let { listPlacement = "auto" } = $$props;
  let { listOpen = false } = $$props;
  let { isVirtualList = false } = $$props;
  let { loadOptionsInterval = 300 } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { inputAttributes = {} } = $$props;
  let { listAutoWidth = true } = $$props;
  let { itemHeight = 40 } = $$props;
  let { Icon: Icon2 = void 0 } = $$props;
  let { iconProps = {} } = $$props;
  let { showChevron = false } = $$props;
  let { showIndicator = false } = $$props;
  let { containerClasses = "" } = $$props;
  let { indicatorSvg = void 0 } = $$props;
  let { listOffset = 5 } = $$props;
  let { ClearIcon: ClearIcon$1 = ClearIcon } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { List: List$1 = List } = $$props;
  let { Selection: Selection$1 = Selection } = $$props;
  let { MultiSelection: MultiSelection$1 = MultiSelection } = $$props;
  let { VirtualList: VirtualList$1 = VirtualList } = $$props;
  function filterMethod(args) {
    if (args.loadOptions && args.filterText.length > 0)
      return;
    if (!args.items)
      return [];
    if (args.items && args.items.length > 0 && typeof args.items[0] !== "object") {
      args.items = convertStringItemsToObjects(args.items);
    }
    let filterResults = args.items.filter((item) => {
      let matchesFilter = itemFilter(getOptionLabel(item, args.filterText), args.filterText, item);
      if (matchesFilter && args.isMulti && args.value && Array.isArray(args.value)) {
        matchesFilter = !args.value.some((x) => {
          return x[args.optionIdentifier] === item[args.optionIdentifier];
        });
      }
      return matchesFilter;
    });
    if (args.groupBy) {
      filterResults = filterGroupedItems(filterResults);
    }
    if (args.isCreatable) {
      filterResults = addCreatableItem(filterResults, args.filterText);
    }
    return filterResults;
  }
  function addCreatableItem(_items, _filterText) {
    if (_filterText.length === 0)
      return _items;
    const itemToCreate = createItem(_filterText);
    if (_items[0] && _filterText === _items[0][labelIdentifier])
      return _items;
    itemToCreate.isCreator = true;
    return [..._items, itemToCreate];
  }
  let { selectedValue = null } = $$props;
  let activeValue;
  let prev_value;
  let prev_filterText;
  let prev_isFocused;
  let hoverItemIndex;
  const getItems = debounce(async () => {
    isWaiting = true;
    let res = await loadOptions(filterText).catch((err) => {
      console.warn("svelte-select loadOptions error :>> ", err);
      dispatch("error", { type: "loadOptions", details: err });
    });
    if (res && !res.cancelled) {
      if (res) {
        if (res && res.length > 0 && typeof res[0] !== "object") {
          res = convertStringItemsToObjects(res);
        }
        filteredItems = [...res];
        dispatch("loaded", { items: filteredItems });
      } else {
        filteredItems = [];
      }
      if (isCreatable) {
        filteredItems = addCreatableItem(filteredItems, filterText);
      }
      isWaiting = false;
      isFocused = true;
      listOpen = true;
    }
  }, loadOptionsInterval);
  function setValue() {
    if (typeof value === "string") {
      value = { [optionIdentifier]: value, label: value };
    } else if (isMulti && Array.isArray(value) && value.length > 0) {
      value = value.map((item) => typeof item === "string" ? { value: item, label: item } : item);
    }
  }
  let _inputAttributes;
  function assignInputAttributes() {
    _inputAttributes = Object.assign({
      autocapitalize: "none",
      autocomplete: "off",
      autocorrect: "off",
      spellcheck: false,
      tabindex: 0,
      type: "text",
      "aria-autocomplete": "list"
    }, inputAttributes);
    if (id) {
      _inputAttributes.id = id;
    }
    if (!isSearchable) {
      _inputAttributes.readonly = true;
    }
  }
  function filterGroupedItems(_items) {
    const groupValues = [];
    const groups = {};
    _items.forEach((item) => {
      const groupValue = groupBy(item);
      if (!groupValues.includes(groupValue)) {
        groupValues.push(groupValue);
        groups[groupValue] = [];
        if (groupValue) {
          groups[groupValue].push(Object.assign(createGroupHeaderItem(groupValue, item), {
            id: groupValue,
            isGroupHeader: true,
            isSelectable: isGroupHeaderSelectable
          }));
        }
      }
      groups[groupValue].push(Object.assign({ isGroupItem: !!groupValue }, item));
    });
    const sortedGroupedItems = [];
    groupFilter(groupValues).forEach((groupValue) => {
      sortedGroupedItems.push(...groups[groupValue]);
    });
    return sortedGroupedItems;
  }
  function dispatchSelectedItem() {
    if (isMulti) {
      if (JSON.stringify(value) !== JSON.stringify(prev_value)) {
        if (checkValueForDuplicates()) {
          dispatch("select", value);
        }
      }
      return;
    }
    {
      dispatch("select", value);
    }
  }
  function setupFocus() {
    if (isFocused || listOpen) {
      handleFocus();
    } else {
      if (input)
        input.blur();
    }
  }
  function setupMulti() {
    if (value) {
      if (Array.isArray(value)) {
        value = [...value];
      } else {
        value = [value];
      }
    }
  }
  function setupFilterText() {
    if (filterText.length === 0)
      return;
    isFocused = true;
    listOpen = true;
    if (loadOptions) {
      getItems();
    } else {
      listOpen = true;
      if (isMulti) {
        activeValue = void 0;
      }
    }
  }
  function checkValueForDuplicates() {
    let noDuplicates = true;
    if (value) {
      const ids = [];
      const uniqueValues = [];
      value.forEach((val) => {
        if (!ids.includes(val[optionIdentifier])) {
          ids.push(val[optionIdentifier]);
          uniqueValues.push(val);
        } else {
          noDuplicates = false;
        }
      });
      if (!noDuplicates)
        value = uniqueValues;
    }
    return noDuplicates;
  }
  function findItem(selection) {
    let matchTo = selection ? selection[optionIdentifier] : value[optionIdentifier];
    return items.find((item) => item[optionIdentifier] === matchTo);
  }
  function updateValueDisplay(items2) {
    if (!items2 || items2.length === 0 || items2.some((item) => typeof item !== "object"))
      return;
    if (!value || (isMulti ? value.some((selection) => !selection || !selection[optionIdentifier]) : !value[optionIdentifier]))
      return;
    if (Array.isArray(value)) {
      value = value.map((selection) => findItem(selection) || selection);
    } else {
      value = findItem() || value;
    }
  }
  function handleFocus() {
    isFocused = true;
    if (input)
      input.focus();
  }
  function handleClear() {
    value = void 0;
    listOpen = false;
    dispatch("clear", value);
    handleFocus();
  }
  let { ariaValues = (values) => {
    return `Option ${values}, selected.`;
  } } = $$props;
  let { ariaListOpen = (label, count) => {
    return `You are currently focused on option ${label}. There are ${count} results available.`;
  } } = $$props;
  let { ariaFocused = () => {
    return `Select is focused, type to refine list, press down to open the menu.`;
  } } = $$props;
  function handleAriaSelection() {
    let selected = void 0;
    if (isMulti && value.length > 0) {
      selected = value.map((v) => getSelectionLabel(v)).join(", ");
    } else {
      selected = getSelectionLabel(value);
    }
    return ariaValues(selected);
  }
  function handleAriaContent() {
    if (!isFocused || !filteredItems || filteredItems.length === 0)
      return "";
    let _item = filteredItems[hoverItemIndex];
    if (listOpen && _item) {
      let label = getSelectionLabel(_item);
      let count = filteredItems ? filteredItems.length : 0;
      return ariaListOpen(label, count);
    } else {
      return ariaFocused();
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.isCreatable === void 0 && $$bindings.isCreatable && isCreatable !== void 0)
    $$bindings.isCreatable(isCreatable);
  if ($$props.isFocused === void 0 && $$bindings.isFocused && isFocused !== void 0)
    $$bindings.isFocused(isFocused);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderAlwaysShow === void 0 && $$bindings.placeholderAlwaysShow && placeholderAlwaysShow !== void 0)
    $$bindings.placeholderAlwaysShow(placeholderAlwaysShow);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemFilter === void 0 && $$bindings.itemFilter && itemFilter !== void 0)
    $$bindings.itemFilter(itemFilter);
  if ($$props.groupBy === void 0 && $$bindings.groupBy && groupBy !== void 0)
    $$bindings.groupBy(groupBy);
  if ($$props.groupFilter === void 0 && $$bindings.groupFilter && groupFilter !== void 0)
    $$bindings.groupFilter(groupFilter);
  if ($$props.isGroupHeaderSelectable === void 0 && $$bindings.isGroupHeaderSelectable && isGroupHeaderSelectable !== void 0)
    $$bindings.isGroupHeaderSelectable(isGroupHeaderSelectable);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier !== void 0)
    $$bindings.optionIdentifier(optionIdentifier);
  if ($$props.loadOptions === void 0 && $$bindings.loadOptions && loadOptions !== void 0)
    $$bindings.loadOptions(loadOptions);
  if ($$props.hasError === void 0 && $$bindings.hasError && hasError !== void 0)
    $$bindings.hasError(hasError);
  if ($$props.containerStyles === void 0 && $$bindings.containerStyles && containerStyles !== void 0)
    $$bindings.containerStyles(containerStyles);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.createGroupHeaderItem === void 0 && $$bindings.createGroupHeaderItem && createGroupHeaderItem !== void 0)
    $$bindings.createGroupHeaderItem(createGroupHeaderItem);
  if ($$props.createItem === void 0 && $$bindings.createItem && createItem !== void 0)
    $$bindings.createItem(createItem);
  if ($$props.getFilteredItems === void 0 && $$bindings.getFilteredItems && getFilteredItems !== void 0)
    $$bindings.getFilteredItems(getFilteredItems);
  if ($$props.isSearchable === void 0 && $$bindings.isSearchable && isSearchable !== void 0)
    $$bindings.isSearchable(isSearchable);
  if ($$props.inputStyles === void 0 && $$bindings.inputStyles && inputStyles !== void 0)
    $$bindings.inputStyles(inputStyles);
  if ($$props.isClearable === void 0 && $$bindings.isClearable && isClearable !== void 0)
    $$bindings.isClearable(isClearable);
  if ($$props.isWaiting === void 0 && $$bindings.isWaiting && isWaiting !== void 0)
    $$bindings.isWaiting(isWaiting);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listOpen === void 0 && $$bindings.listOpen && listOpen !== void 0)
    $$bindings.listOpen(listOpen);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.loadOptionsInterval === void 0 && $$bindings.loadOptionsInterval && loadOptionsInterval !== void 0)
    $$bindings.loadOptionsInterval(loadOptionsInterval);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.inputAttributes === void 0 && $$bindings.inputAttributes && inputAttributes !== void 0)
    $$bindings.inputAttributes(inputAttributes);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.Icon === void 0 && $$bindings.Icon && Icon2 !== void 0)
    $$bindings.Icon(Icon2);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.showChevron === void 0 && $$bindings.showChevron && showChevron !== void 0)
    $$bindings.showChevron(showChevron);
  if ($$props.showIndicator === void 0 && $$bindings.showIndicator && showIndicator !== void 0)
    $$bindings.showIndicator(showIndicator);
  if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0)
    $$bindings.containerClasses(containerClasses);
  if ($$props.indicatorSvg === void 0 && $$bindings.indicatorSvg && indicatorSvg !== void 0)
    $$bindings.indicatorSvg(indicatorSvg);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  if ($$props.ClearIcon === void 0 && $$bindings.ClearIcon && ClearIcon$1 !== void 0)
    $$bindings.ClearIcon(ClearIcon$1);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.List === void 0 && $$bindings.List && List$1 !== void 0)
    $$bindings.List(List$1);
  if ($$props.Selection === void 0 && $$bindings.Selection && Selection$1 !== void 0)
    $$bindings.Selection(Selection$1);
  if ($$props.MultiSelection === void 0 && $$bindings.MultiSelection && MultiSelection$1 !== void 0)
    $$bindings.MultiSelection(MultiSelection$1);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList$1 !== void 0)
    $$bindings.VirtualList(VirtualList$1);
  if ($$props.selectedValue === void 0 && $$bindings.selectedValue && selectedValue !== void 0)
    $$bindings.selectedValue(selectedValue);
  if ($$props.handleClear === void 0 && $$bindings.handleClear && handleClear !== void 0)
    $$bindings.handleClear(handleClear);
  if ($$props.ariaValues === void 0 && $$bindings.ariaValues && ariaValues !== void 0)
    $$bindings.ariaValues(ariaValues);
  if ($$props.ariaListOpen === void 0 && $$bindings.ariaListOpen && ariaListOpen !== void 0)
    $$bindings.ariaListOpen(ariaListOpen);
  if ($$props.ariaFocused === void 0 && $$bindings.ariaFocused && ariaFocused !== void 0)
    $$bindings.ariaFocused(ariaFocused);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredItems = filterMethod({
      loadOptions,
      filterText,
      items,
      value,
      isMulti,
      optionIdentifier,
      groupBy,
      isCreatable
    });
    {
      {
        if (selectedValue)
          console.warn("selectedValue is no longer used. Please use value instead.");
      }
    }
    {
      updateValueDisplay(items);
    }
    {
      {
        if (value)
          setValue();
      }
    }
    {
      {
        if (inputAttributes || !isSearchable)
          assignInputAttributes();
      }
    }
    {
      {
        if (isMulti) {
          setupMulti();
        }
      }
    }
    {
      {
        if (isMulti && value && value.length > 1) {
          checkValueForDuplicates();
        }
      }
    }
    {
      {
        if (value)
          dispatchSelectedItem();
      }
    }
    {
      {
        if (!value && isMulti && prev_value) {
          dispatch("select", value);
        }
      }
    }
    {
      {
        if (isFocused !== prev_isFocused) {
          setupFocus();
        }
      }
    }
    {
      {
        if (filterText !== prev_filterText) {
          setupFilterText();
        }
      }
    }
    showSelectedItem = value && filterText.length === 0;
    showClearIcon = showSelectedItem && isClearable && !isDisabled && !isWaiting;
    placeholderText = placeholderAlwaysShow && isMulti ? placeholder : value ? "" : placeholder;
    showMultiSelect = isMulti && value && value.length > 0;
    listProps = {
      Item: Item$1,
      filterText,
      optionIdentifier,
      noOptionsMessage,
      hideEmptyState,
      isVirtualList,
      VirtualList: VirtualList$1,
      value,
      isMulti,
      getGroupHeaderLabel,
      items: filteredItems,
      itemHeight,
      getOptionLabel,
      listPlacement,
      parent: container,
      listAutoWidth,
      listOffset
    };
    ariaSelection = value ? handleAriaSelection() : "";
    ariaContext = handleAriaContent();
    $$rendered = `

<div class="${[
      "selectContainer " + escape(containerClasses) + " svelte-17l1npl",
      (hasError ? "hasError" : "") + " " + (isMulti ? "multiSelect" : "") + " " + (isDisabled ? "disabled" : "") + " " + (isFocused ? "focused" : "")
    ].join(" ").trim()}"${add_attribute("style", containerStyles, 0)}${add_attribute("this", container, 0)}><span aria-live="${"polite"}" aria-atomic="${"false"}" aria-relevant="${"additions text"}" class="${"a11yText svelte-17l1npl"}">${isFocused ? `<span id="${"aria-selection"}">${escape(ariaSelection)}</span>
            <span id="${"aria-context"}">${escape(ariaContext)}</span>` : ``}</span>

    ${Icon2 ? `${validate_component(Icon2 || missing_component, "svelte:component").$$render($$result, Object_1.assign(iconProps), {}, {})}` : ``}

    ${showMultiSelect ? `${validate_component(MultiSelection$1 || missing_component, "svelte:component").$$render($$result, {
      value,
      getSelectionLabel,
      activeValue,
      isDisabled,
      multiFullItemClearable
    }, {}, {})}` : ``}

    <input${spread([
      { readonly: !isSearchable || null },
      escape_object(_inputAttributes),
      {
        placeholder: escape_attribute_value(placeholderText)
      },
      {
        style: escape_attribute_value(inputStyles)
      },
      { disabled: isDisabled || null }
    ], { classes: "svelte-17l1npl" })}${add_attribute("this", input, 0)}${add_attribute("value", filterText, 0)}>

    ${!isMulti && showSelectedItem ? `<div class="${"selectedItem svelte-17l1npl"}">${validate_component(Selection$1 || missing_component, "svelte:component").$$render($$result, { item: value, getSelectionLabel }, {}, {})}</div>` : ``}

    ${showClearIcon ? `<div class="${"clearSelect svelte-17l1npl"}" aria-hidden="${"true"}">${validate_component(ClearIcon$1 || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``}

    ${!showClearIcon && (showIndicator || showChevron && !value || !isSearchable && !isDisabled && !isWaiting && (showSelectedItem && !isClearable || !showSelectedItem)) ? `<div class="${"indicator svelte-17l1npl"}" aria-hidden="${"true"}">${indicatorSvg ? `<!-- HTML_TAG_START -->${indicatorSvg}<!-- HTML_TAG_END -->` : `<svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 20 20"}" focusable="${"false"}" aria-hidden="${"true"}" class="${"svelte-17l1npl"}"><path d="${"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747\n          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0\n          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502\n          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0\n          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}"></path></svg>`}</div>` : ``}

    ${isWaiting ? `<div class="${"spinner svelte-17l1npl"}"><svg class="${"spinner_icon svelte-17l1npl"}" viewBox="${"25 25 50 50"}"><circle class="${"spinner_path svelte-17l1npl"}" cx="${"50"}" cy="${"50"}" r="${"20"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"5"}" stroke-miterlimit="${"10"}"></circle></svg></div>` : ``}

    ${listOpen ? `${validate_component(List$1 || missing_component, "svelte:component").$$render($$result, Object_1.assign(listProps, { hoverItemIndex }), {
      hoverItemIndex: ($$value) => {
        hoverItemIndex = $$value;
        $$settled = false;
      }
    }, {})}` : ``}

    ${!isMulti || isMulti && !showMultiSelect ? `<input${add_attribute("name", inputAttributes.name, 0)} type="${"hidden"}"${add_attribute("value", value ? getSelectionLabel(value) : null, 0)} class="${"svelte-17l1npl"}">` : ``}

    ${isMulti && showMultiSelect ? `${each(value, (item) => {
      return `<input${add_attribute("name", inputAttributes.name, 0)} type="${"hidden"}"${add_attribute("value", item ? getSelectionLabel(item) : null, 0)} class="${"svelte-17l1npl"}">`;
    })}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const SelectedServices = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paymentContainerRef = null;
  const services = {};
  if ($$props.services === void 0 && $$bindings.services && services !== void 0)
    $$bindings.services(services);
  {
    console.log(services);
  }
  return `<div class="${"selected_services mx-9"}"><div class="${"p-2 bg-white flex flex-col rounded-md divide-y divide-gray-300"}"><div class="${"text-center pb-2"}"><h2 class="${"font-semibold text-xl"}">\u20B9149</h2>
            <span class="${"text-sm text-gray-600 capitalize"}">estimated payment</span></div>
        <div class="${"text-center pt-2 expanded"}"><button type="${"button"}" class="${"relative w-full group"}" aria-controls="${"payment-section-mobile-0"}"${add_attribute("aria-expanded", "false", 0)} data-show-panel="${"collapsible"}"><span class="${"text-sm text-blue-500 capitalize"}">view payment details </span>
                <span${add_attribute("class", `absolute right-2 top-1 text-gray-400 transition-all duration-700 ${"transform rotate-0"}`, 0)}><svg aria-hidden="${"true"}" width="${"16"}" height="${"16"}" focusable="${"false"}" data-prefix="${"fas"}" data-icon="${"angle-down"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 320 512"}" class="${"svg-inline--fa fa-angle-down fa-w-10 fa-2x"}"><path fill="${"currentColor"}" d="${"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"}" class="${""}"></path></svg></span></button>
            <div${add_attribute("class", `overflow-hidden transition-all max-h-0 duration-700 `, 0)}${add_attribute("style", "", 0)} id="${"payment-section-mobile-0"}"${add_attribute("this", paymentContainerRef, 0)}><div class="${"p-6"}"><p>reCAPTCHA v2 is not going away! We will continue to fully support and improve security and usability for v2.</p>
                    <p>reCAPTCHA v3 is intended for power users, site owners that want more data about their traffic, and for use cases in which it is not appropriate to show a challenge to the user.</p>
                    <p>For example, a registration page might still use reCAPTCHA v2 for a higher-friction challenge, whereas more common actions like sign-in, searches, comments, or voting might use reCAPTCHA v3. To see more details, see the reCAPTCHA v3 developer guide.</p></div></div></div></div>

    <div class="${"p-2 pt-4 flex items-start"}"><span class="${"text-xs text-gray-400 mr-6"}">Included:</span>
        <ul role="${"list"}" class="${"-m-1"}"><li class="${"text-sm"}">Full Inspection</li>
            <li class="${"text-sm"}">Water wash</li>
            <li class="${"text-sm"}">Water wash</li></ul></div>

    <div class="${"p-2 bg-white flex flex-col divide-y divide-gray-300 rounded-md pt-4"}"><div class="${"flex items-center"}"><span class="${"text-sm text-gray-400 capitalize w-40"}">payment method</span>
            ${validate_component(Select, "Select").$$render($$result, { items: ["Cash"], showChevron: true }, {}, {})}
            </div>
        <div class="${"flex items-center pt-3"}"><span class="${"text-sm text-gray-400 uppercase w-32"}">coupon</span>
            <input type="${"text"}" placeholder="${"Enter Coupon"}" class="${"w-full focus:outline-none pl-6"}"></div></div>
    <div class="${"pt-3"}"><button type="${"button"}" class="${"block bg-red-600 text-white font-semibold text-lg rounded-3xl w-full py-2"}" aria-label="${"Continue to payment"}">Continue</button></div></div>`;
});
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = 32 } = $$props;
  let { height = 32 } = $$props;
  let { show = false } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  return `${show ? `
<div class="${"fixed top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden loader-overlay"}"><div class="${"loader-bar"}"><div class="${"absolute top-0 h-1 block w-full overflow-hidden bg-gray-300"}"><div class="${"bg-yellow-300 indeterminate"}"></div></div></div></div>` : ``}`;
});
const navStyle = "font-size:0,line-height:0";
const Book = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $appStore, $$unsubscribe_appStore;
  let $$unsubscribe_page;
  $$unsubscribe_appStore = subscribe(appStore, (value) => $appStore = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let loading = null;
  let bookState = {
    mode: "",
    day: "",
    time: "",
    showBackdrop: false,
    location: "",
    modalProps: {}
  };
  let locationProp = {
    detectAutoLocation: true,
    geolocation: { label: "Find nearby workshop" },
    time: false,
    backdrop: null,
    loading: false,
    coords: {}
  };
  let availServicesProp = { selected: false };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    bookState = {
      ...bookState,
      modalProps: {
        classes: bookState.showBackdrop ? "bottom-0" : "-bottom-64"
      }
    };
    {
      {
        if ($appStore.model) {
          Object.keys($appStore.model[0].services);
        }
        loading = $appStore.loading;
      }
    }
    $$rendered = `${validate_component(ServiceLayout, "ServiceLayout").$$render($$result, {
      showLogo: true,
      backgroundImage: FrontView
    }, {}, {
      default: () => {
        return `<div class="${"block h-full w-full absolute top-0 left-0 pt-12 overflow-scroll"}"><div class="${"book-nav h-10 text-center"}" role="${"navigation"}"${add_attribute("style", `font-size:0`, 0)}><div class="${"inline-block align-middle w-4/12"}"${add_attribute("style", navStyle, 0)}><div class="${"lg:relative py-2"}"><a href="${"#/service"}" class="${"text-black px-4 text-base font-bold inline-block h-6 relative bg-yellow-400 rounded-xl"}">Service
                    </a></div></div>
            </div>
        <h5 class="${"text-center mt-2.5 text-sm font-semibold"}">Please select your preferences</h5>
        <div class="${"mb-5 mt-3 mx-20"}"><div class="${"grid grid-cols-6 gap-3"}"><div class="${"col-span-6"}"><div class="${"relative bg-gray-300 border border-gray-300 rounded-3xl"}"><div class="${"relative h-10 leading-5"}"><label for="${"mode"}" class="${"absolute w-16 pl-3 text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap leading-10"}">Mode</label>
                            <div class="${"text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute left-20 right-2 bg-no-repeat bg-right"}"${add_attribute("style", `background-image:url(${DownArrow}); background-size:28px 8px;`, 0)}><select id="${"mode"}" name="${"mode"}" class="${"border-0 outline-none pl-0 text-left relative -top-px left-auto bg-transparent h-full w-full appearance-none text-gray-500 text-sm"}" data-ops="${"mode"}"><option selected value="${""}">Select Mode</option><option value="${"workshop"}">Service at Workshop</option><option value="${"home"}">Service at Home</option></select></div></div></div></div>

                ${!_.isEmpty(bookState.mode) ? `<div class="${"col-span-6"}"><div class="${"relative bg-gray-300 border border-gray-300 rounded-3xl"}"><div class="${"relative h-10 leading-5"}"><label for="${"mode"}" class="${"absolute w-16 pl-3 text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap leading-10"}">Location</label>
                            
                            <div class="${"text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute left-20 right-2 bg-no-repeat bg-right"}"${add_attribute("style", `background-image:url(${DownArrow}); background-size:28px 8px;`, 0)}><select id="${"location"}" name="${"location"}" class="${"border-0 outline-none pl-0 text-left relative -top-px left-auto bg-transparent h-full w-full appearance-none text-gray-500 text-sm"}" data-ops="${"location"}"><option selected value="${""}">Select Location</option><option value="${"delhi"}">Delhi</option><option value="${"bangalore"}">Bangalore</option><option value="${"mumbai"}">Mumbai</option></select></div></div></div></div>` : ``}

                ${!_.isEmpty(bookState.location) ? `<div class="${"col-span-6"}"><div class="${"relative bg-gray-300 border border-gray-300 rounded-3xl"}"><div class="${"relative h-10 leading-5"}"><label for="${"mode"}" class="${"absolute w-16 pl-3 text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap leading-10"}">When</label>
                            <div class="${"text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute -top-px left-20 right-2 bg-no-repeat bg-right cursor-pointer h-full"}"><div class="${"h-full w-1/2 inline-block top-0 leading-10 bg-no-repeat bg-right"}"${add_attribute("style", `background-image:url(${DownArrow}); background-size:28px 8px;`, 0)}><select id="${"day"}" name="${"day"}" class="${"border-0 outline-none pl-0 text-left relative left-auto bg-transparent h-full w-full appearance-none text-gray-500 text-sm"}" data-ops="${"day"}"><option value="${""}" selected>Select</option>${function(__value) {
          if (is_promise(__value)) {
            __value.then(null, noop);
            return ``;
          }
          return function(days) {
            return `
                                            ${each(days, ({ value, text }) => {
              return `<option${add_attribute("value", value, 0)}>${escape(text)}</option>`;
            })}
                                        `;
          }(__value);
        }(util.days())}</select>
                                </div><div class="${"h-full w-1/2 inline-block top-0 leading-10 bg-no-repeat bg-right"}"${add_attribute("style", `background-image:url(${DownArrow}); background-size:28px 8px;`, 0)}><select id="${"time"}" name="${"time"}" class="${"border-0 outline-none pl-0 text-left relative left-auto bg-transparent h-full w-full appearance-none text-gray-500 text-sm"}" data-ops="${"time"}"><option value="${""}" selected>Select</option>${function(__value) {
          if (is_promise(__value)) {
            __value.then(null, noop);
            return ``;
          }
          return function(time) {
            return `
                                            ${each(time, ({ value, text }) => {
              return `<option${add_attribute("value", value, 0)}>${escape(text)}</option>`;
            })}
                                        `;
          }(__value);
        }(util.serviceTime("08:00", "17:00"))}</select></div></div></div></div></div>` : ``}</div></div>

        ${!_.isEmpty(bookState.location) && !availServicesProp.selected ? `${validate_component(AvailServices, "AvailServices").$$render($$result, {
          nearByServices: locationProp.workshop,
          mode: $appStore.model[0].services[bookState.mode],
          model: $appStore.model[0].model,
          location: bookState.location,
          selectedService: availServicesProp
        }, {
          selectedService: ($$value) => {
            availServicesProp = $$value;
            $$settled = false;
          }
        }, {})}` : ``}

        ${availServicesProp.selected ? `${validate_component(SelectedServices, "SelectedServices").$$render($$result, {}, {}, {})}` : ``}</div>
    ${validate_component(Loader, "Loader").$$render($$result, { show: loading, width: 52, height: 52 }, {}, {})}
    `;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_appStore();
  $$unsubscribe_page();
  return $$rendered;
});
export { Book as default };
