const pages = ["home", "contactMe","projects","todo"]

const changePage = (activatePage) => {
    pages.forEach( page => {
        if (page === activatePage) {
            document.getElementById(page).style.display = "block";
        }
        else {
            document.getElementById(page).style.display = "none";
        }
    })
}
