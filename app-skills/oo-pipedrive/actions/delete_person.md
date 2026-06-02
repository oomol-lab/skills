# Pipedrive · `delete_person`

Delete one Pipedrive person by person ID.

- **Service**: `pipedrive`
- **Action**: `delete_person`
- **Action id**: `pipedrive.delete_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "delete_person"
```

## Run

```bash
oo connector run "pipedrive" --action "delete_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Pipedrive data. Always confirm the target and get explicit user approval before running.
