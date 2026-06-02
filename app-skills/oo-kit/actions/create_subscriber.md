# Kit · `create_subscriber`

Create a Kit subscriber, or update the existing subscriber with the same email address.

- **Service**: `kit`
- **Action**: `create_subscriber`
- **Action id**: `kit.create_subscriber`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "kit" --action "create_subscriber"
```

## Run

```bash
oo connector run "kit" --action "create_subscriber" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Kit state. Confirm the exact payload and intended effect with the user before running.
