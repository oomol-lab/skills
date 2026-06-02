# Listen Notes · `get_podcast`

Get Listen Notes podcast details and one page of episodes by podcast ID.

- **Service**: `listennotes`
- **Action**: `get_podcast`
- **Action id**: `listennotes.get_podcast`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "listennotes" --action "get_podcast"
```

## Run

```bash
oo connector run "listennotes" --action "get_podcast" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
