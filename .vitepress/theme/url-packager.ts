import { deflate, inflate, } from 'pako'
import { fromUint8Array, toUint8Array } from 'js-base64'

export function packageToUrl(unpackagedData: string){
	
	const compressedIntArray = deflate(unpackagedData, { level: 9 })
	const compressedBase64 = fromUint8Array(compressedIntArray)
	return compressedBase64
	
}

export function unpackageFromUrl(packagedData: string){
	
	const compressedIntArray = toUint8Array(packagedData)
	const unpackagedData = inflate(compressedIntArray, { to: 'string' })
	
	return unpackagedData
	
}