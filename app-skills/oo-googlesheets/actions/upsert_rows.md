# Google Sheets · `upsert_rows`

Upsert rows by key while preserving uncovered columns, adding missing headers when needed, and returning stable counters.

- **Service**: `googlesheets`
- **Action**: `upsert_rows`
- **Action id**: `googlesheets.upsert_rows`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "upsert_rows"
```

## Run

```bash
oo connector run "googlesheets" --action "upsert_rows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.
