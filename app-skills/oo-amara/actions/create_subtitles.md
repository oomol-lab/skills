# Amara · `create_subtitles`

Create a new subtitle version for a specific video and language.

- **Service**: `amara`
- **Action**: `create_subtitles`
- **Action id**: `amara.create_subtitles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "create_subtitles"
```

## Run

```bash
oo connector run "amara" --action "create_subtitles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Amara state. Confirm the exact payload and intended effect with the user before running.
