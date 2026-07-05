import { extractPack } from "@foundryvtt/foundryvtt-cli";
import {rm} from "fs/promises";

const packs = ["gwce-arcana", "gwce-talents", "gwce-journals", "gwce-crucibles", "gwce-actors"];

for (const pack of packs) {
  await rm(`src/${pack}`, {recursive: true, force: true});
  await extractPack(
    `packs/${pack}`,
    `src/${pack}`,
    { folders: true }
  );
}