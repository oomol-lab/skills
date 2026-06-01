# Canva · `create_folder`

Create a Canva folder at the top level, in uploads, or inside another folder.

- **Service**: `canva`
- **Action**: `create_folder`
- **Action id**: `canva.create_folder`
- **Required scopes**: canva.folder.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canva" --action "create_folder"
```

## Run

```bash
oo connector run "canva" --action "create_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Canva state. Confirm the exact payload and intended effect with the user before running.
