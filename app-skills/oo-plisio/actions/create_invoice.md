# Plisio · `create_invoice`

Create a hosted Plisio invoice for one merchant order using either a crypto amount or a fiat amount that Plisio converts.

- **Service**: `plisio`
- **Action**: `create_invoice`
- **Action id**: `plisio.create_invoice`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "plisio" --action "create_invoice"
```

## Run

```bash
oo connector run "plisio" --action "create_invoice" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Plisio state. Confirm the exact payload and intended effect with the user before running.
