# HeyGen · `list_voices`

List HeyGen voices available for video narration.

- **Service**: `heygen`
- **Action**: `list_voices`
- **Action id**: `heygen.list_voices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "list_voices"
```

## Run

```bash
oo connector run "heygen" --action "list_voices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
