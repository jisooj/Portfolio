import type { Route } from "./+types/home";
import { HomePage } from "../components/home-page";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Jisue's home page" },
  ];
}

export default function Home() {
  return <HomePage />;
}
