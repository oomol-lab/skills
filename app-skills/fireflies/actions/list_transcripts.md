# Fireflies · `list_transcripts`

List Fireflies transcripts with official filters and include flags.

- **Service**: `fireflies`
- **Action**: `list_transcripts`
- **Action id**: `fireflies.list_transcripts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "list_transcripts"
```

## Run

```bash
oo connector run "fireflies" --action "list_transcripts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
