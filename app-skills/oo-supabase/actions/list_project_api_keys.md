# Supabase · `list_project_api_keys`

List API keys for a Supabase project.

- **Service**: `supabase`
- **Action**: `list_project_api_keys`
- **Action id**: `supabase.list_project_api_keys`
- **Required scopes**: supabase.secrets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supabase" --action "list_project_api_keys"
```

## Run

```bash
oo connector run "supabase" --action "list_project_api_keys" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
