# Gamma · `wait_for_generation`

Poll a Gamma generation job until it completes, fails, or the polling timeout is reached.

- **Service**: `gamma`
- **Action**: `wait_for_generation`
- **Action id**: `gamma.wait_for_generation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gamma" --action "wait_for_generation"
```

## Run

```bash
oo connector run "gamma" --action "wait_for_generation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
