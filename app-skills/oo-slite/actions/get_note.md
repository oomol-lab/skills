# Slite · `get_note`

Read one Slite note and return its content in Markdown, HTML, or SliteML.

- **Service**: `slite`
- **Action**: `get_note`
- **Action id**: `slite.get_note`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slite" --action "get_note"
```

## Run

```bash
oo connector run "slite" --action "get_note" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
