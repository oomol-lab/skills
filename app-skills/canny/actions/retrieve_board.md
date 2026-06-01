# Canny · `retrieve_board`

Retrieve a single Canny board by board ID.

- **Service**: `canny`
- **Action**: `retrieve_board`
- **Action id**: `canny.retrieve_board`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canny" --action "retrieve_board"
```

## Run

```bash
oo connector run "canny" --action "retrieve_board" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
