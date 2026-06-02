# MetatextAI · `create_policy`

Create one guardrail policy for the connected MetatextAI application.

- **Service**: `metatextai`
- **Action**: `create_policy`
- **Action id**: `metatextai.create_policy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "metatextai" --action "create_policy"
```

## Run

```bash
oo connector run "metatextai" --action "create_policy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes MetatextAI state. Confirm the exact payload and intended effect with the user before running.
