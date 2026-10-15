const { execSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const packageJsonPath = path.resolve(__dirname, '..', 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath).toString())

execSync(`git add . && git commit -m "${packageJson.version}"`, {
  stdio: 'inherit',
  env: {
    ...process.env,
  },
})
