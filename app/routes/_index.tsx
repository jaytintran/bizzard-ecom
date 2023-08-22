import { useLoaderData, type V2_MetaFunction } from "@remix-run/react";
// import Card from "~/components/Card";
import ProductCard from "~/components/ProductCard";
import Welcome from "~/components/Welcome";
import { getPosts, getProducts } from "~/utils/sanity";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {
  const posts = await getPosts();
  const products = await getProducts();
  return {posts, products};
};

export default function Index() {
  // const posts = useLoaderData<typeof loader>().posts;
  const products = useLoaderData<typeof loader>().products;

  return (
    <>
    <section>
      {/* {posts.length ? (
        posts.map((post) => (
          <Card
            key={post.title}
            post={post}
          />
        ))
      ) : (
        <Welcome />
      )} */}

      {products.length ? (
        products.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
          />
        ))
      ) : (
        <Welcome />
      )}
    </section>
    </>
  );
}
