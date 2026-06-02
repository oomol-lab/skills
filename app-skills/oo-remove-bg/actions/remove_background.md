# remove.bg · `remove_background`

Remove the background from an image and upload the generated result file to connector transit storage.

- **Service**: `remove_bg`
- **Action**: `remove_background`
- **Action id**: `remove_bg.remove_background`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "remove_bg" --action "remove_background"
```

## Run

```bash
oo connector run "remove_bg" --action "remove_background" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites remove.bg data. Always confirm the target and get explicit user approval before running.
