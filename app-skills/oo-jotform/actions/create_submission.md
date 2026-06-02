# Jotform · `create_submission`

Create a submission on a Jotform form using question IDs and answer values.

- **Service**: `jotform`
- **Action**: `create_submission`
- **Action id**: `jotform.create_submission`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jotform" --action "create_submission"
```

## Run

```bash
oo connector run "jotform" --action "create_submission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Jotform state. Confirm the exact payload and intended effect with the user before running.
