# TwitterAPI.io · `check_follow_relationship`

Check whether one X user follows or is followed by another user.

- **Service**: `twitterapi_io`
- **Action**: `check_follow_relationship`
- **Action id**: `twitterapi_io.check_follow_relationship`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitterapi_io" --action "check_follow_relationship"
```

## Run

```bash
oo connector run "twitterapi_io" --action "check_follow_relationship" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
