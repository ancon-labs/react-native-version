const { getCFBundleShortVersionString } = require("../");
const test = require("ava");

test("CFBundleShortVersionString basic", (t) => {
	const v = getCFBundleShortVersionString("1.2.3");
	t.is(v, "1.2.3");
});

test("CFBundleShortVersionString alpha", (t) => {
	const v = getCFBundleShortVersionString("1.2.3-alpha");
	t.is(v, "1.2.3");
});

test("CFBundleShortVersionString alpha point", (t) => {
	const v = getCFBundleShortVersionString("1.2.3-alpha.0");
	t.is(v, "1.2.3");
});

test("CFBundleShortVersionString dash number", (t) => {
	const v = getCFBundleShortVersionString("1.2.3-0");
	t.is(v, "1.2.3");
});

test("CFBundleShortVersionString extra dot", (t) => {
	const v = getCFBundleShortVersionString("1.2.3.0");
	t.is(v, "1.2.3");
});

test("CFBundleShortVersionString garbage in, garbage out", (t) => {
	const v = getCFBundleShortVersionString("garbage");
	t.is(v, "garbage");
});

test("CFBundleShortVersionString allow invalid, with invalid", (t) => {
	const v = getCFBundleShortVersionString("1.2.3-staging.1", true);
	t.is(v, "1.2.3-staging.1");
});

test("CFBundleShortVersionString allow invalid, with valid", (t) => {
	const v = getCFBundleShortVersionString("1.2.3", true);
	t.is(v, "1.2.3");
});

test("CFBundleShortVersionString with suffix char, version without suffix", (t) => {
	const v = getCFBundleShortVersionString("1.2.3", false, true);
	t.is(v, "1.2.3");
});

test("CFBundleShortVersionString with suffix char, version with suffix", (t) => {
	const v = getCFBundleShortVersionString("1.2.3-beta.1", false, true);
	t.is(v, "1.2.3b1");
});
