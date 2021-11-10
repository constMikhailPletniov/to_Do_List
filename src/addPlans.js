function addPlans() {

    if (!INPUT.value) return;
    do {
        let div = document.createElement('div');
        let newInputValue = document.createElement('li');
        let newInputCheck = document.createElement('input');
        let buttonDelete = document.createElement('button');
        div.className = INPUT.value + ' ' + 'container-li';
        newInputCheck.type = 'checkbox';
        newInputValue.textContent = INPUT.value;
        buttonDelete.id = INPUT.value + ' ' + 'btn-delete-li';
        buttonDelete.className = 'btn-delete-li';
        buttonDelete.textContent = 'Delete';
        LIST.prepend(div);
        div.prepend(newInputValue, newInputCheck, buttonDelete);
        localStorage.setItem(`plans-${INPUT.value}`, INPUT.value);
        INPUT.value = '';
    } while (INPUT.value);

    for (const item of DELETE_BUTTON) {
        item.addEventListener('click', deletePlans);
    }

}