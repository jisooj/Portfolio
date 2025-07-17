import type { Route } from "./+types/info";
import { AboutPage } from "../components/about-page";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About page" }, // page title that appears in the tab
    { name: "description", content: "About page" }, // metadata's description
  ];
}

export default function About() {
  return <AboutPage />;
}
