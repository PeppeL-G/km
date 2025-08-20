<script setup lang="ts">
	
	import { reactive } from 'vue'
	
	const htmlTags = [
		"a", "abbr", "address", "area", "article", "aside", "audio",
		"b", "base", "bdi", "bdo", "blockquote", "body", "br", "button",
		"canvas", "caption", "cite", "code", "col", "colgroup",
		"data", "datalist", "dd", "del", "details", "dfn", "dialog", "div",
		"dl", "dt", "em", "embed", "fieldset", "figcaption", "figure",
		"footer", "form", "h1", "h2", "h3", "h4", "h5", "h6",
		"head", "header", "hgroup", "hr", "html", "i", "iframe", "img",
		"input", "ins", "kbd", "keygen", "label", "legend", "li", "link",
		"main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav",
		"noscript", "object", "ol", "optgroup", "option", "output", "p",
		"param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc",
		"ruby", "s", "samp", "script", "section", "select", "small", "source",
		"span", "strong", "style", "sub", "summary", "sup", "table",
		"tbody", "td", "template", "textarea", "tfoot", "th", "thead",
		"time", "title", "tr", "track", "u", "ul", "var", "video", "wbr",
	]
	
	const state = reactive({
		currentGuess: ``,
		guesses: [``].slice(0, 0),
	})
	
	function addGuess(){
		
		const enteredGuess = state.currentGuess.toLocaleLowerCase()
		
		if(!state.guesses.includes(enteredGuess)){
			state.guesses.push(enteredGuess)
		}
		
		
		state.currentGuess = ``
		
	}
	
	function getNumberOfCorrectGuesses(){
		
		let numberOfCorrectGuesses = 0
		
		for(const guess of state.guesses){
			
			if(htmlTags.includes(guess)){
				numberOfCorrectGuesses += 1
			}
			
		}
		
		return numberOfCorrectGuesses
		
	}
	
	function getNumberOfIncorrectGuesses(){
		
		let numberOfIncorrectGuesses = 0
		
		for(const guess of state.guesses){
			
			if(!htmlTags.includes(guess)){
				numberOfIncorrectGuesses += 1
			}
			
		}
		
		return numberOfIncorrectGuesses
		
	}
	
</script>

<template>
	
	<p>
		Det finns {{htmlTags.length}} olika taggar i HTML.
		<span v-if="state.guesses.length == 0">Hur många kan du?</span>
		<span v-else-if="0 < getNumberOfCorrectGuesses()">
			Du har {{getNumberOfCorrectGuesses()}} rätt<span v-if="0 < getNumberOfIncorrectGuesses()"> (och {{getNumberOfIncorrectGuesses()}} fel)</span>.
		</span>
		<span v-else>Du har {{getNumberOfIncorrectGuesses()}} fel.</span>
	</p>
	
	<form @submit.prevent="addGuess()">
		
		<fieldset>
			
			<legend>Skriv in HTML tagg</legend>
			
			<div class="input-wrapper">
				<span class="prefix">&lt;</span>
				<input type="text" v-model="state.currentGuess" :size="state.currentGuess.length + 1">
				<span class="suffix">&gt;</span>
			</div>
			
			<input type="submit" value="Enter!" :disabled="state.currentGuess == ``">
			
		</fieldset>
		
	</form>
	
	<div v-if="0 < state.guesses.length">
		
		<ul>
			
			<li
				v-for="guess in state.guesses"
				:class="{
					correct: htmlTags.includes(guess),
					incorrect: !htmlTags.includes(guess),
				}"
			>
				<{{guess}}>
			</li>
			
		</ul>
		
	</div>
	
</template>

<style scoped>
	
	fieldset{
		padding: 1em;
		display: inline-flex;
		gap: 1em;
	}
	
	.input-wrapper{
		display: inline-flex;
		align-items: center;
		border: 1px solid #ccc;
		border-radius: 4px;
		background: white;
		padding: 0 8px;
		font-family: sans-serif;
	}
	
	.prefix,
	.suffix{
		color: #666;
		user-select: none;
		font-size: 14px;
	}
	
	input[type="text"]{
		all: unset;
		flex: 1;
		padding: 6px 8px;
		font-size: 14px;
		border-radius: 0;
		text-align: center;
		font-family: 'Courier New', Courier, monospace;
		font-weight: bold;
	}
	
	input[type="submit"]{
		all: unset;
		cursor: pointer;
		padding: 0.5em 1em;
		border: 1px solid #aaa;
		border-radius: 4px;
		background-color: white;
		color: black;
		background-color: rgb(221, 221, 221);
	}
	
	li{
		font-family: 'Courier New', Courier, monospace;
		font-weight: bold;
	}
	
	.correct{
		color: green;
	}
	
	.incorrect{
		color: red;
	}
	
</style>