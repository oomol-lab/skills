# Metaso · `read_webpage`

Read one webpage with Metaso and return either the extracted markdown string or the structured JSON payload.

- **Service**: `metaso`
- **Action**: `read_webpage`
- **Action id**: `metaso.read_webpage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "metaso" --action "read_webpage"
```

## Run

```bash
oo connector run "metaso" --action "read_webpage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
