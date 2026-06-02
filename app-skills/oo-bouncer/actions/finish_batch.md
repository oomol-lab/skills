# Bouncer · `finish_batch`

Request early completion for a Bouncer batch verification request.

- **Service**: `bouncer`
- **Action**: `finish_batch`
- **Action id**: `bouncer.finish_batch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bouncer" --action "finish_batch"
```

## Run

```bash
oo connector run "bouncer" --action "finish_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
