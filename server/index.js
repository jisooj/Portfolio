import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, NavLink, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const PageInfo = [
  {
    path: "work",
    name: "Work"
  },
  {
    path: "about",
    name: "About"
  }
];
function NavBar() {
  return /* @__PURE__ */ jsx("nav", { className: "lg:float-left lg:fixed z-100 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "lg:block flex items-center justify-between flex-wrap", children: [
    /* @__PURE__ */ jsx("a", { href: "/", className: "block", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-semibold", children: "Logo" }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:mt-60", children: /* @__PURE__ */ jsx("ul", { className: "flex lg:flex-col lg:gap-8 flex-row p-4 lg:p-0 mt-4 lg:space-x-8", children: PageInfo.map((info) => /* @__PURE__ */ jsx("li", { className: "mr-6", children: /* @__PURE__ */ jsx(
      NavLink,
      {
        to: `/${info.path}`,
        className: ({ isActive, isPending }) => {
          return isActive ? "bg-red-100" : "text-gray-700";
        },
        children: info.name
      }
    ) }, `nav_${info.name}`)) }) })
  ] }) });
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      className: "p-10",
      children: [/* @__PURE__ */ jsx(NavBar, {}), children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function HomePage() {
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center pt-16 pb-4", children: /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col items-center gap-16 min-h-0", children: /* @__PURE__ */ jsx("header", { className: "flex flex-col items-center gap-9", children: "Home page" }) }) });
}
function meta$6({}) {
  return [{
    title: "Home"
  }, {
    name: "description",
    content: "Jisue's home page"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(HomePage, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
function WorkPage() {
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center pt-16 pb-4", children: /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col items-center gap-16 min-h-0", children: /* @__PURE__ */ jsx("header", { className: "flex flex-col items-center gap-9", children: "Work page" }) }) });
}
function meta$5({}) {
  return [{
    title: "Work"
  }, {
    name: "description",
    content: "Jisue Park's work"
  }];
}
const work = UNSAFE_withComponentProps(function Work() {
  return /* @__PURE__ */ jsx(WorkPage, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: work,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
function AboutPage() {
  return /* @__PURE__ */ jsx("main", { className: "flex flex-row", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center align-center gap-10 mx-auto lg:my-30 lg:px-[15%] px-[10%]", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h1", { className: "font-bold text-5xl mb-4", children: "Jisue Park" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between italic", children: [
        /* @__PURE__ */ jsx("p", { children: "Creative Designer" }),
        /* @__PURE__ */ jsx("p", { children: "pjisue@gmail.com" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center align-center gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-38", children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold lg:min-w-18 lg:max-w-18 whitespace-nowrap", children: "About me" }),
        /* @__PURE__ */ jsx("p", { children: "Designer working at the intersection of UX, industrial design, and systems thinking — with a interest in accessibility and meaningful interfaces. I lead hybrid teams and craft experiences that bridge physical products and digital experiences." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-38", children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold lg:min-w-18 lg:max-w-18", children: "Experience" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("p", { className: "italic", children: "BrandsWalk" }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "italic", children: "Creative Design Manager" }),
              " | 2023-2025"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc", children: [
              /* @__PURE__ */ jsx("li", { children: "Directed cross-functional execution across product, web, and branding for sub-brands, boosting online conversion by 40% through site UX and visual overhauls." }),
              /* @__PURE__ */ jsx("li", { children: "Built scalable design systems and redefined brand tone, unifying marketing and product experience across platforms." }),
              /* @__PURE__ */ jsx("li", { children: "Owned product launches end-to-end - from 3D renders to Shopify integration." }),
              /* @__PURE__ */ jsx("li", { children: "Lead and create AI-automated workflows for marketing and content; implemented solutions to reduce workload and streamline daily tasks." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "italic", children: "BrandsWalk" }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "italic", children: "Creative Design Specialist" }),
              " | 2017.08-2023.04"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc", children: [
              /* @__PURE__ */ jsx("li", { children: "Created campaign assets across digital and in-store platforms for three consumer brands, driving seasonal engagement and visual cohesion." }),
              /* @__PURE__ */ jsx("li", { children: "Developed visuals for e-commerce website and look books" }),
              /* @__PURE__ */ jsx("li", { children: "Contributed to a brand elevation initiative that attracted partnerships with premium, design-centric brands by improving site UX, product styling, and visual communication." }),
              /* @__PURE__ */ jsx("li", { children: "Led in-store seasonal brand installations and visual merchandising for 3 years, aligning physical experience with brand narrative." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-38", children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold lg:min-w-18 lg:max-w-18", children: "Education" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "italic", children: "Pratt Institute" }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "italic", children: "Bachelor of Industrial Design" }),
            " | 2013-2017"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("p", { children: "NASA Mars X-HAB5" }),
              /* @__PURE__ */ jsx("p", { children: "5 students in Industrial Design and Architecture designed a Mars Surface Habitat for the first manned mission to Mars with NASA. I contributed the most in the building crew system, Mars EV design, modeling, rendering, and presentation at NASA." })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("p", { children: "Wearable Technology in ISS" }),
              /* @__PURE__ */ jsx("p", { children: "Solving hearing discomforts addressed by astronauts in ISS with a partner. Contributed in UX research, design, making prototypes. The prototype was delivered to the researchers at NASA." })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("p", { children: "Prosthetic Design" }),
              /* @__PURE__ */ jsx("p", { children: "TODO: project description" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center align-center gap-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-38", children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold lg:min-w-18 lg:max-w-18", children: "Skills" }),
        /* @__PURE__ */ jsx("p", { children: "InDesign" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center align-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-38", children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold lg:min-w-18 lg:max-w-18", children: "Language" }),
        /* @__PURE__ */ jsx("p", { children: "English (Fluent)" })
      ] }) })
    ] })
  ] }) });
}
function meta$4({}) {
  return [
    {
      title: "About page"
    },
    // page title that appears in the tab
    {
      name: "description",
      content: "About page"
    }
    // metadata's description
  ];
}
const about = UNSAFE_withComponentProps(function About() {
  return /* @__PURE__ */ jsx(AboutPage, {});
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
var ProjectName = /* @__PURE__ */ ((ProjectName2) => {
  ProjectName2["TworiiFurniture"] = "Tworii Furniture";
  ProjectName2["BrandsWalkBranding"] = "BrandsWalk Branding";
  ProjectName2["DotSocks"] = "Dot Socks";
  ProjectName2["LacmaAudioGuide"] = "LACMA Audio Guide";
  return ProjectName2;
})(ProjectName || {});
const ProjectInfo = {
  [
    "Tworii Furniture"
    /* TworiiFurniture */
  ]: {
    path: "tworii-furniture",
    description: "Brief description of Tworii Furniture project.",
    image: ""
  },
  [
    "BrandsWalk Branding"
    /* BrandsWalkBranding */
  ]: {
    path: "brandswalk-branding",
    description: "Brief description of BrandsWalk Branding project.",
    image: ""
  },
  [
    "Dot Socks"
    /* DotSocks */
  ]: {
    path: "dot-socks",
    description: "Brief description of Dot Socks project.",
    image: ""
  },
  [
    "LACMA Audio Guide"
    /* LacmaAudioGuide */
  ]: {
    path: "lacma-audio-guide",
    description: "Brief description of LACMA Audio Guide project.",
    image: ""
  }
};
function meta$3({}) {
  return [
    {
      title: ProjectName.TworiiFurniture
    },
    // metadata's title
    {
      name: "description",
      content: `${ProjectName.TworiiFurniture} project page`
    }
    // metadata's description
  ];
}
const tworiiFurniture = UNSAFE_withComponentProps(function TworiiFurniture() {
  return /* @__PURE__ */ jsx("main", {
    className: "flex items-center justify-center pt-16 pb-4",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex-1 flex flex-col items-center gap-16 min-h-0",
      children: /* @__PURE__ */ jsxs("header", {
        className: "flex flex-col items-center gap-9",
        children: [/* @__PURE__ */ jsxs("div", {
          children: [ProjectName.TworiiFurniture, " Project Page"]
        }), /* @__PURE__ */ jsx("div", {
          children: ProjectInfo[ProjectName.TworiiFurniture].description
        })]
      })
    })
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tworiiFurniture,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function meta$2({}) {
  return [
    {
      title: ProjectName.BrandsWalkBranding
    },
    // metadata's title
    {
      name: "description",
      content: `${ProjectName.BrandsWalkBranding} project page`
    }
    // metadata's description
  ];
}
const brandswalkBranding = UNSAFE_withComponentProps(function BrandsWalkBranding() {
  return /* @__PURE__ */ jsx("main", {
    className: "flex items-center justify-center pt-16 pb-4",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex-1 flex flex-col items-center gap-16 min-h-0",
      children: /* @__PURE__ */ jsxs("header", {
        className: "flex flex-col items-center gap-9",
        children: [/* @__PURE__ */ jsxs("div", {
          children: [ProjectName.BrandsWalkBranding, " Project Page"]
        }), /* @__PURE__ */ jsx("div", {
          children: ProjectInfo[ProjectName.BrandsWalkBranding].description
        })]
      })
    })
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: brandswalkBranding,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function meta$1({}) {
  return [
    {
      title: ProjectName.DotSocks
    },
    // metadata's title
    {
      name: "description",
      content: `${ProjectName.DotSocks} project page`
    }
    // metadata's description
  ];
}
const dotSocks = UNSAFE_withComponentProps(function DotSocks() {
  return /* @__PURE__ */ jsx("main", {
    className: "flex items-center justify-center pt-16 pb-4",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex-1 flex flex-col items-center gap-16 min-h-0",
      children: /* @__PURE__ */ jsxs("header", {
        className: "flex flex-col items-center gap-9",
        children: [/* @__PURE__ */ jsxs("div", {
          children: [ProjectName.DotSocks, " Project Page"]
        }), /* @__PURE__ */ jsx("div", {
          children: ProjectInfo[ProjectName.DotSocks].description
        })]
      })
    })
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dotSocks,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [
    {
      title: ProjectName.LacmaAudioGuide
    },
    // metadata's title
    {
      name: "description",
      content: `${ProjectName.LacmaAudioGuide} project page`
    }
    // metadata's description
  ];
}
const lacmaAudioGuide = UNSAFE_withComponentProps(function LacmaAudioGuide() {
  return /* @__PURE__ */ jsx("main", {
    className: "flex items-center justify-center pt-16 pb-4",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex-1 flex flex-col items-center gap-16 min-h-0",
      children: /* @__PURE__ */ jsxs("header", {
        className: "flex flex-col items-center gap-9",
        children: [/* @__PURE__ */ jsxs("div", {
          children: [ProjectName.LacmaAudioGuide, " Project Page"]
        }), /* @__PURE__ */ jsx("div", {
          children: ProjectInfo[ProjectName.LacmaAudioGuide].description
        })]
      })
    })
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lacmaAudioGuide,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/pjisue_portfolioassets/entry.client-BdP5C0qv.js", "imports": ["/pjisue_portfolioassets/chunk-QMGIS6GS-Bv6VNRS7.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/pjisue_portfolioassets/root-BHph4GsF.js", "imports": ["/pjisue_portfolioassets/chunk-QMGIS6GS-Bv6VNRS7.js"], "css": ["/pjisue_portfolioassets/root-D3yvArrw.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pjisue_portfolioassets/home-BTlXB33n.js", "imports": ["/pjisue_portfolioassets/chunk-QMGIS6GS-Bv6VNRS7.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/work": { "id": "routes/work", "parentId": "root", "path": "work", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pjisue_portfolioassets/work-CLugm99L.js", "imports": ["/pjisue_portfolioassets/chunk-QMGIS6GS-Bv6VNRS7.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pjisue_portfolioassets/about-C2_Ut-85.js", "imports": ["/pjisue_portfolioassets/chunk-QMGIS6GS-Bv6VNRS7.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/projects/tworii-furniture": { "id": "routes/projects/tworii-furniture", "parentId": "root", "path": "projects/tworii-furniture", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pjisue_portfolioassets/tworii-furniture-D3hK0NBW.js", "imports": ["/pjisue_portfolioassets/chunk-QMGIS6GS-Bv6VNRS7.js", "/pjisue_portfolioassets/project-info-CYcum6pj.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/projects/brandswalk-branding": { "id": "routes/projects/brandswalk-branding", "parentId": "root", "path": "projects/brandswalk-branding", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pjisue_portfolioassets/brandswalk-branding-B-ofaJdk.js", "imports": ["/pjisue_portfolioassets/chunk-QMGIS6GS-Bv6VNRS7.js", "/pjisue_portfolioassets/project-info-CYcum6pj.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/projects/dot-socks": { "id": "routes/projects/dot-socks", "parentId": "root", "path": "projects/dot-socks", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pjisue_portfolioassets/dot-socks-cAhk39q5.js", "imports": ["/pjisue_portfolioassets/chunk-QMGIS6GS-Bv6VNRS7.js", "/pjisue_portfolioassets/project-info-CYcum6pj.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/projects/lacma-audio-guide": { "id": "routes/projects/lacma-audio-guide", "parentId": "root", "path": "projects/lacma-audio-guide", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/pjisue_portfolioassets/lacma-audio-guide-DrXKT1h2.js", "imports": ["/pjisue_portfolioassets/chunk-QMGIS6GS-Bv6VNRS7.js", "/pjisue_portfolioassets/project-info-CYcum6pj.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/pjisue_portfolioassets/manifest-c8216c5f.js", "version": "c8216c5f", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/pjisue_portfolio";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/work": {
    id: "routes/work",
    parentId: "root",
    path: "work",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/projects/tworii-furniture": {
    id: "routes/projects/tworii-furniture",
    parentId: "root",
    path: "projects/tworii-furniture",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/projects/brandswalk-branding": {
    id: "routes/projects/brandswalk-branding",
    parentId: "root",
    path: "projects/brandswalk-branding",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/projects/dot-socks": {
    id: "routes/projects/dot-socks",
    parentId: "root",
    path: "projects/dot-socks",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/projects/lacma-audio-guide": {
    id: "routes/projects/lacma-audio-guide",
    parentId: "root",
    path: "projects/lacma-audio-guide",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
