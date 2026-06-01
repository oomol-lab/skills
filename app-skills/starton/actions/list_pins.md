# Starton · `list_pins`

List IPFS pins from the current Starton project.

- **Service**: `starton`
- **Action**: `list_pins`
- **Action id**: `starton.list_pins`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "starton" --action "list_pins"
```

## Run

```bash
oo connector run "starton" --action "list_pins" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
