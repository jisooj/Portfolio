import {
    type RouteConfig,
    index,
    route
} from "@react-router/dev/routes";

export default [
    index("./routes/Portfolio.tsx"),
    route("info", "./routes/info.tsx"),
] satisfies RouteConfig;
