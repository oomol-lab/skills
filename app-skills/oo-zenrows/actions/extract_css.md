# ZenRows · `extract_css`

Extract structured values from one public URL with ZenRows CSS selectors.

- **Service**: `zenrows`
- **Action**: `extract_css`
- **Action id**: `zenrows.extract_css`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zenrows" --action "extract_css"
```

## Run

```bash
oo connector run "zenrows" --action "extract_css" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
