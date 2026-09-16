---
name: oo-kingdee
description: "Query and manage records, reports, approvals and master data in Kingdee Galaxy Enterprise (金蝶星空企业版). Use for Kingdee business tasks such as 查询销售订单、保存单据、审核、下推、分配 or finding a less-common operation and executing it through the connected account. Does not cover other Kingdee product families."
metadata:
  title: "金蝶"
  author: "OOMOL"
  version: "1.1.0"
  services: ["kingdee"]
  icon: "https://static.oomol.com/logo/third-party/kingdee.svg"
---

# 金蝶 · Kingdee Galaxy Enterprise

Requires the oo CLI, an OOMOL login and a connected Kingdee Galaxy Enterprise account. Long-tail discovery also requires local file search and public HTTPS documentation access.

Use the `kingdee` connector with the oo CLI. Connector supplies enterprise credentials and login sessions; never obtain or pass application secrets, cookies or session headers yourself. The instance must be reachable over public HTTPS; private-network instances are rejected.

## Choose the route

- Use a foundation action below when it covers the requested operation. These actions work across business objects through `formId`; a different object alone is not a reason to use proxy.
- If the object's FormId or business fields are unknown, use the bundled index and official-document lookup below, then return to the matching action.
- Use **proxy** for a documented operation not covered by those actions, such as a form-specific general operation or custom business service. Do not invent an endpoint from a Chinese operation name.
- For another Kingdee product family, state this skill's scope before trying Galaxy Enterprise endpoints.

Assume oo is installed, signed in and connected. Use setup only after a matching connection failure. Preserve the user's selected connection/team; inspect `oo connector apps kingdee --json` when connection selection is actually needed.

## Foundation actions

| Action | Purpose | Effect |
| --- | --- | --- |
| `query_records` | Query fields, filters and row pagination | read |
| `get_record` | View a record by ID or number | read |
| `query_report` | Query a report with form-specific filters | read |
| `save_record` | Save or update a record | destructive |
| `batch_save_records` | Save or update multiple records | destructive |
| `draft_record` | Save or overwrite a draft | destructive |
| `submit_records` | Submit records | write |
| `audit_records` | Audit records | write |
| `unaudit_records` | Reverse audit status | destructive |
| `delete_records` | Delete records | destructive |
| `push_records` | Generate target records through conversion | write |
| `allocate_records` | Allocate master data to organizations | write |

Inspect the live schema before constructing input:

```bash
oo connector schema "kingdee" --action "query_records"
oo connector run "kingdee" --action "query_records" --data @action-input.json --json
```

Actions accept `{ "formId": "...", "data": { ... } }`. Keep official business-field casing inside `data`; Connector serializes it internally. `Model` fields and object-specific keys come from the selected object's documentation, not its Chinese display name. For example, a sales-order query input is:

```json
{
  "formId": "SAL_SaleOrder",
  "data": { "FieldKeys": "FID,FBillNo", "StartRow": 0, "Limit": 20 }
}
```

Action JSON output is under `response.data`; execution ID is `response.meta.executionId`. Queries return `rows` and `fieldKeys`, views return `record` and `result`, reports return `result`. Mutations return `success`, `partialSuccess`, `errors`, `successfulEntities` and `result`: inspect them before reporting completion. Never repeat an entire partially successful batch without identifying which items failed.

## Find an object or long-tail operation

1. Search [references/api-index.jsonl](references/api-index.jsonl) by the user's business-object name. Resolve the path relative to this installed skill directory, not the user's project. With that directory as the working directory:

   ```bash
   rg -n -F '"object":"应收调汇单"' references/api-index.jsonl
   ```

   If exact search misses, use a shorter Chinese keyword and examine the returned `domain`, `module`, and `object`. Do not read the entire index into context or select the first ambiguous match. If `rg` is unavailable, use an available local text search or JSONL reader.
2. Select an operation actually present in the chosen row's `operations`. Preserve `apiInfoId` and `catalogNodeId` as strings; neither is a FormId. If the requested operation is absent, report that gap instead of inventing support.
3. Read [references/proxy-reference.md](references/proxy-reference.md) for the official documentation URLs. Fetch the selected operation's detail first, then its request fields and only the examples or response fields needed for this task. Verify object identity, operation code and version before using its fields.
4. Use the appropriate foundation action if available. Otherwise follow the reference's standard, special or general-operation request rule; separately verify any custom service URL.
5. Write the complete proxy request to `proxy-request.json`, then execute only the authorized operation:

   ```bash
   oo connector proxy "kingdee" --data @proxy-request.json --json
   ```

   The file contains `endpoint`, `method` and the actual upstream `body`. It is not an action input. For the named-parameter format, inner `body.data` is serialized exactly once; do not serialize an existing string again.
6. For proxy, inspect `response.data.status` and then **`response.data.data`**, the Kingdee payload. A successful CLI invocation or HTTP 200 alone does not prove business success. Apply the reference's query-error and partial-success rules.

The bundled index is a 2026-09-15 snapshot with 1,076 object rows and 7,881 unique operation IDs. It is a discovery aid, not proof that an operation is enabled in the user's instance. If documentation identity/version conflicts with the index, stop using that entry and resolve the discrepancy. Public documentation access is separate from authenticated business execution.

## Execution boundaries

- Read requests may proceed within the user's task. For writes, establish the exact target and intended effect; destructive operations require explicit authorization. Reuse authorization already given for that operation instead of asking repeatedly.
- Classify proxy calls by the documented business effect, not HTTP method. A POST can query, approve or delete. If the effect is unclear, resolve it before execution.
- Each action/proxy call gets a fresh login session. `SwitchOrg` followed by another call does not carry session state forward; use documented per-operation organization fields. Organization IDs are distinct from data-center IDs.
- On timeout or network interruption, a write may already have occurred. Do not retry it automatically; use known record identifiers to reconcile state first.
- Keep documentation requests anonymous. Never send enterprise credentials to the documentation host or use proxy to call login endpoints.
- Real enterprise end-to-end behavior has not been validated by this skill's authoring checks. Do not claim a tenant is working until its own result confirms it.

## Setup and failures

- If oo is missing, follow the [official installation guide](https://cli.oomol.com/install-guide.md).
- If OOMOL login is missing, run `oo auth login`.
- For `app_not_found`, `app_not_ready`, `credential_expired` or `scope_missing`, use the [Kingdee connection page](https://console.oomol.com/app-connections?provider=kingdee). The connection uses custom credentials configured by the user in their enterprise system.
- Preserve ambiguous HTTP 401/403 and business errors as reported; do not conclude that the application secret expired from HTTP status alone.
- Stop on HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`; the user can recharge at `https://console.oomol.com/billing/token-recharge`.
- If the selected documentation is unavailable, report the missing contract. Do not guess fields, enumerate documentation IDs or fetch all operations.

## References

- [Business operation index](references/api-index.jsonl): search when identifying an object or operation.
- [Documentation lookup, proxy formatting and result handling](references/proxy-reference.md): read for contract lookup or proxy execution.
- [Official third-party authorization setup](https://open.kingdee.com/K3Cloud/Open/ApiCenterReportDetail.aspx).
