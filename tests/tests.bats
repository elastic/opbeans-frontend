#!/usr/bin/env bats

load 'test_helper/bats-support/load'
load 'test_helper/bats-assert/load'
load test_helpers

IMAGE="bats-opbeans"
CONTAINER="bats-opbeans"

@test "build image" {
	cd $BATS_TEST_DIRNAME/..
	docker build -t $IMAGE .
}
