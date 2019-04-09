import styles from './index.css';
import { Layout } from 'antd';
const {
  Header, Content,
} = Layout;

function BasicLayout(props) {
  return (
    <div>
      <Layout>
        <Header className={styles.banner}></Header>
        <Content>{props.children}</Content>
        {/*<Footer>Footer </Footer>*/}
      </Layout>
    </div>
  );
}

export default BasicLayout;

// import styles from './index.css';
//
// function BasicLayout(props) {
//   return (
//     <div className={styles.normal}>
//       {/*<h1 className={styles.title}>Yay! Welcome to umi!</h1>*/}
//       {/*{props.children}*/}
//     </div>
//   );
// }
//
// export default BasicLayout;
