# Amara · `fetch_subtitles_data`

Fetch subtitle data for a specific video and language in JSON, SRT, or VTT format.

- **Service**: `amara`
- **Action**: `fetch_subtitles_data`
- **Action id**: `amara.fetch_subtitles_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "fetch_subtitles_data"
```

## Run

```bash
oo connector run "amara" --action "fetch_subtitles_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
