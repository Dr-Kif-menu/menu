document.addEventListener('DOMContentLoaded', () => {
    showMenu('all');
});

function showMenu(category) {
    console.log(category);
    let rows = [];
    const rowCoffee = [
        ['coffee.jpg', 'قهوة تركى', 'Light Turkish Coffee', [['S', 20], ['M', 30]]],
        ['kif coffe.jpg', 'قهوة د كيف', 'Dr KiF Coffee', [['S', 30], ['M', 35]]],
        ['mloki.jpg', 'قهوة ملوكى', 'Royal Coffee', [['S', 30], ['M', 35]]],
    	['habashi.jpeg', 'قهوة حبشى', 'Habashi Coffee', [['S', 30], ['M', 35]]],
    	['yamen coffe.jpg', 'قهوة يمنى', 'Yamen Coffee', [['S', 35], ['M', 40]]],
    	['coffee.jpg', 'قهوة يونانى', 'Greek Coffee', [['S', 30], ['M', 40]]],
    	['ameed coffe.png', 'قهوة العميد', 'AL Ameed Coffee', [['S', 30], ['M', 35]]],
    	['coffe nutila.jpg', 'قهوة نوتيلا', 'Nutilla Coffee', [['S', 30], ['M', 35]]],
    	['frenchcoffe.jpeg', 'قهوة فرنساوى', 'French Coffee', [['S', 20], ['M', 30]]],
    	['frenchcoffe.jpeg', 'قهوة فرنساوى فلافير', 'French Coffee with Flavours', [['S', 35], ['M', 40]]],
    	['nut.jpeg', 'قهوة بندق قطع', 'Coffee Nut', [['S', 35], ['M', 40]]],
    	['espresso.jpeg', 'اسبرسو', 'Esspresso', [['S', 20], ['M', 30]]],
    	['latte.jpg', 'لاتيه', 'Latte', [['S', 35], ['M', 45]]],
	['latte lotas.jpg', 'لاتيه لوتس', 'Latte Lotas', [['S', 40], ['M', 50]]],
	['micato.jpg', 'ميكاتو', 'Micato', [['S', 40], ['M', 50]]],
	['cappichino.jpg', 'كابتشينو', 'Cappuccino', [['S', 50], ['M', 55]]],
	['flat white.jpg', 'فلات وايت', 'Flat White', [['S', 50], ['M', 55]]],
	['mocca.jpg', 'موكا', 'Mocha', [['S', 55], ['M', 60]]],
	['mocca mrch.jpg', 'موكا مارشميلو', 'Mocha Marchimilo', [['S', 35], ['M', 40]]],
	['amarican coffe.jpg', 'امريكان كوفى', 'American Coffe', [['S', 35], ['M', 40]]],
	['cortado.jpg', 'كورتادو', 'Cortado', [['S', 40], ['M', 45]]],
	['cortado nutila.jpeg', 'كورتادو نوتيلا', 'Cortado Nuttila', [['S', 30], ['M', 35]]],
	
    ];
    const rowSpecialCoffee = [
        ['coffee.jpg', 'قهوة سبيشيال', 'Light Turkish Coffee', [['S', 20], ['M', 30]]],
    ];
    const rowHotDrinks = [
        ['Tea.jpg', 'شاى', 'Tea', [['S', 19], ['M', '-']]],
        ['tea milk flavor.jpg', 'شاى نكهات', 'Tea with Flavour', [['S', 20], ['M', '-']]],
	['tea milk.jpg', 'شاى حليب', 'Tea with Milk', [['S', 30], ['M', '-']]],
        ['tea milk flavor.jpg', 'شاى حليب نكهات', 'Tea with Milk & Flavour', [['S', 30], ['M', '-']]],
	['karak tea.jpeg', 'شاى كرك', 'Karaak Tea', [['S', 30], ['M', '-']]],
        ['lycon.jpg', 'ينسون', 'Layson', [['S', 25], ['M', '-']]],
	['mint.jpg', 'نعناع', 'Mint', [['S', 25], ['M', '-']]],
	['krkde.jpg', 'كركدية', 'Habiscus', [['S', 25], ['M', '-']]],
	['nut.jpeg', 'اعشاب د.كيف', 'Dr.KiF Herbs', [['S', 35], ['M', '-']]],
	['cinnamon milk.jpg', 'قرفه حليب', 'Cinnamon with milk', [['S', 30], ['M', '-']]],
	['hot cider.jpg', 'هوت سيدر', 'Hot Cider', [['S', 30], ['M', '-']]],
	['hot orio.jpg', 'هوت اوريو', 'Hot Orio', [['S', 30], ['M', '-']]],
	['hot lotas.jpeg', 'هوت لوتس', 'Hot Lotas', [['S', 35], ['M', '-']]],
	['nescafe.jpg', 'نسكافية', 'Nescafe', [['S', 35], ['M', '-']]],
	['coffe mix.jpg', 'كوفى ميكس', 'Coffe Mix', [['S', 35], ['M', '-']]],
	['sahlab.jpeg', 'سحلب', 'Orchid', [['S', 30], ['M', '-']]],
	['shlb nuts.jpg', 'سحلب مكسرات', 'Orchid with Nuts', [['S', 40], ['M', '-']]],
	['nut.jpeg', 'ماتشا', 'Matchaa', [['S', 40], ['M', '-']]],
	['nut.jpeg', 'ماتشا لاتية', 'Matchaa Latte', [['S', 40], ['M', '-']]],
	['hot choclate.jpg', 'هوت شوكليت', 'Hot Choclate', [['S', 20], ['M', 30]]],
	['hot choclate mrch.jpeg', 'هوت شوكليت مارشميلو', 'Hot Choclate Marchimilo', [['S', 20], ['M', 30]]],
    ];
    const rowColdDrinks = [
        ['papsi.jpg', 'بيبسي', 'Pepsi', [['S', 20], ['M', '-']]],
        ['coca.jpeg', 'كوكاكولا', 'Coca Cola', [['S', 20], ['M', '-']]],
        ['7up.jpeg', 'سيفن اب', '7up', [['S', 20], ['M', '-']]],
	['firoz.jpg', 'فيروز', 'Fayrouz', [['S', 20], ['M', '-']]],
	['mirinda.jpeg', 'ميراندا', 'Mirinda', [['S', 20], ['M', '-']]],
	['bierel.jpg', 'بيريل', 'Birell', [['S', 20], ['M', '-']]],
	['red bull.jpg', 'ريدبول', 'Red Bull', [['S', 45], ['M', '-']]],
	['water.jpg', 'مياه صغيره', 'Water', [['S', 6], ['M', '-']]],
    ];
     const rowSoftDrinks = [
        ['limon soda.jpg', 'ليمون صودا', 'Sun Shine', [['S', 40], ['M', '-']]],
	['mohito.jpg', 'موخيتو', 'Sun Shine', [['S', 40], ['M', '-']]],
	['aple mo.png', 'ابل موخيتو', 'Sun Shine', [['S', 60], ['M', '-']]],
	['mngm.jpg', 'مانجو جم', 'Sun Shine', [['S', 45], ['M', '-']]],
	['blsoda.jpg', 'بلو صودا', 'Sun Shine', [['S', 50], ['M', '-']]],
	['g soda.jpg', 'جريب صودا', 'Sun Shine', [['S', 50], ['M', '-']]],
	['c ap.jpg', 'كراميل ابل سيدر', 'Sun Shine', [['S', 45], ['M', '-']]],
	['sh cola.jpg', 'شيرى كولا', 'Sun Shine', [['S', 40], ['M', '-']]],
    ];
    const rowSmoothies = [
        ['sm.str.jpeg', 'فراولة', 'Strawberry Smoothies', [['S', 45], ['M', '-']]],
	['sm.mango.jpg', 'مانجو', 'Mango Smoothies', [['S', 45], ['M', '-']]],
	['sm.watermelon.jpg', 'بطيخ', 'Watermelon Smoothies', [['S', 45], ['M', '-']]],
	['sm.orange.jpg', 'برتقال', 'Orange Smoothies', [['S', 45], ['M', '-']]],
	['sm.lemon.jpg', 'ليمون', 'Lemon Smoothies', [['S', 50], ['M', '-']]],
	['sm.passion.jpeg', 'باشون فروت', 'Passion fruit Smoothies', [['S', 60], ['M', '-']]],
	['sm.blbery.jpg', 'بلو بيرى', 'Blueberry Smoothies', [['S', 50], ['M', '-']]],
	['sm.mixbery.jpeg', 'مكس بيرى', 'Mix Berry Smoothies', [['S', 50], ['M', '-']]],
	['sm.rozbery.jpg', 'روز بيرى', 'Roseberry Smoothies', [['S', 50], ['M', '-']]],
	
    ];
    const rowFreshJuice = [
        ['m.ju.jpg', 'مانجو', 'Mango Juice', [['S', 50], ['M', '-']]],
	['g.juice.jpg', 'جوافه حليب', 'Guava with Milk Juice', [['S', 50], ['M', '-']]],
	['st.juice.jpeg', 'فراولة حليب', 'Strawberry with Milk Juice', [['S', 50], ['M', 30]]],
	['ba.juice.jpg', 'موز حليب', 'Bannana with Milk Juice', [['S', 50], ['M', '-']]],
	['d.juice.jpg', 'بلح حليب', 'Milk Date Juice', [['S', 40], ['M', '-']]],
	['or.juice.jpeg', 'برتقال', 'Orange Shine', [['S', 50], ['M', '-']]],
	['wa.juice.jpeg', 'بطيخ', 'Watermelon Juice', [['S', 45], ['M', '-']]],
	['lem.juice.jpg', 'ليمون', 'Lemon Juice', [['S', 50], ['M', '-']]],
	['sunshine.jpg', 'ليمون نعناع', 'Lemon Mint Juice', [['S', 55], ['M', '-']]],
	['kiwi.juice.jpg', 'كيوى', 'Kiwi Juice', [['S', 60], ['M', '-']]],
	['avo.juice.jpg', 'افوكادو', 'Avocado Juice', [['S', 60], ['M', '-']]],
	['avo.nut.juice.jpg', 'افوكادو مكسرات', 'Avocado nut Juice', [['S', 70], ['M', '-']]],
	['avo.honey.juice.jpg', 'افوكادو عسل', 'Avocado honey Juice', [['S', 70], ['M', '-']]],
    ];
    const rowCoctails = [
        ['sunshine.jpg', 'فرست لاف', 'First Love', [['S', 60], ['M', '-']]],
	['sunshine.jpg', 'بنانا كوفى', 'Banna Cofe', [['S', 60], ['M', '-']]],
	['sunshine.jpg', 'بينكى روز', 'Pinky Rose', [['S', 60], ['M', '-']]],
	['sunshine.jpg', 'ريد باشون', 'Sun Shine', [['S', 60], ['M', '-']]],
	['sunshine.jpg', 'برادايس', 'Sun Shine', [['S', 50], ['M', '-']]],
	['sunshine.jpg', 'كيف رويالتى', 'Sun Shine', [['S', 60], ['M', '-']]],
	['sunshine.jpg', 'استرو بادى ماجيك', 'Sun Shine', [['S', 50], ['M', '-']]],
	['sunshine.jpg', 'مانجو كيوى', 'Sun Shine', [['S', 50], ['M', '-']]],
	['sunshine.jpg', 'كيف نايت', 'Sun Shine', [['S', 50], ['M', '-']]],
    ];
    const rowHealthyDrinks = [
        ['sunshine.jpg', 'Healthy Drink', 'Sun Shine', [['S', 20], ['M', 30]]],
    ];
    const rowMilkShakes = [
        ['sh.van.jpeg', 'فانيليا', 'Vanilla Milk Shake', [['S', 40], ['M', '-']]],
        ['milk4.jpeg', 'شوكليت', 'Choclate Milk Shake', [['S', 40], ['M', '-']]],
        ['milk3.jpg', 'فراولة', 'Strawberry Milk Shake', [['S', 45], ['M', '-']]],
        ['sh.man.jpg', 'مانجو', 'Mango Milk Shake', [['S', 45], ['M', '-']]],
        ['sh.rose.jpg', 'توت احمر', 'Roseberry Milk Shake', [['S', 50], ['M', '-']]],
        ['sh.blue.jpg', 'توت ازرق', 'Blueberry Milk Shake', [['S', 45], ['M', '-']]],
        ['sh.orio.jpg', 'اوريو', 'Orio Milk Shake', [['S', 50], ['M', '-']]],
	['sh.nutila.jpeg', 'نوتيلا', 'Nuttila Milk Shake', [['S', 55], ['M', '-']]],
	['sh.sh.jpeg', 'كيت كات', 'KitKat Milk Shake', [['S', 55], ['M', '-']]],
	['sh.sh.jpeg', 'جلاكسى', 'Galaxy Milk Shake', [['S', 55], ['M', '-']]],
	['sh.lotus.jpg', 'لوتس', 'Lotas Milk Shake', [['S', 55], ['M', '-']]],
];
    const rowIceDrinks = [
        ['sunshine.jpg', 'ايس كوفى', 'Ice Coffe', [['S', 40], ['M', '-']]],
	['sunshine.jpg', 'ايس امريكان', 'Ice American', [['S', 40], ['M', '-']]],
	['sunshine.jpg', 'ايس شوكليت', 'Ice Choclate', [['S', 40], ['M', '-']]],
	['sunshine.jpg', 'ايس لاتيه', 'Ice Latte', [['S', 40], ['M', '-']]],
	['sunshine.jpg', 'ايس كابتشينو', 'Ice Cappuccino', [['S', 55], ['M', '-']]],
	['sunshine.jpg', 'ايس موكا', 'Ice Mocha', [['S', 55], ['M', '-']]],
	['sunshine.jpg', 'ايس كوفى توفى', 'Ice Coffe Tofy', [['S', 60], ['M', '-']]],
	['sunshine.jpg', 'اسبرسو بريو', 'Espresso Borio', [['S', 50], ['M', '-']]],
	['sunshine.jpg', 'فرابتشينو', 'Frappuccino', [['S', 50], ['M', '-']]],
	['sunshine.jpg', 'فرابتشينو كراميل', 'Frappuccino Caramel', [['S', 60], ['M', '-']]],
	['sunshine.jpg', 'فرابية', 'Vanilla - Choclate - Caramel - Nutt', [['S', 55], ['M', '-']]],
	['ice cream.jpg', 'بوله ايس كريم', 'Ice Cream', [['S', 15], ['M', 30]]],
    ];
    const rowYogurt = [
        ['youg4.jpg', 'على كيفك', 'Kifak Yoguart', [['S', 45], ['M', '-']]],
        ['youg2.jpg', 'زبادى عسل', 'Honey Yoguart', [['S', 35], ['M', '-']]],
        ['yogurt.jpeg', 'زبادى فواكه', 'Fruit Yoguart', [['S', 40], ['M', '-']]],
                
];	
    const rowDesserts = [
        ['ch.clasic.jpeg', 'شيزكيك كلاسيك', 'Sugar Yoguart', [['S', 20], ['M', '-']]],
	['ch.all.jpg', 'شيز كيك', 'توت احمر - توت ازرق - شوكليت  كراميل - فراولة', [['S', 45], ['M', '-']]],
	['molton.jpg', 'مولتون كيك كلاسيك', 'Sugar Yoguart', [['S', '-'], ['M', '-']]],
	['molton ice.jpeg', 'مولتون كيك ايس', 'Sugar Yoguart', [['S', '-'], ['M', '-']]],
	['om ali.jpg', 'ام على سادة', 'Sugar Yoguart', [['S', 40], ['M', '-']]],
	['om ali1.jpeg', 'ام على عسل', 'Sugar Yoguart', [['S', 45], ['M', '-']]],
	['om ali2.jpg', 'ام على', 'مكسرات - ايس كريم', [['S', 50], ['M', '-']]],
	['om ali3.jpg', 'ام على', 'شوكليت - كراميل', [['S', 55], ['M', '-']]],     
];
    const rowWaffle = [
        ['waf.choc1.jpeg', 'شوكليت', 'Choclate', [['S', 20], ['M', '-']]],
	['waf.white.jpg', 'وايت شوكليت', 'White Choclate', [['S', 45], ['M', '-']]],
	['waf.choc.jpeg', 'نوتيلا', 'Nuttila', [['S', '-'], ['M', '-']]],
	['waf.choc3.jpeg', 'شيكولاته مكسرات', 'Choclate & Nutt', [['S', '-'], ['M', '-']]],
        
];

    const rowCoffeeBean = [
        ['be.be.jpg', 'اسبشيال', 'فاتح - وسط', [['Kilo', '-']]],
	['be.brazil.jpg', 'برازيلى', 'فاتح - وسط', [['Kilo', '-']]],
	['be.be.jpg', 'ملوكى', 'فاتح - وسط', [['Kilo', '-']]],
	['be.be.jpg', 'غامق', 'Dark', [['Kilo', '-']]],
	['be.habashi.jpg', 'حبشى', '-', [['Kilo', '-']]],
	['be.colo.jpg', 'كولومبى', '-', [['Kilo', '-']]],
	['be.ymn.jpg', 'يمنى', '-', [['Kilo', '-']]],
	['be.grk.jpg', 'يونانى', '-', [['Kilo', '-']]],
	['be.be.jpg', 'برازيلى سانتوس', '-', [['Kilo', '-']]],
	['be.hi.jpeg', 'هندى K', '-', [['Kilo', '-']]],
	['be.hi.jpeg', 'هندى A', '-', [['Kilo', '-']]],
	['be.brazil.jpg', 'برازيلى ريو', '-', [['Kilo', '-']]],
	['be.t.jpg', 'اخضر تخسيس', '-', [['Kilo', '-']]],
	['be.be.jpg', 'قطع بندق', '-', [['Kilo', '-']]],
	['be.be.jpg', 'قهوة فرنساوى', '-', [['Kilo', '-']]],
	['be.be.jpg', 'قهوة عربى', '-', [['Kilo', '-']]],
	['be.be.jpg', 'قهوة الطاقة', '-', [['Kilo', '-']]],
	['be.be.jpg', 'اسبرسو', '-', [['Kilo', '-']]],
	['be.be.jpg', 'نسكافية كلاسيك', '-', [['Kilo', '-']]],
	['be.be.jpg', 'نسكافيه جولد', '-', [['Kilo', '-']]],

];

  
    const mainBody = document.getElementById("main-data");
    mainBody.innerHTML = ''; // Clear previous content

    if (category === "coffee") {
        rows = rowCoffee;
    } else if (category == 'specialcoffee') {
        rows = rowSpecialCoffee;
    } else if (category == 'colddrinks') {
        rows = rowColdDrinks;
    } else if (category == 'hotdrinks') {
        rows = rowHotDrinks;
    } else if (category == 'softdrinks') {
        rows = rowSoftDrinks;
    } else if (category == 'milkshakes') {
        rows = rowMilkShakes;
    } else if (category == 'yogurt') {
        rows = rowYogurt;
    } else if (category == 'smoothies') {
        rows = rowSmoothies;
    } else if (category == 'freshjuice') {
        rows = rowFreshJuice;
    } else if (category == 'coctails') {
        rows = rowCoctails;
    } else if (category == 'healthydrinks') {
        rows = rowHealthyDrinks;
    } else if (category == 'icedrinks') {
        rows = rowIceDrinks;
    } else if (category == 'desserts') {
        rows = rowDesserts;
    } else if (category == 'waffle') {
        rows = rowWaffle;
    } else if (category == 'coffeebean') {
        rows = rowCoffeeBean;
    }
      else {
        rows.push(...rowCoffee);
        rows.push(...rowColdDrinks);
        rows.push(...rowHotDrinks);
        rows.push(...rowSoftDrinks);
        rows.push(...rowMilkShakes);
        rows.push(...rowYogurt);
	rows.push(...rowWaffle);
	rows.push(...rowDesserts);
	rows.push(...rowIceDrinks);
	rows.push(...rowHealthyDrinks);
	rows.push(...rowCoctails);
	rows.push(...rowFreshJuice);
	rows.push(...rowSmoothies);
	rows.push(...rowSpecialCoffee);
	rows.push(...rowCoffeeBean);
	
    }

    let data = '';
    rows.forEach(row => {
        data += getCard(row[0], row[1], row[2], row[3]);
    });
    mainBody.innerHTML = data;
}

function getCard(imageSrc, title, description, priceList) {
    let prices = '';
    priceList.forEach(ele => {
        prices += getPrice(ele[0], ele[1]);
    });
    return `<div class="card mb-3" style="max-width: 540px; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-color: #196666">
        <div class="row g-0"  style="background: #196666; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-color: #196666">
            <div class="col-4" style="background: #196666; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-color: transparent; display: flex; justify-content: center; align-items: center;">
    		<img src="${imageSrc}" class="img-fluid rounded-start" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">
	    </div>
            <div class="col-8" style="background: #196666; color: white; border-radius: 15px; overflow: hidden;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-color: transparent; display: flex; justify-content: center; align-items: center;">
               <div class="card-body" style="background: #ac9653; color: white;">
                    <h5 class="card-title arabic-text">${title}</h5>
                    <p class="card-text">${description}</p>
                    <div class='d-flex flex-row justify-content-end'>
                        ${prices}
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

function getPrice(label, price) {
    return `<div class='d-flex flex-column align-items-center' style="padding-left:15px">
                <div>${label}</div>
                <div>${price}</div>
            </div>`;
}
