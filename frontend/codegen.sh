#!/usr/bin/env bash

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd $SCRIPT_DIR

npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/api/code