# SunoAPI · `upload_and_extend_audio`

Submit a SunoAPI upload and extend task and return the task identifier.

- **Service**: `sunoapi`
- **Action**: `upload_and_extend_audio`
- **Action id**: `sunoapi.upload_and_extend_audio`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "upload_and_extend_audio"
```

## Run

```bash
oo connector run "sunoapi" --action "upload_and_extend_audio" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes SunoAPI state. Confirm the exact payload and intended effect with the user before running.
