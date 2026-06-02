# folk · `create_company`

Create one Folk company using the official companies payload fields.

- **Service**: `folk`
- **Action**: `create_company`
- **Action id**: `folk.create_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "create_company"
```

## Run

```bash
oo connector run "folk" --action "create_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes folk state. Confirm the exact payload and intended effect with the user before running.
