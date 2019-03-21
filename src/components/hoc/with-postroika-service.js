import React from 'react'
import { PostroikaServiceConsumer } from '../../postroika-service-context/postroika-service-context'

const withPostroikaService = () => (Wrapped) => {
    return (props) => {
        return (  
        <PostroikaServiceConsumer>
            {
                ( bookstoreService ) => {
                    return (
                        <Wrapped {...props} 
                        bookstoreService={bookstoreService}/>
                    )
                }
            }
        </PostroikaServiceConsumer>  
        );
    };
};
export default withPostroikaService