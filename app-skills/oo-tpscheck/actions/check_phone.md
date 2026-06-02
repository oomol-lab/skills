# TPSCheck · `check_phone`

Check one UK phone number against TPS and CTPS and return the TPSCheck v2 response.

- **Service**: `tpscheck`
- **Action**: `check_phone`
- **Action id**: `tpscheck.check_phone`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tpscheck" --action "check_phone"
```

## Run

```bash
oo connector run "tpscheck" --action "check_phone" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
