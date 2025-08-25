function getElement(id){
    const element = document.getElementById(id);
    return element;
}
document.getElementById('Cart-BTN').addEventListener("click",function(){
    const cart = getElement('cart-money').innerText
    const take = getElement("take").innerText
    const total = Number(cart) + Number(take);
    document.getElementById("take").innerText = total;
    const createEl = getElement("my-item");
    const crate = document.createElement("div");
    crate.innerHTML = ` <div
            class="flex justify-between gap-7 p-2 items-center bg-[#1111] rounded mb-4 mt-4"
          >
            <div class="w-[40px]">
              <img class="w-full" src="assets/kitchen-1.png" alt="" />
            </div>
            <div>
              <p class="font-bold">K.Accessories</p>
              <p class="text-[#797075]">39.00 TK</p>
            </div>
          </div>`
    createEl.append(crate)
})

document.getElementById('Cart-BTN2').addEventListener("click",function(){
    const cart = getElement('cart-money2').innerText
    const take = getElement("take").innerText
    const total = Number(cart) + Number(take);
    document.getElementById("take").innerText = total;
    const createEl = getElement("my-item");
    const crate = document.createElement("div");
    crate.innerHTML = ` <div
            class="flex justify-between gap-7 p-2 items-center bg-[#1111] rounded mb-4 mt-4"
          >
            <div class="w-[40px]">
              <img class="w-full" src="assets/kitchen-2.png" alt="" />
            </div>
            <div>
              <p class="font-bold">K.Accessories</p>
              <p class="text-[#797075]">25.00 TK</p>
            </div>
          </div>`
    createEl.append(crate)
})
document.getElementById('Cart-BTN3').addEventListener("click",function(){
    const cart = getElement('cart-money3').innerText
    const take = getElement("take").innerText
    const total = Number(cart) + Number(take);
    document.getElementById("take").innerText = total;
    const createEl = getElement("my-item");
    const crate = document.createElement("div");
    crate.innerHTML = ` <div
            class="flex justify-between gap-7 p-2 items-center bg-[#1111] rounded mb-4 mt-4"
          >
            <div class="w-[40px]">
              <img class="w-full" src="assets/kitchen-3.png" alt="" />
            </div>
            <div>
              <p class="font-bold">Home Cooker</p>
              <p class="text-[#797075]">49.00 TK</p>
            </div>
          </div>`
    createEl.append(crate)
})
document.getElementById('Cart-BTN4').addEventListener("click",function(){
    const cart = getElement('cart-money4').innerText
    const take = getElement("take").innerText
    const total = Number(cart) + Number(take);
    document.getElementById("take").innerText = total;
    const createEl = getElement("my-item");
    const crate = document.createElement("div");
    crate.innerHTML = ` <div
            class="flex justify-between gap-7 p-2 items-center bg-[#1111] rounded mb-4 mt-4"
          >
            <div class="w-[40px]">
              <img class="w-full" src="assets/sports-1.png" alt="" />
            </div>
            <div>
              <p class="font-bold">Sports Back Cap</p>
              <p class="text-[#797075]">49.00 TK</p>
            </div>
          </div>`
    createEl.append(crate)
})
document.getElementById('Cart-BTN5').addEventListener("click",function(){
    const cart = getElement('cart-money5').innerText
    const take = getElement("take").innerText
    const total = Number(cart) + Number(take);
    document.getElementById("take").innerText = total;
    const createEl = getElement("my-item");
    const crate = document.createElement("div");
    crate.innerHTML = ` <div
            class="flex justify-between gap-7 p-2 items-center bg-[#1111] rounded mb-4 mt-4"
          >
            <div class="w-[40px]">
              <img class="w-full" src="assets/sports-2.png" alt="" />
            </div>
            <div>
              <p class="font-bold">Full Jersey Set</p>
              <p class="text-[#797075]">69.00 TK</p>
            </div>
          </div>`
    createEl.append(crate)
})
document.getElementById('Cart-BTN6').addEventListener("click",function(){
    const cart = getElement('cart-money6').innerText
    const take = getElement("take").innerText
    const total = Number(cart) + Number(take);
    document.getElementById("take").innerText = total;
    const createEl = getElement("my-item");
    const crate = document.createElement("div");
    crate.innerHTML = ` <div
            class="flex justify-between gap-7 p-2 items-center bg-[#1111] rounded mb-4 mt-4"
          >
            <div class="w-[40px]">
              <img class="w-full" src="assets/sports-3.png" alt="" />
            </div>
            <div>
              <p class="font-bold">Sports cates</p>
              <p class="text-[#797075]">159.00 TK</p>
            </div>
          </div>`
    createEl.append(crate)
})
document.getElementById('Cart-BTN7').addEventListener("click",function(){
    const cart = getElement('cart-money7').innerText
    const take = getElement("take").innerText
    const total = Number(cart) + Number(take);
    document.getElementById("take").innerText = total;
    const createEl = getElement("my-item");
    const crate = document.createElement("div");
    crate.innerHTML = ` <div
            class="flex justify-between gap-7 p-2 items-center bg-[#1111] rounded mb-4 mt-4"
          >
            <div class="w-[40px]">
              <img class="w-full" src="assets/furniture-1.png" alt="" />
            </div>
            <div>
              <p class="font-bold">Single Relax Chair</p>
              <p class="text-[#797075]">185.00 TK</p>
            </div>
          </div>`
    createEl.append(crate)
})
document.getElementById('Cart-BTN8').addEventListener("click",function(){
    const cart = getElement('cart-money8').innerText
    const take = getElement("take").innerText
    const total = Number(cart) + Number(take);
    document.getElementById("take").innerText = total;
    const createEl = getElement("my-item");
    const crate = document.createElement("div");
    crate.innerHTML = ` <div
            class="flex justify-between gap-7 p-2 items-center bg-[#1111] rounded mb-4 mt-4"
          >
            <div class="w-[40px]">
              <img class="w-full" src="assets/furniture-2.png" alt="" />
            </div>
            <div>
              <p class="font-bold">Children play</p>
              <p class="text-[#797075]">299.00 TK</p>
            </div>
          </div>`
    createEl.append(crate)
})
document.getElementById('Cart-BTN9').addEventListener("click",function(){
    const cart = getElement('cart-money9').innerText
    const take = getElement("take").innerText
    const total = Number(cart) + Number(take);
    document.getElementById("take").innerText = total;
    const createEl = getElement("my-item");
    const crate = document.createElement("div");
    crate.innerHTML = ` <div
            class="flex justify-between gap-7 p-2 items-center bg-[#1111] rounded mb-4 mt-4"
          >
            <div class="w-[40px]">
              <img class="w-full" src="assets/furniture-3.png" alt="" />
            </div>
            <div>
              <p class="font-bold">Flexible Sofa</p>
              <p class="text-[#797075]">339.00 TK</p>
            </div>
          </div>`
    createEl.append(crate)
    const discount = getElement("discount").innerText;
    if(total > 500){
        const convert = Number(discount) - (100/5)
        const odd =total - convert 
        document.getElementById("discount").innerText = odd;
    };

    const quantity = getElement("Qualitys").innerText;
    const Qualitysd = Number(quantity) + 1;
    console.log();
})