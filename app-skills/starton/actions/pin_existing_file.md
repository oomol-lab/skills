# Starton · `pin_existing_file`

Create a Starton pin for an existing IPFS CID.

- **Service**: `starton`
- **Action**: `pin_existing_file`
- **Action id**: `starton.pin_existing_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "starton" --action "pin_existing_file"
```

## Run

```bash
oo connector run "starton" --action "pin_existing_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
