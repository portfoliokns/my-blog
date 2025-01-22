import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-technology",
  apiKey: process.env.API_KEY,
});
