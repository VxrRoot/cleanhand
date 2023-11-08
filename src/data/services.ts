export interface IService {
  id: number;
  slug: string;
  title: string;
  price: string;
  services: string[];
}

export const services: IService[] = [
  {
    id: 1,
    slug: "pomoc-domowa",
    title: "Pomoc domowa + pranie + prasowanie",
    price: "100",
    services: [
      "Odkurzanie i mycie podłóg",
      "Czyszczenie mebli i powierzchni",
      "Czyszczenie łazienek i toalet",
      "Czyszczenie włączników światła i klamek",
      "Czyszczenie kuchni i mycie naczyń",
      "Zmiana pościeli i składanie łóżka",
      "Prasowanie odzieży",
      "Pranie i składanie bielizny",
      "Porządkowanie i organizacja",
      "Zakupy i zarządzanie zapasami",
      "Opieka nad roślinami",
      "Wyrzucanie śmieci",
      "Inne obowiązki domowe w miarę potrzeb",
    ],
  },
  {
    id: 2,
    title: "Odświeżenie mieszkania compact",
    slug: "odswiezenie-compact",
    price: "100",
    services: ["Czyszczenie podłóg", "Odkurzanie i mycie", "Mycie podłóg"],
  },
  {
    id: 3,
    slug: "biura-i-zaklady",
    title: "Sprzątanie biur i zakładów usługowych",
    price: "100",
    services: [
      "Czyszczenie podłóg",
      "Odkurzanie i mycie",
      "Czyszczenie wyposażenia biura i powierzchni",
    ],
  },
  {
    id: 4,
    slug: "mieszkania-na-doby-airbnb-booking",
    title: "Mieszkania na doby Airbnb, Booking",
    price: "100",
    services: [
      "Czyszczenie przed zameldowaniem",
      "Zmiana pościeli i zaścielanie łóżek",
      "Wymiana ręczników",
    ],
  },
];
