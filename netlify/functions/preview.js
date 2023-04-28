import { groqStore } from '@sanity/groq-store'
import SanityEventSource from '@sanity/eventsource'


const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET;
const token = process.env.SANITY_STUDIO_TOKEN;

export async function handler(event, context) {
    const {
        type,
        slug,
    } = event.queryStringParameters;
    try {

        const previewClient = groqStore({
            dataset,
            projectId,
            overlayDrafts: true,
            listen: true,
            EventSource: SanityEventSource,
            token //NEEDED TO GET DRAFTS
        });

        const response = await previewClient.query(`*[_type=="${type}" && slug.current == "${slug}"][0]{
            ..., 
            content[] {
                ...,
                photographyGridItems[]{
                    ...,
                    photography-> {
                        _id,
                        featuredImage,
                        slug,
                        title
                    }
                }
            }
          }`);
        const data = response
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                data: data
            })
        }
    } catch (err) {
        console.log(err) // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({
                data: err.message
            }) // Could be a custom message or object i.e. JSON.stringify(err)        
        }
    }
}