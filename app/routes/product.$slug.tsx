import { type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { formatDate } from "~/utils";
import { urlFor } from "~/utils/image";
import { getProduct } from "~/utils/sanity";

export const loader = async ({ params }: LoaderArgs) => {
  const product = await getProduct(params.slug as string);
  return product;
};

export default function ProductRoute() {
  const product = useLoaderData<typeof loader>();

  return (
    <section className="post">
      {product.mainImage ? (
        <img
          className="post__cover"
          src={urlFor(product.mainImage).url()}
          alt="Cover"
        />
      ) : (
        <div className="post__cover--none" />
      )}
      <div className="post__container">
        <h1 className="post__title">{product.title}</h1>
        <p className="post__excerpt">{product.title}</p>
        <p className="post__date">{formatDate(product._createdAt)}</p>
        <div className="post__content">
          {product.description}
        </div>
      </div>
    </section>
  );
}
