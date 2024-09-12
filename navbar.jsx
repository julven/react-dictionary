import { useState, useEffect, useContext } from "./react"
import {DataContext} from "./context"
const Navbar = () => {

	let { startSearch, testData, setNothing, word, setWord, reset, listData } = useContext(DataContext);
	// let [word, setWord] = useState('')
	let [wordList, setWordList] = useState([])
	



	let findWord = (e) => {
		
		setNothing(false)	
		if(e.target.value.includes(" ")) setWord(e.target.value.replace(/\s/g, '' ));
		else setWord(e.target.value);
		// return;
		let list = [...Object.keys(listData)].filter(x => x.startsWith(e.target.value)).slice(0,10)
		setWordList(list)
	}

	let searchHandler = () => {
		
		startSearch(word)
	}
	let enterEvent = (e) => {
		if(e.key == "Enter") {
			startSearch(word)	
		
		} 
	}

	useEffect(() => {
		
	},[])


	return(
		<>
			<div className=" nav-style bg-dark fixed-top shadow-sm">
				<div className="container h-100 d-flex flex-column justify-content-center ">
					
					<div className="d-flex gap-2 justify-content-between ">
						<div className="d-flex align-items-center gap-1" onClick={() =>reset()} style={{cursor: "pointer"}}>
							<h2 className="text-white pt-2 "><i className="text-white  bi bi-book "></i></h2>
							<h2 className="text-white d-none d-lg-inline mb-0">Dictionary</h2>
							
						</div>

						<div className="input-group nav-search my-1" >
							<input  onChange={e => findWord(e)} value={word} onKeyDown={enterEvent}
							id="search-bar"  type="text" list="datalist" className="form-control" placeholder="Search..."  aria-describedby="button-addon2 " autoComplete="off"/>
							<button disabled={word == ""} onClick={() => searchHandler()} 
							className="btn btn-secondary" type="button" id="button-addon2"><i className="bi bi-search "></i></button>
							
						</div>
						<datalist id="datalist" >
							{wordList.map( (x, i) => <option value={x}  key={i} />)}
						</datalist>
						<div className="d-flex align-items-center text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor: "pointer"}}>
							<i className="bi bi-info-circle me-1"></i>
							<span className="d-none d-sm-inline">About</span>
						</div>
					
					</div>
				</div>
			</div>


		</>

	)
}

export default Navbar