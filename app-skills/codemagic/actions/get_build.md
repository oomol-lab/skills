# Codemagic · `get_build`

Get detailed information about a single Codemagic build.

- **Service**: `codemagic`
- **Action**: `get_build`
- **Action id**: `codemagic.get_build`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codemagic" --action "get_build"
```

## Run

```bash
oo connector run "codemagic" --action "get_build" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
