# Codacy · `get_current_user`

Retrieve the Codacy user associated with the connected API token.

- **Service**: `codacy`
- **Action**: `get_current_user`
- **Action id**: `codacy.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codacy" --action "get_current_user"
```

## Run

```bash
oo connector run "codacy" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
