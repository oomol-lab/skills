# ElevenReader · `get_user_info`

Get the current ElevenReader user profile and subscription snapshot.

- **Service**: `elevenreader`
- **Action**: `get_user_info`
- **Action id**: `elevenreader.get_user_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenreader" --action "get_user_info"
```

## Run

```bash
oo connector run "elevenreader" --action "get_user_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
