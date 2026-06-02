# Refiner · `tag_response`

Apply a tag to a Refiner response.

- **Service**: `refiner`
- **Action**: `tag_response`
- **Action id**: `refiner.tag_response`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "refiner" --action "tag_response"
```

## Run

```bash
oo connector run "refiner" --action "tag_response" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
