function showMenu(menuId) {
    document.getElementById('indianMenu').style.display = 'none';
    document.getElementById('chineseMenu').style.display = 'none';
    document.getElementById(menuId).style.display = 'block';
}

function hideMenu(menuId) {
    document.getElementById(menuId).style.display = 'none';
}

function orderFood(restaurant, foodItem) {
    alert(`You have ordered ${foodItem} from ${restaurant}`);
}
