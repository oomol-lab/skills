# Blocknative · `list_supported_chains`

List the chains currently supported by the Blocknative Gas Platform.

- **Service**: `blocknative`
- **Action**: `list_supported_chains`
- **Action id**: `blocknative.list_supported_chains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "blocknative" --action "list_supported_chains"
```

## Run

```bash
oo connector run "blocknative" --action "list_supported_chains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
