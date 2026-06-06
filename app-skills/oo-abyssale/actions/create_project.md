# Abyssale · `create_project`

Create an Abyssale project to organize templates and generated images.

- **Service**: `abyssale`
- **Action**: `create_project`
- **Action id**: `abyssale.create_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abyssale" --action "create_project"
```

## Run

```bash
oo connector run "abyssale" --action "create_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Abyssale state. Confirm the exact payload and intended effect with the user before running.
