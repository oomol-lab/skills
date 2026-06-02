# Roboflow · `get_version`

Read one Roboflow project version and return training/export metadata.

- **Service**: `roboflow`
- **Action**: `get_version`
- **Action id**: `roboflow.get_version`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "roboflow" --action "get_version"
```

## Run

```bash
oo connector run "roboflow" --action "get_version" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
