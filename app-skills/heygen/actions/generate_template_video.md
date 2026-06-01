# HeyGen · `generate_template_video`

Start an asynchronous HeyGen template video generation job with explicit template variables.

- **Service**: `heygen`
- **Action**: `generate_template_video`
- **Action id**: `heygen.generate_template_video`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "generate_template_video"
```

## Run

```bash
oo connector run "heygen" --action "generate_template_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
