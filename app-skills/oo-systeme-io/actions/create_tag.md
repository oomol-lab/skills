# Systeme.io · `create_tag`

Create a new tag in Systeme.io.

- **Service**: `systeme_io`
- **Action**: `create_tag`
- **Action id**: `systeme_io.create_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "create_tag"
```

## Run

```bash
oo connector run "systeme_io" --action "create_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Systeme.io state. Confirm the exact payload and intended effect with the user before running.
