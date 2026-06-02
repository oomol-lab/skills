# AiVOOV · `list_voices`

List available AiVOOV voices, optionally filtered by language code.

- **Service**: `aivoov`
- **Action**: `list_voices`
- **Action id**: `aivoov.list_voices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aivoov" --action "list_voices"
```

## Run

```bash
oo connector run "aivoov" --action "list_voices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
