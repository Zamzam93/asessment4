
const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById('fortuneButton')
const cakeButton = document.getElementById('cakeButton')
const newDisplay = document.querySelector('.dp')
const input = document.querySelector('input')
const newCakeBtn = document.getElementById('addCake')

const deleteCake =id=> {
    axios.delete(`http://localhost:4000/api/cake/${id}`)
    .then(res => {
        display(res.data)
    })
}


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getCake = () => {
    axios.get("http://localhost:4000/api/cake/")
        .then(res => {
            const data = res.data;
            display(data)
    });
};
 const display = (ls) => {
    let newls = ls.map((x,i) => `<div><p id= '${i}'>${x}</p> <span onClick="deleteCake(${i})">delete</span></div>`)
    newDisplay.innerHTML= ''
    newDisplay.innerHTML = newls.join('')
 }

 const newCake  = ()=>{
    const value = input.value;
    axios.post(`http://localhost:4000/api/cake/`, {value})
    .then(res =>{
        createDisplay(res.data)
    })
 }
//  const updateCake = id =>{
//     axios.put(`http://localhost:4000/api/cake/${id}`)
//     .then(res => {
//         display(res.data)
//     })
//  }
   
complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener('click', getFortune)
cakeButton.addEventListener('click', getCake)
newCakeBtn.addEventListener('click', newCake)