import * as React from "react"
// markup
<link rel="manifest" href="manifest.webmanifest"></link>
const IndexPage = () => {
  return (
    <div class="h-80 w-60 bg-gray-200 flex flex-col justify-between ">

    <div class="h-10 w-full bg-gray-900 flex justify-between items-center pl-4 pr-4">
      <div class="h-3 w-2/5  bg-gray-200">
        
      </div>
    
      <div class="h-3 w-3 bg-gray-200"></div>
    </div>
    
    
    <div class="w-full  h-3/6 flex justify-center items-center mt-5">
    <div class="h-full w-full flex flex-col justify-between items-center ">
     <div class="bg-red-600 w-2/5 h-2/3">
    
     </div>
      
      <h1 class="text-center text-sm">book your pandit now  <br /> with indiaohyes </h1>
    
      <h2 class="text-sm">Service</h2>
      </div>
    
    </div>
    
    <div class="h-1/4 bg-yellow-50 flex justify-center items-center pr-5 pl-5">
       <div class="grid grid-cols-3 h-full w-full gap-3 py-4 ">
         <div class="bg-yellow-900"> </div>
            <div class="bg-yellow-300"> </div>
               <div class="bg-yellow-300"> </div>
       </div>
    </div>
    
    </div>
  
  )
}

export default IndexPage
