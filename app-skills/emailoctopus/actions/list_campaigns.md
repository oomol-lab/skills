# EmailOctopus · `list_campaigns`

List EmailOctopus campaigns available to the current API key.

- **Service**: `emailoctopus`
- **Action**: `list_campaigns`
- **Action id**: `emailoctopus.list_campaigns`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emailoctopus" --action "list_campaigns"
```

## Run

```bash
oo connector run "emailoctopus" --action "list_campaigns" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
