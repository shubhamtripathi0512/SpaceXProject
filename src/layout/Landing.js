import React, { useEffect, useState } from 'react';
import Cards from '../Components/Cards';
import axios from 'axios';

const Landing = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${id}`
      );

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <Cards isLoading={isLoading} items={items} />
    </div>
  );
};

export default Landing;
