# MinerU · `create_extract_task`

Create a MinerU precise extraction task from a document URL.

- **Service**: `mineru`
- **Action**: `create_extract_task`
- **Action id**: `mineru.create_extract_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mineru" --action "create_extract_task"
```

## Run

```bash
oo connector run "mineru" --action "create_extract_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes MinerU state. Confirm the exact payload and intended effect with the user before running.
