import writers from "./writers"



function App(){
  return(
    <div>
     <h1> writers profile</h1>
     <div className="container">
     {
       writers.map((writer)=>(
         <div key={writer.id} className="card">
         <img src={`images/${writer.avatar}.png`}
         height = '300px'
         width='300px' alt={writer.img}
          />
          <div className="textGroup">
          <h3>{writer.name}</h3>
          <p>{writer.email}</p>
          <p>{writer.phone}</p>

          </div>
         </div>
       ))}
    </div>
    </div>
  )
}

export default App;