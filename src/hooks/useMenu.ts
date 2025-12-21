export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuSubsection {
  title: string;
  description?: string;
  items: MenuItem[];
}

export interface MenuSection {
  title: string;
  subsections: MenuSubsection[];
}

const hardcodedMenuData: MenuSection[] = [
  {
    title: 'Beverages and Breakfast',
    subsections: [
      {
        title: 'Beverages',
        items: [
          { name: 'Milk Tea', price: 'Rs.80' },
          { name: 'Hot Chocolate', price: 'Rs.130' },
          { name: 'Black Tea/ Lemon Tea', price: 'Rs.60' },
          { name: 'Black Coffee', price: 'Rs.90' },
          { name: 'Milk Coffee', price: 'Rs.120' },
          { name: 'Hot Milk', price: 'Rs.90' },
          { name: 'Hot Lemon, Ginger & Honey', price: 'Rs.170' },
        ],
      },
      {
        title: 'Breakfast',
        items: [
          { name: 'Corn Flakes with Milk', price: 'Rs.170' },
          { name: 'Plain Toast with Butter & Jam', price: 'Rs.110' },
          { name: 'Boiled Egg/ Egg Fried', price: 'Rs.90' },
          { name: 'Aalu Paratha With Aachar and curd', price: 'Rs.180' },
          { name: 'Paneer Paratha With Aachar and curd', price: 'Rs.210' },
        ],
      },
    ],
  },
  {
    title: 'Appetizers and Sides',
    subsections: [
      {
        title: 'Veg Appetizers',
        items: [
          { name: 'Veg Pakoda', price: 'Rs.220' },
          { name: 'Panner Pakoda', price: 'Rs.350' },
          { name: 'Paneer Chilly', price: 'Rs.390' },
          { name: 'Paneer Dameko', price: 'Rs.390' },
          { name: 'Mushroom Pakoda', price: 'Rs.320' },
          { name: 'Mushroom Chilly Garlic', price: 'Rs.350' },
          { name: 'Peanuts Sadeko/fry/Masala', price: 'Rs.220' },
          { name: 'Chashewnuts Fry', price: 'Rs.360' },
          { name: 'Veg Sping Roll', price: 'Rs.290' },
          { name: 'Papad Masala', price: 'Rs.180' },
          { name: 'Papad Roaster/Papad Fry (2Pcs)', price: 'Rs.90' },
        ],
      },
      {
        title: 'Non-Veg Appetizers',
        items: [
          { name: 'Chicken Lolipop(2pcs)', price: 'Rs.320' },
          { name: 'Chicken Drumstick (2Pcs)', price: 'Rs.320' },
          { name: 'Chicken Chilly', price: 'Rs.350' },
          { name: 'Chicken spring Roll', price: 'Rs.360' },
          { name: 'Chicken Manchuriyan', price: 'Rs.400' },
          { name: 'Crispy Spicy Chicken Wings (4pcs)', price: 'Rs.360' },
          { name: 'Nepali Chicken Roast (4Pcs)', price: 'Rs.450' },
          { name: 'Mutton Tass', price: 'Rs.485' },
          { name: 'Mutton Sadheko', price: 'Rs.400' },
          { name: 'Mutton Chhoila', price: 'Rs.420' },
          { name: 'Mithila Fish Fry (2Pcs)', price: 'Rs.220' },
          { name: 'JanakpurInn Special ( Mutton )', price: 'Rs.490' },
        ],
      },
      {
        title: 'Our Soups',
        items: [
          { name: 'Sweet Corn Soup', price: 'Rs.320' },
          { name: 'Veg Hot and Sour', price: 'Rs.320' },
          { name: 'Chicken Hot And Sour', price: 'Rs.350' },
          { name: 'Chicken Manchow', price: 'Rs.360' },
          { name: 'Chicken Clean', price: 'Rs.400' },
        ],
      },
      {
        title: 'Fresh Salad',
        items: [
          { name: 'Nepali Salad', price: 'Rs.170' },
          { name: 'Green Garden Salad', price: 'Rs.160' },
          { name: 'Onion Salad', price: 'Rs.130' },
        ],
      },
    ],
  },
  {
    title: 'Main Course',
    subsections: [
      {
        title: 'Traditional Thali',
        description: 'Authentic Nepali Cuisine',
        items: [
          { name: 'Veg Thali: Daal, Saag, Aalu Bhujiya, MixVeg, Aachar, papad, Salad, Curd, Rice', price: 'Rs.350' },
          { name: 'Chicken Thali: Daal, Saag, Aalu Bhujiya, MixVeg, Aachar, papad, Salad, Curd, Chicken, Rice', price: 'Rs.450' },
          { name: 'Mutton Thali: Daal, Saag, Aalu Bhujiya, MixVeg, Aachar, papad, Salad, Curd, Mutton, Rice', price: 'Rs.550' },
          { name: 'Egg Thali: Daal, Saag, Aalu Bhujiya, MixVeg, Aachar, papad, Salad, Curd, Egg, Rice', price: 'Rs.400' },
          { name: 'Fish Thali: Daal, Saag, Aalu Bhujiya, MixVeg, Aachar, papad, Salad, Curd, Fish, Rice', price: 'Rs.420' },
        ],
      },
      {
        title: 'Flavour Of Basmati Rice',
        items: [
          { name: 'Mutton Biryani', price: 'Rs.490' },
          { name: 'Chicken Biryani', price: 'Rs.420' },
          { name: 'Veg-Biryani', price: 'Rs.290' },
          { name: 'Jeera Rice/ Butter Rice', price: 'Rs.180' },
          { name: 'Steam Rice', price: 'Rs.110' },
        ],
      },
      {
        title: 'Main Course-Veg',
        items: [
          { name: 'Mix – Veg Curry', price: 'Rs.180' },
          { name: 'Vegetable Handi', price: 'Rs.340' },
          { name: 'Paneer Tikka Masala', price: 'Rs.350' },
          { name: 'Paneer Handi', price: 'Rs.350' },
          { name: 'Matar Paneer', price: 'Rs.290' },
          { name: 'Paneer Butter Masala', price: 'Rs.380' },
          { name: 'Daal Fry/ Daal Tadka', price: 'Rs.250' },
          { name: 'Aalu Dum / Aalu jeera/ Aalu Methi', price: 'Rs.220' },
          { name: 'Aloo Do Pyaza', price: 'Rs.380' },
          { name: 'Mushroom Do Pyaza', price: 'Rs.340' },
        ],
      },
      {
        title: 'Main Course-Non Veg',
        items: [
          { name: 'Chicken Butter Masala', price: 'Rs.420' },
          { name: 'Chicken Tikika Masala', price: 'Rs.420' },
          { name: 'Chicken Kadai', price: 'Rs.390' },
          { name: 'Chicken Handi', price: 'Rs.390' },
          { name: 'Chicken Curry', price: 'Rs.380' },
          { name: 'Chicken Do Pyaza', price: 'Rs.380' },
          { name: 'Mutton Curry', price: 'Rs.450' },
          { name: 'Fish Curry', price: 'Rs.350' },
          { name: 'JanakpurInn Special ( Chicken )', price: 'Rs.500' },
        ],
      },
    ],
  },
  {
    title: 'Snacks',
    subsections: [
      {
        title: 'Nepali stew',
        items: [
          { name: 'Veg Thukpa', price: 'Rs.190' },
          { name: 'Chicken Thukpa', price: 'Rs.210' },
          { name: 'Mutton Thukpa', price: 'Rs.270' },
          { name: 'Egg Thukpa', price: 'Rs.250' },
        ],
      },
      {
        title: 'Veg Momo',
        items: [
          { name: 'Steam', price: 'Rs.150' },
          { name: 'Sadheko', price: 'Rs.170' },
          { name: 'Kothey', price: 'Rs.180' },
          { name: 'Fry', price: 'Rs.180' },
          { name: 'Jhol', price: 'Rs.190' },
          { name: 'Chilly', price: 'Rs.200' },
        ],
      },
      {
        title: 'Chicken Momo',
        items: [
          { name: 'Steam', price: 'Rs.250' },
          { name: 'Sadheko', price: 'Rs.250' },
          { name: 'Kothey', price: 'Rs.260' },
          { name: 'Fry', price: 'Rs.270' },
          { name: 'Jhol', price: 'Rs.280' },
          { name: 'Chilly', price: 'Rs.300' },
        ],
      },
      {
        title: 'Mutton Momo',
        items: [
          { name: 'Steam', price: 'Rs.260' },
          { name: 'Sadheko', price: 'Rs.270' },
          { name: 'Fry', price: 'Rs.280' },
          { name: 'Jhol', price: 'Rs.290' },
          { name: 'Kothey', price: 'Rs.300' },
          { name: 'Chilly', price: 'Rs.320' },
        ],
      },
    ],
  },
];

export const useMenu = () => {
  return { data: hardcodedMenuData, isLoading: false, isError: false, error: null };
};