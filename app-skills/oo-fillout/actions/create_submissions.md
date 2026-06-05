# Fillout · `create_submissions`

Create one or more submissions for a Fillout form.

- **Service**: `fillout`
- **Action**: `create_submissions`
- **Action id**: `fillout.create_submissions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fillout" --action "create_submissions"
```

## Run

```bash
oo connector run "fillout" --action "create_submissions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Fillout state. Confirm the exact payload and intended effect with the user before running.
