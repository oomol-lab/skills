# Gist · `fork_gist`

Fork a GitHub gist.

- **Service**: `gist`
- **Action**: `fork_gist`
- **Action id**: `gist.fork_gist`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gist" --action "fork_gist"
```

## Run

```bash
oo connector run "gist" --action "fork_gist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
