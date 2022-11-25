import {
    UserAddOutlined,
    FileAddOutlined,
    FileFilled,
    LogoutOutlined,
    UserOutlined

} from '@ant-design/icons';
import { Avatar, Row, Typography } from 'antd';
import { Layout, Menu } from 'antd';
import Search from 'antd/lib/input/Search';
import { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { MenuInfo } from 'rc-menu/lib/interface';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './layout.css';

const menuItems: any = [
    {
        key: 'newCustomer',
        icon: <UserAddOutlined />,
        label: 'New Customer',
        pathname: '/newCustomer'
    },
    {
        key: 'allOrders',
        icon: <FileAddOutlined />,
        label: 'All Orders',
        pathname: '/allOrders'
    },
    {
        key: 'newOrder',
        icon: <FileAddOutlined />,
        label: 'New Order',
        pathname: '/newOrder',
    },
    {
        key: 'editCustomer',
        icon: <FileFilled />,
        label: 'Edit Customer',
        pathname: '/editCustomer',
    },
    {
        key: 'orderStatus',
        icon: <FileFilled />,
        label: 'Order Status',
        pathname: '/orderStatus',
    }
];

export default function LayoutContainer() {

    const navigate = useNavigate()

    const { pathname } = useLocation()

    const onMenuItemSelected = (item: MenuInfo) => {
        console.log(item)
        switch (item.key) {
            case 'newOrder':
                navigate('newOrder')
                break;
            case 'allOrders':
                navigate('allOrders')
                break;
            default:
                navigate('notFound')
                break;
        }
    }

    const menuItem = menuItems?.find((item: any) => item.pathname === pathname)

    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
                theme="dark"
                width='250px'
            >
                <div style={{ height: 80, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography.Title level={3} style={{ color: '#fff' }}>
                        Paper Tech
                    </Typography.Title>
                </div>
                <Menu theme="dark" mode="inline" selectedKeys={[menuItem?.key]} items={menuItems} onClick={onMenuItemSelected} />
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 250 }}>
                <Header className="site-layout-background" style={{
                    padding: 10, background: '#ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky',
                    top: 0, zIndex: 9
                }}>
                    <Search placeholder="input search text" size='large' style={{ width: 800, marginLeft: 20 }} />
                    <Row style={{ alignItems: 'center', padding: 10 }}>
                        <Avatar size={'large'} icon={<UserOutlined />} />
                        <Typography.Title level={5} style={{ padding: 15 }}>
                            Sekhar Singam
                        </Typography.Title>
                        <LogoutOutlined style={{ fontSize: 20, cursor: 'pointer' }} />
                    </Row>

                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, background: '#fff', minHeight: 'calc(100vh - 110px)' }}>
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}