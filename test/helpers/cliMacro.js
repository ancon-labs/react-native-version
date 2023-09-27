const beforeEach = require("./beforeEach");
const child = require("child_process");
const { cliPath } = require("../fixtures");
const getCurrCommitHash = require("./getCurrCommitHash");
const getCurrTagHash = require("./getCurrTagHash");
const getCurrTree = require("./getCurrTree");
const getCurrVersion = require("./getCurrVersion");
const tempInitAndVersion = require("./tempInitAndVersion");

module.exports = async (
	t,
	params,
	testProject,
	expectedVersion,
	expectedTree
) => {
	t.context.testProject = testProject;
	beforeEach(t);
	delete process.env.npm_lifecycle_event;
	tempInitAndVersion();

	const versionProcess = child.spawnSync(
		cliPath,
		[].concat(params).filter(Boolean),
		{
			env: Object.assign({}, process.env, {
				RNV_ENV: "ava",
			}),
		}
	);

	if (versionProcess.status > 0) {
		throw new Error(versionProcess.stderr.toString());
	}

	t.plan(3);
	t.deepEqual(getCurrVersion(t), expectedVersion[t.context.testProject]);
	t.deepEqual(await getCurrTree(t), expectedTree[t.context.testProject]);

	if (params.indexOf("--skip-tag") > -1) {
		t.not(await getCurrTagHash(t), await getCurrCommitHash(t));
	} else {
		t.is(await getCurrTagHash(t), await getCurrCommitHash(t));
	}
};
