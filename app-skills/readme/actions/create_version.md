# ReadMe · `create_version`

Create a new ReadMe project version from an existing base version.

- **Service**: `readme`
- **Action**: `create_version`
- **Action id**: `readme.create_version`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "create_version"
```

## Run

```bash
oo connector run "readme" --action "create_version" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ReadMe state. Confirm the exact payload and intended effect with the user before running.
