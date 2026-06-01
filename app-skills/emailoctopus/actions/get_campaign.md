# EmailOctopus · `get_campaign`

Fetch a single EmailOctopus campaign by ID.

- **Service**: `emailoctopus`
- **Action**: `get_campaign`
- **Action id**: `emailoctopus.get_campaign`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emailoctopus" --action "get_campaign"
```

## Run

```bash
oo connector run "emailoctopus" --action "get_campaign" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
