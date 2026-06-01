# Ticketmaster · `execute_season_ticketing_command`

Execute a Ticketmaster Season Ticketing command and optionally poll until the command finishes.

- **Service**: `ticketmaster`
- **Action**: `execute_season_ticketing_command`
- **Action id**: `ticketmaster.execute_season_ticketing_command`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticketmaster" --action "execute_season_ticketing_command"
```

## Run

```bash
oo connector run "ticketmaster" --action "execute_season_ticketing_command" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
