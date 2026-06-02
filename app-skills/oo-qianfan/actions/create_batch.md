# Baidu Qianfan · `create_batch`

Create a Baidu Qianfan batch prediction job from an uploaded input file.

- **Service**: `qianfan`
- **Action**: `create_batch`
- **Action id**: `qianfan.create_batch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "create_batch"
```

## Run

```bash
oo connector run "qianfan" --action "create_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Baidu Qianfan state. Confirm the exact payload and intended effect with the user before running.
