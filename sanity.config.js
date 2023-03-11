import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { myTheme } from 'theme'
// import Navbar from '@/app/admin/[[...index]]/components/Navbar'
import Logo from '@/app/admin/[[...index]]/components/Logo'
import { defaultDocumentNode, adminStructure } from 'structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/admin",
  name: 'Content_Studio',
  title: 'Content Studio',
  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: adminStructure,
      defaultDocumentNode: defaultDocumentNode
    }), 
    visionTool(),
    unsplashImageAsset()
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
      // navbar: Navbar
    }
  },

  theme: myTheme

})
