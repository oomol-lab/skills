# Gist · `get_gist_revision`

Get a specific revision of a GitHub gist.

- **Service**: `gist`
- **Action**: `get_gist_revision`
- **Action id**: `gist.get_gist_revision`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gist" --action "get_gist_revision"
```

## Run

```bash
oo connector run "gist" --action "get_gist_revision" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
