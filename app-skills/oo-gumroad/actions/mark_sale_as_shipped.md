# Gumroad · `mark_sale_as_shipped`

Mark a Gumroad sale as shipped, optionally including a tracking URL.

- **Service**: `gumroad`
- **Action**: `mark_sale_as_shipped`
- **Action id**: `gumroad.mark_sale_as_shipped`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gumroad" --action "mark_sale_as_shipped"
```

## Run

```bash
oo connector run "gumroad" --action "mark_sale_as_shipped" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gumroad state. Confirm the exact payload and intended effect with the user before running.
