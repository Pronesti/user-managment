import React from 'react'
import { Typography, Progress, Card, List, Avatar, Divider } from 'antd'

export default function Profile({user}) {

    const calculateLevel = experience => Math.floor(experience/50);
    const percentToNextLevel = experience => ((experience/50) - calculateLevel(experience))*100;

    const data = [
        {
          title: 'User Name',
          icon: "user",
          info: user.name
        },
        {
          title: 'Email',
          icon: 'mail',
          info: user.email
        },
        {
          title: 'Birthday',
          icon: 'calendar',
          info: user.age
        },
        {
          title: 'Phone',
          icon: 'phone',
          info: user.phone
        },
      ];

    return (
        <React.Fragment>
        <Card className="centered-div" style={{width: '30vw'}}>
        <div style={{textAlign: 'center'}}>
        <Typography.Title level={2} style={{paddingBottom: 35}}>{user.name}</Typography.Title>
        <Progress percent={percentToNextLevel(user.experience)}  type="circle" format={() => (calculateLevel(user.experience))}></Progress>
        </div>
        <Divider />
        <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar icon={item.icon} />}
          title={item.title}
          description={item.info}
        />
      </List.Item>
    )}
  />
        </Card>
        </React.Fragment>
    )
}
