# Tisane · `extract_text`

Remove markup such as HTML, CSS, JavaScript, or JSON from UTF-8 text and return plain decoded text.

- **Service**: `tisane`
- **Action**: `extract_text`
- **Action id**: `tisane.extract_text`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tisane" --action "extract_text"
```

## Run

```bash
oo connector run "tisane" --action "extract_text" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
