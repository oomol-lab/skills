# Eagle Doc · `get_quota`

Fetch the overall Eagle Doc management quota summary tied to the connected API key.

- **Service**: `eagle_doc`
- **Action**: `get_quota`
- **Action id**: `eagle_doc.get_quota`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eagle_doc" --action "get_quota"
```

## Run

```bash
oo connector run "eagle_doc" --action "get_quota" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
