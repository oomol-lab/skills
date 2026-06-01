# Bouncer · `create_toxicity_list_job`

Create a Bouncer toxicity list job for multiple email addresses.

- **Service**: `bouncer`
- **Action**: `create_toxicity_list_job`
- **Action id**: `bouncer.create_toxicity_list_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bouncer" --action "create_toxicity_list_job"
```

## Run

```bash
oo connector run "bouncer" --action "create_toxicity_list_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Bouncer state. Confirm the exact payload and intended effect with the user before running.
