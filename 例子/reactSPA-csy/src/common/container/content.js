import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.less'
import index from 'pages/index'
import Music from 'pages/music'
import Tools from 'pages/tools'
import Editor from 'pages/editor'
import TodoList from 'pages/todoList'
import Album from 'pages/album'
import Search from 'pages/search'
import Todo from 'pages/todo'
import follow from 'pages/follow'


const { Content } = Layout

export default class Contents extends React.Component {
    render() {
        return (
            <Content className="content">
                <Route path="/index" component={index} />
                <Route path="/music" component={Music} />
                <Route path="/tools" component={Tools} />
                <Route path="/editor" component={Editor} />
                <Route path="/todoList" component={TodoList} />
                <Route path="/album" component={Album} />
                <Route path="/searchEngine" component={Search} />
                <Route path="/todo" component={Todo} />
                <Route path="/follow" component={follow} />
            </Content>
        );
    }
}