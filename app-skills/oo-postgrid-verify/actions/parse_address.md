# PostGrid Verify · `parse_address`

Parse a single-line address into component fields with PostGrid Verify.

- **Service**: `postgrid_verify`
- **Action**: `parse_address`
- **Action id**: `postgrid_verify.parse_address`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postgrid_verify" --action "parse_address"
```

## Run

```bash
oo connector run "postgrid_verify" --action "parse_address" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
