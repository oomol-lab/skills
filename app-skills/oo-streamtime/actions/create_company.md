# Streamtime · `create_company`

Create a company in Streamtime for the authenticated organisation.

- **Service**: `streamtime`
- **Action**: `create_company`
- **Action id**: `streamtime.create_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "streamtime" --action "create_company"
```

## Run

```bash
oo connector run "streamtime" --action "create_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Streamtime state. Confirm the exact payload and intended effect with the user before running.
