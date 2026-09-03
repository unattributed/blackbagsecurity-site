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

### Failure behavior

If an artifact was generated with a prohibited runtime path:

1. Do not ask the operator to adapt the invalid path manually.
2. Rebuild or correct the artifact.
3. Re-run bundle-content validation.
4. Provide a corrected bundle and sidecar.
5. Treat the original artifact as superseded.

## Artifact delivery standard

Reusable development deliveries should use:

1. a `.tar.gz` bundle,
2. a portable `.tar.gz.sha256` sidecar containing the archive basename only,
3. one complete pasteable Bash command,
4. SHA-256 verification before extraction or execution,
5. explicit PASS/FAIL gates,
6. signed Git commit checkpoints when repository changes are committed by the operator.

Operator-facing Bash blocks should begin with literal `clear` when a complete execution block is provided.

## Repository and preview separation

- `unattributed/blackbagsecurity.github.io` is the authoritative website source repository.
- Production `main` remains isolated from redesign and preview work unless production modification is explicitly authorized.
- `unattributed/blackbagsecurity-dev` controls the development preview.
- The development preview source commit is pinned in `preview/source-ref.txt`.
- A successful source commit is not considered deployed to development until the preview pointer is updated and the development Pages build and deploy both succeed.

## Validation principle

Do not report an artifact, binary asset, preview, or deployment as working solely because a source commit or build exists. Validate the actual artifact path, source reference, expected files, and deployment status appropriate to the change.
