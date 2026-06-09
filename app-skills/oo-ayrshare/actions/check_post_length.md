# Ayrshare · `check_post_length`

Check weighted social post length and platform validity using Ayrshare's post length validator.

- **Service**: `ayrshare`
- **Action**: `check_post_length`
- **Action id**: `ayrshare.check_post_length`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ayrshare" --action "check_post_length"
```

## Run

```bash
oo connector run "ayrshare" --action "check_post_length" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Ayrshare state. Confirm the exact payload and intended effect with the user before running.
