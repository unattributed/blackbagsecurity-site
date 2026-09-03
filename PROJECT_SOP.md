# Black Bag Security Website Project SOP

This file defines repository-level operating rules for development, artifact delivery, preview deployment, and operator-facing instructions for the Black Bag Security website project.

## Operator filesystem boundary

Assistant/runtime filesystem paths are implementation-internal only. They must never be embedded into operator-facing bundles, scripts, commands, README instructions, configuration, manifests, or documentation.

### Prohibited paths

The following are forbidden in any operator-facing artifact or instruction unless the operator explicitly states that the path exists on their own system:

- `/mnt/data`
- `sandbox:/mnt/data`
- `/home/oai`
- any other ChatGPT, container, notebook, sandbox, or assistant-runtime-only path

The assistant may use such paths internally while creating an artifact, but the generated artifact must not depend on them and must not expose them as executable paths.

### Required operator paths

Use only paths that are valid on the operator's real system, including:

- `$HOME`
- `~/Downloads`
- repository-relative paths
- paths explicitly supplied by the operator
- portable temporary paths created at runtime with tools such as `mktemp`

If the operator supplies a path, preserve it exactly unless a change is required and explicitly explained.

### Bundle construction rule

Every operator-delivered bundle must be self-contained. A bundle may be created inside an assistant runtime, but after extraction on the operator's workstation it must run without access to the assistant runtime filesystem.

Before delivery, inspect the complete bundle contents and scripts for leaked runtime paths. At minimum, validation must reject references to:

```text
/mnt/data
sandbox:/mnt/data
/home/oai
```

A bundle that contains any prohibited runtime path is not ready for delivery.

### On-screen command rule

Commands shown to the operator must reference only operator-real paths. Do not tell the operator to `cd`, read, copy, verify, execute, or extract from an assistant-runtime path.

The ChatGPT artifact transfer link is separate from the command that the operator runs. After the user downloads the file, commands must use the user's actual destination, normally `$HOME/Downloads` or another explicit operator-supplied path.

Every complete operator Bash block must begin with literal `clear`.

### Terminal persistence rule

Operator-facing commands and launchers must not close the terminal window automatically, whether the operation succeeds or fails.

This rule applies to:

- pasteable Bash blocks,
- scripts intended to be launched from a desktop shortcut or terminal launcher,
- installer wrappers,
- validation commands,
- Git commit and push workflows.

A complete operator command must preserve access to the terminal after every success and failure path so the operator can read the final output, copy evidence, inspect errors, and continue working.

Do not rely on terminal-emulator configuration such as `hold`, `--wait`, or profile-specific behavior. Terminal persistence must be implemented by the delivered command or launcher itself.

For a complete pasteable Bash block, the preferred pattern is:

1. start with literal `clear`,
2. run strict work inside a subshell or function,
3. capture the return code outside that strict execution scope,
4. print an explicit final PASS or FAIL state,
5. replace the command shell with an interactive shell using `exec "${SHELL:-/bin/bash}" -i`.

Example structure:

```bash
clear
set +e
(
  set -euo pipefail
  # bounded work here
)
RC=$?

echo
if [ "$RC" -eq 0 ]; then
  echo "OPERATION=PASS"
else
  echo "OPERATION=FAIL"
  echo "return_code=$RC"
fi

echo "Terminal remains open for review."
exec "${SHELL:-/bin/bash}" -i
```

Do not place an unguarded top-level `set -euo pipefail` in an operator-facing block when an error could terminate a launcher-owned shell before the operator can review the failure.

An inner script may use `exit` or strict Bash behavior as needed, but the operator-facing wrapper that launches it must preserve the terminal after the inner script returns.

A command that can terminate the terminal window on success or failure is not ready for operator delivery.

### Failure behavior

If an artifact was generated with a prohibited runtime path or a command was delivered without terminal persistence:

1. Do not ask the operator to adapt the invalid delivery manually.
2. Rebuild or correct the artifact or command.
3. Re-run bundle-content and operator-command validation.
4. Provide a corrected bundle, sidecar, and complete command when applicable.
5. Treat the original delivery as superseded.

## Artifact delivery standard

Reusable development deliveries should use:

1. a `.tar.gz` bundle,
2. a portable `.tar.gz.sha256` sidecar containing the archive basename only,
3. one complete pasteable Bash command,
4. SHA-256 verification before extraction or execution,
5. explicit PASS/FAIL gates,
6. terminal persistence after success and failure,
7. signed Git commit checkpoints when repository changes are committed by the operator.

Before delivery, validate both the bundle contents and the complete on-screen command against this SOP.

## Repository and preview separation

- `unattributed/blackbagsecurity.github.io` is the authoritative website source repository.
- Production `main` remains isolated from redesign and preview work unless production modification is explicitly authorized.
- `unattributed/blackbagsecurity-dev` controls the development preview.
- The development preview source commit is pinned in `preview/source-ref.txt`.
- A successful source commit is not considered deployed to development until the preview pointer is updated and the development Pages build and deploy both succeed.

## Validation principle

Do not report an artifact, binary asset, preview, or deployment as working solely because a source commit or build exists. Validate the actual artifact path, source reference, expected files, and deployment status appropriate to the change.
