# ActiveCampaign · `upsert_contact`

Create or update an ActiveCampaign contact using the official contact sync endpoint.

- **Service**: `activecampaign`
- **Action**: `upsert_contact`
- **Action id**: `activecampaign.upsert_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "activecampaign" --action "upsert_contact"
```

## Run

```bash
oo connector run "activecampaign" --action "upsert_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ActiveCampaign state. Confirm the exact payload and intended effect with the user before running.
