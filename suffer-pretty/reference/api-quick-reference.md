# API Quick Reference

Common GraphQL queries and API patterns for Shopify development.

## GraphQL Admin API

### Authentication
```javascript
const response = await fetch('https://your-store.myshopify.com/admin/api/2024-01/graphql.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': 'your-access-token'
  },
  body: JSON.stringify({ query, variables })
});
```

## Product Queries

### Get Single Product
```graphql
query GetProduct($id: ID!) {
  product(id: $id) {
    id
    title
    description
    handle
    status
    vendor
    productType
    tags
    options {
      id
      name
      values
    }
    variants(first: 100) {
      edges {
        node {
          id
          title
          price
          compareAtPrice
          sku
          availableForSale
          selectedOptions {
            name
            value
          }
        }
      }
    }
    images(first: 10) {
      edges {
        node {
          id
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
  }
}
```

### Get Products List
```graphql
query GetProducts($first: Int!) {
  products(first: $first) {
    edges {
      node {
        id
        title
        handle
        featuredImage {
          url
          altText
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

### Create Product
```graphql
mutation CreateProduct($input: ProductInput!) {
  productCreate(input: $input) {
    product {
      id
      title
      handle
    }
    userErrors {
      field
      message
    }
  }
}
```

**Variables:**
```json
{
  "input": {
    "title": "New Product",
    "descriptionHtml": "<p>Product description</p>",
    "vendor": "Your Brand",
    "productType": "Type",
    "tags": ["tag1", "tag2"],
    "variants": [
      {
        "price": "29.99",
        "sku": "SKU123",
        "inventoryQuantities": {
          "availableQuantity": 100,
          "locationId": "gid://shopify/Location/123"
        }
      }
    ]
  }
}
```

### Update Product
```graphql
mutation UpdateProduct($input: ProductInput!) {
  productUpdate(input: $input) {
    product {
      id
      title
    }
    userErrors {
      field
      message
    }
  }
}
```

### Delete Product
```graphql
mutation DeleteProduct($input: ProductDeleteInput!) {
  productDelete(input: $input) {
    deletedProductId
    userErrors {
      field
      message
    }
  }
}
```

## Collection Queries

### Get Collection
```graphql
query GetCollection($id: ID!) {
  collection(id: $id) {
    id
    title
    handle
    description
    image {
      url
      altText
    }
    products(first: 50) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
}
```

### Get All Collections
```graphql
query GetCollections($first: Int!) {
  collections(first: $first) {
    edges {
      node {
        id
        title
        handle
        productsCount
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

## Customer Queries

### Get Customer
```graphql
query GetCustomer($id: ID!) {
  customer(id: $id) {
    id
    firstName
    lastName
    email
    phone
    createdAt
    defaultAddress {
      address1
      address2
      city
      province
      country
      zip
    }
    orders(first: 10) {
      edges {
        node {
          id
          name
          totalPrice {
            amount
            currencyCode
          }
          createdAt
        }
      }
    }
    tags
  }
}
```

### Create Customer
```graphql
mutation CreateCustomer($input: CustomerInput!) {
  customerCreate(input: $input) {
    customer {
      id
      email
      firstName
      lastName
    }
    userErrors {
      field
      message
    }
  }
}
```

## Order Queries

### Get Order
```graphql
query GetOrder($id: ID!) {
  order(id: $id) {
    id
    name
    email
    createdAt
    fulfillmentStatus
    financialStatus
    totalPrice {
      amount
      currencyCode
    }
    lineItems(first: 50) {
      edges {
        node {
          id
          title
          quantity
          variant {
            id
            title
            price
          }
        }
      }
    }
    shippingAddress {
      address1
      city
      province
      country
      zip
    }
    customer {
      id
      email
      firstName
      lastName
    }
  }
}
```

### Get Orders
```graphql
query GetOrders($first: Int!, $query: String) {
  orders(first: $first, query: $query) {
    edges {
      node {
        id
        name
        email
        createdAt
        totalPrice {
          amount
          currencyCode
        }
        fulfillmentStatus
        financialStatus
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

## Metafield Operations

### Get Product Metafields
```graphql
query GetProductMetafields($id: ID!) {
  product(id: $id) {
    id
    metafields(first: 100) {
      edges {
        node {
          id
          namespace
          key
          value
          type
        }
      }
    }
  }
}
```

### Create Metafield
```graphql
mutation CreateMetafield($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields {
      id
      namespace
      key
      value
    }
    userErrors {
      field
      message
    }
  }
}
```

**Variables:**
```json
{
  "metafields": [
    {
      "ownerId": "gid://shopify/Product/123456789",
      "namespace": "custom",
      "key": "booking_duration",
      "value": "60",
      "type": "number_integer"
    }
  ]
}
```

## Inventory Operations

### Get Inventory Level
```graphql
query GetInventoryLevel($inventoryItemId: ID!, $locationId: ID!) {
  inventoryLevel(inventoryItemId: $inventoryItemId, locationId: $locationId) {
    available
    incoming
  }
}
```

### Adjust Inventory
```graphql
mutation AdjustInventory($input: InventoryAdjustQuantityInput!) {
  inventoryAdjustQuantity(input: $input) {
    inventoryLevel {
      available
    }
    userErrors {
      field
      message
    }
  }
}
```

## Shop Query

### Get Shop Info
```graphql
query GetShop {
  shop {
    name
    email
    myshopifyDomain
    primaryDomain {
      url
      host
    }
    currencyCode
    moneyFormat
    billingAddress {
      address1
      city
      province
      country
      zip
    }
  }
}
```

## Pagination Pattern

### Cursor-based Pagination
```graphql
query GetProductsWithPagination($first: Int!, $after: String) {
  products(first: $first, after: $after) {
    edges {
      cursor
      node {
        id
        title
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
```

**Usage:**
```javascript
// First page
let cursor = null;
let hasNextPage = true;

while (hasNextPage) {
  const result = await query(GET_PRODUCTS, {
    first: 50,
    after: cursor
  });

  // Process results
  result.products.edges.forEach(edge => {
    console.log(edge.node.title);
  });

  // Update pagination
  cursor = result.products.pageInfo.endCursor;
  hasNextPage = result.products.pageInfo.hasNextPage;
}
```

## Webhook Management

### Create Webhook
```graphql
mutation CreateWebhook($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
  webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      endpoint {
        __typename
        ... on WebhookHttpEndpoint {
          callbackUrl
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}
```

### List Webhooks
```graphql
query GetWebhooks($first: Int!) {
  webhookSubscriptions(first: $first) {
    edges {
      node {
        id
        topic
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
        }
      }
    }
  }
}
```

## Storefront API (for themes)

### Get Product for Storefront
```graphql
query GetProduct($handle: String!) {
  productByHandle(handle: $handle) {
    id
    title
    description
    availableForSale
    variants(first: 100) {
      edges {
        node {
          id
          title
          price {
            amount
            currencyCode
          }
          availableForSale
        }
      }
    }
  }
}
```

### Create Cart
```graphql
mutation CreateCart($input: CartInput!) {
  cartCreate(input: $input) {
    cart {
      id
      lines(first: 10) {
        edges {
          node {
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}
```

## Error Handling

```javascript
const result = await executeQuery(query, variables);

if (result.errors) {
  console.error('GraphQL Errors:', result.errors);
  // Handle GraphQL errors
}

if (result.data?.mutation?.userErrors?.length > 0) {
  console.error('User Errors:', result.data.mutation.userErrors);
  // Handle user errors
}
```

## Rate Limiting

### Check Rate Limit
```graphql
query CheckRateLimit {
  shop {
    name
  }
}
```

**Response includes:**
```json
{
  "extensions": {
    "cost": {
      "requestedQueryCost": 1,
      "actualQueryCost": 1,
      "throttleStatus": {
        "maximumAvailable": 1000,
        "currentlyAvailable": 999,
        "restoreRate": 50
      }
    }
  }
}
```

## Tips

1. **Use fragments** to reuse query parts
2. **Request only needed fields** to optimize performance
3. **Handle pagination** for large datasets
4. **Check userErrors** in mutation responses
5. **Monitor rate limits** in extensions
6. **Use variables** instead of string interpolation
7. **Batch operations** when possible
8. **Cache responses** when appropriate
9. **Use GraphQL playground** for testing
10. **Check API version** for compatibility

## More Info

- [GraphQL Admin API Reference](../docs/api-references/GraphQL_Admin_API_reference)
- [Function APIs](../docs/api-references/Function_APIs)
- [Webhooks](../docs/api-references/Webhooks)
- [All API References](../docs/api-references/)
