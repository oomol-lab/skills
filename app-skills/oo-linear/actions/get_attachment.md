# Linear · `get_attachment`

Retrieve a Linear attachment based on the issue and attachment ID or file name.

- **Service**: `linear`
- **Action**: `get_attachment`
- **Action id**: `linear.get_attachment`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "get_attachment"
```

## Run

```bash
oo connector run "linear" --action "get_attachment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
