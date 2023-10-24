import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
	const dispatch = useDispatch();
	const { messages, isLoading } = useSelector((store) => store.messageList);

	useEffect(() => {
		dispatch(fetchGreetings());
	}, [dispatch]);
	if (isLoading) {
		return (
			<div className="loading">
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<article className="article">
			<h1>{messages}</h1>
		</article>
	)
}

export default Greeting;