import './App.css';
import { Layout, Menu} from 'antd';
import ListComponent from './components/ListComponent';
import FavsComponent from './components/FavsComponent';
import DetailComponent from './components/DetailComponent';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="all">
              <Link to="/">All</Link>
            </Menu.Item>
            <Menu.Item key="favs">
              <Link to="/favs">Favs</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div className="container">
            <Switch>
              <Route path="/" element={<ListComponent />} />
              <Route path="/favs" element={<FavsComponent />} />
              <Route path='/detail/:id' element={<DetailComponent />} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  );
}

export default App;
