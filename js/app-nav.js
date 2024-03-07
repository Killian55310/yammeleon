const burger = document.getElementById("burger");
const burgerList = document.getElementById("burger-list");



class Burger {
    constructor(burger, list) {
        this.burger = burger;
        this.list = list;
        document.addEventListener("click", (e) => {
            if (e.target.parentNode !== this.burger) this.list.classList.remove("opened");
        });
        this.burger.addEventListener("click", () => this.list.classList.toggle("opened"));

    }
};



new Burger(burger, burgerList);