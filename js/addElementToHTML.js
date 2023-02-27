class menuData {
    constructor(mealName, description, imgSrc) {
        this.mealName = mealName
        this.description = description
        this.imgSrc = imgSrc
    }
}

let menuDataListPizza = [
    new menuData('手撕豬肉披薩', '手撕豬肉 / 墨西哥乾酪絲 / 紅洋蔥 / 馬芝拉起司', './img/pizza_01.png'),
    new menuData('紐約披薩', '自製蕃茄醬 / 馬芝拉起司', './img/pizza_02.png'),
    new menuData('瑪格麗特披薩', '新鮮馬芝拉起司 / 九層塔 / 帕馬森起司', './img/pizza_03.png'),
    new menuData('經典披薩', '美式臘腸 / 馬芝拉起司', './img/pizza_04.png'),
    new menuData('馬德里披薩', '馬芝拉起司 / 西班牙臘腸 / 新鮮馬芝拉起司', './img/pizza_05.png'),
    new menuData('帕瑪火腿披薩', '帕瑪火腿 / 新鮮蕃茄 / 蘑菇 / 丹麥哈伐第起司 / ​馬芝拉起司', './img/pizza_06.png'),
    new menuData('總匯披薩', '馬芝拉起司 / 義式手工香腸 / 美式臘腸 / 培根', './img/pizza_01.png'),
    new menuData('海鮮披薩', '蝦仁 / 花枝 / 蒜頭 / 馬芝拉起司 / 帕馬森起司', './img/pizza_02.png'),
]

for (let x of menuDataListPizza) {
    // div > (h3, p)
    let mealNameElm = document.createElement('h3');
    mealNameElm.setAttribute('class', 'mealname');
    let mealName = document.createTextNode(x.mealName);
    let descriptionElm = document.createElement('p');
    let description = document.createTextNode(x.description);
    mealNameElm.appendChild(mealName);
    descriptionElm.appendChild(description);
    let menuText = document.createElement('div');
    menuText.append(mealNameElm, descriptionElm);
    // div > img
    let imgElm = document.createElement('img');
    imgElm.setAttribute('src', x.imgSrc);
    let menuPic = document.createElement('div');
    menuPic.appendChild(imgElm);
    // div > (div > img, div > (h3, p))
    let menuCardElm = document.createElement('div');
    menuCardElm.setAttribute('class', 'mealcard pizza col-xl-3 col-lg-4 col-md-6 col-sm-12');
    menuCardElm.append(menuPic, menuText);
    document.getElementById('menucard').appendChild(menuCardElm)
}

let menuDataListAppetizers = [
    new menuData('義式蔬菜湯', '', './img/aptiz_01.png'),
    new menuData('希臘沙拉', '', './img/aptiz_02.png'),
    new menuData('凱撒沙拉', '', './img/aptiz_03.png'),
]

for (let x of menuDataListAppetizers) {
    // div > (h3, p)
    let mealNameElm = document.createElement('h3');
    mealNameElm.setAttribute('class', 'mealname');
    let mealName = document.createTextNode(x.mealName);
    let descriptionElm = document.createElement('p');
    let description = document.createTextNode(x.description);
    mealNameElm.appendChild(mealName);
    descriptionElm.appendChild(description);
    let menuText = document.createElement('div');
    menuText.append(mealNameElm, descriptionElm);
    // div > img
    let imgElm = document.createElement('img');
    imgElm.setAttribute('src', x.imgSrc);
    let menuPic = document.createElement('div');
    menuPic.appendChild(imgElm);
    // div > (div > img, div > (h3, p))
    let menuCardElm = document.createElement('div');
    menuCardElm.setAttribute('class', 'mealcard appetizers col-xl-3 col-lg-4 col-md-6 col-sm-12');
    menuCardElm.append(menuPic, menuText);
    document.getElementById('menucard').appendChild(menuCardElm)
}

let menuDataListPanini = [
    new menuData('蒜味雙起司', '', './img/panini_01.png'),
    new menuData('新鮮蕃茄馬芝拉起司', '', './img/panini_02.png'),
    new menuData('火腿丹麥哈伐第起司', '', './img/panini_03.png'),
    new menuData('義式青醬雞肉起司', '', './img/panini_04.png'),
    new menuData('美式BBQ烤雞起司', '', './img/panini_05.png'),
    new menuData('拿坡里帕尼尼', '', './img/panini_06.png'),
]

for (let x of menuDataListPanini) {
    // div > (h3, p)
    let mealNameElm = document.createElement('h3');
    mealNameElm.setAttribute('class', 'mealname');
    let mealName = document.createTextNode(x.mealName);
    let descriptionElm = document.createElement('p');
    let description = document.createTextNode(x.description);
    mealNameElm.appendChild(mealName);
    descriptionElm.appendChild(description);
    let menuText = document.createElement('div');
    menuText.append(mealNameElm, descriptionElm);
    // div > img
    let imgElm = document.createElement('img');
    imgElm.setAttribute('src', x.imgSrc);
    let menuPic = document.createElement('div');
    menuPic.appendChild(imgElm);
    // div > (div > img, div > (h3, p))
    let menuCardElm = document.createElement('div');
    menuCardElm.setAttribute('class', 'mealcard panini col-xl-3 col-lg-4 col-md-6 col-sm-12');
    menuCardElm.append(menuPic, menuText);
    document.getElementById('menucard').appendChild(menuCardElm)
}

class storeInfo {
    constructor(storeName, address, tel, openHours, mapSrc) {
        this.storeName = storeName,
        this.address = address,
        this.tel = tel,
        this.openHours = openHours,
        this.mapSrc = mapSrc
    }
}

let storeInfoTaipei = [
    new storeInfo('中山店', '台北市中山區中山北路一段140巷12號', '02-25219990', '11:30 – 21:30', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.489566125717!2d121.51928641230337!3d25.05139083345183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a93626b119cb%3A0xb9cadbb5c4ab5990!2zUGl6emEgUm9jayBaaG9uZ3NoYW4g5Lit5bGx5bqX!5e0!3m2!1szh-TW!2stw!4v1669724777441!5m2!1szh-TW!2stw'),
    new storeInfo('大直店', '台北市中山區北安路571號-2', '02-25332992', '11:30 - 21:30', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.613002786403!2d121.54631210976919!3d25.08110265905357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad8509f8179b%3A0x38d6f819779124d7!2zUGl6emEgUm9jayBEYXpoaSDlpKfnm7Tlupc!5e0!3m2!1szh-TW!2stw!4v1669724877537!5m2!1szh-TW!2stw'),
]
let storeInfoNewTaipei = [
    new storeInfo('永和店', '新北市永和區中正路336號', '02-29478966', '12:00 - 21:30', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808.0006718962622!2d121.51669816577694!3d25.00007029725077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9e13213dec3%3A0xafd3c527404d5fa5!2zUGl6emEgUm9jayBZb25naGUg5rC45ZKM5bqX!5e0!3m2!1szh-TW!2stw!4v1669725109867!5m2!1szh-TW!2stw'),
    new storeInfo('板橋店', '新北市板橋區三民路二段71號二樓', '02-89526977', '11:30 – 21:30', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.8757941431538!2d121.47898560819924!3d25.01699253332801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a973661793eb%3A0x9da9a84cb68ea896!2zUGl6emEgUm9jayBCYW5xaWFvIOadv-api-W6lw!5e0!3m2!1szh-TW!2stw!4v1669725167176!5m2!1szh-TW!2stw'),
    new storeInfo('新店店', '新北市新店區中正路198號', '02-29137077', '11:30 – 21:30', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808.4015599801144!2d121.53971405143405!3d24.972812242077435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468016c25615ebd%3A0x621dc51f4191f4f1!2z5pCW5ru-5oqr6JapIOaWsOW6l-W6lw!5e0!3m2!1szh-TW!2stw!4v1669726036350!5m2!1szh-TW!2stw'),
]
let storeInfoTaoyuan = [
    new storeInfo('桃園店', '桃園市桃園區中山東路55號', '03-3335222', '11:30 – 21:30', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808.0589147768887!2d121.31407757450312!3d24.99611184759168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681ef937b2c317%3A0x7522b09ebb057104!2zUGl6emEgUm9jayBUYW95dWFuIOahg-WckuW6lw!5e0!3m2!1szh-TW!2stw!4v1669726081904!5m2!1szh-TW!2stw'),
    new storeInfo('南崁店', '桃園市蘆竹區中正路323號', '03-3113500', '11:30 – 21:30 ', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.2914762644612!2d121.29046322134828!3d25.04822348240693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a07606e1743b%3A0x67ce292e788bf401!2zUGl6emEgUm9jayBOYW5rYW4g5Y2X5bSB5bqX77yI5pyA5b6M6bue6aSQOTowMFBN77yJ!5e0!3m2!1szh-TW!2stw!4v1669726128600!5m2!1szh-TW!2stw'),
]
let storeInfoTaichung = [
    new storeInfo('精誠店', '台中市西區精誠路202號', '04-23100228', '12:00 – 22:00', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.2902399738807!2d120.65396436044875!3d24.151366880370723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d99dc3d54e9%3A0xc096fe1071f63713!2zUGl6emEgUm9jayBKaW5nY2hlbmcg57K-6Kqg5bqX!5e0!3m2!1szh-TW!2stw!4v1669726302993!5m2!1szh-TW!2stw'),
    new storeInfo('文心店', '台中市西屯區文心路三段224號', '04-23162528', '11:30 – 21:30', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.0350298038998!2d120.65519628037922!3d24.169275619293025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346916281fb3141d%3A0xe44599fa6b765ea7!2zUGl6emEgUm9jayBXZW54aW4g5paH5b-D5bqX!5e0!3m2!1szh-TW!2stw!4v1669726333206!5m2!1szh-TW!2stw'),
    new storeInfo('南屯店', '台中市南屯區五權西路二段683號', '​04-23893208', '11:30 – 21:30', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.847416948518!2d120.63654592206026!3d24.141996087117228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dc66c94bc81%3A0x9ecb6bd1601629d9!2zUGl6emEgUm9jayBOYW50dW4g5Y2X5bGv5bqX!5e0!3m2!1szh-TW!2stw!4v1669726371751!5m2!1szh-TW!2stw'),
]
let storeInfoChanghua = [
    new storeInfo('彰化店', '彰化市中正路二段214號', '04-7261188', '11:30 – 21:30', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3642.6835969299104!2d120.53484639790297!3d24.07744429053536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469389ad4605651%3A0x442cc22e9f7b43c4!2zUGl6emEgUm9jayDmkJbmu77miqvolqnlvbDljJblupcgQ2hhbmdodWE!5e0!3m2!1szh-TW!2stw!4v1669726457195!5m2!1szh-TW!2stw'),
]
let storeInfoTainan = [
    new storeInfo('台南店', '台南市中西區永福路二段7號', '06-2239965', '11:30 – 21:30', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4245.959160129719!2d120.19780648118255!3d22.990302785032984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77ee821d53b3%3A0xec64fd478e5a1d2e!2zUGl6emEgUm9jayBUYWluYW4g5pCW5ru-5oqr6JapIOWPsOWNl-W6lw!5e0!3m2!1szh-TW!2stw!4v1669726496732!5m2!1szh-TW!2stw'),
    new storeInfo('永康店', '台南市永康區大橋二街30號', '06-3036008', '11:30 – 21:30', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.139369765116!2d120.22492426689728!3d23.018654438851666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77c1689e3591%3A0x4ba2a1a612db8577!2zUGl6emEgUm9jayBZb25na2FuZyDmkJbmu77miqvolqkg5rC45bq35bqX!5e0!3m2!1szh-TW!2stw!4v1669726529446!5m2!1szh-TW!2stw'),
]
let storeInfoKaohsiung = [
    new storeInfo('高雄文化店', '高雄市苓雅區廣州一街141之5', '07-7235252', '11:30 – 21:30', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.3985021222566!2d120.31595260084526!3d22.624054367690384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0497707742d7%3A0xbac2bf653dc1e014!2zUGl6emEgUm9jayBXZW5odWEg5paH5YyW5bqX!5e0!3m2!1szh-TW!2stw!4v1669726567674!5m2!1szh-TW!2stw'),
    new storeInfo('鹽埕店', '高雄市鹽埕區五福四路96號', '07-5333252', '11:30 – 21:30', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.4214287567956!2d120.28563617108234!3d22.622342569642896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05476433a891%3A0xb126f0f5dc8e8cf9!2zUGl6emEgUm9jayBZYW5jaGVuZyDpub3ln5Xlupc!5e0!3m2!1szh-TW!2stw!4v1669726609002!5m2!1szh-TW!2stw'),
]

for (let x of storeInfoTaipei) {
    let storeNameElm = document.createElement('h3');
    let storeName = document.createTextNode('Pizza Rock ' + x.storeName)
    storeNameElm.appendChild(storeName)
    let detailElm = document.createElement('p');
    let address = document.createTextNode(x.address);
    let tel = document.createTextNode(x.tel);
    let openHours = document.createTextNode(x.openHours);
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    detailElm.append(address, br1, tel, br2, openHours);
    let storeInfoElm = document.createElement('div');
    storeInfoElm.setAttribute('class', 'store-info');
    storeInfoElm.append(storeNameElm, detailElm);
    let iframe = document.createElement('iframe');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('src', x.mapSrc);
    let mapElm = document.createElement('div');
    mapElm.setAttribute('class', 'map');
    mapElm.appendChild(iframe)
    let locationElm = document.createElement('div');
    locationElm.setAttribute('class', 'location taipei');
    locationElm.append(storeInfoElm, mapElm);
    // let br3 = document.createElement('br');
    document.getElementById("store-info").append(locationElm)
}

for (let x of storeInfoNewTaipei) {
    let storeNameElm = document.createElement('h3');
    let storeName = document.createTextNode('Pizza Rock ' + x.storeName)
    storeNameElm.appendChild(storeName)
    let detailElm = document.createElement('p');
    let address = document.createTextNode(x.address);
    let tel = document.createTextNode(x.tel);
    let openHours = document.createTextNode(x.openHours);
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    detailElm.append(address, br1, tel, br2, openHours);
    let storeInfoElm = document.createElement('div');
    storeInfoElm.setAttribute('class', 'store-info');
    storeInfoElm.append(storeNameElm, detailElm);
    let iframe = document.createElement('iframe');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('src', x.mapSrc);
    let mapElm = document.createElement('div');
    mapElm.setAttribute('class', 'map');
    mapElm.appendChild(iframe)
    let locationElm = document.createElement('div');
    locationElm.setAttribute('class', 'location ntaipei');
    locationElm.append(storeInfoElm, mapElm);
    // let br3 = document.createElement('br');
    document.getElementById("store-info").append(locationElm)
}

for (let x of storeInfoTaoyuan) {
    let storeNameElm = document.createElement('h3');
    let storeName = document.createTextNode('Pizza Rock ' + x.storeName)
    storeNameElm.appendChild(storeName)
    let detailElm = document.createElement('p');
    let address = document.createTextNode(x.address);
    let tel = document.createTextNode(x.tel);
    let openHours = document.createTextNode(x.openHours);
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    detailElm.append(address, br1, tel, br2, openHours);
    let storeInfoElm = document.createElement('div');
    storeInfoElm.setAttribute('class', 'store-info');
    storeInfoElm.append(storeNameElm, detailElm);
    let iframe = document.createElement('iframe');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('src', x.mapSrc);
    let mapElm = document.createElement('div');
    mapElm.setAttribute('class', 'map');
    mapElm.appendChild(iframe)
    let locationElm = document.createElement('div');
    locationElm.setAttribute('class', 'location taoyuan');
    locationElm.append(storeInfoElm, mapElm);
    // let br3 = document.createElement('br');
    document.getElementById("store-info").append(locationElm)
}

for (let x of storeInfoTaichung) {
    let storeNameElm = document.createElement('h3');
    let storeName = document.createTextNode('Pizza Rock ' + x.storeName)
    storeNameElm.appendChild(storeName)
    let detailElm = document.createElement('p');
    let address = document.createTextNode(x.address);
    let tel = document.createTextNode(x.tel);
    let openHours = document.createTextNode(x.openHours);
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    detailElm.append(address, br1, tel, br2, openHours);
    let storeInfoElm = document.createElement('div');
    storeInfoElm.setAttribute('class', 'store-info');
    storeInfoElm.append(storeNameElm, detailElm);
    let iframe = document.createElement('iframe');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('src', x.mapSrc);
    let mapElm = document.createElement('div');
    mapElm.setAttribute('class', 'map');
    mapElm.appendChild(iframe)
    let locationElm = document.createElement('div');
    locationElm.setAttribute('class', 'location taichung');
    locationElm.append(storeInfoElm, mapElm);
    // let br3 = document.createElement('br');
    document.getElementById("store-info").append(locationElm)
}

for (let x of storeInfoChanghua) {
    let storeNameElm = document.createElement('h3');
    let storeName = document.createTextNode('Pizza Rock ' + x.storeName)
    storeNameElm.appendChild(storeName)
    let detailElm = document.createElement('p');
    let address = document.createTextNode(x.address);
    let tel = document.createTextNode(x.tel);
    let openHours = document.createTextNode(x.openHours);
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    detailElm.append(address, br1, tel, br2, openHours);
    let storeInfoElm = document.createElement('div');
    storeInfoElm.setAttribute('class', 'store-info');
    storeInfoElm.append(storeNameElm, detailElm);
    let iframe = document.createElement('iframe');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('src', x.mapSrc);
    let mapElm = document.createElement('div');
    mapElm.setAttribute('class', 'map');
    mapElm.appendChild(iframe)
    let locationElm = document.createElement('div');
    locationElm.setAttribute('class', 'location changhua');
    locationElm.append(storeInfoElm, mapElm);
    // let br3 = document.createElement('br');
    document.getElementById("store-info").append(locationElm)
}

for (let x of storeInfoTainan) {
    let storeNameElm = document.createElement('h3');
    let storeName = document.createTextNode('Pizza Rock ' + x.storeName)
    storeNameElm.appendChild(storeName)
    let detailElm = document.createElement('p');
    let address = document.createTextNode(x.address);
    let tel = document.createTextNode(x.tel);
    let openHours = document.createTextNode(x.openHours);
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    detailElm.append(address, br1, tel, br2, openHours);
    let storeInfoElm = document.createElement('div');
    storeInfoElm.setAttribute('class', 'store-info');
    storeInfoElm.append(storeNameElm, detailElm);
    let iframe = document.createElement('iframe');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('src', x.mapSrc);
    let mapElm = document.createElement('div');
    mapElm.setAttribute('class', 'map');
    mapElm.appendChild(iframe)
    let locationElm = document.createElement('div');
    locationElm.setAttribute('class', 'location tainan');
    locationElm.append(storeInfoElm, mapElm);
    // let br3 = document.createElement('br');
    document.getElementById("store-info").append(locationElm)
}

for (let x of storeInfoKaohsiung) {
    let storeNameElm = document.createElement('h3');
    let storeName = document.createTextNode('Pizza Rock ' + x.storeName)
    storeNameElm.appendChild(storeName)
    let detailElm = document.createElement('p');
    let address = document.createTextNode(x.address);
    let tel = document.createTextNode(x.tel);
    let openHours = document.createTextNode(x.openHours);
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    detailElm.append(address, br1, tel, br2, openHours);
    let storeInfoElm = document.createElement('div');
    storeInfoElm.setAttribute('class', 'store-info');
    storeInfoElm.append(storeNameElm, detailElm);
    let iframe = document.createElement('iframe');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('src', x.mapSrc);
    let mapElm = document.createElement('div');
    mapElm.setAttribute('class', 'map');
    mapElm.appendChild(iframe)
    let locationElm = document.createElement('div');
    locationElm.setAttribute('class', 'location kaohsiung');
    locationElm.append(storeInfoElm, mapElm);
    // let br3 = document.createElement('br');
    document.getElementById("store-info").append(locationElm)
}