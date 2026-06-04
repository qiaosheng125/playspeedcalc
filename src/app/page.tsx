import type { Metadata } from "next";
import { HomeCalculator } from "./HomeCalculator";

export const metadata: Metadata = {
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return <HomeCalculator />;
}
