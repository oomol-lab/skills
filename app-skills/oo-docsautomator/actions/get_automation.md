# DocsAutomator · `get_automation`

Get one DocsAutomator automation by automationId or docId and return its current generation-related settings.

- **Service**: `docsautomator`
- **Action**: `get_automation`
- **Action id**: `docsautomator.get_automation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsautomator" --action "get_automation"
```

## Run

```bash
oo connector run "docsautomator" --action "get_automation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
