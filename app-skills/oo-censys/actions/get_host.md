# Censys · `get_host`

Get one Censys Global Data host asset by host ID.

- **Service**: `censys`
- **Action**: `get_host`
- **Action id**: `censys.get_host`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "censys" --action "get_host"
```

## Run

```bash
oo connector run "censys" --action "get_host" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
