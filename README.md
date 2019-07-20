# ng-debug-pipes

## What is it? 🤔

This started with a few old pipes I had lying around, and quickly turned into me playing around with Ivy.

These pipes are kind of useful on their own:

**`DebugPipe`**:

```html
{{ foo | debug }}
```

**`ConsolePipe`**

```html
{{ foo | console }}
```

But the interesting thing here is the hack in `./projects/ng-debug-pipes/src/lib/global-pipe.ts`. It is *definitely* a hack, and very fragile, but it seems to enable you to use there pipes *anywhere in your application* without importing an `NgModule`! Even in a lazy loaded module!

## Running it 🏗

1) `ng build ng-debug-pipes`

2) `ng serve test-pipes`

## Caveats ⚠️

* Required the `"enableIvy": true` compiler option to be turned on.

* Breaks if you have full template type checking on. So you need to have `"fullTemplateTypeCheck": false`.
