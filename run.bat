pushd %~dp0
call npm i --no-audit
node main.js
pause
popd