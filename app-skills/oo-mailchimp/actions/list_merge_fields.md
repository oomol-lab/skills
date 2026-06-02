# Mailchimp · `list_merge_fields`

List merge fields defined for a Mailchimp audience/list.

- **Service**: `mailchimp`
- **Action**: `list_merge_fields`
- **Action id**: `mailchimp.list_merge_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailchimp" --action "list_merge_fields"
```

## Run

```bash
oo connector run "mailchimp" --action "list_merge_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailchimp state. Confirm the exact payload and intended effect with the user before running.
