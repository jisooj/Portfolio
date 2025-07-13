import type { Route } from "./+types/Portfolio";
import { PortfolioPage } from "../components/portfolio-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Jisue Park's portfolio" },
  ];
}

export default function Portfolio() {
  return <PortfolioPage />;
}
