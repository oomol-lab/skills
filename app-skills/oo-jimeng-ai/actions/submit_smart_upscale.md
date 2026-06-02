# Jimeng AI · `submit_smart_upscale`

Submit a Jimeng AI Smart Upscale async task.

- **Service**: `jimeng_ai`
- **Action**: `submit_smart_upscale`
- **Action id**: `jimeng_ai.submit_smart_upscale`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jimeng_ai" --action "submit_smart_upscale"
```

## Run

```bash
oo connector run "jimeng_ai" --action "submit_smart_upscale" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Jimeng AI state. Confirm the exact payload and intended effect with the user before running.
