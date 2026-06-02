# Amara · `perform_subtitle_action`

Perform a subtitle workflow action such as publish, approve, or reject.

- **Service**: `amara`
- **Action**: `perform_subtitle_action`
- **Action id**: `amara.perform_subtitle_action`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "perform_subtitle_action"
```

## Run

```bash
oo connector run "amara" --action "perform_subtitle_action" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
