# Google Photos · `add_enrichment`

Add an enrichment item to a Google Photos album.

- **Service**: `googlephotos`
- **Action**: `add_enrichment`
- **Action id**: `googlephotos.add_enrichment`
- **Required scopes**: googlephotos.organize

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlephotos" --action "add_enrichment"
```

## Run

```bash
oo connector run "googlephotos" --action "add_enrichment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Photos state. Confirm the exact payload and intended effect with the user before running.
