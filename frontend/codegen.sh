#!/usr/bin/env bash

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd $SCRIPT_DIR

npx openapi-typescript-codegen --client axios --input http://localhost:8000/openapi.json --output ./src/api/openapi_generated_spec
rm -rf .src/api/models
mkdir ./src/api/models
cp -r ./src/api/openapi_generated_spec/models/* ./src/api/models
rm -rf ./src/api/openapi_generated_spec