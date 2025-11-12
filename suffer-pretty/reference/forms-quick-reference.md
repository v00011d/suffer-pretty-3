# Forms Quick Reference

Quick guide to building forms with Shopify UI components.

## Basic Form Structure

```javascript
import {
  Form,
  TextField,
  Button,
  BlockStack
} from '@shopify/ui-extensions/checkout';

<Form onSubmit={handleSubmit}>
  <BlockStack spacing="base">
    <TextField
      label="Name"
      value={name}
      onChange={setName}
      required
    />
    <Button type="submit">Submit</Button>
  </BlockStack>
</Form>
```

## Form Components

### TextField
```javascript
<TextField
  label="Full Name"
  value={value}
  onChange={setValue}
  error={error}
  required
  placeholder="Enter your name"
  helpText="Enter your full legal name"
/>
```

### TextArea
```javascript
<TextArea
  label="Message"
  value={message}
  onChange={setMessage}
  rows={5}
  maxLength={500}
  helpText="Maximum 500 characters"
/>
```

### EmailField
```javascript
<EmailField
  label="Email Address"
  value={email}
  onChange={setEmail}
  required
  error={emailError}
  placeholder="you@example.com"
/>
```

### DateField
```javascript
<DateField
  label="Appointment Date"
  value={date}
  onChange={setDate}
  required
  min="2025-01-01"
  max="2025-12-31"
/>
```

### DatePicker
```javascript
<DatePicker
  selected={selectedDate}
  onChange={setSelectedDate}
  disabled={[disabledDates]}
/>
```

### NumberField
```javascript
<NumberField
  label="Quantity"
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={100}
  step={1}
/>
```

### MoneyField
```javascript
<MoneyField
  label="Amount"
  value={amount}
  onChange={setAmount}
  currency="USD"
/>
```

### PasswordField
```javascript
<PasswordField
  label="Password"
  value={password}
  onChange={setPassword}
  required
  helpText="Minimum 8 characters"
/>
```

### URLField
```javascript
<URLField
  label="Website"
  value={url}
  onChange={setUrl}
  placeholder="https://example.com"
/>
```

### Checkbox
```javascript
<Checkbox
  checked={agreed}
  onChange={setAgreed}
>
  I agree to the terms and conditions
</Checkbox>
```

### ChoiceList (Radio/Checkboxes)
```javascript
// Radio buttons
<ChoiceList
  value={selected}
  onChange={setSelected}
  choices={[
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ]}
/>

// Multiple checkboxes
<ChoiceList
  value={selectedMultiple}
  onChange={setSelectedMultiple}
  allowMultiple
  choices={[
    { label: 'Feature 1', value: 'feature1' },
    { label: 'Feature 2', value: 'feature2' }
  ]}
/>
```

### Select Dropdown
```javascript
<Select
  label="Country"
  value={country}
  onChange={setCountry}
  options={[
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' }
  ]}
/>
```

### ColorPicker
```javascript
<ColorPicker
  value={color}
  onChange={setColor}
  label="Theme Color"
/>
```

## Validation Patterns

### Basic Validation
```javascript
const [email, setEmail] = useState('');
const [error, setError] = useState('');

const validateEmail = (value) => {
  if (!value) {
    setError('Email is required');
    return false;
  }
  if (!/\S+@\S+\.\S+/.test(value)) {
    setError('Please enter a valid email');
    return false;
  }
  setError('');
  return true;
};

const handleEmailChange = (value) => {
  setEmail(value);
  validateEmail(value);
};
```

### Form Submission with Validation
```javascript
const handleSubmit = () => {
  let isValid = true;

  if (!name) {
    setNameError('Name is required');
    isValid = false;
  }

  if (!validateEmail(email)) {
    isValid = false;
  }

  if (!phone.match(/^\d{10}$/)) {
    setPhoneError('Please enter a 10-digit phone number');
    isValid = false;
  }

  if (isValid) {
    // Submit form
    submitFormData({ name, email, phone });
  }
};
```

## Complete Booking Form Example

```javascript
import {
  Form,
  TextField,
  EmailField,
  DateField,
  TextArea,
  Select,
  Checkbox,
  Button,
  BlockStack,
  Banner
} from '@shopify/ui-extensions/checkout';

function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [notes, setNotes] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!date) newErrors.date = 'Date is required';
    if (!time) newErrors.time = 'Time is required';
    if (!service) newErrors.service = 'Please select a service';
    if (!agreed) newErrors.agreed = 'You must agree to continue';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      await submitBooking({ name, email, date, time, service, notes });
      setSubmitted(true);
    } catch (error) {
      setErrors({ submit: 'Failed to submit booking. Please try again.' });
    }
  };

  if (submitted) {
    return (
      <Banner status="success">
        Booking confirmed! Check your email for details.
      </Banner>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <BlockStack spacing="base">
        {errors.submit && (
          <Banner status="critical">{errors.submit}</Banner>
        )}

        <TextField
          label="Full Name"
          value={name}
          onChange={setName}
          error={errors.name}
          required
        />

        <EmailField
          label="Email Address"
          value={email}
          onChange={setEmail}
          error={errors.email}
          required
        />

        <DateField
          label="Preferred Date"
          value={date}
          onChange={setDate}
          error={errors.date}
          required
          min={new Date().toISOString().split('T')[0]}
        />

        <Select
          label="Time Slot"
          value={time}
          onChange={setTime}
          error={errors.time}
          options={[
            { label: 'Select a time', value: '' },
            { label: '9:00 AM', value: '09:00' },
            { label: '10:00 AM', value: '10:00' },
            { label: '11:00 AM', value: '11:00' },
            { label: '1:00 PM', value: '13:00' },
            { label: '2:00 PM', value: '14:00' },
            { label: '3:00 PM', value: '15:00' },
            { label: '4:00 PM', value: '16:00' }
          ]}
          required
        />

        <Select
          label="Service"
          value={service}
          onChange={setService}
          error={errors.service}
          options={[
            { label: 'Select a service', value: '' },
            { label: 'Small Tattoo (< 2 inches)', value: 'small' },
            { label: 'Medium Tattoo (2-6 inches)', value: 'medium' },
            { label: 'Large Tattoo (> 6 inches)', value: 'large' },
            { label: 'Consultation', value: 'consultation' }
          ]}
          required
        />

        <TextArea
          label="Additional Notes"
          value={notes}
          onChange={setNotes}
          placeholder="Design ideas, placement, reference images..."
          rows={4}
        />

        <Checkbox
          checked={agreed}
          onChange={setAgreed}
          error={errors.agreed}
        >
          I agree to the booking terms and conditions
        </Checkbox>

        <Button type="submit" primary>
          Confirm Booking
        </Button>
      </BlockStack>
    </Form>
  );
}
```

## Layout Components for Forms

### BlockStack (Vertical)
```javascript
<BlockStack spacing="base">
  <TextField />
  <TextField />
  <Button />
</BlockStack>
```

### InlineStack (Horizontal)
```javascript
<InlineStack spacing="base">
  <TextField label="First Name" />
  <TextField label="Last Name" />
</InlineStack>
```

### Section with Header
```javascript
<Section heading="Contact Information">
  <BlockStack spacing="base">
    <TextField label="Email" />
    <TextField label="Phone" />
  </BlockStack>
</Section>
```

## Common Validation Patterns

```javascript
// Email validation
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

// Phone validation (US)
const isValidPhone = (phone) => /^\d{10}$/.test(phone.replace(/\D/g, ''));

// URL validation
const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Date validation (not in past)
const isValidFutureDate = (date) => {
  return new Date(date) > new Date();
};

// Required field
const isRequired = (value) => value && value.trim().length > 0;

// Min length
const hasMinLength = (value, min) => value && value.length >= min;

// Max length
const hasMaxLength = (value, max) => value && value.length <= max;
```

## Error Display Patterns

```javascript
// Field-level error
<TextField
  error={errors.name}
  // ...other props
/>

// Form-level error banner
{errors.form && (
  <Banner status="critical">
    {errors.form}
  </Banner>
)}

// Success message
{success && (
  <Banner status="success">
    Form submitted successfully!
  </Banner>
)}
```

## Tips

1. **Always validate on submit** - Check all fields before submission
2. **Provide clear error messages** - Tell users exactly what's wrong
3. **Use appropriate input types** - EmailField for emails, DateField for dates
4. **Mark required fields** - Use the `required` prop
5. **Add help text** - Use `helpText` prop to guide users
6. **Disable submit during processing** - Prevent duplicate submissions
7. **Show success feedback** - Confirm when action completes
8. **Use BlockStack** - For vertical form layouts
9. **Group related fields** - Use Section component
10. **Test validation** - Ensure all edge cases are handled

## More Info

- [Form Component](../docs/ui-components/Form)
- [TextField Component](../docs/ui-components/TextField)
- [All UI Components](../docs/ui-components/)
