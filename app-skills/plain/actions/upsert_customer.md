# Plain · `upsert_customer`

Create or update one Plain customer using exactly one identifier plus create and update payloads.

- **Service**: `plain`
- **Action**: `upsert_customer`
- **Action id**: `plain.upsert_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "plain" --action "upsert_customer"
```

## Run

```bash
oo connector run "plain" --action "upsert_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Plain state. Confirm the exact payload and intended effect with the user before running.
