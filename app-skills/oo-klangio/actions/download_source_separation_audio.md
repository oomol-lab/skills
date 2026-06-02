# Klangio · `download_source_separation_audio`

Download a Klangio source separation stem audio file and upload it to OOMOL OSS transit storage.

- **Service**: `klangio`
- **Action**: `download_source_separation_audio`
- **Action id**: `klangio.download_source_separation_audio`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "klangio" --action "download_source_separation_audio"
```

## Run

```bash
oo connector run "klangio" --action "download_source_separation_audio" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
