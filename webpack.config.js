import Url from "node:url";
import Path from "node:path";

const Here = Path.dirname(Url.fileURLToPath(import.meta.url));
const DistDir = Path.resolve(Here, "dist");
const EntryFile = Path.resolve(Here, "app.js");

export default {
	mode: "production",
	target: "web",

	entry: {
		"bundle": EntryFile,
	},

	output: {
		path: DistDir,
	},

	optimization: {
		minimize: true,
	},
}
