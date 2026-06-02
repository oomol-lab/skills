# AMap · `input_tips`

Get input tips by keywords.

- **Service**: `amap`
- **Action**: `input_tips`
- **Action id**: `amap.input_tips`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amap" --action "input_tips"
```

## Run

```bash
oo connector run "amap" --action "input_tips" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
