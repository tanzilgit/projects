import { useEffect } from "react";
import { useRouter } from "next/router";

function getSiteType(setFunction) {
  const { asPath } = useRouter();
  useEffect(() => {
    const temp = asPath.split("/");
    if(temp[1] === 'ca'){
       setFunction('ca');
    } else setFunction('us');
  }, [])
  return null;
}

export default getSiteType;
