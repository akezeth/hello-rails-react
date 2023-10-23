import { configureStore } from '@reduxjs/toolkit';
import messagesreducer from './greetings/greetingsSlice';

const store = configureStore({
     reducer: {
          messageList: messagesreducer,

     },
});

export default store;