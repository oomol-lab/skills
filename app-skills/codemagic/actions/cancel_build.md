# Codemagic · `cancel_build`

Cancel a Codemagic build by its build ID.

- **Service**: `codemagic`
- **Action**: `cancel_build`
- **Action id**: `codemagic.cancel_build`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codemagic" --action "cancel_build"
```

## Run

```bash
oo connector run "codemagic" --action "cancel_build" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
