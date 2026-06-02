# Refiner · `get_contact`

Retrieve a single Refiner contact by id, email, or uuid.

- **Service**: `refiner`
- **Action**: `get_contact`
- **Action id**: `refiner.get_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "refiner" --action "get_contact"
```

## Run

```bash
oo connector run "refiner" --action "get_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
