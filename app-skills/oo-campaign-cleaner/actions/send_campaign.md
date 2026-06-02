# Campaign Cleaner · `send_campaign`

Submit an email campaign HTML payload for Campaign Cleaner analysis and processing.

- **Service**: `campaign_cleaner`
- **Action**: `send_campaign`
- **Action id**: `campaign_cleaner.send_campaign`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "campaign_cleaner" --action "send_campaign"
```

## Run

```bash
oo connector run "campaign_cleaner" --action "send_campaign" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Campaign Cleaner state. Confirm the exact payload and intended effect with the user before running.
