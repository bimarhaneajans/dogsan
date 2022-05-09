import Dashboard from "layouts/dashboard";
import Home from "../src/components/Home"
import CustomerSupport from "examples/Icons/CustomerSupport";

import Bayiekle from "./layouts/Bayi/Bayiekle"
import Bayiliste from "./layouts/Bayi/bayiliste"
/* import Bayiguncelle from "./layouts/Bayi/Bayiguncelle"
 */
import Blogekle from "./layouts/Blog/Blogekle"
import Blogliste from "./layouts/Blog/Blogliste" 
import Degerekle from "./layouts/Deger/Degerekle"
import Degerliste from "./layouts/Deger/Degerliste" 
import Duyuruekle from "./layouts/Duyuru/Duyuruekle"
import Duyuruliste from "./layouts/Duyuru/Duyuruliste" 
import Etkinlikekle from "./layouts/Etkinlik/Etkinlikekle"
import Etkinlikliste from "./layouts/Etkinlik/Etkinlikliste" 
import Hakkimizdaekle from "./layouts/Hakkimizda/Hakkimizdaekle"
import Hakkimizdaliste from "./layouts/Hakkimizda/Hakkimizdaliste"  
import Iletisimekle from "./layouts/İletisim/İletisimekle"
import Iletisimliste from "./layouts/İletisim/İletisimliste"

import Igneekle from "./layouts/igne/igneekle"
import Igneliste from "./layouts/igne/igneliste"

import Katalogekle from "./layouts/Katalog/Katalogekle"
import Katalogliste from "./layouts/Katalog/Katalogliste"
import Kategoriekle from "./layouts/Kategori/Kategoriekle"
import Kategoriliste from "./layouts/Kategori/Kategoriliste"
import Mesajlarekle from "./layouts/Mesajlar/Mesajlarekle"
import Mesajlarliste from "./layouts/Mesajlar/Mesajlarliste"
import Sehirekle from "./layouts/Sehir/Sehirekle"
import Sehirliste from "./layouts/Sehir/Sehiriste" 
import Sliderekle from "./layouts/Slider/Sliderekle"
import Sliderliste from "./layouts/Slider/Sliderliste" 
import Sosyalssekle from "./layouts/Sosyalss/Sosyalssekle"
import Sosyalssliste from "./layouts/Sosyalss/Sosyalssliste" 
import Tarihceekle from "./layouts/Tarihce/Tarihceekle"
import Tarihceliste from "./layouts/Tarihce/Tarihceliste" 
import TarihiGaleriekle from "./layouts/TarihiGaleri/TarihiGaleriekle"
import TarihiGaleriliste from "./layouts/TarihiGaleri/TarihiGaleriiste" 
import Urunekle from "./layouts/Urun/Urunekle"
import Urunliste from "./layouts/Urun/Urunliste"





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
    isPrivate: false,
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
    type: "title",
    title: "Duyuru işlemleri",
    key: "account-pages4",
    isPrivate: true
  },
  {
    type: "collapse",
    name: "Duyuru Ekle",
    key: "DuyuruEkle",
    route: "/Duyuruekle",
    icon: <CustomerSupport size="12px" />,
    component: <Duyuruekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Duyuru listele",
    key: "Duyurulistele",
    route: "/Duyurulistele",
    icon: <CustomerSupport size="12px" />,
    component: <Duyuruliste />,
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
    name: "Etkinlik Ekle",
    key: "Etkinlikekle",
    route: "/Etkinlikekle",
    icon: <CustomerSupport size="12px" />,
    component: <Etkinlikekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Etkinlik Liste",
    key: "Etkinlikliste",
    route: "/Etkinlikliste",
    icon: <CustomerSupport size="12px" />,
    component: <Etkinlikliste />,
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
    name: "Hakkimizda Ekle",
    key: "Hakkimizdaekle",
    route: "/Hakkimizdaekle",
    icon: <CustomerSupport size="12px" />,
    component: <Hakkimizdaekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "HakkimizdaLliste",
    key: "Hakkimizda Liste",
    route: "/Hakkimizdaliste",
    icon: <CustomerSupport size="12px" />,
    component: <Hakkimizdaliste />,
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
    name: "İğne Ekle",
    key: "igneekle",
    route: "/igneekle",
    icon: <CustomerSupport size="12px" />,
    component: <Igneekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Igne liste",
    key: "Igneliste",
    route: "/Igneliste",
    icon: <CustomerSupport size="12px" />,
    component: <Igneliste />,
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
    key: "iletimekle",
    route: "/iletimekle",
    icon: <CustomerSupport size="12px" />,
    component: <Iletisimekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "İletişim",
    key: "Iletisimliste",
    route: "/Iletisimliste",
    icon: <CustomerSupport size="12px" />,
    component: <Iletisimliste />,
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
    name: "Katalogekle",
    key: "Katalogekle",
    route: "/Katalogekle",
    icon: <CustomerSupport size="12px" />,
    component: <Katalogekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Katalogliste",
    key: "Katalogliste",
    route: "/Katalogliste",
    icon: <CustomerSupport size="12px" />,
    component: <Katalogliste />,
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
    route: "/Kategoriekle",
    icon: <CustomerSupport size="12px" />,
    component: <Kategoriekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Kategori liste",
    key: "Kategoriliste",
    route: "/Kategoriliste",
    icon: <CustomerSupport size="12px" />,
    component: <Kategoriliste />,
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
    route: "/Mesajlarekle",
    icon: <CustomerSupport size="12px" />,
    component: <Mesajlarekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Mesajlar Liste",
    key: "Mesajlarliste",
    route: "/Mesajlarliste",
    icon: <CustomerSupport size="12px" />,
    component: <Mesajlarliste />,
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
    route: "/sehirekle",
    icon: <CustomerSupport size="12px" />,
    component: <Sehirekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Sehir liste",
    key: "Sehirliste",
    route: "/Sehirliste",
    icon: <CustomerSupport size="12px" />,
    component: <Sehirliste />,
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
    name: "Slider ekle",
    key: "Sliderekle",
    route: "/Slider",
    icon: <CustomerSupport size="12px" />,
    component: <Sliderekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Slider Liste",
    key: "Sliderliste",
    route: "/Sliderliste",
    icon: <CustomerSupport size="12px" />,
    component: <Sliderliste />,
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
    name: "Sosyal Sorumluluk Ekle",
    key: "Sosyals",
    route: "/Sosyalssekle",
    icon: <CustomerSupport size="12px" />,
    component: <Sosyalssekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Sosyal Sorumluluk  liste",
    key: "Sosyalssliste",
    route: "/Sosyalssliste",
    icon: <CustomerSupport size="12px" />,
    component: <Sosyalssliste />,
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
    name: "Tarihçe Ekle",
    key: "tarihceekle",
    route: "/tarihceekle",
    icon: <CustomerSupport size="12px" />,
    component: <Tarihceekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Tarihçe  liste",
    key: "Tarihceliste",
    route: "/Tarihceliste",
    icon: <CustomerSupport size="12px" />,
    component: <Tarihceliste />,
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
    name: "Tarihi Galeri Ekle",
    key: "TarihiGaleriekle",
    route: "/TarihiGaleriekle",
    icon: <CustomerSupport size="12px" />,
    component: <TarihiGaleriekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Tarihi Galeri Liste",
    key: "TarihiGaleriliste",
    route: "/TarihiGaleriliste",
    icon: <CustomerSupport size="12px" />,
    component: <TarihiGaleriliste />,
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
    name: "Urun ekle",
    key: "Urunekle",
    route: "/Urunekle",
    icon: <CustomerSupport size="12px" />,
    component: <Urunekle />,
    noCollapse: true,
    isPrivate: true,
  },
  {
    type: "collapse",
    name: "Urun liste",
    key: "Urunliste",
    route: "/Urunliste",
    icon: <CustomerSupport size="12px" />,
    component: <Urunliste />,
    noCollapse: true,
    isPrivate: true,
  },
 
];

export default routes;
