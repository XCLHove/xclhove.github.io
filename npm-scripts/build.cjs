const { execSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const getVersion = () => {
  const now = new Date()
  const year = now.getFullYear().toString().substring(2, 4)
  const month = (now.getMonth() + 1).toString().padStart(2, '0')
  const day = now.getDate().toString().padStart(2, '0')
  const hour = now.getHours().toString().padStart(2, '0')
  const minute = now.getMinutes().toString().padStart(2, '0')
  const second = now.getSeconds().toString().padStart(2, '0')
  const version = `1.${year}${month}${day}.${hour}${minute}${second}`
  return version
}
const updateVersion = () => {
  const packageJsonPath = path.resolve(__dirname, '..', 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath).toString())
  packageJson.version = getVersion()
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
}
updateVersion()
execSync('npm run docs:build', {
  stdio: 'inherit',
  env: {
    ...process.env,
  },
})
