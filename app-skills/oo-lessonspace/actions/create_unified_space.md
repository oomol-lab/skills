# Lessonspace · `create_unified_space`

Create or retrieve a Lessonspace space through the official launch endpoint and return the join URL plus room credentials.

- **Service**: `lessonspace`
- **Action**: `create_unified_space`
- **Action id**: `lessonspace.create_unified_space`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lessonspace" --action "create_unified_space"
```

## Run

```bash
oo connector run "lessonspace" --action "create_unified_space" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Lessonspace state. Confirm the exact payload and intended effect with the user before running.
