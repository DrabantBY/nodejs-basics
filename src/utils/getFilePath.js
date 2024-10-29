import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const getFilePath = (currentPath, targetPath) => {
	const filePath = fileURLToPath(currentPath);

	const folderPath = dirname(filePath);

	return join(folderPath, targetPath);
};

export default getFilePath;
