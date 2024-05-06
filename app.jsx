import Navbar from "./navbar"
import NotFound from "./notfound"
import Word from "./word"
import Footer from "./footer"
import Welcome from "./welcome"
import About from "./about"
import {createRoot} from "./react-dom.js"
import {DataContextProvider, DataContext} from "./context"
import { useContext, useEffect, useState } from "./react"
const App = () => {

	let {result,  nothing, sh, setSh} = useContext(DataContext)
	// let [sh, setSh] = useState(800)

	// let resized = () => {
	// 	let h = window.innerHeight

	// 	if(h < 800) setSh(800);
	// 	else setSh(h)

	// }

	// useEffect(() => {
	// 	resized()
	// 	let screen = addEventListener("resize", resized )
	// }, [])


	return(
		<div className="">
			
			<Navbar />
			<div style={{minHeight: sh-60}}>
				{!result.word && !nothing &&<Welcome />}
				{result.word && !nothing && <Word />}
				{nothing && <NotFound />}
				{/*<div style={{height: 100}} />*/}
				
			</div>
			<About />
			<Footer />
			
		</div>

	)
}

createRoot(document.getElementById("app")).render(
		<DataContextProvider>
			<App />
		</DataContextProvider>
	)