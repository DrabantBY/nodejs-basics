import { writeFile } from "node:fs/promises";
import getFilePath from "../utils/getFilePath.js";

const create = async () => {
	try {
		const targetFile = getFilePath(import.meta.url, "files/fresh.txt");
		await writeFile(targetFile, "I am fresh and young", { flag: "wx" });
	} catch {
		throw new Error("FS operation failed");
	}
};

await create();
