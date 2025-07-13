import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sample page" }, // page title that appears in the tab
    { name: "description", content: "This is a sample page!" }, // metadata's description
  ];
}

export default function Sample() {
  return <>
    <div>hello world</div>
    <Welcome />
  </>;
}
