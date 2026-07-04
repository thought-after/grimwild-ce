import { compilePack } from "@foundryvtt/foundryvtt-cli";

const packs = ["gwce-arcana", "gwce-talents", "gwce-journals", "gwce-crucibles"];

for (const pack of packs) {
  await compilePack(
    `src/${pack}`,
    `packs/${pack}`
  );
}