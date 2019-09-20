import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const fetchPosts = async () => {

    // Bad approach!!!!
    // verify why the response error!
   // if you execute the code you will find that the answer
   // of the call is an unexpected object 
   //caused by the syntax ECMA 2015 js, 
   // and the answer is not a plane object as expected. 
   // For this reason React in this case gives an error response. 
   //Try to run the code on https://babeljs.io selecting the use of ecma 2015
   // and you will realize the unexpected answer.  It's caused from async used in the call 

//  const response =  await jsonPlaceholder.get('/posts');
//    return {
//        type: 'FETCH_POSTS',
//        payload: response
//    };
// };


  // Good approach  but no for all, again you don't have data on the response
  //  because the call have one for await the data via get and other one 
  //   create immediately  reducers but without data and this 
  // generates an error because  the response data is not available until http 200 code
  // see png file (bad-request-using-action-call-to-reducers-without-promisie.png) for better understanding
 
  //export const fetchPosts = () => {
  //const promise = jsonPlaceholder.get('/posts');
  //  return {
  //      type: 'FETCH_POSTS',
  //      payload: promise
  //  };
//};


// Finally, perfect correct way!!

  export const fetchPosts = () => async dispatch => {
     const response = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response })
      
   };
 

