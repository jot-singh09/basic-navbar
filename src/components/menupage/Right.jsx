  import { useEffect } from "react"

  const show = [
    {
      name: "hello"  // ✅ Fixed: use quotes, not template literals
    },
    {
      esc:"fasjlk "
    }
  ]

  const Right = () => {

  

    return (
      <div>
      {show.map((val,inx)=>{
        return (
          <div className="text-white">

        <h1>{val.name}</h1>
        <h1>{inx}</h1>
          </div>
        )
      })}
      </div>
    )
  }

  export default Right