# Supabase · `list_organizations`

List the organizations available to the authenticated Supabase account.

- **Service**: `supabase`
- **Action**: `list_organizations`
- **Action id**: `supabase.list_organizations`
- **Required scopes**: supabase.organizations.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "supabase" --action "list_organizations"
```

## Run

```bash
oo connector run "supabase" --action "list_organizations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
