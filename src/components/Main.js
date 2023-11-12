import React from 'react';
import Filter from './Filter';
import BookContainer from './BookContainer';
import AddBook from './AddBook';

const Main = () => {
    return (
        <main class="py-12 2xl:px-6">
            <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <div class="order-2 xl:-order-1">
                    <Filter />
                    <BookContainer />
                </div>
                <div>
                    <AddBook />
                </div>
            </div>
        </main>
    );
};

export default Main;
