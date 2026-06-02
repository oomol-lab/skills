# Finage · `get_previous_close`

Get the previous close aggregate bar for a single Finage U.S. stock symbol.

- **Service**: `finage`
- **Action**: `get_previous_close`
- **Action id**: `finage.get_previous_close`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "finage" --action "get_previous_close"
```

## Run

```bash
oo connector run "finage" --action "get_previous_close" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Finage state. Confirm the exact payload and intended effect with the user before running.
