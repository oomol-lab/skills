# Blocknative · `list_gas_oracles`

List the gas-oracle metadata exposed by Blocknative across supported chains.

- **Service**: `blocknative`
- **Action**: `list_gas_oracles`
- **Action id**: `blocknative.list_gas_oracles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "blocknative" --action "list_gas_oracles"
```

## Run

```bash
oo connector run "blocknative" --action "list_gas_oracles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
