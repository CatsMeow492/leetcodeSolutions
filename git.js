const { exec } = require('child_process');

const commitMessage = process.argv[2];

if (!commitMessage) {
  console.error('Commit message is required');
  process.exit(1);
}

// Add all files, commit with message, and push to origin master
exec(`git add . && git commit -m "${commitMessage}" && git push origin master`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Pushed to GitHub with message: "${commitMessage}"`);
});
