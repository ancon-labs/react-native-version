const apiMacro = require("./helpers/apiMacro");
const cliMacro = require("./helpers/cliMacro");
const expected = require("./fixtures");
const npmScriptsMacro = require("./helpers/npmScriptsMacro");
const test = require("ava");

test(
	"postversion (legacy)",
	npmScriptsMacro,
	{ postversion: "-L" },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"postversion",
	npmScriptsMacro,
	{ postversion: "" },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"postversion (Expo)",
	npmScriptsMacro,
	{ postversion: "" },
	"my-new-project",
	expected.version.default,
	expected.tree.amended
);

test(
	"version (legacy)",
	npmScriptsMacro,
	{ version: "-L" },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"version",
	npmScriptsMacro,
	{ version: "" },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"version (Expo)",
	npmScriptsMacro,
	{ version: "" },
	"my-new-project",
	expected.version.default,
	expected.tree.amended
);

test(
	"CLI (legacy)",
	cliMacro,
	["-L"],
	"AwesomeProject",
	expected.version.default,
	expected.tree.notAmended
);

test(
	"CLI",
	cliMacro,
	[],
	"AwesomeProject",
	expected.version.default,
	expected.tree.notAmended
);

test(
	"CLI (Expo)",
	cliMacro,
	[],
	"my-new-project",
	expected.version.default,
	expected.tree.notAmended
);

test(
	"API (legacy)",
	apiMacro,
	{ legacy: true },
	"AwesomeProject",
	expected.version.default,
	expected.tree.notAmended
);

test(
	"API",
	apiMacro,
	{},
	"AwesomeProject",
	expected.version.default,
	expected.tree.notAmended
);

test(
	"API (Expo)",
	apiMacro,
	{},
	"my-new-project",
	expected.version.default,
	expected.tree.notAmended
);
