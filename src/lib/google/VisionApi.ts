import { ImageAnnotatorClient } from "@google-cloud/vision"

export class VisionApi {
    async detectText(fileName: string) {
        const client = new ImageAnnotatorClient()
        const [ result ] = await client.textDetection(fileName)
        const detections = result.textAnnotations
        console.log('Text: ')
        detections?.forEach( text => {
            console.log(text.description)
        })
    }
}
