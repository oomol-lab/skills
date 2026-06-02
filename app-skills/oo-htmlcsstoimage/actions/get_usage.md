# HTML/CSS to Image · `get_usage`

Retrieve HTML/CSS to Image usage counts by hour, day, month, and billing period.

- **Service**: `htmlcsstoimage`
- **Action**: `get_usage`
- **Action id**: `htmlcsstoimage.get_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "htmlcsstoimage" --action "get_usage"
```

## Run

```bash
oo connector run "htmlcsstoimage" --action "get_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
