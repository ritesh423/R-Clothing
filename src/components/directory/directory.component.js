import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://img.dtcn.com/image/themanual/best-hats-2020-800x800.jpg",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl:
            "https://3.imimg.com/data3/AU/KI/MY-646899/men-s-jackets-500x500.jpg",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl:
            "https://elle.in/wp-content/uploads/2020/02/097A0949-1024x683.jpg",
          id: 3,
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
        },
        {
          title: "mens",
          imageUrl:
            "https://www.incimages.com/uploaded_files/image/1920x1080/getty_507716250_226806.jpg",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
