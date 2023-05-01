import { v4 as uuidv4 } from 'uuid';

const products = [
  {
    id: uuidv4(),
    name: 'Air Jordan 1 Mid SE',
    image: '/shoes/air-jordan-1-mid-se.jpg',
    colourCount: 1,
    price: 225,
    description:
      'With its mid-top design and classic Jordan branding, it offers a blend of style and performance. The shoe features a combination of leather and synthetic upper for durability and support. It also includes a cushioned midsole and a rubber outsole for comfort and traction on and off the court.A stylish and super clean design, a must have indeed.',
  },
  {
    id: uuidv4(),
    name: 'Dunk Low',
    image: '/shoes/dunk-low.jpg',
    colourCount: 3,
    price: 219,
    description:
      " The shoe features a low-cut silhouette and a retro design that is both stylish and timeless. The upper is made of high-quality leather and features a perforated toe box for breathability. Whether you're a basketball player or a sneaker collector, the Nike Dunk Low is a classic shoe that should be in your collection.",
  },
  {
    id: uuidv4(),
    name: "Air Force 1 Mid '07",
    image: '/shoes/air-force-1-mid-07.jpg',
    colourCount: 1,
    price: 159,
    description:
      "The mid-top design offers a supportive fit, while the padded collar and ankle strap provide cushioning and lockdown. The Air-Sole unit in the heel provides lightweight cushioning and impact protection, while the rubber outsole delivers durable traction. With its sleek and timeless design, the Air Force 1 Mid '07 is perfect for any casual occasion.",
  },
  {
    id: uuidv4(),
    name: "Air Force 1 '07 LX",
    image: '/shoes/air-force-1-07-lx.jpg',
    colourCount: 1,
    price: 219,
    description:
      "The Air Force 1 '07 LX is a classic Nike sneaker reimagined with a fresh pastel colorway. This low-top sneaker features a durable leather upper with tonal stitching and perforations on the toe box for enhanced breathability.Whether you're hitting the streets or just looking for a stylish sneaker to complete your outfit, the Air Force 1 '07 LX is a versatile choice that won't disappoint.",
  },
  {
    id: uuidv4(),
    name: "Air Force 1 '07",
    image: '/shoes/air-force-1-07.jpg',
    colourCount: 2,
    price: 165,
    description:
      "The Nike Air Force 1 '07 is a classic shoe that is designed for both style and comfort. The shoe features a low-top silhouette, a perforated toe box, and a padded collar for added comfort. The shoe is equipped with Nike Air technology in the sole, providing excellent cushioning and support for everyday wear. With its timeless design and versatile colorway options, the Air Force 1 '07 is a must-have addition to any sneaker collection.",
  },
  {
    id: uuidv4(),
    name: 'Zoom Fly 5',
    image: '/shoes/zoom-fly-5.jpg',
    colourCount: 1,
    price: 249,
    description:
      'The Zoom Fly 5 is a running shoe designed to provide a combination of comfort and performance for runners. Its sleek and modern design is both stylish and functional, featuring a lightweight mesh upper for breathability and a responsive foam midsole for cushioning and energy return. The shoe also includes a full-length carbon fiber plate that provides stability and propulsion, helping runners to achieve a faster and smoother ride.',
  },
  {
    id: uuidv4(),
    name: 'Air Jordan 1 Mid',
    image: '/shoes/air-jordan-1-mid.jpg',
    colourCount: 1,
    price: 225,
    description:
      "The Air Jordan 1 Mid is a classic sneaker that offers a blend of heritage style and modern comfort. The shoe is adorned with the iconic Nike Swoosh logo and the 'Air Jordan Wings' logo on the side. This versatile sneaker can be worn for both casual and athletic occasions and comes in a variety of colorways to match any personal style.",
  },
  {
    id: uuidv4(),
    name: "Zoom Kobe 6 'Grinch'",
    image: '/shoes/zoom-kobe-6-grinch.jpg',
    colourCount: 1,
    price: 259,
    description:
      "It was inspired by the character from the popular Christmas movie, 'How the Grinch Stole Christmas'. The shoe features a bright green upper.The shoe's low-cut design and lightweight construction make it ideal for quick, agile movements on the basketball court. Overall, the Zoom Kobe 6 'Grinch' is a stylish and high-performing basketball shoe that is sure to turn heads on and off the court.",
  },
  {
    id: uuidv4(),
    name: "Air Force 1 High '07 ",
    image: '/shoes/air-force-1-high-07.jpg',
    colourCount: 1,
    price: 145,
    description:
      'The Nike Air Force 1 High 07 is a classic and iconic sneaker that exudes timeless style and urban flair. With its high-top silhouette and premium materials, it offers a bold and confident look that never goes out of fashion. The shoe features a leather upper for durability and a padded collar for enhanced comfort and ankle support. The Air Force 1 High 07 showcases the signature Air cushioning technology in the midsole, providing responsive and cushioned steps for all-day comfort.',
  },
  {
    id: uuidv4(),
    name: "Blazer Mid '77 By You",
    image: '/shoes/blazer-mid-77-by-you.jpg',
    colourCount: 2,
    price: 209,
    description:
      "The Nike Blazer Mid '77 By You offers a retro look and feel to your shoe collection. Its classic design is inspired by the original 1977 Nike Blazer, and its vintage detailing gives it an old-school look. The Blazer Mid '77 By You is a versatile shoe that can be dressed up or down, making it a great addition to any wardrobe.",
  },

  {
    id: uuidv4(),
    name: 'Dunk High By You',
    image: '/shoes/dunk-high-by-you.jpg',
    colourCount: 2,
    price: 165,
    description:
      "With a classic high-top silhouette, the Dunk High By You offers endless possibilities for color and material combinations, allowing you to express your personal style in a truly one-of-a-kind way. The sneaker features a durable leather and synthetic upper, a supportive ankle strap, and a cushioned midsole for all-day comfort. Whether you're looking for a bold statement piece or a subtle addition to your wardrobe, the Dunk High By You is the perfect canvas for your creativity.",
  },
  {
    id: uuidv4(),
    name: 'Air Force 1 Low',
    image: '/shoes/air-force-1-low.jpg',
    colourCount: 3,
    price: 130,
    description:
      "The shoe features a simple and clean design with a low-cut silhouette, made with a leather upper and a rubber outsole for durability and traction. The Air Force 1 Low is known for its comfortable fit and versatility, making it a go-to shoe for casual wear. This particular model comes in a sleek white colorway, with the signature Nike Swoosh logo on the side. It's a good fit for every casual occasion",
  },
  {
    id: uuidv4(),
    name: 'Air Jordan 1 Retro High OG',
    image: '/shoes/air-jordan-1-retro-high-og.jpg',
    colourCount: 2,
    price: 180,
    description:
      'The Air Jordan 1 Retro High OG is known for its comfortable fit, durability, and timeless design. The shoe features a leather upper and the iconic Nike swoosh on the side. The AJ1 has been worn by basketball legends and has also become a popular fashion choice, making it a must-have for sneaker enthusiasts and fashionistas alike.',
  },
  {
    id: uuidv4(),
    name: 'Air Force 1 LV8',
    image: '/shoes/air-force-1-lv8.jpg',
    colourCount: 2,
    price: 130,
    description:
      'This sneaker boasts a low-cut silhouette for a streamlined look, while the perforations on the toe box provide breathability and comfort. The Air-Sole unit in the heel offers responsive cushioning, and the non-marking rubber outsole provides excellent traction and durability. With its iconic design and high-quality materials, the Air Force 1 LV8 is a timeless sneaker that is sure to elevate any outfit.',
  },
  {
    id: uuidv4(),
    name: 'Air Jordan 5 Retro',
    image: '/shoes/air-jordan-5-retro.jpg',
    colourCount: 1,
    price: 180,
    description:
      'This shoe is designed with a mix of leather and synthetic materials on the upper, providing a durable and comfortable fit. The shoe features a lace-up closure system for a secure fit, and a padded collar and tongue for added support and cushioning. The midsole is made of foam and features a visible Air-Sole unit in the heel for added comfort and responsiveness. The outsole is made of rubber and features a herringbone pattern for increased traction on the court.',
  },
  {
    id: uuidv4(),
    name: "Blazer Mid'77 Unlocked",
    image: '/shoes/blazer-mid-77-unlocked.jpg',
    colourCount: 1,
    price: 110,
    description:
      "With a classic silhouette, this shoe features a high-quality leather upper and a rubber sole that provides superior traction and durability. You can choose from a wide range of colors and materials for the upper, tongue, heel tab, swoosh, and laces. The shoe also comes with a special message hidden under the insole, making it truly unique and personal. Whether you're hitting the streets or dressing up for a special occasion, the Blazer Mid'77 Unlocked By You is sure to turn heads and make a statement.",
  },
];

export default products;
