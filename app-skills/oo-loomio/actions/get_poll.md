# Loomio · `get_poll`

Get one Loomio poll by numeric ID or poll key.

- **Service**: `loomio`
- **Action**: `get_poll`
- **Action id**: `loomio.get_poll`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "loomio" --action "get_poll"
```

## Run

```bash
oo connector run "loomio" --action "get_poll" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
