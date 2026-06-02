# VirusTotal · `add_vote`

Submit a harmless or malicious vote for a VirusTotal file, URL, domain, or IP.

- **Service**: `virustotal`
- **Action**: `add_vote`
- **Action id**: `virustotal.add_vote`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "add_vote"
```

## Run

```bash
oo connector run "virustotal" --action "add_vote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes VirusTotal state. Confirm the exact payload and intended effect with the user before running.
