# Refiner · `list_contacts`

List contacts available in the connected Refiner workspace.

- **Service**: `refiner`
- **Action**: `list_contacts`
- **Action id**: `refiner.list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "refiner" --action "list_contacts"
```

## Run

```bash
oo connector run "refiner" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
