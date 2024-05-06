import { createContext, useState, useEffect } from "./react"

const DataContext = createContext()
const DataContextProvider = ({children}) => {

	let [result, setResult] = useState({})
	let [word, setWord] = useState("")
	let [nothing, setNothing] = useState(false)
	let [sh, setSh] = useState(800)

	let startSearch = async (word) => {
		window.scrollTo({top: 0, behavior: 'smooth'});
		let serve = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word.toLowerCase())
		let resp = await serve.json();
		// console.log("title" in resp)

		if("title" in resp) setNothing(true);
		else setResult(resp[0]);	
	}

	let testData = async () => {
		let word = await fetch("test-data.json")
		word = await word.json();

		
		setResult(word[0]);	
	}

	let resized = () => {
		let h = window.innerHeight

		if(h < 800) setSh(800);
		else setSh(h)

	}
	let reset = () => {
		setWord("")
		setNothing(false)
		setResult({})
	}

	useEffect(() => {
		resized()
		let screen = addEventListener("resize", resized )
	}, [])

	return (
		<DataContext.Provider value={{startSearch, result, testData, nothing, setNothing, word, setWord, sh, setSh, reset}}>
			{children}
		</DataContext.Provider>
	)
}

export {DataContextProvider, DataContext}