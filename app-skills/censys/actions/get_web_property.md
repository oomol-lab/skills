# Censys · `get_web_property`

Get one Censys Global Data web property asset by web property ID.

- **Service**: `censys`
- **Action**: `get_web_property`
- **Action id**: `censys.get_web_property`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "censys" --action "get_web_property"
```

## Run

```bash
oo connector run "censys" --action "get_web_property" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
