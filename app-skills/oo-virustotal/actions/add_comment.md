# VirusTotal · `add_comment`

Add a community comment to a file, URL, domain, or IP address in VirusTotal.

- **Service**: `virustotal`
- **Action**: `add_comment`
- **Action id**: `virustotal.add_comment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "add_comment"
```

## Run

```bash
oo connector run "virustotal" --action "add_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes VirusTotal state. Confirm the exact payload and intended effect with the user before running.
