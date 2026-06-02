# TinyPNG · `output_image`

Transform a TinyPNG output image and return a transit URL for the resulting file.

- **Service**: `tinypng`
- **Action**: `output_image`
- **Action id**: `tinypng.output_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tinypng" --action "output_image"
```

## Run

```bash
oo connector run "tinypng" --action "output_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
