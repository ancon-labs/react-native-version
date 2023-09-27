const apiMacro = require("./helpers/apiMacro");
const cliMacro = require("./helpers/cliMacro");
const expected = require("./fixtures");
const npmScriptsMacro = require("./helpers/npmScriptsMacro");
const test = require("ava");

test(
	"postversion (legacy)",
	npmScriptsMacro,
	{ postversion: "--generate-build -L" },
	"AwesomeProject",
	expected.version.generateBuild,
	expected.tree.amended
);

test(
	"postversion",
	npmScriptsMacro,
	{ postversion: "--generate-build" },
	"AwesomeProject",
	expected.version.generateBuild,
	expected.tree.amended
);

test(
	"postversion (Expo)",
	npmScriptsMacro,
	{ postversion: "--generate-build" },
	"my-new-project",
	expected.version.generateBuild,
	expected.tree.amended
);

test(
	"version (legacy)",
	npmScriptsMacro,
	{ version: "--generate-build -L" },
	"AwesomeProject",
	expected.version.generateBuild,
	expected.tree.amended
);

test(
	"version",
	npmScriptsMacro,
	{ version: "--generate-build" },
	"AwesomeProject",
	expected.version.generateBuild,
	expected.tree.amended
);

test(
	"version (Expo)",
	npmScriptsMacro,
	{ version: "--generate-build" },
	"my-new-project",
	expected.version.generateBuild,
	expected.tree.amended
);

test(
	"CLI (legacy)",
	cliMacro,
	["--generate-build", "-L"],
	"AwesomeProject",
	expected.version.generateBuild,
	expected.tree.notAmended
);

test(
	"CLI",
	cliMacro,
	["--generate-build"],
	"AwesomeProject",
	expected.version.generateBuild,
	expected.tree.notAmended
);

test(
	"CLI (Expo)",
	cliMacro,
	["--generate-build"],
	"my-new-project",
	expected.version.generateBuild,
	expected.tree.notAmended
);

test(
	"API (legacy)",
	apiMacro,
	{ generateBuild: true, legacy: true },
	"AwesomeProject",
	expected.version.generateBuild,
	expected.tree.notAmended
);

test(
	"API",
	apiMacro,
	{ generateBuild: true },
	"AwesomeProject",
	expected.version.generateBuild,
	expected.tree.notAmended
);

test(
	"API (Expo)",
	apiMacro,
	{ generateBuild: true },
	"my-new-project",
	expected.version.generateBuild,
	expected.tree.notAmended
);
