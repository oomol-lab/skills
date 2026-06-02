# HeyGen · `generate_video`

Start an asynchronous HeyGen avatar video generation job and return the generated video ID.

- **Service**: `heygen`
- **Action**: `generate_video`
- **Action id**: `heygen.generate_video`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "generate_video"
```

## Run

```bash
oo connector run "heygen" --action "generate_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
