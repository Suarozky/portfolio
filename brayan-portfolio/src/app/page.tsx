import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Technology from "@/components/Technology";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      <About />
      <Experience />
      <Technology />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: "Brayan Suarez",
    description: "Portfolio",
  };
}
