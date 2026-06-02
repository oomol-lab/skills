# Pipedrive · `create_deal`

Create a Pipedrive deal with title, contact links, pipeline placement, labels, and optional custom fields.

- **Service**: `pipedrive`
- **Action**: `create_deal`
- **Action id**: `pipedrive.create_deal`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "create_deal"
```

## Run

```bash
oo connector run "pipedrive" --action "create_deal" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pipedrive state. Confirm the exact payload and intended effect with the user before running.
