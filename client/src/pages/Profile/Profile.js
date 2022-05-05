import React, { useState } from 'react'
import { Card, Button, Modal, Image, Drawer, Form, Upload, Input } from 'antd'
import './Profile.css'
import { InboxOutlined } from '@ant-design/icons';

const Profile = () => {

  const [isFollowerModalVisible, setIsFollowerModalVisible] = useState(false);
  const [isFollowingModalVisible, setIsFollowingModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [detailsDrawerVisible, setDetailsDrawerVisible] = useState(false);

  const followers = [
    {
      id: 1,
      u_name: 'Cristiano Ronaldo'
    },
    {
      id: 2,
      u_name: 'Dua Lipa'
    },
    {
      id: 3,
      u_name: 'Tom Cruise'
    }
  ];

  const followings = [
      {
        id: 1,
        u_name: 'Myself'
      },
  ];


  const showFollowerModal = () => {
    setIsFollowerModalVisible(true);
  };

  const showFollowingModal = () => {
    setIsFollowingModalVisible(true);
  };

  const handleOk = () => {
    setIsFollowerModalVisible(false);
    setIsFollowingModalVisible(false);
  };

  const handleCancel = () => {
    setIsFollowerModalVisible(false);
    setIsFollowingModalVisible(false);
  };

  //DETAILS DRAWER
  const showDetailsDrawer = () => {
    setDetailsDrawerVisible(true);
  };
  const onDetailsDrawerClose = () => {
    setDetailsDrawerVisible(false);
  };

  //uploader in form
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      <div className='profile-container'>
        <div className='profile-card-container'>
          <Card className='profile-card' title="Username">

          <div className='profile-pic'>
            <Image
              width={180}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>
          <div className='profile-details'>
            <span className='pro-detail-item'><strong>Followers: </strong> 9.9M</span>
            <span className='pro-detail-item'><strong>Following: </strong> 9</span>
            <span className='pro-detail-item'><strong>DOB:</strong> 29-02-1956</span>

          </div>
            <div className='pc-button-container'>
              <Button className='profile-card-button' onClick={showFollowerModal} onOk={handleOk} onCancel={handleCancel}>Followers</Button>
              <Button className='profile-card-button' onClick={showFollowingModal} onOk={handleOk} onCancel={handleCancel}>Followings</Button>
            </div>
          </Card>
        </div>

        <Modal title="Followers" visible={isFollowerModalVisible} onOk={handleOk} onCancel={handleCancel}>
          {
            followers.map((follower) => {
              return <div>{follower.u_name}</div>
            })
          }
        </Modal>
        <Modal title="Followings" visible={isFollowingModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {
            followings.map((following) => {
              return <div>{following.u_name}</div>
            })
          }
        </Modal>

        <div className='profile-post-container'>
          {
            isLoggedIn && 
            <Button onClick={showDetailsDrawer}>Create Post</Button>
          }
        </div>
          
        <Drawer title="Create Your Post" placement="left" onClose={onDetailsDrawerClose}  width={540} visible={detailsDrawerVisible}>
          <Form>
            <Form.Item>
              <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Click or drag file here to upload</p>
                  <p className="ant-upload-hint">Supports single or bulk upload.</p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
            <Form.Item
              name="intro"
              label="Caption"
              rules={[{ required: true, message: 'Whats on your mind!?' }]}
            >
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                Post
              </Button>
            </Form.Item>
          </Form>
        </Drawer>


      </div>
    </>
  )
}

export default Profile