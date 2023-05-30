import { c as create_ssr_component, a as subscribe, e as each, d as escape } from "./index-a25d457a.js";
import { n as notifications } from "./Toast.svelte_svelte_type_style_lang-172eb2d6.js";
const css = {
  code: ".notifications.svelte-1hb1mh9{position:fixed;top:100px;left:0;right:0;margin:0 auto;padding:0;z-index:9999;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;pointer-events:none}.toast.svelte-1hb1mh9{flex:0 0 auto;margin-bottom:10px}",
  map: null
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $notifications, $$unsubscribe_notifications;
  $$unsubscribe_notifications = subscribe(notifications, (value) => $notifications = value);
  let { themes = {
    danger: "red",
    success: "green",
    warning: "orange",
    info: "skyblue",
    default: "indigo"
  } } = $$props;
  if ($$props.themes === void 0 && $$bindings.themes && themes !== void 0)
    $$bindings.themes(themes);
  $$result.css.add(css);
  $$unsubscribe_notifications();
  return `<div class="${"notifications svelte-1hb1mh9"}">${each($notifications, (notification) => {
    return `<div class="${"toast svelte-1hb1mh9"}"><div class="${"text-center py-4 lg:px-4"}"><div class="${"p-2 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"}" style="${"background: " + escape(themes[notification.type]) + ";"}" role="${"alert"}"><span class="${"flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"}">${escape(notification.type)}</span>
					<span class="${"font-semibold mr-2 text-xl text-white text-left flex-auto"}">${escape(notification.message)}</span>
				</div></div>
		</div>`;
  })}
</div>`;
});
export { Toast as T };
