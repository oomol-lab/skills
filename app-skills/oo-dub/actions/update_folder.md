# Dub · `update_folder`

Update a folder in the authenticated Dub workspace.

- **Service**: `dub`
- **Action**: `update_folder`
- **Action id**: `dub.update_folder`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dub" --action "update_folder"
```

## Run

```bash
oo connector run "dub" --action "update_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Dub state. Confirm the exact payload and intended effect with the user before running.
