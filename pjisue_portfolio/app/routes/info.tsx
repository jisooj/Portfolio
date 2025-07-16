import type { Route } from "./+types/info";
import { InfoPage } from "../components/info-page";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Info page" }, // page title that appears in the tab
    { name: "description", content: "Information page" }, // metadata's description
  ];
}

export default function Info() {
  return <InfoPage />;
}
