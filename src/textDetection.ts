import { ArgumentParser } from "argparse"
import { VisionApi } from "./lib/google/VisionApi"

async function main() {
    const parser = new ArgumentParser({
        description: 'Text Detection (Google Cloud Vision API - OCR -)',
        add_help: true
    })
    parser.add_argument('-p', '--path', {help: "image file path or URL", required: true})
    const args = parser.parse_args()

    const va = new VisionApi()
    va.detectText(args.path)
}

main()
