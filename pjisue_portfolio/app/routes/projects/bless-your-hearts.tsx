import { ProjectName } from "../../project-info";
import type { Route } from "./+types/bless-your-hearts";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: ProjectName.BlessYourHearts }, // metadata's title
    { name: "description", content: `${ProjectName.BlessYourHearts} project page` }, // metadata's description
  ];
}

export default function BlessYourHearts() {
  return <main className="flex items-center justify-center pt-16 pb-4">
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <header className="flex flex-col items-center gap-9">
        {ProjectName.BlessYourHearts} Project Page
      </header>
    </div>
  </main>;
}
