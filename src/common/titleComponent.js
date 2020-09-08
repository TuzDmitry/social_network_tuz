import React from "react";
import Helmet from "react-helmet";


const TitleComponent = ({title}) => {
    const defaultTitle = 'Conversations Without Borders';
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};


export const Title = ({title, ...props}) => {
    return (
        <>
            <TitleComponent title={title}/>
            {props.children}
        </>
    );
};

