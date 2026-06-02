# Delighted · `unsubscribe_person`

Add a person to the Delighted unsubscribe list.

- **Service**: `delighted`
- **Action**: `unsubscribe_person`
- **Action id**: `delighted.unsubscribe_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "delighted" --action "unsubscribe_person"
```

## Run

```bash
oo connector run "delighted" --action "unsubscribe_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Delighted data. Always confirm the target and get explicit user approval before running.
