# folk · `create_person`

Create one Folk person using the official people payload fields.

- **Service**: `folk`
- **Action**: `create_person`
- **Action id**: `folk.create_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "create_person"
```

## Run

```bash
oo connector run "folk" --action "create_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes folk state. Confirm the exact payload and intended effect with the user before running.
