# Strava · `export_route_tcx`

Export TCX content for a specified Strava route.

- **Service**: `strava`
- **Action**: `export_route_tcx`
- **Action id**: `strava.export_route_tcx`
- **Required scopes**: strava.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "strava" --action "export_route_tcx"
```

## Run

```bash
oo connector run "strava" --action "export_route_tcx" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
