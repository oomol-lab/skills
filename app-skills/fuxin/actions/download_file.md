# Foxit Cloud API · `download_file`

Download one Foxit result document and upload it to connector transit storage.

- **Service**: `fuxin`
- **Action**: `download_file`
- **Action id**: `fuxin.download_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "download_file"
```

## Run

```bash
oo connector run "fuxin" --action "download_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
