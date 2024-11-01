import axios from 'axios';

const usePost = (url) => {
  const postData = async (data) => {
    try {
      await axios.post(url, data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return { postData };
};

export default usePost;
