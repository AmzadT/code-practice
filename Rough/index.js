// localStorage
localStorage.setItem('age', JSON.stringify(24))
var age = JSON.parse(localStorage.getItem(age))

localStorage.setItem('name', JSON.stringify('Amzad Hussain'))
var myName = JSON.parse(localStorage.getItem('name'))



// Fetch
const FetchData = async ()=>{
    try {
        var response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
        var data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}