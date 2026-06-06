# App/Actions guidelines

- App uses Action pattern. Logic → reusable, composable Action classes.
- Actions live in `app/Actions`. Name by what they do, no suffix.
- Actions called from many places: jobs, commands, HTTP req, API req, MCP req, more.
- Business logic → dedicated Action class, single `handle()` method.
- New action → `php artisan make:action "{name}" --no-interaction`
- Multi-model op → wrap in `DB::transaction()`.
