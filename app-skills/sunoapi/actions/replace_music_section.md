# SunoAPI · `replace_music_section`

Submit a SunoAPI section replacement task and return the task identifier.

- **Service**: `sunoapi`
- **Action**: `replace_music_section`
- **Action id**: `sunoapi.replace_music_section`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "replace_music_section"
```

## Run

```bash
oo connector run "sunoapi" --action "replace_music_section" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes SunoAPI state. Confirm the exact payload and intended effect with the user before running.
