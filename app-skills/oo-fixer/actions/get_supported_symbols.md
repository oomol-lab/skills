# Fixer · `get_supported_symbols`

Retrieve all supported Fixer currency symbols and their full names.

- **Service**: `fixer`
- **Action**: `get_supported_symbols`
- **Action id**: `fixer.get_supported_symbols`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fixer" --action "get_supported_symbols"
```

## Run

```bash
oo connector run "fixer" --action "get_supported_symbols" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
