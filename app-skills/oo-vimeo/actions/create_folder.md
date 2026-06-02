# Vimeo · `create_folder`

Create a Vimeo folder for the authenticated user or a specified Vimeo user.

- **Service**: `vimeo`
- **Action**: `create_folder`
- **Action id**: `vimeo.create_folder`
- **Required scopes**: vimeo.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "create_folder"
```

## Run

```bash
oo connector run "vimeo" --action "create_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vimeo state. Confirm the exact payload and intended effect with the user before running.
