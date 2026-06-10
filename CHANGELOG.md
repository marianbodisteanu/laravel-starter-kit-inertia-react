# Changelog

All notable changes to this starter kit are documented here.

## [2.0.0] - 2026-06-10

### Changed

- **Breaking**: shadcn/ui primitives migrated from Radix to Base UI (`base-nova` style) — the
  `render` prop replaces `asChild`, popup state uses `data-popup-open`, and all 13 `@radix-ui/*`
  packages are gone in favor of `@base-ui/react`
- **Breaking**: components and layouts use named exports; default exports are reserved for Inertia
  pages and enforced by lint
- **Breaking**: prose comments are banned in JS/TS and stripped by lint; only `@`-tag JSDoc
  annotations and triple-slash directives are allowed
- Root Blade template uses Inertia v3 components (`<x-inertia::app />`, `<x-inertia::head>` with
  SSR title fallback); fonts are self-hosted at build time instead of loaded from the bunny CDN
- 2FA setup data is fetched through Inertia v3 `useHttp` instead of a hand-rolled `fetch` wrapper
- The 2FA QR code renders via an `<img>` data URI instead of `dangerouslySetInnerHTML`

### Added

- React Compiler — automatic memoization, wired through `@rolldown/plugin-babel`
- React Doctor's oxlint plugin (200+ React rules) integrated into `vite-plus` lint
- Flash toast notifications built on Base UI Toast: `Inertia::flash('toast', ...)` on the server,
  a `toastManager` export for firing toasts from client code
- `import/no-default-export` and `import/no-cycle` lint rules
- Global HTTP interceptor stamping `X-Requested-With` on every Inertia client request

### Fixed

- 2FA: the OTP input clears after an invalid code, and disabling 2FA clears the stale QR code,
  setup key, and recovery codes so re-enabling generates a fresh secret
- 2FA: confirm redirects no longer land on JSON endpoints for clients that send no `Referer`
- Settings pages render during SSR instead of returning an empty shell with a hydration mismatch
- Tests disable Inertia SSR explicitly instead of depending on a missing build artifact
- Accessibility: natural tab order on auth forms, labelled 2FA inputs, semantic recovery-code
  lists, `rel="noreferrer"` on external links, and stable list keys

## [1.0.0] - 2026-06-06

- Initial release of the fork, based on
  [Nuno Maduro's starter kit](https://github.com/nunomaduro/laravel-starter-kit-inertia-react)
- Comment policy (`@`-tag annotations only) enforced through Pint
- Lefthook pre-push hook running the full test suite
- `composer audit` wired into the test pipeline and dependency update cooldowns
- Seeded test user for local development
- Wayfinder on the dev-next channel, generated via Composer
