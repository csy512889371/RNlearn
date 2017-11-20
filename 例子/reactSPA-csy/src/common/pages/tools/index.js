import React from 'react'
import {Tabs} from 'antd'
import Salary from './components/salary'
import House from './components/house'
import Bmi from './components/bmi'
import Age from './components/age'

import './index.less'
const TabPane = Tabs.TabPane

export default class Tools extends React.Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="工资" key="1"><Salary/></TabPane>
                    <TabPane tab="房租" key="2"><House/></TabPane>
                    <TabPane tab="身体指数" key="3"><Bmi/></TabPane>
                    <TabPane tab="年龄" key="4"><Age/></TabPane>
                    <TabPane tab="施工中" key="5" disabled></TabPane>
                </Tabs>
            </div>
        )
    }
}