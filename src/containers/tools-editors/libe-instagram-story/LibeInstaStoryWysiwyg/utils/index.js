export const displays = [
  'cover',
  'bg-image',
  'quote-on-bg-image',
  'text-on-bg-image',
  'image-and-text',
]

export const displayPickerOptions = [
  { label: 'Mise en page',      value: 'placeholder',   disabled: true,   selected: true },
  { label: 'Page de garde',     value: displays[0] },
  { label: 'Image pleine page', value: displays[1] },
  { label: 'Citation',          value: displays[2] },
  { label: 'Photo légendée',    value: displays[3] },
  { label: 'Promo « Une »',     value: displays[4] },
]
