# Amara · `get_team_languages`

Fetch preferred and blacklisted language codes for a single Amara team.

- **Service**: `amara`
- **Action**: `get_team_languages`
- **Action id**: `amara.get_team_languages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "get_team_languages"
```

## Run

```bash
oo connector run "amara" --action "get_team_languages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
