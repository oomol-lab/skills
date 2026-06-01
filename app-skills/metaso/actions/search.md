# Metaso · `search`

Search webpages, documents, papers, images, videos, or podcasts with the Metaso search API.

- **Service**: `metaso`
- **Action**: `search`
- **Action id**: `metaso.search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "metaso" --action "search"
```

## Run

```bash
oo connector run "metaso" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
