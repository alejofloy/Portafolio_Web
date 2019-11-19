import React from 'react';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Interests from '../components/Interests';
import InterestsItem from '../components/InterstsItem';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div>
      <Layout>
        <Menu />
        <Categories />
        <Interests>
          <InterestsItem />
          <InterestsItem />
          <InterestsItem />
        </Interests>
      </Layout>
    </div>
  );
};

export default Home;
