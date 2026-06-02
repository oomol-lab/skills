# folk · `update_company`

Update one Folk company by company ID using the official companies payload fields.

- **Service**: `folk`
- **Action**: `update_company`
- **Action id**: `folk.update_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "update_company"
```

## Run

```bash
oo connector run "folk" --action "update_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes folk state. Confirm the exact payload and intended effect with the user before running.
