# Pipedrive · `get_person`

Get one Pipedrive person by person ID.

- **Service**: `pipedrive`
- **Action**: `get_person`
- **Action id**: `pipedrive.get_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "get_person"
```

## Run

```bash
oo connector run "pipedrive" --action "get_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
