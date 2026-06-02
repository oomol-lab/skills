# You.com · `research`

Generate a cited research answer with the You.com Research API.

- **Service**: `you`
- **Action**: `research`
- **Action id**: `you.research`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "you" --action "research"
```

## Run

```bash
oo connector run "you" --action "research" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
