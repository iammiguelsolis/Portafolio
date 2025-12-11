import Hero from "./components/templates/Hero";
import Experience, { ExperienceItem } from "./components/templates/Experience";
import TechStack from "./components/templates/TechStack";
import { client } from "@/sanity/lib/client";

async function getExperiences(): Promise<ExperienceItem[]> {
  const query = `*[_type == "experience"] | order(order asc) {
    _id,
    jobTitle,
    company,
    startDate,
    endDate,
    description,
    link
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const experiences = await getExperiences();

  return (
    <>
      <Hero />
      <Experience experiences={experiences} />
      <TechStack />
    </>
  );
}