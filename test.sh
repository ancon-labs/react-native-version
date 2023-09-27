#!/usr/bin/env bash

if [[ "$CI" != "true" || "$RUNNER_OS" == "macOS" ]]; then
	ava test/*.js
else
	ava --match="!*legacy*" test/*.js
fi
