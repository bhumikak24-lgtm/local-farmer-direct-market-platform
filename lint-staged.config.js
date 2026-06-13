export default {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "biome check --write",
    "prettier --write"
  ],
  "*.{json,md,yml,yaml}": [
    "prettier --write"
  ]
}
