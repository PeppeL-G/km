function isActivated(){
	
	return window.document.documentElement.classList.contains('dark')
	
}

function observeDarkMode(listener: (isDark: boolean) => void){
	
	const observer = new MutationObserver(
		() => listener(isActivated())
	)
	
	observer.observe(
		window.document.documentElement,
		{ attributes: true, attributeFilter: ['class'] },
	)
	
	function stopObserving(){
		observer.disconnect()
	}
	
	return stopObserving
	
}

export default {
	isActivated,
	observeDarkMode,
}