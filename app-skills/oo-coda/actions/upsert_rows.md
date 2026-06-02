# Coda · `upsert_rows`

Insert rows into a Coda table, optionally updating existing rows when key columns are provided.

- **Service**: `coda`
- **Action**: `upsert_rows`
- **Action id**: `coda.upsert_rows`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coda" --action "upsert_rows"
```

## Run

```bash
oo connector run "coda" --action "upsert_rows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Coda state. Confirm the exact payload and intended effect with the user before running.
