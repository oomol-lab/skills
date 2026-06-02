# Google Docs · `create_named_range`

Create a named range over a specific span in a Google Docs document so it can be referenced later by name or ID.

- **Service**: `googledocs`
- **Action**: `create_named_range`
- **Action id**: `googledocs.create_named_range`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "create_named_range"
```

## Run

```bash
oo connector run "googledocs" --action "create_named_range" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
