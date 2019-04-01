import React from 'react'
import { PostroikaServiceConsumer } from '../../postroika-service-context/postroika-service-context'

// компонент высшен=го порядка для контекста
const withTileService = () => (Wrapped) => {
    return (props) => {
        return (  
        <PostroikaServiceConsumer>
            {
                ( stroikaServices ) => {
                    return (
                        <Wrapped {...props} stroikaServices={stroikaServices}/>
                    )
                }
            }
        </PostroikaServiceConsumer>  
        );
    };
};
export default withTileService