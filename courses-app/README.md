# Project Creation

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

### Installing Packages

Install the following packages

*gulp-connect*
(https://www.npmjs.com/package/gulp-connect)

Install *gulp-connect* to run a local development web server with LiveReload

*gulp-open*
(https://www.npmjs.com/package/gulp-open)

Install *gulp-open* to open a URL in a web browser 

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
  "dependencies": {      <---
    "gulp": "^3.9.1",
    "gulp-connect": "^5.0.0",
    "gulp-open": "^2.0.0"
  }
}
```

### Creating starter directories

Create the following directories

* src: to contain the source files
* dist: to contain the output files

### Creating starter HTML file

Create an *index.html* file in the "src" directory

*src/index.html*

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Courses App</title>
  </head>
  <body>
    <h1>Welcome to Courses App!</h1>
  </body>
</html>
```

### Configuring the Build Process

Create the *gulpfile.js* file.

![](_misc/Project%20Content.png)

Create a gulp task to bundle html files under the "src" directory and place them under the "dist" directory.

*gulpfile.js*

```js
"use strict";

var gulp = require('gulp');       -----   1
    
var config = {                    -----   2
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
}

gulp.task('html', function() {    -----   3
  gulp.src(config.paths.html)     -----   4
      .pipe(gulp.dest(config.paths.dist))   -----   5
});

gulp.task('default', ['html']);     -----   6
```

1. Import the *gulp* module

2. Create an object to group all the configuration details

3. Create a Gulp task called "html" using *gulp.task()* method, which takes the name of the task and the function to be executed when the task is requested to be executed.

4. Gather all the .html files by calling the *gulp.src()* method and passing it the glob that refers to all .html files under the "src" directory

5. Pipe the gathered .html files to the *gulp.dest()* method that takes the path to the destination directory where all the .html files have to be placed

6. Create a *default* task that runs by default when the *gulp* command is run in the command line from the directory that contains the *gulpfile.js* file, and make the "html" task a dependent task so it runs when the *default* task is run.

Run the *gulp* command

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ gulp
[13:42:59] Using gulpfile ~/onGit/ReactJS-Sample-Apps/courses-app/gulpfile.js
[13:42:59] Starting 'html'...
[13:42:59] Finished 'html' after 13 ms
[13:42:59] Starting 'default'...
[13:42:59] Finished 'default' after 14 μs
```

Notice that the file "src/index.html" has been copied to "dist/index.html"

![](_misc/Project%20Content%20after%20gulp%20html.png)

Create a gulp task to start a local development web server that can serve the web pages from the "dist" directory

*gulpfile.js*

```js
"use strict";

var gulp = require('gulp');
var gulpConnect = require('gulp-connect');      ----- 1

var config = {
  dev: {                                        ----- 2
    port: 8999,
    baseUrl: 'http://localhost',
  },
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
}

gulp.task('connect', function() {               ----- 3
  gulpConnect.server({                          ----- 4
    root: [config.paths.dist],
    port: config.dev.port
  });
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
});

gulp.task('default', ['html', 'connect']);      ----- 5
```

1] Import the *gulp-connect* package

2] Create a nested object "dev" that contains development related configurations. 

3] Define a Gulp task called "connect" and pass it a function that has to be executed when the task is run.

4] In the function, start the local development server by calling the *server()* method on the *gulp-connect* instance and passing it a JSON to configure the server. 

*root* indicates the root path. The server can serve the files present in the root path. 

*port* indicates the port that the server would be listening on to serve the clients.

5] Add the "connect" task to the list of task dependencies of the "default" task. The sequence of task execution is
  * Run the "html" task to bundle all src/.html files and save at dist/ folder.
  * Run the "connect" task to start the server on the localhost that listens on a specified port

Run *gulp* in the command line

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ gulp
[21:00:17] Using gulpfile ~/onGit/ReactJS-Sample-Apps/courses-app/gulpfile.js
[21:00:17] Starting 'html'...
[21:00:17] Finished 'html' after 13 ms
[21:00:17] Starting 'connect'...
[21:00:17] Finished 'connect' after 15 ms
[21:00:17] Starting 'default'...
[21:00:17] Finished 'default' after 23 μs
[21:00:17] Server started http://localhost:8999
```

Open a browser and open "localhost:8999" to make a request to the server for "index.html". The server finds it in "dist" folder specified to it in "root" attribute, and responds to the browser request with the file "index.html".

![](_misc/Browser%20snapshot.png)


Create a Gulp task to watch for changes in .html files under the "src" files and automatically run the "html" task to re-bundle the .html files under the "src/" directory and place them in the "dist/" directory, so that the server can serve the updated .html files from the "dist/" directory.

*gulpfile.js*

```js
"use strict";

var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var gulpOpen = require('gulp-open');

var config = {
  dev: {
    port: 8999,
    baseUrl: 'http://localhost',
  },
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
}

gulp.task('connect', function() {
  gulpConnect.server({
    root: [config.paths.dist],
    port: config.dev.port
  });
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
});

gulp.task('watch', function() {                       ------  1
  gulp.watch(config.paths.html, ['html']);            ------  2
});

gulp.task('default', ['html', 'connect', 'watch']);   ------  3
```

1] Create a Gulp task called "watch" and pass it a function that would be executed when the task is run.

2] Call *gulp.watch()* method and pass it a glob to watch for changes in .html files under "src/" directory, and the task "html" that needs to be run whenever changes are detected.

3] Add the "watch" task to the list of task dependencies of the "default" task. The sequence of task execution is
  * Run the "html" task to bundle all src/.html files and save at dist/ folder.
  * Run the "connect" task to start the server on the localhost that listens on a specified port
  * Run the "watch" task to observe for changes in src/.html files and re-runs the "html" task on changes.


Terminate previous *gulp* session and re-run the *gulp* command

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ gulp
[21:02:45] Using gulpfile ~/onGit/ReactJS-Sample-Apps/courses-app/gulpfile.js
[21:02:45] Starting 'html'...
[21:02:45] Finished 'html' after 14 ms
[21:02:45] Starting 'connect'...
[21:02:45] Finished 'connect' after 15 ms
[21:02:45] Starting 'watch'...
[21:02:45] Finished 'watch' after 16 ms
[21:02:45] Starting 'default'...
[21:02:45] Finished 'default' after 2.71 μs
[21:02:45] Server started http://localhost:8999
```

Make changes to the "src/index.html" file

*src/index.html*

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Courses App</title>
  </head>
  <body>
    <h1>Welcome to Courses App - Thank you</h1>         ----------
  </body>
</html>
```

On saving the changes, notice from the command line that the "html" Gulp task is run

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ gulp
[21:02:45] Using gulpfile ~/onGit/ReactJS-Sample-Apps/courses-app/gulpfile.js
[21:02:45] Starting 'html'...
[21:02:45] Finished 'html' after 14 ms
[21:02:45] Starting 'connect'...
[21:02:45] Finished 'connect' after 15 ms
[21:02:45] Starting 'watch'...
[21:02:45] Finished 'watch' after 16 ms
[21:02:45] Starting 'default'...
[21:02:45] Finished 'default' after 2.71 μs
[21:02:45] Server started http://localhost:8999
[21:03:42] Starting 'html'...                                 <-------------
[21:03:42] Finished 'html' after 5.91 ms
```

Refresh the browser to view the updated "index.html" file placed in "dist/" directory by the "html" Gulp task.

![](_misc/Browser%20snapshot%20-%20after%20making%20changes.png)

Create a new Gulp task to open the browser with the request to "http://localhost:8999/" automatically.

```js
"use strict";

var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var gulpOpen = require('gulp-open');

var config = {
  dev: {
    port: 8999,
    baseUrl: 'http://localhost',
  },
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
}

gulp.task('connect', function() {
  gulpConnect.server({
    root: [config.paths.dist],
    port: config.dev.port
  });
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
});

gulp.task('open', ['connect'], function() {                      <------- 1
  gulp.src('dist/index.html')                                    <------- 2
      .pipe(gulpOpen({ uri: config.dev.baseUrl + ':' + config.dev.port + '/'}));       <------- 3
});

gulp.task('default', ['html', 'open', 'watch']);                 <------- 4
```

1] Create a Gulp task called "open" and make it dependent on the "connect" task, to ensure that the server is started before making an attempt to launch the browser with the URL and sending a request to the server.

2] The idea here is to open a URL in the default browser set in the current OS. A URL can be opened by calling an instance of the *gulp-open* module and passing it the URI. *gulp.src()* is used only to invoke the *pipe()* method, and the argument passed to the *gulp.src()* does not matter as long as it is valid, so the path "dist/index.html" is just a placeholder. 

3] Use the *gulp-open* module's instance in the *pipe()* method and pass it the URI to be opened in the default browser. 

4] As the "open" task is dependent on the "connect" task, the "connect" task can be replaced with the "open" task in the list of dependecy tasks of the *default* task.

Terminate the previous *gulp* session and re-run it in the command line. Notice that the URL is opened in the browser automatically.

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ gulp
[22:13:39] Using gulpfile ~/onGit/ReactJS-Sample-Apps/courses-app/gulpfile.js
[22:13:39] Starting 'html'...
[22:13:39] Finished 'html' after 13 ms
[22:13:39] Starting 'connect'...
[22:13:39] Finished 'connect' after 15 ms
[22:13:39] Starting 'open'...
[22:13:39] Finished 'open' after 4.78 ms
[22:13:39] Starting 'watch'...
[22:13:39] Finished 'watch' after 14 ms
[22:13:39] Starting 'default'...
[22:13:39] Finished 'default' after 4.04 μs
[22:13:39] Server started http://localhost:8999
[22:13:39] Opening http://localhost:8999/ using the default OS app      <---------
```

This launches the browser with the url "http://localhost:8999/", without having to manually open the browser and requesting that URL. 

Configure live-reloading to allow changes to be automatically reflected in the browser.

```js
"use strict";

var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var gulpOpen = require('gulp-open');

var config = {
  dev: {
    port: 8999,
    baseUrl: 'http://localhost',
  },
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
}

gulp.task('connect', function() {
  gulpConnect.server({
    root: [config.paths.dist],
    port: config.dev.port,
    livereload: true                              <------- 1
  });
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(gulpConnect.reload());                <------- 2
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
      .pipe(gulpOpen({ uri: config.dev.baseUrl + ':' + config.dev.port + '/'}));
});

gulp.task('default', ['html', 'open', 'watch']);
```

1]  ~~ Both the lines are needed for live-reloading to work. Need to figure out how it works internally.

2]  ~~

Terminate and re-run the *gulp* session

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ gulp
[09:32:52] Using gulpfile ~/onGit/ReactJS-Sample-Apps/courses-app/gulpfile.js
[09:32:52] Starting 'html'...
[09:32:52] Finished 'html' after 14 ms
[09:32:52] Starting 'connect'...
[09:32:52] Finished 'connect' after 15 ms
[09:32:52] Starting 'open'...
[09:32:52] Finished 'open' after 4.69 ms
[09:32:52] Starting 'watch'...
[09:32:52] Finished 'watch' after 13 ms
[09:32:52] Starting 'default'...
[09:32:52] Finished 'default' after 2.5 μs
[09:32:52] Server started http://localhost:8999
[09:32:52] LiveReload started on port 35729                         <--------
[09:32:52] Opening http://localhost:8999/ using the default OS app
```

This launches the browser with the url "http://localhost:8999/". 

![](_misc/Browser%20on%20live-reloading.png)

![](_misc/livereloadjs%20in%20browser.png)

Any changes made to "src/.html" files causes the "watch" task to run, which triggers the "html" task, which then bundles "src/.html" files to "dist/" directory and then calls a server reload, which then causes the browser to get the updated contents of the "dist/" directory without a manual refresh.

### Configuring *gulp* task to handle JavaScript

**Install Dependencies**

*Browserify* (https://www.npmjs.com/package/browserify) which uses the CommonJS pattern of modules

*Reactify* (https://www.npmjs.com/package/reactify) to compile JSX of React to JavaScript

*Vinyl-source-stream* (https://www.npmjs.com/package/vinyl-source-stream) to allow text streams to be used with *gulp*

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ npm install browserify reactify vinyl-source-stream --save
npm WARN deprecated react-tools@0.13.3: react-tools is deprecated. For more information, visit https://fb.me/react-tools-deprecated
npm WARN prefer global react-tools@0.13.3 should be installed with -g
courses-app@1.0.0 /home/droid/onGit/ReactJS-Sample-Apps/courses-app
├─┬ browserify@13.1.1 
│ ├── assert@1.3.0 
│ ├─┬ browser-pack@6.0.1 
│ │ ├─┬ combine-source-map@0.7.2 
│ │ │ ├── convert-source-map@1.1.3 
│ │ │ ├── inline-source-map@0.6.2 
│ │ │ ├── lodash.memoize@3.0.4 
│ │ │ └── source-map@0.5.6 
│ │ └── umd@3.0.1 
│ ├── browser-resolve@1.11.2 
│ ├─┬ browserify-zlib@0.1.4 
│ │ └── pako@0.2.9 
│ ├─┬ buffer@4.9.1 
│ │ ├── base64-js@1.2.0 
│ │ ├── ieee754@1.1.8 
│ │ └── isarray@1.0.0 
│ ├── cached-path-relative@1.0.0 
│ ├─┬ concat-stream@1.5.2 
│ │ ├─┬ readable-stream@2.0.6 
│ │ │ └── isarray@1.0.0 
│ │ └── typedarray@0.0.6 
│ ├─┬ console-browserify@1.1.0 
│ │ └── date-now@0.1.4 
│ ├── constants-browserify@1.0.0 
│ ├─┬ crypto-browserify@3.11.0 
│ │ ├─┬ browserify-cipher@1.0.0 
│ │ │ ├─┬ browserify-aes@1.0.6 
│ │ │ │ └── buffer-xor@1.0.3 
│ │ │ ├─┬ browserify-des@1.0.0 
│ │ │ │ └─┬ des.js@1.0.0 
│ │ │ │   └── minimalistic-assert@1.0.0 
│ │ │ └── evp_bytestokey@1.0.0 
│ │ ├─┬ browserify-sign@4.0.0 
│ │ │ ├── bn.js@4.11.6 
│ │ │ ├── browserify-rsa@4.0.1 
│ │ │ ├─┬ elliptic@6.3.2 
│ │ │ │ ├── brorand@1.0.6 
│ │ │ │ └── hash.js@1.0.3 
│ │ │ └─┬ parse-asn1@5.0.0 
│ │ │   └── asn1.js@4.9.0 
│ │ ├── create-ecdh@4.0.0 
│ │ ├─┬ create-hash@1.1.2 
│ │ │ ├── cipher-base@1.0.3 
│ │ │ └── ripemd160@1.0.1 
│ │ ├── create-hmac@1.1.4 
│ │ ├─┬ diffie-hellman@5.0.2 
│ │ │ └── miller-rabin@4.0.0 
│ │ ├── pbkdf2@3.0.9 
│ │ ├── public-encrypt@4.0.0 
│ │ └── randombytes@2.0.3 
│ ├── defined@1.0.0 
│ ├── deps-sort@2.0.0 
│ ├── domain-browser@1.1.7 
│ ├── duplexer2@0.1.4 
│ ├── events@1.1.1 
│ ├─┬ glob@5.0.15 
│ │ └── path-is-absolute@1.0.1 
│ ├─┬ has@1.0.1 
│ │ └── function-bind@1.1.0 
│ ├── htmlescape@1.1.1 
│ ├── https-browserify@0.0.1 
│ ├─┬ insert-module-globals@7.0.1 
│ │ └─┬ lexical-scope@1.2.0 
│ │   └─┬ astw@2.0.0 
│ │     └── acorn@1.2.2 
│ ├─┬ JSONStream@1.2.1 
│ │ └── jsonparse@1.2.0 
│ ├─┬ labeled-stream-splicer@2.0.0 
│ │ └─┬ stream-splicer@2.0.0 
│ │   └─┬ readable-stream@2.2.2 
│ │     └── isarray@1.0.0 
│ ├─┬ module-deps@4.0.8 
│ │ ├─┬ detective@4.3.2 
│ │ │ └── acorn@3.3.0 
│ │ ├── duplexer2@0.1.4 
│ │ ├─┬ readable-stream@2.2.2 
│ │ │ └── isarray@1.0.0 
│ │ └─┬ stream-combiner2@1.1.1 
│ │   ├── duplexer2@0.1.4 
│ │   └─┬ readable-stream@2.2.2 
│ │     └── isarray@1.0.0 
│ ├── os-browserify@0.1.2 
│ ├─┬ parents@1.0.1 
│ │ └── path-platform@0.11.15 
│ ├── path-browserify@0.0.0 
│ ├── process@0.11.9 
│ ├── punycode@1.4.1 
│ ├── querystring-es3@0.2.1 
│ ├─┬ read-only-stream@2.0.0 
│ │ └─┬ readable-stream@2.2.2 
│ │   └── isarray@1.0.0 
│ ├─┬ readable-stream@2.2.2 
│ │ ├── buffer-shims@1.0.0 
│ │ └── isarray@1.0.0 
│ ├─┬ shasum@1.0.2 
│ │ ├── json-stable-stringify@0.0.1 
│ │ └── sha.js@2.4.8 
│ ├─┬ shell-quote@1.6.1 
│ │ ├── array-filter@0.0.1 
│ │ ├── array-map@0.0.0 
│ │ ├── array-reduce@0.0.0 
│ │ └── jsonify@0.0.0 
│ ├─┬ stream-browserify@2.0.1 
│ │ └─┬ readable-stream@2.2.2 
│ │   └── isarray@1.0.0 
│ ├─┬ stream-http@2.5.0 
│ │ ├── builtin-status-codes@2.0.0 
│ │ ├─┬ readable-stream@2.2.2 
│ │ │ └── isarray@1.0.0 
│ │ └── to-arraybuffer@1.0.1 
│ ├── subarg@1.0.0 
│ ├─┬ syntax-error@1.1.6 
│ │ └── acorn@2.7.0 
│ ├── timers-browserify@1.4.2 
│ ├── tty-browserify@0.0.0 
│ ├─┬ url@0.11.0 
│ │ ├── punycode@1.3.2 
│ │ └── querystring@0.2.0 
│ ├─┬ util@0.10.3 
│ │ └── inherits@2.0.1 
│ └─┬ vm-browserify@0.0.4 
│   └── indexof@0.0.1 
├─┬ reactify@1.1.1 
│ └─┬ react-tools@0.13.3 
│   ├─┬ commoner@0.10.4 
│   │ ├─┬ commander@2.9.0 
│   │ │ └── graceful-readlink@1.0.1 
│   │ ├── glob@5.0.15 
│   │ ├── private@0.1.6 
│   │ ├── q@1.4.1 
│   │ └─┬ recast@0.10.43 
│   │   ├── ast-types@0.8.15 
│   │   └── esprima-fb@15001.1001.0-dev-harmony-fb 
│   └─┬ jstransform@10.1.0 
│     ├── base62@0.1.1 
│     ├── esprima-fb@13001.1001.0-dev-harmony-fb 
│     └─┬ source-map@0.1.31 
│       └── amdefine@1.0.1 
└─┬ vinyl-source-stream@1.1.0 
  ├─┬ through2@0.6.5 
  │ └── readable-stream@1.0.34 
  └─┬ vinyl@0.4.6 
    └── clone@0.2.0 

npm WARN courses-app@1.0.0 No repository field.
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
    "browserify": "^13.1.1",
    "gulp": "^3.9.1",
    "gulp-connect": "^5.0.0",
    "gulp-open": "^2.0.0",
    "reactify": "^1.1.1",
    "vinyl-source-stream": "^1.1.0"
  }
}
```

**Create a simple script**

*src/app.js*

```javascript
var App = greet();

function greet() {
  console.log('Hello, I am the script!');
}

module.exports = App;
```

**Creating a gulp task to handle JavaScript files**

*gulpfile.js*

```js
"use strict";

var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var gulpOpen = require('gulp-open');
var browserify = require('browserify');                 <-------- 1
var reactify = require('reactify');
var vinylSourceStream = require('vinyl-source-stream');

var config = {
  dev: {
    port: 8999,
    baseUrl: 'http://localhost',
  },
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',                                <-------- 2
    dist: './dist',
    appJs: './src/app.js'                               <-------- 3
  }
}

gulp.task('connect', function() {
  gulpConnect.server({
    root: [config.paths.dist],
    port: config.dev.port,
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(gulpConnect.reload());
});

gulp.task('js', function() {                            <-------- 4
  browserify(config.paths.appJs)                        <-------- 5
      .transform(reactify)                              <-------- 6
      .bundle()                                         <-------- 7
      .on('error', console.error.bind(console))         <-------- 8
      .pipe(vinylSourceStream('bundle.js'))             <-------- 9
      .pipe(gulp.dest(config.paths.dist + '/scripts'))  <-------- 10
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);                  <-------- 11
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
      .pipe(gulpOpen({ uri: config.dev.baseUrl + ':' + config.dev.port + '/'}));
});

gulp.task('default', ['html', 'js', 'open', 'watch']);  <-------- 12
```

1] Import the required packages

2] Add property to the config object to refer to all .js files under "src/" at any depth

3] Add property to the config object to refer to the main .js file "src/app.js"

4] Define a task called "js" and a function that should run when this task is called

5] Call an instance of the *browserify* module and pass it the path to the main .js file "src/app.js"

6] Call *transform()* method of *browserify* and pass it an instance of *reactify* to compile any JSX to JavaScript

7] Call *bundle()* method of *browserify* to bundle all JavaScript files into one to save on the number of HTTP requests

8] In case of any error, log them to console

9] Define the name of the bundled JavaScript file

10] Define the destination path for the bundled JavaScript file

11] Watch for changes in the any of the .js files under "src/" at any depth and re-run the "js" task when changes occur

12] Add the "js" task to the set of "default" tasks, so it is run when the command *gulp* is run on the command line

**Including the script**

As the .js files would be bundled to "scripts/bundle.js", include that in the .html file

*src/index.html*

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Courses App</title>
  </head>
  <body>
    <h1>Welcome to Courses App!</h1>
    <script src="scripts/bundle.js"></script>         ------
  </body>
</html>
```

**Run Gulp**

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ gulp
[17:37:52] Using gulpfile ~/onGit/ReactJS-Sample-Apps/courses-app/gulpfile.js
[17:37:52] Starting 'html'...
[17:37:52] Finished 'html' after 17 ms
[17:37:52] Starting 'js'...
[17:37:52] Finished 'js' after 32 ms
[17:37:52] Starting 'connect'...
[17:37:52] Finished 'connect' after 20 ms
[17:37:52] Starting 'open'...
[17:37:52] Finished 'open' after 3.05 ms
[17:37:52] Starting 'watch'...
[17:37:52] Finished 'watch' after 22 ms
[17:37:52] Starting 'default'...
[17:37:52] Finished 'default' after 3.05 μs
[17:37:52] Server started http://localhost:8999
[17:37:52] LiveReload started on port 35729
[17:37:52] Opening http://localhost:8999/ using the default OS app
```

Running *gulp* launches the browser and the log from the script "src/app.js" is displayed in the console.

![](_misc/Browser%20screenshot%20-%20Console%20message.png)

Viewing the sources tab displays the following

![](_misc/Browser%20Screenshot%20-%20with%20bundlejs.png)

The generated "dist/scripts/bundle.js" file after the "js" task is run

![](_misc/bundlejs%20file%20generated.png)

*dist/scripts/bundle.js*

```javascript
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var App = greet();

function greet() {
  console.log('Hello, I am the script!');
}

module.exports = App;

},{}]},{},[1]);
```

Viewing the source in the browser

![](_misc/Browser%20Screenshot%20-%20View%20page%20source.png)

![](_misc/Viewing%20Page%20Source.png)

![](_misc/Page%20source%20in%20browser.png)

On refreshing "scripts/bundle.js" is displayed in the browser along with other "extension" entries.

~~ Why wasn't "scripts/bundle.js" displayed before the refresh?

~~ What are the "extension" entries?

![](_misc/Refresh%20Browser%20Screenshot.png)

**Configuring auto-reload**

Make changes to the javascript file

*src/app.js*

```javascript
var App = greet();

function greet() {
  console.log('Hello, World!');     <-----
}

module.exports = App;
```

These changes will not be reflected in the browser automatically. A manual refresh is necessary to see the updated console message in the browser.


```javascript
"use strict";

var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var gulpOpen = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var vinylSourceStream = require('vinyl-source-stream');

var config = {
  dev: {
    port: 8999,
    baseUrl: 'http://localhost',
  },
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    dist: './dist',
    appJs: './src/app.js'
  }
}

gulp.task('connect', function() {
  gulpConnect.server({
    root: [config.paths.dist],
    port: config.dev.port,
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(gulpConnect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.appJs)
      .transform(reactify)
      .bundle()
      .on('error', console.error.bind(console))
      .pipe(vinylSourceStream('bundle.js'))
      .pipe(gulp.dest(config.paths.dist + '/scripts'))
      .pipe(gulpConnect.reload());                    <--------- 1
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
      .pipe(gulpOpen({ uri: config.dev.baseUrl + ':' + config.dev.port + '/'}));
});

gulp.task('default', ['html', 'js', 'open', 'watch']);
```

1] Configure autoreload

Now any changes done to "src/app.js" will immediately reflect in the browser.

### Configuring Lint

**Install dependencies**

*gulp-eslint* (https://www.npmjs.com/package/gulp-eslint) to lint JS and JSX files

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ npm install gulp-eslint --save
courses-app@1.0.0 /home/droid/onGit/ReactJS-Sample-Apps/courses-app
└─┬ gulp-eslint@3.0.1 
  ├─┬ bufferstreams@1.1.1 
  │ └─┬ readable-stream@2.2.2 
  │   └── isarray@1.0.0 
  └─┬ eslint@3.10.2 
    ├─┬ babel-code-frame@6.16.0 
    │ └── js-tokens@2.0.0 
    ├─┬ doctrine@1.5.0 
    │ └── isarray@1.0.0 
    ├─┬ escope@3.6.0 
    │ ├─┬ es6-map@0.1.4 
    │ │ ├── d@0.1.1 
    │ │ ├── es5-ext@0.10.12 
    │ │ ├── es6-iterator@2.0.0 
    │ │ ├── es6-set@0.1.4 
    │ │ ├── es6-symbol@3.1.0 
    │ │ └── event-emitter@0.3.4 
    │ ├── es6-weak-map@2.0.1 
    │ └─┬ esrecurse@4.1.0 
    │   ├── estraverse@4.1.1 
    │   └── object-assign@4.1.0 
    ├─┬ espree@3.3.2 
    │ ├── acorn@4.0.3 
    │ └─┬ acorn-jsx@3.0.1 
    │   └── acorn@3.3.0 
    ├── estraverse@4.2.0 
    ├── esutils@2.0.2 
    ├─┬ file-entry-cache@2.0.0 
    │ ├─┬ flat-cache@1.2.1 
    │ │ ├── circular-json@0.3.1 
    │ │ ├─┬ del@2.2.2 
    │ │ │ ├─┬ globby@5.0.0 
    │ │ │ │ ├── array-union@1.0.2 
    │ │ │ │ ├── arrify@1.0.1 
    │ │ │ │ ├─┬ glob@7.1.1 
    │ │ │ │ │ └── minimatch@3.0.3 
    │ │ │ │ └── object-assign@4.1.0 
    │ │ │ ├── is-path-cwd@1.0.0 
    │ │ │ ├─┬ is-path-in-cwd@1.0.0 
    │ │ │ │ └── is-path-inside@1.0.0 
    │ │ │ ├── object-assign@4.1.0 
    │ │ │ └─┬ rimraf@2.5.4 
    │ │ │   └─┬ glob@7.1.1 
    │ │ │     └── minimatch@3.0.3 
    │ │ └── write@0.2.1 
    │ └── object-assign@4.1.0 
    ├─┬ glob@7.1.1 
    │ ├── fs.realpath@1.0.0 
    │ └── minimatch@3.0.3 
    ├── globals@9.13.0 
    ├── ignore@3.2.0 
    ├── imurmurhash@0.1.4 
    ├─┬ inquirer@0.12.0 
    │ ├── ansi-escapes@1.4.0 
    │ ├─┬ cli-cursor@1.0.2 
    │ │ └─┬ restore-cursor@1.0.1 
    │ │   ├── exit-hook@1.1.1 
    │ │   └── onetime@1.1.0 
    │ ├── cli-width@2.1.0 
    │ ├─┬ figures@1.7.0 
    │ │ └── object-assign@4.1.0 
    │ ├── lodash@4.17.2 
    │ ├─┬ readline2@1.0.1 
    │ │ ├── code-point-at@1.1.0 
    │ │ ├── is-fullwidth-code-point@1.0.0 
    │ │ └── mute-stream@0.0.5 
    │ ├── run-async@0.1.0 
    │ ├── rx-lite@3.1.2 
    │ └── string-width@1.0.2 
    ├─┬ is-my-json-valid@2.15.0 
    │ ├── generate-function@2.0.0 
    │ ├─┬ generate-object-property@1.2.0 
    │ │ └── is-property@1.0.2 
    │ └── jsonpointer@4.0.0 
    ├─┬ is-resolvable@1.0.0 
    │ └── tryit@1.0.3 
    ├─┬ js-yaml@3.7.0 
    │ ├─┬ argparse@1.0.9 
    │ │ └── sprintf-js@1.0.3 
    │ └── esprima@2.7.3 
    ├── json-stable-stringify@1.0.1 
    ├─┬ levn@0.3.0 
    │ ├── prelude-ls@1.1.2 
    │ └── type-check@0.3.2 
    ├── lodash@4.17.2 
    ├── natural-compare@1.4.0 
    ├─┬ optionator@0.8.2 
    │ ├── deep-is@0.1.3 
    │ ├── fast-levenshtein@2.0.5 
    │ └── wordwrap@1.0.0 
    ├── path-is-inside@1.0.2 
    ├── pluralize@1.2.1 
    ├── progress@1.1.8 
    ├─┬ require-uncached@1.0.3 
    │ ├─┬ caller-path@0.1.0 
    │ │ └── callsites@0.2.0 
    │ └── resolve-from@1.0.1 
    ├─┬ shelljs@0.7.5 
    │ └─┬ glob@7.1.1 
    │   └── minimatch@3.0.3 
    ├── strip-bom@3.0.0 
    ├── strip-json-comments@1.0.4 
    ├─┬ table@3.8.3 
    │ ├─┬ ajv@4.9.0 
    │ │ ├── co@4.6.0 
    │ │ └── json-stable-stringify@1.0.1 
    │ ├── ajv-keywords@1.1.1 
    │ ├── lodash@4.17.2 
    │ ├── slice-ansi@0.0.4 
    │ └─┬ string-width@2.0.0 
    │   └── is-fullwidth-code-point@2.0.0 
    ├── text-table@0.2.0 
    └── user-home@2.0.0 

npm WARN courses-app@1.0.0 No repository field.
```

*gulpfile.js*

```javascript
"use strict";

var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var gulpOpen = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var vinylSourceStream = require('vinyl-source-stream');
var gulpEslint = require('gulp-eslint');                  <-------- 1

var config = {
  dev: {
    port: 8999,
    baseUrl: 'http://localhost',
  },
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    dist: './dist',
    appJs: './src/app.js'
  }
}

gulp.task('connect', function() {
  gulpConnect.server({
    root: [config.paths.dist],
    port: config.dev.port,
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(gulpConnect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.appJs)
      .transform(reactify)
      .bundle()
      .on('error', console.error.bind(console))
      .pipe(vinylSourceStream('bundle.js'))   
      .pipe(gulp.dest(config.paths.dist + '/scripts'))
      .pipe(gulpConnect.reload());
});

gulp.task('lint', function() {                              <-------- 2
  return gulp.src(config.paths.js)                          <-------- 3
      .pipe(gulpEslint('eslint.config.json'))               <-------- 4
      .pipe(gulpEslint.format());                           <-------- 5
})

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js', 'lint']);              <-------- 6
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
      .pipe(gulpOpen({ uri: config.dev.baseUrl + ':' + config.dev.port + '/'}));
});

gulp.task('default', ['html', 'js', 'lint', 'open', 'watch']);    <-------- 7
```

*eslint.config.json*

```json
{
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": true
  },
  "rules": {
    "quotes": 0,
    "no-trailing-spaces": 0,
    "eol-last": 0,
    "no-unused-vars": 0,
    "no-underscore-dangle": 0,
    "no-alert": 0,
    "no-lone-blocks": 0
  }
}
```

```sh
droid@droidserver:~/onGit/ReactJS-Sample-Apps/courses-app$ gulp
[21:48:17] Using gulpfile ~/onGit/ReactJS-Sample-Apps/courses-app/gulpfile.js
[21:48:17] Starting 'html'...
[21:48:17] Finished 'html' after 13 ms
[21:48:17] Starting 'js'...
[21:48:17] Finished 'js' after 25 ms
[21:48:17] Starting 'lint'...
[21:48:17] Starting 'connect'...
[21:48:17] Finished 'connect' after 14 ms
[21:48:17] Starting 'open'...
[21:48:17] Finished 'open' after 1.4 ms
[21:48:17] Starting 'watch'...
[21:48:17] Finished 'watch' after 17 ms
[21:48:17] Server started http://localhost:8999
[21:48:17] LiveReload started on port 35729
[21:48:18] 
/home/droid/onGit/ReactJS-Sample-Apps/courses-app/src/app.js
  4:3  error  Unexpected console statement  no-console

✖ 1 problem (1 error, 0 warnings)

[21:48:18] Finished 'lint' after 521 ms
[21:48:18] Starting 'default'...
[21:48:18] Finished 'default' after 2.3 μs
[21:48:18] Opening http://localhost:8999/ using the default OS app
```

Notice that *gulp-eslint* is complaning about the *console.log()* in the following file

*src/app.js*

```javascript
var App = greet();

function greet() {
  console.log('Hello, I am the script!');      <----
}

module.exports = App;
```

*src/app.js*

```javascript
var App = greet();

function greet() {      <----
}

module.exports = App;
```

After making changes to the "src/app.js" file, the "js" and "lint" gulp tasks are run. The "link" task does not complain anymore. 

```sh
[21:48:51] Starting 'js'...
[21:48:51] Finished 'js' after 29 ms
[21:48:51] Starting 'lint'...
[21:48:51] Finished 'lint' after 62 ms
```
