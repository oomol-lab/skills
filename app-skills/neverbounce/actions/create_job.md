# NeverBounce · `create_job`

Create a NeverBounce bulk verification job from a remote file or supplied rows.

- **Service**: `neverbounce`
- **Action**: `create_job`
- **Action id**: `neverbounce.create_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neverbounce" --action "create_job"
```

## Run

```bash
oo connector run "neverbounce" --action "create_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes NeverBounce state. Confirm the exact payload and intended effect with the user before running.
