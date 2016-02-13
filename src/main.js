import { deflate, inflate } from 'pako'
import { toByteArray, fromByteArray } from 'base64-js'

function encode(str){
	return new Uint8Array(Array.from(unescape(encodeURIComponent(str))).map(v => v.charCodeAt()))
}
function decode(uint){
	return decodeURIComponent(escape(Array.from(uint).map(v => String.fromCharCode(v)).join('')))
}

function extract(b64){
	try{
		var a=inflate(toByteArray(b64))
	} catch(e){
		return ''
	}
	return decode(a)
}

function compress(str){
	return fromByteArray(deflate(encode(str)))
}

var hash=location.hash.slice(1)
const dec=document.getElementById('decode')

if(hash!=='') dec.value=extract(hash)
dec.onchange=function(){location.hash=hash=compress(this.value)}

window.onhashchange=()=>{
	const h=location.hash.slice(1)
	if(hash===h) return
	dec.value=extract(h)
}
