# Kraken.io · `optimize_image`

Optimize one image with Kraken.io from either a public URL or direct upload, then store the result in connector transit.

- **Service**: `kraken_io`
- **Action**: `optimize_image`
- **Action id**: `kraken_io.optimize_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "kraken_io" --action "optimize_image"
```

## Run

```bash
oo connector run "kraken_io" --action "optimize_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
