# Dub · `list_links`

List short links in the authenticated Dub workspace.

- **Service**: `dub`
- **Action**: `list_links`
- **Action id**: `dub.list_links`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dub" --action "list_links"
```

## Run

```bash
oo connector run "dub" --action "list_links" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
