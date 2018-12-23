import {Table, Divider, Tag} from 'antd';
import React from "react";

const {Column} = Table;

class MyTable extends Table {
    getDefaultPagination(prop) {
        let p = super.getDefaultPagination(prop)
        return {...p, pageSize: 15}
    }

}

class TablePage extends React.Component {


    render() {

        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                key: i,
                firstName: 'John',
                lastName: 'Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            });
        }
        return (
            <MyTable style={{backgroundColor: 'white', padding: 16,marginBottom:16}} dataSource={data} current={1}>

                <Column
                    title="First Name"
                    dataIndex="firstName"
                    key="firstName"
                />
                <Column
                    title="Last Name"
                    dataIndex="lastName"
                    key="lastName"
                />

                <Column
                    title="Age"
                    dataIndex="age"
                    key="age"
                />
                <Column
                    title="Address"
                    dataIndex="address"
                    key="address"
                />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <span>
                            {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                        </span>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                            <a href="javascript:">Invite {record.lastName}</a>
                            <Divider type="vertical"/>
                            <a href="javascript:">Delete</a>
                        </span>)}/>
            </MyTable>)
    }
}

export default TablePage;