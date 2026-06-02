# TextRazor · `custom_classifier_manager`

Manage TextRazor custom classifier categories, including upload, listing, retrieval, and deletion.

- **Service**: `textrazor`
- **Action**: `custom_classifier_manager`
- **Action id**: `textrazor.custom_classifier_manager`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "textrazor" --action "custom_classifier_manager"
```

## Run

```bash
oo connector run "textrazor" --action "custom_classifier_manager" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
