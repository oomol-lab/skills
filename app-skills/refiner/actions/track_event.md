# Refiner · `track_event`

Track a product event for a Refiner contact.

- **Service**: `refiner`
- **Action**: `track_event`
- **Action id**: `refiner.track_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "refiner" --action "track_event"
```

## Run

```bash
oo connector run "refiner" --action "track_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
