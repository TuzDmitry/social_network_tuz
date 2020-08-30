import React, {Suspense} from "react";

export const withSuspense=(Component) => {
    return ()=>{
        return <Suspense fallback={<h3>Loading component...</h3>}>
            <Component/>
        </Suspense>
    }
}


export const withSuspense2=(component) => {
        return <Suspense fallback={<h3>Loading component...</h3>}>
            {component}
        </Suspense>
}