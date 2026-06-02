# DocsAutomator · `list_template_placeholders`

List the placeholder groups extracted from a DocsAutomator Google Doc template for one automation.

- **Service**: `docsautomator`
- **Action**: `list_template_placeholders`
- **Action id**: `docsautomator.list_template_placeholders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsautomator" --action "list_template_placeholders"
```

## Run

```bash
oo connector run "docsautomator" --action "list_template_placeholders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
