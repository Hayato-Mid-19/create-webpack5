import _ from 'lodash';
import './style.css';
import './style.scss';
import logo from './logo.png'

// console.log(style.toString());

// 基本のインポート
import {Square, Name} from './utilities';
console.log(Square(10));
console.log(Name);

// exportされたファイルをオブジェクトとして利用する
// import * as utilities from './utilities';
// console.log(utilities.Square(10));
// console.log(utilities.Name);

// 別名でインポート
// import {Name as Name_2, Square as Square_2} from './utilities';
// console.log(utilities.Square(10));
// console.log(Name_2);
// console.log(Square_2(2));

// export defualt
import SquareDefualt from './default';
console.log(SquareDefualt.square(3))
console.log(SquareDefualt.name)

const conponent =  () => {
  console.log('create element')
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '5'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

console.log(document.body)
document.body.appendChild(conponent());
document.body.classList.add('bg');

const image = new Image();
image.src = logo;
document.body.appendChild(image);

// class構文
class Data {
  constructor(num, name, url) {
    this.num = num;
    this.name = name;
    this.url = url;
  }
}

const data1 = new Data(1, 'mission1', 'https://mission1.com');
const data2 = new Data(2, 'mission2', 'https://mission2.com');

console.log(data1.num, data1.name, data1.url);
console.log(data2.num, data2.name, data2.url);
