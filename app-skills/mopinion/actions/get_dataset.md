# Mopinion · `get_dataset`

Fetch basic metadata for one Mopinion dataset or feedback form.

- **Service**: `mopinion`
- **Action**: `get_dataset`
- **Action id**: `mopinion.get_dataset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mopinion" --action "get_dataset"
```

## Run

```bash
oo connector run "mopinion" --action "get_dataset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
