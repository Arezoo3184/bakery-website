
const products= [
   {
        id:1,
       name:"کیک شکلاتی",
         price:450000,
         image:"./image/cacke.jpg"
     }, {
         id:2,
         name:" کیک توت فرنگی",
         price:380000,
         image:"./image/stracacke.jpg"
     }, {
         id:3,
         name:"کروسان",
         price:120000,
         image:"./image/crosan choclet.jpg"
     }, {
         id:4,
         name:"کوکی",
         price:100000,
         image:"./image//images.jpg"
     }, {
         id:5,
         name:"دونات",
         price:90000,
         image:"./image/donat.jpg"
     }, {
         id:6,
      name:"مافین",
         price:110000,
         image:"./image/mufin choclut.jpg"
     }, {
         id:7,
         name:" تارت",
         price:320000,
         image:"./image/tartfruts.jpg"
     }, {
         id:8,
         name:" براونی",
         price:180000,
         image:"./image/browni.jpg"
     }, {
         id:9,
         name:"کیک سیب ",
         price:250000,
         image:"./image/apple-cake.jpg"
     }, {
         id:10,
         name:" چیز کیک",
         price:250000,
         image:"./image/chees cack.jpg"
     }, {
         id:11,
        name:"کروسان توت فرنگی ",
        price:180000,
        image:"./image/Strawberry-Cheesecake-Croissant.jpeg"
     }, {
         id:12,
        name:"پای سیب ",
       price:250000,
        image:"./image/پتی سیب.jpg"
     },

]




let cart={
    items:[],
    total:0
}

const renderProducts = ()=>{


   const productDiv= document.querySelector(".products-container")
   productDiv.innerHTML=""

   products.forEach((item,index)=>[
      
    productDiv.innerHTML+=
    `
     <div class="product">
                <img src="${item.image}" alt="کیک شکلاتی" />
                <button class="cart-btn" onclick="addToCart(${index})" title="افزودن به سبد خرید"><i class="bi bi-cart4 sabad"></i></button>

                <button class="heart-btn" title="افزودن به علاقه‌مندی">
                  <i class="bi bi-heart"></i>
                </button>
                <h3> ${item.name}</h3>
                <p>کیک شکلاتی خوشمزه</p>
                <span>${item.price} تومان</span>
              </div>

    `
   ])
}
const renderCartItems= ()=>{
    const cartDiv=  document.querySelector(".cart-items")
    cartDiv.innerHTML=""

   const totalPriceEl= document.querySelector(".cart_total-price")

   let totalPrice =0

   if(cart.items.length===0){
    cartDiv.innerHTML="محصولی در سبد خرید وجود ندارد"
   }
   cart.items.forEach((item) =>{
     totalPrice+=item.total
     cartDiv.innerHTML+=
     `
       <div class="cart-item">
            <div class="col-md-4">
              <button class="cart-remove" onclick="removeFromCart('${item.name}')">حذف</button>
            </div>
            <div class="col-md-4">
              <div class="qty">${item.qty}</div>
            </div>
            <div class="col-md-4">
              <h3 class="cart-item-title">${item.name} </h3>
            </div>
          </div>
     
     `
})
totalPriceEl.innerHTML = `مجموع:${totalPrice} تومان`
}
const addToCart= (productIndex)=>{
     const product= products[productIndex]

     let existingProduct = false

    let newCartItems= cart.items.reduce((state,item) =>{
      if(item.name===product.name){
        existingProduct =true

        const newItem ={
            ...item,
            qty: item.qty +1,
            total:(item.qty+1)* item.price
        }

        return[...state , newItem]
      }
         return[...state,item]

     }, [] )
     
     if( !existingProduct){
        newCartItems.push({
            ...product,
            qty:1,
            total:product.price
            
        
        })
     }

     cart ={
        ...cart,
        items:newCartItems
     }
     renderCartItems()
}
const removeFromCart = (productName)=>{
   let newCartItems=cart.items.reduce((state,item)=>{
     if(item.name===productName){
        const newItem={
            ...item,
            qty: item.qty-1,
            total:(item.qty-1)*item.price
        }
        if(newItem.qty >0){
            return[...state,newItem]
        }else{
            return state
        }
     }

     return[...state,item]
  },[])

  cart={
    ...cart,
    items:newCartItems
  }
  renderCartItems()
}





renderCartItems()
renderProducts()