# Placid · `create_image`

Queue one Placid image generation request from a template UUID and dynamic layer payload, then return the image handle for polling.

- **Service**: `placid`
- **Action**: `create_image`
- **Action id**: `placid.create_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "placid" --action "create_image"
```

## Run

```bash
oo connector run "placid" --action "create_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Placid state. Confirm the exact payload and intended effect with the user before running.
