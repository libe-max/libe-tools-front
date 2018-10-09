export const displays = [
  'cover',
  'image-and-text',
  'bg-image',
  'quote-on-bg-image',
  'text-on-bg-image'
]

export const displayPickerOptions = [
  { label: 'Mise en page',                   value: 'placeholder',
    disabled: true,                          selected: true },
  { label: 'Page de garde',                  value: displays[0] },
  { label: 'Image et texte',                 value: displays[1] },
  { label: 'Image pleine page',              value: displays[2] },
  { label: 'Citation sur image pleine page', value: displays[3] },
  { label: 'Texte sur image pleine page',    value: displays[4] }
]
