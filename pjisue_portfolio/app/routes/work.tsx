import type { Route } from "./+types/work";
import { WorkPage } from "../components/work-page";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Work" },
    { name: "description", content: "Jisue Park's work" },
  ];
}

export default function Work() {
  return <WorkPage />;
}
