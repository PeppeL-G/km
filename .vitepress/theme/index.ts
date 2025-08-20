import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './result.css'
import './lessons.css'
import './custom-block-example.css'
import './custom-block-exercise.css'
import './edit-code.css'
import './mermaid.css'
import OnlineCoder from './OnlineCoder.vue'
import HtmlTagsMemoryTest from './HtmlTagsMemoryTest.vue'

export default {
	extends: DefaultTheme,
	enhanceApp(ctx){
		
		ctx.app.component(`OnlineCoder`, OnlineCoder)
		ctx.app.component(`HtmlTagsMemoryTest`, HtmlTagsMemoryTest)
		
	},
} satisfies Theme