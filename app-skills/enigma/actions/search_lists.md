# Enigma · `search_lists`

Query user-created Enigma lists with optional name or ID filters and Relay-style pagination controls.

- **Service**: `enigma`
- **Action**: `search_lists`
- **Action id**: `enigma.search_lists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "enigma" --action "search_lists"
```

## Run

```bash
oo connector run "enigma" --action "search_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
