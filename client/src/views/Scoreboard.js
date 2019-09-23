import React from 'react'
import {Card, Table, Mentions} from 'antd'

export default function Scoreboard() {

    const { Option } = Mentions;

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          score: 32,
        },
        {
          key: '2',
          name: 'John',
          score: 42,
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Score',
          dataIndex: 'score',
          key: 'score',
        },
      ];

      const onGameChange = e => {};
      const onGameSelect = e => {};

    return (
        <React.Fragment>
            <Card className="centered-div" style={{width: '40vw'}}>
            <Mentions
            style={{ width: '100%', marginBottom: 10 }}
            onChange={onGameChange}
            onSelect={onGameSelect}
            defaultValue="Pong"
            prefix=""
          >
            <Option value="pong">Pong</Option>
            <Option value="HeadSoccer">HeadSoccer</Option>
            <Option value="Hangman">Hangman</Option>
          </Mentions>
            <Table dataSource={dataSource} columns={columns} />
            </Card>
        </React.Fragment>
    )
}
