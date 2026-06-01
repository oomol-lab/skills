# DeepL · `get_usage`

Fetch the current DeepL API usage and quota counters for the connected API key.

- **Service**: `deepl`
- **Action**: `get_usage`
- **Action id**: `deepl.get_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepl" --action "get_usage"
```

## Run

```bash
oo connector run "deepl" --action "get_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
