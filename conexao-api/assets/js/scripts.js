const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

 const getCats = async () => {
    try {
       const data = await fetch('https://cors-demo.glitch.me/',BASE_URL);
        const json = await data.json();
         return json.webpurl;
     } catch (e) {
         console.log(e.message);
    }
 };
 
// const getCats = async () => {
//     const data = await fetch('https://cors-demo.glitch.me/',BASE_URL)
//         .then((res) => res.json())
//         .catch((e) => console.log(e));
//         return data.webpurl;
// };


 const loadImg = async () => {
    const catImg = document.getElementById('cat').src=" ";
   catImg.src = await getCats();
};

loadImg();
const catBtn = document.getElementById('change-cat');
catBtn.addEventListener('click', loadImg);


