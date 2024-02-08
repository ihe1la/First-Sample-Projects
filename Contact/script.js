
var contacts = [
    { id: 1, name: 'zhr', phone: 321456 },
    { id: 2, name: 'sobhan', phone: 1973912 },
    { id: 3, name: 'kaveh', phone: 19273173 },
]

function updateTable(contactss) {
    const table = document.getElementById('contacts-table');
    table.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Command</th>
    </tr>
    `
    console.log(contactss)
    contactss.map(function (contact) {
        table.innerHTML += `
            <tr>
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td>
                    <button onclick="remove(${contact.id})">Remove</button>
                </td>
            </tr>
        `;
    })
}

updateTable(contacts)

function add() {
    var newname = document.getElementById('names');
    var newphone = document.getElementById('phones');
    var adddnew = {
        id: Math.random(),
        name: newname.value,
        phone: newphone.value
    }
    contacts.push(adddnew)
    updateTable(contacts);
}

function remove(id) {
    contacts = contacts.filter(contact => contact.id !== id);
    console.log(contacts);
    updateTable(contacts);
}
function Search() {
    var searchname = document.getElementById('names');
    var usersearch = contacts.filter(function (user) {
        return user.name.includes(searchname.value)
    })
    console.log(usersearch);
    updateTable(usersearch);
}



