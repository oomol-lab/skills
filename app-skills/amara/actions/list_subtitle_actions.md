# Amara · `list_subtitle_actions`

List the subtitle workflow actions available for a specific video and language.

- **Service**: `amara`
- **Action**: `list_subtitle_actions`
- **Action id**: `amara.list_subtitle_actions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "list_subtitle_actions"
```

## Run

```bash
oo connector run "amara" --action "list_subtitle_actions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
