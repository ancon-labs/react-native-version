const apiMacro = require("./helpers/apiMacro");
const cliMacro = require("./helpers/cliMacro");
const expected = require("./fixtures");
const npmScriptsMacro = require("./helpers/npmScriptsMacro");
const test = require("ava");

test(
	"postversion (legacy)",
	npmScriptsMacro,
	{ postversion: "-s 33 -L" },
	"AwesomeProject",
	expected.version.setBuild,
	expected.tree.amended
);

test(
	"postversion",
	npmScriptsMacro,
	{ postversion: "-s 33" },
	"AwesomeProject",
	expected.version.setBuild,
	expected.tree.amended
);

test(
	"postversion (Expo)",
	npmScriptsMacro,
	{ postversion: "-s 33" },
	"my-new-project",
	expected.version.setBuild,
	expected.tree.amended
);

test(
	"version (legacy)",
	npmScriptsMacro,
	{ version: "-s 33 -L" },
	"AwesomeProject",
	expected.version.setBuild,
	expected.tree.amended
);

test(
	"version",
	npmScriptsMacro,
	{ version: "-s 33" },
	"AwesomeProject",
	expected.version.setBuild,
	expected.tree.amended
);

test(
	"version (Expo)",
	npmScriptsMacro,
	{ version: "-s 33" },
	"my-new-project",
	expected.version.setBuild,
	expected.tree.amended
);

test(
	"CLI (legacy)",
	cliMacro,
	["-s", "33", "-L"],
	"AwesomeProject",
	expected.version.setBuild,
	expected.tree.notAmended
);

test(
	"CLI",
	cliMacro,
	["-s", "33"],
	"AwesomeProject",
	expected.version.setBuild,
	expected.tree.notAmended
);

test(
	"CLI (Expo)",
	cliMacro,
	["-s", "33"],
	"my-new-project",
	expected.version.setBuild,
	expected.tree.notAmended
);

test(
	"API (legacy)",
	apiMacro,
	{ setBuild: 33, legacy: true },
	"AwesomeProject",
	expected.version.setBuild,
	expected.tree.notAmended
);

test(
	"API",
	apiMacro,
	{ setBuild: 33 },
	"AwesomeProject",
	expected.version.setBuild,
	expected.tree.notAmended
);

test(
	"API (Expo)",
	apiMacro,
	{ setBuild: 33 },
	"my-new-project",
	expected.version.setBuild,
	expected.tree.notAmended
);
