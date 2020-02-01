# This one helps you to find the best hookah

## Getting started

Make sure you install all dependencies first, run npm -i (shorthand for npm install)

```
npm i
```

To use configured development mode simply run

```
npm run start
```

To build all files for the production run

```
npm run build
```

An output is minified via --mode flag which is set to production (already minified, optimized bundle) - additionally **/dist** directory is removed each time you run this script to make sure there are no artifacts left in the output location

Optionally there is configured a task to export files with development mode (output is **not** minimized/optimized). To use it run

```
npm run dev
```


