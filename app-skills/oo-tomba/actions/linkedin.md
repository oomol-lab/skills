# Tomba · `linkedin`

Find contact data associated with a public LinkedIn profile URL.

- **Service**: `tomba`
- **Action**: `linkedin`
- **Action id**: `tomba.linkedin`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomba" --action "linkedin"
```

## Run

```bash
oo connector run "tomba" --action "linkedin" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
