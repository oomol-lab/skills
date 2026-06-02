# Supabase · `list_projects`

List Supabase projects visible to the authenticated account.

- **Service**: `supabase`
- **Action**: `list_projects`
- **Action id**: `supabase.list_projects`
- **Required scopes**: supabase.projects.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supabase" --action "list_projects"
```

## Run

```bash
oo connector run "supabase" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
