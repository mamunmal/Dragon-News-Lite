//chatgpt hellpcode
import React, { useState } from 'react';
import { FaEye, FaStar, FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { FaShareNodes } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsCart = ({ news }) => {
  const {
    id,
    title = '',
    rating = { number: 0 },
    total_view = 0,
    author = {},
    thumbnail_url = '',
    details = '',
    tags = [],
  } = news || {};

  const [bookmarked, setBookmarked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedDate = author?.published_date
    ? new Date(news.author.published_date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Unknown date';

  const toggleBookmark = () => setBookmarked(prev => !prev);

  return (
    <div className="card bg-base-100 shadow-md  border-gray-200">
      {/* Card Header */}
      <div className="flex bg-base-200 justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm">{author.name}</div>
            <div className="text-xs text-gray-500">{formattedDate}</div>
          </div>
        </div>
        {/* Share and Bookmark */}
        <div className="flex items-center gap-2">
          <div className="tooltip tooltip-left" data-tip="Share">
            <button className="btn  btn-sm text-xl" aria-label="Share"><FaShareNodes />
            </button>
          </div>
          <div className="tooltip tooltip-left" data-tip="Bookmark">
            <button
              className="btn btn-ghost btn-sm text-xl"
              onClick={toggleBookmark}
              aria-label="Bookmark"
            >
              {bookmarked ? <FaBookmark className="text-orange-500" /> : <FaRegBookmark />}
            </button>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="card-title bg-base-200 lg:text-lg hover:underline font-semibold">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="rounded-md max-h-[250px] w-full object-cover"
        />
      </figure>

      {/* Tags */}
      <div className="px-4 pt-2 text-xs text-gray-600">
        <strong>Tags:</strong> {tags.join(', ')}
      </div>

      {/* Description */}
      <div className="px-4 pt-2 pb-3 text-sm text-gray-700">
        {details.slice(0, 200)}...
        <span
          className="text-orange-500 font-semibold cursor-pointer ml-1 hover:underline"
          onClick={() => setIsModalOpen(true)}
        >
          Read More
        </span>
        <span className="ml-2">
          <Link to={`/news/${id}`} className="text-blue-500 hover:underline">
            Go to Details Page
          </Link>
        </span>
      </div>

      {/* Footer */}
      <div className="card-actions justify-between items-center border-t px-4 py-3 text-sm text-gray-700">
        {/* Ratings */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.min(5, rating.number) ? 'text-orange-400' : 'text-gray-300'}
            />
          ))}
          <span className="ml-1 font-medium">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaEye className="text-gray-500" />
          <span>{total_view}</span>
        </div>
      </div>

      {/* Modal for Full Article */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              ❌
            </button>
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            <p className="text-sm text-gray-700">{details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsCart;



//my orginal code
// const NewsCart = ({news}) => {
//     return(
//         <div>
//             {news.title}
//             <img src={news.image_url} alt="" />
//         </div>
//     )
// }
// export default NewsCart;