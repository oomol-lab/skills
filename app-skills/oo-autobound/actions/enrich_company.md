# Autobound · `enrich_company`

Enrich one company with Autobound company-level signals.

- **Service**: `autobound`
- **Action**: `enrich_company`
- **Action id**: `autobound.enrich_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "autobound" --action "enrich_company"
```

## Run

```bash
oo connector run "autobound" --action "enrich_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
