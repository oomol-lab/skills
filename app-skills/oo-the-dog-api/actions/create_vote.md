# The Dog API · `create_vote`

Create one dog image vote.

- **Service**: `the_dog_api`
- **Action**: `create_vote`
- **Action id**: `the_dog_api.create_vote`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "the_dog_api" --action "create_vote"
```

## Run

```bash
oo connector run "the_dog_api" --action "create_vote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes The Dog API state. Confirm the exact payload and intended effect with the user before running.
