ifneq (,$(wildcard ./.env))
    include .env
    export
endif


.PHONY: serve
serve:
	deno run -A main.ts
