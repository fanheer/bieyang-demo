import styles from './index.css';
import { Menu,Button } from 'antd';
import { Component } from 'react';

class products extends Component {
  state = {
    //菜单导航项
    current: 'item1',
    //商品列表项
    items: [
      {
        updateTime: '2018-03-01 20:02:00',
        picUrl: require('../../src/assets/clarins.png'),
        brandName: 'CLARINS',
        tradeName: '娇韵诗双萃精华娇韵诗双萃精华娇韵诗双萃精华',
        originalPrice: 123,
        discountPrice: 100,
        sku: [
          {
            colorText: 'black',
            width: 'M',
            size: 'UK3',
            store: 5
          },
          {
            colorText: 'green',
            width: 'M',
            size: 'UK5',
            store: 0
          },
          {
            colorText: 'green',
            width: 'M',
            size: 'UK5',
            store: 20
          },
        ],
        color: ['#46bf6b','#427bf7','#a3a3a6']
      }
    ]
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({
        items: this.sortByUpdateTime(this.initProducts())
      }), 2000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  //商品数据模拟
  initProducts() {
    let value=  [
      {
        updateTime: '2019-01-01 20:02:00',
        picUrl: require('../../src/assets/clarins.png'),
        brandName: 'CLARINS',
        tradeName: '娇韵诗双萃精华娇韵诗双萃精华娇韵诗双萃精华',
        originalPrice: 123,
        discountPrice: 100,
        sku: [
          {
            colorText: 'black',
            width: 'M',
            size: 'UK3',
            store: 5
          },
          {
            colorText: 'green',
            width: 'M',
            size: 'UK5',
            store: 0
          },
          {
            colorText: 'green',
            width: 'M',
            size: 'UK5',
            store: 20
          },
        ],
        color: ['#9ab5bf','#7cb8f7','#958df1']
      },
      {
        updateTime: '2019-03-01 20:02:00',
        picUrl: require('../../src/assets/clarins.png'),
        brandName: 'CLARINS',
        tradeName: '娇韵诗双萃精华娇韵诗双萃精华娇韵诗双萃精华',
        originalPrice: 123,
        discountPrice: 100,
        sku: [
          {
            colorText: 'black',
            width: 'M',
            size: 'UK3',
            store: 0
          },
          {
            colorText: 'black',
            width: 'M',
            size: 'UK3',
            store: 5
          },
          {
            colorText: 'green',
            width: 'M',
            size: 'UK5',
            store: 0
          },
          {
            colorText: 'green',
            width: 'M',
            size: 'UK5',
            store: 20
          },
        ],
        color: ['#bfbfbf','#946870','#5f101c']
      },
      {
        updateTime: '2019-01-02 21:02:00',
        picUrl: require('../../src/assets/clarins.png'),
        brandName: 'CLARINS',
        tradeName: '娇韵诗双萃精华娇韵诗双萃精华娇韵诗双萃精华',
        originalPrice: 123,
        discountPrice: 100,
        sku: [
          {
            colorText: 'black',
            width: 'M',
            size: 'UK3',
            store: 0
          },
          {
            colorText: 'green',
            width: 'M',
            size: 'UK5',
            store: 0
          }
        ],
        color: ['#bfbfbf','#f7aebb','#F12345']
      },
      {
        updateTime: '2016-01-01 20:02:00',
        picUrl: require('../../src/assets/clarins.png'),
        brandName: 'CLARINS',
        tradeName: '娇韵诗双萃精华娇韵诗双萃精华娇韵诗双萃精华',
        originalPrice: 123,
        discountPrice: 100,
        sku: [
          {
            colorText: 'black',
            width: 'M',
            size: 'UK3',
            store: 0
          },
          {
            colorText: 'green',
            width: 'M',
            size: 'UK5',
            store: 20
          },
          {
            colorText: 'green',
            width: 'M',
            size: 'UK5',
            store: 20
          },
        ],
        color: ['#bfbfbf','#f7aebb','#F12345']
      },
      {
        updateTime: '2018-11-01 20:02:00',
        picUrl: require('../../src/assets/clarins.png'),
        brandName: 'CLARINS',
        tradeName: '娇韵诗双萃精华娇韵诗双萃精华娇韵诗双萃精华',
        originalPrice: 123,
        discountPrice: 100,
        sku: [
          {
            colorText: 'black',
            width: 'M',
            size: 'UK3',
            store: 5
          },

          {
            colorText: 'green',
            width: 'M',
            size: 'UK5',
            store: 20
          },
        ],
        color: ['#bfbfbf','#b1d5f7','#c9f1d1']
      }
    ];
    return value
  }
  //排序
  sortByUpdateTime(value){
    value.sort(function (a,b) {
      return Date.parse(a.updateTime)<Date.parse(b.updateTime)?1:-1
    });
    // for(var i=0;i<value.length;i++){
    //   console.log(value[i].updateTime)
    // }
    return value;
  }
  //菜单项btn
  handleClick = (e) => {
    console.log('click ', e.key);
    this.setState({
      current: e.key,
    });
  }
  //补货btn
  addProduct = (e) => {
    alert('yoooo');
    console.log('click ', e);
  }
  render() {
    return (
      <div className={styles.products}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">
          <Menu.Item key="item1">推荐</Menu.Item>
          <Menu.Item key="item2">美妆彩妆</Menu.Item>
          <Menu.Item key="item3">护肤养颜</Menu.Item>
          <Menu.Item key="item4">鞋靴</Menu.Item>
          <Menu.Item key="item5">包</Menu.Item>
        </Menu>
        {this.state.items.map((item,index)=>
          <div className={styles.items} key={index}>
            <div className={styles.pic}>
              <img src={item.picUrl} className={styles.imgspan} alt="图片来自别样APP"/>
            </div>
            <div className={styles.intro}>
              <div className={styles.titlearea}>
                {item.brandName}{item.tradeName}
                {item.updateTime}
              </div>
              <div className={styles.colorsarea}>
                {item.color.map((it,id)=>
                  <span style={{backgroundColor:it}} className={styles.colorspan} key={id}></span>
                )}
              </div>
              <span className={styles.skuarea}>补货：
                {item.sku.map((sit,sid)=>
                  <span className={sit.store<=0?styles.noneskuspan:styles.skuspan} key={sid}>{sit.colorText}-{sit.width}-{sit.size}</span>
                )}
              </span>
              <div className={styles.pricesarea}>
                <span className={styles.originalPricespan}>${item.originalPrice}</span>
                <span className={styles.discountPricespan}>${item.discountPrice}</span>
                <Button shape="circle" icon="shopping" className={styles.addbtn} onClick={this.addProduct}/>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default products
