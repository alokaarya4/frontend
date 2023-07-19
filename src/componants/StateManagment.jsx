import React, { useState } from 'react'

const StateManagment = () => {

     const [likes, setLikes] = useState(0);

     const [imgurl, setImgurl] = useState('');   



let count = 10;

const selectFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
 
    //reading file

    const reader = new FileReader();

    reader.onload = (data) => {
        console.log(data.target.result);
        setImgurl(data.target.result);
    };

       reader.readAsDataURL(file);
}

  return (
    <div>
        <div className='container'>
            <h1>Count : {count}</h1>
            <button onClick={ () => { count++; console.log(count); } }> Add Count </button>
             <h1>Likes : {likes}</h1>
             <button className="btn btn-primary" onClick={ () => { setLikes(likes+1) }}>Add Likes</button>   
             <button className="btn btn-primary" onClick={ () => { setLikes(likes-1) }}>DisLikes</button>

             <input type="file" onChange={selectFile} />

             <img src={imgurl} alt="" />
        </div>
    </div>
  );
};

export default StateManagment;