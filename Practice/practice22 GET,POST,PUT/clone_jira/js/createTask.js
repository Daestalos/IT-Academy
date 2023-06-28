const openCreateIssue = () => {
    const formModal = document.querySelector('.create-issue');
    formModal.classList.remove('hide');
}

const closeIssueForm = () => {
    const formModal = document.querySelector('.create-issue');
    formModal.classList.add('hide');
}

document.querySelector('.create-issues')
.addEventListener('click', openCreateIssue);
document.addEventListener('.cancel')
.addEventListener('click', closeIssueForm);
