import {DataContext} from "./context"
import {useContext} from "./react"

const Welcome = () => {

	let {word, sh} = useContext(DataContext)

	return(
		<div className="container d-flex flex-column  justify-content-center" style={{padingTop: 60, minHeight: sh/2}}>
			<div className="d-flex  justify-content-center ">
				<div className="text-center">
					<i className="text-dark  bi bi-book display-1 my-0 py-0"></i>
					<p className="display-3 mb-0">Welcome</p>
					<p>Type the word in search box to start!</p>
				</div>
			</div>
		</div>
	)
}

export default Welcome