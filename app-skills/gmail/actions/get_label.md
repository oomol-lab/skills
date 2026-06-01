# Gmail · `get_label`

Get details for a Gmail label, including its name, type, visibility settings, counts, and optional color.

- **Service**: `gmail`
- **Action**: `get_label`
- **Action id**: `gmail.get_label`
- **Required scopes**: gmail.labels

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "get_label"
```

## Run

```bash
oo connector run "gmail" --action "get_label" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
