import {DataContext} from "./context"
import {useContext} from "./react"

const NotFound = () => {

	let {word, sh} = useContext(DataContext)

	return(
		<div className="container d-flex flex-column  justify-content-center" style={{padingTop: 60, minHeight: sh/2}}>
			<div className="d-flex  justify-content-center ">
				<div className="text-center">
					<p className="display-3 mb-0">Not Found</p>
					<p>The word "<span className="fw-bold fst-italic">{word}"</span> is not in our dictionary. </p>
				</div>
			</div>
		</div>
	)
}

export default NotFound