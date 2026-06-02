# DocsAutomator · `list_automations`

List DocsAutomator automations in the current workspace with the core fields needed for document generation setup.

- **Service**: `docsautomator`
- **Action**: `list_automations`
- **Action id**: `docsautomator.list_automations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsautomator" --action "list_automations"
```

## Run

```bash
oo connector run "docsautomator" --action "list_automations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
