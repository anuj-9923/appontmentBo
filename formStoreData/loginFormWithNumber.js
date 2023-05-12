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
window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/58c264e795be44e4aea092eb06c2c289/appointmentData')
        .then((response) => {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                var li = document.createElement('li');
                var list = response.data[i].name + ' ' + response.data[i].email + ' ' + response.data[i].phoneNumber;

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
        })
        .catch((err) => {
            console.log(err);
        })
})
function storeData(e) {
    e.preventDefault();
    // Get Input Value:
    userDetail.name = document.getElementById('item').value;
    userDetail.email = document.getElementById('item1').value;
    userDetail.phoneNumber = document.getElementById('item2').value;
    axios.post('https://crudcrud.com/api/58c264e795be44e4aea092eb06c2c289/appointmentData', userDetail)
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
        console.log(userDetail._id);
        if (confirm('Are you sure')) {
            var li = e.target.parentElement;

            itemList.removeChild(li);
        }
    }
}
