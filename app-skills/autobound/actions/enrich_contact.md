# Autobound · `enrich_contact`

Enrich one contact with Autobound contact-level signals and employer context.

- **Service**: `autobound`
- **Action**: `enrich_contact`
- **Action id**: `autobound.enrich_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "autobound" --action "enrich_contact"
```

## Run

```bash
oo connector run "autobound" --action "enrich_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
