import styles from './products.css';
import { Menu } from 'antd';
import { Component } from 'react';

class products extends Component {
  state = {
    current: 'item1',
  }
  items = [
    {
      brandName: 'TF',
      tradeName: '香水',
      originalPrice: 123,
      discountPrice: 100
    }
  ]

  handleClick = (e) => {
    console.log('click ', e.key);
    this.setState({
      current: e.key,
    });
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
        <div className={styles.items}>
          <div className={styles.pic}>
          </div>
          <div className={styles.intro}>
            <div>{this.items[0].brandName}{this.items[0].tradeName}</div>
            <div>商品颜色</div>
            <div>补货sku</div>
            <div>
              <span>美元原价-美元现价{this.items[0].originalPrice}-{this.items[0].discountPrice}</span>
              <button>补货</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default products

// import styles from './products.css';
// // import { Menu } from 'antd';
// //
// // const SubMenu = Menu.SubMenu;
// // const MenuItemGroup = Menu.ItemGroup;
// //
//
// export default function() {
//   function handleClick(e) {
//     // e.preventDefault();
//     console.log(e.key);
//   }
//   return (
//     <div>
//       <Menu
//         onClick={handleClick}
//         mode="horizontal">
//         <Menu.Item key="item1">
//           推荐
//         </Menu.Item>
//         <Menu.Item key="item2">
//           美妆彩妆
//         </Menu.Item>
//         <Menu.Item key="item3">
//           护肤养颜
//         </Menu.Item>
//         <Menu.Item key="item4">
//           鞋靴
//         </Menu.Item>
//         <Menu.Item key="item5">
//           包
//         </Menu.Item>
//       </Menu>
//     </div>
//   );
// }
