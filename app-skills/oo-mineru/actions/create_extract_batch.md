# MinerU · `create_extract_batch`

Create a MinerU precise extraction batch from document URLs.

- **Service**: `mineru`
- **Action**: `create_extract_batch`
- **Action id**: `mineru.create_extract_batch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mineru" --action "create_extract_batch"
```

## Run

```bash
oo connector run "mineru" --action "create_extract_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes MinerU state. Confirm the exact payload and intended effect with the user before running.
