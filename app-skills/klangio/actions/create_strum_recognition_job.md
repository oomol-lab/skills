# Klangio · `create_strum_recognition_job`

Create a Klangio guitar strum recognition job from a URL or Base64 audio file.

- **Service**: `klangio`
- **Action**: `create_strum_recognition_job`
- **Action id**: `klangio.create_strum_recognition_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "klangio" --action "create_strum_recognition_job"
```

## Run

```bash
oo connector run "klangio" --action "create_strum_recognition_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Klangio state. Confirm the exact payload and intended effect with the user before running.
