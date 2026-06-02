# Kit · `update_subscriber`

Update a Kit subscriber's email address, first name, and custom fields.

- **Service**: `kit`
- **Action**: `update_subscriber`
- **Action id**: `kit.update_subscriber`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "kit" --action "update_subscriber"
```

## Run

```bash
oo connector run "kit" --action "update_subscriber" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Kit state. Confirm the exact payload and intended effect with the user before running.
