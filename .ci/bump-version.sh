#!/usr/bin/env bash
set -euxo pipefail

AGENT_VERSION="${1?Missing the APM rum agent version}"

# Bump version
sed -ibck "s#git fetch origin '.*';#git fetch origin '${AGENT_VERSION}';#g" package.json

# Commit changes
git add package.json
git commit -m "Bump version ${AGENT_VERSION}"
