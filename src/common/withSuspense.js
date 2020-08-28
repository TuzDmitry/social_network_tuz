import React, {Suspense} from "react";

export const withSuspense=(Component) => {
    return (props)=>{
        return <Suspense fallback={<h3>Loading component...</h3>}>
            <Component {...props}/>
        </Suspense>
    }
}