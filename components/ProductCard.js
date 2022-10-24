export default function ProductCard({ product }) {

  const description = product.description.slice(0, 300) + '...';

  const createPrice = () => {
    return Math.floor(Math.random() * 1000).toString();
  };

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${product.media.thumbnail.url})` }}
        title
      />
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {product.title}
          </div>
          <div className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">
              Precio: ${createPrice()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


// <div key={published} className="text-xl font-semibold text-gray-800 hover:underline dark:text-white">
//   <h2>{title}</h2>
//   <Image
//     src={media.thumbnail.url}
//     alt={title}
//     width={150}
//     height={150}
//     className="inline w-full h-56 rounded-lg margin-auto"
//   />
//   <p className="text-sm text-gray-500 dark:text-gray-300">categoría: {category}</p>
// </div>