import Dashboard from "layouts/dashboard";
import CustomerSupport from "examples/Icons/CustomerSupport";

import Bayiekle from "./layouts/Bayi/Bayiekle"
import Bayiliste from "./layouts/Bayi/bayiliste"
import Bayiguncellle from "./layouts/Bayi/Bayiguncelle"

import Blogekle from "./layouts/Blog/Blogekle"
import Blogliste from "./layouts/Blog/Blogliste"
import Blogguncelle from "./layouts/Blog/Blogguncelle"


import Degerekle from "./layouts/Deger/Degerekle"
import Degerliste from "./layouts/Deger/Degerliste"
import Degerguncelle  from "./layouts/Deger/Degerguncelle"
 

import Duyuruekle from "./layouts/Duyuru/Duyuruekle"
import Duyuruliste from "./layouts/Duyuru/Duyuruliste"
import Duyuruguncelle  from "./layouts/Duyuru/Duyuruguncellle"


import Etkinlikekle from "./layouts/Etkinlik/Etkinlikekle"
import Etkinlikliste from "./layouts/Etkinlik/Etkinlikliste"
import Etkinlikguncellle  from "./layouts/Etkinlik/Etkinlikguncellle"

import Hakkimizdaekle from "./layouts/Hakkimizda/Hakkimizdaekle"
import Hakkimizdaliste from "./layouts/Hakkimizda/Hakkimizdaliste"
import Hakkimizdaguncelle  from "./layouts/Hakkimizda/Hakkimizdaguncellle"


import Iletisimekle from "./layouts/İletisim/Iletisimekle"
import Iletisimliste from "./layouts/İletisim/Iletisimliste"
import Iletisimguncelle  from "./layouts/İletisim/Iletisimguncellle"

import Igneekle from "./layouts/igne/Igneekle"
import Igneliste from "./layouts/igne/Igneekle"
import Igneguncelle  from "./layouts/igne/Igneekle"

import Katalogekle from "./layouts/Katalog/Katalogekle"
import Katalogliste from "./layouts/Katalog/Katalogliste"
import Katalogguncelle  from "./layouts/Katalog/Katalogguncellle"


import Kategoriekle from "./layouts/Kategori/Kategoriekle"
import Kategoriliste from "./layouts/Kategori/Kategoriliste"
import Kategoriguncelle  from "./layouts/Kategori"

import Mesajlarekle from "./layouts/Mesajlar/Mesajlarekle"
import Mesajlarliste from "./layouts/Mesajlar/Mesajlarliste"
import Mesajlarguncelle  from "./layouts/Mesajlar/Mesajlarguncellle"

import Sehirekle from "./layouts/Sehir/Sehirekle"
import Sehirliste from "./layouts/Sehir/Sehirliste"
import Sehirguncelle  from "./layouts/Sehir/Sehirguncellle"

import Sliderekle from "./layouts/Slider/Sliderekle"
import Sliderliste from "./layouts/Slider/Sliderliste"
import Sliderguncelle  from "./layouts/Slider/Sliderguncellle"


import Sosyalssekle from "./layouts/Sosyalssekle"
import Sosyalssliste from "./layouts/Sosyalssliste"
import Sosyalssguncelle  from "./layouts/Sosyalssguncelle"


import Tarihceekle from "./layouts/Tarihce/Tarihceekle"
import Tarihceliste from "./layouts/Tarihce/Tarihceliste"
import Tarihceguncelle  from "./layouts/Tarihce/Tarihceguncelle"


import Tarihcegiekle from "./layouts/TarihiGaleri/Tarihcegiekle"
import Tarihcegiliste from "./layouts/TarihiGaleri/Tarihcegiliste"
import Tarihcegiguncelle  from "./layouts/TarihiGaleri"


import Urunekle from "./layouts/Urun/Urunekle"
import Urunliste from "./layouts/Urun/Urunliste"
import Urunguncelle  from "./layouts/Urun/Urunguncelle"


//16 tane olmalı
const routes = [
  {
    type: "collapse",
    name: "dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <CustomerSupport size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Bayi işlemleri",
    key: "account-pages1",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "Bayi Ekle",
    key: "BayiEkle",
    route: "/Bayiekle",
    icon: <CustomerSupport size="12px" />,
    component: <Bayiekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Bayi Listesi",
    key: "Bayiliste",
    route: "/Bayiliste",
    icon: <CustomerSupport size="12px" />,
    component: <Bayiliste />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Bayi Guncelle",
    key: "Bayiguncelle",
    route: "/Bayiguncellle/:id",
    icon: <CustomerSupport size="12px" />,
    component: <Bayiguncellle />,
    noCollapse: true,
    isPrivate: true,
  },

  {
    type: "title",
    title: "Blog İşlemleri",
    key: "account-pages2",
    isPrivate: true
  },
  {
    type: "collapse",
    name: "Blog Ekle",
    key: "Blogekle",
    route: "/Blogekle",
    icon: <CustomerSupport size="12px" />,
    component: <Blogekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Blog Listele",
    key: "Blogelistele",
    route: "/Blogliste",
    icon: <CustomerSupport size="12px" />,
    component: <Blogliste />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Blog Liste",
    key: "Blogliste",
    route: "/Blogguncelle/:id",
    icon: <CustomerSupport size="12px" />,
    component: <Blogguncelle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Blog Guncelle",
    key: "Blogguncelle",
    route: "/Blogguncelle/:id",
    icon: <CustomerSupport size="12px" />,
    component: <Blogguncelle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Değer işlemleri",
    key: "account-pages3",
    isPrivate: true
  },
  {
    type: "collapse",
    name: "Deger",
    key: "Degerekle",
    route: "/Degerekle",
    icon: <CustomerSupport size="12px" />,
    component: <Degerekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Deger Listele",
    key: "Degerlistele",
    route: "/Degerlistele",
    icon: <CustomerSupport size="12px" />,
    component: <Degerliste />,
    noCollapse: true,
    isPrivate: true,
  },
    {
    type: "collapse",
    name: "Deger Guncelle",
    key: "Degerguncelle",
    route: "/Degerguncelle",
    icon: <CustomerSupport size="12px" />,
    component: <Degerguncelle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Duyuru işlemleri",
    key: "account-pages4",
    isPrivate: true
  },
  {
    type: "collapse",
    name: "Duyuru",
    key: "Duyuru",
    route: "/Duyuru",
    icon: <CustomerSupport size="12px" />,
    component: <Duyuru />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Etkinlik İşlemleri",
    key: "account-pages6",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "Etkinlik",
    key: "Etkinlik",
    route: "/Etkinlik",
    icon: <CustomerSupport size="12px" />,
    component: <Etkinlik />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Hakkımızda İşlemleri",
    key: "account-pages7",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "Hakkımızda",
    key: "Hakkımızda",
    route: "/Hakkimizda",
    icon: <CustomerSupport size="12px" />,
    component: <Hakkimizda />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "İğne İşlemleri",
    key: "account-pages8",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "İğne",
    key: "igne",
    route: "/igne",
    icon: <CustomerSupport size="12px" />,
    component: <Igne />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "İletişim İşlemleri",
    key: "account-pages9",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "İletişim",
    key: "iletim",
    route: "/iletim",
    icon: <CustomerSupport size="12px" />,
    component: <Iletisim />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Katalog İşlemleri",
    key: "account-pages10",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "Katalog",
    key: "Katalog",
    route: "/Katalog",
    icon: <CustomerSupport size="12px" />,
    component: <Katalog />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Kategori İşlemleri",
    key: "account-pages11",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "Kategori",
    key: "Kategori",
    route: "/Kategori",
    icon: <CustomerSupport size="12px" />,
    component: <Kategori />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Mesajlar",
    key: "account-pages12",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "Mesajlar",
    key: "Mesajlar",
    route: "/Mesajlar",
    icon: <CustomerSupport size="12px" />,
    component: <Mesajlar />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Şehir İşlemleri",
    key: "account-pages13",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "Şehir",
    key: "sehir",
    route: "/sehir",
    icon: <CustomerSupport size="12px" />,
    component: <Sehir />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Slider İşlemleri",
    key: "account-pages14",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "Slider",
    key: "Slider",
    route: "/Slider",
    icon: <CustomerSupport size="12px" />,
    component: <Slider />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Sosyal Sorumluluk İşlemleri",
    key: "account-pages15",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "Sosyal Sorumluluk",
    key: "Sosyals",
    route: "/Sosyalss",
    icon: <CustomerSupport size="12px" />,
    component: <Sosyalss />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Tarihçe İşlemleri",
    key: "account-pages16",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "Tarihçe",
    key: "tarihce",
    route: "/tarihce",
    icon: <CustomerSupport size="12px" />,
    component: <Tarihce />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Tarihçe Galeri İşlemleri",
    key: "account-pages17",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "Tarihi Galeri",
    key: "tarihcegi",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Tarihcegi />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "title",
    title: "Ürün İşlemleri",
    key: "account-pages18",
    isPrivate: true
  },

  {
    type: "collapse",
    name: "Urun",
    key: "Urun",
    route: "/Urun",
    icon: <CustomerSupport size="12px" />,
    component: <Urun />,
    noCollapse: true,
    isPrivate: true,
  },
];

export default routes;
