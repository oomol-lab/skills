# SmugMug · `get_album`

Retrieve a SmugMug album by album key.

- **Service**: `smugmug`
- **Action**: `get_album`
- **Action id**: `smugmug.get_album`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_album"
```

## Run

```bash
oo connector run "smugmug" --action "get_album" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
