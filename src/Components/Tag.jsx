import React from 'react';

const Tag = ({listName,tagname,filterProducts,index}) => {
    
    return (
        <div
        className="mx-4 hover:font-semibold ease-in-out transition-all duration-300 cursor-pointer" 
        onClick={()=>{
            filterProducts(listName,index)
            }}>
            {tagname?.name}
        </div>
    );
}

export default Tag;
