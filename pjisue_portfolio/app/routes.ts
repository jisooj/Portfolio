import {
    type RouteConfig,
    index,
    route,
    prefix
} from "@react-router/dev/routes";
import { Projects } from "./project-info";

export default [
    index("./routes/home.tsx"),
    route("work", "./routes/work.tsx"),
    route("about", "./routes/about.tsx"),
    ...prefix("projects", Projects.map(project =>
        route(project.path, `./routes/projects/${project.path}.tsx`)
    )),
] satisfies RouteConfig;
