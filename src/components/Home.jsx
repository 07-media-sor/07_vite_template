import React from 'react';

import p from '@/package.json';

const Home = () => {
	return <h1>{<pre>{JSON.stringify(p, null, 1)}</pre>}</h1>;
};

export default Home;
