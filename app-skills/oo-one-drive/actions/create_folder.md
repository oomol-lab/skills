# OneDrive · `create_folder`

Create a folder in OneDrive.

- **Service**: `one_drive`
- **Action**: `create_folder`
- **Action id**: `one_drive.create_folder`
- **Required scopes**: one_drive.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "one_drive" --action "create_folder"
```

## Run

```bash
oo connector run "one_drive" --action "create_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OneDrive state. Confirm the exact payload and intended effect with the user before running.
