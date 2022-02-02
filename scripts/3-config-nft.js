import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x5fC2840C5d3e31DA5A564125B460C036f2Ae7EDD",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Gold Membership of RentDAO",
        description: "This NFT will give you full access to RentDAO!",
        image: readFileSync("scripts/assets/membership.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()