# Google Sheets · `find_replace`

Run find and replace through spreadsheets.batchUpdate and return stable batch replies.

- **Service**: `googlesheets`
- **Action**: `find_replace`
- **Action id**: `googlesheets.find_replace`
- **Required scopes**: googlesheets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "find_replace"
```

## Run

```bash
oo connector run "googlesheets" --action "find_replace" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Sheets state. Confirm the exact payload and intended effect with the user before running.
