const beforeEach = require("./beforeEach");
const getCurrCommitHash = require("./getCurrCommitHash");
const getCurrTagHash = require("./getCurrTagHash");
const getCurrTree = require("./getCurrTree");
const getCurrVersion = require("./getCurrVersion");
const tempInitAndVersion = require("./tempInitAndVersion");
const { version } = require("../../");

module.exports = async (
	t,
	params,
	testProject,
	expectedVersion,
	expectedTree
) => {
	t.context.testProject = testProject;
	beforeEach(t);
	tempInitAndVersion();
	await version(Object.assign({}, params, { quiet: true }), t.context.tempDir);
	t.plan(3);
	t.deepEqual(getCurrVersion(t), expectedVersion[t.context.testProject]);
	t.deepEqual(await getCurrTree(t), expectedTree[t.context.testProject]);

	if (params.skipTag) {
		t.not(await getCurrTagHash(t), await getCurrCommitHash(t));
	} else {
		t.is(await getCurrTagHash(t), await getCurrCommitHash(t));
	}
};
