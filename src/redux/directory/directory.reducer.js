const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://img.dtcn.com/image/themanual/best-hats-2020-800x800.jpg",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://3.imimg.com/data3/AU/KI/MY-646899/men-s-jackets-500x500.jpg",
      id: 2,
      linkUrl: "",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://media.gq.com/photos/5d93aa2c636d4800084025ae/16:9/pass/sneakers.jpg",
      id: 3,
      linkUrl: "",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "",
    },
    {
      title: "mens",
      imageUrl:
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_507716250_226806.jpg",
      size: "large",
      id: 5,
      linkUrl: "",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
