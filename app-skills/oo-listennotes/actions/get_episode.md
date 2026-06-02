# Listen Notes · `get_episode`

Get Listen Notes episode details by episode ID.

- **Service**: `listennotes`
- **Action**: `get_episode`
- **Action id**: `listennotes.get_episode`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "listennotes" --action "get_episode"
```

## Run

```bash
oo connector run "listennotes" --action "get_episode" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
