import React, { useState } from 'react'
import { Layout, Badge, Card } from 'antd';
import './FeedLayout.css';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import FeedContent from './FeedContent';

const { Sider, Content } = Layout;

const FeedLayout = () => {

    const [collapsed, setCollapsed] = useState(false);

    const friends = [
        {
            id: 1,
            name: 'Ashish'
        },
        {
            id: 2,
            name: 'Avnish'
        },
        {
            id: 3,
            name: 'Adarsh'
        },
        {
            id: 4,
            name: 'Negi'
        },
        {
            id: 5,
            name: 'Vaibhav'
        },
        {
            id: 6,
            name: 'Kundan'
        }
    ];

    const toggleSiderView = ()=>{
        setCollapsed(!collapsed);
    }

  return (
    <>
        <Layout className='feed-layout'>
            <Sider trigger={null} collapsible collapsed={collapsed} width="300" className="feed-layout-sider">
            <div className='sider-header-container'>
                {
                    !collapsed && <h3 className='sider-header'>Friend List</h3>
                }      
                {
                    collapsed ? <button className="sider-toggle-button" onClick={toggleSiderView}><MenuUnfoldOutlined /></button> : 
                    <button className="sider-toggle-button" onClick={toggleSiderView}><MenuFoldOutlined /></button>
                }
            </div>
            
            { !collapsed &&
                <div className='sider-menu'>
                    <ul>
                        {
                            friends.map((friend)=>{
                                return (
                                    <Badge.Ribbon text="Active" color="green">
                                        <div key={friend.id} className="friend-list-item">{friend.name}  
                                        </div>
                                    </Badge.Ribbon>
                                )
                            })
                        }
                    </ul>
                </div>
            }
            </Sider>
            <Layout className="site-layout">
            
            <Content
                className="site-layout-background"
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                }}
            >
                <FeedContent />
            </Content>
            </Layout>
        </Layout>
    </>
  )
}

export default FeedLayout