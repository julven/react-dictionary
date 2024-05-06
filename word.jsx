import {DataContext, result} from "./context"
import {useContext, useEffect} from "./react"

const Word = () => {

	let {result} = useContext(DataContext)

	useEffect(() => {
		let el = document.querySelectorAll(".accordion")
		
		el.forEach( x => {
			// console.log(x.querySelector(".accordion-collapse").classList)
			x.querySelector(".accordion-collapse").classList.add("show")
		})
		
		
	}, [result])

	return(
		<>
			<div className="container " style={{paddingTop: 60, paddingBottom: 60, minHeight: 800}}>
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 col-lg-8 col-xl-6 col-xxl-6 ">
						<h1 className="display-2 mb-1">{result.word}</h1>
		
						<div className="d-flex gap-1 flex-wrap ">
							<p className="fst-italic mb-1">phonetics: </p>
						{result.phonetics.map((x, i) => {
							return (
							<p key={i} className="badge rounded-pill text-bg-secondary mb-1" >
								{x.text} 
								{false && <i className="bi bi-volume-down-fill  ms-1 "></i>}
							</p>
							)
						})}
							
						</div>


						<div>
						{result.meanings.map( (x, i) => {
							return (
							<div  key={i}>
								<h3 className="fst-italic">{x.partOfSpeech} <span className="fs-6">({x.definitions.length})</span></h3>
								<div className="accordion accordion-flush" id={"accordionFlushExample"+i}>
								{x.definitions.map((xx, ii) => {
									return (
									<div className="accordion-item" key={ii}>

									    <h2 className="accordion-header" id={"flush-heading"+ii+"-"+i}>
									      <button className="accordion-button collapsed fw-bold text-secondary" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"+ii+"-"+i} aria-expanded={(ii==0?"true":"false")} aria-controls={"flush-collapse"+ii+"-"+i}>
									        Definition #{ii+1}
									      </button>
									    </h2>
									    <div id={"flush-collapse"+ii+"-"+i} className={"accordion-collapse collapse"} aria-labelledby={"flush-heading"+ii+"-"+i} data-bs-parent={"#accordionFlushExample"+i}>
									      <div className="accordion-body">
									      	<p >{xx.definition} </p>

									      	{xx.synonyms.length > 0 && 
									      	<div className="d-flex gap-1 flex-wrap 1">
									      		<p className="fst-italic mb-1">synonyms: </p>
									      		{xx.synonyms.map((xxx, iii) => {
									      		return(
									      			<>
									      				<p  key={iii} className="badge rounded-pill text-bg-secondary mb-1 px-2">{xxx}</p>
									      			</>
									      		)
									      		})}

									      	</div>
									      	}
									      	{xx.antonyms.length > 0 && 
									      	<div className="d-flex gap-1  flex-wrap ">
									      		<p className="fst-italic mb-1">antonyms: </p>
									      		{xx.antonyms.map((xxx, iii) => {
									      		return(
									      			<>
									      				<p key={iii} className="badge rounded-pill text-bg-secondary mb-1 px-2">{xxx}</p>
									      			</>
									      		)
									      		})}

									      	</div>
									      	}

									      	{xx.example && <p> <span className="fst-italic">example:</span> {xx.example}</p>}
									      </div>
									    </div>
									  </div>

									)
								})

								}
								  
							 
							</div>

							</div>
							)
						})


						}
							
						</div>

					</div>

				</div>
			</div>
		</>
	)
}

export default Word