import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import Story from './Story';


function Stories() {

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {

    const suggestions = [...Array(20)].map((_, i) => ({
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8
    border-gray-20 border rounded-sm overflow-x-scroll
    scrollbar-thin scrollbar-thumb-black'>
    {suggestions.map(profile => (
      <Story key={profile.id} 
      img={profile.avatar} 
      username={profile.name}
      />
    ))}
    </div>
  )
}

export default Stories