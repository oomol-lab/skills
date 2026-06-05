# Dub · `retrieve_analytics`

Retrieve analytics for a Dub link, domain, or workspace.

- **Service**: `dub`
- **Action**: `retrieve_analytics`
- **Action id**: `dub.retrieve_analytics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dub" --action "retrieve_analytics"
```

## Run

```bash
oo connector run "dub" --action "retrieve_analytics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
