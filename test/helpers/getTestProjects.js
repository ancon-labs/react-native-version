const fs = require("fs");
const path = require("path");

const testProjectsPath = path.join(__dirname, "../fixtures");

module.exports = async () => {
	return new Promise((resolveFiles) => {
		fs.readdir(testProjectsPath, {}, (err, files) => {
			Promise.all(
				files.map((file) => {
					return new Promise((resolveStats) => {
						fs.stat(path.join(testProjectsPath, file), (err, stats) => {
							resolveStats(stats);
						});
					});
				})
			).then((stats) => {
				resolveFiles(
					files.filter((file, index) => {
						return stats[index].isDirectory();
					})
				);
			});
		});
	});
};
