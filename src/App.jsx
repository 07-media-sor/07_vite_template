import { useState } from 'react';
import Home from '@/components/Home';

function App() {
	return (
		<>
			<div
				className='App'
				style={{
					display: 'flex',
					alignItems: 'center',
					height: '100vh',
					width: '100vw',
					justifyContent: 'center',
				}}>
				<Home />
			</div>
		</>
	);
}

export default App;
