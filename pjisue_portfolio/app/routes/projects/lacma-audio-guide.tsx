import { ProjectInfo, ProjectName } from "../../project-info";
import type { Route } from "./+types/lacma-audio-guide";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: ProjectName.LacmaAudioGuide }, // metadata's title
    { name: "description", content: `${ProjectName.LacmaAudioGuide} project page` }, // metadata's description
  ];
}

export default function LacmaAudioGuide() {
  return <main className="flex items-center justify-center pt-16 pb-4">
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <header className="flex flex-col items-center gap-9">
        <div>
          {ProjectName.LacmaAudioGuide} Project Page
        </div>
        <div>
          {ProjectInfo[ProjectName.LacmaAudioGuide].description}
        </div>
      </header>
    </div>
  </main>;
}
