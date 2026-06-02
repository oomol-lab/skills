# Censys · `get_certificate`

Get one Censys Global Data certificate asset by certificate ID.

- **Service**: `censys`
- **Action**: `get_certificate`
- **Action id**: `censys.get_certificate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "censys" --action "get_certificate"
```

## Run

```bash
oo connector run "censys" --action "get_certificate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
