import { Link } from "react-router-dom";
import { Book, books, genres } from "./utils";
import { useEffect, useState } from "react";

const ProductsPage = ({
  setSelectedBook,
}: {
  setSelectedBook: (selectedBook: Book) => void;
}) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const [selectedGenre, setSelectedGenre] = useState<string>(
    "Educational Resources"
  );

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;

    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">
      <section className="flex relative overflow-hidden bg-green-400/30 flex-col-reverse md:flex-row h-[90vh] md:h-[55vh] px-10 md:px-[130px] items-center justify-center md:justify-between gap-5 border-b border-orange-900/10">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center text-orange-950">
          Ready to unlock your full writing potential
          </h1>

          <p className="text-center md:text-left mt-[-30px] w-[450px] md:w-[450px] text-orange-950">
          Explore our range of resources, services, and merchandise, and take the first step towards becoming the writer you've always dreamed of being. Start your writing adventure now!
          </p>

          <Link
            to="#products"
            id="products"
            onClick={handleScroll}
            className="text-base font-medium text-white bg-green-400 rounded-md px-7 md:px-12 py-4 md:py-5 hover:bg-green-600 flex items-center justify-center gap-3"
          >
            Explore Services
          </Link>
        </div>

        <img
          src="https://images.pexels.com/photos/6393024/pexels-photo-6393024.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-full h-[300px] opacity-0 md:h-[300px] md:w-[500px] object-cover"
        />
        <img
          src="https://images.pexels.com/photos/6393024/pexels-photo-6393024.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-full h-[750px] -top-96 md:top-auto absolute md:right-20 md:h-[500px] md:w-[500px] object-contain"
        />
      </section>

      <section className="flex bg-white w-full flex-col px-10 md:px-[130px] items-center justify-center md:justify-between gap-5 pb-14 md:pb-20">
        <div className="flex gap-5 w-full overflow-x-auto py-5 items-start md:items-center md:justify-center mb-5 border-b">
          {genres.map((genre) => (
            <button
              onClick={() => setSelectedGenre(genre.name)}
              className={`text-sm font-medium text-white transition-colors  ${
                selectedGenre === genre.name
                  ? "!bg-green-400 hover:!bg-green-600 !text-white border border-green-500"
                  : "bg-white border border-green-500 !text-green-500 hover:bg-green-400 hover:!text-white"
              } rounded-md px-7 md:px-8 py-2 md:py-3 hover:bg-green-600 flex items-center justify-center gap-3`}
            >
              {genre.name}
            </button>
          ))}
        </div>

        <div className="grid gird-cols-1 md:grid-cols-4 gap-6">
          {books
            .filter((book) => book.genre === selectedGenre)
            .map((book) => (
              <div className="flex flex-col items-center justify-center pt-12 pb-8 px-8 gap-7 bg-green-50/50 text-green-900 round ed-xl">
                <img
                  src={book.img}
                  alt=""
                  className="w-[200px] h-[160px] object-cover rou nded-xl shadow-lg"
                />
                <h4 className="font-medium text-[18px] leading-tight text-center w-[200px] line-clamp-2">
                  {book.title}
                </h4>
                <p className="mt-[-15px] text-[12px] text-center w-[200px] line-clamp-3">
                  {book.summary}
                </p>
                <h4 className="mt-[-15px] font-bold text-[18px] leading-tight text-center w-[200px] line-clamp-2">
                  {book.price}
                </h4>
                <Link
                  to="/billing"
                  onClick={() => setSelectedBook(book)}
                  className="text-base font-medium text-white bg-green-400 rounded-md px-7 md:px-8 py-2 md:py-3 hover:bg-green-600 flex items-center justify-center gap-3"
                >
                  Order Now
                </Link>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
