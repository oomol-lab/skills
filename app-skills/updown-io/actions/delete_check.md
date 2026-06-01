# updown.io · `delete_check`

Delete a monitoring check from the updown.io account.

- **Service**: `updown_io`
- **Action**: `delete_check`
- **Action id**: `updown_io.delete_check`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "updown_io" --action "delete_check"
```

## Run

```bash
oo connector run "updown_io" --action "delete_check" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites updown.io data. Always confirm the target and get explicit user approval before running.
