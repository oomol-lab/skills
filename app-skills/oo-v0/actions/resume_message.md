# v0 · `resume_message`

Resume a previously asynchronous v0 message generation.

- **Service**: `v0`
- **Action**: `resume_message`
- **Action id**: `v0.resume_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "resume_message"
```

## Run

```bash
oo connector run "v0" --action "resume_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
