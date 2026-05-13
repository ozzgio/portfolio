#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
tmpdir="$(mktemp -d /tmp/portfolio-verify.XXXXXX)"
keep_tmp="${KEEP_VERIFY_TMPDIR:-0}"

cleanup() {
  status=$?
  if [[ $status -eq 0 && "$keep_tmp" != "1" ]]; then
    rm -rf "$tmpdir"
  else
    echo "Verification workspace preserved at: $tmpdir"
  fi
}

trap cleanup EXIT

echo "Preparing native-filesystem verification copy at $tmpdir"

rsync -a \
  --exclude=".git" \
  --exclude="node_modules" \
  --exclude=".next" \
  --exclude="._*" \
  "$repo_root"/ "$tmpdir"/

cd "$tmpdir"

echo "Installing dependencies with npm ci"
npm ci

echo "Running lint"
npm run lint

echo "Running production build"
npm run build

echo "Verification passed in $tmpdir"
