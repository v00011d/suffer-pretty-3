# Liquid Cheatsheet

Quick reference for Shopify Liquid templating language.

## Basic Syntax

### Output Objects
```liquid
{{ product.title }}
{{ product.price | money }}
```

### Tags (Logic)
```liquid
{% if condition %}
  Content
{% endif %}
```

## Common Tags

### Conditionals
```liquid
{% if product.available %}
  In stock
{% elsif product.available == false %}
  Out of stock
{% else %}
  Coming soon
{% endif %}

{% unless product.available %}
  Out of stock
{% endunless %}

{% case product.type %}
  {% when 'shirt' %}
    This is a shirt
  {% when 'pants' %}
    This is pants
  {% else %}
    This is something else
{% endcase %}
```

### Loops
```liquid
{% for product in collection.products %}
  {{ product.title }}
{% endfor %}

{% for i in (1..5) %}
  Item {{ i }}
{% endfor %}

{% for product in collection.products limit:4 %}
  {{ product.title }}
{% endfor %}

{% for product in collection.products offset:2 %}
  {{ product.title }}
{% endfor %}
```

### Loop Helpers
```liquid
{% for product in collection.products %}
  {% if forloop.first %}First item{% endif %}
  {% if forloop.last %}Last item{% endif %}
  Index: {{ forloop.index }}
  Index0: {{ forloop.index0 }}
  Remaining: {{ forloop.rindex }}
  Length: {{ forloop.length }}
{% endfor %}

{% break %}  # Exit loop
{% continue %}  # Skip to next iteration
```

### Variables
```liquid
{% assign my_variable = 'value' %}
{% capture my_capture %}
  Some content
{% endcapture %}
```

### Comments
```liquid
{% comment %}
  This is a comment
{% endcomment %}

{% # Inline comment %}
```

## Common Filters

### String Filters
```liquid
{{ 'hello' | capitalize }}  # Hello
{{ 'HELLO' | downcase }}  # hello
{{ 'hello' | upcase }}  # HELLO
{{ 'hello world' | truncate: 8 }}  # hello...
{{ 'hello world' | truncatewords: 1 }}  # hello...
{{ ' hello ' | strip }}  # hello
{{ 'hello-world' | replace: '-', ' ' }}  # hello world
{{ 'hello' | remove: 'l' }}  # heo
{{ 'hello world' | split: ' ' }}  # ['hello', 'world']
{{ 'hello' | append: ' world' }}  # hello world
{{ 'world' | prepend: 'hello ' }}  # hello world
{{ 'hello' | slice: 0, 2 }}  # he
```

### Number Filters
```liquid
{{ 4.5612 | round }}  # 5
{{ 4.5612 | round: 2 }}  # 4.56
{{ 16 | divided_by: 4 }}  # 4
{{ 5 | times: 4 }}  # 20
{{ 5 | plus: 4 }}  # 9
{{ 5 | minus: 2 }}  # 3
{{ 5 | modulo: 2 }}  # 1
{{ 5 | abs }}  # 5
{{ 3.14159 | ceil }}  # 4
{{ 3.14159 | floor }}  # 3
```

### Money Filters
```liquid
{{ product.price | money }}  # $19.99
{{ product.price | money_with_currency }}  # $19.99 USD
{{ product.price | money_without_trailing_zeros }}  # $19.99 or $20
{{ product.price | money_without_currency }}  # 19.99
```

### Array Filters
```liquid
{{ collection.products | size }}  # Count
{{ collection.products | first }}  # First item
{{ collection.products | last }}  # Last item
{{ collection.products | join: ', ' }}  # Join array
{{ collection.products | map: 'title' }}  # Extract property
{{ collection.products | reverse }}  # Reverse order
{{ collection.products | sort: 'title' }}  # Sort by property
{{ collection.products | uniq }}  # Remove duplicates
{{ collection.products | where: 'available' }}  # Filter
{{ array | concat: other_array }}  # Combine arrays
```

### Date Filters
```liquid
{{ 'now' | date: '%Y-%m-%d' }}  # 2025-11-12
{{ order.created_at | date: '%B %d, %Y' }}  # November 12, 2025
{{ 'now' | date: '%a, %b %d, %y' }}  # Tue, Nov 12, 25
```

### URL Filters
```liquid
{{ 'cart' | url_for }}
{{ product | url_for }}
{{ image | img_url: '300x300' }}
{{ 'image.jpg' | asset_url }}
{{ 'style.css' | asset_url }}
{{ product.url | within: collection }}
```

### HTML Filters
```liquid
{{ product.description | escape }}
{{ '<p>Hello</p>' | strip_html }}
{{ product.description | strip_newlines }}
{{ content | newline_to_br }}
```

### Default Filter
```liquid
{{ product.title | default: 'No title' }}
```

## Product Object

```liquid
{{ product.title }}
{{ product.description }}
{{ product.price }}
{{ product.compare_at_price }}
{{ product.available }}
{{ product.tags }}
{{ product.type }}
{{ product.vendor }}
{{ product.handle }}
{{ product.id }}
{{ product.url }}
{{ product.featured_image }}
{{ product.images }}
{{ product.variants }}
{{ product.selected_or_first_available_variant }}
```

## Variant Object

```liquid
{{ variant.title }}
{{ variant.price }}
{{ variant.compare_at_price }}
{{ variant.available }}
{{ variant.sku }}
{{ variant.weight }}
{{ variant.id }}
{{ variant.option1 }}
{{ variant.option2 }}
{{ variant.option3 }}
{{ variant.image }}
{{ variant.featured_image }}
```

## Collection Object

```liquid
{{ collection.title }}
{{ collection.description }}
{{ collection.products }}
{{ collection.products_count }}
{{ collection.all_products_count }}
{{ collection.url }}
{{ collection.handle }}
{{ collection.image }}
```

## Cart Object

```liquid
{{ cart.item_count }}
{{ cart.total_price }}
{{ cart.items }}
{{ cart.note }}
{{ cart.attributes }}
```

## Customer Object

```liquid
{{ customer.name }}
{{ customer.email }}
{{ customer.first_name }}
{{ customer.last_name }}
{{ customer.default_address }}
{{ customer.orders_count }}
{{ customer.total_spent }}
{{ customer.tags }}
```

## Shop Object

```liquid
{{ shop.name }}
{{ shop.email }}
{{ shop.domain }}
{{ shop.url }}
{{ shop.currency }}
{{ shop.money_format }}
```

## Request Object

```liquid
{{ request.page_type }}
{{ request.path }}
{{ request.locale.iso_code }}
```

## Common Patterns

### Product Card
```liquid
<div class="product-card">
  <a href="{{ product.url }}">
    <img src="{{ product.featured_image | img_url: '300x300' }}" alt="{{ product.title }}">
    <h3>{{ product.title }}</h3>
    <p>{{ product.price | money }}</p>
    {% if product.compare_at_price > product.price %}
      <span class="sale">On Sale!</span>
    {% endif %}
  </a>
</div>
```

### Loop Through Collection
```liquid
{% for product in collection.products %}
  <div class="product">
    {{ product.title }} - {{ product.price | money }}
  </div>
{% endfor %}
```

### Check if Product Available
```liquid
{% if product.available %}
  <button type="submit">Add to Cart</button>
{% else %}
  <button disabled>Sold Out</button>
{% endif %}
```

### Display Product Variants
```liquid
<select name="id">
  {% for variant in product.variants %}
    <option value="{{ variant.id }}" {% if variant.available %}{% else %}disabled{% endif %}>
      {{ variant.title }} - {{ variant.price | money }}
    </option>
  {% endfor %}
</select>
```

### Pagination
```liquid
{% paginate collection.products by 12 %}
  {% for product in collection.products %}
    {{ product.title }}
  {% endfor %}

  {{ paginate | default_pagination }}
{% endpaginate %}
```

## Tips

- Use `{% liquid %}` tag to write multiple tags without delimiters
- Use `{% render 'snippet-name' %}` to include snippets
- Use `{% section 'section-name' %}` to include sections
- Check for nil with `{% if variable != blank %}`
- Use strict equality: `==`, `!=`, `>`, `<`, `>=`, `<=`
- Combine conditions: `and`, `or`, `contains`

## More Info

See full documentation: [`docs/liquid/Liquid_reference`](../docs/liquid/Liquid_reference)
