# v0 · `get_version`

Get a single v0 chat version, optionally including default deployment files.

- **Service**: `v0`
- **Action**: `get_version`
- **Action id**: `v0.get_version`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_version"
```

## Run

```bash
oo connector run "v0" --action "get_version" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
