# Vercel · `add_project_domain`

Add a domain to a Vercel project.

- **Service**: `vercel`
- **Action**: `add_project_domain`
- **Action id**: `vercel.add_project_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "add_project_domain"
```

## Run

```bash
oo connector run "vercel" --action "add_project_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vercel state. Confirm the exact payload and intended effect with the user before running.
