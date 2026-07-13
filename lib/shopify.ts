const domain = process.env.SHOPIFY_STORE_DOMAIN;
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function shopifyFetch<T>({
  query,
  variables,
  cache = 'force-cache'
}: {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache;
}): Promise<{ status: number; body: T }> {
  const endpoint = `https://${domain}/api/2024-01/graphql.json`;

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': accessToken!,
      },
      body: JSON.stringify({ query, variables }),
      cache,
      next: cache === 'force-cache' ? { revalidate: 3600 } : undefined
    });

    return {
      status: result.status,
      body: await result.json()
    };
  } catch (error) {
    console.error('Error reaching Shopify Storefront API:', error);
    throw {
      error,
      query,
    };
  }
}

export type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  description: string;
  availableForSale: boolean;
  collections?: {
    edges: {
      node: {
        title: string;
      };
    }[];
  };
  images: {
    edges: {
      node: {
        url: string;
        altText: string;
      };
    }[];
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        quantityAvailable: number;
        price: {
          amount: string;
          currencyCode: string;
        };
        selectedOptions: {
          name: string;
          value: string;
        }[];
      };
    }[];
  };
};

export type ShopifyProductVideo = {
  mediaContentType: 'VIDEO';
  sources: { url: string; mimeType: string; format: string }[];
  previewImage: { url: string } | null;
};

export type ShopifyProductExternalVideo = {
  mediaContentType: 'EXTERNAL_VIDEO';
  embeddedUrl: string;
  host: string;
  previewImage: { url: string } | null;
};

export type ShopifyProductMedia = ShopifyProductVideo | ShopifyProductExternalVideo;


export async function getProduct(handle: string) {
  return shopifyFetch<{ data: { product: ShopifyProduct } }>({
    query: `{
      product(handle: "${handle}") {
        id
        title
        handle
        description
        availableForSale
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 20) {
          edges {
            node {
              id
              title
              availableForSale
              quantityAvailable
              price {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }`
  });
}

export async function getProducts(cursor?: string) {
  const afterClause = cursor ? `, after: "${cursor}"` : "";

  return shopifyFetch<{
    data: {
      products: {
        pageInfo: { hasNextPage: boolean };
        edges: { cursor: string; node: ShopifyProduct }[];
      };
    };
  }>({
    query: `{
      products(first: 12${afterClause}) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            title
            handle
            description
            availableForSale
            images(first: 10) {
              edges {
                node { url altText }
              }
            }
            priceRange {
              minVariantPrice { amount currencyCode }
              maxVariantPrice { amount currencyCode }
            }
            variants(first: 20) {
              edges {
                node {
                  id title availableForSale quantityAvailable
                  price { amount currencyCode }
                  selectedOptions { name value }
                }
              }
            }
          }
        }
      }
    }`,
    cache: "no-store"
  });
}

export async function getAllPolicies() {
  const res = await shopifyFetch<{
    data: {
      shop: {
        privacyPolicy: { title: string; body: string } | null;
        refundPolicy: { title: string; body: string } | null;
        termsOfService: { title: string; body: string } | null;
        shippingPolicy: { title: string; body: string } | null;
      }
    }
  }>({
    query: `
      query getAllPolicies {
        shop {
          privacyPolicy {
            title
            body
          }
          refundPolicy {
            title
            body
          }
          termsOfService {
            title
            body
          }
          shippingPolicy {
            title
            body
          }
        }
      }
    `,
  });

  // Return an array of policies that actually exist and have content
  return Object.values(res.body.data.shop).filter((policy): policy is { title: string; body: string } =>
    policy !== null && policy.body.trim() !== ''
  );
}
