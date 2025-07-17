import { ProjectInfo, ProjectName } from "../../project-info";
import type { Route } from "./+types/dot-socks";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: ProjectName.DotSocks }, // metadata's title
    { name: "description", content: `${ProjectName.DotSocks} project page` }, // metadata's description
  ];
}

export default function DotSocks() {
  return <main className="flex items-center justify-center pt-16 pb-4">
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <header className="flex flex-col items-center gap-9">
        <div>
          {ProjectName.DotSocks} Project Page
        </div>
        <div>
          {ProjectInfo[ProjectName.DotSocks].description}
        </div>
      </header>
    </div>
  </main>;
}
