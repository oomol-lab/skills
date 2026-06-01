# SunoAPI · `add_instrumental`

Submit a SunoAPI add instrumental task and return the task identifier.

- **Service**: `sunoapi`
- **Action**: `add_instrumental`
- **Action id**: `sunoapi.add_instrumental`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "add_instrumental"
```

## Run

```bash
oo connector run "sunoapi" --action "add_instrumental" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes SunoAPI state. Confirm the exact payload and intended effect with the user before running.
