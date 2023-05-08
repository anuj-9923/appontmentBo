var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var button = document.getElementById('info');
//form submit Event
form.addEventListener('submit', storeData);
// Delete Functionality
itemList.addEventListener('click', removeItem);

//Store Data:
var userDetail = {
    name: '',
    email: '',
    phoneNumber: ''
};
function storeData(e) {
    e.preventDefault();
    // Get Input Value:
    userDetail.name = document.getElementById('item').value;
    userDetail.email = document.getElementById('item1').value;
    userDetail.phoneNumber = document.getElementById('item2').value;
    axios.post('https://crudcrud.com/api/7b5acede8ff543bb82a7ac99ed3791f/appointmentData', userDetail)
        .then((responce => {
            console.log(userDetail);
        }))
        .catch((err) => {
            console.log(err);
        })
    var li = document.createElement('li');
    //Add Class
    li.className = 'list-group';

    // Add text node with input value:
    var list = '•' + userDetail.name + '-' + userDetail.email + '-' + userDetail.phoneNumber;
    li.appendChild(document.createTextNode(list));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.style.width = '80px';
    var editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.style.width = '80px';
    // Append text node for button
    deleteBtn.appendChild(document.createTextNode('delete'));
    //Append text node for edit button
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    editBtn.onclick = () => {
        var it = document.querySelector('input');
        localStorage.removeItem(userDetail.email);
        console.log(it.parentElement);
        document.getElementById('item').value = userDetail.name;
        document.getElementById('item1').value = userDetail.email;
        document.getElementById('item2').value = userDetail.phoneNumber;
    }
    itemList.appendChild(li);



}

//Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function act() {
    var input = document.getElementById('input').value;
    input.value = "ANuj";
    alert(input);
}