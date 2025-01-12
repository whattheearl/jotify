.PHONY: dev

## help: print this help message
help:
	@echo 'Usage:'
	@echo ${MAKEFILE_LIST}
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'

## dev: starts dev server
dev:
	@bun run ./src/index.ts --hotreload
