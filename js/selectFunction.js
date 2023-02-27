let menuSelect = [
    document.getElementById("appetizers"),
    document.getElementById("pizza"),
    document.getElementById("panini"),
]

let menuMealType = [
    document.querySelectorAll('.appetizers'),
    document.querySelectorAll('.pizza'),
    document.querySelectorAll('.panini'),
]

function hideMenuCard(cards) {
    for (let style of cards) {
        style.style.opacity = '0';
        style.style.transform = 'scale(0)';
        window.setTimeout(function () {
            style.style.display = 'none';
        }, 0);
    }
}

menuSelect.forEach((elm, idx) => {
    elm.addEventListener('click', function () {
        for (let style of menuMealType[idx]) {
            style.style.display = 'block';
            window.setTimeout(function () {
                style.style.opacity = 1;
                style.style.transform = 'scale(1)';
            }, 0);
        }
        [0, 1, 2].filter((e, i) => i !== idx).forEach(otherIdx => {
            hideMenuCard(menuMealType[otherIdx]);
        })
    }
)})

let citySelect = [
    document.getElementById("north"),
    document.getElementById("central"),
    document.getElementById("south")
]

let cityLocation = [
document.querySelectorAll('.north'),
document.querySelectorAll('.central'),
document.querySelectorAll('.south'),
]

function hideCity(city) {
    for (let style of city) {
        style.style.opacity = '0';
        style.style.transform = 'scale(0)';
        window.setTimeout(function () {
            style.style.display = 'none';
        }, 0);
    }
}

citySelect.forEach((elm, idx) => {
    elm.addEventListener('click', function () {
        for (let style of cityLocation[idx]) {
            style.style.display = 'block';
            window.setTimeout(function () {
                style.style.opacity = 1;
                style.style.transform = 'scale(1)';
            }, 0);
        }
        [0, 1, 2].filter((e, i) => i !== idx).forEach(otherIdx => {
            hideCity(cityLocation[otherIdx]);
        })
    }
)})

let cityLocationSelect = [
    document.getElementById('taipei'),
    document.getElementById('ntaipei'),
    document.getElementById('taoyuan'),
    document.getElementById('taichung'),
    document.getElementById('changhua'),
    document.getElementById('tainan'),
    document.getElementById('kaohsiung'),
]

let cityList = [
    document.querySelectorAll('.taipei'),
    document.querySelectorAll('.ntaipei'),
    document.querySelectorAll('.taoyuan'),
    document.querySelectorAll('.taichung'),
    document.querySelectorAll('.changhua'),
    document.querySelectorAll('.tainan'),
    document.querySelectorAll('.kaohsiung'),
]

function hideStore(store) {
    for (let style of store) {
        style.style.opacity = '0';
        style.style.transform = 'scale(0)';
        window.setTimeout(function () {
            style.style.display = 'none';
        }, 0);
    }
}

cityLocationSelect.forEach((elm, idx) => {
    elm.addEventListener('click', function () {
        for (let style of cityList[idx]) {
            if (window.innerWidth >= 768) {
                style.style.display = 'flex';
            }
            else {
                style.style.display = 'block';
            }
            window.setTimeout(function () {
                style.style.opacity = 1;
                style.style.transform = 'scale(1)';
            }, 0);
        }
        [0, 1, 2, 3, 4, 5, 6].filter((e, i) => i !== idx).forEach(otherIdx => {
            hideStore(cityList[otherIdx]);
        })
    }
)})