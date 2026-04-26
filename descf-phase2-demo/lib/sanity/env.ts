export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-04-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const isSanityConfigured = Boolean(
  projectId &&
    dataset &&
    projectId !== "replaceprojectid" &&
    !projectId.includes("your") &&
    !projectId.includes("replace")
);
