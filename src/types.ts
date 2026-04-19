export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  images: string[];
  benefits: string[];
  stockStatus: string;
  deliveryTime: string;
  description: string;
  howToUse: string;
  ingredients: string;
  features: string[];
  precautions: string;
}

export const MOCK_PRODUCT: Product = {
  id: "1",
  name: "Inflador portátil inteligente de presión exacta",
  category: "Compresor de Aire Inalámbrico",
  price: 45.00,
  currency: "€",
  images: [
    "https://i.imgur.com/qqPbXCs.jpeg",
    "https://i.imgur.com/eUAxDNx.jpeg",
    "https://i.imgur.com/RQHMScs.jpeg",
    "https://i.imgur.com/cCPWIRJ.jpeg",
    "https://i.imgur.com/GADFBlK.png",
    "https://i.imgur.com/xrGuFDv.jpeg",
    "https://i.imgur.com/ektWnGQ.jpeg",
    "https://i.imgur.com/HeZFT5z.jpeg",
  ],
  benefits: [
    "🏎️ Infla en minutos, donde sea que estés",
    "🎯 Presión exacta, sin pasarte ni un PSI",
    "👜 Cabe en tu guantera, siempre listo",
    "🔌 Compatible con todo lo que necesites inflar"
  ],
  stockStatus: "¡Últimas unidades disponibles!",
  deliveryTime: "",
  description: "Nuestro Serum Facial Iluminador está formulado con una mezcla potente de Vitamina C y Ácido Hialurónico para revitalizar tu piel y devolverle su brillo natural.",
  howToUse: "Aplicar 2-3 gotas sobre el rostro limpio y seco por la mañana y por la noche. Masajear suavemente hasta su total absorción.",
  ingredients: "Aqua, Ascorbic Acid, Glycerin, Sodium Hyaluronate, Phenoxyethanol, Ethylhexylglycerin.",
  features: [
    "Vegano y Cruelty-free",
    "Sin parabenos ni sulfatos",
    "Envase reciclable",
    "Dermatológicamente testado"
  ],
  precautions: "Evitar el contacto directo con los ojos. En caso de irritación, suspender su uso y consultar con un médico. Mantener fuera del alcance de los niños."
};
