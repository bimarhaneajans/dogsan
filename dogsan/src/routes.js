import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";

import Bayiliste from "./layouts/Bayi/bayiliste"
import Bayiekle from "./layouts/Bayi/Bayiekle"
import Bayiguncellle from "./layouts/Bayi/Bayiguncelle"


import Deger from "./layouts/Deger"
import Etkinlik from "./layouts/Etkinlik"
import Duyuru from "./layouts/Duyuru"
import Hakkimizda from "./layouts/Hakkimizda"
import Igne from "./layouts/igne"
import Katalog from "./layouts/Katalog"
import Kategori from "./layouts/Kategori"
import Mesajlar from "./layouts/Mesajlar"
import Sehir from "./layouts/Sehir"
import Slider from "./layouts/Slider"
import Iletisim from "./layouts/İletisim"
import Sosyalss from "./layouts/Sosyalss"
import Tarihce from "./layouts/Tarihce"
import Tarihcegi from "./layouts/TarihiGaleri"
import Urun from "./layouts/Urun"

const routes = [
  {
    type: "collapse",
    name: "dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
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
    type: "title",
    title: "Değer işlemleri",
    key: "account-pages3",
    isPrivate: true
  },
  {
    type: "collapse",
    name: "Deger",
    key: "Deger",
    route: "/Deger",
    icon: <CustomerSupport size="12px" />,
    component: <Deger />,
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
