# Slite · `create_note`

Create a Slite note with markdown or HTML content and optional collection attributes.

- **Service**: `slite`
- **Action**: `create_note`
- **Action id**: `slite.create_note`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slite" --action "create_note"
```

## Run

```bash
oo connector run "slite" --action "create_note" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Slite state. Confirm the exact payload and intended effect with the user before running.
