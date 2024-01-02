import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    data: [
      {
        id: 1,
        name: "Tomato Pizza",
        price: 99,
        description:
          "tomato pizza recipe is simplicity at its best, combining sweet ripe tomatoes with beautiful aged Grana Padano cheese and creamy ...",
        image:
          "https://images.pexels.com/photos/3944311/pexels-photo-3944311.jpeg?auto=compress&cs=tinysrgb&w=200",
        quntity: 1,
      },
      {
        id: 2,
        name: "Special Thali",
        price: 150,
        description:
          "dal or sambar. vegetables: a seasonal preparation. chutney: a condiment made with fruit, herbs, spices, and even vegetables and fish.",
        image:
          "https://images.pexels.com/photos/11912788/pexels-photo-11912788.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        id: 3,
        name: "Biryaani",
        price: 120,
        description:
          "Biryani (/bɜːrˈjɑːni/) is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish).",
        image:
          "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=250&h=200&dpr=1",
        quntity: 1,
      },
      {
        id: 4,
        name: "Cheese Roll",
        price: 99,
        description:
          "Cheese Roll is a delicious Indian recipe served as a Snacks. it is basically a slice of bread with cheese-based filling, rolled up and toasted until slightly crispy.",
        image:
          "https://images.pexels.com/photos/12737663/pexels-photo-12737663.jpeg?auto=compress&cs=tinysrgb&w=250&h=200&dpr=1",
        quntity: 1,
      },
      {
        id: 5,
        name: "Cheese Pizza",
        price: 199,
        description:
          "This classic cheese pizza recipe makes a chewy crust, homemade tomato sauce, and three different types of cheese.",
        image:
          "https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=200",
        quntity: 1,
      },
      {
        id: 6,
        name: "Cheese Sandwich",
        price: 140,
        description:
          "Crisp, savory, buttery, toasted bread with a warm, gooey, its tasty dishes and cheese based sandwich",
        image:
          "https://images.pexels.com/photos/15126957/pexels-photo-15126957/free-photo-of-a-slice-of-cheesy-pizza.jpeg?auto=compress&cs=tinysrgb&w=200",
        quntity: 1,
      },
      {
        id: 7,
        name: "Burger",
        price: 99,
        description:
          "Burger Recipe with mix veggie patties, spiced mayo dressing and cucumber, tomato, onion slices. Veggie burgers are an all time favorite",
        image:
          "https://images.pexels.com/photos/12567335/pexels-photo-12567335.jpeg?auto=compress&cs=tinysrgb&w=200",
        quntity: 1,
      },
      {
        id: 8,
        name: "Pasta",
        price: 110,
        description:
          " Red sauce pasta made with tomatoes, onions, garlic,spices & herbs. It is a favorite with toddlers & kids - mildly spiced & tastes delicious!",
        image:
          "https://images.pexels.com/photos/12667658/pexels-photo-12667658.jpeg?auto=compress&cs=tinysrgb&w=250&h=200&dpr=1",
        quntity: 1,
      },
      {
        id: 9,
        name: "Noodles",
        price: 120,
        description:
          " Noodles with Vegetables in Curry Sauce A mouth-watering Oriental dish, which features noodles and vegetables topped ",
        image:
          "https://images.pexels.com/photos/12737657/pexels-photo-12737657.jpeg?auto=compress&cs=tinysrgb&w=200",
        quntity: 1,
      },
      {
        id: 10,
        name: "Special Samosa",
        price: 45,
        description:
          "This Samosa Recipe will give you the best tasting authentic Punjabi Aloo Samosa with super-flaky crust and delicious potato stuffing.",
        image:
          "https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&w=200",
        quntity: 1,
      },
      {
        id: 11,
        name: "Special Thali",
        price: 200,
        description: "Description of the Product",
        image:
          "https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-36051.jpg",
        quntity: 1,
      },
    ],
  },
  reducers: {
    addTocart: (state, actions) => {
      const items=actions.payload 
      const existCart = state.cart.find((i)=>i.id === items.id)
      if(existCart){
        existCart.quntity+=1
      }
      else {
        state.cart.push(actions.payload)
      }
    },
    removeTocart: (state, actions) => {
      state.cart = state.cart.filter((item) => item.id !== actions.payload.id);
    },
    productIncrement : (state,actions) =>{
      const itemsId=actions.payload 
      const existCart = state.cart.find((i)=>i.id === itemsId)
      if(existCart){
        existCart.quntity++;
      }
    },
    productDecrement : (state,actions) =>{
      const itemsId=actions.payload 
      const existCart = state.cart.find((i)=>i.id === itemsId)
      if(existCart){
        if(existCart.quntity>1){
          existCart.quntity--;
        }
      }
    },

  },
});

export default cartSlice.reducer;
export const { addTocart, removeTocart,productIncrement,productDecrement} = cartSlice.actions;
