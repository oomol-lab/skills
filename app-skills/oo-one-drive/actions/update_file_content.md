# OneDrive · `update_file_content`

Replace the content of one existing OneDrive file.

- **Service**: `one_drive`
- **Action**: `update_file_content`
- **Action id**: `one_drive.update_file_content`
- **Required scopes**: one_drive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "one_drive" --action "update_file_content"
```

## Run

```bash
oo connector run "one_drive" --action "update_file_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OneDrive state. Confirm the exact payload and intended effect with the user before running.
