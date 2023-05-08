import path from 'path'
import fs from 'fs'


// const filePath = path.resolve(__dirname, 'artifacts/contracts', 'Mood.sol', 'Mood.json')
// const filePath = path.resolve(__dirname, 'artifacts/contracts', 'SlaveToken.sol', 'SlaveToken.json')
const filePath = path.resolve(__dirname, 'artifacts/contracts', 'PunishNft.sol', 'PunishNft.json')
const src = fs.readFileSync(filePath, 'utf8')


module.exports = JSON.parse(src)