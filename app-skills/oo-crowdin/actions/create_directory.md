# Crowdin · `create_directory`

Create a Crowdin directory.

- **Service**: `crowdin`
- **Action**: `create_directory`
- **Action id**: `crowdin.create_directory`
- **Required scopes**: crowdin.source.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "crowdin" --action "create_directory"
```

## Run

```bash
oo connector run "crowdin" --action "create_directory" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Crowdin state. Confirm the exact payload and intended effect with the user before running.
