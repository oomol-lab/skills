# Codemagic · `create_build`

Start a new Codemagic build for the specified app and workflow.

- **Service**: `codemagic`
- **Action**: `create_build`
- **Action id**: `codemagic.create_build`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codemagic" --action "create_build"
```

## Run

```bash
oo connector run "codemagic" --action "create_build" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Codemagic state. Confirm the exact payload and intended effect with the user before running.
