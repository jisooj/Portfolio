import { ProjectName } from "../../project-info";
import type { Route } from "./+types/yolk-tote";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: ProjectName.YolkTote }, // metadata's title
    { name: "description", content: `${ProjectName.YolkTote} project page` }, // metadata's description
  ];
}

export default function YolkTote() {
  return <main className="flex items-center justify-center pt-16 pb-4">
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <header className="flex flex-col items-center gap-9">
        {ProjectName.YolkTote} Project Page
      </header>
    </div>
  </main>;
}
