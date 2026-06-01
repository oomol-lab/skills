# V2EX · `set_topic_sticky`

Set one of the authenticated member's V2EX topics as sticky.

- **Service**: `v2ex`
- **Action**: `set_topic_sticky`
- **Action id**: `v2ex.set_topic_sticky`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v2ex" --action "set_topic_sticky"
```

## Run

```bash
oo connector run "v2ex" --action "set_topic_sticky" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes V2EX state. Confirm the exact payload and intended effect with the user before running.
