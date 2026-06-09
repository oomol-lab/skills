# OOMOL Fusion API · `doubao_stt_submit`

Convert speech to text with Doubao

- **Service**: `fusion-api`
- **Action**: `doubao_stt_submit`
- **Action id**: `fusion-api.doubao_stt_submit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "doubao_stt_submit"
```

## Run

```bash
oo connector run "fusion-api" --action "doubao_stt_submit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OOMOL Fusion API state. Confirm the exact payload and intended effect with the user before running.
