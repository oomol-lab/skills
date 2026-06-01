# Amara · `create_subtitle_language`

Create a new subtitle language track for an Amara video.

- **Service**: `amara`
- **Action**: `create_subtitle_language`
- **Action id**: `amara.create_subtitle_language`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "create_subtitle_language"
```

## Run

```bash
oo connector run "amara" --action "create_subtitle_language" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Amara state. Confirm the exact payload and intended effect with the user before running.
