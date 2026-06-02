# Tencent Maps · `input_tips`

Fetch Tencent Maps place suggestion tips for a partial keyword.

- **Service**: `tencent_maps`
- **Action**: `input_tips`
- **Action id**: `tencent_maps.input_tips`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tencent_maps" --action "input_tips"
```

## Run

```bash
oo connector run "tencent_maps" --action "input_tips" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
