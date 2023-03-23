import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "63ej2ykl",
  dataset: "production",
  apiVersion: "2023-01-24",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
