# Supabase · `create_project_api_key`

Create a publishable or secret API key for a Supabase project.

- **Service**: `supabase`
- **Action**: `create_project_api_key`
- **Action id**: `supabase.create_project_api_key`
- **Required scopes**: supabase.secrets.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supabase" --action "create_project_api_key"
```

## Run

```bash
oo connector run "supabase" --action "create_project_api_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Supabase state. Confirm the exact payload and intended effect with the user before running.
