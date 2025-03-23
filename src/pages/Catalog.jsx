import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productSlice";

import { SearchInput } from "../features/search/index";
import { Filter } from "../features/filter/index";
import { ProductCard } from "../entities/ProductCard/index";
import { Header } from "../widgets/header/index";

import { Skeleton } from "antd";

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredItems = useMemo(() => {
    return items
      .filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));
  }, [items, searchTerm, sortOrder]);

  const checkIfProductInCart = (cart, productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="mt-20 mb-6 flex justify-between items-center">
        <SearchInput onSearch={setSearchTerm} />
        <Filter onSortChange={setSortOrder} />
      </div>

      {status === "loading" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} active className="p-4 rounded-lg shadow-lg h-[330px] w-full" />
          ))}
        </div>
      ) : status === "failed" ? (
        <div className="text-center text-red-500 text-xl mt-8">
          Ошибка загрузки данных!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {filteredItems.map((product) => (
            <ProductCard key={product.id} product={product} isInCart={checkIfProductInCart(cart, product.id)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;