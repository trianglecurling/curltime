module.exports = {
	"pregame": {
		"game-start-warmup": "warm-up",
		"game-start-no-warmup": "between-ends",
		"warmup-end": null,
		"between-end-end": null,
		"begin-thinking": null,
		"end-thinking": null,
		"end-end": null,
		"begin-timeout": null,
		"end-timeout": null,
		"technical": null,
		"end-technical": null
	},
	"warm-up": {
		"game-start-warmup": null,
		"game-start-no-warmup": null,
		"warmup-end": "idle",
		"between-end-end": null,
		"begin-thinking": null,
		"end-thinking": null,
		"end-end": null,
		"begin-timeout": null,
		"end-timeout": null,
		"technical": "technical",
		"end-technical": null
	},
	"between-ends": {
		"game-start-warmup": null,
		"game-start-no-warmup": null,
		"warmup-end": null,
		"between-end-end": "stone-moving",
		"begin-thinking": "thinking",
		"end-thinking": null,
		"end-end": null,
		"begin-timeout": null,
		"end-timeout": null,
		"technical": "technical",
		"end-technical": null
	},
	"idle": {
		"game-start-warmup": "between-ends",
		"game-start-no-warmup": "between-ends",
		"warmup-end": null,
		"between-end-end": null,
		"begin-thinking": null,
		"end-thinking": null,
		"end-end": null,
		"begin-timeout": null,
		"end-timeout": null,
		"technical": "technical",
		"end-technical": null
	},
	"stone-moving": {
		"game-start-warmup": null,
		"game-start-no-warmup": null,
		"warmup-end": null,
		"between-end-end": null,
		"begin-thinking": "thinking",
		"end-thinking": null,
		"end-end": "between-ends",
		"begin-timeout": null,
		"end-timeout": null,
		"technical": "technical",
		"end-technical": null
	},
	"thinking": {
		"game-start-warmup": null,
		"game-start-no-warmup": null,
		"warmup-end": null,
		"between-end-end": null,
		"begin-thinking": "thinking",
		"end-thinking": "stone-moving",
		"end-end": "between-ends",
		"begin-timeout": "timeout",
		"end-timeout": null,
		"technical": "technical",
		"end-technical": null
	},
	"timeout": {
		"game-start-warmup": null,
		"game-start-no-warmup": null,
		"warmup-end": null,
		"between-end-end": null,
		"begin-thinking": null,
		"end-thinking": null,
		"end-end": null,
		"begin-timeout": null,
		"end-timeout": "thinking",
		"technical": "technical",
		"end-technical": null
	},
	"technical": {
		"game-start-warmup": null,
		"game-start-no-warmup": null,
		"warmup-end": null,
		"between-end-end": null,
		"begin-thinking": null,
		"end-thinking": null,
		"end-end": null,
		"begin-timeout": null,
		"end-timeout": null,
		"technical": null,
		"end-technical": "PRIOR-STATE"
	}
};