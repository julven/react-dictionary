import { createContext, useState, useEffect } from "./react"

const DataContext = createContext()
const DataContextProvider = ({children}) => {

	let [result, setResult] = useState({})
	let [word, setWord] = useState("")
	let [nothing, setNothing] = useState(false)
	let [sh, setSh] = useState(800)
	let [listData, setListData] = useState([])

	let startSearch = async (word) => {
		window.scrollTo({top: 0, behavior: 'smooth'});
		try {
			
			let serve = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word.toLowerCase())
			let resp = await serve.json();

			if("title" in resp) setNothing(true);
			else setResult(resp[0]);	
		}catch (err) {
			console.log(`word "${word}" not found`)
		}
		

	}

	let loadDataList = async () => {

		await fetch("words_dictionary.json")
		.then(resp => resp.json())
		.then(resp => {
			
			// console.log(list)
			setListData(resp)

		})

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
		loadDataList()
		resized()
		let screen = addEventListener("resize", resized )
	}, [])

	return (
		<DataContext.Provider value={{
		startSearch, 
		result, 
		testData, 
		nothing, 
		setNothing, 
		word, 
		setWord, 
		sh, 
		setSh, 
		reset,
		listData, 
		setListData}}>
			{children}
		</DataContext.Provider>
	)
}

export {DataContextProvider, DataContext}