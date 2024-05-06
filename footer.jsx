
import {DataContext} from "./context"
import { useContext } from "./react"

const Footer = () => {

	let { reset } = useContext(DataContext);

	return(
		
			<div style={{height: 60}} className="bg-black ">
			<div className="container d-flex gap-1 justify-content-between h-100" onClick={() =>reset()} style={{cursor: "pointer"}}>
				<div className="d-flex align-items-center gap-1">
					<h5 className="text-white pt-2 "><i className="text-white  bi bi-book "></i></h5>
					<h5 className="text-white d-none d-lg-inline mb-0">Dictionary</h5>
					
				</div>

				<div className="d-flex align-items-center gap-1 text-white">
					Julven Condor 2024
				</div>
			</div>
		</div>
	)

}

export default Footer