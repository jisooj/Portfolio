import { ProjectName } from "../../project-info";
import type { Route } from "./+types/sunrise";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: ProjectName.Sunrise }, // metadata's title
    { name: "description", content: `${ProjectName.Sunrise} project page` }, // metadata's description
  ];
}

export default function Sunrise() {
  return <main className="flex items-center justify-center pt-16 pb-4">
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <header className="flex flex-col items-center gap-9">
        {ProjectName.Sunrise} Project Page
      </header>
    </div>
  </main>;
}
