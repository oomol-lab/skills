# Apify · `run_actor`

Start one Apify actor run with an optional JSON input payload.

- **Service**: `apify`
- **Action**: `run_actor`
- **Action id**: `apify.run_actor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apify" --action "run_actor"
```

## Run

```bash
oo connector run "apify" --action "run_actor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
