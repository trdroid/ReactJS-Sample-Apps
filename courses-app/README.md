### Project Creation

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps$ node -v
v6.9.1
droid@droidserver:~/onGit/ReactJS-Sample-Apps$ npm -v
3.10.8
```
```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps$ mkdir courses-app && cd courses-app
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$
```

**Installing Packages**

Install the following packages

*gulp-connect*: to run a local web server
*gulp-open*: to open a URL in a web browser 

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ npm install gulp gulp-connect gulp-open --save
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
npm WARN saveError ENOENT: no such file or directory, open '/home/droid/onGit/ReactJS-Sample-Apps/courses-app/package.json'
/home/droid/onGit/ReactJS-Sample-Apps/courses-app
├─┬ gulp@3.9.1 
│ ├── archy@1.0.0 
│ ├─┬ chalk@1.1.3 
│ │ ├── ansi-styles@2.2.1 
│ │ ├── escape-string-regexp@1.0.5 
│ │ ├─┬ has-ansi@2.0.0 
│ │ │ └── ansi-regex@2.0.0 
│ │ ├── strip-ansi@3.0.1 
│ │ └── supports-color@2.0.0 
│ ├── deprecated@0.0.1 
│ ├─┬ gulp-util@3.0.7 
│ │ ├── array-differ@1.0.0 
│ │ ├── array-uniq@1.0.3 
│ │ ├── beeper@1.1.0 
│ │ ├─┬ dateformat@1.0.12 
│ │ │ ├── get-stdin@4.0.1 
│ │ │ └─┬ meow@3.7.0 
│ │ │   ├─┬ camelcase-keys@2.1.0 
│ │ │   │ └── camelcase@2.1.1 
│ │ │   ├── decamelize@1.2.0 
│ │ │   ├─┬ loud-rejection@1.6.0 
│ │ │   │ ├─┬ currently-unhandled@0.4.1 
│ │ │   │ │ └── array-find-index@1.0.2 
│ │ │   │ └── signal-exit@3.0.1 
│ │ │   ├── map-obj@1.0.1 
│ │ │   ├─┬ normalize-package-data@2.3.5 
│ │ │   │ ├── hosted-git-info@2.1.5 
│ │ │   │ ├─┬ is-builtin-module@1.0.0 
│ │ │   │ │ └── builtin-modules@1.1.1 
│ │ │   │ └─┬ validate-npm-package-license@3.0.1 
│ │ │   │   ├─┬ spdx-correct@1.0.2 
│ │ │   │   │ └── spdx-license-ids@1.2.2 
│ │ │   │   └── spdx-expression-parse@1.0.4 
│ │ │   ├── object-assign@4.1.0 
│ │ │   ├─┬ read-pkg-up@1.0.1 
│ │ │   │ ├─┬ find-up@1.1.2 
│ │ │   │ │ ├── path-exists@2.1.0 
│ │ │   │ │ └─┬ pinkie-promise@2.0.1 
│ │ │   │ │   └── pinkie@2.0.4 
│ │ │   │ └─┬ read-pkg@1.1.0 
│ │ │   │   ├─┬ load-json-file@1.1.0 
│ │ │   │   │ ├── graceful-fs@4.1.10 
│ │ │   │   │ ├─┬ parse-json@2.2.0 
│ │ │   │   │ │ └─┬ error-ex@1.3.0 
│ │ │   │   │ │   └── is-arrayish@0.2.1 
│ │ │   │   │ ├── pify@2.3.0 
│ │ │   │   │ └── strip-bom@2.0.0 
│ │ │   │   └── path-type@1.1.0 
│ │ │   ├─┬ redent@1.0.0 
│ │ │   │ ├─┬ indent-string@2.1.0 
│ │ │   │ │ └─┬ repeating@2.0.1 
│ │ │   │ │   └─┬ is-finite@1.0.2 
│ │ │   │ │     └── number-is-nan@1.0.1 
│ │ │   │ └── strip-indent@1.0.1 
│ │ │   └── trim-newlines@1.0.0 
│ │ ├─┬ fancy-log@1.2.0 
│ │ │ └── time-stamp@1.0.1 
│ │ ├─┬ gulplog@1.0.0 
│ │ │ └── glogg@1.0.0 
│ │ ├─┬ has-gulplog@0.1.0 
│ │ │ └── sparkles@1.0.0 
│ │ ├── lodash._reescape@3.0.0 
│ │ ├── lodash._reevaluate@3.0.0 
│ │ ├── lodash._reinterpolate@3.0.0 
│ │ ├─┬ lodash.template@3.6.2 
│ │ │ ├── lodash._basecopy@3.0.1 
│ │ │ ├── lodash._basetostring@3.0.1 
│ │ │ ├── lodash._basevalues@3.0.0 
│ │ │ ├── lodash._isiterateecall@3.0.9 
│ │ │ ├─┬ lodash.escape@3.2.0 
│ │ │ │ └── lodash._root@3.0.1 
│ │ │ ├─┬ lodash.keys@3.1.2 
│ │ │ │ ├── lodash._getnative@3.9.1 
│ │ │ │ ├── lodash.isarguments@3.1.0 
│ │ │ │ └── lodash.isarray@3.0.4 
│ │ │ ├── lodash.restparam@3.6.1 
│ │ │ └── lodash.templatesettings@3.1.1 
│ │ ├─┬ multipipe@0.1.2 
│ │ │ └── duplexer2@0.0.2 
│ │ ├── object-assign@3.0.0 
│ │ ├── replace-ext@0.0.1 
│ │ └─┬ vinyl@0.5.3 
│ │   ├── clone@1.0.2 
│ │   └── clone-stats@0.0.1 
│ ├── interpret@1.0.1 
│ ├─┬ liftoff@2.3.0 
│ │ ├── extend@3.0.0 
│ │ ├─┬ findup-sync@0.4.3 
│ │ │ ├─┬ detect-file@0.1.0 
│ │ │ │ └── fs-exists-sync@0.1.0 
│ │ │ ├─┬ is-glob@2.0.1 
│ │ │ │ └── is-extglob@1.0.0 
│ │ │ ├─┬ micromatch@2.3.11 
│ │ │ │ ├─┬ arr-diff@2.0.0 
│ │ │ │ │ └── arr-flatten@1.0.1 
│ │ │ │ ├── array-unique@0.2.1 
│ │ │ │ ├─┬ braces@1.8.5 
│ │ │ │ │ ├─┬ expand-range@1.8.2 
│ │ │ │ │ │ └─┬ fill-range@2.2.3 
│ │ │ │ │ │   ├── is-number@2.1.0 
│ │ │ │ │ │   ├─┬ isobject@2.1.0 
│ │ │ │ │ │   │ └── isarray@1.0.0 
│ │ │ │ │ │   ├── randomatic@1.1.5 
│ │ │ │ │ │   └── repeat-string@1.6.1 
│ │ │ │ │ ├── preserve@0.2.0 
│ │ │ │ │ └── repeat-element@1.1.2 
│ │ │ │ ├─┬ expand-brackets@0.1.5 
│ │ │ │ │ └── is-posix-bracket@0.1.1 
│ │ │ │ ├── extglob@0.3.2 
│ │ │ │ ├── filename-regex@2.0.0 
│ │ │ │ ├─┬ kind-of@3.0.4 
│ │ │ │ │ └── is-buffer@1.1.4 
│ │ │ │ ├── normalize-path@2.0.1 
│ │ │ │ ├─┬ object.omit@2.0.1 
│ │ │ │ │ ├─┬ for-own@0.1.4 
│ │ │ │ │ │ └── for-in@0.1.6 
│ │ │ │ │ └── is-extendable@0.1.1 
│ │ │ │ ├─┬ parse-glob@3.0.4 
│ │ │ │ │ ├─┬ glob-base@0.3.0 
│ │ │ │ │ │ └── glob-parent@2.0.0 
│ │ │ │ │ └── is-dotfile@1.0.2 
│ │ │ │ └─┬ regex-cache@0.4.3 
│ │ │ │   ├── is-equal-shallow@0.1.3 
│ │ │ │   └── is-primitive@2.0.0 
│ │ │ └─┬ resolve-dir@0.1.1 
│ │ │   └─┬ global-modules@0.2.3 
│ │ │     ├─┬ global-prefix@0.1.4 
│ │ │     │ ├── ini@1.3.4 
│ │ │     │ ├─┬ osenv@0.1.3 
│ │ │     │ │ └── os-tmpdir@1.0.2 
│ │ │     │ └─┬ which@1.2.11 
│ │ │     │   └── isexe@1.1.2 
│ │ │     └── is-windows@0.2.0 
│ │ ├─┬ fined@1.0.2 
│ │ │ ├── expand-tilde@1.2.2 
│ │ │ ├── lodash.assignwith@4.2.0 
│ │ │ ├── lodash.isempty@4.4.0 
│ │ │ ├── lodash.pick@4.4.0 
│ │ │ └─┬ parse-filepath@1.0.1 
│ │ │   ├─┬ is-absolute@0.2.6 
│ │ │   │ └─┬ is-relative@0.2.1 
│ │ │   │   └─┬ is-unc-path@0.1.1 
│ │ │   │     └── unc-path-regex@0.1.2 
│ │ │   ├── map-cache@0.2.2 
│ │ │   └─┬ path-root@0.1.1 
│ │ │     └── path-root-regex@0.1.2 
│ │ ├── flagged-respawn@0.3.2 
│ │ ├── lodash.isplainobject@4.0.6 
│ │ ├── lodash.isstring@4.0.1 
│ │ ├── lodash.mapvalues@4.6.0 
│ │ ├── rechoir@0.6.2 
│ │ └── resolve@1.1.7 
│ ├── minimist@1.2.0 
│ ├─┬ orchestrator@0.3.7 
│ │ ├─┬ end-of-stream@0.1.5 
│ │ │ └─┬ once@1.3.3 
│ │ │   └── wrappy@1.0.2 
│ │ ├── sequencify@0.0.7 
│ │ └── stream-consume@0.1.0 
│ ├── pretty-hrtime@1.0.2 
│ ├── semver@4.3.6 
│ ├─┬ tildify@1.2.0 
│ │ └── os-homedir@1.0.2 
│ ├─┬ v8flags@2.0.11 
│ │ └── user-home@1.1.1 
│ └─┬ vinyl-fs@0.3.14 
│   ├── defaults@1.0.3 
│   ├─┬ glob-stream@3.1.18 
│   │ ├─┬ glob@4.5.3 
│   │ │ └── inflight@1.0.6 
│   │ ├─┬ glob2base@0.0.12 
│   │ │ └── find-index@0.1.1 
│   │ ├─┬ minimatch@2.0.10 
│   │ │ └─┬ brace-expansion@1.1.6 
│   │ │   ├── balanced-match@0.4.2 
│   │ │   └── concat-map@0.0.1 
│   │ ├── ordered-read-streams@0.1.0 
│   │ ├─┬ through2@0.6.5 
│   │ │ └── readable-stream@1.0.34 
│   │ └── unique-stream@1.0.0 
│   ├─┬ glob-watcher@0.0.6 
│   │ └─┬ gaze@0.5.2 
│   │   └─┬ globule@0.1.0 
│   │     ├─┬ glob@3.1.21 
│   │     │ ├── graceful-fs@1.2.3 
│   │     │ └── inherits@1.0.2 
│   │     ├── lodash@1.0.2 
│   │     └─┬ minimatch@0.2.14 
│   │       ├── lru-cache@2.7.3 
│   │       └── sigmund@1.0.1 
│   ├─┬ graceful-fs@3.0.11 
│   │ └── natives@1.1.0 
│   ├─┬ mkdirp@0.5.1 
│   │ └── minimist@0.0.8 
│   ├─┬ strip-bom@1.0.0 
│   │ ├── first-chunk-stream@1.0.0 
│   │ └── is-utf8@0.2.1 
│   ├─┬ through2@0.6.5 
│   │ └─┬ readable-stream@1.0.34 
│   │   └── isarray@0.0.1 
│   └─┬ vinyl@0.4.6 
│     └── clone@0.2.0 
├─┬ gulp-connect@5.0.0 
│ ├─┬ connect@2.30.2 
│ │ ├── basic-auth-connect@1.0.0 
│ │ ├─┬ body-parser@1.13.3 
│ │ │ ├── iconv-lite@0.4.11 
│ │ │ ├─┬ on-finished@2.3.0 
│ │ │ │ └── ee-first@1.1.1 
│ │ │ └─┬ raw-body@2.1.7 
│ │ │   ├── bytes@2.4.0 
│ │ │   └── iconv-lite@0.4.13 
│ │ ├── bytes@2.1.0 
│ │ ├─┬ compression@1.5.2 
│ │ │ ├─┬ accepts@1.2.13 
│ │ │ │ └── negotiator@0.5.3 
│ │ │ ├─┬ compressible@2.0.9 
│ │ │ │ └── mime-db@1.24.0 
│ │ │ └── vary@1.0.1 
│ │ ├─┬ connect-timeout@1.6.2 
│ │ │ └── ms@0.7.1 
│ │ ├── content-type@1.0.2 
│ │ ├── cookie@0.1.3 
│ │ ├── cookie-parser@1.3.5 
│ │ ├── cookie-signature@1.0.6 
│ │ ├─┬ csurf@1.8.3 
│ │ │ └─┬ csrf@3.0.3 
│ │ │   ├── base64-url@1.2.2 
│ │ │   ├── rndm@1.2.0 
│ │ │   ├── tsscmp@1.0.5 
│ │ │   └─┬ uid-safe@2.1.1 
│ │ │     └── random-bytes@1.0.0 
│ │ ├── debug@2.2.0 
│ │ ├── depd@1.0.1 
│ │ ├─┬ errorhandler@1.4.3 
│ │ │ ├─┬ accepts@1.3.3 
│ │ │ │ └── negotiator@0.6.1 
│ │ │ └── escape-html@1.0.3 
│ │ ├─┬ express-session@1.11.3 
│ │ │ ├── crc@3.3.0 
│ │ │ └─┬ uid-safe@2.0.0 
│ │ │   └── base64-url@1.2.1 
│ │ ├─┬ finalhandler@0.4.0 
│ │ │ ├── escape-html@1.0.2 
│ │ │ └── unpipe@1.0.0 
│ │ ├── fresh@0.3.0 
│ │ ├─┬ http-errors@1.3.1 
│ │ │ ├── inherits@2.0.3 
│ │ │ └── statuses@1.3.0 
│ │ ├─┬ method-override@2.3.6 
│ │ │ ├── methods@1.1.2 
│ │ │ └── vary@1.1.0 
│ │ ├─┬ morgan@1.6.1 
│ │ │ └── basic-auth@1.0.4 
│ │ ├─┬ multiparty@3.3.2 
│ │ │ ├── readable-stream@1.1.14 
│ │ │ └── stream-counter@0.2.0 
│ │ ├── on-headers@1.0.1 
│ │ ├── parseurl@1.3.1 
│ │ ├── pause@0.1.0 
│ │ ├── qs@4.0.0 
│ │ ├── response-time@2.3.1 
│ │ ├─┬ serve-favicon@2.3.0 
│ │ │ └── etag@1.7.0 
│ │ ├─┬ serve-index@1.7.3 
│ │ │ ├── batch@0.5.3 
│ │ │ └── mime-types@2.1.12 
│ │ ├─┬ serve-static@1.10.3 
│ │ │ └─┬ send@0.13.2 
│ │ │   ├── depd@1.1.0 
│ │ │   ├── destroy@1.0.4 
│ │ │   ├── mime@1.3.4 
│ │ │   ├── range-parser@1.0.3 
│ │ │   └── statuses@1.2.1 
│ │ ├─┬ type-is@1.6.13 
│ │ │ └── media-typer@0.3.0 
│ │ ├── utils-merge@1.0.0 
│ │ └── vhost@3.0.2 
│ ├── connect-livereload@0.5.4 
│ ├─┬ event-stream@3.3.4 
│ │ ├── duplexer@0.1.1 
│ │ ├── from@0.1.3 
│ │ ├── map-stream@0.1.0 
│ │ ├── pause-stream@0.0.11 
│ │ ├── split@0.3.3 
│ │ ├── stream-combiner@0.0.4 
│ │ └── through@2.3.8 
│ └─┬ tiny-lr@0.2.1 
│   ├─┬ body-parser@1.14.2 
│   │ ├── bytes@2.2.0 
│   │ ├── depd@1.1.0 
│   │ ├── iconv-lite@0.4.13 
│   │ └── qs@5.2.0 
│   ├─┬ faye-websocket@0.10.0 
│   │ └─┬ websocket-driver@0.6.5 
│   │   └── websocket-extensions@0.1.1 
│   ├── livereload-js@2.2.2 
│   └── qs@5.1.0 
└─┬ gulp-open@2.0.0 
  ├── colors@1.1.2 
  ├── open@0.0.5 
  └─┬ through2@2.0.1 
    ├─┬ readable-stream@2.0.6 
    │ ├── core-util-is@1.0.2 
    │ ├── isarray@1.0.0 
    │ ├── process-nextick-args@1.0.7 
    │ ├── string_decoder@0.10.31 
    │ └── util-deprecate@1.0.2 
    └── xtend@4.0.1 

npm WARN enoent ENOENT: no such file or directory, open '/home/droid/onGit/ReactJS-Sample-Apps/courses-app/package.json'
npm WARN courses-app No description
npm WARN courses-app No repository field.
npm WARN courses-app No README data
npm WARN courses-app No license field.
```

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ ls
node_modules
```

Notice that the file *package.json* is not created and there is no way to easily track the list of dependencies without having to commit the *node_modules* directory (which contains the source code for the dependencies) to a repository.


Create the *package.json* file, delete the node_modules directory and re-run the above installation

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ rm -rf node_modules/
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ touch package.json 
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ npm install gulp gulp-connect gulp-open --save
npm ERR! Linux 4.4.0-42-generic
npm ERR! argv "/home/droid/software/node/node-v6.9.1-linux-x64/bin/node" "/home/droid/software/node/node-v6.9.1-linux-x64/bin/npm" "install" "gulp" "gulp-connect" "gulp-open" "--save"
npm ERR! node v6.9.1
npm ERR! npm  v3.10.8
npm ERR! file /home/droid/onGit/ReactJS-Sample-Apps/courses-app/package.json
npm ERR! code EJSONPARSE

npm ERR! Failed to parse json
npm ERR! No data, empty input at 1:1
npm ERR! 
npm ERR! ^
npm ERR! File: /home/droid/onGit/ReactJS-Sample-Apps/courses-app/package.json
npm ERR! Failed to parse package.json data.
npm ERR! package.json must be actual JSON, not just JavaScript.
npm ERR! 
npm ERR! This is not a bug in npm.
npm ERR! Tell the package author to fix their package.json file. JSON.parse

npm ERR! Please include the following file with any support request:
npm ERR!     /home/droid/onGit/ReactJS-Sample-Apps/courses-app/npm-debug.log
```

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ ls 
npm-debug.log  package.json
```

This does not work either, so delete "npm-debug.log" and *package.json* files.

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ rm npm-debug.log 
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ rm package.json 
```

Run *npm init* in the project directory

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (courses-app) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /home/droid/onGit/ReactJS-Sample-Apps/courses-app/package.json:

{
  "name": "courses-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) yes
```

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ ls
package.json
```

*package.json*

```json
{
  "name": "courses-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "gulp": "^3.9.1",
    "gulp-connect": "^5.0.0",
    "gulp-open": "^2.0.0"
  }
}
```
```json
{
  "name": "courses-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ npm install gulp gulp-connect gulp-open --save
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
courses-app@1.0.0 /home/droid/onGit/ReactJS-Sample-Apps/courses-app
├─┬ gulp@3.9.1 
│ ├── archy@1.0.0 
│ ├─┬ chalk@1.1.3 
│ │ ├── ansi-styles@2.2.1 
│ │ ├── escape-string-regexp@1.0.5 
│ │ ├─┬ has-ansi@2.0.0 
│ │ │ └── ansi-regex@2.0.0 
│ │ ├── strip-ansi@3.0.1 
│ │ └── supports-color@2.0.0 
│ ├── deprecated@0.0.1 
│ ├─┬ gulp-util@3.0.7 
│ │ ├── array-differ@1.0.0 
│ │ ├── array-uniq@1.0.3 
│ │ ├── beeper@1.1.0 
│ │ ├─┬ dateformat@1.0.12 
│ │ │ ├── get-stdin@4.0.1 
│ │ │ └─┬ meow@3.7.0 
│ │ │   ├─┬ camelcase-keys@2.1.0 
│ │ │   │ └── camelcase@2.1.1 
│ │ │   ├── decamelize@1.2.0 
│ │ │   ├─┬ loud-rejection@1.6.0 
│ │ │   │ ├─┬ currently-unhandled@0.4.1 
│ │ │   │ │ └── array-find-index@1.0.2 
│ │ │   │ └── signal-exit@3.0.1 
│ │ │   ├── map-obj@1.0.1 
│ │ │   ├─┬ normalize-package-data@2.3.5 
│ │ │   │ ├── hosted-git-info@2.1.5 
│ │ │   │ ├─┬ is-builtin-module@1.0.0 
│ │ │   │ │ └── builtin-modules@1.1.1 
│ │ │   │ └─┬ validate-npm-package-license@3.0.1 
│ │ │   │   ├─┬ spdx-correct@1.0.2 
│ │ │   │   │ └── spdx-license-ids@1.2.2 
│ │ │   │   └── spdx-expression-parse@1.0.4 
│ │ │   ├── object-assign@4.1.0 
│ │ │   ├─┬ read-pkg-up@1.0.1 
│ │ │   │ ├─┬ find-up@1.1.2 
│ │ │   │ │ ├── path-exists@2.1.0 
│ │ │   │ │ └─┬ pinkie-promise@2.0.1 
│ │ │   │ │   └── pinkie@2.0.4 
│ │ │   │ └─┬ read-pkg@1.1.0 
│ │ │   │   ├─┬ load-json-file@1.1.0 
│ │ │   │   │ ├── graceful-fs@4.1.10 
│ │ │   │   │ ├─┬ parse-json@2.2.0 
│ │ │   │   │ │ └─┬ error-ex@1.3.0 
│ │ │   │   │ │   └── is-arrayish@0.2.1 
│ │ │   │   │ ├── pify@2.3.0 
│ │ │   │   │ └── strip-bom@2.0.0 
│ │ │   │   └── path-type@1.1.0 
│ │ │   ├─┬ redent@1.0.0 
│ │ │   │ ├─┬ indent-string@2.1.0 
│ │ │   │ │ └─┬ repeating@2.0.1 
│ │ │   │ │   └─┬ is-finite@1.0.2 
│ │ │   │ │     └── number-is-nan@1.0.1 
│ │ │   │ └── strip-indent@1.0.1 
│ │ │   └── trim-newlines@1.0.0 
│ │ ├─┬ fancy-log@1.2.0 
│ │ │ └── time-stamp@1.0.1 
│ │ ├─┬ gulplog@1.0.0 
│ │ │ └── glogg@1.0.0 
│ │ ├─┬ has-gulplog@0.1.0 
│ │ │ └── sparkles@1.0.0 
│ │ ├── lodash._reescape@3.0.0 
│ │ ├── lodash._reevaluate@3.0.0 
│ │ ├── lodash._reinterpolate@3.0.0 
│ │ ├─┬ lodash.template@3.6.2 
│ │ │ ├── lodash._basecopy@3.0.1 
│ │ │ ├── lodash._basetostring@3.0.1 
│ │ │ ├── lodash._basevalues@3.0.0 
│ │ │ ├── lodash._isiterateecall@3.0.9 
│ │ │ ├─┬ lodash.escape@3.2.0 
│ │ │ │ └── lodash._root@3.0.1 
│ │ │ ├─┬ lodash.keys@3.1.2 
│ │ │ │ ├── lodash._getnative@3.9.1 
│ │ │ │ ├── lodash.isarguments@3.1.0 
│ │ │ │ └── lodash.isarray@3.0.4 
│ │ │ ├── lodash.restparam@3.6.1 
│ │ │ └── lodash.templatesettings@3.1.1 
│ │ ├─┬ multipipe@0.1.2 
│ │ │ └── duplexer2@0.0.2 
│ │ ├── object-assign@3.0.0 
│ │ ├── replace-ext@0.0.1 
│ │ └─┬ vinyl@0.5.3 
│ │   ├── clone@1.0.2 
│ │   └── clone-stats@0.0.1 
│ ├── interpret@1.0.1 
│ ├─┬ liftoff@2.3.0 
│ │ ├── extend@3.0.0 
│ │ ├─┬ findup-sync@0.4.3 
│ │ │ ├─┬ detect-file@0.1.0 
│ │ │ │ └── fs-exists-sync@0.1.0 
│ │ │ ├─┬ is-glob@2.0.1 
│ │ │ │ └── is-extglob@1.0.0 
│ │ │ ├─┬ micromatch@2.3.11 
│ │ │ │ ├─┬ arr-diff@2.0.0 
│ │ │ │ │ └── arr-flatten@1.0.1 
│ │ │ │ ├── array-unique@0.2.1 
│ │ │ │ ├─┬ braces@1.8.5 
│ │ │ │ │ ├─┬ expand-range@1.8.2 
│ │ │ │ │ │ └─┬ fill-range@2.2.3 
│ │ │ │ │ │   ├── is-number@2.1.0 
│ │ │ │ │ │   ├─┬ isobject@2.1.0 
│ │ │ │ │ │   │ └── isarray@1.0.0 
│ │ │ │ │ │   ├── randomatic@1.1.5 
│ │ │ │ │ │   └── repeat-string@1.6.1 
│ │ │ │ │ ├── preserve@0.2.0 
│ │ │ │ │ └── repeat-element@1.1.2 
│ │ │ │ ├─┬ expand-brackets@0.1.5 
│ │ │ │ │ └── is-posix-bracket@0.1.1 
│ │ │ │ ├── extglob@0.3.2 
│ │ │ │ ├── filename-regex@2.0.0 
│ │ │ │ ├─┬ kind-of@3.0.4 
│ │ │ │ │ └── is-buffer@1.1.4 
│ │ │ │ ├── normalize-path@2.0.1 
│ │ │ │ ├─┬ object.omit@2.0.1 
│ │ │ │ │ ├─┬ for-own@0.1.4 
│ │ │ │ │ │ └── for-in@0.1.6 
│ │ │ │ │ └── is-extendable@0.1.1 
│ │ │ │ ├─┬ parse-glob@3.0.4 
│ │ │ │ │ ├─┬ glob-base@0.3.0 
│ │ │ │ │ │ └── glob-parent@2.0.0 
│ │ │ │ │ └── is-dotfile@1.0.2 
│ │ │ │ └─┬ regex-cache@0.4.3 
│ │ │ │   ├── is-equal-shallow@0.1.3 
│ │ │ │   └── is-primitive@2.0.0 
│ │ │ └─┬ resolve-dir@0.1.1 
│ │ │   └─┬ global-modules@0.2.3 
│ │ │     ├─┬ global-prefix@0.1.4 
│ │ │     │ ├── ini@1.3.4 
│ │ │     │ ├─┬ osenv@0.1.3 
│ │ │     │ │ └── os-tmpdir@1.0.2 
│ │ │     │ └─┬ which@1.2.11 
│ │ │     │   └── isexe@1.1.2 
│ │ │     └── is-windows@0.2.0 
│ │ ├─┬ fined@1.0.2 
│ │ │ ├── expand-tilde@1.2.2 
│ │ │ ├── lodash.assignwith@4.2.0 
│ │ │ ├── lodash.isempty@4.4.0 
│ │ │ ├── lodash.pick@4.4.0 
│ │ │ └─┬ parse-filepath@1.0.1 
│ │ │   ├─┬ is-absolute@0.2.6 
│ │ │   │ └─┬ is-relative@0.2.1 
│ │ │   │   └─┬ is-unc-path@0.1.1 
│ │ │   │     └── unc-path-regex@0.1.2 
│ │ │   ├── map-cache@0.2.2 
│ │ │   └─┬ path-root@0.1.1 
│ │ │     └── path-root-regex@0.1.2 
│ │ ├── flagged-respawn@0.3.2 
│ │ ├── lodash.isplainobject@4.0.6 
│ │ ├── lodash.isstring@4.0.1 
│ │ ├── lodash.mapvalues@4.6.0 
│ │ ├── rechoir@0.6.2 
│ │ └── resolve@1.1.7 
│ ├── minimist@1.2.0 
│ ├─┬ orchestrator@0.3.7 
│ │ ├─┬ end-of-stream@0.1.5 
│ │ │ └─┬ once@1.3.3 
│ │ │   └── wrappy@1.0.2 
│ │ ├── sequencify@0.0.7 
│ │ └── stream-consume@0.1.0 
│ ├── pretty-hrtime@1.0.2 
│ ├── semver@4.3.6 
│ ├─┬ tildify@1.2.0 
│ │ └── os-homedir@1.0.2 
│ ├─┬ v8flags@2.0.11 
│ │ └── user-home@1.1.1 
│ └─┬ vinyl-fs@0.3.14 
│   ├── defaults@1.0.3 
│   ├─┬ glob-stream@3.1.18 
│   │ ├─┬ glob@4.5.3 
│   │ │ └── inflight@1.0.6 
│   │ ├─┬ glob2base@0.0.12 
│   │ │ └── find-index@0.1.1 
│   │ ├─┬ minimatch@2.0.10 
│   │ │ └─┬ brace-expansion@1.1.6 
│   │ │   ├── balanced-match@0.4.2 
│   │ │   └── concat-map@0.0.1 
│   │ ├── ordered-read-streams@0.1.0 
│   │ ├─┬ through2@0.6.5 
│   │ │ └── readable-stream@1.0.34 
│   │ └── unique-stream@1.0.0 
│   ├─┬ glob-watcher@0.0.6 
│   │ └─┬ gaze@0.5.2 
│   │   └─┬ globule@0.1.0 
│   │     ├─┬ glob@3.1.21 
│   │     │ ├── graceful-fs@1.2.3 
│   │     │ └── inherits@1.0.2 
│   │     ├── lodash@1.0.2 
│   │     └─┬ minimatch@0.2.14 
│   │       ├── lru-cache@2.7.3 
│   │       └── sigmund@1.0.1 
│   ├─┬ graceful-fs@3.0.11 
│   │ └── natives@1.1.0 
│   ├─┬ mkdirp@0.5.1 
│   │ └── minimist@0.0.8 
│   ├─┬ strip-bom@1.0.0 
│   │ ├── first-chunk-stream@1.0.0 
│   │ └── is-utf8@0.2.1 
│   ├─┬ through2@0.6.5 
│   │ └─┬ readable-stream@1.0.34 
│   │   └── isarray@0.0.1 
│   └─┬ vinyl@0.4.6 
│     └── clone@0.2.0 
├─┬ gulp-connect@5.0.0 
│ ├─┬ connect@2.30.2 
│ │ ├── basic-auth-connect@1.0.0 
│ │ ├─┬ body-parser@1.13.3 
│ │ │ ├── iconv-lite@0.4.11 
│ │ │ ├─┬ on-finished@2.3.0 
│ │ │ │ └── ee-first@1.1.1 
│ │ │ └─┬ raw-body@2.1.7 
│ │ │   ├── bytes@2.4.0 
│ │ │   └── iconv-lite@0.4.13 
│ │ ├── bytes@2.1.0 
│ │ ├─┬ compression@1.5.2 
│ │ │ ├─┬ accepts@1.2.13 
│ │ │ │ └── negotiator@0.5.3 
│ │ │ ├─┬ compressible@2.0.9 
│ │ │ │ └── mime-db@1.24.0 
│ │ │ └── vary@1.0.1 
│ │ ├─┬ connect-timeout@1.6.2 
│ │ │ └── ms@0.7.1 
│ │ ├── content-type@1.0.2 
│ │ ├── cookie@0.1.3 
│ │ ├── cookie-parser@1.3.5 
│ │ ├── cookie-signature@1.0.6 
│ │ ├─┬ csurf@1.8.3 
│ │ │ └─┬ csrf@3.0.3 
│ │ │   ├── base64-url@1.2.2 
│ │ │   ├── rndm@1.2.0 
│ │ │   ├── tsscmp@1.0.5 
│ │ │   └─┬ uid-safe@2.1.1 
│ │ │     └── random-bytes@1.0.0 
│ │ ├── debug@2.2.0 
│ │ ├── depd@1.0.1 
│ │ ├─┬ errorhandler@1.4.3 
│ │ │ ├─┬ accepts@1.3.3 
│ │ │ │ └── negotiator@0.6.1 
│ │ │ └── escape-html@1.0.3 
│ │ ├─┬ express-session@1.11.3 
│ │ │ ├── crc@3.3.0 
│ │ │ └─┬ uid-safe@2.0.0 
│ │ │   └── base64-url@1.2.1 
│ │ ├─┬ finalhandler@0.4.0 
│ │ │ ├── escape-html@1.0.2 
│ │ │ └── unpipe@1.0.0 
│ │ ├── fresh@0.3.0 
│ │ ├─┬ http-errors@1.3.1 
│ │ │ ├── inherits@2.0.3 
│ │ │ └── statuses@1.3.0 
│ │ ├─┬ method-override@2.3.6 
│ │ │ ├── methods@1.1.2 
│ │ │ └── vary@1.1.0 
│ │ ├─┬ morgan@1.6.1 
│ │ │ └── basic-auth@1.0.4 
│ │ ├─┬ multiparty@3.3.2 
│ │ │ ├── readable-stream@1.1.14 
│ │ │ └── stream-counter@0.2.0 
│ │ ├── on-headers@1.0.1 
│ │ ├── parseurl@1.3.1 
│ │ ├── pause@0.1.0 
│ │ ├── qs@4.0.0 
│ │ ├── response-time@2.3.1 
│ │ ├─┬ serve-favicon@2.3.0 
│ │ │ └── etag@1.7.0 
│ │ ├─┬ serve-index@1.7.3 
│ │ │ ├── batch@0.5.3 
│ │ │ └── mime-types@2.1.12 
│ │ ├─┬ serve-static@1.10.3 
│ │ │ └─┬ send@0.13.2 
│ │ │   ├── depd@1.1.0 
│ │ │   ├── destroy@1.0.4 
│ │ │   ├── mime@1.3.4 
│ │ │   ├── range-parser@1.0.3 
│ │ │   └── statuses@1.2.1 
│ │ ├─┬ type-is@1.6.13 
│ │ │ └── media-typer@0.3.0 
│ │ ├── utils-merge@1.0.0 
│ │ └── vhost@3.0.2 
│ ├── connect-livereload@0.5.4 
│ ├─┬ event-stream@3.3.4 
│ │ ├── duplexer@0.1.1 
│ │ ├── from@0.1.3 
│ │ ├── map-stream@0.1.0 
│ │ ├── pause-stream@0.0.11 
│ │ ├── split@0.3.3 
│ │ ├── stream-combiner@0.0.4 
│ │ └── through@2.3.8 
│ └─┬ tiny-lr@0.2.1 
│   ├─┬ body-parser@1.14.2 
│   │ ├── bytes@2.2.0 
│   │ ├── depd@1.1.0 
│   │ ├── iconv-lite@0.4.13 
│   │ └── qs@5.2.0 
│   ├─┬ faye-websocket@0.10.0 
│   │ └─┬ websocket-driver@0.6.5 
│   │   └── websocket-extensions@0.1.1 
│   ├── livereload-js@2.2.2 
│   └── qs@5.1.0 
└─┬ gulp-open@2.0.0 
  ├── colors@1.1.2 
  ├── open@0.0.5 
  └─┬ through2@2.0.1 
    ├─┬ readable-stream@2.0.6 
    │ ├── core-util-is@1.0.2 
    │ ├── isarray@1.0.0 
    │ ├── process-nextick-args@1.0.7 
    │ ├── string_decoder@0.10.31 
    │ └── util-deprecate@1.0.2 
    └── xtend@4.0.1 

npm WARN courses-app@1.0.0 No description
npm WARN courses-app@1.0.0 No repository field.
```

```json
{
  "name": "courses-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {               <------------
    "gulp": "^3.9.1",
    "gulp-connect": "^5.0.0",
    "gulp-open": "^2.0.0"
  }
}
```

Create the following directories

* src: to contain the source files
* dist: to contain the output files






















