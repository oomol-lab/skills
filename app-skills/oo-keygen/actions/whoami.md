# Keygen · `whoami`

Fetch the Keygen profile associated with the connected API token.

- **Service**: `keygen`
- **Action**: `whoami`
- **Action id**: `keygen.whoami`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "whoami"
```

## Run

```bash
oo connector run "keygen" --action "whoami" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
