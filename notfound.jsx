import {DataContext} from "./context"
import {useContext} from "./react"

const NotFound = () => {

	let {word, sh} = useContext(DataContext)

	return(
		<div className="container d-flex flex-column  justify-content-center" style={{padingTop: 60, minHeight: sh/2}}>
			<div className="d-flex  justify-content-center ">
				<div>
					<p className="display-3 mb-0">Not Found</p>
					<p>The word "{word}" is not in our dictionary. Sorry</p>
				</div>
			</div>
		</div>
	)
}

export default NotFound