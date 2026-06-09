# Abyssale · `create_dynamic_image_url`

Create or retrieve the dynamic image URL for an Abyssale design.

- **Service**: `abyssale`
- **Action**: `create_dynamic_image_url`
- **Action id**: `abyssale.create_dynamic_image_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abyssale" --action "create_dynamic_image_url"
```

## Run

```bash
oo connector run "abyssale" --action "create_dynamic_image_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Abyssale state. Confirm the exact payload and intended effect with the user before running.
