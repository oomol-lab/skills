# Supabase · `get_project`

Get detailed metadata for a Supabase project by project ref.

- **Service**: `supabase`
- **Action**: `get_project`
- **Action id**: `supabase.get_project`
- **Required scopes**: supabase.projects.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supabase" --action "get_project"
```

## Run

```bash
oo connector run "supabase" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
