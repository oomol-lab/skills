# Crowdin · `create_branch`

Create a Crowdin project branch.

- **Service**: `crowdin`
- **Action**: `create_branch`
- **Action id**: `crowdin.create_branch`
- **Required scopes**: crowdin.source.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "crowdin" --action "create_branch"
```

## Run

```bash
oo connector run "crowdin" --action "create_branch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Crowdin state. Confirm the exact payload and intended effect with the user before running.
