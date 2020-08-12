import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const CardRequest = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.spaceXdata.com/v3/launches?limit=100`
      );

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  return (
    <div>
      <Button variant='contained' color='primary' href='/landing/2006'>
        2006
      </Button>
      <Button variant='contained' color='primary' href='/landing/2007'>
        2007
      </Button>
      <Button variant='contained' color='primary' href='/landing/2008'>
        2008
      </Button>
      <Button variant='contained' color='primary' href='/landing/2009'>
        2009
      </Button>
      <Button variant='contained' color='primary' href='/landing/2010'>
        2010
      </Button>
      <Button variant='contained' color='primary' href='/landing/2011'>
        2011
      </Button>
      <Button variant='contained' color='primary' href='/landing/2012'>
        2012
      </Button>
      <Button variant='contained' color='primary' href='/landing/2013'>
        2013
      </Button>
      <Button variant='contained' color='primary' href='/landing/2014'>
        2014
      </Button>
      <Button variant='contained' color='primary' href='/landing/2015'>
        2015
      </Button>
      <Button variant='contained' color='primary' href='/landing/2016'>
        2016
      </Button>
      <Button variant='contained' color='primary' href='/landing/2017'>
        2017
      </Button>
      <Button variant='contained' color='primary' href='/landing/2018'>
        2018
      </Button>
      <Button variant='contained' color='primary' href='/landing/2019'>
        2019
      </Button>
      <Button variant='contained' color='primary' href='/landing/2020'>
        2020
      </Button>
      <p>Successfull Launch</p>
      <Button variant='contained' color='primary' href='/launch/true'>
        true
      </Button>
      <Button variant='contained' color='primary' href='/launch/false'>
        false
      </Button>

      <p>Successfull Land</p>
      <Button variant='contained' color='primary' href='/land/true'>
        true
      </Button>
      <Button variant='contained' color='primary' href='/land/false'>
        false
      </Button>

      <Cards isLoading={isLoading} items={items} />
    </div>
  );
};

export default CardRequest;
