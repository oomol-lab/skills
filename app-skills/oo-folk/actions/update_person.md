# folk · `update_person`

Update one Folk person by person ID using the official people payload fields.

- **Service**: `folk`
- **Action**: `update_person`
- **Action id**: `folk.update_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "update_person"
```

## Run

```bash
oo connector run "folk" --action "update_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes folk state. Confirm the exact payload and intended effect with the user before running.
