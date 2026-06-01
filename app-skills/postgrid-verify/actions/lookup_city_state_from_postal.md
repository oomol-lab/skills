# PostGrid Verify · `lookup_city_state_from_postal`

Look up city and state or province matches for a postal or ZIP code with PostGrid Verify.

- **Service**: `postgrid_verify`
- **Action**: `lookup_city_state_from_postal`
- **Action id**: `postgrid_verify.lookup_city_state_from_postal`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postgrid_verify" --action "lookup_city_state_from_postal"
```

## Run

```bash
oo connector run "postgrid_verify" --action "lookup_city_state_from_postal" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
