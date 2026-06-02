# Finage · `get_snapshot`

Get a Finage stock snapshot for a bounded list of U.S. stock symbols, including quotes, trades, or both.

- **Service**: `finage`
- **Action**: `get_snapshot`
- **Action id**: `finage.get_snapshot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "finage" --action "get_snapshot"
```

## Run

```bash
oo connector run "finage" --action "get_snapshot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
