# Crustdata · `identify_companies`

Resolve companies from domains, profile URLs, names, or Crustdata company IDs and return ranked matches.

- **Service**: `crustdata`
- **Action**: `identify_companies`
- **Action id**: `crustdata.identify_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "crustdata" --action "identify_companies"
```

## Run

```bash
oo connector run "crustdata" --action "identify_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
