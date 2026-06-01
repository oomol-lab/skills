# DocsAutomator · `get_queue_stats`

Return current DocsAutomator queue statistics for the connected workspace.

- **Service**: `docsautomator`
- **Action**: `get_queue_stats`
- **Action id**: `docsautomator.get_queue_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsautomator" --action "get_queue_stats"
```

## Run

```bash
oo connector run "docsautomator" --action "get_queue_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
