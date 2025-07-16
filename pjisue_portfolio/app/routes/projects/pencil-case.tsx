import { ProjectName } from "../../project-info";
import type { Route } from "./+types/pencil-case";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: ProjectName.PencilCase }, // metadata's title
    { name: "description", content: `${ProjectName.PencilCase} project page` }, // metadata's description
  ];
}

export default function PencilCase() {
  return <main className="flex items-center justify-center pt-16 pb-4">
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <header className="flex flex-col items-center gap-9">
        {ProjectName.PencilCase} Project Page
      </header>
    </div>
  </main>;
}
