# Supabase · `get_project_api_key`

Get one API key record from a Supabase project.

- **Service**: `supabase`
- **Action**: `get_project_api_key`
- **Action id**: `supabase.get_project_api_key`
- **Required scopes**: supabase.secrets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supabase" --action "get_project_api_key"
```

## Run

```bash
oo connector run "supabase" --action "get_project_api_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
