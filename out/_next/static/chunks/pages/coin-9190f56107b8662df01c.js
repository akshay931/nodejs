_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("zoAU"),o=t("7KCV");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),u=t("nOHt"),i=t("vNVm"),s={};function l(e,n,t,r){if((0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,b=e.shallow,y=e.scroll,w=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var m=c.Children.only(h),g=m&&"object"===typeof m&&m.ref,_=(0,i.useIntersection)({rootMargin:"200px"}),j=r(_,2),E=j[0],O=j[1],L=c.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);(0,c.useEffect)((function(){var e=O&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof w?w:t&&t.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,O,w,n,t]);var M={ref:L,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:i}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,v,b,y,w)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};return(e.passHref||"a"===m.type&&!("href"in m.props))&&(M.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof w?w:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(m,M)};n.default=f},suFw:function(e,n,t){"use strict";t.r(n);var r=t("nKUr");t("YFqc");n.default=function(e){return Object(r.jsx)("ul",{children:e.name?Object(r.jsxs)("div",{children:[Object(r.jsxs)("h3",{children:[" pair ",e.name.pair," "]}),Object(r.jsxs)("h3",{children:[" buy ",e.name.buy," "]}),Object(r.jsxs)("h3",{children:[" sell ",e.name.sell," "]}),Object(r.jsxs)("h3",{children:[" 24hoursHigh ",e.name["24hoursHigh"]," "]}),Object(r.jsxs)("h3",{children:[" 24hoursLow ",e.name["24hoursLow"]," "]})]}):"data not available"})}},vNVm:function(e,n,t){"use strict";var r=t("zoAU"),o=t("AroE");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,o=(0,c.useRef)(),s=(0,c.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){u||f||(0,a.default)((function(){return d(!0)}))}),[f]),[p,f]};var c=t("q1tI"),a=o(t("0G5g")),u="undefined"!==typeof IntersectionObserver;var i=new Map},yVdB:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coin",function(){return t("suFw")}])}},[["yVdB",0,1,2]]]);