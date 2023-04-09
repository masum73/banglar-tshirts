import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h2>This is Home: {tshirts.length}</h2>
        </div>
    );
};

export default Home;