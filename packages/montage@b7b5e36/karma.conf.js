module.exports=function(e){e.set({basePath:".",frameworks:["jasmine"],browserNoActivityTimeout:3e4,files:["test/run-karma.js",{pattern:"package.json",included:!1},{pattern:"montage.js",included:!1},{pattern:"core/**/*.js",included:!1},{pattern:"core/**/*.mjson",included:!1},{pattern:"composer/**/*.js",included:!1},{pattern:"data/**/*.js",included:!1},{pattern:"ui/**/*.js",included:!1},{pattern:"ui/**/*.meta",included:!1},{pattern:"ui/**/*.html",included:!1},{pattern:"ui/**/*.css",included:!1},{pattern:"window-loader/**/*.js",included:!1},{pattern:"test/**/*.js",included:!1},{pattern:"test/**/*.json",included:!1},{pattern:"test/**/*.mjson",included:!1},{pattern:"test/**/*.html",included:!1},{pattern:"test/**/*.meta",included:!1},{pattern:"test/**/*.css",included:!1},{pattern:"node_modules/**/*.json",included:!1},{pattern:"node_modules/**/*.css",included:!1},{pattern:"node_modules/**(jshint|bluebird|mr|montage-testing)/**/*",included:!1}],exclude:[],preprocessors:{"montage.js":"coverage","core/**/*.js":"coverage","data/**/*.js":"coverage","ui/**/*.js":"coverage","composer/**/*.js":"coverage","window-loader/**/*.js":"coverage"},reporters:["coverage","progress"],coverageReporter:{type:"html",dir:"report/coverage/"},port:9876,colors:!0,logLevel:e.LOG_INFO,autoWatch:!0,browsers:["phantomjsLauncher"],customLaunchers:{phantomjsLauncher:{exitOnResourceError:!0,base:"PhantomJS",options:{settings:{webSecurityEnabled:!1,ignoreSSLErrors:!0}},flags:["--ssl-protocol=tlsv1","--load-images=no","--ignore-ssl-errors=yes"]},PhantomJS_debug:{base:"PhantomJS",debug:!0,options:{settings:{webSecurityEnabled:!1,ignoreSSLErrors:!0}},flags:["--web-security=false","--ssl-protocol=tlsv1","--load-images=no","--ignore-ssl-errors=yes","--ssl-client-certificate-file=./development/origin-server/rest-accelerator.example.com.crt","--ssl-client-key-file=./development/origin-server/rest-accelerator.example.com.key"]},firefoxLauncher:{base:"Firefox",prefs:{"security.ssl.enable_ocsp_stapling":!1}},Chrome_without_security:{base:"Chrome",flags:["--ignore-certificate-errors=true","--user-data-dir=./tmp","--allow-insecure-localhost","--allow-running-insecure-content"]},Chrome_travis_ci:{base:"Chrome",flags:["--no-sandbox","--ignore-certificate-errors=true","--user-data-dir=./tmp","--allow-insecure-localhost","--allow-running-insecure-content"]}},singleRun:!0,concurrency:1/0,plugins:["karma-jasmine","karma-coverage","karma-chrome-launcher","karma-firefox-launcher","karma-safari-launcher","karma-ie-launcher","karma-phantomjs-launcher"]})};