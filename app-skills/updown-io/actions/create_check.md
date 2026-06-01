# updown.io · `create_check`

Create a new monitoring check in the updown.io account.

- **Service**: `updown_io`
- **Action**: `create_check`
- **Action id**: `updown_io.create_check`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "updown_io" --action "create_check"
```

## Run

```bash
oo connector run "updown_io" --action "create_check" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes updown.io state. Confirm the exact payload and intended effect with the user before running.
