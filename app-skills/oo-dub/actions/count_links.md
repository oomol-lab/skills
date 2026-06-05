# Dub · `count_links`

Retrieve the number of matching links in the authenticated Dub workspace.

- **Service**: `dub`
- **Action**: `count_links`
- **Action id**: `dub.count_links`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dub" --action "count_links"
```

## Run

```bash
oo connector run "dub" --action "count_links" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
