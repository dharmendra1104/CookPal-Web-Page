let arr = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

function menu(item) {
    let foods = item.map((item) => {
        return ` 
        <div class="recipe">
        <img src="${item.imageSrc}" alt="#">
        <p>${item.type}</p>
        <div class="discription">
          <div class="dis-1"> 
            <h3>${item.name}</h3>
            <span><i class="fa-regular fa-star"></i>${item.rating}</span>
          </div>
          <div class="dis-2">
            <h5>${item.time}</h5>
            <div class="li-com">
              <span class="com">
              <span class="liked like"><i class="fa-regular fa-heart"></i></span>
              <i class="fa-regular fa-comment"></i>
              </span>
            </div>
          </div>
        </div>
      </div> `
    })

    let recipes = document.querySelector('.recipes')
    let all = foods.join('')
    recipes.innerHTML = all
}
menu(arr)

function search() {
    let value = document.getElementById('input').value.toLowerCase()
    let find = arr.filter(item => {
        const categories = `${item.name} ${item.time} ${item.type} ${item.isLiked} ${item.rating}`.toLowerCase();
        return categories.includes(value)
    })
    menu(find)
}


document.getElementById('all').addEventListener('click', () => {
    menu(arr)
});


document.getElementById('veg').addEventListener('click', () => {
    let vegRecipes = arr.filter(item => item.type === 'veg');
    menu(vegRecipes);
});


document.getElementById('non-veg').addEventListener('click', () => {
    let nonVegRecipes = arr.filter(item => item.type === 'non-veg');
    menu(nonVegRecipes);
});

document.getElementById('above').addEventListener('click', () => {
    let highRatedRecipes = arr.filter(item => item.rating >= 4);
    menu(highRatedRecipes);
})

document.getElementById('below').addEventListener('click', () => {
    let lowRatedRecipes = arr.filter(item => item.rating < 4);
    menu(lowRatedRecipes);
})


document.querySelectorAll('.liked').forEach((like) => {
    like.addEventListener('click', () => {
        like.classList.toggle('like');
        if (like.classList.contains('like')) {
            like.style.color = 'red';
        } else {
            like.style.color = '';
        }
    });
});

document.getElementById('menu').addEventListener('click', () => {
    let list = document.querySelector('.nav-list')
    list.classList.toggle('show')
})




