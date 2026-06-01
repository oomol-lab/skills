# Twitter · `create_compliance_job`

Create a compliance job using app-only auth.

- **Service**: `twitter`
- **Action**: `create_compliance_job`
- **Action id**: `twitter.create_compliance_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "create_compliance_job"
```

## Run

```bash
oo connector run "twitter" --action "create_compliance_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
