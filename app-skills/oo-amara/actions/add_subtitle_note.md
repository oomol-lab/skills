# Amara · `add_subtitle_note`

Add a subtitle note for a specific video and subtitle language.

- **Service**: `amara`
- **Action**: `add_subtitle_note`
- **Action id**: `amara.add_subtitle_note`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "add_subtitle_note"
```

## Run

```bash
oo connector run "amara" --action "add_subtitle_note" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Amara state. Confirm the exact payload and intended effect with the user before running.
