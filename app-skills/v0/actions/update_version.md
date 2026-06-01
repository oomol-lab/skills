# v0 · `update_version`

Update the files of an existing v0 chat version.

- **Service**: `v0`
- **Action**: `update_version`
- **Action id**: `v0.update_version`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "update_version"
```

## Run

```bash
oo connector run "v0" --action "update_version" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes v0 state. Confirm the exact payload and intended effect with the user before running.
