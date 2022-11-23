import React from 'react'
import { useSelector } from 'react-redux'
import { List } from 'antd';
const {Item} = List


const NamesList = () => {
    const names = useSelector((state) => state.names.value)

    return ( 

        <List
        itemLayout='vertical'
        dataSource={names}
        renderItem={(item) => (
          <Item>
            {item}
          </Item>
        )}
      />
     );
}
 
export default NamesList;