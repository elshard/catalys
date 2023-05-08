import React, { Children } from "react";
import Tag from "./Tag";

const TagList = ({ listName, tags, filterProducts }) => {
  return (
    <div className="mb-8">
      <h1 className="font-semibold">{listName}</h1>
      <div className="max-h-24 overflow-scroll font-extralight">
        {Children.toArray(
          tags.map((item, index) => {
            return (
              <Tag
                listName={listName}
                tagname={item}
                index={index + 1}
                filterProducts={filterProducts}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default TagList;
