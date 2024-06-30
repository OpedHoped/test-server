const { exec } = require("child_process");

exec('git commit -a -m "new"', (err, stdout, stderr)=> {
    console.error(stderr);
    console.log(stdout);
})

exec('git push origin', (err, stdout, stderr)=> {
    console.error(stderr);
    console.log(stdout);
})