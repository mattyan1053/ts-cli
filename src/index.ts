import { ArgumentParser } from "argparse"

const { version } = require('../package.json')

const parser = new ArgumentParser({
    description: 'TypeScript-CLI',
    add_help: true,
})

parser.add_argument('-v', '--version', { action: 'version', version })
