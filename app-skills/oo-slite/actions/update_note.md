# Slite · `update_note`

Update a Slite note title, body content, or collection attributes.

- **Service**: `slite`
- **Action**: `update_note`
- **Action id**: `slite.update_note`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slite" --action "update_note"
```

## Run

```bash
oo connector run "slite" --action "update_note" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Slite state. Confirm the exact payload and intended effect with the user before running.
