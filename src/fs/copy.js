import { cp } from "node:fs/promises";
import getFilePath from "../utils/getFilePath.js";

const copy = async () => {
	try {
		const srcFolder = getFilePath(import.meta.url, "files");
		const newFolder = getFilePath(import.meta.url, "files_copy");
		await cp(srcFolder, newFolder, {
			recursive: true,
			errorOnExist: true,
			force: false,
		});
	} catch {
		throw new Error("FS operation failed");
	}
};

await copy();
