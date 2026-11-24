/**
 * Central Product Catalog Definition
 * Note: Photographs are sourced strictly from available assets (public/Products/Prod1.jpg).
 * In accordance with project instructions:
 * - No fake model names or unverified claims are invented.
 * - Real prices are not invented; temporary neutral display indicators and placeholders are used.
 * - This structure aligns with the upcoming Laravel API schema.
 */

export const PRODUCTS = [
  {
    id: 'ALN-001',
    slug: 'alune-edition-01',
    code: 'ALUNE — Edition 01',
    category: 'Sunglasses',
    categoryFr: 'Lunettes de soleil',
    categoryAr: 'نظارات شمسية',
    gender: 'men',
    image: '/Products/Prod1.jpg',
    secondaryImages: [
      '/Products/Prod1.jpg',
      '/Sections-IMG/S-2.jpg'
    ],
    priceDisplay: 'Price upon inquiry',
    priceDisplayFr: 'Prix sur demande',
    priceDisplayAr: 'السعر عند الطلب',
    descriptionEn: 'Carefully sculpted silhouette handcrafted with balanced proportions. Designed for discerning optical presence and timeless Mediterranean character.',
    descriptionFr: 'Silhouette soigneusement sculptée et équilibrée. Conçue pour une présence optique distinctive et un caractère méditerranéen intemporel.',
    descriptionAr: 'تصميم منحوت بعناية بتناسب متوازن وطابع كلاسيكي أنيق مستوحى من روح البحر الأبيض المتوسط.',
    isFeatured: true,
    isNew: true,
    status: 'Available via Concierge'
  },
  {
    id: 'ALN-002',
    slug: 'alune-edition-02',
    code: 'ALUNE — Edition 02',
    category: 'Sunglasses',
    categoryFr: 'Lunettes de soleil',
    categoryAr: 'نظارات شمسية',
    gender: 'women',
    image: '/Products/Prod1.jpg',
    secondaryImages: [
      '/Products/Prod1.jpg',
      '/Sections-IMG/S-1.jpeg'
    ],
    priceDisplay: 'Price upon inquiry',
    priceDisplayFr: 'Prix sur demande',
    priceDisplayAr: 'السعر عند الطلب',
    descriptionEn: 'Refined architectural frame featuring subtle curves and distinguished finish. Minimalist profile engineered for daily comfort.',
    descriptionFr: 'Monture architecturale épurée aux courbes subtiles et aux finitions distinguées. Profil minimaliste conçu pour un confort quotidien.',
    descriptionAr: 'إطار معماري راقٍ بخطوط انسيابية دقيقة وتشطيب مميز صُمم لراحة يومية مطلقة.',
    isFeatured: true,
    isNew: false,
    status: 'Available via Concierge'
  },
  {
    id: 'ALN-003',
    slug: 'alune-edition-03',
    code: 'ALUNE — Edition 03',
    category: 'Sunglasses',
    categoryFr: 'Lunettes de soleil',
    categoryAr: 'نظارات شمسية',
    gender: 'men',
    image: '/Products/Prod1.jpg',
    secondaryImages: [
      '/Products/Prod1.jpg',
      '/Sections-IMG/S-3.jpeg'
    ],
    priceDisplay: 'Price upon inquiry',
    priceDisplayFr: 'Prix sur demande',
    priceDisplayAr: 'السعر عند الطلب',
    descriptionEn: 'Statement geometric silhouette capturing light through nuanced frame thickness. An expression of contemporary optical luxury.',
    descriptionFr: 'Silhouette géométrique affirmée captant la lumière à travers des épaisseurs subtiles. Une expression du luxe optique contemporain.',
    descriptionAr: 'تصميم هندسي بارز يعكس الضوء بانسيابية وأناقة معاصرة تعبر عن الفخامة الراقية.',
    isFeatured: true,
    isNew: true,
    status: 'Available via Concierge'
  },
  {
    id: 'ALN-004',
    slug: 'alune-edition-04',
    code: 'ALUNE — Edition 04',
    category: 'Sunglasses',
    categoryFr: 'Lunettes de soleil',
    categoryAr: 'نظارات شمسية',
    gender: 'women',
    image: '/Products/Prod1.jpg',
    secondaryImages: [
      '/Products/Prod1.jpg'
    ],
    priceDisplay: 'Price upon inquiry',
    priceDisplayFr: 'Prix sur demande',
    priceDisplayAr: 'السعر عند الطلب',
    descriptionEn: 'Understated oval profile offering a smooth wrap and soft visual rhythm. Designed to complement diverse facial contours.',
    descriptionFr: 'Profil ovale discret offrant un galbe fluide et un rythme visuel doux. Conçu pour flatter harmonieusement les contours du visage.',
    descriptionAr: 'إطار بيضاوي هادئ بتفاصيل ناعمة وتناسق متقن يناسب مختلف ملامح الوجه.',
    isFeatured: false,
    isNew: false,
    status: 'Available via Concierge'
  }
];

export const getProductBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);
