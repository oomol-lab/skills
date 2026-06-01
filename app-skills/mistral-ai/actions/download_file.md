# Mistral AI · `download_file`

Download the file contents and return the accessible download address via fileTransit.

- **Service**: `mistral_ai`
- **Action**: `download_file`
- **Action id**: `mistral_ai.download_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "download_file"
```

## Run

```bash
oo connector run "mistral_ai" --action "download_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
