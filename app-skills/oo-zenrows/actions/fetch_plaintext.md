# ZenRows · `fetch_plaintext`

Fetch plain text extracted from one public URL with ZenRows.

- **Service**: `zenrows`
- **Action**: `fetch_plaintext`
- **Action id**: `zenrows.fetch_plaintext`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zenrows" --action "fetch_plaintext"
```

## Run

```bash
oo connector run "zenrows" --action "fetch_plaintext" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
