<script setup lang="ts">
	
	import monacoLoader from '@monaco-editor/loader'
	import defaultPreviewHtml from './online-coder-default-preview.html?raw'
	import defaultHtml from './online-coder-default-html.html?raw'
	import defaultHtmlAndCss from './online-coder-default-html-and-css.html?raw'
	import defaultHtmlAndJs from './online-coder-default-html-and-js.html?raw'
	import defaultJs from './online-coder-default-js.js?raw'
	import jsResultPage from './online-coder-js-result.html?raw'
	import { ref } from 'vue'
	import darkMode from './dark-mode'
	import { packageToUrl, unpackageFromUrl, } from './url-packager'
	
	const {
		mode = 'html'
	} = defineProps<{
		mode?: string,
	}>()
	
	let previewIframe = ref(`previewIframe`)
	let editor: any = null
	let darkModeStopObserving: (() => void) | null = null
	
	function updatePreviewIframeMode(){
		
		previewIframe.value.contentDocument.documentElement.style.colorScheme = (
			darkMode.isActivated() ? `dark` : `light`
		)
		
	}
	
	const vInitEditor = {
		async mounted(el, binding, vnode){
			
			let value = ``
			let language = ``
			
			switch(mode){
				
				case `html`:
					
					value = defaultHtml
					language = 'html'
					
				break
				
				case `htmlCss`:
					
					value = defaultHtmlAndCss
					language = 'html'
					
				break
				
				case `htmlJs`:
					
					value = defaultHtmlAndJs
					language = 'html'
					
				break
				
				case `js`:
					
					value = defaultJs
					language = 'javascript'
					
				break
				
			}
			
			if(window.location.hash != ``){
				
				value = unpackageFromUrl(
					window.location.hash.substring(1),
				)
				
			}
			
			monacoLoader.config({
				paths: {
					vs: `https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs`,
				},
			})
			
			const monaco = await monacoLoader.init()
			
			editor = monaco.editor.create(el, {
				value,
				language,
				tabSize: 2,
				renderWhitespace: `all`,
				theme: darkMode.isActivated() ? `vs-dark` : `vs`,
			})
			
			darkModeStopObserving = darkMode.observeDarkMode(
				() => {
					monaco.editor.setTheme(darkMode.isActivated() ? `vs-dark` : `vs`)
					updatePreviewIframeMode()
				},
			)
			
		},
		
		unmounted(el, binding, vnode){
			editor.dispose()
			darkModeStopObserving?.()
		},
		
	}
	
	function preview(){
		
		let code = editor.getValue()
		
		if(mode == `js`){
			code = jsResultPage.replace(
				`{{{JS}}}`,
				code.replace(/`/g, '\\`'),
			)
		}
		
		previewIframe.value.srcdoc = code
		
	}
	
	function openCopyLink(){
		
		const url = new URL(window.location.href)
		url.hash = packageToUrl(editor.getValue())
		
		navigator.clipboard.writeText(
			url.toString(),
		)
		
	}
	
	function openNewPage(){
		
		const html = editor.getValue()
		const blob = new Blob([html], { type: 'text/html'});
		const url = URL.createObjectURL(blob);
		window.open(url, '_blank');
		
	}
	
</script>

<template>
	
	<div class="onlineCoder">
		
		<button
			class="copyButton"
			@click="openCopyLink"
			title="Kopiera länk till den här koden."
		>
			🔁
		</button>
		
		<button
			class="runButton"
			@click="preview"
			title="Kör koden på vänstersidan och visa resultatet på högersidan."
		>
			▶️
		</button>
		
		<button
			class="newPageButton"
			@click="openNewPage"
			v-if="mode != 'js'"
			title="Kör koden på vänstersidan och visa resultatet på en ny sida."
		>
			⤴️
		</button>
		
		<div class="editor" v-init-editor>
			
		</div>
		
		<iframe
			class="preview"
			ref="previewIframe"
			:srcdoc="defaultPreviewHtml"
			:onload="updatePreviewIframeMode"
		>
		</iframe>
		
	</div>
	
</template>

<style>
	
	.onlineCoder{
		
		height: calc(100vh - 11.5em);
		
		display: grid;
		gap: 1.25em;
		padding: 1.5em 0.5em;
		padding-bottom: 0;
		grid-template-rows: auto 1fr;
		grid-template-columns: 1fr auto auto 1fr;
		
	}
	
	.copyButton{
		justify-self: center;
		align-self: center;
	}
	
	.runButton{
		justify-self: center;
		align-self: center;
		grid-column: 2 / span 2;
	}
	
	.newPageButton{
		justify-self: center;
		align-self: center;
	}
	
	.editor{
		width: 100%;
		height: 100%;
		border: 1px solid black;
		grid-column: span 2;
	}
	
	.preview{
		border: 1px solid black;
		width: 100%;
		height: 100%;
		grid-column: span 2;
	}
	
	.onlineCoder button{
		color: black;
		display: inline-block;
		font-size: 3em;
	}
	
</style>