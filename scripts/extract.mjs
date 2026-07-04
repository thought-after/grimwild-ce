import { extractPack } from "@foundryvtt/foundryvtt-cli";

const packs = ["gwce-arcana", "gwce-talents", "gwce-journals", "gwce-crucibles"];

for (const pack of packs) {
  await extractPack(
    `packs/${pack}`,
    `src/${pack}`,
    { folders: true }
  );
}