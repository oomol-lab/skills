# SunoAPI · `boost_music_style`

Boost a SunoAPI style prompt and return the generated style text.

- **Service**: `sunoapi`
- **Action**: `boost_music_style`
- **Action id**: `sunoapi.boost_music_style`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "boost_music_style"
```

## Run

```bash
oo connector run "sunoapi" --action "boost_music_style" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
