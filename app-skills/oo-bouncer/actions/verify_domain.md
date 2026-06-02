# Bouncer · `verify_domain`

Verify one domain with Bouncer and inspect its DNS and catch-all signals.

- **Service**: `bouncer`
- **Action**: `verify_domain`
- **Action id**: `bouncer.verify_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bouncer" --action "verify_domain"
```

## Run

```bash
oo connector run "bouncer" --action "verify_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
