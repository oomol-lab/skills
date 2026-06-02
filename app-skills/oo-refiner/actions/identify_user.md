# Refiner · `identify_user`

Create or update a Refiner contact using the official identify-user endpoint.

- **Service**: `refiner`
- **Action**: `identify_user`
- **Action id**: `refiner.identify_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "refiner" --action "identify_user"
```

## Run

```bash
oo connector run "refiner" --action "identify_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
