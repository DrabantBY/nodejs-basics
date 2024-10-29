import { readdir } from "node:fs/promises";
import getFilePath from "../utils/getFilePath.js";

const list = async () => {
	try {
		const folder = getFilePath(import.meta.url, "files");
		const files = await readdir(folder);
		console.table(files);
	} catch {
		throw new Error("FS operation failed");
	}
};

await list();
