// src/utils/assetPrefix.ts
const isExportMode = process.env.NEXT_PUBLIC_IS_EXPORT === "true";
const isProduction = process.env.NODE_ENV === "production";

export const assetPrefix =
  isExportMode && isProduction
    ? process.env.NEXT_PUBLIC_ASSET_PREFIX || ""
    : "";
