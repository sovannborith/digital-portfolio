import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2021-10-21",
  useCdn: true,
  // useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => {
  return createImageUrlBuilder(config).image(source);
};

export const basedUrl = () => {
  return process.env.NODE_ENV === "production"
    ? "https://my-digital-portfolio.vercel.app"
    : "http://localhost:3000";
};
