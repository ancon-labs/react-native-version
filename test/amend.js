const apiMacro = require("./helpers/apiMacro");
const cliMacro = require("./helpers/cliMacro");
const expected = require("./fixtures");
const npmScriptsMacro = require("./helpers/npmScriptsMacro");
const test = require("ava");

test(
	"postversion (legacy)",
	npmScriptsMacro,
	{ postversion: "-a -L" },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"postversion",
	npmScriptsMacro,
	{ postversion: "-a" },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"postversion (Expo)",
	npmScriptsMacro,
	{ postversion: "-a" },
	"my-new-project",
	expected.version.default,
	expected.tree.amended
);

test(
	"version (legacy)",
	npmScriptsMacro,
	{ version: "-a -L" },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"version",
	npmScriptsMacro,
	{ version: "-a" },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"version (Expo)",
	npmScriptsMacro,
	{ version: "-a" },
	"my-new-project",
	expected.version.default,
	expected.tree.amended
);

test(
	"CLI (legacy)",
	cliMacro,
	["-a", "-L"],
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"CLI",
	cliMacro,
	["-a"],
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"CLI (Expo)",
	cliMacro,
	["-a"],
	"my-new-project",
	expected.version.default,
	expected.tree.amended
);

test(
	"API (legacy)",
	apiMacro,
	{ amend: true, legacy: true },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"API",
	apiMacro,
	{ amend: true },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"API (Expo)",
	apiMacro,
	{ amend: true },
	"my-new-project",
	expected.version.default,
	expected.tree.amended
);
