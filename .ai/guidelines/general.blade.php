# General Guidelines

## Comments

- Comments: only `@`-tag annotations. No prose/descriptive comments.
- PHP: `@param`, `@return`, `@var`, `@phpstan-type`. Enforced by Pint.
- Pint rule: `Pint/phpdoc_type_annotations_only`.
- JS/TS/TSX/CSS: no comments.

## Commits

- Commit msg → use `caveman-commit` skill.

## AI guidelines (`.ai/`)

- Create/edit under `.ai/guidelines` → use `caveman` skill at `ultra`.
- Any change under `.ai/` → run `php artisan boost:update`.
