# lexoffice · `get_profile`

Retrieve the current Lexoffice connection profile and organization metadata.

- **Service**: `lexoffice`
- **Action**: `get_profile`
- **Action id**: `lexoffice.get_profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lexoffice" --action "get_profile"
```

## Run

```bash
oo connector run "lexoffice" --action "get_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
