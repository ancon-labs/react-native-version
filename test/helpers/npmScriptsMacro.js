const beforeEach = require("./beforeEach");
const { cliPath } = require("../fixtures");
const fs = require("fs-extra");
const getCurrCommitHash = require("./getCurrCommitHash");
const getCurrTagHash = require("./getCurrTagHash");
const getCurrTree = require("./getCurrTree");
const getCurrVersion = require("./getCurrVersion");
const tempInitAndVersion = require("./tempInitAndVersion");
const testPkgJSON = require("../fixtures/AwesomeProject/package.json");

module.exports = async (
	t,
	params,
	testProject,
	expectedVersion,
	expectedTree
) => {
	t.context.testProject = testProject;
	beforeEach(t);

	const newScript = {};

	Object.keys(params).forEach((key) => {
		newScript[key] = `${cliPath} ${params[key]}`;
	});

	const newTestPkgJSON = JSON.stringify(
		Object.assign({}, testPkgJSON, {
			scripts: Object.assign({}, testPkgJSON.scripts, newScript),
		}),
		null,
		2
	);

	fs.writeFileSync("package.json", `${newTestPkgJSON}\n`, {
		cwd: t.context.tempDir,
	});

	tempInitAndVersion();
	t.plan(3);
	t.deepEqual(getCurrVersion(t), expectedVersion[t.context.testProject]);
	t.deepEqual(await getCurrTree(t), expectedTree[t.context.testProject]);

	if (!params.version && newTestPkgJSON.indexOf("--skip-tag") > -1) {
		t.not(await getCurrTagHash(t), await getCurrCommitHash(t));
	} else {
		t.is(await getCurrTagHash(t), await getCurrCommitHash(t));
	}
};
