import axios from 'axios';

export const makePostRequest = (graphqlQuery) => {
    console.log("hihohoho")
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(graphqlQuery),
        url: `http://localhost:5000/graphql`
    };
    return axios(options);
};