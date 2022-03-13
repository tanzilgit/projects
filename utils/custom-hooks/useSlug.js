//This is a custom hook build to active different tabs on pages during initial page load.
//Do not forgot to pass your tab setMethod of your local tab state.


import {useEffect} from 'react'
import { useRouter } from 'next/router'

function useSlug(setFunction) {
  const {asPath} = useRouter();
  useEffect(() => {
    if(asPath.indexOf("&") > 0){
      setFunction(asPath.substring(asPath.indexOf("=") + 1, asPath.indexOf("&")))
    }
    else if(asPath.indexOf("?") > 0){
      setFunction(asPath.substr(asPath.indexOf("=") + 1))
    } else console.log("Not found")
  }, [])
  return null;
}

export default useSlug
