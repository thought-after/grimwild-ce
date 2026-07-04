import { compilePack } from "@foundryvtt/foundryvtt-cli";

const packs = ["gwce-journals", "gwce-crucibles", "gwce-talents", "gwce-arcana"];

for (const pack of packs) {
  await compilePack(
    `src/${pack}`,
    `packs/${pack}`,
    { recursive: true }
  );
}