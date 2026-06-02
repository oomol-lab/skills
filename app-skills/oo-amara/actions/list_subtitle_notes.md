# Amara · `list_subtitle_notes`

List all subtitle notes for a specific video and subtitle language.

- **Service**: `amara`
- **Action**: `list_subtitle_notes`
- **Action id**: `amara.list_subtitle_notes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "list_subtitle_notes"
```

## Run

```bash
oo connector run "amara" --action "list_subtitle_notes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
