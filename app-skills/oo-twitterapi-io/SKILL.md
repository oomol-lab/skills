---
name: oo-twitterapi-io
description: "TwitterAPI.io (twitterapi.io). Use this skill for ANY TwitterAPI.io request — reading, creating, updating, and deleting data. Whenever a task involves TwitterAPI.io, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "TwitterAPI.io"
  author: "OOMOL"
  version: "1.0.0"
  service: "twitterapi_io"
  categories: "Social, Data & Analytics"
  homepage: "https://twitterapi.io"
  icon: "https://static.oomol.com/logo/third-party/twitterapi_io.svg"
---

# TwitterAPI.io

Operate **TwitterAPI.io** through your OOMOL-connected account. This skill calls the `twitterapi_io` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Social, Data & Analytics. Exposes 39 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected TwitterAPI.io. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "twitterapi_io" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "twitterapi_io" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_monitored_tweet_user`](actions/add_monitored_tweet_user.md) — Add an X user to real-time Tweet monitoring.
- [`add_tweet_filter_rule`](actions/add_tweet_filter_rule.md) — Add a Webhook/WebSocket tweet filter rule.
- [`advanced_search_tweets`](actions/advanced_search_tweets.md) — Run an advanced Twitter search query.
- [`batch_get_users`](actions/batch_get_users.md) — Retrieve multiple X user profiles by user ID.
- [`check_follow_relationship`](actions/check_follow_relationship.md) — Check whether one X user follows or is followed by another user.
- [`delete_tweet_filter_rule`](actions/delete_tweet_filter_rule.md) — Delete a Webhook/WebSocket tweet filter rule.
- [`get_account_info`](actions/get_account_info.md) — Retrieve twitterapi.io account credit information for the API key.
- [`get_article`](actions/get_article.md) — Retrieve an X article by Tweet ID.
- [`get_community_info`](actions/get_community_info.md) — Retrieve information about an X Community.
- [`get_community_members`](actions/get_community_members.md) — Retrieve members of an X Community.
- [`get_community_moderators`](actions/get_community_moderators.md) — Retrieve moderators of an X Community.
- [`get_community_tweets`](actions/get_community_tweets.md) — Retrieve Tweets from an X Community.
- [`get_list_followers`](actions/get_list_followers.md) — Retrieve followers of an X List.
- [`get_list_members`](actions/get_list_members.md) — Retrieve members of an X List.
- [`get_list_timeline`](actions/get_list_timeline.md) — Retrieve timeline Tweets from an X List.
- [`get_list_tweets`](actions/get_list_tweets.md) — Retrieve Tweets from an X List.
- [`get_space`](actions/get_space.md) — Retrieve details for an X Space.
- [`get_trends`](actions/get_trends.md) — Retrieve X trends for a WOEID location.
- [`get_tweet_quotes`](actions/get_tweet_quotes.md) — Retrieve quote Tweets for a Tweet.
- [`get_tweet_replies`](actions/get_tweet_replies.md) — Retrieve replies to a Tweet with twitterapi.io V2 sorting.
- [`get_tweet_replies_legacy`](actions/get_tweet_replies_legacy.md) — Retrieve replies to an original Tweet with the legacy replies endpoint.
- [`get_tweet_retweeters`](actions/get_tweet_retweeters.md) — Retrieve users who retweeted a Tweet.
- [`get_tweet_thread_context`](actions/get_tweet_thread_context.md) — Retrieve the conversation context around a Tweet.
- [`get_tweets`](actions/get_tweets.md) — Retrieve Tweets by Tweet IDs.
- [`get_user`](actions/get_user.md) — Retrieve an X user profile by screen name.
- [`get_user_about`](actions/get_user_about.md) — Retrieve the X About profile information for a screen name.
- [`get_user_follower_ids`](actions/get_user_follower_ids.md) — Retrieve follower IDs for a user by user ID or screen name.
- [`get_user_followers`](actions/get_user_followers.md) — Retrieve followers for a user by screen name.
- [`get_user_followings`](actions/get_user_followings.md) — Retrieve users followed by a screen name.
- [`get_user_last_tweets`](actions/get_user_last_tweets.md) — Retrieve the latest Tweets from a user by user ID or screen name.
- [`get_user_mentions`](actions/get_user_mentions.md) — Retrieve Tweets mentioning a user.
- [`get_user_timeline`](actions/get_user_timeline.md) — Retrieve a user's profile timeline by user ID.
- [`get_user_verified_followers`](actions/get_user_verified_followers.md) — Retrieve verified followers for a user by user ID.
- [`list_monitored_tweet_users`](actions/list_monitored_tweet_users.md) — List X users monitored for real-time Tweets.
- [`list_tweet_filter_rules`](actions/list_tweet_filter_rules.md) — List Webhook/WebSocket tweet filter rules configured for the API key.
- [`remove_monitored_tweet_user`](actions/remove_monitored_tweet_user.md) — Remove an X user from real-time Tweet monitoring.
- [`search_all_community_tweets`](actions/search_all_community_tweets.md) — Search Tweets from all X Communities by keyword.
- [`search_users`](actions/search_users.md) — Search X users by keyword.
- [`update_tweet_filter_rule`](actions/update_tweet_filter_rule.md) — Update a Webhook/WebSocket tweet filter rule.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change TwitterAPI.io state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — TwitterAPI.io is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=twitterapi_io
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- TwitterAPI.io homepage: https://twitterapi.io
