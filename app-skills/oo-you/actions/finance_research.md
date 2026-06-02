# You.com · `finance_research`

Generate a cited finance-grade answer with the You.com Finance Research API.

- **Service**: `you`
- **Action**: `finance_research`
- **Action id**: `you.finance_research`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "you" --action "finance_research"
```

## Run

```bash
oo connector run "you" --action "finance_research" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
