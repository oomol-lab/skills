# Streamtime · `update_company`

Update a Streamtime company by ID.

- **Service**: `streamtime`
- **Action**: `update_company`
- **Action id**: `streamtime.update_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "streamtime" --action "update_company"
```

## Run

```bash
oo connector run "streamtime" --action "update_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Streamtime state. Confirm the exact payload and intended effect with the user before running.
