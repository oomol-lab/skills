# Zenserp · `search`

Run a Google Search request through Zenserp and return the first-pass common result surfaces.

- **Service**: `zenserp`
- **Action**: `search`
- **Action id**: `zenserp.search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zenserp" --action "search"
```

## Run

```bash
oo connector run "zenserp" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
