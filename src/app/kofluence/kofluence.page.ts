import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kofluence',
  templateUrl: './kofluence.page.html',
  styleUrls: ['./kofluence.page.scss'],
})
export class KofluencePage implements OnInit {
  searches: any;
  hashtags: any;
  yourPosts: any;
  allPosts: any;
  searchedposts: any = [];
  dateNow: Date = new Date();

  result: any;

  constructor() { }

  ngOnInit() {
    console.log(this.dateNow);

    this.getAll()
    this.searches = [],
      this.hashtags = ['food', 'kofluencer'],
      this.allPosts = [
        {
          id: '_yp123',
          date: "Jun 02 2020",
          media: 'image',
          image: 'https://minimalistbaker.com/wp-content/uploads/2013/07/Easy-Deep-Dish-Pizza-with-Roasted-Veggies-Minimalist-Baker.jpg',
          likes: 999,
          comments: 500,
          hashtag: 'cheeselove'
        },
        {
          id: '_yp123',
          date: "Jun 03 2020",
          media: 'videocam',
          image: 'https://www.kingarthurflour.com/sites/default/files/2019-12/gluten-free-pan-pizza_0.jpg',
          likes: 1199,
          comments: 1000,
          hashtag: 'kofluence'
        },
        {
          id: '_yp123',
          date: "Jun 02 2020",
          media: 'image',
          image: 'https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg',
          likes: 123,
          comments: 12,
          hashtag: 'kofluence'
        },
        {
          id: '_yp123',
          date: "Jun 02 2020",
          media: 'image',
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/pizza-dough-recipe.jpg',
          likes: 5,
          comments: 100,
          hashtag: 'cheeselove'
        },
        {
          id: '_yp123',
          date: "Jun 02 2020",
          media: 'image',
          image: 'https://minimalistbaker.com/wp-content/uploads/2013/07/Easy-Deep-Dish-Pizza-with-Roasted-Veggies-Minimalist-Baker.jpg',
          likes: 999,
          comments: 500,
          hashtag: 'food'
        },
        {
          id: '_yp123',
          date: "Jun 03 2020",
          media: 'videocam',
          image: 'https://www.kingarthurflour.com/sites/default/files/2019-12/gluten-free-pan-pizza_0.jpg',
          likes: 1199,
          comments: 1000,
          hashtag: 'kofluence'
        },
        {
          id: '_yp123',
          date: "Jun 02 2020",
          media: 'image',
          image: 'https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg',
          likes: 123,
          comments: 12,
          hashtag: 'kofluence'
        },
        {
          id: '_yp123',
          date: "Jun 02 2020",
          media: 'image',
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/pizza-dough-recipe.jpg',
          likes: 5,
          comments: 100,
          hashtag: 'cheeselve'
        },
        {
          id: '_yp123',
          date: "Jun 02 2020",
          media: 'image',
          image: 'https://minimalistbaker.com/wp-content/uploads/2013/07/Easy-Deep-Dish-Pizza-with-Roasted-Veggies-Minimalist-Baker.jpg',
          likes: 999,
          comments: 500,
          hashtag: 'food'
        },
        {
          id: '_yp123',
          date: "Jun 03 2020",
          media: 'videocam',
          image: 'https://www.kingarthurflour.com/sites/default/files/2019-12/gluten-free-pan-pizza_0.jpg',
          likes: 1199,
          comments: 1000,
          hashtag: 'kofluence'
        },
        {
          id: '_yp123',
          date: "Jun 02 2020",
          media: 'image',
          image: 'https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg',
          likes: 123,
          comments: 12,
          hashtag: 'kofluencer'
        },
        {
          id: '_yp123',
          date: "Jun 02 2020",
          media: 'image',
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/pizza-dough-recipe.jpg',
          likes: 5,
          comments: 100,
          hashtag: 'kofluence'
        },
        {
          id: '_yp123',
          date: "Jun 02 2020",
          media: 'image',
          image: 'https://minimalistbaker.com/wp-content/uploads/2013/07/Easy-Deep-Dish-Pizza-with-Roasted-Veggies-Minimalist-Baker.jpg',
          likes: 999,
          comments: 500,
          hashtag: 'kofluence'
        },
        {
          id: '_yp123',
          date: "Jun 03 2020",
          media: 'videocam',
          image: 'https://www.kingarthurflour.com/sites/default/files/2019-12/gluten-free-pan-pizza_0.jpg',
          likes: 1199,
          comments: 1000,
          hashtag: 'kofluencer'
        },
        {
          id: '_yp123',
          date: "Jun 02 2020",
          media: 'image',
          image: 'https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg',
          likes: 123,
          comments: 12,
          hashtag: 'kofluence'
        },
        {
          id: '_yp123',
          date: "Jun 02 2020",
          media: 'image',
          image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/pizza-dough-recipe.jpg',
          likes: 5,
          comments: 100,
          hashtag: 'kofluencer'
        }
      ]
    this.similarPosts()

  }

  similarPosts() {
    this.searchedposts = this.allPosts.filter(p => p.hashtag == 'kofluence' && 'cheeselove')
  }


  getAll() {

    this.yourPosts = [
      {
        id: '_yp123',
        date: "Jun 02 2020",
        media: 'image',
        image: 'https://minimalistbaker.com/wp-content/uploads/2013/07/Easy-Deep-Dish-Pizza-with-Roasted-Veggies-Minimalist-Baker.jpg',
        likes: 999,
        comments: 500,
        hashtag: 'food'
      },
      {
        id: '_yp123',
        date: "Jun 03 2020",
        media: 'videocam',
        image: 'https://www.kingarthurflour.com/sites/default/files/2019-12/gluten-free-pan-pizza_0.jpg',
        likes: 1199,
        comments: 1000,
        hashtag: 'kofluencer'
      },
      {
        id: '_yp123',
        date: "Jun 02 2020",
        media: 'image',
        image: 'https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg',
        likes: 123,
        comments: 12,
        hashtag: 'kofluencer'
      },
      {
        id: '_yp123',
        date: "Jun 02 2020",
        media: 'image',
        image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/pizza-dough-recipe.jpg',
        likes: 5,
        comments: 100,
        hashtag: 'food'
      }
    ]

  }


  //  To convert likes into when number crossed 999 
  converter(num) {
    return Math.abs(num) > 999 ? (Math.sign(num) * +(Math.abs(num) / 1000).toFixed(1) + 'k') : Math.sign(num) * Math.abs(num)
  }


  toSearch(hash, index) {
    console.log(hash, index);

    this.hashtags.splice(index, 1)

    this.searches.push(hash)

    this.searchedposts = this.allPosts.filter(m => m.hashtag == hash)
    console.log(this.searchedposts);

  }

  cancel(search, index) {
    console.log(search, index);
    this.hashtags.push(search)

    this.searches.splice(index, 1)
    console.log(this.hashtags);
    this.searchedposts.splice(this.allPosts.filter(m => m.hashtag == search), 1)
    this.getAll()

  }

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2.2,
    // autoplay: true,
    speed: 500,
  };
}
