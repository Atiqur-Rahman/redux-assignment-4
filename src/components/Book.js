import React from 'react';
import Featured from './Featured';
import Star from './Star';

const Book = () => {
    return (
        <div class="book-card">
            <img class="h-[240px] w-[170px] object-cover lws-bookThumbnail" src="https://m.media-amazon.com/images/P/B07DZ86WP7.01._SCLZZZZZZZ_SX500_.jpg" alt="book" />
            <div class="flex-1 h-full pr-2 pt-2 flex flex-col">
                <Featured />

                <div class="space-y-2 mt-4 h-full">
                    <h4 class="lws-bookName">Life Hurts: A Doctor's Personal Journey Through Anorexia</h4>
                    <p class="lws-author">Dr Elizabeth McNaught</p>
                    <div class="lws-stars">
                        <Star />
                        <svg viewBox="0 0 20 20" fill="currentColor" class="lws-star">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                        </svg>
                        <svg viewBox="0 0 20 20" fill="currentColor" class="lws-star">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="lws-price">BDT 14</p>
                </div>
            </div>
        </div>
    );
};

export default Book;
