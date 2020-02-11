import React from 'react';
import Picture from './Picture';

var masterPictureList = [
  {
    names: 'Ken and Blamp',
    url: 'https://cdn.shopify.com/s/files/1/0447/0453/articles/Aduna_baobab_tree_8b843446-b19c-49fd-b84c-2b5d5b4c561a_1024x1024.jpg?v=1578334489'

  },
  {
    names: 'Thin and Thick',
    url: 'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218-1080x608.jpg'

  },
  {
    names: 'Reggie and Gretle',
    url: 'https://media.treehugger.com/assets/images/2019/07/angeltree.jpg.1200x0_q70_crop-smart.jpg'

  }
];

function PictureList(){
  return (
    <div>
      <hr/>
      {masterPictureList.map((picture, index) =>
        <Picture
        names={picture.names}
        url={picture.url}
        key={index}/>
      )}
    </div>
  );
}

export default PictureList;
