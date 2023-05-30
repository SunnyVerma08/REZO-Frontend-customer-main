export const manifest = {
	appDir: "_app",
	assets: new Set(["css/rezo.css","img/Rezo T1.png","img/front-view-male.jpg","img/happy-motor-male.jpg","img/header-image.png","img/icons/01.png","img/icons/02.png","img/icons/03.png","img/icons/04.png","img/icons/05.png","img/icons/06.png","img/icons/07.png","img/icons/af.svg","img/icons/au.svg","img/icons/bd.svg","img/icons/ca.svg","img/icons/down-arrow.png","img/icons/icons8-gps-24.png","img/icons/in.svg","img/icons/mark.svg","img/icons/my.svg","img/icons/nz.svg","img/icons/ola-best-driver.svg","img/icons/racing-motorbike.svg","img/icons/rupee-48.png","img/icons/search.svg","img/icons/send_out_succour.svg","img/icons/support.svg","img/rezo-black-87x32.png","img/rezo-logo-416x153.png","img/rezo-logo-87x32.png"]),
	_: {
		mime: {".css":"text/css",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
		entry: {"file":"start-95deac82.js","js":["start-95deac82.js","chunks/vendor-0a4ab0d8.js","chunks/preload-helper-ec9aa979.js","chunks/singletons-4a680913.js"],"css":["assets/vendor-a7d6a93c.css"]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/5.js'),
			() => import('./server/nodes/6.js'),
			() => import('./server/nodes/7.js'),
			() => import('./server/nodes/8.js'),
			() => import('./server/nodes/9.js'),
			() => import('./server/nodes/10.js'),
			() => import('./server/nodes/11.js'),
			() => import('./server/nodes/12.js'),
			() => import('./server/nodes/13.js'),
			() => import('./server/nodes/14.js'),
			() => import('./server/nodes/15.js'),
			() => import('./server/nodes/16.js'),
			() => import('./server/nodes/17.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/confirmation\/?$/,
				params: null,
				path: "/confirmation",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/loginService\/?$/,
				params: null,
				path: "/loginService",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/corporate\/?$/,
				params: null,
				path: "/corporate",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/bookings\/?$/,
				params: null,
				path: "/bookings",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/features\/?$/,
				params: null,
				path: "/features",
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/register\/?$/,
				params: null,
				path: "/register",
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/services\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/settings\/?$/,
				params: null,
				path: "/settings",
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/contact\/?$/,
				params: null,
				path: "/contact",
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/profile\/?$/,
				params: null,
				path: "/profile",
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/support\/?$/,
				params: null,
				path: "/support",
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/login\/?$/,
				params: null,
				path: "/login",
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/book\/?$/,
				params: null,
				path: "/book",
				a: [0,16],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/home\/?$/,
				params: null,
				path: "/home",
				a: [0,17],
				b: [1]
			}
		]
	}
};
