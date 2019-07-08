import axios from 'axios';
const KEY="AIzaSyBPlFWmbO1zXHJqiKZjB9u4VQiuFsPYnfY";
export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    maxResults: 5,
    key:KEY
}
});