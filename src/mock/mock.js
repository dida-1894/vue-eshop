import Mock from 'mockjs'
function getRImg(){
  return Mock.Random.image('400×200', Mock.Random.hex())
}
Mock.mock(/product/, {
  product: [
    {
      proName: "手机",
      tinyImg: require("../assets/product/iphone1.jpg"),
      items: [
       {
         id: 1,
         name: '华为 P21 Pro',
         src: require("../assets/product/iphone1.jpg"),
         price: 4988
       },
       {
         id: 2,
         name: '华为 P22 Pro',
         src: require("../assets/product/iphone1.jpg"),
         price: 4988
       },
       {
         id: 3,
         name: '华为 P23 Pro',
         src: require("../assets/product/iphone1.jpg"),
         price: 4988
       },
       {
         id: 4,
         name: '华为 P24 Pro',
         src: require("../assets/product/iphone1.jpg"),
         price: 4988
       },
       {
         id: 5,
         name: '华为 P25 Pro',
         src: require("../assets/product/iphone1.jpg"),
         price: 4988
       },
       {
         id: 6,
         name: '华为 P26 Pro',
         src: require("../assets/product/iphone1.jpg"),
         price: 4988
       }
     ]
   },
    {
      proName: "服务器",
      tinyImg: require("../assets/product/servers1.jpg"),
      items: [
        {
          id: 7,
          name: 'RH2288 V3',
          src: require("../assets/product/servers1.jpg"),
          price: 4988
        },
        {
          id: 8,
          name: 'RH2288 V4',
          src: require("../assets/product/servers1.jpg"),
          price: 4988
        },
        {
          id: 9,
          name: 'RH2288 V5',
          src: require("../assets/product/servers1.jpg"),
          price: 4988
        }
      ]
    }
  ]
});
Mock.mock(/items/, [
  {
    id: 1,
    name: '华为 P21 Pro',
    src: require("../assets/product/iphone1.jpg"),
    price: 4988
  },
  {
    id: 2,
    name: '华为 P22 Pro',
    src: require("../assets/product/iphone1.jpg"),
    price: 4988
  },
  {
    id: 3,
    name: '华为 P23 Pro',
    src: require("../assets/product/iphone1.jpg"),
    price: 4988
  },
  {
    id: 4,
    name: '华为 P24 Pro',
    src: require("../assets/product/iphone1.jpg"),
    price: 4988
  },
  {
    id: 5,
    name: '华为 P25 Pro',
    src: require("../assets/product/iphone1.jpg"),
    price: 4988
  },
  {
    id: 6,
    name: '华为 P26 Pro',
    src: require("../assets/product/iphone1.jpg"),
    price: 4988
  },
  {
    id: 7,
    name: 'RH2288 V3',
    src: require("../assets/product/servers1.jpg"),
    price: 4988
  },
  {
    id: 8,
    name: 'RH2288 V4',
    src: require("../assets/product/servers1.jpg"),
    price: 4988
  },
  {
    id: 9,
    name: 'RH2288 V5',
    src: require("../assets/product/servers1.jpg"),
    price: 4988
  },
])
Mock.mock(/login/, {
  "login": {
    "UserName": "Alison",
    "UserId": 123456
  }
})
