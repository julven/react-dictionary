import {useState} from "./react"

const About = () => {

	let [imgs] = useState([
			"source/react.png",
			"source/bootstrap.jpg",
		])

	return(
		
		<div className="modal fade" id="exampleModal"tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div className="modal-dialog modal-lg">
		    <div className="modal-content">
		      <div className="modal-header d-flex justify-content-between bg-dark" >
		        <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">About</h1>
		        {/*<button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>*/}
		        <i className="bi bi-x-lg text-white " data-bs-dismiss="modal" aria-label="Close" style={{cursor: "pointer"}}></i>
		      </div>
		      <div className="modal-body">
		      <div className="container">
				<div className="row justify-content-center">
					<div className="col-12">
						<div className="text-center">
							<div className="d-flex justify-content-center">
								<div className="d-flex align-items-center gap-1">
									<h3 className=" pt-2 "><i className="  bi bi-book "></i></h3>
									<h3 className=" mb-0">Dictionary</h3>
									
								</div>
							</div>
							<small className="text-muted">App portfolio by julven</small>
							<div className="d-flex justify-content-center flex-wrap mb-2">
							{imgs.map(x =>
								<div style={{maxWidth:45, maxHeight: 45}} key={x}>
									<img  className="px-1 w-100 h-100" src={x}/>
								</div>
							)}
										
							</div>
						</div>
					</div>
					
				</div>
				<div className="row justify-content-center">
					<div className="col-9 col-sm-8 col-md-7 col-lg-4 mb-5" >
						<div style={{maxWidth: 250}} className="d-flex mx-auto" >
							<img className="shadow rounded  w-100"
							src={"source/resume.jpg"} alt="..." />
						</div>
					</div>
					<div className="col-9 col-sm-8 col-md-7 col-lg-4 mb-5">
						<p className="mb-0 fs-3">Julven Condor</p>
						<hr className="my-0"/>
						<p className="mt-1 text-muted">Web Developer</p>

						<p className="">
							This Dictionary App is created using libraries like ReactJS and bootstrap 5.
						</p>

						<div>
						<p className="lead mb-0">Information</p>
							<span>
								website: <br/> 
								<ul>	
									<li>
										<a href="https://julven.epizy.com">julven.epizy.com </a>
									</li>
								</ul>								
							</span>
							<span>
								email: <br/>
								<ul>
									<li>julven_condor@yahoo.com</li>
									<li>julvenici@gmail.com</li>
								</ul>	
								
							</span>
							<span>
								contact: <br/>	
								<ul>
									<li>+63 927 430 9542</li>
									<li>+1 513 204 9856</li>
								</ul>

							</span>
						</div>
					</div>
					
				</div>
			</div>
		     
		    </div>
		  </div>
		</div>	
	</div>

	)
}

export default About