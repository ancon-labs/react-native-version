const apiMacro = require("./helpers/apiMacro");
const cliMacro = require("./helpers/cliMacro");
const expected = require("./fixtures");
const npmScriptsMacro = require("./helpers/npmScriptsMacro");
const test = require("ava");

test(
	"postversion (legacy)",
	npmScriptsMacro,
	{ postversion: "-a --skip-tag -L" },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"postversion",
	npmScriptsMacro,
	{ postversion: "-a --skip-tag" },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"postversion (Expo)",
	npmScriptsMacro,
	{ postversion: "-a --skip-tag" },
	"my-new-project",
	expected.version.default,
	expected.tree.amended
);

test(
	"version (legacy)",
	npmScriptsMacro,
	{ version: "-a --skip-tag -L" },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"version",
	npmScriptsMacro,
	{ version: "-a --skip-tag" },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"version (Expo)",
	npmScriptsMacro,
	{ version: "-a --skip-tag" },
	"my-new-project",
	expected.version.default,
	expected.tree.amended
);

test(
	"CLI (legacy)",
	cliMacro,
	["-a", "--skip-tag", "-L"],
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"CLI",
	cliMacro,
	["-a", "--skip-tag"],
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"CLI (Expo)",
	cliMacro,
	["-a", "--skip-tag"],
	"my-new-project",
	expected.version.default,
	expected.tree.amended
);

test(
	"API (legacy)",
	apiMacro,
	{ amend: true, skipTag: true, legacy: true },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"API",
	apiMacro,
	{ amend: true, skipTag: true },
	"AwesomeProject",
	expected.version.default,
	expected.tree.amended
);

test(
	"API (Expo)",
	apiMacro,
	{ amend: true, skipTag: true },
	"my-new-project",
	expected.version.default,
	expected.tree.amended
);
