# Better Proposals · `list_sent_proposals`

List Better Proposals proposals that have been sent to recipients.

- **Service**: `better_proposals`
- **Action**: `list_sent_proposals`
- **Action id**: `better_proposals.list_sent_proposals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "list_sent_proposals"
```

## Run

```bash
oo connector run "better_proposals" --action "list_sent_proposals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
