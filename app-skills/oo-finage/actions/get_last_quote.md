# Finage · `get_last_quote`

Get the latest Finage quote for a single U.S. stock symbol.

- **Service**: `finage`
- **Action**: `get_last_quote`
- **Action id**: `finage.get_last_quote`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "finage" --action "get_last_quote"
```

## Run

```bash
oo connector run "finage" --action "get_last_quote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
