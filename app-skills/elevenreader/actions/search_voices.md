# ElevenReader · `search_voices`

Search available ElevenLabs voices with pagination and filters useful for reading text aloud.

- **Service**: `elevenreader`
- **Action**: `search_voices`
- **Action id**: `elevenreader.search_voices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenreader" --action "search_voices"
```

## Run

```bash
oo connector run "elevenreader" --action "search_voices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
