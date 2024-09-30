import React from 'react';
import Hero from '../hero/Hero';
import Popular from '../popular/Popular';
import Offers from '../offers/Offers';
import NewCollections from '../new-collections/NewCollections';
import NewsLetter from '../news-letter/NewsLetter';

export default function Shop() {
  return (
    <>
    <Hero />
    <Popular />
    <Offers />
    <NewCollections />
    <NewsLetter />
    </>
  )
}
