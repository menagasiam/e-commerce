import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  constructor() { }

  getAllData() {
    return this.productData;
  }

  getBestSellerData() {
    return this.productData.filter((element) => {
      if (element.grouptag == 'bestseller') {
        return element;
      }
    })
  }

  getOutletData() {
    return this.productData.filter((element) => {
      if (element.grouptag == 'outlet') {
        return element;
      }
    })
  }

  getNewCollectionData() {
    return this.productData.filter((element) => {
      if (element.grouptag == 'new-collection') {
        return element;
      }
    })
  }

  getShopByCategory(type: string) {
    return this.productData.filter((element) => {
      if (element.type == type) {
        return element;
      }
    }).slice(0, 3)
  }

  getDataByProductType(productType: any[]) {
    return this.productData.filter((element) => {
      if (productType.includes(element.type))
        return element;
    })

  }

  productData: any[] = [
    {
      id: 1,
      imageUrl: '../../assets/images/main/chain1.png',
      title: 'Neclace 1',
      actualPrice: 2350,
      discountPrice: 1432,
      description: '',
      type: 'NECKLACE',
      tag: ['bestseller', 'sale'],
      grouptag: 'bestseller',
      rating: {
        rate: 4.1,
        count: 140
      }
    },
    {
      id: 2,
      imageUrl: '../../assets/images/main/chain2.png',
      title: 'Neclace 2',
      actualPrice: 2445,
      discountPrice: 0,
      description: '',
      type: 'NECKLACE',
      tag: ['bestseller'],
      grouptag: 'bestseller',
      rating: {
        rate: 1.1,
        count: 134
      }
    },
    {
      id: 3,
      imageUrl: '../../assets/images/main/chain3.png',
      title: 'EARRINGS 3',
      actualPrice: 457,
      discountPrice: 0,
      description: '',
      type: 'EARRINGS',
      tag: ['bestseller', 'new'],
      grouptag: 'bestseller',
      rating: {
        rate: 3.1,
        count: 3
      }
    },
    {
      id: 4,
      imageUrl: '../../assets/images/main/chain4.png',
      title: 'RING 4',
      actualPrice: 489,
      discountPrice: 0,
      description: '',
      type: 'RING',
      tag: ['bestseller'],
      grouptag: 'bestseller',
      rating: {
        rate: 4.8,
        count: 2345
      }
    },
    {
      id: 5,
      imageUrl: '../../assets/images/main/chain5.png',
      title: 'NECKLACE 5',
      actualPrice: 45880,
      discountPrice: 455,
      description: '',
      type: 'NECKLACE',
      tag: ['sale'],
      grouptag: 'outlet',
      rating: {
        rate: 3.8,
        count: 2145
      }
    },
    {
      id: 6,
      imageUrl: '../../assets/images/main/chain6.png',
      title: 'RING 6',
      actualPrice: 5434,
      discountPrice: 3345,
      description: '',
      type: 'RING',
      tag: ['new', 'sale'],
      grouptag: 'outlet',
      rating: {
        rate: 4.9,
        count: 11234
      }
    },
    {
      id: 7,
      imageUrl: '../../assets/images/main/image7.png',
      title: 'NECKLACE 7',
      actualPrice: 3211,
      discountPrice: 1222,
      description: '',
      type: 'NECKLACE',
      tag: ['sale'],
      grouptag: 'outlet',
      rating: {
        rate: 3.3,
        count: 4
      }
    },
    {
      id: 8,
      imageUrl: '../../assets/images/main/image8.png',
      title: 'NECKLACE 8',
      actualPrice: 888,
      discountPrice: 686,
      description: '',
      type: 'NECKLACE',
      tag: ['new', 'sale'],
      grouptag: 'outlet',
      rating: {
        rate: 4.7,
        count: 789
      }
    },
    {
      id: 9,
      imageUrl: '../../assets/images/main/image9.png',
      title: 'EARRINGS 9',
      actualPrice: 4120,
      discountPrice: 2100,
      description: '',
      type: 'EARRINGS',
      tag: ['sale'],
      grouptag: 'outlet',
      rating: {
        rate: 2.1,
        count: 65
      }
    },
    {
      id: 10,
      imageUrl: '../../assets/images/main/image10.png',
      title: 'RING 10',
      actualPrice: 886,
      discountPrice: 521,
      description: '',
      type: 'RING',
      tag: ['sale'],
      grouptag: 'outlet',
      rating: {
        rate: 4,
        count: 6789
      }
    },
    {
      id: 11,
      imageUrl: '../../assets/images/main/image11.png',
      title: 'EARRINGS 11',
      actualPrice: 860,
      discountPrice: 321,
      description: '',
      type: 'EARRINGS',
      tag: ['bestseller', 'new', 'sale'],
      grouptag: 'outlet',
      rating: {
        rate: 3.7,
        count: 478
      }
    },
    {
      id: 12,
      imageUrl: '../../assets/images/main/image12.png',
      title: 'PEARL RING 12',
      actualPrice: 676,
      discountPrice: 541,
      description: '',
      type: 'PEARL RING',
      tag: ['sale'],
      grouptag: 'outlet',
      rating: {
        rate: 4.6,
        count: 9876
      }
    },
    {
      id: 13,
      imageUrl: '../../assets/images/main/yearring.png',
      title: 'Gold earring with pearl',
      actualPrice: 2130,
      discountPrice: 0,
      description: 'Breeze - a collection of variability. That we adapt to circumstances just as water adapts to wind currents.',
      type: 'EARRINGS',
      tag: [],
      grouptag: 'new-collection',
      rating: {
        rate: 4.6,
        count: 9876
      }
    },
    {
      id: 14,
      imageUrl: '../../assets/images/main/image13.png',
      title: 'Gold earring with pearl 14',
      actualPrice: 1037,
      discountPrice: 0,
      description: 'Breeze - a collection of variability. That we adapt to circumstances just as water adapts to wind currents.',
      type: 'EARRINGS',
      tag: [],
      grouptag: 'new-collection',
      rating: {
        rate: 2.6,
        count: 34
      }
    },
    {
      id: 15,
      imageUrl: '../../assets/images/main/image14.png',
      title: 'gold earring with pearl 15',
      actualPrice: 3554,
      discountPrice: 0,
      description: 'Breeze - a collection of variability. That we adapt to circumstances just as water adapts to wind currents.',
      type: 'EARRINGS',
      tag: [],
      grouptag: 'new-collection',
      rating: {
        rate: 4.3,
        count: 675
      }
    },
    {
      id: 16,
      imageUrl: '../../assets/images/main/image15.png',
      title: 'gold earring with pearl 16',
      actualPrice: 1139,
      discountPrice: 0,
      description: 'Breeze - a collection of variability. That we adapt to circumstances just as water adapts to wind currents.',
      type: 'EARRINGS',
      tag: [],
      grouptag: 'new-collection',
      rating: {
        rate: 1.6,
        count: 45
      }
    },
    {
      id: 17,
      imageUrl: '../../assets/images/main/chain3.png',
      title: 'NECKLACE 17',
      actualPrice: 45880,
      discountPrice: 450,
      description: '',
      type: 'NECKLACE',
      tag: ['sale'],
      rating: {
        rate: 4.5,
        count: 6999
      }
    },
    {
      id: 18,
      imageUrl: '../../assets/images/main/necklace.png',
      title: 'NECKLACE 18',
      actualPrice: 220,
      discountPrice: 0,
      description: '',
      type: 'NECKLACE',
      tag: ['sale'],
      rating: {
        rate: 4.1,
        count: 72
      }
    },
    {
      id: 19,
      imageUrl: '../../assets/images/main/image17.png',
      title: 'NECKLACE 19',
      actualPrice: 920,
      discountPrice: 0,
      description: '',
      type: 'NECKLACE',
      tag: ['sale'],
      rating: {
        rate: 4.9,
        count: 78000
      }
    },


    {
      id: 20,
      imageUrl: '../../assets/images/catalog/img1.png',
      title: 'Gold Ring with Diamond 20',
      actualPrice: 45880,
      discountPrice: 455,
      description: '',
      type: 'NECKLACE',
      tag: ['sale'],
      rating: {
        rate: 5,
        count: 120000
      }
    },
    {
      id: 21,
      imageUrl: '../../assets/images/catalog/img2.png',
      title: 'NECKLACE 21',
      actualPrice: 888,
      discountPrice: 686,
      description: '',
      type: 'NECKLACE',
      tag: ['new', 'sale'],
      rating: {
        rate: 4,
        count: 86000
      }
    },
    {
      id: 22,
      imageUrl: '../../assets/images/catalog/img3.png',
      title: 'RING 22',
      actualPrice: 5434,
      discountPrice: 3345,
      description: '',
      type: 'RING',
      tag: ['new', 'sale'],
      rating: {
        rate: 1,
        count: 1234
      }
    },
    {
      id: 23,
      imageUrl: '../../assets/images/catalog/img4.png',
      title: 'RING 23',
      actualPrice: 886,
      discountPrice: 521,
      description: '',
      type: 'RING',
      tag: ['sale'],
      rating: {
        rate: 3,
        count: 4500
      }
    },
    {
      id: 24,
      imageUrl: '../../assets/images/catalog/img5.png',
      title: 'EARRINGS 24',
      actualPrice: 860,
      discountPrice: 321,
      description: '',
      type: 'EARRINGS',
      tag: ['bestseller', 'new', 'sale'],
      rating: {
        rate: 3.6,
        count: 6712
      }
    },
    {
      id: 25,
      imageUrl: '../../assets/images/catalog/img6.png',
      title: 'PEARL RING 25',
      actualPrice: 676,
      discountPrice: 541,
      description: '',
      type: 'PEARL RING',
      tag: ['sale'],
      rating: {
        rate: 4.9,
        count: 567
      }
    },
    {
      id: 26,
      imageUrl: '../../assets/images/catalog/img7.png',
      title: 'NECLACE 26',
      actualPrice: 2350,
      discountPrice: 1432,
      description: '',
      type: 'NECLACE',
      tag: ['bestseller', 'sale'],
      rating: {
        rate: 2.6,
        count: 3456
      }
    },
    {
      id: 27,
      imageUrl: '../../assets/images/catalog/img8.png',
      title: 'RING 27',
      actualPrice: 489,
      discountPrice: 0,
      description: '',
      type: 'RING',
      tag: ['new'],
      rating: {
        rate: 3.1,
        count: 4566
      }
    },
    {
      id: 28,
      imageUrl: '../../assets/images/catalog/img9.png',
      title: 'RING 28',
      actualPrice: 886,
      discountPrice: 521,
      description: '',
      type: 'RING',
      tag: ['sale'],
      rating: {
        rate: 0.9,
        count: 1
      }
    },
    {
      id: 29,
      imageUrl: '../../assets/images/catalog/img10.png',
      title: 'NECLACE 29',
      actualPrice: 45880,
      discountPrice: 455,
      description: '',
      type: 'NECLACE',
      tag: ['sale'],
      rating: {
        rate: 1.9,
        count: 43
      }
    }
    ,
    {
      id: 30,
      imageUrl: '../../assets/images/catalog/img11.png',
      title: 'RING 30',
      actualPrice: 5434,
      discountPrice: 3345,
      description: '',
      type: 'RING',
      tag: ['new', 'sale'],
      rating: {
        rate: 3.9,
        count: 78000
      }
    },
    {
      id: 31,
      imageUrl: '../../assets/images/catalog/img12.png',
      title: 'NECLACE 31',
      actualPrice: 888,
      discountPrice: 686,
      description: '',
      type: 'NECLACE',
      tag: ['new', 'sale'],
      rating: {
        rate: 4.2,
        count: 98000
      }
    }
  ];



}
