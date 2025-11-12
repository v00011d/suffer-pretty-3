# Component Gallery

Visual reference guide to Shopify UI components with common use cases.

## Form Components

### TextField
**Use for:** Single-line text input (name, username, etc.)
```javascript
<TextField
  label="Full Name"
  value={name}
  onChange={setName}
  placeholder="John Doe"
  required
/>
```
**Best for:** Names, titles, short text

### TextArea
**Use for:** Multi-line text input (messages, descriptions)
```javascript
<TextArea
  label="Comments"
  value={comments}
  onChange={setComments}
  rows={5}
/>
```
**Best for:** Messages, descriptions, notes

### EmailField
**Use for:** Email addresses with validation
```javascript
<EmailField
  label="Email"
  value={email}
  onChange={setEmail}
  required
/>
```
**Best for:** Contact forms, newsletter signup, registration

### DateField
**Use for:** Date selection with calendar
```javascript
<DateField
  label="Booking Date"
  value={date}
  onChange={setDate}
  min="2025-01-01"
/>
```
**Best for:** Appointments, reservations, deadlines

### NumberField
**Use for:** Numeric input with increment/decrement
```javascript
<NumberField
  label="Quantity"
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={10}
/>
```
**Best for:** Quantities, ages, ratings

### Select
**Use for:** Dropdown selection from options
```javascript
<Select
  label="Size"
  value={size}
  onChange={setSize}
  options={[
    { label: 'Small', value: 's' },
    { label: 'Medium', value: 'm' },
    { label: 'Large', value: 'l' }
  ]}
/>
```
**Best for:** Sizes, categories, predefined options

### Checkbox
**Use for:** Single yes/no choice
```javascript
<Checkbox
  checked={agreed}
  onChange={setAgreed}
>
  I agree to terms
</Checkbox>
```
**Best for:** Agreements, toggles, opt-ins

### ChoiceList
**Use for:** Radio buttons or multiple checkboxes
```javascript
<ChoiceList
  value={selected}
  onChange={setSelected}
  choices={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]}
/>
```
**Best for:** Selecting from 2-7 options

## Action Components

### Button
**Use for:** Primary actions
```javascript
<Button primary onPress={handleSubmit}>
  Submit
</Button>

<Button onPress={handleCancel}>
  Cancel
</Button>

<Button destructive onPress={handleDelete}>
  Delete
</Button>
```
**Variants:** primary, secondary, destructive, plain
**Best for:** Form submissions, CTAs, actions

### Link
**Use for:** Navigation
```javascript
<Link to="/about">
  Learn More
</Link>
```
**Best for:** Navigation, external links

### Pressable
**Use for:** Custom clickable elements
```javascript
<Pressable onPress={handlePress}>
  <Box>Custom clickable content</Box>
</Pressable>
```
**Best for:** Cards, custom interactive elements

## Layout Components

### BlockStack
**Use for:** Vertical layout
```javascript
<BlockStack spacing="base">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</BlockStack>
```
**Spacing options:** none, extraTight, tight, base, loose, extraLoose
**Best for:** Forms, vertical lists, stacked content

### InlineStack
**Use for:** Horizontal layout
```javascript
<InlineStack spacing="base" alignment="center">
  <Button>Cancel</Button>
  <Button primary>Save</Button>
</InlineStack>
```
**Best for:** Button groups, horizontal menus, inline elements

### Box
**Use for:** Container with padding/spacing
```javascript
<Box
  padding="base"
  border="base"
  borderRadius="base"
>
  Content here
</Box>
```
**Best for:** Cards, containers, wrappers

### Section
**Use for:** Content sections with headings
```javascript
<Section heading="Contact Information">
  <BlockStack>
    <TextField label="Email" />
    <TextField label="Phone" />
  </BlockStack>
</Section>
```
**Best for:** Form sections, grouped content

### Divider
**Use for:** Visual separation
```javascript
<Divider />
```
**Best for:** Separating sections, visual breaks

## Display Components

### Badge
**Use for:** Status indicators
```javascript
<Badge status="success">Active</Badge>
<Badge status="warning">Pending</Badge>
<Badge status="critical">Error</Badge>
```
**Status options:** success, info, warning, critical, attention
**Best for:** Status labels, tags, counts

### Banner
**Use for:** Important messages
```javascript
<Banner status="success">
  Order placed successfully!
</Banner>

<Banner status="critical">
  Payment failed. Please try again.
</Banner>
```
**Status options:** success, info, warning, critical
**Best for:** Alerts, notifications, feedback

### Icon
**Use for:** Visual indicators
```javascript
<Icon source="checkmark" />
<Icon source="alert" />
<Icon source="cart" />
```
**Best for:** Visual cues, buttons, status

### Image
**Use for:** Product images, photos
```javascript
<Image
  source="https://example.com/image.jpg"
  alt="Product name"
  aspectRatio={1}
/>
```
**Best for:** Product images, photos, graphics

### Heading
**Use for:** Section titles
```javascript
<Heading>Main Title</Heading>
<Heading level={2}>Subtitle</Heading>
```
**Levels:** 1-6
**Best for:** Page titles, section headers

### Text
**Use for:** Body text
```javascript
<Text size="small">Small text</Text>
<Text>Normal text</Text>
<Text size="large">Large text</Text>

<Text emphasis="bold">Bold text</Text>
<Text emphasis="italic">Italic text</Text>
```
**Best for:** Body copy, descriptions, labels

### ProgressIndicator
**Use for:** Loading states
```javascript
<ProgressIndicator />
```
**Best for:** Loading, processing, waiting

## Common Component Patterns

### Contact Form
```javascript
<Form onSubmit={handleSubmit}>
  <BlockStack spacing="base">
    <Section heading="Contact Information">
      <BlockStack spacing="base">
        <TextField label="Name" required />
        <EmailField label="Email" required />
        <TextField label="Phone" />
      </BlockStack>
    </Section>

    <Divider />

    <Section heading="Message">
      <TextArea
        label="Your Message"
        rows={5}
        required
      />
    </Section>

    <InlineStack alignment="trailing">
      <Button primary>Send Message</Button>
    </InlineStack>
  </BlockStack>
</Form>
```

### Product Selection
```javascript
<BlockStack spacing="base">
  <Image source={product.image} />

  <Heading>{product.title}</Heading>

  <Text>{product.price}</Text>

  <Select
    label="Size"
    options={sizeOptions}
  />

  <Select
    label="Color"
    options={colorOptions}
  />

  <NumberField
    label="Quantity"
    min={1}
    value={quantity}
  />

  <Button primary>Add to Cart</Button>
</BlockStack>
```

### Booking Form
```javascript
<Form onSubmit={handleBooking}>
  <BlockStack spacing="base">
    <Banner status="info">
      Book your appointment below
    </Banner>

    <TextField label="Name" required />
    <EmailField label="Email" required />

    <DateField
      label="Preferred Date"
      required
      min={tomorrow}
    />

    <Select
      label="Time Slot"
      options={timeSlots}
      required
    />

    <Select
      label="Service"
      options={services}
      required
    />

    <TextArea
      label="Notes"
      placeholder="Any special requests?"
    />

    <Checkbox>
      I agree to the booking policy
    </Checkbox>

    <Button primary>Confirm Booking</Button>
  </BlockStack>
</Form>
```

### Settings Panel
```javascript
<BlockStack spacing="loose">
  <Section heading="Account Settings">
    <BlockStack spacing="base">
      <TextField label="Display Name" />
      <EmailField label="Email Address" />
      <Checkbox checked>Email notifications</Checkbox>
      <Checkbox checked>SMS notifications</Checkbox>
    </BlockStack>
  </Section>

  <Divider />

  <Section heading="Privacy">
    <BlockStack spacing="base">
      <ChoiceList
        choices={[
          { label: 'Public', value: 'public' },
          { label: 'Private', value: 'private' }
        ]}
      />
    </BlockStack>
  </Section>

  <InlineStack alignment="trailing">
    <Button>Cancel</Button>
    <Button primary>Save Changes</Button>
  </InlineStack>
</BlockStack>
```

### Status Card
```javascript
<Box border padding="base" borderRadius="base">
  <BlockStack spacing="base">
    <InlineStack alignment="spread">
      <Heading level={3}>Order #1234</Heading>
      <Badge status="success">Delivered</Badge>
    </InlineStack>

    <Text>Delivered on Nov 12, 2025</Text>

    <Divider />

    <InlineStack>
      <Link to="/order/1234">View Details</Link>
      <Link to="/order/1234/track">Track Package</Link>
    </InlineStack>
  </BlockStack>
</Box>
```

### Error State
```javascript
<Banner status="critical">
  <BlockStack spacing="tight">
    <Text emphasis="bold">Unable to process request</Text>
    <Text>Please check your connection and try again.</Text>
    <Button onPress={retry}>Retry</Button>
  </BlockStack>
</Banner>
```

### Success State
```javascript
<Box padding="base">
  <BlockStack spacing="base" alignment="center">
    <Icon source="checkmark" size="large" />
    <Heading>Success!</Heading>
    <Text>Your order has been placed.</Text>
    <Button primary onPress={viewOrder}>
      View Order
    </Button>
  </BlockStack>
</Box>
```

## Component Selection Guide

### Choose TextField when:
- Single-line input needed
- Short text expected
- Examples: name, username, title

### Choose TextArea when:
- Multi-line input needed
- Long text expected
- Examples: messages, descriptions, reviews

### Choose Select when:
- 3-15 predefined options
- Single selection needed
- User needs to see all options

### Choose ChoiceList when:
- 2-7 options
- Options need descriptions
- Visual selection preferred

### Choose Checkbox when:
- Single yes/no choice
- Opt-in/opt-out needed
- Multiple independent choices

### Choose Button when:
- Primary action needed
- Form submission
- Important CTA

### Choose Link when:
- Navigation needed
- External resource
- Non-critical action

## Spacing Guidelines

### BlockStack spacing
- **extraTight**: 4px - Very compact
- **tight**: 8px - Compact
- **base**: 16px - Default (recommended)
- **loose**: 24px - Spacious
- **extraLoose**: 32px - Very spacious

### Use Cases
- Form fields: `base` or `tight`
- Sections: `loose`
- Related items: `tight`
- Unrelated items: `loose`

## More Info

- [UI Components Documentation](../docs/ui-components/)
- [Polaris Components](../docs/polaris-components/)
- [Forms Quick Reference](forms-quick-reference.md)
