# Fireflies · `get_transcript`

Get a Fireflies transcript by transcript ID.

- **Service**: `fireflies`
- **Action**: `get_transcript`
- **Action id**: `fireflies.get_transcript`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "get_transcript"
```

## Run

```bash
oo connector run "fireflies" --action "get_transcript" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
