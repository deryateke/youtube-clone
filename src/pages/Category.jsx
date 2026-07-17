import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import CategoryLoader from "../components/loader/CategoryLoader";
import Error from "../components/error";
import ShortsListing from "../components/shorts-listing";
import Card from "../components/card";

const Category = () => {
  const { category_name } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  // sayfa ilk yüklendiğinde ve kategori her değiştiğinde api isteği at
  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    const url =
      category_name === "trending"
        ? `/trending`
        : `/search?query=${category_name}`;

    const params = { geo: "GB", lang: "en" };

    api
      .get(url, { params })
      .then((res) => {
        if (ignore) return; // bu istek artık geçersiz, state'i güncelleme
        if (Array.isArray(res.data.data)) {
          setData(res.data.data);
          setError(null);
        } else {
          setError("Something went wrong, please try again in a few seconds.");
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setIsLoading(false);
      });

    return () => {
      ignore = true; // component unmount olunca ya da category_name değişince eski isteği iptal say
    };
  }, [category_name]);
  // api'dan gelen veriyi kategorize et
  const videos = (data || []).filter(
    (item) => item.type === "video" || item.type === "shorts",
  );
  const shortsListing = (data || []).filter(
    (item) => item.type === "shorts_listing",
  );

  if (isLoading) return <CategoryLoader />;

  if (error) return <Error message={error} />;

  return (
    <div className="page">
      <div className="space-y-8">
        {shortsListing?.[0] && <ShortsListing data={shortsListing[0].data} />}

        <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {videos.map((video, key) => (
            <Card video={video} key={key} />
          ))}
        </div>

        {shortsListing?.[1] && <ShortsListing data={shortsListing[1].data} />}
      </div>
    </div>
  );
};

export default Category;
