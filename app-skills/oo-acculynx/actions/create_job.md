# AccuLynx · `create_job`

Create one new job in the AccuLynx Lead milestone.

- **Service**: `acculynx`
- **Action**: `create_job`
- **Action id**: `acculynx.create_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "acculynx" --action "create_job"
```

## Run

```bash
oo connector run "acculynx" --action "create_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AccuLynx state. Confirm the exact payload and intended effect with the user before running.
