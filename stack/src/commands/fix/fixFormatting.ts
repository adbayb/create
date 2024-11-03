import { existsSync } from "node:fs";

import { helpers } from "termost";

import type { Filenames } from "../../types";
import { createError, resolveFromProjectDirectory } from "../../helpers";

const PRETTIER_IGNORE_FILES = ["CHANGELOG.md", "pnpm-lock.yaml"];

export const fixFormatting = async (files: Filenames) => {
	let prettierFiles = [];

	if (files.length === 0) {
		prettierFiles.push(`"**/!(${PRETTIER_IGNORE_FILES.join("|")})"`);
	} else {
		prettierFiles = files.filter((file) => {
			return (
				!PRETTIER_IGNORE_FILES.some((filename) => file.endsWith(filename)) && // The root `README.md` file is ignored to prevent error due to its symbolic link nature when specified explicitly as a file
				file !== "README.md"
			);
		});

		if (prettierFiles.length === 0) return Promise.resolve();
	}

	const args = [...prettierFiles];

	if (existsSync(resolveFromProjectDirectory(".gitignore"))) {
		args.push("--ignore-path .gitignore");
	}

	args.push("--write");
	args.push("--ignore-unknown");
	args.push("--no-error-on-unmatched-pattern");

	try {
		return await helpers.exec(`prettier ${args.join(" ")}`);
	} catch (error) {
		throw createError("prettier", error as Error);
	}
};
