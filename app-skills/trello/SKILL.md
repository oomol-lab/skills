---
name: trello
description: "Trello (trello.com). Use this skill for ANY Trello request — reading, creating, updating, and deleting data. Whenever a task involves Trello, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Trello"
  author: "OOMOL"
  version: "1.0.0"
  service: "trello"
  categories: "Productivity"
  homepage: "https://trello.com"
  icon: "https://static.oomol.com/logo/third-party/trello.svg"
---

# Trello

Operate **Trello** through your OOMOL-connected account. This skill calls the `trello` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Productivity. Exposes 28 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Trello. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "trello" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "trello" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_card_attachment_url`](actions/add_card_attachment_url.md) — Attach an external URL to a Trello card.
- [`add_card_comment`](actions/add_card_comment.md) — Add a comment action to a Trello card.
- [`add_card_label`](actions/add_card_label.md) — Add a Trello label to a card.
- [`add_card_member`](actions/add_card_member.md) — Assign a Trello member to a card.
- [`add_checkitem`](actions/add_checkitem.md) — Add a check item to a Trello checklist.
- [`archive_card`](actions/archive_card.md) — Archive a Trello card.
- [`archive_list`](actions/archive_list.md) — Archive a Trello list.
- [`create_board`](actions/create_board.md) — Create a Trello board.
- [`create_card`](actions/create_card.md) — Create a Trello card in a list.
- [`create_checklist`](actions/create_checklist.md) — Create a Trello checklist on a card.
- [`create_list`](actions/create_list.md) — Create a Trello list on a board.
- [`get_board`](actions/get_board.md) — Get a Trello board by ID.
- [`get_card`](actions/get_card.md) — Get a Trello card by ID or short link.
- [`get_member`](actions/get_member.md) — Get a Trello member, defaulting to the authenticated member.
- [`list_board_cards`](actions/list_board_cards.md) — List Trello cards on a board.
- [`list_board_labels`](actions/list_board_labels.md) — List Trello labels on a board.
- [`list_board_lists`](actions/list_board_lists.md) — List Trello lists on a board.
- [`list_board_members`](actions/list_board_members.md) — List Trello members on a board.
- [`list_card_checklists`](actions/list_card_checklists.md) — List Trello checklists on a card.
- [`list_card_comments`](actions/list_card_comments.md) — List comment actions on a Trello card.
- [`list_member_boards`](actions/list_member_boards.md) — List Trello boards visible to a member.
- [`move_card`](actions/move_card.md) — Move a Trello card to another list.
- [`remove_card_label`](actions/remove_card_label.md) — Remove a Trello label from a card.
- [`remove_card_member`](actions/remove_card_member.md) — Remove a Trello member from a card.
- [`search`](actions/search.md) — Search Trello cards, boards, members, and organizations.
- [`update_card`](actions/update_card.md) — Update a Trello card by ID or short link.
- [`update_checkitem_state`](actions/update_checkitem_state.md) — Update a Trello check item state on a card.
- [`update_list`](actions/update_list.md) — Update a Trello list name or position.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Trello state — confirm the exact payload and effect with the user before running.**
- **Delete or remove actions are destructive — always confirm the target and get explicit approval first.**

## First-time setup

These are **one-time** steps — do not repeat them on every call. Run a step only when a command fails for the matching reason.

- **`oo: command not found`** — install the oo CLI (other platforms: <https://cli.oomol.com/install-guide.md>):

  ```bash
  curl -fsSL https://cli.oomol.com/install.sh | bash    # macOS / Linux
  ```

  ```powershell
  irm https://cli.oomol.com/install.ps1 | iex           # Windows PowerShell
  ```

- **Not signed in / authentication error** — sign in to your OOMOL account once:

  ```bash
  oo auth login
  ```

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Trello is not connected, or the connection expired or lacks a scope. Connect once (auth type: custom credential) at:

  ```text
  https://console.oomol.com/app-connections?provider=trello
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Trello homepage: https://trello.com
