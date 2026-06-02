# Bouncer · `delete_toxicity_list_job`

Delete a Bouncer toxicity list job and its stored results.

- **Service**: `bouncer`
- **Action**: `delete_toxicity_list_job`
- **Action id**: `bouncer.delete_toxicity_list_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bouncer" --action "delete_toxicity_list_job"
```

## Run

```bash
oo connector run "bouncer" --action "delete_toxicity_list_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Bouncer data. Always confirm the target and get explicit user approval before running.
