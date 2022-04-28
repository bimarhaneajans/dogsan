import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing"; 
import Profile from "layouts/profile"; 

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office"; 
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard"; 

 import Bayi from "layouts/Bayi"
 
const routes = [
   
  {
    type: "title",
    title: "Bayi işlemleri",
    key: "account-pages1",
    isPrivate: true
  },
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
    title: "Blog İşlemleri",
    key: "account-pages2",
    isPrivate: true
  },
  {
    type: "collapse",
    name: "Bayi",
    key: "Bayi",
    route: "/Bayi",
    icon: <CustomerSupport size="12px" />,
    component: <Bayi />,
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
    key: "Deger",
    route: "/billing",
    icon: <CustomerSupport size="12px" />,
    component: <Billing />,
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
    route: "/billing",
    icon: <CustomerSupport size="12px" />,
    component: <Billing />,
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
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
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
    route: "/Hakkımızda",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
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
    component: <Profile />,
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
    component: <Profile />,
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
    component: <Profile />,
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
    component: <Profile />,
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
    component: <Profile />,
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
    component: <Profile />,
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
    component: <Profile />,
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
    component: <Profile />,
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
    component: <Profile />,
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
    component: <Profile />,
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
    component: <Profile />,
    noCollapse: true,
    isPrivate: true,
  },
];

export default routes;
